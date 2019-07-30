import React, { Component } from 'react'
import { Link } from 'gatsby';

export default class Header extends Component {
    render() {
        return (
             <section id="header" className="inner cover container">
                <h1 className="heading display-3">Hi, my name is Peter.</h1>
                <p className="lead">I design and code beautifully simple things, and I love what I do.</p>
            </section>
        )
    }
}