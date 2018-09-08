import React, { Component } from "react";
import { Consumer } from "../../context";
import Contact from "./Contact";
import AddContact from "./AddContact";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {({ contacts }) => {
          return (
            <React.Fragment>
              <AddContact />
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
