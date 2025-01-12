'use client';

import { useRouter } from 'next/navigation';

export const HomeHero: React.FC = () => {
  const router = useRouter();

  const handleButton = () => {
    router.push('/allPokemons');
  };

  return (
    <div className='w-full min-h-80 bg-home-pattern bg-center bg-cover backdrop-blur'>
      <div className='absolute inset-0 flex justify-center items-center text-center'>
        <div className='text-white'>
          <h1
            className='text-shadow-hometext text-red-900 py-4 px-8 font-bold text-responsive-title'
            style={{
              textShadow:
                '0 0 40px floralwhite, 0 0 30px linen, 0 0 35px moccasin, 0 0 40px peachpuff',
            }}
          >
            World of Pokemon
          </h1>

          <button
            className='text-base text-orange-100 bg-red-900 rounded font-bold py-2 border-2 border-red-900 hover:bg-red-800 hover:text-primary-100 sm:text-xl px-3 mt-4'
            onClick={handleButton}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};
