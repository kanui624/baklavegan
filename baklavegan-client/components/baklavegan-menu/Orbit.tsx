// Drei
import { OrbitControls } from '@react-three/drei';

import React, { useRef } from 'react';

const Orbit: React.FC = () => {
  return (
    <OrbitControls
      enableZoom={false}
      minPolarAngle={Math.PI / 2 - 0.4}
      maxPolarAngle={Math.PI / 2 - 0.4}
      autoRotateSpeed={-1.5}
      autoRotate
    />
  );
};

export default Orbit;
