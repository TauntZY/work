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
                            id: 'Symbol_Future',
                            symbolName: 'Symbol_Future',
                            type: 'rect',
                            rect: ['41px', '34px', '577', '800', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '640px', '960px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                            [ "eid47", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_Future}', [] ] ]
                    ]
                }
            },
            "Symbol_Future": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['11px', '-19px', '566px', '769px', 'auto', 'auto'],
                            type: 'image',
                            id: 'future_03',
                            opacity: '0',
                            clip: 'rect(0px 566px 165.15380859375px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/future_03.png', '0px', '0px']
                        },
                        {
                            rect: ['11px', '9px', '566px', '769px', 'auto', 'auto'],
                            type: 'image',
                            id: 'future_03Copy',
                            opacity: '0',
                            clip: 'rect(165.384521484375px 566px 211.307373046875px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/future_03.png', '0px', '0px']
                        },
                        {
                            rect: ['6px', '14px', '566px', '769px', 'auto', 'auto'],
                            type: 'image',
                            id: 'future_03Copy2',
                            opacity: '0',
                            clip: 'rect(215.384521484375px 566px 255.53857421875px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/future_03.png', '0px', '0px']
                        },
                        {
                            rect: ['6px', '23px', '566px', '769px', 'auto', 'auto'],
                            type: 'image',
                            id: 'future_03Copy3',
                            opacity: '0',
                            clip: 'rect(259.615234375px 566px 303.615234375px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/future_03.png', '0px', '0px']
                        },
                        {
                            rect: ['6px', '29px', '566px', '769px', 'auto', 'auto'],
                            type: 'image',
                            id: 'future_03Copy4',
                            opacity: '0',
                            clip: 'rect(303.84619140625px 566px 345.9228515625px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/future_03.png', '0px', '0px']
                        },
                        {
                            rect: ['6px', '42px', '566px', '769px', 'auto', 'auto'],
                            type: 'image',
                            id: 'future_03Copy5',
                            opacity: '0',
                            clip: 'rect(344.23095703125px 566px 386.3076171875px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/future_03.png', '0px', '0px']
                        },
                        {
                            rect: ['11px', '87px', '566px', '769px', 'auto', 'auto'],
                            type: 'image',
                            id: 'future_03Copy6',
                            opacity: '0',
                            clip: 'rect(400px 277.53857421875px 769px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/future_03.png', '0px', '0px']
                        },
                        {
                            rect: ['6px', '98px', '566px', '769px', 'auto', 'auto'],
                            type: 'image',
                            id: 'future_03Copy7',
                            opacity: '0',
                            clip: 'rect(401.923095703125px 566px 769px 284.61572265625px)',
                            fill: ['rgba(0,0,0,0)', 'images/future_03.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '577px', '800px']
                        }
                    }
                },
                timeline: {
                    duration: 100,
                    autoPlay: true,
                    data: [
                        [
                            "eid42",
                            "opacity",
                            0,
                            100,
                            "linear",
                            "${future_03Copy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid41",
                            "opacity",
                            0,
                            100,
                            "linear",
                            "${future_03Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid46",
                            "opacity",
                            0,
                            100,
                            "linear",
                            "${future_03Copy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid39",
                            "opacity",
                            0,
                            100,
                            "linear",
                            "${future_03Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            0,
                            100,
                            "linear",
                            "${future_03Copy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid43",
                            "opacity",
                            0,
                            100,
                            "linear",
                            "${future_03Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid44",
                            "opacity",
                            0,
                            100,
                            "linear",
                            "${future_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid45",
                            "opacity",
                            0,
                            100,
                            "linear",
                            "${future_03Copy}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Future_edgeActions.js");
})("Page_Future");
