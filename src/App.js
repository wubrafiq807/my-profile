import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNavPage from "./components/organisms/SideNavPage.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NoPageFound from "./pages/NoPageFound.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col lg="3">
            <SideNavPage />
          </Col>
          <Col>
            <Row className="justify-content-md-center" className="padding-top">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/work" component={Work} />
                <Route component={NoPageFound} />
              </Switch>
            </Row>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
