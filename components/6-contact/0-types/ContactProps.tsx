export interface SocialDataProps {
  id: number;
  link: string;
  image: string;
  width: number;
  height: number;
}

export interface ContactCardDataProps {
  id: number;
  name: string;
  textOne: string;
  textTwo: string;
  textThree: string;
  link?: string;
  animateFrom: string;
}

export interface ContactInfoCardProps {
  name: string;
  image: string;
  link?: string;
  textOne: string;
  textTwo: string;
  textThree?: string;
}
