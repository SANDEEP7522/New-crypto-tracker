import axios from "axios";

export const get100Coins = () => {
   const myCoins =  axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&price_change_percentage=1d"
      )
      .then((response) => {
        console.log("Responce", response);
        return response.data;
        
      })

      .catch((error) => {
        console.log("something wents wrong", error);
      });
  return myCoins;
}