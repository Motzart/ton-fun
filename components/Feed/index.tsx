import { Card, CardBody, CardHeader, Divider, Link } from "@nextui-org/react";
import Image from 'next/image';
import { JettonsData } from './FeedMockupData';
import JettonSearch from "./JettonSearch";
import JettonSorting from "./JettonSorting";

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
      <div className="mt-8 pb-8 w-full justify-center items-center grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {JettonsData.map((item) => (
          <Link key={item.id} href={`/coin?=${item.id}`}>
            <Card key={item.id} className="w-[308px] h-[240px] border" shadow="none" isHoverable>
              <CardHeader className="flex gap-3 p-4">
                <Image
                  src={item.img}
                  height={60}
                  width={60}
                  alt={item.ticker}
                />
                <div className="flex flex-col">
                  <p className="text-lg font-bold">{item.name}</p>
                  <p className="text-sm">created by: {item.author}</p>
                  <p className="text-sm">market cap: {item.marketCap}</p>
                </div>
              </CardHeader>
              <Divider className="m-auto w-[92%]" />
              <CardBody className="p-4">
                <p className="text-sm">
                  <span className="font-semibold">Ticker: ${item.ticker}.</span> {item.desc}
                </p>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Feed;
