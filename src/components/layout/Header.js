import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <NavLink
                to="/"
                exact={true}
                className="nav-link"
                activeClassName="is-active"
              >
                <i className="fas fa-home" />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contacts/add"
                className="nav-link"
                activeClassName="is-active"
              >
                <i className="fas fa-plus" />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="is-active"
              >
                <i className="fas fa-question" />
              </NavLink>
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
