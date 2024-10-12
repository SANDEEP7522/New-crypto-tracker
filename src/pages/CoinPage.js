import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header/index.header";
import axios from "axios";
import { coinObject } from "../functions/convertObject";

import Loader from "../components/Common/Loader/loader";
import List from "../components/Dasboard/List/list";

function CoinPage() {
  const { id } = useParams();
  // console.log({id});

  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  useEffect(() => {
    if (id) {
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response) => {
          console.log("Response", response);
          coinObject(setCoinData, response.data);
          setIsLoading(false);
        })

        .catch((error) => {
          console.log("something wents wrong", error);
          setIsLoading(false);
        });
    }
  }, [id]);

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
        <div className="gray-wrapper" >
          <List coin={coinData} />
        </div>
        </>
      )}
    </div>
  );
}

export default CoinPage;
