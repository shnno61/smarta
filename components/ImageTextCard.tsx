'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

interface ImageTextCardProps {
  src: string;
  alt: string;
  mainText: string;
  hoverText: string;
  slug: string;
  id: string; // Added ID to uniquely identify the card
}

const ImageTextCard = ({ src, alt, mainText, hoverText, slug, id }: ImageTextCardProps) => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null); // Track the active card

  const handleTouchStart = () => {
    setActiveCardId(id); // Set the current card as active
  };

  const handleTouchEnd = () => {
    setActiveCardId(null); // Clear the active card
  };

  return (
    <div
      className={`relative flex flex-col items-center mb-4 lg:mb-6 xl:mb-10 2xl:mb-12 group
        ${activeCardId === id ? 'scale-105 bg-yellow-700' : ''} transition-transform duration-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative overflow-hidden rounded-2xl w-full xs:w-[270px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] 2xl:w-[550px] h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px]">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          priority
          className="transition-opacity duration-300 group-hover:opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-end items-center bg-black bg-opacity-40 text-white p-4 text-center rounded-2xl">
          <h2 className="text-sm xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 group-hover:hidden">{mainText}</h2>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center rounded-2xl">
          <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">{mainText}</h2>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl mb-4">{hoverText}</p>
          <Link href={`/${slug}`} passHref>
            <Button
              type="button"
              title="Learn More"
              ariaLabel={`Learn more about ${mainText}`}
              variant="btn_solid"
              className="transition-transform duration-300 transform hover:scale-105 px-3 py-1.5 xs:px-4 xs:py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-3.5 xl:px-6 xl:py-4 2xl:px-8 2xl:py-5 text-xs xs:text-sm sm:text-base md:text-base lg:text-lg xl:text-base 2xl:text-lg bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageTextCard;