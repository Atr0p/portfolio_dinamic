import React from 'react';
import { Link } from 'gatsby';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" activeClassName="active" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog/" activeClassName="active" className="nav-link">Blog</Link>
              </li>
            </ul>
          </div>
          <Link to="/contact/" className="btn btn-outline-primary ml-auto">Kapcsolat</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
