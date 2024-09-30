import React from "react";
import "./gridCompo.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

function Grid({ coin, i }) {
  return (
    <div className="grid-coin-info">
      <div key={1} className="coin-all-info">
        <img className="coin-img" src={coin.image} />
        <div className="name-col">
          <p className="rank"> Rank : {coin.market_cap_rank}</p>
          <p className="name-col">{coin.name}</p>
          <p className="symbol">{coin.symbol}</p>
        </div>
      </div>
      {coin.market_cap_change_percentage_24h > 0 ? (
        <div className="chip-flex">
          <div className="price-chip">
            {coin.market_cap_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="price-chip-graph">
            <TrendingUpIcon />
          </div>
        </div>
      ) : (
        <div className="chip-flex">
          <div className="price-chip chip-red">
            {coin.market_cap_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="price-chip-GD">
            <TrendingDownIcon />
          </div>
        </div>
      )}

      
    </div>
  );
}

export default Grid;
