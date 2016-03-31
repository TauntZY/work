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
                            id: 'Symbol_Event',
                            symbolName: 'Symbol_Event',
                            type: 'rect',
                            rect: ['15px', '-192', '600', '1275', 'auto', 'auto']
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
                    duration: 14250,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Symbol_Event": {
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
                            id: 'header',
                            rect: ['18%', '0%', '65.5%', '13%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/jishi1_03.png', '0%', '0%']
                        },
                        {
                            rect: ['43%', '-42.7%', '7.9%', '2%', 'auto', 'auto'],
                            transform: [[], ['720'], [0, 0, 0], [1, 1, 1]],
                            id: 'arrow',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jishi18_03.png', '0%', '0%']
                        },
                        {
                            rect: ['43%', '-1.3%', '7.9%', '2%', 'auto', 'auto'],
                            transform: [[], ['720'], [0, 0, 0], [1, 1, 1]],
                            id: 'arrowCopy3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jishi18_03.png', '0%', '0%']
                        },
                        {
                            rect: ['42.3%', '41.3%', '7.9%', '2%', 'auto', 'auto'],
                            id: 'arrowCopy4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jishi18_03.png', '0%', '0%']
                        },
                        {
                            rect: ['43%', '-23.9%', '7.9%', '2%', 'auto', 'auto'],
                            transform: [[], ['540'], [0, 0, 0], [1, 1, 1]],
                            id: 'arrowCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jishi18_03.png', '0%', '0%']
                        },
                        {
                            rect: ['46.2%', '18.7%', '7.9%', '2%', 'auto', 'auto'],
                            transform: [[], ['540'], [0, 0, 0], [1, 1, 1]],
                            id: 'arrowCopy5',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jishi18_03.png', '0%', '0%']
                        },
                        {
                            rect: ['46.1%', '65.5%', '7.9%', '2%', 'auto', 'auto'],
                            id: 'arrowCopy6',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jishi18_03.png', '0%', '0%']
                        },
                        {
                            type: 'image',
                            id: 'jishi17_03',
                            rect: ['56.5%', '49.1%', '40.5%', '0%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/jishi17_03.png', '0%', '0%']
                        },
                        {
                            type: 'image',
                            id: 'event_part1',
                            rect: ['0.8%', '-44.1%', '40%', '0%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/jishi2_03.png', '0%', '0px']
                        },
                        {
                            type: 'image',
                            id: 'line',
                            rect: ['47.8%', '-41.2%', '2%', '0%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/jishi19_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'lineCopy2',
                            rect: ['47.8%', '0.6%', '2%', '0%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/jishi19_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'lineCopy3',
                            rect: ['47.2%', '20.3%', '2%', '0%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/jishi19_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'lineCopy',
                            rect: ['47.8%', '-22.4%', '2%', '21.1%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/jishi19_03.png', '0px', '0px']
                        },
                        {
                            rect: ['60.5%', '-21.9%', '32%', '6.7%', 'auto', 'auto'],
                            id: 'part2_1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jishi5_03.png', '0%', '0%']
                        },
                        {
                            rect: ['64%', '-24.9%', '25%', '6%', 'auto', 'auto'],
                            id: 'part2_2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jishi4_03.png', '0%', '0%']
                        },
                        {
                            rect: ['67.5%', '-31.1%', '17.8%', '8.8%', 'auto', 'auto'],
                            id: 'part2_3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jishi3_03.png', '0%', '0%']
                        },
                        {
                            rect: ['60.3%', '-31.7%', '14.8%', '3.3%', 'auto', 'auto'],
                            id: 'part2_line3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jishi_line3_03.png', '0%', '0%']
                        },
                        {
                            rect: ['83.5%', '-16.8%', '1.8%', '16.6%', 'auto', 'auto'],
                            id: 'part2_line2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jishi_line1_03.png', '0%', '0%']
                        },
                        {
                            rect: ['55.6%', '-22.4%', '11.5%', '7.8%', 'auto', 'auto'],
                            id: 'part2_line1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jishi_line2_03.png', '0%', '0%']
                        },
                        {
                            rect: ['57.9%', '-44.1%', '34.7%', '11.9%', 'auto', 'auto'],
                            id: '_2005',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jishi6_03.png', '0%', '0%']
                        },
                        {
                            rect: ['55.2%', '-1.2%', '38.5%', '16.1%', 'auto', 'auto'],
                            id: '_2010',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jishi9_03.png', '0%', '0%']
                        },
                        {
                            rect: ['53.3%', '-15.2%', '27.5%', '14.2%', 'auto', 'auto'],
                            id: '_2006',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jishi8_03.png', '0%', '0%']
                        },
                        {
                            rect: ['29.4%', '-4.4%', '36.8%', '8.9%', 'auto', 'auto'],
                            id: 'part3_2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jishi11_03.png', '0px', '0px']
                        },
                        {
                            rect: ['70px', '-151px', '106px', '107px', 'auto', 'auto'],
                            id: 'part3_1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jishi10_03.png', '0px', '0px']
                        },
                        {
                            rect: ['0.8%', '5%', '40.9%', '9%', 'auto', 'auto'],
                            id: 'part3_3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jishi13_03.png', '0%', '0%']
                        },
                        {
                            rect: ['34px', '-224px', '168px', '59px', 'auto', 'auto'],
                            id: '_2011',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jishi12_03.png', '0px', '0px']
                        },
                        {
                            rect: ['57.1%', '15.5%', '40.5%', '0%', 'auto', 'auto'],
                            id: 'part4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jishi14_03.png', '0%', '0%']
                        },
                        {
                            rect: ['0.8%', '15.5%', '38.7%', '26.7%', 'auto', 'auto'],
                            id: 'part5_2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jishi15_02.png', '0%', '0%']
                        },
                        {
                            rect: ['0%', '55.3%', '41.8%', '18.7%', 'auto', 'auto'],
                            id: 'part5_1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jishi16_03.png', '0%', '0%']
                        },
                        {
                            type: 'image',
                            id: 'lineCopy6',
                            rect: ['47.2%', '42.9%', '2%', '0%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/jishi19_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'lineCopy7',
                            rect: ['47.1%', '66.5%', '2%', '0%', 'auto', 'auto'],
                            transform: [[], ['2'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/jishi19_03.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '600px', '1275px']
                        }
                    }
                },
                timeline: {
                    duration: 14250,
                    autoPlay: true,
                    data: [
                        [
                            "eid19",
                            "rotateZ",
                            2437,
                            440,
                            "linear",
                            "${arrowCopy}",
                            '0deg',
                            '540deg'
                        ],
                        [
                            "eid111",
                            "opacity",
                            3477,
                            550,
                            "linear",
                            "${part2_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid265",
                            "height",
                            8127,
                            330,
                            "linear",
                            "${lineCopy2}",
                            '0%',
                            '18.07%'
                        ],
                        [
                            "eid97",
                            "left",
                            3477,
                            550,
                            "linear",
                            "${part2_3}",
                            '67.51%',
                            '68.5%'
                        ],
                        [
                            "eid247",
                            "left",
                            8139,
                            752,
                            "linear",
                            "${part2_3}",
                            '68.5%',
                            '67.84%'
                        ],
                        [
                            "eid224",
                            "top",
                            8142,
                            315,
                            "linear",
                            "${arrowCopy3}",
                            '73.26%',
                            '-1.25%'
                        ],
                        [
                            "eid232",
                            "top",
                            8139,
                            752,
                            "linear",
                            "${part2_line1}",
                            '52.08%',
                            '-22.43%'
                        ],
                        [
                            "eid128",
                            "opacity",
                            4237,
                            640,
                            "linear",
                            "${part2_line1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid281",
                            "height",
                            10127,
                            500,
                            "linear",
                            "${lineCopy3}",
                            '0%',
                            '21.08%'
                        ],
                        [
                            "eid234",
                            "top",
                            8175,
                            752,
                            "linear",
                            "${_2006}",
                            '59.29%',
                            '-15.22%'
                        ],
                        [
                            "eid132",
                            "height",
                            4877,
                            515,
                            "linear",
                            "${lineCopy}",
                            '0%',
                            '21.08%'
                        ],
                        [
                            "eid33",
                            "top",
                            2437,
                            440,
                            "linear",
                            "${arrowCopy}",
                            '50.59%',
                            '50.66%'
                        ],
                        [
                            "eid242",
                            "top",
                            8163,
                            752,
                            "linear",
                            "${arrowCopy}",
                            '50.66%',
                            '-23.84%'
                        ],
                        [
                            "eid239",
                            "left",
                            8175,
                            752,
                            "linear",
                            "${arrow}",
                            '43.01%',
                            '42.33%'
                        ],
                        [
                            "eid100",
                            "top",
                            2987,
                            550,
                            "linear",
                            "${part2_1}",
                            '38.27%',
                            '52.63%'
                        ],
                        [
                            "eid260",
                            "top",
                            8139,
                            752,
                            "linear",
                            "${part2_1}",
                            '52.63%',
                            '-21.88%'
                        ],
                        [
                            "eid38",
                            "opacity",
                            877,
                            500,
                            "linear",
                            "${arrow}",
                            '0',
                            '1'
                        ],
                        [
                            "eid96",
                            "top",
                            3477,
                            550,
                            "linear",
                            "${part2_3}",
                            '29.02%',
                            '43.37%'
                        ],
                        [
                            "eid246",
                            "top",
                            8139,
                            752,
                            "linear",
                            "${part2_3}",
                            '43.37%',
                            '-31.13%'
                        ],
                        [
                            "eid277",
                            "opacity",
                            9482,
                            645,
                            "linear",
                            "${part4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid248",
                            "top",
                            8139,
                            752,
                            "linear",
                            "${part2_line3}",
                            '42.83%',
                            '-31.68%'
                        ],
                        [
                            "eid302",
                            "left",
                            11712,
                            0,
                            "linear",
                            "${part5_2}",
                            '0.83%',
                            '0.83%'
                        ],
                        [
                            "eid241",
                            "left",
                            8175,
                            752,
                            "linear",
                            "${_2005}",
                            '57.83%',
                            '57.17%'
                        ],
                        [
                            "eid245",
                            "left",
                            8127,
                            752,
                            "linear",
                            "${event_part1}",
                            '0.84%',
                            '0.17%'
                        ],
                        [
                            "eid285",
                            "rotateZ",
                            10712,
                            415,
                            "linear",
                            "${arrowCopy4}",
                            '0deg',
                            '720deg'
                        ],
                        [
                            "eid329",
                            "left",
                            8175,
                            752,
                            "linear",
                            "${_2010}",
                            '54%',
                            '55.16%'
                        ],
                        [
                            "eid158",
                            "left",
                            6377,
                            500,
                            "easeOutBack",
                            "${part3_2}",
                            '29.34%',
                            '2.34%'
                        ],
                        [
                            "eid221",
                            "left",
                            8175,
                            752,
                            "linear",
                            "${part3_2}",
                            '2.34%',
                            '1.68%'
                        ],
                        [
                            "eid160",
                            "opacity",
                            6377,
                            500,
                            "easeOutBack",
                            "${part3_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid267",
                            "opacity",
                            8969,
                            455,
                            "linear",
                            "${arrowCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid299",
                            "opacity",
                            11377,
                            585,
                            "easeOutBack",
                            "${part5_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid303",
                            "top",
                            11127,
                            585,
                            "easeOutBack",
                            "${part5_2}",
                            '15.53%',
                            '26.43%'
                        ],
                        [
                            "eid309",
                            "opacity",
                            12496,
                            381,
                            "linear",
                            "${arrowCopy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid255",
                            "left",
                            8139,
                            752,
                            "linear",
                            "${part2_line2}",
                            '83.51%',
                            '82.83%'
                        ],
                        [
                            "eid254",
                            "top",
                            8139,
                            752,
                            "linear",
                            "${part2_line2}",
                            '57.73%',
                            '-16.78%'
                        ],
                        [
                            "eid226",
                            "top",
                            8139,
                            378,
                            "linear",
                            "${lineCopy2}",
                            '75.13%',
                            '0.63%'
                        ],
                        [
                            "eid313",
                            "height",
                            12956,
                            671,
                            "linear",
                            "${jishi17_03}",
                            '0%',
                            '36.71%'
                        ],
                        [
                            "eid161",
                            "top",
                            6767,
                            500,
                            "easeOutBack",
                            "${part3_1}",
                            '709px',
                            '799px'
                        ],
                        [
                            "eid222",
                            "top",
                            8175,
                            752,
                            "linear",
                            "${part3_1}",
                            '799px',
                            '-151px'
                        ],
                        [
                            "eid164",
                            "left",
                            7017,
                            500,
                            "easeOutBack",
                            "${_2011}",
                            '34px',
                            '46px'
                        ],
                        [
                            "eid259",
                            "left",
                            8175,
                            752,
                            "linear",
                            "${_2011}",
                            '46px',
                            '42px'
                        ],
                        [
                            "eid98",
                            "top",
                            3227,
                            550,
                            "linear",
                            "${part2_2}",
                            '35.21%',
                            '49.57%'
                        ],
                        [
                            "eid228",
                            "top",
                            8139,
                            752,
                            "linear",
                            "${part2_2}",
                            '49.57%',
                            '-24.94%'
                        ],
                        [
                            "eid238",
                            "top",
                            8142,
                            315,
                            "linear",
                            "${arrow}",
                            '31.84%',
                            '-42.66%'
                        ],
                        [
                            "eid236",
                            "top",
                            8127,
                            752,
                            "linear",
                            "${line}",
                            '33.33%',
                            '-41.17%'
                        ],
                        [
                            "eid6",
                            "height",
                            1922,
                            515,
                            "linear",
                            "${line}",
                            '0%',
                            '17.32%'
                        ],
                        [
                            "eid130",
                            "opacity",
                            4237,
                            640,
                            "linear",
                            "${part2_line3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4",
                            "height",
                            1427,
                            450,
                            "linear",
                            "${event_part1}",
                            '0%',
                            '25.02%'
                        ],
                        [
                            "eid310",
                            "rotateZ",
                            12496,
                            381,
                            "linear",
                            "${arrowCopy6}",
                            '0deg',
                            '540deg'
                        ],
                        [
                            "eid335",
                            "top",
                            8175,
                            752,
                            "linear",
                            "${_2010}",
                            '73.49%',
                            '-1.25%'
                        ],
                        [
                            "eid301",
                            "top",
                            11377,
                            585,
                            "easeOutBack",
                            "${part5_1}",
                            '69.5%',
                            '55.3%'
                        ],
                        [
                            "eid138",
                            "opacity",
                            5392,
                            500,
                            "linear",
                            "${arrowCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid225",
                            "left",
                            8175,
                            752,
                            "linear",
                            "${arrowCopy3}",
                            '43.05%',
                            '42.33%'
                        ],
                        [
                            "eid253",
                            "left",
                            8139,
                            752,
                            "linear",
                            "${lineCopy}",
                            '47.85%',
                            '47.17%'
                        ],
                        [
                            "eid162",
                            "left",
                            6767,
                            500,
                            "easeOutBack",
                            "${part3_1}",
                            '70px',
                            '72px'
                        ],
                        [
                            "eid223",
                            "left",
                            8175,
                            752,
                            "linear",
                            "${part3_1}",
                            '72px',
                            '68px'
                        ],
                        [
                            "eid99",
                            "left",
                            3227,
                            550,
                            "linear",
                            "${part2_2}",
                            '64%',
                            '65%'
                        ],
                        [
                            "eid229",
                            "left",
                            8139,
                            752,
                            "linear",
                            "${part2_2}",
                            '65%',
                            '64.34%'
                        ],
                        [
                            "eid286",
                            "opacity",
                            10712,
                            415,
                            "linear",
                            "${arrowCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid300",
                            "opacity",
                            11127,
                            585,
                            "easeOutBack",
                            "${part5_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid271",
                            "rotateZ",
                            8969,
                            455,
                            "linear",
                            "${arrowCopy5}",
                            '0deg',
                            '540deg'
                        ],
                        [
                            "eid166",
                            "opacity",
                            7017,
                            500,
                            "easeOutBack",
                            "${_2011}",
                            '0',
                            '1'
                        ],
                        [
                            "eid340",
                            "rotateZ",
                            14250,
                            0,
                            "linear",
                            "${lineCopy7}",
                            '2deg',
                            '2deg'
                        ],
                        [
                            "eid252",
                            "top",
                            8127,
                            752,
                            "linear",
                            "${lineCopy}",
                            '52.1%',
                            '-22.43%'
                        ],
                        [
                            "eid165",
                            "top",
                            7017,
                            500,
                            "easeOutBack",
                            "${_2011}",
                            '646px',
                            '726px'
                        ],
                        [
                            "eid258",
                            "top",
                            8175,
                            752,
                            "linear",
                            "${_2011}",
                            '726px',
                            '-224px'
                        ],
                        [
                            "eid112",
                            "opacity",
                            3227,
                            550,
                            "linear",
                            "${part2_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid304",
                            "left",
                            11962,
                            0,
                            "linear",
                            "${part5_1}",
                            '0%',
                            '0%'
                        ],
                        [
                            "eid276",
                            "height",
                            9482,
                            645,
                            "linear",
                            "${part4}",
                            '0%',
                            '30.19%'
                        ],
                        [
                            "eid306",
                            "height",
                            12006,
                            490,
                            "linear",
                            "${lineCopy6}",
                            '0%',
                            '22.59%'
                        ],
                        [
                            "eid2",
                            "rotateZ",
                            877,
                            500,
                            "linear",
                            "${arrow}",
                            '90deg',
                            '720deg'
                        ],
                        [
                            "eid227",
                            "left",
                            8139,
                            378,
                            "linear",
                            "${lineCopy2}",
                            '47.82%',
                            '47.17%'
                        ],
                        [
                            "eid170",
                            "opacity",
                            7427,
                            500,
                            "easeOutBack",
                            "${part3_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid244",
                            "top",
                            8127,
                            752,
                            "linear",
                            "${event_part1}",
                            '30.35%',
                            '-44.15%'
                        ],
                        [
                            "eid139",
                            "rotateZ",
                            5392,
                            500,
                            "linear",
                            "${arrowCopy3}",
                            '90deg',
                            '720deg'
                        ],
                        [
                            "eid131",
                            "opacity",
                            4237,
                            640,
                            "linear",
                            "${_2005}",
                            '0',
                            '1'
                        ],
                        [
                            "eid101",
                            "left",
                            2987,
                            550,
                            "linear",
                            "${part2_1}",
                            '60.5%',
                            '61.5%'
                        ],
                        [
                            "eid261",
                            "left",
                            8139,
                            752,
                            "linear",
                            "${part2_1}",
                            '61.5%',
                            '60.84%'
                        ],
                        [
                            "eid113",
                            "opacity",
                            2987,
                            550,
                            "linear",
                            "${part2_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid337",
                            "height",
                            13730,
                            0,
                            "linear",
                            "${lineCopy7}",
                            '0%',
                            '0%'
                        ],
                        [
                            "eid338",
                            "height",
                            14250,
                            0,
                            "linear",
                            "${lineCopy7}",
                            '0%',
                            '0%'
                        ],
                        [
                            "eid129",
                            "opacity",
                            4237,
                            640,
                            "linear",
                            "${_2006}",
                            '0',
                            '1'
                        ],
                        [
                            "eid127",
                            "opacity",
                            4237,
                            640,
                            "linear",
                            "${_2010}",
                            '0',
                            '1'
                        ],
                        [
                            "eid333",
                            "opacity",
                            8175,
                            0,
                            "linear",
                            "${_2010}",
                            '1',
                            '1'
                        ],
                        [
                            "eid334",
                            "opacity",
                            8927,
                            0,
                            "linear",
                            "${_2010}",
                            '1',
                            '1'
                        ],
                        [
                            "eid320",
                            "top",
                            0,
                            580,
                            "easeOutBounce",
                            "${header}",
                            '0%',
                            '15.68%'
                        ],
                        [
                            "eid230",
                            "top",
                            8175,
                            752,
                            "easeOutBounce",
                            "${header}",
                            '15.68%',
                            '-58.82%'
                        ],
                        [
                            "eid36",
                            "opacity",
                            2437,
                            440,
                            "linear",
                            "${arrowCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid237",
                            "left",
                            8127,
                            752,
                            "linear",
                            "${line}",
                            '47.84%',
                            '47.17%'
                        ],
                        [
                            "eid159",
                            "top",
                            6377,
                            500,
                            "easeOutBack",
                            "${part3_2}",
                            '69.8%',
                            '70.04%'
                        ],
                        [
                            "eid220",
                            "top",
                            8175,
                            752,
                            "linear",
                            "${part3_2}",
                            '70.04%',
                            '-4.47%'
                        ],
                        [
                            "eid168",
                            "top",
                            7427,
                            500,
                            "easeOutBack",
                            "${part3_3}",
                            '91.06%',
                            '79.53%'
                        ],
                        [
                            "eid250",
                            "top",
                            8175,
                            752,
                            "linear",
                            "${part3_3}",
                            '79.53%',
                            '5.02%'
                        ],
                        [
                            "eid163",
                            "opacity",
                            6767,
                            500,
                            "easeOutBack",
                            "${part3_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid233",
                            "left",
                            8139,
                            752,
                            "linear",
                            "${part2_line1}",
                            '55.67%',
                            '55.01%'
                        ],
                        [
                            "eid235",
                            "left",
                            8175,
                            752,
                            "linear",
                            "${_2006}",
                            '53.33%',
                            '52.67%'
                        ],
                        [
                            "eid126",
                            "opacity",
                            4237,
                            640,
                            "linear",
                            "${part2_line2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid249",
                            "left",
                            8139,
                            752,
                            "linear",
                            "${part2_line3}",
                            '60.34%',
                            '59.67%'
                        ],
                        [
                            "eid240",
                            "top",
                            8175,
                            752,
                            "linear",
                            "${_2005}",
                            '30.35%',
                            '-44.15%'
                        ],
                        [
                            "eid32",
                            "left",
                            2437,
                            440,
                            "linear",
                            "${arrowCopy}",
                            '43.05%',
                            '46.85%'
                        ],
                        [
                            "eid243",
                            "left",
                            8163,
                            752,
                            "linear",
                            "${arrowCopy}",
                            '46.85%',
                            '46.17%'
                        ],
                        [
                            "eid167",
                            "left",
                            7427,
                            500,
                            "easeOutBack",
                            "${part3_3}",
                            '0.83%',
                            '0.01%'
                        ],
                        [
                            "eid251",
                            "left",
                            8175,
                            752,
                            "linear",
                            "${part3_3}",
                            '0.01%',
                            '-0.66%'
                        ],
                        [
                            "eid273",
                            "left",
                            9424,
                            0,
                            "linear",
                            "${arrowCopy5}",
                            '46.29%',
                            '46.29%'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Event_edgeActions.js");
})("Page_Event");
