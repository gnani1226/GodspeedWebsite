import React, { useState } from 'react';
import './Success.css'

function SuccessStories() {
  const [videoId, setVideoId] = useState('https://www.youtube.com/watch?v=in64WNtUwBE'); // Default video ID
  const [displayTexthead, setDisplayTexthead] = useState("SEE HOW PINELABS ACHIEVED 60% PRODUCTIVUTY"); // Default text
  const [displayText, setDisplayText] = useState("Godspeed brought us significant productivity \n  gain in developing, observing observing and maintaining \n mission critical services, with quality and standards"); 

  const handleVideoChange = (newVideoId, newText) => {
    setVideoId(newVideoId);
    setDisplayText(newText);
  };

  const embedUrl = `${videoId}`;
//   https://www.youtube.com/watch?v=in64WNtUwBE
//   https://youtu.be/in64WNtUwBE?si=0awUDl0IGfMm2Rcx


  return (
    <div className='main-class bg-black min-h-screen text-white'>
        <div className='success-logo'>
            <div className="logo">
                <div className="small-yellow-light">
                </div>
                <div className="small-orange-light">
                </div>
                <div className="small-yellow">
                </div>
                <div className="small-orange">
                </div>
                <div className="yellow">
                </div>
                <div className="orange">
                </div>
             </div>
            <h1 className='success-head'>Success stories</h1>
        </div>
        <div className='btn-video-div'>
                    <div  className='images-div'>
                
                    <p className='heading1'>{displayTexthead}</p>
                    <p className='second-head'>{displayText}</p>
                    <div className="flex justify-center items-center">
                        <img style={{height:"100px",width:"100px",borderBottom:"2px solid #fff",marginLeft:"10px"}} 
                        src="https://res.cloudinary.com/dfuwiecz0/image/upload/v1692776461/Godspeed/Client%20Logos/pinelabs_sr8vbh.png" 
                        onClick={() => handleVideoChange('https://www.youtube.com/watch?v=in64WNtUwBE', "I've been using [Product Name] for a few months now, and it's truly been a game-changer. The quality and performance!")}/>

                        <img style={{height:"100px",width:"100px",borderBottom:"2px solid #fff",marginLeft:"10px"}} 
                        src="https://res.cloudinary.com/dfuwiecz0/image/upload/v1693836023/Godspeed/Designlogos/3_e0zfc8.png"  
                        onClick={() => handleVideoChange('https://www.youtube.com/watch?v=in64WNtUwBE', "Navigating through [Website Name] was a breeze. The user-friendly inteorganized content made my online shoppiI found exactly what I needed without any hassle.")}/>

                        <img style={{height:"100px",width:"100px",borderBottom:"2px solid #fff",marginLeft:"10px"}} 
                        src="https://res.cloudinary.com/dfuwiecz0/image/upload/v1692776461/Godspeed/Client%20Logos/pinelabs_sr8vbh.png"  
                        onClick={() => handleVideoChange('https://www.youtube.com/watch?v=in64WNtUwBE', "Enrolling in [Course Name] was one of the best decisions I've made. ks to this course.")}/>
                </div>
                </div>
                <div className='video-div'>
                        <iframe
                            src={embedUrl}
                            
                        ></iframe>
                        </div>
                       
        </div>
    </div>
  );
}

export default SuccessStories;