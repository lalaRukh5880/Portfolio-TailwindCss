import React from 'react'
import Link from 'next/link'



const Navbar = () => {
  
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text xl font-medium'> Lalarukh</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menulink'><Link href='hero'></Link> Home</li>
                <li className='menulink'><Link href='about'></Link> About</li>
                <li className='menulink'><Link href='skills'></Link> Skills</li>
                <li className='menulink'><Link href='contact'></Link>Contact</li>

            </ul>
            
            
        </div>
      
    </div>
  )
}

export default Navbar
