// Drei
import { useGLTF } from '@react-three/drei';

const Sapling = () => {
  const gtlf = useGLTF('/sapling.gltf');
  return (
    <mesh position={[0, -0.74, 0]} rotation={[0, 3.5, 0]}>
      <primitive object={gtlf.scene} />;
    </mesh>
  );
};

export default Sapling;
