import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  background-color: lightgray;
`

const Block = styled.div`
  padding: ${props => props.$padding};
  border: 1px solid black;
  border-radius: 1rem;
  background-color: ${props => props.$backgroundColor};
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;

  &:hover{
    color: lightgray;
    cursor: pointer;
  }

  &+& {
    margin-left: 3px;
  }
`


const BlockItems = [
  {
    label: '1',
    padding: '1rem',
    backgroundColor: '#F5DAD2'    
  },
  {
    label: '2',
    padding: '3rem',
    backgroundColor: '#FCFFE0'    
  },
  {
    label: '3',
    padding: '2rem',
    backgroundColor: '#BACD92'    
  }
]
function Blocks() {
  return (
    <Wrapper>
      {/* Quiz: 배열 반복 렌더링 및 스타일링 완성 */}
      {BlockItems.map((blockItem)=>{
        return <Block key={blockItem.label}
        $padding={blockItem.padding} 
        $backgroundColor={blockItem.backgroundColor}
        >
          {blockItem.label}
        </Block>
      })}
    </Wrapper>
  );
};

export default Blocks;