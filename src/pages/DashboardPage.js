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
  const [isLoding, setIsLoding] = useState(true);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };

  var filterCoins = Array.isArray(coins) ? coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.trim().toLowerCase())
  ):[];

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const myCoins = await get100Coins();

    if (myCoins) {
      setCoins(myCoins.data);
      setPaginatedCoins(myCoins.slice(0, 10));
      setIsLoding(false);
    }
  };

  return (
    <div>
       <Header />
        <BackToTop />
      {isLoding ? (
        <Loder />
      ) : (
        <div>
         
          <Search search={search} onSearchChange={onSearchChange} />
          <TabComponent coins={search ? filterCoins : paginatedCoins} />
          {!search && (
            <PaginationComponect
            page={page}
            handlePageChange={handlePageChange}
            />
          )}
         
        </div>
      )}
    </div>
  );
}

export default DashboardPage;
