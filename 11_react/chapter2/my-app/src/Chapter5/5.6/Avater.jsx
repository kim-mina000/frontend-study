import React from "react";

function Avatar(props){
  return(
    // Comment에서만 쓰이는게 아니기에 author에서 user로 바꿔줌
    <img className="avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
      style={{
        width: 50,
        height: 50,
        borderRadius: '50%'
      }}
      
    />
  );
  
}
export default Avatar;