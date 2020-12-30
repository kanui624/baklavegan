// React
import { FC } from 'react';

// Drei
import { OrbitControls } from '@react-three/drei';

const Orbit: FC = () => {
  return (
    <OrbitControls
      enableZoom={false}
      minPolarAngle={Math.PI / 2 - 0.4}
      maxPolarAngle={Math.PI / 2 - 0.4}
      autoRotateSpeed={-1.6}
      autoRotate
    />
  );
};

export default Orbit;
