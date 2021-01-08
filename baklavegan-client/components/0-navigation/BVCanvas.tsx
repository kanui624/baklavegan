// React
import { Suspense, useLayoutEffect, memo, lazy } from 'react';

// React-Three-Fiber
import { Canvas, useThree } from 'react-three-fiber';

// Components
const Menu = lazy(() => import('./0-menu/Menu'));

// React Types
import { FC } from 'react';

// Component Level Types
import { CanvasProps } from './0-menu/0-types/CanvasProps';

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
  onCompile = () => {},
}) => {
  return (
    <Canvas
      camera={{ position: [1, 1, 1], fov: 15 }}
      pixelRatio={[1, 2]}
      concurrent
    >
      <Suspense fallback={null}>
        <MemoPrecompile onCompile={onCompile} />
        <Menu clicked={clicked} toggleClick={toggleClick} />
      </Suspense>
    </Canvas>
  );
};

const MemoBVCanvas = memo(BVCanvas);

export default MemoBVCanvas;
