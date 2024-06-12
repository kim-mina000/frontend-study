import { useState } from "react";
import Dialog from "./Dialog";

function SignUpDialog() {

  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  }
  const handleButton = () =>{
    alert(`탑승을 환영합니다 ${name}님!`);
    setName('');
  }


  return (
    <Dialog
      title='강아지별 탐사 프로그램'
      message='당신의 이름은?'
      >
        <input type="text" onChange={handleChange} value={name} />
        <button type="button" onClick={handleButton}>가입하세요!</button>
    </Dialog>
  );
};

export default SignUpDialog;