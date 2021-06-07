// React
import { useState, useRef, useEffect, lazy, Fragment, memo } from "react";

// React Spring
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

// Gsap
import gsap from "gsap";

// Objects
const Sapling = lazy(() => import("../3-objects/Sapling"));
const MenuOption = lazy(() => import("../3-objects/MenuOption"));

// Controls
import Orbit from "../2-controls/Orbit";
import Lights from "../2-controls/Lights";

// Data
import { menuData } from "../1-data/MenuData";

// React Types
import { FC } from "react";

// Component Level Types
import { MenuProps } from "../0-types/MenuProps";
import { MenuDataProps } from "../0-types/MenuDataProps";

const Menu: FC<MenuProps> = ({ clicked, toggleClick, handleTransition }) => {
  const menuRef = useRef();
  const [orbitSpeed, setOrbitSpeed] = useState(-1.6);

  const { rotation }: any = useSpring({
    config: {
      mass: 35,
      velocity: 0,
      tension: 100,
      friction: clicked ? 120 : 127,
      precision: -0.002,
    },
    rotation: clicked ? [0, 0, 0] : [0, 3, 0],
  });

  const menuModelIn = (modelPositionIn: number[]) => {
    gsap.to(modelPositionIn, {
      delay: 0.8,
      duration: 3,
      y: 0.031,
      ease: "back.out(1.07)",
    });
  };

  const menuModelOut = (modelPositonOut: number[]) => {
    gsap.to(modelPositonOut, { duration: 2, y: -0.72, ease: "back.in(1.1)" });
  };

  useEffect(() => {
    if (clicked) {
      menuModelIn((menuRef.current as any).position);
    } else {
      menuModelOut((menuRef.current as any).position);
    }
  }, [clicked]);

  return (
    <Fragment>
      <Orbit orbitSpeed={orbitSpeed} />
      <Lights />
      <a.group ref={menuRef} position-y={0.031} rotation={rotation}>
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
