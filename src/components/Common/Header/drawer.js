import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton  onClick={() => setOpen(true)}>
        <MenuIcon className="link" />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
       
        <div className="menu-link">
        <Link to='/'>
        <p className='links' >Home</p>
        </Link>
        <Link to='/compare'>
        <p className='links' >Compare</p>
        </Link>     
        <Link to='/watchlish'>
        <p className='links' >WatchList</p>
        </Link>
        <Link to='/dasboard'>
        <p className='links' >  DasBoard</p>
        
        </Link>
        </div>
      </Drawer>
    </div>
  );
}
