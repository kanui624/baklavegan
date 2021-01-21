// Next
import Link from 'next/link';
import Image from 'next/image';

// Styles
import styles from '../../styles/Pages/contact.module.scss';

// React Types
import { FC } from 'react';

const contact = () => {
  const socials = [
    {
      id: 0,
      link: 'https://www.instagram.com/baklavegan/',
      image: 'instagram',
      width: 80,
      height: 80,
    },
    {
      id: 1,
      link: 'https://www.youtube.com/',
      image: 'youtube',
      width: 114,
      height: 80,
    },
    {
      id: 2,
      link: 'https://twitter.com/',
      image: 'twitter',
      width: 80,
      height: 80,
    },
    {
      id: 3,
      link: 'https://www.facebook.com/',
      image: 'facebook',
      width: 80,
      height: 80,
    },
  ];
  return (
    <div className="absolute bottom-24 -inset-x-0 container mx-auto">
      <div className="flex flex-row justify-evenly">
        {socials.map(({ id, link, image, width, height }) => (
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
        ))}
      </div>
    </div>
  );
};

export default contact;
