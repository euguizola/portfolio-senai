import React, { Component } from 'react';
import '../assets/css/App.css';
import '../assets/css/Projects.css';
import Header from './Header';

import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import { Back } from 'gsap';

import projects from './Projects'

class App extends Component {
  constructor() {
    super();
    this.state = {
      active: 0,
      slides: {},
      projectWidth: 0,
      totalWidth: 0,
      offset: 0,
      scrolling: false,
      inClone: false,
      tweens: [],
      projects: projects,
      randomProjects: []
    }
    this.setupAnimations = this.setupAnimations.bind(this)
    this.slide = this.slide.bind(this)
    this.getProjects = this.getProjects.bind(this)
    this.setRandomProjects = this.setRandomProjects.bind(this)
  }

  setupAnimations() {
    this.setState({ projectWidth: document.querySelectorAll('.project')[0].clientWidth + 40 })
    document.querySelectorAll('.project').forEach(p => {
      p.addEventListener('click', () => {
        this.props.history.push(`/${this.state.randomProjects[this.state.active].name}`)
      })
    })
    new TweenMax(this.refs.timeRef, 3.5, { width: '100%', delay: 0.5 })
    setInterval(this.slide, 4000)
  }

  slide() {
    let projects = document.querySelectorAll('.project')
    new TweenMax(this.refs.timeRef, 0.5, { width: '0%' })
    new TweenMax(this.refs.timeRef, 3.5, { width: '100%', delay: 0.5 })
    new TweenMax(this.refs.aboutRef, 0.5, { marginTop: '50px' })
    if (this.state.active === this.state.randomProjects.length - 1) {
      this.setState({ active: 0 })
    } else {
      this.setState({ active: this.state.active + 1 })
    }
    this.setState({ offset: projects[this.state.active].offsetLeft * -1 })

    new TweenMax(this.refs.aboutRef, 0.5, { marginTop: '0px', delay: 0.6 })
    new TweenMax(this.refs.projectsRef, 0.5, { transform: `translateX(${this.state.offset}px)` })

    let bg = (this.state.active * 100) / (this.state.randomProjects.length)
    document.querySelector('.app').style.backgroundPosition = +bg + "% center"
  }

  componentDidMount() {
    this.setupAnimations()
  }

  componentWillMount() {
    this.setRandomProjects()
  }

  getProjects(className) {
    return this.state.randomProjects.map((project, i) => {
      return (
        <div className={`project ${className} ` + (i > 0 ? 'others' : 'first')} key={i} ref="projectRef">
          <div className="thumb-mask">
            <div className="white-backgroud"></div>
            <div className="thumb" style={{ backgroundImage: "url(" + project.picture + ")" }}></div>
          </div>
          <div className="identity">
            <span className="traco"></span>
            <h1>{i + 1}</h1>
            <h2>{project.name}</h2>
          </div>
        </div>
      )
    })
  } 

  setRandomProjects() {
    let randoms = []
    for(let i = 0 ; i  < 5 ; i++){
      let math = Math.floor(Math.random()*this.state.projects.length)
      while(randoms.includes(this.state.projects[math])) {
        math = Math.floor(Math.random()*this.state.projects.length)
      }
      randoms.push(this.state.projects[math])
    }
    this.setState({randomProjects: randoms})
  }

  render() {
    return (
      <div className="app" ref="appRef">
        <Header voltar={false}></Header>
        <div className="container" id="content">
          <div id="projects" ref="projectsRef">
            {this.getProjects('normal')}
          </div>
          <div className="bottom">
            <div className="about-overlay">
              <div className="about-project" ref="aboutRef">
                <span className="type">{this.state.projects[this.state.active].type}</span> &nbsp;&nbsp;.&nbsp;&nbsp;
              <span className="when"> {this.state.projects[this.state.active].date}</span>
              </div>
            </div>
            <div className="slide">
              <div>
                <span className="current">{this.state.active + 1}</span>
                <span className="bar" ref="barRef">
                  <span className="time" ref="timeRef"></span>
                </span>
                <span className="total">{this.state.randomProjects.length}</span>
              </div>
              {/* <span id="action">clique e arraste</span> */}
            </div>
          </div>
        </div>
        <div id="cursor-area">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.44 52" id="cursor"><g id="Camada_2" data-name="Camada 2"><g id="elementos"><circle className="cls-1 circle" cx="56.72" cy="26" r="25" /><polyline className="cls-1" points="12.02 36.61 1.41 26 12.02 15.39" /><polyline className="cls-1" points="101.41 15.39 112.02 26 101.41 36.61" /></g></g></svg>
        </div>
      </div>
    );
  }
}

export default App;
