import React, { Component } from 'react';
import '../assets/css/App.css';
import Header from './Header';

// Magic
import '../assets/magic'

// Pictures import
import ecub from '../assets/images/projects/ecub.png'
import code from '../assets/images/projects/code.png'
import splay from '../assets/images/projects/splay.png'
import uplab from '../assets/images/projects/uplab.png'

class App extends Component {
  constructor() {
    super();
    this.state = {
      active: 0,
      projects: [
        {
          name: "code[xp]",
          picture: code,
          type: "Identidade Visual",
          date: "2016"
        },
        {
          name: "uplab",
          picture: uplab,
          type: "Identidade Visual",
          date: "2017"
        },
        {
          name: "s.play",
          picture: splay,
          type: "Identidade Visual",
          date: "2017"
        },
        {
          name: "e.cub",
          picture: ecub,
          type: "Identidade Visual",
          date: "2016"
        },
      ]
    }
  }
  render() {
    return (
      <div className="app">
        <Header></Header>
        <div className="container">
          <div id="projects">
            {this.state.projects.map((project, i) => {
              return (
              <div className={"project "+(i > 0 ? 'others' : 'first')}>
                <div className="thumb-mask">
                  <div className="white-backgroud"></div>
                  <div className="thumb" style={{backgroundImage: "url("+project.picture+")"}}></div>
                </div>
                <div className="identity">
                  <span className="traco"></span>
                  <h1>{i+1}</h1>  
                  <h2>{project.name}</h2>
                </div> 
              </div>
              )
            })}
          </div>
          <div className="bottom">
            <div className="about-project">
              <span className="type">{this.state.projects[this.state.active].type}</span> .
              <span className="when"> {this.state.projects[this.state.active].date}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
