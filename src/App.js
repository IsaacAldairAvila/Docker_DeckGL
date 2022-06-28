import React, { useState, useEffect } from "react";
import DeckGL from '@deck.gl/react';
import { _MapContext as MapContext, StaticMap } from 'react-map-gl';
import { ScatterplotLayer } from '@deck.gl/layers';

function App() {
  const [data, setData] = useState([
    { name: 'b', opacity: 0.8, exits: 100, coordinates: [-122.41669, 37.791], color: [255, 116, 0], angle: 0 },
    { name: 'b', opacity: 0.8, exits: 100, coordinates: [-122.41669, 37.781], color: [220, 255, 0], angle: 90 },
    { name: 'b', opacity: 0.8, exits: 100, coordinates: [-122.41669, 37.771], color: [62, 255, 0] , angle: 0 },
    { name: 'b', opacity: 0.8, exits: 100, coordinates: [-122.40769, 37.781], color: [0, 255, 174], angle: 90 },
    { name: 'b', opacity: 0.8, exits: 100, coordinates: [-122.43869, 37.781], color: [0, 158, 255], angle: 0 },
    { name: 'b', opacity: 0.8, exits: 100, coordinates: [-122.42569, 37.781], color: [197, 0, 255], angle: 90 },
  ])
  const viewState = {
    longitude: -122.41669,
    latitude: 37.7853,
    zoom: 13,
    pitch: 0,
    bearing: 0
  }

  const [ani, setAni] = useState(true)
  const cambio = () => {
    setData(data.map(x => ({
      ...x,
      exits: cambiotam(x.exits, x.name)
    })))
  }

  const cambiotam = (x, type) => {
    if (type === 'a') {
      return 1000
    }
    else {
      if (ani) {
        if (x >= 1000) {
          setAni(!ani)
          return x - 10
        }
        else {
          return x + 10
        }
      }
      else {
        if (x <= 100) {
          setAni(!ani)
          return x + 10
        }
        else {
          return x - 10
        }
      }

    }
  }

  const layers = [
    new ScatterplotLayer({
      id: 'line-layer',
      data,
      opacity: .6,
      pickable: true,
      stroked: true,
      filled: true,
      radiusScale: 2,
      radiusMinPixels: 1,
      lineWidthMinPixels: 1,
      getPosition: d => d.coordinates,
      getRadius: d => Math.sqrt(d.exits),
      getFillColor: d => d.color,
      getLineColor: d => d.color,
    })
  ]

  const layers2 = [
    new ScatterplotLayer({
      id: 'line-layer-2',
      data,
      opacity: .2,
      pickable: true,
      stroked: true,
      filled: true,
      radiusScale: 2,
      radiusMinPixels: 1,
      lineWidthMinPixels: 1,
      getPosition: d => d.coordinates,
      getRadius: d => 32,
      getFillColor: d => d.color,
      getLineColor: d => d.color,
    })
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      cambio()
    }, 5);
    return () => clearInterval(interval);
  });

  return (
    <DeckGL
      initialViewState={viewState}
      controller={true}
      ContextProvider={MapContext.Provider}
      layers={[layers2, layers]}
    >
      <ScatterplotLayer id="scatter" data={data} getFillColor={[255, 255, 255]} />
      <StaticMap
        mapboxApiAccessToken={process.env.REACT_APP_KEY_MAPBOX}
        mapStyle={process.env.REACT_APP_STYLE_MAPBOX}
      >
      </StaticMap>
    </DeckGL>)
}


export default App;