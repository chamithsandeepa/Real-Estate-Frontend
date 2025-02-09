import React from "react";
import Header from "./Components/Header";
import AboutUs from "./Components/AboutUs";
import Projects from "./Components/Projects";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <AboutUs />
      <Projects />
    </div>
  );
};

export default App;
