import React from 'react';
import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import '../styles/sociallinks.css';

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://github.com/ShayaanAkram-1122" 
         className="social-icon github" 
         target="_blank" 
         rel="noopener noreferrer" 
         title="GitHub">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/shayaan-akram/" 
         className="social-icon linkedin" 
         target="_blank" 
         rel="noopener noreferrer" 
         title="LinkedIn">
        <FaLinkedinIn />
      </a>
      <a href="https://www.facebook.com/shayaan.akramojla" 
         className="social-icon facebook" 
         target="_blank" 
         rel="noopener noreferrer" 
         title="Facebook">
        <FaFacebookF />
      </a>
      <a href="https://www.instagram.com/shayaan.akram_/" 
         className="social-icon instagram" 
         target="_blank" 
         rel="noopener noreferrer" 
         title="Instagram">
        <FaInstagram />
      </a>
      <a href="mailto:shayaanakramojla4372@gmail.com" 
         className="social-icon email" 
         title="Email">
        <MdEmail />
      </a>
    </div>
  );
} 