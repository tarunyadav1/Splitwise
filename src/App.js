import './style.css';
import React from "react";
import { render } from "react-dom";
import Nav from "./Components/Navbar/Navbar";
import Sidebar from './Components/Sidebar/Sidebar';


function App() {
  return (
      <div>
          <Nav />
          <Sidebar />
      </div>
  );
}
render(<App />, document.getElementById("root"));

export default App;
