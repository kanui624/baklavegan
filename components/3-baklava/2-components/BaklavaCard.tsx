// Next
import Image from "next/image";

const BaklavaCard = () => {
  return (
    <div className="baklavacard">
      <Image
        src="/test-images/baklava.png"
        alt="BaklavaTest"
        width={200}
        height={150}
      />
    </div>
  );
};

export default BaklavaCard;
