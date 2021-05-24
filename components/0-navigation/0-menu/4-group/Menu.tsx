// React
import { useState, useRef, lazy, Fragment, memo } from 'react';

// React Spring
import { a, useSpring } from '@react-spring/three';

// Objects
const Sapling = lazy(() => import('../3-objects/Sapling'));
const MenuOption = lazy(() => import('../3-objects/MenuOption'));

// Controls
import Orbit from '../2-controls/Orbit';
import Lights from '../2-controls/Lights';

// Data
import { menuData } from '../1-data/MenuData';

// React Types
import { FC } from 'react';

// Component Level Types
import { MenuProps } from '../0-types/MenuProps';
import { MenuDataProps } from '../0-types/MenuDataProps';

const Menu: FC<MenuProps> = ({ clicked, toggleClick, handleTransition }) => {
  const [orbitSpeed, setOrbitSpeed] = useState(-1.6);

  const { rotationY }: any = useSpring({
    config: {
      mass: 35,
      velocity: 0,
      tension: 100,
      friction: clicked ? 120 : 127,
      precision: -0.002,
    },
    rotationY: clicked ? 0 : 3,
  });

  const { spring }: any = useSpring({
    spring: Number(clicked),
    config: {
      mass: 1,
      tension: 8,
      friction: 14,
      precision: 0.002,
      //      // velocity: 0,
      // // tension: 70,
      // friction: 30,
      // // frequency: 2,
      // duration: 3000,
    },
  });

  let positionY = spring.to([0, 0.8, 1], [-0.72, 0.08, 0.031]);

  return (
    <Fragment>
      <Orbit orbitSpeed={orbitSpeed} />
      <Lights />
      <a.group ref={} position-y={positionY} rotation-y={rotationY}>
        <Sapling />
        {menuData.map(
          ({
            id,
            name,
            ripPosition,
            labelPosition,
            frontRotation,
            backRotation,
            ripScale,
            labelScale,
          }: MenuDataProps) => (
            <MenuOption
              key={id}
              name={name}
              link={name}
              ripPosition={ripPosition}
              labelPosition={labelPosition}
              frontRotation={frontRotation}
              backRotation={backRotation}
              ripScale={ripScale}
              labelScale={labelScale}
              imgFront={`/1-menuops/0-front/${id}-${name}-f.png`}
              imgBack={`/1-menuops/1-back/${id}-${name}-b.png`}
              imgLabel={`/1-menuops/2-label/${id}-${name}-l.png`}
              setOrbitSpeed={setOrbitSpeed}
              toggleClick={toggleClick}
              handleTransition={handleTransition}
              clicked={clicked}
            />
          )
        )}
      </a.group>
    </Fragment>
  );
};

const MemoMenu = memo(Menu);

export default MemoMenu;
