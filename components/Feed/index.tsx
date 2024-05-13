import JettonSearch from "./JettonSearch";
import JettonSorting from "./JettonSorting";
import JettonList from "./JettonList";

const Feed = () => {
  return (
    <>
      <div className="mt-16">
        <JettonSearch />
      </div>
      <div className="flex justify-between mt-8">
        <h2 className="text-2xl font-semibold">New Jettons Out Here</h2>
        <JettonSorting />
      </div>
      <div className="mt-8 pb-8">
        <JettonList />
      </div>
    </>
  );
}

export default Feed;
