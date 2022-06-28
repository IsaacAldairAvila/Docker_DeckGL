import { ScatterplotLayer } from '@deck.gl/layers';
const PulsingDotIcon = (data) => {
    const area = new ScatterplotLayer({
        id: 'area-pulsingdoticon-layer',
        data,
        opacity: 0.6,
        pickable: true,
        stroked: true,
        filled: true,
        radiusScale: 2,
        radiusMinPixels: 1,
        lineWidthMinPixels: 1,
        getPosition: d => d.coordinates,
        getRadius: d => d.radius,
        getFillColor: d => d.color,
        getLineColor: d => d.color
    })
    const circle = new ScatterplotLayer({
        id: 'circle-pulsingdoticon-layer',
        data,
        opacity: 0.2,
        pickable: true,
        stroked: true,
        filled: true,
        radiusScale: 2,
        radiusMinPixels: 1,
        lineWidthMinPixels: 1,
        getPosition: d => d.coordinates,
        getRadius: d => d.radiusstatic,
        getFillColor: d => d.color,
        getLineColor: d => d.color
    })
    return [area, circle]
}

export default PulsingDotIcon