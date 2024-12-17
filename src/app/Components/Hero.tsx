import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <main>
      <div className='flex justify-around  h-[850px] mx-20 bg-[#F0F2F3] '>
        <div className='  w-[557px] h-[337px] pt-[229px] pl-[70px]  rounded-lg'>
          <p className='font-normal text-sm[14px] text-[#272343] leading-3'>welcom to chairy</p>
          <p className=' font-bold text-6xl leading-[66px] text-[#272343]'>Best Furniture
Collection for your
interior.</p>
</div>

<div className='flex justify-between items-center'>

<Image
  src="/Product Image.png"
  alt="/Product Image.png"
  width={434}
  height={584}
  />
  </div>
   
  </div>
  <div className=' flex mx-20 '>
     <Image 
    src="/Company Logo.png" 
    alt="/Company Logo.png"
    width={1321}
    height={139}
    
    />

  </div> 

    <h1 className='h-[44px] flex justify-between items-center text-[#272343] font-[inter] text-[32px] leading-[35.2] mx-20'> products features</h1>
    <div className='flex justify-between items-center h-[461px]'>
      <div className='flex justify-center items-center gap-2 mx-20'>
        <Image 
        src="/chair5.png"
        alt='/chair5.png'
        width={312}
        height={312}
        />

<Image 
        src="/chair1.png"
        alt='/chair1.png'
        width={312}
        height={312}
        />

        
<Image 
        src="/Products.png"
        alt='/Product.png'
        width={312}
        height={312}
        />
                
<Image 
        src="/Products (1).png"
        alt='/Products (1).png'
        width={312}
        height={312}
        />
      </div>
    
    </div>
    <h1 className='flex justify-between items-center mx-10 my-10 h-[44px] text-[#272343] font-[inter] text-[32px] leading-[35.2px] '>Top catogaries</h1>
    <div className='flex justify-between items-center gap-2 mx-20'>
      <Image 
        src="/chair7.png"
        alt='/chair7.png'
        width={424}
        height={424}
        /> 
        <Image 
        src="/chair9.png"
        alt='/chair9.png'
        width={424}
        height={424}
        />
        <Image 
        src="/chair8.png"
        alt='/chair8.png'
        width={424}
        height={424}
        />
        
      </div>
      {/* new line 1  */}
      <div className=' flex flex-col items-center gap-4 my-4'>
        <div className=' flex justify-between items-center'>
        <Image 
        src="/hot-category.png"
        alt="/hot-category.png"
        width={648}
        height={648}/>
     <div/>
 
     
       {/* new line 2  */}

      
   {/* <div className='flex flex-col '>
        
  

   
        

          </div> */}
          <div/>
           

          </div>  
         
         </div>  
    

         
      {/* new line start from here  */}
      <div className=' flex justify-center items-center w-[205px] h-[35px] text-[#272343] font-[inter] text-[32px] leading-[35.2px] mx-10 my-5'>
  Our Products
  </div>
 <div className=' flex justify-between items-center h-[919] mx-10 gap-2'>
 
<div className='flex justify-between items-center'>
<Image
 src="/chair5.png"
 alt="/chair5.png"
 width={312}
 height={377}/>
</div>
<div className='flex justify-between items-center'>
<Image
 src="/chair1.png"
 alt="/chair1.png"
 width={312}
 height={377}/>
</div>
<div className='flex justify-between items-center'>
<Image
 src="/Products.png"
 alt="/Products.png"
 width={312}
 height={377}/>
</div>
<div className='flex justify-between items-center'>
<Image
 src="/Products (1).png"
 alt="Products (1).png"
 width={312}
 height={377}/>
</div>



 </div>
 

 
{/* new line added */}
<div className=' flex justify-between items-center h-[919] mx-10 gap-2'>
 
<div className='flex justify-between items-center'>
<Image
 src="/chair7.png"
 alt="/chair7.png"
 width={312}
 height={377}/>
</div>
<div className='flex justify-between items-center'>
<Image
 src="/chair6.png"
 alt="/chair6.png"
 width={312}
 height={377}/>
</div>
<div className='flex justify-between items-center'>
<Image
 src="/chair4.png"
 alt="/chair4.png"
 width={312}
 height={377}/>
</div>
<div className='flex justify-between items-center'>
<Image
 src="/chair5.png"
 alt="/chair5.png"
 width={312}
 height={377}/>
</div>



 </div>
 

 


    </main>
    
  )
  
}

export default Hero
         