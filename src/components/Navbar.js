import React from 'react';
import logo_game from '../images/logo-game.jpeg';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { LinkComponent, SocialComponent } from '../utils/links';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-nav">
        <div className="container-fluid d-flex justify-content-around">
            <Link to="/" >
                <img src={logo_game} alt="logo" className="logo" />
            </Link>
            <div>
                <LinkComponent classLink="navbar-nav d-none d-lg-flex" />
            </div>
            <div className='d-none d-lg-flex'>
                <SocialComponent />
            </div>
            <button className='d-lg-none' style={{
                border: "none",
                background: "none"
            }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <Sidebar/>
            </button>
        </div>
    </nav>
  );
};

export default Navbar;
