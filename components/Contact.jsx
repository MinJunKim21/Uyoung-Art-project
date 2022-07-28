import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

function Contact() {
  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen">
      <Link href={'https://instagram.com/uyoung_oo?igshid=YmMyMTA2M2Y='}>
        <div className="flex items-center text-lg justify-center group cursor-pointer pt-10 border-b-2 max-w-[600px] mx-auto pb-10">
          <FaInstagram className="mr-2 text-2xl" />
          <span className="font-semibold">Go to Instagram</span>
        </div>
      </Link>
      <h1 className="flex items-center pt-10 mb-5 font-semibold justify-center p-4   ">
        <span className="text-xl">Contact</span>
      </h1>
      <form className="max-w-[600px] mx-auto">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3"
            type="text"
            placeholder="Name"
          />
          <input
            className="border shadow-lg p-3"
            type="email"
            placeholder="Email"
          />
        </div>
        <input
          className="border shadow-lg p-3 my-2 w-full"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="border shadow-lg p-3 w-full"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="border shadow-lg p-3 w-full mt-2">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
