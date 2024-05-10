// @ts-nocheck
import React from 'react';
import { Tabs, Tab } from "@nextui-org/react";
import BalanceInput from '@/components/BuySellWidget/BalanceInput';

const BuySellWidget = () => {
  const [selected, setSelected] = React.useState("buy");
  const selectedColor = selected === 'buy' ? 'w-full bg-success' : 'w-full bg-red-400';

  const handleButtonTrade = () => {
    console.log('go to trade');
  }

  return (
    <div className="flex w-full flex-col">
      <Tabs
        fullWidth
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected}
        classNames={{
          cursor: selectedColor,
        }}
      >
        <Tab key="buy" title="Buy">
          <BalanceInput handleConfirmButton={handleButtonTrade}/>
        </Tab>
        <Tab key="sell" title="Sell">
          <BalanceInput handleConfirmButton={handleButtonTrade}/>
        </Tab>
      </Tabs>
    </div>
  )
}

export default BuySellWidget;
