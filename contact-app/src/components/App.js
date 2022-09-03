import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import instance from "../api/contacts";
import { nanoid } from "nanoid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import DeleteContact from "./DeleteContact";
import EditContact from "./EditContact";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContacts = async (contact) => {
    const request = {
      id: nanoid(),
      ...contact,
    };
    const response = await instance.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  const delContact = async (id) => {
    instance.delete(`/contacts/${id}`);
    const newContacts = contacts.filter((contact) => {
      return contact.id != id;
    });
    setContacts(newContacts);
  };

  const updateContact = async (id, newData) => {
    const res = await instance.put(`/contacts/${id}`, newData);
    let newContacts = contacts;
    for (let i = 0; i < newContacts.length; i++) {
      const element = newContacts[i];
      if (element.id == id) {
        newContacts[i] = res.data;
      }
    }
    setContacts([...newContacts]);
  };

  //Retriev contacts
  const retrieveContacts = async () => {
    const response = await instance.get("/contacts");
    return response.data;
  };

  useEffect(() => {
    const getAllContact = async () => {
      const AllContacts = await retrieveContacts();
      if (AllContacts) {
        setContacts(AllContacts);
      }
    };
    getAllContact();
  }, []);

  // useEffect(() => {

  // }, [contacts]);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ContactList contacts={contacts} delContact={delContact} />
            }
          />
          <Route
            path="/add"
            exact
            element={<AddContact addContacts={addContacts} />}
          />
          <Route
            path="contact/:id"
            exact
            element={<ContactDetail contacts={contacts} />}
          />
          <Route
            path="delete/:id"
            exact
            element={
              <DeleteContact delContact={delContact} contacts={contacts} />
            }
          />
          <Route
            path="edit/:id"
            exact
            element={
              <EditContact updateContact={updateContact} contacts={contacts} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
