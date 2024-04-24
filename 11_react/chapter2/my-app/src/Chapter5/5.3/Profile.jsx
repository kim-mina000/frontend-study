const nameStyle = { backgroundColor : 'pink', display : 'inline-block'}
function Profile(props){

  const stars = Array.from({ length: 25 }, () => '* ');

  return(
    <>
      <h1>사용자 프로필(조회수: {props.viewCount})</h1>
      <h2 style={nameStyle}>이름: {props.name}</h2>
      <h2>자기소개: {props.introduction}</h2>
      {/* <h2>* * * * * * * * * * * * * * * * * * * * * * * *</h2> */}
      <h2>{stars.map((star, index) => (
        <span>{star}</span>
      ))}</h2>
    </>
  );
}
export default Profile;