import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header/index.header'
import TabComponent from '../components/Dasboard/Tabs/TabComponent'
import axios from 'axios'

function DashboardPage() {
 
   const [coins, setCoins] = useState([])
   
   useEffect(() =>{
    // fetch(
    //   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&price_change_percentage=1d"
    // )
    // .then((res) => {})
    // .then((data) =>{})

    axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&price_change_percentage=1d"
    )
    .then((responce ) => {
      console.log("Responce", responce);
      setCoins(responce.data)
    },)
    
    .catch((error) => {
      console.log("something wents wrong", error);
      
    })


   }, []) 

  return (
    <div>
      <Header />
      <TabComponent coins={coins} />
    </div>
  )
}

export default DashboardPage
