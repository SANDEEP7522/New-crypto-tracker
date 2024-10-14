import React, { useEffect, useState } from "react";
import "./selectCoin.css"
import { get100Coins } from "../../../functions/get100Coins";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function SelectCoins({crypto1, crypto2, handleCoinChange}) {
  // const [crypto1, setCrypto1] = useState("bitcoin");
  // const [crypto2, setCrypto2] = useState("ethereum");
   const [allCoins, setAllCoins] = useState([]);


  const style = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInpute-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#4d12ee",
      },
    },
  };

  // const handleCoinChange = (event, isCoin2) => {
  //   if (isCoin2) {
  //     setCrypto2(event.target.value);
  //     console.log("coin_id_2", event.target.value);
  //   } else {
  //   setCrypto1(event.target.value);
  //   console.log("coin_id)_1", event.target.value);
  //     }
  // };

  useEffect(() => {
  getData();
  }, [])
  
 async function getData() {
    const myCoins = await get100Coins();
    setAllCoins(myCoins);
 }

  return (
    <div className="coin-select">
      <p>Crypto 1</p>
      <Select
        sx={style}
        value={crypto1}
        label="Crypto1"
        onChange= {(event) => handleCoinChange(event, false)}
      >
     {allCoins.map((coin) => (
        <MenuItem value={coin.id}>{coin.name}</MenuItem>
     ))}
      </Select>

      <p>Crypto 2</p>
      <Select
        sx={style}
        value={crypto2}
        label="Crypto2"
        onChange = {(event) => handleCoinChange(event, true)}
      >
     {allCoins.map((coin) => (
        <MenuItem value={coin.id}>{coin.name}</MenuItem>
     ))}
      </Select>
    </div>
  );
}

export default SelectCoins;
