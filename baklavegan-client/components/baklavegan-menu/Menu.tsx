// Components
import Orbit from './Orbit';
import Lights from './Lights';
import Sapling from './Sapling';
import MenuRip from './MenuRip';

// Interfaces
import MenuDataProps from '../../interfaces/threeScene/Menu-Interfaces';

// Data
import { menuData } from './MenuOptions-Data';

const Menu: React.FC = () => {
  return (
    <group position={[0, 0, 0]}>
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
            imgFront={`/menurips/0-front/${id}-${name}-f.png`}
            imgBack={`/menurips/1-back/${id}-${name}-b.png`}
            imgLabel={`/menurips/2-label/${id}-${name}-l.png`}
          />
        )
      )}
    </group>
  );
};

export default Menu;
