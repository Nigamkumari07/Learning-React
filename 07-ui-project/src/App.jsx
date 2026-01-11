import React from "react";
import Section1 from "./components/Section1/Section1";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      into: "",
      color: "blue",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1762341117875-03dcc0997c96?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
      intro: "",
      color: "green",
      tag: "Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1664474970286-2c05f8adf9fb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      color: "red",
      tag: "Underbanked",
    },
  ];
  return (
    <div>
      {/*child of app or saara data app k pass h.app se data children m jata h through proops*/}
      <Section1 users={users} />
    </div>
  );
};

export default App;
