import React, { useCallback, useMemo, useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중…");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const AverageUseCallback = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);
  // dependency list에 비어있는 리스트를 넣게 되면
  // 마운트 될 때만 함수 생성, 그 이외의 상황에서는 만들지X.
  // 함수 생성 최적화

  // event가 발생했을 때 발생한 target의 value만 넣어주고 끝.
  // state를 사용하고 있지는 않음.
  // state를 변경시키고 있기 때문에 state의 최신의 값을 갖고 있을 필요 X.  // state에 의존할 필요X.

  // number 자체를 가져와서 뭔 일을 하는 것 X(사용X) -> [number] 해줄 필요 X.
  // 그냥 number 세팅.

  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
    },
    [list, number]
  );
  // 간단하게 생각하면
  // 함수 안쪽에서 사용하는 거는 [] 리스트 안에 넣는 것.
  // 사용 안 되면 [] 리스트 안에 넣지 X도 됨.

  const avg = useMemo(() => getAverage(list), [list]);

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

export default AverageUseCallback;
