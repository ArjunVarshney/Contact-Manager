import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        name={contact.name}
        email={contact.email}
        id={contact.id}
        key={contact.id}
      />
    );
  });

  return (
    <div className="ui container segment">
      <h3 className="ui header">
        Contact List
        <Link to="/add">
          <button className="ui button blue right floated small">Add</button>
        </Link>
      </h3>
      <div className="ui middle aligned animated list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
