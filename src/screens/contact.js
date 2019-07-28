import React, { useEffect } from "react";

import Nav from "../components/nav";
import { Splash } from "../components/lib";

function Contact() {
  useEffect(() => {
    document.title = "Contact Me";
    document.body.classList.remove("bg-img");
  });

  return (
    <div>
      <Nav />

      <main id="center">
        <Splash>
          <h1 className="heading">
            Contact <span className="text-secondary">Me</span>
          </h1>
          <h4 className="sub-heading">This is how you can reach me...</h4>
        </Splash>

        <div class="boxes container">
          <div>
            <span class="text-secondary">Email:</span> munrodj86@gmail.com
          </div>
          <div>
            <span class="text-secondary">Phone Number:</span> (810) 923-4093
          </div>
          <div>
            <span class="text-secondary">Address:</span> Fenton, Mi
          </div>
        </div>
      </main>

      {/* <footer id="main-footer">Copyright &copy; 2019</footer> */}
    </div>
  );
}

export default Contact;
