import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import profile from './profile.jpg'


export default class SideNavPage extends React.Component {

render() {
    return (

	<ListGroup defaultActiveKey="#link1">
	<ListGroup.Item  >
	<div class="profile-picture "><a href="/"><img src= {profile} alt="Rafiqul Islam"/></a></div>
	</ListGroup.Item>
    <ListGroup.Item>
      <p class="intro h1 short text-left">I am a <span class="secondary-color">Full-Stack</span> <span class="tertiary-color">Enthusiast</span></p>
    </ListGroup.Item>	
    <ListGroup.Item action href="#link1" bsPrefix="list-group-item text-left">
      HOME
    </ListGroup.Item>
    <ListGroup.Item action href="#link2" bsPrefix="list-group-item text-left">
     WORK
    </ListGroup.Item>
    <ListGroup.Item action href="#link3" bsPrefix="list-group-item text-left">
      ACHIVEMENT
    </ListGroup.Item>
    <ListGroup.Item action href="#link4" bsPrefix="list-group-item text-left">
      CONTRACT
    </ListGroup.Item>
  </ListGroup>	

	
    );
  }
}