import React, { useState } from "react";
import * as styles from "./MeetingDetailsHomeStyle";
import ScheduleSlider from "../../../components/ScheduleSlider/ScheduleSlider";
import imgA from "../../../assets/A.png";
import crownImg from "../../../assets/crown.png";
import kakaoIcon from "../../../assets/kakao_icon.png";
import areaIcon from "../../../assets/areaIcon.png";
import arrowLeftImg from "../../../assets/arrow-left.png";
import { useNavigate, Link } from "react-router-dom";

const MeetingDetailsHome = ({
  myMeetingSchedule,
  meetingSchedule,
  handleMeetingClick,
  handleSelectBottomSheetPage,
  joinedMember,
  toggleJoinedMemberBottomSheet,
}) => {
  const navigate = useNavigate();

  const createMeeting = () => {
    navigate("/CreateMeeting");
  };

  const goToImgs = () => {
    navigate("/MeetingDetails/MeetingPhoto");
  };
  const goToPost = () => {
    navigate("/MeetingDetails/MeetingPost");
  };

  const goBack = () => {
    // window.history.back();
    navigate("/");
  };

  const [isMeetingOrder, setIsMeetingOrder] = useState(true);
  const [meetingTitle, setMeetingTitle] = useState("실버들의 러닝 모임");
  const [isJoined, setIsJoined] = useState(false);

  const meetingJoinedSuccess = () => {
    setIsJoined(!isJoined);
    alert("모임 창여 완료되었습니다. 단체톡에서 모임원에게 인사를 나눠주세요");
  };

  return (
    <styles.MeetingDetailsHomeBody>
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
        <div className="selTitle">
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
        <div className="title">
          <Link to="/MeetingDetails/MeetingItems">용품구매</Link>
        </div>
      </div>
      <div className="moimImgList" style={{ backgroundImage: `url(${imgA})` }}>
        <div className="signup">내가 참여한 모임</div>
        <div
          className="dot"
          style={{
            position: "absolute",
            bottom: "10px",
          }}
        >
          <div className="grayDot"></div>
          <div className="blackGrayDot"></div>
        </div>
      </div>
      <div className="moimTagArea">
        <div className="whiteTag">🏌🏼 활동/건강</div>
        <div className="tag">헬스</div>
        <div className="tag">등산</div>
        <div className="tag">자전거</div>
      </div>
      <styles.MeetingSchedule>
        <p style={{ fontSize: "20px" }}>
          모임 일정{" "}
          <span style={{ fontSize: "20px" }}>{myMeetingSchedule}</span>
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
      <div className="myMoim" style={{ marginTop: "16px" }}>
        모임원 <span className="ora">{joinedMember.length}</span>
        <div className="viewAll" onClick={toggleJoinedMemberBottomSheet}>
          전체 보기
        </div>
      </div>
      <div className="moimPeopleArea">
        <div className="moimJangArea">
          <div
            className="moimJangImg"
            style={{ backgroundImage: `url(${imgA})` }}
          ></div>
          <div className="moimJangText">
            <div className="moimJangBadge">
              <img className="crown" src={crownImg} alt="crownImg" />
              모임장
            </div>
            <div className="moimJangName">{joinedMember[0].name}</div>
          </div>
        </div>
        <div className="moimPeople">
          {joinedMember.length - 5 > 0 ? (
            <>
              {joinedMember.slice(1, 5).map((member, index) => (
                <div
                  key={index}
                  className="moimPeopleImg"
                  style={{ backgroundImage: `url(${member.profileImg})` }}
                ></div>
              ))}
              <div
                className="moimPeopleImg"
                style={{ backgroundImage: `url(${imgA})` }}
                onClick={toggleJoinedMemberBottomSheet}
              >
                +{joinedMember.length - 5}
              </div>
            </>
          ) : (
            joinedMember.map((member, index) => (
              <div
                key={index}
                className="moimPeopleImg"
                style={{ backgroundImage: `url(${member.profileImg})` }}
              ></div>
            ))
          )}
        </div>
      </div>
      <div className="kakaoArea" onClick={() => alert("준비중입니다")}>
        <div className="kakao0you">
          <img className="kakao" src={kakaoIcon} alt="kakaoIcon" />
          카카오톡에 모임 공유하기
        </div>
      </div>
      <div className="myMoim" style={{ marginTop: "16px" }}>
        모임 소개
      </div>
      <div className="introMoim">
        -가볍게 즐길 수 있는 사교 러닝 모임-
        <br />
        • 몸치 박치 여도 괜찮은 커플 댄스모임
        <br />
        • 친구 사귀기 좋고 즐거움이 있는 모임
        <br />
        • 모임 회비 : 10,000원
        <br />• 수업 회비 : 30,000원
      </div>
      <div className="myMoim" style={{ marginTop: "32px" }}>
        게시판
        <div className="viewAll" onClick={goToPost}>
          전체 보기
        </div>
      </div>
      <div className="gaesiArea">
        <div className="geul">
          <span className="ora">[필독]</span>*공지*
        </div>
        <div className="geul">
          <span className="ora">[필독]</span>가입인사 양식
        </div>
      </div>
      <div className="myMoim" style={{ marginTop: "32px" }}>
        사진첩
        <div className="viewAll" onClick={goToImgs}>
          전체 보기
        </div>
      </div>
      <div className="moimSaJinArea">
        <div
          className="moimSaJin"
          style={{ backgroundImage: `url(${imgA})` }}
        ></div>
        <div
          className="moimSaJin"
          style={{ backgroundImage: `url(${imgA})` }}
        ></div>
        <div
          className="moimSaJin"
          style={{ backgroundImage: `url(${imgA})` }}
          onClick={goToImgs}
        >
          +9
        </div>
      </div>
      <div className="myMoim" style={{ marginTop: "32px" }}>
        활동지역
      </div>
      <div className="moimListAdd">
        <img className="listAddicon" src={areaIcon} alt="areaIcon" />
        중랑구 면목동
      </div>
      <div className="moimAddressViewArea">
        <div className="moimAddView"></div>
      </div>
      {isMeetingOrder ? (
        <></>
      ) : isJoined ? (
        <div className="moimSigninArea">
          <div className="moimSignin" onClick={() => alert("준비중입니다")}>
            +친구 초대
          </div>
        </div>
      ) : (
        <div className="moimSigninArea">
          <div className="moimSignin" onClick={meetingJoinedSuccess}>
            모임 참여
          </div>
        </div>
      )}
      {isMeetingOrder ? (
        <>
          <div className="make1jung">
            <div className="make1Text" onClick={createMeeting}>
              일정 생성
            </div>
          </div>
          <div className="invite">
            <div className="inviteText" onClick={() => alert("준비중입니다")}>
              + 친구 초대
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      <div className="none">
        <div className="nonenone"></div>
      </div>
    </styles.MeetingDetailsHomeBody>
  );
};

export default MeetingDetailsHome;
