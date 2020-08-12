import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNavPage from "./components/organisms/SideNavPage.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
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
            <Col>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route exact path="/work" component={Work} />
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
