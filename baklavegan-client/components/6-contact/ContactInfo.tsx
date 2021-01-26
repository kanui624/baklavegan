// React
import { Fragment } from 'react';

//Next
import Link from 'next/link';
import Image from 'next/image';

// React Types
import { FC } from 'react';

// Component Level Types
import { ContactInfoCardProps } from './0-types/ContactProps';

const ContactInfo: FC<ContactInfoCardProps> = ({
  id,
  name,
  textOne,
  textTwo,
  textThree,
  link = null,
  image,
  initialBgPos,
  textOnePos,
  textTwoPos,
  textThreePos,
  linkPos,
  animateFrom,
}) => {
  return (
    <Fragment>
      <div className={`fixed ${initialBgPos} ${animateFrom}`}>
        <Image src={image} alt={name} width={624} height={125} />
      </div>
      <div className={`fixed ${animateFrom}`}>
        <p className={`fixed ${textOnePos}`}>{textOne}</p>
        <p className={`fixed ${textTwoPos}`}>{textTwo}</p>
        {link && (
          <p className={`fixed ${linkPos}`}>
            <Link href="/baklavegan/faq">
              <a>
                <u>{link}</u>
              </a>
            </Link>
          </p>
        )}
        {textThree && <p className={`fixed ${textThreePos}`}>{textThree}</p>}
      </div>
    </Fragment>
  );
};

export default ContactInfo;

//   <div className={`fixed ${initialTextPosition} ${animateFrom}`}>
//     <p>
//       {textOne} {textTwo}{' '}
//       <Link href="/baklavegan/faq">
//         <a>
//           <u>{link}</u>
//         </a>
//       </Link>
//     </p>
//   </div>;
