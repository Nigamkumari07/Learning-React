import React from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault(); /*to prevent page from reloading on form submission*/
    console.log("form submitted");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input type="text" placeholder="enter your name" />
        <button>submit</button>
      </form>
    </div>
  );
};

export default App;
