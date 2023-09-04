import React, { useState, useEffect } from 'react';
// import './WordColorChanger.css'; // Import your CSS file
import './Reactcard.css';


const HeroheadChange = () => {
  const words = [
    {
      text: 'Airlift',
      colorClass:
        'text-transparent bg-gradient-to-r from-blue-800 to-blue-300 bg-clip-text',
      defaultColor:
        'text-transparent bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text',
        btnColor: 'image1',
    },
    {
      text: 'Your',
      colorClass:
        'text-transparent bg-gradient-to-r from-purple-800 to-purple-300 bg-clip-text',
      defaultColor:
        'text-transparent bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text',
        btnColor: 'image2',
         },
    {
      text: 'Tech',
      colorClass:
        'text-transparent bg-gradient-to-r from-orange-800 to-orange-300 bg-clip-text',
      defaultColor:
        'text-transparent bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text',
        btnColor: 'image3',
    },
    {
      text: 'Products',
      colorClass:
        'text-transparent bg-gradient-to-r from-violet-800 to-violet-300 bg-clip-text',
      defaultColor:
        'text-transparent bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text',
        btnColor: 'image4',
    },
  ];

  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className='flex '>
      {words.map((word, index) => (
        <h1
          key={index}
          className={`text-2xl md:text-8xl mx-2 mb-4 font-bold transition-colors duration-2000 font-serif ${
            index === currentColorIndex ? word.colorClass : word.defaultColor
          }`}
        >
          {word.text}
        </h1>
      ))}
      </div>
      <h6 className="mt-4 text-xl md:text-2xl mb-8 leading-10">
        Godspeed is a tech suite of tools, standards, integrations,
        abstractions, teachings and best practices, all intricately weaved
        together with behind the scenes magic.
      </h6>
      <div className='mt-12'>
        <a href="/meetsales" target="_blank">
          {/* <button class="bg-white text-gray px-4 py-3  img-round"> */}
        <button  
        className={`px-4 py-3 getStartedImg bg-white text-gray p-4 transition-colors ${words[currentColorIndex].btnColor}  duration-2000`}>
            Get started
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroheadChange;
