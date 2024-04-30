// @ts-nocheck
import React from 'react';
import { Tabs, Tab, Card, CardBody, CardHeader, CardFooter, Button, Input } from "@nextui-org/react";
import BalanceInput from '@/components/BuySellWidget/BalanceInput';

const BuySellWidget = () => {
  const [selected, setSelected] = React.useState("buy");
  const selectedColor = selected === 'buy' ? 'w-full bg-success' : 'w-full bg-red-400';

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
          <BalanceInput />
        </Tab>
        <Tab key="sell" title="Sell">
          <BalanceInput />
        </Tab>
      </Tabs>
    </div>
  )
}

export default BuySellWidget;
