import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

class Contact extends Component {
  state = {
    showDetailedInfo: false
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showDetailedInfo } = this.state;
    return (
      <Consumer>
        {({ dispatch }) => {
          return (
            <div className="card card-body mb-3">
              <h2>
                {name}{" "}
                <i
                  className="fas fa-caret-down"
                  style={{
                    transition: "all .7s ease-in-out",
                    cursor: "pointer",
                    transform: showDetailedInfo
                      ? "rotateX(-180deg)"
                      : "rotateX(0)"
                  }}
                  onClick={() =>
                    this.setState({ showDetailedInfo: !showDetailedInfo })
                  }
                />
                <i
                  className="fas fa-times"
                  style={{ color: "red", cursor: "pointer", float: "right" }}
                  onClick={() =>
                    dispatch({ type: "DELETE_CONTACT", contactId: id })
                  }
                />
              </h2>
              <ul
                className="list-group"
                style={{
                  transition:
                    "max-height .4s ease-in-out, transform .5s ease-in-out",
                  transformOrigin: "top center",
                  transform: showDetailedInfo ? "scale(1)" : "scale(0)",
                  overflow: "hidden",
                  height: "auto",
                  maxHeight: showDetailedInfo ? "500px" : "0"
                }}
              >
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Phone: {phone}</li>
              </ul>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
