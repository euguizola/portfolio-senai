import React, { Component } from 'react';
import '../assets/css/App.css';
import logoSenai from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom'
import iconLupa from '../assets/images/lupa-icon.svg'

class Header extends Component {
  render() {
    return (
        <header className="header">
          <div className="container">
            <div id="logo">
              <img src={logoSenai} alt="SENAI Logo"></img>
            </div>
            <nav>
              <NavLink to="/" activeClassName="current">Trabalhos<span className="selector"></span></NavLink>
              <NavLink to="/sobre" activeClassName="current">Sobre<span className="selector"></span></NavLink>
              <NavLink to="/contato" activeClassName="current">Contato<span className="selector"></span></NavLink>
              <i className="icon"><img src={iconLupa} alt="lupa icone"/></i>
            </nav>
          </div>
        </header>
    );
  }
}

export default Header;
