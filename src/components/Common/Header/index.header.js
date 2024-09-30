import React from 'react'
import "./index.header.css"
import AnchorTemporaryDrawer from './drawer'
import Button from '../Button/button.index'


function Header() {
  return (
    <div className='navbar'>
      <h1 className='logo'>CryptoTracker</h1>
      <div className='links'>
        <a href='/'>
        <p className='link' >Home</p>
        </a>
        <a href='/'>
        <p className='link' >Compare</p>
        </a>     <a href='/'>
        <p className='link' >WatchList</p>
        </a>
        <a href='#'>
        <Button 
        text={"DasBoard"}
        onclick={() => console.log("button click")
         }/>
        </a>
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
