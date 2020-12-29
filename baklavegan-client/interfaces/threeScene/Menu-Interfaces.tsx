import { Euler, Vector3 } from 'react-three-fiber/three-types';

export default interface MenuDataProps {
  id?: number;
  name: string;
  ripScale: any;
  labelScale: any;
  ripPosition: Vector3;
  labelPosition: Vector3;
  frontRotation: Euler;
  backRotation: Euler;
}

export default interface MenuProps {
  link: string;
  imgFront: string;
  imgBack: string;
  imgLabel: string;
  stop: (stopit: number) => void;
}

export default interface OrbitProps {
  stopParam?: number;
}
