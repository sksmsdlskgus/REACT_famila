import React, { useState, useEffect } from "react";
import * as styles from "./JoinPaymentStyle";
import arrowLeftImg from "../../../assets/arrow-left.png";
import greenCheck from "../../../assets/green_checkMark.png";
import { useNavigate } from "react-router-dom";

const JoinPayment = () => {
  const navigate = useNavigate();

  const [meetingTitle, setMeetingTitle] = useState("");
  const [meetingDues, setMeetingDues] = useState("");

  useEffect(() => {
    setMeetingTitle(localStorage.getItem("meetingTitle"));
    setMeetingDues(localStorage.getItem("meetingDues"));
  }, []);

  const goBack = () => {
    window.history.back();
  };
  const goToHome = () => {
    navigate("/");
  };
  const [isDuesComplete, setIsDuesComplete] = useState(false);
  const DuesComplete = () => {
    setIsDuesComplete(!isDuesComplete);
  };

  return (
    <styles.JoinPaymentBody>
      {isDuesComplete ? (
        <styles.DuesCompleteBody>
          <styles.GreenCheckMarkImg src={greenCheck} />
          <h2>모임일정 참가가 완료되었습니다!</h2>
          <p>
            모임일정이 등록되었습니다. 해당 날짜에 즐거운 모임 활동을
            경험하세요.
          </p>
        </styles.DuesCompleteBody>
      ) : (
        <>
          <div className="head">
            <img
              className="leftArrow"
              src={arrowLeftImg}
              onClick={goBack}
              alt="leftArrowimg"
            />
            결제 수단
          </div>
          <styles.PaymentContent>
            <styles.MeetingTitle>
              모임명: <span>{meetingTitle}</span>
            </styles.MeetingTitle>
            <styles.MeetingDues>
              모임 신청 금액: <span>{meetingDues}</span>원
            </styles.MeetingDues>
          </styles.PaymentContent>
        </>
      )}

      <styles.DuesCheckButton
        onClick={isDuesComplete ? goToHome : DuesComplete}
      >
        {isDuesComplete ? "메인화면으로 이동" : "확인"}
      </styles.DuesCheckButton>
    </styles.JoinPaymentBody>
  );
};

export default JoinPayment;
