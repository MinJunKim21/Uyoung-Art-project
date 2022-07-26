import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div>
      <div>
        <Link href="/">
          {/* <h1>Uyoung</h1> */}
          <Image
            src="../uyoung_source/uyoung_english_black.png"
            layout="fill"
            alt=""
            className="z-50"
          />
        </Link>

        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
