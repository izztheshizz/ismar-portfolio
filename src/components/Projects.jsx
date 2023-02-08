import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

function Projects() {
  const renderProjects = (allProjects) => {
    return allProjects.map(mapProject);
  };

  const mapProject = (project) => {
    return (
      <a href={project.link} key={project.id} className="sm:w-1/3 w-100 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={project.image}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
              {project.subtitle}
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              {project.title}
            </h1>
            <p className="leading-relaxed">{project.description}</p>
          </div>
        </div>
      </a>
    );
  };

  return (
    <section id="projects" className="body-font bg-gradient-to-r from-black">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I develop comprehensive full-stack applications using React, .NET
            Core Web API, and Microsoft SQL. I define the application's data
            model using SQL, constructing the necessary tables and
            relationships. I then create the back-end API using .NET Core Web
            API to handle incoming front-end requests, manipulate data stored in
            the SQL database, and return results. I also design the front-end
            user interface using React, incorporating components that interact
            with the back-end API to retrieve and display data, as well as carry
            out updates and operations. The React components make API calls via
            JavaScript to access data from the back-end and display it to the
            user.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">{renderProjects(projects)}</div>
      </div>
    </section>
  );
}
export default Projects;
