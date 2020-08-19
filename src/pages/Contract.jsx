import React from "react";
import email from "../asstes/img/email.svg";
import linkedin from "../asstes/img/linkedin.svg";
import github from "../asstes/img/github.svg";
import twitter from "../asstes/img/twitter.svg";

const Contract = () => (
  <div className="keep-in-touch">
    <h2 className="h3 text-center">Lets keep in touch:</h2>
    <ul className="keep-in-touch__links">
      <li className="keep-in-touch-link">
        <a href="mailto:wubrafiqcse807@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={email} alt="email" />
          <span>Email</span>
        </a>
      </li>
      <li className="keep-in-touch-link">
        <a
          href="https://www.linkedin.com/in/md-rafiqul-islam-931164ba"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
          <span>Linkedin</span>
        </a>
      </li>
      <li className="keep-in-touch-link">
        <a href="https://github.com/wubrafiq807" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" />
          <span>Github</span>
        </a>
      </li>
      <li className="keep-in-touch-link">
        <a href="https://twitter.com/Rafiqul06600940" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="twitter" />
          <span>Twitter</span>
        </a>
      </li>
    </ul>
  </div>
);

export default Contract;
