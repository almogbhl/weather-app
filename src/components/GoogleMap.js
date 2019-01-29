import React, { Component } from 'react';
import styled from 'styled-components';

class GoogleMap extends Component {

    
componentDidMount() {
    new google.maps.Map(this.refs.map, {
        zoom: 12,
        center: {
            lat: this.props.lat,
            lng: this.props.lon
        }
    });
}

    render() {
        return <Map ref="map" />
    }
}

export default GoogleMap;

const Map = styled.div `
    height: 150px;
    width: 200px;
`