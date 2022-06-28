import React from 'react'
import DeckGL from '@deck.gl/react';
import { _MapContext as MapContext, StaticMap } from 'react-map-gl';
import PulsingDotIcon from "../layers/PulsingDotIcon"
import Carretera from '../layers/Carretera';

const Maps = ({ viewState, data, pulsing, carretera }) => {
    const DATAA = (pulsing === true ? PulsingDotIcon(data) : [])
    const DATAB = (carretera === true ? Carretera() : [])
    return (
        <DeckGL
            initialViewState={viewState}
            controller={true}
            ContextProvider={MapContext.Provider}
            layers={[...DATAA, ...DATAB]}
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