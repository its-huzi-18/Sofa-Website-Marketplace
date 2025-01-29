import React from 'react';
import Image from 'next/image';
import MainImage from '../Component/MainImage';
import Features from '../Component/Features';

const BlogPage = () => {
  return (
    <>
<MainImage 
tittle='Blog'
/>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:h-[2210px] px-4 lg:px-0">
        {/* Left Section */}
        <div className="lg:w-1/2 lg:ml-12">
          {/* Blog Post 1 */}
          <Image
            src={"/Images/laptop.png"}
            alt="laptop-img"
            width={817}
            height={500}
            className="mt-8 lg:mt-28 w-full"
          />
          <div className="flex items-center gap-2 lg:gap-4 mt-2">
            <Image src={"/Images/user.svg"} alt="user-img" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
            <Image src={"/Images/briefcase.svg"} alt="briefcase-img" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
            <Image src={"/Images/wood.svg"} alt="wood-img" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
          </div>
          <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">
            Going all-in with millennial design
          </h1>
          <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, asperiores non. Quo sapiente dolorem aspernatur, commodi neque explicabo ducimus recusandae tempora velit praesentium, cum sint? Molestias provident officiis nihil, deleniti, quae doloribus sed amet ad unde dicta aspernatur dolores? Necessitatibus.
          </p>
          <span className="border-b border-black text-sm">Read More</span>

          {/* Blog Post 2 */}
          <Image
            src={"/Images/drawing.png"}
            alt="drawing-img"
            width={817}
            height={500}
            className="mt-14 w-full"
          />
          <div className="flex items-center gap-2 lg:gap-4 mt-2">
            <Image src={"/Images/user.svg"} alt="user-img" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
            <Image src={"/Images/briefcase.svg"} alt="briefcase-img" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
            <Image src={"/Images/wood.svg"} alt="wood-img" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
          </div>
          <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">
            Exploring new ways of decorating
          </h1>
          <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam nihil nemo sint a iure, deserunt veniam perferendis necessitatibus minima, aperiam aliquid, libero quia. Fuga, esse tempore? Accusantium ad molestiae vitae hic numquam dolores voluptatem unde nemo, veritatis quibusdam sint tempora.
          </p>
          <span className="border-b border-black text-sm">Read More</span>

          {/* Blog Post 3 */}
          <Image
            src={"/Images/book.png"}
            alt="books-img"
            width={817}
            height={500}
            className="mt-14 w-full"
          />
          <div className="flex items-center gap-2 lg:gap-4 mt-2">
            <Image src={"/Images/user.svg"} alt="user-img" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
            <Image src={"/Images/briefcase.svg"} alt="briefcase-img" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
            <Image src={"/Images/wood.svg"} alt="wood-img" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
          </div>
          
          <h1 className="md:w-[40rem] text-[20px] lg:text-[30px] font-semibold my-4">
            Handmade pieces that took time to make
          </h1>
          <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptas nulla esse ratione, minus dolorem! Delectus, sint minima? Hic suscipit molestias, commodi aperiam unde distinctio veritatis adipisci quaerat quisquam doloribus placeat magni quis voluptas odio tempore, iusto nisi exercitationem laboriosam.
          </p>
          <span className="border-b border-black text-sm">Read More</span>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 lg:mr-20 lg:ml-20 mt-10 lg:mt-28">
          {/* Search Bar */}
          <div className="flex items-center justify-end w-full lg:w-[311px] h-[58px] border px-4 border-[#9F9F9F] rounded-md">
            <Image src={"/Images/research.svg"} alt="search-img" width={20} height={20} />
          </div>

          {/* Categories */}
          <h1 className="text-[20px] lg:text-[24px] font-semibold my-10">Categories</h1>
          <div className="space-y-4 lg:space-y-6">
            {[
              { name: 'Crafts', count: 2 },
              { name: 'Design', count: 8 },
              { name: 'Handmade', count: 7 },
              { name: 'Interior', count: 1 },
              { name: 'Wood', count: 6 },
            ].map((category) => (
              <div key={category.name} className="w-[300px] text-black/30 flex justify-between text-sm lg:text-base">
                <h3>{category.name}</h3>
                <span>{category.count}</span>
              </div>
            ))}
          </div>

          {/* Recent Posts */}
          <div className='flex gap-5 flex-col mt-20'>

          <h1 className="text-[24px]  font-semibold ">Recent Posts</h1>
          {[
              { src: '/Images/pro1.png', title: 'Going all-in with millennial design' },
            { src: '/Images/pro2.png', title: 'Exploring new ways of decorating' },
            { src: '/Images/pro3.png', title: 'Handmade pieces that took time to make' },
            { src: '/Images/pro4.png', title: 'Modern home in Milan' },
            { src: '/Images/pro5.png', title: 'Colorful office redesign' },
          ].map((post, index) => (
            <div key={index} className="flex items-center gap-8">
              <Image src={post.src} alt={`post${index + 1}`} width={80} height={80} />
              <div className="flex flex-col">
                <h1 className="font-semibold text-[14px] w-[119px]">{post.title}</h1>
                <span className="text-[#9F9F9F]">03 Aug 2022</span>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 lg:gap-8 mt-10 lg:mt-14 ">
        {['1', '2', '3', 'Next'].map((item) => (
          <div
            key={item}
            className={`w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] flex items-center rounded-[4px] justify-center ${item === '1' ? 'bg-numBg' : 'bg-[#F9F1E7]'
              }`}
          >
            {item}
          </div>
        ))}
      </div>
      <Features />
    </>
  );
};

export default BlogPage;