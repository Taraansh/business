import React from 'react'
import { Link } from 'react-router-dom';
import logo from './logo.png';

const NavBar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/"><img src={logo} width="70" height="30" className="d-inline-block align-top" alt=""/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" aria-current="page" to="/Login">Home</Link>
          {/* <a className="nav-link" href="/">Features</a>
          <a className="nav-link" href="/">Pricing</a> */}
        </div>
      </div>
    </div>
  </nav>
  )
}

export default NavBar