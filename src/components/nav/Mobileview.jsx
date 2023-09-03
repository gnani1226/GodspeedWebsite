import React from 'react';

const Mobileview = () => {
  return (
    <div className="flex flex-col items-end py-10 px-4 w-full text-white">
      <div className="hover:bg-blue-500 w-full flex justify-end pr-2">
        <a href="/">
          <button>Home</button>
        </a>
      </div>
      <div className="hover:bg-blue-500 w-full flex justify-end pr-2">
        <a>
          <button>About</button>
        </a>
      </div>
      <div className="hover:bg-blue-500 w-full flex justify-end pr-2">
        <a>
          <button>Contact</button>
        </a>
      </div>
    </div>
  );
};

export default Mobileview;
