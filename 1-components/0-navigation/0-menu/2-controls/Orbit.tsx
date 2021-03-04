// Drei
import { OrbitControls } from '@react-three/drei';

// React Types
import { FC } from 'react';

// Component Level Types
import { OrbitProps } from '../0-types/OrbitProps';

const Orbit: FC<OrbitProps> = ({ orbitSpeed }) => {
  return (
    <OrbitControls
      enableZoom={false}
      minPolarAngle={Math.PI / 2 - 0.4}
      maxPolarAngle={Math.PI / 2 - 0.4}
      autoRotateSpeed={orbitSpeed}
      autoRotate
    />
  );
};

export default Orbit;
