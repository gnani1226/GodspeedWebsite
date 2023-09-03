import React, { useState,useEffect } from 'react';
import axios from 'axios';


import '../styles/global.css';
import Marquee from 'react-fast-marquee';

const Salesteam = () => {

  const [userData, setdata] = useState({
    name: "",
    contact: "",
    email: "",
    organization: "",
  });
  const [displayerror,seterror] = useState(false);

  const handleError = (e) => {

    if(userData.name === "") {
      seterror(true);
    } 
  }

  const handeleChange = (e) => {
    const { name, value } = e.target;
    handleError();
    setdata({
      ...userData,
      [name]: value,
    });
    
  };

  async function handleSubmit(e) {
    console.log(userData);
    // axios.post('http://localhost:3003/users/create', userData);
  }


  return (
    <div className="flex flex-col justify-center items-center w-100 pt-12 pb-12">
      <div className="flex flex-col gap-3 justify-center items-center p-3">
        <h1 className="text-gray-800 text-2xl  md:text-6xl font-bold">
          Talk to our Sales team
        </h1>
        <p className="text-lg md:text-2xl text-center">
          We'll help you find the right plan and pricing for your business
        </p>
      </div>
      <div className="p-8 form-main-div flex flex-col md:flex-row justify-center items-start gap-4">
        <div className="form-div">
          <form className="p-5 form-class">
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
              {/* {
                displayerror &&
                <p className="text-red-500 text-xs italic">
                  Please enter your name
                </p>
              } */}
              {/* <small className='text-red-500'>*name should requied</small> */}
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

            <div className="flex justify-start mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                onClick={handleSubmit}
          ><a href='https://calendly.com/ayush-ghai/godspeed-explotary-call?month=2023-08'
          target='_blank'>
                Submit
                </a>
              </button>
            </div>
          </form>
        </div>
        <div className='text-main-div p-5 '>
          <h1 className='text-2xl md:text-4xl text-center leading-relaxed'>for all your problems Godspeed is the one step Solution</h1>
          <hr className='mt-8'/>
          <div className='pt-8 flex flex-col justify-center items-center'>
            <h1 className='font-bold'>Trusted by the clients</h1>
            <Marquee>
                <img className='m-3' height={100} width={100} src='https://res.cloudinary.com/dfuwiecz0/image/upload/v16927710089/Godspeed/Client%20Logos/lighthouse_hs7tv1.png' />
                <img className='m-3' height={100} width={100} src='https://res.cloudinary.com/dfuwiecz0/image/upload/v1692776461/Godspeed/Client%20Logos/moneytor_kkxsy8.png' />
                <img className='m-3' height={100} width={100} src='https://res.cloudinary.com/dfuwiecz0/image/upload/v16927764100/Godspeed/Client%20Logos/kunbah_ez9bej.png' />
                <img className='m-3' height={100} width={100} src='https://res.cloudinary.com/dfuwiecz0/image/upload/v16927764100/Godspeed/Client%20Logos/card91_tbgeio.png' />
                <img className='m-3' height={100} width={100} src='https://res.cloudinary.com/dfuwiecz0/image/upload/v1692776461/Godspeed/Client%20Logos/pinelabs_sr8vbh.png' />
            </Marquee>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Salesteam;
