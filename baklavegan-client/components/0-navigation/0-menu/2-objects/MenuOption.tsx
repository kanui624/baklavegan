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
import { MenuProps } from '../0-types/MenuProps';
import { Vector3 } from 'react-three-fiber';

const MenuOption: FC<MenuProps> = ({
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
}) => {
  const [menuRipFront, menuRipBack, menuRipLabel] = useMemo(() => {
    const loader = new THREE.TextureLoader();
    return [loader.load(imgFront), loader.load(imgBack), loader.load(imgLabel)];
  }, [imgFront, imgBack, imgLabel]);

  const [labelScaleState, setLabelScaleState] = useState(false);

  const { scale }: any = useSpring({
    scale: labelScaleState ? [1.1, 1.1, 1.1] : [1, 1, 1],
  });

  const handlePointerDown = (e: any) => {
    e.stopPropagation();
  };

  const handlePointerUp = (e: any) => {
    setTimeout(() => {
      Router.push(`/baklavegan/${link}`);
    }, 1000);
    e;
  };

  const handleHover = (e: any, cursor: boolean) => {
    e.stopPropagation();
    setLabelScaleState(!labelScaleState);
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
