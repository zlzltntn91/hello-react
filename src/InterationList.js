import React, { Component, useState } from "react";

const InterationList = () => {
  const [fruits, setFruits] = useState([
    { id: 1, name: "banana" },
    { id: 2, name: "tomato" },
    { id: 3, name: "waterMelon" },
  ]);

  const [input, setInput] = useState("");
  const [nextId, setNextId] = useState(4);

  const li = () => {
    return fruits.map((value) => <li key={value.id}>{value.name}</li>);
  };

  const clickHandle = () => {
    let fruit = fruits.concat({
      id: nextId,
      name: input,
    });
    setFruits(fruit);
    setNextId(nextId + 1);
    setInput("");
    textInput.focus();
  };

  const changeHandle = (e) => {
    setInput(e.target.value);
  };

  const keyDownHandle = (e) => {
    e.key === "Enter" && clickHandle();
  };

  let textInput;

  return (
    <div>
      <input
        ref={(ref) => (textInput = ref)}
        type="text"
        value={input}
        onKeyDown={keyDownHandle}
        onChange={changeHandle}
      />
      <button type="button" onClick={clickHandle}>
        추가
      </button>
      <div>
        <ul>{li()}</ul>
      </div>
    </div>
  );
};

export default InterationList;
