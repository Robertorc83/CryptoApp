import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LogoWhite from "../public/logowhite.png"
import {FaArrowCircleRight} from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer__container bg-[url('../public/gradient2.png')] mt-[70px] h-[200px] grid grid-cols-3 gap-4">

        <div className="Logo_container mt-[35px] ml-[100px] ">
            <Image src={LogoWhite} width={160} height={120} className=''/>
        </div>
        <div className='menu_container row flex flex-col ml-[80px]'>
            <Link href="" ><a className='pt-6 px-5 text-white font-jura' >Home</a></Link>
            <Link href=""><a className='pt-6 px-5 text-white font-jura'>Crypto</a></Link>
            <Link href=""><a className='pt-6 px-5 text-white font-jura'>Blog</a></Link>
            <Link href=""><a className='pt-6 px-5 text-white font-jura'>Contact</a></Link>
        </div>
        <div className='subscribe__container text-white font-jura mt-[35px] '>
            <h5 className='text-2xl font-semibold'>STAY WILD!</h5>
            <h6>Receive the last news in the crypto world</h6>
            <div className='susbcribe_form'>
                <input type="text" className='absolute mt-8 h-[40px] w-[300px] rounded-lg ' placeholder="Your email"/>
                <button type='submit' className='absolute mt-[28px] ml-[300px] p-1'><span className="mt-5"><FaArrowCircleRight size='40px'/></span></button>
            </div>
        </div>
    </div>
  )
}

export default Footer