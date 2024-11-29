import React from "react";
import "./selectDays.css";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function SelectDays( {days, handleDaysChange} ) {
  return (
    <div className="days">
      <p className="dayss" >Days</p>
      <Select className="set"
        sx={{
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
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={days}
        label="Days"
        onChange={handleDaysChange}
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
        <MenuItem value={365}>1 Year</MenuItem>
      </Select>
    </div>
  );
}
