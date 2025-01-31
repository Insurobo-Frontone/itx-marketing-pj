import list1 from '../img/sub/investList1.png';
import list2 from '../img/sub/investList2.png';
import list3 from '../img/sub/investList3.png';

export const Data = [
  {
    id: '3',
    idx: '3',
    type: '보험이야기',
    img: list1,
    title: '대장 내시경 중 용종제거,\n보험금 청구 될까?',
    contents: '프로미의 대장 내시경 용종제거 내용 들어갈 자리\n프로미의 대장 내시경 용종제거 내용 들어갈 자리\n프로미의 대장 내시경 용종제거 내용 들어갈 자리.\n프로미의 대장 내시경 용종제거 내용 들어갈 자리프로미의 대장 내시경 용종제거 내용 들어갈 자리\n프로미의 대장 내시경 용종제거 내용 들어갈 자리프로미의 대장 프로미의 대장',
    hash: '# 건강검진  #플러미 보험이야기',
    writer: '강세훈',
    date: '2022. 01. 28',
    url: '/invest/3',
    hit: '1,231',
    keyword1: '보험플러스',
    keyword2: '대장내시경',
    keyword3: '건강검진',
  },
  {
    id: '2',
    idx: '2',
    type: '보험플러스',
    img: list2,
    title: '실손보험금 청구 필수품은?',
    contents: '프로미의 대장 내시경 용종제거 내용 들어갈 자리\n프로미의 대장 내시경 용종제거 내용 들어갈 자리\n프로미의 대장 내시경 용종제거 내용 들어갈 자리.\n프로미의 대장 내시경 용종제거 내용 들어갈 자리프로미의 대장 내시경 용종제거 내용 들어갈 자리\n프로미의 대장 내시경 용종제거 내용 들어갈 자리프로미의 대장 프로미의 대장',
    hash: '# 4세대 실손보험  # 병원라운지',
    writer: '정의석',
    date: '2022. 02. 01',
    url: '/invest/2',
    hit: '345',
    keyword1: '보험플러스',
    keyword2: '대장내시경',
    keyword3: '건강검진',
  },
  {
    id: '1',
    idx: '1',
    type: '보험플러스',
    img: list3,
    title: '아랫집 누수사고, 보험\n처리할 수 있나요?',
    contents: '프로미의 대장 내시경 용종제거 내용 들어갈 자리\n프로미의 대장 내시경 용종제거 내용 들어갈 자리\n프로미의 대장 내시경 용종제거 내용 들어갈 자리.\n프로미의 대장 내시경 용종제거 내용 들어갈 자리프로미의 대장 내시경 용종제거 내용 들어갈 자리\n프로미의 대장 내시경 용종제거 내용 들어갈 자리프로미의 대장 프로미의 대장',
    hash: '# 화재보험  # 보험칼럼',
    writer: '강세훈',
    date: '2022. 02. 01',
    url: '/invest/1',
    hit: '300',
    keyword1: '보험플러스',
    keyword2: '대장내시경',
    keyword3: '건강검진',
  },
];

export const getPostByNo = id => {
  const array = Data.filter(x => x.id === id);
  if (array.length === 1) {
    return array[0];
  }
  return null;
}