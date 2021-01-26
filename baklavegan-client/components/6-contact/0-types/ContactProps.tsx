export interface SocialDataProps {
  id: number;
  link: string;
  image: string;
  width: number;
  height: number;
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
  id: number;
  name: string;
  textOne: string;
  textTwo: string;
  textThree?: string;
  link?: string;
  image: string;
  initialBgPos: string;
  textOnePos: string;
  textTwoPos: string;
  textThreePos?: string;
  linkPos?: string;
  animateFrom: string;
}
