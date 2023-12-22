import React, { useState, useEffect } from "react";
import * as styles from "./MainHomeStyle";
import profileIcon from "../../assets/profileIcon_none.png";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import BottomSheet from "../../components/BottomSheet/BottomSheet";
import ScheduleSlider from "../../components/ScheduleSlider/ScheduleSlider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import imgA from "../../assets/A.png";
import imgLeader from "../../assets/leader.png";

import { Link, useNavigate } from "react-router-dom";

const MainHome = () => {
  const navigate = useNavigate();
  // 시니어 or 도우미 역할
  const [userRole, setUserRole] = useState("시니어");
  const [userName, setUserName] = useState("홍길동");
  const [userAge, setUserAge] = useState(20);
  const [myMeeting, setMyMeeting] = useState(2);
  const [meetingList, setMeetingList] = useState([
    {
      meetingImgSrc: imgA, //모임 썸네일 이미지
      meetingTitle: "실버 스윙댄스 모임 두줄에", //모임 제목
      meetingMoreInfo: "", //모임 상세정보 주소
      meetingLocation: "중량구 면목동", // 모임장소
      meetingPeople: 8,
      isMeetingOrder: true,
    },
    {
      meetingImgSrc: imgA, //모임 썸네일 이미지
      meetingTitle: "중년 러닝 모임", //모임 제목
      meetingMoreInfo: "", //모임 상세정보 주소
      meetingLocation: "중량구 면목동", // 모임장소
      meetingPeople: 7,
      isMeetingOrder: false,
    },
    {
      meetingImgSrc: imgA, //모임 썸네일 이미지
      meetingTitle: "수도권 둘레길 걷기 60대", //모임 제목
      meetingMoreInfo: "", //모임 상세정보 주소
      meetingLocation: "중량구 면목동", // 모임장소
      meetingPeople: 7,
      isMeetingOrder: false,
    },
    {
      meetingImgSrc: imgA, //모임 썸네일 이미지
      meetingTitle: "수도권 둘레길 걷기 60대", //모임 제목
      meetingMoreInfo: "", //모임 상세정보 주소
      meetingLocation: "중량구 면목동", // 모임장소
      meetingPeople: 7,
      isMeetingOrder: false,
    },
    {
      meetingImgSrc: imgA, //모임 썸네일 이미지
      meetingTitle: "수도권 둘레길 걷기 60대", //모임 제목
      meetingMoreInfo: "", //모임 상세정보 주소
      meetingLocation: "중량구 면목동", // 모임장소
      meetingPeople: 7,
      isMeetingOrder: false,
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const toggleBottomSheet = () => {
    setIsOpen(!isOpen);
  };
  const [isAccountRegister, setIsAccountRegister] = useState(true);
  const [myMeetingSchedule, setMyMeetingSchedule] = useState(2);
  const [meetingSchedule, setMeetingSchedule] = useState([
    {
      id: 0,
      title: "실버 스윙댄스 모임",
      img: imgA,
      date: "7월 18일(토)",
      time: "오전 10:00",
      dDay: "D-10",
      location: "효령로55길 23",
      locationDetail: "동산빌딩 3층 302호",
      currentPeople: 3,
      maxPeople: 20,
      dues: "20,000",
      joined: false,
    },
    {
      id: 1,
      title: "실버 스윙댄스 모임",
      img: imgA,
      date: "7월 18일(토)",
      time: "오전 10:00",
      dDay: "D-10",
      location: "서울시",
      locationDetail: "동산빌딩 3층 302호",
      currentPeople: 3,
      maxPeople: 20,
      dues: "20,000",
      joined: false,
    },
    {
      id: 2,
      title: "실버 스윙댄스 모임",
      img: imgA,
      date: "7월 18일(토)",
      time: "오전 10:00",
      dDay: "D-10",
      location: "세종시",
      locationDetail: "동산빌딩 3층 302호",
      currentPeople: 3,
      maxPeople: 20,
      dues: "20,000",
      joined: false,
    },
  ]);

  useEffect(() => {
    setMyMeetingSchedule(meetingSchedule.length);
    setMyMeeting(meetingList.length);
  }, []);

  const handleMeetingClick = (meetingId, joined) => {
    // 여기서 meetingId를 이용하여 특정 meeting을 업데이트
    setMeetingSchedule((prevSchedule) =>
      prevSchedule.map((item) =>
        item.id === meetingId ? { ...item, joined } : item
      )
    );
  };

  const [selectBottomSheetPage, setSelectBottomSheetPage] =
    useState("showMoreMeeting");
  const [currentMapId, setCurrentMapId] = useState(0);
  const handleSelectBottomSheetPage = (selectPage, index) => {
    setSelectBottomSheetPage(selectPage);
    setCurrentMapId(index);
    toggleBottomSheet();
  };

  const createMeeting = () => {
    navigate("/CreateMeeting");
  };

  return (
    <>
      <HeaderMenu />
      <styles.MainBody>
        {/* 사용자 정보 */}
        <styles.UserInfo>
          <styles.ProfileIconImg src={imgA} alt="user-profile" />
          <styles.InfoText>
            <p>{userRole}님,</p>
            <br />
            <p>이름: {userName}</p>
            <p>나이: {userAge}세</p>
          </styles.InfoText>
        </styles.UserInfo>
        {/* 내 모임 */}
        <styles.MyMeeting>
          <p>
            내 모임 <span>{myMeeting}</span>
          </p>
          <styles.FindMeeting>
            {meetingList.slice(0, 2).map((meeting, index) => (
              <styles.MeetingItem key={index}>
                <img src={meeting.meetingImgSrc} alt="img"></img>
                <p>{meeting.meetingTitle}</p>
              </styles.MeetingItem>
            ))}
            <styles.FindMoreMeeting
              onClick={() => handleSelectBottomSheetPage("showMoreMeeting")}
            >
              <p>+{meetingList.length === 0 ? "모임 찾기" : "더보기"}</p>
            </styles.FindMoreMeeting>
          </styles.FindMeeting>
        </styles.MyMeeting>
        {/* 계좌등록 */}
        {isAccountRegister ? (
          <styles.AccountRegister>
            <FontAwesomeIcon icon={faCircleInfo} />
            <div>
              모임을 만들고 수익을 얻으시려면{" "}
              <span onClick={() => alert("준비중입니다.")}>여기에서</span>{" "}
              계좌를 등록해 주세요!
            </div>
          </styles.AccountRegister>
        ) : (
          <></>
        )}
        {/* 모임 일정 */}
        <styles.MeetingSchedule>
          <p>
            모임 일정 <span>{myMeetingSchedule}</span>
          </p>
          {meetingSchedule.length !== 0 ? (
            <ScheduleSlider
              meetingSchedule={meetingSchedule}
              onMeetingClick={handleMeetingClick}
              handleSelectBottomSheetPage={handleSelectBottomSheetPage}
            />
          ) : (
            <></>
          )}
        </styles.MeetingSchedule>

        {/* bottomSheet */}
        <BottomSheet
          isOpen={isOpen}
          meetingList={meetingList}
          myMeeting={myMeeting}
          toggleBottomSheet={toggleBottomSheet}
          selectBottomSheetPage={selectBottomSheetPage}
          meetingSchedule={meetingSchedule}
          currentMapId={currentMapId}
        />
        <div className="myMoim" style={{ marginTop: "25px" }}>
          단체톡 <span className="ora">2</span>
        </div>
        <div className="talkArea">
          <div className="talkPng" style={{ backgroundImage: `url(${imgA})` }}>
            <div
              className="leader"
              style={{ backgroundImage: `url(${imgLeader})` }}
            ></div>
          </div>
          <div className="one">
            <div className="talkTitle">
              <Link to="/MeetingDetails/MeetingChat">
                실버 스윙댄스 모임 두줄에서 일립시스
              </Link>
            </div>
            <div className="people">73</div>
            <div className="message">
              <Link to="/MeetingDetails/MeetingChat">
                어서오세요~!~! 저는 어쩌구 저쩌구 쏼라
              </Link>
            </div>
            <div className="mesNumArea">
              <div className="mesNum">23</div>
            </div>
          </div>
        </div>
      </styles.MainBody>
      <styles.CreateMeeting onClick={createMeeting}>
        + 모임 만들기
      </styles.CreateMeeting>
      <FooterMenu />
    </>
  );
};

export default MainHome;
