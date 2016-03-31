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
                            id: 'Symbol_Main',
                            symbolName: 'Symbol_Main',
                            type: 'rect',
                            rect: ['53', '-240', '1029', '1107', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '640px', '960px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2335,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Symbol_Main": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['23.8%', '65%', '29.7%', '10.7%', 'auto', 'auto'],
                            id: 'main_part2_2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/main4_03.png', '0%', '0%']
                        },
                        {
                            rect: ['26.8%', '66.7%', '23.7%', '7.3%', 'auto', 'auto'],
                            id: 'main_part2_3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/main18_03.png', '0%', '0%']
                        },
                        {
                            rect: ['14.7%', '67.8%', '7.6%', '5.1%', 'auto', 'auto'],
                            id: 'main_part2_1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/main6_03.png', '0%', '0%']
                        },
                        {
                            id: 'main_content_2',
                            type: 'image',
                            rect: ['2.8%', '0%', '13%', '5.6%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/main20_03.png', '0%', '0%']
                        },
                        {
                            id: 'main_content_1',
                            type: 'image',
                            rect: ['0%', '7.1%', '18.6%', '3.6%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/main21_03.png', '0%', '0%']
                        },
                        {
                            rect: ['23.8%', '76.7%', '29.7%', '10.7%', 'auto', 'auto'],
                            id: 'main_part3_2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/main4_03.png', '0%', '0%']
                        },
                        {
                            rect: ['26.8%', '78.5%', '21.2%', '7.2%', 'auto', 'auto'],
                            id: 'main_part3_3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/main23_03.png', '0%', '0%']
                        },
                        {
                            rect: ['15.3%', '79%', '6.4%', '6.1%', 'auto', 'auto'],
                            id: 'main_part3_1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/main7_03.png', '0%', '0%']
                        },
                        {
                            rect: ['23.8%', '88.7%', '29.7%', '10.7%', 'auto', 'auto'],
                            id: 'main_part4_3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/main4_03.png', '0%', '0%']
                        },
                        {
                            rect: ['26.8%', '90.9%', '21.2%', '6.9%', 'auto', 'auto'],
                            id: 'main_part4_2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/main15_03.png', '0%', '0%']
                        },
                        {
                            rect: ['14.9%', '90.9%', '6.7%', '6.2%', 'auto', 'auto'],
                            id: 'main_part4_1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/main8_03.png', '0%', '0%']
                        },
                        {
                            rect: ['24.2%', '100%', '29.7%', '10.7%', 'auto', 'auto'],
                            id: 'main_part5_2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/main4_03.png', '0%', '0%']
                        },
                        {
                            rect: ['27.1%', '101.5%', '20.8%', '7.7%', 'auto', 'auto'],
                            id: 'main_part5_3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/main16_03.png', '0%', '0%']
                        },
                        {
                            rect: ['16%', '102.3%', '5.4%', '6.2%', 'auto', 'auto'],
                            id: 'main_part5_1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/main25_03.png', '0px', '0px']
                        },
                        {
                            rect: ['14.7%', '55.1%', '6.5%', '5.9%', 'auto', 'auto'],
                            id: 'main_part1_1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/main3_03.png', '0%', '0%']
                        },
                        {
                            rect: ['23.8%', '53.3%', '29.7%', '10.7%', 'auto', 'auto'],
                            id: 'main_part1_2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/main4_03.png', '0%', '0%']
                        },
                        {
                            rect: ['26.9%', '55%', '20.9%', '7.2%', 'auto', 'auto'],
                            id: 'main_part1_3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/main17_03.png', '0%', '0%']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1029px', '1107px']
                        }
                    }
                },
                timeline: {
                    duration: 2750,
                    autoPlay: true,
                    data: [
                        [
                            "eid254",
                            "left",
                            1750,
                            750,
                            "easeOutQuart",
                            "${main_part4_2}",
                            '26.82%',
                            '26.63%'
                        ],
                        [
                            "eid275",
                            "opacity",
                            2000,
                            750,
                            "easeOutQuart",
                            "${main_part5_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid247",
                            "top",
                            1500,
                            750,
                            "easeOutQuart",
                            "${main_part3_3}",
                            '78.5%',
                            '64.23%'
                        ],
                        [
                            "eid257",
                            "top",
                            2000,
                            750,
                            "easeOutQuart",
                            "${main_part5_3}",
                            '101.45%',
                            '87.17%'
                        ],
                        [
                            "eid267",
                            "opacity",
                            1250,
                            750,
                            "easeOutQuart",
                            "${main_part2_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid261",
                            "top",
                            2000,
                            750,
                            "easeOutQuart",
                            "${main_part5_2}",
                            '100%',
                            '85.73%'
                        ],
                        [
                            "eid278",
                            "opacity",
                            1750,
                            750,
                            "easeOutQuart",
                            "${main_part4_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid269",
                            "opacity",
                            1000,
                            750,
                            "easeOutQuart",
                            "${main_part1_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "left",
                            2000,
                            750,
                            "easeOutQuart",
                            "${main_part5_1}",
                            '16.03%',
                            '15.84%'
                        ],
                        [
                            "eid277",
                            "opacity",
                            2000,
                            750,
                            "easeOutQuart",
                            "${main_part5_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid248",
                            "left",
                            1250,
                            750,
                            "easeOutQuart",
                            "${main_part2_1}",
                            '14.67%',
                            '14.48%'
                        ],
                        [
                            "eid11",
                            "top",
                            805,
                            370,
                            "easeOutBack",
                            "${main_content_2}",
                            '0%',
                            '28.9%'
                        ],
                        [
                            "eid239",
                            "top",
                            1750,
                            750,
                            "easeOutQuart",
                            "${main_part4_3}",
                            '88.71%',
                            '74.44%'
                        ],
                        [
                            "eid258",
                            "left",
                            1000,
                            750,
                            "easeOutQuart",
                            "${main_part1_3}",
                            '26.92%',
                            '26.72%'
                        ],
                        [
                            "eid268",
                            "opacity",
                            1500,
                            750,
                            "easeOutQuart",
                            "${main_part3_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid272",
                            "opacity",
                            1250,
                            750,
                            "easeOutQuart",
                            "${main_part2_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid263",
                            "top",
                            1750,
                            750,
                            "easeOutQuart",
                            "${main_part4_1}",
                            '90.88%',
                            '76.6%'
                        ],
                        [
                            "eid281",
                            "top",
                            630,
                            370,
                            "easeOutBack",
                            "${main_content_1}",
                            '7.05%',
                            '35.6%'
                        ],
                        [
                            "eid241",
                            "top",
                            1250,
                            750,
                            "easeOutQuart",
                            "${main_part2_2}",
                            '65.04%',
                            '50.77%'
                        ],
                        [
                            "eid265",
                            "opacity",
                            1500,
                            750,
                            "easeOutQuart",
                            "${main_part3_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid251",
                            "top",
                            1250,
                            750,
                            "easeOutQuart",
                            "${main_part2_3}",
                            '66.67%',
                            '52.39%'
                        ],
                        [
                            "eid276",
                            "opacity",
                            1000,
                            750,
                            "easeOutQuart",
                            "${main_part1_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid256",
                            "left",
                            2000,
                            750,
                            "easeOutQuart",
                            "${main_part5_3}",
                            '27.11%',
                            '26.92%'
                        ],
                        [
                            "eid249",
                            "top",
                            1250,
                            750,
                            "easeOutQuart",
                            "${main_part2_1}",
                            '67.84%',
                            '53.57%'
                        ],
                        [
                            "eid266",
                            "opacity",
                            1750,
                            750,
                            "easeOutQuart",
                            "${main_part4_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid243",
                            "top",
                            1500,
                            750,
                            "easeOutQuart",
                            "${main_part3_2}",
                            '76.69%',
                            '62.42%'
                        ],
                        [
                            "eid237",
                            "top",
                            1500,
                            750,
                            "easeOutQuart",
                            "${main_part3_1}",
                            '79.04%',
                            '64.77%'
                        ],
                        [
                            "eid255",
                            "top",
                            1750,
                            750,
                            "easeOutQuart",
                            "${main_part4_2}",
                            '90.88%',
                            '76.6%'
                        ],
                        [
                            "eid238",
                            "left",
                            1750,
                            750,
                            "easeOutQuart",
                            "${main_part4_3}",
                            '23.81%',
                            '23.62%'
                        ],
                        [
                            "eid250",
                            "left",
                            1250,
                            750,
                            "easeOutQuart",
                            "${main_part2_3}",
                            '26.82%',
                            '26.63%'
                        ],
                        [
                            "eid260",
                            "left",
                            2000,
                            750,
                            "easeOutQuart",
                            "${main_part5_2}",
                            '24.2%',
                            '24%'
                        ],
                        [
                            "eid235",
                            "top",
                            2000,
                            750,
                            "easeOutQuart",
                            "${main_part5_1}",
                            '102.26%',
                            '87.99%'
                        ],
                        [
                            "eid270",
                            "opacity",
                            1500,
                            750,
                            "easeOutQuart",
                            "${main_part3_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid245",
                            "top",
                            1000,
                            750,
                            "easeOutQuart",
                            "${main_part1_1}",
                            '55.1%',
                            '40.83%'
                        ],
                        [
                            "eid253",
                            "top",
                            1000,
                            750,
                            "easeOutQuart",
                            "${main_part1_2}",
                            '53.3%',
                            '39.02%'
                        ],
                        [
                            "eid259",
                            "top",
                            1000,
                            750,
                            "easeOutQuart",
                            "${main_part1_3}",
                            '55.01%',
                            '40.74%'
                        ],
                        [
                            "eid240",
                            "left",
                            1250,
                            750,
                            "easeOutQuart",
                            "${main_part2_2}",
                            '23.81%',
                            '23.62%'
                        ],
                        [
                            "eid264",
                            "opacity",
                            2000,
                            750,
                            "easeOutQuart",
                            "${main_part5_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid274",
                            "opacity",
                            1750,
                            750,
                            "easeOutQuart",
                            "${main_part4_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid271",
                            "opacity",
                            1250,
                            750,
                            "easeOutQuart",
                            "${main_part2_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid242",
                            "left",
                            1500,
                            750,
                            "easeOutQuart",
                            "${main_part3_2}",
                            '23.81%',
                            '23.62%'
                        ],
                        [
                            "eid262",
                            "left",
                            1750,
                            750,
                            "easeOutQuart",
                            "${main_part4_1}",
                            '14.87%',
                            '14.67%'
                        ],
                        [
                            "eid252",
                            "left",
                            1000,
                            750,
                            "easeOutQuart",
                            "${main_part1_2}",
                            '23.81%',
                            '23.62%'
                        ],
                        [
                            "eid236",
                            "left",
                            1500,
                            750,
                            "easeOutQuart",
                            "${main_part3_1}",
                            '15.26%',
                            '15.06%'
                        ],
                        [
                            "eid244",
                            "left",
                            1000,
                            750,
                            "easeOutQuart",
                            "${main_part1_1}",
                            '14.67%',
                            '14.48%'
                        ],
                        [
                            "eid246",
                            "left",
                            1500,
                            750,
                            "easeOutQuart",
                            "${main_part3_3}",
                            '26.82%',
                            '26.63%'
                        ],
                        [
                            "eid273",
                            "opacity",
                            1000,
                            750,
                            "easeOutQuart",
                            "${main_part1_2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("main_edgeActions.js");
})("PAGE_MAIN");
