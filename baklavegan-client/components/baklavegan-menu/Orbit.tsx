// React
import React, { useRef } from 'react';

// Drei
import { OrbitControls } from '@react-three/drei';

// Interfaces
import OrbitProps from '../../interfaces/threeScene/Menu-Interfaces';

interface sp {
  stopParam: number;
}

const Orbit: React.FC<sp> = ({ stopParam }) => {
  return (
    <OrbitControls
      enableZoom={false}
      minPolarAngle={Math.PI / 2 - 0.4}
      maxPolarAngle={Math.PI / 2 - 0.4}
      autoRotateSpeed={stopParam}
      autoRotate
    />
  );
};

export default Orbit;
