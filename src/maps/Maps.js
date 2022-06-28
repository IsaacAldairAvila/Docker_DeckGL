import React from 'react'
import DeckGL from '@deck.gl/react';
import { _MapContext as MapContext, StaticMap } from 'react-map-gl';
import PulsingDotIcon from "../layers/PulsingDotIcon"

const Maps = ({ viewState, data, pulsing }) => {
    const DATA = (pulsing === true ? PulsingDotIcon(data) : [])
    return (
        <DeckGL
            initialViewState={viewState}
            controller={true}
            ContextProvider={MapContext.Provider}
            layers={DATA}
        >
            <StaticMap
                mapboxApiAccessToken={process.env.REACT_APP_KEY_MAPBOX}
                mapStyle={process.env.REACT_APP_STYLE_MAPBOX}
            >
            </StaticMap>
        </DeckGL>
    )
}

export default Maps