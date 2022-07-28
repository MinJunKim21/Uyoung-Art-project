import Image from 'next/image';
import React from 'react';

function interviewtext() {
  return (
    <div className="grid grid-cols-1 gap-y-20 md:grid-cols-3 py-20 px-10 justify-center items-center max-w-[1240px] mx-auto">
      <div className="col-span-2">
        <h3 className="interviewQ">
          Q. 작품을 통해 말하고자 하는 것은 무엇인가요?
        </h3>
        <p className="interviewA">
          평화로움 - 화면 속에서 불편한 마음을 가지게 하는 부분을 삭제해가면서,
          부드럽고 편안함을 표출하고 싶어요.
        </p>
      </div>
      <div className="col-span-1">
        <Image
          src={'/uyoung_source/interviewimg1.jpg'}
          layout="responsive"
          height={80}
          width={100}
          alt=""
          objectFit="contain"
        />
      </div>

      <div className="col-span-1">
        <Image
          src={'/uyoung_source/interviewimg2.jpeg'}
          layout="responsive"
          height={80}
          width={100}
          alt=""
          objectFit="contain"
        />
      </div>
      <div className="col-span-2">
        <h3 className="interviewQ">
          Q. 주로 사용하시는 표현 방법과 스타일은 무엇이고, 그 이유는
          무엇인가요?
        </h3>
        <p className="interviewA">
          주로 한지 위에 수간채색으로 작업을 합니다. 수간채색은 천연 가루 물감을
          아교 물에 풀어 한지 위에 겹겹이 칠해주는 한국화 전통 기법입니다.
          물감을 한지 위에 칠해주다 보면 처음 한 겹 칠했을 때, 두 번, 세 번
          반복해서 칠했을 때 색이 달라집니다. 곰탕을 오래 끓일수록 맛이
          우러나오는 것과 같죠. 여러 색, 때론 같은 색을 반복해서 쌓아가며 색을
          찾아가고 화면에 깊이감을 더해주는 것이 좋아 수간채색으로 주로
          작업해왔습니다. 최근에는 한지와 전통채색을 고집하지 않고 다양한 재료를
          접목하여 변화를 시도하고 있습니다.
        </p>
      </div>

      <div className="col-span-2">
        <h3 className="interviewQ">
          Q. 가장 애착이 가거나 특별한 작품이 있으신가요?
        </h3>
        <p className="interviewA">
          마음먹은 대로 표현되지 않은 몇 작품을 제외하고는 모두 애착이 가고
          특별합니다.
        </p>
      </div>
      <div className="col-span-1">
        <Image
          src={'/uyoung_source/interviewimg3.jpg'}
          layout="responsive"
          height={80}
          width={100}
          alt=""
          objectFit="contain"
        />
      </div>

      <div className="col-span-1">
        <Image
          src={'/uyoung_source/InstagramImgs/InsPicture11.jpeg'}
          layout="responsive"
          height={80}
          width={100}
          alt=""
          objectFit="contain"
        />
      </div>
      <div className="col-span-2">
        <h3 className="interviewQ">Q. 주로 어디에서 영감을 얻으시나요?</h3>
        <p className="interviewA">
          일상 속에서 영감을 얻는다 하면 너무 뻔한 얘기일 수 있으나 눈에 보이는
          모든 인공물이나, 자연 속에서 필요한 형태를 찾아냅니다.
        </p>
      </div>
      <div className="col-span-2">
        <h3 className="interviewQ">
          Q. 대중들에게 어떻게 기억되길 바라시나요?
        </h3>
        <p className="interviewA">
          작품의 편안한 잔상이 마음에 오래 남는 작가로 기억되고 싶습니다. 보면
          볼수록 여운이 느껴져 작품을 다시 봤을 때 편안한 집에 온 듯한 기분이
          들었으면 좋겠어요.
        </p>
      </div>
      <div className="col-span-1">
        <Image
          src={'/uyoung_source/InstagramImgs/InsPicture10.jpeg'}
          layout="responsive"
          height={80}
          width={100}
          alt=""
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export default interviewtext;
