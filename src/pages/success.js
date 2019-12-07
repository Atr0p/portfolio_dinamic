import React from "react";
import { graphql, withPrefix, Link } from "gatsby";
import Helmet from "react-helmet";
import SEO from "../components/SEO";
import Layout from "../layouts/index";

import { FaPencilRuler, FaCode, FaServer } from "react-icons/fa";

const Success = props => {
  return (
    <Layout bodyClass="page-success">
      <SEO title="Peter Kovach" />
      <Helmet>
        <meta name="description" content="Personal webite of Peter Kovach" />
      </Helmet>

      <main role="main">
        <h1>Thank you!</h1>
        <h3>Back to you soon.</h3>
        <Link to="/">Go back</Link>
      </main>
    </Layout>
  );
};

export default Success;
