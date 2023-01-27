import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main className="text-gray-200 bg-gradient-to-b from-green-900 via-indigo-900 to-green-900 body-font">
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
