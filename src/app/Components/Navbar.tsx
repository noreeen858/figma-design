import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiAlertCircle } from "react-icons/fi";
import Image from 'next/image';



const Navbar = () => {    
  return ( <header>
    <div className=' bg-[#272343] text-white flex justify-between items-center h-[45px]  md:px-20 lg:px-[300px]'>
    free shipping on all over $50
    <div className='flex justify-between items-center w-[202px] h-[17px] gap-24px opacity-70%'>
      <div className='flex justify-between items-center w-[24px] h-[17px] gap-[4px] '>
        <p className='font-inter w-[400] size-13px line height-16.9px align-center text-[#ffffff]'>eng</p>

      </div>
      <RiArrowDropDownLine className='text-white text-2xl font-semibold ' />
      <div className='flex justify-between items-center w-[30px] h[17px]'>
        <p className='font-inter w-[400] size-13px line height-16.9px align-center text-[#ffffff]'>faqs</p>
      </div>
      
      <FiAlertCircle className='flex '/>
      <div className='flex justify-between items-center w-[65px] h-[17px]'>
        <p className='font-inter w-[400] size-13px line height-16.9px align-center text-[#ffffff]'>needhelp</p>
      </div>

    </div>

    </div>
    {/* middle section */}
  <div className=' bg-[#f0f2f3] pr-10 flex justify-between items-center h-[84px] pl-[50px]'>
   <Image 
      src="/Logo.png"
      alt="/Logo.png"
      width={200}
      height={200}
      
      />
   
    <div className=' flex'>
     <Image
      src="/Cart.png" 
      alt="/Cart.png"
      width={142}
      height={44}
      />
      
      

     </div> 
     
  
    

     
  
</div>
  </header>
    
  )
}

export default Navbar
