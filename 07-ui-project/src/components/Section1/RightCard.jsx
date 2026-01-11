import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  {
    /*yaha img(data) le rhe h y recieve kr rhe h props k though*/
  }
  return (
    <div className="h-full shrink-0 overflow-hidden relative w-80 rounded-3xl">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <RightCardContent color={props.color} id={props.id} tag={props.tag} />
    </div>
  );
};

export default RightCard;
