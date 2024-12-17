import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
<div>
    <div className=' flex justify-between items-center  mx-10'>
         <div className='flex justify-between items-center'>
                  <Image
                  src="/chair12.png"
                  alt="/chair12.png"
                  width={400}
                  height={500}
                  
                  />
      
              </div>
              <div className='flex flex-col w-[541px] '>
                <p className='  flex justify-between items-center font-[inter] font-bold leading-[66px] text-[60px]'>Library Stool Chair</p>
                <button className='font-[inter] font-semibold text-[20px] leading-[22px] bg-[#029FAE] text-white w-[144px] h-[44px] rounded-full'>$20.00 USD</button>
                <p className='flex justify-between items-center font-[inter] font-normal text-[22px] text-[#272343] leading-[33px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                <button className='w-[212px] h-[63px] text-white rounded-md bg-[#029FAE]'>Add To cart</button>
                </div>
                </div>
               
                 
                <div className='flex justify-between items-center'>
                <p className=' flex justify-between items-center w-[401px] h-[34px] font-[inter]  font-bold text-[28px] text-[#000000] leading-[33.89px] px-20'>Featured Products</p>
                <p className='flexw-[35px] justify-between px-20 items-center h-[31px] text-[#000000]'>view all</p>
                </div>
                {/* images div */}
                <div className='flex justify-between items-center gap-2 mx-10'>
                <div className='flex justify-between items-center'>
                  <Image
                  src="/chair4.png"
                  alt="/chair4.png"
                  width={270}
                  height={263}                 
                  
                  />
      
              </div>
          
              <div className='flex justify-between items-center'>
                  <Image
                  src="/chair5.png"
                  alt="/chair5.png"
                  width={270}
                  height={263}
                  
                  />
      
              </div>
              <div className='flex justify-between items-center'>
                  <Image
                  src="/chair-11.png"
                  alt="/chair-11.png"
                  width={270}
                  height={263}
                  
                  />
      
              </div>
              <div className='flex justify-between items-center'>
                  <Image
                  src="/Products.png"
                  alt="/Products.png"
                  width={270}
                  height={263}
                  
                  />
      
              </div>
              <div className='flex justify-between items-center'>
                  <Image
                  src="/chair-10.png"
                  alt="/chair-10.png"
                  width={270}
                  height={263}
                  
                  />
      
              </div> 
            </div>

    </div>
       
  )
}

export default page
