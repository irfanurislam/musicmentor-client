import React, { useState } from 'react';
import PropTypes from "prop-types";
import './video.css'
const ShowVideo = () => {


  ShowVideo.PropTypes = {
    embedId: PropTypes.string.isRequired
  }

  return (
   <div className='mt-20 mb-20 font-bold'>
    <div className='text-center'>
      <p className='text-xl text-pink-700 mb-2'> Our Media</p>
      <h2 className="text-2xl font-bold mb-4">
        See what our students can do
      </h2>
    </div>
    <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/M9VKJwQ2SXY?si=Tzixlr4vZ4EvjAzn"`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    
    />
  </div>

   </div>
  );
}


export default ShowVideo;