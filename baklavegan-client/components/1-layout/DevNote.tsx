// React
import { useEffect, Fragment } from 'react';

// GSAP
import { showDevNote } from '../../animations/1-layout/DevNoteAnimations';

// React Types
import { FC } from 'react';

// Component Level Types
interface DevNoteProps {
  devPageClicked: string;
}

const DevNote: FC<DevNoteProps> = ({ devPageClicked }) => {
  return (
    <div className="devnotetext fixed flex justify-center items-center flex-col">
      <h1>The {devPageClicked} page is</h1>
      <h1>currently in development</h1>
    </div>
  );
};

export default DevNote;
