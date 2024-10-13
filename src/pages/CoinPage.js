import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header/index.header";
import axios from "axios";
import { coinObject } from "../functions/convertObject";
import Loader from "../components/Common/Loader/loader";
import List from "../components/Dasboard/List/list";
import CoinInfo from "../components/Coin/CoinInfo/coinInfo";
import { getCoinPrices } from "../functions/getCoinPrices";
import { getCoinData } from "../functions/getCoinData";
import LineChart from "../components/Coin/LineChart/lineChart";
import { convertDate } from "../functions/convertDate";

function CoinPage() {
  const { id } = useParams();
  // console.log({id});

  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(365);
  const [chartData, setChartData] = useState();



  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days);
      if (prices.length > 0) {
        //  console.log("hhhhhhhhhhh");

        setChartData({       
            labels: prices.map((price) => convertDate(price[0])),
            datasets: [
              {
                
                data: prices.map((price) => price[1]),
                borderColor: "#3a80e9",
                borderWidth: 1,
                fill: true,
                tension: 0.1,
                backgroundColor: prices ?  "transparent" : "#3a80e9",
                pointRadius: 0,
              }
            ]
        })

        setIsLoading(false);
      }
    }
  }

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="gray-wrapper">
            <List coin={coinData} />
          </div>
          <div className="gray-wrapper">
            <LineChart chartData={chartData} />  
          </div>
       
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
}

export default CoinPage;
