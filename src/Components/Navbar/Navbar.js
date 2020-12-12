import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
class Nav extends React.Component{
  render() {
    return (
      <Navbar bg="dark" variant="dark" >
      <Navbar.Brand>SplitBills</Navbar.Brand>
      </Navbar>

    );
  }
}
export default Nav;