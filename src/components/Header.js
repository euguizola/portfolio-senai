import React, { Component } from 'react'
import '../assets/css/App.css'
import { NavLink } from 'react-router-dom'
import iconLupa from '../assets/images/lupa-icon.svg'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      menuExpand: false
    }
    this.menuChange = this.menuChange.bind(this)
  }
  menuChange() {
    this.setState({menuExpand: !this.state.menuExpand})
  }
  render() {
    let voltar = this.props.voltar ? <NavLink to="/projetos" activeClassName="current" id="voltar">voltar</NavLink> : ''
    return (
      <header className="header">
        <div className="container">
          {voltar}
          <NavLink to="/" id="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295.9 52"><g id="Camada_2" data-name="Camada 2"><g id="Layer_1" data-name="Layer 1"><path className="cls-1" d="M15.14,22.95l-6-1.73a2.48,2.48,0,0,1-2-2.48c0-1.39,1.39-2.36,3.39-2.36,2.63,0,4.14,1.14,4.14,3.12v.24H21V19.5c0-5-3.91-8.09-10.2-8.09C5,11.41.81,14.63.81,19.07c0,3.65,2,6.22,5.65,7.22L13,28.07a2.22,2.22,0,0,1,1.71,2.42c0,1.66-1.33,2.74-3.39,2.74-2.89,0-4.9-1.42-4.9-3.44v-.24H0v.24c0,5,4.61,8.63,11,8.63s10.2-3.25,10.2-8.47c0-3.21-2.36-6-6-7" /><path className="cls-2" d="M216.83,22.95l-6-1.73a2.48,2.48,0,0,1-2-2.48c0-1.39,1.39-2.36,3.39-2.36,2.63,0,4.14,1.14,4.14,3.12v.24h6.28V19.5c0-5-3.91-8.09-10.2-8.09-5.76,0-9.93,3.22-9.93,7.66,0,3.65,2,6.22,5.65,7.22l6.5,1.79a2.22,2.22,0,0,1,1.71,2.42c0,1.66-1.33,2.74-3.39,2.74-2.89,0-4.9-1.42-4.9-3.44v-.24h-6.38v.24c0,5,4.61,8.63,11,8.63s10.2-3.25,10.2-8.47c0-3.21-2.36-6-6-7" /><rect className="cls-1" x="113.97" y="11.88" width="5.97" height="26.07" /><path className="cls-1" d="M117,.2a3.67,3.67,0,1,0,3.67,3.67A3.67,3.67,0,0,0,117,.2" /><rect className="cls-2" x="227.74" y="11.88" width="5.97" height="26.07" /><path className="cls-2" d="M230.73.2a3.67,3.67,0,1,0,3.67,3.67A3.67,3.67,0,0,0,230.73.2" /><path className="cls-1" d="M131.44,21.25a3.67,3.67,0,1,0,3.67,3.67,3.67,3.67,0,0,0-3.67-3.67" /><path className="cls-1" d="M102.47,14.07l0,0a12.26,12.26,0,0,0-15.34.13,14,14,0,0,0,0,21.49,12.26,12.26,0,0,0,15.34.13l0,0v2.19h6V11.88h-6Zm-7.2,18.58a7.5,7.5,0,0,1-7.2-7.74,7.22,7.22,0,1,1,14.41,0,7.5,7.5,0,0,1-7.2,7.74" /><path className="cls-1" d="M37.09,11.41A13.16,13.16,0,0,0,24,24.91,13.16,13.16,0,0,0,37.09,38.42c.57,0,1.13,0,1.69-.08h.08a14.6,14.6,0,0,0,9.93-5.55L45,29c-3.94,4.15-7.45,3.76-7.45,3.76a7.42,7.42,0,0,1-7.31-5.45H50a14.62,14.62,0,0,0,.2-2.43A13.16,13.16,0,0,0,37.09,11.41m-6.8,11.08a7,7,0,0,1,13.6,0Z" /><path className="cls-2" d="M184.84,11.41a13.16,13.16,0,0,0-13.09,13.51,13.16,13.16,0,0,0,13.09,13.51c.57,0,1.13,0,1.69-.08h.08a14.6,14.6,0,0,0,9.93-5.55L192.79,29c-3.94,4.15-7.45,3.76-7.45,3.76A7.42,7.42,0,0,1,178,27.34h19.68a14.62,14.62,0,0,0,.2-2.43,13.16,13.16,0,0,0-13.09-13.51M178,22.48a7,7,0,0,1,13.6,0Z" /><path className="cls-2" d="M259,11.88v2.19l0,0a12.26,12.26,0,0,0-15.34.13,14,14,0,0,0,0,21.49,12.26,12.26,0,0,0,15.34.13l0,0v3.46A7.11,7.11,0,0,1,256.07,45a7.55,7.55,0,0,1-4.5,1.35s-3.51.4-7.45-3.76l-3.74,3.75a14.6,14.6,0,0,0,9.93,5.55h.08c.55.05,1.12.08,1.69.08a12.84,12.84,0,0,0,9.46-4.09A13,13,0,0,0,265,39V11.88Zm-7.2,20.77a7.5,7.5,0,0,1-7.2-7.74,7.22,7.22,0,1,1,14.41,0A7.5,7.5,0,0,1,251.78,32.65Z" /><path className="cls-1" d="M73.29,13.56a11.4,11.4,0,0,0-13.52.29v-2H53.71V37.95h6.06V23.66c0-.08,0-.17,0-.25a6.35,6.35,0,0,1,7.05-6,6.49,6.49,0,0,1,5.62,6.52V37.95h6.06V23.67a12.39,12.39,0,0,0-5.22-10.11" /><path className="cls-2" d="M290.67,13.56a11.4,11.4,0,0,0-13.52.29v-2h-6.06V37.95h6.06V23.66c0-.08,0-.17,0-.25a6.35,6.35,0,0,1,7.05-6,6.49,6.49,0,0,1,5.62,6.52V37.95h6.06V23.67a12.39,12.39,0,0,0-5.22-10.11" /><path className="cls-2" d="M167.54,37.48V0h-6V13.6l0,0a12.26,12.26,0,0,0-15.34.13,14,14,0,0,0,0,21.49,12.26,12.26,0,0,0,15.34.13l0,0v2.19Zm-6-13a7.53,7.53,0,0,1-6.72,7.72h-.49a7.49,7.49,0,0,1-7.2-7.74h0a7.49,7.49,0,0,1,7.2-7.74h.49a7.53,7.53,0,0,1,6.72,7.72h0Z" /></g></g></svg>
          </NavLink>
          <button type="button" onClick={this.menuChange} className={'hamburger hamburger--collapse ' + (this.state.menuExpand ? 'is-active' : '')}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <nav className={this.state.menuExpand ? 'active' : ''}>
            <NavLink exact to="/" activeClassName="current">Inicio<span className="selector"></span></NavLink>
            <NavLink to="/projetos" activeClassName="current">Projetos<span className="selector"></span></NavLink>
            <NavLink to="/sobre" activeClassName="current">Sobre<span className="selector"></span></NavLink>
            <NavLink to="/contato" activeClassName="current">Contato<span className="selector"></span></NavLink>
            {/* <i className="icon"><img src={iconLupa} alt="lupa icone" /></i> */}
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
