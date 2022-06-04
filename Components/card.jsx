import React from 'react'

function Card({post}) {
  return (
    <div className='w-[310px] text-center mx-[40px] mt-[40px]'> 
        <img src={post.featuredImage.url} alt="" className='w-[300px] rounded-2xl mx-[5px]' />
        <div className=''>
          <h4 className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-900 via-pink-700 to-amber-300 text-[20px] pt-[5px] font-jura'>{post.title}</h4>
          <p className='font-jura my-3'>{post.excerpt}</p>
          <button className="bg-gradient-to-r from-fuchsia-900 via-pink-700 to-amber-300 text-white font-jura p-2 m-5 rounded-lg" >Read More</button>
        </div>
    </div>
  )
}

export default Card