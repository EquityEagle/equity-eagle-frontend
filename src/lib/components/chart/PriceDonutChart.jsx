import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import { pricedata } from "../../../constants";

ChartJS.register(ArcElement, Tooltip, Legend);
const chartHeight = window.innerWidth < 768 ? 200 : 300; // Adjust the height as needed

const PriceDonutChart = ({ data }) => {
  return (
    <div className="line-chart-container">
      <svg width="100%">
        <Line data={pricedata} />
      </svg>
    </div>
  );
};

export default PriceDonutChart;
