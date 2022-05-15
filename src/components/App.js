import AddContact from './AddContact';
import React,{ useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import Header from './Header';



function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  // const [contacts,setContacts] = useState([])
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contacts");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const addContactHandler = (contact)=>{
    console.log(contact)
    setContacts([...contacts, {id:uuidv4(),...contact}])
  }

  const removeContactHandler = (id) =>{
    const newContactList = contacts.filter(el=>{
      return el.id !== id
    })
    setContacts(newContactList)
  }

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  },[contacts]);

  return (
    <div className="App" >
      <Router>
        <nav style={{textAlign:'center'}}>
          <Link  className="link-success" to='/' style={{paddingRight:'10px'}}>Contact page</Link>
          <Link className="link-success" to='/add'>Add contact</Link>
        </nav>
        <Header/>
        <Routes>
          <Route path="/" element = {<ContactList contacts={contacts} getConcatId = {removeContactHandler}/>} />
          <Route path="/add" element = {<AddContact addContactHandler={addContactHandler}/>} /> 
          <Route path="/contact/:id"  element={<ContactDetails />}/> 
          {/* contact/:id it means that we are passind the id into contact link */}
          {/* <AddContact addContactHandler={addContactHandler}/> */}
          {/* <ContactList contacts={contacts} getConcatId = {removeContactHandler}/> */}
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;
