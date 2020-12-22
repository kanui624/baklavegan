// React
import { Suspense } from 'react';

// React-Three-Fiber
import { Canvas } from 'react-three-fiber';

// Components
import Menu from './Menu';

// Styles
import styles from '../../styles/BVCanvas/BVCanvas.module.scss';

const BVCanvas = () => {
  return (
    <Canvas
      className={styles.canvas}
      style={{ position: 'fixed' }}
      shadowMap
      colorManagement
      camera={{ position: [1, 1, 1], fov: 13 }}
      pixelRatio={2}
    >
      <Suspense fallback={null}>
        <Menu />
      </Suspense>
    </Canvas>
  );
};

export default BVCanvas;
