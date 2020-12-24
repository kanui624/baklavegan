// React
import { useMemo } from 'react';

// Next
import Router from 'next/router';

// Three
import * as THREE from 'three';

//Interfaces
import MenuProps from '../../interfaces/threeScene/Menu-Interfaces';

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

  const handlePointerUp = (e: any) => {
    setTimeout(() => {
      Router.push(`/${link}`);
    }, 500);
  };

  const handleHover = (e: any, cursor: boolean) => {
    console.log(e);
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
        <planeBufferGeometry args={scale} />
        <meshStandardMaterial transparent>
          <primitive attach="map" object={menuRipBack} />
        </meshStandardMaterial>
      </mesh>
      <mesh
        name={name}
        position={position}
        rotation={frontRotation}
        onPointerDown={(e) => handlePointerDown(e)}
        onPointerUp={(e) => handlePointerUp(e)}
        onPointerOver={(e) => handleHover(e, true)}
        onPointerOut={(e) => handleHover(e, false)}
      >
        <planeBufferGeometry args={scale} />
        <meshStandardMaterial transparent>
          <primitive attach="map" object={menuRipFront} />
        </meshStandardMaterial>
      </mesh>
    </group>
  );
};

export default MenuRip;
