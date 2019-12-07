import React from "react";
import { graphql, Link, StaticQuery } from "gatsby";

const Footer = props => (
  <div className="footer-strip">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="footer">
            <span className="footer-title">
              {props.data.site.siteMetadata.title} © {new Date().getFullYear()}
            </span>
            <ul className="footer-menu"></ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);
