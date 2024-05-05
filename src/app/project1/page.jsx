"use client"
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const InfiniteTextAnimation = () => {
  const textRefs = useRef([]);
  const texts = ["Text 1", "Text 2", "Text 3"];
  let currentIndex = 0;

  useEffect(() => {
    const animateText = () => {
      gsap.to(textRefs.current[currentIndex], {
        duration: 1, // Duration of animation
        x: '-100%', // Slide out to the left
        onComplete: () => {
          gsap.set(textRefs.current[currentIndex], { x: '100%' }); // Reset position
          currentIndex = (currentIndex + 1) % texts.length;
          gsap.to(textRefs.current[currentIndex], {
            duration: 1, // Duration of animation
            x: '0%', // Slide in from the right
            onComplete: animateText // Repeat animation
          });
        }
      });
    };

    animateText(); // Start the animation
  }, []); // Run once on component mount

  return (
    <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '24px' }}>
      {texts.map((text, index) => (
        <div
          key={index}
          ref={(el) => (textRefs.current[index] = el)}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', textAlign: 'center' }}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default InfiniteTextAnimation;
