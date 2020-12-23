// React
import { useMemo } from 'react';

// Next
import Router from 'next/router';

// Three
import * as THREE from 'three';

// R3F Types
import { EventHandlers } from 'react-three-fiber/three-types';

//Interfaces
import MenuProps from '../../interfaces/threeScene/MenuOptions';

const MenuRip: React.FC<MenuProps> = ({
  link,
  name,
  imgFront,
  imgBack,
  scale,
  position,
  frontRotation,
  backRotation,
}) => {
  const [menuRipFront, menuRipBack] = useMemo(() => {
    const loader = new THREE.TextureLoader();
    return [loader.load(imgFront), loader.load(imgBack)];
  }, [imgFront, imgBack]);

  const handlePointerDown = (e: any) => {
    e.stopPropagation();
  };

  const handlePointerUp = () => {
    setTimeout(() => {
      Router.push(`/${link}`);
    }, 500);
  };

  const handleHover = (e: any, cursor: boolean) => {
    e.stopPropagation();
    if (cursor) {
      document.body.style.cursor = 'pointer';
    } else {
      document.body.style.cursor = 'default';
    }
  };

  return (
    <group>
      <mesh position={position} rotation={backRotation}>
        <planeBufferGeometry attach="geometry" args={scale} />
        <meshStandardMaterial attach="material" transparent>
          <primitive attach="map" object={menuRipBack} />
        </meshStandardMaterial>
      </mesh>
      <mesh
        name={name}
        position={position}
        rotation={frontRotation}
        onPointerDown={(e) => handlePointerDown(e)}
        onPointerUp={() => handlePointerUp()}
        onPointerOver={(e) => handleHover(e, true)}
        onPointerOut={(e) => handleHover(e, false)}
      >
        <planeBufferGeometry attach="geometry" args={scale} />
        <meshStandardMaterial attach="material" transparent>
          <primitive attach="map" object={menuRipFront} />
        </meshStandardMaterial>
      </mesh>
    </group>
  );
};

export default MenuRip;
