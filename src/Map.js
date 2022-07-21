/*global kakao*/
import React, { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    let mapContainer = document.getElementById("map"),
      mapOption = {
        center: new kakao.maps.LatLng(37.5432311, 126.9337242),
        level: 2,
      };
    let map = new kakao.maps.Map(mapContainer, mapOption);

    let mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPLEFT);
    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.TOPRIGHT);

    let markerPosition = new kakao.maps.LatLng(37.5432311, 126.9337242);

    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, []);

  return <div id="map" style={{ width: "100vw", height: "100vh" }} />;
};
export default Map;
