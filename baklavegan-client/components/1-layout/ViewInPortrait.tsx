// React Types
import { FC } from "react";

// Component Level Types
interface ViewInPortraitProps {
  classN: string;
  descrip: string;
}

const ViewInPortrait: FC<ViewInPortraitProps> = ({ classN, descrip }) => {
  return (
    <h1 className={`${classN} fixed viewinportraitstyle`}>
      view our {descrip} in portrait mode
    </h1>
  );
};

export default ViewInPortrait;
