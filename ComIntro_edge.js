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
                            id: 'Symbol_ComIntro3',
                            symbolName: 'Symbol_ComIntro',
                            type: 'rect',
                            rect: ['-576', '20', '1174', '1290', 'auto', 'auto']
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
                    duration: 5000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Symbol_ComIntro": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['61.8%', '-15.7%', '28.8%', '12.6%', 'auto', 'auto'],
                            id: 'header',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/gonsijiesao_012.png', '0%', '0%']
                        },
                        {
                            rect: ['0%', '16.3%', '44%', '5.2%', 'auto', 'auto'],
                            id: 'title',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/page5_name_022.png', '0%', '0%']
                        },
                        {
                            rect: ['54.4%', '24%', '9.2%', '2.8%', 'auto', 'auto'],
                            id: 'xiangxi',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/com_03.png', '0%', '0%']
                        },
                        {
                            rect: ['54.3%', '28.2%', '43.9%', '10.9%', 'auto', 'auto'],
                            id: '_1999',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/page5_4_012.png', '0%', '0%']
                        },
                        {
                            rect: ['78.7%', '42.9%', '21.3%', '21.8%', 'auto', 'auto'],
                            id: 'img',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/page5_012.png', '0%', '0%']
                        },
                        {
                            rect: ['52.2%', '42.7%', '6.8%', '6.1%', 'auto', 'auto'],
                            id: 'ComPart1_1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jieshao1_012.png', '0%', '0%']
                        },
                        {
                            rect: ['59.7%', '42.3%', '13.6%', '33px', 'auto', 'auto'],
                            id: 'ComPart1_2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jieshao2_032.png', '0%', '0%']
                        },
                        {
                            rect: ['59.7%', '46.4%', '14.1%', '2.4%', 'auto', 'auto'],
                            id: 'ComPart1_3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jieshao3_032.png', '0%', '0%']
                        },
                        {
                            rect: ['52.2%', '51.9%', '6.7%', '6.1%', 'auto', 'auto'],
                            id: 'ComPart2_1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jieshao4_032.png', '0%', '0%']
                        },
                        {
                            rect: ['59.4%', '51.2%', '13.8%', '2.4%', 'auto', 'auto'],
                            id: 'ComPart2_2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jieshao5_032.png', '0%', '0%']
                        },
                        {
                            rect: ['59.4%', '54.9%', '15%', '4.7%', 'auto', 'auto'],
                            id: 'ComPart2_3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jiesaho6_032.png', '0%', '0%']
                        },
                        {
                            rect: ['52.2%', '61.8%', '7%', '6.2%', 'auto', 'auto'],
                            id: 'ComPart3_1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jieshao7_032.png', '0%', '0%']
                        },
                        {
                            rect: ['59.7%', '61.8%', '9.5%', '2.7%', 'auto', 'auto'],
                            id: 'ComPart3_2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jieshao8_032.png', '0%', '0%']
                        },
                        {
                            rect: ['59.7%', '66%', '15.1%', '1.9%', 'auto', 'auto'],
                            id: 'ComPart3_3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jieshao9_032.png', '0%', '0%']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1174px', '1290px'],
                            overflow: 'visible'
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid930",
                            "opacity",
                            2500,
                            1000,
                            "linear",
                            "${ComPart2_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid866",
                            "opacity",
                            4500,
                            500,
                            "linear",
                            "${img}",
                            '0',
                            '1'
                        ],
                        [
                            "eid892",
                            "top",
                            0,
                            500,
                            "easeOutBounce",
                            "${header}",
                            '-15.66%',
                            '0.85%'
                        ],
                        [
                            "eid929",
                            "opacity",
                            2500,
                            1000,
                            "linear",
                            "${ComPart2_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid865",
                            "opacity",
                            844,
                            656,
                            "linear",
                            "${_1999}",
                            '0',
                            '1'
                        ],
                        [
                            "eid862",
                            "opacity",
                            583,
                            262,
                            "linear",
                            "${xiangxi}",
                            '0',
                            '1'
                        ],
                        [
                            "eid891",
                            "left",
                            0,
                            500,
                            "easeOutBounce",
                            "${header}",
                            '63.62%',
                            '63.63%'
                        ],
                        [
                            "eid935",
                            "opacity",
                            1500,
                            1000,
                            "linear",
                            "${ComPart1_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid936",
                            "opacity",
                            1500,
                            1000,
                            "linear",
                            "${ComPart1_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid931",
                            "opacity",
                            1500,
                            1000,
                            "linear",
                            "${ComPart1_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid934",
                            "opacity",
                            2500,
                            1000,
                            "linear",
                            "${ComPart2_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid852",
                            "left",
                            417,
                            583,
                            "easeOutBack",
                            "${title}",
                            '0%',
                            '54.34%'
                        ],
                        [
                            "eid937",
                            "opacity",
                            3500,
                            1000,
                            "linear",
                            "${ComPart3_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid932",
                            "opacity",
                            3500,
                            1000,
                            "linear",
                            "${ComPart3_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid861",
                            "top",
                            583,
                            262,
                            "linear",
                            "${xiangxi}",
                            '25.57%',
                            '23.95%'
                        ],
                        [
                            "eid933",
                            "opacity",
                            3500,
                            1000,
                            "linear",
                            "${ComPart3_2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("ComIntro_edgeActions.js");
})("Page_ComIntro");
