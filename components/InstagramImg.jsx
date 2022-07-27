import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';

function InstagramImg({ socialImg }) {
  return (
    <div className="relative hover:scale-105">
      <Image
        src={socialImg}
        alt="/"
        // className="w-full h-full"
        width={100}
        height={100}
        layout="responsive"
        objectFit="cover"
      />
      {/* overlay */}
      <Link href={'https://instagram.com/uyoung_oo?igshid=YmMyMTA2M2Y='}>
        <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50  group cursor-pointer">
          <p className="text-gray-300  group-hover:block">
            <FaInstagram size={30} />
          </p>
        </div>
      </Link>
    </div>
  );
}

export default InstagramImg;
