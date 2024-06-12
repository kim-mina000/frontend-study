// React에서는 첫번째 글자를 꼭! 대문자로 작성해주기!
// 그래야 React에서 컴포넌트로 인식

// React 함수 컨포넌트
// only JS로만 짠 코드, 추후에는 JSX를 사용할 예정

function LikeButton() {
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
    'button', // 태그
    { onClick: () => setIsClicked(true) }, // 속성
    isClicked? 'You liked this':'Like' // 자식 요소들
  );
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(LikeButton));

