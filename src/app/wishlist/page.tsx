'use client'
import { useState, useEffect } from 'react';
import { ProductType } from '../DetailPage/[id]/page';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import MainImage from '../Component/MainImage';
import Link from 'next/link';

const WishlistPage = () => {
  // State to store the wishlist products
  const [wishlist, setWishlist] = useState<ProductType[]>([]);

  // Load wishlist from localStorage or any other state management system
  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist)); // Set the wishlist from localStorage
    }
  }, []);
  
  // If no products are in the wishlist, show a message
  if (wishlist.length === 0) {
      return( 
        <>
        <MainImage tittle='WishList' />      
        <div className="my-6 flex flex-col justify-center items-center gap-2">
        <Image 
        src={'/Images/empty-wishlist.png'}
        width={400}
        height={400}
        alt='empty-wishlist'
        />
        <h2 className='text-[24px] font-semibold'>Your Wishlist Is Empty</h2>
        <h3 className='text-[14px] text-gray-600'>Create Your First Wishlist Request</h3>
        <button className='bg-orange-500 rounded-md px-6 py-3 text-white font-medium mt-1 '>
        <Link href={'/Shop'} className='flex items-center gap-2'>
            <h2 className='text-bold text-[24px]'>+</h2> 
        <h3>Create New Wish</h3>
        
        </Link>
        </button>
    </div>
        </>
    )
  }

  return (
    <>
            <MainImage tittle='WishList' />      
      <div className="max-w-screen-xl mx-auto p-6">
      <div className="my-9 flex flex-wrap justify-center gap-12">
        {wishlist.map((product) => (
          <div key={product._id} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <Image 
              src={urlFor(product.image).url()} // Ensure the image URL is correct
              alt={product.name}
              width={200}  // Adjust width and height as needed
              height={200}
              className="w-48 h-48 object-cover" 
            />
            <div className="text-center mt-4">
              <h3 className="text-xl font-medium">{product.name}</h3>
              <p className='text-blue-500 font-bold'>{product.price}$</p>
              <p className="text-sm text-gray-500">{product.description}</p>
              <button
                onClick={() => handleRemoveFromWishlist(product._id)}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-all duration-300"
              >
                Remove from Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
        </>
  );
};

// Function to handle removing a product from the wishlist
const handleRemoveFromWishlist = (id: string) => {
  // Remove the product from localStorage and update the state
  const updatedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]').filter(
    (item: ProductType) => item._id !== id
  );
  localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); // Update localStorage
  window.location.reload(); // Reload to reflect the changes
};

export default WishlistPage;
