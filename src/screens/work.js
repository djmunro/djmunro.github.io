import React, { useEffect } from "react";

import Nav from "../components/nav";
import { Splash } from "../components/lib";

function Work() {
  useEffect(() => {
    document.title = "View My Work";
    document.body.classList.remove("bg-img");
  });

  return (
    <div>
      <Nav />

      <main className="center">
        <Splash>
          <h1 className="heading">
            My <span className="text-secondary">Projects</span>
          </h1>
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

        <div className="projects container">
          <div className="project">
            <div className="project-img px2">
              <img src="https://i.imgur.com/YyF0uqY.png" />
            </div>
            <div className="project-info px2">
              <h2>simpleselenium.com</h2>
              <a className="link" href="https://simpleselenium.com">
                https://simpleselenium.com
              </a>
              <p>
                I created this blog using Jekyll when I began using selenium for
                integration testing at my workplace. The articles and tutorials
                were actually applied to the blog code itself. This strategy
                helped me learn how to use selenium to test react applications.
              </p>
            </div>
          </div>

          {/* <div className="seperator" /> */}
        </div>
      </main>

      {/* <footer id="main-footer">Copyright &copy; 2019</footer> */}
    </div>
  );
}

export default Work;
