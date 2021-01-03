// Objects
import Sapling from './objects/Sapling';
import MenuRip from './objects/MenuRip';

// Controls
import Orbit from './controls/Orbit';
import Lights from './controls/Lights';

// Data
import { menuData } from './objects/MenuData';

// React-Three-Fiber Types
import { Euler, Vector3 } from 'react-three-fiber/three-types';

// React Types
import { FC } from 'react';

// Component Level Types
interface MenuDataProps {
  id: number;
  name: string;
  ripScale: number[];
  labelScale: number[];
  ripPosition: Vector3;
  labelPosition: Vector3;
  frontRotation: Euler;
  backRotation: Euler;
}

const Menu: FC = () => {
  return (
    <group position={[0, 0.035, 0]}>
      <Orbit />
      <Lights />
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
          <MenuRip
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
          />
        )
      )}
    </group>
  );
};

export default Menu;
