import React from "react";
import Header from "./Components/Header";
import AboutUs from "./Components/AboutUs";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <AboutUs />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
