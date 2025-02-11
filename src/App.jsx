import React from "react";
import Header from "./Components/Header";
import AboutUs from "./Components/AboutUs";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <AboutUs />
      <Projects />
      <Testimonials />
    </div>
  );
};

export default App;
