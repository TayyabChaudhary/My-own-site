import React from 'react';
import './style.scss'
export default()=> {
  return (
    <div>
    <header class="header">
    <div className="container">
  <a href="" class="logo"><span className="has-text-primary">WEB</span>AGENCY</a>
  </div>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
    <li><a href="#work">HOME</a></li>
    <li><a href="#about">WE BULID WEBSITE</a></li>
    <li><a href="#careers">THAT DELIVER RESULT</a></li>
  </ul>
</header>
    </div>
  );
}
