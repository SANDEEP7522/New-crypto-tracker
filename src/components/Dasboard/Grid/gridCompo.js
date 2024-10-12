import React from "react";
import "./gridCompo.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Link } from "react-router-dom";

function Grid({ coin, i }) {
  return (
    <Link to = {`/coin/${coin.id}`}>
    <div className="grid-coin-info">
      <div className="coin-all-info">
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
      <div className="current-price-container">
        <h3
          className="price-current"
          style={{
            color:
              coin.market_cap_change_percentage_24h < 0
                ? "var(--red)"
                : "var(--green)",
          }}
        >
          Price:- INR {coin.current_price.toLocaleString()}
        </h3>
      </div>
      <div className="coin-max-supply">
        <h4
          className="max-supply"
          style={{
            color:
              coin.market_cap_change_percentage_24h < 0
                ? "var(--red)"
                : "var(--green)",
          }}
        >
          max_supply:-{coin.max_supply}{" "}
        </h4>
      </div>

      <p
        className="total_volume"
        style={{
          color:
            coin.market_cap_change_percentage_24h < 0
              ? "var(--red)"
              : "var(--green)",
        }}
      >
        total_volume:- {coin.total_volume.toLocaleString()}
      </p>

      <p
        className="market_cap"
        style={{
          color:
            coin.market_cap_change_percentage_24h < 0
              ? "var(--red)"
              : "var(--green)",
        }}
      >
        market_cap:- {coin.market_cap.toLocaleString()}
      </p>
    </div></Link>
  );
}

export default Grid;
