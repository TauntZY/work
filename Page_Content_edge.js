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
                            id: 'Symbol_Content',
                            symbolName: 'Symbol_Content',
                            type: 'rect',
                            rect: ['111', '294', '418', '655', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
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
                    duration: 1350,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Symbol_Content": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0.1%', '0.1%', '100%', '100%', 'auto', 'auto'],
                            type: 'image',
                            id: 'us',
                            opacity: '0',
                            clip: 'rect(0px 418px 139.4443359375px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/content.png', '0px', '0px']
                        },
                        {
                            rect: ['0.1%', '0.1%', '100%', '100%', 'auto', 'auto'],
                            type: 'image',
                            id: 'business',
                            opacity: '0',
                            clip: 'rect(140px 418px 261.666748046875px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/content.png', '0px', '0px']
                        },
                        {
                            rect: ['0.1%', '0.1%', '100%', '100%', 'auto', 'auto'],
                            type: 'image',
                            id: 'case',
                            opacity: '0',
                            clip: 'rect(264.4443359375px 418px 388.33349609375px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/content.png', '0px', '0px']
                        },
                        {
                            rect: ['0.1%', '0.1%', '100%', '100%', 'auto', 'auto'],
                            type: 'image',
                            id: 'future',
                            opacity: '0',
                            clip: 'rect(391.111083984375px 418px 515px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/content.png', '0px', '0px']
                        },
                        {
                            rect: ['0.1%', '0.1%', '100%', '100%', 'auto', 'auto'],
                            type: 'image',
                            id: 'contact',
                            opacity: '0',
                            clip: 'rect(515.5556640625px 418px 655px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/content.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '418px', '655px']
                        }
                    }
                },
                timeline: {
                    duration: 1350,
                    autoPlay: true,
                    data: [
                        [
                            "eid25",
                            "top",
                            850,
                            500,
                            "easeOutQuad",
                            "${contact}",
                            '0%',
                            '-21.72%'
                        ],
                        [
                            "eid30",
                            "left",
                            0,
                            500,
                            "easeOutQuad",
                            "${us}",
                            '0%',
                            '0.02%'
                        ],
                        [
                            "eid29",
                            "top",
                            640,
                            500,
                            "easeOutQuad",
                            "${future}",
                            '0%',
                            '-21.72%'
                        ],
                        [
                            "eid34",
                            "opacity",
                            420,
                            500,
                            "easeOutQuad",
                            "${case}",
                            '0',
                            '1'
                        ],
                        [
                            "eid23",
                            "top",
                            195,
                            500,
                            "easeOutQuad",
                            "${business}",
                            '0%',
                            '-21.72%'
                        ],
                        [
                            "eid24",
                            "left",
                            850,
                            500,
                            "easeOutQuad",
                            "${contact}",
                            '0%',
                            '-0.01%'
                        ],
                        [
                            "eid31",
                            "top",
                            0,
                            500,
                            "easeOutQuad",
                            "${us}",
                            '0%',
                            '-21.72%'
                        ],
                        [
                            "eid28",
                            "left",
                            640,
                            500,
                            "easeOutQuad",
                            "${future}",
                            '0%',
                            '-0.01%'
                        ],
                        [
                            "eid35",
                            "opacity",
                            640,
                            500,
                            "easeOutQuad",
                            "${future}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "top",
                            420,
                            500,
                            "easeOutQuad",
                            "${case}",
                            '0%',
                            '-21.72%'
                        ],
                        [
                            "eid22",
                            "left",
                            195,
                            500,
                            "easeOutQuad",
                            "${business}",
                            '0%',
                            '-0.01%'
                        ],
                        [
                            "eid33",
                            "opacity",
                            850,
                            500,
                            "easeOutQuad",
                            "${contact}",
                            '0',
                            '1'
                        ],
                        [
                            "eid26",
                            "left",
                            420,
                            500,
                            "easeOutQuad",
                            "${case}",
                            '0%',
                            '-0.01%'
                        ],
                        [
                            "eid32",
                            "opacity",
                            195,
                            500,
                            "easeOutQuad",
                            "${business}",
                            '0',
                            '1'
                        ],
                        [
                            "eid36",
                            "opacity",
                            0,
                            500,
                            "easeOutQuad",
                            "${us}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Page_Content_edgeActions.js");
})("Page_Content");
