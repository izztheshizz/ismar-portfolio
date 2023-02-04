import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";

function App() {
  const backgroundImageStyle = {
    backgroundImage: `url("space.jpg")`,
    backgroundSize: `contain`,
  };
  return (
    <main className="App text-white " style={backgroundImageStyle}>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}

export default App;
