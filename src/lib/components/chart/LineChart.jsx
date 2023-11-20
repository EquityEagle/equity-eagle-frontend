import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";

const LineChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Extract timestamps and profits from the data
    const timestamps = data?.map((point) => point.timestamp);
    const profits = data?.map((point) => point.profit);

    // Get the canvas element
    const ctx = document.getElementById("myLineChart");

    // If a chart instance already exists, destroy it
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create the line chart
    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: timestamps,
        datasets: [
          {
            label: "Profit Data",
            data: profits,
            borderColor: "blue", // Customize the line color
            fill: false, // Do not fill the area under the line
          },
        ],
      },
      options: {
        // Customize chart options as needed
      },
    });
  }, [data]);

  // Cleanup function to destroy the chart when the component is unmounted
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return <canvas id="myLineChart" width="400" height="200"></canvas>;
};

export default LineChart;
