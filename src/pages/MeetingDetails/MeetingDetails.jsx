import React,{useState,useEffect} from 'react'
import * as styles from './MeetingDetailsStyle';
import imgA from '../../assets/A.png';
import arrowLeftImg from '../../assets/arrow-left.png';
import FooterMenu from '../../components/FooterMenu/FooterMenu';
import BottomSheet from "../../components/BottomSheet/BottomSheet";
import { Routes, Route, useNavigate } from 'react-router-dom';
import MeetingDetailsHome from './detailsHome/MeetingDetailsHome';
import MeetingPost from './post/MeetingPost';
import MeetingPhoto from './photo/MeetingPhoto';
import MeetingChat from './chat/MeetingChat';
import MeetingItems from './items/MeetingItems';

const MeetingDetails = () => {

  const navigate = useNavigate();

  const goToDetailsHome = () => {
    navigate("/MeetingDetails/MeetingDetailsHome");
  }

  const [myMeeting, setMyMeeting] = useState(2);
    const [meetingList, setMeetingList] = useState([{
        meetingImgSrc: imgA, //모임 썸네일 이미지
        meetingTitle: "실버 스윙댄스 모임 두줄에", //모임 제목
        meetingMoreInfo : "", //모임 상세정보 주소
        meetingLocation: "중량구 면목동", // 모임장소
        meetingPeople: 8,
        isMeetingOrder: true,
    }, {
        meetingImgSrc: imgA, //모임 썸네일 이미지
        meetingTitle: "중년 러닝 모임", //모임 제목
        meetingMoreInfo : "", //모임 상세정보 주소
        meetingLocation: "중량구 면목동", // 모임장소
        meetingPeople: 7,
        isMeetingOrder: false,
    }, {
        meetingImgSrc: imgA, //모임 썸네일 이미지
        meetingTitle: "수도권 둘레길 걷기 60대", //모임 제목
        meetingMoreInfo : "", //모임 상세정보 주소
        meetingLocation: "중량구 면목동", // 모임장소
        meetingPeople: 7,
        isMeetingOrder: false,
        }, {
        meetingImgSrc: imgA, //모임 썸네일 이미지
        meetingTitle: "수도권 둘레길 걷기 60대", //모임 제목
        meetingMoreInfo : "", //모임 상세정보 주소
        meetingLocation: "중량구 면목동", // 모임장소
        meetingPeople: 7,
        isMeetingOrder: false,
        }, {
        meetingImgSrc: imgA, //모임 썸네일 이미지
        meetingTitle: "수도권 둘레길 걷기 60대", //모임 제목
        meetingMoreInfo : "", //모임 상세정보 주소
        meetingLocation: "중량구 면목동", // 모임장소
        meetingPeople: 7,
        isMeetingOrder: false,
        }
    ]);
    
    const [isOpen, setIsOpen] = useState(false);
    const toggleBottomSheet = () => {
        setIsOpen(!isOpen);
    };
    const [myMeetingSchedule, setMyMeetingSchedule] = useState(2);
    const [meetingSchedule, setMeetingSchedule] = useState([
        {
            id: 0,
            title: "실버 스윙댄스 모임",
            img: imgA,
            date: "7월 18일(토)",
            time: "오전 10:00",
            dDay: 'D-10',
            location: "효령로55길 23",
            locationDetail: "동산빌딩 3층 302호",
            currentPeople: 3,
            maxPeople: 20,
            dues: "20,000",
            joined: false
        },
        {
            id: 1,
            title: "실버 스윙댄스 모임",
            img: imgA,
            date: "7월 18일(토)",
            time: "오전 10:00",
            dDay: 'D-10',
            location: "서울시",
            locationDetail: "멋사빌딩 1층 102호",
            currentPeople: 3,
            maxPeople: 20,
            dues: "20,000",
            joined: false
        },
        {
            id: 2,
            title: "실버 스윙댄스 모임",
            img: imgA,
            date: "7월 18일(토)",
            time: "오전 10:00",
            dDay: 'D-10',
            location: "세종시",
            locationDetail: "63빌딩 63층 63호",
            currentPeople: 3,
            maxPeople: 20,
            dues: "20,000",
            joined: false
        }
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
  
    const [selectBottomSheetPage, setSelectBottomSheetPage] = useState("showMoreMeeting")
    const [currentMapId, setCurrentMapId] = useState(0);
    const handleSelectBottomSheetPage = (selectPage, index) => {
        setSelectBottomSheetPage(selectPage);
        setCurrentMapId(index);
        toggleBottomSheet();
  }

  // useEffect(() => {
  //   goToDetailsHome();
  // }, []);

  const [joinedMember, setJoinedMember] = useState([
    {
      name: "김수지",
      profileImg: imgA,
      isOrder: true,
      isSubOrder: false
    }, {
      name: "김철수",
      profileImg: imgA,
      isOrder: false,
      isSubOrder: true
    }, {
      name: "장덕희",
      profileImg: imgA,
      isOrder: false,
      isSubOrder: false
    }, {
      name: "최철기",
      profileImg: imgA,
      isOrder: false,
      isSubOrder: false
    },{
    name: "안희진",
    profileImg: imgA,
    isOrder: false,
    isSubOrder: false
    },{
    name: "안희진",
    profileImg: imgA,
    isOrder: false,
    isSubOrder: false
    },{
    name: "안희진",
    profileImg: imgA,
    isOrder: false,
    isSubOrder: false
    },
  ]);

  const toggleJoinedMemberBottomSheet = () => {
    handleSelectBottomSheetPage("joinedMember");
  }



  return (
    <styles.MeetingDetailsBody>
      <Routes>
        <Route
          path="MeetingDetailsHome"
          element={
            <MeetingDetailsHome
              myMeetingSchedule={myMeetingSchedule}
              meetingSchedule={meetingSchedule}
              handleMeetingClick={handleMeetingClick}
              handleSelectBottomSheetPage={handleSelectBottomSheetPage}
              joinedMember={joinedMember}
              toggleJoinedMemberBottomSheet={toggleJoinedMemberBottomSheet}
            />
          }
        ></Route>
        <Route
          path="MeetingPost"
          element={<MeetingPost />}
        ></Route>
        <Route
          path="MeetingPhoto"
          element={<MeetingPhoto />}
        ></Route>
        <Route
          path="MeetingChat"
          element={<MeetingChat />}
        ></Route>
        <Route
          path="MeetingItems"
          element={<MeetingItems />}
        ></Route>
      </Routes>
      
        
      <BottomSheet
        isOpen={isOpen}
        meetingList={meetingList}
        myMeeting={myMeeting}
        toggleBottomSheet={toggleBottomSheet}
        selectBottomSheetPage={selectBottomSheetPage}
        meetingSchedule={meetingSchedule}
        currentMapId={currentMapId}
        joinedMember={joinedMember}
      />
      <FooterMenu/>
      </styles.MeetingDetailsBody>
  )
}

export default MeetingDetails