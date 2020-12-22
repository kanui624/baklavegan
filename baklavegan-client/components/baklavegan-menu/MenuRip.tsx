// React
import { useMemo } from 'react';

// Next
import Router from 'next/router';

// Three
import * as THREE from 'three';

//

const MenuRip = ({
  link,
  label,
  imgFront,
  imgBack,
  scale,
  pos,
  frontRotate,
  backRotate,
}) => {
  const [menuRipFront, menuRipBack] = useMemo(() => {
    const loader = new THREE.TextureLoader();
    return [loader.load(imgFront), loader.load(imgBack)];
  }, [imgFront, imgBack]);

  const handlePointerDown = (e) => {
    e.stopPropagation();
  };

  const handlePointerUp = (e) => {
    setTimeout(() => {
      Router.push(`/${link}`);
    }, 500);
  };

  const handleHover = (e, cursor) => {
    e.stopPropagation();
    if (cursor) {
      document.body.style.cursor = 'pointer';
    } else {
      document.body.style.cursor = 'default';
    }
  };

  return (
    <group>
      <mesh position={pos} rotation={backRotate}>
        <planeBufferGeometry attach="geometry" args={scale} />
        <meshStandardMaterial attach="material" transparent>
          <primitive attach="map" object={menuRipBack} />
        </meshStandardMaterial>
      </mesh>
      <mesh
        name={label}
        position={pos}
        rotation={frontRotate}
        onPointerDown={(e) => handlePointerDown(e)}
        onPointerUp={(e) => handlePointerUp(e)}
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
