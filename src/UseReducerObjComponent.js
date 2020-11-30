// 이번에는 객체 사용
import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
    // action이 지금 target이니까
  };
}

const UseReducerObjComponent = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });

  const _handleChange = (e) => {
    dispatch(e.target);
    // event가 발생한 target을 reducer의 action에 넘김
  };
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={_handleChange} />
        <input name="nickname" value={nickname} onChange={_handleChange} />
      </div>
      <div>
        <p>
          <b>이름 : </b>
          {name}
        </p>
        <p>
          <b>닉네임 : </b>
          {nickname}
        </p>
      </div>
    </div>
  );
};

export default UseReducerObjComponent;
