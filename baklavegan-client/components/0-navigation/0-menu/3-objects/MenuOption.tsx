// React
import { useState, useEffect, useMemo } from 'react';

// Next
import Router from 'next/router';

// Three
import { TextureLoader } from 'three';

// React Spring
import { useSpring, a } from 'react-spring/three';

// React Types
import { FC } from 'react';

// Component Level Types
import { MenuOptionProps } from '../0-types/MenuOptionProps';

const MenuOption: FC<MenuOptionProps> = ({
  link,
  name,
  imgFront,
  imgBack,
  imgLabel,
  ripScale,
  labelScale,
  ripPosition,
  labelPosition,
  frontRotation,
  backRotation,
  setOrbitSpeed,
  toggleClick,
  handleTransition,
  clicked,
}) => {
  useEffect(() => {
    Router.prefetch(`/baklavegan/${link}`);
  }, [link]);

  const [menuRipFront, menuRipBack, menuRipLabel] = useMemo(() => {
    const loader = new TextureLoader();
    return [loader.load(imgFront), loader.load(imgBack), loader.load(imgLabel)];
  }, [imgFront, imgBack, imgLabel]);

  const [scaleState, setScaleState] = useState(false);
  const [pushed, setPushed] = useState(false);

  const handlePointerDown = (e: any) => {
    e.stopPropagation();
    setPushed(true);
  };

  const handlePointerUp = (e: any) => {
    setPushed(false);
    handleTransition();
    if (clicked) {
      Router.push(`/baklavegan/${link}`);
      setTimeout(() => {
        toggleClick();
      }, 100);
    }
  };

  const { push }: any = useSpring({
    config: {
      friction: 15,
    },
    push: pushed ? [1, 1, 1] : [1.08, 1.08, 1.08],
  });

  const handleHover = (e: any, cursor: boolean) => {
    e.stopPropagation();
    setScaleState(!scaleState);
    if (cursor) {
      setOrbitSpeed(0);
      document.body.style.cursor = 'pointer';
    } else {
      setOrbitSpeed(-1.6);
      document.body.style.cursor = 'default';
    }
  };

  const { scale }: any = useSpring({
    config: {
      friction: 15,
    },
    scale: scaleState ? [1.08, 1.08, 1.08] : [1, 1, 1],
  });

  return (
    <a.group scale={scale}>
      <a.group scale={push}>
        <mesh position={ripPosition} rotation={backRotation} renderOrder={1}>
          <planeBufferGeometry args={ripScale} />
          <meshStandardMaterial transparent>
            <primitive attach="map" object={menuRipBack} />
          </meshStandardMaterial>
        </mesh>
        <mesh
          name={name}
          position={ripPosition}
          rotation={frontRotation}
          renderOrder={2}
        >
          <planeBufferGeometry args={ripScale} />
          <meshStandardMaterial transparent>
            <primitive attach="map" object={menuRipFront} />
          </meshStandardMaterial>
        </mesh>
        <mesh
          position={labelPosition}
          rotation={frontRotation}
          onPointerDown={(e) => handlePointerDown(e)}
          onPointerUp={(e) => handlePointerUp(e)}
          onPointerOver={(e) => handleHover(e, true)}
          onPointerOut={(e) => handleHover(e, false)}
          renderOrder={3}
        >
          <planeBufferGeometry args={labelScale} />
          <meshStandardMaterial transparent>
            <primitive attach="map" object={menuRipLabel} />
          </meshStandardMaterial>
        </mesh>
      </a.group>
    </a.group>
  );
};

export default MenuOption;
