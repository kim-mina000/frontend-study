import Footer from "./Footer";
import Header from "./Header";
import Layout from "./Layout";
import Profile from "./Profile";

function ProsUse(){

  return(
    <>
      <Profile 
      // 키 - 값 쌍의 형태로 자식 컴포넌트에 props를 전달할 수 있음
      // 정수, 변수, 다른 컴포넌트 등 값을 넣을 때는 {} 사용
      // 문자열은 {} 생략가능
      // name(문자), introduction(문자), viewCount(숫자)
      name = "kim mina" introduction="(∗'ര ᎑ ര`∗)" viewCount={11}
      />
      <Profile name = "Siri" introduction="໒( ◉ ᴥ ◉ )७" viewCount={578} />
      <Layout 
      width={2560} 
      height={1440}
      // props로 다른 컴포넌트를 넘기는 것도 가능
      header = {<Header title = "(◞º❒º)◞₎₎(◟º❑º)◟⁾⁾➟➠➨ 야~~~~~~ 개짖는소리좀 안나게해라~~~~~"/>}
      footer = {<Footer />}
      />
    </>
  );
}
export default ProsUse;