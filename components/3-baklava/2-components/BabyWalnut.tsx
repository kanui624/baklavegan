// Next
import Image from "next/image";

// Data
import { babyWalnuts } from "../1-data/BabyWalnutData";

// Comoponent level types
import { BabyWalnutProps } from "../0-types/BabyWalnutProps";

const BabyWalnut: any = () => {
  return babyWalnuts.map(({ id, classname }: BabyWalnutProps) => {
    return (
      <div key={id} className={`bw${classname} babywalnuts fixed`}>
        <Image
          src="/2-images/2-baklava/2-babywalnut.png"
          alt="Babywalnut"
          width={40}
          height={53}
        />
      </div>
    );
  });
};

export default BabyWalnut;
