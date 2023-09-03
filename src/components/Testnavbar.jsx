import React, { useState, useEffect, useRef } from 'react';
import {
  AiFillGithub,
  AiOutlineStar,
  AiFillInstagram,
  AiFillCaretDown,
} from 'react-icons/ai';
import { BiSolidUpArrow } from 'react-icons/bi';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { RiDiscordLine } from 'react-icons/ri';
import './Testnavcss.css'

const Testnavbar = () => {
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
    <nav className="flex items-center justify-between bg-gray-800 text-white p-4">
      <div className="flex items-center space-x-4">
      <div className="flex items-center">
              <div className="text-white font-semibold text-lg mr-4">
                <a href='/'>
                <img className='rounded bg-white' width={40} height={40}
                 src="https://res.cloudinary.com/dfuwiecz0/image/upload/v1692680615/Godspeed/Gs-logo_fevvgl.png"/>
                 </a>
              </div>
              {/* Godspeed logo*/}
            </div>
        {/* <img
          src="https://res.cloudinary.com/dfuwiecz0/image/upload/v1692680615/Godspeed/Gs-logo_fevvgl.png"
          alt="Logo"
          className="w-8 h-8"
        /> */}

        <div className="hidden md:flex space-x-4">
              <button className="text-white"><a href='https://docs.godspeed.systems/docs/preface' target='_blank'>Documentation</a></button>
              <button className="text-white"><a href='#'>Products</a></button>

              <div className="relative">
                <div
                  className="flex flex-row items-center"
                >
                  <button
                    onClick={toggleDropdown1}
                    ref={dropdownButton1Ref}
                    className="hover:text-gray-300"
                  >
                    Solution
                  </button>
                </div>
                  <div className="absolute z-20 top-full left-0 mt-4 py-2 w-60 bg-white border border-gray-300 rounded shadow">

                    <ul
                        id="dropdown-menu-1"
                        className={`dropdown-menu absolute bg-white border p-2 w-100% ${
                          isDropdown1Active ? 'block' : 'hidden'
                        }`}
                        ref={dropdownMenu1Ref}
                      >
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 1</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 2</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 1</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 2</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 1</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 2</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 1</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 2</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 1</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 2</li>
                      </ul>
                  </div>
                
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
                    className="
                     px-2 py-2 focus:outline-none"
                     id="dropdown-button-2"
                     onClick={toggleDropdown2}
                      ref={dropdownButton2Ref}
                  ><a>
                    Company
                    </a>
                  </button>

                </div>
                  <div className="absolute z-20 top-full left-0 mt-4 py-2 w-60 bg-white border border-gray-300 rounded shadow">
                    <ul
                        id="dropdown-menu-2"
                        className={`dropdown-menu absolute bg-white border p-2 w-100% ${
                          isDropdown2Active ? 'block' : 'hidden'
                        }`}
                        ref={dropdownMenu2Ref}
                      >
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 1</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 2</li>
                      </ul>
                  </div>
        
              </div>
              <button className="text-white"><a href='#'>Pricing</a></button>
              <button className="text-white"><a href='#'>For Developers</a></button>
            </div>    
      </div>

          {/* social links */}
      <div className="flex space-x-4">
        <a href="#">
          <svg
            className="w-6 h-6 text-white hover:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <AiOutlineStar />
          </svg>
        </a>

        <a href="#">
          <svg
            className="w-6 h-6 text-white hover:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <RiDiscordLine />
          </svg>
        </a>

        <a href="#">
          <svg
            className="w-6 h-6 text-white hover:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <RiDiscordLine />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Testnavbar;


 {/* <button
            id="dropdown-button-1"
            onClick={toggleDropdown1}
            ref={dropdownButton1Ref}
            className="hover:text-gray-300"
          >
            Dropdown 1
          </button>
          <ul
            id="dropdown-menu-1"
            className={`dropdown-menu absolute bg-white border p-2 ${
              isDropdown1Active ? 'block' : 'hidden'
            }`}
            ref={dropdownMenu1Ref}
          >
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>

          <button
            id="dropdown-button-2"
            onClick={toggleDropdown2}
            ref={dropdownButton2Ref}
            className="hover:text-gray-300"
          >
            Dropdown 2
          </button>
          <ul
            id="dropdown-menu-2"
            className={`dropdown-menu absolute bg-white border p-2 ${
              isDropdown2Active ? 'block' : 'hidden'
            }`}
            ref={dropdownMenu2Ref}
          >
            <li>Item 1</li>
            <li>Item 2</li>
          </ul> */}




// import React, { useState, useEffect, useRef } from 'react';

// const Testnavbar = () => {
//   const [isDropdownActive, setDropdownActive] = useState(false);
//   const dropdownButtonRef = useRef(null);
//   const dropdownMenuRef = useRef(null);

//   useEffect(() => {
//     const handleDocumentClick = (event) => {
//       if (
//         !dropdownButtonRef.current?.contains(event.target) &&
//         !dropdownMenuRef.current?.contains(event.target)
//       ) {
//         setDropdownActive(false);
//       }
//     };

//     document.addEventListener('click', handleDocumentClick);

//     return () => {
//       document.removeEventListener('click', handleDocumentClick);
//     };
//   }, []);

//   const toggleDropdown = () => {
//     setDropdownActive(!isDropdownActive);
//   };

//   return (
//     <nav className="relative">
//       <button
//         id="dropdown-button"
//         onClick={toggleDropdown}
//         ref={dropdownButtonRef}
//         className="p-2 border rounded bg-gray-300 hover:bg-gray-400"
//       >
//         Toggle Dropdown
//       </button>
//       <ul
//         id="dropdown-menu"
//         className={`dropdown-menu absolute bg-white border p-2 ${
//           isDropdownActive ? 'block' : 'hidden'
//         }`}
//         ref={dropdownMenuRef}
//       >
//         <li>Item 1</li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//       </ul>
//     </nav>
//   );
// };

// export default Testnavbar;

// <!-- ---
// import './Testnavcss.css'
// ---

// <nav class="navbar">
//   <button id="dropdown-button">Toggle Dropdown</button>
//   <ul id="dropdown-menu" class="dropdown-menu">
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
//   </ul>
// </nav>

// <script>
// const dropdownButton = document.getElementById("dropdown-button");
// const dropdownMenu = document.getElementById("dropdown-menu");
// const navbar = document.querySelector(".navbar");

// // Toggle the active class on the navbar to control dropdown visibility
// dropdownButton.addEventListener("click", () => {
//   navbar.classList.toggle("active");
// });

// // Close the dropdown when clicking outside of it
// document.addEventListener("click", (event) => {
//   if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
//     navbar.classList.remove("active");
//   }
// });

// </script> -->
