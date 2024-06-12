import { MdClose } from "react-icons/md";
import styled from "styled-components";

const Backgroud = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffd0ec50;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 99;
`;

const ModalContainer = styled.div`
  width: 25rem;
  background: white;
  box-shadow: 0px 2px 12px rgba(0,0,0,0.15);
  border-radius: 6px;
  overflow-y: auto;
  font-family: 'HSSanTokki20-Regular';

  svg {
    cursor: pointer;
    color: #474F7A;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    padding-left: 1.2rem;
  }

  hr {
    margin: 0;
    border: 0.5px solid #ccc;
  }

  .body {
    padding: 1.25rem;
    font-size: 1rem;
    line-height: 1.125rem;
  }

  input {
    width: 99%;
    border: 0px;
    background: #e9e9e9;
    padding: 10px 5px;
    border-radius: 5px;
    font-family: 'TAEBAEKmilkyway';
    font-weight: 700;
  }

  input:focus{
    border: 0px;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 15px;
  }

  .footer button {
    border: 0px;
    padding:5px 15px;
    background-color: #e9e9e9;
    border-radius: 0.5rem;
    font-family: 'HSSanTokki20-Regular';
    color: #81689D;
  }
`;



function Modal({onCloseModal, title, children, onEdit}) {
  return (
    <Backgroud>
      <ModalContainer>
        <div className="header">
          <span className="modal-title">{title}</span>
          <MdClose onClick={()=>{onCloseModal()}}/>
        </div>
        <hr/>
        <div className="body">
          {children}
        </div>
        <div className="footer">
          <button type="button" onClick={()=>{onEdit()}}>확인</button>
        </div>
      </ModalContainer>
    </Backgroud>
  );
};

export default Modal; 