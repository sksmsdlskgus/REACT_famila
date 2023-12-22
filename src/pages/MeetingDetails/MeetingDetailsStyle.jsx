import styled from 'styled-components';

export const MeetingDetailsBody = styled.div`
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
}

.titleBox {
  display: flex;
  padding: 2px 10px 0px 10px;
  box-sizing: border-box;
  justify-content: space-between;
}

.title {
  padding: 12px;
  color: var(--Gray-Cgray400, #c4c7d4);
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
  box-sizing: border-box;
}

.selTitle {
  padding: 12px;
  color: var(--primary-secondary-secondary, #f5935c);
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  box-sizing: border-box;
  border-bottom: 2px solid var(--primary-secondary-secondary, #f5935c);
}

.moimImgList {
  width: 100%;
  height: 154px;
  position: relative;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.signup {
  width: max-content;
  height: max-content;
  padding: 6px 12px;
  box-sizing: border-box;
  border-radius: 30px;
  border: 1px solid var(--primary-secondary-secondary, #f5935c);
  background: #fff5f0;
  color: var(--primary-secondary-secondary, #f5935c);
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
  position: absolute;
  top: 12px;
  left: 12px;
}

.dot {
  width: 100%;
  height: 8px;
  position: relative;
  margin-top: 8px;
  display: flex;
  justify-content: center;
  gap: 5px;
}

.blackGrayDot {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: #c4c7d4;
}

.grayDot {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: #e7e8ee;
}

.moimTagArea {
  width: 100%;
  height: 62px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  overflow-y: auto;
  gap: 8px;
  padding: 12px 16px 16px 16px;
}

.whiteTag {
  width: max-content;
  height: max-content;
  display: flex;
  padding: 6px 12px;
  border-radius: 30px;
  border: 1px solid #afb2c0;
  background: rgba(255, 255, 255, 0.12);
  font-size: 16px;
  font-weight: 500;
  flex: none;
  box-sizing: border-box;
  line-height: 20px;
}

.tag {
  height: max-content;
  position: relative;
  width: max-content;
  display: flex;
  padding: 6px 12px;
  box-sizing: border-box;
  align-items: center;
  border-radius: 30px;
  border: 1px solid var(--gray-gray500, #afb2c0);
  background: var(--gray-gray200, #e7e8ee);
  font-size: 16px;
  font-weight: 500;
  color: var(--gray-gray700, #5c5f70);
  line-height: 20px;
}

.myMoim {
  width: 100%;
  line-height: 26px;
  font-size: 20px;
  font-weight: 600;
  position: relative;
  padding: 0 16px;
  box-sizing: border-box;
}

.viewAll {
  color: var(--gray-gray600, #8a8d9e);
  font-size: 16px;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
  position: absolute;
  right: 16px;
  top: 2px;
}

.ora {
  color: #f5935c;
}

.moim1jung {
  height: 184px;
  position: relative;
  box-sizing: border-box;
  margin: 12px 16px 14px 16px;
  border-radius: 12px;
  border: 1px solid var(--gray-gray-300, #d6d7e1);
}

.moimTitleArea {
  display: flex;
  height: 36px;
  background: #f5935c;
  overflow: hidden;
  position: relative;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  gap: 4px;
  align-items: center;
  justify-content: center;
}

.moimMinImg {
  border-radius: 100px;
  background-size: cover;
  width: 24px;
  height: 24px;
  position: relative;
}

.moimTitleText {
  width: max-content;
  line-height: 22px;
  font-size: 16px;
  font-weight: 500;
  color: var(--gray-pure, #fff);
}

.moimNeyoungArea {
  height: 148px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 8px;
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 8px;
}

.moimWhen {
  width: 100%;
  position: relative;
  box-sizing: border-box;
  height: 24px;
  color: var(--gray-gray-700, #5c5f70);
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.grayMin {
  color: var(--gray-gray-500, #afb2c0);
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
}

.grayMid {
  color: var(--gray-gray-500, #afb2c0);
}

.red {
  color: var(--Red, #eb5757);
}

.illjungCham {
  height: 44px;
  box-sizing: border-box;
  margin: 8px 16px 12px 16px;
  background: var(--primary-secondary-secondary, #f5935c);
  border-radius: 100px;
  position: relative;
  display: flex;
  padding: 12px 40px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  align-items: center;
  justify-content: center;
}

.moimPeopleArea {
  width: 100%;
  height: 52px;
  position: relative;
  display: flex;
  padding: 0px 16px;
  box-sizing: border-box;
  margin-top: 8px;
  justify-content: space-between;
  align-items: flex-end;
}

.moimJangArea {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
}

.moimJangImg {
  width: 46px;
  height: 46px;
  border-radius: 500px;
  border: 1px solid var(--Gray-Cgray200, #e7e8ee);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.moimJangText {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.crown {
  position: relative;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  height: max-content;
}

.moimJangBadge {
  color: var(--primary-secondary-secondary, #f5935c);
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px; /* 100% */
  position: relative;
  display: flex;
  align-items: center;
  height: max-content;
}

.moimJangName {
  font-size: 18px;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
  position: relative;
  height: max-content;
}

.moimPeople {
  position: relative;
  display: flex;
  width: max-content;
  height: max-content;
}

.moimPeopleImg {
  position: relative;
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 500px;
  border: 1px solid var(--Gray-Cgray200, #e7e8ee);
  background: var(--Gray-Cgray100, #f2f3f7);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px; /* 100% */
}

.kakaoArea {
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
}

.kakao0you {
  width: 100%;
  height: 46px;
  display: flex;
  box-sizing: border-box;
  padding: 12px 24px;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: var(--kakao-bg, #fee500);
  color: var(--kakao-text, rgba(0, 0, 0, 0.85));
  font-size: 16px;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
}

.kakao {
  width: 18px;
  height: 18px;
  margin-right: 20px;
}

.introMoim {
  width: 100%;
  padding: 8px 16px 0px 16px;
  box-sizing: border-box;
  color: var(--gray-gray600, #8a8d9e);
  font-size: 18px;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
}

.geul {
  width: 100%;
  padding: 8px 16px 0px 16px;
  box-sizing: border-box;
  position: relative;
  color: var(--gray-gray600, #8a8d9e);
  font-size: 18px;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
  display: flex;
  gap: 10px;
}

.moimSaJinArea {
  position: relative;
  display: flex;
  width: 100%;
  padding: 8px 16px 0 16px;
  box-sizing: border-box;
}

.moimSaJin {
  width: 30vw;
  height: 30vw;
  position: relative;
  border-radius: 12px;
  border: 2px solid var(--gray-Pure, #fff);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 26px; /* 130% */
  align-items: center;
  justify-content: center;
}

.moimListAdd {
  width: 100%;
  padding: 4px 16px 0 16px;
  box-sizing: border-box;
  line-height: 20px;
  display: flex;
  gap: 4px;
  color: var(--gray-gray700, #5c5f70);
  font-size: 16px;
  font-weight: 600;
  line-height: 20px; /* 125% */
  position: relative;
}

.listAddicon {
  width: 18px;
  height: 18px;
}

.moimAddressViewArea {
  width: 100%;
  height: 200px;
  padding: 8px 16px 40px 16px;
  box-sizing: border-box;
  position: relative;
}

.moimAddView {
  width: 100%;
  height: 100%;
  position: relative;
  background: #333;
}

.moimSigninArea {
  position: relative;
  width: 100%;
  height: 44px;
  padding: 0 16px;
  box-sizing: border-box;
}

.moimSignin {
  display: flex;
  height: 44px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 1px solid var(--primary-secondary-secondary, #f5935c);
  background: var(--primary-secondary-secondary, #f5935c);
  color: var(--gray-Pure, #fff);
  font-size: 18px;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
  box-sizing: border-box;
  
}

.make1jung {
  width: 160px;
  height: 44px;
  position: fixed;
  display: flex;
  padding: 10px;
  border-radius: 100px;
  border: 1px solid var(--primary-secondary-secondary, #f5935c);
  background: var(--primary-secondary-secondary, #f5935c);
  bottom: 90px;
  left: 16px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.make1Text {
  width: max-content;
  line-height: 24px;
  font-size: 18px;
  font-weight: 600;
  color: var(--gray-pure, #fff);
}

.invite {
  width: 160px;
  height: 44px;
  position: fixed;
  display: flex;
  padding: 10px;
  border-radius: 100px;
  border: 1px solid var(--primary-secondary-secondary, #f5935c);
  background: var(--gray-Pure, #fff);
  bottom: 90px;
  right: 16px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.inviteText {
  width: max-content;
  line-height: 24px;
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-secondary-secondary, #f5935c);
}

.none {
  width: 100%;
  height: 106px;
  position: relative;
  box-sizing: border-box;
  display: flex;
}

.nonenone {
  width: 100%;
  height: 106px;
  position: relative;
}

.Nav {
  width: 100%;
  height: 70px;
  border-top: 1px solid var(--gray-cgray-200, #e7e8ee);
  bottom: 0;
  position: fixed;
  box-sizing: border-box;
  padding: 12px 0px;
  display: flex;
  background: #fff;
}

.navArea {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  gap: 8px;
}

.navIcon {
  width: 24px;
  height: 24px;
  position: relative;
}

.navOrangeText {
  position: relative;
  color: var(--primary-secondary-secondary, #f5935c);
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
}

.navText {
  position: relative;
  color: var(--gray-gray-600, #8a8d9e);
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
}

.gaesiCateArea {
  width: 100%;
  height: 54px;
  padding: 0 16px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
}

.blackO {
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: var(--Gray-Cgray900, #1f2128);
  color: var(--Gray-Pure, #fff);
  font-size: 14px;
  font-weight: 600;
  line-height: 14px; /* 100% */
  box-sizing: border-box;
}

.grayO {
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: var(--Gray-Cgray100, #f2f3f7);
  color: var(--Gray-Cgray600, #8a8d9e);
  font-size: 14px;
  font-weight: 600;
  line-height: 14px; /* 100% */
  box-sizing: border-box;
}

.fixedUnderOran {
  position: fixed;
  width: 100%;
  height: 44px;
  padding: 0 16px;
  box-sizing: border-box;
  bottom: 20px;
}

.fixedUnderOranText {
  display: flex;
  height: 44px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 1px solid var(--primary-secondary-secondary, #f5935c);
  background: var(--primary-secondary-secondary, #f5935c);
  color: var(--gray-Pure, #fff);
  font-size: 18px;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
  box-sizing: border-box;
}

.saJinArea {
  position: relative;
  display: flex;
  width: 100%;
  height: max-content;
  padding: 4px 0 32px 0px;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: center;
}

.shopSearchArea {
  width: 100%;
  height: max-content;
  padding: 0 16px;
  box-sizing: border-box;
  margin: 16px 0;
  position: relative;
}

.searchArea {
  width: 100%;
  box-sizing: border-box;
  height: 56px;
  padding: 0px 12px;
  box-sizing: border-box;
  position: relative;
  border-radius: 4px;
  border: 1px solid var(--Gray-Cgray300, #d6d7e1);
  font-size: 18px;
  font-weight: 500;
}

::placeholder {
  color: #8a8d9e;
  text-align: justify;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px; /* 122.222% */
}

.search {
  width: 24px;
  height: 24px;
  position: absolute;
  right: 32px;
  top: 16px;
}

.objectArea {
  width: 100%;
  height: max-content;
  position: relative;
  display: flex;
  padding: 16px;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4vw;
}

.object {
  position: relative;
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 13px;
}

.objectImg {
  position: relative;
  width: 43vw;
  height: 48vw;
  background-image: url("../images/A.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 12px;
}

.objectDetail {
  position: relative;
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.obName {
  color: var(--Gray-Cgray900, #1f2128);
  font-size: 18px;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
  position: relative;
}

.obmuchDetail {
  position: relative;
  width: max-content;
  height: max-content;
  display: flex;
  gap: 7px;
}

.obSale {
  color: var(--Red, #eb5757);
  font-size: 18px;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
  position: relative;
}

.obMuch {
  color: var(--gray-gray800, #31343f);
  font-size: 18px;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
  position: relative;
}

.jungForm {
  position: relative;
  display: flex;
  width: 100%;
  padding: 0 16px 16px 16px;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: space-between;
}

.midText {
  width: 100%;
  color: var(--Gray-Cgray900, #1f2128);
  font-size: 20px;
  font-weight: 600;
  line-height: 26px; /* 130% */
  height: max-content;
  margin-top: 32px;
  position: relative;
}

.inputBox {
  width: 100%;
  position: relative;
  height: 56px;
  padding: 0px 12px;
  box-sizing: border-box;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
  color: var(--Gray-Cgray600, #8a8d9e);
  border-radius: 4px;
  border: 1px solid var(--Gray-Cgray300, #d6d7e1);
}

.inputMinBox {
  width: 83vw;
  position: relative;
  height: 56px;
  padding: 0px 12px;
  box-sizing: border-box;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
  color: var(--Gray-Cgray600, #8a8d9e);
  border-radius: 4px;
  border: 1px solid var(--Gray-Cgray300, #d6d7e1);
}

.text1 {
  color: var(--Gray-Cgray900, #1f2128);
  font-size: 20px;
  font-weight: 600;
  line-height: 26px; /* 130% */
  margin-top: 40px;
}

.minText {
  width: 100%;
  color: #999;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px; /* 162.5% */
  margin-top: 12px;
}

.okBtn {
  width: 100%;
  margin-top: 36px;
  color: var(--gray-Pure, #fff);
  font-size: 18px;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
  padding: 10px 0;
  box-sizing: border-box;
  border-radius: 100px;
  border: 1px solid var(--primary-secondary-secondary, #f5935c);
  background: var(--primary-secondary-secondary, #f5935c);
}

`
export const MeetingSchedule = styled.div`
    p{
        font-weight: bold;
        margin: 3%;
        span{
            color: #f7a070;
        }
    }
`