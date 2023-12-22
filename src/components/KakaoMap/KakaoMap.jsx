import React, { useEffect } from "react";
import areaIcon from "../../assets/areaIcon.png";

const { kakao } = window;

export default function KakaoMap({ location }) {
  useEffect(() => {
    console.log(location);
    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);
    const geocoder = new kakao.maps.services.Geocoder();

    var imageSrc = areaIcon, // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(50, 50); // 마커이미지의 크기입니다

    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    geocoder.addressSearch(location, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        const marker = new kakao.maps.Marker({
          map: map,
          position: coords,
          image: markerImage, // 마커이미지 설정
        });

        const infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:150px;text-align:center;padding:6px 0;font-size:14px;word-break:keep-all;">${location}</div>`,
        });
        infowindow.open(map, marker);

        map.setCenter(coords);
      }
    });
  }, [location]);

  return (
    <div
      id="map"
      style={{
        width: "90vw",
        height: "40vh",
      }}
    ></div>
  );
}
