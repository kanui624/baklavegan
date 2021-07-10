// React
import { useRef } from 'react';

// Three
import { Mesh, MeshStandardMaterial, Group } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

// Drei
import { useGLTF } from '@react-three/drei/core/useGLTF';

type SaplingProps = GLTF & {
  nodes: {
    Sapling_1: Mesh;
    Sapling_2: Mesh;
    Sapling_3: Mesh;
    Sapling_4: Mesh;
  };
  materials: {
    ['0-Stem']: MeshStandardMaterial;
    ['2-Half']: MeshStandardMaterial;
    ['1-Full']: MeshStandardMaterial;
    ['3-None']: MeshStandardMaterial;
  };
};

const Sapling = (props: JSX.IntrinsicElements['group']) => {
  const group = useRef<Group>();
  const { nodes, materials } = useGLTF('/0-gltf/sapling.gltf') as SaplingProps;
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -0.73, 0]}
      rotation={[0, 3.5, 0]}
    >
      <group name="Scene">
        <group
          name="Sapling"
          rotation={[0.52, 0.23, -0.72]}
          scale={[0.23, 0.23, 0.23]}
          userData={{ name: 'Sapling' }}
        >
          <mesh
            name="Sapling_1"
            material={materials['0-Stem']}
            geometry={nodes.Sapling_1.geometry}
          />
          <mesh
            name="Sapling_2"
            material={materials['2-Half']}
            geometry={nodes.Sapling_2.geometry}
          />
          <mesh
            name="Sapling_3"
            material={materials['1-Full']}
            geometry={nodes.Sapling_3.geometry}
          />
          <mesh
            name="Sapling_4"
            material={materials['3-None']}
            geometry={nodes.Sapling_4.geometry}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/0-gltf/sapling.gltf');

export default Sapling;
