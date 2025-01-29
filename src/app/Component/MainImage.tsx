import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ImageTittle {
  tittle: string;
}

const MainImage: React.FC<ImageTittle> = ({ tittle }) => {
  return (
    <div className="relative h-[316px] flex justify-center items-center">
      {/* Background Image */}
      <Image
        className="absolute inset-0 object-cover w-full h-full"
        src="/Images/Rectangle 1.png"
        width={1440}
        height={316}
        alt="Background"
      />

      {/* Content */}
      <div className="flex flex-col items-center gap-4 z-10 text-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <Image
            src="/Images/logo.png"
            width={77}
            height={77}
            alt="logo"
          />
          <h2 className="text-2xl md:text-4xl lg:text-[48px] font-medium text-black">
            {tittle}
          </h2>
        </div>

        {/* Breadcrumb Section */}
        <div className="flex items-center gap-2 text-sm md:text-base text-black">
          <Link href="/" className="font-medium hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/" className="font-light hover:underline">
            {tittle}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainImage;
