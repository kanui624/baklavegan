// React
import { FC } from 'react';

// Redux
import { useSelector } from 'react-redux';

// Next Redux Wrapper
import { wrapper } from '../../../../redux/store';

// Drei
import { OrbitControls } from '@react-three/drei';
import { autoRotate } from '../../../../redux/slices/orbitControlSlice';

// Types
interface OrbitProps {
  staticProps: number;
}

const Orbit: FC<OrbitProps> = () => {
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
