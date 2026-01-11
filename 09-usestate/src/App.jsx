import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(2);
  function increaseNum() {
    setNum(num + 1);
  }
  function decreaseNum() {
    setNum(num - 1);
  }
  function Jump5Num() {
    setNum(num + 5);
  }
  return (
    <div>
      <div className="box">
        <h1>{num}</h1>
      </div>

      <div className="btn">
        <button onClick={increaseNum}>increase</button>
        <button onClick={decreaseNum}>decrease</button>
        <button onClick={Jump5Num}>Jump by 5 </button>
      </div>
    </div>
  );
};

export default App;
