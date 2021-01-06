// React
import { Suspense, lazy, useState } from 'react';

// React Three Fiber
import { useFrame } from 'react-three-fiber';

// React Spring
import { useSpring, a } from 'react-spring/three';

// Objects
const Sapling = lazy(() => import('./2-objects/Sapling'));
const MenuOption = lazy(() => import('./2-objects/MenuOption'));

// Controls
import Orbit from './1-controls/Orbit';
import Lights from './1-controls/Lights';

// Data
import { menuData } from './2-objects/MenuData';

// React Types
import { FC } from 'react';

// Component Level Types
import { MenuProps } from './0-types/MenuProps';
import { MenuDataProps } from './0-types/MenuDataProps';

const Menu: FC<MenuProps> = ({ clicked, toggleClick }) => {
  const [orbitSpeed, setOrbitSpeed] = useState(-1.6);

  const { position, rotation }: any = useSpring({
    config: {
      velocity: 0,
      friction: 100,
      mass: 7,
      clamp: true,
    },
    position: clicked ? [0, 0.035, 0] : [0, -1.5, 0],
    rotation: clicked ? [0, 0, 0] : [0, 3, 0],
  });

  return (
    <a.group position={position} rotation={rotation}>
      <Orbit orbitSpeed={orbitSpeed} />
      <Lights />
      <group>
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
              imgFront={`/2-menuops/0-front/${id}-${name}-f.png`}
              imgBack={`/2-menuops/1-back/${id}-${name}-b.png`}
              imgLabel={`/2-menuops/2-label/${id}-${name}-l.png`}
              setOrbitSpeed={setOrbitSpeed}
              toggleClick={toggleClick}
            />
          )
        )}
      </group>
    </a.group>
  );
};

export default Menu;
