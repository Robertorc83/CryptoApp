import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LogoWhite from "../public/logowhite.png"
import {FaArrowCircleRight} from 'react-icons/fa'

function Footer() {
  return (
    <>
    <div className=" w-full grid grid-rows-3 justify-items-center bg-[url('../public/gradient2.png')] bg-cover mt-[100px] md:mt-0 lg:h-[240px] lg:grid-cols-3 ">
        <div className="Logo_container mt-[35px] ">
            <Image src={LogoWhite} width={160} height={120} className=''/>
        </div>
        <div className=' menu_container row flex flex-col'>
            <Link href="/" ><a className='pt-6 px-5 text-white font-jura' >Home</a></Link>
            <Link href="/cryptocurrencies"><a className='pt-6 px-5 text-white font-jura'>Crypto</a></Link>
            <Link href="/blog"><a className='pt-6 px-5 text-white font-jura'>Blog</a></Link>
            <Link href="/contact"><a className='pt-6 px-5 text-white font-jura'>Contact</a></Link>
        </div>
        <div className='subscribe__container text-white font-jura mt-[35px] '>
            <h5 className='text-2xl font-semibold text-center'>STAY WILD!</h5>
            <h6 className='text-center'>Receive the last news in the crypto world</h6>
            <div className='susbcribe_form '>
                <input type="text" className='absolute mt-8 h-[40px] w-[300px] rounded-lg ' placeholder="Your email"/>
                <div className='flex justify-center'>
                <button type='submit' className='absolute ml-[320px] mt-[28px] p-1'><span className="mt-5"><FaArrowCircleRight size='40px'/></span></button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer