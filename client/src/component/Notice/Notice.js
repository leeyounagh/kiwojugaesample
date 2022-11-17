import React from "react";
import styled from "styled-components";

function Notice() {
  return (
    <NoticeContainer>
      <NoticeTitleText>키워주개 기본 에티켓</NoticeTitleText>
      <NoticeDescTitle>입양시 주의사항</NoticeDescTitle>
      <NoticeDescText>
        -보통의 보호자들은 동물병원에 내원 후, “2차 접종까지 했다고 합니다”라고
        이야기하곤 합니다. 그러나 접종의 종류는 혼합백신, 코로나 장염백신,
        전염성기관지염백신, 광견병 백신, 신종플루 백신이 있습니다. 단순히
        2차라고 한다면 총 5차를 접종해야하는 혼합백신만 2번 맞았다로 생각이 되기
        때문에 어떤 접종을 몇 번 맞았는지 정확히 확인하는 것이 중요합니다.
        <br />
        -입양받으신 후 상태를 잘 관찰하세요. 반려동물을 입양받은 후 집에
        데리고가면 집안 식구들이 손으로 만지고 쓰다듬는 등 많은 관심을 두지만
        환경이 변한 반려동물의 입장에서는 이 모든 것이 스트레스입니다.
        반려동물을 입양하신후에는 약 일주일 동안 편안한 환경을 만들어 주어 변한
        환경에 적응할 시간을 주어야함은 물론 여러 가지 상태를 관찰하셔야 합니다.
        <br />
        -반려동물을 한번 입양하면 그에 대한 부양의 책임이 따르게 됩니다. 자신의
        환경을 고려하시어 이에 적합한 반려동물을 입양하는 것이 좋습니다. 단순히
        이쁘다는 충동으로 반려동물을 입양하시면 후에 낭패를 보는 일이 많습니다.
      </NoticeDescText>
      <NoticeDescTitle>가정 입양시 주의사항</NoticeDescTitle>
      <NoticeDescText>
        -2018년 동물보호법의 개정으로 지자체에서 동물 판매업으로 허가를 받지
        않은 업체나 가정에서 반려동물을 분양하는 것은 모두 불법입니다! 벌금은
        300-500만원 정도 부과된다고 합니다. 단, 무료로 분양하는 것은 불법이
        아니고, 아는 지인에게 분양 받는 것도 불법이 아니라고 합니다! 분양 받으실
        분들은 허가를 받은 곳인지 확인해봐야 합니다!
      </NoticeDescText>
      <NoticeDescTitle>지자체 보호 센터 입양 시 혜택</NoticeDescTitle>
      <NoticeDescText>
        지원 받을 수 있는 항목으로는 접종비, 내장칩, 동물 등록비, 중성화 수술비
        등이 있습니다. 입양을 한 후 6개월 이내에 영수증을 모아 제출하면 최대
        15만원까지 지원 받을 수 있다고 합니다! 지자체 별로 제출하는 서류가
        다르니 해당 지자체 반려동물과 혹은 축산과 홈페이지에서 확인해 보는 것을
        추천합니다.
      </NoticeDescText>
      <NoticeCatDiv>
        <img src="안녕고양이.png" alt="공지사항고양이"></img>
      </NoticeCatDiv>
    </NoticeContainer>
  );
}

const NoticeContainer = styled.div`
  background-color: #bee9b4;
  margin-top: 50px;
  position: relative;
  left: 15vw;
  border-radius: 10px;
  width: 70vw;
  height: 90vh;
  padding-top: 50px;
  margin-bottom: 80px;
`;
const NoticeCatDiv = styled.div`
  opacity: 0.6;
  position: absolute;
  top: 28vh;
  left: 42vw;
  img {
    z-index: 1;
  }
`;
const NoticeDescTitle = styled.div`
  width: 60%;
  height: 5vh;
  margin-top: 50px;
  font-size: 1.3rem;
  margin-left: 3vw;
  font-weight: 600;
`;
const NoticeDescText = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 90%;
  margin-left: 3vw;
  font-size: 0.9rem;
  font-weight: 600;
  z-index: 100;
`;
const NoticeTitleText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: 10vh;
  font-weight: 600;
`;
export default Notice;
