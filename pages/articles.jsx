import React from 'react'
import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import LogoP from "../public/logopurple.png"


function Articles() {
const linkStyle = "font-jura pt-[40px] px-8 text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-900 via-pink-700 to-amber-300"
  return (
    <>
        <Navbar linkStyles={linkStyle} Logo={LogoP}/>
        <div className='h-[900px]'>
        </div>
        <Footer/>
    </>
  )
}

export default Articles