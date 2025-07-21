import React from 'react';
import '../styles/sidebar.css';
import SocialLinks from './SocialLinks';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';
import { RiProjectorLine } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import profileImage from '../assets/images/shayaan.jpg';

const navLinks = [
  { to: '/', label: 'Home', icon: AiOutlineHome },
  { to: '/about', label: 'About', icon: BsPerson },
  { to: '/resume', label: 'Resume', icon: CgFileDocument },
  { to: '/projects', label: 'Projects', icon: RiProjectorLine },
  { to: '/contact', label: 'Contact', icon: HiOutlineMail }
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="profile-section">
        <div className="profile-image">
          <img src={profileImage} alt="Shayaan Akram" />
        </div>
        <h2>Shayaan Akram</h2>
      </div>
      <SocialLinks />
      <nav>
        <ul>
          {navLinks.map(({ to, label, icon: Icon }) => (
            <li key={to}>
              <Link to={to} className={location.pathname === to ? 'active' : ''}>
                <Icon className="nav-icon" />
                <span className="nav-label">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
} 