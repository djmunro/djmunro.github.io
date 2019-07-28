import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCode } from "@fortawesome/free-solid-svg-icons";

import Nav from "../components/nav";
import { Splash } from "../components/lib";

function About() {
  useEffect(() => {
    document.title = "About Me";
    document.body.classList.remove("bg-img");
  });

  return (
    <div>
      <Nav />

      <main className="center">
        <Splash>
          <h1 className="heading">
            About <span className="text-secondary">Me</span>
          </h1>
          <h4 className="sub-heading">
            <p>Hi, I'm David!</p>
            <p>
              I'm a
              <span className="text-secondary"> full-stack web developer </span>
              with over
              <span className="text-secondary"> 7 years of experience</span>. I
              have 4 wonderful children and an amazing wife. I'm passionate
              about building excellent software that improves the lives of those
              around me.
            </p>
          </h4>
          <h4 className="sub-heading">
            Have a project that needs to be developed? Reach out to me at{" "}
            <a
              className="link"
              href="mailto:munrodj86@gmail.com?Subject=Hello!"
            >
              munrodj86@gmail.com
            </a>
            .
          </h4>
        </Splash>

        <div class="about-info container">
          <p>
            <b>
              I have maintained, developed and launched multiple projects from
              scratch
            </b>
            , touching all parts of the stack (front-end, back-end and test).
          </p>
          <p>
            My current toolset includes <b>Javascript and React</b>, Redux,
            Python, Docker and most the related frameworks and ORMSs.
          </p>

          <hr className="custom-hr" />

          <h2>
            <span className="text-secondary">
              <FontAwesomeIcon icon={faEdit} /> FRONT-END WEB DEVELOPMENT
            </span>
          </h2>
          <p>
            <b>I specialize in develoing React applications.</b>
          </p>

          <p>My current experience and skills in front-end include:</p>
          <ul>
            <li>
              Full integration of front-end development using tools like Webpack
              with features like automatic code reload, code minifications,
              multiple environments support, CI/CD, automated accessibility
              testing using puppeteer.
            </li>
            <li>Good sense of design and UX</li>
            <li>
              Experienced in most JS ecosystems; React, Redux, Mobx, RxJS,
              Ionic, jQuery, Lodash/Underscore and many more.
            </li>
          </ul>

          <hr className="custom-hr" />

          <h2>
            <span className="text-secondary">
              <FontAwesomeIcon icon={faCode} /> BACK-END WEB DEVELOPMENT
            </span>
          </h2>

          <p>
            <b>
              My current back-end development stack consists of Flask and
              Express.
            </b>
          </p>

          <p>
            Nearly every app that I've worked on in the past I developed both
            the front-end and back-end. In order to improve development speed,
            performance and reliability, I've changed languages and frameworks
            multiple times. Orignally I used Ionic, then I switched to Angular,
            and now React; and instead of shell for server configuration I now
            use Docker.
          </p>

          <p>What I can do for you:</p>
          <ul>
            <li>Lead backend development in Flask + Python, Express + JS</li>
            <li>
              API integration, remote data synchronization, cloud services
            </li>
            <li>
              Integrating/Migrating different types of databases (e.g.
              PostgreSQL, MySQL)
            </li>
            <li>
              Distrubuting the servers across multiple nodes (ec2 instances) /
              docker containers
            </li>
            <li>
              Refactoring existing applications, by improving code readibility,
              separating concerns into separate functions/classes/modules, and
              adding unittest coverage to prevent regression and prove
              implementation. Taking the business logic out of request/response
              layer, and moving it into separate modules (DDD). Moving the app
              architecture into an event-based one (Redux).
            </li>
            <li>Writing both unit and E2E tests (Puppeteer, Selenium)</li>
          </ul>
        </div>
      </main>

      {/* <footer id="main-footer">&copy; David Munro 2019</footer> */}
    </div>
  );
}

export default About;
