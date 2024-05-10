import Image from "next/image";

const LastCreated = () => {

  return (
    <div className="bg-white p-8 flex items-center justify-center flex-col gap-6 rounded-2xl">
      <div className="w-max bg-[#6EFFE5] text-center px-4 py-2 rounded-lg border-2 border-black text-sm font-semibold">
        Last Created
      </div>
      <div className="flex gap-2">
        <Image
          src="./creater-icon-IamGalt.svg"
          width={24}
          height={24}
          alt="creater icon"
        />
        <span className="font-medium">IamGalt</span>
        Created
        <span className="font-medium">Hypecoin</span>
        <Image
          src="./jetton-icon-hype-coin.svg"
          width={24}
          height={24}
          alt="jetton icon"
        />
        <span>on 12 May,24</span>
      </div>
    </div>
  )
}

export default LastCreated;
