import React, { Component } from 'react'
import '../../../assets/css/App.css'
import Header from '../../Header'
import ReactTooltip from 'react-tooltip'

// Pictures import
import Image1 from './1.jpg'
import Image2 from './2.jpg'
import Image3 from './3.jpg'
import Image4 from './4.jpg'

class Lumen extends Component {
  constructor() {
    super();
    this.state = {
      owners: []
    }
  }
  componentWillMount() {
    fetch('https://cors-anywhere.herokuapp.com/https://www.behance.net/v2/projects/68055903?api_key=OgcEKxgXnxNcHihcPqcTeK0dY7pAYwik')
    .then(response => {
      return response.json()
    })
    .then( result => {
      if(result.project) {
        this.setState({owners: result.project.owners})
      }
    })
  }
  render() {
    return (
      <div className="app" id="portfolio">
        <Header voltar={true}></Header>
        <div className="container" id="about">
          <div id="info">
            <h2>Lumen</h2>
            <p>Identidade Visual - Design Digital</p>
          </div>
          <div id="owners">
            {this.state.owners.map( (owner, i) => {
              return <a style={{zIndex:(this.state.owners.length - i)}} href={owner.url}><ReactTooltip effect="solid"/><img src={owner.images['50']} alt="imagem" data-tip={owner.first_name + " " + owner.last_name}/></a>
            })}
          </div>
        </div>
        <div className="container" id="images">
          <img src={Image1} alt="Primeira imagem" />
          <img src={Image2} alt="Segunda imagem" />
          <img src={Image3} alt="Terceira imagem" />
          <img src={Image4} alt="Quarte imagem" />
        </div>
      </div>
    );
  }
}

export default Lumen;
