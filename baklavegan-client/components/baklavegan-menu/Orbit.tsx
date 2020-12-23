// Drei
import { OrbitControls } from '@react-three/drei';

const Orbit: React.FC = () => {
  return (
    <OrbitControls
      enableZoom={false}
      minPolarAngle={Math.PI / 2 - 0.4}
      maxPolarAngle={Math.PI / 2 - 0.4}
      autoRotate
    />
  );
};

export default Orbit;
