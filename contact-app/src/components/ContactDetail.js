import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ContactCard = (props) => {
  let styles = {
    noMargin: {
      margin: "0",
    },
    paddingBottom: {
      paddingBottom: "50px",
      paddingTop: "50px",
    },
  };
  let contact;
  const navigate = useNavigate();
  for (let i = 0; i < props.contacts.length; i++) {
    const element = props.contacts[i];
    if (element.id == useParams().id) {
      contact = element;
      break;
    }
  }
  if (contact == undefined) {
    contact = {
      name: "",
      email: "",
    };
  }
  return (
    <div className="ui container" style={styles.paddingBottom}>
      <div className="ui fluid card">
        <img src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"></img>
        <div className="content">
          <a className="header">{contact.name}</a>
          <div className="meta">
            <a>{contact.email}</a>
          </div>
        </div>
        <div
          className="ui red inverted center aligned segment"
          style={styles.noMargin}
          onClick={() => {
            navigate(`../delete/${contact.id}`);
          }}
        >
          <p>Delete</p>
        </div>
        <div
          className="ui blue inverted center aligned segment"
          style={styles.noMargin}
          onClick={() => {
            navigate("/");
          }}
        >
          <p>Go Home</p>
        </div>
        <div
          className="ui green inverted center aligned segment"
          style={styles.noMargin}
          onClick={() => {
            navigate(`../edit/${contact.id}`);
          }}
        >
          <p>Edit</p>
        </div>
      </div>
    </div>
  );
};
export default ContactCard;
