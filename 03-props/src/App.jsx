import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Aman"
        age={18}
        img="https://plus.unsplash.com/premium_photo-1765390093374-695f6f14af7e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="sarthak"
        age={28}
        img="https://plus.unsplash.com/premium_photo-1763482110336-afe8d4ac0bac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
      />
      <Card
        user="rahul"
        age={24}
        img="https://images.unsplash.com/photo-1762170905134-e9e3b5692286?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzNnxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"
      />
    </div>
  );
};

export default App;
