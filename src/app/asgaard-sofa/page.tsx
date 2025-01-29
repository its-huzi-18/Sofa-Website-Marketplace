import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { IoIosHeartEmpty } from 'react-icons/io';

const AsgaardPage = () => {
    return (
        <>
            {/* Navigation Bar */}
            <nav className="h-24 flex items-center gap-4 px-4 sm:px-20">
                <ul className="flex items-center gap-2 list-none flex-wrap">
                    <li className="text-[#9F9F9F] text-sm sm:text-base">Home</li>
                    <Image
                        src="/Images/black-arr.png"
                        alt="arrow"
                        width={20}
                        height={20}
                    />
                    <li className="text-[#9F9F9F] text-sm sm:text-base">Shop</li>
                    <Image
                        src="/Images/black-arr.png"
                        alt="arrow"
                        width={20}
                        height={20}
                    />
                    <li className="text-[#9F9F9F] text-sm sm:text-base">
                        <h3 className="border-l-2 border-[#9F9F9F] pl-2">Asgaard Sofa</h3>
                    </li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row items-start justify-evenly mt-8 px-4 lg:px-16 gap-8">
                {/* Sidebar Thumbnails */}
                <div className="order-2 lg:order-1 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible">
                    {[1, 2, 3, 4].map((num) => (
                        <div key={num} className="flex-shrink-0">
                            <Image
                                src={`/Images/sec${num}.png`}
                                alt={`sec${num}`}
                                width={76}
                                height={80}
                                className="w-20 h-20 object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* Product Image Container */}
                <div className="order-1 lg:order-2 bg-[#F9F1E7] w-full lg:w-1/2 flex items-center justify-center p-4 rounded-md">
                    <Image
                        src="/Images/Asgaard sofa 1.png"
                        alt="Asgaard sofa 1"
                        width={500}
                        height={600}
                        className="max-w-full h-auto"
                    />
                </div>

                {/* Product Details */}
                <div className="order-3 flex flex-col max-w-full lg:max-w-lg">
                    <h1 className="text-2xl sm:text-4xl font-semibold mb-2">Asgaard Sofa</h1>
                    <span className="text-lg sm:text-2xl text-[#9F9F9F]">Rs. 250,000.00</span>

                    <div className="flex items-center gap-3 mt-4">
                        <Image
                            src="/Images/five-star.png"
                            alt="star rating"
                            width={124}
                            height={20}
                        />
                        <div className="border-l border-[#9F9F9F] h-3"></div>
                        <span className="text-[#9F9F9F] text-sm">5 Customer Reviews</span>
                    </div>

                    <p className="mt-6 text-sm lg:text-base">
                        Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                    </p>

                    {/* Size Selection */}
                    <h2 className="mt-8 text-[#9F9F9F]">Size:</h2>
                    <div className="flex items-center gap-3 mt-4">
                        <button className="w-8 h-8 bg-[#FBEBB5] text-black rounded flex items-center justify-center text-sm hover:bg-[#A77A27]">
                            L
                        </button>
                        <button className="w-8 h-8 bg-[#F9F1E7] rounded flex items-center justify-center text-sm hover:bg-[#B88E2F] hover:text-white">
                            XL
                        </button>
                        <button className="w-8 h-8 bg-[#F9F1E7] rounded flex items-center justify-center text-sm hover:bg-[#B88E2F] hover:text-white">
                            XS
                        </button>
                    </div>

                    {/* Color Selection */}
                    <h2 className="mt-8 text-[#9F9F9F]">Color:</h2>
                    <div className="flex items-center gap-3 mt-4">
                        <div className="w-8 h-8 bg-[#816DFA] rounded-full"></div>
                        <div className="w-8 h-8 bg-black rounded-full"></div>
                        <div className="w-8 h-8 bg-[#CDBA7B] rounded-full"></div>
                    </div>

                    {/* Quantity and Actions */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
                        <div className="flex items-center border border-black/50 rounded-2xl w-32 sm:w-[123px] h-12 sm:h-[64px]">
                            <button className="px-3">-</button>
                            <span className="px-4">1</span>
                            <button className="px-3">+</button>
                        </div>

                        <button className="w-full sm:w-[215px] h-12 sm:h-[64px] bg-transparent text-black rounded-2xl border border-black flex items-center justify-center gap-2 mt-4 sm:mt-0 sm:ml-3">
                            Add To Cart
                        </button>
                    </div>
                    <div className='my-12'>
<hr />
<div className='grid grid-cols-[100px_1fr] mt-8'>
<div className=' flex flex-col justify-center text-customGrey gap-3'>
    <div>SKU</div>
    <div>Category</div>
    <div>Tags</div>
    <div>Share</div>
</div>
<div className='flex flex-col justify-center text-customGrey gap-3'>
    <div> <span className='mx-2'>:</span> SS001</div>
    <div> <span className='mx-2'>:</span> Sofas</div>
    <div> <span className='mx-2'>:</span> Sofa, Chair, Home, Shop</div>
    <div>
        <div className='flex gap-2 items-center'>
    <span className='mx-2 text-customGrey'>:</span>
        <i className='text-black text-[20px] flex gap-6 items-center'>
        <FaFacebook />
        <FaLinkedin />
        <AiFillTwitterCircle className='text-[24px]'/>
        </i>
        <div className='md:ml-32 ml-10'>
        <IoIosHeartEmpty className='text-[34px] text-red-500' />
        </div>
        </div>
    </div>
</div>
</div>
                    </div>
                </div>
            </div>


            {/* Description Section */}
            <div className="px-4 sm:px-16 mt-8">
                <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left md:gap-6 sm:gap-16 text-lg md:text-[24px] sm:text-xl">
                    <h1>Description</h1>
                    <span className="text-[#9F9F9F]">Additional Information</span>
                    <span className="text-[#9F9F9F]">Reviews [5]</span>
                </div>

                <div className="mt-8 text-sm sm:text-base text-[#9F9F9F]  mx-auto">
                    <p>
                        Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                    </p>
                    <br />
                    <p>
                    Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                    </p>
                </div>
            </div>
            <div className='px-3 md:px-0 mt-10 mb-14 flex-col md:flex-row gap-8 md:gap-0 flex justify-evenly'>
                <Image 
                src={'/Images/sofa-fir.png'}
                width={605}
                height={348}
                alt='sofa-fir'
                />
                <Image 
                src={'/Images/sofa2.png'}
                width={605}
                height={348}
                alt='sofa-fir'
                />
            </div>
<hr />
            <h1 className="text-center text-2xl sm:text-4xl font-semibold mt-14">Related Products</h1>
            <div className="flex justify-center px-4">
                {/* <ProductItems /> */}
            </div>
            <div className="mt-10 flex justify-center">
                <h3 className="pb-2 my-10 text-lg sm:text-2xl border-b-2 border-black/60">View More</h3>
            </div>
        </>
    );
};

export default AsgaardPage;
