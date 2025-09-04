import React from 'react';

function Pagination({ handlePrev, handleNext, currentPage }) {
  return (
    <div className='bg-gray-400 p-4 mt-8 flex justify-center'>
      <div className='flex items-center gap-6'>
        <div
          onClick={handlePrev}
          className='cursor-pointer text-xl hover:scale-110 transition-transform'
        >
          <i className="fa-solid fa-arrow-left"></i>
        </div>

        <div className='font-bold text-xl'>{currentPage}</div>

        <div
          onClick={handleNext}
          className='cursor-pointer text-xl hover:scale-110 transition-transform'
        >
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
