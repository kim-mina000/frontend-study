import { useState } from "react";

function EssayForm() {

  const [value, setValue] = useState('가장 좋아하는 것에 대한 에세이를 작성하세요.');

  const handleChange = (e) => {
    // set함수를 이용해서 사용자가 입력한 값을 나오게 코드 작성하기
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    alert('제출된 에세이: ' + value);
    e.preventDefault();
  };
  return (
    // submit에서 이벤트는 form태그에서 감지할수 있음
    <form onSubmit={handleSubmit}>
      <label>
        에세이:
        <textarea value={value} onChange={handleChange}></textarea>
        {/* HTML DOM */}
        {/* <textarea>
          Hello world!
        </textarea> */}
        <button type="submit">제출</button>
      </label>
    </form>
  );
};

export default EssayForm;