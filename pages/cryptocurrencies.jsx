import React from 'react'
import CryptoTable from '../Components/cryptoTable'
import Navbar from '../Components/navbar'
import LogoW from "../public/logowhite.png"
import Footer from '../Components/footer'



function Cryptocurrencies() {
  const linkStyle = "font-jura px-8 text-[16px] text-white"
  return (
    <>
    <div>
    <Navbar linkStyles={linkStyle} Logo={LogoW}/>
    </div>
    <div className='w-full'>
      <div className="bg-[url('../public/Vector.png')] lg:h-[300px] text-white text-center w-screen ">
        <h1 className='font-jura pt-[130px] md:text-[50px] lg:text-[100px] w-screen'>Cryptocurrencies</h1>
      </div>
      <div>
        <CryptoTable />
      </div>
      <Footer/>
    </div>
    </>

  )
}

export default Cryptocurrencies