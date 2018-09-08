import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link lead">
                <i className="fas fa-home" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link lead">
                <i className="fas fa-plus" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link lead">
                <i className="fas fa-question" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App Branding"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
