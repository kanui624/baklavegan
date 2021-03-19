// React
import { forwardRef } from "react";
// Next
import Link from "next/link";

// React Types
import { FC } from "react";

// Component Level Types
import { AboutPageDataProps } from "@/components/4-about/0-types/AboutPageDataProps";

const AboutPage: FC<AboutPageDataProps> = forwardRef(
  ({ id, texta, textb, svg, link }, ref) => {
    return (
      <div
        // @ts-ignore
        ref={ref}
        className={`aboutpage inset-0 h-full max-w-full text-center `}
      >
        <div className="flex justify-center items-center h-full flex-col">
          {texta && (
            <div className={`page${id}texta abouttext px-8 py-8`}>
              {texta}{" "}
              {link && (
                <Link href={`/baklavegan/${link}`}>
                  <a className="aboutbooklink">
                    <u>{link}</u>
                  </a>
                </Link>
              )}{" "}
              {textb && textb}
            </div>
          )}
          {svg && (
            <img
              className={`svg${id} aboutsvg opacity-90`}
              src={`/3-svgs/about/${svg}.svg`}
              alt={svg}
            />
          )}
        </div>
      </div>
    );
  }
);

export default AboutPage;
