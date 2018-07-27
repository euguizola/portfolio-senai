import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import mapsStyle from '../assets/mapStyle.json'
import marker from '../assets/images/marker.png'

const MapComponent = withGoogleMap(props => {
    return <GoogleMap
        defaultZoom={18}
        defaultCenter={{ lat: -23.5365517, lng: -46.6463026 }}
        defaultOptions={{ styles: mapsStyle }}
    >
        <Marker
            position={{ lat: -23.5365517, lng: -46.6463026 }}
            options={{icon: marker}}
        >
            {/* <InfoWindow>
                <a href='https://www.google.com/maps/place/Escola+SENAI+de+Inform%C3%A1tica/@-23.5365517,-46.6463026,15z/data=!4m2!3m1!1s0x0:0xb23619858bc7e63e?sa=X&ved=2ahUKEwjg8-PkuL_cAhXGPpAKHRirA4gQ_BIwC3oECAkQCw' style={{display: 'block', maxWidth: '300px'}}>
                    <strong>Escola SENAI de Informática</strong> - Alameda Barão de Limeira, 539 - Santa Cecilia, São Paulo - SP, 01202-001.
                </a>
            </InfoWindow> */}
        </Marker>
    </GoogleMap>
})

class SimpleMap extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return <MapComponent
            loadingElement={<div style={{ height: `100%`, width: `100%` }} />}
            containerElement={<div style={{ height: `100%`, width: `100%` }} />}
            mapElement={<div style={{ height: `100%`, width: `100%` }} />}
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        >

        </MapComponent>
    }
}

export default SimpleMap