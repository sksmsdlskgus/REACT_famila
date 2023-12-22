import React, { useState } from "react";
import * as styles from "./MeetingItemsStyle";
import arrowLeftImg from "../../../assets/arrow-left.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const MeetingItems = () => {
  const navigate = useNavigate();

  const goBack = () => {
    window.history.back();
    // navigate("/");
  };

  const [meetingTitle, setMeetingTitle] = useState("실버들의 러닝 모임");

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <styles.MeetingItemsBody>
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
            <div className="title">
              <Link to="/MeetingDetails/MeetingChat">단체톡</Link>
            </div>
            <div className="selTitle">
              <Link to="/MeetingDetails/MeetingItems">용품구매</Link>
            </div>
          </div>
          {/* 세부 항목들 */}
          <div className="meetingShopping">모임 관련 용품을 쇼핑하세요!</div>
          <form className="search-container">
            <input
              type="text"
              className="search-area"
              placeholder="검색으로 원하는 용품 찾기"
              value={inputValue}
              onChange={handleChange}
            />
            <FontAwesomeIcon icon={faSearch} style={{ fontSize: "20px" }} />
          </form>
          <div className="notice">용품이 준비중 입니다.</div>
        </div>
      </div>
    </styles.MeetingItemsBody>
  );
};

export default MeetingItems;
