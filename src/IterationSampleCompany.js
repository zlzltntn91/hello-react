import React, { useState } from "react";

const IterationSampleCompany = () => {
  const [fruits, setFruits] = useState([
    {
      id: 1,
      fruitName: "Apple",
    },
    {
      id: 2,
      fruitName: "WaterMelon",
    },
    {
      id: 3,
      fruitName: "Tomato",
    },
  ]);

  const [id, setId] = useState(4);
  const [fruitName, setFruitName] = useState("");

  const btnClickHandle = () => {
    const fruit = { id: id, fruitName: fruitName };
    setFruits(fruits.concat(fruit));
    setFruitName("");
    setId(id + 1);
  };

  const iptChangeHandle = (e) => {
    setFruitName(e.target.value);
  };

  const remove = (id) => {
    setFruits(fruits.filter((v) => v.id !== id));
  };

  const createFruitsGroup = fruits.map((v) => (
    <li key={v.fruitName} onDoubleClick={() => remove(v.id)}>
      {v.fruitName}
    </li>
  ));

  const keyDownHandle = (e) => {
    e.key === "Enter" && btnClickHandle();
  };

  return (
    <div>
      <input
        type="text"
        value={fruitName}
        onChange={iptChangeHandle}
        onKeyDown={keyDownHandle}
        autoFocus="autoFocus"
      />
      <button onClick={btnClickHandle}>입력하기</button>
      <ul>{createFruitsGroup}</ul>
    </div>
  );
};
export default IterationSampleCompany;
