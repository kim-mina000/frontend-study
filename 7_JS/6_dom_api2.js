//여러개 요소 한번에 선택하기

// HTML에서 해당 요소를 검색하여 찾은 모든 요소들을 반환
const boxEls = document.querySelectorAll('.box');
console.log(boxEls); //요소들의 리스트가 반환됨
// => 앞에서 사용한 DOM API들을 바로 쓸 수가 없음 (배열이기 때문)

// forEach() 메소드 사용: 배열에서 각 요소에 대한 반복 처리를 수행
// 인수(인자값)으로 반복을 돌면서 꺼내온 요소를 처리하는 함수를 작성
// 처리 함수 작성 시 매개변수(현재 꺼내온 요소, 요소의 인덱스) 순서가 매우 중요!!

boxEls.forEach(function (boxEl, index) {
  console.log(index, boxEl);
  boxEl.classList.add(`order-${index +1}`);
});

// 요소의 내용 확인 및 수정
const boxEl = document.querySelector('.box');
console.log(boxEl.textContent); //요소의 내용을 출력

boxEl.textContent =`Change!`;
console.log(boxEl.textContent);

// (참고) innerHTML, innerTEXT, textContent(<-p태그가 삽입됨) 셋의 차이점은 몰까용?
