import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <main>
{/* <div className='flex h-[75px] bg-[#E1E3E5]  pt-[24px] pr-[300] pb-[24px] pl-[300px] gap-80 '>
        <div className=' w-[341] h-[21px] font-[poppins] text-[14px] leading-[21px] font-normal'>
        @ 2021 - Blogy - Designed & Develop by Zakirsoft
        </div>
        <div className=' flex justify-center items-center w-[227px]  '>

            <Image 
                  src="/Group 13.png"
                  alt='/Group 13.png'
                 width={300}
                 height={75}
                  />
        </div>
 </div> */}
  {/* top footer  */}
  <div className='flex justify-between items-center  gap-4 h-[343px] bg-[#E1E3E5]'>
  <div className=' flex flex-col w-[168px] h-[40px] px-10 gap-4'>
    
  <Image 
                  src="/Logo.png"
                  alt='/Logo.png'
                 width={100}
                 height={100}
                  />
                  <div className='flex justify-center items-center font-[inter] font-[400]  text-[16px] leadind-[24px] text-[#272343] w-[350px] h-[72px] opacity-60'>
                 Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                 Cras egestas purus 
 </div>              
 
 <div>
 <Image 
                  src="/Social Links@2x.png"
        
                  alt='/Social Links@2x.pngLogo.png'
                 width={100}
                 height={100}
                  />
 </div>

  </div>
  {/* new ine */}
  <div className=' flex flex-col h-[203] pt-[24px] pl-40 '>
  <div className=' flex justify-between items-center w-[82px] h-[15px] font-[inter] font-medium text-[14px] leading-[15.4px] text-[#9A9CAA]'>
    Category

  </div>
  <div className=' flex justify-between items-center h-[168px]  font-[inter] font-normal text-[16px] leading-[17.6px]  text-[#272343]'>
    <ul className='flex flex-col gap-2 '>
      <li className='w-[35px] h-[18px] font-[inter] font-normal text-[16px] leading-[17.6px] text-[#272343]'>sofa</li>
      <li className='w-[68px] h-[18px] font-[inter] font-normal text-[16px] leading-[17.6px] text-[#272343]'>Armchair</li>
      <li className='w-[83px] h-[18px] font-[inter] font-normal text-[16px] leading-[17.6px] text-[#272343]'>Wing Chair</li>
      <li className='w-[83px] h-[18px] font-[inter] font-normal text-[16px] leading-[17.6px] text-[#007580]'>Desk Chair</li>
      <li className='w-[105px] h-[18px] font-[inter] font-normal text-[16px] leading-[17.6px] text-[#272343]'>wooden Chair</li>
      <li className='w-[86px] h-[18px] font-[inter] font-normal text-[16px] leading-[17.6px] text-[#272343]'>Park Bench</li>
    </ul>
  </div>
  </div> 

  {/* new para */}
   <div className='flex flex-col w-[156px] gap-3 h-[143] mr-10 '>
    <div className='flex justify-center items-center w-[72px] h-[15px] font-[inter] font-medium leading-[15.4px] text-[14px] text-[#9A9CAA]'>
   
    Support
    </div>
     <div className='flex justify-between items-center'>
    <ul className='flex flex-col gap-2 '>
      <li className='w-[115px] h-[18px] text-[#272343] font-[inter] text-[16px] leading-[17.6px]'>Help & Support</li>
      <li className='w-[156px] h-[18px] text-[#272343] font-[inter] text-[16px] leading-[17.6px]'>Tearms & Conditions</li>
      <li className='w-[105px] h-[18px] text-[#272343] font-[inter] text-[16px] leading-[17.6px]'>Privacy Policy</li>
      <li className='w-[35px] h-[18px] text-[#272343] font-[inter] text-[16px] leading-[17.6px]'>Help</li>
    </ul>
    </div>
 
    </div>

  {/* </div>  */}
  <div className='flex flex-col  mr-20  gap-4'>
    <div className='flex justify-center items-center w-[72px] h-[15px] font-[inter] font-medium leading-[15.4px] text-[14px] text-[#9A9CAA]'>
   
    newsletter
    </div>
    < form className='flex mr-[40]'>
      <input type="email" placeholder='your email'
      className='w-30 px-5 py-2 '
      />
      <button type='submit' className='px-4  '>subscribe</button>

    </form>
    </div>
    {/* <form className='flex'>
      <input type="email" placeholder='your email'
      className='w-full px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:ring-teal-400'
      />
      <button type='submit' className='px-4 pb-teal-500 text-white font-semibold rounded-r-lg hover:bg-teal-600'>subscribe</button>

    </form> */}
   </div> 
 
 {/* mini footer */}
 <div className='flex h-[75px] bg-[#E1E3E5] border border-black pt-[24px] pr-[300] pb-[24px] pl-[300px] gap-80 '>
        <div className=' w-[341] h-[21px] font-[poppins] text-[14px] leading-[21px] font-normal'>
        @ 2021 - Blogy - Designed & Develop by Zakirsoft
        </div>
        <div className=' flex justify-center items-center w-[227px]  '>

            <Image 
                  src="/Group 13.png"
                  alt='/Group 13.png'
                 width={300}
                 height={75}
                  />
        </div>
 </div> 

 </main>
  )
}

export default Footer
   