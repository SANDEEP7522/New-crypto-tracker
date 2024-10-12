import axios from "axios";

export const getCoinPrices = (id, days) => {
  const prices = axios
  .get(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=${days}` 
  
  )
  .then((response) => {
    console.log("Prices>>>>>>>>>", response.data.prices);
    return response.data.prices;
  })
  .catch((err) => {
    console.log("DAY thing wrong", err);
  });
  return prices;
};
