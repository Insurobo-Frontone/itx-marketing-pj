import React, { useState } from 'react'
import styled from 'styled-components';
import CheckBox from '../../CheckBox';
import selectBoxIcon from '../../../img/sub/selectboxIcon.svg';
import Button from '../../Button';
import ApplyModal from '../../Modal/ApplyModal';

function ApplyForm({
  name, corporate, inherit 
}) {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => { 
    setModalVisible(true);
  }
  const closeModal = () => {
    setModalVisible(false);
  }


  return (
      <Layout name={name}>
        <InputWrap>
          <InputBox>
            <p>{corporate ? '회사명' : '성명 '}</p>
            <input type='text' placeholder={corporate ? '회사명을 입력하세요' : '이름을 입력하세요'} />
          </InputBox>
          <InputBox>
            <p>{corporate ? '담당자' : '생년월일'}</p>
            <input type='number' placeholder={corporate ? '담당자 성함을 입력하세요' : '생년월일을 입력하세요 (ex: 770322)'}/>
          </InputBox>
        </InputWrap>
        <InputWrap>
          <InputBox>
            <p>지역</p>
            <input type='text' placeholder='시도 단위로 입력하세요'/>
          </InputBox>
          <InputBox>
            <p>연락처</p>
            <input type='number' placeholder='‘-’없이 번호만 입력해 주세요'/>
          </InputBox>
        </InputWrap>
        {corporate && (
        <InputWrap>
          <p>상담분야</p>
          <select>
            <option>원하는 컨설팅 분야를 선택해 주세요.</option>
            <option>고용지원</option>
            <option>정책자금</option>
            <option>기업대출</option>
            <option>노무/세무</option>
            <option>기타문제</option>
          </select>
        </InputWrap>)}
        {inherit && (
        <>
          <InputWrap>
            <p>상담분야</p>
            <select>
              <option>원하는 컨설팅 분야를 선택해 주세요.</option>
              <option>상속문제</option>
              <option>증여문제</option>
              <option>재무설계</option>
              <option>기타문제</option>
            </select>
          </InputWrap>
          <InputWrap>
            <p>기타사항</p>
            <input type='text' placeholder='상담가능일자, 가족관계 등 상담에 필요한 내용을 적어 주세요'/>
          </InputWrap>
        </>
        )}

        <CheckBoxContainer>
          <CheckBox onClick={openModal}/>
        </CheckBoxContainer>
        <ButtonContainer>
          <Button size={'md2'}>상담하기 &#62;&#62;</Button>
        </ButtonContainer>
        {
           modalVisible && (
             <ApplyModal onClick={closeModal} />
           )
        }  
    </Layout>
  );
};

export default ApplyForm;


const Layout = styled.form`
  padding: 7.1% 9.62962962962963% 0;
  border: 2px solid #B8292D;
`;

const InputWrap = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 4.5%;

  select {
    width: 92.3%;
    border: 1px solid #BEBEBE;
    height: 50px;
    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-size: 0.8rem;
    color: #C4C4C4;
    padding-left: 1.2%;
    background: url(${selectBoxIcon}) calc(100% - 15px) center no-repeat;
  }

  input {
    width: 92.3%;
    border: 1px solid #BEBEBE;
    height: 50px;
    padding-left: 1.2%;
    ::placeholder {
      color: #C4C4C4;
      font-size: 0.8rem;
    }
  }
`;

const InputBox = styled.div`
  display: flex;
  width: 38.03680981595092%;
  justify-content: space-between;
  align-items: center;
  > p {
    color: #1A1A1A;
    font-size: 1rem;
  }

  > input {
    border: 1px solid #BEBEBE;
    width: 80.80808080808081%;
    height: 50px;
    padding-left: 3.5%;
    ::placeholder {
      color: #C4C4C4;
      font-size: 0.8rem;
    }
  }
  
`;

const CheckBoxContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  > div {
    width: 336px;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3.5% 0 6.7% 0;
`;
