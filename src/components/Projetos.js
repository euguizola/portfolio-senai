import React, { Component } from 'react';
import '../assets/css/App.css';
import '../assets/css/Projects.css';
import '../assets/css/ProjectsShow.css';
import '../assets/css/Sobre.css';
import Header from './Header';

import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import { Back } from 'gsap';


import projects from './Projects'

class Projetos extends Component {
  constructor() {
    super();
    this.state = {
      scrolling: false,
      active: 0,
      slides: {},
      projects: projects
    }
    this.getProjects = this.getProjects.bind(this)
    this.shuffle = this.shuffle.bind(this)
    this.setupAnimations = this.setupAnimations.bind(this)
  }

  componentWillMount() {
    this.setState({ projects: this.shuffle(this.state.projects) })
  }

  componentDidMount() {
    this.setupAnimations()
  }

  getProjects(className) {
    let second = true
    let impar = false
    let width = 100
    let situations = []
    return this.state.projects.map((project, i) => {
      second = !second
      if (!second) {
        if (i === (this.state.projects.length - 1) && (this.state.projects.length % 2) != 0) {
          width = 100
          impar = true
        } else {
          let math = Math.floor(Math.random() * (3 - 0) + 1)
          while (situations[situations.length - 1] === math) {
            math = Math.floor(Math.random() * (3 - 0) + 1)
          }
          situations.push(math)
          switch (math) {
            case 1:
              width = 50
              break;
            case 2:
              width = 70
              break;
            case 3:
              width = 30
              break;
          }
        }
      } else {
        width = 100 - width
      }
      return (
        <div style={{ width: `${width}%` }} className={`project ${className} ` + (second ? 'second' : 'first') + (impar ? ' impar' : '')} key={i} ref="projectRef" onClick={() => { this.props.history.push(`/${project.name}`) }}>
          <div className="thumb-mask">
            <img src={project.thumbnail} alt={project.name} className="bg" />
            <img src={project.logo} alt={project.name} className="logo" />
          </div>
          <div className="identity">
            <span className="traco"></span>
            <h1>{project.date}</h1>
            <h2>{project.name}</h2>
          </div>
        </div>
      )
    })
  }

  setupAnimations() {
    document.querySelectorAll('.project').forEach(p => {
      if (!p.classList.contains('impar')) {
        p.addEventListener('mouseover', e => {
          if (p.classList.contains('first')) {
            p.nextSibling.style.width = '30%'
          } else {
            p.previousSibling.style.width = '30%'
          }
          p.style.width = '70%'
        })
      }
    })
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }



  render() {
    return (
      <div className="app" id="black">
        <Header voltar={false}></Header>
        <div className="container" id="content">
          <div id="jobs">
            <h2>projetos</h2>
            <div id="projects">
              {this.getProjects('')}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projetos;
