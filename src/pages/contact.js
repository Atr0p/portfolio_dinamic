import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO";
import Layout from "../layouts/index";

class Contact extends React.Component {
  render() {
    return (
      <Layout bodyClass="page-contact">
        <SEO title="Contact" />
        <Helmet>
          <meta name="description" content="" />
        </Helmet>

        <main role="main">
          <section id="contact">
            <div id="header" class="inner cover text-center">
              <h1 class="cover-heading pt-5">Thank you</h1>
            </div>
            <div class="container mt-md-5">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                action="/success"
              >
                <input type="hidden" name="form-name" value="Contact Form" />
                <div class="form-row">
                  <div class="col-md">
                    <label class="text-muted" for="name">
                      Your Name:{" "}
                    </label>
                    <input class="form-control" type="text" name="name" />
                  </div>
                  <div class="col-md">
                    <label class="text-muted" for="email">
                      Your Email:
                    </label>
                    <input class="form-control" type="email" name="email" />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <label class="text-muted" for="message">
                    Message:{" "}
                  </label>
                  <textarea class="form-control" name="message"></textarea>
                </div>
                <div class="text-center my-4">
                  <button class="btn btn-outline-primary" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>
      </Layout>
    );
  }
}

export default Contact;
