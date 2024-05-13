import Image from "next/image";

const JettonSearch = () => {
  return (
    <div className="w-full h-16 relative">
      <input
        type="search"
        placeholder="Search for jettons"
        className="h-full w-full px-8 py-5 border-2 border-[#E3E8EF] rounded-[90px] disabled:cursor-not-allowed"
        disabled
      />
      <Image
        src="/search-icon.svg"
        width={24}
        height={24}
        alt="search icon for jettons"
        className="absolute top-5 right-8 opacity-25 cursor-not-allowed"
      />
    </div>
  );
};

export default JettonSearch;
