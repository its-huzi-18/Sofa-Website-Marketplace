import React from 'react';
import Image from 'next/image';
import MainImage from '../Component/MainImage';
import Features from '../Component/Features';

const ContactPage = () => {
    return (
        <>
        <div className='mb-10'>

      <MainImage 
      tittle='Contact'
      />
            <div className="flex flex-col items-center justify-center  mt-10 px-4 lg:mt-20">
                <h1 className="text-[24px] sm:text-[30px] lg:text-[36px] font-semibold text-center">
                    Get In Touch With Us
                </h1>
                <p className="text-[14px] sm:text-[16px] text-[#9F9F9F] mt-4 text-center max-w-[90%] lg:max-w-[644px]">
                    For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
                    Our Staff Always Be There To Help You Out. Do Not Hesitate!
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-around mt-20 px-4 lg:px-16 gap-10">
                <div className="flex flex-col gap-8 ">
                    {[
                        {
                            img: "/Images/location.png",
                            title: "Address",
                            desc: "236 5th SE Avenue, New York NY10000, United States",
                        },
                        {
                            img: "/Images/call.png",
                            title: "Phone",
                            desc: "Mobile: +(84) 546-6789\nHotline: +(84) 456-6789",
                        },
                        {
                            img: "/Images/clock.png",
                            title: "Working Time",
                            desc: "Monday-Friday: 9:00 - 22:00\nSaturday-Sunday: 9:00 - 21:00",
                        },
                    ].map((info, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <Image className='mt-1' src={info.img} alt={`${info.title}-icon`} width={22} height={28} />
                            <div>
                                <h2 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold">{info.title}</h2>
                                <p className="text-[14px] sm:text-[16px] text-gray-700 whitespace-pre-line w-[212px]">
                                    {info.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col lg:w-1/2 gap-6">
                    {[
                        { label: "Your Name", placeholder: "Abc" },
                        { label: "Email Address", placeholder: "Abc@def.com" },
                        { label: "Subject", placeholder: "This is an optional" },
                        { label: "Message", placeholder: "Hi! i’d like to ask about" },
                    ].map((field, index) => (
                        <div key={index} className="flex flex-col">
                            <label className="text-[16px] font-semibold mb-2">{field.label}</label>
                            <input
                                type="text"
                                placeholder={field.placeholder}
                                className={`${field.label === 'Message'?'h-[166px]':'h-[75px]'} border border-gray-300 rounded-lg px-4 py-3 text-[14px] focus:ring-2 focus:ring-[#B88E2F] focus:outline-none md:w-[528px]`}
                            />
                        </div>
                    ))}
                    <button className="w-full md:w-[237px] h-[48px] border-[1px] border-black rounded-xl mt-4 flex items-center justify-center text-[16px] font-semibold">
                        Submit
                    </button>
                </div>
            </div>
                        </div>
            <Features />

        </>
    );
};

export default ContactPage;