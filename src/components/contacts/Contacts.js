import React, { Component } from "react";
import { Consumer } from "../../context";
import Contact from "./Contact";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {({ contacts }) => {
          return (
            <React.Fragment>
              <h1 className="mb-3">
                <span className="text-danger">Contact</span> List
              </h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
