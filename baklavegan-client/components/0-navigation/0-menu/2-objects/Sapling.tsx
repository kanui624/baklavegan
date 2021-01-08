import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei/useGLTF';

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

// Component Level Types
type Sapling = GLTF & {
  nodes: {
    Sapling_1: THREE.Mesh;
    Sapling_2: THREE.Mesh;
    Sapling_3: THREE.Mesh;
    Sapling_4: THREE.Mesh;
  };
  materials: {
    ['0-Stem']: THREE.MeshStandardMaterial;
    ['2-Half']: THREE.MeshStandardMaterial;
    ['1-Full']: THREE.MeshStandardMaterial;
    ['3-None']: THREE.MeshStandardMaterial;
  };
};
const Sapling = (props: JSX.IntrinsicElements['group']) => {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF('/0-gltf/sapling.gltf') as Sapling;
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -0.73, 0]}
      rotation={[0, 3.5, 0]}
    >
      <group rotation={[0.52, 0.23, -0.72]} scale={[0.23, 0.23, 0.23]}>
        <mesh
          material={materials['0-Stem']}
          geometry={nodes.Sapling_1.geometry}
        />
        <mesh
          material={materials['2-Half']}
          geometry={nodes.Sapling_2.geometry}
        />
        <mesh
          material={materials['1-Full']}
          geometry={nodes.Sapling_3.geometry}
        />
        <mesh
          material={materials['3-None']}
          geometry={nodes.Sapling_4.geometry}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/0-gltf/sapling.gltf');

export default Sapling;
