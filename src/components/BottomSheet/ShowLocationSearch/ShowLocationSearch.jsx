import React, { useState } from "react";
import * as styles from "./ShowLocationSearchStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faX, faCheck } from "@fortawesome/free-solid-svg-icons";
import KakaoMap from "../../KakaoMap/KakaoMap";
/* global kakao*/

const ShowLocationSearch = ({ toggleBottomSheet, setSelectLocation }) => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const setCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // 위치 정보를 받아온 경우
          getAddr(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          // 위치 정보를 받아오는 데 실패한 경우
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };
  //카카오맵 API를 활용한 좌표로 주소 얻기
  function getAddr(lat, lng) {
    // 주소-좌표 변환 객체를 생성합니다
    let geocoder = new kakao.maps.services.Geocoder();

    let coord = new kakao.maps.LatLng(lat, lng);
    let callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        console.log(result[0].road_address.address_name);
        setLocation(result[0].road_address.address_name);
      }
    };
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  }

  //input에 주소를 검색할 경우 해당 주소 지도로 표시
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setLocation(value);
  };

  const selectThisLocation = () => {
    setInputValue(location);
    setSelectLocation(location);
    toggleBottomSheet();
  };

  //   //키워드로 장소 검색
  //   // 장소 검색 객체를 생성합니다
  //   var ps = new kakao.maps.services.Places();

  //   // 키워드로 장소를 검색합니다
  //   ps.keywordSearch(inputValue, placesSearchCB);

  //   // 키워드 검색 완료 시 호출되는 콜백함수 입니다
  //   function placesSearchCB(data, status, pagination) {
  //     if (status === kakao.maps.services.Status.OK) {
  //       // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
  //       // LatLngBounds 객체에 좌표를 추가합니다
  //       console.log(data);
  //       console.log(status);
  //     }
  //   }

  return (
    <styles.ShowLocationSearchBody>
      <styles.BottomSheetHeader>
        <p>모임 지역</p>
        <FontAwesomeIcon
          icon={faX}
          style={{
            color: "lightgray",
            cursor: "pointer",
          }}
          onClick={toggleBottomSheet}
        />
      </styles.BottomSheetHeader>
      <styles.MapComponent>
        <KakaoMap location={location} />
      </styles.MapComponent>
      <styles.SelectThisLocationButton onClick={selectThisLocation}>
        <FontAwesomeIcon icon={faCheck} />이 장소로 등록하기
      </styles.SelectThisLocationButton>
      <styles.SearchLocationInput
        placeholder="장소를 검색해주세요"
        value={inputValue}
        onChange={handleInputChange}
      ></styles.SearchLocationInput>
      <styles.SetCurrentLocationButton onClick={setCurrentLocation}>
        <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "2%" }} />
        현재 위치로 지정
      </styles.SetCurrentLocationButton>
    </styles.ShowLocationSearchBody>
  );
};

export default ShowLocationSearch;
