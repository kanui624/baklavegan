// React
import { useEffect, useRef } from "react";
// Next
import Image from "next/image";

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Data
import { Baklava } from "../1-data/Baklava";

// Component Level Types
import { BaklavaProps } from "../0-types/BaklavaProps";

const BaklavaCard = () => {
  return (
    <div className="baklavacard fixed inset-0 max-w-full">
      {Baklava.map(({ id, name }: BaklavaProps) => {
        return (
          <div
            key={id}
            className={`flex flex-col justify-center items-center h-full max-w-full text-black text-4xl pb-32`}
          >
            <Image
              src="/test-images/baklava.png"
              alt="BaklavaTest"
              width={200}
              height={150}
            />
            {name}
          </div>
        );
      })}
    </div>
  );
};

export default BaklavaCard;
