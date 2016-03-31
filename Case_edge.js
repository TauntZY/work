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
                            id: 'Symbol_Case_1',
                            symbolName: 'Symbol_Case_1',
                            type: 'rect',
                            rect: ['-490', '-265', '1553', '1413', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Case_2',
                            symbolName: 'Symbol_Case_2',
                            type: 'rect',
                            rect: ['33', '87', '416', '1083', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Case_3',
                            symbolName: 'Symbol_Case_3',
                            type: 'rect',
                            rect: ['108', '48', '501', '1081', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Case_4',
                            symbolName: 'Symbol_Case_4',
                            type: 'rect',
                            rect: ['290', '312', '720', '780', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Case_5',
                            symbolName: 'Symbol_Case_5',
                            type: 'rect',
                            rect: ['33px', '312px', '554', '861', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Case_6',
                            symbolName: 'Symbol_Case_6',
                            type: 'rect',
                            rect: ['-244', '-122', '949', '1261', 'auto', 'auto']
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
                    duration: 3750,
                    autoPlay: true,
                    data: [
                        [
                            "eid457",
                            "top",
                            0,
                            0,
                            "swing",
                            "${Symbol_Case_5}",
                            '312px',
                            '312px'
                        ],
                        [
                            "eid375",
                            "scaleX",
                            3750,
                            0,
                            "easeOutElastic",
                            "${Symbol_Case_4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid379",
                            "scaleY",
                            3750,
                            0,
                            "easeOutElastic",
                            "${Symbol_Case_4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid450",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Symbol_Case_5}",
                            '33px',
                            '33px'
                        ],
                            [ "eid137", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Case_1}', [] ] ],
                            [ "eid310", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Case_3}', [] ] ],
                            [ "eid147", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Case_2}', [] ] ],
                            [ "eid441", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Case_5}', [] ] ],
                            [ "eid387", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Case_4}', [] ] ],
                            [ "eid448", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Case_6}', [] ] ]
                    ]
                }
            },
            "Symbol_Case_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['35%', '25%', '34.3%', '11.3%', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'huiyi3_03',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi3_03.png', '0px', '0px']
                        },
                        {
                            rect: ['0%', '34.3%', '18.2%', '27.5%', 'auto', 'auto'],
                            id: 'huiyi6_03',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi6_03.png', '0px', '0px']
                        },
                        {
                            rect: ['77%', '16.9%', '18.4%', '13.7%', 'auto', 'auto'],
                            transform: [[], ['-360']],
                            id: 'huiyi4_03',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi4_03.png', '0px', '0px']
                        },
                        {
                            rect: ['82%', '64.8%', '18%', '13.5%', 'auto', 'auto'],
                            transform: [[], ['360']],
                            id: 'huiyi5_03',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi5_03.png', '0px', '0px']
                        },
                        {
                            rect: ['79.1%', '10%', '11.2%', '8.1%', 'auto', 'auto'],
                            transform: [[], ['720']],
                            id: 'huiyi15_15',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi15_15.png', '0px', '0px']
                        },
                        {
                            rect: ['79.1%', '18.2%', '11.1%', '8.1%', 'auto', 'auto'],
                            transform: [[], ['720']],
                            id: 'huiyi15_21',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi15_21.png', '0px', '0px']
                        },
                        {
                            rect: ['9.1%', '0%', '18.6%', '16.2%', 'auto', 'auto'],
                            transform: [[], ['720']],
                            id: 'huiyi15_17',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi15_17.png', '0px', '0px']
                        },
                        {
                            rect: ['45.2%', '61.9%', '7.2%', '15.7%', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'huiyi14_03',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi14_03.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1553px', '1413px']
                        }
                    }
                },
                timeline: {
                    duration: 5415,
                    autoPlay: true,
                    data: [
                        [
                            "eid16",
                            "top",
                            1250,
                            500,
                            "linear",
                            "${huiyi4_03}",
                            '16.88%',
                            '34.43%'
                        ],
                        [
                            "eid4",
                            "left",
                            750,
                            500,
                            "linear",
                            "${huiyi6_03}",
                            '0%',
                            '34.02%'
                        ],
                        [
                            "eid28",
                            "rotateZ",
                            1750,
                            500,
                            "linear",
                            "${huiyi5_03}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid60",
                            "left",
                            3000,
                            750,
                            "linear",
                            "${huiyi15_15}",
                            '79.08%',
                            '34.34%'
                        ],
                        [
                            "eid78",
                            "scaleX",
                            4300,
                            700,
                            "easeOutBounce",
                            "${huiyi14_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid48",
                            "rotateZ",
                            2250,
                            750,
                            "linear",
                            "${huiyi15_17}",
                            '720deg',
                            '0deg'
                        ],
                        [
                            "eid64",
                            "opacity",
                            3000,
                            750,
                            "linear",
                            "${huiyi15_15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid46",
                            "left",
                            2250,
                            750,
                            "linear",
                            "${huiyi15_17}",
                            '9.1%',
                            '52.17%'
                        ],
                        [
                            "eid19",
                            "rotateZ",
                            1250,
                            500,
                            "linear",
                            "${huiyi4_03}",
                            '0deg',
                            '-360deg'
                        ],
                        [
                            "eid49",
                            "opacity",
                            2250,
                            750,
                            "linear",
                            "${huiyi15_17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid62",
                            "rotateZ",
                            3550,
                            750,
                            "linear",
                            "${huiyi15_21}",
                            '720deg',
                            '0deg'
                        ],
                        [
                            "eid6",
                            "opacity",
                            750,
                            500,
                            "linear",
                            "${huiyi6_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid88",
                            "scaleX",
                            0,
                            750,
                            "easeOutBounce",
                            "${huiyi3_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid47",
                            "top",
                            2250,
                            750,
                            "linear",
                            "${huiyi15_17}",
                            '0%',
                            '61.54%'
                        ],
                        [
                            "eid59",
                            "top",
                            3550,
                            750,
                            "linear",
                            "${huiyi15_21}",
                            '18.19%',
                            '69.96%'
                        ],
                        [
                            "eid17",
                            "opacity",
                            1250,
                            500,
                            "linear",
                            "${huiyi4_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid26",
                            "left",
                            1750,
                            500,
                            "linear",
                            "${huiyi5_03}",
                            '81.98%',
                            '52.04%'
                        ],
                        [
                            "eid87",
                            "opacity",
                            0,
                            750,
                            "easeOutBounce",
                            "${huiyi3_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid61",
                            "top",
                            3000,
                            750,
                            "linear",
                            "${huiyi15_15}",
                            '10.05%',
                            '61.82%'
                        ],
                        [
                            "eid27",
                            "top",
                            1750,
                            500,
                            "linear",
                            "${huiyi5_03}",
                            '64.79%',
                            '48.01%'
                        ],
                        [
                            "eid65",
                            "opacity",
                            3550,
                            750,
                            "linear",
                            "${huiyi15_21}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15",
                            "left",
                            1250,
                            500,
                            "linear",
                            "${huiyi4_03}",
                            '76.99%',
                            '52.04%'
                        ],
                        [
                            "eid5",
                            "top",
                            750,
                            500,
                            "linear",
                            "${huiyi6_03}",
                            '34.32%',
                            '34.36%'
                        ],
                        [
                            "eid58",
                            "left",
                            3550,
                            750,
                            "linear",
                            "${huiyi15_21}",
                            '79.08%',
                            '34.34%'
                        ],
                        [
                            "eid89",
                            "scaleY",
                            0,
                            750,
                            "easeOutBounce",
                            "${huiyi3_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid79",
                            "scaleY",
                            4300,
                            700,
                            "easeOutBounce",
                            "${huiyi14_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid29",
                            "opacity",
                            1750,
                            500,
                            "linear",
                            "${huiyi5_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid63",
                            "rotateZ",
                            3000,
                            750,
                            "linear",
                            "${huiyi15_15}",
                            '720deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "Symbol_Case_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['3.6%', '0.1%', '46.4%', '14.6%', 'auto', 'auto'],
                            id: 'huiyi10_03',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi10_03.png', '0px', '0px']
                        },
                        {
                            rect: ['51.9%', '0%', '47.9%', '14.7%', 'auto', 'auto'],
                            id: 'huiyi10_05',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi10_05.png', '0px', '0px']
                        },
                        {
                            rect: ['1.4%', '15.6%', '135.1%', '22.3%', 'auto', 'auto'],
                            transform: [[], [], [], ['0']],
                            id: 'huiyi10_10',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi10_10.png', '0px', '0px']
                        },
                        {
                            rect: ['2.8%', '42.2%', '47.1%', '5.2%', 'auto', 'auto'],
                            id: 'huiyi11_03',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi11_03.png', '0px', '0px']
                        },
                        {
                            rect: ['2.9%', '49.6%', '66.8%', '6.7%', 'auto', 'auto'],
                            id: 'huiyi11_07',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi11_07.png', '0px', '0px']
                        },
                        {
                            rect: ['0%', '57.4%', '85.3%', '12.6%', 'auto', 'auto'],
                            id: 'huiyi11_10',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi11_10.png', '0px', '0px']
                        },
                        {
                            rect: ['88.2%', '39.6%', '47.6%', '0%', 'auto', 'auto'],
                            id: 'huiyi10_14',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi10_14.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '416px', '1083px']
                        }
                    }
                },
                timeline: {
                    duration: 6454,
                    autoPlay: true,
                    data: [
                        [
                            "eid124",
                            "top",
                            250,
                            1000,
                            "easeOutBounce",
                            "${huiyi10_03}",
                            '0.09%',
                            '0.08%'
                        ],
                        [
                            "eid136",
                            "opacity",
                            5050,
                            700,
                            "easeOutBounce",
                            "${huiyi10_14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid123",
                            "left",
                            250,
                            1000,
                            "easeOutBounce",
                            "${huiyi10_03}",
                            '3.62%',
                            '39.43%'
                        ],
                        [
                            "eid142",
                            "opacity",
                            2175,
                            1000,
                            "easeOutBounce",
                            "${huiyi11_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid117",
                            "rotateZ",
                            1250,
                            0,
                            "easeOutBounce",
                            "${huiyi10_03}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid135",
                            "height",
                            5050,
                            700,
                            "easeOutBounce",
                            "${huiyi10_14}",
                            '0%',
                            '30.92%'
                        ],
                        [
                            "eid143",
                            "opacity",
                            3845,
                            1000,
                            "linear",
                            "${huiyi11_10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid141",
                            "opacity",
                            3000,
                            1000,
                            "easeOutBounce",
                            "${huiyi11_07}",
                            '0',
                            '1'
                        ],
                        [
                            "eid118",
                            "rotateZ",
                            1000,
                            0,
                            "easeOutBounce",
                            "${huiyi10_05}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid126",
                            "top",
                            0,
                            1000,
                            "easeOutBounce",
                            "${huiyi10_05}",
                            '0%',
                            '0.08%'
                        ],
                        [
                            "eid132",
                            "opacity",
                            1300,
                            1000,
                            "easeOutBounce",
                            "${huiyi10_10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid128",
                            "opacity",
                            250,
                            1000,
                            "easeOutBounce",
                            "${huiyi10_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid131",
                            "scaleX",
                            1300,
                            1000,
                            "easeOutBounce",
                            "${huiyi10_10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid127",
                            "opacity",
                            0,
                            1000,
                            "easeOutBounce",
                            "${huiyi10_05}",
                            '0',
                            '1'
                        ],
                        [
                            "eid125",
                            "left",
                            0,
                            1000,
                            "easeOutBounce",
                            "${huiyi10_05}",
                            '51.92%',
                            '88.48%'
                        ]
                    ]
                }
            },
            "Symbol_Case_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-15%', '2.1%', '40.2%', '0%', 'auto', 'auto'],
                            id: 'huiyi16_03',
                            opacity: '0.800000011920929',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi16_03.png', '0px', '0px']
                        },
                        {
                            rect: ['30.6%', '-8.5%', '75.3%', '33.9%', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'huiyi16_06',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi16_06.png', '0px', '0px']
                        },
                        {
                            rect: ['-13.4%', '36.9%', '38.4%', '16.3%', 'auto', 'auto'],
                            transform: [[], [], [], ['0.3', '0.3']],
                            id: 'huiyi16_11',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi16_11.png', '0px', '0px']
                        },
                        {
                            rect: ['23.7%', '37.1%', '37%', '16.1%', 'auto', 'auto'],
                            transform: [[], [], [], ['0.3', '0.3']],
                            id: 'huiyi16_14',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi16_14.png', '0px', '0px']
                        },
                        {
                            rect: ['61.1%', '37.1%', '37.2%', '16.1%', 'auto', 'auto'],
                            transform: [[], [], [], ['0.3', '0.3']],
                            id: 'huiyi16_16',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi16_16.png', '0px', '0px']
                        },
                        {
                            rect: ['23.9%', '54.2%', '76.1%', '20.5%', 'auto', 'auto'],
                            id: 'huiyi16_22',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi16_22.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '501px', '1081px']
                        }
                    }
                },
                timeline: {
                    duration: 4595,
                    autoPlay: true,
                    data: [
                        [
                            "eid223",
                            "opacity",
                            0,
                            0,
                            "easeOutBounce",
                            "${huiyi16_03}",
                            '0.800000011920929',
                            '0.800000011920929'
                        ],
                        [
                            "eid232",
                            "opacity",
                            0,
                            0,
                            "easeOutBounce",
                            "${huiyi16_06}",
                            '0',
                            '0'
                        ],
                        [
                            "eid157",
                            "opacity",
                            750,
                            500,
                            "easeInOutQuad",
                            "${huiyi16_06}",
                            '0',
                            '1'
                        ],
                        [
                            "eid176",
                            "scaleY",
                            1815,
                            750,
                            "easeInOutQuad",
                            "${huiyi16_14}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid225",
                            "opacity",
                            0,
                            0,
                            "easeOutBounce",
                            "${huiyi16_11}",
                            '0',
                            '0'
                        ],
                        [
                            "eid182",
                            "opacity",
                            1250,
                            750,
                            "easeInOutQuad",
                            "${huiyi16_11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid195",
                            "opacity",
                            2000,
                            0,
                            "easeOutBounce",
                            "${huiyi16_11}",
                            '1',
                            '1'
                        ],
                        [
                            "eid149",
                            "height",
                            0,
                            500,
                            "easeOutBounce",
                            "${huiyi16_03}",
                            '0%',
                            '33.56%'
                        ],
                        [
                            "eid178",
                            "scaleY",
                            1250,
                            750,
                            "easeInOutQuad",
                            "${huiyi16_11}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid156",
                            "top",
                            750,
                            500,
                            "easeInOutQuad",
                            "${huiyi16_06}",
                            '-8.46%',
                            '2.63%'
                        ],
                        [
                            "eid162",
                            "scaleX",
                            750,
                            500,
                            "easeInOutQuad",
                            "${huiyi16_06}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid177",
                            "scaleX",
                            1250,
                            750,
                            "easeInOutQuad",
                            "${huiyi16_11}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid228",
                            "opacity",
                            0,
                            0,
                            "easeOutBounce",
                            "${huiyi16_14}",
                            '0',
                            '0'
                        ],
                        [
                            "eid181",
                            "opacity",
                            1815,
                            750,
                            "easeInOutQuad",
                            "${huiyi16_14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid197",
                            "opacity",
                            2565,
                            0,
                            "easeOutBounce",
                            "${huiyi16_14}",
                            '1',
                            '1'
                        ],
                        [
                            "eid155",
                            "left",
                            750,
                            500,
                            "easeInOutQuad",
                            "${huiyi16_06}",
                            '30.56%',
                            '24.02%'
                        ],
                        [
                            "eid234",
                            "opacity",
                            0,
                            0,
                            "easeOutBounce",
                            "${huiyi16_16}",
                            '0',
                            '0'
                        ],
                        [
                            "eid183",
                            "opacity",
                            2430,
                            750,
                            "easeInOutQuad",
                            "${huiyi16_16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid200",
                            "opacity",
                            3180,
                            0,
                            "easeOutBounce",
                            "${huiyi16_16}",
                            '1',
                            '1'
                        ],
                        [
                            "eid179",
                            "scaleX",
                            2430,
                            750,
                            "easeInOutQuad",
                            "${huiyi16_16}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid180",
                            "scaleY",
                            2430,
                            750,
                            "easeInOutQuad",
                            "${huiyi16_16}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid187",
                            "left",
                            3290,
                            635,
                            "linear",
                            "${huiyi16_22}",
                            '23.92%',
                            '-14.22%'
                        ],
                        [
                            "eid230",
                            "opacity",
                            0,
                            0,
                            "easeOutBounce",
                            "${huiyi16_22}",
                            '0',
                            '0'
                        ],
                        [
                            "eid189",
                            "opacity",
                            3290,
                            635,
                            "linear",
                            "${huiyi16_22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid198",
                            "opacity",
                            3925,
                            0,
                            "easeOutBounce",
                            "${huiyi16_22}",
                            '1',
                            '1'
                        ],
                        [
                            "eid163",
                            "scaleY",
                            750,
                            500,
                            "easeInOutQuad",
                            "${huiyi16_06}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid175",
                            "scaleX",
                            1815,
                            750,
                            "easeInOutQuad",
                            "${huiyi16_14}",
                            '0.3',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_Case_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-34.6%', '-30%', '77.4%', '27.4%', 'auto', 'auto'],
                            transform: [[], [], [], ['1', '0']],
                            id: 'huiyi18_03',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi18_03.png', '0px', '0px']
                        },
                        {
                            rect: ['68.5%', '0%', '28.9%', '22.8%', 'auto', 'auto'],
                            id: 'huiyi18_07',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi18_07.png', '0px', '0px']
                        },
                        {
                            rect: ['67.8%', '22.6%', '30.3%', '24.4%', 'auto', 'auto'],
                            id: 'huiyi18_14',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi18_14.png', '0px', '0px']
                        },
                        {
                            rect: ['67.9%', '46.2%', '32.1%', '24.7%', 'auto', 'auto'],
                            id: 'huiyi18_18',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi18_18.png', '0px', '0px']
                        },
                        {
                            rect: ['-2.9%', '1.8%', '44.2%', '51.2%', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            id: 'huiyi18_10',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huiyi18_10.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '720px', '780px']
                        }
                    }
                },
                timeline: {
                    duration: 3500,
                    autoPlay: true,
                    data: [
                        [
                            "eid240",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${huiyi18_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid282",
                            "left",
                            500,
                            750,
                            "linear",
                            "${huiyi18_07}",
                            '68.47%',
                            '-34.02%'
                        ],
                        [
                            "eid285",
                            "top",
                            1000,
                            750,
                            "linear",
                            "${huiyi18_18}",
                            '46.15%',
                            '44.87%'
                        ],
                        [
                            "eid293",
                            "rotateZ",
                            500,
                            750,
                            "linear",
                            "${huiyi18_07}",
                            '0deg',
                            '-720deg'
                        ],
                        [
                            "eid281",
                            "top",
                            750,
                            750,
                            "linear",
                            "${huiyi18_14}",
                            '22.56%',
                            '21.28%'
                        ],
                        [
                            "eid284",
                            "left",
                            1000,
                            750,
                            "linear",
                            "${huiyi18_18}",
                            '67.92%',
                            '-34.57%'
                        ],
                        [
                            "eid239",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${huiyi18_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid308",
                            "scaleY",
                            2000,
                            750,
                            "easeOutBack",
                            "${huiyi18_10}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid288",
                            "opacity",
                            750,
                            750,
                            "linear",
                            "${huiyi18_14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid289",
                            "opacity",
                            500,
                            750,
                            "linear",
                            "${huiyi18_07}",
                            '0',
                            '1'
                        ],
                        [
                            "eid283",
                            "top",
                            500,
                            750,
                            "linear",
                            "${huiyi18_07}",
                            '0%',
                            '-1.28%'
                        ],
                        [
                            "eid309",
                            "opacity",
                            2000,
                            750,
                            "easeOutBack",
                            "${huiyi18_10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid292",
                            "rotateZ",
                            750,
                            750,
                            "linear",
                            "${huiyi18_14}",
                            '0deg',
                            '-720deg'
                        ],
                        [
                            "eid280",
                            "left",
                            750,
                            750,
                            "linear",
                            "${huiyi18_14}",
                            '67.78%',
                            '-34.72%'
                        ],
                        [
                            "eid307",
                            "scaleX",
                            2000,
                            750,
                            "easeOutBack",
                            "${huiyi18_10}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid290",
                            "opacity",
                            1000,
                            750,
                            "linear",
                            "${huiyi18_18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid294",
                            "rotateZ",
                            1000,
                            750,
                            "linear",
                            "${huiyi18_18}",
                            '0deg',
                            '-720deg'
                        ]
                    ]
                }
            },
            "Symbol_Case_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['44.3%', '-6.9%', '55.5%', '45.6%', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'case_5_072',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/case_5_072.png', '0px', '0px']
                        },
                        {
                            rect: ['2.2%', '-4.7%', '33.7%', '22.5%', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0.99']],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,28,28,1.00)']
                        },
                        {
                            rect: ['0%', '0%', '99.6%', '16%', 'auto', 'auto'],
                            id: 'case_5_03',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/case_5_03.png', '0px', '0px']
                        },
                        {
                            rect: ['1.3%', '16%', '35.6%', '20.7%', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '1.03']],
                            id: 'case_5_10',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/case_5_10.png', '0px', '0px']
                        },
                        {
                            rect: ['0%', '15.6%', '100%', '23.2%', 'auto', 'auto'],
                            id: 'case_5_15',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/case_5_15.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '554px', '861px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid390",
                            "opacity",
                            1750,
                            750,
                            "easeOutBack",
                            "${case_5_072}",
                            '0',
                            '1'
                        ],
                        [
                            "eid384",
                            "scaleY",
                            1750,
                            750,
                            "easeOutBack",
                            "${case_5_10}",
                            '0',
                            '1.03'
                        ],
                        [
                            "eid355",
                            "opacity",
                            0,
                            940,
                            "swing",
                            "${case_5_15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid381",
                            "scaleX",
                            1750,
                            750,
                            "easeOutBack",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid383",
                            "scaleX",
                            1750,
                            750,
                            "easeOutBack",
                            "${case_5_10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid348",
                            "top",
                            1105,
                            340,
                            "swing",
                            "${case_5_03}",
                            '0%',
                            '-25.31%'
                        ],
                        [
                            "eid389",
                            "opacity",
                            1750,
                            750,
                            "easeOutBack",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid349",
                            "top",
                            1105,
                            340,
                            "swing",
                            "${case_5_15}",
                            '15.56%',
                            '42.26%'
                        ],
                        [
                            "eid347",
                            "left",
                            1105,
                            340,
                            "swing",
                            "${case_5_03}",
                            '0%',
                            '1.27%'
                        ],
                        [
                            "eid356",
                            "opacity",
                            0,
                            900,
                            "swing",
                            "${case_5_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid385",
                            "scaleX",
                            1750,
                            750,
                            "easeOutBack",
                            "${case_5_072}",
                            '0',
                            '1'
                        ],
                        [
                            "eid388",
                            "opacity",
                            1750,
                            750,
                            "easeOutBack",
                            "${case_5_10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid386",
                            "scaleY",
                            1750,
                            750,
                            "easeOutBack",
                            "${case_5_072}",
                            '0',
                            '1'
                        ],
                        [
                            "eid382",
                            "scaleY",
                            1750,
                            750,
                            "easeOutBack",
                            "${Rectangle}",
                            '0',
                            '0.99'
                        ],
                        [
                            "eid352",
                            "left",
                            1105,
                            340,
                            "swing",
                            "${case_5_15}",
                            '0%',
                            '1.09%'
                        ]
                    ]
                }
            },
            "Symbol_Case_6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['51.6%', '15.1%', '21.4%', '5.5%', 'auto', 'auto'],
                            transform: [[], ['-70']],
                            id: 'case_6_03',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/case_6_03.png', '0px', '0px']
                        },
                        {
                            rect: ['0%', '31.1%', '19.6%', '11.7%', 'auto', 'auto'],
                            id: 'case_6_07',
                            transform: [[], ['720']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/case_6_07.png', '0px', '0px']
                        },
                        {
                            rect: ['0.1%', '42.8%', '19.4%', '11.7%', 'auto', 'auto'],
                            id: 'case_6_18',
                            transform: [[], ['720']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/case_6_18.png', '0px', '0px']
                        },
                        {
                            rect: ['0.4%', '54.1%', '19.3%', '11.7%', 'auto', 'auto'],
                            id: 'case_6_22',
                            transform: [[], ['720']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/case_6_22.png', '0px', '0px']
                        },
                        {
                            rect: ['0.4%', '65.7%', '19.6%', '11.4%', 'auto', 'auto'],
                            id: 'case_6_26',
                            transform: [[], ['720']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/case_6_26.png', '0px', '0px']
                        },
                        {
                            rect: ['51.6%', '23.3%', '37.1%', '5.8%', 'auto', 'auto'],
                            id: 'case_6_10',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/case_6_10.png', '0px', '0px']
                        },
                        {
                            rect: ['62.2%', '31.7%', '37.8%', '45.2%', 'auto', 'auto'],
                            id: 'case_6_15',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/case_6_15.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '949px', '1261px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid416",
                            "left",
                            2000,
                            1000,
                            "easeInOutQuad",
                            "${case_6_26}",
                            '0.42%',
                            '30.18%'
                        ],
                        [
                            "eid415",
                            "top",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${case_6_07}",
                            '31.12%',
                            '31.35%'
                        ],
                        [
                            "eid414",
                            "left",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${case_6_07}",
                            '0%',
                            '29.77%'
                        ],
                        [
                            "eid417",
                            "top",
                            2000,
                            1000,
                            "easeInOutQuad",
                            "${case_6_26}",
                            '65.69%',
                            '66.01%'
                        ],
                        [
                            "eid420",
                            "left",
                            1250,
                            1000,
                            "easeInOutQuad",
                            "${case_6_18}",
                            '0.1%',
                            '29.87%'
                        ],
                        [
                            "eid418",
                            "left",
                            1500,
                            1000,
                            "easeInOutQuad",
                            "${case_6_22}",
                            '0.42%',
                            '30.18%'
                        ],
                        [
                            "eid440",
                            "rotateZ",
                            0,
                            830,
                            "easeOutBounce",
                            "${case_6_03}",
                            '-70deg',
                            '0deg'
                        ],
                        [
                            "eid421",
                            "top",
                            1250,
                            1000,
                            "easeInOutQuad",
                            "${case_6_18}",
                            '42.85%',
                            '43.09%'
                        ],
                        [
                            "eid419",
                            "top",
                            1500,
                            1000,
                            "easeInOutQuad",
                            "${case_6_22}",
                            '54.12%',
                            '54.36%'
                        ],
                        [
                            "eid434",
                            "opacity",
                            3000,
                            1000,
                            "easeInOutQuad",
                            "${case_6_15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid433",
                            "top",
                            3000,
                            1000,
                            "easeInOutQuad",
                            "${case_6_15}",
                            '31.67%',
                            '31.35%'
                        ],
                        [
                            "eid432",
                            "left",
                            3000,
                            1000,
                            "easeInOutQuad",
                            "${case_6_15}",
                            '62.17%',
                            '51.16%'
                        ],
                        [
                            "eid449",
                            "opacity",
                            0,
                            830,
                            "easeOutBounce",
                            "${case_6_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid427",
                            "opacity",
                            500,
                            500,
                            "easeInOutQuad",
                            "${case_6_10}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Case_edgeActions.js");
})("Page_Case");
