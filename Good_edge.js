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
                            id: 'Symbol_Good_1',
                            symbolName: 'Symbol_Good_1',
                            type: 'rect',
                            rect: ['79px', '38', '757', '936', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Good_2',
                            symbolName: 'Symbol_Good_2',
                            type: 'rect',
                            rect: ['46px', '99px', '572', '762', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Good_3',
                            symbolName: 'Symbol_Good_3',
                            type: 'rect',
                            rect: ['51', '113px', '562', '717', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Good_4',
                            symbolName: 'Symbol_Good_4',
                            type: 'rect',
                            rect: ['40px', '118px', '584', '614', 'auto', 'auto'],
                            opacity: '1'
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
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid243",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Symbol_Good_4}",
                            '118px',
                            '118px'
                        ],
                        [
                            "eid241",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Symbol_Good_2}",
                            '99px',
                            '99px'
                        ],
                        [
                            "eid242",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Symbol_Good_3}",
                            '113px',
                            '113px'
                        ],
                            [ "eid213", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Good_3}', [] ] ],
                            [ "eid215", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Good_1}', [] ] ],
                            [ "eid210", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Good_4}', [] ] ],
                            [ "eid216", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Good_2}', [] ] ]
                    ]
                }
            },
            "Symbol_Good_1": {
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
                            id: 'title',
                            opacity: '0',
                            rect: ['57px', '36px', '368px', '144px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/youshi3_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: '_01',
                            opacity: '0',
                            rect: ['0%', '20.6%', '7.1%', '4.9%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/youshi4_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'yudaier',
                            opacity: '0',
                            rect: ['10.5%', '20.8%', '42.8%', '4.7%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/youshi5_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'youshi_ditu',
                            opacity: '0',
                            rect: ['0%', '48.5%', '62.9%', '42.2%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/youshi_ditu_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'youshi_qinghai',
                            opacity: '0',
                            rect: ['0%', '27.9%', '70.2%', '21.8%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/youshi6_032.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-366'], [0, 0, 0], [1, 1, 1]],
                            id: 'rocket',
                            type: 'image',
                            rect: ['823px', '837px', '10.7%', '9.1%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/youshi2_03.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '757px', '936px']
                        }
                    }
                },
                timeline: {
                    duration: 5600,
                    autoPlay: true,
                    data: [
                        [
                            "eid5",
                            "location",
                            690,
                            540,
                            "linear",
                            "${rocket}",
                            [[700.02, 879.28, 0, 0, 0, 0,0],[612.15, 635.87, -42.57, -40.38, -353.56, -335.34,269.38],[597.16, 619.71, -56.36, -46.49, -53.98, -44.53,291.77],[536.05, 537.44, -35.47, -42.49, -38.48, -46.1,394.45],[507.36, 490.17, -93.04, -116.51, -30.39, -38.06,449.81],[450.7, 429.17, 0, 0, 0, 0,533.15]]
                        ],
                        [
                            "eid6",
                            "location",
                            1230,
                            460,
                            "linear",
                            "${rocket}",
                            [[450.57, 428.95, 0, 0, 0, 0,0],[390.22, 381.34, -23.43, -11.1, -114.61, -54.28,77.43],[364.33, 363.86, -54.48, -25.68, -34.2, -16.12,108.73],[308.97, 348.45, -42.19, -4.38, -39.6, -4.11,166.4],[255.32, 346.51, -66.89, 13.95, -56.15, 11.71,220.32],[199.53, 374.87, -58.81, 42.99, -40.27, 29.44,283.34],[162.86, 442.61, 0, 0, 0, 0,361.18]]
                        ],
                        [
                            "eid58",
                            "location",
                            1690,
                            355,
                            "linear",
                            "${rocket}",
                            [[163.24, 442.89, 0, 0, 0, 0,0],[164.47, 505.21, 4.33, 49.4, 7.09, 80.79,62.36],[192.59, 553.88, 31.83, 82.17, 14.14, 36.51,118.95],[264.14, 613.33, 0, 0, 0, 0,213.24]]
                        ],
                        [
                            "eid61",
                            "location",
                            2045,
                            395,
                            "linear",
                            "${rocket}",
                            [[264.02, 613.61, 0, 0, 0, 0,0],[350.83, 603.25, 84.66, -32.16, 91.66, -34.82,87.78],[417.31, 562.22, 0, 0, 0, 0,166.1]]
                        ],
                        [
                            "eid63",
                            "location",
                            2440,
                            1120,
                            "linear",
                            "${rocket}",
                            [[417.18, 562, 0, 0, 0, 0,0],[466.14, 460.06, 17.78, -64.72, 32.46, -118.16,113.34],[507.65, 283.64, -4.57, -100.72, -10.28, -226.29,295.85],[499.66, 179.53, -14.14, -72.89, -19.3, -99.49,400.36],[474.5, 99.6, -88.42, -174.44, -36, -71.01,484.38],[399.75, 44.17, 0, 0, 0, 0,582.11]]
                        ],
                        [
                            "eid76",
                            "opacity",
                            4560,
                            500,
                            "linear",
                            "${youshi_qinghai}",
                            '0',
                            '1'
                        ],
                        [
                            "eid240",
                            "top",
                            0,
                            0,
                            "linear",
                            "${title}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid79",
                            "opacity",
                            4060,
                            500,
                            "linear",
                            "${yudaier}",
                            '0',
                            '1'
                        ],
                        [
                            "eid57",
                            "rotateZ",
                            690,
                            345,
                            "linear",
                            "${rocket}",
                            '30deg',
                            '-2deg'
                        ],
                        [
                            "eid65",
                            "rotateZ",
                            1035,
                            195,
                            "linear",
                            "${rocket}",
                            '-2deg',
                            '-9deg'
                        ],
                        [
                            "eid69",
                            "rotateZ",
                            1230,
                            80,
                            "linear",
                            "${rocket}",
                            '-9deg',
                            '-18deg'
                        ],
                        [
                            "eid70",
                            "rotateZ",
                            1310,
                            130,
                            "linear",
                            "${rocket}",
                            '-18deg',
                            '-47deg'
                        ],
                        [
                            "eid71",
                            "rotateZ",
                            1440,
                            165,
                            "linear",
                            "${rocket}",
                            '-47deg',
                            '-117deg'
                        ],
                        [
                            "eid59",
                            "rotateZ",
                            1690,
                            130,
                            "linear",
                            "${rocket}",
                            '-117deg',
                            '-162deg'
                        ],
                        [
                            "eid67",
                            "rotateZ",
                            1820,
                            225,
                            "linear",
                            "${rocket}",
                            '-162deg',
                            '-231deg'
                        ],
                        [
                            "eid62",
                            "rotateZ",
                            2045,
                            215,
                            "linear",
                            "${rocket}",
                            '-231deg',
                            '-263deg'
                        ],
                        [
                            "eid68",
                            "rotateZ",
                            2260,
                            180,
                            "linear",
                            "${rocket}",
                            '-263deg',
                            '-294deg'
                        ],
                        [
                            "eid64",
                            "rotateZ",
                            2440,
                            750,
                            "linear",
                            "${rocket}",
                            '-294deg',
                            '-336deg'
                        ],
                        [
                            "eid80",
                            "rotateZ",
                            3190,
                            150,
                            "linear",
                            "${rocket}",
                            '-336deg',
                            '-353deg'
                        ],
                        [
                            "eid83",
                            "rotateZ",
                            3340,
                            220,
                            "linear",
                            "${rocket}",
                            '-353deg',
                            '-366deg'
                        ],
                        [
                            "eid85",
                            "opacity",
                            0,
                            690,
                            "linear",
                            "${title}",
                            '0',
                            '1'
                        ],
                        [
                            "eid77",
                            "opacity",
                            5100,
                            500,
                            "linear",
                            "${youshi_ditu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid78",
                            "opacity",
                            3560,
                            500,
                            "linear",
                            "${_01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid237",
                            "left",
                            0,
                            0,
                            "linear",
                            "${title}",
                            '57px',
                            '57px'
                        ]
                    ]
                }
            },
            "Symbol_Good_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0%', '0%', '9.8%', '5.9%', 'auto', 'auto'],
                            id: '_02',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/youshi7_03.png', '0px', '0px']
                        },
                        {
                            rect: ['12.2%', '0.8%', '39.5%', '4.5%', 'auto', 'auto'],
                            id: 'qiangqiang',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/youshi8_03.png', '0px', '0px']
                        },
                        {
                            rect: ['1.1%', '8.9%', '92.7%', '8.7%', 'auto', 'auto'],
                            id: 'weikehu',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/youshi9_032.png', '0px', '0px']
                        },
                        {
                            rect: ['1.1%', '19%', '49.1%', '25.7%', 'auto', 'auto'],
                            id: 'youshi10_03',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/youshi10_03.png', '0px', '0px']
                        },
                        {
                            rect: ['51.7%', '18.9%', '48.3%', '26%', 'auto', 'auto'],
                            id: 'youshi11_03',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/youshi11_03.png', '0px', '0px']
                        },
                        {
                            rect: ['1.1%', '50.8%', '76.4%', '6.2%', 'auto', 'auto'],
                            id: 'youshi12_03',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/youshi12_03.png', '0px', '0px']
                        },
                        {
                            rect: ['1.1%', '60.6%', '55.6%', '39.4%', 'auto', 'auto'],
                            id: 'youshi13_03',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/youshi13_03.png', '0px', '0px']
                        },
                        {
                            rect: ['56.8%', '64%', '41.3%', '33.9%', 'auto', 'auto'],
                            id: 'youshi14_03',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/youshi14_03.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '572px', '762px']
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: true,
                    data: [
                        [
                            "eid100",
                            "opacity",
                            2640,
                            750,
                            "linear",
                            "${youshi10_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid97",
                            "opacity",
                            6250,
                            750,
                            "linear",
                            "${youshi14_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid96",
                            "opacity",
                            5335,
                            750,
                            "linear",
                            "${youshi13_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid101",
                            "opacity",
                            4445,
                            750,
                            "linear",
                            "${youshi12_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid98",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${_02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid95",
                            "opacity",
                            1705,
                            750,
                            "linear",
                            "${weikehu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid99",
                            "opacity",
                            825,
                            750,
                            "linear",
                            "${qiangqiang}",
                            '0',
                            '1'
                        ],
                        [
                            "eid94",
                            "opacity",
                            3500,
                            750,
                            "linear",
                            "${youshi11_03}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_Good_3": {
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
                            id: 'youshi15_03',
                            opacity: '0',
                            rect: ['1.8%', '2.1%', '9.1%', '6.3%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/youshi15_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'youshi16_03',
                            opacity: '0',
                            rect: ['12.8%', '0%', '76.9%', '10.5%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/youshi16_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'youshi17_03',
                            opacity: '0',
                            rect: ['1.8%', '14.8%', '95.2%', '18.3%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/youshi17_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'youshi19_03',
                            opacity: '0',
                            rect: ['1.8%', '37.2%', '96.5%', '36.8%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/youshi19_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'youshi20_03',
                            opacity: '0',
                            rect: ['0%', '71%', '100%', '29%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/youshi20_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'youshi21_032',
                            opacity: '0',
                            rect: ['3.7%', '74.6%', '92.5%', '20.1%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/youshi21_032.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '562px', '717px']
                        }
                    }
                },
                timeline: {
                    duration: 3205,
                    autoPlay: true,
                    data: [
                        [
                            "eid116",
                            "opacity",
                            500,
                            750,
                            "linear",
                            "${youshi16_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid117",
                            "opacity",
                            1705,
                            750,
                            "linear",
                            "${youshi20_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid121",
                            "opacity",
                            1705,
                            750,
                            "linear",
                            "${youshi19_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid118",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${youshi15_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid120",
                            "opacity",
                            2455,
                            750,
                            "linear",
                            "${youshi21_032}",
                            '0',
                            '1'
                        ],
                        [
                            "eid119",
                            "opacity",
                            1085,
                            750,
                            "linear",
                            "${youshi17_03}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_Good_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['3.8%', '0%', '8.1%', '7%', 'auto', 'auto'],
                            id: '_04',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/youshi22_03.png', '0px', '0px']
                        },
                        {
                            rect: ['14.7%', '0%', '77.2%', '22.6%', 'auto', 'auto'],
                            id: 'shuxi',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/youshi23_03.png', '0px', '0px']
                        },
                        {
                            id: 'arrow',
                            type: 'image',
                            rect: ['-120%', '45.9%', '100%', '4.9%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/youshi27_03.png', '0px', '0px']
                        },
                        {
                            rect: ['3.8%', '10%', '16.1%', '23.5%', 'auto', 'auto'],
                            id: 'goutong1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/youshi24_03.png', '0px', '0px']
                        },
                        {
                            rect: ['7.9%', '12.4%', '15.9%', '22.6%', 'auto', 'auto'],
                            id: 'zhixing1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/youshi25_03.png', '0px', '0px']
                        },
                        {
                            rect: ['9.9%', '14.2%', '15.8%', '22.6%', 'auto', 'auto'],
                            id: 'poe1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/youshi26_03.png', '0px', '0px']
                        },
                        {
                            rect: ['6.5%', '53.4%', '22.8%', '4.9%', 'auto', 'auto'],
                            id: 'goutong2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/goog_4_03.png', '0px', '0px']
                        },
                        {
                            rect: ['0%', '58.3%', '30.8%', '0%', 'auto', 'auto'],
                            id: 'goutong3',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/good4_2_03.png', '0px', '0px']
                        },
                        {
                            rect: ['6.7%', '58.4%', '17.7%', '7.2%', 'auto', 'auto'],
                            id: 'goutong4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/good_43_03.png', '0px', '0px']
                        },
                        {
                            rect: ['38.2%', '53.4%', '23.6%', '4.9%', 'auto', 'auto'],
                            id: 'zhixing2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/goog_4_053.png', '0px', '0px']
                        },
                        {
                            rect: ['32.7%', '58.3%', '30.8%', '0%', 'auto', 'auto'],
                            id: 'zhixing3',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/good4_2_05.png', '0px', '0px']
                        },
                        {
                            rect: ['37.8%', '58.4%', '17.8%', '7.2%', 'auto', 'auto'],
                            id: 'zhixing4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/good_43_05.png', '0px', '0px']
                        },
                        {
                            rect: ['71.6%', '53.4%', '18.5%', '4.9%', 'auto', 'auto'],
                            id: 'poe2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/goog_4_072.png', '0px', '0px']
                        },
                        {
                            rect: ['66.3%', '58.3%', '30.8%', '0%', 'auto', 'auto'],
                            id: 'poe3',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/good4_2_072.png', '0px', '0px']
                        },
                        {
                            rect: ['72.6%', '58.4%', '18%', '7.2%', 'auto', 'auto'],
                            id: 'poe4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/good_43_07.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '584px', '614px'],
                            overflow: 'visible'
                        }
                    }
                },
                timeline: {
                    duration: 7595,
                    autoPlay: true,
                    data: [
                        [
                            "eid132",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${_04}",
                            '0',
                            '1'
                        ],
                        [
                            "eid162",
                            "left",
                            1500,
                            608,
                            "linear",
                            "${zhixing1}",
                            '7.87%',
                            '41.1%'
                        ],
                        [
                            "eid180",
                            "opacity",
                            5870,
                            525,
                            "linear",
                            "${poe2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid198",
                            "top",
                            6395,
                            1200,
                            "easeOutBounce",
                            "${poe4}",
                            '58.4%',
                            '92.7%'
                        ],
                        [
                            "eid160",
                            "left",
                            1812,
                            608,
                            "linear",
                            "${goutong1}",
                            '3.8%',
                            '9.9%'
                        ],
                        [
                            "eid165",
                            "top",
                            1205,
                            607,
                            "linear",
                            "${poe1}",
                            '14.22%',
                            '28.3%'
                        ],
                        [
                            "eid187",
                            "height",
                            6395,
                            1200,
                            "easeOutBounce",
                            "${poe3}",
                            '0%',
                            '34.9%'
                        ],
                        [
                            "eid196",
                            "top",
                            4670,
                            1200,
                            "easeOutBounce",
                            "${zhixing4}",
                            '58.4%',
                            '93.2%'
                        ],
                        [
                            "eid164",
                            "left",
                            1205,
                            607,
                            "linear",
                            "${poe1}",
                            '9.91%',
                            '71.6%'
                        ],
                        [
                            "eid203",
                            "opacity",
                            4670,
                            75,
                            "easeOutBounce",
                            "${zhixing4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid197",
                            "top",
                            2945,
                            1200,
                            "easeOutBounce",
                            "${goutong4}",
                            '58.4%',
                            '92.8%'
                        ],
                        [
                            "eid163",
                            "top",
                            1500,
                            608,
                            "linear",
                            "${zhixing1}",
                            '12.41%',
                            '28.3%'
                        ],
                        [
                            "eid161",
                            "top",
                            1813,
                            607,
                            "linear",
                            "${goutong1}",
                            '9.99%',
                            '27.3%'
                        ],
                        [
                            "eid135",
                            "left",
                            1065,
                            820,
                            "linear",
                            "${arrow}",
                            '-120%',
                            '0%'
                        ],
                        [
                            "eid179",
                            "opacity",
                            4145,
                            525,
                            "linear",
                            "${zhixing2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid171",
                            "opacity",
                            1813,
                            607,
                            "linear",
                            "${goutong1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid189",
                            "height",
                            2945,
                            1200,
                            "easeOutBounce",
                            "${goutong3}",
                            '0%',
                            '34.9%'
                        ],
                        [
                            "eid178",
                            "opacity",
                            2420,
                            525,
                            "linear",
                            "${goutong2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid167",
                            "opacity",
                            1205,
                            607,
                            "linear",
                            "${poe1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid188",
                            "height",
                            4670,
                            1200,
                            "easeOutBounce",
                            "${zhixing3}",
                            '0%',
                            '34.9%'
                        ],
                        [
                            "eid170",
                            "opacity",
                            1500,
                            608,
                            "linear",
                            "${zhixing1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid202",
                            "opacity",
                            6395,
                            75,
                            "easeOutBounce",
                            "${poe4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid133",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${shuxi}",
                            '0',
                            '1'
                        ],
                        [
                            "eid201",
                            "opacity",
                            2945,
                            75,
                            "easeOutBounce",
                            "${goutong4}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Good_edgeActions.js");
})("Page_Good");
