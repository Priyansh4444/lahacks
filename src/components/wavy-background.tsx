"use client";
import React from 'react';

function Background({ children }: { children: React.ReactNode }){
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <video autoPlay loop muted style={{
        position: 'absolute',
        width: '100%',
        objectFit: 'cover',
        left: '50%',
        top: '50%',
        height: '100%',
        transform: 'translate(-50%, -50%)',
        zIndex: '-1', // Ensure video is in the background
      }}>
        <source src="video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      {children}
    </div>
  );
}

export default Background;
