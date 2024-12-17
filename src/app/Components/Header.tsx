import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className=' bg-[#FFFFFF] flex justify-between h-[67px] shadow-sm sticky' >
      <ul className='flex justify-between items-center gap-8 px-10'>

        
        <li><Link href="/">home</Link></li>
        <li><Link href="/shope">shope</Link></li>
        <li><Link href="/product-page">product-page</Link></li>
        <li ><Link href="/page">page</Link></li>
        <li><Link href="/about">about</Link></li>

      </ul>
      <div className='flex w-[168px]  '>
      <div className='flex justify-between items-center text-[14px] text-[#636270]  leading-[15.4px]'>Contact:(0998) 55-6688
     
         {/* <p className='flex justify-between items-center text-[#272343] font-inter size-[14px] font-medium leading-[15.4px]'>(808) 555-0111 </p>  */}

 </div> 
      </div>
    </div>
  )
}

export default Header
