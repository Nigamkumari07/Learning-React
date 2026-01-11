import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = (props) => {
  {
    /*child of section 1 se data recieve kr rha h through props */
  }
  return (
    <div className="pb-14 pt-6 flex items-center gap-10 h-[90vh] px-18">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default Page1Content;
