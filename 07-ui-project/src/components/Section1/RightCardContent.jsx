import React from "react";

const RightCardContent = (props) => {
  {
    /*tag receive kr rha h from RightCard k through props*/
  }
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
      <h2 className="bg-white text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-shadow-2xs text-lg leading-relaxed text-white mb-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          quam error similique pariatur libero fugiat veniam sunt, a natus
        </p>
        <div className="flex justify-between">
          <button
            style={{ backgroundColor: props.color }}
            className=" text-white font-medium px-8 py-2 rounded-full"
          >
            {props.tag}
          </button>
          <button className=" text-white font-medium px-4 py-2 rounded-full">
            {" "}
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
