// React
import { FC } from 'react';

// Redux
import { useSelector } from 'react-redux';

// Redux Types
import { RootState } from '../../../../redux/rootReducer';

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
