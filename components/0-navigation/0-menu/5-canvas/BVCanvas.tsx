// React
import { Suspense, useState, useEffect, useLayoutEffect } from 'react';

// React-Three-Fiber
import { Canvas, useThree } from '@react-three/fiber';

// Resize Observer
import { ResizeObserver } from '@juggle/resize-observer';

// Components
import Menu from '../4-group/Menu';

// React Types
import { FC } from 'react';

// Component Level Types
import { CanvasProps } from '../0-types/CanvasProps';
import { Options as ResizeOptions } from 'react-use-measure';

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
      dpr={2}
    >
      <Suspense fallback={null}>
        <Precompile onCompile={onCompile} />
        <Menu
          clicked={clicked}
          toggleClick={toggleClick}
          handleTransition={handleTransition}
        />
      </Suspense>
    </Canvas>
  );
};

export default BVCanvas;
