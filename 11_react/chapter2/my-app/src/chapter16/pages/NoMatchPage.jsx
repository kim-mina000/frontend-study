import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NoMatchPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 64px;
  color: pink;
`;
function NoMatchPage() {
  const nagative = useNavigate();
  return (
    <NoMatchPageWrapper>
      <h1>🐾404 Not Found🐾</h1>
      <button type="button" onClick={()=>nagative('/')}>Go to the Main</button>
    </NoMatchPageWrapper>
  );
};

export default NoMatchPage;