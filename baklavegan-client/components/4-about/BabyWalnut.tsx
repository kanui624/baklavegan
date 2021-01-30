// Next
import Image from 'next/image';

// Comoponent level types
interface BabyWalnutProps {
  id: number;
  classname: string;
}

const BabyWalnut: any = () => {
  const babyWalnuts: BabyWalnutProps[] = [
    { id: 0, classname: 'zero' },
    { id: 1, classname: 'one' },
    { id: 2, classname: 'two' },
    { id: 3, classname: 'three' },
    { id: 4, classname: 'four' },
    { id: 5, classname: 'five' },
    { id: 6, classname: 'six' },
    { id: 7, classname: 'seven' },
    { id: 8, classname: 'eight' },
    { id: 9, classname: 'nine' },
  ];
  return babyWalnuts.map(({ id, classname }: BabyWalnutProps) => {
    return (
      <div key={id} className={`bw${classname} babywalnuts fixed`}>
        {/* <h1>{id}</h1> */}
        <Image
          src="/2-images/3-about/2-babywalnut.png"
          alt="Babywalnut"
          width={40}
          height={53}
        />
      </div>
    );
  });
};

export default BabyWalnut;
