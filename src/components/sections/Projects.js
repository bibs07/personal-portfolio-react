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
            "In this project, I fetched data from api provided by https://www.themoviedb.org/ website and used the data to clone the netflix design"
          }
          bLinkHead={"Link"}
          bLink={"https://github.com/bibs07/netflix-clone-reactjs"}
        />
        <ProjectCard
          fHeading={"Porfilio Website"}
          fBody={"Technologies Used:"}
          flist1={"ReactJS"}
          flist2={"HTML"}
          flist3={"Tailwind CSS & CSS"}
          bHeading={"Summary"}
          bBody={
            "In this project, I created personal portfolio website with the help of ReactJS."
          }
          bLinkHead={"Link"}
          bLink={"https://github.com/bibs07/personal-portfolio-react"}
        />
        <ProjectCard
          fHeading={"Covid Tracker"}
          fBody={"Technologies Used:"}
          flist1={"ReactJS"}
          flist2={"HTML"}
          flist3={"CSS"}
          bHeading={"Summary"}
          bBody={
            "In this project, I created simple daily COVID update for Nepal using data obtained from api provided by https://covid19.mohp.gov.np/"
          }
          bLinkHead={"Link"}
          bLink={"https://github.com/bibs07/covid-tracker-nepali"}
        />
        <ProjectCard
          fHeading={"Calculator"}
          fBody={"Technologies Used:"}
          flist1={"jQuery"}
          flist2={"HTML"}
          flist3={"Bootstrap"}
          bHeading={"Summary"}
          bBody={
            "In this project, I created simple calculator using jQuery and designed it using Bootstrap."
          }
          bLinkHead={"Link"}
          bLink={"TBA"}
        />
      </div>
    </section>
  );
};
