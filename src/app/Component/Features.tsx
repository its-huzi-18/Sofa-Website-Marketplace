import React from 'react';

function Features() {
  return (
    <>
      <div>
        {/* Features Section */}
        <div className="bg-[#fdf6f7] py-12">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col justify-start">
              <h3 className="text-xl md:text-2xl lg:text-[32px] font-semibold text-black">
                Free Delivery
              </h3>
              <p className="w-full md:w-[376px] text-base md:text-lg text-customGrey mt-1">
                For all orders over $50, consectetur adipiscing elit.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col justify-start">
              <h3 className="text-xl md:text-2xl lg:text-[32px] font-semibold text-black">
                90 Days Return
              </h3>
              <p className="text-base md:text-lg text-customGrey mt-1">
                If goods have problems, consectetur adipiscing elit.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col justify-start">
              <h3 className="text-xl md:text-2xl lg:text-[32px] font-semibold text-black">
                Secure Payment
              </h3>
              <p className="text-base md:text-lg text-customGrey mt-1">
                100% secure payment, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
