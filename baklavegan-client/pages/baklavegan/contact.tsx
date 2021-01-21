// Next
import Link from 'next/link';
import Image from 'next/image';

// Data
import { socialData } from '../../components/6-contact/SocialData';

// Styles
import styles from '../../styles/Pages/contact.module.scss';

// React Types
import { FC } from 'react';

// Component level Types
interface SocialDataProps {
  id: number;
  link: string;
  image: string;
  width: number;
  height: number;
}

const contact: FC = () => {
  return (
    <div className="absolute bottom-24 -inset-x-0 container mx-auto">
      <div className="flex flex-row justify-evenly">
        {socialData.map(
          ({ id, link, image, width, height }: SocialDataProps) => (
            <Link key={id} href={link}>
              <a>
                <Image
                  src={`/2-images/5-contact/${image}.png`}
                  alt={image}
                  width={width}
                  height={height}
                />
              </a>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default contact;
