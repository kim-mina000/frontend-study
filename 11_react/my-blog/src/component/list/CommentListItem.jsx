import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  background: #FEFCF3;
  cursor: pointer;
  font-family: 'SUITE-Regular';

  &:hover {
    background: #F5EBE0;
  }
  @font-face {
    font-family: 'SUITE-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}
`;



function CommentListItem(props) {
  const { comment } = props;
  return (
    <Wrapper>
      <p>{comment.content}</p>
    </Wrapper>
  );
};

export default CommentListItem;