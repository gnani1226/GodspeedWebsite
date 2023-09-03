import React, { useState, useEffect, useRef } from 'react';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';

const MobileNav = () => {
  const [isDropdown1Active, setDropdown1Active] = useState(false);
  const [isDropdown2Active, setDropdown2Active] = useState(false);
  const mobileNavRef = useRef(null);

  const toggleDropdown1 = () => {
    setDropdown1Active((prev) => !prev);
    setDropdown2Active(false);
  };

  const toggleDropdown2 = () => {
    setDropdown2Active((prev) => !prev);
    setDropdown1Active(false);
  };

  useEffect(() => {
    const handleBodyClick = (event) => {
      console.log(event.target);
      if (!mobileNavRef.current.contains(event.target)) {
        setDropdown1Active(false);
        setDropdown2Active(false);
      }
    };

    window.addEventListener('click', handleBodyClick);

    return () => {
      window.removeEventListener('click', handleBodyClick);
    };
  }, []);

  return (
    <div className="md:hidden bg-white p-4 relative" ref={mobileNavRef}>
      <div className="flex flex-col items-start">
        <button className="text-gray-800 mb-2">Button 1</button>
        <button className="text-gray-800 mb-2">Button 2</button>
      </div>

      <div className="w-full flex flex-col">
        <button
          className="text-gray-800 flex justify-between items-center"
          onClick={toggleDropdown1}
        >
          Dropdown 1
        </button>

        {isDropdown1Active && (
          <div className="rounded shadow p-2 z-10 flex flex-col">
            <a>
              <button className="text-gray-800">item1</button>
            </a>
            <a>
              <button className="text-gray-800">item1</button>
            </a>
          </div>
        )}
      </div>

      <div className="w-full flex flex-col">
        <button
          className="text-gray-800 flex justify-between items-center"
          onClick={toggleDropdown2}
        >
          Dropdown 2
        </button>

        {isDropdown2Active && (
          <div className="rounded shadow p-2 z-10 flex flex-col">
            <a>
              <button className="text-gray-800">item1</button>
            </a>
            <a>
              <button className="text-gray-800">item1</button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
