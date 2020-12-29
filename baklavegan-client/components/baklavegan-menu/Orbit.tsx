// React
import React from 'react';

// Drei
import { OrbitControls } from '@react-three/drei';

interface startStopParam {
  startStop: number;
}

const Orbit: React.FC<startStopParam> = ({ startStop }) => {
  return (
    <OrbitControls
      enableZoom={false}
      minPolarAngle={Math.PI / 2 - 0.4}
      maxPolarAngle={Math.PI / 2 - 0.4}
      autoRotateSpeed={startStop}
      autoRotate
    />
  );
};

export default Orbit;
