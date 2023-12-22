import React, { useState } from "react";
import * as styles from "./MeetingPhotoStyle";
import arrowLeftImg from "../../../assets/arrow-left.png";
import { Link, useNavigate } from "react-router-dom";

const MeetingPhoto = () => {
  const navigate = useNavigate();
  const goBack = () => {
    window.history.back();
    // navigate("/");
  };

  const [meetingTitle, setMeetingTitle] = useState("실버들의 러닝 모임");
  return (
    <styles.MeetingPhotoBody>
      <div class="background">
        <div class="window">
          <div className="head">
            <img
              className="leftArrow"
              src={arrowLeftImg}
              onClick={goBack}
              alt="leftArrowimg"
            />
            {meetingTitle}
          </div>
          <div className="titleBox">
            <div className="title">
              <Link to="/MeetingDetails/MeetingDetailsHome">홈</Link>
            </div>
            <div className="title">
              <Link to="/MeetingDetails/MeetingPost">게시판</Link>
            </div>
            <div className="selTitle">
              <Link to="/MeetingDetails/MeetingPhoto">사진첩</Link>
            </div>
            <div className="title">
              <Link to="/MeetingDetails/MeetingChat">단체톡</Link>
            </div>
            <div className="title">
              <Link to="/MeetingDetails/MeetingItems">용품구매</Link>
            </div>
          </div>
          <div class="notice">등록된 사진이 없습니다.</div>
          <button class="postbutton" id="post">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 13 12"
              fill="none"
            >
              <path
                d="M7 5.25V0H5.5V5.25H0.25V6.75H5.5V12H7V6.75H12.25V5.25H7Z"
                fill="white"
              />
            </svg>
            <span>사진 등록</span>
          </button>
        </div>
      </div>
    </styles.MeetingPhotoBody>
  );
};

export default MeetingPhoto;
