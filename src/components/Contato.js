import React, { Component } from 'react';
import '../assets/css/App.css';
import '../assets/css/Projects.css';
import '../assets/css/Sobre.css';
import Header from './Header';
import SimpleMap from './SimpleMap';

import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import { Back } from 'gsap';

class Contato extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className="app" id="black">
        <Header voltar={true}></Header>
        <div className="container contact" id="content">
          <div id="about">
            <h2>contato</h2>
            <ul>
              <li>
                <span>telefone</span>
                (11) 3273-5000
              </li>
              <li>
                <span>endereço</span>
                Alameda Barão de Limeira, 539 - Santa Cecilia, São Paulo - SP
                  </li>
              <li>
                <span>cep</span> 01202-001
                  </li>
            </ul>
          </div>
          <div id="map">
            <SimpleMap></SimpleMap>
          </div>
        </div>
      </div>
    );
  }
}

export default Contato;
