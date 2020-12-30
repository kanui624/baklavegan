// React
import { Suspense, FC } from 'react';

// React-Three-Fiber
import { Canvas } from 'react-three-fiber';

// Components
import Menu from './menu/Menu';

// Styles
import styles from '../../styles/BVCanvas/BVCanvas.module.scss';

const BVCanvas = () => {
  return (
    <Canvas
      className={styles.canvas}
      style={{ position: 'fixed' }}
      camera={{ position: [1, 1, 1], fov: 14 }}
      pixelRatio={2}
    >
      <Suspense fallback={null}>
        <Menu />
      </Suspense>
    </Canvas>
  );
};

export default BVCanvas;
