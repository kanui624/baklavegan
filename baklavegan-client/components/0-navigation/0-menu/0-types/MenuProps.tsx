// React-Three-Fiber Types
import { Euler, Vector3 } from 'react-three-fiber/three-types';

export interface MenuProps {
  link: string;
  name: string;
  imgFront: string;
  imgBack: string;
  imgLabel: string;
  ripScale: any;
  labelScale: any;
  ripPosition: Vector3;
  labelPosition: Vector3;
  frontRotation: Euler;
  backRotation: Euler;
  setOrbitSpeed: (orbitSpeed: number) => void;
}
