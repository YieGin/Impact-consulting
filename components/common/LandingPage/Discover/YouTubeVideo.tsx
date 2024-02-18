'use client'
import Image from "next/image";
import { useState } from "react";
import { FaYoutube } from "react-icons/fa";

type SectionProps = {
    videoId?: string;
    placeholder?: any;
  };
  

const YouTubeVideo:React.FC<SectionProps> = ({ videoId, placeholder }) => {
    const [showVideo, setShowVideo] = useState(false);
  
    const handleClick = () => {
      setShowVideo(true);
    };
  
    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  
    return (
      <div className="video-container relative">
        {!showVideo && (
          <div className="flex items-center justify-center relative">
            <Image 
              src={placeholder} 
              className="w-full h-[400px] object-cover" 
              alt="Video Placeholder"
            />
            <FaYoutube onClick={handleClick} className="text-red-600 absolute md:text-[60px] xs:text-[30px] sm:text-[40px] cursor-pointer" />
          </div>
        )}
  
        {showVideo && (
          <iframe
            className="w-full h-[400px] object-cover"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    );
  };

  export default YouTubeVideo