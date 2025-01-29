import Image from 'next/image'
import React from 'react'
import { IoMdTime } from 'react-icons/io'
import { LuCalendar } from 'react-icons/lu'
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Link from 'next/link';

interface ProductType{
  _id:string,
  name:string
  image:SanityImageSource
  price:number,
  stockLevel:number
}

const Page = async() => {
// Fetch products using the Sanity client
const products:ProductType[] = await client.fetch(
  `*[_type == 'product']{
    _id,
    name,
    image,
    price,
    stockLevel
  }[1..5]`
);
const filteredProducts = products.filter((_, index) => index !== 3);

  return (
    <>
    <div className='bg-mainColor md:h-[750px] flex justify-center items-center'>
<div className='md:-mt-36  tiny:w-[50rem] ml-4 xs:ml-14 flex flex-col'>
  <div className='text-sm tiny:text-xl xs:leading-tight xs:text-[30px]  sm:text-[40px] md:text-[55px] lg:text-[64px] font-[medium]'>
<h1 >Rocket single</h1>
<h1>seater</h1>
  </div>
<div className='text-[10px] tinny:text-xs sm:text-base lg:text-[24px] font-medium w-[121px] h-[49px] xs:w-auto xs:h-auto'>
    <span className='border-b-2  border-black pb-2'>Shop Now</span>
    
    </div>
</div>
<div className='md:-mt-28'>
<Image className=''
src={'/Images/couch.svg'}
width={853}
height={1000}
alt='caoch'
/>
</div> 
</div>

<div className='pt-12 pb-12 pr-10 xs:pr-0 relative flex flex-col md:flex-row items-center justify-center gap-6 bg-secondBg'>
  <div className='flex-col relative  flex justify-center items-center'>
    <Image 
      className='w-full max-w-[400px] md:max-w-[650px]'   
      src={'/Images/table.png'}
      height={562} 
      width={605} 
      alt='table' 
    />
  <div className='relative items-center flex flex-col tiny:gap-5 text-center md:text-left md:absolute  md:bottom-0 tiny:bottom-14
   xs:left-20'>
    <h2 className='text-[28px] md:text-[36px] font-medium'>Side table</h2>
    <h4 className='text-[18px] md:text-[24px]'>
      <span className='border-b-2 border-black'>View More</span>
    </h4>
  </div>
  </div>



  <div className='flex-col relative  flex justify-center items-center
  '>
    <Image 
      className=' w-full max-w-[400px] md:max-w-[650px] pb-8 tiny:pb-9' 
      src={'/Images/Cloud sofa.png'}
      width={605} 
      height={562} 
      alt='coach' 
    />
      <div className=' items-center flex flex-col tiny:gap-5 text-center md:text-left absolute bottom-0  md:bottom-0 xs:bottom-8
   lg:left-[105px]'>
    <h2 className='text-[28px] md:text-[36px] font-medium'>Side table</h2>
    <h4 className='text-[18px] md:text-[24px]'>
      <span className='border-b-2 border-black'>View More</span>
    </h4>
  </div>
  </div>


</div>
<div className= 'flex flex-col justify-evenly bg-white'>
<div className='flex flex-col items-center justify-center'>
    <div className='flex flex-col gap-4  items-center mt-10  mb-8'>

<h2 className='text-[33px] md:text-[36px] font-medium'>Top Picks For You</h2>
<h4 className='md:text-[16px] text-[13px] px-4
 font-medium text-customGrey'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</h4>
    </div>
{/* <ProductsItems /> */}
<div className='flex items-center justify-center gap-12 flex-wrap'>
      {filteredProducts.map((detail, i: number) => (
        <div className='flex flex-col gap-3' key={detail._id}>
          <Link href = {`/DetailPage/${detail._id}`}>
          <Image
            src={urlFor(detail.image).url()}
            width={300}
            height={300}
            alt={detail.name}
            />
            </Link>
          <div className='w-[260px] gap-2 flex flex-col'>
            <h3 className='font-medium text-[16px] w-[212px] '>
              {detail.name}
            </h3>
            <div className='flex justify-between items-center'>
            <h4 className=' font-medium'>
              {detail.price}$
            </h4>
            <h4>Item:{detail.stockLevel}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
</div>
<div className='my-10 flex justify-center '>
                <h3 className=' text-[24px] border-b-2  border-black'> View More</h3>
               
                </div>
</div>
<div className='overflow-hidden lg:h-[800px] h-[610px] flex justify-center items-center xs:h-screen relative bg-customBg '>
<Image
className='md:w-[700px] lg:w-[984px]'
src={'/Images/Asgaard sofa 1.png'}
width={984}
height={799}
alt='Asgaard sofa 1'
/>
<div className='w-[331px] h-[205px] absolute bottom-0 xs:-bottom-3 tiny:-bottom-16  md:top-[70%] tiny:right-5 flex flex-col items-center gap-5'>
    <h3 className='text-[18px] xs:text-[20px] lg:text-[24px] font-medium '>New Arrivals</h3>
    <h1 className='text-[27px] xs:text-[36px] lg:text-[48px] font-bold -mt-6'>Asgaard sofa</h1>
    <button className='w-[180px] xs:w-[200px] xs:h-[55px] h-[45px] lg:w-[255px] lg:h-[64px] border-[1px] border-black'>
    Order Now
    </button>
</div>
</div>
<div className=' flex flex-col gap-6 items-center justify-evenly '>
<div className='  mt-4  flex flex-col items-center md:gap-3'>
<h2 className='font-medium text-[36px]'>Our Blogs</h2>
<p className='font-medium my-5 px-4
   text-[12px] md:text-[16px] text-customGrey'>Find a bright ideal to suit your taste with our great selection</p>
</div>
<div className="flex flex-col px-4 md:px-0">
  <div className="flex flex-wrap gap-4 sm:gap-8 justify-center">
    {/* Card 1 */}
    <div className="flex flex-col w-full max-w-[280px] sm:max-w-[350px] md:max-w-[393px]">
      <Image
        src={'/Images/Rectangle 13.png'}
        width={393}
        height={393}
        alt="Rectangle 13"
        className="rounded-[4px] w-full"
      />
      <div className="flex flex-col gap-3 mt-4">
        <h2 className="text-[16px] sm:text-[20px] text-center sm:text-left">
          Going all-in with millennial design
        </h2>
        <h1 className="text-[20px] sm:text-[24px] text-center">
          <span className="font-medium border-b-2 border-black pb-1">Read More</span>
        </h1>
        <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-4">
          <div className="flex items-center gap-1 sm:gap-2">
            <IoMdTime className="text-[20px] sm:text-[24px]" />
            <h4 className="text-[14px] sm:text-[16px]">5 min</h4>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <LuCalendar className="text-[20px] sm:text-[24px]" />
            <span className="text-[14px] sm:text-[16px]">12th Oct 2022</span>
          </div>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col w-full max-w-[280px] sm:max-w-[350px] md:max-w-[393px]">
      <Image
        src={'/Images/Rectangle 14.png'}
        width={393}
        height={393}
        alt="Rectangle 14"
        className="rounded-[4px] w-full"
      />
      <div className="flex flex-col gap-3 mt-4">
        <h2 className="text-[16px] sm:text-[20px] text-center sm:text-left">
          Going all-in with millennial design
        </h2>
        <h1 className="text-[20px] sm:text-[24px] text-center">
          <span className="font-medium border-b-2 border-black pb-1">Read More</span>
        </h1>
        <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-4">
          <div className="flex items-center gap-1 sm:gap-2">
            <IoMdTime className="text-[20px] sm:text-[24px]" />
            <h4 className="text-[14px] sm:text-[16px]">5 min</h4>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <LuCalendar className="text-[20px] sm:text-[24px]" />
            <span className="text-[14px] sm:text-[16px]">12th Oct 2022</span>
          </div>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col w-full max-w-[280px] sm:max-w-[350px] md:max-w-[393px]">
      <Image
        src={'/Images/Rectangle 15.png'}
        width={393}
        height={393}
        alt="Rectangle 15"
        className="rounded-[4px] w-full"
      />
      <div className="flex flex-col gap-3 mt-4">
        <h2 className="text-[16px] sm:text-[20px] text-center sm:text-left">
          Going all-in with millennial design
        </h2>
        <h1 className="text-[20px] sm:text-[24px] text-center">
          <span className="font-medium border-b-2 border-black pb-1">Read More</span>
        </h1>
        <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-4">
          <div className="flex items-center gap-1 sm:gap-2">
            <IoMdTime className="text-[20px] sm:text-[24px]" />
            <h4 className="text-[14px] sm:text-[16px]">5 min</h4>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <LuCalendar className="text-[20px] sm:text-[24px]" />
            <span className="text-[14px] sm:text-[16px]">12th Oct 2022</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



</div>
<div className='flex justify-center my-10 '>
<h1 className='font-medium text-[24px] text-center mb-2'>
        <span className='border-b-2 border-black pb-3'>View All Post</span>
    </h1>

</div>
<div className='flex justify-center items-center  h-[445px] '>
    <div className=' absolute gap-3 flex flex-col items-center'>
        <h1 className='font-bold tiny:text-[40px] md:text-[60px]'>Our Instagram</h1>
        <h3 className='tiny:text-[20px]'>Follow our store on Instagram</h3>
        <button className='mt-2 shadow-lg shadow-black/40 w-[140px] tiny:w-[200px] md:w-[255px] h-[55px] md:h-[64px] bg-secondBg rounded-full'>Follow Us</button>
    </div>
<Image
className='md:h-[440px] mt-2  h-[440px]' 
src={'/Images/Group 43.png'}
width={1440}
height={450}
alt='Group 43'
/>
</div>
</>
  )
}

export default Page