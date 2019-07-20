import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';

import { config } from 'react-spring/renderprops';
import Grid from '../components/Grid';
import { Slug, Fade } from '../components/Primitives';
import { Icon } from 'antd';
import 'antd/dist/antd.css';

class Cell extends React.Component {
  render() {
    const { toggle, name, description, css, active } = this.props
    return (
      <div
        className="cell"
        style={{ backgroundImage: css, cursor: !active ? 'pointer' : 'auto' }}
        onClick={!active ? toggle : undefined}>
        <Fade show={active} delay={active ? 500 : 0}>
          <div className="details">
            <Slug delay={600}>
              <div className="circle" style={{ background: css }} />
              <div className="close">
                <Icon
                  type="close"
                  style={{ cursor: 'pointer' }}
                  onClick={toggle}
                />
              </div>
              <h1>{name}</h1>
              <p>{description}</p>
            </Slug>
          </div>
        </Fade>
        <Fade
          show={!active}
          from={{ opacity: 0, transform: 'translate3d(0,140px,0)' }}
          enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
          leave={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
          delay={active ? 0 : 400}>
          <div className="default">
            <div style={{ zIndex: 1 }}>{name}</div>
          </div>
        </Fade>
      </div>
    )
  }
}

const Home = (props) => {
  let melok = [];
  props.data.allWorksJson.edges.map(melo => (
    melok.push(melo.node)
  ));

  const data = [
    {
      name: 'Rare Wind',
      description: '#a8edea → #fed6e3',
      css: 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
      height: 100,
    },
    {
      name: 'Saint Petersburg',
      description: '#f5f7fa → #c3cfe2',
      css: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      height: 200,
    },
    {
      name: 'Deep Blue',
      description: '#e0c3fc → #8ec5fc',
      css: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)',
      height: 200,
    },
    {
      name: 'Ripe Malinka',
      description: '#f093fb → #f5576c',
      css: 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)',
      height: 200,
    },
    {
      name: 'Perfect White',
      description: '#fdfbfb → #ebedee',
      css: 'linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)',
      height: 200,
    },
    {
      name: 'Near Moon',
      description: '#5ee7df → #b490ca',
      css: 'linear-gradient(to top, #5ee7df 0%, #b490ca 100%)',
      height: 200,
    },
    {
      name: 'Wild Apple',
      description: '#d299c2 → #fef9d7',
      css: 'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)',
      height: 100,
    },
    {
      name: 'Ladoga Bottom',
      description: '#ebc0fd → #d9ded8',
      css: 'linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%)',
      height: 200,
    },
    {
      name: 'Sunny Morning',
      description: '#f6d365 → #fda085',
      css: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
      height: 100,
    },
    {
      name: 'Lemon Gate',
      description: '#96fbc4 → #f9f586',
      css: 'linear-gradient(to top, #96fbc4 0%, #f9f586 100%)',
      height: 200,
    },
    {
      name: 'Salt Mountain',
      description: ' #FFFEFF → #D7FFFE',
      css: 'linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)',
      height: 100,
    },
    {
      name: 'New York',
      description: ' #fff1eb → #ace0f9',
      css: 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)',
      height: 200,
    },
    {
      name: 'Soft Grass',
      description: ' #c1dfc4 → #deecdd',
      css: 'linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)',
      height: 200,
    },
    {
      name: 'Japan Blush',
      description: ' #ddd6f3 → #faaca8',
      css: 'linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)',
      height: 100,
    },
  ]

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
            {console.log('melok',melok)}
            {console.log('data',data)}
            <Grid
              className="grid"
              // Arbitrary data, should contain keys, possibly heights, etc.
              data={melok}
              // Key accessor, instructs grid on how to fet individual keys from the data set
              keys={d => d.name}
              // Can be a fixed value or an individual data accessor
              heights={d => d.height}
              // Number of columns
              columns={2}
              // Space between elements
              margin={30}
              // Removes the possibility to scroll away from a maximized element
              lockScroll={false}
              // Delay when active elements (blown up) are minimized again
              closeDelay={500}
              // Regular react-spring configs
              config={config.slow}>
              {(data, active, toggle) => (
                <Cell {...data} active={active} toggle={toggle} />
              )}
            </Grid>

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
          name
          description
          css
          height
          image
          path
        }
      }
    }
  }
`;


export default Home;
