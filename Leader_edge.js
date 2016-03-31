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
                            id: 'Symbol_Chen',
                            symbolName: 'Symbol_wu',
                            type: 'rect',
                            rect: ['91px', '305px', '190', '189', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Wu',
                            symbolName: 'Symbol_Wu',
                            type: 'rect',
                            rect: ['355px', '311px', '199', '190', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Sun',
                            symbolName: 'Symbol_Sun',
                            type: 'rect',
                            rect: ['91px', '580px', '187', '186', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Zhang',
                            symbolName: 'Symbol_Zhang',
                            type: 'rect',
                            rect: ['355px', '576px', '216', '190', 'auto', 'auto']
                        },
                        {
                            id: 'leader_header_032',
                            type: 'image',
                            rect: ['143px', '62px', '55.3%', '17.2%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"leader_header_032.png",'0px','0px']
                        },
                        {
                            id: 'Symbol_Chen_Word',
                            symbolName: 'Symbol_Chen_Word',
                            type: 'rect',
                            rect: ['-356px', '-136px', '273', '497', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Zhang_Word',
                            symbolName: 'Symbol_Zhang_Word',
                            type: 'rect',
                            rect: ['816px', '704px', '285', '410', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Wu_Word',
                            symbolName: 'Symbol_Wu_Word',
                            type: 'rect',
                            rect: ['800px', '-164px', '281', '502', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_Sun_Word',
                            symbolName: 'Symbol_Sun_Word',
                            type: 'rect',
                            rect: ['-378px', '721px', '276', '414', 'auto', 'auto']
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
                    duration: 7000,
                    autoPlay: true,
                    data: [
                        [
                            "eid126",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${Symbol_Chen_Word}",
                            '-136px',
                            '-136px'
                        ],
                        [
                            "eid124",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${Symbol_Wu_Word}",
                            '-164px',
                            '-164px'
                        ],
                        [
                            "eid125",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${Symbol_Chen_Word}",
                            '-356px',
                            '-356px'
                        ],
                        [
                            "eid74",
                            "location",
                            0,
                            1837,
                            "linear",
                            "${Symbol_Chen}",
                            [[186, 397.78, 0, 0, 0, 0,0],[441.31, 381.23, 0, 0, 0, 0,255.85],[464.69, 382.77, 0, 0, 0, 0,279.28]]
                        ],
                        [
                            "eid76",
                            "location",
                            1837,
                            1663,
                            "linear",
                            "${Symbol_Chen}",
                            [[464.69, 382.77, 0, 0, 0, 0,0],[477.31, 684.25, 0, 0, 0, 0,301.74]]
                        ],
                        [
                            "eid79",
                            "location",
                            3500,
                            1750,
                            "linear",
                            "${Symbol_Chen}",
                            [[477.31, 684.25, 0, 0, 0, 0,0],[168.69, 698.75, 0, 0, 0, 0,308.96]]
                        ],
                        [
                            "eid80",
                            "location",
                            5250,
                            1750,
                            "linear",
                            "${Symbol_Chen}",
                            [[168.69, 698.75, 0, 0, 0, 0,0],[187, 402.5, 0, 0, 0, 0,296.82]]
                        ],
                        [
                            "eid134",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${Symbol_Sun_Word}",
                            '721px',
                            '721px'
                        ],
                        [
                            "eid123",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${Symbol_Wu_Word}",
                            '800px',
                            '800px'
                        ],
                        [
                            "eid130",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${Symbol_Zhang_Word}",
                            '816px',
                            '816px'
                        ],
                        [
                            "eid102",
                            "location",
                            0,
                            1837,
                            "linear",
                            "${Symbol_Sun}",
                            [[184.5, 673, 0, 0, 0, 0,0],[174.5, 397, 0, 0, 0, 0,276.18]]
                        ],
                        [
                            "eid104",
                            "location",
                            1837,
                            1663,
                            "linear",
                            "${Symbol_Sun}",
                            [[174.5, 397, 0, 0, 0, 0,0],[451.5, 406, 0, 0, 0, 0,277.15]]
                        ],
                        [
                            "eid105",
                            "location",
                            3500,
                            1750,
                            "linear",
                            "${Symbol_Sun}",
                            [[451.5, 406, 0, 0, 0, 0,0],[459.5, 672, 0, 0, 0, 0,266.12]]
                        ],
                        [
                            "eid106",
                            "location",
                            5250,
                            1743,
                            "linear",
                            "${Symbol_Sun}",
                            [[459.5, 672, 0, 0, 0, 0,0],[186.5, 684, 0, 0, 0, 0,273.26]]
                        ],
                        [
                            "eid133",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${Symbol_Sun_Word}",
                            '-378px',
                            '-378px'
                        ],
                        [
                            "eid94",
                            "location",
                            0,
                            1837,
                            "linear",
                            "${Symbol_Zhang}",
                            [[463, 671, 0, 0, 0, 0,0],[175, 671, 0, 0, 0, 0,288]]
                        ],
                        [
                            "eid95",
                            "location",
                            1837,
                            1663,
                            "linear",
                            "${Symbol_Zhang}",
                            [[175, 671, 0, 0, 0, 0,0],[170, 417, 0, 0, 0, 0,254.05]]
                        ],
                        [
                            "eid96",
                            "location",
                            3500,
                            1750,
                            "linear",
                            "${Symbol_Zhang}",
                            [[170, 417, 0, 0, 0, 0,0],[460, 409, 0, 0, 0, 0,290.11]]
                        ],
                        [
                            "eid97",
                            "location",
                            5250,
                            1743,
                            "linear",
                            "${Symbol_Zhang}",
                            [[460, 409, 0, 0, 0, 0,0],[462, 671, 0, 0, 0, 0,262.01]]
                        ],
                        [
                            "eid129",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${Symbol_Zhang_Word}",
                            '704px',
                            '704px'
                        ],
                        [
                            "eid83",
                            "location",
                            0,
                            1837,
                            "linear",
                            "${Symbol_Wu}",
                            [[454.5, 406, 0, 0, 0, 0,0],[445.5, 671, 0, 0, 0, 0,265.15]]
                        ],
                        [
                            "eid84",
                            "location",
                            1837,
                            1663,
                            "linear",
                            "${Symbol_Wu}",
                            [[445.5, 671, 0, 0, 0, 0,0],[190.5, 671, 0, 0, 0, 0,255]]
                        ],
                        [
                            "eid85",
                            "location",
                            3500,
                            1750,
                            "linear",
                            "${Symbol_Wu}",
                            [[190.5, 671, 0, 0, 0, 0,0],[184.5, 409, 0, 0, 0, 0,262.07]]
                        ],
                        [
                            "eid86",
                            "location",
                            5250,
                            1743,
                            "linear",
                            "${Symbol_Wu}",
                            [[184.5, 409, 0, 0, 0, 0,0],[454.5, 411, 0, 0, 0, 0,270.01]]
                        ],
                            [ "eid31", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Zhang}', [] ] ],
                            [ "eid164", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Chen_Word}', [] ] ],
                            [ "eid165", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Sun_Word}', [] ] ],
                            [ "eid163", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Wu_Word}', [] ] ],
                            [ "eid32", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Chen}', [] ] ],
                            [ "eid33", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Sun}', [] ] ],
                            [ "eid107", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Wu}', [] ] ],
                            [ "eid166", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Zhang_Word}', [] ] ]
                    ]
                }
            },
            "Symbol_wu": {
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
                            id: 'Symbol_Chen_word',
                            symbolName: 'Symbol_Chen_word',
                            rect: ['0', '0', '190', '189', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '190px', '189px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                            [ "eid108", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Chen_word}', [] ] ]
                    ]
                }
            },
            "Symbol_Wu": {
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
                            id: 'wu',
                            rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/leader_052.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '199px', '190px']
                        }
                    }
                },
                timeline: {
                    duration: 315,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Symbol_Sun": {
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
                            id: 'leader10_033',
                            rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/leader10_033.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '187px', '186px']
                        }
                    }
                },
                timeline: {
                    duration: 315,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Symbol_Zhang": {
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
                            id: 'leader_062',
                            rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/leader_062.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '216px', '190px']
                        }
                    }
                },
                timeline: {
                    duration: 315,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Symbol_Header": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'leader_header',
                            rect: ['-37.6%', '0%', '100%', '100%', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/leader_header_03.png', '0%', '0%']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '354px', '165px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid30",
                            "left",
                            0,
                            500,
                            "linear",
                            "${leader_header}",
                            '-37.57%',
                            '45.67%'
                        ]
                    ]
                }
            },
            "Symbol_Chen_word": {
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
                            id: 'chen',
                            rect: ['0%', '0%', '100.1%', '100.1%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/leader_032.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '190px', '189px']
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
            "Symbol_Chen_Word": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                            id: 'leader_word_034',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/leader_word_034.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '42.7%', '51.8%']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid149",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${leader_word_034}",
                            '0%',
                            '86.12%'
                        ],
                        [
                            "eid148",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${leader_word_034}",
                            '0%',
                            '203.66%'
                        ],
                        [
                            "eid150",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${leader_word_034}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_Sun_Word": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                            id: 'leader_word_122',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/leader_word_122.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '43.1%', '43.1%']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid156",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${leader_word_122}",
                            '0',
                            '1'
                        ],
                        [
                            "eid154",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${leader_word_122}",
                            '0%',
                            '-106.76%'
                        ],
                        [
                            "eid155",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${leader_word_122}",
                            '0%',
                            '203.62%'
                        ]
                    ]
                }
            },
            "Symbol_Wu_Word": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                            id: 'leader_word_062',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/leader_word_062.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '43.9%', '52.3%']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid140",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${leader_word_062}",
                            '0%',
                            '87.65%'
                        ],
                        [
                            "eid141",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${leader_word_062}",
                            '0%',
                            '-214.95%'
                        ],
                        [
                            "eid142",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${leader_word_062}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_Zhang_Word": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                            id: 'leader_word_112',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/leader_word_112.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '44.5%', '42.7%']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid162",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${leader_word_112}",
                            '0',
                            '1'
                        ],
                        [
                            "eid161",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${leader_word_112}",
                            '0%',
                            '-97.56%'
                        ],
                        [
                            "eid160",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${leader_word_112}",
                            '0%',
                            '-222.46%'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Leader_edgeActions.js");
})("Page_Leader");
