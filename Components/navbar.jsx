import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar({linkStyles, Logo}) {
  return (
    <div className='absolute md:w-[93%] xl:w-[95%]'>
        <div className=' mt-5 ml-5 w-[50px] md:w-[60px] lg:w-[100px]'>
            <Link href="/"><Image src={Logo} alt="logo crynnov"/></Link>
        </div>
        <div className='hidden md:flex mt-[-40px] flex-row justify-end '>
            <div>
            <Link href="/" ><a className={linkStyles} >Home</a></Link>
            </div>
            <div>
            <Link href="/cryptocurrencies"><a className={linkStyles}>Crypto</a></Link>
            </div>
            <div>
            <Link href="/blog"><a className={linkStyles}>Blog</a></Link>
            </div>
            <div>
            <Link href="/contact"><a className={linkStyles}>Contact</a></Link>
            </div>
        </div>
        <div className="flex absolute w-screen mt-[-35px] justify-end pr-[20px] lg:hidden">
          <button id="dropdownBottomButton" data-dropdown-toggle="dropdownBottom" data-dropdown-placement="bottom" className='inline-flex items-center ' type="button">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#3f0357"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg> 
          </button>
          <div id="dropdownBottom" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBottomButton">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
              </li>
            </ul>
          </div>
        </div>  
    </div>
  )
}

export default Navbar