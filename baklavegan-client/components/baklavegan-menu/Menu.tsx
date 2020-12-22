// Components
import Orbit from './Orbit';
import Lights from './Lights';
import Plant from './Plant';
import MenuRip from './MenuRip';

const Menu = () => {
  const menuOptions = [
    {
      id: 0,
      name: 'baklava',
      scale: [0.18, 0.18],
      position: [0.2, 0.055, 0.05],
      frontRotation: [0, 1.2, 0],
      backRotation: [0, Math.PI + 1.2, 0],
    },
    {
      id: 1,
      name: 'animalrights',
      scale: [0.17, 0.17],
      position: [0.01, 0.05, 0.25],
      frontRotation: [0, 0, 0],
      backRotation: [0, Math.PI, 0],
    },
    {
      id: 2,
      name: 'about',
      scale: [0.18, 0.18],
      position: [0.1, 0.1, -0.18],
      frontRotation: [0, Math.PI - 0.45, 0],
      backRotation: [0, Math.PI * 2 - 0.45, 0],
    },
    {
      id: 3,
      name: 'merch',
      scale: [0.17, 0.17],
      position: [-0.1, 0, -0.18],
      frontRotation: [0.05, Math.PI + 0.4, 0],
      backRotation: [0.05, Math.PI * 2 + 0.4, 0],
    },
    {
      id: 4,
      name: 'contact',
      scale: [0.18, 0.18],
      position: [-0.2, 0.01, 0.07],
      frontRotation: [0, Math.PI + 1.9, 0],
      backRotation: [0, Math.PI * 2 + 1.9, 0],
    },
  ];
  return (
    <group position={[0, 0, 0]}>
      <Lights />
      <Plant />
      {menuOptions.map(
        ({ id, name, scale, position, frontRotation, backRotation }) => (
          <MenuRip
            key={id}
            label={name}
            link={name}
            scale={scale}
            imgFront={`/menurips/front/${name}.png`}
            imgBack={`/menurips/back/${name}-back.png`}
            pos={position}
            frontRotate={frontRotation}
            backRotate={backRotation}
          />
        )
      )}
      <Orbit />
    </group>
  );
};

export default Menu;
