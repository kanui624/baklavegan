// Next
import { NextPage } from 'next';

import { connect } from 'react-redux';

// Redux
import { useSelector, useStore } from 'react-redux';

// Next Redux Wrapper
import { wrapper } from '../../../../redux/store';
import { RootState } from '../../../../redux/rootReducer';
import orbitControl from '../../../../redux/slices/orbitControlSlice';

// Drei
import { OrbitControls } from '@react-three/drei';

const Orbit: NextPage = () => {
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
