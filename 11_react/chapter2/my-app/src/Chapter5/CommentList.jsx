import React from 'react';
import Comment from './Comment';

// 댓글들을 포함하는 컴포넌트
function CommentList(props) {
  const comments = [
    {
      name:'김은아',
      content:'시리야 사랑해'
    },
    {
      name:'김민아',
      content:'젝아 만든 컴포넌트는 에잍톤 컴포넌트~'
    },
    {
      name:'김나나',
      content:'지구 온 나나'
    },
    {
      name:'시리',
      content:'간식 조'
    },
    {
      name:'고양이',
      content:'강 아 지 싫 어'
    }
  ];

  return (
    <div>
      {/* <Comment 
        name = '김은아'
        content = '시리야 사랑해'
      />
      <Comment 
        name = '김민아'
        content = '젝아 만든 컴포넌트는 에잍톤 컴포넌트~'
      />
      <Comment 
        name = '김나나'
        content = '지구 온 나나'
      />
      <Comment 
        name = '시리'
        content = '간식 조'/>
      <Comment 
        name = '고양이'
        content = '강 아 지 싫 어'
      /> */}

    {/* 배열을 동적으로 랜더링해야 할 때에는 배열의 map()함수를 사용 
    일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 만들면 됨*/}

      {
        comments.map((comment,index) => <Comment key={index} name={comment.name} content={comment.content}/>)
      }
      {/* map() 함수의 결과 */}
      {
        [
          <Comment name={'김은아'} content={'시리야 사랑해'} key={0}/>,
          <Comment name={'김민아'} content={'젝아 만든 컴포넌트는 에잍톤 컴포넌트~'} key={1}/>,
          <Comment name={'김나나'} content={'지구 온 나나'} key={2}/>,
          <Comment name={'시리'} content={'간식 조'} key={3}/>,
          <Comment name={'고양이'} content={'강 아 지 싫 어'} key={4}/>
        ]
      }
    </div>
  );
}

export default CommentList;