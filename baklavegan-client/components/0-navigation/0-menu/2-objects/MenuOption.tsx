// React
import { useState, useMemo } from 'react';

// Next
import Router from 'next/router';

// Three
import * as THREE from 'three';

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
  clicked,
  setClicked,
}) => {
  const [menuRipFront, menuRipBack, menuRipLabel] = useMemo(() => {
    const loader = new THREE.TextureLoader();
    return [loader.load(imgFront), loader.load(imgBack), loader.load(imgLabel)];
  }, [imgFront, imgBack, imgLabel]);

  const [scaleState, setScaleState] = useState(false);

  const { scale }: any = useSpring({
    scale: scaleState ? [1.08, 1.08, 1.08] : [1, 1, 1],
  });

  const handlePointerDown = (e: any) => {
    e.stopPropagation();
  };

  const handlePointerUp = (e: any) => {
    setClicked(false);
    Router.push(`/baklavegan/${link}`);
  };

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

  return (
    <a.group scale={scale}>
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
  );
};

export default MenuOption;
