import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div>
      <div className='flex  justify-between items-center mx-20 my-20 gap-4 '>
        <div className='flex  flex-col w-[672px] h-[478px] bg-[#007580] ml-10'>
           
            <h1 className=' flex justify-between items-center font-[inter]  pl-20 py-5 text-[32px] leading-[38.73px] text-[#FFFFFF] font-bold'>About Us - Comforty</h1>
            <p className='flex justify-between items-center  px-20 py-20 w-[495px] h-[110px] font-[inter] text-[#FFFFFF] text-[18px] font-normal leading-[21.78px] '>At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
             <button className='flex w-[115px] h-[24px]  justify-between items-center  ml-20 text-[16px] font-normal leading-[24px] text-[#FFFFFF]'>View collection</button> 
        </div>
  <div className=' flex justify-between items-center'>
    <Image 
    src="/card (1).png"
    alt="/card (1).png"
    width={619} 
    height={200}
    />
  </div>
      </div>
    </div>
  )
}

export default page
