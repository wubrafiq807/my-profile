import React from "react";
import email from "./email.svg"
import github from "./github.svg"
import linkedin from "./linkedin.svg"
import twitter from "./twitter.svg"
const Home = () => (
  <div className="container-fluid">
    <h1 className="title is-1">ABOUT ME</h1>
    <p className="intro long">
      <span className="intro-text">Hello, My name is Md Rafiqul Islam</span>
      <span className="intro-copy">
        I'm a Full-Stack Developer(JavaScript,PHP,java,Python). I have over 4
        years experience developing web and mobile application. I love building
        unique, efficient site and passionate about writing clean code.
      </span>
    </p>
    <div className="keep-in-touch">
      <h2 className="h3 text-center">Lets keep in touch:</h2>
      <ul className="keep-in-touch__links">
        <li className="keep-in-touch-link">
          <a href="mailto:wubrafiqcse807@gmail.com" target="_blank">
            <img
              src={email}
              alt="email"
            />
            <span>Email</span>
          </a>
        </li>
        <li className="keep-in-touch-link">
          <a href="https://www.linkedin.com/in/md-rafiqul-islam-931164ba" target="_blank">
            <img
              src={linkedin}
              alt="linkedin"
            />
            <span>Linkedin</span>
          </a>
        </li>
        <li className="keep-in-touch-link">
          <a href="https://github.com/wubrafiq807" target="_blank">
            <img
              src={github}
              alt="github"
            />
            <span>Github</span>
          </a>
        </li>
        <li className="keep-in-touch-link">
          <a href="https://twitter.com/Rafiqul06600940" target="_blank">
            <img
              src={twitter}
              alt="twitter"
            />
            <span>Twitter</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Home;
