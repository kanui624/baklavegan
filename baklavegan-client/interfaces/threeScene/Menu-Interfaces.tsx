import { Euler, Vector3 } from 'react-three-fiber/three-types';
import * as THREE from 'three';

export default interface MenuDataProps {
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
