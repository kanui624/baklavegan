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
          scale,
          position,
          frontRotation,
          backRotation,
        }: MenuDataProps) => (
          <MenuRip
            key={id}
            name={name}
            link={name}
            scale={scale}
            imgFront={`/menurips/front/${name}.png`}
            imgBack={`/menurips/back/${name}-back.png`}
            position={position}
            frontRotation={frontRotation}
            backRotation={backRotation}
          />
        )
      )}
    </group>
  );
};

export default Menu;
