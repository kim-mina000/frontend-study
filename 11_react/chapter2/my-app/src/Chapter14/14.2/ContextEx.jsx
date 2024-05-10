// 개념 설명만을 위한 예제 (렌더링x)
// (최상위 부모)App -> Toolbar -> ThemedButton -> (가장자식)Button 구조임

import { useContext } from "react";

// Context를 사용하면 모든 컴포넌트를 일일이 통과하지 않고도
// 원하는 값을 컴포넌트 트리 깊숙한 곳까지 보낼 수 있음
// 'light'를 기본값으로 하는 테마 Context를 만드는 코드
const ThemeContext = React.createContext('light');


function App(){
  // Provider를 이용해 하위 트리에 테마 값을 보내줌
  // 아무리 깊숙히 있어도, 모든 컴포넌트가 이 값을 읽을 수 있음
  // 아래 예시에서는 dark를 현재 테마값으로 보내고 있음
  return (
  <ThemeContext.Provider value="dark"> 
  {/* value값을 적지 않으면 기본값 'light'가 전파됨 */}
    <Toolbar />
  </ThemeContext.Provider>
  );
}

function Toolbar(){
  // 이제 중간에 있는 컴포넌트가 일일이 테마를 넘겨줄 필요가 없음
  return(
    <div>
      <ThemedButton/>
    </div>
  );
}

function ThemedButton(props){
  // useContext훅 사용시
  const value = useContext(ThemeContext);

  return (
  // useContext 훅 사용시
    <Button theme={value} />
    
  // <ThemeContext.Consumer>
  //   {(value) => <Button theme={value} />}
  // </ThemeContext.Consumer>
);
}

// Context에 'dark'라는 값이 저장되어 있고 (provider)
// 그 값을 함수의 매개변수로 받아 Button에 넘겨주는 것
// 이게 복잡하다보니 이 과정을 위한 hook이 따로 나옴 UseContext()