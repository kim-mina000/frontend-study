import React from 'react';
import {Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as css from '../style/LayoutCss';
import InsertTodo from './InsertTodo';


const Layout = () => {
  const name = useSelector(state => state.todoSlice.name);
  const navigate = useNavigate();

  return (
    <css.Wrap>
      <css.Header>
        <h1>Todo List for...</h1>
        <p title='Change name?' style={{cursor:'pointer'}} onClick={()=>navigate('/')}>{name}</p>
      </css.Header>
      
      <css.StyledOutlet>
        <InsertTodo />
        <css.OutletWrap>
          <Outlet />
        </css.OutletWrap>
      </css.StyledOutlet>
      
      <css.Footer>
        <p>&copy; Copyright 2024. MINA All rights reserved.</p>
      </css.Footer>

    </css.Wrap>
  );
}

export default Layout;
