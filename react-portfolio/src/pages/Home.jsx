import React, { useEffect, useState } from 'react';
import '../styles/home.css';
import heroImage from '../assets/images/p1.jpeg';

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Full Stack Developer", "Freelancer", "CS Student"];
  
  useEffect(() => {
    let timeout;
    const currentText = texts[textIndex];
    
    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 1200);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        }, 50);
      } else {
        setTextIndex((textIndex + 1) % texts.length);
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, textIndex]);

  return (
    <section id="hero" className="hero">
      <img src={heroImage} alt="Background" data-aos="fade-in" />
      <div className="hero-overlay"></div>
      <div className="hero-content" data-aos="fade-up" data-aos-delay="100">
        <h1>Shayaan Akram</h1>
        <p>
          I'm <span className="typed">{displayText}</span>
          <span className="typed-cursor">|</span>
        </p>
      </div>
    </section>
  );
} 