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
                            id: 'Symbol_Dream',
                            symbolName: 'Symbol_Dream',
                            type: 'rect',
                            rect: ['-577', '-150', '1553', '1044', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '640px', '960px', 'auto', 'auto'],
                            sizeRange: ['0px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 6110,
                    autoPlay: true,
                    data: [
                        [
                            "eid2100",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            'rgba(255,255,255,1)',
                            'rgba(255,255,255,0.00)'
                        ]
                    ]
                }
            },
            "Symbol_Dream": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['41.9%', '0%', '31.7%', '13.3%', 'auto', 'auto'],
                            filter: [0, 0, 1.25, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'mengxiang2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mengxiang2.png', '0%', '0%']
                        },
                        {
                            rect: ['36.4%', '86.7%', '14.3%', '31.8%', 'auto', 'auto'],
                            filter: [0, 0, 1.15, 0, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'san',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/san.png', '0%', '0%']
                        },
                        {
                            rect: ['51.3%', '40.7%', '13%', '3.2%', 'auto', 'auto'],
                            filter: [0, 0, 1.25, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'chuangxin',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/chuangxin.png', '0%', '0%']
                        },
                        {
                            rect: ['53.6%', '42.4%', '9.5%', '2.9%', 'auto', 'auto'],
                            filter: [0, 0, 1.25, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'qinting',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/qinting.png', '0%', '0%']
                        },
                        {
                            rect: ['52.4%', '44.7%', '9.5%', '4%', 'auto', 'auto'],
                            transform: [[], [], [], ['1.2', '1.2']],
                            filter: [0, 0, 2, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'chaoyue',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/chaoyue.png', '0%', '0%']
                        },
                        {
                            rect: ['49.8%', '40.4%', '9.1%', '4%', 'auto', 'auto'],
                            filter: [0, 0, 1.25, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'gongchuang_01',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/gongchuang_01.png', '0%', '0%']
                        },
                        {
                            rect: ['59.4%', '41.7%', '8.9%', '3.9%', 'auto', 'auto'],
                            filter: [0, 0, 1.25, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'jujue_01',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jujue_01.png', '0%', '0%']
                        },
                        {
                            rect: ['60.8%', '48.5%', '7.9%', '3.2%', 'auto', 'auto'],
                            filter: [0, 0, 1.25, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'jingyipng_01',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jingyipng_01.png', '0%', '0%']
                        },
                        {
                            rect: ['48.4%', '48.4%', '18.9%', '2.8%', 'auto', 'auto'],
                            filter: [0, 0, 1.25, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'meiyi_01',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/meiyi_01.png', '0%', '0%']
                        },
                        {
                            rect: ['53.6%', '48.4%', '11.5%', '3.5%', 'auto', 'auto'],
                            filter: [0, 0, 1.25, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'lianhao_01',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lianhao_01.png', '0%', '0%']
                        },
                        {
                            rect: ['50.7%', '46.9%', '11.6%', '3.4%', 'auto', 'auto'],
                            filter: [0, 0, 1.25, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'zuiqiu_01',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/zuiqiu_01.png', '0%', '0%']
                        },
                        {
                            rect: ['0%', '79.4%', '35.6%', '14.4%', 'auto', 'auto'],
                            filter: [0, 0, 2, 10, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'women',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/women.png', '0%', '0%']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1553px', '1044px']
                        }
                    }
                },
                timeline: {
                    duration: 6110,
                    autoPlay: true,
                    data: [
                        [
                            "eid1744",
                            "left",
                            3250,
                            435,
                            "easeOutBack",
                            "${chaoyue}",
                            '88.64%',
                            '52.27%'
                        ],
                        [
                            "eid1771",
                            "left",
                            4377,
                            793,
                            "easeOutBack",
                            "${chaoyue}",
                            '52.27%',
                            '52.39%'
                        ],
                        [
                            "eid1775",
                            "scaleY",
                            5170,
                            0,
                            "easeOutBack",
                            "${chaoyue}",
                            '1.2',
                            '1.2'
                        ],
                        [
                            "eid1794",
                            "left",
                            4377,
                            793,
                            "easeOutBounce",
                            "${jingyipng_01}",
                            '60.78%',
                            '64.12%'
                        ],
                        [
                            "eid1699",
                            "width",
                            5170,
                            0,
                            "linear",
                            "${chaoyue}",
                            '9.48%',
                            '9.48%'
                        ],
                        [
                            "eid1789",
                            "top",
                            4377,
                            793,
                            "easeOutBounce",
                            "${meiyi_01}",
                            '48.34%',
                            '54.17%'
                        ],
                        [
                            "eid1793",
                            "top",
                            4377,
                            793,
                            "easeOutBounce",
                            "${jujue_01}",
                            '41.65%',
                            '39.73%'
                        ],
                        [
                            "eid1815",
                            "left",
                            4377,
                            793,
                            "easeOutBounce",
                            "${qinting}",
                            '53.62%',
                            '44.11%'
                        ],
                        [
                            "eid1733",
                            "width",
                            5170,
                            0,
                            "linear",
                            "${lianhao_01}",
                            '11.46%',
                            '11.46%'
                        ],
                        [
                            "eid1321",
                            "filter.invert",
                            3000,
                            0,
                            "easeInExpo",
                            "${women}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1791",
                            "top",
                            4377,
                            793,
                            "easeOutBounce",
                            "${zuiqiu_01}",
                            '46.92%',
                            '61.16%'
                        ],
                        [
                            "eid2101",
                            "top",
                            5170,
                            940,
                            "linear",
                            "${zuiqiu_01}",
                            '61.16%',
                            '60.97%'
                        ],
                        [
                            "eid1823",
                            "opacity",
                            4377,
                            793,
                            "easeOutBounce",
                            "${lianhao_01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid601",
                            "opacity",
                            1060,
                            135,
                            "easeInOutBack",
                            "${san}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1706",
                            "background-position",
                            5170,
                            0,
                            "linear",
                            "${chuangxin}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1704",
                            "background-position",
                            5170,
                            0,
                            "linear",
                            "${gongchuang_01}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1320",
                            "filter.sepia",
                            3000,
                            0,
                            "easeInExpo",
                            "${women}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1813",
                            "left",
                            4377,
                            793,
                            "easeOutBounce",
                            "${gongchuang_01}",
                            '49.83%',
                            '40.94%'
                        ],
                        [
                            "eid1741",
                            "height",
                            5170,
                            0,
                            "linear",
                            "${lianhao_01}",
                            '3.5%',
                            '3.5%'
                        ],
                        [
                            "eid1735",
                            "height",
                            5170,
                            0,
                            "linear",
                            "${meiyi_01}",
                            '2.76%',
                            '2.76%'
                        ],
                        [
                            "eid1788",
                            "left",
                            4377,
                            793,
                            "easeOutBounce",
                            "${meiyi_01}",
                            '48.42%',
                            '48.47%'
                        ],
                        [
                            "eid1246",
                            "left",
                            1135,
                            1865,
                            "easeInExpo",
                            "${san}",
                            '36.44%',
                            '36.37%'
                        ],
                        [
                            "eid1701",
                            "background-position",
                            5170,
                            0,
                            "linear",
                            "${chaoyue}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1736",
                            "height",
                            5170,
                            0,
                            "linear",
                            "${gongchuang_01}",
                            '3.96%',
                            '3.96%'
                        ],
                        [
                            "eid1790",
                            "left",
                            4377,
                            793,
                            "easeOutBounce",
                            "${zuiqiu_01}",
                            '50.66%',
                            '44.11%'
                        ],
                        [
                            "eid1708",
                            "background-position",
                            5170,
                            0,
                            "linear",
                            "${jingyipng_01}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1745",
                            "top",
                            3250,
                            435,
                            "easeOutBack",
                            "${chaoyue}",
                            '44.69%',
                            '44.33%'
                        ],
                        [
                            "eid1772",
                            "top",
                            4377,
                            793,
                            "easeOutBack",
                            "${chaoyue}",
                            '44.33%',
                            '44.69%'
                        ],
                        [
                            "eid587",
                            "top",
                            1595,
                            385,
                            "easeOutBack",
                            "${mengxiang2}",
                            '0%',
                            '-0.2%'
                        ],
                        [
                            "eid591",
                            "top",
                            1980,
                            150,
                            "easeOutBack",
                            "${mengxiang2}",
                            '-0.2%',
                            '16.09%'
                        ],
                        [
                            "eid1707",
                            "background-position",
                            5170,
                            0,
                            "linear",
                            "${jujue_01}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1702",
                            "background-position",
                            5170,
                            0,
                            "linear",
                            "${zuiqiu_01}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1814",
                            "top",
                            4377,
                            793,
                            "easeOutBounce",
                            "${gongchuang_01}",
                            '40.41%',
                            '46.72%'
                        ],
                        [
                            "eid1816",
                            "top",
                            4377,
                            793,
                            "easeOutBounce",
                            "${qinting}",
                            '42.42%',
                            '39.73%'
                        ],
                        [
                            "eid1731",
                            "width",
                            5170,
                            0,
                            "linear",
                            "${jujue_01}",
                            '8.9%',
                            '8.9%'
                        ],
                        [
                            "eid1739",
                            "height",
                            5170,
                            0,
                            "linear",
                            "${jujue_01}",
                            '3.86%',
                            '3.86%'
                        ],
                        [
                            "eid1636",
                            "filter.contrast",
                            3000,
                            0,
                            "easeInExpo",
                            "${mengxiang2}",
                            '1.25',
                            '1.25'
                        ],
                        [
                            "eid1743",
                            "opacity",
                            5170,
                            0,
                            "easeInExpo",
                            "${chaoyue}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1819",
                            "opacity",
                            4377,
                            793,
                            "easeOutBounce",
                            "${chuangxin}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1705",
                            "background-position",
                            5170,
                            0,
                            "linear",
                            "${qinting}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1738",
                            "height",
                            5170,
                            0,
                            "linear",
                            "${chuangxin}",
                            '3.22%',
                            '3.22%'
                        ],
                        [
                            "eid588",
                            "-webkit-transform-origin",
                            1980,
                            150,
                            "easeOutBack",
                            "${mengxiang2}",
                            [100,100],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5005",
                            "-moz-transform-origin",
                            1980,
                            150,
                            "easeOutBack",
                            "${mengxiang2}",
                            [100,100],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5006",
                            "-ms-transform-origin",
                            1980,
                            150,
                            "easeOutBack",
                            "${mengxiang2}",
                            [100,100],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5007",
                            "msTransformOrigin",
                            1980,
                            150,
                            "easeOutBack",
                            "${mengxiang2}",
                            [100,100],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5008",
                            "-o-transform-origin",
                            1980,
                            150,
                            "easeOutBack",
                            "${mengxiang2}",
                            [100,100],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5009",
                            "transform-origin",
                            1980,
                            150,
                            "easeOutBack",
                            "${mengxiang2}",
                            [100,100],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1700",
                            "height",
                            5170,
                            0,
                            "linear",
                            "${chaoyue}",
                            '3.96%',
                            '3.96%'
                        ],
                        [
                            "eid603",
                            "top",
                            1135,
                            325,
                            "easeInOutBack",
                            "${san}",
                            '86.68%',
                            '65.84%'
                        ],
                        [
                            "eid1812",
                            "left",
                            4377,
                            793,
                            "easeOutBounce",
                            "${lianhao_01}",
                            '53.64%',
                            '61.08%'
                        ],
                        [
                            "eid1341",
                            "filter.saturate",
                            3000,
                            0,
                            "easeInExpo",
                            "${san}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1145",
                            "left",
                            2290,
                            390,
                            "easeInExpo",
                            "${women}",
                            '0%',
                            '39.98%'
                        ],
                        [
                            "eid2039",
                            "left",
                            6110,
                            0,
                            "easeOutBounce",
                            "${women}",
                            '39.98%',
                            '39.98%'
                        ],
                        [
                            "eid1703",
                            "background-position",
                            5170,
                            0,
                            "linear",
                            "${meiyi_01}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1795",
                            "top",
                            4377,
                            793,
                            "easeOutBounce",
                            "${jingyipng_01}",
                            '47%',
                            '48.46%'
                        ],
                        [
                            "eid1579",
                            "filter.contrast",
                            3000,
                            0,
                            "easeInExpo",
                            "${san}",
                            '1.15',
                            '1.15'
                        ],
                        [
                            "eid2007",
                            "filter.contrast",
                            5170,
                            0,
                            "easeOutBack",
                            "${chaoyue}",
                            '2',
                            '2'
                        ],
                        [
                            "eid1792",
                            "left",
                            4377,
                            793,
                            "easeOutBounce",
                            "${jujue_01}",
                            '59.36%',
                            '64.71%'
                        ],
                        [
                            "eid1818",
                            "top",
                            4377,
                            793,
                            "easeOutBounce",
                            "${chuangxin}",
                            '40.76%',
                            '34.39%'
                        ],
                        [
                            "eid1825",
                            "opacity",
                            4377,
                            793,
                            "easeOutBounce",
                            "${gongchuang_01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1787",
                            "top",
                            4377,
                            793,
                            "easeOutBounce",
                            "${lianhao_01}",
                            '48.34%',
                            '63.37%'
                        ],
                        [
                            "eid1821",
                            "opacity",
                            4377,
                            793,
                            "easeOutBounce",
                            "${jingyipng_01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1403",
                            "top",
                            2290,
                            0,
                            "easeInExpo",
                            "${women}",
                            '79.4%',
                            '79.4%'
                        ],
                        [
                            "eid1732",
                            "width",
                            5170,
                            0,
                            "linear",
                            "${jingyipng_01}",
                            '7.87%',
                            '7.87%'
                        ],
                        [
                            "eid1310",
                            "filter.drop-shadow.offsetH",
                            3000,
                            0,
                            "easeInExpo",
                            "${women}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1817",
                            "left",
                            4377,
                            793,
                            "easeOutBounce",
                            "${chuangxin}",
                            '51.29%',
                            '51.07%'
                        ],
                        [
                            "eid1784",
                            "scaleX",
                            3750,
                            253,
                            "easeOutBack",
                            "${chaoyue}",
                            '1.2',
                            '0.3'
                        ],
                        [
                            "eid1785",
                            "scaleX",
                            4003,
                            170,
                            "easeOutBack",
                            "${chaoyue}",
                            '0.3',
                            '1.2'
                        ],
                        [
                            "eid1786",
                            "scaleX",
                            5170,
                            0,
                            "easeOutBack",
                            "${chaoyue}",
                            '1.2',
                            '1.2'
                        ],
                        [
                            "eid1726",
                            "width",
                            5170,
                            0,
                            "linear",
                            "${zuiqiu_01}",
                            '11.58%',
                            '11.58%'
                        ],
                        [
                            "eid1319",
                            "filter.contrast",
                            3000,
                            0,
                            "easeInExpo",
                            "${women}",
                            '2',
                            '2'
                        ],
                        [
                            "eid1820",
                            "opacity",
                            4377,
                            793,
                            "easeOutBounce",
                            "${jujue_01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid94",
                            "rotateZ",
                            1595,
                            385,
                            "easeOutBack",
                            "${mengxiang2}",
                            '0deg',
                            '-25deg'
                        ],
                        [
                            "eid589",
                            "rotateZ",
                            1980,
                            150,
                            "easeOutBack",
                            "${mengxiang2}",
                            '-25deg',
                            '0deg'
                        ],
                        [
                            "eid1730",
                            "width",
                            5170,
                            0,
                            "linear",
                            "${chuangxin}",
                            '13.02%',
                            '13.02%'
                        ],
                        [
                            "eid1728",
                            "width",
                            5170,
                            0,
                            "linear",
                            "${gongchuang_01}",
                            '9.07%',
                            '9.07%'
                        ],
                        [
                            "eid1727",
                            "width",
                            5170,
                            0,
                            "linear",
                            "${meiyi_01}",
                            '18.87%',
                            '18.87%'
                        ],
                        [
                            "eid595",
                            "width",
                            1135,
                            0,
                            "easeOutQuad",
                            "${san}",
                            '42.69%',
                            '42.69%'
                        ],
                        [
                            "eid1729",
                            "width",
                            5170,
                            0,
                            "linear",
                            "${qinting}",
                            '9.52%',
                            '9.52%'
                        ],
                        [
                            "eid602",
                            "height",
                            1135,
                            325,
                            "easeInOutBack",
                            "${san}",
                            '13.32%',
                            '31.79%'
                        ],
                        [
                            "eid1338",
                            "height",
                            1460,
                            1540,
                            "easeInExpo",
                            "${san}",
                            '32.1%',
                            '31.79%'
                        ],
                        [
                            "eid1737",
                            "height",
                            5170,
                            0,
                            "linear",
                            "${qinting}",
                            '2.94%',
                            '2.94%'
                        ],
                        [
                            "eid1822",
                            "opacity",
                            4377,
                            793,
                            "easeOutBounce",
                            "${meiyi_01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1740",
                            "height",
                            5170,
                            0,
                            "linear",
                            "${jingyipng_01}",
                            '3.22%',
                            '3.22%'
                        ],
                        [
                            "eid1826",
                            "opacity",
                            4377,
                            793,
                            "easeOutBounce",
                            "${qinting}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1755",
                            "-webkit-transform-origin",
                            3250,
                            0,
                            "easeInBack",
                            "${chaoyue}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5010",
                            "-moz-transform-origin",
                            3250,
                            0,
                            "easeInBack",
                            "${chaoyue}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5011",
                            "-ms-transform-origin",
                            3250,
                            0,
                            "easeInBack",
                            "${chaoyue}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5012",
                            "msTransformOrigin",
                            3250,
                            0,
                            "easeInBack",
                            "${chaoyue}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5013",
                            "-o-transform-origin",
                            3250,
                            0,
                            "easeInBack",
                            "${chaoyue}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5014",
                            "transform-origin",
                            3250,
                            0,
                            "easeInBack",
                            "${chaoyue}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1314",
                            "filter.drop-shadow.blur",
                            3000,
                            0,
                            "easeInExpo",
                            "${women}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1734",
                            "height",
                            5170,
                            0,
                            "linear",
                            "${zuiqiu_01}",
                            '3.4%',
                            '3.4%'
                        ],
                        [
                            "eid1709",
                            "background-position",
                            5170,
                            0,
                            "linear",
                            "${lianhao_01}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid586",
                            "left",
                            1595,
                            385,
                            "easeOutBack",
                            "${mengxiang2}",
                            '41.93%',
                            '42.31%'
                        ],
                        [
                            "eid590",
                            "left",
                            1980,
                            150,
                            "easeOutBack",
                            "${mengxiang2}",
                            '42.31%',
                            '41.89%'
                        ],
                        [
                            "eid1316",
                            "filter.saturate",
                            3000,
                            0,
                            "easeInExpo",
                            "${women}",
                            '10',
                            '10'
                        ],
                        [
                            "eid1824",
                            "opacity",
                            4377,
                            793,
                            "easeOutBounce",
                            "${zuiqiu_01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2102",
                            "opacity",
                            5170,
                            940,
                            "linear",
                            "${zuiqiu_01}",
                            '1',
                            '0.95999997854233'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Slogan_edgeActions.js");
})("Page_Slogan");
