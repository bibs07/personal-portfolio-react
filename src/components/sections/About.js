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
                Suspendisse maximus quam ut enim aliquet, non tempus arcu ultrices. Nulla in mollis quam. Integer mauris diam, blandit a tempor id, sollicitudin vitae justo. Pellentesque nulla elit, tempor id dui id, malesuada rhoncus augue. In ac porta sapien. Praesent ac porttitor dolor. Ut sit amet turpis nisi. Curabitur porttitor ex lacus, molestie ultrices lectus laoreet vel. Praesent leo orci, pellentesque ut pulvinar eu, lacinia sed leo. Nunc maximus luctus eleifend. Nullam faucibus est nec blandit dictum. Mauris et sollicitudin quam, at pretium justo
                `}
        />
        <Button text={"Download Resume"} />
      </div>
    </section>
  );
};
