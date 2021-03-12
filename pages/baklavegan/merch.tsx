// Next
import Link from 'next/link';

// Custom Hooks
import { useWindowResize } from '../../customhooks/useWindowResize';

// React Types
import { FC } from 'react';

const merch: FC = () => {
  const [width, height] = useWindowResize();
  return (
    <span>
      Window size: {width} x {height}
    </span>
  );
};

export default merch;
