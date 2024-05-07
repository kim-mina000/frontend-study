import { useState } from "react";

function Reservation() {
  // 여러 개의 입력 제어하기 => 여러 개의 state 선언
  const [breakfast, setBreakfast] = useState(false);
  const [numberOfGuests, setNumberOfGuests] = useState(2);
  const [roomType, setRoomType] = useState('SINGLE');

  const handleBreakfastChange = (e) => {
    setBreakfast(e.target.checked);
  };

  const handleGuestsChange = (e) => {
    setNumberOfGuests(e.target.value);
  };

  const handleRoomChange = (e) => {
    setRoomType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`조식 여부: ${breakfast}, 투숙객 수: ${numberOfGuests}, 룸 타입: ${roomType}`);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        조식 여부:
        <input 
          type="checkbox"
          // checked 속성은 checkbox랑 radio 타입에 존재하고 boolean 타입의 값
          checked = {breakfast}
          onChange={handleBreakfastChange}
        />
      </label>

      <br />

      <label>
        투숙객 수:
        <input 
          type="number"
          value={numberOfGuests}
          onChange={handleGuestsChange}
        />
      </label>

      <br />

      룸 타입:
      <label>
        <input
        // radio 타입은 같은 name으로 묶어줘야하는 특성 기억
        // checkbox와 다른 점은 checkbox는 중복 선택이 가능함
        // radio는 중복 선택이 불가함, 그러기 위해서는 같은네임으로 묶어주기
          type="radio"
          name="roonType"
          value="SINGLE"
          checked={roomType === 'SINGLE'}
          onChange={handleRoomChange}
        />싱글
      </label>

      <label>
        <input 
          type="radio"
          name="roonType"
          value="DOUBLE"
          checked={roomType === 'DOUBLE'}
          onChange={handleRoomChange}
        />더블
      </label>

      <label>
        <input 
          type="radio"
          name="roonType"
          value="TWIN"
          checked={roomType === 'TWIN'}
          onChange={handleRoomChange}
          // 동일한 이벤트 달아주기
        />트윈
      </label>

      <button type="submit">제출</button>
    </form>
  );
};

export default Reservation;