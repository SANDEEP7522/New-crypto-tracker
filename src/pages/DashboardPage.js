import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/index.header";
import TabComponent from "../components/Dasboard/Tabs/TabComponent";
import axios from "axios";
import Search from "../components/Dasboard/Search/search";
import Loder from "../components/Common/Loader/loder";

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoding, setIsLoding] = useState(true);

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
        setIsLoding(false);
      })

      .catch((error) => {
        console.log("something wents wrong", error);
         setIsLoding(false);
      });
  }, []);

  return (
    <div> {isLoding ? (  <Loder /> ) :(
    <div>
    
      <Header />
      <Search search={search} onSearchChange={onSearchChange} />
      <TabComponent coins={filterCoins} />
    </div>) }
    </div>
  );
}

export default DashboardPage;
