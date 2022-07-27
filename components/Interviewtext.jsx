import Image from 'next/image';
import React from 'react';

function interviewtext() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
      <div className="col-span-2">
        <h3>Q. 작품을 통해 말하고자 하는 것은 무엇인가요?</h3>
        <p>
          평화로움 - 화면 속에서 불편한 마음을 가지게 하는 부분을 삭제해가면서,
          부드럽고 편안함을 표출하고 싶어요.
        </p>
      </div>
      <div className="col-span-1">
        <Image
          src={'/uyoung_source/유영_공존.jpg'}
          layout="responsive"
          height={150}
          width={100}
          alt=""
          objectFit="contain"
        />
      </div>
      <div>
        <h3>
          Q. 주로 사용하시는 표현 방법과 스타일은 무엇이고, 그 이유는
          무엇인가요?
        </h3>
        <p>
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
      <div>
        <h3>Q. 가장 애착이 가거나 특별한 작품이 있으신가요?</h3>
        <p>
          마음먹은 대로 표현되지 않은 몇 작품을 제외하고는 모두 애착이 가고
          특별합니다.
        </p>
      </div>
      <div>
        <h3>Q. 가장 애착이 가거나 특별한 작품이 있으신가요?</h3>
        <p>
          마음먹은 대로 표현되지 않은 몇 작품을 제외하고는 모두 애착이 가고
          특별합니다.
        </p>
      </div>
      <div>
        <h3>Q. 가장 애착이 가거나 특별한 작품이 있으신가요?</h3>
        <p>
          마음먹은 대로 표현되지 않은 몇 작품을 제외하고는 모두 애착이 가고
          특별합니다.
        </p>
      </div>
    </div>
  );
}

export default interviewtext;
