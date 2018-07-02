import React, { Component } from 'react';
import '../assets/css/App.css';
import { NavLink } from 'react-router-dom'
import iconLupa from '../assets/images/lupa-icon.svg'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div id="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 405 71.17"><g id="Camada_2" data-name="Camada 2"><g id="Camada_1-2" data-name="Camada 1"><path className="cls-1" d="M20.73,31.41,12.5,29a3.4,3.4,0,0,1-2.73-3.39c0-1.9,1.91-3.23,4.64-3.23,3.61,0,5.67,1.55,5.67,4.26V27h8.59v-.33c0-6.83-5.35-11.08-14-11.08C6.83,15.61,1.11,20,1.11,26.1c0,5,2.74,8.51,7.73,9.88l8.9,2.45a3,3,0,0,1,2.35,3.31c0,2.28-1.82,3.75-4.64,3.75-4,0-6.71-1.94-6.71-4.71v-.33H0v.33c0,6.85,6.31,11.82,15,11.82S29,48.14,29,41c0-4.39-3.24-8.15-8.24-9.58" /><path className="cls-1" d="M296.78,31.41,288.56,29a3.4,3.4,0,0,1-2.73-3.39c0-1.9,1.91-3.23,4.64-3.23,3.61,0,5.67,1.55,5.67,4.26V27h8.59v-.33c0-6.83-5.35-11.08-14-11.08-7.88,0-13.6,4.41-13.6,10.48,0,5,2.74,8.51,7.73,9.88l8.9,2.45a3,3,0,0,1,2.35,3.31c0,2.28-1.82,3.75-4.64,3.75-4,0-6.71-1.94-6.71-4.71v-.33h-8.74v.33c0,6.85,6.31,11.82,15,11.82S305,48.15,305,41c0-4.39-3.24-8.15-8.24-9.58" /><rect className="cls-1" x="155.99" y="16.26" width="8.18" height="35.68" /><path className="cls-1" d="M160.08.27a5,5,0,1,0,5,5,5,5,0,0,0-5-5" /><rect className="cls-1" x="311.71" y="16.26" width="8.18" height="35.68" /><path className="cls-1" d="M315.8.27a5,5,0,1,0,5,5,5,5,0,0,0-5-5" /><path className="cls-1" d="M179.91,29.08a5,5,0,1,0,5,5,5,5,0,0,0-5-5" /><path className="cls-1" d="M140.26,19.26l-.06,0a16.78,16.78,0,0,0-21,.18,19.23,19.23,0,0,0,0,29.41,16.77,16.77,0,0,0,21,.18l.06,0v3h8.18V16.26h-8.18ZM130.4,44.69c-5.44,0-9.86-4.75-9.86-10.59S125,23.51,130.4,23.51s9.86,4.75,9.86,10.59-4.42,10.59-9.86,10.59" /><path className="cls-1" d="M50.77,15.61c-10,0-17.91,8.12-17.91,18.49s7.86,18.49,17.91,18.49c.78,0,1.55,0,2.31-.11h.11a20,20,0,0,0,13.59-7.6l-5.12-5.12c-5.39,5.69-10.19,5.15-10.19,5.15a10.15,10.15,0,0,1-10-7.46H68.4a20,20,0,0,0,.28-3.33c0-10.36-7.87-18.49-17.91-18.49M41.46,30.77a9.55,9.55,0,0,1,18.61,0Z" /><path className="cls-1" d="M253,15.61c-10,0-17.91,8.12-17.91,18.49S242.94,52.59,253,52.59c.78,0,1.55,0,2.31-.11h.11A20,20,0,0,0,269,44.87l-5.12-5.12c-5.39,5.69-10.19,5.15-10.19,5.15a10.15,10.15,0,0,1-10-7.46h26.94a20,20,0,0,0,.28-3.33c0-10.36-7.87-18.49-17.91-18.49m-9.31,15.16a9.55,9.55,0,0,1,18.61,0Z" /><path className="cls-1" d="M354.47,16.26v3l-.06,0a16.78,16.78,0,0,0-21,.18,19.23,19.23,0,0,0,0,29.41,16.77,16.77,0,0,0,21,.18l.06,0v4.74a9.73,9.73,0,0,1-4,7.95,10.34,10.34,0,0,1-6.16,1.85s-4.81.54-10.19-5.15L329,63.45a20,20,0,0,0,13.59,7.6l.11,0c.76.07,1.53.11,2.31.11a17.58,17.58,0,0,0,13-5.59,17.83,17.83,0,0,0,4.68-12.19V16.26Zm-9.86,28.43c-5.44,0-9.86-4.75-9.86-10.59s4.42-10.59,9.86-10.59,9.86,4.75,9.86,10.59S350,44.69,344.62,44.69Z" /><path className="cls-1" d="M100.31,18.56a15.6,15.6,0,0,0-18.5.39V16.26h-8.3V51.94h8.3V32.39c0-.11,0-.23,0-.34a8.69,8.69,0,0,1,9.66-8.28,8.88,8.88,0,0,1,7.69,8.92V51.94h8.3V32.4a17,17,0,0,0-7.15-13.84" /><path className="cls-1" d="M397.85,18.56a15.6,15.6,0,0,0-18.5.39V16.26H371V51.94h8.3V32.39c0-.11,0-.23,0-.34A8.69,8.69,0,0,1,389,23.77a8.88,8.88,0,0,1,7.69,8.92V51.94H405V32.4a17,17,0,0,0-7.15-13.84" /><path className="cls-1" d="M229.32,51.29V0h-8.18V18.62l-.06,0a16.77,16.77,0,0,0-21,.18,19.23,19.23,0,0,0,0,29.41,16.78,16.78,0,0,0,21,.18l.06,0v3Zm-8.18-17.84c0,5.61-4.06,10.2-9.19,10.57h-.67c-5.45,0-9.86-4.74-9.86-10.59h0c0-5.85,4.42-10.59,9.86-10.59h.67c5.13.37,9.19,5,9.19,10.56h0Z" /></g></g></svg>
          </div>
          <nav>
            <NavLink to="/" activeClassName="current">Trabalhos<span className="selector"></span></NavLink>
            <NavLink to="/sobre" activeClassName="current">Sobre<span className="selector"></span></NavLink>
            <NavLink to="/contato" activeClassName="current">Contato<span className="selector"></span></NavLink>
            <i className="icon"><img src={iconLupa} alt="lupa icone" /></i>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
