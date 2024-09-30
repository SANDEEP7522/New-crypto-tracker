import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Button from "../Button/button.index";

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton  onClick={() => setOpen(true)}>
        <MenuIcon className="link" />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
       
        <div className="menu-link">
        <a href='/'>
        <p className='links' >Home</p>
        </a>
        <a href='/'>
        <p className='links' >Compare</p>
        </a>     
        <a href='/'>
        <p className='links' >WatchList</p>
        </a>
        <a href='#'>
        <Button 
        text={"DasBoard"}
        onclick={() => console.log("button click")
         }/>
        </a>
        </div>
      </Drawer>
    </div>
  );
}
