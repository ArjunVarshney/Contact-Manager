import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui segment">
          <h3 className="ui header">Add Contacts</h3>
          <form
            className="ui form"
            onSubmit={(e) => {
              e.preventDefault();
              if (this.state.name == "" || this.state.email == "") {
                alert("All the fields are mandatory");
                return;
              }
              this.props.addContacts(this.state);
              this.setState({ name: "", email: "" });
            }}
          >
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
              ></input>
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              ></input>
            </div>
            <button className="ui button blue" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
