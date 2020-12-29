// React
import { useState } from 'react';

// Components
import Orbit from './Orbit';
import Lights from './Lights';
import Sapling from './Sapling';
import MenuRip from './MenuRip';

// Interfaces
import MenuDataProps from '../../interfaces/threeScene/Menu-Interfaces';

// Data
import { menuData } from './MenuData';

const Menu: React.FC = () => {
  const [oRotation, setOrotation] = useState(-1.6);

  const stopRotation = (stopit: number) => {
    setOrotation(stopit);
  };

  return (
    <group position={[0, 0.035, 0]}>
      <Orbit stopParam={oRotation} />
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
            stop={stopRotation}
          />
        )
      )}
    </group>
  );
};

export default Menu;
