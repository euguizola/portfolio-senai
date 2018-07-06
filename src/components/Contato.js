import React, { Component } from 'react';
import '../assets/css/App.css';
import '../assets/css/Projects.css';
import '../assets/css/Sobre.css';
import Header from './Header';
import GoogleMapReact from 'google-map-react';

import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import { Back } from 'gsap';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contato extends Component {
  constructor() {
    super();
    this.state = {
      center: {
        lat: -23.5365517,
        lng: -46.6463026
      },
      zoom: 16
    }
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className="app" id="black">
        <Header voltar={true}></Header>
        <div className="container" id="contact">
          <div id="about">
            <div id="text">
              <h2>nosso . contato</h2>
              <ul>
                <li>
                  <span>nosso . telefone</span>
                  (11) 3273-5000
              </li>
                <li>
                  <span>nosso . endereço</span>
                  Alameda Barão de Limeira, 539 - Santa Cecilia, São Paulo - SP
                  </li>
                <li>
                  <span>nosso . cep</span> 01202-001
                  </li>
              </ul>
            </div>
          </div>
          <div id="map">
          </div>
        </div>
      </div>
    );
  }
}

export default Contato;
