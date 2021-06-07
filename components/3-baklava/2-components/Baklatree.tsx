// Next
import Image from "next/image";

// React Types
import { FC } from "react";

const Baklatree: FC = () => {
  return (
    <div className="fixed baklatree treeattribs">
      <Image
        src="/2-images/2-baklava/1-baklatreegan.png"
        alt="Baklatreegan Tree"
        width={749}
        height={850}
      />
    </div>
  );
};

export default Baklatree;
