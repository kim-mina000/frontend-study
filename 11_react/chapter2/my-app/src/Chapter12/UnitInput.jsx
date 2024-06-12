// 렌더링과 상관없는 고정값들은 굳이 컴포넌트안에 넣을 필요x 전역변수로 선언 (주로 상수들)
const unitConvert = {
  mm: {
    name: '밀리미터',
    ratio: 1000
  },
  cm: {
    name: '센티미터',
    ratio: 100
  },
  m: {
    name: '미터',
    ratio: 1
  },
  km: {
    name: '킬로미터',
    ratio: 0.001
  },
  inch: {
    name: '인치',
    ratio: 39.370079
  }
};

// 지정한 단위로 환산하여 보여주는 컴포넌트
function UnitInput(props) {
  const { unit, length } = props;

  return (
    <>
      <input type="text" disabled='true'
      value={length*unitConvert[unit].ratio}
    />{unitConvert[unit].name}
    </>
  );
};

export default UnitInput;