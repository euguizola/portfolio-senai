import React, { Component } from 'react'
import '../../../assets/css/App.css'
import Header from '../../Header'

// Pictures import
import Image1 from './1.jpg'
import Image2 from './2.jpg'
import Image3 from './3.jpg'
import Image4 from './4.jpg'

class Infocast extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <div className="app" id="portfolio">
        <Header></Header>
        <div className="container" id="about">
          <div id="info">
            <h2>Infocast</h2>
            <p>Identidade Visual - Design Digital</p>
          </div>
        </div>
        <div className="container" id="images">
          <img src={Image1} alt="Primeira imagem" />
          <img src={Image2} alt="Primeira imagem" />
          <img src={Image3} alt="Primeira imagem" />
          <img src={Image4} alt="Primeira imagem" />
        </div>
      </div>
    );
  }
}

export default Infocast;
