import React, { useState } from 'react';

const styles = {
  button: {
    height: 40,
    width: 200,
  },
  warning: {
    backgroundColor: '#ffc107',
    textAlign: 'center',
    width: '100%',
    padding: 10,
    fontSize: '72pt',
    color: 'red',
    paddingBottom: '60px'
  },
  danger: {
    backgroundColor: '#dc3545',
    textAlign: 'center',
    width: '100%',
    padding: 10,
    fontSize: '72pt',
    color: '#fff',
    paddingBottom: '60px'
  }
};

function WarningBanner(props) {
  console.log(props.warn);
  // props.warn이 false라면 null을 리턴하기 때문에 컴포넌트는 렌더링 되지 않음
  if (!props.warn){
    return null;
  }
  return <div style={styles.warning}>Warning!</div>
}

function DangerBanner (props){

  return <div style={styles.danger}>I LOVE YOU DANGEROUSLY</div>
}

function MainPage(props) {
  const [ showWarning , setShowWarning ] = useState(false);

  const handleToggle = () => {
    setShowWarning(!showWarning)
  }
  return (
    <>
      <button type='button' style={styles.button} onClick={handleToggle}>{ showWarning? '감추기' : '보이기 '}</button>
      {/* 조건에 따라 렌더링 막기 */}
      <WarningBanner warn={showWarning} />
      {/* 조건부 렌더링으로 처리하는 것도 가능 */}
      {showWarning && <DangerBanner />}
      {/* {showWarning? WarningBanner() : false} -> WarningBanner가 실행되면 안에 warn이 넘어오지 않아서 에러, 쓰고싶으면 WarningBanner()안에 warn을 삭제 */}
    </>
  );
}

export default MainPage;