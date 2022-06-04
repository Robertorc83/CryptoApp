import React, {useState, useEffect} from 'react'
import { HistoricalChart } from "../cryptoconfig/cryptoAPI.js";
import { Line } from "react-chartjs-2";
import { CryptoState } from "../CryptoContext";
import { chartDays } from "../cryptoconfig/data";
import axios from "axios";

function CoinInfo({coin}) {


  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState("1");
  const { currency } = CryptoState();
  const [flag,setflag] = useState(false);

  console.log(days)
  console.log(coin.id)
  console.log(currency)
 
  const fetchHistoricData = async () => {
    
    const res = await axios.get(HistoricalChart(coin.id, days, currency));
    setflag(true);
    setHistoricData(res.data);
  };
  console.log(data)
  
  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  return (
    <>    
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
    </>

  )
}

export default CoinInfo
