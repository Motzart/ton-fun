import Image from "next/image";
import SortingArrow from "../../public/sorting-arrow.svg"

const JettonSorting = () => {
  return (
    <div className="flex gap-8">
      <div className="flex items-center gap-2 cursor-pointer">
        <span className="font-semibold">Sort</span>
        <Image
          src={SortingArrow}
          width={12}
          height={6}
          alt="sorting arrow"
        />
      </div>
      <div className="flex items-center gap-2 cursor-pointer">
        <span className="font-semibold">Order</span>
        <Image
          src={SortingArrow}
          width={12}
          height={6}
          alt="sorting arrow"
        />
      </div>
    </div>
  );
};

export default JettonSorting;
