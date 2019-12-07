import React, { Component } from "react";

const Contact = props => {
  return (
    <section id="contact">
      <div id="header" class="inner cover text-center">
        <h1 class="cover-heading pt-5 pb-3">Let's work together!</h1>
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
  );
};

export default Contact;
