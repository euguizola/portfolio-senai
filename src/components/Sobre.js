import React, { Component } from 'react';
import '../assets/css/App.css';
import '../assets/css/Projects.css';
import '../assets/css/Sobre.css';
import Header from './Header';

import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import { Back } from 'gsap';

class Sobre extends Component {
  constructor() {
    super();
    this.state = {
      scrolling: false,
      active: 0,
      slides: {},
      texts: [
        {
          title: "quem . somos",
          content: "Uma equipe de alta performance dedicada a apresentar o melhor trabalho de design no mercado."
        },
        {
          title: "nosso . conceito",
          content: "Criação de marcas com tendência, criatividade e exclusividade."
        },
        {
          title: "nossa . missão",
          content: "Trabalhar com uma comunicação visual inovadora, clara e única em nossos trabalhos."
        }
      ]
    }
    this.setupAnimations = this.setupAnimations.bind(this)
    this.scrollFunction = this.scrollFunction.bind(this)
  }
  setupAnimations() {
    TweenMax.to(".bar .time", 1, { width: "100%" })
    window.addEventListener('wheel', this.scrollFunction)
  }
  scrollFunction() {
    var barTween
    var about
    if (!this.state.scrolling) {
      this.setState({scrolling: true})
      barTween = TweenMax.to(".bar .time", 1, { width: "0%" })
      barTween = TweenMax.to(".bar .time", 1, { width: "100%", delay: 1 })
      about = TweenMax.to("#text", 0.6, { transform: "translateY(22px)", opacity: 0 })
      setTimeout(() => {
        if (this.state.active === this.state.texts.length - 1) {
          this.setState({ active: 0 })
        } else {
          this.setState({ active: this.state.active + 1 })
        }
      }, 1000)

      about = TweenMax.to("#text", 0.6, { transform: "translateY(0px)", opacity: 1, delay: 1 })
      setTimeout(() => { this.setState({scrolling: false}) }, 2000)
    }
  }
  componentDidMount() {
    this.setupAnimations()
  }
  componentWillUnmount() {
    window.removeEventListener('wheel', this.scrollFunction)
  }
  render() {
    return (
      <div className="app" id="black">
        <Header voltar={true}></Header>
        <div className="container" id="content">
          <div id="about">
            <div id="text">
              <h2>{this.state.texts[this.state.active].title}</h2>
              <p>
                {this.state.texts[this.state.active].content}
              </p>
            </div>
          </div>
          <div className="bottom">
          <div className="slide">
              <div>
              <span className="current">{this.state.active + 1}</span>
              <span className="bar">
                <span className="time"></span>
              </span>
              <span className="total">{this.state.texts.length}</span>
              </div>
              <span id="action">scroll</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sobre;
