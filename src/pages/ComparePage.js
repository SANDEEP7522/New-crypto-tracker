import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/index.header";
import SelectCoins from "../components/Compare/SelectCoins/selectCoin";
import SelectDays from "../components/Coin/SelectDays/selectDays";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import { coinObject } from "../functions/convertObject";
import Loader from "../components/Common/Loader/loader";
import List from "../components/Dasboard/List/list";
import CoinInfo from "../components/Coin/CoinInfo/coinInfo";
import { settingChartData } from "../functions/settingChartData";
import PriceTypes from "../components/Coin/PriceTypes/priceType";
import LineChart from "../components/Coin/LineChart/lineChart";

function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [priceType, setPriceType] = useState();
  const [chartData, setChartData] = useState({});

  const [days, setDays] = useState(30);

  async function handleDaysChange(event) {
    setIsLoading(true);
    setDays(event.target.value);
    const prices1 = await getCoinPrices(crypto1, event.target.value, priceType);
    const prices2 = await getCoinPrices(crypto2, event.target.value, priceType);
    settingChartData(setChartData, prices1, prices2);
    console.log("Both Prices add", prices1, prices2);

    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setIsLoading(true);
    const data1 = await getCoinData(crypto1);
    //   const data2 = await getCoinData(crypto2);

    if (data1) {
      const data2 = await getCoinData(crypto2);
      coinObject(setCrypto1Data, data1);
      if (data2) {
        coinObject(setCrypto2Data, data2);
        const prices1 = await getCoinPrices(crypto1, days, priceType);
        const prices2 = await getCoinPrices(crypto2, days, priceType);
        settingChartData(setChartData, prices1, prices2);
        console.log("Both Prices add", prices1, prices2);
        setIsLoading(false);
      }
    }
  }

  const handleCoinChange = async (event, isCoin2) => {
    setIsLoading(true);
    if (isCoin2) {
      setCrypto2(event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto2Data, data);
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      
      if (
        Array.isArray(prices1) &&
        prices1.length > 0 &&
        Array.isArray(prices2) &&
        prices2.length > 0
      ) {
        console.log("Both Prices add", prices1, prices2);
        setIsLoading(false);
      }
    } else {
      setCrypto1(event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto1Data, data);
    }
  };

  return (
    <div>
      {" "}
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="coins-days-comp">
            <SelectCoins
              crypto1={crypto1}
              handleCoinChange={handleCoinChange}
              crypto2={crypto2}
            />
            <SelectDays
              days={days}
              handleDaysChange={handleDaysChange}
              noPTag={true}
            />
          </div>
          <div className="gray-wrapper">
            <List coin={crypto1Data} />
          </div>
          <div className="gray-wrapper">
            <List coin={crypto2Data} />
          </div>

          <div className="gray-wrapper">
            <LineChart
              chartData={chartData}
              priceType={priceType}
              multiAxis={true}
            />
          </div>

          <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
        </>
      )}
    </div>
  );
}

export default ComparePage;
