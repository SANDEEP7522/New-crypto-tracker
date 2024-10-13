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
import SelectDays from "../components/Coin/SelectDays/selectDays";
import { settingChartData } from "../functions/settingChartData";
import PriceTypes from "../components/Coin/PriceTypes/priceType";

function CoinPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(7);
  const [chartData, setChartData] = useState();
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days, priceType);
      if (prices && prices.length > 0) {
        settingChartData(setChartData, prices);

        // setChartData({
        //   labels: prices.map((price) => convertDate(price[0])),
        //   datasets: [
        //     {
        //       data: prices.map((price) => price[1]),
        //       borderColor: "#3a80e9",
        //       borderWidth: 1,
        //       fill: true,
        //       tension: 0.1,
        //       backgroundColor: prices ? "transparent" : "#3a80e9",
        //       pointRadius: 0,
        //     },
        //   ],
        // });

        setIsLoading(false);
      }
    }
  }

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value, priceType);
    if (prices && prices.length > 0) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
  };

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    // setDays(event.target.value);
    const prices = await getCoinPrices(id, days, newType);
    if (prices && prices.length > 0) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
// console.log(newType);
  };

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
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <PriceTypes
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart chartData={chartData} />
          </div>

          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
}

export default CoinPage;
