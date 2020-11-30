// 화면 그리기 최적화
import React, { useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중…");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b> {getAverage(list)}
      </div>
    </div>
  );
};

export default Average;

// onChange가 될 때마다 state가 바뀜 -> 그 때마다 렌더링이 됨.
// 우리가 원하는 건 그것이 아님.
// 추가가 될 때만! 렌더링 되기를 원함
// 연산 최적화 필요
// AverageUseMemo.js 라는 파일에서 수정할거임.
