import React from "react";
const [title, setTitle] = useState("");

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault(); /*to prevent page from reloading on form submission*/
    console.log("form submitted", title);
    setTitle("");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="enter your name"
          value={title}
          onChange={(e) => {
            console.log(e.targrt.value);
          }}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default App;
