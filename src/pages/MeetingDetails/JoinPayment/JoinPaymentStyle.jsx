import styled from "styled-components";

export const JoinPaymentBody = styled.div`
  height: 100vh;
  .head {
    width: 100%;
    height: 56px;
    padding: 18px 80px;
    box-sizing: border-box;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 20px;
    box-shadow: 0 0 0 1px #e7e8ee inset;
    position: relative;
  }
  .leftArrow {
    width: 24px;
    height: 24px;
    top: 16px;
    left: 16px;
    position: absolute;
    cursor: pointer;
  }
`;

export const PaymentContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5%;
  margin-top: 20%;
  font-weight: bold;
`;
export const MeetingTitle = styled.h2`
  span {
    text-decoration: underline;
  }
`;
export const MeetingDues = styled.h2`
  span {
    color: #f7a070;
    text-decoration: underline;
  }
`;
export const DuesCheckButton = styled.div`
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  width: 90%;
  height: 50px;
  border-radius: 50px;
  color: white;
  background-color: #f7a070;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DuesCompleteBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
  text-align: center;
  font-family: Pretendard;
  h2 {
    font-size: 22px;
  }
  p {
    margin: 0;
    width: 80%;
    word-break: keep-all;
    color: gray;
    // font-weight: bold;
  }
`;
export const GreenCheckMarkImg = styled.img``;
