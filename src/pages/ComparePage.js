import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/index.header";
import SelectCoins from "../components/Compare/SelectCoins/selectCoin";
import SelectDays from "../components/Coin/SelectDays/selectDays";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import { coinObject } from "../functions/convertObject";

function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  const [days, setDays] = useState(30);

  function handleDaysChange(event) {
    setDays(event.target.value);
  }

  useEffect(() => {
    getData();
  }, [])

  async function getData(params) {
    setIsLoading(true);
    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);

    if (data1) {
      coinObject(setCrypto1Data, data1);
      
    }
    if (data2) {
      coinObject(setCrypto1Data, data2);
      
    }
    if(data1 && data2){
        const prices1 = await getCoinPrices(crypto1, days, "prices");
        const prices2 = await getCoinPrices(crypto2, days, "prices");

        if (Array.isArray(prices1) && prices1.length > 0 && Array.isArray(prices2) && prices2.length > 0) {
        console.log("Both Prices add", prices1, prices2);
        
          setIsLoading(false);
        }
    }
  }

  const handleCoinChange = async (event, isCoin2) => {
    setIsLoading(true);
    if (isCoin2) {
      setCrypto2(event.target.value);
      console.log("coin_id_2", event.target.value);
      const data = await getCoinData(event.target.value);
      if (data) {
        coinObject(setCrypto1Data, data);
        const prices = await getCoinPrices(event.target.value, days, "prices");
        if (Array.isArray(prices) && prices.length > 0) {
        //  settingChartData(setChartData, prices);
          setIsLoading(false);
        }
      }
    } else {
      setCrypto1(event.target.value);
      console.log("coin_id)_1", event.target.value);
      if (isCoin2) {
        coinObject(setCrypto2Data, isCoin2);
        const prices = await getCoinPrices(event.target.value, days, "prices");
        if (Array.isArray(prices) && prices.length > 0) {
        //  settingChartData(setChartData, prices);
          setIsLoading(false);
        }
      }
    }
  };

  return (
    <div className="coins-days-comp">
      <Header />
      <SelectCoins
        crypto1={crypto1}
        handleCoinChange={handleCoinChange}
        crypto2={crypto2}
      />
      <SelectDays days={days} handleDaysChange={handleDaysChange} />
    </div>
  );
}

export default ComparePage;
