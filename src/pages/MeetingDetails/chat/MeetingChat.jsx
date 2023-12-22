import React, { useEffect, useState } from "react";
import * as styles from "./MeetingChatStyle";
import arrowLeftImg from "../../../assets/arrow-left.png";
import imgA from "../../../assets/A.png";
import imageChat from "../../../assets/Image_chat.png";
import { Link, useNavigate } from "react-router-dom";

const MeetingChat = () => {
  const navigate = useNavigate();

  const goBack = () => {
    window.history.back();
    // navigate("/");
  };

  const [date, setDate] = useState("");
  useEffect(() => {
    const currentDate = new Date();
    setDate(
      `${currentDate.getFullYear()}년 ${
        currentDate.getMonth() + 1
      }월 ${currentDate.getDate()}일`
    );
  }, []);

  const [userName, setUserName] = useState("홍길동");
  const [meetingTitle, setMeetingTitle] = useState("실버들의 러닝 모임");

  return (
    <styles.MeetingChatBody>
      <div className="background">
        <div className="window">
          {/* 헤더 */}
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
            <div className="title">
              <Link to="/MeetingDetails/MeetingPhoto">사진첩</Link>
            </div>
            <div className="selTitle">
              <Link to="/MeetingDetails/MeetingChat">단체톡</Link>
            </div>
            <div className="title">
              <Link to="/MeetingDetails/MeetingItems">용품구매</Link>
            </div>
          </div>
          {/* 세부 항목들 */}
          <div className="chatday" id="chatday">
            {date}
          </div>
          <div className="alam">{userName}님이 채널에 참가하셨습니다.</div>
          <div className="messageBubble">
            <img src={imgA} alt="img" className="profileImage" />
            <div className="messageInfo">
              <div className="senderName">{userName}</div>
              <div className="messageText">안녕~^^ MZ 아가들아 ㅋ</div>
            </div>
          </div>

          <div className="messageBubble sender">
            <div className="messageText sender">그래 건강하고?</div>
          </div>
        </div>
        <div className="chatInputContainer">
          <img src={imageChat} alt="img" className="inputIcon" />
          <div
            className="input"
            contenteditable="true"
            data-placeholder="Enter message"
          ></div>
        </div>
      </div>
    </styles.MeetingChatBody>
  );
};

export default MeetingChat;
