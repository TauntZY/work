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
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Symbol_Case_7',
                            symbolName: 'Symbol_Lipin_1',
                            type: 'rect',
                            rect: ['-339', '-95', '947', '1028', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Case_8',
                            symbolName: 'Symbol_Lipin_2',
                            type: 'rect',
                            rect: ['46', '-95', '945', '995', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Case_9',
                            symbolName: 'Symbol_Hudong_1',
                            type: 'rect',
                            rect: ['32', '89', '576', '747', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Case_10',
                            symbolName: 'Symbol_Huodong_2',
                            type: 'rect',
                            rect: ['37', '73', '572', '778', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Case_11',
                            symbolName: 'Symbol_Huodong_3',
                            type: 'rect',
                            rect: ['39', '107', '565', '745', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Case_12',
                            symbolName: 'Symbol_Huodong_4',
                            type: 'rect',
                            rect: ['37', '106', '584', '738', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Case_13',
                            symbolName: 'Symbol_App_1',
                            type: 'rect',
                            rect: ['35', '92', '579', '771', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Case_14',
                            symbolName: 'Symbol_App_2',
                            type: 'rect',
                            rect: ['33', '91', '583', '743', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Case_15',
                            symbolName: 'Symbol_App_3',
                            type: 'rect',
                            rect: ['35', '79', '570', '767', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Case_16',
                            symbolName: 'Symbol_App_4',
                            type: 'rect',
                            rect: ['36', '92', '572', '711', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Case_17',
                            symbolName: 'Symbol_App_5',
                            type: 'rect',
                            rect: ['34', '99', '578', '761', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Case_18',
                            symbolName: 'Symbol_App_6',
                            type: 'rect',
                            rect: ['36', '119', '575', '688', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Case_19',
                            symbolName: 'Symbol_App_7',
                            type: 'rect',
                            rect: ['3', '11', '640', '960', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Case_20',
                            symbolName: 'Symbol_Huizhong',
                            type: 'rect',
                            rect: ['36', '113px', '568', '633', 'auto', 'auto']
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
                            "eid356",
                            "top",
                            0,
                            0,
                            "easeInQuad",
                            "${Symbol_Case_20}",
                            '113px',
                            '113px'
                        ],
                            [ "eid378", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Case_7}', [] ] ],
                            [ "eid375", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Case_15}', [] ] ],
                            [ "eid372", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Case_14}', [] ] ],
                            [ "eid373", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Case_16}', [] ] ],
                            [ "eid376", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Case_18}', [] ] ],
                            [ "eid377", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Case_17}', [] ] ],
                            [ "eid374", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Case_19}', [] ] ],
                            [ "eid367", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Case_13}', [] ] ],
                            [ "eid368", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Case_11}', [] ] ],
                            [ "eid371", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Case_8}', [] ] ],
                            [ "eid366", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Case_12}', [] ] ],
                            [ "eid370", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Case_9}', [] ] ],
                            [ "eid369", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Case_10}', [] ] ],
                            [ "eid365", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Case_20}', [] ] ]
                    ]
                }
            },
            "Symbol_Hudong_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-272px', '576px', '166px', 'auto', 'auto'],
                            id: 'hudong_header',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hudong_1__03.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '210px', '329px', '537px', 'auto', 'auto'],
                            id: 'hudong_word',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hudong_1__07.png', '0px', '0px']
                        },
                        {
                            id: 'hudong_img',
                            type: 'image',
                            rect: ['329px', '308px', '239px', '384px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/hudong_1__10.png', '1.2656252812502px', '391.14013671875px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '576px', '747px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid148",
                            "background-position",
                            1500,
                            1000,
                            "easeInOutBack",
                            "${hudong_img}",
                            [1.2656252812502,391.14013671875],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid146",
                            "opacity",
                            885,
                            500,
                            "easeOutBounce",
                            "${hudong_word}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "top",
                            0,
                            810,
                            "easeOutBounce",
                            "${hudong_header}",
                            '-272px',
                            '0px'
                        ],
                        [
                            "eid143",
                            "opacity",
                            0,
                            810,
                            "easeOutBounce",
                            "${hudong_header}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_Hudong_2": {
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
                            id: 'hudong3_032',
                            rect: ['0px', '0px', '562px', '697px', 'auto', 'auto'],
                            clip: 'rect(0px 562px 163.666748046875px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/hudong3_032.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'hudong3_032Copy',
                            rect: ['7px', '18px', '562px', '697px', 'auto', 'auto'],
                            clip: 'rect(242.22216796875px 562px 412.555419921875px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/hudong3_032.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'hudong3_032Copy2',
                            rect: ['0px', '45px', '562px', '697px', 'auto', 'auto'],
                            clip: 'rect(428.888916015625px 193.11083984375px 697px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/hudong3_032.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'hudong3_032Copy3',
                            rect: ['7px', '45px', '562px', '697px', 'auto', 'auto'],
                            clip: 'rect(426.666748046875px 379.77734375px 697px 188.888671875px)',
                            fill: ['rgba(0,0,0,0)', 'images/hudong3_032.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'hudong3_032Copy4',
                            rect: ['7px', '39px', '562px', '697px', 'auto', 'auto'],
                            clip: 'rect(435.5556640625px 562px 697px 380px)',
                            fill: ['rgba(0,0,0,0)', 'images/hudong3_032.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '569px', '742px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Symbol_Huodong_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            opacity: '0',
                            id: 'Symbol_Hudong_2',
                            symbolName: 'Symbol_Hudong_2',
                            clip: 'rect(0px 569px 166.4443359375px 0px)',
                            rect: ['4px', '-292px', '569', '742', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            id: 'Symbol_Hudong_2Copy',
                            symbolName: 'Symbol_Hudong_2',
                            clip: 'rect(260px 569px 426.4443359375px 0px)',
                            rect: ['2px', '0px', '569', '742', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], ['25']],
                            opacity: '0',
                            id: 'Symbol_Hudong_2Copy2',
                            symbolName: 'Symbol_Hudong_2',
                            clip: 'rect(475.555419921875px 193.4443359375px 742px 0px)',
                            rect: ['3px', '8px', '569', '742', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], ['25']],
                            opacity: '0',
                            id: 'Symbol_Hudong_2Copy3',
                            symbolName: 'Symbol_Hudong_2',
                            clip: 'rect(473.33349609375px 382.33349609375px 742px 195.55517578125px)',
                            rect: ['3px', '8px', '569', '742', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], ['25']],
                            opacity: '0',
                            id: 'Symbol_Hudong_2Copy4',
                            symbolName: 'Symbol_Hudong_2',
                            clip: 'rect(471.111083984375px 569px 742px 384.4443359375px)',
                            rect: ['3px', '14px', '569', '742', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '572px', '778px']
                        }
                    }
                },
                timeline: {
                    duration: 3750,
                    autoPlay: true,
                    data: [
                        [
                            "eid179",
                            "rotateZ",
                            2250,
                            750,
                            "easeInOutBack",
                            "${Symbol_Hudong_2Copy3}",
                            '25deg',
                            '0deg'
                        ],
                        [
                            "eid180",
                            "rotateZ",
                            1500,
                            750,
                            "easeInOutBack",
                            "${Symbol_Hudong_2Copy2}",
                            '25deg',
                            '0deg'
                        ],
                        [
                            "eid164",
                            "opacity",
                            2250,
                            750,
                            "easeInOutBack",
                            "${Symbol_Hudong_2Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid163",
                            "opacity",
                            3000,
                            750,
                            "easeInOutBack",
                            "${Symbol_Hudong_2Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid156",
                            "top",
                            0,
                            750,
                            "easeInOutBack",
                            "${Symbol_Hudong_2}",
                            '-292px',
                            '36px'
                        ],
                        [
                            "eid178",
                            "rotateZ",
                            3000,
                            750,
                            "easeInOutBack",
                            "${Symbol_Hudong_2Copy4}",
                            '25deg',
                            '0deg'
                        ],
                        [
                            "eid159",
                            "opacity",
                            750,
                            750,
                            "easeInOutBack",
                            "${Symbol_Hudong_2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid165",
                            "opacity",
                            1500,
                            750,
                            "easeInOutBack",
                            "${Symbol_Hudong_2Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid157",
                            "opacity",
                            0,
                            750,
                            "easeInOutBack",
                            "${Symbol_Hudong_2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_Huodong_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['9px', '-323px', '562px', '744px', 'auto', 'auto'],
                            type: 'image',
                            id: 'hudong4_03',
                            opacity: '0',
                            clip: 'rect(0px 562px 168.4443359375px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/hudong4_03.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '1px', '562px', '744px', 'auto', 'auto'],
                            type: 'image',
                            id: 'hudong4_03Copy',
                            opacity: '0',
                            clip: 'rect(173.333251953125px 562px 521px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/hudong4_03.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '562px', '744px', 'auto', 'auto'],
                            type: 'image',
                            id: 'hudong4_03Copy2',
                            opacity: '0',
                            clip: 'rect(524px 500px 744px 66px)',
                            fill: ['rgba(0,0,0,0)', 'images/hudong4_03.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '565px', '745px']
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: true,
                    data: [
                        [
                            "eid196",
                            "opacity",
                            0,
                            750,
                            "easeInOutCirc",
                            "${hudong4_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid198",
                            "opacity",
                            750,
                            750,
                            "easeInOutCirc",
                            "${hudong4_03Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid200",
                            "opacity",
                            1500,
                            750,
                            "easeInOutCirc",
                            "${hudong4_03Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid194",
                            "left",
                            0,
                            750,
                            "easeInOutCirc",
                            "${hudong4_03}",
                            '9px',
                            '3px'
                        ],
                        [
                            "eid195",
                            "top",
                            0,
                            750,
                            "easeInOutCirc",
                            "${hudong4_03}",
                            '-323px',
                            '0px'
                        ]
                    ]
                }
            },
            "Symbol_Huodong_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['5px', '-294px', '573px', '730px', 'auto', 'auto'],
                            type: 'image',
                            id: 'huodong4_03',
                            opacity: '0',
                            clip: 'rect(0px 573px 170.322265625px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/huodong4_03.png', '0px', '0px']
                        },
                        {
                            rect: ['11px', '0px', '573px', '730px', 'auto', 'auto'],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'huodong4_03Copy',
                            opacity: '0',
                            clip: 'rect(172.580810546875px 552.0322265625px 447.74169921875px 8.064453125px)',
                            fill: ['rgba(0,0,0,0)', 'images/huodong4_03.png', '0px', '0px']
                        },
                        {
                            rect: ['11px', '8px', '573px', '730px', 'auto', 'auto'],
                            type: 'image',
                            id: 'huodong4_03Copy2',
                            opacity: '0',
                            clip: 'rect(448.386962890625px 548.806640625px 723.54833984375px 9.67724609375px)',
                            fill: ['rgba(0,0,0,0)', 'images/huodong4_03.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '584px', '738px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid205",
                            "top",
                            0,
                            750,
                            "easeOutBounce",
                            "${huodong4_03}",
                            '-294px',
                            '0px'
                        ],
                        [
                            "eid215",
                            "opacity",
                            1750,
                            750,
                            "easeOutExpo",
                            "${huodong4_03Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid206",
                            "opacity",
                            0,
                            750,
                            "easeOutBounce",
                            "${huodong4_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid204",
                            "left",
                            0,
                            750,
                            "easeOutBounce",
                            "${huodong4_03}",
                            '5px',
                            '0px'
                        ],
                        [
                            "eid216",
                            "opacity",
                            870,
                            750,
                            "easeOutExpo",
                            "${huodong4_03Copy}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_App_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['9px', '0px', '570px', '766px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_1',
                            opacity: '0',
                            clip: 'rect(0px 570px 168px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_1.png', '0px', '0px']
                        },
                        {
                            rect: ['9px', '5px', '570px', '766px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_1Copy',
                            opacity: '0',
                            clip: 'rect(178px 238px 560px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_1.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '5px', '570px', '766px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_1Copy2',
                            opacity: '0',
                            clip: 'rect(182px 570px 766px 254px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '579px', '771px']
                        }
                    }
                },
                timeline: {
                    duration: 2145,
                    autoPlay: true,
                    data: [
                        [
                            "eid246",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${app_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid244",
                            "opacity",
                            750,
                            750,
                            "linear",
                            "${app_1Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid245",
                            "opacity",
                            1395,
                            750,
                            "linear",
                            "${app_1Copy2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_App_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '583px', '742px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_2',
                            opacity: '0',
                            clip: 'rect(0px 583px 164px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_2.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '583px', '742px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_2Copy',
                            opacity: '0',
                            clip: 'rect(166px 167px 742px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_2.png', '-9.4340820312499px', '-592.453125px']
                        },
                        {
                            rect: ['0px', '1px', '583px', '742px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_2Copy2',
                            opacity: '0',
                            clip: 'rect(214px 583px 472px 168px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_2.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '583px', '742px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_2Copy3',
                            opacity: '0',
                            clip: 'rect(484px 357px 742px 170px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_2.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '583px', '742px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_2Copy4',
                            opacity: '0',
                            clip: 'rect(484px 582.92578125px 742px 357.962890625px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '583px', '743px']
                        }
                    }
                },
                timeline: {
                    duration: 3750,
                    autoPlay: true,
                    data: [
                        [
                            "eid253",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${app_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid256",
                            "opacity",
                            1500,
                            750,
                            "linear",
                            "${app_2Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid255",
                            "opacity",
                            750,
                            750,
                            "easeInQuad",
                            "${app_2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid261",
                            "background-position",
                            750,
                            750,
                            "easeInQuad",
                            "${app_2Copy}",
                            [-9.4340820312499,-592.453125],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid254",
                            "opacity",
                            3000,
                            750,
                            "linear",
                            "${app_2Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid252",
                            "opacity",
                            2250,
                            750,
                            "linear",
                            "${app_2Copy3}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_App_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '570px', '766px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_3',
                            opacity: '0',
                            clip: 'rect(0px 570px 172.3828125px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_3.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '570px', '766px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_3Copy',
                            opacity: '0',
                            clip: 'rect(212.765869140625px 331.7021484375px 527.7021484375px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_3.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '1px', '570px', '766px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_3Copy2',
                            opacity: '0',
                            clip: 'rect(210.638427734375px 570px 521.3193359375px 365.95751953125px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_3.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '1px', '570px', '766px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_3Copy3',
                            opacity: '0',
                            clip: 'rect(540.42578125px 147.31982421875px 766px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_3.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '1px', '570px', '766px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_3Copy4',
                            opacity: '0',
                            clip: 'rect(540.42578125px 287.52587890625px 766px 146.3916015625px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_3.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '1px', '570px', '766px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_3Copy5',
                            opacity: '0',
                            clip: 'rect(540.42578125px 424.63916015625px 766px 287.62890625px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_3.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '1px', '570px', '766px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_3Copy6',
                            opacity: '0',
                            clip: 'rect(540.42578125px 570px 766px 424.7421875px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '570px', '767px']
                        }
                    }
                },
                timeline: {
                    duration: 3500,
                    autoPlay: true,
                    data: [
                        [
                            "eid308",
                            "opacity",
                            0,
                            500,
                            "easeInQuad",
                            "${app_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid307",
                            "opacity",
                            500,
                            500,
                            "easeInQuad",
                            "${app_3Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid305",
                            "opacity",
                            3000,
                            500,
                            "easeInQuad",
                            "${app_3Copy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid306",
                            "opacity",
                            1000,
                            500,
                            "easeInQuad",
                            "${app_3Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid309",
                            "opacity",
                            2500,
                            500,
                            "easeInQuad",
                            "${app_3Copy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid310",
                            "opacity",
                            2000,
                            500,
                            "easeInQuad",
                            "${app_3Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid314",
                            "rotateZ",
                            0,
                            0,
                            "easeInQuad",
                            "${app_3Copy6}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid315",
                            "rotateZ",
                            0,
                            0,
                            "easeInQuad",
                            "${app_3Copy3}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid312",
                            "rotateZ",
                            0,
                            0,
                            "easeInQuad",
                            "${app_3Copy5}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid313",
                            "rotateZ",
                            0,
                            0,
                            "easeInQuad",
                            "${app_3Copy4}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid311",
                            "opacity",
                            1500,
                            500,
                            "easeInQuad",
                            "${app_3Copy3}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_App_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '568px', '711px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_4',
                            opacity: '0',
                            clip: 'rect(0px 568px 162.92333984375px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_4.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '568px', '711px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_4Copy',
                            opacity: '0',
                            clip: 'rect(180.76953125px 568px 466.76904296875px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_4.png', '0px', '0px']
                        },
                        {
                            rect: ['4px', '0px', '568px', '711px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_4Copy2',
                            opacity: '0',
                            clip: 'rect(476.92333984375px 146.6513671875px 711px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_4.png', '0px', '0px']
                        },
                        {
                            rect: ['4px', '0px', '568px', '711px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_4Copy3',
                            opacity: '0',
                            clip: 'rect(476.92333984375px 283.72998046875px 711px 146.0673828125px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_4.png', '0px', '0px']
                        },
                        {
                            rect: ['4px', '0px', '568px', '711px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_4Copy4',
                            opacity: '0',
                            clip: 'rect(476.92333984375px 420.80859375px 711px 283.14599609375px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_4.png', '0px', '0px']
                        },
                        {
                            rect: ['4px', '0px', '568px', '711px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_4Copy5',
                            opacity: '0',
                            clip: 'rect(476.92333984375px 568px 711px 420.224609375px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '572px', '711px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid323",
                            "opacity",
                            1500,
                            500,
                            "easeInQuad",
                            "${app_4Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid322",
                            "opacity",
                            1000,
                            500,
                            "easeInQuad",
                            "${app_4Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid324",
                            "opacity",
                            2500,
                            500,
                            "easeInQuad",
                            "${app_4Copy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid326",
                            "opacity",
                            0,
                            500,
                            "easeInQuad",
                            "${app_4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid325",
                            "opacity",
                            500,
                            500,
                            "easeInQuad",
                            "${app_4Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid327",
                            "opacity",
                            2000,
                            500,
                            "easeInQuad",
                            "${app_4Copy4}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_App_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '578px', '761px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_5',
                            opacity: '0',
                            clip: 'rect(0px 578px 173.5px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_5.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '578px', '761px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_5Copy',
                            opacity: '0',
                            clip: 'rect(173.4375px 203px 462.5625px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_5.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '578px', '761px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_5Copy2',
                            opacity: '0',
                            clip: 'rect(464.0625px 201.4375px 761px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_5.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '578px', '761px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_5Copy3',
                            opacity: '0',
                            clip: 'rect(275px 578px 761px 207.8125px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_5.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '578px', '761px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid334",
                            "opacity",
                            1500,
                            500,
                            "easeInQuad",
                            "${app_5Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid332",
                            "opacity",
                            0,
                            500,
                            "easeInQuad",
                            "${app_5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid335",
                            "opacity",
                            500,
                            500,
                            "easeInQuad",
                            "${app_5Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid333",
                            "opacity",
                            1000,
                            500,
                            "easeInQuad",
                            "${app_5Copy2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_App_6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '575px', '688px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_6',
                            opacity: '0',
                            clip: 'rect(0px 575px 169.25px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_6.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '26px', '575px', '688px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_6Copy',
                            opacity: '0',
                            clip: 'rect(170.3125px 575px 383.3125px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_6.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '57px', '575px', '688px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_6Copy2',
                            opacity: '0',
                            clip: 'rect(392.1875px 193.75px 688px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_6.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '57px', '575px', '688px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_6Copy3',
                            opacity: '0',
                            clip: 'rect(390.625px 381.25px 688px 190.625px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_6.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '57px', '575px', '688px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_6Copy4',
                            opacity: '0',
                            clip: 'rect(393.75px 575px 688px 379.6875px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_6.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '575px', '688px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid344",
                            "opacity",
                            1500,
                            500,
                            "easeInQuad",
                            "${app_6Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid343",
                            "opacity",
                            2000,
                            500,
                            "easeInQuad",
                            "${app_6Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid341",
                            "opacity",
                            1000,
                            500,
                            "easeInQuad",
                            "${app_6Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid345",
                            "opacity",
                            500,
                            500,
                            "easeInQuad",
                            "${app_6Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid342",
                            "opacity",
                            0,
                            500,
                            "easeInQuad",
                            "${app_6}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_App_7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-74px', '640px', '960px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_7',
                            opacity: '0',
                            clip: 'rect(190.625px 605.625px 356.875px 39.0625px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_7.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '-23px', '640px', '960px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_7Copy2',
                            opacity: '0',
                            clip: 'rect(367.1875px 605.625px 514.6875px 39.0625px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_7.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '45px', '640px', '960px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_7Copy3',
                            opacity: '0',
                            clip: 'rect(518.75px 229.0625px 803.75px 39.0625px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_7.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '45px', '640px', '960px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_7Copy4',
                            opacity: '0',
                            clip: 'rect(520.3125px 414.4482421875px 803.75px 228.26708984375px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_7.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '45px', '640px', '960px', 'auto', 'auto'],
                            type: 'image',
                            id: 'app_7Copy5',
                            opacity: '0',
                            clip: 'rect(521.99755859375px 605.625px 803.75px 413.572265625px)',
                            fill: ['rgba(0,0,0,0)', 'images/app_7.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '640px', '960px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid353",
                            "opacity",
                            1000,
                            500,
                            "easeInQuad",
                            "${app_7Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid352",
                            "opacity",
                            0,
                            500,
                            "easeInQuad",
                            "${app_7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid351",
                            "opacity",
                            500,
                            500,
                            "easeInQuad",
                            "${app_7Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid354",
                            "opacity",
                            1500,
                            500,
                            "easeInQuad",
                            "${app_7Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid355",
                            "opacity",
                            2000,
                            500,
                            "easeInQuad",
                            "${app_7Copy5}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_Huizhong": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '568px', '633px', 'auto', 'auto'],
                            type: 'image',
                            id: 'huizhong_03',
                            opacity: '0',
                            clip: 'rect(0px 568px 168.61669921875px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/huizhong_03.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '51px', '568px', '633px', 'auto', 'auto'],
                            type: 'image',
                            id: 'huizhong_03Copy',
                            opacity: '0',
                            clip: 'rect(179.4521484375px 568px 363.13671875px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/huizhong_03.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '113px', '568px', '633px', 'auto', 'auto'],
                            type: 'image',
                            id: 'huizhong_03Copy2',
                            opacity: '0',
                            clip: 'rect(365.753662109375px 388.5478515625px 633px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/huizhong_03.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '113px', '568px', '633px', 'auto', 'auto'],
                            type: 'image',
                            id: 'huizhong_03Copy3',
                            opacity: '0',
                            clip: 'rect(364.3837890625px 568px 633px 386.30126953125px)',
                            fill: ['rgba(0,0,0,0)', 'images/huizhong_03.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '568px', '633px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid362",
                            "opacity",
                            0,
                            500,
                            "easeInQuad",
                            "${huizhong_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid364",
                            "opacity",
                            500,
                            500,
                            "easeInQuad",
                            "${huizhong_03Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid363",
                            "opacity",
                            1000,
                            500,
                            "easeInQuad",
                            "${huizhong_03Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid361",
                            "opacity",
                            1500,
                            500,
                            "easeInQuad",
                            "${huizhong_03Copy3}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_Lipin_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['40.8%', '0%', '58.9%', '90.8%', 'auto', 'auto'],
                            type: 'image',
                            id: 'lipin_1Copy',
                            opacity: '0',
                            clip: 'rect(253.845947265625px 527.23046875px 529.15380859375px -9.615234375px)',
                            fill: ['rgba(0,0,0,0)', 'images/lipin_1.png', '0%', '0%']
                        },
                        {
                            rect: ['0%', '9.2%', '58.9%', '90.8%', 'auto', 'auto'],
                            type: 'image',
                            id: 'lipin_1',
                            opacity: '0',
                            clip: 'rect(19.230712890625px 527.23046875px 252.23046875px 336.53857421875px)',
                            fill: ['rgba(0,0,0,0)', 'images/lipin_1.png', '0%', '0%']
                        },
                        {
                            rect: ['40.4%', '1.1%', '58.9%', '90.8%', 'auto', 'auto'],
                            type: 'image',
                            id: 'lipin_1Copy2',
                            opacity: '0',
                            clip: 'rect(530.76904296875px 548.38427734375px 709.9228515625px 5.76953125px)',
                            fill: ['rgba(0,0,0,0)', 'images/lipin_1.png', '0%', '0%']
                        },
                        {
                            rect: ['39.5%', '2%', '58.9%', '90.8%', 'auto', 'auto'],
                            type: 'image',
                            id: 'lipin_1Copy3',
                            opacity: '0',
                            clip: 'rect(715.384521484375px 269.5380859375px 921.46142578125px 19.23046875px)',
                            fill: ['rgba(0,0,0,0)', 'images/lipin_1.png', '0%', '0%']
                        },
                        {
                            rect: ['41.1%', '2%', '58.9%', '90.8%', 'auto', 'auto'],
                            type: 'image',
                            id: 'lipin_1Copy4',
                            opacity: '0',
                            clip: 'rect(713.461669921875px 531.07666015625px 917.615234375px 276.92333984375px)',
                            fill: ['rgba(0,0,0,0)', 'images/lipin_1.png', '0%', '0%']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '947px', '1028px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid80",
                            "opacity",
                            500,
                            1000,
                            "linear",
                            "${lipin_1Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid76",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${lipin_1Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid78",
                            "opacity",
                            1500,
                            1000,
                            "linear",
                            "${lipin_1Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid79",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${lipin_1Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid77",
                            "opacity",
                            2000,
                            1000,
                            "linear",
                            "${lipin_1}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_Lipin_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['5px', '0px', '571px', '900px', 'auto', 'auto'],
                            type: 'image',
                            id: 'lipin_2Copy',
                            opacity: '0',
                            clip: 'rect(253.846435546875px 276.76904296875px 451.92333984375px 19.23095703125px)',
                            fill: ['rgba(0,0,0,0)', 'images/lipin_2.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '571px', '900px', 'auto', 'auto'],
                            type: 'image',
                            id: 'lipin_2Copy2',
                            opacity: '0',
                            clip: 'rect(248.076904296875px 542.15380859375px 453.84619140625px 286.53857421875px)',
                            fill: ['rgba(0,0,0,0)', 'images/lipin_2.png', '0px', '0px']
                        },
                        {
                            rect: ['5px', '17px', '571px', '900px', 'auto', 'auto'],
                            type: 'image',
                            id: 'lipin_2Copy3',
                            opacity: '0',
                            clip: 'rect(459.615234375px 555.61572265625px 703.84619140625px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/lipin_2.png', '0px', '0px']
                        },
                        {
                            rect: ['3px', '47px', '571px', '900px', 'auto', 'auto'],
                            type: 'image',
                            id: 'lipin_2Copy4',
                            opacity: '0',
                            clip: 'rect(719.23095703125px 571px 900px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/lipin_2.png', '0px', '0px']
                        },
                        {
                            rect: ['558px', '95px', '571px', '900px', 'auto', 'auto'],
                            type: 'image',
                            id: 'lipin_2',
                            opacity: '0',
                            clip: 'rect(0px 224.84619140625px 250px 38.4619140625px)',
                            fill: ['rgba(0,0,0,0)', 'images/lipin_2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '945px', '995px']
                        }
                    }
                },
                timeline: {
                    duration: 2855,
                    autoPlay: true,
                    data: [
                        [
                            "eid132",
                            "opacity",
                            2315,
                            540,
                            "linear",
                            "${lipin_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid136",
                            "opacity",
                            500,
                            1000,
                            "linear",
                            "${lipin_2Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid135",
                            "opacity",
                            1500,
                            1000,
                            "linear",
                            "${lipin_2Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid134",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${lipin_2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid138",
                            "left",
                            2315,
                            540,
                            "linear",
                            "${lipin_2}",
                            '558px',
                            '374px'
                        ],
                        [
                            "eid133",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${lipin_2Copy3}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Page_Case_Hudong_edgeActions.js");
})("Page_Case_Hudong");
