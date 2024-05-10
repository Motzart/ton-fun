import Image from "next/image";

const MostPopular = () => {

  return (
    <div className="flex gap-8 p-8 rounded-2xl bg-white">
      <Image
        src="/meme-povel-durev-divan.png"
        width={256}
        height={256}
        alt="most popular jetton image"
      />
      <div className="self-center">
        <div className="bg-[#81FFB3] text-center px-4 py-3 rounded-lg border-2 border-black text-[15px] font-semibold">King of the Hill</div>
        <div className="font-bold text-2xl mt-8 mb-4">Povel Durev</div>
        <div>Created by TheGOD</div>
        <div>Market cap: $10 M</div>
        <div>Ticker: $durev</div>
      </div>
    </div>
  )
}

export default MostPopular;
