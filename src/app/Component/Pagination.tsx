import React from 'react'

function Pagination() {
  return (
    <div>
            <div className="flex justify-center py-6 bg-white">
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-yellow-100 text-black rounded-md">
          1
        </button>
        <button className="px-4 py-2 bg-yellow-50 text-black rounded-md">
          2
        </button>
        <button className="px-4 py-2 bg-yellow-50 text-black rounded-md">
          3
        </button>
        <button className="px-4 py-2 bg-yellow-50 text-black rounded-md">
          Next
        </button>
      </div>
    </div>
    </div>
  )
}

export default Pagination