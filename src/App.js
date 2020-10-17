import React from "react";
import Contact from "./components/Contact";

function App(props) {
  return (
    <div className="App">
      <Contact
        name="Peter Palmer"
        online
        img="https://randomuser.me/api/portraits/men/85.jpg"
      />

      <Contact
        name="Robert Moris"
        offline
        img="https://randomuser.me/api/portraits/men/13.jpg"
      />

      <Contact
        name="Gabriel Sylva"
        online
        img="https://randomuser.me/api/portraits/men/29.jpg"
      />
    </div>
  );
}

export default App;
