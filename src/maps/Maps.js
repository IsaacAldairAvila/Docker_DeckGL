import React from 'react'
import DeckGL from '@deck.gl/react';
import { _MapContext as MapContext, StaticMap } from 'react-map-gl';
import PulsingDotIcon from "../layers/PulsingDotIcon"
import Carretera from '../layers/Carretera';
import ViaTren from '../layers/ViaTren';

const Maps = ({ viewState, data, pulsing, carretera, viatren }) => {
    const DATAA = (pulsing === true ? PulsingDotIcon(data) : [])
    const DATAB = (carretera === true ? Carretera() : [])
    const DATAC = (viatren === true ? ViaTren() : [])
    return (
        <DeckGL
            initialViewState={viewState}
            controller={true}
            ContextProvider={MapContext.Provider}
            layers={[...DATAA, ...DATAB, ...DATAC]}
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