import React from "react";
import Navbar from 'react-bootstrap/Navbar';

class Nav extends React.Component{
  render() {
    return (
      <Navbar bg="dark">
      <Navbar.Brand>
        SplitBills
      </Navbar.Brand>
    </Navbar>);
  }
}
export default Nav;