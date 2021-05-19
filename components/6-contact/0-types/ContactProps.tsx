export interface SocialDataProps {
  id: number;
  link: string;
  image: string;
}

export interface ContactInfoDataProps {
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
