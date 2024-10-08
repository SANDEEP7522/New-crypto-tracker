import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/index.header";
import TabComponent from "../components/Dasboard/Tabs/TabComponent";
import axios from "axios";
import Search from "../components/Dasboard/Search/search";

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };

  var filterCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&price_change_percentage=1d"
      )
      .then((responce) => {
        console.log("Responce", responce);
        setCoins(responce.data);
      })

      .catch((error) => {
        console.log("something wents wrong", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Search search={search} onSearchChange={onSearchChange} />
      <TabComponent coins={filterCoins} />
    </div>
  );
}

export default DashboardPage;
