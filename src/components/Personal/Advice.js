import React from "react";
import styled from "styled-components";

import checkIcon from "../../img/common/checkIcon.svg";
import checkedIcon from "../../img/common/checkedIcon.svg";

const Advice = () => {
  return (
    <>
      <Title>
        <h2>FP 지원상담</h2>
        <p>
          아이티엑스마케팅의 문은 <br /> 항상 열려 있습니다.
        </p>
      </Title>
      <Wrap>
        <InputBox>
          <InputTitle style={{ paddingTop: "7.8%" }}>이 름</InputTitle>

          <Input type="text" />

          <InputTitle>연락처</InputTitle>

          <Input type="text" placeholder=" '-'없이 번호만 입력해 주세요." />

          <InputTitle>지 역</InputTitle>

          <Input type="text" />
        </InputBox>
        <InfoWrap>
          <Info>
            <ol style={{ paddingTop: "3.5%" }}>
              1. 개인정보 수집 및 이용 목적
              <ul>
                <li>개인영업(FP) 입사지원</li>
              </ul>
            </ol>
            <ol>
              2. 개인정보 수집 및 이용 항목
              <ul>
                <li>이름, 연락처, 지역</li>
              </ul>
            </ol>
            <ol>
              3. 개인정보 보유 및 이용기간
              <ul>
                <li>동의일로부터 3년</li>
              </ul>
            </ol>
            <ol>
              4. 동의를 거부할 권리 불이익
              <ul>
                <li>
                  귀하는 개인정보 수집, 이용에 대한 동의를 거부할 권리가
                  있습니다. 동의 거부 시 입사지원 상담이 제한될 수 있습니다.
                </li>
              </ul>
            </ol>
          </Info>
          <CheckBox>
            <input type="checkbox" id="agree" name="perInfo" />
            <label for="agree">개인정보수집 및 이용동의서</label>
          </CheckBox>
        </InfoWrap>
      </Wrap>
      <ConsentBox>
        <Consent>
          <p>FP 상담 문의하기</p>
        </Consent>
      </ConsentBox>
    </>
  );
};

export default Advice;

const Wrap = styled.div`
  display: flex; ;
`;
const Title = styled.div`
  padding-left: 7.8%;
  padding-top: 5.1%;
  & > h2 {
    color: #1a1a1a;
  }
  & > p {
    padding-top: 1.4%;
    padding-bottom: 7.8%;
    line-height: 30px;
  }
`;

const InputBox = styled.div`
  padding-bottom: 10%;
  padding-left: 10.6%;
`;

const InputTitle = styled.div`
  padding-top: 4%;
`;

const Input = styled.input`
  width: 400px;
  height: 40px;
  border-bottom: 1px solid #c4c4c4;

  ::placeholder {
    color: #c4c4c4;
  }
`;

const InfoWrap = styled.div`
  padding-left: 11.4%;
  padding-top: 1.55%;
`;
const Info = styled.div`
  width: 780px;
  height: 182px;
  background-color: #f0f0f0;
  overflow-y: scroll;

  & > ol {
    list-style-type: decimal;
    font-size: 1.2rem;
    padding-left: 4.2%;
    line-height: 27.6px;
  }

  li {
    list-style-type: circle;
    font-size: 1rem;
    margin-left: 6%;
    color: #c4c4c4;
  }
`;

const Consent = styled.div`
  width: 37.1%;
  height: 60px;
  border-radius: 7px;
  box-shadow: -1px 6px 12px rgba(114, 0, 3 0.25);
  background-color: #bb292d;

  & > p {
    color: #ffffff;
    text-align: center;
    padding-top: 20px;
  }
`;

const ConsentBox = styled.div`
  padding-bottom: 6.45%;
  padding-left: 36.6%;
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3% 0 5% 0;
  @media (max-width: 700px) {
    padding: 2% 0 10% 0;
  }
  input[type="checkbox"] + label {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    color: #1a1a1a;
    width: 70%;
    @media (max-width: 700px) {
      font-size: 0.625rem;
      line-height: 1.25rem;
    }
  }
  input[type="checkbox"] + label::before {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-image: url(${checkIcon});
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 5%;
    @media (max-width: 700px) {
      width: 20px;
      height: 20px;
    }
  }
  input[type="checkbox"]:checked + label::before {
    background-image: url(${checkedIcon});
  }
  button {
    width: 60px;
    height: 30px;
    color: #ffffff;
    background-color: #b8292d;
    font-size: 0.8rem;
    @media (max-width: 700px) {
      width: 40px;
      height: 20px;
      font-size: 0.625rem;
    }
  }
`;
