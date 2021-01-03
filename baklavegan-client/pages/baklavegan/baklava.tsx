// Next
import Link from 'next/link';

// React Types
import { FC } from 'react';

const baklava: FC = () => {
  return (
    <Link href="/">
      <a>You're on baklava link page click to go back</a>
    </Link>
  );
};

export default baklava;
