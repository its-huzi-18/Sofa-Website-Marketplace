import React from 'react';
import MainImage from '../Component/MainImage';
import Features from '../Component/Features';

function Page() {
  return (
    <div>
      <MainImage tittle="Account" />

      <div className="flex flex-col md:flex-row lg:justify-end items-center justify-between md:items-start md:gap-8 px-4 lg:px-0 py-10 md:py-14">
        {/* Login Section */}
        <div className="lg:w-[45%] w-full md:w-[48%] mb-8 md:mb-0">
          <div className="flex flex-col gap-8">
            <h1 className="text-[28px] md:text-[32px] font-semibold">Log In</h1>

            <div>
              <label htmlFor="username-or-email" className="text-[14px] md:text-[16px] font-medium">
                Username or email address
              </label> <br />
              <input
                type="text"
                id="username-or-email"
                className="rounded-[4px] w-full md:max-w-[380px] h-[50px] md:h-[65px] border-[2px] border-black/40 mt-4 p-3"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="rounded-[4px] w-full md:max-w-[380px] h-[50px] md:h-[65px] border-[2px] border-black/40 mt-4 p-3"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="remember-me"
                className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] border-[2px] border-[#9F9F9F]"
              />
              <label htmlFor="remember-me" className="text-sm">
                Remember me
              </label>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-5">
              <button className="rounded-lg w-full md:w-[180px] h-[50px] md:h-[60px] border-black/70 border-[2px] text-[16px] md:text-[18px]">
                Log In
              </button>
              <p className="font-light text-black/80 text-sm md:text-base cursor-pointer">
                Lost Your Password?
              </p>
            </div>
          </div>
        </div>

        {/* Register Section */}
        <div className="lg:w-[45%] w-full md:w-[48%]">
          <div className="flex flex-col gap-8">
            <h1 className="text-[28px] md:text-[32px] font-semibold">Register</h1>

            <div className="flex flex-col">
              <label htmlFor="email-address" className="font-medium">
                Email address
              </label>
              <input
                type="text"
                id="email-address"
                className="rounded-[4px] w-full md:max-w-[380px] h-[50px] md:h-[65px] border-[2px] border-black/40 mt-4 p-3"
              />
            </div>

            <div className="md:max-w-[400px] text-sm md:text-base text-black/80 leading-relaxed">
              A link to set a new password will be sent to your email address.
            </div>

            <div className="md:max-w-[400px] text-sm md:text-base text-black/80 leading-relaxed">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and
              for other purposes described in our <b>privacy policy</b>.
            </div>

            <button className="rounded-lg w-full md:w-[180px] h-[50px] md:h-[60px] border-black/70 border-[2px] text-[16px] md:text-[18px] mt-4">
              Register
            </button>
          </div>
        </div>
      </div>

      <Features />
    </div>
  );
}

export default Page;
