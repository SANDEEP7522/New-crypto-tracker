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

function CoinPage() {
  const { id } = useParams();
  // console.log({id});

  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(30);
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
        console.log("hhhhhhhhhhh");
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
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
}

export default CoinPage;
