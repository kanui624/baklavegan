// React
import { useMemo } from 'react';

// Next
import Router from 'next/router';

// Three
import * as THREE from 'three';

// React-Three-Fiber Types
import { Euler, Vector3 } from 'react-three-fiber/three-types';

// React Types
import { FC } from 'react';

// Component Level Types
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
  setOrbitSpeed: (orbitSpeed: number) => void;
}

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
  // Load Textures
  const [menuRipFront, menuRipBack, menuRipLabel] = useMemo(() => {
    const loader = new THREE.TextureLoader();
    return [loader.load(imgFront), loader.load(imgBack), loader.load(imgLabel)];
  }, [imgFront, imgBack, imgLabel]);

  // On Pointer/Click Down
  const handlePointerDown = (e: any) => {
    e.stopPropagation();
  };

  // On Pointer/Click Release
  const handlePointerUp = (e: any) => {
    setTimeout(() => {
      Router.push(`/baklavegan/${link}`);
    }, 1000);
    e;
  };

  // On Hover
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
      // Menu Option Back Texture Plane
      <mesh position={ripPosition} rotation={backRotation} renderOrder={1}>
        <planeBufferGeometry args={ripScale} />
        <meshStandardMaterial transparent>
          <primitive attach="map" object={menuRipBack} />
        </meshStandardMaterial>
      </mesh>
      // Menu Option Front Texture Plane
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
      // Menu Option Label Texture Plane
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
