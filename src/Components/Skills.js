import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../components/Title";
import ProgressBar from "./ProgressBar";
import Skill from "./Skill";

function Skills() {
  return (
    // <SkillsStyled>

    //   <InnerLayout>
    //     <div className="skills">
    //       <ProgressBar title={"REACT"} width={"75%"} text={"75%"} />
    //       <ProgressBar title={"ANGULAR"} width={"65%"} text={"65%"} />
    //       <ProgressBar title={"PYTHON"} width={"85%"} text={"85%"} />
    //       <ProgressBar title={"WEB SCRAPING"} width={"70%"} text={"70%"} />
    //       <ProgressBar title={"MACHINE LEARNING"} width={"60%"} text={"60%"} />
    //     </div>
    //   </InnerLayout>
    // </SkillsStyled>
    <SkillsStyled>
      <Title title={"My Skills"} span={"My Skills"} />

      <div className="skills">
        <div className="skillsGrid">
          <Skill
            source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            alt="The logo icon for react"
            title="React"
          />
          <Skill
            source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-line-wordmark.svg"
            alt="The logo icon for HTML 5"
            title="HTML 5"
          />
          <Skill
            source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original-wordmark.svg"
            alt="The logo icon for CSS3"
            title="CSS 3"
          />
          <Skill
            source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
            alt="The logo icon for TailwindCSS"
            title="Twilwind CSS"
          />
          <Skill
            source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
            alt="The logo icon for GitHub"
            title="GitHub"
          />
          <Skill
            source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original-wordmark.svg"
            alt="The logo icon for NPM"
            title="NPM"
          />
          <Skill
            source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
            alt="The logo icon for NodeJS"
            title="Node JS"
          />
          <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />

          <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" />

          <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" />

          <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />

          <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
        </div>
      </div>
    </SkillsStyled>
  );
}

export default Skills;

const SkillsStyled = styled.div`
  /* .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;

    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  } */

  @media screen and (max-width: 640px) {
    .skillsGrid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      grid-auto-rows: auto;
      height: auto;
      padding: 20% 0;
    }
    .skillsGrid img {
      height: 75px;
      width: 75px;
    }
    .skills {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      margin: 0 auto;
    }
  }

  @media screen and (min-width: 641px) {
    .skillsGrid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
      grid-auto-rows: auto;
      height: auto;
    }
    .skillsGrid img {
      height: 100px;
      width: 100px;
    }
    .skills {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  @media screen and (min-width: 1080px) {
    .skillsGrid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 50px;
      grid-auto-rows: auto;
      height: auto;
    }
    .skillsGrid img {
      height: 150px;
      width: 150px;
    }
    .skills {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 50vh;
    }
  }
`;
