import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      <a href={props.link} target="_blank">
        <img src={props.img} alt="" />
      </a>
      <div className="contentBox">
      <h3>{props.title}</h3>
        <div className="spans">
          <span>{props.text}</span>
          <span>{props.text2}</span>
          <span>{props.text3}</span>
          <span>{props.text4}</span>
        </div>
      </div>
    </div>
  );
};
 
export default Box;
