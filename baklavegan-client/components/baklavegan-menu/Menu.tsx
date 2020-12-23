// Components
// import Orbit from './Orbit';
// import Lights from './Lights';
// import Plant from './Plant';
import MenuRip from './MenuRip';

// Interfaces
import MenuData from '../../interfaces/threeScene/MenuOptions';

// Data
import { menuOptions } from './MenuOptions-Data';

const Menu: React.FC = () => {
  return (
    <group position={[0, 0, 0]}>
      {/* <Orbit /> */}
      {/* <Lights />
      <Plant /> */}
      {menuOptions.map(
        ({
          id,
          name,
          scale,
          position,
          frontRotation,
          backRotation,
        }: MenuData) => (
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
