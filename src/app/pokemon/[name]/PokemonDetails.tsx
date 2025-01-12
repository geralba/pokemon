'use client';

import Image from 'next/image';

import ArrowLink from '@/components/links/ArrowLink';
import { Progress } from '@/components/ui/progress';

import { Stat } from '@/interfaces/pokeon';

interface PokemonDetailsProps {
  name: string;
  image: string;
  stats: Stat[];
}

export default function PokemonDetails({
  name,
  image,
  stats,
}: PokemonDetailsProps) {
  return (
    <div className=' container mx-auto flex  justify-center  min-h-screen'>
      <div className='flex items-start mt-5 pl-3 '>
        <ArrowLink direction='left' className='flex mt-2 text-left' href='back'>
          Back
        </ArrowLink>
      </div>
      <div className='flex flex-col  items-center justify-center  mt-7 max-w-lg gap-2'>
        <h1 className='text-3xl font-bold mb-4 text-center text-primary-600'>
          {name}
        </h1>
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className='mb-4 object-contain'
        />

        <div className='w-full space-y-4 p-5'>
          {stats.map((stat) => (
            <div key={stat.stat.name} className='flex items-center space-x-4'>
              <h2 className='text-base font-semibold w-1/4'>
                {stat.stat.name}: {stat.base_stat}
              </h2>

              <div className='flex-1'>
                <Progress value={stat.base_stat} max={100} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
