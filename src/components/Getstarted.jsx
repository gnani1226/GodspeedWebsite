import React, { useState, useEffect } from 'react';
import { AiFillBackward, AiFillCloseSquare } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
import './Reactcard.css';
import axios from 'axios';


function PopupBtn() {
  const [isOpen, setIsOpen] = useState(false);

  const [userData, setdata] = useState({
    name: "",
    contact: "",
    email: "",
    organization: "",
  });

  const handeleChange = (e) => {
    const { name, value } = e.target;
    setdata({
      ...userData,
      [name]: value,
    });
  };

  async function handleSubmit(e) {

    // try {
    //   const response = await fetch('http://localhost:3003/users/create', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(userData)
    //   });
  
    //   if (!response.ok) {
    //     throw new Error('Failed to create user');
    //   }
  
    //   const data = await response.json();
    //   console.log('New user created:', data);
    // } catch (error) {
    //   console.error('Error creating user:', error);
    // }


    //  axios.post('http://localhost:3003/users/create', userData);
     alert("Welcome to Godspeed!");
  }

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  // const handleChange = (e) => {
  //   setValue(e.target.value);
  //   // console.log(e.target.value)
  // };

  const handleDisplay = () => {
    setdisplayCal((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center gap-3">
      <button
        onClick={openPopup}
        className="bg-blue-500 text-white px-4 py-3 border-blue-500 img-round"
      >
        Get started
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black  bg-opacity-50">
          <div className="bg-white rounded p-6 md:w-1/2 lg:w-1/3">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold mb-4">
                Provide Your Information
              </h2>
              <AiFillCloseSquare onClick={closePopup} />
            </div>
            <form>
              <div className="mb-2 flex flex-col justify-center items-start">
                <label
                  className="block font-medium mb-1 text-gray-500"
                  htmlFor="name"
                >
                  Name:
                </label>
                <input
                  onChange={handeleChange}
                  className="w-full p-2 border rounded"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="mb-2 flex flex-col justify-center items-start">
                <label
                  className="block font-medium mb-1 text-gray-500"
                  htmlFor="contact"
                >
                  Contact:
                </label>
                <input
                  onChange={handeleChange}
                  className="w-full p-2 border rounded"
                  type="text"
                  id="contact"
                  name="contact"
                  required
                />
              </div>
              <div className="mb-2 flex flex-col justify-center items-start">
                <label
                  className="block font-medium mb-1 text-gray-500"
                  htmlFor="email"
                >
                  Email:
                </label>
                <input
                  onChange={handeleChange}
                  className="w-full p-2 border rounded"
                  type="text"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-2 flex flex-col justify-center items-start">
                <label
                  className="block font-medium mb-1 text-gray-500"
                  htmlFor="Organization"
                >
                  Organization:
                </label>
                <input
                  onChange={handeleChange}
                  className="w-full p-2 border rounded"
                  type="text"
                  id="organization"
                  name="organization"
                  required
                />
              </div>

              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="flex justify-between items-center gap-1">
        {/* <button className='demo-btn px-4 py-3 border-blue-500'>Get a free demo</button> */}
        <a
          href="https://calendly.com/ayush-ghai/godspeed-explotary-call?month=2023-08"
          target="_blank"
        >
          <button
            className="demo-btn px-4 py-3 border-blue-500"
            onClick={handleDisplay}
          >
            Get free demo
          </button>
        </a>
        {/* bg-black text-white px-4 py-3  custom-demo-btn */}
      </div>
    </div>
  );
}

export default PopupBtn;
