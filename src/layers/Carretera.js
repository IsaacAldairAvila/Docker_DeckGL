import { PathLayer } from '@deck.gl/layers';
import { PathStyleExtension } from '@deck.gl/extensions';
const Carretera = () => {
    const path =
        [
            [
                -79.45587158203124,
                9.028695805161899
            ],
            [
                -79.46651458740234,
                9.025813707655905
            ],
            [
                -79.47664260864258,
                9.013606921816024
            ],
            [
                -79.4809341430664,
                9.00580792595707
            ],
            [
                -79.49089050292969,
                8.998008761845627
            ],
            [
                -79.49638366699219,
                8.991057191264215
            ],
            [
                -79.5032501220703,
                8.983088153501505
            ],
            [
                -79.5109748840332,
                8.97884923222977
            ],
            [
                -79.51595306396484,
                8.98105347747668
            ]
        ]
    const carret = new PathLayer({
        'id': 'dashed',
        'data': [{ path }],
        getPath: d => d.path,
        'getWidth': 10,
        'widthScale': 2,
        'widthMinPixels': 2,
        'getColor': [214, 216, 86],
        'getDashArray': [1, .5],
        'dashJustified': true,
        'dashGapPickable': true,
        'extensions': [new PathStyleExtension({ 'dash': true })]
    });

    const carret2 = new PathLayer({
        'id': 'dashed',
        'data': [
            { path, 'offset': - 2 }, // left
            { path, 'offset': + 2 }, // right
        ],
        getPath: d => d.path,
        'getWidth': 1,
        'widthScale': 2,
        'widthMinPixels': 1,
        'getColor': [256, 256, 256],
        getOffset: d => d.offset,
        'extensions': [new PathStyleExtension({ 'offset': true })]
    });
    return [carret, carret2]
}

export default Carretera