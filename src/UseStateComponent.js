import React, { useEffect, useState } from "react";

// useState 및 useffect에 대한 설명

const UseStateComponent = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const _handleChangeName = (e) => {
    setName(e.target.value);
  };

  const _handleChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  // state가 변경될 때마다 -> 화면을 계속 렌더링해준다. 화면을 계속 새롭게 그려주고 있다.

  // 만약 name state만 바꼈을 때만 렌더링해줘라. 가능? 가능.
  // 특정 state만 변경됬을 때 렌더링해라.
  // 화면이 변경되었을 때만 렌더링해라.
  // hooks : 렌더링 시점에 대한 설정 가능
  // useEffect hooks로 가능

  // useState(initialState) : 초깃값 들어감
  // useEffect(function) : 함수 들어감

  // useEffect(() => {
  //   console.log("=======렌더링 됩니까?=======", name, nickname);
  // });

  // useEffect Hooks : 렌더링 되는 시점을 정의할 수 있다.
  //                   특정 값이 변화하거나, 마운트 되는 시점을 직접 설정할 수 있다.
  // 기능이 실행될 시점에 렌더링.
  // 코드가 실행되어야 할 **시점**!이 언제인지
  // 마운트? 렌더링된 후 화면에 같다 붙인 상태.  // 생명 주기.
  // useEffect 에 대한 시점 정의 우리 아직 안함.

  // 시점 1. 마운트가 다 되고 나서.
  // 마운트가 다 되고 나서 실행해야 할 코드가 무엇인가.
  useEffect(() => {
    console.log("마운트가 되고 나서 실행되는 코드입니다.");
    // 렌더링이 계속되도 다시는 실행되지 않음.
    // state 가 계속 변화해도 코드는 1번만 실행됨.
  }, []);
  // [] : dependency list  // 함수가 실행되어야 할 state.가 들어감.
  // state 가 바꼈다? -> 함수를 실행해라.
  // [] 비어있다? -> 어느 state에도 의존 X -> 마운트가 다 된 상태에서 함수 실행해라.

  // 시점 2. name 이 바뀌었을 때만
  useEffect(() => {
    console.log("name이 변경 될 때만 실행되는 코드입니다.", name);
  }, [name]);
  // nickname이 아무리 바뀌어도 글 보이지X.
  // name이 바뀌었을 때만 보임.

  // 시점 3. unmount 되었을 때
  // 어떠한 기능이 언마운트 될 때.
  // 자원 정리, 메모리 정리 때 사용.
  // mount? 화면에 컴포넌트가 붙는 것.
  // unmount? 컴포넌트 지우거나 교체할 때. // unmount = datach
  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("컴포넌트가 언마운트 또는 업데이트 되기 직전에 실행된다.");
      console.log("cleanup");
      console.log(name);
    };
  }, []);
  // unmount 는 지금 안되고 있기 때문에 확인 어려움..

  return (
    <div>
      <div>
        <input value={name} onChange={_handleChangeName} />
        <input value={nickname} onChange={_handleChangeNickname} />
      </div>

      <div>
        <div>
          <b>이름 : </b>
          {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default UseStateComponent;
