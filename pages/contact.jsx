import React from 'react'
import Navbar from '../components/navbar'
import LogoW from "../public/logowhite.png"
import Footer from '../Components/footer'

function Contact() {

    const linkStyle = "pl-[10px] font-jura pt-[40px] px-6 text-[16px] text-[16px] text-white"

  return (
    <> 
        <Navbar linkStyles={linkStyle} Logo={LogoW}/>
        <div className="bg-[url('../public/Vector.png')] lg:h-[300px] text-white text-center w-screen ">
        <h1 className='font-jura pt-[130px] text-[50px] lg:text-[100px] w-screen'>Get in touch</h1>
         </div>
        <div className='h-screen flex flex-col justify-center pt-0'>
            <div className="flex justify-center">
                <div className=" bg-[url('../public/Vector.png')] mt-[100px] h-[650px] w-[500px] lg:w-[600px] lg:h-[350px] md:mt-[-200px] rounded-2xl ">
                <form action="" className=''>
                    <div className='flex grid grid-raws-2 lg:grid-cols-2  justify-items-center items-center pt-[20px]'>
                        <div className='grid grid-rows-3 gap-y-5 justify-items-center h-[250px]'>
                            <div>
                                <label htmlFor="" className='block text-white font-jura'>Name</label>
                                <input type="text" className='h-[40px] rounded-lg ' />
                            </div>
                            <div>
                                <label htmlFor="" className='block text-white font-jura'>Email</label>
                                <input type="email" className='h-[40px] rounded-lg'/>
                            </div>
                            <div>
                                <label htmlFor="" className='block text-white font-jura'>Subject</label>
                                <input type="text" className='h-[40px] rounded-lg'/>
                            </div>
                        </div>
                        <div className='h-[250px] lg:ml-0 grid grid-rows-2 mt-[20px] lg:mt-0 justify-items-end'>
                            <div>
                            <label htmlFor="" className='block text-white font-jura'>Message</label>
                            <textarea type="text" className='h-[200px] w-[180px] lg:w-[250px] rounded-xl' />
                            </div>
                            <div>
                                <button className='bg-gradient-to-r from-fuchsia-700 via-pink-800 to-red-500 p-3 w-[150px] text-white rounded-lg font-jura mt-[120px] lg:mt-[120px] '>Send</button>
                            </div>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
        <div className='md:mt-[-200px] mt-0'>
            <Footer/>
        </div>
    </>
  )
}

export default Contact