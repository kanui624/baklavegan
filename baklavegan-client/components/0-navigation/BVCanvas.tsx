// React
import { Suspense } from 'react';

// React-Three-Fiber
import { Canvas } from 'react-three-fiber';

// Components
import Menu from './0-menu/Menu';

// Styles
import styles from '../../styles/BVCanvas/BVCanvas.module.scss';

// React Types
import { FC } from 'react';

// Component Level Types
import { CanvasProps } from './0-menu/0-types/CanvasProps';

const BVCanvas: FC<CanvasProps> = ({ clicked, setClicked }) => {
  return (
    <Canvas
      className={styles.canvas}
      style={{ position: 'fixed' }}
      camera={{ position: [1, 1, 1], fov: 14 }}
      pixelRatio={2}
    >
      <Suspense fallback={null}>
        <Menu clicked={clicked} setClicked={setClicked} />
      </Suspense>
    </Canvas>
  );
};

export default BVCanvas;
