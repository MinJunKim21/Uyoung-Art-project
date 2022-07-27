import React from 'react';

function Interviewhero() {
  return (
    <div className="flex items-center justify-center h-screen  bg-fixed bg-center bg-cover custom-img ">
      {/* overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]" />
      <div className="p-20 text-white z-[2] mt-[-3rem]">
        <h2 className="text-4xl font-normal ">작가의 말</h2>
        <p className="pt-10 text-lg font-thin">
          <span>출산과 육아 등의 이유로 작품활동의 공백기가 길었습니다.</span>
          <br />
          <span>
            그러다 보니 하나의 주제와 소재에 대한 연구의 연속성보다 작업 환경이
            갖추어지는 그때 그때의 끌림에 집중하게 되었습니다. 그 결과
            풍경,정물, 인물 등을 다양하게 다루게 되고, 표현 방식 또한 구상과
            추상의 경계를 두지않고 자유롭게 작업합니다. 한지에 분채와 먹을
            섞어서 수간채색 작업을 주로 했으나 요즘은 재료에 한계를 두지 않고
            작업합니다.
          </span>
          <br />
          <br />
          <span> 결국 모든 작품이 저의 내면의 그림자입니다.</span>
        </p>
      </div>
      {/* <button className="absolute text-sm text-white z-[2] bottom-2 right-2 px-3 py-2 border">
        Buy & Rent
      </button> */}
    </div>
  );
}

export default Interviewhero;
