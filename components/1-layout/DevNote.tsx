// React
import { useState, useEffect } from 'react';
// React Types
import { FC } from 'react';

// Component Level Types
interface DevNoteProps {
  pageClicked: string;
}

const DevNote: FC<DevNoteProps> = ({ pageClicked }) => {
  const [devNote, setDevNote] = useState('');

  useEffect(() => {
    if (pageClicked === 'animalrights') {
      setDevNote('animal rights');
    } else if (pageClicked === 'about' || pageClicked === 'contact') {
      null;
    } else {
      setDevNote(pageClicked);
    }
  }, [pageClicked]);

  return (
    <div className="devnotetext fixed flex justify-center items-center flex-col opacity-0">
      <h1>The {devNote} page is</h1>
      <h1>currently in development</h1>
    </div>
  );
};

export default DevNote;
