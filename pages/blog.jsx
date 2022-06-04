import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import LogoW from "../public/logowhite.png"
import {getPosts} from "../Services/index.js"
import Card from "../Components/card"

export default function Blog ({posts})  {

  const linkStyle = "font-jura pt-[40px] px-8 text-[16px] text-white"
  return (
    <>
    <Navbar linkStyles={linkStyle} Logo={LogoW}/>
    <div className="bg-[url('../public/Vector.png')] w-[100vw] h-[300px] text-white text-center ">
        <h1 className='font-jura pt-[130px] text-[120px]'>Blog</h1>
    </div>
    <div className=' w-[100vw] h-[600px]'>
      <div className="text-center mt-[20px]">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-900 via-pink-700 to-amber-300 text-[50px] font-jura block ">Categories</span>
        <div className='px-[30px] inline-flex'>
          {posts.map((post,index) => <Card post={post.node} key={index}/>)}
          
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export async function getStaticProps(){
    const posts = await getPosts() || [];

    return{
        props: { posts }
    }
}