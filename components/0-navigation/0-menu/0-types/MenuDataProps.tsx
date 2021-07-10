// React-Three-Fiber Types
import { Euler, Vector3 } from '@react-three/fiber';

export interface MenuDataProps {
  id: number;
  name: string;
  ripScale: number[];
  labelScale: number[];
  ripPosition: Vector3;
  labelPosition: Vector3;
  frontRotation: Euler;
  backRotation: Euler;
}
