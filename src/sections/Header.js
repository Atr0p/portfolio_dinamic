import React, { Component } from 'react'
import { Link } from 'gatsby';

import { FaLinkedin, FaGithubSquare, FaEnvelope } from 'react-icons/fa';

export default class Header extends Component {
    render() {
        return (
             <section id="header" className="inner cover container">
                <h1 className="heading display-3">Hi, I'm Peter.</h1>
                <p className="lead">I design and code beautifully simple and valuable things,<br/> and I love what I do.</p>
                <div className="h4">
                    <span className="my-2 mr-2"><a href="#"><FaEnvelope /></a></span>
                    <span className="m-2">
                        <a target="_blank" href="https://www.linkedin.com/in/kovacs-peter"><FaLinkedin /></a>
                        </span>
                    <span className="m-2">
                        <a target="_blank" href="https://github.com/Atr0p"><FaGithubSquare /></a>
                    </span>
                </div>
            </section>
        )
    }
}
//Átírni staticQueryre