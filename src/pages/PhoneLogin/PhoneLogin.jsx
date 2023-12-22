import React, { useState } from "react";
import * as styles from "./PhoneLoginStyle";
// import BackIcon from "../../../src/assets/left.png";
import arrowLeftImg from "../../assets/arrow-left.png";
import { useNavigate } from "react-router-dom";
import Timer from "../../components/Timer/Timer";

export default function PhoneLogin() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [certiNum, setCertiNum] = useState(1234);
  const [getCertiNum, setGetCertiNum] = useState(0);
  const [isCertified, setIsCertified] = useState(false); //인증번호가 일치한지
  const [isGetCertiNum, setIsGetCertiNum] = useState(false); //인증번호 받았는지
  const [isRenderFirst, setIsRenderFirst] = useState(false);

  const [validTime, setValidTime] = useState(5);

  const handleSendCertiNum = () => {
    // TODO: 인증번호를 서버로 요청 및 전송하는 로직
  };

  const handleCheckButton = () => {
    // TODO: 서버로 휴대폰 번호와 인증번호를 전송하여 확인하는 로직
  };
  const goBack = () => {
    window.history.back();
  };

  const checkNum = () => {
    if (certiNum === getCertiNum) {
      alert("성공적으로 로그인되었습니다.");
      navigate("/");
    } else {
      setIsCertified(!isCertified);
    }
  };

  const handleChangeGetCertiNum = (event) => {
    setGetCertiNum(parseInt(event.target.value));
  };

  const sendCertiNum = () => {
    setIsRenderFirst(true);
    alert("인증번호가 발송되었습니다. ");
    setValidTime(validTime);
    setIsGetCertiNum(true);
    setIsCertified(true);
  };

  return (
    <styles.background>
      <div className="head">
        <img
          className="leftArrow"
          src={arrowLeftImg}
          onClick={goBack}
          alt="leftArrowimg"
        />
        휴대폰 번호로 로그인
      </div>
      <styles.window>
        <styles.form>
          <styles.inputArea>
            <styles.midTitle>휴대폰 번호</styles.midTitle>
            <styles.NumBalsongContainer>
              <styles.NumInput
                type="tel"
                name="phoneNum"
                placeholder="전화번호 입력(-빼고)"
                className="num"
              />
              <styles.BalsongButton
                name="balSong"
                className="balsong"
                onClick={sendCertiNum}
              >
                인증번호 발송
              </styles.BalsongButton>
            </styles.NumBalsongContainer>
            <styles.InzungInput
              type="number"
              name="inzung_input"
              placeholder="인증번호 입력"
              className="inzung_input"
              onChange={handleChangeGetCertiNum}
            />
            {isRenderFirst ? (
              <styles.CertifiedText
                style={{ color: `${isCertified ? "#27ae60" : "#eb5757"}` }}
              >
                {isCertified ? (
                  <>
                    인증번호가 문자로 발송되었습니다.
                    <br />
                    <Timer
                      limitTime={validTime}
                      setIsGetCertiNum={setIsGetCertiNum}
                    />
                  </>
                ) : (
                  "인증번호가 일치하지 않습니다."
                )}
              </styles.CertifiedText>
            ) : (
              <></>
            )}
          </styles.inputArea>
          <styles.okBtn
            name="ok"
            className="okBtn"
            onClick={
              isCertified ? checkNum : () => alert("인증번호를 발급해주세요")
            }
          >
            확인
          </styles.okBtn>
        </styles.form>
      </styles.window>
    </styles.background>
  );
}
