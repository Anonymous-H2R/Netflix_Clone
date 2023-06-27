import React from 'react';
import Logo from './image/Netflix_2015_logo.svg.png'
import './layout.css'
import Unlimited from './Unlimitedmov'
import Video1 from './Video1'
import Video2 from './Video2'
import Video3 from './Video3'
import Video4 from './Video4'
import Accordion from './Accordion';




function Header(props) {
    return (
        <>
           <nav class="navbar navbar-expand-sm tv-back navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img className='logo' src={Logo} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav ">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown">English</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item text-light" href="#">Hindi</a></li>
            <li><a class="dropdown-item" href="#">Another link</a></li>
            <li><a class="dropdown-item" href="#">A third link</a></li>
          </ul>
        </li>
      </ul>
      <div>
        <button className='btn btn-outline-light mybtn'>Sign in</button>
      </div>
    </div>
  </div>
</nav>
<div className='back text-light'> 
<Unlimited/>
</div>
<Video1/>
<Video2/>
<Video3/>
<Video4/>
<Accordion/>





        </>
       
    );
}

export default Header;