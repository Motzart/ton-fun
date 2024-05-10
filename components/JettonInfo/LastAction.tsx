import Image from "next/image";

const LastAction = () => {

  return (
    <div className="bg-white p-8 flex items-center justify-center flex-col gap-6 rounded-2xl">
      <div className="w-max bg-[#FFDDA9] text-center px-4 py-2 rounded-lg border-2 border-black text-sm font-semibold">
        Last Action
      </div>
      <div className="flex gap-2">
        <Image
          src="./creater-icon-playittodeath.svg"
          width={24}
          height={24}
          alt="creater icon"
        />
        <span className="font-medium">playittodeath</span>
        Sold
        <span className="font-medium">7,05 Ton</span>
        of
        <span className="font-medium">Duck Coin</span>
        <Image
          src="./jetton-icon-duck-coin.svg"
          width={24}
          height={24}
          alt="jetton icon"
        />
      </div>
    </div>
  )
}

export default LastAction;
