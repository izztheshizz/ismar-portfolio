import React from "react";
import "../components/styles.css";

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Ismar.
            <br className="hidden lg:inline-block" /> Welcome to my portfolio
          </h1>
          <p className="mb-8 leading-relaxed">
            Ismar is a highly proficient and motivated Software Engineer from
            San Fernando, California. He served in the United States Army where
            he completed their Basic Leader's Course and earned several medals
            for his service as an Airborne Infantryman. After transitioning to
            the tech industry, Ismar has honed his skills in SQL, C#/.NET, and
            React, becoming an expert in these areas. He has experience working
            with a wide range of technologies and is known for his ability to
            quickly learn new skills and adapt to new environments.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full flex items-center justify-center"
            alt="hero"
            src="https://bit.ly/3kMWvjK"
            // src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
export default About;
