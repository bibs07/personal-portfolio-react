import React from "react";
import { ProjectCard } from "../atoms/ProjectCard";
import { Heading } from "../index";

export const Projects = () => {
  return (
    <section id="projects">
      <Heading heading={"Projects"} />
      <div className="flex justify-center flex-wrap">
        <ProjectCard
          fHeading={"Netflix Clone"}
          fBody={"Technologies Used:"}
          flist1={"ReactJS"}
          flist2={"HTML"}
          flist3={"CSS"}
          bHeading={"Summary"}
          bBody={
            "In this project, I fetched data from XXX website and used the data to clone the netflix design"
          }
          bLinkHead={"Link"}
          bLink={"https://github.com/bibs07/netflix-clone-reactjs"}
        />
        <ProjectCard
          fHeading={"Netflix Clone"}
          fBody={"Technologies Used:"}
          flist1={"ReactJS"}
          flist2={"HTML"}
          flist3={"CSS"}
          bHeading={"Summary"}
          bBody={
            "In this project, I fetched data from XXX website and used the data to clone the netflix design"
          }
          bLinkHead={"Link"}
          bLink={"https://github.com/bibs07/netflix-clone-reactjs"}
        />
        <ProjectCard
          fHeading={"Netflix Clone"}
          fBody={"Technologies Used:"}
          flist1={"ReactJS"}
          flist2={"HTML"}
          flist3={"CSS"}
          bHeading={"Summary"}
          bBody={
            "In this project, I fetched data from XXX website and used the data to clone the netflix design"
          }
          bLinkHead={"Link"}
          bLink={"https://github.com/bibs07/netflix-clone-reactjs"}
        />
      </div>
    </section>
  );
};
