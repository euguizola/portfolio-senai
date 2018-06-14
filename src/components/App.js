import React, { Component } from 'react';
import '../assets/css/App.css';
import Header from './Header';

// Pictures import
import ecub from '../assets/images/projects/ecub.png'
import code from '../assets/images/projects/code.png'
import splay from '../assets/images/projects/splay.png'
import uplab from '../assets/images/projects/uplab.png'

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          name: "code[xp]",
          picture: code
        },
        {
          name: "uplab",
          picture: uplab
        },
        {
          name: "s.play",
          picture: splay
        },
        {
          name: "e.cub",
          picture: ecub
        } 
      ]
    }
  }
  render() {
    return (
      <div className="app">
        <Header></Header>
        <div className="container" id="projects">
          {this.state.projects.map((project, i) => {
            return (
            <div className="project">
              <div className="thumb">
                <img src={project.picture}></img>
               </div>
            </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
