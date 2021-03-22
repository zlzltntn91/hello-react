import React, { useState } from "react";

import LifeCycleSample from "./7LifeCycle/LifeCycleSample";

const App = () => {
  const [state, setState] = useState({
    color: "#000000",
  });

  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const handeClick = () => {
    setState({
      color: getRandomColor(),
    });
  };

  return (
    <div>
      <button onClick={handeClick}>랜덤색상</button>
      <LifeCycleSample color={state.color} />
    </div>
  );
};

export default App;
