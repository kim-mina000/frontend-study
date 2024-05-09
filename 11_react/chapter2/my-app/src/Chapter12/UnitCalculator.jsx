import { useState } from "react";
import UnitCounter from "./UnitCounter";
import UnitInput from "./UnitInput";

function UnitCalculator() {
  // Shared State 실습
  const [length, setLength] = useState(1);

  const handleChange = (e) => {
    setLength(Number(e.target.value));
    handleLove();
  }
  
  const [love, setLove] = useState(['💗']);

  const handleLove = () =>{
    const copyLove = [];
    for (let i = 0; i < length; i++){
      copyLove.push('💗');
    };
    setLove(copyLove);
  }


  return (
    <>
      <p>단위 변환 계산기</p>
      <label>
        <input type = "number" value={length} onChange={handleChange} min={0}/>
        미터(m)
      </label>
      <hr />

      <UnitCounter length={length} onLengthChange={setLength} />
      <br />
      <UnitInput unit="mm" length={length} />
      <br />
      <UnitInput unit="cm" length={length} />
      <br />
      <UnitInput unit="m" length={length} />
      <br />
      <UnitInput unit="km" length={length} />
      <br />
      <UnitInput unit="inch" length={length} />
      <br />

      <UnitCounter length={length} onLengthChange={setLength} />
      <hr />
      <span>{love}</span>
    </>
  );
};

export default UnitCalculator;