// React
import { FC } from 'react';

// Next
import Link from 'next/link';

import { useStore } from 'react-redux';

const about: FC = () => {
  console.log(useStore().getState());
  return (
    <Link href="/">
      <a>You're on about link page click to go back</a>
    </Link>
  );
};

export default about;
