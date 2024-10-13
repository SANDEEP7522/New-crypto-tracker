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
      if (Array.isArray(prices) &&prices.length > 0) {
        settingChartData(setChartData, prices);
        setIsLoading(false);
      }
    }
  }

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value, priceType);
console.log(prices);

    if (Array.isArray(prices) &&prices.length > 0) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
  };

//   const handlePriceTypeChange = async (event, newType) => {
//     setIsLoading(true);
//     setPriceType(newType);
//     // setDays(event.target.value);
//     const prices = await getCoinPrices(id, days, newType);
//     console.log(prices);
    
//     if (Array.isArray(prices) && prices.length > 0) {
//       settingChartData(setChartData, prices);
//       setIsLoading(false);
//     }
// // console.log(newType);
//   };

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    
    try {
      const prices = await getCoinPrices(id, days, newType);
      console.log(prices);
  
      // Check if prices is an array and has items
      if (Array.isArray(prices) && prices.length > 0) {
        settingChartData(setChartData, prices);
      } else {
        console.warn('Prices is not an array or is empty:', prices);
      }
    } catch (error) {
      console.error('Error fetching coin prices:', error);
    } finally {
      setIsLoading(false);
    }
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
            <LineChart chartData={chartData} priceType={priceType}/>
          </div>

          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
}

export default CoinPage;
