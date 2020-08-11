import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavPage from './components/organisms/SideNavPage.jsx';
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
     <>

	<Container>
  <Row>
  <Router>
    <Col  lg="3">
    <SideNavPage/>
    </Col>
    <Col>
    <Row className="justify-content-md-center" className="padding-top">
       <Switch>
          <Route path="/">
          alert(111)
            <Home />
          </Route>
          <Route path="/work">
             <Work />
          </Route>
        </Switch>
    </Row>
    </Col>
     </Router>
      </Row>
    </Container>
    </>
  );
}

export default App;
