"use client"

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
// import '@/leaflet.min.css';
import $ from 'jquery'
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'preact/hooks';

export default ({ lat, long, zoom=25, width, height, text }) => {
    const position = [lat, long];
    useEffect(() => {
        $('.leaflet-control-attribution.leaflet-control').remove()
    }, [$('.leaflet-control-attribution.leaflet-control').length])
    return <MapContainer center={position} zoom={zoom} style={{ height: '400px', width: '100%' }}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
            {text ? <Popup>
                {text}
            </Popup> : ''}
        </Marker>
    </MapContainer>

    // return <Map
    //     mapLib={import('mapbox-gl')}
    //     initialViewState={{
    //         longitude: long,
    //         latitude: lat,
    //         zoom: zoom ?? 3.5
    //     }}
    //     style={{ width: width, height: height }}
    //     mapStyle="mapbox://styles/mapbox/streets-v9"
    // />
}