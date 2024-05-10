import MostPopular from "./MostPopular";
import LastAction from "./LastAction";
import LastCreated from "./LastCreated";

const JettonInfo = () => {

  return (
    <div className="mt-8 w-full rounded-2xl grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
      <MostPopular />
      <div className="flex flex-col gap-[18px]">
        <LastAction />
        <LastCreated />
      </div>
    </div>
  )
}

export default JettonInfo;
