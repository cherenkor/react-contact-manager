import React, { Component } from "react";

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.contactId
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.newContact, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "222-234-4321"
      },
      {
        id: 2,
        name: "Elfo Dis",
        email: "elfo@gmail.com",
        phone: "768-234-4321"
      },
      {
        id: 3,
        name: "Olga Diskont",
        email: "logaDiskont@gmail.com",
        phone: "444-234-4321"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
