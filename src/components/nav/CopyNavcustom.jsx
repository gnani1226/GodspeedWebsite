// src/components/Navbar.js
import React, { useState,useEffect,useRef } from 'react';
import { useStore } from '@nanostores/react';

import {
  AiFillGithub,
  AiOutlineStar,
  AiFillInstagram,
  AiFillCaretDown,
} from 'react-icons/ai';
import { BiSolidUpArrow } from 'react-icons/bi';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import {RiDiscordLine} from 'react-icons/ri'
import '../../styles/global.css';
import Mobileview from './Mobileview';
import { isSolution, isPrice } from '../../store';
// import { useStore } from '@nanostores/react'
// import {$toggleAtom} from '../../store.js'

const Navcustom = () => {

  //   commented 3 lines
  // const [mobileIcon, setmobileIcon] = useState(false);
  // const $isSolution = useStore(isSolution);
  // const $isPrice = useStore(isPrice);

  // const $isOpen = useStore($toggleAtom)
  // console.log($isOpen)

  const [isDropdown1Active, setDropdown1Active] = useState(false);
  const [isDropdown2Active, setDropdown2Active] = useState(false);
  const dropdownButton1Ref = useRef(null);
  const dropdownButton2Ref = useRef(null);
  const dropdownMenu1Ref = useRef(null);
  const dropdownMenu2Ref = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        !dropdownButton1Ref.current?.contains(event.target) &&
        !dropdownButton2Ref.current?.contains(event.target) &&
        !dropdownMenu1Ref.current?.contains(event.target) &&
        !dropdownMenu2Ref.current?.contains(event.target)
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

  const toggleDropdown1 = () => {
    setDropdown1Active(!isDropdown1Active);
    setDropdown2Active(false); // Close other dropdown
  };

  const toggleDropdown2 = () => {
    setDropdown2Active(!isDropdown2Active);
    setDropdown1Active(false); // Close other dropdown
  };




  return (
    
    <>
      <nav className="nav-custom-bg p-4 bg-opacity-100">
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
              <button className="text-white"><a href='https://docs.godspeed.systems/docs/preface' target='_blank'>Documentation</a></button>
              <button className="text-white"><a href='#'>Products</a></button>

              <div className="relative">
                <div
                  className="flex flex-row items-center"
                  onClick={() => {
                    isSolution.set(!$isSolution);
                    isPrice.set(false);
                  }}
                >
                  <button
                    className={`text-${
                      $isSolution ? 'red-500' : 'white'
                    } px-2 py-2 focus:outline-none `}
                  >
                    Solution
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`text-${
                        $isSolution ? 'red-500' : 'white'
                      } h-5 w-5 text-white mt-2`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {$isSolution ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </svg>
                  </button>
                </div>
                {$isSolution && (
                  <div className="absolute z-20 top-full left-0 mt-4 py-2 w-60 bg-white border border-gray-300 rounded shadow">
                    <ul className='w-100%'>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        By Industry
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        By Usecase
                      </li>
                      
                    </ul>
                  </div>
                )}
              </div>

              <div className="relative">
                <div
                  className="flex flex-row items-center"
                  onClick={() => {
                    isPrice.set(!isPrice.get());
                    isSolution.set(false);
                  }}
                >
                  <button
                    className={`text-${
                      $isPrice ? 'red-500' : 'white'
                    } px-2 py-2 focus:outline-none `}
                  ><a>
                    Company
                    </a>
                  </button>

                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`text-${
                        $isPrice ? 'red-500' : 'white'
                      } h-5 w-5 text-white mt-2`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {$isPrice ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </svg>
                  </button>
                </div>

                {$isPrice && (
                  <div className="absolute z-20 top-full left-0 mt-4 py-2 w-60 bg-white border border-gray-300 rounded shadow">
                    <ul>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        About
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Investors
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Blogs
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Retreat
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Careers
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <button className="text-white"><a href='#'>Pricing</a></button>
              <button className="text-white"><a href='#'>For Developers</a></button>
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
                  <AiOutlineStar />
                </svg>
              </a>
              <button className="text-white"><a href='https://github.com/godspeedsystems/gs-node-service' target='_blank'>star us on github</a></button>
            </div>

            <a href="https://discord.com/channels/983323669809999882/1040115247597506580" target='_blank' className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white mt-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <RiDiscordLine />
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
                className="h-6 w-6 text-white"
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
        {mobileIcon && <Mobileview />}
      </nav>
      <hr className="border border-gray-500" />
    </>
  );
};

export default Navcustom;
