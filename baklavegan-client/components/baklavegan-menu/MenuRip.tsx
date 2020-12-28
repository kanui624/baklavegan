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
  imgLabel,
  ripScale,
  labelScale,
  ripPosition,
  labelPosition,
  frontRotation,
  backRotation,
}) => {
  const [menuRipFront, menuRipBack, menuRipLabel] = useMemo(() => {
    const loader = new THREE.TextureLoader();
    return [loader.load(imgFront), loader.load(imgBack), loader.load(imgLabel)];
  }, [imgFront, imgBack, imgLabel]);

  const handlePointerDown = (e: any) => {
    e.stopPropagation();
  };

  const handlePointerUp = (e: any) => {
    Router.push(`/${link}`);
    // setTimeout(() => {
    //   Router.push(`/${link}`);
    // }, 500);
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
      <mesh position={ripPosition} rotation={backRotation} renderOrder={1}>
        <planeBufferGeometry args={ripScale} />
        <meshStandardMaterial transparent={true}>
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
        <meshStandardMaterial transparent={true} depthWrite={false}>
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
        renderOrder={4}
      >
        <planeBufferGeometry args={labelScale} />
        <meshStandardMaterial transparent depthWrite={false}>
          <primitive attach="map" object={menuRipLabel} />
        </meshStandardMaterial>
      </mesh>
    </group>
  );
};

export default MenuRip;
