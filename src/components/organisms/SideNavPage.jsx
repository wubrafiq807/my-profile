import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import profile from './profile.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class SideNavPage extends React.Component {

render() {
    return (

	<ListGroup defaultActiveKey="#link1">
	<ListGroup.Item  >
	<div className="profile-picture "><a href="/"><img src= {profile} alt="Rafiqul Islam"/></a></div>
	</ListGroup.Item>
    <ListGroup.Item>
      <p className="intro h1 short text-left">I am a <span className="secondary-color">Full-Stack</span> <span className="tertiary-color">Enthusiast</span></p>
    </ListGroup.Item>
    <ListGroup.Item action bsPrefix="list-group-item text-left">
     <Link to="/">Home</Link>
    </ListGroup.Item>
    <ListGroup.Item action  bsPrefix="list-group-item text-left">
     <Link to="/work">WORK</Link>
    </ListGroup.Item>
    <ListGroup.Item action  bsPrefix="list-group-item text-left">
       <Link to="/ACHIVEMENT">ACHIVEMENT</Link>
    </ListGroup.Item>
    <ListGroup.Item action  bsPrefix="list-group-item text-left">
      <Link to="/CONTRACT">CONTRACT</Link>
    </ListGroup.Item>
  </ListGroup>

	
    );
  }
}