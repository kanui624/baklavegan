// React Types
import { FC } from 'react';

// Component Level Types
interface DevNoteProps {
  pageClicked: string;
}

const DevNote: FC<DevNoteProps> = ({ pageClicked }) => {
  const devLink =
    pageClicked === 'animalrights' ? 'animal rights' : pageClicked;
  return (
    <div className="devnotetext fixed flex justify-center items-center flex-col opacity-0">
      <h1>The {devLink} page is</h1>
      <h1>currently in development</h1>
    </div>
  );
};

export default DevNote;
