import React from "react";
import { NavLink} from "react-router-dom";
import { Navbar, Nav} from "react-bootstrap";

class Navigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      somedata: ""
    };
  }

  render() {
    return (
        <Navbar bg="dark" expand="lg"/>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav"/>
        <NavLink className="d-inline p-2 bg-dark text-white " to="/">Api</NavLink>

        <Navbar bg="dark" expand="lg"/>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav"/>
        <NavLink className="d-inline p-2 bg-dark text-white " to="/scope">Scope</NavLink>
    );
  }
}

export default Navigator;