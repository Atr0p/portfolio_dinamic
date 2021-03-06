import React from "react";
import { graphql, Link, StaticQuery } from "gatsby";

import { FaArrowRight } from "react-icons/fa";

const Projects = props => {
  const melok = props.data.allWorksJson.edges;
  console.log("melok", melok);

  return (
    <section id="portfolio" className="text-center tav container">
      <h1 className="mb-5 mt-3 mt-md-0">Recent projects</h1>
      <div className="row justify-content-md-center">
        {melok.map(melo =>
          melo.node.type == "work" ? (
            <div key={melo.path} className="col-md-6 col-xl-4">
              <a target="_blank" href={melo.node.path}>
                <div className="card mx-1 meloCard my-2">
                  <div
                    className="prew px-4 py-5"
                    style={{ background: melo.node.css, color: melo.node.text }}
                  >
                    <h4 className="row align-items-center justify-content-center">
                      {melo.node.image != "" ? (
                        <span
                          className={melo.node.name != "" ? "col-3" : "col-12"}
                        >
                          <img className="meloImg" src={melo.node.image} />
                        </span>
                      ) : null}
                      {melo.node.name != "" ? (
                        <span
                          className={melo.node.image != "" ? "col-9" : "col-12"}
                        >
                          {melo.node.name}
                        </span>
                      ) : null}
                    </h4>
                  </div>
                  <div className="full container py-2 px-1">
                    <hr className="work-hr" />
                    <span className="fullText">{melo.node.description}</span>
                    <br />
                  </div>
                </div>
              </a>
            </div>
          ) : null
        )}
      </div>
    </section>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allWorksJson {
          edges {
            node {
              id
              name
              description
              css
              height
              text
              image
              path
              type
            }
          }
        }
      }
    `}
    render={data => <Projects data={data} />}
  />
);
