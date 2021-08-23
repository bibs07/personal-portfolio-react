import React from "react";
import { Heading, TextArea, Button } from "../index";

export const About = () => {
  return (
    <section className="about flex items-center" id="about">
      <div className="photo">
        <img src="./userPhoto.jpg" className="max-w-none" alt="user" />
        <Heading className={"text-center mt-3"} heading={"Bibek Dulal"} />
        <TextArea className={"text-center"} text={"IT Graduate"} />
        <TextArea
          className={"text-center"}
          text={"Federation University Australia"}
        />
      </div>
      <div className="info">
        <Heading className={"mt-5"} heading={"A Web Developer"} />
        <TextArea
          className={"text-justify"}
          text={`
                Recently graduated in Information Technology from Federation University with a background in web design and development.
                I'm currently working at Barbeques Galore Australia as an Assistant Store Manager. 
                Coming from sales background I'm greatly experienced in finding and performing tasks as per customer needs and problem solving on the go.
                `}
        />
        <br />
        <TextArea
          className={"text-justify"}
          text={`
                My major interest is in designing and coding so I'm aspiring to become a front-end developer.
                In my spare time, I work on web design projects and learn new programming language and frameworks.
                `}
        />
        <Button text={"Download Resume"} />
      </div>
    </section>
  );
};
