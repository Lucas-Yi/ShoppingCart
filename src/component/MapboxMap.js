import mapboxgl from "mapbox-gl/dist/mapbox-gl.js"
import React, {useLayoutEffect} from "react"

export default function MapboxMap(){

    // @ts-ignore
    // eslint-disable-next-line import/no-webpack-loader-syntax
    mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
    mapboxgl.accessToken = "pk.eyJ1IjoibHVjYXN5aTE5OTIiLCJhIjoiY2trNmN4b3o4MDJwbzJ1cW80OGR3MGwzZiJ9.f3ApJAfmbuuOj4FdKs60nA"

    useLayoutEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v10',
            center:  [ 144.965195, -37.809811 ],
            zoom: 15
        });
        new mapboxgl.Marker()
            .setLngLat([ 144.965195, -37.809811 ])
            .addTo(map)
    }, []);

    return <div id="map"/>

}