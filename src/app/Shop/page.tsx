'use client';
import React, { useEffect, useState } from 'react';
import MainImage from '@/app/Component/MainImage';
import Features from '../Component/Features';
import Pagination from '../Component/Pagination';
import FilteredHead from '../Component/FilteredHead';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

interface ProductType {
  _id: string;
  name: string;
  image: any;
  price: number;
  stockLevel: number;
  category?: string; // Optional in case it's missing
  displayedCount: number; // Number of products being displayed
  totalCount: number; 
}

const Shop = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('default');
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Track loading state

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts: ProductType[] = await client.fetch(
          `*[_type == 'product'][0..21]{
            _id,
            name,
            image,
            price,
            stockLevel,
            category
          }`
        );
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts); // Initialize with all products
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on selected category
  useEffect(() => {
    if (selectedCategory === 'default') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  // Skeleton Loader Component
  const SkeletonLoader = () => (
    <div className="flex items-center justify-center gap-12 flex-wrap">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="flex flex-col gap-3 p-4 animate-pulse">
          <div className="bg-gray-300 w-[300px] h-[300px] rounded-md"></div>
          <div className="w-[260px] gap-2 flex flex-col">
            <div className="bg-gray-300 w-[212px] h-[16px] rounded-md"></div>
            <div className="flex justify-between items-center">
              <div className="bg-gray-300 w-[50px] h-[16px] rounded-md"></div>
              <div className="bg-gray-300 w-[50px] h-[16px] rounded-md"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div>
        {/* Main Section */}
        <MainImage tittle="Shop" />
        <FilteredHead
          onFilterChange={(category) => setSelectedCategory(category)}
          displayedCount={filteredProducts.length}
          totalCount={products.length}
        />

        {/* Product Details */}
        {loading ? (
          <SkeletonLoader /> // Show skeleton while loading
        ) : (
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {filteredProducts.map((detail) => (
              <div className="flex flex-col gap-3 hover:shadow-lg shadow-black rounded-md p-4" key={detail._id}>
                <Link  href={`/DetailPage/${detail._id}`}>
                  <Image
                    src={urlFor(detail.image)?.url() || '/placeholder.png'} // Fallback image
                    width={300}
                    height={300}
                    alt={detail.name}
                  />
                </Link>
                <div className="w-[260px] gap-2 flex flex-col">
                  <h3 className="font-medium text-[16px] w-[212px]">{detail.name}</h3>
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">{detail.price}$</h4>
                    <h4>Item: {detail.stockLevel}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="my-10">
          <Pagination />
        </div>
      </div>

      {/* Features Section */}
      <Features />
    </>
  );
};

export default Shop;
