import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import Gradient from "../public/gradient.png"
import LogoP from "../public/logopurple.png"
import Link from 'next/link'


export default function Home() {
  const linkStyle = "flex relative font-jura px-3 text-[12px] lg:text-[16px] text-white z-50 lg:mt-[-30px] "
  return (
    <>
      <Head>
        <title>Crypto Blog </title>  
      </Head>
  <div className='w-screen'>
    <div className="z-50 ">
        <Navbar linkStyles={linkStyle} Logo={LogoP}/>
    </div>
      <div className='grid md:grid-cols-3 flex justify-items-center h-[550px] '>
        <div className='text-center md:col-span-2 '>
          <h2 className='font-jura text-center text-[40px] mt-[100px] md:mt-[20px] lg:text-[50px] lg:mt-[30px]'> INNOVATION </h2>
          <h2 className='font-jura text-[40px] lg:text-[50px] '> IN</h2>
          <h2 className='font-jura text-[40px] lg:text-[50px] '> THE </h2>
          <h2 className='font-jura text-[40px] lg:text-[50px] '> CRYPTO</h2>
          <h2 className='font-jura text-[40px] lg:text-[50px] '> WORLD </h2>
          <Link href="/blog"><button className='bg-gradient-to-r from-fuchsia-700 via-pink-800 to-red-500 p-3 lg:w-[300px]  text-white rounded-lg font-jura mt-[40px] lg:mt-[20px]'>Watch News</button></Link>
        </div>
        <div className='absolute hidden md:flex md:w-[39%] lg:w-[403px] right-0 z-1 '	>
          <Image src={Gradient} alt="Gradient Crynno: Crypto innovation news" className=''/>
        </div> 
    </div >
    <div className='right-0 mt-[200px] md:mt-[-6%] lg:mt-0'>
      <Footer/> 
    </div>
  </div>
  
    
    
  
    
    </>
  )
}
