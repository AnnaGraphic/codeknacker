import React from "react";
import CodeknackerSVG from "../assets/codeknacker.svg";
import "../components/start.css";

const Start = () => {
  return (
    <div className="start">
      <h1>Code</h1>
      <h3>cnacker</h3>
      <img className="startlogo" src={CodeknackerSVG} alt="Codecnacker" />
    </div>
  );
};

export default Start;
