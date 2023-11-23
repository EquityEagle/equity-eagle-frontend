import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-annotation";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ data }) => {
  const [timestamps, setTimestamps] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (data) {
      const formattedTimestamps = data.map((point) => {
        const formattedTimestamp = new Date(point.createdAt);
        return formattedTimestamp.toLocaleString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
      });
      setTimestamps(formattedTimestamps);
    }
  }, [data]);

  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: "Profit",
        data: data?.map((point) => point.profit),
        borderColor: "rgb(37, 99, 235)",
        borderWidth: 2,
      },
    ],
  };

  const annotationLine = {
    type: "line",
    mode: "horizontal",
    scaleID: "y",
    value: hoveredIndex !== null ? data[hoveredIndex]?.profit : null,
    borderColor: "red",
    borderWidth: 2,
    borderDash: [5, 5], // Optional: Dashed line
  };

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true, // Enable responsiveness
    scales: {
      y: {
        ticks: {
          color: "white",
        },
      },
      x: {
        ticks: {
          color: "white",
          display: window.innerWidth > 800, // Show x-axis labels only if window width is greater than 700px
        },
      },
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: (tooltipItems) => timestamps[tooltipItems[0].index], // Display timestamp as title
        },
      },
      annotation: {
        drawTime: "beforeDatasetsDraw",
        annotations: [annotationLine],
      },
    },
    onHover: (_, activeElements) => {
      if (activeElements && activeElements.length > 0) {
        setHoveredIndex(activeElements[0].index);
      } else {
        setHoveredIndex(null);
      }
    },
  };

  return (
    <div
      className="w-full relative chart-container"
      style={{ overflowX: "auto", maxWidth: "100%" }}
    >
      <Line
        data={chartData}
        height={400}
        width={`100%`}
        getElement={(chart) => {
          // Check if the chart object exists and if the canvas element exists
          if (chart && chart.canvas) {
            // Apply additional styles directly to the canvas
            chart.canvas.style.width = "100%";
            chart.canvas.style.height = "400px"; // Set the desired height
          }
        }}
        options={chartOptions}
      />
    </div>
  );
};

export default LineChart;
