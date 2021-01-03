// React
import { useMemo } from 'react';

// Next
import Router from 'next/router';

// Three
import * as THREE from 'three';

// React Types
import { FC } from 'react';

// Component Level Types
import { MenuProps } from '../0-types/MenuProps';

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
    if (cursor) {
      setOrbitSpeed(0);
      document.body.style.cursor = 'pointer';
    } else {
      setOrbitSpeed(-1.6);
      document.body.style.cursor = 'default';
    }
  };

  return (
    <group>
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
    </group>
  );
};

export default MenuOption;
