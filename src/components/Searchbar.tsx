import React from 'react';

import '@/styles/globals.css';
interface SearchbarProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

export const Searchbar: React.FC<SearchbarProps> = ({
  searchText,
  setSearchText,
}) => {
  return (
    <div className='flex flex-col justify-center items-center pt-6 bg-coral'>
      <h2
        className='text-center text-shadow-hometext text-red-900 py-4 px-8 font-bold text-responsive-title'
        style={{
          textShadow:
            '0 0 40px floralwhite, 0 0 30px linen, 0 0 35px moccasin, 0 0 40px peachpuff',
        }}
      >
        Find your Pokemon
      </h2>
      <div className='w-full mx-10 max-w-2xl gap-5 flex items-center min-h-12  bg-white border-2 border-burgundy rounded-xl mt-6 mb-4 px-1 '>
        <input
          className=' w-full flex-1 border-none  focus:ring-0   text-saddlebrown placeholder-saddlebrown'
          type='text'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder='Search by name or ID'
        />
      </div>
    </div>
  );
};
