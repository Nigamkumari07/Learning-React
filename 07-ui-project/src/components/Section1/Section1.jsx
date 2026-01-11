import React from "react";
import Navbar from "./Navbar";
import Page1Content from "./Page1Content";

const Section1 = (props) => {
  {
    /*yaha data recieve kr rha h App se through props*/
  }
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Page1Content users={props.users} />
      {/*child of section1*/}
    </div>
  );
};

export default Section1;
