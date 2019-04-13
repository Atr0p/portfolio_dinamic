const path = require('path');

// Create pages from markdown files
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `query {
            posts: allMarkdownRemark(
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
                    customer
                    date(formatString: "DD MMMM YYYY")
                    form
                  }
                  excerpt
                }
              }
            }
          }
        `,
      ).then((result) => {
        result.data.posts.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/blog.js');
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        resolve();
      }),
    );
  });
};
