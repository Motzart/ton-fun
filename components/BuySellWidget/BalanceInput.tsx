import React from 'react';
import { Button, Card, CardBody, CardFooter, Chip, Input } from '@nextui-org/react';

const BalanceInput = () => {
  const percentShortcuts = [10, 25, 50, 75];
  const handlePercentChange = (sliderPercent: number) => {
    console.log(sliderPercent)
  }
  return (
    <Card shadow="sm">
      <CardBody>
        <div className="flex flex-row justify-between mb-4">
          <Button size="sm">
            Switch to ...
          </Button>
          <Button size="sm">
            Set max slippage
          </Button>
        </div>

        <Input
          type="number"
          placeholder="0.00"
          labelPlacement="outside"
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">USDT</span>
            </div>
          }
        />
        <div className="flex flex-row justify-between my-4">
          {percentShortcuts.map((percentShortcut) => {
            const handleClick = () => {
              handlePercentChange(percentShortcut);
            };

            return (
              <Chip radius="full" color="warning"
                key={percentShortcut}
                onClick={handleClick}
                // isDisabled={!account || isTxPending}
              >
                {`${percentShortcut}%`}
              </Chip>
            );
          })}
          <Chip radius="full" color="warning"
            onClick={() => handlePercentChange(100)}
          >
            Max
          </Chip>
        </div>
      </CardBody>
      <CardFooter>
        <Button color="success" fullWidth>
          Place Trade
        </Button>
      </CardFooter>
    </Card>
  )
};

export default BalanceInput;
