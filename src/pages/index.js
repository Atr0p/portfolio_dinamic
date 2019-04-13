import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';

const Home = (props) => {
  const works = props.data.allWorksJson.edges;
  return (
    <Layout bodyClass="page-home">

      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme."
        />
      </Helmet>

      <main role="main">

        <section id="header" className="inner cover container">
            <h1 className="heading display-3">Hi, my name is Peter.</h1>
            <p className="lead">I design and code beautifully simple things, and I love what I do.</p>
        </section>

        <section id="bemutatkozas" className="container tav text-center">
            <h3 className="pt-5">Örülök, hogy megismerhetlek</h3>
            <p className="lead">Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually improving my chops.</p>
        </section>

        <section id="skills" className="container tav">
            <div className="d-flex flex-wrap py-5 skills_box text-center bd-highlight">
                <div className="flex-fill bd-highlight">
                    <h4>Design</h4>
                    <span>skill</span>
                    <span>skill</span>
                    <span>skill</span>
                </div>
                <div className="flex-fill bd-highlight">
                    <h4>Design</h4>
                    <span>skill<br/></span>
                    <span>skill<br/></span>
                    <span>skill<br/></span>
                </div>
                <div className="flex-fill bd-highlight">
                    <h4>Design</h4>
                    <span>skill</span>
                    <span>skill</span>
                    <span>skill</span>
                </div>
            </div>
        </section>

        <section id="portfolio" className="text-center container tav">
            <div className="row">
                <div className="col cirkon"><h3>Ez egy projekt</h3></div>
                <div className="col grof"><h3>Ez egy projekt</h3></div>
                <div className="col matek"><h3>Ez egy projekt</h3></div>
            </div>
            {works.map(edge => (
            <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2">
              <Link to={edge.node.path} >
                <div className="card feature">
                  {edge.node.image && (
                    <div className="card-img-top w-100" alt={'feature-'+edge.node.title} style={{backgroundImage: "url("+withPrefix(edge.node.image)+")"}} ></div>
                  )}
                  <div className="card-body">
                      <h4 className="card-title">{edge.node.title}</h4>
                    <p className="card-text">{edge.node.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </section>
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
    allWorksJson {
      edges {
        node {
          id
          title
          description
          image
          path
        }
      }
    }
  }
`;


export default Home;
