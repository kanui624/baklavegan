// React
import { useState } from 'react';

// Components
import Orbit from './Orbit';
import Lights from './Lights';
import Sapling from './Sapling';
import MenuRip from './MenuRip';

// React-Three-Fiber Types
import { Euler, Vector3 } from 'react-three-fiber/three-types';

// Data
import { menuData } from './MenuData';

interface MenuDataProps {
  id?: number;
  name: string;
  ripScale: any;
  labelScale: any;
  ripPosition: Vector3;
  labelPosition: Vector3;
  frontRotation: Euler;
  backRotation: Euler;
}

const Menu: React.FC = () => {
  const [orbit, setOrbit] = useState(-1.6);

  const startStopRotation = (startStop: number) => {
    setOrbit(startStop);
  };

  return (
    <group position={[0, 0.035, 0]}>
      <Orbit startStop={orbit} />
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
            startStopRotation={startStopRotation}
          />
        )
      )}
    </group>
  );
};

export default Menu;
