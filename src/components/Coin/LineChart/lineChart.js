import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as chartjs, scales, Ticks } from "chart.js/auto"; // This line might also need adjustment if you meant 'chart.js'
import { convertNumber } from "../../../functions/convertNumber";

function LineChart({ chartData, priceType, multiAxis }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y: {
        ticks: {
          callback: function (value, index, ticks) {
            if (priceType == "prices") {
              return "INR " + value.toLocaleString();
            } else {
              return "INR " + convertNumber(value);
            }
          },
        },
      },
    },
  };
  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default LineChart;
