import React from 'react';
import {Outlet} from 'react-router-dom';
import styled from 'styled-components';
import First from './First';
import InsertTodo from './InsertTodo';
import { useSelector } from 'react-redux';

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  /* background: aquamarine; */
  /* 왜이거 이렇게,,, 영역이 이모양,, */
`;


const Header = styled.header`
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

const Footer = styled.footer`
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

const StyledOutlet = styled.div`
  display: block;
  position: absolute;
  top: 31%;

  width: 50%;
  height: 50%;

  border: 15px solid #111;
  border-radius: 1rem;

  /* overflow: hidden; */
`;

const OutletWrap = styled.div`
  width: 100%;
  height: calc(100% - 57px);
  overflow-x: auto;

`;


const Layout = ({mina}) => {
  const name = useSelector(state => state.todoSlice.name);
  return (
    <Wrap>
      <Header>
        <h1>Todo List for...</h1>
        <p>{name}</p>
      </Header>
      
      <StyledOutlet>
        <InsertTodo />
        <OutletWrap>
          <Outlet />
        </OutletWrap>
      </StyledOutlet>
      
      <Footer>
        <p>&copy; Copyright 2024. MINA All rights reserved.</p>
      </Footer>

    </Wrap>
  );
}

export default Layout;
