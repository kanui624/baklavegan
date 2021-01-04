// React
import { Suspense, useEffect, useState } from 'react';

// React-Three-Fiber
import { Canvas } from 'react-three-fiber';

// Gsap
import { gsap } from 'gsap';

// Components
import Menu from './0-menu/Menu';

// Styles
import styles from '../../styles/BVCanvas/BVCanvas.module.scss';

// React Types
import { FC } from 'react';

// Component Level Types
import { CanvasProps } from './0-menu/0-types/CanvasProps';

const BVCanvas: FC<CanvasProps> = ({ clicked, setClicked }) => {
  const [pR, setPR] = useState(0);
  // const tlOut = gsap.timeline();

  // useEffect(() => {
  //   if (!clicked) {
  //     tlOut.to('.canvasopacity', { opacity: '0%', duration: 2 });
  //     tlOut.to('.canvasopacity', { display: 'none' });
  //   } else {
  //     tlOut.reverse();
  //   }
  // }, [clicked]);

  useEffect(() => {
    setPR(window.devicePixelRatio);
  }, []);

  return (
    <Canvas
      className={`${styles.canvas} canvasopacity`}
      style={{ position: 'absolute' }}
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
