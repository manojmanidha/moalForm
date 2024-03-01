import {useState} from 'react'
import './App.css';

function App() {

  const [isOpen , setIsOpen]=useState(false)
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');


  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };


  const handleSubmit = () => {
    if (!username || !email || !dob || !phone) {
      alert('Please fill in all the fields.');
      return;
    }

    // Simple email validation (checking for the '@' symbol)
    if (!email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return;
    }

    // Simple phone number validation (checking for 10 digits)
    if (!/^\d{10}$/.test(phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    // Simple date of birth validation (checking for a future date)
    const currentDate = new Date();
    const inputDate = new Date(dob);

    if (inputDate > currentDate) {
      alert('Invalid date of birth. Please enter a valid date.');
      return;
    }

    // If all validations pass, you can perform further actions or reset the form
    alert('Form submitted successfully!');
    setUsername('');
    setEmail('');
    setDob('');
    setPhone('');
    closeModal();
  };


  return (
    <div className="modal">
      <h1>User Details Modal</h1>
      <button className='buttonForm' onClick={openModal}>Open Form</button>

      {isOpen && 
      (
        <div className="modal-content" 
        onClick={closeModal}
        >
          <div className="form" onClick={(e) => e.stopPropagation()}>
            <h1>Fill Details</h1>
            <h4 htmlFor="username">Username:</h4>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

            <h4 htmlFor="email">Email:</h4>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <h4 htmlFor="dob">Date of Birth:</h4>
            <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} />

            <h4 >Phone Number:</h4>
            <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

            <button className="submit-button" 
            onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        {/* </div> */}
      </div>)
      }

    </div>

  );
}

export default App;
