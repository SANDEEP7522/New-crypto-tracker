import React from 'react'
import "./index.header.css"
import AnchorTemporaryDrawer from './drawer'
import Button from '../Button/button.index'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='navbar'>
      <h1 className='logo'>CryptoTracker</h1>
      <div className='links'>
        <Link to='/'>
        <p className='link' >Home</p>
        </Link>
        <Link to='/compare'>
        <p className='link' >Compare</p>
        </Link>     
        <Link to='/watchlish'>
        <p className='link' >WatchList</p>
        </Link>
        <Link to='/dasboard'>
        <Button 
        text={"DasBoard"}
        onclick={() => console.log("button click")
         }/>
        </Link>
        {/* <a href='#'>
        <Button 
        outline={true}
        text={"Shere"}
        onclick={() => console.log("button click")
         }/>
        </a> */}
      </div>
      <div className='Anchor-Temporary-Drawer'>
      <AnchorTemporaryDrawer />
      </div>
    </div>
  )
}

export default Header
