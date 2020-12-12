import './style.css';
import React from "react";
import { render } from "react-dom";
import Nav from "./Components/Navbar/Navbar";


function App() {
  return (
      <div>
          <Nav />
      </div>
  );
}
render(<App />, document.getElementById("root"));

export default App;
