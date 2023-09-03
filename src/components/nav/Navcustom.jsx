// src/components/Navbar.js
import React, { useState,useEffect,useRef } from 'react';
import { useStore } from '@nanostores/react';

import {
  AiFillGithub,
  AiOutlineStar,
  AiFillInstagram,
  AiFillCaretDown,
} from 'react-icons/ai';
import * as ReactIconsBs from 'react-icons/bs';
import {BsDiscord} from 'react-icons/bs';
import * as ReactIconsIo from 'react-icons/io';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import * as ReactIconsBi from 'react-icons/bs';
import {BiSolidDownArrow,BiSolidUpArrow} from 'react-icons/bi';
import '../../styles/global.css';
import Mobileview from './Mobileview';
import MobileNav from '../MobileNav';
import { isSolution, isPrice } from '../../store';
// import { useStore } from '@nanostores/react'
// import {$toggleAtom} from '../../store.js'

const Navcustom = () => {

  //   commented 3 lines
   const [mobileIcon, setmobileIcon] = useState(false);
  // const $isSolution = useStore(isSolution);
  // const $isPrice = useStore(isPrice);

  // const $isOpen = useStore($toggleAtom)
  // console.log($isOpen)


  const [isDropdown1Active, setDropdown1Active] = useState(false);
  const [isDropdown2Active, setDropdown2Active] = useState(false);
  const solutionButtonRef = useRef(null);
  const companyButtonRef = useRef(null);
  const solutionMenuRef = useRef(null);
  const companyMenuRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        !solutionButtonRef.current?.contains(event.target) &&
        !companyButtonRef.current?.contains(event.target) &&
        !solutionMenuRef.current?.contains(event.target) &&
        !companyMenuRef.current?.contains(event.target)
      ) {
        setDropdown1Active(false);
        setDropdown2Active(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const toggleSolution = () => {
    setDropdown1Active(!isDropdown1Active);
    setDropdown2Active(false); // Close other dropdown
  };

  const toggleCompany = () => {
    setDropdown2Active(!isDropdown2Active);
    setDropdown1Active(false); // Close other dropdown
  };

  return (
    
    <>
      <nav className="nav-custom-bg fixed w-full  p-4">
         <div className="container mx-auto flex justify-between items-center">
          <div className="flex justify-center items-center gap-10">
            <div className="flex items-center">
              <div className="text-white font-semibold text-lg mr-4">
                <a href='/'>
                <img className='rounded bg-white' width={40} height={40}
                 src="https://res.cloudinary.com/dfuwiecz0/image/upload/v1692680615/Godspeed/Gs-logo_fevvgl.png"/>
                 </a>
              </div>
              {/* Godspeed logo*/}
            </div>
            <div className="hidden md:flex space-x-4">
              <button className="text-gray-800"><a href='https://docs.godspeed.systems/docs/preface' className='hover:text-orange-500' target='_blank'>Documentation</a></button>
              <button className="text-gray-800 "><a href='/products' className='hover:text-orange-500'>Products</a></button>

              <div className="relative">
                <div
                  className="flex flex-row items-center"
                  id="dropdown-button-1"
                  onClick={toggleSolution}
                  ref={solutionButtonRef}
                  
                >
                  <button
                    className="px-2 text-gray-800 py-2 focus:outline-none hover:text-orange-500"
                  >Solution
                    {/* <a href='#' className='hover:text-orange-500'></a> */}
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5  mt-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                   {
                    isDropdown1Active? < BiSolidUpArrow/> : <BiSolidDownArrow />
                   } 
                    </svg>
                  </button>
                </div>
                {/* bg-white border border-gray-300 */}
                {/* z-20 top-full left-0 mt-4 py-2 w-60  rounded shadow */}
                  <div className="absolute  ">
                  <ul
                      id="dropdown-menu-1 w-100%"
                        className={`dropdown-menu absolute p-2 ${
                        isDropdown1Active ? 'block' : 'hidden'
                       }`}
                         ref={solutionMenuRef}
                   >
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        By Industry
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        By Usecase
                      </li>
                      
                    </ul>
                  </div>
        
              </div>

              <div className="relative">
                <div
                  className="flex flex-row items-center"
                  id="dropdown-button-2"
                  onClick={toggleCompany}
                  ref={companyButtonRef}
                  
                >
                  <button
                    className=" px-2 py-2 text-gray-800 focus:outline-none hover:text-orange-500"
                  >Company
                    {/* <a href='#' className=''></a> */}
                    
                    
                  </button>

                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" h-5 w-5 mt-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {
                        isDropdown2Active ? < BiSolidUpArrow/> : <BiSolidDownArrow />
                      }
                    
                    </svg>
                  </button>
                </div>
                {/* z-20 top-full left-0 mt-4 py-2 w-60 bg-white border border-gray-300 rounded shadow */}
                  <div className="absolute ">
                  <ul
                       id="dropdown-menu-2"
                        className={`dropdown-menu absolute bg-white border p-2 ${
                        isDropdown2Active ? 'block' : 'hidden'
                        }`}
                        ref={companyMenuRef}
                  >
                      <li className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
                        About
                      </li>
                      <li className="px-4 py-2 text-gray-800  hover:bg-gray-100 cursor-pointer">
                        Investors
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 text-gray-800  cursor-pointer">
                        Blogs
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 text-gray-800  cursor-pointer">
                        Retreat
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 text-gray-800  cursor-pointer">
                        Careers
                      </li>
                    </ul>
                  </div>

              </div>
              <button className="text-gray-800 "><a href='#' className='hover:text-orange-500'>Pricing</a></button>
              <button className="text-gray-800 "><a href='#' className='hover:text-orange-500'>For Developers</a></button>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-0">
            {/* Social Links */}

            <div className="flex justify-center items-center gap-0 mr-4 hover:bg-purple-500 hover:rounded px-4 transition duration-300">
              <a href="https://github.com/godspeedsystems" target='_blank' className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white mt-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* <AiOutlineStar /> */}
                </svg>
              </a>
              <button className="text-gray-800"><a href='https://github.com/godspeedsystems/gs-node-service' target='_blank'>star us on github</a></button>
            </div>

            <a href="https://discord.com/channels/983323669809999882/1040115247597506580" target='_blank' className="text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mt-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* <RiDiscordLine /> */}
                <BsDiscord />
              </svg>
            </a>
          </div>
          <div className="md:hidden flex flex-col border border-white-200 rounded-md p-2">
            {/* Mobile Menu Icon */}
            <button
              className="text-red"
              onClick={() => setmobileIcon((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800 border-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {mobileIcon && <MobileNav />}
      </nav>
      <hr className="border border-gray-500" />
    </>
  );
};

export default Navcustom;
