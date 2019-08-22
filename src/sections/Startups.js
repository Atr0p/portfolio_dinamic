import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';

import {FaArrowRight} from 'react-icons/fa';

const Startups = props => {
    
    const melok = props.data.allWorksJson.edges;
    console.log('melok', melok);

    return (
        <section id="startups" className="text-center tav container">
          <div className="row justify-content-center">
            {melok.map(melo => (
              (melo.node.type === "startup" ? (
              <div key={melo.name} className="col-md-6 my-2 my-md-0">
                
                  <div className="card mx-1 p-4 meloCard shadow" 
                      style={{border: '3px solid'+melo.node.css, color: melo.node.text}}
                  >
                    <div className="row align-items-center justify-content-center">
                      {(melo.node.image !== '') ? (
                        <span className="meloImgCont col-2">
                          <img alt={melo.name} className="meloImg" src={melo.node.image} />
                        </span>
                      ) : null}
                      <div className="col-8">
                        <h4 className="meloCimCont">{melo.node.name}</h4>
                        <p>{melo.node.description}</p>
                        <br/>
                        {(melo.node.status === "Under development" && melo.node.path !== "") ? (
                          <span className="text-muted"><a href={melo.node.path}>{melo.node.status} <FaArrowRight /></a></span>
                        ) : (
                          <span className="text-muted">{melo.node.status}</span>
                        )}
                        
                      </div>
                      
                    </div>
                  </div>

              </div>
              ) : null)
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
            status
          }
        }
      }
    }
    `}
    render={data => <Startups data={data} />}
  />
);

