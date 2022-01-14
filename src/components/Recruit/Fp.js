import React,{ useState } from "react";
import styled from "styled-components";
import Highfive from "../../img/sub/Highfive.svg";

import SubBanner from "../SubBanner";
import TitleBox from "../TitleBox";
import SubTitle from "./SubTitle";
import Button from "../Button";
import MiniBanner from "../MiniBanner";
import Info from "./Info";
import FpModal from "../Modal/FpModal";
import { ReactComponent as CloseBtn } from "../../img/common/CloseBtn.svg";
import checkIcon from "../../img/common/checkIcon.svg";
import checkedIcon from "../../img/common/checkedIcon.svg";


const Container = styled.section`
 > .sub-banner {
   position: relative;
   padding-right: 12.96875%;
   @media(max-width: 700px){
    padding-right: 0;
   }
 }
`;
const SupportContainer = styled.section`
  padding: 0 11.61458333333333% 0 8.020833333333333%;
  .title-box{
    line-height: 1.056375rem;
    font-size: 0.8rem;
    > p {
      padding-top: 20%;
    }
  }
  @media(max-width: 700px){
    padding: 0 7.89%;
    .title-box{
      line-height: 1rem;
      font-size: 0.625rem;
      align-self: flex-start;
      > p {
        padding-top: 10.4%;
      }
    }
  }
`;

const Contents1 = styled.div`
  padding-top: 13.61%;
  display: flex;
  justify-content: space-between;
  > table{
    border-collapse: collapse;
    th:last-child{
        width: 50%;
    }
    th:first-child{
        width: 25%;
    }
    th:nth-child(2){
      width: 25%;
    }
  }
  @media(max-width: 700px) { 
    flex-direction: column;
    padding-top: 10.5%;
    > table{
      width: 100%;
      th,td {
        font-size: 0.625rem;
        height: 40px;
        line-height: 1rem;
      }
      th:last-child{
        width: 56.25%;
      }
      th:first-child,th:nth-child(2){
        width: 21.875%;
      }
    }
  }
`;
const Contents2 = styled.div`
  padding-top: 9.81%;
  display: flex;
  justify-content: space-between;
  table{
    border-collapse: collapse;
    th:last-child{
        width: 75%;
    }
    th:first-child{
        width: 25%;
    }
    br {
      display: none;
    }
  }
  @media(max-width: 700px) {
    flex-direction: column;
    > table{
      width: 100%;
      th,td {
        font-size: 0.625rem;
        height: 40px;
        line-height: 1rem;
        /* height: 2.5rem; */
        br {
          display: block;
        }
      }
      th:last-child{
        width: 78.125%;
      }
      th:first-child{
        width: 21.875%;
      }
    }
  }
`;
const Contents3 = styled.div`
  padding-top: 9.81%;
  display: flex;
  justify-content: space-between;
  table{
    border-collapse: collapse;
    th:last-child{
      width: 75%;
    }
    th:first-child{
      width: 25%;
    }
  }
  @media(max-width: 700px) {
    flex-direction: column;
    > table{
      width: 100%;
      th,td {
        font-size: 0.625rem;
        height: 40px;
        line-height: 1rem;
        /* height: 2.5rem; */
        br {
          display: block;
        }
      }
      th:last-child{
        width: 78.125%;
      }
      th:first-child{
        width: 21.875%;
      }
    }
  }
`;
const Table = styled.table`
  align-self: flex-end;
  width: 62.21646143875567%;
  line-height: 3rem;
  margin-top: 6.99999%;
  
  td {
    border-top: 2px solid #C4C4C4;
  }
  th {
    color: #1A1A1A;
    font-family: 'GoyangDeogyang';
    font-size: 1.25rem;
    text-align: start;
  }
`;
const BottomWrap = styled.div`
  width: 100%;
  padding: 0 13.64583333333333%;
  display: flex;
  flex-direction: column;
  > .btn-box{
    width: 100%;
    padding: 15.62% 0 14.024% 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  @media(max-width: 700px) {
    padding: 0 5%;
    > .btn-box {
      padding: 17%  0;
    }
  }
`;
const InputBox = styled.div`
  > h3 {
    line-height: 2.6rem;
    color: #1A1A1A;
    @media(max-width: 700px){
      font-size: 1rem;
      line-height: 2.25rem;
      padding-top: 3.9%;
    }
  }
  input {
    border: 1px solid #BEBEBE;
    border-radius: 8px;
    height: 4.8vh;
    width: 100%;
    padding: 0 20px;
    @media(max-width: 700px){
      height: 50px;
      border-radius: 5px;
    }
  }
  input::placeholder,
  textarea::placeholder {
    color: #C4C4C4;
    font-size: 0.8rem;
    font-family: 'GoyangIlsan';
    @media(max-width: 700px){
      font-size: 0.8125rem;
    }
  }
  textarea {
    height: 19.2vh;
    width: 100%;
    border: 1px solid #BEBEBE;
    border-radius: 8px;
    padding: 24px 0 0 19px;
    outline: none;
    @media(max-width: 700px) {
      padding: 16px 0 0 16px;
    }
  }
  
`;
const CheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3% 0 5% 0;
  @media(max-width: 700px) {
    padding: 2% 0 10% 0;
  }
  input[type="checkbox"] + label {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    color: #1A1A1A;
    width: 70%;
    @media(max-width: 700px) {
      font-size: 0.625rem;
      line-height: 1.25rem;
    }
  }
  input[type="checkbox"] + label::before{
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-image: url(${checkIcon});
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 5%;
    @media(max-width: 700px) {
      width: 20px;
      height: 20px;
    }
  }
  input[type="checkbox"]:checked + label::before{
    background-image: url(${checkedIcon});
  }
  button {
    width: 60px;
    height: 30px;
    color: #FFFFFF;
    background-color: #B8292D;
    font-size: 0.8rem;
    @media(max-width: 700px) {
      width: 40px;
      height: 20px;
      font-size: 0.625rem;
    }
  }
 
`;
const SubmitBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: 250px;
    height: 50px;
    color: #FFFFFF;
    background-color: #B8292D;
    border-radius: 95px;
    font-size: 0.8125rem;
    cursor: pointer;
  }
  @media(max-width: 700px) {
    button {
      width: 100% ;
      height: 30px;
      border-radius: 3px;
    }
  }
`;

const Fp = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = (event) => { setModalOpen(!modalOpen) }

  return (
    <Container>
      <div className="sub-banner">
        <SubBanner
          padding="4.3% 16.75643327348893% 3.8% 9.275882704967086%"
          modifier="FP가 주인인 회사" 
          image={Highfive}
          link1='교육지원'
          link2='DB지원'
          link3='전산지원'
          id1="#part1"
          id2="#part2"
          id3="#part3"
        />
        <TitleBox  
          title="FP채용"
          list1="개인영업"
          list2="법인컨설팅"
          list3="DB영업"
          right='0'
        />
      </div>
      <SupportContainer>
        <Contents1 id="part1">
        <div className="title-box">
          <SubTitle 
            title="교육지원"
          />
          <p>"신입과 경력의 눈높이를 고려한 맞춤형<br />교육과정을 통하여 고객이 원하는 서비스를<br />제공하기 위한 능력을 배양합니다.</p>
          </div>
           <Table>
            <thead>
              <tr>
                <th>교육과정</th>
                <th>대상</th>
                <th>내용</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>입문교육</td>
              <td>신입 FP</td>
              <td>정규과정 : 입사 시 / 심화과정 : 13차 월</td>
            </tr>
            <tr>
              <td>상품교육</td>
              <td>소속 FP전체</td>
              <td>정규과정 : 매월 1회 / 심화과정 : 요청 시</td>
            </tr>
            <tr>
              <td>보상교육</td>
              <td>소속 FP전체</td>
              <td>정규과정 : 매월 1회 / 심화과정 : 요청 시</td>
            </tr>
            <tr>
              <td>Sales 교육</td>
              <td>소속 FP전체</td>
              <td>정규과정 : 분기 1회</td>
            </tr>
            </tbody>
          </Table> 
        </Contents1>
        <Contents2 id="part2" title="DB지원">
          <div className="title-box">
            <SubTitle 
              title="DB지원"
            />
            <p>보장분석 고객, 보험금청구, 고객, 무료보험<br />가입고객, 이벤트 참여고객등 FP가 원하는<br />양질의 DB를 재공함으로써 영업활동을<br />활성화 시켜드립니다.</p>
          </div>
          <Table>
            <tr>
              <th>속성</th>
              <th
              >채널</th>
            </tr>
            <tr>
              <td>보장분석</td>
              <td>홈페이지, SNS, 방송, 블로그, 내방형점포<br />(마트, 샵인샵, 로드샵)</td>
            </tr>
            <tr>
              <td>보험금청구</td>
              <td>병원, 키오스크, 어플리케이션</td>
            </tr>
            <tr>
              <td>특화DB</td>
              <td>소상공인, 박람회, 이벤트, 세미나, 캠페인, 퍼미션</td>
            </tr>
          </Table>
        </Contents2 >
        <Contents3 id="part3">
          <div className="title-box">
            <SubTitle 
              title="전산지원"
            />
            <p>PC와 모바일을 통해 보장분석, 보험료 산출,<br />보험금 청구는 물론 계약 / 소득 / 고객관리<br />솔루션을 제공하며 특히, 설계 난읻이도가 높은<br />일반보험 영역까지도 간편설계가 가능하도록<br />지원해 드립니다.</p>
          </div>
          <Table>
            <tr>
              <th>솔루션</th>
              <th>지원내용</th>
            </tr>
            <tr>
              <td>OK 마이보험</td>
              <td>보장분석, 보험료 비교, 상품정보 제공</td>
            </tr>
            <tr>
              <td>OK 일반보험</td>
              <td>자동차보험, 화재보험, 의무/정책보험 간편설계</td>
            </tr>
            <tr>
              <td>ERP</td>
              <td>고객관리, 계약관리, 소득관리 등 통합관리시스템</td>
            </tr>
          </Table>
        </Contents3>
      </SupportContainer>
      {modalOpen ?  
        <FpModal onClick={(event) =>{event.stopPropagation()}}>
          <div>
            <CloseBtn stroke='#1A1A1A' className="close-btn" onClick={openModal}/>
            <h2>FP 입사 지원하기</h2>
          </div>
          <form
            id="application"
            style={{
             
            }}
            onSubmit={(event) => {
              event.preventDefault();
              console.log(
                event.target.branch.value,
                event.target.area.value,
                event.target.username.value,
                event.target.phoneNum.value,
                event.target.free.value,
                event.target.perInfo.value,
              )
              alert('입사지원이 완료 되었습니다');
            }}
          >
            <select name="branch">
              <option value="0">분야</option>
              <option value="corporate">법인컨설팅</option>
              <option value="db">DB영업</option>
            </select>
            <InputBox>
              <h3>지역</h3>
              <input 
                type="text"
                name="area"
              />
            </InputBox>
            <InputBox>
              <h3>이름</h3>
              <input 
                type="text"
                name="username"
              />
            </InputBox>
            <InputBox>
              <h3>연락처</h3>
              <input 
                type="tel"
                name="phoneNum"
                placeholder="‘-’없이 번호만 입력해 주세요."
              />
            </InputBox>
            <InputBox>
              <h3>자유기술</h3>
              <textarea 
                type="text"
                name="free"
                placeholder="200자 이내로 적어주세요."
                maxLength={200}
              />  
            </InputBox>
            <CheckBox>
              <input type="checkbox" id="agree" name="perInfo" />
              <label for="agree">개인정보수집 및 이용동의서</label>
              <button>보기</button>
            </CheckBox>
            <SubmitBox>
              <button type="submit">
                지원하기
              </button>
            </SubmitBox>
          </form>
        </FpModal> : null}

        <BottomWrap>
          <div className="btn-box">
            <Button size="lg">
              <p style={{width: '100%'}} onClick={openModal}>
                입사지원
              </p>
            </Button>
          </div>
          <MiniBanner desc="FP채용 문의" />
          
            <Info email="이메일 : kkang933@wehago.com" keeper="담당자 : 강세훈 부장" />
     
        </BottomWrap>
    </Container>
  );
}

export default Fp;



