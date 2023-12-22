import React, { useState } from "react";
import * as styles from "./MainHomeStyle";
import arrowLeftImg from "../../assets/arrow-left.png";
// import homeIcon from '../../assets/homeIcon.png';
// import moimIcon from '../../assets/moimIcon.png';
// import oranMoimIcon from '../../assets/oranMoimIcon.png';
// import neIcon from '../../assets/neIcon.png';
import { useNavigate, Link } from "react-router-dom";
import BottomSheet from "../../components/BottomSheet/BottomSheet";
import FooterMenu from "../../components/FooterMenu/FooterMenu";

const CreateMeeting = () => {
  const navigate = useNavigate();

  const createMeetingSuccess = () => {
    alert("일정을 생성하였습니다. 메인 화면으로 돌아갑니다.");
    navigate("/");
  };
  const goBack = () => {
    // window.history.back();
    navigate("/");
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleBottomSheet = () => {
    setIsOpen(!isOpen);
  };

  const [selectLocation, setSelectLocation] = useState("");

  const [meetingDues, setMeetingDues] = useState("");
  const handleInputComma = (event) => {
    // 입력된 값에서 숫자만 추출
    const inputValue = event.target.value.replace(/[^0-9]/g, "");

    // 숫자를 세 자리씩 끊어서 쉼표로 연결
    const formattedValue = Number(inputValue).toLocaleString();

    // state 업데이트
    setMeetingDues(formattedValue);
  };

  return (
    <styles.CreateMeetingBody>
      <div className="head">
        <img
          className="leftArrow"
          src={arrowLeftImg}
          alt="img"
          onClick={goBack}
        />
        일정 생성
      </div>
      <form className="jungForm" onSubmit={createMeetingSuccess}>
        <div className="midText">날짜 선택</div>
        <input type="date" name="jungDate" className="inputBox" />
        <div className="midText">시간 선택</div>
        <input type="time" name="jungTime" className="inputBox" />
        <div className="midText">모임 회비</div>
        <input
          name="jungMoney"
          placeholder="숫자를 입력해주세요"
          className="inputMinBox"
          value={meetingDues}
          onChange={handleInputComma}
        />
        <div className="text1">원</div>
        <div className="midText">참가 인원</div>
        <input
          name="jungInone"
          type="number"
          placeholder="숫자를 입력해주세요"
          className="inputMinBox"
        />
        <div className="text1">명</div>
        <div className="midText">모임 상세위치</div>
        <div className="minText">주소 검색</div>
        <input
          name="jungAdd"
          type="text"
          placeholder="주소를 작성해주세요"
          className="inputBox"
          onClick={toggleBottomSheet}
          value={selectLocation}
        />
        <div className="minText">상세 위치</div>
        <input
          name="jungDetailAdd"
          type="text"
          placeholder="상세 위치를 작성해주세요"
          className="inputBox"
        />
        <input type="submit" name="jungOk" value="완료" className="okBtn" />
      </form>

      <BottomSheet
        isOpen={isOpen}
        toggleBottomSheet={toggleBottomSheet}
        selectBottomSheetPage={"showLocationSearch"}
        setSelectLocation={setSelectLocation}
      />
      <FooterMenu />
    </styles.CreateMeetingBody>
  );
};

export default CreateMeeting;
