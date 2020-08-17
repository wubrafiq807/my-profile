import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import profile from "./profile.jpg";
import { Link } from "react-router-dom";
export default class SideNavPage extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroup.Item>
          <div className="profile-picture ">
            <Link to="/">
              <img src={profile} alt="Rafiqul Islam" />
            </Link>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <p className="intro h1 short text-left">
            I am a <span className="secondary-color">Full-Stack</span>{" "}
            <span className="tertiary-color">Enthusiast</span>
          </p>
        </ListGroup.Item>
        <Link to="/" className="menu-link-item">
          <ListGroup.Item className="text-left">Home</ListGroup.Item>
        </Link>
        <Link to="/work" className="menu-link-item">
          <ListGroup.Item className="text-left">WORk</ListGroup.Item>
        </Link>
        <Link to="/skills" className="menu-link-item">
          <ListGroup.Item className="text-left">SKILLS</ListGroup.Item>
        </Link>
        <Link to="/achievement" className="menu-link-item">
          <ListGroup.Item className="text-left">ACHIEVEMENT</ListGroup.Item>
        </Link>
        <Link to="/contract" className="menu-link-item">
          <ListGroup.Item className="text-left">CONTRACT</ListGroup.Item>
        </Link>
      </ListGroup>
    );
  }
}
