import React, { Component } from 'react'

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.coord.lat,
                lng: this.props.coord.lon
            }
        })
    }

    render() {
        return <div className="mapClass" ref="map" />
    }
}

export default GoogleMap
