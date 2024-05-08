import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false); 

  const lettersRegex = /^[A-Za-z]+$/;
  const numbersRegex = /^[0-9]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); 
    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || phoneNumber.trim() === '') {
      return; 
    }
    navigate('/just');
  };

  const handleNameChange = (e, setter) => {
    const inputValue = e.target.value;
    if (inputValue === '' || lettersRegex.test(inputValue)) {
      setter(inputValue);
    }
  };

  const handlePhoneNumberChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === '' || numbersRegex.test(inputValue)) {
      setPhoneNumber(inputValue);
    }
  };

  return (
    <div className="flex justify-center items-center top-[262px] w-[738px] h-[647] mt-[262px] ml-[314px] gap-[50px]">
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="formContainer">
          <label htmlFor="userName">
            <p className="mb-4">First name *</p>
            <input
              className={`w-[738px] h-[48px] rounded-sm  gap-4 mb-4 border-2 ${submitted && firstName.trim() === '' ? 'border-red-500' : ''}`}
              type="text"
              value={firstName}
              onChange={(e) => handleNameChange(e, setFirstName)}
            />
            {submitted && firstName.trim() === '' && <span className="text-red-500">Field is mandatory</span>}
          </label>
          <label htmlFor="lastName">
            <p className="mb-4">Last name *</p>
            <input
              className={`w-[738px] h-[48px] rounded-sm border-2 gap-4  mb-4 ${submitted && lastName.trim() === '' ? 'border-red-500' : ''}`}
              type="text"
              value={lastName}
              onChange={(e) => handleNameChange(e, setLastName)}
            />
            {submitted && lastName.trim() === '' && <span className="text-red-500">Field is mandatory</span>}
          </label>
          <label htmlFor="email">
            <p className="mb-4">Email *</p>
            <input
              className={`w-[738px] h-[48px] rounded-sm border-2  gap-4 mb-4 ${submitted && email.trim() === '' ? 'border-red-500' : ''}`}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {submitted && email.trim() === '' && <span className="text-red-500">Field is mandatory</span>}
          </label>
          <label htmlFor="phone">
            <p className="mb-4">Phone number *</p>
            <input
              className={`w-[738px] h-[48px] rounded-sm border-2 gap-4 mb-4 ${submitted && phoneNumber.trim() === '' ? 'border-red-500' : ''}`}
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            {submitted && phoneNumber.trim() === '' && <span className="text-red-500">Field is mandatory</span>}
          </label>
          <label htmlFor="notes">
            <p className="mb-4">Notes</p>
            <input
              className="w-[738px] h-[90px] rounded-sm border-2 gap-4 mb-4"
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="btn w-[738px] h-[50px] g-3  rounded-[10px] bg-[#201E1E] text-white"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
