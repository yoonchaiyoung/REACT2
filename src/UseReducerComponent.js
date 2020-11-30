import React, { useReducer } from "react";

function reducer(state, action) {
  // reducer : 함수
  // 어디서든 reducer를 사용가능.
  // 함수만 따로 빼서 모듈로 만들어 놓기도 함.
  // 필요한 state만 넣으면 관리 가능.

  // state : 어플리케이션 **전체**에 적용되는 state   // useState는 컴포넌트 하나였음.
  // 단, 지금은 컴포넌트 한개.
  // 범위 지정 가능.
  // 어플리케이션 전체를 범위로 하고싶으면 모듈화해서 따로 빼놓으면 됨.
  // action : state를 이용해 뭘 할것인가?

  console.log(state, action);
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    // 값 변경X, 교체O.
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
  // type 만 꺼내면 됨.

  return state;
}

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  // state로 할 수 있는 것들을 모아낸다.
  // state : 값
  // dispatch : 뭘 할 지. 일.  // state, reducer를 연결해주는 역할
  // 함수. // action 에 대한 정의 필요. ~일을 시킬거야, state에 ~일을 해.
  // 어플리케이션 전역 state, state에 대한 action을 이어주는 역할.
  // action의 type을 정해주면 위의 switch에서 출력됨.
  // type에 따라 state에 대한 다른 일 가능.

  // useReducer(function, state)
  // value가 state가 됨.
  // 객체로 만들기 때문에 필요한 값을 관리 가능

  return (
    <div>
      <p>
        현재 카운터 값은<b>{state.value}</b>입니다.
        {/* 위의 value : 0이 초깃값이니까 맨 처음엔 0이 뜸. */}
      </p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          // reducer에게 INCREMENT 연관된 작업을 해라.라고 전달하는 것.
          // state 따로 전달 X. 위의 state와 연관되어있다는 걸 이미 알고있기 때문에.

          // dispatch 함수를 실행하면 state, reducer를 연결해주기 때문에 ~일을 해라. 만 전달해주면 됨.
          // 그 일을 하는 건 reducer.
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
          // reducer에게 DECREMENT 연관된 작업을 해라.라고 전달하는 것.
        }}
      >
        감소
      </button>
    </div>
  );
};

export default UseReducerComponent;

// reducer, dispatch에 대한 개념 반드시 숙지!
