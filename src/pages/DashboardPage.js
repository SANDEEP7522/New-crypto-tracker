import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/index.header";
import TabComponent from "../components/Dasboard/Tabs/TabComponent";
import axios from "axios";
import Search from "../components/Dasboard/Search/search";
import Loder from "../components/Common/Loader/loader";
import BackToTop from "../components/Common/BackToTop/backToTop";
import { get100Coins } from "../functions/get100Coins";
import PaginationComponect from "../components/Dasboard/Pagination/pagination";

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [paginatedCoins, setPaginatedCoins] = useState([]);

  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
    const previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  var filterCoins = Array.isArray(coins)
    ? coins.filter(
        (item) =>
          item.name.toLowerCase().includes(search.trim().toLowerCase()) ||
          item.symbol.toLowerCase().includes(search.trim().toLowerCase())
      )
    : [];

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        console.log("RESPONSE>>>", response.data);
        setCoins(response.data);
        setPaginatedCoins(response.data.slice(0, 10));
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERROR>>>", error.message);
      });
  };

  
  return (
    <div>
      <Header />
      <BackToTop />
      {loading ? (
        <Loder />
      ) : (
        <div>
          <Search search={search} onSearchChange={onSearchChange} />
          <TabComponent coins={search ? filterCoins : paginatedCoins} />
          {!search && (
            <PaginationComponect page={page} handlePageChange={handlePageChange} />
          )}
        </div>
      )}
      
    </div>
  );
}

export default DashboardPage;
