import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Header from '../sections/Header';
import Projects from '../sections/Projects';
import Startups from '../sections/Startups';
import Contact from '../sections/Contact';

import { FaPencilRuler, FaCode, FaServer } from 'react-icons/fa';

const Home = (props) => {
  return (
    <Layout bodyClass="page-home">

      <SEO title="Peter Kovach" />
      <Helmet>
        <meta
          name="description"
          content="Personal webite of Peter Kovach"
        />
      </Helmet>

      <main role="main">

       <Header />

        <section id="bemutatkozas" className="tav text-center pb-2">
          <div className="container">
            <h3 className="pt-5 pb-2">Nice to meet you!</h3>
            <p className="lead">
              Since beginning my journey as a freelance developer nearly 3 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually improving my chops.
            </p>
          </div>
        </section>

        <section id="skills" className="container tav text-center">
            <div className="d-md-flex bd-highlight border rounded shadow">
                <div className="p-2 flex-fill bd-highlight border-right">
                    <FaPencilRuler className="categoryIcon"/>
                    <h4><strong>Design</strong></h4>
                    <p>...</p>

                </div>
                <div className="p-2 flex-fill bd-highlight border-right">
                    <FaCode className="categoryIcon"/>
                    <h4><strong>Front</strong></h4>
                    <p>...</p>

                </div>
                <div className="p-2 flex-fill bd-highlight">
                    <FaServer className="categoryIcon"/>
                    <h4><strong>Back</strong></h4>
                    <p>...</p>

                </div>
            </div>
        </section>

        <Projects />

        <section id="myProjects" className="tav text-center pb-5">
          <div className="container">
            <h3 className="pt-5">My projects</h3>
            <p className="lead">
              I'm a bit of a digital product junky. Over the years, I've used hundreds of web and mobile apps in different industries and verticals. Eventually, I decided that it would be a fun challenge to try designing and building my own.
            </p>
          </div>
        </section>

        <Startups />

        <Contact />

    </main>

    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            featured
            date(formatString: "DD MMMM YYYY")
          }
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`;


export default Home;
