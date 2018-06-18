import React, { Component } from 'react';
import '../assets/css/App.css';
import Header from './Header';

import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import { Back } from 'gsap';

// Pictures import
import ecub from '../assets/images/projects/ecub.png'
import code from '../assets/images/projects/code.png'
import splay from '../assets/images/projects/splay.png'
import uplab from '../assets/images/projects/uplab.png'

import siteCursor from '../assets/images/cursor.svg'

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

  var projectQuantity = 0
  var totalWidth = 0
  var projectWidth = 0
  var offset = 0
  var cursor = siteCursor
    
window.addEventListener('load', ()=>{
  projectWidth = document.querySelectorAll('.project')[0].clientWidth + 40
  let t1
  let t2
  let t3
  let t4
  let t5
  let t6
  let traco
  let space
  let bottom
  let grayScaleThumb
  let timeLine1

  document.querySelector('.app').addEventListener('mousedown', (e) => {
      document.querySelector('.app').addEventListener('mousemove', horizontalNavigation)

      t1 = TweenMax.to(".project", 0.5, {"min-width":"100%", width: "100%"})
      space = TweenMax.to(".others", 0.5, {transform: "translateX(-10%)"})
      t2 = TweenMax.to(".thumb-mask", 0.85, {width: "70%"})
      grayScaleThumb = TweenMax.to(".thumb-mask", 0.3, {filter: "grayscale(100%) brightness(1.2)"})
      t3 = TweenMax.to(".thumb", 0.5, {opacity: 0.3})
      t4 = TweenMax.to(".identity", 0.5, {opacity: 1})
      t5 = TweenMax.to(".identity h1", 0.8, {transform:"translateX(0)", delay: 0.2})
      t6 = TweenMax.to(".identity h2", 0.8, {transform:"translateY(0)", delay: 0.2})
      traco = TweenMax.to(".traco", 1.5, {transform:"scale(1,1)"})
      bottom = TweenMax.to(".bottom", 0.3, {opacity: 0})
      document.documentElement.style.cursor = 'url('+cursor+') 64 64, auto';
      
      timeLine1 = new TimelineMax()
  })

  document.querySelector('.app').addEventListener('mouseup', (e) => {
      document.querySelector('.app').removeEventListener("mousemove", horizontalNavigation)
          let last
          let maior
          let projects = document.querySelectorAll('.project')
          for (let i = 0 ; i < projects.length ; i++) {
              this.setState({active: i})
              if((projects[i].offsetLeft + 10) * -1 < offset) {
                  offset = projects[i].offsetLeft * -1
                  this.setState({active: i})
                  console.log(i)
                  i = projects.length + 1
              }
          }
          document.querySelector('#projects').style.transform = "translateX("+offset+"px)"
      t1.reverse()
      t2 = TweenMax.to(".thumb-mask", 0.85, {width: "100%"})
      t3.reverse()
      t4.reverse()
      t5.reverse()
      t6.reverse()
      space.reverse()
      grayScaleThumb.reverse()
      traco = TweenMax.to(".traco", 1.5, {transform:"scale(0,1)"})
      bottom.reverse()
  })

  function horizontalNavigation(e) {

      totalWidth = 0
      projectQuantity = 0

      document.querySelectorAll('.project').forEach(project => {
          // projectWidth = project.clientWidth + 40
          totalWidth += projectWidth
          projectQuantity++
      })

      // let percentMouse = e.pageX / document.querySelector('body').clientWidth
      let mouseScreen = e.movementX * projectQuantity
      // offset = percentMouse / 100 * totalWidth - percentMouse / 200 * document.querySelector('body').clientWidth
      if(offset + mouseScreen < 0 && offset + mouseScreen > (totalWidth * -1) + projectWidth){
          offset += mouseScreen 
      }

      let bg = (offset / 100) * -1

      document.querySelector('#projects').style.transform = "translateX("+offset+"px)"
      document.querySelector('.app').style.backgroundPosition = +bg+"% center"
  }

})

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
