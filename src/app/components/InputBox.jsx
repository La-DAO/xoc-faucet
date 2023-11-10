'use client'
import React from 'react';

const InputBox = () => {
  
  const handleEatClick = () => {
    const address = document.getElementById('address').value;
    console.log('Address:', address);
  };

  return (
    <div className='w-full h-[15rem] bg-[#FCF0E4]'>
      <div className='flex flex-col justify-center h-full'>
        <p
          style={{
            color: '#F15B41',
            marginLeft: '2rem',
            fontFamily: 'Istok Web',
            fontSize: '3rem',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
          }}
        >
          send me some "choc"
        </p>
        <div className='px-6 py-2 flex gap-6'>
          <input
            className='bg-[#D9D9D9] border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='address' 
            type='text' 
            name='address' 
            placeholder='address'
            required
          />
          <button
            className='bg-[#F15B41] rounded-full block text-gray-700 text-center py-2 text-2xl font-bold text-white w-[10rem]'
            onClick={handleEatClick} 
          >
            eat
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
