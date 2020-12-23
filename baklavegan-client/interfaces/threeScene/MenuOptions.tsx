import {
  Euler,
  Vector3,
  PlaneBufferGeometryProps,
} from 'react-three-fiber/three-types';

export default interface MenuData {
  id: number;
  name: string;
  scale: PlaneBufferGeometryProps;
  position: Vector3;
  frontRotation: Euler;
  backRotation: Euler;
}

export default interface MenuProps {}
