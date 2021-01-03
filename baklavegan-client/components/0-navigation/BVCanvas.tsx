// React
import { Suspense } from 'react';

// React-Three-Fiber
import { Canvas } from 'react-three-fiber';

// Components
import Menu from './0-menu/Menu';

// React Types
import { FC } from 'react';

// Styles
import styles from '../../styles/BVCanvas/BVCanvas.module.scss';

const BVCanvas: FC = () => {
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
