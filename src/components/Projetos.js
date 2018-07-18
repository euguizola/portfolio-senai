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
  }
  componentDidMount() {
  }
  getProjects(className) {
    return this.state.projects.map((project, i) => {
      return (
        <div className={`project ${className} ` + (i > 0 ? 'others' : 'first')} key={i} ref="projectRef" onClick={()=>{this.props.history.push(`/${project.name}`)}}>
          <div className="thumb-mask">
            <div className="thumb" style={{ backgroundImage: "url(" + project.thumbnail + ")" }}></div>
          </div>
          <h3>{project.name}</h3>
          <div className="identity">
            <span className="traco"></span>
            <h1>{project.date}</h1>
          </div>
        </div>
      )
    })
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
