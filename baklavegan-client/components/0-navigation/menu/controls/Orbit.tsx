// Drei
import { OrbitControls } from '@react-three/drei';

// React Types
import { FC } from 'react';

const Orbit: FC = () => {
  return (
    <OrbitControls
      enableZoom={false}
      minPolarAngle={Math.PI / 2 - 0.4}
      maxPolarAngle={Math.PI / 2 - 0.4}
      autoRotateSpeed={-1.7}
      autoRotate
    />
  );
};

export default Orbit;
