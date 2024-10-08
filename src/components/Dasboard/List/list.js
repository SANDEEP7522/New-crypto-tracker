import React from "react";
import "./list.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Tooltip } from "@mui/material";
import { convertNumber } from "../../../functions/convertNumber";

function List({ coin }) {
  return (
    <tr className="List-row lr">
      <td className="coin-all-info">
        <img className="coin-img-td" src={coin.image} />
        <div className="name-col">
          <p className="rank"> Rank : {coin.market_cap_rank}</p>
          <p className="name-col">{coin.name}</p>
          <p className="symbol">{coin.symbol}</p>
        </div>
      </td>
      <Tooltip title="market cap" placement="top">
        <div>
          {coin.market_cap_change_percentage_24h > 0 ? (
            <div className="chip-flex">
              <p className="price-chip pc-media">
                {coin.market_cap_change_percentage_24h.toFixed(2)}%
              </p>
              <p className="price-chip-graph pcg">
                <TrendingUpIcon />
              </p>
            </div>
          ) : (
            <div className="chip-flex">
              <p className="price-chip chip-red cr">
                {coin.market_cap_change_percentage_24h.toFixed(2)}%
              </p>
              <p className="price-chip-GD  gd">
                <TrendingDownIcon />
              </p>
            </div>
          )}
        </div>
      </Tooltip>

      <Tooltip title="INR price" placement="top">
        <td className="current-price-container">
          <h3
            className="price-current cpcs"
            style={{
              color:
                coin.market_cap_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)",
            }}
          >
            {coin.current_price.toLocaleString()}
          </h3>
        </td>
      </Tooltip>
      <Tooltip title="total-value" placement="top">
        <td
          className="total_volume-li  "
          style={{
            color:
              coin.market_cap_change_percentage_24h < 0
                ? "var(--red)"
                : "var(--green)",
          }}
        >
          {coin.total_volume.toLocaleString()}
        </td>
      </Tooltip>

      <Tooltip title="total-value" placement="top">
        <td
          className="mobile-td-mkt"
          style={{
            color:
              coin.market_cap_change_percentage_24h < 0
                ? "var(--red)"
                : "var(--green)",
          }}
        >
          {convertNumber(coin.total_volume)}
        </td>
      </Tooltip>

      <Tooltip title="market-cap" placement="top">
        <td
          className="market_cap-li  mcli"
          style={{
            color:
              coin.market_cap_change_percentage_24h < 0
                ? "var(--red)"
                : "var(--green)",
          }}
        >
          {coin.market_cap.toLocaleString()}
        </td>
      </Tooltip>
      <Tooltip title="market-cap" placement="top">
        <td
          className="mobile-td-mkt"
          style={{
            color:
              coin.market_cap_change_percentage_24h < 0
                ? "var(--red)"
                : "var(--green)",
          }}
        >
          { convertNumber(coin.market_cap)}
        </td>
      </Tooltip>
    </tr>
  );
}

export default List;
