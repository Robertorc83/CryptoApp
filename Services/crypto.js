 import { SingleCoin } from "../cryptoconfig/cryptoAPI";
  import { CoinList } from "../cryptoconfig/cryptoAPI";
 import axios from "axios";
 
 export const fetchCoin = async (id) => {
    const { params } = await axios.get(SingleCoin(id));

  };

export const fetchCoins = async () => {
    
    const { params} = await axios.get(CoinList());

  };