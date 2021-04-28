// React
import { Fragment } from "react";

//Next
import Link from "next/link";
import Image from "next/image";

// React Types
import { FC } from "react";

// Component Level Types
import { ContactInfoCardProps } from "../0-types/ContactProps";

const ContactInfo: FC<ContactInfoCardProps> = ({
  name,
  image,
  link = null,
  textOne,
  textTwo,
  textThree = null,
}) => {
  return (
    <div className={`${name}card contactcard`}>
      <div className={`${name}bgimage ${name}to fixed bgimage`}>
        <Image src={image} alt={name} layout="fill" objectFit="contain" />
      </div>
      <div className={`${name}textpos ${name}to textpos fixed`}>
        <div
          className={`${name}textstyle textstyle flex flex-col justify-center items-center`}
        >
          <p>{textOne}</p>
          <p>
            {textTwo && textTwo}{" "}
            {link && (
              // <Link href="/baklavegan/faq">
              //   <a>
              //     <u>{link}</u>
              //   </a>
              // </Link>
              <Link href="#">
                <a>
                  <u>{link}</u>
                </a>
              </Link>
            )}{" "}
            {textThree && textThree}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
