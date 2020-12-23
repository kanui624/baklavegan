import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei/useGLTF';

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    tree005: THREE.Mesh;
    ['tree.005_1']: THREE.Mesh;
    ['tree.005_2']: THREE.Mesh;
    ['tree.005_3']: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    less: THREE.MeshStandardMaterial;
    Full: THREE.MeshStandardMaterial;
    None: THREE.MeshStandardMaterial;
  };
};

export default function Sapling(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF('/sapling.gltf') as GLTFResult;
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -0.74, 0]}
      rotation={[0, 3.5, 0]}
    >
      <group rotation={[0.52, 0.23, -0.72]} scale={[0.23, 0.23, 0.23]}>
        <mesh material={materials.Material} geometry={nodes.tree005.geometry} />
        <mesh
          material={materials.less}
          geometry={nodes['tree.005_1'].geometry}
        />
        <mesh
          material={materials.Full}
          geometry={nodes['tree.005_2'].geometry}
        />
        <mesh
          material={materials.None}
          geometry={nodes['tree.005_3'].geometry}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/sapling.gltf');
