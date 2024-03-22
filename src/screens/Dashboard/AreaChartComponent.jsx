import React from "react";
import { Card, Title } from "@tremor/react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
Chart.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
);

const generateChartData = (data) => {
  const labels = data?.data?.portfolio_nifty.map((entry) => entry.date);

  const niftyData = {
    label: "Nifty",
    Filler: false,
    lineTension: 0.1,
    backgroundColor: "rgb(59,130,246,0.3)",
    borderColor: "rgb(59,130,246,1)",
    data: data?.data?.portfolio_nifty.map((entry) => entry.nifty),
    fill: {
      target: "origin",
      above: "rgb(59,130,246,0.3)",
    },
  };

  const portfolioData = {
    label: "Portfolio",
    Filler: false,
    lineTension: 0.1,
    backgroundColor: "rgba(0,255,0,0.3)",
    borderColor: "rgba(0,255,0,1)",
    data: data?.data?.portfolio_nifty.map((entry) => entry.portfolio),
    fill: {
      target: "origin",
      above: "rgba(0,255,0,0.3)",
    },
  };

  return {
    labels,
    datasets: [niftyData, portfolioData],
  };
};

const AreaChartComponent = ({ data }) => {
  const chartData = generateChartData(data);

  return (
    <Card className="mt-4 shadow-lg">
      <Title>Portfolio vs Nifty Comparison</Title>
      <Line data={chartData} />
    </Card>
  );
};

export default AreaChartComponent;
