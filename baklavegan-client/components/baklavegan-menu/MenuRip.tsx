// React
import { useMemo } from 'react';

// Next
import Router from 'next/router';

// React-Three-Fiber
import { useThree } from 'react-three-fiber';

// Three
import * as THREE from 'three';

// React-Three-Fiber Types
import { Euler, Vector3 } from 'react-three-fiber/three-types';

interface MenuProps {
  link: string;
  name: string;
  imgFront: string;
  imgBack: string;
  imgLabel: string;
  ripScale: any;
  labelScale: any;
  ripPosition: Vector3;
  labelPosition: Vector3;
  frontRotation: Euler;
  backRotation: Euler;
  startStopRotation: (startStop: number) => void;
}

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
  startStopRotation,
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
      Router.push(`/${link}`);
    }, 500);
  };

  const handleHover = (e: any, cursor: boolean) => {
    e.stopPropagation();
    if (cursor) {
      startStopRotation(0);
      document.body.style.cursor = 'pointer';
    } else {
      startStopRotation(-1.6);
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
        <meshStandardMaterial transparent={true}>
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

export default MenuRip;
