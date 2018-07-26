import React, { Component } from 'react';
import '../assets/css/App.css';
import '../assets/css/Projects.css';
import Header from './Header';
import { Link } from 'react-router-dom'

import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import { Back } from 'gsap';

import projects from './Projects'

import leftArrow from '../assets/images/arrow-left.png'
import rightArrow from '../assets/images/arrow-right.png'

class App extends Component {
  constructor() {
    super();
    this.state = {
      active: 0,
      willActive: 0,
      slides: {},
      projectWidth: 0,
      totalWidth: 0,
      offset: 0,
      scrollingTouch: false,
      inClone: false,
      tweens: [],
      projects: projects,
      randomProjects: [],
      slidesInterval: {},
      touchLastX: null,
      touchCurrentX: null
    }
    this.setupAnimations = this.setupAnimations.bind(this)
    this.slide = this.slide.bind(this)
    this.getProjects = this.getProjects.bind(this)
    this.setRandomProjects = this.setRandomProjects.bind(this)
    this.setupTouch = this.setupTouch.bind(this)
    this.touchMove = this.touchMove.bind(this)
    this.touchStart = this.touchStart.bind(this)
    this.touchEnd = this.touchEnd.bind(this)
    this.projectClicked = this.projectClicked.bind(this)
    this.previousProject = this.previousProject.bind(this)
    this.nextProject = this.nextProject.bind(this)
    this.projectNavigationAnimation = this.projectNavigationAnimation.bind(this)
  }

  setupAnimations() {
    this.setState({ projectWidth: document.querySelectorAll('.project')[0].clientWidth + 40 })
    // new TweenMax(this.refs.timeRef, 3.5, { width: '100%', delay: 0.5 })
    this.setState({ slidesInterval: setInterval(this.slide, 4000) })
  }

  slide() {
    // new TweenMax(this.refs.timeRef, 0.5, { width: '0%' })
    // new TweenMax(this.refs.timeRef, 3.5, { width: '100%', delay: 0.5 })
    let ac = this.state.active
    if (!this.state.scrollingTouch) {
      if (this.state.active === this.state.randomProjects.length - 1) {
        ac = 0
      } else {
        ++ac
      }
      this.projectNavigationAnimation(ac)
    }
  }

  touchMove(e) {
    if (this.state.scrollingTouch) {
      if (e.changedTouches) {
        this.setState({ touchCurrentX: e.changedTouches[0].clientX })
      } else {
        this.setState({ touchCurrentX: e.clientX })
      }
      let moveX = this.state.offset
      if (this.state.touchCurrentX < (this.state.projectWidth / 2) && this.state.active < this.state.randomProjects.length - 1) {
        moveX = this.state.offset - this.state.projectWidth / 2
      } else if (this.state.active > 0 && this.state.touchCurrentX > (this.state.projectWidth / 2)) {
        moveX = this.state.offset + this.state.projectWidth / 2
      }
      this.refs.projectsRef.style.transform = `translateX(${moveX}px)`
    }
  }

  touchStart(e) {
    clearInterval(this.state.slidesInterval)
    if (e.changedTouches) {
      this.setState({ touchLastX: e.changedTouches[0].clientX })
    } else {
      this.setState({ touchLastX: e.clientX })
    }
    this.setState({ scrollingTouch: true })
  }

  touchEnd(e) {
    let ac = this.state.active
    if (this.state.touchLastX > this.state.touchCurrentX) {
      if (this.state.active < this.state.randomProjects.length - 1) {
        ++ac;
      }
    } else if (this.state.touchLastX < this.state.touchCurrentX) {
      if (this.state.active > 0) {
        --ac;
      }
    }
    this.projectNavigationAnimation(ac)
    this.setupAnimations()
    setTimeout(() => {
      this.setState({ scrollingTouch: false })
    }, 100)
  }

  setupTouch() {
    document.querySelector('#content').addEventListener('touchmove', this.touchMove)
    document.querySelector('#content').addEventListener('touchstart', this.touchStart)
    document.querySelector('#content').addEventListener('touchend', this.touchEnd)
  }

  projectNavigationAnimation(ac) {
    this.setState({ active: ac })
    let projects = document.querySelectorAll('.project')
    new TweenMax(this.refs.aboutRef, 0.5, { marginTop: '150px' })
    let offValue = projects[ac].offsetLeft - projects[0].offsetLeft
    this.setState({ offset: offValue * -1 })
    new TweenMax(this.refs.aboutRef, 0.5, { marginTop: '0px', delay: 0.6 })
    this.refs.projectsRef.style.transform = `translateX(${this.state.offset}px)`
    let bg = (this.state.active * 100) / (this.state.randomProjects.length)
    document.querySelector('.app').style.backgroundPosition = +bg + "% center"
    this.setState({ scrollingTouch: false })
  }

  componentDidMount() {
    this.setupAnimations()
    this.setupTouch()
    document.querySelectorAll('.arrow.left').forEach(b => {
      b.addEventListener('click',this.previousProject)
    })
    document.querySelectorAll('.arrow.right').forEach(b => {
      b.addEventListener('click',this.nextProject)
    })
  }

  componentWillMount() {
    this.setRandomProjects()
  }

  componentWillUnmount() {
    clearInterval(this.state.slidesInterval)
    document.querySelector('#content').removeEventListener('touchmove', this.touchMove)
    document.querySelector('#content').removeEventListener('touchstart', this.touchStart)
    document.querySelector('#content').removeEventListener('touchend', this.touchEnd)
  }

  projectClicked(p) {
    if (!this.state.scrollingTouch) {
      this.props.history.push(`/${p.name}`)
    }
  }

  nextProject(e) {
    e.stopPropagation()
    e.preventDefault()
    if (this.state.active < this.state.randomProjects.length - 1 && !this.state.scrollingTouch) {
      clearInterval(this.state.slidesInterval)
      this.setState({
        scrollingTouch: true,
      })
      // this.setState({ active: this.state.active + 1 })
      this.projectNavigationAnimation(this.state.active + 1)
      this.setupAnimations()
    }
  }

  previousProject(e) {
    e.stopPropagation()
    e.preventDefault()
    if (this.state.active > 0 && !this.state.scrollingTouch) {
      clearInterval(this.state.slidesInterval)
      // this.setState({ active: this.state.active - 1 })
      this.setState({
        scrollingTouch: true,
      })
      this.projectNavigationAnimation(this.state.active - 1)
      this.setupAnimations()
    }
  }

  getProjects(className) {
    return this.state.randomProjects.map((project, i) => {
      return (
        <div className={`project ${className} ` + (i > 0 ? 'others' : 'first')} key={i} ref="projectRef">
          {
            i > 0 ? <button className="arrow left" onClick={this.previousProject}>
              <img src={leftArrow} />
            </button> : ''
          }
          <div className="thumb-mask">
            <div className="white-backgroud"></div>
            <div className="thumb" style={{ backgroundImage: "url(" + project.picture + ")" }}>
              <img src={project.logo} alt={project.name} className="logo" />
            </div>
          </div>
          <div className="identity">
            <span className="traco"></span>
            <h1>{i + 1}</h1>
            <h2>{project.name}</h2>
          </div>
          {
            i < this.state.randomProjects.length - 1 ? <button className="arrow right">
              <img src={rightArrow} />
            </button> : ''
          }
        </div>
      )
    })
  }

  setRandomProjects() {
    let randoms = []
    for (let i = 0; i < 5; i++) {
      let math = Math.floor(Math.random() * this.state.projects.length)
      while (randoms.includes(this.state.projects[math])) {
        math = Math.floor(Math.random() * this.state.projects.length)
      }
      randoms.push(this.state.projects[math])
    }
    this.setState({ randomProjects: randoms })
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
                <span className="type">{this.state.randomProjects[this.state.active].type}</span> &nbsp;&nbsp;.&nbsp;&nbsp;
              <span className="when"> {this.state.randomProjects[this.state.active].date}</span>
              </div>
            </div>
            <div className="slide">
              {/* <div>
                <span className="current">{this.state.active + 1}</span>
                <span className="bar" ref="barRef">
                  <span className="time" ref="timeRef"></span>
                </span>
                <span className="total">{this.state.randomProjects.length}</span>
              </div> */}
              <Link to={'/projetos'}><span id="action"><span>+</span> projetos</span></Link>
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
