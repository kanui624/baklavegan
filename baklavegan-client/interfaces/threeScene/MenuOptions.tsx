import { Euler, Vector3 } from 'react-three-fiber/three-types';

export default interface MenuData {
  id?: number;
  name: string;
  scale: any;
  position: Vector3;
  frontRotation: Euler;
  backRotation: Euler;
}

export default interface MenuProps {
  link: string;
  imgFront: string;
  imgBack: string;
}
