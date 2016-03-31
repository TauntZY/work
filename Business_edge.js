/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Symbol_Business',
                            symbolName: 'Symbol_Business',
                            type: 'rect',
                            rect: ['-583', '-218', '1799', '1084', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '640px', '960px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 8855,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Symbol_Business": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'yewu1_03',
                            opacity: '1',
                            rect: ['40.3%', '25.1%', '19.5%', '15.2%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/yewu1_03.png', '0%', '0%']
                        },
                        {
                            type: 'image',
                            id: 'yewu10_03',
                            opacity: '1',
                            rect: ['0.4%', '84.5%', '31.7%', '15.5%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/yewu10_03.png', '0%', '0%']
                        },
                        {
                            type: 'image',
                            id: 'yewu9_03',
                            opacity: '0',
                            rect: ['50.2%', '64.4%', '8.5%', '11.5%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/yewu9_03.png', '0%', '0%']
                        },
                        {
                            type: 'image',
                            id: 'yewu8_03',
                            opacity: '0',
                            rect: ['58.5%', '64.9%', '8.5%', '11%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/yewu8_03.png', '0%', '0%']
                        },
                        {
                            type: 'image',
                            id: 'yewu6_03',
                            opacity: '0',
                            rect: ['34.3%', '64.9%', '7.6%', '10.4%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/yewu6_03.png', '0%', '0%']
                        },
                        {
                            fi: [0, 0, 2, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['0%', '57.9%', '28.8%', '5.5%', 'auto', 'auto'],
                            filter: [0, 0, 2, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'yewu5_03',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/yewu5_03.png', '0%', '0%']
                        },
                        {
                            fi: [0, 0, 2, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['71.3%', '49.5%', '28.8%', '5.6%', 'auto', 'auto'],
                            filter: [0, 0, 2, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'yewu4_03',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/yewu4_03.png', '0%', '0%']
                        },
                        {
                            fi: [0, 0, 2, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['0.6%', '42.4%', '28.7%', '5.3%', 'auto', 'auto'],
                            filter: [0, 0, 2, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'yewu3_03',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/yewu3_03.png', '0%', '0%']
                        },
                        {
                            type: 'image',
                            id: 'yewu_03',
                            opacity: '0',
                            rect: ['42.4%', '64.8%', '8%', '10.7%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/yewu_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'business_line_122',
                            opacity: '0',
                            rect: ['1059px', '804px', '78px', '131px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/business_line_122.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'business_line_062',
                            opacity: '0',
                            rect: ['52.4%', '74.5%', '5.1%', '12.8%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/business_line_062.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'business_line_032',
                            opacity: '0',
                            rect: ['36.1%', '72.7%', '4.4%', '15.2%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/business_line_032.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'business_line_032Copy',
                            opacity: '0',
                            rect: ['44.2%', '73.3%', '4.4%', '15.2%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/business_line_032.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'business_radio_03',
                            opacity: '0',
                            rect: ['1110px', '816px', '19px', '13px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/business_radio_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'business_radio_03Copy3',
                            opacity: '0',
                            rect: ['999px', '816px', '19px', '13px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/business_radio_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'business_radio_03Copy2',
                            opacity: '0',
                            rect: ['807px', '811px', '19px', '13px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/business_radio_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'business_radio_03Copy',
                            opacity: '0',
                            rect: ['659px', '811px', '19px', '13px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/business_radio_03.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1799px', '1084px']
                        }
                    }
                },
                timeline: {
                    duration: 8855,
                    autoPlay: true,
                    data: [
                        [
                            "eid33",
                            "top",
                            685,
                            1065,
                            "easeOutExpo",
                            "${yewu4_03}",
                            '48.16%',
                            '49.45%'
                        ],
                        [
                            "eid34",
                            "left",
                            685,
                            1065,
                            "easeOutExpo",
                            "${yewu5_03}",
                            '0%',
                            '35.8%'
                        ],
                        [
                            "eid30",
                            "left",
                            685,
                            1065,
                            "easeOutExpo",
                            "${yewu3_03}",
                            '0.55%',
                            '36.02%'
                        ],
                        [
                            "eid28",
                            "left",
                            0,
                            685,
                            "easeOutBounce",
                            "${yewu1_03}",
                            '40.41%',
                            '40.25%'
                        ],
                        [
                            "eid60",
                            "opacity",
                            2455,
                            545,
                            "linear",
                            "${business_line_032}",
                            '0',
                            '1'
                        ],
                        [
                            "eid67",
                            "opacity",
                            3910,
                            590,
                            "linear",
                            "${business_radio_03Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid45",
                            "opacity",
                            3115,
                            795,
                            "linear",
                            "${yewu6_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid73",
                            "opacity",
                            5750,
                            552,
                            "linear",
                            "${business_line_062}",
                            '0',
                            '1'
                        ],
                        [
                            "eid59",
                            "opacity",
                            2455,
                            545,
                            "linear",
                            "${business_radio_03Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid48",
                            "opacity",
                            4662,
                            795,
                            "linear",
                            "${yewu_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid46",
                            "opacity",
                            6500,
                            795,
                            "linear",
                            "${yewu9_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid66",
                            "opacity",
                            3910,
                            590,
                            "linear",
                            "${business_line_032Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid78",
                            "opacity",
                            7295,
                            582,
                            "linear",
                            "${business_line_122}",
                            '0',
                            '1'
                        ],
                        [
                            "eid32",
                            "left",
                            685,
                            1065,
                            "easeOutExpo",
                            "${yewu4_03}",
                            '71.26%',
                            '35.8%'
                        ],
                        [
                            "eid79",
                            "opacity",
                            7295,
                            582,
                            "linear",
                            "${business_radio_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid29",
                            "top",
                            0,
                            685,
                            "easeOutBounce",
                            "${yewu1_03}",
                            '0%',
                            '25.09%'
                        ],
                        [
                            "eid47",
                            "opacity",
                            8060,
                            795,
                            "linear",
                            "${yewu8_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid72",
                            "opacity",
                            5750,
                            552,
                            "linear",
                            "${business_radio_03Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid39",
                            "left",
                            1750,
                            705,
                            "swing",
                            "${yewu10_03}",
                            '0.39%',
                            '34.96%'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Business_edgeActions.js");
})("Page_Business");
