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
    scales: {
      y: {
        ticks: {
          color: "white",
        },
      },
      x: {
        ticks: {
          color: "white",
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
    <div className="w-full relative chart-container">
      <Line
        data={chartData}
        height={400}
        width={`100%`}
        options={chartOptions}
      />
    </div>
  );
};

export default LineChart;
