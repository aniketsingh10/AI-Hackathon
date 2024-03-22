import React from "react";
import AreaChartComponent from "./AreaChartComponent";
import CardItem from "./CardItem";
import TableComponent from "./TableComponent";

const LeftColumn = ({data}) => {
  return (
    <div className="w-full flex flex-col justify-between p-2">
      <div>
        <CardItem data={data} />
      </div>
      <div className="flex-auto w-full">
        <AreaChartComponent data={data}/>
        <TableComponent data={data}/>
      </div>
    </div>
  );
};

export default LeftColumn;
