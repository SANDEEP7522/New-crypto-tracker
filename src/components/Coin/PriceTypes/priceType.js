import { useState } from "react";
import "./priceType.css"
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function PriceTypes( {priceType, handlePriceTypeChange} ) {
 

  return (
    <div className="toggle-button-volune">
    <ToggleButtonGroup className="toggle-button"
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
      // sx={{
      //   "&.Mui-selected": {
      //     color: "var(--blue) !important",
      //   },
      //   borderColor: "var(--blue)",
      //   border: "unset !impotant",
      //   "&.MuiToggleButtonGrap-grouped": {
      //     border: "1px solid !important",
      //     borderColor: "unset",
      //     color: "var(--blue)",
      //   },
      //   "&.MuiToggleButton-standard": {
      //     color: "var(--blue)",
      //   },
      // }}
    >
      <ToggleButton value="prices">Price</ToggleButton>
      <ToggleButton value="market_caps">Market Cap</ToggleButton>
      <ToggleButton value="total_volume">Total Volume</ToggleButton>
    </ToggleButtonGroup></div>
  );
}
