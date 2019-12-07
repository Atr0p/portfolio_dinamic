import React, { Component } from "react";
import { Link } from "gatsby";
import { Spring } from "react-spring/renderprops";
import { FaArrowDown } from "react-icons/fa";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

import { FaLinkedin, FaGithubSquare, FaEnvelope } from "react-icons/fa";

export default class Header extends Component {
  render() {
    const cursor = {
      hideWhenDone: true,
      blink: true,
      hideWhenDoneDelay: 5000
    };
    return (
      <section id="header">
        &nbsp;
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 300 }}
        >
          {props => (
            <>
              <div className="container" style={props}>
                <div className="w-100">
                  <h1 className="heading">
                    <div className="card p-3 d-inline-block">
                      <span className="font-weight-bold">
                        <Typist
                          className="TypistExample"
                          startDelay={1600}
                          cursor={cursor}
                        >
                          Hi, I'm Peter.
                        </Typist>
                      </span>
                    </div>
                  </h1>
                  <div className="card col-md-9 pt-md-4 py-1 px-md-3 px-2 ml-md-3 d-inline-block header-szoveg">
                    <p className="col-md-10 px-0 ">
                      I am a Web developer with experience designing and
                      building websites and web applications.
                    </p>
                  </div>
                </div>

                <div className="card header-linkek float-right mt-4 d-inline-block">
                  <div className="d-flex flex-row justify-content-between">
                    <div className="contact-border p-2">
                      <span>
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/kovacs-peter"
                        >
                          <FaLinkedin />
                        </a>
                      </span>
                      <span>
                        <a target="_blank" href="https://github.com/Atr0p">
                          <FaGithubSquare />
                        </a>
                      </span>
                    </div>
                    <div className="p-2">
                      <Link to="#contact">Contact</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="see-more text-center w-100 mb-2">
                <a href="#bemutatkozas">
                  <FaArrowDown className="bounce" />
                </a>
              </div>
            </>
          )}
        </Spring>
      </section>
    );
  }
}
//Átírni staticQueryre
