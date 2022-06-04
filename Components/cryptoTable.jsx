import React, { useEffect, useState } from "react";
import axios from "axios";
import { CoinList } from "../cryptoconfig/cryptoAPI";
import { useRouter } from 'next/router'
import { CryptoState } from "../CryptoContext";
import ReactPaginate from 'react-paginate';
import styles from "../styles/pagination.module.css"



export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function CryptoTable() {

    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    const { currency, symbol } = CryptoState();

    const router = useRouter();

    const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    console.log(data);

    setCoins(data);
    setLoading(false);
  };

    useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

    const handlePageClick = (value) => 
            {
              console.log(value)
              console.log(page)
              setPage(value.selected + 1);
            window.scroll(0, 450);
            console.log(value);
            console.log(page)
          }

    const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };
  return (
    <>
    <div className=" flex justify-center mt-[50px] font-jura">
    <table className="table-auto w-[100%] "  >
        <thead className="text-center " >
            <tr className="text-center ">
              {["Coin", "Name", "Price", "24h Change", "Market Cap"].map((head) => (
            <th className="text-[20px] pb-[20px] text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-900 via-pink-700 to-amber-300 ">{head}</th>))}
            </tr>
        </thead>
        <tbody className="text-center bg-[url('../public/Vector.png')] text-white cursor-pointer rounded-lg">
          {handleSearch()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((row) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
            <tr 
            onClick={() => router.push(`/coins/${row.id}`)} key={row.name} className="">
            <td className="text-center pl-5 justify-center">
              <img src={row?.image} alt={row.name} height="50" className="flex w-[40px] pt-[5px] ml-[30px] " />
              <div className="text-center">
                  <span className="text-center flex ml-[32px]">
                      {row.symbol}
                  </span>
              </div>
            </td>
            <td>
              <span className="text-center" >
                    {row.name}
                  </span>
            </td>
            <td className="text-center">
              {symbol}{" "}
              {numberWithCommas(row.current_price.toFixed(2))}
            </td>
            <td className="text-center">
              {profit && "+"}
              {row.price_change_percentage_24h.toFixed(2)}%
            </td>
            <td className="text-center">
              {symbol}{" "}
              {numberWithCommas( row.market_cap.toString().slice(0, -6))}B
            </td>
            </tr>);
                  })}
        </tbody>
    </table>
    </div>
    <div className="flex justify-center mt-[30px]">
      <ReactPaginate
      onPageChange={handlePageClick}
      pageCount={(handleSearch()?.length / 10).toFixed(0)}
      previousLabel="< previous"
      nextLabel="next >"
      breakLabel="..."
      breakClassName={styles.break}
      containerClassName={styles.pagination}
      subContainerClassName={styles.pages}
      activeClassName={"active"}/>
    </div>
    
    </>
  )
}

export default CryptoTable