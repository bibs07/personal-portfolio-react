import React from "react";

export const SkillImage = (props) => {
  return (
    <>
      <figure>
        <img src={`${props.src}`} className="w-32 h-32" alt="" />
        <figcaption className="text-center" alt={`${props.alt}`}>
          {props.caption}
        </figcaption>
      </figure>
    </>
  );
};
