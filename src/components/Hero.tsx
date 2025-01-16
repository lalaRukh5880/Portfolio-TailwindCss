import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id ='hero' className='min-h-screen bg-no-repeat bg-[url(/banner.jpeg)] bg-cover'
    style={{backgroundSize: '35%' , backgroundPosition: 'left 120px top 150px'}}>

      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
          <div>
          <p>I'm</p>
          <p>Lalarukh</p>
          <p>Ali</p>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Hero
