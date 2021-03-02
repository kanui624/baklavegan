// React
import { Suspense, useLayoutEffect, memo, lazy } from 'react';

// React-Three-Fiber
import { Canvas, useThree } from 'react-three-fiber';

// Resize Observer
import { ResizeObserver } from '@juggle/resize-observer';

// Components
const Menu = lazy(() => import('../4-group/Menu'));

// React Types
import { FC } from 'react';

// Component Level Types
import { CanvasProps } from '../0-types/CanvasProps';
import { ResizeOptions } from 'react-three-fiber/canvas';

const Precompile = ({ onCompile = () => {} }) => {
  const { gl, scene, camera } = useThree();
  useLayoutEffect(() => {
    gl.compile(scene, camera);
    setTimeout(() => {
      onCompile();
    }, 1000);
  }, []);
  return null;
};

const MemoPrecompile = memo(Precompile);

const BVCanvas: FC<CanvasProps> = ({
  clicked,
  toggleClick,
  handleTransition,
  onCompile = () => {},
}) => {
  return (
    <Canvas
      resize={{ polyfill: ResizeObserver } as ResizeOptions}
      camera={{ position: [1, 1, 1], fov: 15 }}
      pixelRatio={2}
    >
      <Suspense fallback={null}>
        <MemoPrecompile onCompile={onCompile} />
        <Menu
          clicked={clicked}
          toggleClick={toggleClick}
          handleTransition={handleTransition}
        />
      </Suspense>
    </Canvas>
  );
};

const MemoBVCanvas = memo(BVCanvas);

export default MemoBVCanvas;
