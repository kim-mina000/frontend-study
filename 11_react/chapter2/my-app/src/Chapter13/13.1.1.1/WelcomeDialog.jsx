import FancyBorder from "./FancyBorder";

function WelcomeDialog() {
  return (
    <FancyBorder color="pink">
      {/* 자식 엘리먼트로 무엇이 올지 모를 때 동적으로 전달 가능 */}
      {/* FancyBoㄱㅇㄷㄱ 태그 안에 있는 모든 자식 요소들은 children이라는 이름의 props로 전달됨*/}
      <h1 className="Dialog-title">어서오세냥</h1>
      <p className="Dialog-message">
        저희 고냥이 상점을 찾아주셔서 감사합니다냥🐾
      </p>
    </FancyBorder>
    
  );
};

export default WelcomeDialog;