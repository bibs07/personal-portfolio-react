import React from "react";
import { Heading, SkillImage } from "../index";

export const Skills = () => {
  return (
    <section className="flex flex-col overflow-hidden" id="skills">
      <Heading heading={"Skills"} className="py-3 my-2" />
      <div className="flex justify-center my-5">
        <SkillImage src="./jsIcon.png" caption="JavaScript" alt="JS Logo" />
        <SkillImage src="./pythonIcon.png" caption="Python" alt="Python Logo" />
      </div>
      <div className="flex justify-center my-5">
        <SkillImage src="./htmlIcon.png" caption="HTML5" alt="HTML5 Logo" />
        <SkillImage src="./reactIcon.png" caption="React JS" alt="React Logo" />
        <SkillImage src="./cssIcon.png" caption="CSS" alt="CSS Logo" />
      </div>
      <div className="flex justify-center my-5">
        <SkillImage src="./jqueryIcon.png" caption="jQuery" alt="jQuery Logo" />
      </div>
    </section>
  );
};
