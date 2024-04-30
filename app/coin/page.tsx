'use client';
import { Link } from '@nextui-org/react';
import { Progress } from "@nextui-org/progress";
import TradingViewWidget from '@/components/TradingViewWidget';
import BuySellWidget from '@/components/BuySellWidget';

export default function Coin() {
  return (
    <>
      <div className="flex w-full justify-center items-center py-10 sm:py-10 md:py-12 lg:py-12 xl:py-24 2xl:py-24" >
        <Link className="text-2xl font-bold" href="/">{"[<-- GO BACK]"}</Link>
      </div>
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-7 sm:col-span-7 md:col-span-4 lg:col-span-4 xl:col-span-5 2xl:col-span-5">
          <div className="h-[400px]">
            <TradingViewWidget />
          </div>
          <div>Comments - Coming Soon</div>
        </div>
        <div className="col-span-7 sm:col-span-7 md:col-span-3 lg:col-span-3 xl:col-span-2 2xl:col-span-2">
          <div>
            <BuySellWidget />
          </div>
          <div>[twitter] [telegram] [website]</div>
          <div>Icon - Description</div>
          <div>bonding curve progress: 60%</div>
          <Progress aria-label="Loading..." value={60} className="max-w-md"/>
          <div>when the market cap reaches $55,833 all the liquidity from the bonding curve will be deposited into Raydium and burned. progression increases as the price goes up.
            there are 789,104,940 tokens still available for sale in the bonding curve and there is 0.112 SOL in the bonding curve.</div>
          <div>king of the hill progress: 10%</div>
          <Progress aria-label="Loading..." value={10} className="max-w-md"/>
          <div>dethrone the current king at a $26,978 mcap</div>
          <div>Holder distribution</div>

        </div>
      </div>
    </>
  )
}
