/* global kakao */
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const { kakao } = window;

const MapContainer = styled.div`
  margin: 0 6.3% 2.8%;
  .map-wrap {
      margin: 0;
      height: 500px;
    }
  @media(max-width:700px){
    margin: 0 2% 10%;
    .map-wrap {
      height: 250px;
    }
  }
`;

const Map = () => {

  useEffect(() => {
    const mapContainer = document.getElementById("map");
    const mapOptions = {
      center: new kakao.maps.LatLng(35.12, 129.1),
      level: 3,
    };
    // 지도 생성
    let map = new kakao.maps.Map(mapContainer, mapOptions);
  });
 
  

  return (
    <MapContainer>
      <div className='map-wrap'>
        <div 
          id="map"
          style={{
            width: '100%',
            height: '100%'
          }}
        >
        </div>
      </div>
    </MapContainer>
    
  );
};

export default Map;