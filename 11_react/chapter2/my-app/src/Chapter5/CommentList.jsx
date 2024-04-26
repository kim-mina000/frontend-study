import React from 'react';
import Comment from './Comment';

// 댓글들을 포함하는 컴포넌트
function CommentList(props) {
  return (
    <div>
      <Comment 
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
      />
    </div>
  );
}

export default CommentList;