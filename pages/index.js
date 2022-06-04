import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import Gradient from "../public/gradient.png"
import LogoP from "../public/logopurple.png"


export default function Home() {
  const linkStyle = "pl-[10px] font-jura pt-[40px] px-6 text-[16px] text-white"
  return (
    <>
      <Head>
        <title>Crypto Blog </title>
        
      </Head>
    <Navbar linkStyles={linkStyle} Logo={LogoP}/>
    <div className=' flex h-[550px] w-[100vw]'>
      <div className='text-center w-[750px]'>
        <h2 className='font-jura text-[60px] mt-[90px]'> INNOVATION </h2>
        <h2 className='font-jura text-[60px] '> IN</h2>
        <h2 className='font-jura text-[60px] '> THE </h2>
        <h2 className='font-jura text-[60px] '> CRYPTO</h2>
        <h2 className='font-jura text-[60px] '> WORLD </h2>
        <button className='bg-gradient-to-r from-fuchsia-700 via-pink-800 to-red-500 p-3 w-[300px]  text-white rounded-lg font-jura mt-[60px]'>Watch News</button>
      </div>
      <div className='ml-[50px]'	>
        <Image src={Gradient} alt="Gradient Crynno: Crypto innovation news" width={475} height={620} className='absolute flex'/>
      </div> 
    </div>
    <Footer/> 
    
    
  
    
    </>
  )
}
