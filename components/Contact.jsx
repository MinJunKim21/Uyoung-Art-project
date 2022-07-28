import React from 'react';
import { FaInstagram } from 'react-icons/fa';

function Contact() {
  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen">
      <h1 className="flex items-center mt-10 mb-5 font-semibold justify-center p-4">
        <FaInstagram className="mr-2 text-3xl" />
        <span className="text-xl">
          @uyoung_oo 으로 연락하거나 아래의 폼 작성
        </span>
      </h1>
      <form className="max-w-[600px] m-auto">
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
