import React, {useState, useEffect} from 'react'
import { SingleCoin, HistoricalChart } from "../../cryptoconfig/cryptoAPI";
import axios from "axios";
import { CryptoState } from "../../CryptoContext";
import parse from 'html-react-parser';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CoinPage = ({coin, prices}) => {

  const { currency, symbol } = CryptoState();
  const [historicData, setHistoricData] = useState(prices.prices);
  const [days, setDays] = useState("1");

  return (
    <>
    <div className=' lg:w-[25%]'>
      <img src={coin?.image.large} alt={coin?.name} />
      <h2>{coin?.name}</h2>
      <h4>{parse(coin?.description.en.split(". ")[0])}.</h4>
      <h5>Rank {coin?.market_cap_rank}</h5>
      <h5>Current Price {symbol}{" "}{ coin?.market_data.current_price[currency.toLowerCase()] }</h5>
    </div>
    <div>
      <div>
        <div>
          <Line
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
          </div>
          <div>

          </div>
      </div>
    </div>
    
    
    </>
  )
}

export default CoinPage

export async function getServerSideProps(context) {
  const { query } = context

  const [coinres, pricesres] = await Promise.all([
    fetch(SingleCoin(query.id)), 
    fetch(HistoricalChart(query.id, 1, "EUR"))
  ]);
  const [coin, prices] = await Promise.all([
    coinres.json(), 
    pricesres.json()
  ]);
  return { props: { coin, prices } };
}