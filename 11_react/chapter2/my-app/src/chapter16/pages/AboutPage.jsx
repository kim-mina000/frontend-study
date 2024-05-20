import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import PlacePage from "./PlacePage";

function AboutPage() {
  // 실습1
  const location = useLocation();
  console.log(location);

  // 예전에는 들어온 search 값을 일일히 분해했음 요즘은 라이브러리, 훅이 많이 존재 (useSearchParams 등)
  // 실습2
  // 첫번째 요소를 쿼리 스트링을 조회하거나 수정하는 메서드가 담긴 객체를 반환
  const [ searchParams, setSearchParams ] = useSearchParams();
  const name = searchParams.get('name');
  const age = searchParams.get('age');

  const negative = useNavigate();

  return (
    <>
      <h1>쿼리스트링사용</h1>
      <h3>1. useLocation</h3>
      <p>{location.search}</p>

      <h3>2. useSearchParams</h3>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <button type="button" onClick={()=>{negative('/')}} >메인으로</button>
    </>
  );
};

export default AboutPage;