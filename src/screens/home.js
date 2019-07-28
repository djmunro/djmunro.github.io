import React, { useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Nav from "../components/nav";

library.add(fab);

function Home() {
  useEffect(() => {
    document.body.classList.add("bg-img");
  });

  return (
    <div>
      <Nav />

      <main id="home">
        <h1 className="lg-heading">
          David <span className="text-secondary">Munro</span>
        </h1>
        <h2 className="sm-heading">
          Web Developer, Programmer, Designer and Entreprenuer
        </h2>

        <div className="icons">
          <a href="https://twitter.com/munrod86">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/david-munro-12a573b7">
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
          </a>
          <a href="https://github.com/djmunro">
            <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
          </a>
        </div>
      </main>
    </div>
  );
}

export default Home;
