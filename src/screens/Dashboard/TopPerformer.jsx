import React from "react";
import { Card, Title, Flex, Text, Badge } from "@tremor/react";

const WebAnalytics = ({ data }) => {
  return (
    <Card className="max-w-full my-4 shadow-lg">
      <Title>Top Performers in Portfolio</Title>
      {data?.data?.top_performers.map((entry) => (
        <Flex className="mt-4">
          <Text>{entry.name}</Text>
          <Text>
            <Badge className="bg-green-100 py-1 px-2 rounded-lg mx-3">
              {entry.profit_loss_percentage} %
            </Badge>
          </Text>
        </Flex>
      ))}
      {/* <BarList data={performer} className="mt-2" /> */}
    </Card>
  );
};

export default WebAnalytics;
