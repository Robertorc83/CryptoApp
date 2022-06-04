import React from 'react'
import CryptoTable from '../Components/cryptoTable'
import Navbar from '../Components/navbar'
import LogoW from "../public/logowhite.png"
import Footer from '../Components/footer'



function Cryptocurrencies() {
  const linkStyle = "font-jura pt-[40px] px-8 text-[16px] text-white"
  return (
    <>
    <Navbar linkStyles={linkStyle} Logo={LogoW}/>
    <div className="bg-[url('../public/Vector.png')] w-[100vw] h-[300px] text-white text-center ">
        <h1 className='font-jura pt-[130px] text-[100px]'>Cryptocurrencies</h1>
    </div>
      <CryptoTable />
      <Footer/>
    </>

  )
}

export default Cryptocurrencies