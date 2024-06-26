import { useRef } from "react";

function FileInput() {

  const fileInput = useRef(null);

  // 
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(fileInput);
    console.log(fileInput.current);
    console.log(fileInput.current.files);
    alert(`선택된 파일: ${fileInput.current.files[0].name}`);
  };

  // file input은 값을 설정 할 수 없고 사용자가 첨부한 파일의 정보만 읽어 올 수 있기 때문에 비제어 컴포넌트가 된다
  // 파일에 접근하기 위해서 DOM요소의 ref를 만들어 접근

  return (
    <form onSubmit={handelSubmit}>
      <label>
        파일 업로드:
        <input type="file" ref={fileInput}/>
      </label>
      <br />
      <button type = "submit">제출</button>
    </form>
  );
};

export default FileInput;