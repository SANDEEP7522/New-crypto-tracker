import React, { useEffect, useState } from "react";
import { get100Coins } from "../../../functions/get100Coins";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function SelectCoins() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
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

  const handleCoinChange = (event) => {
    setCrypto1(event.target.value);
    console.log("coin_id", event.target.value);
    
  };

  useEffect(() => {
  getData();
  }, [])
  
 async function getData() {
    const myCoins = await get100Coins();
    setAllCoins(myCoins);
 }

  return (
    <div>
      <Select
        sx={style}
        value={crypto1}
        label="Crypto1"
        onChange={handleCoinChange}
      >
     {allCoins.map((coin) => (
        <MenuItem value={coin.id}>{coin.name}</MenuItem>
     ))}
      </Select>
    </div>
  );
}

export default SelectCoins;
