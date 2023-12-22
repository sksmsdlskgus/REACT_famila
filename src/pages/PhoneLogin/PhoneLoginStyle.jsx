// PhoneLoginStyle.jsx

import styled from "styled-components";

export const background = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  /* height: 100vh; */
  background-color: #ffffff;
  margin: 0px;
  padding: 0px;
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

export const form = styled.form``;

export const window = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  /* height: 100vh; */
  background-color: #ffffff;
  margin: 0px;
  padding: 0px;
`;

export const titleArea = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 100vw;
  /* height: 100vh; */
  margin: 0 auto;
  padding: 0px;
  position: relative;
  overflow-y: auto;
  -ms-overflow-style: none; /*IE and Edge*/
`;

export const BackIcon = styled.div``;

export const backBtn = styled.div`
  width: 100%;
  height: 56px;
  position: relative;
  padding: 16px;
  box-sizing: border-box;
  box-shadow: 0 0 0 1px #e7e8ee inset;
`;

export const img = styled.img`
  width: 100%;
  height: 100%;
`;

export const titleText = styled.div`
  width: max-content;
  position: relative;
  margin: 0 auto;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
`;

export const inputArea = styled.div`
  // width: 100%;
  height: 250px;
  margin-top: 16px;
  border: none;
  padding: 16px;
  box-sizing: border-box;
  position: relative;
`;

export const midTitle = styled.div`
  width: 100%;
  height: 26px;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  margin-bottom: 16px;
`;

export const NumBalsongContainer = styled.div`
  width: 100%;
  height: 56px;
  box-sizing: border-box;
  position: relative;
  border-radius: 4px;
  // border: 1px solid #d6d7e1;
  background: #ffffff;
  color: #5c5f70;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
`;

export const NumInput = styled.input`
  width: 60%;
  height: 56px;
  box-sizing: border-box;
  position: relative;
  border-radius: 4px;
  border: 1px solid #d6d7e1;
  text-indent: 12px;
  font-size: 16px;
`;

export const BalsongButton = styled.div`
  cursor: pointer;
  width: 38%;
  height: 56px;
  box-sizing: border-box;
  position: relative;
  border-radius: 4px;
  border: 1px solid #d6d7e1;
  background: #ffffff;
  color: #5c5f70;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  display: grid;
  place-items: center; /* 수평 및 수직 중앙 정렬 */
`;

export const InzungInput = styled.input`
  width: 100%;
  height: 56px;
  box-sizing: border-box;
  position: relative;
  border-radius: 4px;
  border: 1px solid #d6d7e1;
  text-indent: 12px;
  margin-top: 10px;
  font-size: 16px;
`;

export const okBtn = styled.div`
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 100px;
  background: var(--primary-secondary-secondary, #f5935c);
  color: #ffffff;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  cursor: pointer;
  display: grid;
  place-items: center; /* 수평 및 수직 중앙 정렬 */
`;
export const CertifiedText = styled.p`
  font-weight: bold;
`;
