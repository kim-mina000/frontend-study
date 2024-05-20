import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;
  font-family: 'SUITE-Regular';

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
  @font-face {
    font-family: 'SUITE-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}
`;

// map() 함수를 사용하여 PostListItem을 반복 렌더링하는 컴포넌트
function PostList(props) {
  const {posts} = props;
  return (
    <Wrapper>
      {/* posts배열을 반복렌더링하기 */}
      {posts.map((post)=>{
        return <PostListItem key={post.id} post={post}/>;
      })}
    </Wrapper>
  );
};

export default PostList;