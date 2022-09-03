import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  return (
    <div className="ui horizontal segments">
      <div className="ui segment">
        <div className="ui animated middle aligned list">
          <div className="item">
            <Link to={`contact/${props.id}`}>
              <img
                className="ui avatar image"
                src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
              ></img>
              <div className="content">
                <div className="header">{props.name}</div>
                {props.email}
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Link to={`delete/${props.id}`}>
        <div
          className="ui red right aligned segment"
          style={{ display: "grid", placeItems: "center", maxWidth: "100px" }}
        >
          <p>Delete</p>
        </div>
      </Link>
      <Link to={`edit/${props.id}`}>
        <div
          className="ui green right aligned segment"
          style={{ display: "grid", placeItems: "center", maxWidth: "100px" }}
        >
          <p>Edit</p>
        </div>
      </Link>
    </div>
  );
};
export default ContactCard;
