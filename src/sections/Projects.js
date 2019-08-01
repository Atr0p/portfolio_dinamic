import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';

import {FaArrowRight} from 'react-icons/fa';

const Projects = props => {
    
    const melok = props.data.allWorksJson.edges;
    console.log('melok', melok);

    return (
        <section id="portfolio" className="text-center tav container">
          <h1 className="mb-5 mt-3 mt-md-0">Recent projects</h1>
          <div className="row">
            {melok.map(melo => (
              (melo.node.type == "work" ? (
                <div key={melo.path} className="col-md-4">
                  
                  <a href={melo.node.path}>
                    <div className="card mx-1 p-4 meloCard my-2" 
                        style={{background: melo.node.css, color: melo.node.text}}
                    >
                      <div className="prew">
                        <h4 className="d-flex align-items-center justify-content-center">
                          {(melo.node.image != '') ? (
                            <span className="flex-fill meloImgCont">
                              <img className="meloImg" src={melo.node.image} />
                            </span>
                          ) : null}
                          {(melo.node.name != '') ? (<span className="meloCimCont">{melo.node.name}</span>) : null}
                        </h4>
                      </div>
                      <div className="full container">
                        <span className="fullText">{melo.node.description}</span><br/>
                        <span className="btn btn-outline-primary my-2">View <FaArrowRight /></span>
                      </div>
                    </div>
                  </a>
                </div>
              ) : (
              null
              ))
            ))}
          </div>
        </section>
    );
}


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

