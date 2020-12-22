// Drei
import { useGLTF } from '@react-three/drei';

const Plant = () => {
  const gtlf = useGLTF('/gltf/sapling-v6.gltf');
  return (
    <mesh position={[0, -0.74, 0]} rotation={[0, 3.5, 0]}>
      <primitive object={gtlf.scene} dispose={null} />;
    </mesh>
  );
};

export default Plant;
