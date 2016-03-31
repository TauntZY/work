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
                            id: 'Symbol_Team1',
                            symbolName: 'Symbol_Team1',
                            type: 'rect',
                            rect: ['-162', '-230', '965', '1387', 'auto', 'auto']
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
                    duration: 6933,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Symbol_Team1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0%', '30%', '10.5%', '6.6%', 'auto', 'auto'],
                            id: 'jiafang',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/team7_03.png', '0%', '0%']
                        },
                        {
                            rect: ['0%', '64.8%', '10.6%', '6.4%', 'auto', 'auto'],
                            id: 'yifang_',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/team6_03.png', '0%', '0%']
                        },
                        {
                            rect: ['45.2%', '93.5%', '10.4%', '6.5%', 'auto', 'auto'],
                            id: 'other',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/team5_03.png', '0%', '0%']
                        },
                        {
                            rect: ['89.7%', '64.8%', '10.3%', '6.7%', 'auto', 'auto'],
                            id: '_90',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/team4_03.png', '0%', '0%']
                        },
                        {
                            rect: ['89.7%', '30.7%', '10.3%', '6.4%', 'auto', 'auto'],
                            id: '_80',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/team3_03.png', '0%', '0%']
                        },
                        {
                            rect: ['42.3%', '3.5%', '16.1%', '9.5%', 'auto', 'auto'],
                            id: 'center',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/team1_01.png', '0%', '0%']
                        },
                        {
                            rect: ['44.3%', '0%', '11.1%', '7%', 'auto', 'auto'],
                            id: '_70',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/team2.png', '0%', '0%']
                        },
                        {
                            rect: ['49.7%', '30.6%', '1.2%', '9.5%', 'auto', 'auto'],
                            id: '_70_line',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/team14_03.png', '0%', '0px']
                        },
                        {
                            rect: ['35%', '22.1%', '25%', '8.6%', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: '_-70_word',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/team8_01.png', '0%', '0%']
                        },
                        {
                            rect: ['65%', '40.3%', '5.6%', '5.3%', 'auto', 'auto'],
                            id: '_80_line',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/team15_03.png', '0%', '0px']
                        },
                        {
                            rect: ['60%', '29.6%', '22.2%', '10.5%', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: '_80_word',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/team9_01.png', '0px', '0px']
                        },
                        {
                            rect: ['64.5%', '57.6%', '6.6%', '4.4%', 'auto', 'auto'],
                            id: '_90_line',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/team16_03.png', '0%', '0%']
                        },
                        {
                            rect: ['57.4%', '60.4%', '217px', '149px', 'auto', 'auto'],
                            id: '_90_word',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/team10_01.png', '0px', '0px']
                        },
                        {
                            rect: ['48.6%', '63.6%', '1.4%', '5.4%', 'auto', 'auto'],
                            id: 'other_line',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/team17_03.png', '0%', '0%']
                        },
                        {
                            rect: ['41.2%', '70.1%', '24.5%', '10.4%', 'auto', 'auto'],
                            id: '_0ther_word',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/team11_01.png', '0%', '0px']
                        },
                        {
                            rect: ['28.8%', '57.6%', '7%', '1.7%', 'auto', 'auto'],
                            id: 'yifang_line',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/team18_03.png', '0%', '0px']
                        },
                        {
                            rect: ['18.2%', '57.6%', '21%', '14.9%', 'auto', 'auto'],
                            id: 'yifang_word',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/team12_01.png', '0%', '0%']
                        },
                        {
                            rect: ['28.3%', '40.4%', '6.7%', '5.2%', 'auto', 'auto'],
                            id: 'jiafang_line',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/team19_03.png', '0%', '0%']
                        },
                        {
                            rect: ['173px', '410px', '236px', '144px', 'auto', 'auto'],
                            id: 'jaifang_word',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/team11_012.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '965px', '1387px']
                        }
                    }
                },
                timeline: {
                    duration: 6933,
                    autoPlay: true,
                    data: [
                        [
                            "eid40",
                            "left",
                            1934,
                            1000,
                            "easeOutBounce",
                            "${_80}",
                            '89.74%',
                            '55.96%'
                        ],
                        [
                            "eid109",
                            "opacity",
                            5133,
                            400,
                            "easeInQuad",
                            "${other_line}",
                            '0',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            3600,
                            333,
                            "easeInQuad",
                            "${_-70_word}",
                            '0',
                            '1'
                        ],
                        [
                            "eid105",
                            "opacity",
                            6533,
                            400,
                            "easeInQuad",
                            "${jaifang_word}",
                            '0',
                            '1'
                        ],
                        [
                            "eid42",
                            "left",
                            2467,
                            933,
                            "easeOutBounce",
                            "${jiafang}",
                            '0%',
                            '34.19%'
                        ],
                        [
                            "eid44",
                            "left",
                            2067,
                            999,
                            "easeOutBounce",
                            "${_90}",
                            '89.74%',
                            '55.96%'
                        ],
                        [
                            "eid107",
                            "opacity",
                            4733,
                            400,
                            "easeInQuad",
                            "${_90_word}",
                            '0',
                            '1'
                        ],
                        [
                            "eid30",
                            "top",
                            0,
                            933,
                            "easeOutBounce",
                            "${center}",
                            '3.46%',
                            '46.43%'
                        ],
                        [
                            "eid41",
                            "top",
                            1934,
                            1000,
                            "easeOutBounce",
                            "${_80}",
                            '30.72%',
                            '43.84%'
                        ],
                        [
                            "eid49",
                            "top",
                            2200,
                            1000,
                            "easeOutBounce",
                            "${other}",
                            '93.51%',
                            '56.59%'
                        ],
                        [
                            "eid116",
                            "filter.contrast",
                            6933,
                            0,
                            "easeInQuad",
                            "${_80_word}",
                            '1',
                            '1'
                        ],
                        [
                            "eid104",
                            "opacity",
                            5733,
                            400,
                            "easeInQuad",
                            "${yifang_line}",
                            '0',
                            '1'
                        ],
                        [
                            "eid131",
                            "filter.contrast",
                            0,
                            0,
                            "easeInQuad",
                            "${_-70_word}",
                            '1',
                            '1'
                        ],
                        [
                            "eid103",
                            "opacity",
                            4533,
                            400,
                            "easeInQuad",
                            "${_90_line}",
                            '0',
                            '1'
                        ],
                        [
                            "eid110",
                            "opacity",
                            5333,
                            400,
                            "easeInQuad",
                            "${_0ther_word}",
                            '0',
                            '1'
                        ],
                        [
                            "eid88",
                            "top",
                            3933,
                            0,
                            "easeInQuad",
                            "${_-70_word}",
                            '22.06%',
                            '22.06%'
                        ],
                        [
                            "eid46",
                            "left",
                            2334,
                            933,
                            "easeOutBounce",
                            "${yifang_}",
                            '0%',
                            '34.19%'
                        ],
                        [
                            "eid39",
                            "top",
                            1800,
                            1000,
                            "easeOutBounce",
                            "${_70}",
                            '0%',
                            '38.64%'
                        ],
                        [
                            "eid29",
                            "left",
                            0,
                            933,
                            "easeOutBounce",
                            "${center}",
                            '42.28%',
                            '42.38%'
                        ],
                        [
                            "eid43",
                            "top",
                            2467,
                            933,
                            "easeOutBounce",
                            "${jiafang}",
                            '30%',
                            '43.84%'
                        ],
                        [
                            "eid87",
                            "left",
                            3933,
                            0,
                            "easeInQuad",
                            "${_-70_word}",
                            '35.02%',
                            '35.02%'
                        ],
                        [
                            "eid32",
                            "rotateZ",
                            0,
                            2000,
                            "easeOutBounce",
                            "${center}",
                            '0deg',
                            '720deg'
                        ],
                        [
                            "eid34",
                            "rotateZ",
                            2000,
                            0,
                            "easeOutBounce",
                            "${center}",
                            '720deg',
                            '720deg'
                        ],
                        [
                            "eid111",
                            "top",
                            0,
                            2067,
                            "easeInQuad",
                            "${_90}",
                            '64.82%',
                            '64.74%'
                        ],
                        [
                            "eid45",
                            "top",
                            2067,
                            999,
                            "easeOutBounce",
                            "${_90}",
                            '64.74%',
                            '52.34%'
                        ],
                        [
                            "eid82",
                            "opacity",
                            3400,
                            333,
                            "easeInQuad",
                            "${_70_line}",
                            '0',
                            '1'
                        ],
                        [
                            "eid90",
                            "opacity",
                            3933,
                            400,
                            "easeInQuad",
                            "${_80_line}",
                            '0',
                            '1'
                        ],
                        [
                            "eid48",
                            "left",
                            2200,
                            1000,
                            "easeOutBounce",
                            "${other}",
                            '45.18%',
                            '44.77%'
                        ],
                        [
                            "eid47",
                            "top",
                            2334,
                            933,
                            "easeOutBounce",
                            "${yifang_}",
                            '64.81%',
                            '52.49%'
                        ],
                        [
                            "eid106",
                            "opacity",
                            6333,
                            400,
                            "easeInQuad",
                            "${jiafang_line}",
                            '0',
                            '1'
                        ],
                        [
                            "eid108",
                            "opacity",
                            5933,
                            400,
                            "easeInQuad",
                            "${yifang_word}",
                            '0',
                            '1'
                        ],
                        [
                            "eid93",
                            "opacity",
                            4133,
                            400,
                            "easeInQuad",
                            "${_80_word}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("team_edgeActions.js");
})("Page_Team");
