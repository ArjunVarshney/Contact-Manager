import { useNavigate, useParams } from "react-router-dom";

const EditContact = (props) => {
  let state = {
    name: "",
    email: "",
  };
  let contact;
  let { id } = useParams();
  const navigate = useNavigate();
  for (let i = 0; i < props.contacts.length; i++) {
    const element = props.contacts[i];
    if (element.id == id) {
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
    <div className="ui container">
      <div className="ui segment">
        <h3 className="ui header">Edit Contacts</h3>
        <form
          className="ui form"
          onSubmit={(e) => {
            e.preventDefault();
            if (state.name == "") {
              state.name = contact.name;
            }
            if (state.email == "") {
              state.email = contact.email;
            }
            props.updateContact(contact.id, { ...state, id: id });
            navigate("/");
          }}
        >
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder={contact.name}
              onChange={(e) => {
                state.name = e.target.value;
              }}
            ></input>
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder={contact.email}
              onChange={(e) => {
                state.email = e.target.value;
              }}
            ></input>
          </div>
          <button className="ui button green" type="submit">
            Done
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
