import React from 'react'
import "./lineChart.css"
import { Line } from "react-chartjs-2";
import { Chart as chartjs } from 'chart.js/auto'; // This line might also need adjustment if you meant 'chart.js'



function LineChart( {chartData, priceType, multiAxis} ) {
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
   };
    return (
    <div>
      <Line data = {chartData} options={options}/>

    </div>
  )
}



export default LineChart;
