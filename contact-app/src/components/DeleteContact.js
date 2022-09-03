import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DeleteContact = (props) => {
  let contact;
  let { id } = useParams();
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
    <div className="ui container segment">
      <h1 className="ui header">Are you sure ?</h1>
      <h3 className="ui header">Do you want to delete the contact ?</h3>
      <div className="ui segment">
        <div className="ui animated middle aligned list">
          <div className="item">
            <img
              className="ui avatar image"
              src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
            ></img>
            <div className="content">
              <div className="header">{contact.name}</div>
              {contact.email}
            </div>
          </div>
        </div>
      </div>
      <button
        className="ui red left button"
        onClick={() => {
          props.delContact(id);
          navigate("/");
        }}
      >
        Yes
      </button>
      <button
        className="ui blue right floated button"
        onClick={() => {
          navigate("/");
        }}
      >
        No
      </button>
    </div>
  );
};

export default DeleteContact;
