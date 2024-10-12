import axios from "axios";

export const getCoinData = (id) => {
  const myData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
      return response.data;
      //   console.log("Response", response);
      //   coinObject(setCoinData, response.data);
    })

    .catch((error) => {
      console.log("something wents wrong", error);
     
    });
  return myData;
};