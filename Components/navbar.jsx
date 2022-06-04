import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar({linkStyles, Logo}) {
  return (
    <div className='flex absolute w-[100vw]'>
        <div className='logo__container mt-5 ml-5'>
            <Image src={Logo} width={80} height={60} className=''/>
        </div>
        <div className='links__container flex justify-end w-[1100px] z-50 '>
            <Link href="" ><a className={linkStyles} >Home</a></Link>
            <Link href=""><a className={linkStyles}>Crypto</a></Link>
            <Link href=""><a className={linkStyles}>Blog</a></Link>
            <Link href=""><a className={linkStyles}>Contact</a></Link>
        </div>
    </div>
  )
}

export default Navbar