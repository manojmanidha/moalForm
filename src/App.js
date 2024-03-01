// App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [usernameWarning, setUsernameWarning] = useState('');
  const [emailWarning, setEmailWarning] = useState('');
  const [dobWarning, setDobWarning] = useState('');
  const [phoneWarning, setPhoneWarning] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    clearWarnings();
  };

  const clearWarnings = () => {
    setUsernameWarning('');
    setEmailWarning('');
    setDobWarning('');
    setPhoneWarning('');
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    clearWarnings(); // Clear previous warnings

    let isValid = true;

    // Check for empty fields
    if (!username) {
      setUsernameWarning('Please fill in all the fields.');
      isValid = false;
    }

    if (!email) {
      setEmailWarning('Please fill in all the fields.');
      isValid = false;
    }

    if (!dob) {
      setDobWarning('Please fill in all the fields.');
      isValid = false;
    }

    if (!phone) {
      setPhoneWarning('Please fill in all the fields.');
      isValid = false;
    }

    if (!isValid) {
      // If any field is empty, do not submit the form
      return;
    }

    // Perform other validations...

    // If all validations pass, you can perform further actions or reset the form
    alert('Form submitted successfully!');
    setUsername('');
    setEmail('');
    setDob('');
    setPhone('');
    closeModal();
  };

  return (
    <div className='App'>
      <h1>User Details Modal</h1>
      <button className='buttonForm' onClick={openModal}>Open Form</button>

      {isOpen && (
        <div className="modal" >
          <div className="modal-content" onClick={closeModal} >
            <form className="form" onClick={(e) => e.stopPropagation()}>
              <h1>Fill Details</h1>
              <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                {usernameWarning && <p className="warning">{usernameWarning}</p>}
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {emailWarning && <p className="warning">{emailWarning}</p>}
              </div>

              <div>
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
                {dobWarning && <p className="warning">{dobWarning}</p>}
              </div>

              <div>
                <label>Phone Number:</label>
                <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                {phoneWarning && <p className="warning">{phoneWarning}</p>}
              </div>

              <button className="submit-button" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
