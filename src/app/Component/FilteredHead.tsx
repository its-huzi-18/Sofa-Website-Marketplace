import React from 'react';
import Image from 'next/image';

interface FilteredType {
  onFilterChange: (category: string) => void;
  displayedCount: number;
  totalCount: number;
}

export default function FilteredHead({
  onFilterChange,
  displayedCount,
  totalCount,
}: FilteredType) {
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(e.target.value);
  };

  return (
    <div>
      {/* Filter Section */}
      <div className="hidden lg:flex flex-col sm:flex-row items-center justify-around bg-[#F9F1E7] p-4">
        <div className="flex flex-wrap sm:justify-evenly space-x-4">
          <Image
            src="/Images/dotted-line.svg"
            alt="dotted-line"
            width={25}
            height={25}
          />
          <h3 className="text-sm md:text-base lg:text-lg font-semibold">Filter</h3>
          <Image
            src="/Images/four-dot.svg"
            alt="four-dot"
            width={25}
            height={25}
          />
          <Image
            src="/Images/square-line.svg"
            alt="square-line"
            width={25}
            height={25}
          />
          <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base border-l-2 border-black/30 pl-4">
            <h3>
              Showing {displayedCount} of {totalCount} results
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap items-center sm:space-x-4 mt-4 sm:mt-0">
          {/* Show Section */}
          <div className="flex gap-2 items-center">
            <h2 className="text-xs sm:text-sm md:text-base">Show</h2>
            <div className="w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] bg-white flex items-center justify-center rounded-md">
              <h3 className="text-[#9F9F9F] text-xs sm:text-sm md:text-base">
                {displayedCount}
              </h3>
            </div>
          </div>

          {/* Sort By Section */}
          <div className="flex gap-2 items-center">
            <h3 className="text-xs sm:text-sm md:text-base ">Sort by</h3>
            <div className="w-[128px] sm:w-[188px] bg-white h-[45px] sm:h-[55px] flex items-center justify-center rounded-md">
              <select
                className="selection:text-[#9F9F9F]"
                name="product"
                id="filterProduct"
                onChange={handleCategoryChange}
              >
                <option className="text-[#9F9F9F]" value="default">
                  Default
                </option>
                <option value="Chair">Chair</option>
                <option value="Sofa">Sofa</option>
                <option value="Table">Table</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
