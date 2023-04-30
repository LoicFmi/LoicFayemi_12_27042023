import React from 'react';
import { Link } from 'react-router-dom';
import meditation from '../assets/svg/meditation.svg';
import swiming from '../assets/svg/swiming.svg';
import biking from '../assets/svg/biking.svg';
import fitness from '../assets/svg/fitness.svg';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="sidebar__nav">
        <Link to="#">
          <img src={meditation} alt="meditation"></img>
        </Link>
        <Link to="#">
          <img src={swiming} alt="swiming"></img>
        </Link>
        <Link to="#">
          <img src={biking} alt="biking"></img>
        </Link>
        <Link to="#">
          <img src={fitness} alt="fitness"></img>
        </Link>
      </nav>
      <p className="sidebar__copyright">Copyright, SportSee 2020</p>
    </div>
  );
}
