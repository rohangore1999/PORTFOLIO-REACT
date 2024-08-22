import React from "react";
import styled from "styled-components";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import Particle from "../components/Particle";
import Typewriter from "typewriter-effect";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>

      <div className="typography">
        <h1>Hi, I'm</h1>
        <span> Rohan Gore</span>
        <div className="typed">
          <Typewriter
            options={{
              strings: [
                "SOFTWARE ENGINEER",
                "DEVELOPER",
                "DATA ENGINEER",
                "WEB SCRAPER",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div className="icons">
          <a
            href="https://www.linkedin.com/in/rohan-gore-355178179/"
            target="_blank"
            rel="noreferrer"
            className="icon i-linkedin"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/rohangore1999"
            target="_blank"
            rel="noreferrer"
            className="icon i-github"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

export default HomePage;

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .p-particles-js {
    position: absolute;
    top: 0;
    left: 0;
  }

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;

    .typed {
      span {
        font-size: 1rem !important;
        color: var(--background-light-color2);
        font-weight: bold;
      }
    }

    h1 {
      font-size: 4rem;
      color: var(--white-color);

      @media screen and (max-width: 502px) {
        font-size: 3rem;
      }

      span {
        font-size: 4rem;
        @media screen and (max-width: 502px) {
          font-size: 3.8rem;
          width: 100%;
        }
      }
    }

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;

      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;

        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }

        /* not including last child; do the margin right 1 rem */
        &:not(:last-child) {
          margin-right: 1rem;
        }

        svg {
          margin: 0.5rem;
        }
      }

      .i-linkedin {
        &:hover {
          border: 2px solid blue;
          color: blue;
        }
      }

      .i-github {
        &:hover {
          border: 2px solid black;
          color: white;
        }
      }
    }
  }
`;
