// Next
import Image from "next/image";

// React Types
import { FC } from "react";

const BaklaSpinner: FC = () => {
  return (
    <div className="fixed treeattribs">
      <div className="spinnerparent">
        <div className="spinnerchild">
          <div className="attribanimation">
            <Image
              src="/2-images/2-baklava/0-attribs.png"
              alt="Baklavegan Product Attributes"
              width={700}
              height={592}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaklaSpinner;
