// src/LineChart.js

import React from "react";

const LineChart = ({ data }) => {
  const chartWidth = 600;
  const chartHeight = 300;
  const chartMargin = 20;
  const maxValue = Math.max(...data.values);
  const valueRange = maxValue - Math.min(...data.values);
  const xStep = (chartWidth - 2 * chartMargin) / (data.labels.length - 1);
  const yStep = (chartHeight - 2 * chartMargin) / valueRange;

  return (
    <div className="line-chart-container">
      <svg height={chartHeight} width={chartWidth}>
        {/* Create x-axis */}
        {data.labels.map((label, index) => (
          <text
            className="text-white font-roboto"
            color="#fff"
            key={index}
            x={chartMargin + index * xStep}
            y={chartHeight - chartMargin + 15}
            textAnchor="middle"
          >
            {label}
          </text>
        ))}

        {/* Create y-axis */}
        {/* {Array.from({ length: 5 }).map((_, index) => (
          <text
            key={index}
            x={chartMargin - 10}
            y={
              chartHeight -
              chartMargin -
              (index * (chartHeight - 2 * chartMargin)) / 4
            }
            textAnchor="end"
          >
            {Math.round(maxValue - (index * valueRange) / 4)}
          </text>
        ))} */}

        {/* Create lines */}
        {data.values.map(
          (value, index) =>
            index < data.values.length - 1 && (
              <line
                key={index}
                x1={chartMargin + index * xStep}
                y1={
                  chartHeight -
                  chartMargin -
                  (data.values[index] - Math.min(...data.values)) * yStep
                }
                x2={chartMargin + (index + 1) * xStep}
                y2={
                  chartHeight -
                  chartMargin -
                  (data.values[index + 1] - Math.min(...data.values)) * yStep
                }
                stroke="#0074d9" // Line color
                strokeWidth="2" // Line width
              />
            )
        )}
      </svg>
    </div>
  );
};

export default LineChart;
