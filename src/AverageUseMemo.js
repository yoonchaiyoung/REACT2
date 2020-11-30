import React, { useMemo, useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중…");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const AverageUseMemo = () => {
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

  const avg = useMemo(() => getAverage(list), [list]);
  // 함수에 {}가 없다? -> 한 줄짜리 함수이며, ()로 return 하겠다.
  // [list] -> list가 바꼈을 때만 나는 호출할거다. (연산을 사용하겠다.)

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
        <b>평균값 : </b> {avg}
      </div>
    </div>
  );
};

export default AverageUseMemo;
