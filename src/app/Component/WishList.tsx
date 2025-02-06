'use client'
// WishlistButton.tsx
import { useState, useEffect } from 'react';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import { ProductType } from '../DetailPage/[id]/page';

interface WishlistButtonProps {
  product: ProductType;
}

const WishlistButton = ({ product }: WishlistButtonProps) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  // Check if the product is in the wishlist on mount
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setIsInWishlist(wishlist.some((item: ProductType) => item._id === product._id));
  }, [product]);

  // Toggle the wishlist status
  const handleWishlistToggle = () => {
    setIsInWishlist((prev) => {
      const updatedStatus = !prev;

      if (updatedStatus) {
        addProductToWishlist(product);
      } else {
        removeProductFromWishlist(product);
      }

      return updatedStatus;
    });
  };

  // Add product to wishlist
  const addProductToWishlist = (product: ProductType) => {
    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

    // Check if the product is already in the wishlist
    if (!wishlist.some((item: ProductType) => item._id === product._id)) {
      wishlist.push(product);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
  };

  // Remove product from wishlist
  const removeProductFromWishlist = (product: ProductType) => {
    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    wishlist = wishlist.filter((item: ProductType) => item._id !== product._id);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  };

  return (
    <div className="cursor-pointer" onClick={handleWishlistToggle}>
      {isInWishlist ? (
        <IoIosHeart className="text-[34px] text-red-500" />
      ) : (
        <IoIosHeartEmpty className="text-[34px] text-red-500" />
      )}
    </div>
  );
};

export default WishlistButton;
