import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNavPage from "./components/organisms/SideNavPage.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import Contract from "./pages/Contract.jsx";
import Achievement from "./pages/Achievement.jsx";
import Skills from "./pages/Skills.jsx";
import NoPageFound from "./pages/NoPageFound.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Container>
          <Row>
            <Col lg="3">
              <SideNavPage />
            </Col>
            <Col className="custom-content">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route exact path="/work" component={Work} />
                <Route exact path="/contract" component={Contract} />
                <Route exact path="/achievement" component={Achievement} />
                <Route exact path="/skills" component={Skills} />
                <Route component={NoPageFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
