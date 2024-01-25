import React from "react";
import CodeknackerSVG from "../../assets/codeknacker.svg";
import { useNavigate } from "react-router-dom";
import "../Start/start.css";

const Start = () => {
const navigate = useNavigate();

const  startGameHandler = () => {
  navigate("/game");
};

  return (
    <div className="start">
      <h1>Code</h1>
      <h3>knacker</h3>
      <img className="startlogo" src={CodeknackerSVG} alt="Codeknacker" />
      <h4>Cracking code, unlocking words</h4>
      <button onClick={startGameHandler}>Start Game</button>
    </div>
  );
};

export default Start;
