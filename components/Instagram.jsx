import React from 'react';
import InsPicture2 from '../public/uyoung_source/InstagramImgs/InsPicture2.jpeg';
import InsPicture4 from '../public/uyoung_source/InstagramImgs/InsPicture4.jpeg';
import InsPicture5 from '../public/uyoung_source/InstagramImgs/InsPicture5.jpeg';
import InsPicture6 from '../public/uyoung_source/InstagramImgs/InsPicture6.jpeg';
import InsPicture7 from '../public/uyoung_source/InstagramImgs/InsPicture7.jpeg';
import InsPicture8 from '../public/uyoung_source/InstagramImgs/InsPicture8.jpeg';
import InsPicture9 from '../public/uyoung_source/InstagramImgs/InsPicture9.jpeg';
import InstagramImg from './InstagramImg';
import Link from 'next/link';

function Instagram() {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-20">
      <p className="text-2xl font-bold mt-5">More Pictures on Instagram</p>
      <Link href={'https://instagram.com/uyoung_oo?igshid=YmMyMTA2M2Y='}>
        <button className="border px-4 py-2 my-5 rounded-full border-1 border-black cursor-pointer">
          Go to @uyoung_oo
        </button>
      </Link>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <InstagramImg socialImg={InsPicture2} />
        <InstagramImg socialImg={InsPicture4} />
        <InstagramImg socialImg={InsPicture5} />
        <InstagramImg socialImg={InsPicture6} />
        <InstagramImg socialImg={InsPicture7} />
        <InstagramImg socialImg={InsPicture8} />
      </div>
    </div>
  );
}

export default Instagram;
