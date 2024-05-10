import { Card, CardBody, CardHeader, Divider, Link } from "@nextui-org/react";
import Image from 'next/image';
import ImgIcon from '../../public/image123.svg'

const Feed = () => {
  const feed = Array.from({length: 51}, (_, i) => i + 1);

  return (
    <div className="w-full justify-center items-center grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {feed.map((item) => (
        <Link key={item} href={`/coin?=${item}`}>
        <Card key={item} className="max-w-[400px] border" shadow="none" isHoverable>
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={60}
              src={ImgIcon}
              width={60}
            />
            <div className="flex flex-col">
              <p className="text-md">created by: mr.Frog</p>
              <p className="text-small text-default-500">market cap: 3,44K</p>
            </div>
          </CardHeader>
          <Divider/>
          <CardBody>
            <p>$HAMLET IS A COMMUNITY TOKEN SUPPORTED BY THE REAL HAMLET THE PARROT! HAMLET BOASTS 4.5+ MILLION FOLLOWERS ACROSS SOCIAL CHANNELS INSTAGRAM, TIKTOK AND YOUTUBE. Community Links: https://t.me/HamletOnSol https://twitter.com/HamletOnSol https://hamletonsol.com/</p>
          </CardBody>
        </Card>
        </Link>
      ))}
    </div>);
}

export default Feed;
