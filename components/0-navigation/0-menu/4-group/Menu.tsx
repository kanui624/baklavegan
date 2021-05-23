// React
import { useState, useEffect, lazy, Fragment, memo } from 'react';

// React Spring
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';

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
  const [animateState, setAnimateState] = useState(0);
  const [orbitSpeed, setOrbitSpeed] = useState(-1.6);

  useEffect(() => {
    clicked ? setAnimateState(1) : setAnimateState(0);
    console.log(clicked);
    console.log(animateState);
  }, [clicked]);

  const { spring }: any = useSpring({
    spring: animateState,
    config: {
      mass: 35,
      velocity: 0,
      tension: 100,
      friction: clicked ? 120 : 127,
      precision: -0.002,
    },
    // position: clicked ? [0, 0.031, 0] : [0, -0.72, 0],
    // rotation: clicked ? [0, 0, 0] : [0, 3, 0],
  });

  const position = spring.to(
    [0, 0.5, 1],
    [
      [0, -0.72, 0],
      [0, 0.04, 0],
      [0, 0.031, 0],
    ]
  );

  const rotation = spring.to(
    [0, 1],
    [
      [0, 0, 0],
      [0, 3, 0],
    ]
  );
  return (
    <Fragment>
      <Orbit orbitSpeed={orbitSpeed} />
      <Lights />
      <a.group position={position} rotation={rotation}>
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
