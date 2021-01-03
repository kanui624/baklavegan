// Next
import Link from 'next/link';

// React Types
import { FC } from 'react';

const about: FC = () => {
  return (
    <Link href="/">
      <a>You're on about link page click to go back</a>
    </Link>
  );
};

export default about;
