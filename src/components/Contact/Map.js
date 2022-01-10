/* global kakao */
import React, { useEffect } from "react";
import styled from "styled-components";
import SearchGuide from "./SearchGuide";
import searchIcon from '../../img/common/searchIcon.svg';
const { kakao } = window;

const mapData = [
  {
    id: 0,
    team: '다온사업단',
    address: '경기도 고양시 일산서구 킨텍스로 240, 605호 (킨텍스꿈에그린 오피스)',
    tel: '02-6952-2133'
  }
  // {
  //   id: 1,
  //   team: '건누리병원',
  //   address: '경기도 고양시 일산서구 강성로 275',
  //   tel: '02-6952-2133'
  // },
  // {
  //   id: 2,
  //   team: '활기찬병원',
  //   address: '경기도 고양시 덕양구 화정동 984-1',
  //   tel: '02-6952-2133'
  // },
  // {
  //   id: 3,
  //   team: '다조은병원',
  //   address: '경기도 김포시 통진읍 김포대로 2214',
  //   tel: '02-6952-2133'
  // },
  // {
  //   id: 4,
  //   team: '신통병원',
  //   address: '경기도 남양주시 다산중앙로145번길',
  //   tel: '02-6952-2133'
  // },
  // {
  //   id: 5,
  //   team: '스타인슈',
  //   address: '경기도 부천시 상동 532-3 대야복합타워 502-2호',
  //   tel: '010-8712-1473'
  // },
  // {
  //   id: 6,
  //   team: '유니온 본부',
  //   address: '경기시 용인시 기흥구 용구대로 2384. 4층',
  //   tel: '02-403-7766'
  // },
  // {
  //   id: 7,
  //   team: '서울본부',
  //   address: '서울시 강남구 봉은사로 121. 대종빌딩 2층',
  //   tel: '02-514-4448'
  // },
  // {
  //   id: 8,
  //   team: '자산관리본부',
  //   address: '서울시 강남구 봉은사로 331. SH타워 13층',
  //   tel: '02-6205-9311'
  // },
  // {
  //   id: 9,
  //   team: 'JJ파트너스',
  //   address: '서울시 강남구 테헤란로 87길 36 24층 2408호/도심공항타워 패스트파이브 삼성1호점)',
  //   tel: '02-6952-2160'
  // },
  // {
  //   id: 10,
  //   team: 'ACE본부',
  //   address: '서울시 강서구 마곡동 800-3 우성에스비타워2 3F, 301호',
  //   tel: '02-6346-6007'
  // },
  // {
  //   id: 11,
  //   team: 'SNU서울병원',
  //   address: '서울시 강서구 공항대로 237 에이스타워마곡',
  //   tel: '02-6952-2133'
  // },
  // {
  //   id: 12,
  //   team: '사업단',
  //   address: '경기도 고양시 일산서구 킨텍스로 240, 605호 (킨텍스꿈에그린 오피스)',
  //   tel: '02-6952-2133'
  // },
  // {
  //   id: 13,
  //   team: '사업단',
  //   address: '경기도 고양시 일산서구 킨텍스로 240, 605호 (킨텍스꿈에그린 오피스)',
  //   tel: '02-6952-2133'
  // },
  // {
  //   id: 14,
  //   team: '사업단',
  //   address: '경기도 고양시 일산서구 킨텍스로 240, 605호 (킨텍스꿈에그린 오피스)',
  //   tel: '02-6952-2133'
  // },
  // {
  //   id: 15,
  //   team: '사업단',
  //   address: '경기도 고양시 일산서구 킨텍스로 240, 605호 (킨텍스꿈에그린 오피스)',
  //   tel: '02-6952-2133'
  // },
  // {
  //   id: 16,
  //   team: '사업단',
  //   address: '경기도 고양시 일산서구 킨텍스로 240, 605호 (킨텍스꿈에그린 오피스)',
  //   tel: '02-6952-2133'
  // },
]
const SearchBox = styled.div`
  margin: 5% 13.54166666666667% 3%;
  padding: 0 1%;
  border-bottom: 1px solid #444444;
  
  .inputForm{
    display: flex;
  }
   input {
    width: 100%;
    height: 40px;
  }
  input::placeholder{
    color: #C4C4C4;
  }
   button {
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-size: contain;
    width: 25px;
    height: 25px;
  }
`;
const MapList = styled.div`
  padding-bottom: 5%;
  table {
    border-collapse: collapse;
    width: 100%;
    
    th {
      background-color: #F5F5F5;
      line-height: 50px;
      font-size: 0.8rem;
      color: #323232;
      border-top: 3px solid #323232;
      font-family: 'GoyangDeogyang';
    }
    th:first-child,th:last-child{
      width: 18.21428571428571%;
    }
    th:nth-child(2) {
      border-left: 1px solid #F0F0F0;
      border-right: 1px solid #F0F0F0;
    }
    td {
      height: 70px;
      text-align: center;
      color: #323232;
      
    }
    td:nth-child(2) {
      border-left: 1px solid #F0F0F0;
      border-right: 1px solid #F0F0F0;
    }
  }
`;
const MapContainer = styled.div`
  padding: 0 13.54166666666667%;
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
    let geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch('', function(result, status) {
      if (status === kakao.maps.services.Status.OK) {
        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        let marker = new kakao.maps.Marker({
          map: map,
          position: coords
        });
        let infowindow = new kakao.maps.InfoWindow({
          content: '<div style="width:150px;color:red;text-align:center;padding:6px 0;">내가 썼지롱</div>'
        });
        infowindow.open(map, marker);
        map.setCenter(coords);
      }
    })
  }, []);


  return (
    <MapContainer>
      <SearchBox>
      <form className="inputForm">
        <input
          id="keword"
          type="text"
          placeholder="본부, 사업단, 지점명, 보험플러스 점포명 입력"
        />
        <button type="submit" />
      </form>
      </SearchBox>
      <SearchGuide />
      <MapList>
        <table>
          <thead>
            <tr>
              <th>사업단</th>
              <th>주소</th>
              <th>전화번호</th>
            </tr>
            <tr>
            {mapData.map((md) => (
              <>
                <td key={md.id}>{md.team}</td>
                <td>{md.address}</td>
                <td>{md.tel}</td>
              </>
            ))}
            </tr>
          </thead>
        </table>
      </MapList>
      <div className='map-wrap'>
        <div 
          id="map"
          style={{
            width: '100%',
            height: '500px'
          }}
        >
        </div>
      </div>
    </MapContainer>
    
  );
};

export default Map;