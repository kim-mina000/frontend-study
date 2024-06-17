import styled from 'styled-components';


export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;


`;


export const Header = styled.header`
  width: 100%;
  height: 200px;
  background: #111;
  color: #fff;
  position: fixed;
  padding-top: 2rem;

  & h1,p {
    font-family: 'Cafe24Meongi-B-v1.0';
    font-size: 80px;
    text-align: center;
  }
  `;

export const Footer = styled.footer`
  width: 100%;
  height: 100px;
  background-color: #111;
  color: white;
  position: fixed;
  bottom: 0;

  & p {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translateX(50%);
  }
  
  `;

export const StyledOutlet = styled.div`
  display: block;
  position: absolute;
  top: 31%;

  width: 50%;
  height: 50%;

  border: 15px solid #111;
  border-radius: 1rem;

`;

export const OutletWrap = styled.div`
  width: 100%;
  height: calc(100% - 57px);
  overflow-x: auto;

`;
