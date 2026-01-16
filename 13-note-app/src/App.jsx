import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    {
      /*yaha old task ko copy krke naya task add krna h*/
    }
    const copyTask = [...task];
    copyTask.push({ title, details });
    {
      /*new task add kr rhe h in the form of object*/
    }
    setTask(copyTask);
    console.log(copyTask);
    {
      /*update kr rhe h state ko*/
    }

    setTitle("");
    setDetails("");
  };
  const deleteNote = (idx) => {
    {
      /*idx ko recieve kiye*/
    }
    {
      /*yaha note ko dele krne ka func banan h*/
    }
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    {
      /*idx se 1 elem ko del krdo*/
    }
    setTask(copyTask);
    {
      /*state ko update kro*/
    }
  };
  const [title, setTitle] = useState(" ");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);
  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 lg:w-1/2 flex-col item-start p-10 "
      >
        <h1 className="text-3xl font-bold">ADD NOTES</h1>
        {/*PHLA INPUT*/}
        <input
          type="text"
          placeholder="Enter note heading"
          className="px-5 w-full font-medium py-2 border-2 rounded outline-none"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        {/*DETAILS INPUT*/}
        <textarea
          type="text"
          className="px-5 w-full  h-32 py-2 font-medium border-2 rounded outline-none flex items-start flex-row"
          placeholder="Write Details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="bg-white active:scale-95 w-full text-black font-medium px-5 py-2 rounded outline-none">
          Add note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-3xl font-bold">YOUR NOTES</h1>
        <div className="flex flex-wrap items-start justify-start gap-4 mt-5 h-[90%] overflow-auto">
          {/*yaha task ko map krke ise print krenge*/}
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex justify-between flex-col items-start relative h-52 w-40 rounded-xl bg-cover bg-no-repeat text-black px-4 py-6 pb-4
                bg-[url('https://cdn.pixabay.com/photo/2013/07/13/11/55/notes-158958_1280.png')]"
              >
                <div>
                  <h3 className="leading-tight text-lg font-bold">
                    {elem.title}
                  </h3>
                  <p className="mt-4 leading-tight text-xs font-semibold text-gray-600">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full cursor-pointer active:scale-95 py-1 rounded font-bold text-white bg-red-500 text-xs"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
