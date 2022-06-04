import React, {useState, useEffect} from 'react'
import { SingleCoin, HistoricalChart } from "../../cryptoconfig/cryptoAPI";
import { CryptoState } from "../../CryptoContext";
import Navbar from '../../components/navbar'
import parse from 'html-react-parser';
import LogoW from "../../public/logowhite.png"
import Footer from '../../Components/footer';
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

  const linkStyle = "font-jura pt-[40px] px-8 text-[16px] text-white"

  const { currency, symbol } = CryptoState();
  const [historicData, setHistoricData] = useState(prices.prices);
  const [days, setDays] = useState("1");

  return (
    <>
    <Navbar linkStyles={linkStyle} Logo={LogoW}/>
     <div className="bg-[url('../public/Vector.png')] w-[100vw] h-[300px] text-white text-center ">
        <h1 className='font-jura pt-[130px] text-[70px]'>{coin?.name}</h1>
    </div>
    <div className="grid grid-cols-3 mt-[100px] m-0 ">
      <div className="lg:w-[75%] bg-[url('../public/Vector.png')] ml-[30px] p-10 mt-[-50px] rounded-xl">
        <img src={coin?.image.large} alt={coin?.name} />
        <h4 className='text-white text-center mt-5 font-jura'>{parse(coin?.description.en.split(". ")[0])}.</h4>
        <h5 className='text-white text-center mt-2  font-jura'>Rank {coin?.market_cap_rank}</h5>
        <h5 className='text-white text-center mt-2  font-jura'>Current Price {symbol}{" "}{ coin?.market_data.current_price[currency.toLowerCase()] }</h5>
      </div>
      <div className= "flex justify-center w-full col-span-2 p-0" >
        <div>
          <div className='w-[800px]' >
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
                      borderColor: "#8132a8",
                    },
                  ],
                }}
                options={{

                  scales: {
                            x: {
                                ticks: {
                                    font: {
                                        size: 12,
                                        family: 'Jura',
                                    }
                                }
                            },
                            y:{
                              ticks:{
                                font: {
                                  size: 12,
                                  family: 'Jura',
                                }
                              }
                            }
                        },
                  
                  elements: {
                    point: {
                      radius: 1,
                    },
                  },

                  plugins: {
                      legend: {
                          labels: {
                                font: {
                                    size: 18,
                                    family: 'Jura',
                        }
                      }
                    }
                  }
                }}
                />
            </div>
            <div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>  
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