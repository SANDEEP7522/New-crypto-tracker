import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "../Grid/gridCompo";
import "./TabComponent.css";
import List from "../List/list";

export default function TabComponent({ coins }) {
  const [value, setValue] = React.useState("Grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style = {
    color: "var(--white)",
  };

  return (
    <Box>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth" className="tab">
          <Tab label="Grid" value="Grid" sx={style} />
          <Tab label="List" value="List" sx={style} />
        </TabList>

        <TabPanel value="Grid">
          <div className=" grid-flex">
            {coins.map((coin, i) => {
              return <Grid coin={coin} key={i} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value="List">
          <table className="list-table">
            {coins.map((item, i) => {
              return <List coin={item} key={i} />;
            })}
          </table>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
