import React from "react";
import SalesItem from "./PieChart";
import WebAnalytics from "./TopPerformer";

const RightColumn = ({data}) => {
  return (
    <div className="w-full p-2">
      <SalesItem data={data}/>
      <WebAnalytics data={data}/>
      {/* <ScoreList /> */}
    </div>
  );
};

export default RightColumn;
