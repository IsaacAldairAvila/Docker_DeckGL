import { PathLayer } from '@deck.gl/layers';
import { PathStyleExtension } from '@deck.gl/extensions';
const Carretera = () => {
    const path = [
        [
            -79.49037551879883,
            9.031408346477228
        ],
        [
            -79.49432373046875,
            9.028865339591997
        ],
        [
            -79.49827194213867,
            9.029797777532618
        ],
        [
            -79.50136184692383,
            9.030645446295118
        ],
        [
            -79.5065975189209,
            9.030730213061755
        ],
        [
            -79.51166152954102,
            9.032001712169267
        ],
        [
            -79.51844215393066,
            9.030730213061755
        ],
        [
            -79.51955795288086,
            9.028950106777144
        ],
        [
            -79.51998710632324,
            9.027085224100698
        ],
        [
            -79.52136039733887,
            9.025644171791262
        ],
        [
            -79.52728271484375,
            9.023440198300156
        ],
        [
            -79.5289134979248,
            9.021660056036218
        ],
        [
            -79.53397750854492,
            9.019201749902246
        ],
        [
            -79.53509330749512,
            9.017591126460664
        ],
        [
            -79.5351791381836,
            9.014200316782931
        ],
        [
            -79.5344066619873,
            9.009961759919966
        ],
        [
            -79.53380584716795,
            9.006231788752531
        ],
        [
            -79.53303337097168,
            9.002671325826467
        ],
        [
            -79.53354835510254,
            8.997839212932199
        ],
        [
            -79.5340633392334,
            8.993854790598974
        ],
        [
            -79.5340633392334,
            8.989531218880458
        ],
        [
            -79.53226089477539,
            8.986394477679445
        ]
    ]
    const carret = new PathLayer({
        'id': 'dashed',
        'data': [{ path }],
        getPath: d => d.path,
        'getWidth': 1,
        'widthScale': 2,
        'widthMinPixels': .5,
        'getColor': [214, 216, 86],
        'getDashArray': [5, 3],
        'dashJustified': true,
        'dashGapPickable': true,
        'extensions': [new PathStyleExtension({ 'dash': true })]
    });

    const carret3 = new PathLayer({
        'id': 'dashed',
        'data': [{ path }],
        getPath: d => d.path,
        'getWidth': 10,
        'widthScale': 2,
        'widthMinPixels': .5,
        'getColor': [0,0,0],
        'dashJustified': true,
        'dashGapPickable': true,
    });

    const carret2 = new PathLayer({
        'id': 'dashed',
        'data': [
            { path, 'offset': - 5 }, // left
            { path, 'offset': + 5 }, // right
        ],
        getPath: d => d.path,
        'getWidth': 1,
        'widthScale': 2,
        'widthMinPixels': .5,
        'getColor': [256, 256, 256],
        getOffset: d => d.offset,
        'extensions': [new PathStyleExtension({ 'offset': true })]
    });
    return [carret2, carret3, carret]
}

export default Carretera