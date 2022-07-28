import React from 'react';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Link from 'next/link';

function contact() {
  return (
    <div>
      <hero>
        <div className="flex items-center justify-center h-screen  bg-fixed bg-center bg-cover custom-img ">
          {/* overlay */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]" />
          <div className="p-5 text-white z-[2] mt-[-3rem]">
            <h2 className="text-5xl font-semibold">Contact</h2>
            <p className="pt-10 text-lg md:text-xl font-medium">
              작품 구입 및 렌탈은 오픈갤러리를 통해서 가능합니다.
            </p>
            <Link href="https://www.opengallery.co.kr/search/?sq=%EC%9C%A0%EC%98%81">
              <button className=" text-sm text-white z-[2] mt-10 px-3 py-2 border">
                오픈갤러리로 이동하기
              </button>
            </Link>
          </div>
        </div>
      </hero>

      <Contact />
    </div>
  );
}

export default contact;
