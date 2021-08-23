import React, { useState } from "react";
import "../../styles/ProjectCard.css";

export const ProjectCard = ({
  fHeading,
  fBody,
  bBody,
  bHeading,
  flist1,
  flist2,
  flist3,
  bLinkHead,
  bLink,
}) => {
  const [flip, setFlip] = useState(false);

  const flipToggle = () => {
    setFlip((flip) => !flip);
  };

  return (
    <div className="card-container m-3">
      <div className={`card ${flip ? "rotate" : ""}`} onClick={flipToggle}>
        <div className="cardFront">
          <h2>{fHeading}</h2>
          <p>{fBody}</p>
          <ul>
            <li>{flist1}</li>
            <li>{flist2}</li>
            <li>{flist3}</li>
          </ul>
        </div>
        <div className="cardBack">
          <h2>{bHeading}</h2>
          <p>{bBody}</p>
          <h2>{bLinkHead}</h2>
          <a href={bLink}>{bLink}</a>
        </div>
      </div>
    </div>
  );
};
