import React from "react";
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

const CardItem = ({ data }) => {
  const calculatePercentageChange = (investedAmount, currentValue) => {
    if (investedAmount === 0) {
      return null;
    }

    const percentageChange =
      ((currentValue - investedAmount) / investedAmount) * 100;
    return percentageChange;
  };

  const investedAmount = data?.data?.total_invested || 0;
  const currentValue = investedAmount + (data?.data?.profit_loss || 0);

  const percentageChange = calculatePercentageChange(
    investedAmount,
    currentValue
  );
  return (
    <div className="flex flex-col lg:flex-row gap-2 w-full">
      <Card
        className="w-xs shadow-lg rounded-lg"
        decoration="top"
        decorationColor="indigo"
      >
        <Flex justifyContent="between" alignItems="center">
          <Text className="">Current</Text>
          {percentageChange > 0 ? (
            <BadgeDelta
              deltaType="moderateIncrease"
              className="bg-green-100 p-1 rounded-lg px-2"
            >
              + {percentageChange.toFixed(2)} %
            </BadgeDelta>
          ) : (
            <BadgeDelta
              deltaType="moderateIncrease"
              className="bg-red-100 p-1 rounded-lg px-2"
            >
              - {percentageChange.toFixed(2)} %
            </BadgeDelta>
          )}
        </Flex>
        <Metric className="text-lg">
          ₹ {data?.data?.total_invested + data?.data?.profit_loss}
        </Metric>
      </Card>
      <Card
        className="w-xs shadow-lg rounded-lg"
        decoration="top"
        decorationColor="indigo"
      >
        <Flex justifyContent="between" alignItems="center">
          <Text className="">Invested</Text>
          {percentageChange > 0 ? (
            <BadgeDelta
              deltaType="moderateIncrease"
              className="bg-green-100 p-1 rounded-lg px-2"
            >
              + {percentageChange.toFixed(2)} %
            </BadgeDelta>
          ) : (
            <BadgeDelta
              deltaType="moderateIncrease"
              className="bg-red-100 p-1 rounded-lg px-2"
            >
              - {percentageChange.toFixed(2)} %
            </BadgeDelta>
          )}
        </Flex>
        <Metric className="text-lg">₹ {data?.data?.total_invested}</Metric>
      </Card>
      <Card
        className="w-xs shadow-lg rounded-lg"
        decoration="top"
        decorationColor="indigo"
      >
        <Flex justifyContent="between" alignItems="center">
          <Text className="">Total returns</Text>

          {percentageChange > 0 ? (
            <BadgeDelta
              deltaType="moderateIncrease"
              className="bg-green-100 p-1 rounded-lg px-2"
            >
              + {percentageChange.toFixed(2)} %
            </BadgeDelta>
          ) : (
            <BadgeDelta
              deltaType="moderateIncrease"
              className="bg-red-100 p-1 rounded-lg px-2"
            >
              - {percentageChange.toFixed(2)} %
            </BadgeDelta>
          )}
        </Flex>
        <Metric className="text-lg">₹ {data?.data?.profit_loss}</Metric>
      </Card>
    </div>
  );
};

export default CardItem;
