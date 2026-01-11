import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  console.log();
  return (
    <div
      id="right"
      className="h-full flex  rounded-4xl flex-nowrap overflow-x-auto gap-9 p-4 w-2/3"
    >
      {/*<RightCard />
      <RightCard />
      <RightCard /> yaha isko map krna h*/}
      {props.users.map(function (elem, idx) {
        return (
          <RightCard
            key={idx}
            color={elem.color}
            id={idx}
            img={elem.img}
            tag={elem.tag}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
