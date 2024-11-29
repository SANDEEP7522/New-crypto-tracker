import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, prices1, prices2) => {
  console.log("ppp12", prices1, prices2);
  
  
  if (prices2) { 
    setChartData({
      labels: prices1?.map((price) => convertDate(price[0])),
      datasets: [
        {
          label: "crypto1",
          data: prices1.map((price) => price[1]),
          borderColor: "#064ef5",
          borderWidth: 1,
          fill: false,
          tension: 0.1,
          borderColor: "#064ef5",
          pointRadius: 0,
          yAxisID: "crypto1",
        },
        {
          label: "crypto2",

          data: prices2.map((price) => price[1]),
          borderColor: " #064ef5",
          borderWidth: 1,
          fill: false,
          tension: 0.1,
          borderColor: "#61c96f",
          pointRadius: 0,
          yAxisID: "crypto2",
        },
      ],
    });
  } else {
    setChartData({
      labels: prices1.map((price) => convertDate(price[0])),
      datasets: [
        {
          data: prices1.map((price) => price[1]),
          borderColor: "#3a80e9",
          borderWidth: 1,
          fill: true,
          tension: 0.1,
          backgroundColor: "#505067",
          pointRadius: 0,
          yAxisID: "crypto1",
        },
      ],
    });
  }
};
