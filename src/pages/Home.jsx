import React from "react";

const Home = () => (
  <div className="container-fluid">
    <h1 className="title is-1">ABOUT ME</h1>
    <p className="intro long">
    <span className="intro-text">Hello, My name is Md Rafiqul Islam</span>
    <span className="intro-copy">I'm a Full-Stack Developer(JavaScript,PHP,java,Python). I have over 4 years experience
     developing web and mobile application. I love building unique, efficient site and passionate about writing clean code.
     </span>
     </p>
     <div className="keep-in-touch">
     <h2 className="h3 text-center">Lets keep in touch:</h2>
     <ul className="keep-in-touch__links">
     <li className="keep-in-touch-link">
     <a href="mailto:smile@hasanavi.me" target="_blank">
     <img src="https://hasanavi.me/static/media/email.0273a537.svg" alt="email"/>
     <span>Email</span>
     </a>
     </li>
     <li className="keep-in-touch-link"><a href="http://www.linkedin.com/in/hasanavi" target="_blank"><img src="https://hasanavi.me/static/media/linkedin.ed4cbbe3.svg" alt="linkedin"/><span>Linkedin</span></a></li>
     <li className="keep-in-touch-link"><a href="https://github.com/hasanavi" target="_blank"><img src="https://hasanavi.me/static/media/github.3f49cd08.svg" alt="github"/><span>Github</span></a></li>
     <li className="keep-in-touch-link"><a href="https://twitter.com/hasanavi" target="_blank"><img src="https://hasanavi.me/static/media/twitter.4ba2da1a.svg" alt="twitter"/><span>Twitter</span></a></li>
     </ul>
     </div>
  </div>
);

export default Home;