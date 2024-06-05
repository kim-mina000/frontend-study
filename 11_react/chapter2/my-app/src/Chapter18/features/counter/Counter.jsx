import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, initialState, selectCount } from "./counterSlice";
import { useState } from "react";

// 5. 리액트 컴포넌트에서 Redux State와 Actions 사용하기 (features/counter/Counter.js)
function Counter() {
  // Redux Store에 요청을 보내주는 함수
  const dispatch = useDispatch();

  // Redux Store에 있는 state를 가져오는 함수
  // const count = useSelector( state =>{ // useSelector // 첫번째 매개변수로 전역 스테이트 전체를 받아옴
  //   return state.counter.value;
  // });
  // const count = useSelector( state => state.counter.value);
  // 으로 줄여쓰기 가능
  const count = useSelector(selectCount); // counterSlice 쪽으로 기능을 빼서 export -> 여기로 import 해준거

  const [amout, setAmout] = useState('2');
  const incrementValue = Number(amout) || 0; //NaN일 경우 기본값 0

  return (
    <>
      <div>
        <button
          type="button"
          // onClick={() => dispatch({type: "counter/decrement"})}
          // 전역 상태를 업데이트하는 유일한 방법
          // dispatch(): 액션 객체를 스토어에 보냄
          // => 스토어는 해당 액션에 매칭되는 리듀서 함수를 실행시켜서 새로운 상태를 만들어 줌
          // decrement(): 액션 생성 함수
          // => 실행 결과: 
          // {
          //   payload: undefined; // 데이터 담아서 보내는거!
          //   type: "counter/decrement";
          // }

          onClick={()=>{dispatch(decrement())}}
        >
          감소
        </button>
        <span>{count}</span>
        <button
        type="button"
        onClick={()=>{dispatch(increment())}}
        >
          증가
        </button>
        <div>
          <input 
          type="text" 
          value={amout}
          onChange={(e) => setAmout(e.target.value)}
          />
          <button
          type="button"
          onClick={()=>{
            // dispatch({ type:"counter/incrementByAmount", payload:incrementValue });
            dispatch(incrementByAmount(incrementValue));
          }}
          >
            입력한 값만큼 증가
          </button>
        </div>


      </div>
    </>
  );
};

export default Counter;