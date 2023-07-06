import React from 'react'
import './Graph_One.css'
import Image6 from '../../arrow-left.svg'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
    {
        "id": 1,
        "name": "Reinger Inc",
        "sector": "Services",
        "siren": 135694027,
        "results": [
            1,
            2
        ]
    },
    {
        "id": 2,
        "name": "Torphy, Rosenbaum and Rempel",
        "sector": "Electronic",
        "siren": 107855014,
        "results": [
            3,
            4
        ]
    },
    {
        "id": 3,
        "name": "Towne-Dach",
        "sector": "Energy",
        "siren": 115104805,
        "results": [
            5,
            6
        ]
    },
    {
        "id": 4,
        "name": "Hane-Stanton",
        "sector": "Luxury",
        "siren": 151419067,
        "results": [
            7,
            8
        ]
    },
    {
        "id": 5,
        "name": "Gaylord and Sons",
        "sector": "Retail",
        "siren": 147007807,
        "results": [
            9,
            10
        ]
    },
    {
        "id": 6,
        "name": "Wiegand-Hoeger",
        "sector": "Energy",
        "siren": 143629487,
        "results": [
            11,
            12
        ]
    },
    {
        "id": 7,
        "name": "Rogahn and Sons",
        "sector": "Services",
        "siren": 194214776,
        "results": [
            13,
            14
        ]
    },
    {
        "id": 8,
        "name": "Pagac, Bednar and Von",
        "sector": "Retail",
        "siren": 176873074,
        "results": [
            15,
            16
        ]
    },
    {
        "id": 9,
        "name": "Wilderman-Fay",
        "sector": "Services",
        "siren": 130425768,
        "results": [
            17,
            18
        ]
    },
    {
        "id": 10,
        "name": "Muller Group",
        "sector": "Luxury",
        "siren": 175112687,
        "results": [
            19,
            20
        ]
    },
    {
        "id": 11,
        "name": "Cronin, Kessler and Corwin",
        "sector": "Energy",
        "siren": 119802584,
        "results": [
            21,
            22
        ]
    },
    {
        "id": 12,
        "name": "Sporer-Romaguera",
        "sector": "Electronic",
        "siren": 100614525,
        "results": [
            23,
            24
        ]
    },
    {
        "id": 13,
        "name": "Borer and Sons",
        "sector": "Retail",
        "siren": 162375181,
        "results": [
            25,
            26
        ]
    },
    {
        "id": 14,
        "name": "Berge, Blanda and Gutmann",
        "sector": "Electronic",
        "siren": 128182766,
        "results": [
            27,
            28
        ]
    },
    {
        "id": 15,
        "name": "Sawayn-Hermiston",
        "sector": "Luxury",
        "siren": 189859166,
        "results": [
            29,
            30
        ]
    },
    {
        "id": 16,
        "name": "Halvorson Group",
        "sector": "Luxury",
        "siren": 199790774,
        "results": [
            31,
            32
        ]
    },
    {
        "id": 17,
        "name": "Donnelly-Mraz",
        "sector": "Services",
        "siren": 179611598,
        "results": [
            33,
            34
        ]
    },
    {
        "id": 18,
        "name": "Legros, Bradtke and O'Keefe",
        "sector": "Retail",
        "siren": 114151737,
        "results": [
            35,
            36
        ]
    },
    {
        "id": 19,
        "name": "Fay and Sons",
        "sector": "Luxury",
        "siren": 100933072,
        "results": [
            37,
            38
        ]
    },
    {
        "id": 20,
        "name": "Cassin LLC",
        "sector": "Electronic",
        "siren": 159459542,
        "results": [
            39,
            40
        ]
    },
    {
        "id": 21,
        "name": "Robel Inc",
        "sector": "Luxury",
        "siren": 138199832,
        "results": [
            41,
            42
        ]
    },
    {
        "id": 22,
        "name": "Oberbrunner-Gutmann",
        "sector": "Energy",
        "siren": 131043727,
        "results": [
            43,
            44
        ]
    },
    {
        "id": 23,
        "name": "Stracke Group",
        "sector": "Electronic",
        "siren": 190537129,
        "results": [
            45,
            46
        ]
    },
    {
        "id": 24,
        "name": "Collins Group",
        "sector": "Retail",
        "siren": 148151467,
        "results": [
            47,
            48
        ]
    },
    {
        "id": 25,
        "name": "Hoeger, Schoen and Dibbert",
        "sector": "Luxury",
        "siren": 175662557,
        "results": [
            49,
            50
        ]
    },
    {
        "id": 26,
        "name": "Pacocha-Schmitt",
        "sector": "Energy",
        "siren": 132741221,
        "results": [
            51,
            52
        ]
    },
    {
        "id": 27,
        "name": "Collier-Goldner",
        "sector": "Electronic",
        "siren": 190574530,
        "results": [
            53,
            54
        ]
    },
    {
        "id": 28,
        "name": "Kiehn, Stoltenberg and Friesen",
        "sector": "Electronic",
        "siren": 151306292,
        "results": [
            55,
            56
        ]
    },
    {
        "id": 29,
        "name": "Johnston, Mante and Purdy",
        "sector": "Services",
        "siren": 132122930,
        "results": [
            57,
            58
        ]
    },
    {
        "id": 30,
        "name": "Lowe-Legros",
        "sector": "Electronic",
        "siren": 103764020,
        "results": [
            59,
            60
        ]
    },
    {
        "id": 31,
        "name": "Schulist LLC",
        "sector": "Services",
        "siren": 130132106,
        "results": [
            61,
            62
        ]
    },
    {
        "id": 32,
        "name": "Ankunding-Lindgren",
        "sector": "Energy",
        "siren": 190875445,
        "results": [
            63,
            64
        ]
    },
    {
        "id": 33,
        "name": "Hudson, Cole and Torp",
        "sector": "Electronic",
        "siren": 149620575,
        "results": [
            65,
            66
        ]
    },
    {
        "id": 34,
        "name": "Fisher Inc",
        "sector": "Energy",
        "siren": 195699182,
        "results": [
            67,
            68
        ]
    },
    {
        "id": 35,
        "name": "Turner Inc",
        "sector": "Energy",
        "siren": 181691080,
        "results": [
            69,
            70
        ]
    },
    {
        "id": 36,
        "name": "Welch, Rohan and Ortiz",
        "sector": "Electronic",
        "siren": 148674050,
        "results": [
            71,
            72
        ]
    },
    {
        "id": 37,
        "name": "Senger Group",
        "sector": "Retail",
        "siren": 196126254,
        "results": [
            73,
            74
        ]
    },
    {
        "id": 38,
        "name": "Kertzmann Group",
        "sector": "Retail",
        "siren": 187537793,
        "results": [
            75,
            76
        ]
    },
    {
        "id": 39,
        "name": "Trantow, Bauch and Brown",
        "sector": "Electronic",
        "siren": 194314995,
        "results": [
            77,
            78
        ]
    },
    {
        "id": 40,
        "name": "Kertzmann-Cremin",
        "sector": "Luxury",
        "siren": 110861915,
        "results": [
            79,
            80
        ]
    },
    {
        "id": 41,
        "name": "Jaskolski and Sons",
        "sector": "Services",
        "siren": 163203664,
        "results": [
            81,
            82
        ]
    },
    {
        "id": 42,
        "name": "Gottlieb Inc",
        "sector": "Services",
        "siren": 173594891,
        "results": [
            83,
            84
        ]
    },
    {
        "id": 43,
        "name": "Bins Inc",
        "sector": "Retail",
        "siren": 156610978,
        "results": [
            85,
            86
        ]
    },
    {
        "id": 44,
        "name": "Purdy, Barrows and Mills",
        "sector": "Electronic",
        "siren": 125001735,
        "results": [
            87,
            88
        ]
    },
    {
        "id": 45,
        "name": "Becker and Sons",
        "sector": "Retail",
        "siren": 108220327,
        "results": [
            89,
            90
        ]
    },
    {
        "id": 46,
        "name": "Kozey, Haag and Kuvalis",
        "sector": "Services",
        "siren": 197683277,
        "results": [
            91,
            92
        ]
    },
    {
        "id": 47,
        "name": "Wilkinson, Nienow and Schmeler",
        "sector": "Retail",
        "siren": 195451954,
        "results": [
            93,
            94
        ]
    },
    {
        "id": 48,
        "name": "Cummings, Towne and Stanton",
        "sector": "Services",
        "siren": 175032418,
        "results": [
            95,
            96
        ]
    },
    {
        "id": 49,
        "name": "Kreiger, Mosciski and Kiehn",
        "sector": "Energy",
        "siren": 164388517,
        "results": [
            97,
            98
        ]
    },
    {
        "id": 50,
        "name": "Bode, Hudson and Kulas",
        "sector": "Electronic",
        "siren": 177384240,
        "results": [
            99,
            100
        ]
    },
    {
        "id": 51,
        "name": "Walker, Abbott and Brekke",
        "sector": "Retail",
        "siren": 108949277,
        "results": [
            101,
            102
        ]
    },
    {
        "id": 52,
        "name": "Rath, Legros and Feil",
        "sector": "Electronic",
        "siren": 105376773,
        "results": [
            103,
            104
        ]
    },
    {
        "id": 53,
        "name": "Wunsch, Nienow and Russel",
        "sector": "Retail",
        "siren": 170490793,
        "results": [
            105,
            106
        ]
    },
    {
        "id": 54,
        "name": "Baumbach-Howe",
        "sector": "Luxury",
        "siren": 197432382,
        "results": [
            107,
            108
        ]
    },
    {
        "id": 55,
        "name": "Hartmann, Bruen and McDermott",
        "sector": "Services",
        "siren": 183064272,
        "results": [
            109,
            110
        ]
    },
    {
        "id": 56,
        "name": "Rippin-Klocko",
        "sector": "Luxury",
        "siren": 109837685,
        "results": [
            111,
            112
        ]
    },
    {
        "id": 57,
        "name": "Beer, Simonis and Runolfsdottir",
        "sector": "Energy",
        "siren": 188135119,
        "results": [
            113,
            114
        ]
    },
    {
        "id": 58,
        "name": "Schamberger, Yundt and Zemlak",
        "sector": "Energy",
        "siren": 133026662,
        "results": [
            115,
            116
        ]
    },
    {
        "id": 59,
        "name": "Feeney and Sons",
        "sector": "Services",
        "siren": 132298627,
        "results": [
            117,
            118
        ]
    },
    {
        "id": 60,
        "name": "Kerluke, Durgan and Bernhard",
        "sector": "Retail",
        "siren": 168792627,
        "results": [
            119,
            120
        ]
    },
    {
        "id": 61,
        "name": "Dicki, Moen and Robel",
        "sector": "Retail",
        "siren": 135883737,
        "results": [
            121,
            122
        ]
    },
    {
        "id": 62,
        "name": "Sporer and Sons",
        "sector": "Luxury",
        "siren": 160840028,
        "results": [
            123,
            124
        ]
    },
    {
        "id": 63,
        "name": "Skiles-Gusikowski",
        "sector": "Luxury",
        "siren": 121692227,
        "results": [
            125,
            126
        ]
    },
    {
        "id": 64,
        "name": "Swaniawski Group",
        "sector": "Retail",
        "siren": 173672744,
        "results": [
            127,
            128
        ]
    },
    {
        "id": 65,
        "name": "Satterfield, Brekke and Stanton",
        "sector": "Services",
        "siren": 195857228,
        "results": [
            129,
            130
        ]
    },
    {
        "id": 66,
        "name": "Ortiz-Connelly",
        "sector": "Services",
        "siren": 182726877,
        "results": [
            131,
            132
        ]
    },
    {
        "id": 67,
        "name": "Donnelly, Abernathy and Pacocha",
        "sector": "Retail",
        "siren": 156951403,
        "results": [
            133,
            134
        ]
    },
    {
        "id": 68,
        "name": "Hudson, Reynolds and Jacobson",
        "sector": "Services",
        "siren": 132253095,
        "results": [
            135,
            136
        ]
    },
    {
        "id": 69,
        "name": "Wuckert Group",
        "sector": "Electronic",
        "siren": 165950424,
        "results": [
            137,
            138
        ]
    },
    {
        "id": 70,
        "name": "Larson, Gleason and Murphy",
        "sector": "Retail",
        "siren": 117623669,
        "results": [
            139,
            140
        ]
    },
    {
        "id": 71,
        "name": "Dickinson-Strosin",
        "sector": "Energy",
        "siren": 175066823,
        "results": [
            141,
            142
        ]
    },
    {
        "id": 72,
        "name": "Franecki-Cassin",
        "sector": "Retail",
        "siren": 158424603,
        "results": [
            143,
            144
        ]
    },
    {
        "id": 73,
        "name": "Nikolaus-Flatley",
        "sector": "Electronic",
        "siren": 133495059,
        "results": [
            145,
            146
        ]
    },
    {
        "id": 74,
        "name": "Hickle, Stamm and Fahey",
        "sector": "Services",
        "siren": 101590590,
        "results": [
            147,
            148
        ]
    },
    {
        "id": 75,
        "name": "Bahringer, Blanda and Schmitt",
        "sector": "Luxury",
        "siren": 137219707,
        "results": [
            149,
            150
        ]
    },
    {
        "id": 76,
        "name": "Herman-Abbott",
        "sector": "Retail",
        "siren": 174831134,
        "results": [
            151,
            152
        ]
    },
    {
        "id": 77,
        "name": "Stokes-Hegmann",
        "sector": "Energy",
        "siren": 152222171,
        "results": [
            153,
            154
        ]
    },
    {
        "id": 78,
        "name": "Moen, Krajcik and O'Keefe",
        "sector": "Retail",
        "siren": 179058220,
        "results": [
            155,
            156
        ]
    },
    {
        "id": 79,
        "name": "Huels-Koepp",
        "sector": "Services",
        "siren": 103436807,
        "results": [
            157,
            158
        ]
    },
    {
        "id": 80,
        "name": "Turcotte LLC",
        "sector": "Services",
        "siren": 115411209,
        "results": [
            159,
            160
        ]
    },
    {
        "id": 81,
        "name": "Glover, Kirlin and McGlynn",
        "sector": "Energy",
        "siren": 184190735,
        "results": [
            161,
            162
        ]
    },
    {
        "id": 82,
        "name": "Nader-Bergnaum",
        "sector": "Electronic",
        "siren": 142087889,
        "results": [
            163,
            164
        ]
    },
    {
        "id": 83,
        "name": "McDermott-Rolfson",
        "sector": "Energy",
        "siren": 117468732,
        "results": [
            165,
            166
        ]
    },
    {
        "id": 84,
        "name": "Treutel Group",
        "sector": "Retail",
        "siren": 138837726,
        "results": [
            167,
            168
        ]
    },
    {
        "id": 85,
        "name": "Lynch, Wunsch and Kris",
        "sector": "Services",
        "siren": 152402150,
        "results": [
            169,
            170
        ]
    },
    {
        "id": 86,
        "name": "Tremblay, Keeling and Breitenberg",
        "sector": "Services",
        "siren": 125362017,
        "results": [
            171,
            172
        ]
    },
    {
        "id": 87,
        "name": "Leffler LLC",
        "sector": "Retail",
        "siren": 150610837,
        "results": [
            173,
            174
        ]
    },
    {
        "id": 88,
        "name": "Hintz Inc",
        "sector": "Electronic",
        "siren": 170053342,
        "results": [
            175,
            176
        ]
    },
    {
        "id": 89,
        "name": "Howell Inc",
        "sector": "Energy",
        "siren": 115871891,
        "results": [
            177,
            178
        ]
    },
    {
        "id": 90,
        "name": "Windler-Pfeffer",
        "sector": "Electronic",
        "siren": 186052047,
        "results": [
            179,
            180
        ]
    },
    {
        "id": 91,
        "name": "Greenfelder Group",
        "sector": "Services",
        "siren": 123389196,
        "results": [
            181,
            182
        ]
    },
    {
        "id": 92,
        "name": "Hessel Group",
        "sector": "Electronic",
        "siren": 130378540,
        "results": [
            183,
            184
        ]
    },
    {
        "id": 93,
        "name": "Goyette, Cummerata and Windler",
        "sector": "Luxury",
        "siren": 173090205,
        "results": [
            185,
            186
        ]
    },
    {
        "id": 94,
        "name": "Green LLC",
        "sector": "Energy",
        "siren": 142811173,
        "results": [
            187,
            188
        ]
    },
    {
        "id": 95,
        "name": "MacGyver LLC",
        "sector": "Energy",
        "siren": 180573399,
        "results": [
            189,
            190
        ]
    },
    {
        "id": 96,
        "name": "Cassin-Weissnat",
        "sector": "Electronic",
        "siren": 174008422,
        "results": [
            191,
            192
        ]
    },
    {
        "id": 97,
        "name": "Koelpin-Herman",
        "sector": "Services",
        "siren": 123713934,
        "results": [
            193,
            194
        ]
    },
    {
        "id": 98,
        "name": "Murray, Keeling and Pfeffer",
        "sector": "Services",
        "siren": 153108580,
        "results": [
            195,
            196
        ]
    },
    {
        "id": 99,
        "name": "Metz and Sons",
        "sector": "Electronic",
        "siren": 132514765,
        "results": [
            197,
            198
        ]
    },
    {
        "id": 100,
        "name": "Trantow, Stoltenberg and Rau",
        "sector": "Luxury",
        "siren": 142196394,
        "results": [
            199,
            200
        ]
    },
    {
        "id": 101,
        "name": "Hermann and Sons",
        "sector": "Electronic",
        "siren": 199577547,
        "results": [
            201,
            202
        ]
    },
    {
        "id": 102,
        "name": "Hickle-Cartwright",
        "sector": "Luxury",
        "siren": 145170204,
        "results": [
            203,
            204
        ]
    },
    {
        "id": 103,
        "name": "Balistreri and Sons",
        "sector": "Retail",
        "siren": 122783975,
        "results": [
            205,
            206
        ]
    },
    {
        "id": 104,
        "name": "Welch-Wisoky",
        "sector": "Electronic",
        "siren": 180856598,
        "results": [
            207,
            208
        ]
    },
    {
        "id": 105,
        "name": "Schamberger-Leuschke",
        "sector": "Retail",
        "siren": 101786222,
        "results": [
            209,
            210
        ]
    },
    {
        "id": 106,
        "name": "Hudson and Sons",
        "sector": "Retail",
        "siren": 159421714,
        "results": [
            211,
            212
        ]
    },
    {
        "id": 107,
        "name": "Stehr-Larson",
        "sector": "Electronic",
        "siren": 110442504,
        "results": [
            213,
            214
        ]
    },
    {
        "id": 108,
        "name": "Deckow-Rowe",
        "sector": "Electronic",
        "siren": 140318401,
        "results": [
            215,
            216
        ]
    },
    {
        "id": 109,
        "name": "Mann-Wisoky",
        "sector": "Luxury",
        "siren": 154437824,
        "results": [
            217,
            218
        ]
    },
    {
        "id": 110,
        "name": "Bradtke, Bauch and Hermann",
        "sector": "Electronic",
        "siren": 119255732,
        "results": [
            219,
            220
        ]
    },
    {
        "id": 111,
        "name": "Jaskolski Group",
        "sector": "Electronic",
        "siren": 188974299,
        "results": [
            221,
            222
        ]
    },
    {
        "id": 112,
        "name": "Glover, Lubowitz and Labadie",
        "sector": "Energy",
        "siren": 111353919,
        "results": [
            223,
            224
        ]
    },
    {
        "id": 113,
        "name": "Mraz, Little and Fritsch",
        "sector": "Luxury",
        "siren": 162877974,
        "results": [
            225,
            226
        ]
    },
    {
        "id": 114,
        "name": "Medhurst and Sons",
        "sector": "Services",
        "siren": 125625509,
        "results": [
            227,
            228
        ]
    },
    {
        "id": 115,
        "name": "Schultz Inc",
        "sector": "Retail",
        "siren": 163815675,
        "results": [
            229,
            230
        ]
    },
    {
        "id": 116,
        "name": "Brown Inc",
        "sector": "Retail",
        "siren": 169391204,
        "results": [
            231,
            232
        ]
    },
    {
        "id": 117,
        "name": "Huels Inc",
        "sector": "Luxury",
        "siren": 135296056,
        "results": [
            233,
            234
        ]
    },
    {
        "id": 118,
        "name": "Cassin-Collins",
        "sector": "Energy",
        "siren": 136888845,
        "results": [
            235,
            236
        ]
    },
    {
        "id": 119,
        "name": "Murphy, Reichert and Walsh",
        "sector": "Electronic",
        "siren": 168943428,
        "results": [
            237,
            238
        ]
    },
    {
        "id": 120,
        "name": "Dooley-Flatley",
        "sector": "Retail",
        "siren": 121546181,
        "results": [
            239,
            240
        ]
    },
    {
        "id": 121,
        "name": "Wisozk-Langosh",
        "sector": "Services",
        "siren": 104018793,
        "results": [
            241,
            242
        ]
    },
    {
        "id": 122,
        "name": "Dickinson, Thiel and Wisoky",
        "sector": "Retail",
        "siren": 173786909,
        "results": [
            243,
            244
        ]
    },
    {
        "id": 123,
        "name": "Williamson and Sons",
        "sector": "Luxury",
        "siren": 155097096,
        "results": [
            245,
            246
        ]
    },
    {
        "id": 124,
        "name": "Ferry Group",
        "sector": "Energy",
        "siren": 176633557,
        "results": [
            247,
            248
        ]
    },
    {
        "id": 125,
        "name": "Schiller-Schmidt",
        "sector": "Services",
        "siren": 195591022,
        "results": [
            249,
            250
        ]
    },
    {
        "id": 126,
        "name": "Abshire, Wilderman and Mitchell",
        "sector": "Retail",
        "siren": 141993614,
        "results": [
            251,
            252
        ]
    },
    {
        "id": 127,
        "name": "Hayes LLC",
        "sector": "Services",
        "siren": 143826718,
        "results": [
            253,
            254
        ]
    },
    {
        "id": 128,
        "name": "Tremblay and Sons",
        "sector": "Services",
        "siren": 133962923,
        "results": [
            255,
            256
        ]
    },
    {
        "id": 129,
        "name": "Wisozk Inc",
        "sector": "Luxury",
        "siren": 107568203,
        "results": [
            257,
            258
        ]
    },
    {
        "id": 130,
        "name": "Marvin-Stiedemann",
        "sector": "Electronic",
        "siren": 108626405,
        "results": [
            259,
            260
        ]
    },
    {
        "id": 131,
        "name": "Borer-Cassin",
        "sector": "Luxury",
        "siren": 104300586,
        "results": [
            261,
            262
        ]
    },
    {
        "id": 132,
        "name": "Tromp, Heidenreich and Ziemann",
        "sector": "Retail",
        "siren": 148080477,
        "results": [
            263,
            264
        ]
    },
    {
        "id": 133,
        "name": "Funk Inc",
        "sector": "Electronic",
        "siren": 157012674,
        "results": [
            265,
            266
        ]
    },
    {
        "id": 134,
        "name": "Hayes-Ernser",
        "sector": "Energy",
        "siren": 175994582,
        "results": [
            267,
            268
        ]
    },
    {
        "id": 135,
        "name": "DuBuque, Sawayn and Schaefer",
        "sector": "Electronic",
        "siren": 173913299,
        "results": [
            269,
            270
        ]
    },
    {
        "id": 136,
        "name": "Hyatt-Fahey",
        "sector": "Luxury",
        "siren": 172493289,
        "results": [
            271,
            272
        ]
    },
    {
        "id": 137,
        "name": "Witting-Durgan",
        "sector": "Retail",
        "siren": 193631684,
        "results": [
            273,
            274
        ]
    },
    {
        "id": 138,
        "name": "Wuckert-Gottlieb",
        "sector": "Luxury",
        "siren": 163261401,
        "results": [
            275,
            276
        ]
    },
    {
        "id": 139,
        "name": "Ritchie, Haag and Kuhn",
        "sector": "Energy",
        "siren": 105467035,
        "results": [
            277,
            278
        ]
    },
    {
        "id": 140,
        "name": "Cummerata-Prosacco",
        "sector": "Retail",
        "siren": 116769708,
        "results": [
            279,
            280
        ]
    },
    {
        "id": 141,
        "name": "Schmitt and Sons",
        "sector": "Energy",
        "siren": 146939069,
        "results": [
            281,
            282
        ]
    },
    {
        "id": 142,
        "name": "Bogisich Group",
        "sector": "Retail",
        "siren": 198492376,
        "results": [
            283,
            284
        ]
    },
    {
        "id": 143,
        "name": "Kessler Group",
        "sector": "Electronic",
        "siren": 195285188,
        "results": [
            285,
            286
        ]
    },
    {
        "id": 144,
        "name": "Reilly, Turner and Kilback",
        "sector": "Energy",
        "siren": 170348871,
        "results": [
            287,
            288
        ]
    },
    {
        "id": 145,
        "name": "Stamm-McLaughlin",
        "sector": "Services",
        "siren": 152902170,
        "results": [
            289,
            290
        ]
    },
    {
        "id": 146,
        "name": "Adams, Kassulke and Walter",
        "sector": "Services",
        "siren": 165989484,
        "results": [
            291,
            292
        ]
    },
    {
        "id": 147,
        "name": "Okuneva Inc",
        "sector": "Retail",
        "siren": 113287300,
        "results": [
            293,
            294
        ]
    },
    {
        "id": 148,
        "name": "Kiehn-Greenholt",
        "sector": "Retail",
        "siren": 135593651,
        "results": [
            295,
            296
        ]
    },
    {
        "id": 149,
        "name": "Stanton, Stehr and Considine",
        "sector": "Services",
        "siren": 111297821,
        "results": [
            297,
            298
        ]
    },
    {
        "id": 150,
        "name": "Pagac and Sons",
        "sector": "Energy",
        "siren": 141417076,
        "results": [
            299,
            300
        ]
    },
    {
        "id": 151,
        "name": "Ullrich, Gaylord and Gleason",
        "sector": "Retail",
        "siren": 106730899,
        "results": [
            301,
            302
        ]
    },
    {
        "id": 152,
        "name": "Lemke-Leannon",
        "sector": "Retail",
        "siren": 181852901,
        "results": [
            303,
            304
        ]
    },
    {
        "id": 153,
        "name": "Medhurst Group",
        "sector": "Services",
        "siren": 172472287,
        "results": [
            305,
            306
        ]
    },
    {
        "id": 154,
        "name": "Stoltenberg LLC",
        "sector": "Services",
        "siren": 169273144,
        "results": [
            307,
            308
        ]
    },
    {
        "id": 155,
        "name": "Kerluke LLC",
        "sector": "Energy",
        "siren": 153691905,
        "results": [
            309,
            310
        ]
    },
    {
        "id": 156,
        "name": "Murphy-Lesch",
        "sector": "Electronic",
        "siren": 160775851,
        "results": [
            311,
            312
        ]
    },
    {
        "id": 157,
        "name": "Kilback-Hudson",
        "sector": "Electronic",
        "siren": 198340969,
        "results": [
            313,
            314
        ]
    },
    {
        "id": 158,
        "name": "Rowe, Adams and Pacocha",
        "sector": "Luxury",
        "siren": 152968462,
        "results": [
            315,
            316
        ]
    },
    {
        "id": 159,
        "name": "Schroeder-Toy",
        "sector": "Services",
        "siren": 106049474,
        "results": [
            317,
            318
        ]
    },
    {
        "id": 160,
        "name": "Reilly-Bartoletti",
        "sector": "Luxury",
        "siren": 185568403,
        "results": [
            319,
            320
        ]
    },
    {
        "id": 161,
        "name": "Runte, Trantow and Eichmann",
        "sector": "Services",
        "siren": 163211374,
        "results": [
            321,
            322
        ]
    },
    {
        "id": 162,
        "name": "McGlynn Inc",
        "sector": "Services",
        "siren": 177088555,
        "results": [
            323,
            324
        ]
    },
    {
        "id": 163,
        "name": "Berge Group",
        "sector": "Services",
        "siren": 191593539,
        "results": [
            325,
            326
        ]
    },
    {
        "id": 164,
        "name": "Hansen, Gerhold and Zemlak",
        "sector": "Retail",
        "siren": 196059202,
        "results": [
            327,
            328
        ]
    },
    {
        "id": 165,
        "name": "Leuschke and Sons",
        "sector": "Luxury",
        "siren": 185546426,
        "results": [
            329,
            330
        ]
    },
    {
        "id": 166,
        "name": "Kemmer-Lynch",
        "sector": "Electronic",
        "siren": 130518404,
        "results": [
            331,
            332
        ]
    },
    {
        "id": 167,
        "name": "Tillman, Ruecker and D'Amore",
        "sector": "Retail",
        "siren": 185836676,
        "results": [
            333,
            334
        ]
    },
    {
        "id": 168,
        "name": "Hagenes-Nicolas",
        "sector": "Luxury",
        "siren": 181839234,
        "results": [
            335,
            336
        ]
    },
    {
        "id": 169,
        "name": "Adams LLC",
        "sector": "Energy",
        "siren": 162705282,
        "results": [
            337,
            338
        ]
    },
    {
        "id": 170,
        "name": "Kling, Frami and Thiel",
        "sector": "Electronic",
        "siren": 153775737,
        "results": [
            339,
            340
        ]
    },
    {
        "id": 171,
        "name": "Hirthe Group",
        "sector": "Electronic",
        "siren": 109390434,
        "results": [
            341,
            342
        ]
    },
    {
        "id": 172,
        "name": "Grant-Hills",
        "sector": "Services",
        "siren": 152889154,
        "results": [
            343,
            344
        ]
    },
    {
        "id": 173,
        "name": "Koch, Cassin and Murphy",
        "sector": "Electronic",
        "siren": 175818545,
        "results": [
            345,
            346
        ]
    },
    {
        "id": 174,
        "name": "Koss, Leffler and Fay",
        "sector": "Energy",
        "siren": 119128103,
        "results": [
            347,
            348
        ]
    },
    {
        "id": 175,
        "name": "Corwin-Vandervort",
        "sector": "Energy",
        "siren": 179335809,
        "results": [
            349,
            350
        ]
    },
    {
        "id": 176,
        "name": "Bartoletti-Effertz",
        "sector": "Luxury",
        "siren": 158737316,
        "results": [
            351,
            352
        ]
    },
    {
        "id": 177,
        "name": "O'Reilly, Langosh and Raynor",
        "sector": "Electronic",
        "siren": 138908158,
        "results": [
            353,
            354
        ]
    },
    {
        "id": 178,
        "name": "Upton, Cormier and Morissette",
        "sector": "Luxury",
        "siren": 148123081,
        "results": [
            355,
            356
        ]
    },
    {
        "id": 179,
        "name": "Grady Inc",
        "sector": "Services",
        "siren": 124921215,
        "results": [
            357,
            358
        ]
    },
    {
        "id": 180,
        "name": "Schimmel Group",
        "sector": "Luxury",
        "siren": 182073248,
        "results": [
            359,
            360
        ]
    },
    {
        "id": 181,
        "name": "Schiller Inc",
        "sector": "Retail",
        "siren": 152363753,
        "results": [
            361,
            362
        ]
    },
    {
        "id": 182,
        "name": "Heathcote-Pagac",
        "sector": "Electronic",
        "siren": 142665129,
        "results": [
            363,
            364
        ]
    },
    {
        "id": 183,
        "name": "Dietrich-Kassulke",
        "sector": "Electronic",
        "siren": 153434268,
        "results": [
            365,
            366
        ]
    },
    {
        "id": 184,
        "name": "Carter LLC",
        "sector": "Energy",
        "siren": 137164647,
        "results": [
            367,
            368
        ]
    },
    {
        "id": 185,
        "name": "Stokes-Beahan",
        "sector": "Services",
        "siren": 173257908,
        "results": [
            369,
            370
        ]
    },
    {
        "id": 186,
        "name": "Ward-Leffler",
        "sector": "Electronic",
        "siren": 129146450,
        "results": [
            371,
            372
        ]
    },
    {
        "id": 187,
        "name": "Bogisich Group",
        "sector": "Retail",
        "siren": 155864068,
        "results": [
            373,
            374
        ]
    },
    {
        "id": 188,
        "name": "Wiza, Abshire and Yundt",
        "sector": "Electronic",
        "siren": 167802466,
        "results": [
            375,
            376
        ]
    },
    {
        "id": 189,
        "name": "Hodkiewicz Inc",
        "sector": "Energy",
        "siren": 109632592,
        "results": [
            377,
            378
        ]
    },
    {
        "id": 190,
        "name": "Walker-Legros",
        "sector": "Retail",
        "siren": 139341533,
        "results": [
            379,
            380
        ]
    },
    {
        "id": 191,
        "name": "Willms, Nicolas and Torphy",
        "sector": "Retail",
        "siren": 183352652,
        "results": [
            381,
            382
        ]
    },
    {
        "id": 192,
        "name": "Marks and Sons",
        "sector": "Electronic",
        "siren": 129610484,
        "results": [
            383,
            384
        ]
    },
    {
        "id": 193,
        "name": "Ziemann-Hintz",
        "sector": "Energy",
        "siren": 149431058,
        "results": [
            385,
            386
        ]
    },
    {
        "id": 194,
        "name": "Walter-Bartell",
        "sector": "Energy",
        "siren": 159270097,
        "results": [
            387,
            388
        ]
    },
    {
        "id": 195,
        "name": "Harber and Sons",
        "sector": "Luxury",
        "siren": 105385372,
        "results": [
            389,
            390
        ]
    },
    {
        "id": 196,
        "name": "Pfeffer, Volkman and Jacobs",
        "sector": "Services",
        "siren": 155828039,
        "results": [
            391,
            392
        ]
    },
    {
        "id": 197,
        "name": "Heathcote, Block and Rempel",
        "sector": "Retail",
        "siren": 148575346,
        "results": [
            393,
            394
        ]
    },
    {
        "id": 198,
        "name": "Schuster, Hintz and Luettgen",
        "sector": "Retail",
        "siren": 139843626,
        "results": [
            395,
            396
        ]
    },
    {
        "id": 199,
        "name": "Moore-Funk",
        "sector": "Retail",
        "siren": 138402141,
        "results": [
            397,
            398
        ]
    },
    {
        "id": 200,
        "name": "Gutkowski, Farrell and Altenwerth",
        "sector": "Luxury",
        "siren": 162175274,
        "results": [
            399,
            400
        ]
    },
    {
        "id": 201,
        "name": "Turcotte, Pagac and Welch",
        "sector": "Services",
        "siren": 176753871,
        "results": [
            401,
            402
        ]
    },
    {
        "id": 202,
        "name": "Kovacek-Larkin",
        "sector": "Services",
        "siren": 113674387,
        "results": [
            403,
            404
        ]
    },
    {
        "id": 203,
        "name": "Fay and Sons",
        "sector": "Services",
        "siren": 144972814,
        "results": [
            405,
            406
        ]
    },
    {
        "id": 204,
        "name": "Cummerata-Berge",
        "sector": "Electronic",
        "siren": 154318426,
        "results": [
            407,
            408
        ]
    },
    {
        "id": 205,
        "name": "Schultz, Sporer and Hoppe",
        "sector": "Retail",
        "siren": 174292657,
        "results": [
            409,
            410
        ]
    },
    {
        "id": 206,
        "name": "Cole-Langosh",
        "sector": "Retail",
        "siren": 149623513,
        "results": [
            411,
            412
        ]
    },
    {
        "id": 207,
        "name": "Jakubowski, Spinka and Bogisich",
        "sector": "Retail",
        "siren": 156086955,
        "results": [
            413,
            414
        ]
    },
    {
        "id": 208,
        "name": "Effertz-Batz",
        "sector": "Energy",
        "siren": 191578492,
        "results": [
            415,
            416
        ]
    },
    {
        "id": 209,
        "name": "Parisian Inc",
        "sector": "Electronic",
        "siren": 100544297,
        "results": [
            417,
            418
        ]
    },
    {
        "id": 210,
        "name": "Jacobson-Hammes",
        "sector": "Retail",
        "siren": 197942932,
        "results": [
            419,
            420
        ]
    },
    {
        "id": 211,
        "name": "Leuschke-Mante",
        "sector": "Electronic",
        "siren": 197657514,
        "results": [
            421,
            422
        ]
    },
    {
        "id": 212,
        "name": "Bernhard Inc",
        "sector": "Electronic",
        "siren": 102657824,
        "results": [
            423,
            424
        ]
    },
    {
        "id": 213,
        "name": "Bergstrom, O'Reilly and Bogan",
        "sector": "Electronic",
        "siren": 194602712,
        "results": [
            425,
            426
        ]
    },
    {
        "id": 214,
        "name": "Nitzsche, Stark and Mitchell",
        "sector": "Energy",
        "siren": 192119655,
        "results": [
            427,
            428
        ]
    },
    {
        "id": 215,
        "name": "Dare, Ryan and Hickle",
        "sector": "Services",
        "siren": 190429858,
        "results": [
            429,
            430
        ]
    },
    {
        "id": 216,
        "name": "Johns and Sons",
        "sector": "Electronic",
        "siren": 196788807,
        "results": [
            431,
            432
        ]
    },
    {
        "id": 217,
        "name": "Larkin-Jast",
        "sector": "Electronic",
        "siren": 119438694,
        "results": [
            433,
            434
        ]
    },
    {
        "id": 218,
        "name": "Schinner-Batz",
        "sector": "Luxury",
        "siren": 113489329,
        "results": [
            435,
            436
        ]
    },
    {
        "id": 219,
        "name": "Fay, Bosco and Williamson",
        "sector": "Energy",
        "siren": 117151370,
        "results": [
            437,
            438
        ]
    },
    {
        "id": 220,
        "name": "Wiza Group",
        "sector": "Energy",
        "siren": 119972532,
        "results": [
            439,
            440
        ]
    },
    {
        "id": 221,
        "name": "Koepp-Hilll",
        "sector": "Energy",
        "siren": 154362070,
        "results": [
            441,
            442
        ]
    },
    {
        "id": 222,
        "name": "O'Keefe-Brown",
        "sector": "Energy",
        "siren": 123618667,
        "results": [
            443,
            444
        ]
    },
    {
        "id": 223,
        "name": "Stehr-Sanford",
        "sector": "Electronic",
        "siren": 167001629,
        "results": [
            445,
            446
        ]
    },
    {
        "id": 224,
        "name": "Kunze-Towne",
        "sector": "Luxury",
        "siren": 194461061,
        "results": [
            447,
            448
        ]
    },
    {
        "id": 225,
        "name": "Donnelly and Sons",
        "sector": "Services",
        "siren": 145161488,
        "results": [
            449,
            450
        ]
    },
    {
        "id": 226,
        "name": "Schneider Inc",
        "sector": "Retail",
        "siren": 164176868,
        "results": [
            451,
            452
        ]
    },
    {
        "id": 227,
        "name": "Collins-Pfannerstill",
        "sector": "Retail",
        "siren": 179486766,
        "results": [
            453,
            454
        ]
    },
    {
        "id": 228,
        "name": "Huel-Bernhard",
        "sector": "Services",
        "siren": 131003782,
        "results": [
            455,
            456
        ]
    },
    {
        "id": 229,
        "name": "Yost-Ullrich",
        "sector": "Energy",
        "siren": 188847833,
        "results": [
            457,
            458
        ]
    },
    {
        "id": 230,
        "name": "McCullough, Spinka and Miller",
        "sector": "Energy",
        "siren": 199981161,
        "results": [
            459,
            460
        ]
    },
    {
        "id": 231,
        "name": "Hilpert, Veum and Donnelly",
        "sector": "Services",
        "siren": 160977920,
        "results": [
            461,
            462
        ]
    },
    {
        "id": 232,
        "name": "Kutch LLC",
        "sector": "Electronic",
        "siren": 110094965,
        "results": [
            463,
            464
        ]
    },
    {
        "id": 233,
        "name": "Muller-Volkman",
        "sector": "Energy",
        "siren": 144184638,
        "results": [
            465,
            466
        ]
    },
    {
        "id": 234,
        "name": "Sawayn and Sons",
        "sector": "Energy",
        "siren": 131330675,
        "results": [
            467,
            468
        ]
    },
    {
        "id": 235,
        "name": "Stehr-Hessel",
        "sector": "Retail",
        "siren": 191815148,
        "results": [
            469,
            470
        ]
    },
    {
        "id": 236,
        "name": "O'Kon-Hermiston",
        "sector": "Services",
        "siren": 150529572,
        "results": [
            471,
            472
        ]
    },
    {
        "id": 237,
        "name": "Stokes, Walter and Bode",
        "sector": "Electronic",
        "siren": 161617766,
        "results": [
            473,
            474
        ]
    },
    {
        "id": 238,
        "name": "MacGyver and Sons",
        "sector": "Electronic",
        "siren": 107852119,
        "results": [
            475,
            476
        ]
    },
    {
        "id": 239,
        "name": "Reichert LLC",
        "sector": "Energy",
        "siren": 111533385,
        "results": [
            477,
            478
        ]
    },
    {
        "id": 240,
        "name": "Ernser, Gleichner and Hane",
        "sector": "Services",
        "siren": 138679184,
        "results": [
            479,
            480
        ]
    },
    {
        "id": 241,
        "name": "Bauch, Stiedemann and Bogisich",
        "sector": "Electronic",
        "siren": 115223293,
        "results": [
            481,
            482
        ]
    },
    {
        "id": 242,
        "name": "Feest-Bogan",
        "sector": "Luxury",
        "siren": 159946640,
        "results": [
            483,
            484
        ]
    },
    {
        "id": 243,
        "name": "Bauch-Rice",
        "sector": "Services",
        "siren": 104113426,
        "results": [
            485,
            486
        ]
    },
    {
        "id": 244,
        "name": "Weissnat-Hermann",
        "sector": "Energy",
        "siren": 125243257,
        "results": [
            487,
            488
        ]
    },
    {
        "id": 245,
        "name": "Boyer LLC",
        "sector": "Retail",
        "siren": 142415138,
        "results": [
            489,
            490
        ]
    },
    {
        "id": 246,
        "name": "Schaden-Maggio",
        "sector": "Services",
        "siren": 148429613,
        "results": [
            491,
            492
        ]
    },
    {
        "id": 247,
        "name": "Conroy, Kiehn and Bahringer",
        "sector": "Energy",
        "siren": 111224568,
        "results": [
            493,
            494
        ]
    },
    {
        "id": 248,
        "name": "Dooley, Volkman and Thompson",
        "sector": "Services",
        "siren": 110179331,
        "results": [
            495,
            496
        ]
    },
    {
        "id": 249,
        "name": "Hammes-Boyer",
        "sector": "Retail",
        "siren": 147649127,
        "results": [
            497,
            498
        ]
    },
    {
        "id": 250,
        "name": "O'Reilly and Sons",
        "sector": "Retail",
        "siren": 196424074,
        "results": [
            499,
            500
        ]
    },
    {
        "id": 251,
        "name": "Kuhic, Hagenes and Stehr",
        "sector": "Retail",
        "siren": 109863760,
        "results": [
            501,
            502
        ]
    },
    {
        "id": 252,
        "name": "Braun-Hills",
        "sector": "Electronic",
        "siren": 178204654,
        "results": [
            503,
            504
        ]
    },
    {
        "id": 253,
        "name": "O'Connell-Botsford",
        "sector": "Electronic",
        "siren": 150471122,
        "results": [
            505,
            506
        ]
    },
    {
        "id": 254,
        "name": "Gusikowski Inc",
        "sector": "Services",
        "siren": 148012572,
        "results": [
            507,
            508
        ]
    },
    {
        "id": 255,
        "name": "Homenick-Schulist",
        "sector": "Energy",
        "siren": 199417647,
        "results": [
            509,
            510
        ]
    },
    {
        "id": 256,
        "name": "Mayert-Nader",
        "sector": "Electronic",
        "siren": 196578469,
        "results": [
            511,
            512
        ]
    },
    {
        "id": 257,
        "name": "Kessler and Sons",
        "sector": "Retail",
        "siren": 161771017,
        "results": [
            513,
            514
        ]
    },
    {
        "id": 258,
        "name": "Kohler Group",
        "sector": "Energy",
        "siren": 109223179,
        "results": [
            515,
            516
        ]
    },
    {
        "id": 259,
        "name": "Cartwright, Langosh and Ratke",
        "sector": "Electronic",
        "siren": 148131215,
        "results": [
            517,
            518
        ]
    },
    {
        "id": 260,
        "name": "Zieme-Littel",
        "sector": "Retail",
        "siren": 119585372,
        "results": [
            519,
            520
        ]
    },
    {
        "id": 261,
        "name": "Jacobs-Romaguera",
        "sector": "Electronic",
        "siren": 161977766,
        "results": [
            521,
            522
        ]
    },
    {
        "id": 262,
        "name": "Johnson, Ferry and Bailey",
        "sector": "Retail",
        "siren": 186288766,
        "results": [
            523,
            524
        ]
    },
    {
        "id": 263,
        "name": "Abbott, Jacobson and Kessler",
        "sector": "Energy",
        "siren": 190068556,
        "results": [
            525,
            526
        ]
    },
    {
        "id": 264,
        "name": "Fisher Group",
        "sector": "Services",
        "siren": 177894686,
        "results": [
            527,
            528
        ]
    },
    {
        "id": 265,
        "name": "Weimann-Wuckert",
        "sector": "Retail",
        "siren": 161472408,
        "results": [
            529,
            530
        ]
    },
    {
        "id": 266,
        "name": "West LLC",
        "sector": "Energy",
        "siren": 190837968,
        "results": [
            531,
            532
        ]
    },
    {
        "id": 267,
        "name": "Gottlieb-Ondricka",
        "sector": "Electronic",
        "siren": 190862988,
        "results": [
            533,
            534
        ]
    },
    {
        "id": 268,
        "name": "Roob Inc",
        "sector": "Luxury",
        "siren": 101958734,
        "results": [
            535,
            536
        ]
    },
    {
        "id": 269,
        "name": "Morissette and Sons",
        "sector": "Retail",
        "siren": 167669722,
        "results": [
            537,
            538
        ]
    },
    {
        "id": 270,
        "name": "Zemlak-Connelly",
        "sector": "Luxury",
        "siren": 104649344,
        "results": [
            539,
            540
        ]
    },
    {
        "id": 271,
        "name": "Johnson-Jakubowski",
        "sector": "Luxury",
        "siren": 192817456,
        "results": [
            541,
            542
        ]
    },
    {
        "id": 272,
        "name": "Volkman-Kovacek",
        "sector": "Luxury",
        "siren": 117895725,
        "results": [
            543,
            544
        ]
    },
    {
        "id": 273,
        "name": "Tillman, Skiles and Hilpert",
        "sector": "Energy",
        "siren": 117107520,
        "results": [
            545,
            546
        ]
    },
    {
        "id": 274,
        "name": "Kub-Daniel",
        "sector": "Services",
        "siren": 106341027,
        "results": [
            547,
            548
        ]
    },
    {
        "id": 275,
        "name": "Kohler-Dickinson",
        "sector": "Luxury",
        "siren": 187328834,
        "results": [
            549,
            550
        ]
    },
    {
        "id": 276,
        "name": "Carter, Hermann and Abbott",
        "sector": "Energy",
        "siren": 118248539,
        "results": [
            551,
            552
        ]
    },
    {
        "id": 277,
        "name": "Pfeffer Inc",
        "sector": "Energy",
        "siren": 196877153,
        "results": [
            553,
            554
        ]
    },
    {
        "id": 278,
        "name": "Bernier-Trantow",
        "sector": "Luxury",
        "siren": 144677992,
        "results": [
            555,
            556
        ]
    },
    {
        "id": 279,
        "name": "Spinka LLC",
        "sector": "Luxury",
        "siren": 116843327,
        "results": [
            557,
            558
        ]
    },
    {
        "id": 280,
        "name": "Walsh, Runolfsdottir and Kilback",
        "sector": "Luxury",
        "siren": 124931602,
        "results": [
            559,
            560
        ]
    },
    {
        "id": 281,
        "name": "Kreiger Group",
        "sector": "Electronic",
        "siren": 172446196,
        "results": [
            561,
            562
        ]
    },
    {
        "id": 282,
        "name": "Legros-Quigley",
        "sector": "Energy",
        "siren": 189491425,
        "results": [
            563,
            564
        ]
    },
    {
        "id": 283,
        "name": "Stracke, Feeney and Schmeler",
        "sector": "Retail",
        "siren": 172260753,
        "results": [
            565,
            566
        ]
    },
    {
        "id": 284,
        "name": "Gibson-Lynch",
        "sector": "Luxury",
        "siren": 131306836,
        "results": [
            567,
            568
        ]
    },
    {
        "id": 285,
        "name": "Reichel-Torp",
        "sector": "Services",
        "siren": 138938680,
        "results": [
            569,
            570
        ]
    },
    {
        "id": 286,
        "name": "Deckow-Herman",
        "sector": "Energy",
        "siren": 145463778,
        "results": [
            571,
            572
        ]
    },
    {
        "id": 287,
        "name": "Ondricka Inc",
        "sector": "Retail",
        "siren": 114106817,
        "results": [
            573,
            574
        ]
    },
    {
        "id": 288,
        "name": "Kassulke Group",
        "sector": "Services",
        "siren": 125326583,
        "results": [
            575,
            576
        ]
    },
    {
        "id": 289,
        "name": "Gutkowski and Sons",
        "sector": "Luxury",
        "siren": 194518065,
        "results": [
            577,
            578
        ]
    },
    {
        "id": 290,
        "name": "Brekke Inc",
        "sector": "Luxury",
        "siren": 144810441,
        "results": [
            579,
            580
        ]
    },
    {
        "id": 291,
        "name": "Sanford, Abbott and Doyle",
        "sector": "Luxury",
        "siren": 109581460,
        "results": [
            581,
            582
        ]
    },
    {
        "id": 292,
        "name": "Terry, Watsica and Marks",
        "sector": "Services",
        "siren": 163369130,
        "results": [
            583,
            584
        ]
    },
    {
        "id": 293,
        "name": "Windler, Beer and Reichert",
        "sector": "Energy",
        "siren": 162705486,
        "results": [
            585,
            586
        ]
    },
    {
        "id": 294,
        "name": "Quigley Inc",
        "sector": "Services",
        "siren": 171902083,
        "results": [
            587,
            588
        ]
    },
    {
        "id": 295,
        "name": "Kub and Sons",
        "sector": "Retail",
        "siren": 133035315,
        "results": [
            589,
            590
        ]
    },
    {
        "id": 296,
        "name": "Kutch LLC",
        "sector": "Services",
        "siren": 143661189,
        "results": [
            591,
            592
        ]
    },
    {
        "id": 297,
        "name": "Doyle, Batz and Stoltenberg",
        "sector": "Luxury",
        "siren": 187532589,
        "results": [
            593,
            594
        ]
    },
    {
        "id": 298,
        "name": "Goyette and Sons",
        "sector": "Energy",
        "siren": 199540783,
        "results": [
            595,
            596
        ]
    },
    {
        "id": 299,
        "name": "Windler Inc",
        "sector": "Services",
        "siren": 178765604,
        "results": [
            597,
            598
        ]
    },
    {
        "id": 300,
        "name": "Dicki Group",
        "sector": "Retail",
        "siren": 116237749,
        "results": [
            599,
            600
        ]
    },
    {
        "id": 301,
        "name": "Quitzon and Sons",
        "sector": "Luxury",
        "siren": 125672275,
        "results": [
            601,
            602
        ]
    },
    {
        "id": 302,
        "name": "Steuber-Metz",
        "sector": "Retail",
        "siren": 184946759,
        "results": [
            603,
            604
        ]
    },
    {
        "id": 303,
        "name": "Larson and Sons",
        "sector": "Energy",
        "siren": 160194912,
        "results": [
            605,
            606
        ]
    },
    {
        "id": 304,
        "name": "Bernier Inc",
        "sector": "Electronic",
        "siren": 118680509,
        "results": [
            607,
            608
        ]
    },
    {
        "id": 305,
        "name": "Deckow and Sons",
        "sector": "Electronic",
        "siren": 167104227,
        "results": [
            609,
            610
        ]
    },
    {
        "id": 306,
        "name": "Harris and Sons",
        "sector": "Energy",
        "siren": 128610634,
        "results": [
            611,
            612
        ]
    },
    {
        "id": 307,
        "name": "Medhurst and Sons",
        "sector": "Luxury",
        "siren": 102925161,
        "results": [
            613,
            614
        ]
    },
    {
        "id": 308,
        "name": "Nader-Marks",
        "sector": "Luxury",
        "siren": 191120490,
        "results": [
            615,
            616
        ]
    },
    {
        "id": 309,
        "name": "Harris, O'Conner and Rodriguez",
        "sector": "Retail",
        "siren": 153285638,
        "results": [
            617,
            618
        ]
    },
    {
        "id": 310,
        "name": "Emard-Wisoky",
        "sector": "Luxury",
        "siren": 131865937,
        "results": [
            619,
            620
        ]
    },
    {
        "id": 311,
        "name": "Gleichner-Buckridge",
        "sector": "Electronic",
        "siren": 142254757,
        "results": [
            621,
            622
        ]
    },
    {
        "id": 312,
        "name": "Stroman, Durgan and Schuster",
        "sector": "Electronic",
        "siren": 186553896,
        "results": [
            623,
            624
        ]
    },
    {
        "id": 313,
        "name": "Bahringer-Beer",
        "sector": "Electronic",
        "siren": 155909003,
        "results": [
            625,
            626
        ]
    },
    {
        "id": 314,
        "name": "Ankunding Group",
        "sector": "Services",
        "siren": 146522165,
        "results": [
            627,
            628
        ]
    },
    {
        "id": 315,
        "name": "Bailey and Sons",
        "sector": "Retail",
        "siren": 116912814,
        "results": [
            629,
            630
        ]
    },
    {
        "id": 316,
        "name": "Stiedemann Group",
        "sector": "Services",
        "siren": 138130435,
        "results": [
            631,
            632
        ]
    },
    {
        "id": 317,
        "name": "VonRueden, Stokes and Hammes",
        "sector": "Services",
        "siren": 136246184,
        "results": [
            633,
            634
        ]
    },
    {
        "id": 318,
        "name": "Cole, Schuppe and Nolan",
        "sector": "Energy",
        "siren": 126595826,
        "results": [
            635,
            636
        ]
    },
    {
        "id": 319,
        "name": "Gerlach-Haley",
        "sector": "Energy",
        "siren": 140145973,
        "results": [
            637,
            638
        ]
    },
    {
        "id": 320,
        "name": "Nader-Feest",
        "sector": "Energy",
        "siren": 142651328,
        "results": [
            639,
            640
        ]
    },
    {
        "id": 321,
        "name": "Barrows-Fahey",
        "sector": "Luxury",
        "siren": 197267187,
        "results": [
            641,
            642
        ]
    },
    {
        "id": 322,
        "name": "Botsford, Corkery and Zboncak",
        "sector": "Retail",
        "siren": 156360441,
        "results": [
            643,
            644
        ]
    },
    {
        "id": 323,
        "name": "Davis LLC",
        "sector": "Luxury",
        "siren": 187427886,
        "results": [
            645,
            646
        ]
    },
    {
        "id": 324,
        "name": "Sawayn Inc",
        "sector": "Retail",
        "siren": 199558391,
        "results": [
            647,
            648
        ]
    },
    {
        "id": 325,
        "name": "Pollich LLC",
        "sector": "Services",
        "siren": 131071003,
        "results": [
            649,
            650
        ]
    },
    {
        "id": 326,
        "name": "Nader, Heathcote and Beier",
        "sector": "Retail",
        "siren": 163154696,
        "results": [
            651,
            652
        ]
    },
    {
        "id": 327,
        "name": "Hauck-Kutch",
        "sector": "Retail",
        "siren": 151613004,
        "results": [
            653,
            654
        ]
    },
    {
        "id": 328,
        "name": "Denesik LLC",
        "sector": "Retail",
        "siren": 103479498,
        "results": [
            655,
            656
        ]
    },
    {
        "id": 329,
        "name": "Jast Group",
        "sector": "Energy",
        "siren": 143432110,
        "results": [
            657,
            658
        ]
    },
    {
        "id": 330,
        "name": "Larkin, Durgan and Franecki",
        "sector": "Electronic",
        "siren": 116000875,
        "results": [
            659,
            660
        ]
    },
    {
        "id": 331,
        "name": "Erdman, Breitenberg and Streich",
        "sector": "Electronic",
        "siren": 159175169,
        "results": [
            661,
            662
        ]
    },
    {
        "id": 332,
        "name": "Feest-Batz",
        "sector": "Electronic",
        "siren": 164860406,
        "results": [
            663,
            664
        ]
    },
    {
        "id": 333,
        "name": "Mayer Inc",
        "sector": "Energy",
        "siren": 101482936,
        "results": [
            665,
            666
        ]
    },
    {
        "id": 334,
        "name": "Balistreri, Will and Walker",
        "sector": "Retail",
        "siren": 161501031,
        "results": [
            667,
            668
        ]
    },
    {
        "id": 335,
        "name": "Rau, Yundt and Bergstrom",
        "sector": "Energy",
        "siren": 192338635,
        "results": [
            669,
            670
        ]
    },
    {
        "id": 336,
        "name": "Howell, Littel and Shanahan",
        "sector": "Luxury",
        "siren": 153414397,
        "results": [
            671,
            672
        ]
    },
    {
        "id": 337,
        "name": "Steuber, Thompson and Toy",
        "sector": "Services",
        "siren": 123940721,
        "results": [
            673,
            674
        ]
    },
    {
        "id": 338,
        "name": "Olson-Jakubowski",
        "sector": "Electronic",
        "siren": 167690862,
        "results": [
            675,
            676
        ]
    },
    {
        "id": 339,
        "name": "Rowe, Ziemann and Wintheiser",
        "sector": "Luxury",
        "siren": 184418505,
        "results": [
            677,
            678
        ]
    },
    {
        "id": 340,
        "name": "McKenzie-Waters",
        "sector": "Retail",
        "siren": 100313670,
        "results": [
            679,
            680
        ]
    },
    {
        "id": 341,
        "name": "Breitenberg, Emard and Schiller",
        "sector": "Energy",
        "siren": 182874115,
        "results": [
            681,
            682
        ]
    },
    {
        "id": 342,
        "name": "Reichel and Sons",
        "sector": "Electronic",
        "siren": 162185639,
        "results": [
            683,
            684
        ]
    },
    {
        "id": 343,
        "name": "Botsford LLC",
        "sector": "Energy",
        "siren": 108406570,
        "results": [
            685,
            686
        ]
    },
    {
        "id": 344,
        "name": "Hilpert LLC",
        "sector": "Electronic",
        "siren": 192146857,
        "results": [
            687,
            688
        ]
    },
    {
        "id": 345,
        "name": "Fritsch, Hahn and Veum",
        "sector": "Energy",
        "siren": 106505507,
        "results": [
            689,
            690
        ]
    },
    {
        "id": 346,
        "name": "Prosacco-Wiza",
        "sector": "Retail",
        "siren": 189019628,
        "results": [
            691,
            692
        ]
    },
    {
        "id": 347,
        "name": "Turner, Kovacek and Osinski",
        "sector": "Electronic",
        "siren": 136565825,
        "results": [
            693,
            694
        ]
    },
    {
        "id": 348,
        "name": "Feeney, Homenick and Anderson",
        "sector": "Services",
        "siren": 160773085,
        "results": [
            695,
            696
        ]
    },
    {
        "id": 349,
        "name": "Wuckert LLC",
        "sector": "Retail",
        "siren": 185956961,
        "results": [
            697,
            698
        ]
    },
    {
        "id": 350,
        "name": "Schamberger, Schuppe and Marks",
        "sector": "Services",
        "siren": 152638843,
        "results": [
            699,
            700
        ]
    },
    {
        "id": 351,
        "name": "Kuphal-Kovacek",
        "sector": "Luxury",
        "siren": 165732658,
        "results": [
            701,
            702
        ]
    },
    {
        "id": 352,
        "name": "Paucek Group",
        "sector": "Luxury",
        "siren": 119495081,
        "results": [
            703,
            704
        ]
    },
    {
        "id": 353,
        "name": "MacGyver-Hintz",
        "sector": "Electronic",
        "siren": 117496732,
        "results": [
            705,
            706
        ]
    },
    {
        "id": 354,
        "name": "Ratke and Sons",
        "sector": "Energy",
        "siren": 170431877,
        "results": [
            707,
            708
        ]
    },
    {
        "id": 355,
        "name": "Brekke, Greenfelder and Hills",
        "sector": "Energy",
        "siren": 151517029,
        "results": [
            709,
            710
        ]
    },
    {
        "id": 356,
        "name": "Kirlin Group",
        "sector": "Retail",
        "siren": 119879668,
        "results": [
            711,
            712
        ]
    },
    {
        "id": 357,
        "name": "Strosin, Wunsch and Kerluke",
        "sector": "Electronic",
        "siren": 106238133,
        "results": [
            713,
            714
        ]
    },
    {
        "id": 358,
        "name": "Barton, Pollich and Gaylord",
        "sector": "Electronic",
        "siren": 122325130,
        "results": [
            715,
            716
        ]
    },
    {
        "id": 359,
        "name": "Marks-Rolfson",
        "sector": "Luxury",
        "siren": 114187547,
        "results": [
            717,
            718
        ]
    },
    {
        "id": 360,
        "name": "Ferry Inc",
        "sector": "Luxury",
        "siren": 146000588,
        "results": [
            719,
            720
        ]
    },
    {
        "id": 361,
        "name": "Jones-Wuckert",
        "sector": "Services",
        "siren": 199815719,
        "results": [
            721,
            722
        ]
    },
    {
        "id": 362,
        "name": "Schuster-Pouros",
        "sector": "Energy",
        "siren": 123345367,
        "results": [
            723,
            724
        ]
    },
    {
        "id": 363,
        "name": "Reilly Group",
        "sector": "Energy",
        "siren": 195257069,
        "results": [
            725,
            726
        ]
    },
    {
        "id": 364,
        "name": "Swift-Schmeler",
        "sector": "Luxury",
        "siren": 159163298,
        "results": [
            727,
            728
        ]
    },
    {
        "id": 365,
        "name": "Frami, Kassulke and Williamson",
        "sector": "Luxury",
        "siren": 119389057,
        "results": [
            729,
            730
        ]
    },
    {
        "id": 366,
        "name": "Goldner-Ondricka",
        "sector": "Retail",
        "siren": 175911534,
        "results": [
            731,
            732
        ]
    },
    {
        "id": 367,
        "name": "O'Hara LLC",
        "sector": "Luxury",
        "siren": 138708659,
        "results": [
            733,
            734
        ]
    },
    {
        "id": 368,
        "name": "Raynor, Gibson and Schaden",
        "sector": "Retail",
        "siren": 132489467,
        "results": [
            735,
            736
        ]
    },
    {
        "id": 369,
        "name": "Konopelski-Parisian",
        "sector": "Electronic",
        "siren": 125596906,
        "results": [
            737,
            738
        ]
    },
    {
        "id": 370,
        "name": "Bergstrom-Bayer",
        "sector": "Retail",
        "siren": 172596887,
        "results": [
            739,
            740
        ]
    },
    {
        "id": 371,
        "name": "Gutmann-Wintheiser",
        "sector": "Electronic",
        "siren": 136870795,
        "results": [
            741,
            742
        ]
    },
    {
        "id": 372,
        "name": "Ruecker Inc",
        "sector": "Energy",
        "siren": 107771540,
        "results": [
            743,
            744
        ]
    },
    {
        "id": 373,
        "name": "Schowalter and Sons",
        "sector": "Electronic",
        "siren": 104892063,
        "results": [
            745,
            746
        ]
    },
    {
        "id": 374,
        "name": "Weimann Inc",
        "sector": "Electronic",
        "siren": 115032180,
        "results": [
            747,
            748
        ]
    },
    {
        "id": 375,
        "name": "Fay-Wolf",
        "sector": "Retail",
        "siren": 152912420,
        "results": [
            749,
            750
        ]
    },
    {
        "id": 376,
        "name": "Jakubowski, Tillman and Hamill",
        "sector": "Energy",
        "siren": 186447593,
        "results": [
            751,
            752
        ]
    },
    {
        "id": 377,
        "name": "Green and Sons",
        "sector": "Electronic",
        "siren": 119660051,
        "results": [
            753,
            754
        ]
    },
    {
        "id": 378,
        "name": "Schumm-Kirlin",
        "sector": "Luxury",
        "siren": 108906276,
        "results": [
            755,
            756
        ]
    },
    {
        "id": 379,
        "name": "Waelchi Inc",
        "sector": "Luxury",
        "siren": 150114349,
        "results": [
            757,
            758
        ]
    },
    {
        "id": 380,
        "name": "Rodriguez, Morissette and Runolfsson",
        "sector": "Services",
        "siren": 178558625,
        "results": [
            759,
            760
        ]
    },
    {
        "id": 381,
        "name": "Mosciski, O'Keefe and Beier",
        "sector": "Luxury",
        "siren": 181047279,
        "results": [
            761,
            762
        ]
    },
    {
        "id": 382,
        "name": "Ankunding-Hansen",
        "sector": "Energy",
        "siren": 198569365,
        "results": [
            763,
            764
        ]
    },
    {
        "id": 383,
        "name": "Considine, Ullrich and Beatty",
        "sector": "Energy",
        "siren": 167785468,
        "results": [
            765,
            766
        ]
    },
    {
        "id": 384,
        "name": "Macejkovic, Barton and Purdy",
        "sector": "Energy",
        "siren": 158559600,
        "results": [
            767,
            768
        ]
    },
    {
        "id": 385,
        "name": "Kshlerin Inc",
        "sector": "Retail",
        "siren": 164045216,
        "results": [
            769,
            770
        ]
    },
    {
        "id": 386,
        "name": "Schuster-Vandervort",
        "sector": "Retail",
        "siren": 183312705,
        "results": [
            771,
            772
        ]
    },
    {
        "id": 387,
        "name": "Steuber, Marvin and Balistreri",
        "sector": "Services",
        "siren": 184552006,
        "results": [
            773,
            774
        ]
    },
    {
        "id": 388,
        "name": "Kuvalis LLC",
        "sector": "Electronic",
        "siren": 107252195,
        "results": [
            775,
            776
        ]
    },
    {
        "id": 389,
        "name": "Hegmann-Murazik",
        "sector": "Luxury",
        "siren": 162358868,
        "results": [
            777,
            778
        ]
    },
    {
        "id": 390,
        "name": "Lebsack, Weissnat and Marquardt",
        "sector": "Services",
        "siren": 130350712,
        "results": [
            779,
            780
        ]
    },
    {
        "id": 391,
        "name": "Schulist, Auer and Eichmann",
        "sector": "Electronic",
        "siren": 173544794,
        "results": [
            781,
            782
        ]
    },
    {
        "id": 392,
        "name": "Wehner Inc",
        "sector": "Electronic",
        "siren": 193306137,
        "results": [
            783,
            784
        ]
    },
    {
        "id": 393,
        "name": "Feest LLC",
        "sector": "Energy",
        "siren": 148619127,
        "results": [
            785,
            786
        ]
    },
    {
        "id": 394,
        "name": "Stroman, Bauch and McKenzie",
        "sector": "Electronic",
        "siren": 111498818,
        "results": [
            787,
            788
        ]
    },
    {
        "id": 395,
        "name": "Greenfelder-Olson",
        "sector": "Luxury",
        "siren": 186018493,
        "results": [
            789,
            790
        ]
    },
    {
        "id": 396,
        "name": "Brown, Monahan and Hintz",
        "sector": "Energy",
        "siren": 124558272,
        "results": [
            791,
            792
        ]
    },
    {
        "id": 397,
        "name": "Runolfsson, Jenkins and Carter",
        "sector": "Energy",
        "siren": 163601798,
        "results": [
            793,
            794
        ]
    },
    {
        "id": 398,
        "name": "Hahn, Gleichner and Bechtelar",
        "sector": "Electronic",
        "siren": 195222821,
        "results": [
            795,
            796
        ]
    },
    {
        "id": 399,
        "name": "Roberts-Stracke",
        "sector": "Electronic",
        "siren": 175690581,
        "results": [
            797,
            798
        ]
    },
    {
        "id": 400,
        "name": "Stehr, Wisoky and Carroll",
        "sector": "Retail",
        "siren": 180337425,
        "results": [
            799,
            800
        ]
    },
    {
        "id": 401,
        "name": "Feeney, Larkin and Bailey",
        "sector": "Energy",
        "siren": 191843405,
        "results": [
            801,
            802
        ]
    },
    {
        "id": 402,
        "name": "Wunsch-Kub",
        "sector": "Energy",
        "siren": 114733505,
        "results": [
            803,
            804
        ]
    },
    {
        "id": 403,
        "name": "Prosacco and Sons",
        "sector": "Electronic",
        "siren": 107733229,
        "results": [
            805,
            806
        ]
    },
    {
        "id": 404,
        "name": "Wuckert-Spinka",
        "sector": "Energy",
        "siren": 142809805,
        "results": [
            807,
            808
        ]
    },
    {
        "id": 405,
        "name": "Fritsch, Haley and Wuckert",
        "sector": "Retail",
        "siren": 160133554,
        "results": [
            809,
            810
        ]
    },
    {
        "id": 406,
        "name": "Jaskolski and Sons",
        "sector": "Retail",
        "siren": 182186809,
        "results": [
            811,
            812
        ]
    },
    {
        "id": 407,
        "name": "Beer, Reynolds and Altenwerth",
        "sector": "Services",
        "siren": 166645816,
        "results": [
            813,
            814
        ]
    },
    {
        "id": 408,
        "name": "Jacobs-Fay",
        "sector": "Retail",
        "siren": 187905465,
        "results": [
            815,
            816
        ]
    },
    {
        "id": 409,
        "name": "Lynch, Volkman and Mayert",
        "sector": "Electronic",
        "siren": 167643726,
        "results": [
            817,
            818
        ]
    },
    {
        "id": 410,
        "name": "Goodwin-Stoltenberg",
        "sector": "Luxury",
        "siren": 115979485,
        "results": [
            819,
            820
        ]
    },
    {
        "id": 411,
        "name": "Turner-Stracke",
        "sector": "Electronic",
        "siren": 100650646,
        "results": [
            821,
            822
        ]
    },
    {
        "id": 412,
        "name": "Ebert, Emmerich and Thompson",
        "sector": "Retail",
        "siren": 115340847,
        "results": [
            823,
            824
        ]
    },
    {
        "id": 413,
        "name": "Rau, Block and Friesen",
        "sector": "Retail",
        "siren": 122048074,
        "results": [
            825,
            826
        ]
    },
    {
        "id": 414,
        "name": "Stanton Inc",
        "sector": "Luxury",
        "siren": 191782204,
        "results": [
            827,
            828
        ]
    },
    {
        "id": 415,
        "name": "Braun LLC",
        "sector": "Luxury",
        "siren": 113043006,
        "results": [
            829,
            830
        ]
    },
    {
        "id": 416,
        "name": "Ankunding, Wolff and Ferry",
        "sector": "Luxury",
        "siren": 146431624,
        "results": [
            831,
            832
        ]
    },
    {
        "id": 417,
        "name": "Kertzmann Group",
        "sector": "Luxury",
        "siren": 161802172,
        "results": [
            833,
            834
        ]
    },
    {
        "id": 418,
        "name": "Cartwright Group",
        "sector": "Energy",
        "siren": 194116781,
        "results": [
            835,
            836
        ]
    },
    {
        "id": 419,
        "name": "Hodkiewicz, Prohaska and Mueller",
        "sector": "Retail",
        "siren": 113021215,
        "results": [
            837,
            838
        ]
    },
    {
        "id": 420,
        "name": "Lang-Borer",
        "sector": "Energy",
        "siren": 132031123,
        "results": [
            839,
            840
        ]
    },
    {
        "id": 421,
        "name": "Terry Inc",
        "sector": "Energy",
        "siren": 158816796,
        "results": [
            841,
            842
        ]
    },
    {
        "id": 422,
        "name": "Kilback, White and Kuhn",
        "sector": "Retail",
        "siren": 195265239,
        "results": [
            843,
            844
        ]
    },
    {
        "id": 423,
        "name": "Kozey, Dare and Wolff",
        "sector": "Luxury",
        "siren": 188745517,
        "results": [
            845,
            846
        ]
    },
    {
        "id": 424,
        "name": "Sporer-Zemlak",
        "sector": "Luxury",
        "siren": 161108543,
        "results": [
            847,
            848
        ]
    },
    {
        "id": 425,
        "name": "Crooks, Nolan and Monahan",
        "sector": "Services",
        "siren": 143702778,
        "results": [
            849,
            850
        ]
    },
    {
        "id": 426,
        "name": "Miller and Sons",
        "sector": "Luxury",
        "siren": 104496126,
        "results": [
            851,
            852
        ]
    },
    {
        "id": 427,
        "name": "Kertzmann-Greenholt",
        "sector": "Electronic",
        "siren": 195850715,
        "results": [
            853,
            854
        ]
    },
    {
        "id": 428,
        "name": "Jones Inc",
        "sector": "Services",
        "siren": 182091222,
        "results": [
            855,
            856
        ]
    },
    {
        "id": 429,
        "name": "Green, Harvey and Johns",
        "sector": "Energy",
        "siren": 156317095,
        "results": [
            857,
            858
        ]
    },
    {
        "id": 430,
        "name": "Wunsch-Mante",
        "sector": "Energy",
        "siren": 142459232,
        "results": [
            859,
            860
        ]
    },
    {
        "id": 431,
        "name": "Graham-Swaniawski",
        "sector": "Energy",
        "siren": 190807753,
        "results": [
            861,
            862
        ]
    },
    {
        "id": 432,
        "name": "Ferry, Fritsch and Fadel",
        "sector": "Energy",
        "siren": 161226595,
        "results": [
            863,
            864
        ]
    },
    {
        "id": 433,
        "name": "Marks-Dicki",
        "sector": "Energy",
        "siren": 166825502,
        "results": [
            865,
            866
        ]
    },
    {
        "id": 434,
        "name": "Price and Sons",
        "sector": "Retail",
        "siren": 125486381,
        "results": [
            867,
            868
        ]
    },
    {
        "id": 435,
        "name": "Rutherford-Pouros",
        "sector": "Energy",
        "siren": 193019462,
        "results": [
            869,
            870
        ]
    },
    {
        "id": 436,
        "name": "Walter-Mohr",
        "sector": "Electronic",
        "siren": 113458358,
        "results": [
            871,
            872
        ]
    },
    {
        "id": 437,
        "name": "McKenzie LLC",
        "sector": "Luxury",
        "siren": 112664870,
        "results": [
            873,
            874
        ]
    },
    {
        "id": 438,
        "name": "Miller, Pacocha and Bechtelar",
        "sector": "Electronic",
        "siren": 108443710,
        "results": [
            875,
            876
        ]
    },
    {
        "id": 439,
        "name": "Corkery and Sons",
        "sector": "Luxury",
        "siren": 178465657,
        "results": [
            877,
            878
        ]
    },
    {
        "id": 440,
        "name": "Halvorson, Bernier and Hammes",
        "sector": "Electronic",
        "siren": 122900550,
        "results": [
            879,
            880
        ]
    },
    {
        "id": 441,
        "name": "Wiegand-Dickens",
        "sector": "Services",
        "siren": 143579372,
        "results": [
            881,
            882
        ]
    },
    {
        "id": 442,
        "name": "Torp Inc",
        "sector": "Energy",
        "siren": 189725524,
        "results": [
            883,
            884
        ]
    },
    {
        "id": 443,
        "name": "Daugherty LLC",
        "sector": "Electronic",
        "siren": 128217325,
        "results": [
            885,
            886
        ]
    },
    {
        "id": 444,
        "name": "Ledner, Kulas and Howe",
        "sector": "Retail",
        "siren": 178754669,
        "results": [
            887,
            888
        ]
    },
    {
        "id": 445,
        "name": "Cummerata-Pacocha",
        "sector": "Electronic",
        "siren": 139964584,
        "results": [
            889,
            890
        ]
    },
    {
        "id": 446,
        "name": "Buckridge, Hoppe and Pouros",
        "sector": "Services",
        "siren": 181577867,
        "results": [
            891,
            892
        ]
    },
    {
        "id": 447,
        "name": "Yost, Hauck and Crist",
        "sector": "Services",
        "siren": 136140105,
        "results": [
            893,
            894
        ]
    },
    {
        "id": 448,
        "name": "Emard, Gottlieb and Erdman",
        "sector": "Services",
        "siren": 197348760,
        "results": [
            895,
            896
        ]
    },
    {
        "id": 449,
        "name": "Legros-Grant",
        "sector": "Luxury",
        "siren": 111581904,
        "results": [
            897,
            898
        ]
    },
    {
        "id": 450,
        "name": "Donnelly and Sons",
        "sector": "Luxury",
        "siren": 191402137,
        "results": [
            899,
            900
        ]
    },
    {
        "id": 451,
        "name": "McDermott Inc",
        "sector": "Luxury",
        "siren": 128440199,
        "results": [
            901,
            902
        ]
    },
    {
        "id": 452,
        "name": "Gutmann-Buckridge",
        "sector": "Energy",
        "siren": 155312193,
        "results": [
            903,
            904
        ]
    },
    {
        "id": 453,
        "name": "Murray LLC",
        "sector": "Electronic",
        "siren": 167238818,
        "results": [
            905,
            906
        ]
    },
    {
        "id": 454,
        "name": "O'Conner Group",
        "sector": "Services",
        "siren": 112907980,
        "results": [
            907,
            908
        ]
    },
    {
        "id": 455,
        "name": "Kassulke, Hahn and Turner",
        "sector": "Electronic",
        "siren": 183456129,
        "results": [
            909,
            910
        ]
    },
    {
        "id": 456,
        "name": "Stanton-Kirlin",
        "sector": "Electronic",
        "siren": 193551149,
        "results": [
            911,
            912
        ]
    },
    {
        "id": 457,
        "name": "Bergstrom-Botsford",
        "sector": "Energy",
        "siren": 192063048,
        "results": [
            913,
            914
        ]
    },
    {
        "id": 458,
        "name": "Feest Inc",
        "sector": "Electronic",
        "siren": 171639217,
        "results": [
            915,
            916
        ]
    },
    {
        "id": 459,
        "name": "Gibson and Sons",
        "sector": "Electronic",
        "siren": 141394359,
        "results": [
            917,
            918
        ]
    },
    {
        "id": 460,
        "name": "McClure, Doyle and Lemke",
        "sector": "Services",
        "siren": 185255508,
        "results": [
            919,
            920
        ]
    },
    {
        "id": 461,
        "name": "Koelpin-Schuster",
        "sector": "Services",
        "siren": 129367452,
        "results": [
            921,
            922
        ]
    },
    {
        "id": 462,
        "name": "Blick Group",
        "sector": "Retail",
        "siren": 109638278,
        "results": [
            923,
            924
        ]
    },
    {
        "id": 463,
        "name": "Thompson, Wiza and Bergstrom",
        "sector": "Services",
        "siren": 122984303,
        "results": [
            925,
            926
        ]
    },
    {
        "id": 464,
        "name": "Dickinson-Hauck",
        "sector": "Electronic",
        "siren": 118582382,
        "results": [
            927,
            928
        ]
    },
    {
        "id": 465,
        "name": "Connelly-Emmerich",
        "sector": "Services",
        "siren": 113938988,
        "results": [
            929,
            930
        ]
    },
    {
        "id": 466,
        "name": "Mohr-Willms",
        "sector": "Energy",
        "siren": 187522743,
        "results": [
            931,
            932
        ]
    },
    {
        "id": 467,
        "name": "Kiehn and Sons",
        "sector": "Services",
        "siren": 158676324,
        "results": [
            933,
            934
        ]
    },
    {
        "id": 468,
        "name": "Strosin-Nienow",
        "sector": "Energy",
        "siren": 107572331,
        "results": [
            935,
            936
        ]
    },
    {
        "id": 469,
        "name": "Bergstrom, Beatty and Runolfsson",
        "sector": "Electronic",
        "siren": 121012810,
        "results": [
            937,
            938
        ]
    },
    {
        "id": 470,
        "name": "Halvorson LLC",
        "sector": "Retail",
        "siren": 156132597,
        "results": [
            939,
            940
        ]
    },
    {
        "id": 471,
        "name": "Yost Inc",
        "sector": "Luxury",
        "siren": 116036824,
        "results": [
            941,
            942
        ]
    },
    {
        "id": 472,
        "name": "Veum-Gleichner",
        "sector": "Luxury",
        "siren": 152821236,
        "results": [
            943,
            944
        ]
    },
    {
        "id": 473,
        "name": "Hyatt and Sons",
        "sector": "Retail",
        "siren": 178440800,
        "results": [
            945,
            946
        ]
    },
    {
        "id": 474,
        "name": "Jenkins-Berge",
        "sector": "Energy",
        "siren": 146784275,
        "results": [
            947,
            948
        ]
    },
    {
        "id": 475,
        "name": "Runolfsson-Bergnaum",
        "sector": "Electronic",
        "siren": 145978278,
        "results": [
            949,
            950
        ]
    },
    {
        "id": 476,
        "name": "McCullough-Glover",
        "sector": "Energy",
        "siren": 113262106,
        "results": [
            951,
            952
        ]
    },
    {
        "id": 477,
        "name": "Roberts-Nolan",
        "sector": "Energy",
        "siren": 174223676,
        "results": [
            953,
            954
        ]
    },
    {
        "id": 478,
        "name": "Littel Group",
        "sector": "Luxury",
        "siren": 175783016,
        "results": [
            955,
            956
        ]
    },
    {
        "id": 479,
        "name": "Lynch-Borer",
        "sector": "Energy",
        "siren": 150864939,
        "results": [
            957,
            958
        ]
    },
    {
        "id": 480,
        "name": "West and Sons",
        "sector": "Luxury",
        "siren": 129195143,
        "results": [
            959,
            960
        ]
    },
    {
        "id": 481,
        "name": "Reynolds-Klein",
        "sector": "Electronic",
        "siren": 136442190,
        "results": [
            961,
            962
        ]
    },
    {
        "id": 482,
        "name": "Ebert-Wilkinson",
        "sector": "Electronic",
        "siren": 153250828,
        "results": [
            963,
            964
        ]
    },
    {
        "id": 483,
        "name": "Veum Inc",
        "sector": "Retail",
        "siren": 189026579,
        "results": [
            965,
            966
        ]
    },
    {
        "id": 484,
        "name": "Kulas, Dickens and Schimmel",
        "sector": "Electronic",
        "siren": 188764097,
        "results": [
            967,
            968
        ]
    },
    {
        "id": 485,
        "name": "Bashirian, Predovic and Thiel",
        "sector": "Services",
        "siren": 174893385,
        "results": [
            969,
            970
        ]
    },
    {
        "id": 486,
        "name": "Dooley, Schmidt and Corwin",
        "sector": "Electronic",
        "siren": 101357409,
        "results": [
            971,
            972
        ]
    },
    {
        "id": 487,
        "name": "Ward-Hilpert",
        "sector": "Retail",
        "siren": 113999321,
        "results": [
            973,
            974
        ]
    },
    {
        "id": 488,
        "name": "Anderson, Kautzer and Osinski",
        "sector": "Electronic",
        "siren": 104595654,
        "results": [
            975,
            976
        ]
    },
    {
        "id": 489,
        "name": "Zemlak-Kertzmann",
        "sector": "Services",
        "siren": 156021041,
        "results": [
            977,
            978
        ]
    },
    {
        "id": 490,
        "name": "Harvey, Ryan and Romaguera",
        "sector": "Energy",
        "siren": 195567025,
        "results": [
            979,
            980
        ]
    },
    {
        "id": 491,
        "name": "Smith LLC",
        "sector": "Energy",
        "siren": 151675230,
        "results": [
            981,
            982
        ]
    },
    {
        "id": 492,
        "name": "Morissette-Bechtelar",
        "sector": "Electronic",
        "siren": 131829498,
        "results": [
            983,
            984
        ]
    },
    {
        "id": 493,
        "name": "Davis Inc",
        "sector": "Luxury",
        "siren": 128915257,
        "results": [
            985,
            986
        ]
    },
    {
        "id": 494,
        "name": "Hagenes-Mertz",
        "sector": "Retail",
        "siren": 132293761,
        "results": [
            987,
            988
        ]
    },
    {
        "id": 495,
        "name": "Spinka-Kulas",
        "sector": "Electronic",
        "siren": 173768175,
        "results": [
            989,
            990
        ]
    },
    {
        "id": 496,
        "name": "Bednar and Sons",
        "sector": "Electronic",
        "siren": 149652676,
        "results": [
            991,
            992
        ]
    },
    {
        "id": 497,
        "name": "Schinner Inc",
        "sector": "Retail",
        "siren": 173498224,
        "results": [
            993,
            994
        ]
    },
    {
        "id": 498,
        "name": "Hickle, Cronin and Rolfson",
        "sector": "Services",
        "siren": 176249839,
        "results": [
            995,
            996
        ]
    },
    {
        "id": 499,
        "name": "Gleason, Will and Fay",
        "sector": "Luxury",
        "siren": 164765227,
        "results": [
            997,
            998
        ]
    },
    {
        "id": 500,
        "name": "Funk Inc",
        "sector": "Retail",
        "siren": 137803307,
        "results": [
            999,
            1000
        ]
    },
    {
        "id": 501,
        "name": "Wisoky Inc",
        "sector": "Retail",
        "siren": 121556034,
        "results": [
            1001,
            1002
        ]
    },
    {
        "id": 502,
        "name": "Weimann-Marvin",
        "sector": "Electronic",
        "siren": 127467544,
        "results": [
            1003,
            1004
        ]
    },
    {
        "id": 503,
        "name": "Swift LLC",
        "sector": "Electronic",
        "siren": 109568865,
        "results": [
            1005,
            1006
        ]
    },
    {
        "id": 504,
        "name": "Kovacek Group",
        "sector": "Services",
        "siren": 181313577,
        "results": [
            1007,
            1008
        ]
    },
    {
        "id": 505,
        "name": "Reynolds, Gislason and Krajcik",
        "sector": "Electronic",
        "siren": 159546715,
        "results": [
            1009,
            1010
        ]
    },
    {
        "id": 506,
        "name": "McLaughlin, Kozey and Murazik",
        "sector": "Retail",
        "siren": 182618959,
        "results": [
            1011,
            1012
        ]
    },
    {
        "id": 507,
        "name": "Kovacek, Herzog and Bruen",
        "sector": "Services",
        "siren": 129403218,
        "results": [
            1013,
            1014
        ]
    },
    {
        "id": 508,
        "name": "Bechtelar-Aufderhar",
        "sector": "Electronic",
        "siren": 154065184,
        "results": [
            1015,
            1016
        ]
    },
    {
        "id": 509,
        "name": "Lueilwitz-Funk",
        "sector": "Services",
        "siren": 118541345,
        "results": [
            1017,
            1018
        ]
    },
    {
        "id": 510,
        "name": "Langworth, Bins and Corwin",
        "sector": "Retail",
        "siren": 178527207,
        "results": [
            1019,
            1020
        ]
    },
    {
        "id": 511,
        "name": "Becker-Abshire",
        "sector": "Services",
        "siren": 188856089,
        "results": [
            1021,
            1022
        ]
    },
    {
        "id": 512,
        "name": "Blick LLC",
        "sector": "Retail",
        "siren": 128232319,
        "results": [
            1023,
            1024
        ]
    },
    {
        "id": 513,
        "name": "Herman Group",
        "sector": "Luxury",
        "siren": 142725171,
        "results": [
            1025,
            1026
        ]
    },
    {
        "id": 514,
        "name": "Willms-Harvey",
        "sector": "Retail",
        "siren": 135901454,
        "results": [
            1027,
            1028
        ]
    },
    {
        "id": 515,
        "name": "Olson-Rowe",
        "sector": "Electronic",
        "siren": 113318308,
        "results": [
            1029,
            1030
        ]
    },
    {
        "id": 516,
        "name": "Nicolas, Mante and Abbott",
        "sector": "Energy",
        "siren": 189491851,
        "results": [
            1031,
            1032
        ]
    },
    {
        "id": 517,
        "name": "Koch-Grant",
        "sector": "Energy",
        "siren": 110261861,
        "results": [
            1033,
            1034
        ]
    },
    {
        "id": 518,
        "name": "Bechtelar, Marks and Jast",
        "sector": "Services",
        "siren": 159467015,
        "results": [
            1035,
            1036
        ]
    },
    {
        "id": 519,
        "name": "Senger and Sons",
        "sector": "Services",
        "siren": 196046815,
        "results": [
            1037,
            1038
        ]
    },
    {
        "id": 520,
        "name": "Spinka Group",
        "sector": "Electronic",
        "siren": 119044687,
        "results": [
            1039,
            1040
        ]
    },
    {
        "id": 521,
        "name": "Hessel, Zulauf and Weissnat",
        "sector": "Energy",
        "siren": 168259446,
        "results": [
            1041,
            1042
        ]
    },
    {
        "id": 522,
        "name": "Keebler-Marvin",
        "sector": "Retail",
        "siren": 199067048,
        "results": [
            1043,
            1044
        ]
    },
    {
        "id": 523,
        "name": "Williamson-Thompson",
        "sector": "Retail",
        "siren": 162996923,
        "results": [
            1045,
            1046
        ]
    },
    {
        "id": 524,
        "name": "Thompson, Willms and Lueilwitz",
        "sector": "Luxury",
        "siren": 134457607,
        "results": [
            1047,
            1048
        ]
    },
    {
        "id": 525,
        "name": "Littel-Von",
        "sector": "Luxury",
        "siren": 190435864,
        "results": [
            1049,
            1050
        ]
    },
    {
        "id": 526,
        "name": "O'Keefe Inc",
        "sector": "Services",
        "siren": 122025835,
        "results": [
            1051,
            1052
        ]
    },
    {
        "id": 527,
        "name": "Huels and Sons",
        "sector": "Services",
        "siren": 100742639,
        "results": [
            1053,
            1054
        ]
    },
    {
        "id": 528,
        "name": "Rice, Mayert and Wisoky",
        "sector": "Electronic",
        "siren": 158220536,
        "results": [
            1055,
            1056
        ]
    },
    {
        "id": 529,
        "name": "Spinka LLC",
        "sector": "Retail",
        "siren": 116908228,
        "results": [
            1057,
            1058
        ]
    },
    {
        "id": 530,
        "name": "Jones Inc",
        "sector": "Services",
        "siren": 129953296,
        "results": [
            1059,
            1060
        ]
    },
    {
        "id": 531,
        "name": "Gerhold, McLaughlin and Leuschke",
        "sector": "Services",
        "siren": 132966531,
        "results": [
            1061,
            1062
        ]
    },
    {
        "id": 532,
        "name": "Dooley-Turcotte",
        "sector": "Luxury",
        "siren": 179279468,
        "results": [
            1063,
            1064
        ]
    },
    {
        "id": 533,
        "name": "Carroll, Rippin and Corkery",
        "sector": "Retail",
        "siren": 129087805,
        "results": [
            1065,
            1066
        ]
    },
    {
        "id": 534,
        "name": "Bins and Sons",
        "sector": "Luxury",
        "siren": 175820542,
        "results": [
            1067,
            1068
        ]
    },
    {
        "id": 535,
        "name": "Lowe, Schuster and Hartmann",
        "sector": "Energy",
        "siren": 154756281,
        "results": [
            1069,
            1070
        ]
    },
    {
        "id": 536,
        "name": "Runte LLC",
        "sector": "Services",
        "siren": 170053801,
        "results": [
            1071,
            1072
        ]
    },
    {
        "id": 537,
        "name": "Wunsch, Beatty and Rogahn",
        "sector": "Electronic",
        "siren": 108707894,
        "results": [
            1073,
            1074
        ]
    },
    {
        "id": 538,
        "name": "Ryan, Pfannerstill and Stroman",
        "sector": "Luxury",
        "siren": 148513566,
        "results": [
            1075,
            1076
        ]
    },
    {
        "id": 539,
        "name": "Lind, Windler and Nienow",
        "sector": "Retail",
        "siren": 194799851,
        "results": [
            1077,
            1078
        ]
    },
    {
        "id": 540,
        "name": "O'Connell LLC",
        "sector": "Retail",
        "siren": 146392762,
        "results": [
            1079,
            1080
        ]
    },
    {
        "id": 541,
        "name": "Paucek and Sons",
        "sector": "Luxury",
        "siren": 100193913,
        "results": [
            1081,
            1082
        ]
    },
    {
        "id": 542,
        "name": "Champlin-Bergstrom",
        "sector": "Electronic",
        "siren": 103878945,
        "results": [
            1083,
            1084
        ]
    },
    {
        "id": 543,
        "name": "Cronin Group",
        "sector": "Energy",
        "siren": 169765022,
        "results": [
            1085,
            1086
        ]
    },
    {
        "id": 544,
        "name": "Kris-Hartmann",
        "sector": "Energy",
        "siren": 158608930,
        "results": [
            1087,
            1088
        ]
    },
    {
        "id": 545,
        "name": "Hansen, Hamill and Volkman",
        "sector": "Services",
        "siren": 171744012,
        "results": [
            1089,
            1090
        ]
    },
    {
        "id": 546,
        "name": "Waters, Sporer and Hodkiewicz",
        "sector": "Retail",
        "siren": 114491510,
        "results": [
            1091,
            1092
        ]
    },
    {
        "id": 547,
        "name": "Haag, Turcotte and Rodriguez",
        "sector": "Services",
        "siren": 135599618,
        "results": [
            1093,
            1094
        ]
    },
    {
        "id": 548,
        "name": "Koch and Sons",
        "sector": "Retail",
        "siren": 129281145,
        "results": [
            1095,
            1096
        ]
    },
    {
        "id": 549,
        "name": "Abbott-Orn",
        "sector": "Services",
        "siren": 175574586,
        "results": [
            1097,
            1098
        ]
    },
    {
        "id": 550,
        "name": "Kutch, Hammes and Wolff",
        "sector": "Energy",
        "siren": 125726321,
        "results": [
            1099,
            1100
        ]
    },
    {
        "id": 551,
        "name": "Towne, Robel and McClure",
        "sector": "Luxury",
        "siren": 189818068,
        "results": [
            1101,
            1102
        ]
    },
    {
        "id": 552,
        "name": "Schoen Group",
        "sector": "Services",
        "siren": 104760922,
        "results": [
            1103,
            1104
        ]
    },
    {
        "id": 553,
        "name": "Dicki Group",
        "sector": "Energy",
        "siren": 194491506,
        "results": [
            1105,
            1106
        ]
    },
    {
        "id": 554,
        "name": "Okuneva, Tromp and Cole",
        "sector": "Services",
        "siren": 143821444,
        "results": [
            1107,
            1108
        ]
    },
    {
        "id": 555,
        "name": "Moen-Kshlerin",
        "sector": "Retail",
        "siren": 116169729,
        "results": [
            1109,
            1110
        ]
    },
    {
        "id": 556,
        "name": "Runte Inc",
        "sector": "Luxury",
        "siren": 129549741,
        "results": [
            1111,
            1112
        ]
    },
    {
        "id": 557,
        "name": "O'Connell, Nolan and Beer",
        "sector": "Energy",
        "siren": 192563933,
        "results": [
            1113,
            1114
        ]
    },
    {
        "id": 558,
        "name": "Conn Group",
        "sector": "Electronic",
        "siren": 110690030,
        "results": [
            1115,
            1116
        ]
    },
    {
        "id": 559,
        "name": "Koch, Ratke and Hyatt",
        "sector": "Electronic",
        "siren": 149194214,
        "results": [
            1117,
            1118
        ]
    },
    {
        "id": 560,
        "name": "O'Reilly-O'Conner",
        "sector": "Services",
        "siren": 171094192,
        "results": [
            1119,
            1120
        ]
    },
    {
        "id": 561,
        "name": "Kuhic, Reichel and Hilpert",
        "sector": "Services",
        "siren": 183568091,
        "results": [
            1121,
            1122
        ]
    },
    {
        "id": 562,
        "name": "Oberbrunner-Lebsack",
        "sector": "Energy",
        "siren": 111910705,
        "results": [
            1123,
            1124
        ]
    },
    {
        "id": 563,
        "name": "McCullough-Adams",
        "sector": "Retail",
        "siren": 184916496,
        "results": [
            1125,
            1126
        ]
    },
    {
        "id": 564,
        "name": "Buckridge-Aufderhar",
        "sector": "Retail",
        "siren": 180781481,
        "results": [
            1127,
            1128
        ]
    },
    {
        "id": 565,
        "name": "Maggio Inc",
        "sector": "Luxury",
        "siren": 123066808,
        "results": [
            1129,
            1130
        ]
    },
    {
        "id": 566,
        "name": "Wuckert, Thiel and Kunze",
        "sector": "Energy",
        "siren": 163452953,
        "results": [
            1131,
            1132
        ]
    },
    {
        "id": 567,
        "name": "Murray LLC",
        "sector": "Luxury",
        "siren": 159304380,
        "results": [
            1133,
            1134
        ]
    },
    {
        "id": 568,
        "name": "Feest LLC",
        "sector": "Services",
        "siren": 117304068,
        "results": [
            1135,
            1136
        ]
    },
    {
        "id": 569,
        "name": "Altenwerth and Sons",
        "sector": "Luxury",
        "siren": 125735323,
        "results": [
            1137,
            1138
        ]
    },
    {
        "id": 570,
        "name": "Kovacek, Kreiger and Turcotte",
        "sector": "Services",
        "siren": 170068224,
        "results": [
            1139,
            1140
        ]
    },
    {
        "id": 571,
        "name": "Vandervort-Hauck",
        "sector": "Energy",
        "siren": 117801397,
        "results": [
            1141,
            1142
        ]
    },
    {
        "id": 572,
        "name": "Rice Group",
        "sector": "Electronic",
        "siren": 142836550,
        "results": [
            1143,
            1144
        ]
    },
    {
        "id": 573,
        "name": "Brekke Group",
        "sector": "Luxury",
        "siren": 173580801,
        "results": [
            1145,
            1146
        ]
    },
    {
        "id": 574,
        "name": "Brekke and Sons",
        "sector": "Electronic",
        "siren": 152758790,
        "results": [
            1147,
            1148
        ]
    },
    {
        "id": 575,
        "name": "Will Inc",
        "sector": "Energy",
        "siren": 178155597,
        "results": [
            1149,
            1150
        ]
    },
    {
        "id": 576,
        "name": "Mitchell, Hickle and Champlin",
        "sector": "Luxury",
        "siren": 155854012,
        "results": [
            1151,
            1152
        ]
    },
    {
        "id": 577,
        "name": "O'Reilly-Nienow",
        "sector": "Retail",
        "siren": 112351723,
        "results": [
            1153,
            1154
        ]
    },
    {
        "id": 578,
        "name": "Harber-Kshlerin",
        "sector": "Luxury",
        "siren": 180653331,
        "results": [
            1155,
            1156
        ]
    },
    {
        "id": 579,
        "name": "Dicki-MacGyver",
        "sector": "Electronic",
        "siren": 138541953,
        "results": [
            1157,
            1158
        ]
    },
    {
        "id": 580,
        "name": "Walker, Bashirian and Erdman",
        "sector": "Electronic",
        "siren": 154147387,
        "results": [
            1159,
            1160
        ]
    },
    {
        "id": 581,
        "name": "Nienow, Armstrong and Klein",
        "sector": "Services",
        "siren": 126399885,
        "results": [
            1161,
            1162
        ]
    },
    {
        "id": 582,
        "name": "Mills, Morissette and Hand",
        "sector": "Energy",
        "siren": 103861247,
        "results": [
            1163,
            1164
        ]
    },
    {
        "id": 583,
        "name": "Reinger Inc",
        "sector": "Services",
        "siren": 135694027,
        "results": [
            1165,
            1166
        ]
    },
    {
        "id": 584,
        "name": "Torphy, Rosenbaum and Rempel",
        "sector": "Electronic",
        "siren": 107855014,
        "results": [
            1167,
            1168
        ]
    },
    {
        "id": 585,
        "name": "Towne-Dach",
        "sector": "Energy",
        "siren": 115104805,
        "results": [
            1169,
            1170
        ]
    },
    {
        "id": 586,
        "name": "Hane-Stanton",
        "sector": "Luxury",
        "siren": 151419067,
        "results": [
            1171,
            1172
        ]
    },
    {
        "id": 587,
        "name": "Gaylord and Sons",
        "sector": "Retail",
        "siren": 147007807,
        "results": [
            1173,
            1174
        ]
    },
    {
        "id": 588,
        "name": "Wiegand-Hoeger",
        "sector": "Energy",
        "siren": 143629487,
        "results": [
            1175,
            1176
        ]
    },
    {
        "id": 589,
        "name": "Rogahn and Sons",
        "sector": "Services",
        "siren": 194214776,
        "results": [
            1177,
            1178
        ]
    },
    {
        "id": 590,
        "name": "Pagac, Bednar and Von",
        "sector": "Retail",
        "siren": 176873074,
        "results": [
            1179,
            1180
        ]
    },
    {
        "id": 591,
        "name": "Wilderman-Fay",
        "sector": "Services",
        "siren": 130425768,
        "results": [
            1181,
            1182
        ]
    },
    {
        "id": 592,
        "name": "Muller Group",
        "sector": "Luxury",
        "siren": 175112687,
        "results": [
            1183,
            1184
        ]
    },
    {
        "id": 593,
        "name": "Cronin, Kessler and Corwin",
        "sector": "Energy",
        "siren": 119802584,
        "results": [
            1185,
            1186
        ]
    },
    {
        "id": 594,
        "name": "Sporer-Romaguera",
        "sector": "Electronic",
        "siren": 100614525,
        "results": [
            1187,
            1188
        ]
    },
    {
        "id": 595,
        "name": "Borer and Sons",
        "sector": "Retail",
        "siren": 162375181,
        "results": [
            1189,
            1190
        ]
    },
    {
        "id": 596,
        "name": "Berge, Blanda and Gutmann",
        "sector": "Electronic",
        "siren": 128182766,
        "results": [
            1191,
            1192
        ]
    },
    {
        "id": 597,
        "name": "Sawayn-Hermiston",
        "sector": "Luxury",
        "siren": 189859166,
        "results": [
            1193,
            1194
        ]
    },
    {
        "id": 598,
        "name": "Halvorson Group",
        "sector": "Luxury",
        "siren": 199790774,
        "results": [
            1195,
            1196
        ]
    },
    {
        "id": 599,
        "name": "Donnelly-Mraz",
        "sector": "Services",
        "siren": 179611598,
        "results": [
            1197,
            1198
        ]
    },
    {
        "id": 600,
        "name": "Legros, Bradtke and O'Keefe",
        "sector": "Retail",
        "siren": 114151737,
        "results": [
            1199,
            1200
        ]
    },
    {
        "id": 601,
        "name": "Fay and Sons",
        "sector": "Luxury",
        "siren": 100933072,
        "results": [
            1201,
            1202
        ]
    },
    {
        "id": 602,
        "name": "Cassin LLC",
        "sector": "Electronic",
        "siren": 159459542,
        "results": [
            1203,
            1204
        ]
    },
    {
        "id": 603,
        "name": "Robel Inc",
        "sector": "Luxury",
        "siren": 138199832,
        "results": [
            1205,
            1206
        ]
    },
    {
        "id": 604,
        "name": "Oberbrunner-Gutmann",
        "sector": "Energy",
        "siren": 131043727,
        "results": [
            1207,
            1208
        ]
    },
    {
        "id": 605,
        "name": "Stracke Group",
        "sector": "Electronic",
        "siren": 190537129,
        "results": [
            1209,
            1210
        ]
    },
    {
        "id": 606,
        "name": "Collins Group",
        "sector": "Retail",
        "siren": 148151467,
        "results": [
            1211,
            1212
        ]
    },
    {
        "id": 607,
        "name": "Hoeger, Schoen and Dibbert",
        "sector": "Luxury",
        "siren": 175662557,
        "results": [
            1213,
            1214
        ]
    },
    {
        "id": 608,
        "name": "Pacocha-Schmitt",
        "sector": "Energy",
        "siren": 132741221,
        "results": [
            1215,
            1216
        ]
    },
    {
        "id": 609,
        "name": "Collier-Goldner",
        "sector": "Electronic",
        "siren": 190574530,
        "results": [
            1217,
            1218
        ]
    },
    {
        "id": 610,
        "name": "Kiehn, Stoltenberg and Friesen",
        "sector": "Electronic",
        "siren": 151306292,
        "results": [
            1219,
            1220
        ]
    },
    {
        "id": 611,
        "name": "Johnston, Mante and Purdy",
        "sector": "Services",
        "siren": 132122930,
        "results": [
            1221,
            1222
        ]
    },
    {
        "id": 612,
        "name": "Lowe-Legros",
        "sector": "Electronic",
        "siren": 103764020,
        "results": [
            1223,
            1224
        ]
    },
    {
        "id": 613,
        "name": "Schulist LLC",
        "sector": "Services",
        "siren": 130132106,
        "results": [
            1225,
            1226
        ]
    },
    {
        "id": 614,
        "name": "Ankunding-Lindgren",
        "sector": "Energy",
        "siren": 190875445,
        "results": [
            1227,
            1228
        ]
    },
    {
        "id": 615,
        "name": "Hudson, Cole and Torp",
        "sector": "Electronic",
        "siren": 149620575,
        "results": [
            1229,
            1230
        ]
    },
    {
        "id": 616,
        "name": "Fisher Inc",
        "sector": "Energy",
        "siren": 195699182,
        "results": [
            1231,
            1232
        ]
    },
    {
        "id": 617,
        "name": "Turner Inc",
        "sector": "Energy",
        "siren": 181691080,
        "results": [
            1233,
            1234
        ]
    },
    {
        "id": 618,
        "name": "Welch, Rohan and Ortiz",
        "sector": "Electronic",
        "siren": 148674050,
        "results": [
            1235,
            1236
        ]
    },
    {
        "id": 619,
        "name": "Senger Group",
        "sector": "Retail",
        "siren": 196126254,
        "results": [
            1237,
            1238
        ]
    },
    {
        "id": 620,
        "name": "Kertzmann Group",
        "sector": "Retail",
        "siren": 187537793,
        "results": [
            1239,
            1240
        ]
    },
    {
        "id": 621,
        "name": "Trantow, Bauch and Brown",
        "sector": "Electronic",
        "siren": 194314995,
        "results": [
            1241,
            1242
        ]
    },
    {
        "id": 622,
        "name": "Kertzmann-Cremin",
        "sector": "Luxury",
        "siren": 110861915,
        "results": [
            1243,
            1244
        ]
    },
    {
        "id": 623,
        "name": "Jaskolski and Sons",
        "sector": "Services",
        "siren": 163203664,
        "results": [
            1245,
            1246
        ]
    },
    {
        "id": 624,
        "name": "Gottlieb Inc",
        "sector": "Services",
        "siren": 173594891,
        "results": [
            1247,
            1248
        ]
    },
    {
        "id": 625,
        "name": "Bins Inc",
        "sector": "Retail",
        "siren": 156610978,
        "results": [
            1249,
            1250
        ]
    },
    {
        "id": 626,
        "name": "Purdy, Barrows and Mills",
        "sector": "Electronic",
        "siren": 125001735,
        "results": [
            1251,
            1252
        ]
    },
    {
        "id": 627,
        "name": "Becker and Sons",
        "sector": "Retail",
        "siren": 108220327,
        "results": [
            1253,
            1254
        ]
    },
    {
        "id": 628,
        "name": "Kozey, Haag and Kuvalis",
        "sector": "Services",
        "siren": 197683277,
        "results": [
            1255,
            1256
        ]
    },
    {
        "id": 629,
        "name": "Wilkinson, Nienow and Schmeler",
        "sector": "Retail",
        "siren": 195451954,
        "results": [
            1257,
            1258
        ]
    },
    {
        "id": 630,
        "name": "Cummings, Towne and Stanton",
        "sector": "Services",
        "siren": 175032418,
        "results": [
            1259,
            1260
        ]
    },
    {
        "id": 631,
        "name": "Kreiger, Mosciski and Kiehn",
        "sector": "Energy",
        "siren": 164388517,
        "results": [
            1261,
            1262
        ]
    },
    {
        "id": 632,
        "name": "Bode, Hudson and Kulas",
        "sector": "Electronic",
        "siren": 177384240,
        "results": [
            1263,
            1264
        ]
    },
    {
        "id": 633,
        "name": "Walker, Abbott and Brekke",
        "sector": "Retail",
        "siren": 108949277,
        "results": [
            1265,
            1266
        ]
    },
    {
        "id": 634,
        "name": "Rath, Legros and Feil",
        "sector": "Electronic",
        "siren": 105376773,
        "results": [
            1267,
            1268
        ]
    },
    {
        "id": 635,
        "name": "Wunsch, Nienow and Russel",
        "sector": "Retail",
        "siren": 170490793,
        "results": [
            1269,
            1270
        ]
    },
    {
        "id": 636,
        "name": "Baumbach-Howe",
        "sector": "Luxury",
        "siren": 197432382,
        "results": [
            1271,
            1272
        ]
    },
    {
        "id": 637,
        "name": "Hartmann, Bruen and McDermott",
        "sector": "Services",
        "siren": 183064272,
        "results": [
            1273,
            1274
        ]
    },
    {
        "id": 638,
        "name": "Rippin-Klocko",
        "sector": "Luxury",
        "siren": 109837685,
        "results": [
            1275,
            1276
        ]
    },
    {
        "id": 639,
        "name": "Beer, Simonis and Runolfsdottir",
        "sector": "Energy",
        "siren": 188135119,
        "results": [
            1277,
            1278
        ]
    },
    {
        "id": 640,
        "name": "Schamberger, Yundt and Zemlak",
        "sector": "Energy",
        "siren": 133026662,
        "results": [
            1279,
            1280
        ]
    },
    {
        "id": 641,
        "name": "Feeney and Sons",
        "sector": "Services",
        "siren": 132298627,
        "results": [
            1281,
            1282
        ]
    },
    {
        "id": 642,
        "name": "Kerluke, Durgan and Bernhard",
        "sector": "Retail",
        "siren": 168792627,
        "results": [
            1283,
            1284
        ]
    },
    {
        "id": 643,
        "name": "Dicki, Moen and Robel",
        "sector": "Retail",
        "siren": 135883737,
        "results": [
            1285,
            1286
        ]
    },
    {
        "id": 644,
        "name": "Sporer and Sons",
        "sector": "Luxury",
        "siren": 160840028,
        "results": [
            1287,
            1288
        ]
    },
    {
        "id": 645,
        "name": "Skiles-Gusikowski",
        "sector": "Luxury",
        "siren": 121692227,
        "results": [
            1289,
            1290
        ]
    },
    {
        "id": 646,
        "name": "Swaniawski Group",
        "sector": "Retail",
        "siren": 173672744,
        "results": [
            1291,
            1292
        ]
    },
    {
        "id": 647,
        "name": "Satterfield, Brekke and Stanton",
        "sector": "Services",
        "siren": 195857228,
        "results": [
            1293,
            1294
        ]
    },
    {
        "id": 648,
        "name": "Ortiz-Connelly",
        "sector": "Services",
        "siren": 182726877,
        "results": [
            1295,
            1296
        ]
    },
    {
        "id": 649,
        "name": "Donnelly, Abernathy and Pacocha",
        "sector": "Retail",
        "siren": 156951403,
        "results": [
            1297,
            1298
        ]
    },
    {
        "id": 650,
        "name": "Hudson, Reynolds and Jacobson",
        "sector": "Services",
        "siren": 132253095,
        "results": [
            1299,
            1300
        ]
    },
    {
        "id": 651,
        "name": "Wuckert Group",
        "sector": "Electronic",
        "siren": 165950424,
        "results": [
            1301,
            1302
        ]
    },
    {
        "id": 652,
        "name": "Larson, Gleason and Murphy",
        "sector": "Retail",
        "siren": 117623669,
        "results": [
            1303,
            1304
        ]
    },
    {
        "id": 653,
        "name": "Dickinson-Strosin",
        "sector": "Energy",
        "siren": 175066823,
        "results": [
            1305,
            1306
        ]
    },
    {
        "id": 654,
        "name": "Franecki-Cassin",
        "sector": "Retail",
        "siren": 158424603,
        "results": [
            1307,
            1308
        ]
    },
    {
        "id": 655,
        "name": "Nikolaus-Flatley",
        "sector": "Electronic",
        "siren": 133495059,
        "results": [
            1309,
            1310
        ]
    },
    {
        "id": 656,
        "name": "Hickle, Stamm and Fahey",
        "sector": "Services",
        "siren": 101590590,
        "results": [
            1311,
            1312
        ]
    },
    {
        "id": 657,
        "name": "Bahringer, Blanda and Schmitt",
        "sector": "Luxury",
        "siren": 137219707,
        "results": [
            1313,
            1314
        ]
    },
    {
        "id": 658,
        "name": "Herman-Abbott",
        "sector": "Retail",
        "siren": 174831134,
        "results": [
            1315,
            1316
        ]
    },
    {
        "id": 659,
        "name": "Stokes-Hegmann",
        "sector": "Energy",
        "siren": 152222171,
        "results": [
            1317,
            1318
        ]
    },
    {
        "id": 660,
        "name": "Moen, Krajcik and O'Keefe",
        "sector": "Retail",
        "siren": 179058220,
        "results": [
            1319,
            1320
        ]
    },
    {
        "id": 661,
        "name": "Huels-Koepp",
        "sector": "Services",
        "siren": 103436807,
        "results": [
            1321,
            1322
        ]
    },
    {
        "id": 662,
        "name": "Turcotte LLC",
        "sector": "Services",
        "siren": 115411209,
        "results": [
            1323,
            1324
        ]
    },
    {
        "id": 663,
        "name": "Glover, Kirlin and McGlynn",
        "sector": "Energy",
        "siren": 184190735,
        "results": [
            1325,
            1326
        ]
    },
    {
        "id": 664,
        "name": "Nader-Bergnaum",
        "sector": "Electronic",
        "siren": 142087889,
        "results": [
            1327,
            1328
        ]
    },
    {
        "id": 665,
        "name": "McDermott-Rolfson",
        "sector": "Energy",
        "siren": 117468732,
        "results": [
            1329,
            1330
        ]
    },
    {
        "id": 666,
        "name": "Treutel Group",
        "sector": "Retail",
        "siren": 138837726,
        "results": [
            1331,
            1332
        ]
    },
    {
        "id": 667,
        "name": "Lynch, Wunsch and Kris",
        "sector": "Services",
        "siren": 152402150,
        "results": [
            1333,
            1334
        ]
    },
    {
        "id": 668,
        "name": "Tremblay, Keeling and Breitenberg",
        "sector": "Services",
        "siren": 125362017,
        "results": [
            1335,
            1336
        ]
    },
    {
        "id": 669,
        "name": "Leffler LLC",
        "sector": "Retail",
        "siren": 150610837,
        "results": [
            1337,
            1338
        ]
    },
    {
        "id": 670,
        "name": "Hintz Inc",
        "sector": "Electronic",
        "siren": 170053342,
        "results": [
            1339,
            1340
        ]
    },
    {
        "id": 671,
        "name": "Howell Inc",
        "sector": "Energy",
        "siren": 115871891,
        "results": [
            1341,
            1342
        ]
    },
    {
        "id": 672,
        "name": "Windler-Pfeffer",
        "sector": "Electronic",
        "siren": 186052047,
        "results": [
            1343,
            1344
        ]
    },
    {
        "id": 673,
        "name": "Greenfelder Group",
        "sector": "Services",
        "siren": 123389196,
        "results": [
            1345,
            1346
        ]
    },
    {
        "id": 674,
        "name": "Hessel Group",
        "sector": "Electronic",
        "siren": 130378540,
        "results": [
            1347,
            1348
        ]
    },
    {
        "id": 675,
        "name": "Goyette, Cummerata and Windler",
        "sector": "Luxury",
        "siren": 173090205,
        "results": [
            1349,
            1350
        ]
    },
    {
        "id": 676,
        "name": "Green LLC",
        "sector": "Energy",
        "siren": 142811173,
        "results": [
            1351,
            1352
        ]
    },
    {
        "id": 677,
        "name": "MacGyver LLC",
        "sector": "Energy",
        "siren": 180573399,
        "results": [
            1353,
            1354
        ]
    },
    {
        "id": 678,
        "name": "Cassin-Weissnat",
        "sector": "Electronic",
        "siren": 174008422,
        "results": [
            1355,
            1356
        ]
    },
    {
        "id": 679,
        "name": "Koelpin-Herman",
        "sector": "Services",
        "siren": 123713934,
        "results": [
            1357,
            1358
        ]
    },
    {
        "id": 680,
        "name": "Murray, Keeling and Pfeffer",
        "sector": "Services",
        "siren": 153108580,
        "results": [
            1359,
            1360
        ]
    },
    {
        "id": 681,
        "name": "Metz and Sons",
        "sector": "Electronic",
        "siren": 132514765,
        "results": [
            1361,
            1362
        ]
    },
    {
        "id": 682,
        "name": "Trantow, Stoltenberg and Rau",
        "sector": "Luxury",
        "siren": 142196394,
        "results": [
            1363,
            1364
        ]
    },
    {
        "id": 683,
        "name": "Hermann and Sons",
        "sector": "Electronic",
        "siren": 199577547,
        "results": [
            1365,
            1366
        ]
    },
    {
        "id": 684,
        "name": "Hickle-Cartwright",
        "sector": "Luxury",
        "siren": 145170204,
        "results": [
            1367,
            1368
        ]
    },
    {
        "id": 685,
        "name": "Balistreri and Sons",
        "sector": "Retail",
        "siren": 122783975,
        "results": [
            1369,
            1370
        ]
    },
    {
        "id": 686,
        "name": "Welch-Wisoky",
        "sector": "Electronic",
        "siren": 180856598,
        "results": [
            1371,
            1372
        ]
    },
    {
        "id": 687,
        "name": "Schamberger-Leuschke",
        "sector": "Retail",
        "siren": 101786222,
        "results": [
            1373,
            1374
        ]
    },
    {
        "id": 688,
        "name": "Hudson and Sons",
        "sector": "Retail",
        "siren": 159421714,
        "results": [
            1375,
            1376
        ]
    },
    {
        "id": 689,
        "name": "Stehr-Larson",
        "sector": "Electronic",
        "siren": 110442504,
        "results": [
            1377,
            1378
        ]
    },
    {
        "id": 690,
        "name": "Deckow-Rowe",
        "sector": "Electronic",
        "siren": 140318401,
        "results": [
            1379,
            1380
        ]
    },
    {
        "id": 691,
        "name": "Mann-Wisoky",
        "sector": "Luxury",
        "siren": 154437824,
        "results": [
            1381,
            1382
        ]
    },
    {
        "id": 692,
        "name": "Bradtke, Bauch and Hermann",
        "sector": "Electronic",
        "siren": 119255732,
        "results": [
            1383,
            1384
        ]
    },
    {
        "id": 693,
        "name": "Jaskolski Group",
        "sector": "Electronic",
        "siren": 188974299,
        "results": [
            1385,
            1386
        ]
    },
    {
        "id": 694,
        "name": "Glover, Lubowitz and Labadie",
        "sector": "Energy",
        "siren": 111353919,
        "results": [
            1387,
            1388
        ]
    },
    {
        "id": 695,
        "name": "Mraz, Little and Fritsch",
        "sector": "Luxury",
        "siren": 162877974,
        "results": [
            1389,
            1390
        ]
    },
    {
        "id": 696,
        "name": "Medhurst and Sons",
        "sector": "Services",
        "siren": 125625509,
        "results": [
            1391,
            1392
        ]
    },
    {
        "id": 697,
        "name": "Schultz Inc",
        "sector": "Retail",
        "siren": 163815675,
        "results": [
            1393,
            1394
        ]
    },
    {
        "id": 698,
        "name": "Brown Inc",
        "sector": "Retail",
        "siren": 169391204,
        "results": [
            1395,
            1396
        ]
    },
    {
        "id": 699,
        "name": "Huels Inc",
        "sector": "Luxury",
        "siren": 135296056,
        "results": [
            1397,
            1398
        ]
    },
    {
        "id": 700,
        "name": "Cassin-Collins",
        "sector": "Energy",
        "siren": 136888845,
        "results": [
            1399,
            1400
        ]
    },
    {
        "id": 701,
        "name": "Murphy, Reichert and Walsh",
        "sector": "Electronic",
        "siren": 168943428,
        "results": [
            1401,
            1402
        ]
    },
    {
        "id": 702,
        "name": "Dooley-Flatley",
        "sector": "Retail",
        "siren": 121546181,
        "results": [
            1403,
            1404
        ]
    },
    {
        "id": 703,
        "name": "Wisozk-Langosh",
        "sector": "Services",
        "siren": 104018793,
        "results": [
            1405,
            1406
        ]
    },
    {
        "id": 704,
        "name": "Dickinson, Thiel and Wisoky",
        "sector": "Retail",
        "siren": 173786909,
        "results": [
            1407,
            1408
        ]
    },
    {
        "id": 705,
        "name": "Williamson and Sons",
        "sector": "Luxury",
        "siren": 155097096,
        "results": [
            1409,
            1410
        ]
    },
    {
        "id": 706,
        "name": "Ferry Group",
        "sector": "Energy",
        "siren": 176633557,
        "results": [
            1411,
            1412
        ]
    },
    {
        "id": 707,
        "name": "Schiller-Schmidt",
        "sector": "Services",
        "siren": 195591022,
        "results": [
            1413,
            1414
        ]
    },
    {
        "id": 708,
        "name": "Abshire, Wilderman and Mitchell",
        "sector": "Retail",
        "siren": 141993614,
        "results": [
            1415,
            1416
        ]
    },
    {
        "id": 709,
        "name": "Hayes LLC",
        "sector": "Services",
        "siren": 143826718,
        "results": [
            1417,
            1418
        ]
    },
    {
        "id": 710,
        "name": "Tremblay and Sons",
        "sector": "Services",
        "siren": 133962923,
        "results": [
            1419,
            1420
        ]
    },
    {
        "id": 711,
        "name": "Wisozk Inc",
        "sector": "Luxury",
        "siren": 107568203,
        "results": [
            1421,
            1422
        ]
    },
    {
        "id": 712,
        "name": "Marvin-Stiedemann",
        "sector": "Electronic",
        "siren": 108626405,
        "results": [
            1423,
            1424
        ]
    },
    {
        "id": 713,
        "name": "Borer-Cassin",
        "sector": "Luxury",
        "siren": 104300586,
        "results": [
            1425,
            1426
        ]
    },
    {
        "id": 714,
        "name": "Tromp, Heidenreich and Ziemann",
        "sector": "Retail",
        "siren": 148080477,
        "results": [
            1427,
            1428
        ]
    },
    {
        "id": 715,
        "name": "Funk Inc",
        "sector": "Electronic",
        "siren": 157012674,
        "results": [
            1429,
            1430
        ]
    },
    {
        "id": 716,
        "name": "Hayes-Ernser",
        "sector": "Energy",
        "siren": 175994582,
        "results": [
            1431,
            1432
        ]
    },
    {
        "id": 717,
        "name": "DuBuque, Sawayn and Schaefer",
        "sector": "Electronic",
        "siren": 173913299,
        "results": [
            1433,
            1434
        ]
    },
    {
        "id": 718,
        "name": "Hyatt-Fahey",
        "sector": "Luxury",
        "siren": 172493289,
        "results": [
            1435,
            1436
        ]
    },
    {
        "id": 719,
        "name": "Witting-Durgan",
        "sector": "Retail",
        "siren": 193631684,
        "results": [
            1437,
            1438
        ]
    },
    {
        "id": 720,
        "name": "Wuckert-Gottlieb",
        "sector": "Luxury",
        "siren": 163261401,
        "results": [
            1439,
            1440
        ]
    },
    {
        "id": 721,
        "name": "Ritchie, Haag and Kuhn",
        "sector": "Energy",
        "siren": 105467035,
        "results": [
            1441,
            1442
        ]
    },
    {
        "id": 722,
        "name": "Cummerata-Prosacco",
        "sector": "Retail",
        "siren": 116769708,
        "results": [
            1443,
            1444
        ]
    },
    {
        "id": 723,
        "name": "Schmitt and Sons",
        "sector": "Energy",
        "siren": 146939069,
        "results": [
            1445,
            1446
        ]
    },
    {
        "id": 724,
        "name": "Bogisich Group",
        "sector": "Retail",
        "siren": 198492376,
        "results": [
            1447,
            1448
        ]
    },
    {
        "id": 725,
        "name": "Kessler Group",
        "sector": "Electronic",
        "siren": 195285188,
        "results": [
            1449,
            1450
        ]
    },
    {
        "id": 726,
        "name": "Reilly, Turner and Kilback",
        "sector": "Energy",
        "siren": 170348871,
        "results": [
            1451,
            1452
        ]
    },
    {
        "id": 727,
        "name": "Stamm-McLaughlin",
        "sector": "Services",
        "siren": 152902170,
        "results": [
            1453,
            1454
        ]
    },
    {
        "id": 728,
        "name": "Adams, Kassulke and Walter",
        "sector": "Services",
        "siren": 165989484,
        "results": [
            1455,
            1456
        ]
    },
    {
        "id": 729,
        "name": "Okuneva Inc",
        "sector": "Retail",
        "siren": 113287300,
        "results": [
            1457,
            1458
        ]
    },
    {
        "id": 730,
        "name": "Kiehn-Greenholt",
        "sector": "Retail",
        "siren": 135593651,
        "results": [
            1459,
            1460
        ]
    },
    {
        "id": 731,
        "name": "Stanton, Stehr and Considine",
        "sector": "Services",
        "siren": 111297821,
        "results": [
            1461,
            1462
        ]
    },
    {
        "id": 732,
        "name": "Pagac and Sons",
        "sector": "Energy",
        "siren": 141417076,
        "results": [
            1463,
            1464
        ]
    },
    {
        "id": 733,
        "name": "Ullrich, Gaylord and Gleason",
        "sector": "Retail",
        "siren": 106730899,
        "results": [
            1465,
            1466
        ]
    },
    {
        "id": 734,
        "name": "Lemke-Leannon",
        "sector": "Retail",
        "siren": 181852901,
        "results": [
            1467,
            1468
        ]
    },
    {
        "id": 735,
        "name": "Medhurst Group",
        "sector": "Services",
        "siren": 172472287,
        "results": [
            1469,
            1470
        ]
    },
    {
        "id": 736,
        "name": "Stoltenberg LLC",
        "sector": "Services",
        "siren": 169273144,
        "results": [
            1471,
            1472
        ]
    },
    {
        "id": 737,
        "name": "Kerluke LLC",
        "sector": "Energy",
        "siren": 153691905,
        "results": [
            1473,
            1474
        ]
    },
    {
        "id": 738,
        "name": "Murphy-Lesch",
        "sector": "Electronic",
        "siren": 160775851,
        "results": [
            1475,
            1476
        ]
    },
    {
        "id": 739,
        "name": "Kilback-Hudson",
        "sector": "Electronic",
        "siren": 198340969,
        "results": [
            1477,
            1478
        ]
    },
    {
        "id": 740,
        "name": "Rowe, Adams and Pacocha",
        "sector": "Luxury",
        "siren": 152968462,
        "results": [
            1479,
            1480
        ]
    },
    {
        "id": 741,
        "name": "Schroeder-Toy",
        "sector": "Services",
        "siren": 106049474,
        "results": [
            1481,
            1482
        ]
    },
    {
        "id": 742,
        "name": "Reilly-Bartoletti",
        "sector": "Luxury",
        "siren": 185568403,
        "results": [
            1483,
            1484
        ]
    },
    {
        "id": 743,
        "name": "Runte, Trantow and Eichmann",
        "sector": "Services",
        "siren": 163211374,
        "results": [
            1485,
            1486
        ]
    },
    {
        "id": 744,
        "name": "McGlynn Inc",
        "sector": "Services",
        "siren": 177088555,
        "results": [
            1487,
            1488
        ]
    },
    {
        "id": 745,
        "name": "Berge Group",
        "sector": "Services",
        "siren": 191593539,
        "results": [
            1489,
            1490
        ]
    },
    {
        "id": 746,
        "name": "Hansen, Gerhold and Zemlak",
        "sector": "Retail",
        "siren": 196059202,
        "results": [
            1491,
            1492
        ]
    },
    {
        "id": 747,
        "name": "Leuschke and Sons",
        "sector": "Luxury",
        "siren": 185546426,
        "results": [
            1493,
            1494
        ]
    },
    {
        "id": 748,
        "name": "Kemmer-Lynch",
        "sector": "Electronic",
        "siren": 130518404,
        "results": [
            1495,
            1496
        ]
    },
    {
        "id": 749,
        "name": "Tillman, Ruecker and D'Amore",
        "sector": "Retail",
        "siren": 185836676,
        "results": [
            1497,
            1498
        ]
    },
    {
        "id": 750,
        "name": "Hagenes-Nicolas",
        "sector": "Luxury",
        "siren": 181839234,
        "results": [
            1499,
            1500
        ]
    },
    {
        "id": 751,
        "name": "Adams LLC",
        "sector": "Energy",
        "siren": 162705282,
        "results": [
            1501,
            1502
        ]
    },
    {
        "id": 752,
        "name": "Kling, Frami and Thiel",
        "sector": "Electronic",
        "siren": 153775737,
        "results": [
            1503,
            1504
        ]
    },
    {
        "id": 753,
        "name": "Hirthe Group",
        "sector": "Electronic",
        "siren": 109390434,
        "results": [
            1505,
            1506
        ]
    },
    {
        "id": 754,
        "name": "Grant-Hills",
        "sector": "Services",
        "siren": 152889154,
        "results": [
            1507,
            1508
        ]
    },
    {
        "id": 755,
        "name": "Koch, Cassin and Murphy",
        "sector": "Electronic",
        "siren": 175818545,
        "results": [
            1509,
            1510
        ]
    },
    {
        "id": 756,
        "name": "Koss, Leffler and Fay",
        "sector": "Energy",
        "siren": 119128103,
        "results": [
            1511,
            1512
        ]
    },
    {
        "id": 757,
        "name": "Corwin-Vandervort",
        "sector": "Energy",
        "siren": 179335809,
        "results": [
            1513,
            1514
        ]
    },
    {
        "id": 758,
        "name": "Bartoletti-Effertz",
        "sector": "Luxury",
        "siren": 158737316,
        "results": [
            1515,
            1516
        ]
    },
    {
        "id": 759,
        "name": "O'Reilly, Langosh and Raynor",
        "sector": "Electronic",
        "siren": 138908158,
        "results": [
            1517,
            1518
        ]
    },
    {
        "id": 760,
        "name": "Upton, Cormier and Morissette",
        "sector": "Luxury",
        "siren": 148123081,
        "results": [
            1519,
            1520
        ]
    },
    {
        "id": 761,
        "name": "Grady Inc",
        "sector": "Services",
        "siren": 124921215,
        "results": [
            1521,
            1522
        ]
    },
    {
        "id": 762,
        "name": "Schimmel Group",
        "sector": "Luxury",
        "siren": 182073248,
        "results": [
            1523,
            1524
        ]
    },
    {
        "id": 763,
        "name": "Schiller Inc",
        "sector": "Retail",
        "siren": 152363753,
        "results": [
            1525,
            1526
        ]
    },
    {
        "id": 764,
        "name": "Heathcote-Pagac",
        "sector": "Electronic",
        "siren": 142665129,
        "results": [
            1527,
            1528
        ]
    },
    {
        "id": 765,
        "name": "Dietrich-Kassulke",
        "sector": "Electronic",
        "siren": 153434268,
        "results": [
            1529,
            1530
        ]
    },
    {
        "id": 766,
        "name": "Carter LLC",
        "sector": "Energy",
        "siren": 137164647,
        "results": [
            1531,
            1532
        ]
    },
    {
        "id": 767,
        "name": "Stokes-Beahan",
        "sector": "Services",
        "siren": 173257908,
        "results": [
            1533,
            1534
        ]
    },
    {
        "id": 768,
        "name": "Ward-Leffler",
        "sector": "Electronic",
        "siren": 129146450,
        "results": [
            1535,
            1536
        ]
    },
    {
        "id": 769,
        "name": "Bogisich Group",
        "sector": "Retail",
        "siren": 155864068,
        "results": [
            1537,
            1538
        ]
    },
    {
        "id": 770,
        "name": "Wiza, Abshire and Yundt",
        "sector": "Electronic",
        "siren": 167802466,
        "results": [
            1539,
            1540
        ]
    },
    {
        "id": 771,
        "name": "Hodkiewicz Inc",
        "sector": "Energy",
        "siren": 109632592,
        "results": [
            1541,
            1542
        ]
    },
    {
        "id": 772,
        "name": "Walker-Legros",
        "sector": "Retail",
        "siren": 139341533,
        "results": [
            1543,
            1544
        ]
    },
    {
        "id": 773,
        "name": "Willms, Nicolas and Torphy",
        "sector": "Retail",
        "siren": 183352652,
        "results": [
            1545,
            1546
        ]
    },
    {
        "id": 774,
        "name": "Marks and Sons",
        "sector": "Electronic",
        "siren": 129610484,
        "results": [
            1547,
            1548
        ]
    },
    {
        "id": 775,
        "name": "Ziemann-Hintz",
        "sector": "Energy",
        "siren": 149431058,
        "results": [
            1549,
            1550
        ]
    },
    {
        "id": 776,
        "name": "Walter-Bartell",
        "sector": "Energy",
        "siren": 159270097,
        "results": [
            1551,
            1552
        ]
    },
    {
        "id": 777,
        "name": "Harber and Sons",
        "sector": "Luxury",
        "siren": 105385372,
        "results": [
            1553,
            1554
        ]
    },
    {
        "id": 778,
        "name": "Pfeffer, Volkman and Jacobs",
        "sector": "Services",
        "siren": 155828039,
        "results": [
            1555,
            1556
        ]
    },
    {
        "id": 779,
        "name": "Heathcote, Block and Rempel",
        "sector": "Retail",
        "siren": 148575346,
        "results": [
            1557,
            1558
        ]
    },
    {
        "id": 780,
        "name": "Schuster, Hintz and Luettgen",
        "sector": "Retail",
        "siren": 139843626,
        "results": [
            1559,
            1560
        ]
    },
    {
        "id": 781,
        "name": "Moore-Funk",
        "sector": "Retail",
        "siren": 138402141,
        "results": [
            1561,
            1562
        ]
    },
    {
        "id": 782,
        "name": "Gutkowski, Farrell and Altenwerth",
        "sector": "Luxury",
        "siren": 162175274,
        "results": [
            1563,
            1564
        ]
    },
    {
        "id": 783,
        "name": "Turcotte, Pagac and Welch",
        "sector": "Services",
        "siren": 176753871,
        "results": [
            1565,
            1566
        ]
    },
    {
        "id": 784,
        "name": "Kovacek-Larkin",
        "sector": "Services",
        "siren": 113674387,
        "results": [
            1567,
            1568
        ]
    },
    {
        "id": 785,
        "name": "Fay and Sons",
        "sector": "Services",
        "siren": 144972814,
        "results": [
            1569,
            1570
        ]
    },
    {
        "id": 786,
        "name": "Cummerata-Berge",
        "sector": "Electronic",
        "siren": 154318426,
        "results": [
            1571,
            1572
        ]
    },
    {
        "id": 787,
        "name": "Schultz, Sporer and Hoppe",
        "sector": "Retail",
        "siren": 174292657,
        "results": [
            1573,
            1574
        ]
    },
    {
        "id": 788,
        "name": "Cole-Langosh",
        "sector": "Retail",
        "siren": 149623513,
        "results": [
            1575,
            1576
        ]
    },
    {
        "id": 789,
        "name": "Jakubowski, Spinka and Bogisich",
        "sector": "Retail",
        "siren": 156086955,
        "results": [
            1577,
            1578
        ]
    },
    {
        "id": 790,
        "name": "Effertz-Batz",
        "sector": "Energy",
        "siren": 191578492,
        "results": [
            1579,
            1580
        ]
    },
    {
        "id": 791,
        "name": "Parisian Inc",
        "sector": "Electronic",
        "siren": 100544297,
        "results": [
            1581,
            1582
        ]
    },
    {
        "id": 792,
        "name": "Jacobson-Hammes",
        "sector": "Retail",
        "siren": 197942932,
        "results": [
            1583,
            1584
        ]
    },
    {
        "id": 793,
        "name": "Leuschke-Mante",
        "sector": "Electronic",
        "siren": 197657514,
        "results": [
            1585,
            1586
        ]
    },
    {
        "id": 794,
        "name": "Bernhard Inc",
        "sector": "Electronic",
        "siren": 102657824,
        "results": [
            1587,
            1588
        ]
    },
    {
        "id": 795,
        "name": "Bergstrom, O'Reilly and Bogan",
        "sector": "Electronic",
        "siren": 194602712,
        "results": [
            1589,
            1590
        ]
    },
    {
        "id": 796,
        "name": "Nitzsche, Stark and Mitchell",
        "sector": "Energy",
        "siren": 192119655,
        "results": [
            1591,
            1592
        ]
    },
    {
        "id": 797,
        "name": "Dare, Ryan and Hickle",
        "sector": "Services",
        "siren": 190429858,
        "results": [
            1593,
            1594
        ]
    },
    {
        "id": 798,
        "name": "Johns and Sons",
        "sector": "Electronic",
        "siren": 196788807,
        "results": [
            1595,
            1596
        ]
    },
    {
        "id": 799,
        "name": "Larkin-Jast",
        "sector": "Electronic",
        "siren": 119438694,
        "results": [
            1597,
            1598
        ]
    },
    {
        "id": 800,
        "name": "Schinner-Batz",
        "sector": "Luxury",
        "siren": 113489329,
        "results": [
            1599,
            1600
        ]
    },
    {
        "id": 801,
        "name": "Fay, Bosco and Williamson",
        "sector": "Energy",
        "siren": 117151370,
        "results": [
            1601,
            1602
        ]
    },
    {
        "id": 802,
        "name": "Wiza Group",
        "sector": "Energy",
        "siren": 119972532,
        "results": [
            1603,
            1604
        ]
    },
    {
        "id": 803,
        "name": "Koepp-Hilll",
        "sector": "Energy",
        "siren": 154362070,
        "results": [
            1605,
            1606
        ]
    },
    {
        "id": 804,
        "name": "O'Keefe-Brown",
        "sector": "Energy",
        "siren": 123618667,
        "results": [
            1607,
            1608
        ]
    },
    {
        "id": 805,
        "name": "Stehr-Sanford",
        "sector": "Electronic",
        "siren": 167001629,
        "results": [
            1609,
            1610
        ]
    },
    {
        "id": 806,
        "name": "Kunze-Towne",
        "sector": "Luxury",
        "siren": 194461061,
        "results": [
            1611,
            1612
        ]
    },
    {
        "id": 807,
        "name": "Donnelly and Sons",
        "sector": "Services",
        "siren": 145161488,
        "results": [
            1613,
            1614
        ]
    },
    {
        "id": 808,
        "name": "Schneider Inc",
        "sector": "Retail",
        "siren": 164176868,
        "results": [
            1615,
            1616
        ]
    },
    {
        "id": 809,
        "name": "Collins-Pfannerstill",
        "sector": "Retail",
        "siren": 179486766,
        "results": [
            1617,
            1618
        ]
    },
    {
        "id": 810,
        "name": "Huel-Bernhard",
        "sector": "Services",
        "siren": 131003782,
        "results": [
            1619,
            1620
        ]
    },
    {
        "id": 811,
        "name": "Yost-Ullrich",
        "sector": "Energy",
        "siren": 188847833,
        "results": [
            1621,
            1622
        ]
    },
    {
        "id": 812,
        "name": "McCullough, Spinka and Miller",
        "sector": "Energy",
        "siren": 199981161,
        "results": [
            1623,
            1624
        ]
    },
    {
        "id": 813,
        "name": "Hilpert, Veum and Donnelly",
        "sector": "Services",
        "siren": 160977920,
        "results": [
            1625,
            1626
        ]
    },
    {
        "id": 814,
        "name": "Kutch LLC",
        "sector": "Electronic",
        "siren": 110094965,
        "results": [
            1627,
            1628
        ]
    },
    {
        "id": 815,
        "name": "Muller-Volkman",
        "sector": "Energy",
        "siren": 144184638,
        "results": [
            1629,
            1630
        ]
    },
    {
        "id": 816,
        "name": "Sawayn and Sons",
        "sector": "Energy",
        "siren": 131330675,
        "results": [
            1631,
            1632
        ]
    },
    {
        "id": 817,
        "name": "Stehr-Hessel",
        "sector": "Retail",
        "siren": 191815148,
        "results": [
            1633,
            1634
        ]
    },
    {
        "id": 818,
        "name": "O'Kon-Hermiston",
        "sector": "Services",
        "siren": 150529572,
        "results": [
            1635,
            1636
        ]
    },
    {
        "id": 819,
        "name": "Stokes, Walter and Bode",
        "sector": "Electronic",
        "siren": 161617766,
        "results": [
            1637,
            1638
        ]
    },
    {
        "id": 820,
        "name": "MacGyver and Sons",
        "sector": "Electronic",
        "siren": 107852119,
        "results": [
            1639,
            1640
        ]
    },
    {
        "id": 821,
        "name": "Reichert LLC",
        "sector": "Energy",
        "siren": 111533385,
        "results": [
            1641,
            1642
        ]
    },
    {
        "id": 822,
        "name": "Ernser, Gleichner and Hane",
        "sector": "Services",
        "siren": 138679184,
        "results": [
            1643,
            1644
        ]
    },
    {
        "id": 823,
        "name": "Bauch, Stiedemann and Bogisich",
        "sector": "Electronic",
        "siren": 115223293,
        "results": [
            1645,
            1646
        ]
    },
    {
        "id": 824,
        "name": "Feest-Bogan",
        "sector": "Luxury",
        "siren": 159946640,
        "results": [
            1647,
            1648
        ]
    },
    {
        "id": 825,
        "name": "Bauch-Rice",
        "sector": "Services",
        "siren": 104113426,
        "results": [
            1649,
            1650
        ]
    },
    {
        "id": 826,
        "name": "Weissnat-Hermann",
        "sector": "Energy",
        "siren": 125243257,
        "results": [
            1651,
            1652
        ]
    },
    {
        "id": 827,
        "name": "Boyer LLC",
        "sector": "Retail",
        "siren": 142415138,
        "results": [
            1653,
            1654
        ]
    },
    {
        "id": 828,
        "name": "Schaden-Maggio",
        "sector": "Services",
        "siren": 148429613,
        "results": [
            1655,
            1656
        ]
    },
    {
        "id": 829,
        "name": "Conroy, Kiehn and Bahringer",
        "sector": "Energy",
        "siren": 111224568,
        "results": [
            1657,
            1658
        ]
    },
    {
        "id": 830,
        "name": "Dooley, Volkman and Thompson",
        "sector": "Services",
        "siren": 110179331,
        "results": [
            1659,
            1660
        ]
    },
    {
        "id": 831,
        "name": "Hammes-Boyer",
        "sector": "Retail",
        "siren": 147649127,
        "results": [
            1661,
            1662
        ]
    },
    {
        "id": 832,
        "name": "O'Reilly and Sons",
        "sector": "Retail",
        "siren": 196424074,
        "results": [
            1663,
            1664
        ]
    },
    {
        "id": 833,
        "name": "Kuhic, Hagenes and Stehr",
        "sector": "Retail",
        "siren": 109863760,
        "results": [
            1665,
            1666
        ]
    },
    {
        "id": 834,
        "name": "Braun-Hills",
        "sector": "Electronic",
        "siren": 178204654,
        "results": [
            1667,
            1668
        ]
    },
    {
        "id": 835,
        "name": "O'Connell-Botsford",
        "sector": "Electronic",
        "siren": 150471122,
        "results": [
            1669,
            1670
        ]
    },
    {
        "id": 836,
        "name": "Gusikowski Inc",
        "sector": "Services",
        "siren": 148012572,
        "results": [
            1671,
            1672
        ]
    },
    {
        "id": 837,
        "name": "Homenick-Schulist",
        "sector": "Energy",
        "siren": 199417647,
        "results": [
            1673,
            1674
        ]
    },
    {
        "id": 838,
        "name": "Mayert-Nader",
        "sector": "Electronic",
        "siren": 196578469,
        "results": [
            1675,
            1676
        ]
    },
    {
        "id": 839,
        "name": "Kessler and Sons",
        "sector": "Retail",
        "siren": 161771017,
        "results": [
            1677,
            1678
        ]
    },
    {
        "id": 840,
        "name": "Kohler Group",
        "sector": "Energy",
        "siren": 109223179,
        "results": [
            1679,
            1680
        ]
    },
    {
        "id": 841,
        "name": "Cartwright, Langosh and Ratke",
        "sector": "Electronic",
        "siren": 148131215,
        "results": [
            1681,
            1682
        ]
    },
    {
        "id": 842,
        "name": "Zieme-Littel",
        "sector": "Retail",
        "siren": 119585372,
        "results": [
            1683,
            1684
        ]
    },
    {
        "id": 843,
        "name": "Jacobs-Romaguera",
        "sector": "Electronic",
        "siren": 161977766,
        "results": [
            1685,
            1686
        ]
    },
    {
        "id": 844,
        "name": "Johnson, Ferry and Bailey",
        "sector": "Retail",
        "siren": 186288766,
        "results": [
            1687,
            1688
        ]
    },
    {
        "id": 845,
        "name": "Abbott, Jacobson and Kessler",
        "sector": "Energy",
        "siren": 190068556,
        "results": [
            1689,
            1690
        ]
    },
    {
        "id": 846,
        "name": "Fisher Group",
        "sector": "Services",
        "siren": 177894686,
        "results": [
            1691,
            1692
        ]
    },
    {
        "id": 847,
        "name": "Weimann-Wuckert",
        "sector": "Retail",
        "siren": 161472408,
        "results": [
            1693,
            1694
        ]
    },
    {
        "id": 848,
        "name": "West LLC",
        "sector": "Energy",
        "siren": 190837968,
        "results": [
            1695,
            1696
        ]
    },
    {
        "id": 849,
        "name": "Gottlieb-Ondricka",
        "sector": "Electronic",
        "siren": 190862988,
        "results": [
            1697,
            1698
        ]
    },
    {
        "id": 850,
        "name": "Roob Inc",
        "sector": "Luxury",
        "siren": 101958734,
        "results": [
            1699,
            1700
        ]
    },
    {
        "id": 851,
        "name": "Morissette and Sons",
        "sector": "Retail",
        "siren": 167669722,
        "results": [
            1701,
            1702
        ]
    },
    {
        "id": 852,
        "name": "Zemlak-Connelly",
        "sector": "Luxury",
        "siren": 104649344,
        "results": [
            1703,
            1704
        ]
    },
    {
        "id": 853,
        "name": "Johnson-Jakubowski",
        "sector": "Luxury",
        "siren": 192817456,
        "results": [
            1705,
            1706
        ]
    },
    {
        "id": 854,
        "name": "Volkman-Kovacek",
        "sector": "Luxury",
        "siren": 117895725,
        "results": [
            1707,
            1708
        ]
    },
    {
        "id": 855,
        "name": "Tillman, Skiles and Hilpert",
        "sector": "Energy",
        "siren": 117107520,
        "results": [
            1709,
            1710
        ]
    },
    {
        "id": 856,
        "name": "Kub-Daniel",
        "sector": "Services",
        "siren": 106341027,
        "results": [
            1711,
            1712
        ]
    },
    {
        "id": 857,
        "name": "Kohler-Dickinson",
        "sector": "Luxury",
        "siren": 187328834,
        "results": [
            1713,
            1714
        ]
    },
    {
        "id": 858,
        "name": "Carter, Hermann and Abbott",
        "sector": "Energy",
        "siren": 118248539,
        "results": [
            1715,
            1716
        ]
    },
    {
        "id": 859,
        "name": "Pfeffer Inc",
        "sector": "Energy",
        "siren": 196877153,
        "results": [
            1717,
            1718
        ]
    },
    {
        "id": 860,
        "name": "Bernier-Trantow",
        "sector": "Luxury",
        "siren": 144677992,
        "results": [
            1719,
            1720
        ]
    },
    {
        "id": 861,
        "name": "Spinka LLC",
        "sector": "Luxury",
        "siren": 116843327,
        "results": [
            1721,
            1722
        ]
    },
    {
        "id": 862,
        "name": "Walsh, Runolfsdottir and Kilback",
        "sector": "Luxury",
        "siren": 124931602,
        "results": [
            1723,
            1724
        ]
    },
    {
        "id": 863,
        "name": "Kreiger Group",
        "sector": "Electronic",
        "siren": 172446196,
        "results": [
            1725,
            1726
        ]
    },
    {
        "id": 864,
        "name": "Legros-Quigley",
        "sector": "Energy",
        "siren": 189491425,
        "results": [
            1727,
            1728
        ]
    },
    {
        "id": 865,
        "name": "Stracke, Feeney and Schmeler",
        "sector": "Retail",
        "siren": 172260753,
        "results": [
            1729,
            1730
        ]
    },
    {
        "id": 866,
        "name": "Gibson-Lynch",
        "sector": "Luxury",
        "siren": 131306836,
        "results": [
            1731,
            1732
        ]
    },
    {
        "id": 867,
        "name": "Reichel-Torp",
        "sector": "Services",
        "siren": 138938680,
        "results": [
            1733,
            1734
        ]
    },
    {
        "id": 868,
        "name": "Deckow-Herman",
        "sector": "Energy",
        "siren": 145463778,
        "results": [
            1735,
            1736
        ]
    },
    {
        "id": 869,
        "name": "Ondricka Inc",
        "sector": "Retail",
        "siren": 114106817,
        "results": [
            1737,
            1738
        ]
    },
    {
        "id": 870,
        "name": "Kassulke Group",
        "sector": "Services",
        "siren": 125326583,
        "results": [
            1739,
            1740
        ]
    },
    {
        "id": 871,
        "name": "Gutkowski and Sons",
        "sector": "Luxury",
        "siren": 194518065,
        "results": [
            1741,
            1742
        ]
    },
    {
        "id": 872,
        "name": "Brekke Inc",
        "sector": "Luxury",
        "siren": 144810441,
        "results": [
            1743,
            1744
        ]
    },
    {
        "id": 873,
        "name": "Sanford, Abbott and Doyle",
        "sector": "Luxury",
        "siren": 109581460,
        "results": [
            1745,
            1746
        ]
    },
    {
        "id": 874,
        "name": "Terry, Watsica and Marks",
        "sector": "Services",
        "siren": 163369130,
        "results": [
            1747,
            1748
        ]
    },
    {
        "id": 875,
        "name": "Windler, Beer and Reichert",
        "sector": "Energy",
        "siren": 162705486,
        "results": [
            1749,
            1750
        ]
    },
    {
        "id": 876,
        "name": "Quigley Inc",
        "sector": "Services",
        "siren": 171902083,
        "results": [
            1751,
            1752
        ]
    },
    {
        "id": 877,
        "name": "Kub and Sons",
        "sector": "Retail",
        "siren": 133035315,
        "results": [
            1753,
            1754
        ]
    },
    {
        "id": 878,
        "name": "Kutch LLC",
        "sector": "Services",
        "siren": 143661189,
        "results": [
            1755,
            1756
        ]
    },
    {
        "id": 879,
        "name": "Doyle, Batz and Stoltenberg",
        "sector": "Luxury",
        "siren": 187532589,
        "results": [
            1757,
            1758
        ]
    },
    {
        "id": 880,
        "name": "Goyette and Sons",
        "sector": "Energy",
        "siren": 199540783,
        "results": [
            1759,
            1760
        ]
    },
    {
        "id": 881,
        "name": "Windler Inc",
        "sector": "Services",
        "siren": 178765604,
        "results": [
            1761,
            1762
        ]
    },
    {
        "id": 882,
        "name": "Dicki Group",
        "sector": "Retail",
        "siren": 116237749,
        "results": [
            1763,
            1764
        ]
    },
    {
        "id": 883,
        "name": "Quitzon and Sons",
        "sector": "Luxury",
        "siren": 125672275,
        "results": [
            1765,
            1766
        ]
    },
    {
        "id": 884,
        "name": "Steuber-Metz",
        "sector": "Retail",
        "siren": 184946759,
        "results": [
            1767,
            1768
        ]
    },
    {
        "id": 885,
        "name": "Larson and Sons",
        "sector": "Energy",
        "siren": 160194912,
        "results": [
            1769,
            1770
        ]
    },
    {
        "id": 886,
        "name": "Bernier Inc",
        "sector": "Electronic",
        "siren": 118680509,
        "results": [
            1771,
            1772
        ]
    },
    {
        "id": 887,
        "name": "Deckow and Sons",
        "sector": "Electronic",
        "siren": 167104227,
        "results": [
            1773,
            1774
        ]
    },
    {
        "id": 888,
        "name": "Harris and Sons",
        "sector": "Energy",
        "siren": 128610634,
        "results": [
            1775,
            1776
        ]
    },
    {
        "id": 889,
        "name": "Medhurst and Sons",
        "sector": "Luxury",
        "siren": 102925161,
        "results": [
            1777,
            1778
        ]
    },
    {
        "id": 890,
        "name": "Nader-Marks",
        "sector": "Luxury",
        "siren": 191120490,
        "results": [
            1779,
            1780
        ]
    },
    {
        "id": 891,
        "name": "Harris, O'Conner and Rodriguez",
        "sector": "Retail",
        "siren": 153285638,
        "results": [
            1781,
            1782
        ]
    },
    {
        "id": 892,
        "name": "Emard-Wisoky",
        "sector": "Luxury",
        "siren": 131865937,
        "results": [
            1783,
            1784
        ]
    },
    {
        "id": 893,
        "name": "Gleichner-Buckridge",
        "sector": "Electronic",
        "siren": 142254757,
        "results": [
            1785,
            1786
        ]
    },
    {
        "id": 894,
        "name": "Stroman, Durgan and Schuster",
        "sector": "Electronic",
        "siren": 186553896,
        "results": [
            1787,
            1788
        ]
    },
    {
        "id": 895,
        "name": "Bahringer-Beer",
        "sector": "Electronic",
        "siren": 155909003,
        "results": [
            1789,
            1790
        ]
    },
    {
        "id": 896,
        "name": "Ankunding Group",
        "sector": "Services",
        "siren": 146522165,
        "results": [
            1791,
            1792
        ]
    },
    {
        "id": 897,
        "name": "Bailey and Sons",
        "sector": "Retail",
        "siren": 116912814,
        "results": [
            1793,
            1794
        ]
    },
    {
        "id": 898,
        "name": "Stiedemann Group",
        "sector": "Services",
        "siren": 138130435,
        "results": [
            1795,
            1796
        ]
    },
    {
        "id": 899,
        "name": "VonRueden, Stokes and Hammes",
        "sector": "Services",
        "siren": 136246184,
        "results": [
            1797,
            1798
        ]
    },
    {
        "id": 900,
        "name": "Cole, Schuppe and Nolan",
        "sector": "Energy",
        "siren": 126595826,
        "results": [
            1799,
            1800
        ]
    },
    {
        "id": 901,
        "name": "Gerlach-Haley",
        "sector": "Energy",
        "siren": 140145973,
        "results": [
            1801,
            1802
        ]
    },
    {
        "id": 902,
        "name": "Nader-Feest",
        "sector": "Energy",
        "siren": 142651328,
        "results": [
            1803,
            1804
        ]
    },
    {
        "id": 903,
        "name": "Barrows-Fahey",
        "sector": "Luxury",
        "siren": 197267187,
        "results": [
            1805,
            1806
        ]
    },
    {
        "id": 904,
        "name": "Botsford, Corkery and Zboncak",
        "sector": "Retail",
        "siren": 156360441,
        "results": [
            1807,
            1808
        ]
    },
    {
        "id": 905,
        "name": "Davis LLC",
        "sector": "Luxury",
        "siren": 187427886,
        "results": [
            1809,
            1810
        ]
    },
    {
        "id": 906,
        "name": "Sawayn Inc",
        "sector": "Retail",
        "siren": 199558391,
        "results": [
            1811,
            1812
        ]
    },
    {
        "id": 907,
        "name": "Pollich LLC",
        "sector": "Services",
        "siren": 131071003,
        "results": [
            1813,
            1814
        ]
    },
    {
        "id": 908,
        "name": "Nader, Heathcote and Beier",
        "sector": "Retail",
        "siren": 163154696,
        "results": [
            1815,
            1816
        ]
    },
    {
        "id": 909,
        "name": "Hauck-Kutch",
        "sector": "Retail",
        "siren": 151613004,
        "results": [
            1817,
            1818
        ]
    },
    {
        "id": 910,
        "name": "Denesik LLC",
        "sector": "Retail",
        "siren": 103479498,
        "results": [
            1819,
            1820
        ]
    },
    {
        "id": 911,
        "name": "Jast Group",
        "sector": "Energy",
        "siren": 143432110,
        "results": [
            1821,
            1822
        ]
    },
    {
        "id": 912,
        "name": "Larkin, Durgan and Franecki",
        "sector": "Electronic",
        "siren": 116000875,
        "results": [
            1823,
            1824
        ]
    },
    {
        "id": 913,
        "name": "Erdman, Breitenberg and Streich",
        "sector": "Electronic",
        "siren": 159175169,
        "results": [
            1825,
            1826
        ]
    },
    {
        "id": 914,
        "name": "Feest-Batz",
        "sector": "Electronic",
        "siren": 164860406,
        "results": [
            1827,
            1828
        ]
    },
    {
        "id": 915,
        "name": "Mayer Inc",
        "sector": "Energy",
        "siren": 101482936,
        "results": [
            1829,
            1830
        ]
    },
    {
        "id": 916,
        "name": "Balistreri, Will and Walker",
        "sector": "Retail",
        "siren": 161501031,
        "results": [
            1831,
            1832
        ]
    },
    {
        "id": 917,
        "name": "Rau, Yundt and Bergstrom",
        "sector": "Energy",
        "siren": 192338635,
        "results": [
            1833,
            1834
        ]
    },
    {
        "id": 918,
        "name": "Howell, Littel and Shanahan",
        "sector": "Luxury",
        "siren": 153414397,
        "results": [
            1835,
            1836
        ]
    },
    {
        "id": 919,
        "name": "Steuber, Thompson and Toy",
        "sector": "Services",
        "siren": 123940721,
        "results": [
            1837,
            1838
        ]
    },
    {
        "id": 920,
        "name": "Olson-Jakubowski",
        "sector": "Electronic",
        "siren": 167690862,
        "results": [
            1839,
            1840
        ]
    },
    {
        "id": 921,
        "name": "Rowe, Ziemann and Wintheiser",
        "sector": "Luxury",
        "siren": 184418505,
        "results": [
            1841,
            1842
        ]
    },
    {
        "id": 922,
        "name": "McKenzie-Waters",
        "sector": "Retail",
        "siren": 100313670,
        "results": [
            1843,
            1844
        ]
    },
    {
        "id": 923,
        "name": "Breitenberg, Emard and Schiller",
        "sector": "Energy",
        "siren": 182874115,
        "results": [
            1845,
            1846
        ]
    },
    {
        "id": 924,
        "name": "Reichel and Sons",
        "sector": "Electronic",
        "siren": 162185639,
        "results": [
            1847,
            1848
        ]
    },
    {
        "id": 925,
        "name": "Botsford LLC",
        "sector": "Energy",
        "siren": 108406570,
        "results": [
            1849,
            1850
        ]
    },
    {
        "id": 926,
        "name": "Hilpert LLC",
        "sector": "Electronic",
        "siren": 192146857,
        "results": [
            1851,
            1852
        ]
    },
    {
        "id": 927,
        "name": "Fritsch, Hahn and Veum",
        "sector": "Energy",
        "siren": 106505507,
        "results": [
            1853,
            1854
        ]
    },
    {
        "id": 928,
        "name": "Prosacco-Wiza",
        "sector": "Retail",
        "siren": 189019628,
        "results": [
            1855,
            1856
        ]
    },
    {
        "id": 929,
        "name": "Turner, Kovacek and Osinski",
        "sector": "Electronic",
        "siren": 136565825,
        "results": [
            1857,
            1858
        ]
    },
    {
        "id": 930,
        "name": "Feeney, Homenick and Anderson",
        "sector": "Services",
        "siren": 160773085,
        "results": [
            1859,
            1860
        ]
    },
    {
        "id": 931,
        "name": "Wuckert LLC",
        "sector": "Retail",
        "siren": 185956961,
        "results": [
            1861,
            1862
        ]
    },
    {
        "id": 932,
        "name": "Schamberger, Schuppe and Marks",
        "sector": "Services",
        "siren": 152638843,
        "results": [
            1863,
            1864
        ]
    },
    {
        "id": 933,
        "name": "Kuphal-Kovacek",
        "sector": "Luxury",
        "siren": 165732658,
        "results": [
            1865,
            1866
        ]
    },
    {
        "id": 934,
        "name": "Paucek Group",
        "sector": "Luxury",
        "siren": 119495081,
        "results": [
            1867,
            1868
        ]
    },
    {
        "id": 935,
        "name": "MacGyver-Hintz",
        "sector": "Electronic",
        "siren": 117496732,
        "results": [
            1869,
            1870
        ]
    },
    {
        "id": 936,
        "name": "Ratke and Sons",
        "sector": "Energy",
        "siren": 170431877,
        "results": [
            1871,
            1872
        ]
    },
    {
        "id": 937,
        "name": "Brekke, Greenfelder and Hills",
        "sector": "Energy",
        "siren": 151517029,
        "results": [
            1873,
            1874
        ]
    },
    {
        "id": 938,
        "name": "Kirlin Group",
        "sector": "Retail",
        "siren": 119879668,
        "results": [
            1875,
            1876
        ]
    },
    {
        "id": 939,
        "name": "Strosin, Wunsch and Kerluke",
        "sector": "Electronic",
        "siren": 106238133,
        "results": [
            1877,
            1878
        ]
    },
    {
        "id": 940,
        "name": "Barton, Pollich and Gaylord",
        "sector": "Electronic",
        "siren": 122325130,
        "results": [
            1879,
            1880
        ]
    },
    {
        "id": 941,
        "name": "Marks-Rolfson",
        "sector": "Luxury",
        "siren": 114187547,
        "results": [
            1881,
            1882
        ]
    },
    {
        "id": 942,
        "name": "Ferry Inc",
        "sector": "Luxury",
        "siren": 146000588,
        "results": [
            1883,
            1884
        ]
    },
    {
        "id": 943,
        "name": "Jones-Wuckert",
        "sector": "Services",
        "siren": 199815719,
        "results": [
            1885,
            1886
        ]
    },
    {
        "id": 944,
        "name": "Schuster-Pouros",
        "sector": "Energy",
        "siren": 123345367,
        "results": [
            1887,
            1888
        ]
    },
    {
        "id": 945,
        "name": "Reilly Group",
        "sector": "Energy",
        "siren": 195257069,
        "results": [
            1889,
            1890
        ]
    },
    {
        "id": 946,
        "name": "Swift-Schmeler",
        "sector": "Luxury",
        "siren": 159163298,
        "results": [
            1891,
            1892
        ]
    },
    {
        "id": 947,
        "name": "Frami, Kassulke and Williamson",
        "sector": "Luxury",
        "siren": 119389057,
        "results": [
            1893,
            1894
        ]
    },
    {
        "id": 948,
        "name": "Goldner-Ondricka",
        "sector": "Retail",
        "siren": 175911534,
        "results": [
            1895,
            1896
        ]
    },
    {
        "id": 949,
        "name": "O'Hara LLC",
        "sector": "Luxury",
        "siren": 138708659,
        "results": [
            1897,
            1898
        ]
    },
    {
        "id": 950,
        "name": "Raynor, Gibson and Schaden",
        "sector": "Retail",
        "siren": 132489467,
        "results": [
            1899,
            1900
        ]
    },
    {
        "id": 951,
        "name": "Konopelski-Parisian",
        "sector": "Electronic",
        "siren": 125596906,
        "results": [
            1901,
            1902
        ]
    },
    {
        "id": 952,
        "name": "Bergstrom-Bayer",
        "sector": "Retail",
        "siren": 172596887,
        "results": [
            1903,
            1904
        ]
    },
    {
        "id": 953,
        "name": "Gutmann-Wintheiser",
        "sector": "Electronic",
        "siren": 136870795,
        "results": [
            1905,
            1906
        ]
    },
    {
        "id": 954,
        "name": "Ruecker Inc",
        "sector": "Energy",
        "siren": 107771540,
        "results": [
            1907,
            1908
        ]
    },
    {
        "id": 955,
        "name": "Schowalter and Sons",
        "sector": "Electronic",
        "siren": 104892063,
        "results": [
            1909,
            1910
        ]
    },
    {
        "id": 956,
        "name": "Weimann Inc",
        "sector": "Electronic",
        "siren": 115032180,
        "results": [
            1911,
            1912
        ]
    },
    {
        "id": 957,
        "name": "Fay-Wolf",
        "sector": "Retail",
        "siren": 152912420,
        "results": [
            1913,
            1914
        ]
    },
    {
        "id": 958,
        "name": "Jakubowski, Tillman and Hamill",
        "sector": "Energy",
        "siren": 186447593,
        "results": [
            1915,
            1916
        ]
    },
    {
        "id": 959,
        "name": "Green and Sons",
        "sector": "Electronic",
        "siren": 119660051,
        "results": [
            1917,
            1918
        ]
    },
    {
        "id": 960,
        "name": "Schumm-Kirlin",
        "sector": "Luxury",
        "siren": 108906276,
        "results": [
            1919,
            1920
        ]
    },
    {
        "id": 961,
        "name": "Waelchi Inc",
        "sector": "Luxury",
        "siren": 150114349,
        "results": [
            1921,
            1922
        ]
    },
    {
        "id": 962,
        "name": "Rodriguez, Morissette and Runolfsson",
        "sector": "Services",
        "siren": 178558625,
        "results": [
            1923,
            1924
        ]
    },
    {
        "id": 963,
        "name": "Mosciski, O'Keefe and Beier",
        "sector": "Luxury",
        "siren": 181047279,
        "results": [
            1925,
            1926
        ]
    },
    {
        "id": 964,
        "name": "Ankunding-Hansen",
        "sector": "Energy",
        "siren": 198569365,
        "results": [
            1927,
            1928
        ]
    },
    {
        "id": 965,
        "name": "Considine, Ullrich and Beatty",
        "sector": "Energy",
        "siren": 167785468,
        "results": [
            1929,
            1930
        ]
    },
    {
        "id": 966,
        "name": "Macejkovic, Barton and Purdy",
        "sector": "Energy",
        "siren": 158559600,
        "results": [
            1931,
            1932
        ]
    },
    {
        "id": 967,
        "name": "Kshlerin Inc",
        "sector": "Retail",
        "siren": 164045216,
        "results": [
            1933,
            1934
        ]
    },
    {
        "id": 968,
        "name": "Schuster-Vandervort",
        "sector": "Retail",
        "siren": 183312705,
        "results": []
    },
    {
        "id": 969,
        "name": "Reinger Inc",
        "sector": "Services",
        "siren": 135694027,
        "results": [
            1935,
            1936
        ]
    },
    {
        "id": 970,
        "name": "Torphy, Rosenbaum and Rempel",
        "sector": "Electronic",
        "siren": 107855014,
        "results": [
            1937,
            1938
        ]
    },
    {
        "id": 971,
        "name": "Towne-Dach",
        "sector": "Energy",
        "siren": 115104805,
        "results": [
            1939,
            1940
        ]
    },
    {
        "id": 972,
        "name": "Hane-Stanton",
        "sector": "Luxury",
        "siren": 151419067,
        "results": [
            1941,
            1942
        ]
    },
    {
        "id": 973,
        "name": "Gaylord and Sons",
        "sector": "Retail",
        "siren": 147007807,
        "results": [
            1943,
            1944
        ]
    },
    {
        "id": 974,
        "name": "Wiegand-Hoeger",
        "sector": "Energy",
        "siren": 143629487,
        "results": [
            1945,
            1946
        ]
    },
    {
        "id": 975,
        "name": "Rogahn and Sons",
        "sector": "Services",
        "siren": 194214776,
        "results": [
            1947,
            1948
        ]
    },
    {
        "id": 976,
        "name": "Pagac, Bednar and Von",
        "sector": "Retail",
        "siren": 176873074,
        "results": [
            1949,
            1950
        ]
    },
    {
        "id": 977,
        "name": "Wilderman-Fay",
        "sector": "Services",
        "siren": 130425768,
        "results": [
            1951,
            1952
        ]
    },
    {
        "id": 978,
        "name": "Muller Group",
        "sector": "Luxury",
        "siren": 175112687,
        "results": [
            1953,
            1954
        ]
    },
    {
        "id": 979,
        "name": "Cronin, Kessler and Corwin",
        "sector": "Energy",
        "siren": 119802584,
        "results": [
            1955,
            1956
        ]
    },
    {
        "id": 980,
        "name": "Sporer-Romaguera",
        "sector": "Electronic",
        "siren": 100614525,
        "results": [
            1957,
            1958
        ]
    },
    {
        "id": 981,
        "name": "Borer and Sons",
        "sector": "Retail",
        "siren": 162375181,
        "results": [
            1959,
            1960
        ]
    },
    {
        "id": 982,
        "name": "Berge, Blanda and Gutmann",
        "sector": "Electronic",
        "siren": 128182766,
        "results": [
            1961,
            1962
        ]
    },
    {
        "id": 983,
        "name": "Sawayn-Hermiston",
        "sector": "Luxury",
        "siren": 189859166,
        "results": [
            1963,
            1964
        ]
    },
    {
        "id": 984,
        "name": "Halvorson Group",
        "sector": "Luxury",
        "siren": 199790774,
        "results": [
            1965,
            1966
        ]
    },
    {
        "id": 985,
        "name": "Donnelly-Mraz",
        "sector": "Services",
        "siren": 179611598,
        "results": [
            1967,
            1968
        ]
    },
    {
        "id": 986,
        "name": "Legros, Bradtke and O'Keefe",
        "sector": "Retail",
        "siren": 114151737,
        "results": [
            1969,
            1970
        ]
    },
    {
        "id": 987,
        "name": "Fay and Sons",
        "sector": "Luxury",
        "siren": 100933072,
        "results": [
            1971,
            1972
        ]
    },
    {
        "id": 988,
        "name": "Cassin LLC",
        "sector": "Electronic",
        "siren": 159459542,
        "results": [
            1973,
            1974
        ]
    },
    {
        "id": 989,
        "name": "Robel Inc",
        "sector": "Luxury",
        "siren": 138199832,
        "results": [
            1975,
            1976
        ]
    },
    {
        "id": 990,
        "name": "Oberbrunner-Gutmann",
        "sector": "Energy",
        "siren": 131043727,
        "results": [
            1977,
            1978
        ]
    },
    {
        "id": 991,
        "name": "Stracke Group",
        "sector": "Electronic",
        "siren": 190537129,
        "results": [
            1979,
            1980
        ]
    },
    {
        "id": 992,
        "name": "Collins Group",
        "sector": "Retail",
        "siren": 148151467,
        "results": [
            1981,
            1982
        ]
    },
    {
        "id": 993,
        "name": "Hoeger, Schoen and Dibbert",
        "sector": "Luxury",
        "siren": 175662557,
        "results": [
            1983,
            1984
        ]
    },
    {
        "id": 994,
        "name": "Pacocha-Schmitt",
        "sector": "Energy",
        "siren": 132741221,
        "results": [
            1985,
            1986
        ]
    },
    {
        "id": 995,
        "name": "Collier-Goldner",
        "sector": "Electronic",
        "siren": 190574530,
        "results": [
            1987,
            1988
        ]
    },
    {
        "id": 996,
        "name": "Kiehn, Stoltenberg and Friesen",
        "sector": "Electronic",
        "siren": 151306292,
        "results": [
            1989,
            1990
        ]
    },
    {
        "id": 997,
        "name": "Johnston, Mante and Purdy",
        "sector": "Services",
        "siren": 132122930,
        "results": [
            1991,
            1992
        ]
    },
    {
        "id": 998,
        "name": "Lowe-Legros",
        "sector": "Electronic",
        "siren": 103764020,
        "results": [
            1993,
            1994
        ]
    },
    {
        "id": 999,
        "name": "Schulist LLC",
        "sector": "Services",
        "siren": 130132106,
        "results": [
            1995,
            1996
        ]
    },
    {
        "id": 1000,
        "name": "Ankunding-Lindgren",
        "sector": "Energy",
        "siren": 190875445,
        "results": [
            1997,
            1998
        ]
    },
    {
        "id": 1001,
        "name": "Hudson, Cole and Torp",
        "sector": "Electronic",
        "siren": 149620575,
        "results": [
            1999,
            2000
        ]
    },
    {
        "id": 1002,
        "name": "Fisher Inc",
        "sector": "Energy",
        "siren": 195699182,
        "results": [
            2001,
            2002
        ]
    },
    {
        "id": 1003,
        "name": "Turner Inc",
        "sector": "Energy",
        "siren": 181691080,
        "results": [
            2003,
            2004
        ]
    },
    {
        "id": 1004,
        "name": "Welch, Rohan and Ortiz",
        "sector": "Electronic",
        "siren": 148674050,
        "results": [
            2005,
            2006
        ]
    },
    {
        "id": 1005,
        "name": "Senger Group",
        "sector": "Retail",
        "siren": 196126254,
        "results": [
            2007,
            2008
        ]
    },
    {
        "id": 1006,
        "name": "Kertzmann Group",
        "sector": "Retail",
        "siren": 187537793,
        "results": [
            2009,
            2010
        ]
    },
    {
        "id": 1007,
        "name": "Trantow, Bauch and Brown",
        "sector": "Electronic",
        "siren": 194314995,
        "results": [
            2011,
            2012
        ]
    },
    {
        "id": 1008,
        "name": "Kertzmann-Cremin",
        "sector": "Luxury",
        "siren": 110861915,
        "results": [
            2013,
            2014
        ]
    },
    {
        "id": 1009,
        "name": "Jaskolski and Sons",
        "sector": "Services",
        "siren": 163203664,
        "results": [
            2015,
            2016
        ]
    },
    {
        "id": 1010,
        "name": "Gottlieb Inc",
        "sector": "Services",
        "siren": 173594891,
        "results": [
            2017,
            2018
        ]
    },
    {
        "id": 1011,
        "name": "Bins Inc",
        "sector": "Retail",
        "siren": 156610978,
        "results": [
            2019,
            2020
        ]
    },
    {
        "id": 1012,
        "name": "Purdy, Barrows and Mills",
        "sector": "Electronic",
        "siren": 125001735,
        "results": [
            2021,
            2022
        ]
    },
    {
        "id": 1013,
        "name": "Becker and Sons",
        "sector": "Retail",
        "siren": 108220327,
        "results": [
            2023,
            2024
        ]
    },
    {
        "id": 1014,
        "name": "Kozey, Haag and Kuvalis",
        "sector": "Services",
        "siren": 197683277,
        "results": [
            2025,
            2026
        ]
    },
    {
        "id": 1015,
        "name": "Wilkinson, Nienow and Schmeler",
        "sector": "Retail",
        "siren": 195451954,
        "results": [
            2027,
            2028
        ]
    },
    {
        "id": 1016,
        "name": "Cummings, Towne and Stanton",
        "sector": "Services",
        "siren": 175032418,
        "results": [
            2029,
            2030
        ]
    },
    {
        "id": 1017,
        "name": "Kreiger, Mosciski and Kiehn",
        "sector": "Energy",
        "siren": 164388517,
        "results": [
            2031,
            2032
        ]
    },
    {
        "id": 1018,
        "name": "Bode, Hudson and Kulas",
        "sector": "Electronic",
        "siren": 177384240,
        "results": [
            2033,
            2034
        ]
    },
    {
        "id": 1019,
        "name": "Walker, Abbott and Brekke",
        "sector": "Retail",
        "siren": 108949277,
        "results": [
            2035,
            2036
        ]
    },
    {
        "id": 1020,
        "name": "Rath, Legros and Feil",
        "sector": "Electronic",
        "siren": 105376773,
        "results": [
            2037,
            2038
        ]
    },
    {
        "id": 1021,
        "name": "Wunsch, Nienow and Russel",
        "sector": "Retail",
        "siren": 170490793,
        "results": [
            2039,
            2040
        ]
    },
    {
        "id": 1022,
        "name": "Baumbach-Howe",
        "sector": "Luxury",
        "siren": 197432382,
        "results": [
            2041,
            2042
        ]
    },
    {
        "id": 1023,
        "name": "Hartmann, Bruen and McDermott",
        "sector": "Services",
        "siren": 183064272,
        "results": [
            2043,
            2044
        ]
    },
    {
        "id": 1024,
        "name": "Rippin-Klocko",
        "sector": "Luxury",
        "siren": 109837685,
        "results": [
            2045,
            2046
        ]
    },
    {
        "id": 1025,
        "name": "Beer, Simonis and Runolfsdottir",
        "sector": "Energy",
        "siren": 188135119,
        "results": [
            2047,
            2048
        ]
    },
    {
        "id": 1026,
        "name": "Schamberger, Yundt and Zemlak",
        "sector": "Energy",
        "siren": 133026662,
        "results": [
            2049,
            2050
        ]
    },
    {
        "id": 1027,
        "name": "Feeney and Sons",
        "sector": "Services",
        "siren": 132298627,
        "results": [
            2051,
            2052
        ]
    },
    {
        "id": 1028,
        "name": "Kerluke, Durgan and Bernhard",
        "sector": "Retail",
        "siren": 168792627,
        "results": [
            2053,
            2054
        ]
    },
    {
        "id": 1029,
        "name": "Dicki, Moen and Robel",
        "sector": "Retail",
        "siren": 135883737,
        "results": [
            2055,
            2056
        ]
    },
    {
        "id": 1030,
        "name": "Sporer and Sons",
        "sector": "Luxury",
        "siren": 160840028,
        "results": [
            2057,
            2058
        ]
    },
    {
        "id": 1031,
        "name": "Skiles-Gusikowski",
        "sector": "Luxury",
        "siren": 121692227,
        "results": [
            2059,
            2060
        ]
    },
    {
        "id": 1032,
        "name": "Swaniawski Group",
        "sector": "Retail",
        "siren": 173672744,
        "results": [
            2061,
            2062
        ]
    },
    {
        "id": 1033,
        "name": "Satterfield, Brekke and Stanton",
        "sector": "Services",
        "siren": 195857228,
        "results": [
            2063,
            2064
        ]
    },
    {
        "id": 1034,
        "name": "Ortiz-Connelly",
        "sector": "Services",
        "siren": 182726877,
        "results": [
            2065,
            2066
        ]
    },
    {
        "id": 1035,
        "name": "Donnelly, Abernathy and Pacocha",
        "sector": "Retail",
        "siren": 156951403,
        "results": [
            2067,
            2068
        ]
    },
    {
        "id": 1036,
        "name": "Hudson, Reynolds and Jacobson",
        "sector": "Services",
        "siren": 132253095,
        "results": [
            2069,
            2070
        ]
    },
    {
        "id": 1037,
        "name": "Wuckert Group",
        "sector": "Electronic",
        "siren": 165950424,
        "results": [
            2071,
            2072
        ]
    },
    {
        "id": 1038,
        "name": "Larson, Gleason and Murphy",
        "sector": "Retail",
        "siren": 117623669,
        "results": [
            2073,
            2074
        ]
    },
    {
        "id": 1039,
        "name": "Dickinson-Strosin",
        "sector": "Energy",
        "siren": 175066823,
        "results": [
            2075,
            2076
        ]
    },
    {
        "id": 1040,
        "name": "Franecki-Cassin",
        "sector": "Retail",
        "siren": 158424603,
        "results": [
            2077,
            2078
        ]
    },
    {
        "id": 1041,
        "name": "Nikolaus-Flatley",
        "sector": "Electronic",
        "siren": 133495059,
        "results": [
            2079,
            2080
        ]
    },
    {
        "id": 1042,
        "name": "Hickle, Stamm and Fahey",
        "sector": "Services",
        "siren": 101590590,
        "results": [
            2081,
            2082
        ]
    },
    {
        "id": 1043,
        "name": "Bahringer, Blanda and Schmitt",
        "sector": "Luxury",
        "siren": 137219707,
        "results": [
            2083,
            2084
        ]
    },
    {
        "id": 1044,
        "name": "Herman-Abbott",
        "sector": "Retail",
        "siren": 174831134,
        "results": [
            2085,
            2086
        ]
    },
    {
        "id": 1045,
        "name": "Stokes-Hegmann",
        "sector": "Energy",
        "siren": 152222171,
        "results": [
            2087,
            2088
        ]
    },
    {
        "id": 1046,
        "name": "Moen, Krajcik and O'Keefe",
        "sector": "Retail",
        "siren": 179058220,
        "results": [
            2089,
            2090
        ]
    },
    {
        "id": 1047,
        "name": "Huels-Koepp",
        "sector": "Services",
        "siren": 103436807,
        "results": [
            2091,
            2092
        ]
    },
    {
        "id": 1048,
        "name": "Turcotte LLC",
        "sector": "Services",
        "siren": 115411209,
        "results": [
            2093,
            2094
        ]
    },
    {
        "id": 1049,
        "name": "Glover, Kirlin and McGlynn",
        "sector": "Energy",
        "siren": 184190735,
        "results": [
            2095,
            2096
        ]
    },
    {
        "id": 1050,
        "name": "Nader-Bergnaum",
        "sector": "Electronic",
        "siren": 142087889,
        "results": [
            2097,
            2098
        ]
    },
    {
        "id": 1051,
        "name": "McDermott-Rolfson",
        "sector": "Energy",
        "siren": 117468732,
        "results": [
            2099,
            2100
        ]
    },
    {
        "id": 1052,
        "name": "Treutel Group",
        "sector": "Retail",
        "siren": 138837726,
        "results": [
            2101,
            2102
        ]
    },
    {
        "id": 1053,
        "name": "Lynch, Wunsch and Kris",
        "sector": "Services",
        "siren": 152402150,
        "results": [
            2103,
            2104
        ]
    },
    {
        "id": 1054,
        "name": "Tremblay, Keeling and Breitenberg",
        "sector": "Services",
        "siren": 125362017,
        "results": [
            2105,
            2106
        ]
    },
    {
        "id": 1055,
        "name": "Leffler LLC",
        "sector": "Retail",
        "siren": 150610837,
        "results": [
            2107,
            2108
        ]
    },
    {
        "id": 1056,
        "name": "Hintz Inc",
        "sector": "Electronic",
        "siren": 170053342,
        "results": [
            2109,
            2110
        ]
    },
    {
        "id": 1057,
        "name": "Howell Inc",
        "sector": "Energy",
        "siren": 115871891,
        "results": [
            2111,
            2112
        ]
    },
    {
        "id": 1058,
        "name": "Windler-Pfeffer",
        "sector": "Electronic",
        "siren": 186052047,
        "results": [
            2113,
            2114
        ]
    },
    {
        "id": 1059,
        "name": "Greenfelder Group",
        "sector": "Services",
        "siren": 123389196,
        "results": [
            2115,
            2116
        ]
    },
    {
        "id": 1060,
        "name": "Hessel Group",
        "sector": "Electronic",
        "siren": 130378540,
        "results": [
            2117,
            2118
        ]
    },
    {
        "id": 1061,
        "name": "Goyette, Cummerata and Windler",
        "sector": "Luxury",
        "siren": 173090205,
        "results": [
            2119,
            2120
        ]
    },
    {
        "id": 1062,
        "name": "Green LLC",
        "sector": "Energy",
        "siren": 142811173,
        "results": [
            2121,
            2122
        ]
    },
    {
        "id": 1063,
        "name": "MacGyver LLC",
        "sector": "Energy",
        "siren": 180573399,
        "results": [
            2123,
            2124
        ]
    },
    {
        "id": 1064,
        "name": "Cassin-Weissnat",
        "sector": "Electronic",
        "siren": 174008422,
        "results": [
            2125,
            2126
        ]
    },
    {
        "id": 1065,
        "name": "Koelpin-Herman",
        "sector": "Services",
        "siren": 123713934,
        "results": [
            2127,
            2128
        ]
    },
    {
        "id": 1066,
        "name": "Murray, Keeling and Pfeffer",
        "sector": "Services",
        "siren": 153108580,
        "results": [
            2129,
            2130
        ]
    },
    {
        "id": 1067,
        "name": "Metz and Sons",
        "sector": "Electronic",
        "siren": 132514765,
        "results": [
            2131,
            2132
        ]
    },
    {
        "id": 1068,
        "name": "Trantow, Stoltenberg and Rau",
        "sector": "Luxury",
        "siren": 142196394,
        "results": [
            2133,
            2134
        ]
    },
    {
        "id": 1069,
        "name": "Hermann and Sons",
        "sector": "Electronic",
        "siren": 199577547,
        "results": [
            2135,
            2136
        ]
    },
    {
        "id": 1070,
        "name": "Hickle-Cartwright",
        "sector": "Luxury",
        "siren": 145170204,
        "results": [
            2137,
            2138
        ]
    },
    {
        "id": 1071,
        "name": "Balistreri and Sons",
        "sector": "Retail",
        "siren": 122783975,
        "results": [
            2139,
            2140
        ]
    },
    {
        "id": 1072,
        "name": "Welch-Wisoky",
        "sector": "Electronic",
        "siren": 180856598,
        "results": [
            2141,
            2142
        ]
    },
    {
        "id": 1073,
        "name": "Schamberger-Leuschke",
        "sector": "Retail",
        "siren": 101786222,
        "results": [
            2143,
            2144
        ]
    },
    {
        "id": 1074,
        "name": "Hudson and Sons",
        "sector": "Retail",
        "siren": 159421714,
        "results": [
            2145,
            2146
        ]
    },
    {
        "id": 1075,
        "name": "Stehr-Larson",
        "sector": "Electronic",
        "siren": 110442504,
        "results": [
            2147,
            2148
        ]
    },
    {
        "id": 1076,
        "name": "Deckow-Rowe",
        "sector": "Electronic",
        "siren": 140318401,
        "results": [
            2149,
            2150
        ]
    },
    {
        "id": 1077,
        "name": "Mann-Wisoky",
        "sector": "Luxury",
        "siren": 154437824,
        "results": [
            2151,
            2152
        ]
    },
    {
        "id": 1078,
        "name": "Bradtke, Bauch and Hermann",
        "sector": "Electronic",
        "siren": 119255732,
        "results": [
            2153,
            2154
        ]
    },
    {
        "id": 1079,
        "name": "Jaskolski Group",
        "sector": "Electronic",
        "siren": 188974299,
        "results": [
            2155,
            2156
        ]
    },
    {
        "id": 1080,
        "name": "Glover, Lubowitz and Labadie",
        "sector": "Energy",
        "siren": 111353919,
        "results": [
            2157,
            2158
        ]
    },
    {
        "id": 1081,
        "name": "Mraz, Little and Fritsch",
        "sector": "Luxury",
        "siren": 162877974,
        "results": [
            2159,
            2160
        ]
    },
    {
        "id": 1082,
        "name": "Medhurst and Sons",
        "sector": "Services",
        "siren": 125625509,
        "results": [
            2161,
            2162
        ]
    },
    {
        "id": 1083,
        "name": "Schultz Inc",
        "sector": "Retail",
        "siren": 163815675,
        "results": [
            2163,
            2164
        ]
    },
    {
        "id": 1084,
        "name": "Brown Inc",
        "sector": "Retail",
        "siren": 169391204,
        "results": [
            2165,
            2166
        ]
    },
    {
        "id": 1085,
        "name": "Huels Inc",
        "sector": "Luxury",
        "siren": 135296056,
        "results": [
            2167,
            2168
        ]
    },
    {
        "id": 1086,
        "name": "Cassin-Collins",
        "sector": "Energy",
        "siren": 136888845,
        "results": [
            2169,
            2170
        ]
    },
    {
        "id": 1087,
        "name": "Murphy, Reichert and Walsh",
        "sector": "Electronic",
        "siren": 168943428,
        "results": [
            2171,
            2172
        ]
    },
    {
        "id": 1088,
        "name": "Dooley-Flatley",
        "sector": "Retail",
        "siren": 121546181,
        "results": [
            2173,
            2174
        ]
    },
    {
        "id": 1089,
        "name": "Wisozk-Langosh",
        "sector": "Services",
        "siren": 104018793,
        "results": [
            2175,
            2176
        ]
    },
    {
        "id": 1090,
        "name": "Dickinson, Thiel and Wisoky",
        "sector": "Retail",
        "siren": 173786909,
        "results": [
            2177,
            2178
        ]
    },
    {
        "id": 1091,
        "name": "Williamson and Sons",
        "sector": "Luxury",
        "siren": 155097096,
        "results": [
            2179,
            2180
        ]
    },
    {
        "id": 1092,
        "name": "Ferry Group",
        "sector": "Energy",
        "siren": 176633557,
        "results": [
            2181,
            2182
        ]
    },
    {
        "id": 1093,
        "name": "Schiller-Schmidt",
        "sector": "Services",
        "siren": 195591022,
        "results": [
            2183,
            2184
        ]
    },
    {
        "id": 1094,
        "name": "Abshire, Wilderman and Mitchell",
        "sector": "Retail",
        "siren": 141993614,
        "results": [
            2185,
            2186
        ]
    },
    {
        "id": 1095,
        "name": "Hayes LLC",
        "sector": "Services",
        "siren": 143826718,
        "results": [
            2187,
            2188
        ]
    },
    {
        "id": 1096,
        "name": "Tremblay and Sons",
        "sector": "Services",
        "siren": 133962923,
        "results": [
            2189,
            2190
        ]
    },
    {
        "id": 1097,
        "name": "Wisozk Inc",
        "sector": "Luxury",
        "siren": 107568203,
        "results": [
            2191,
            2192
        ]
    },
    {
        "id": 1098,
        "name": "Marvin-Stiedemann",
        "sector": "Electronic",
        "siren": 108626405,
        "results": [
            2193,
            2194
        ]
    },
    {
        "id": 1099,
        "name": "Borer-Cassin",
        "sector": "Luxury",
        "siren": 104300586,
        "results": [
            2195,
            2196
        ]
    },
    {
        "id": 1100,
        "name": "Tromp, Heidenreich and Ziemann",
        "sector": "Retail",
        "siren": 148080477,
        "results": [
            2197,
            2198
        ]
    },
    {
        "id": 1101,
        "name": "Funk Inc",
        "sector": "Electronic",
        "siren": 157012674,
        "results": [
            2199,
            2200
        ]
    },
    {
        "id": 1102,
        "name": "Hayes-Ernser",
        "sector": "Energy",
        "siren": 175994582,
        "results": [
            2201,
            2202
        ]
    },
    {
        "id": 1103,
        "name": "DuBuque, Sawayn and Schaefer",
        "sector": "Electronic",
        "siren": 173913299,
        "results": [
            2203,
            2204
        ]
    },
    {
        "id": 1104,
        "name": "Hyatt-Fahey",
        "sector": "Luxury",
        "siren": 172493289,
        "results": [
            2205,
            2206
        ]
    },
    {
        "id": 1105,
        "name": "Witting-Durgan",
        "sector": "Retail",
        "siren": 193631684,
        "results": [
            2207,
            2208
        ]
    },
    {
        "id": 1106,
        "name": "Wuckert-Gottlieb",
        "sector": "Luxury",
        "siren": 163261401,
        "results": [
            2209,
            2210
        ]
    },
    {
        "id": 1107,
        "name": "Ritchie, Haag and Kuhn",
        "sector": "Energy",
        "siren": 105467035,
        "results": [
            2211,
            2212
        ]
    },
    {
        "id": 1108,
        "name": "Cummerata-Prosacco",
        "sector": "Retail",
        "siren": 116769708,
        "results": [
            2213,
            2214
        ]
    },
    {
        "id": 1109,
        "name": "Schmitt and Sons",
        "sector": "Energy",
        "siren": 146939069,
        "results": [
            2215,
            2216
        ]
    },
    {
        "id": 1110,
        "name": "Bogisich Group",
        "sector": "Retail",
        "siren": 198492376,
        "results": [
            2217,
            2218
        ]
    },
    {
        "id": 1111,
        "name": "Kessler Group",
        "sector": "Electronic",
        "siren": 195285188,
        "results": [
            2219,
            2220
        ]
    },
    {
        "id": 1112,
        "name": "Reilly, Turner and Kilback",
        "sector": "Energy",
        "siren": 170348871,
        "results": [
            2221,
            2222
        ]
    },
    {
        "id": 1113,
        "name": "Stamm-McLaughlin",
        "sector": "Services",
        "siren": 152902170,
        "results": [
            2223,
            2224
        ]
    },
    {
        "id": 1114,
        "name": "Adams, Kassulke and Walter",
        "sector": "Services",
        "siren": 165989484,
        "results": [
            2225,
            2226
        ]
    },
    {
        "id": 1115,
        "name": "Okuneva Inc",
        "sector": "Retail",
        "siren": 113287300,
        "results": [
            2227,
            2228
        ]
    },
    {
        "id": 1116,
        "name": "Kiehn-Greenholt",
        "sector": "Retail",
        "siren": 135593651,
        "results": [
            2229,
            2230
        ]
    },
    {
        "id": 1117,
        "name": "Stanton, Stehr and Considine",
        "sector": "Services",
        "siren": 111297821,
        "results": [
            2231,
            2232
        ]
    },
    {
        "id": 1118,
        "name": "Pagac and Sons",
        "sector": "Energy",
        "siren": 141417076,
        "results": [
            2233,
            2234
        ]
    },
    {
        "id": 1119,
        "name": "Ullrich, Gaylord and Gleason",
        "sector": "Retail",
        "siren": 106730899,
        "results": [
            2235,
            2236
        ]
    },
    {
        "id": 1120,
        "name": "Lemke-Leannon",
        "sector": "Retail",
        "siren": 181852901,
        "results": [
            2237,
            2238
        ]
    },
    {
        "id": 1121,
        "name": "Medhurst Group",
        "sector": "Services",
        "siren": 172472287,
        "results": [
            2239,
            2240
        ]
    },
    {
        "id": 1122,
        "name": "Stoltenberg LLC",
        "sector": "Services",
        "siren": 169273144,
        "results": [
            2241,
            2242
        ]
    },
    {
        "id": 1123,
        "name": "Kerluke LLC",
        "sector": "Energy",
        "siren": 153691905,
        "results": [
            2243,
            2244
        ]
    },
    {
        "id": 1124,
        "name": "Murphy-Lesch",
        "sector": "Electronic",
        "siren": 160775851,
        "results": [
            2245,
            2246
        ]
    },
    {
        "id": 1125,
        "name": "Kilback-Hudson",
        "sector": "Electronic",
        "siren": 198340969,
        "results": [
            2247,
            2248
        ]
    },
    {
        "id": 1126,
        "name": "Rowe, Adams and Pacocha",
        "sector": "Luxury",
        "siren": 152968462,
        "results": [
            2249,
            2250
        ]
    },
    {
        "id": 1127,
        "name": "Schroeder-Toy",
        "sector": "Services",
        "siren": 106049474,
        "results": [
            2251,
            2252
        ]
    },
    {
        "id": 1128,
        "name": "Reilly-Bartoletti",
        "sector": "Luxury",
        "siren": 185568403,
        "results": [
            2253,
            2254
        ]
    },
    {
        "id": 1129,
        "name": "Runte, Trantow and Eichmann",
        "sector": "Services",
        "siren": 163211374,
        "results": [
            2255,
            2256
        ]
    },
    {
        "id": 1130,
        "name": "McGlynn Inc",
        "sector": "Services",
        "siren": 177088555,
        "results": [
            2257,
            2258
        ]
    },
    {
        "id": 1131,
        "name": "Berge Group",
        "sector": "Services",
        "siren": 191593539,
        "results": [
            2259,
            2260
        ]
    },
    {
        "id": 1132,
        "name": "Hansen, Gerhold and Zemlak",
        "sector": "Retail",
        "siren": 196059202,
        "results": [
            2261,
            2262
        ]
    },
    {
        "id": 1133,
        "name": "Leuschke and Sons",
        "sector": "Luxury",
        "siren": 185546426,
        "results": [
            2263,
            2264
        ]
    },
    {
        "id": 1134,
        "name": "Kemmer-Lynch",
        "sector": "Electronic",
        "siren": 130518404,
        "results": [
            2265,
            2266
        ]
    },
    {
        "id": 1135,
        "name": "Tillman, Ruecker and D'Amore",
        "sector": "Retail",
        "siren": 185836676,
        "results": [
            2267,
            2268
        ]
    },
    {
        "id": 1136,
        "name": "Hagenes-Nicolas",
        "sector": "Luxury",
        "siren": 181839234,
        "results": [
            2269,
            2270
        ]
    },
    {
        "id": 1137,
        "name": "Adams LLC",
        "sector": "Energy",
        "siren": 162705282,
        "results": [
            2271,
            2272
        ]
    },
    {
        "id": 1138,
        "name": "Kling, Frami and Thiel",
        "sector": "Electronic",
        "siren": 153775737,
        "results": [
            2273,
            2274
        ]
    },
    {
        "id": 1139,
        "name": "Hirthe Group",
        "sector": "Electronic",
        "siren": 109390434,
        "results": [
            2275,
            2276
        ]
    },
    {
        "id": 1140,
        "name": "Grant-Hills",
        "sector": "Services",
        "siren": 152889154,
        "results": [
            2277,
            2278
        ]
    },
    {
        "id": 1141,
        "name": "Koch, Cassin and Murphy",
        "sector": "Electronic",
        "siren": 175818545,
        "results": [
            2279,
            2280
        ]
    },
    {
        "id": 1142,
        "name": "Koss, Leffler and Fay",
        "sector": "Energy",
        "siren": 119128103,
        "results": [
            2281,
            2282
        ]
    },
    {
        "id": 1143,
        "name": "Corwin-Vandervort",
        "sector": "Energy",
        "siren": 179335809,
        "results": [
            2283,
            2284
        ]
    },
    {
        "id": 1144,
        "name": "Bartoletti-Effertz",
        "sector": "Luxury",
        "siren": 158737316,
        "results": [
            2285,
            2286
        ]
    },
    {
        "id": 1145,
        "name": "O'Reilly, Langosh and Raynor",
        "sector": "Electronic",
        "siren": 138908158,
        "results": [
            2287,
            2288
        ]
    },
    {
        "id": 1146,
        "name": "Upton, Cormier and Morissette",
        "sector": "Luxury",
        "siren": 148123081,
        "results": [
            2289,
            2290
        ]
    },
    {
        "id": 1147,
        "name": "Grady Inc",
        "sector": "Services",
        "siren": 124921215,
        "results": [
            2291,
            2292
        ]
    },
    {
        "id": 1148,
        "name": "Schimmel Group",
        "sector": "Luxury",
        "siren": 182073248,
        "results": [
            2293,
            2294
        ]
    },
    {
        "id": 1149,
        "name": "Schiller Inc",
        "sector": "Retail",
        "siren": 152363753,
        "results": [
            2295,
            2296
        ]
    },
    {
        "id": 1150,
        "name": "Heathcote-Pagac",
        "sector": "Electronic",
        "siren": 142665129,
        "results": [
            2297,
            2298
        ]
    },
    {
        "id": 1151,
        "name": "Dietrich-Kassulke",
        "sector": "Electronic",
        "siren": 153434268,
        "results": [
            2299,
            2300
        ]
    },
    {
        "id": 1152,
        "name": "Carter LLC",
        "sector": "Energy",
        "siren": 137164647,
        "results": [
            2301,
            2302
        ]
    },
    {
        "id": 1153,
        "name": "Stokes-Beahan",
        "sector": "Services",
        "siren": 173257908,
        "results": [
            2303,
            2304
        ]
    },
    {
        "id": 1154,
        "name": "Ward-Leffler",
        "sector": "Electronic",
        "siren": 129146450,
        "results": [
            2305,
            2306
        ]
    },
    {
        "id": 1155,
        "name": "Bogisich Group",
        "sector": "Retail",
        "siren": 155864068,
        "results": [
            2307,
            2308
        ]
    },
    {
        "id": 1156,
        "name": "Wiza, Abshire and Yundt",
        "sector": "Electronic",
        "siren": 167802466,
        "results": [
            2309,
            2310
        ]
    },
    {
        "id": 1157,
        "name": "Hodkiewicz Inc",
        "sector": "Energy",
        "siren": 109632592,
        "results": [
            2311,
            2312
        ]
    },
    {
        "id": 1158,
        "name": "Walker-Legros",
        "sector": "Retail",
        "siren": 139341533,
        "results": [
            2313,
            2314
        ]
    },
    {
        "id": 1159,
        "name": "Willms, Nicolas and Torphy",
        "sector": "Retail",
        "siren": 183352652,
        "results": [
            2315,
            2316
        ]
    },
    {
        "id": 1160,
        "name": "Marks and Sons",
        "sector": "Electronic",
        "siren": 129610484,
        "results": [
            2317,
            2318
        ]
    },
    {
        "id": 1161,
        "name": "Ziemann-Hintz",
        "sector": "Energy",
        "siren": 149431058,
        "results": [
            2319,
            2320
        ]
    },
    {
        "id": 1162,
        "name": "Walter-Bartell",
        "sector": "Energy",
        "siren": 159270097,
        "results": [
            2321,
            2322
        ]
    },
    {
        "id": 1163,
        "name": "Harber and Sons",
        "sector": "Luxury",
        "siren": 105385372,
        "results": [
            2323,
            2324
        ]
    },
    {
        "id": 1164,
        "name": "Pfeffer, Volkman and Jacobs",
        "sector": "Services",
        "siren": 155828039,
        "results": [
            2325,
            2326
        ]
    },
    {
        "id": 1165,
        "name": "Heathcote, Block and Rempel",
        "sector": "Retail",
        "siren": 148575346,
        "results": [
            2327,
            2328
        ]
    },
    {
        "id": 1166,
        "name": "Schuster, Hintz and Luettgen",
        "sector": "Retail",
        "siren": 139843626,
        "results": [
            2329,
            2330
        ]
    },
    {
        "id": 1167,
        "name": "Moore-Funk",
        "sector": "Retail",
        "siren": 138402141,
        "results": [
            2331,
            2332
        ]
    },
    {
        "id": 1168,
        "name": "Gutkowski, Farrell and Altenwerth",
        "sector": "Luxury",
        "siren": 162175274,
        "results": [
            2333,
            2334
        ]
    },
    {
        "id": 1169,
        "name": "Turcotte, Pagac and Welch",
        "sector": "Services",
        "siren": 176753871,
        "results": [
            2335,
            2336
        ]
    },
    {
        "id": 1170,
        "name": "Kovacek-Larkin",
        "sector": "Services",
        "siren": 113674387,
        "results": [
            2337,
            2338
        ]
    },
    {
        "id": 1171,
        "name": "Fay and Sons",
        "sector": "Services",
        "siren": 144972814,
        "results": [
            2339,
            2340
        ]
    },
    {
        "id": 1172,
        "name": "Cummerata-Berge",
        "sector": "Electronic",
        "siren": 154318426,
        "results": [
            2341,
            2342
        ]
    },
    {
        "id": 1173,
        "name": "Schultz, Sporer and Hoppe",
        "sector": "Retail",
        "siren": 174292657,
        "results": [
            2343,
            2344
        ]
    },
    {
        "id": 1174,
        "name": "Cole-Langosh",
        "sector": "Retail",
        "siren": 149623513,
        "results": [
            2345,
            2346
        ]
    },
    {
        "id": 1175,
        "name": "Jakubowski, Spinka and Bogisich",
        "sector": "Retail",
        "siren": 156086955,
        "results": [
            2347,
            2348
        ]
    },
    {
        "id": 1176,
        "name": "Effertz-Batz",
        "sector": "Energy",
        "siren": 191578492,
        "results": [
            2349,
            2350
        ]
    },
    {
        "id": 1177,
        "name": "Parisian Inc",
        "sector": "Electronic",
        "siren": 100544297,
        "results": [
            2351,
            2352
        ]
    },
    {
        "id": 1178,
        "name": "Jacobson-Hammes",
        "sector": "Retail",
        "siren": 197942932,
        "results": [
            2353,
            2354
        ]
    },
    {
        "id": 1179,
        "name": "Leuschke-Mante",
        "sector": "Electronic",
        "siren": 197657514,
        "results": [
            2355,
            2356
        ]
    },
    {
        "id": 1180,
        "name": "Bernhard Inc",
        "sector": "Electronic",
        "siren": 102657824,
        "results": [
            2357,
            2358
        ]
    },
    {
        "id": 1181,
        "name": "Bergstrom, O'Reilly and Bogan",
        "sector": "Electronic",
        "siren": 194602712,
        "results": [
            2359,
            2360
        ]
    },
    {
        "id": 1182,
        "name": "Nitzsche, Stark and Mitchell",
        "sector": "Energy",
        "siren": 192119655,
        "results": [
            2361,
            2362
        ]
    },
    {
        "id": 1183,
        "name": "Dare, Ryan and Hickle",
        "sector": "Services",
        "siren": 190429858,
        "results": [
            2363,
            2364
        ]
    },
    {
        "id": 1184,
        "name": "Johns and Sons",
        "sector": "Electronic",
        "siren": 196788807,
        "results": [
            2365,
            2366
        ]
    },
    {
        "id": 1185,
        "name": "Larkin-Jast",
        "sector": "Electronic",
        "siren": 119438694,
        "results": [
            2367,
            2368
        ]
    },
    {
        "id": 1186,
        "name": "Schinner-Batz",
        "sector": "Luxury",
        "siren": 113489329,
        "results": [
            2369,
            2370
        ]
    },
    {
        "id": 1187,
        "name": "Fay, Bosco and Williamson",
        "sector": "Energy",
        "siren": 117151370,
        "results": [
            2371,
            2372
        ]
    },
    {
        "id": 1188,
        "name": "Wiza Group",
        "sector": "Energy",
        "siren": 119972532,
        "results": [
            2373,
            2374
        ]
    },
    {
        "id": 1189,
        "name": "Koepp-Hilll",
        "sector": "Energy",
        "siren": 154362070,
        "results": [
            2375,
            2376
        ]
    },
    {
        "id": 1190,
        "name": "O'Keefe-Brown",
        "sector": "Energy",
        "siren": 123618667,
        "results": [
            2377,
            2378
        ]
    },
    {
        "id": 1191,
        "name": "Stehr-Sanford",
        "sector": "Electronic",
        "siren": 167001629,
        "results": [
            2379,
            2380
        ]
    },
    {
        "id": 1192,
        "name": "Kunze-Towne",
        "sector": "Luxury",
        "siren": 194461061,
        "results": [
            2381,
            2382
        ]
    },
    {
        "id": 1193,
        "name": "Donnelly and Sons",
        "sector": "Services",
        "siren": 145161488,
        "results": [
            2383,
            2384
        ]
    },
    {
        "id": 1194,
        "name": "Schneider Inc",
        "sector": "Retail",
        "siren": 164176868,
        "results": [
            2385,
            2386
        ]
    },
    {
        "id": 1195,
        "name": "Collins-Pfannerstill",
        "sector": "Retail",
        "siren": 179486766,
        "results": [
            2387,
            2388
        ]
    },
    {
        "id": 1196,
        "name": "Huel-Bernhard",
        "sector": "Services",
        "siren": 131003782,
        "results": [
            2389,
            2390
        ]
    },
    {
        "id": 1197,
        "name": "Yost-Ullrich",
        "sector": "Energy",
        "siren": 188847833,
        "results": [
            2391,
            2392
        ]
    },
    {
        "id": 1198,
        "name": "McCullough, Spinka and Miller",
        "sector": "Energy",
        "siren": 199981161,
        "results": [
            2393,
            2394
        ]
    },
    {
        "id": 1199,
        "name": "Hilpert, Veum and Donnelly",
        "sector": "Services",
        "siren": 160977920,
        "results": [
            2395,
            2396
        ]
    },
    {
        "id": 1200,
        "name": "Kutch LLC",
        "sector": "Electronic",
        "siren": 110094965,
        "results": [
            2397,
            2398
        ]
    },
    {
        "id": 1201,
        "name": "Muller-Volkman",
        "sector": "Energy",
        "siren": 144184638,
        "results": [
            2399,
            2400
        ]
    },
    {
        "id": 1202,
        "name": "Sawayn and Sons",
        "sector": "Energy",
        "siren": 131330675,
        "results": [
            2401,
            2402
        ]
    },
    {
        "id": 1203,
        "name": "Stehr-Hessel",
        "sector": "Retail",
        "siren": 191815148,
        "results": [
            2403,
            2404
        ]
    },
    {
        "id": 1204,
        "name": "O'Kon-Hermiston",
        "sector": "Services",
        "siren": 150529572,
        "results": [
            2405,
            2406
        ]
    },
    {
        "id": 1205,
        "name": "Stokes, Walter and Bode",
        "sector": "Electronic",
        "siren": 161617766,
        "results": [
            2407,
            2408
        ]
    },
    {
        "id": 1206,
        "name": "MacGyver and Sons",
        "sector": "Electronic",
        "siren": 107852119,
        "results": [
            2409,
            2410
        ]
    },
    {
        "id": 1207,
        "name": "Reichert LLC",
        "sector": "Energy",
        "siren": 111533385,
        "results": [
            2411,
            2412
        ]
    },
    {
        "id": 1208,
        "name": "Ernser, Gleichner and Hane",
        "sector": "Services",
        "siren": 138679184,
        "results": [
            2413,
            2414
        ]
    },
    {
        "id": 1209,
        "name": "Bauch, Stiedemann and Bogisich",
        "sector": "Electronic",
        "siren": 115223293,
        "results": [
            2415,
            2416
        ]
    },
    {
        "id": 1210,
        "name": "Feest-Bogan",
        "sector": "Luxury",
        "siren": 159946640,
        "results": [
            2417,
            2418
        ]
    },
    {
        "id": 1211,
        "name": "Bauch-Rice",
        "sector": "Services",
        "siren": 104113426,
        "results": [
            2419,
            2420
        ]
    },
    {
        "id": 1212,
        "name": "Weissnat-Hermann",
        "sector": "Energy",
        "siren": 125243257,
        "results": [
            2421,
            2422
        ]
    },
    {
        "id": 1213,
        "name": "Boyer LLC",
        "sector": "Retail",
        "siren": 142415138,
        "results": [
            2423,
            2424
        ]
    },
    {
        "id": 1214,
        "name": "Schaden-Maggio",
        "sector": "Services",
        "siren": 148429613,
        "results": [
            2425,
            2426
        ]
    },
    {
        "id": 1215,
        "name": "Conroy, Kiehn and Bahringer",
        "sector": "Energy",
        "siren": 111224568,
        "results": [
            2427,
            2428
        ]
    },
    {
        "id": 1216,
        "name": "Dooley, Volkman and Thompson",
        "sector": "Services",
        "siren": 110179331,
        "results": [
            2429,
            2430
        ]
    },
    {
        "id": 1217,
        "name": "Hammes-Boyer",
        "sector": "Retail",
        "siren": 147649127,
        "results": [
            2431,
            2432
        ]
    },
    {
        "id": 1218,
        "name": "O'Reilly and Sons",
        "sector": "Retail",
        "siren": 196424074,
        "results": [
            2433,
            2434
        ]
    },
    {
        "id": 1219,
        "name": "Kuhic, Hagenes and Stehr",
        "sector": "Retail",
        "siren": 109863760,
        "results": [
            2435,
            2436
        ]
    },
    {
        "id": 1220,
        "name": "Braun-Hills",
        "sector": "Electronic",
        "siren": 178204654,
        "results": [
            2437,
            2438
        ]
    },
    {
        "id": 1221,
        "name": "O'Connell-Botsford",
        "sector": "Electronic",
        "siren": 150471122,
        "results": [
            2439,
            2440
        ]
    },
    {
        "id": 1222,
        "name": "Gusikowski Inc",
        "sector": "Services",
        "siren": 148012572,
        "results": [
            2441,
            2442
        ]
    },
    {
        "id": 1223,
        "name": "Homenick-Schulist",
        "sector": "Energy",
        "siren": 199417647,
        "results": [
            2443,
            2444
        ]
    },
    {
        "id": 1224,
        "name": "Mayert-Nader",
        "sector": "Electronic",
        "siren": 196578469,
        "results": [
            2445,
            2446
        ]
    },
    {
        "id": 1225,
        "name": "Kessler and Sons",
        "sector": "Retail",
        "siren": 161771017,
        "results": [
            2447,
            2448
        ]
    },
    {
        "id": 1226,
        "name": "Kohler Group",
        "sector": "Energy",
        "siren": 109223179,
        "results": [
            2449,
            2450
        ]
    },
    {
        "id": 1227,
        "name": "Cartwright, Langosh and Ratke",
        "sector": "Electronic",
        "siren": 148131215,
        "results": [
            2451,
            2452
        ]
    },
    {
        "id": 1228,
        "name": "Zieme-Littel",
        "sector": "Retail",
        "siren": 119585372,
        "results": [
            2453,
            2454
        ]
    },
    {
        "id": 1229,
        "name": "Jacobs-Romaguera",
        "sector": "Electronic",
        "siren": 161977766,
        "results": [
            2455,
            2456
        ]
    },
    {
        "id": 1230,
        "name": "Johnson, Ferry and Bailey",
        "sector": "Retail",
        "siren": 186288766,
        "results": [
            2457,
            2458
        ]
    },
    {
        "id": 1231,
        "name": "Abbott, Jacobson and Kessler",
        "sector": "Energy",
        "siren": 190068556,
        "results": [
            2459,
            2460
        ]
    },
    {
        "id": 1232,
        "name": "Fisher Group",
        "sector": "Services",
        "siren": 177894686,
        "results": [
            2461,
            2462
        ]
    },
    {
        "id": 1233,
        "name": "Weimann-Wuckert",
        "sector": "Retail",
        "siren": 161472408,
        "results": [
            2463,
            2464
        ]
    },
    {
        "id": 1234,
        "name": "West LLC",
        "sector": "Energy",
        "siren": 190837968,
        "results": [
            2465,
            2466
        ]
    },
    {
        "id": 1235,
        "name": "Gottlieb-Ondricka",
        "sector": "Electronic",
        "siren": 190862988,
        "results": [
            2467,
            2468
        ]
    },
    {
        "id": 1236,
        "name": "Roob Inc",
        "sector": "Luxury",
        "siren": 101958734,
        "results": [
            2469,
            2470
        ]
    },
    {
        "id": 1237,
        "name": "Morissette and Sons",
        "sector": "Retail",
        "siren": 167669722,
        "results": [
            2471,
            2472
        ]
    },
    {
        "id": 1238,
        "name": "Zemlak-Connelly",
        "sector": "Luxury",
        "siren": 104649344,
        "results": [
            2473,
            2474
        ]
    },
    {
        "id": 1239,
        "name": "Johnson-Jakubowski",
        "sector": "Luxury",
        "siren": 192817456,
        "results": [
            2475,
            2476
        ]
    },
    {
        "id": 1240,
        "name": "Volkman-Kovacek",
        "sector": "Luxury",
        "siren": 117895725,
        "results": [
            2477,
            2478
        ]
    },
    {
        "id": 1241,
        "name": "Tillman, Skiles and Hilpert",
        "sector": "Energy",
        "siren": 117107520,
        "results": [
            2479,
            2480
        ]
    },
    {
        "id": 1242,
        "name": "Kub-Daniel",
        "sector": "Services",
        "siren": 106341027,
        "results": [
            2481,
            2482
        ]
    },
    {
        "id": 1243,
        "name": "Kohler-Dickinson",
        "sector": "Luxury",
        "siren": 187328834,
        "results": [
            2483,
            2484
        ]
    },
    {
        "id": 1244,
        "name": "Carter, Hermann and Abbott",
        "sector": "Energy",
        "siren": 118248539,
        "results": [
            2485,
            2486
        ]
    },
    {
        "id": 1245,
        "name": "Pfeffer Inc",
        "sector": "Energy",
        "siren": 196877153,
        "results": [
            2487,
            2488
        ]
    },
    {
        "id": 1246,
        "name": "Bernier-Trantow",
        "sector": "Luxury",
        "siren": 144677992,
        "results": [
            2489,
            2490
        ]
    },
    {
        "id": 1247,
        "name": "Spinka LLC",
        "sector": "Luxury",
        "siren": 116843327,
        "results": [
            2491,
            2492
        ]
    },
    {
        "id": 1248,
        "name": "Walsh, Runolfsdottir and Kilback",
        "sector": "Luxury",
        "siren": 124931602,
        "results": [
            2493,
            2494
        ]
    },
    {
        "id": 1249,
        "name": "Kreiger Group",
        "sector": "Electronic",
        "siren": 172446196,
        "results": [
            2495,
            2496
        ]
    },
    {
        "id": 1250,
        "name": "Legros-Quigley",
        "sector": "Energy",
        "siren": 189491425,
        "results": [
            2497,
            2498
        ]
    },
    {
        "id": 1251,
        "name": "Stracke, Feeney and Schmeler",
        "sector": "Retail",
        "siren": 172260753,
        "results": [
            2499,
            2500
        ]
    },
    {
        "id": 1252,
        "name": "Gibson-Lynch",
        "sector": "Luxury",
        "siren": 131306836,
        "results": [
            2501,
            2502
        ]
    },
    {
        "id": 1253,
        "name": "Reichel-Torp",
        "sector": "Services",
        "siren": 138938680,
        "results": [
            2503,
            2504
        ]
    },
    {
        "id": 1254,
        "name": "Deckow-Herman",
        "sector": "Energy",
        "siren": 145463778,
        "results": [
            2505,
            2506
        ]
    },
    {
        "id": 1255,
        "name": "Ondricka Inc",
        "sector": "Retail",
        "siren": 114106817,
        "results": [
            2507,
            2508
        ]
    },
    {
        "id": 1256,
        "name": "Kassulke Group",
        "sector": "Services",
        "siren": 125326583,
        "results": [
            2509,
            2510
        ]
    },
    {
        "id": 1257,
        "name": "Gutkowski and Sons",
        "sector": "Luxury",
        "siren": 194518065,
        "results": [
            2511,
            2512
        ]
    },
    {
        "id": 1258,
        "name": "Brekke Inc",
        "sector": "Luxury",
        "siren": 144810441,
        "results": [
            2513,
            2514
        ]
    },
    {
        "id": 1259,
        "name": "Sanford, Abbott and Doyle",
        "sector": "Luxury",
        "siren": 109581460,
        "results": [
            2515,
            2516
        ]
    },
    {
        "id": 1260,
        "name": "Terry, Watsica and Marks",
        "sector": "Services",
        "siren": 163369130,
        "results": [
            2517,
            2518
        ]
    },
    {
        "id": 1261,
        "name": "Windler, Beer and Reichert",
        "sector": "Energy",
        "siren": 162705486,
        "results": [
            2519,
            2520
        ]
    },
    {
        "id": 1262,
        "name": "Quigley Inc",
        "sector": "Services",
        "siren": 171902083,
        "results": [
            2521,
            2522
        ]
    },
    {
        "id": 1263,
        "name": "Kub and Sons",
        "sector": "Retail",
        "siren": 133035315,
        "results": [
            2523,
            2524
        ]
    },
    {
        "id": 1264,
        "name": "Kutch LLC",
        "sector": "Services",
        "siren": 143661189,
        "results": [
            2525,
            2526
        ]
    },
    {
        "id": 1265,
        "name": "Doyle, Batz and Stoltenberg",
        "sector": "Luxury",
        "siren": 187532589,
        "results": [
            2527,
            2528
        ]
    },
    {
        "id": 1266,
        "name": "Goyette and Sons",
        "sector": "Energy",
        "siren": 199540783,
        "results": [
            2529,
            2530
        ]
    },
    {
        "id": 1267,
        "name": "Windler Inc",
        "sector": "Services",
        "siren": 178765604,
        "results": [
            2531,
            2532
        ]
    },
    {
        "id": 1268,
        "name": "Dicki Group",
        "sector": "Retail",
        "siren": 116237749,
        "results": [
            2533,
            2534
        ]
    },
    {
        "id": 1269,
        "name": "Quitzon and Sons",
        "sector": "Luxury",
        "siren": 125672275,
        "results": [
            2535,
            2536
        ]
    },
    {
        "id": 1270,
        "name": "Steuber-Metz",
        "sector": "Retail",
        "siren": 184946759,
        "results": [
            2537,
            2538
        ]
    },
    {
        "id": 1271,
        "name": "Larson and Sons",
        "sector": "Energy",
        "siren": 160194912,
        "results": [
            2539,
            2540
        ]
    },
    {
        "id": 1272,
        "name": "Bernier Inc",
        "sector": "Electronic",
        "siren": 118680509,
        "results": [
            2541,
            2542
        ]
    },
    {
        "id": 1273,
        "name": "Deckow and Sons",
        "sector": "Electronic",
        "siren": 167104227,
        "results": [
            2543,
            2544
        ]
    },
    {
        "id": 1274,
        "name": "Harris and Sons",
        "sector": "Energy",
        "siren": 128610634,
        "results": [
            2545,
            2546
        ]
    },
    {
        "id": 1275,
        "name": "Medhurst and Sons",
        "sector": "Luxury",
        "siren": 102925161,
        "results": [
            2547,
            2548
        ]
    },
    {
        "id": 1276,
        "name": "Nader-Marks",
        "sector": "Luxury",
        "siren": 191120490,
        "results": [
            2549,
            2550
        ]
    },
    {
        "id": 1277,
        "name": "Harris, O'Conner and Rodriguez",
        "sector": "Retail",
        "siren": 153285638,
        "results": [
            2551,
            2552
        ]
    },
    {
        "id": 1278,
        "name": "Emard-Wisoky",
        "sector": "Luxury",
        "siren": 131865937,
        "results": [
            2553,
            2554
        ]
    },
    {
        "id": 1279,
        "name": "Gleichner-Buckridge",
        "sector": "Electronic",
        "siren": 142254757,
        "results": [
            2555,
            2556
        ]
    },
    {
        "id": 1280,
        "name": "Stroman, Durgan and Schuster",
        "sector": "Electronic",
        "siren": 186553896,
        "results": [
            2557,
            2558
        ]
    },
    {
        "id": 1281,
        "name": "Bahringer-Beer",
        "sector": "Electronic",
        "siren": 155909003,
        "results": [
            2559,
            2560
        ]
    },
    {
        "id": 1282,
        "name": "Ankunding Group",
        "sector": "Services",
        "siren": 146522165,
        "results": [
            2561,
            2562
        ]
    },
    {
        "id": 1283,
        "name": "Bailey and Sons",
        "sector": "Retail",
        "siren": 116912814,
        "results": [
            2563,
            2564
        ]
    },
    {
        "id": 1284,
        "name": "Stiedemann Group",
        "sector": "Services",
        "siren": 138130435,
        "results": [
            2565,
            2566
        ]
    },
    {
        "id": 1285,
        "name": "VonRueden, Stokes and Hammes",
        "sector": "Services",
        "siren": 136246184,
        "results": [
            2567,
            2568
        ]
    },
    {
        "id": 1286,
        "name": "Cole, Schuppe and Nolan",
        "sector": "Energy",
        "siren": 126595826,
        "results": [
            2569,
            2570
        ]
    },
    {
        "id": 1287,
        "name": "Gerlach-Haley",
        "sector": "Energy",
        "siren": 140145973,
        "results": [
            2571,
            2572
        ]
    },
    {
        "id": 1288,
        "name": "Nader-Feest",
        "sector": "Energy",
        "siren": 142651328,
        "results": [
            2573,
            2574
        ]
    },
    {
        "id": 1289,
        "name": "Barrows-Fahey",
        "sector": "Luxury",
        "siren": 197267187,
        "results": [
            2575,
            2576
        ]
    },
    {
        "id": 1290,
        "name": "Botsford, Corkery and Zboncak",
        "sector": "Retail",
        "siren": 156360441,
        "results": [
            2577,
            2578
        ]
    },
    {
        "id": 1291,
        "name": "Davis LLC",
        "sector": "Luxury",
        "siren": 187427886,
        "results": [
            2579,
            2580
        ]
    },
    {
        "id": 1292,
        "name": "Sawayn Inc",
        "sector": "Retail",
        "siren": 199558391,
        "results": [
            2581,
            2582
        ]
    },
    {
        "id": 1293,
        "name": "Pollich LLC",
        "sector": "Services",
        "siren": 131071003,
        "results": [
            2583,
            2584
        ]
    },
    {
        "id": 1294,
        "name": "Nader, Heathcote and Beier",
        "sector": "Retail",
        "siren": 163154696,
        "results": [
            2585,
            2586
        ]
    },
    {
        "id": 1295,
        "name": "Hauck-Kutch",
        "sector": "Retail",
        "siren": 151613004,
        "results": [
            2587,
            2588
        ]
    },
    {
        "id": 1296,
        "name": "Denesik LLC",
        "sector": "Retail",
        "siren": 103479498,
        "results": [
            2589,
            2590
        ]
    },
    {
        "id": 1297,
        "name": "Jast Group",
        "sector": "Energy",
        "siren": 143432110,
        "results": [
            2591,
            2592
        ]
    },
    {
        "id": 1298,
        "name": "Larkin, Durgan and Franecki",
        "sector": "Electronic",
        "siren": 116000875,
        "results": [
            2593,
            2594
        ]
    },
    {
        "id": 1299,
        "name": "Erdman, Breitenberg and Streich",
        "sector": "Electronic",
        "siren": 159175169,
        "results": [
            2595,
            2596
        ]
    },
    {
        "id": 1300,
        "name": "Feest-Batz",
        "sector": "Electronic",
        "siren": 164860406,
        "results": [
            2597,
            2598
        ]
    },
    {
        "id": 1301,
        "name": "Mayer Inc",
        "sector": "Energy",
        "siren": 101482936,
        "results": [
            2599,
            2600
        ]
    },
    {
        "id": 1302,
        "name": "Balistreri, Will and Walker",
        "sector": "Retail",
        "siren": 161501031,
        "results": [
            2601,
            2602
        ]
    },
    {
        "id": 1303,
        "name": "Rau, Yundt and Bergstrom",
        "sector": "Energy",
        "siren": 192338635,
        "results": [
            2603,
            2604
        ]
    },
    {
        "id": 1304,
        "name": "Howell, Littel and Shanahan",
        "sector": "Luxury",
        "siren": 153414397,
        "results": [
            2605,
            2606
        ]
    },
    {
        "id": 1305,
        "name": "Steuber, Thompson and Toy",
        "sector": "Services",
        "siren": 123940721,
        "results": [
            2607,
            2608
        ]
    },
    {
        "id": 1306,
        "name": "Olson-Jakubowski",
        "sector": "Electronic",
        "siren": 167690862,
        "results": [
            2609,
            2610
        ]
    },
    {
        "id": 1307,
        "name": "Rowe, Ziemann and Wintheiser",
        "sector": "Luxury",
        "siren": 184418505,
        "results": [
            2611,
            2612
        ]
    },
    {
        "id": 1308,
        "name": "McKenzie-Waters",
        "sector": "Retail",
        "siren": 100313670,
        "results": [
            2613,
            2614
        ]
    },
    {
        "id": 1309,
        "name": "Breitenberg, Emard and Schiller",
        "sector": "Energy",
        "siren": 182874115,
        "results": [
            2615,
            2616
        ]
    },
    {
        "id": 1310,
        "name": "Reichel and Sons",
        "sector": "Electronic",
        "siren": 162185639,
        "results": [
            2617,
            2618
        ]
    },
    {
        "id": 1311,
        "name": "Botsford LLC",
        "sector": "Energy",
        "siren": 108406570,
        "results": [
            2619,
            2620
        ]
    },
    {
        "id": 1312,
        "name": "Hilpert LLC",
        "sector": "Electronic",
        "siren": 192146857,
        "results": [
            2621,
            2622
        ]
    },
    {
        "id": 1313,
        "name": "Fritsch, Hahn and Veum",
        "sector": "Energy",
        "siren": 106505507,
        "results": [
            2623,
            2624
        ]
    },
    {
        "id": 1314,
        "name": "Prosacco-Wiza",
        "sector": "Retail",
        "siren": 189019628,
        "results": [
            2625,
            2626
        ]
    },
    {
        "id": 1315,
        "name": "Turner, Kovacek and Osinski",
        "sector": "Electronic",
        "siren": 136565825,
        "results": [
            2627,
            2628
        ]
    },
    {
        "id": 1316,
        "name": "Feeney, Homenick and Anderson",
        "sector": "Services",
        "siren": 160773085,
        "results": [
            2629,
            2630
        ]
    },
    {
        "id": 1317,
        "name": "Wuckert LLC",
        "sector": "Retail",
        "siren": 185956961,
        "results": [
            2631,
            2632
        ]
    },
    {
        "id": 1318,
        "name": "Schamberger, Schuppe and Marks",
        "sector": "Services",
        "siren": 152638843,
        "results": [
            2633,
            2634
        ]
    },
    {
        "id": 1319,
        "name": "Kuphal-Kovacek",
        "sector": "Luxury",
        "siren": 165732658,
        "results": [
            2635,
            2636
        ]
    },
    {
        "id": 1320,
        "name": "Paucek Group",
        "sector": "Luxury",
        "siren": 119495081,
        "results": [
            2637,
            2638
        ]
    },
    {
        "id": 1321,
        "name": "MacGyver-Hintz",
        "sector": "Electronic",
        "siren": 117496732,
        "results": [
            2639,
            2640
        ]
    },
    {
        "id": 1322,
        "name": "Ratke and Sons",
        "sector": "Energy",
        "siren": 170431877,
        "results": [
            2641,
            2642
        ]
    },
    {
        "id": 1323,
        "name": "Brekke, Greenfelder and Hills",
        "sector": "Energy",
        "siren": 151517029,
        "results": [
            2643,
            2644
        ]
    },
    {
        "id": 1324,
        "name": "Kirlin Group",
        "sector": "Retail",
        "siren": 119879668,
        "results": [
            2645,
            2646
        ]
    },
    {
        "id": 1325,
        "name": "Strosin, Wunsch and Kerluke",
        "sector": "Electronic",
        "siren": 106238133,
        "results": [
            2647,
            2648
        ]
    },
    {
        "id": 1326,
        "name": "Barton, Pollich and Gaylord",
        "sector": "Electronic",
        "siren": 122325130,
        "results": [
            2649,
            2650
        ]
    },
    {
        "id": 1327,
        "name": "Marks-Rolfson",
        "sector": "Luxury",
        "siren": 114187547,
        "results": [
            2651,
            2652
        ]
    },
    {
        "id": 1328,
        "name": "Ferry Inc",
        "sector": "Luxury",
        "siren": 146000588,
        "results": [
            2653,
            2654
        ]
    },
    {
        "id": 1329,
        "name": "Jones-Wuckert",
        "sector": "Services",
        "siren": 199815719,
        "results": [
            2655,
            2656
        ]
    },
    {
        "id": 1330,
        "name": "Schuster-Pouros",
        "sector": "Energy",
        "siren": 123345367,
        "results": [
            2657,
            2658
        ]
    },
    {
        "id": 1331,
        "name": "Reilly Group",
        "sector": "Energy",
        "siren": 195257069,
        "results": [
            2659,
            2660
        ]
    },
    {
        "id": 1332,
        "name": "Swift-Schmeler",
        "sector": "Luxury",
        "siren": 159163298,
        "results": [
            2661,
            2662
        ]
    },
    {
        "id": 1333,
        "name": "Frami, Kassulke and Williamson",
        "sector": "Luxury",
        "siren": 119389057,
        "results": [
            2663,
            2664
        ]
    },
    {
        "id": 1334,
        "name": "Goldner-Ondricka",
        "sector": "Retail",
        "siren": 175911534,
        "results": [
            2665,
            2666
        ]
    },
    {
        "id": 1335,
        "name": "O'Hara LLC",
        "sector": "Luxury",
        "siren": 138708659,
        "results": [
            2667,
            2668
        ]
    },
    {
        "id": 1336,
        "name": "Raynor, Gibson and Schaden",
        "sector": "Retail",
        "siren": 132489467,
        "results": [
            2669,
            2670
        ]
    },
    {
        "id": 1337,
        "name": "Konopelski-Parisian",
        "sector": "Electronic",
        "siren": 125596906,
        "results": [
            2671,
            2672
        ]
    },
    {
        "id": 1338,
        "name": "Bergstrom-Bayer",
        "sector": "Retail",
        "siren": 172596887,
        "results": [
            2673,
            2674
        ]
    },
    {
        "id": 1339,
        "name": "Gutmann-Wintheiser",
        "sector": "Electronic",
        "siren": 136870795,
        "results": [
            2675,
            2676
        ]
    },
    {
        "id": 1340,
        "name": "Ruecker Inc",
        "sector": "Energy",
        "siren": 107771540,
        "results": [
            2677,
            2678
        ]
    },
    {
        "id": 1341,
        "name": "Schowalter and Sons",
        "sector": "Electronic",
        "siren": 104892063,
        "results": [
            2679,
            2680
        ]
    },
    {
        "id": 1342,
        "name": "Weimann Inc",
        "sector": "Electronic",
        "siren": 115032180,
        "results": [
            2681,
            2682
        ]
    },
    {
        "id": 1343,
        "name": "Fay-Wolf",
        "sector": "Retail",
        "siren": 152912420,
        "results": [
            2683,
            2684
        ]
    },
    {
        "id": 1344,
        "name": "Jakubowski, Tillman and Hamill",
        "sector": "Energy",
        "siren": 186447593,
        "results": [
            2685,
            2686
        ]
    },
    {
        "id": 1345,
        "name": "Green and Sons",
        "sector": "Electronic",
        "siren": 119660051,
        "results": [
            2687,
            2688
        ]
    },
    {
        "id": 1346,
        "name": "Schumm-Kirlin",
        "sector": "Luxury",
        "siren": 108906276,
        "results": [
            2689,
            2690
        ]
    },
    {
        "id": 1347,
        "name": "Waelchi Inc",
        "sector": "Luxury",
        "siren": 150114349,
        "results": [
            2691,
            2692
        ]
    },
    {
        "id": 1348,
        "name": "Rodriguez, Morissette and Runolfsson",
        "sector": "Services",
        "siren": 178558625,
        "results": [
            2693,
            2694
        ]
    },
    {
        "id": 1349,
        "name": "Mosciski, O'Keefe and Beier",
        "sector": "Luxury",
        "siren": 181047279,
        "results": [
            2695,
            2696
        ]
    },
    {
        "id": 1350,
        "name": "Ankunding-Hansen",
        "sector": "Energy",
        "siren": 198569365,
        "results": [
            2697,
            2698
        ]
    },
    {
        "id": 1351,
        "name": "Considine, Ullrich and Beatty",
        "sector": "Energy",
        "siren": 167785468,
        "results": [
            2699,
            2700
        ]
    },
    {
        "id": 1352,
        "name": "Macejkovic, Barton and Purdy",
        "sector": "Energy",
        "siren": 158559600,
        "results": [
            2701,
            2702
        ]
    },
    {
        "id": 1353,
        "name": "Kshlerin Inc",
        "sector": "Retail",
        "siren": 164045216,
        "results": [
            2703,
            2704
        ]
    },
    {
        "id": 1354,
        "name": "Schuster-Vandervort",
        "sector": "Retail",
        "siren": 183312705,
        "results": [
            2705,
            2706
        ]
    },
    {
        "id": 1355,
        "name": "Steuber, Marvin and Balistreri",
        "sector": "Services",
        "siren": 184552006,
        "results": [
            2707,
            2708
        ]
    },
    {
        "id": 1356,
        "name": "Kuvalis LLC",
        "sector": "Electronic",
        "siren": 107252195,
        "results": [
            2709,
            2710
        ]
    },
    {
        "id": 1357,
        "name": "Hegmann-Murazik",
        "sector": "Luxury",
        "siren": 162358868,
        "results": [
            2711,
            2712
        ]
    },
    {
        "id": 1358,
        "name": "Lebsack, Weissnat and Marquardt",
        "sector": "Services",
        "siren": 130350712,
        "results": [
            2713,
            2714
        ]
    },
    {
        "id": 1359,
        "name": "Schulist, Auer and Eichmann",
        "sector": "Electronic",
        "siren": 173544794,
        "results": [
            2715,
            2716
        ]
    },
    {
        "id": 1360,
        "name": "Wehner Inc",
        "sector": "Electronic",
        "siren": 193306137,
        "results": [
            2717,
            2718
        ]
    },
    {
        "id": 1361,
        "name": "Feest LLC",
        "sector": "Energy",
        "siren": 148619127,
        "results": [
            2719,
            2720
        ]
    },
    {
        "id": 1362,
        "name": "Stroman, Bauch and McKenzie",
        "sector": "Electronic",
        "siren": 111498818,
        "results": [
            2721,
            2722
        ]
    },
    {
        "id": 1363,
        "name": "Greenfelder-Olson",
        "sector": "Luxury",
        "siren": 186018493,
        "results": [
            2723,
            2724
        ]
    },
    {
        "id": 1364,
        "name": "Brown, Monahan and Hintz",
        "sector": "Energy",
        "siren": 124558272,
        "results": [
            2725,
            2726
        ]
    },
    {
        "id": 1365,
        "name": "Runolfsson, Jenkins and Carter",
        "sector": "Energy",
        "siren": 163601798,
        "results": [
            2727,
            2728
        ]
    },
    {
        "id": 1366,
        "name": "Hahn, Gleichner and Bechtelar",
        "sector": "Electronic",
        "siren": 195222821,
        "results": [
            2729,
            2730
        ]
    },
    {
        "id": 1367,
        "name": "Roberts-Stracke",
        "sector": "Electronic",
        "siren": 175690581,
        "results": [
            2731,
            2732
        ]
    },
    {
        "id": 1368,
        "name": "Stehr, Wisoky and Carroll",
        "sector": "Retail",
        "siren": 180337425,
        "results": [
            2733,
            2734
        ]
    },
    {
        "id": 1369,
        "name": "Feeney, Larkin and Bailey",
        "sector": "Energy",
        "siren": 191843405,
        "results": [
            2735,
            2736
        ]
    },
    {
        "id": 1370,
        "name": "Wunsch-Kub",
        "sector": "Energy",
        "siren": 114733505,
        "results": [
            2737,
            2738
        ]
    },
    {
        "id": 1371,
        "name": "Prosacco and Sons",
        "sector": "Electronic",
        "siren": 107733229,
        "results": [
            2739,
            2740
        ]
    },
    {
        "id": 1372,
        "name": "Wuckert-Spinka",
        "sector": "Energy",
        "siren": 142809805,
        "results": [
            2741,
            2742
        ]
    },
    {
        "id": 1373,
        "name": "Fritsch, Haley and Wuckert",
        "sector": "Retail",
        "siren": 160133554,
        "results": [
            2743,
            2744
        ]
    },
    {
        "id": 1374,
        "name": "Jaskolski and Sons",
        "sector": "Retail",
        "siren": 182186809,
        "results": [
            2745,
            2746
        ]
    },
    {
        "id": 1375,
        "name": "Beer, Reynolds and Altenwerth",
        "sector": "Services",
        "siren": 166645816,
        "results": [
            2747,
            2748
        ]
    },
    {
        "id": 1376,
        "name": "Jacobs-Fay",
        "sector": "Retail",
        "siren": 187905465,
        "results": [
            2749,
            2750
        ]
    },
    {
        "id": 1377,
        "name": "Lynch, Volkman and Mayert",
        "sector": "Electronic",
        "siren": 167643726,
        "results": [
            2751,
            2752
        ]
    },
    {
        "id": 1378,
        "name": "Goodwin-Stoltenberg",
        "sector": "Luxury",
        "siren": 115979485,
        "results": [
            2753,
            2754
        ]
    },
    {
        "id": 1379,
        "name": "Turner-Stracke",
        "sector": "Electronic",
        "siren": 100650646,
        "results": [
            2755,
            2756
        ]
    },
    {
        "id": 1380,
        "name": "Ebert, Emmerich and Thompson",
        "sector": "Retail",
        "siren": 115340847,
        "results": [
            2757,
            2758
        ]
    },
    {
        "id": 1381,
        "name": "Rau, Block and Friesen",
        "sector": "Retail",
        "siren": 122048074,
        "results": [
            2759,
            2760
        ]
    },
    {
        "id": 1382,
        "name": "Stanton Inc",
        "sector": "Luxury",
        "siren": 191782204,
        "results": [
            2761,
            2762
        ]
    },
    {
        "id": 1383,
        "name": "Braun LLC",
        "sector": "Luxury",
        "siren": 113043006,
        "results": [
            2763,
            2764
        ]
    },
    {
        "id": 1384,
        "name": "Ankunding, Wolff and Ferry",
        "sector": "Luxury",
        "siren": 146431624,
        "results": [
            2765,
            2766
        ]
    },
    {
        "id": 1385,
        "name": "Kertzmann Group",
        "sector": "Luxury",
        "siren": 161802172,
        "results": [
            2767,
            2768
        ]
    },
    {
        "id": 1386,
        "name": "Cartwright Group",
        "sector": "Energy",
        "siren": 194116781,
        "results": [
            2769,
            2770
        ]
    },
    {
        "id": 1387,
        "name": "Hodkiewicz, Prohaska and Mueller",
        "sector": "Retail",
        "siren": 113021215,
        "results": [
            2771,
            2772
        ]
    },
    {
        "id": 1388,
        "name": "Lang-Borer",
        "sector": "Energy",
        "siren": 132031123,
        "results": [
            2773,
            2774
        ]
    },
    {
        "id": 1389,
        "name": "Terry Inc",
        "sector": "Energy",
        "siren": 158816796,
        "results": [
            2775,
            2776
        ]
    },
    {
        "id": 1390,
        "name": "Kilback, White and Kuhn",
        "sector": "Retail",
        "siren": 195265239,
        "results": [
            2777,
            2778
        ]
    },
    {
        "id": 1391,
        "name": "Kozey, Dare and Wolff",
        "sector": "Luxury",
        "siren": 188745517,
        "results": [
            2779,
            2780
        ]
    },
    {
        "id": 1392,
        "name": "Sporer-Zemlak",
        "sector": "Luxury",
        "siren": 161108543,
        "results": [
            2781,
            2782
        ]
    },
    {
        "id": 1393,
        "name": "Crooks, Nolan and Monahan",
        "sector": "Services",
        "siren": 143702778,
        "results": [
            2783,
            2784
        ]
    },
    {
        "id": 1394,
        "name": "Miller and Sons",
        "sector": "Luxury",
        "siren": 104496126,
        "results": [
            2785,
            2786
        ]
    },
    {
        "id": 1395,
        "name": "Kertzmann-Greenholt",
        "sector": "Electronic",
        "siren": 195850715,
        "results": [
            2787,
            2788
        ]
    },
    {
        "id": 1396,
        "name": "Jones Inc",
        "sector": "Services",
        "siren": 182091222,
        "results": [
            2789,
            2790
        ]
    },
    {
        "id": 1397,
        "name": "Green, Harvey and Johns",
        "sector": "Energy",
        "siren": 156317095,
        "results": [
            2791,
            2792
        ]
    },
    {
        "id": 1398,
        "name": "Wunsch-Mante",
        "sector": "Energy",
        "siren": 142459232,
        "results": [
            2793,
            2794
        ]
    },
    {
        "id": 1399,
        "name": "Graham-Swaniawski",
        "sector": "Energy",
        "siren": 190807753,
        "results": [
            2795,
            2796
        ]
    },
    {
        "id": 1400,
        "name": "Ferry, Fritsch and Fadel",
        "sector": "Energy",
        "siren": 161226595,
        "results": [
            2797,
            2798
        ]
    },
    {
        "id": 1401,
        "name": "Marks-Dicki",
        "sector": "Energy",
        "siren": 166825502,
        "results": [
            2799,
            2800
        ]
    },
    {
        "id": 1402,
        "name": "Price and Sons",
        "sector": "Retail",
        "siren": 125486381,
        "results": [
            2801,
            2802
        ]
    },
    {
        "id": 1403,
        "name": "Rutherford-Pouros",
        "sector": "Energy",
        "siren": 193019462,
        "results": [
            2803,
            2804
        ]
    },
    {
        "id": 1404,
        "name": "Walter-Mohr",
        "sector": "Electronic",
        "siren": 113458358,
        "results": [
            2805,
            2806
        ]
    },
    {
        "id": 1405,
        "name": "McKenzie LLC",
        "sector": "Luxury",
        "siren": 112664870,
        "results": [
            2807,
            2808
        ]
    },
    {
        "id": 1406,
        "name": "Miller, Pacocha and Bechtelar",
        "sector": "Electronic",
        "siren": 108443710,
        "results": [
            2809,
            2810
        ]
    },
    {
        "id": 1407,
        "name": "Corkery and Sons",
        "sector": "Luxury",
        "siren": 178465657,
        "results": [
            2811,
            2812
        ]
    },
    {
        "id": 1408,
        "name": "Halvorson, Bernier and Hammes",
        "sector": "Electronic",
        "siren": 122900550,
        "results": [
            2813,
            2814
        ]
    },
    {
        "id": 1409,
        "name": "Wiegand-Dickens",
        "sector": "Services",
        "siren": 143579372,
        "results": [
            2815,
            2816
        ]
    },
    {
        "id": 1410,
        "name": "Torp Inc",
        "sector": "Energy",
        "siren": 189725524,
        "results": [
            2817,
            2818
        ]
    },
    {
        "id": 1411,
        "name": "Daugherty LLC",
        "sector": "Electronic",
        "siren": 128217325,
        "results": [
            2819,
            2820
        ]
    },
    {
        "id": 1412,
        "name": "Ledner, Kulas and Howe",
        "sector": "Retail",
        "siren": 178754669,
        "results": [
            2821,
            2822
        ]
    },
    {
        "id": 1413,
        "name": "Cummerata-Pacocha",
        "sector": "Electronic",
        "siren": 139964584,
        "results": [
            2823,
            2824
        ]
    },
    {
        "id": 1414,
        "name": "Buckridge, Hoppe and Pouros",
        "sector": "Services",
        "siren": 181577867,
        "results": [
            2825,
            2826
        ]
    },
    {
        "id": 1415,
        "name": "Yost, Hauck and Crist",
        "sector": "Services",
        "siren": 136140105,
        "results": [
            2827,
            2828
        ]
    },
    {
        "id": 1416,
        "name": "Emard, Gottlieb and Erdman",
        "sector": "Services",
        "siren": 197348760,
        "results": [
            2829,
            2830
        ]
    },
    {
        "id": 1417,
        "name": "Legros-Grant",
        "sector": "Luxury",
        "siren": 111581904,
        "results": [
            2831,
            2832
        ]
    },
    {
        "id": 1418,
        "name": "Donnelly and Sons",
        "sector": "Luxury",
        "siren": 191402137,
        "results": [
            2833,
            2834
        ]
    },
    {
        "id": 1419,
        "name": "McDermott Inc",
        "sector": "Luxury",
        "siren": 128440199,
        "results": [
            2835,
            2836
        ]
    },
    {
        "id": 1420,
        "name": "Gutmann-Buckridge",
        "sector": "Energy",
        "siren": 155312193,
        "results": [
            2837,
            2838
        ]
    },
    {
        "id": 1421,
        "name": "Murray LLC",
        "sector": "Electronic",
        "siren": 167238818,
        "results": [
            2839,
            2840
        ]
    },
    {
        "id": 1422,
        "name": "O'Conner Group",
        "sector": "Services",
        "siren": 112907980,
        "results": [
            2841,
            2842
        ]
    },
    {
        "id": 1423,
        "name": "Kassulke, Hahn and Turner",
        "sector": "Electronic",
        "siren": 183456129,
        "results": [
            2843,
            2844
        ]
    },
    {
        "id": 1424,
        "name": "Stanton-Kirlin",
        "sector": "Electronic",
        "siren": 193551149,
        "results": [
            2845,
            2846
        ]
    },
    {
        "id": 1425,
        "name": "Bergstrom-Botsford",
        "sector": "Energy",
        "siren": 192063048,
        "results": [
            2847,
            2848
        ]
    },
    {
        "id": 1426,
        "name": "Feest Inc",
        "sector": "Electronic",
        "siren": 171639217,
        "results": [
            2849,
            2850
        ]
    },
    {
        "id": 1427,
        "name": "Gibson and Sons",
        "sector": "Electronic",
        "siren": 141394359,
        "results": [
            2851,
            2852
        ]
    },
    {
        "id": 1428,
        "name": "McClure, Doyle and Lemke",
        "sector": "Services",
        "siren": 185255508,
        "results": [
            2853,
            2854
        ]
    },
    {
        "id": 1429,
        "name": "Koelpin-Schuster",
        "sector": "Services",
        "siren": 129367452,
        "results": [
            2855,
            2856
        ]
    },
    {
        "id": 1430,
        "name": "Blick Group",
        "sector": "Retail",
        "siren": 109638278,
        "results": [
            2857,
            2858
        ]
    },
    {
        "id": 1431,
        "name": "Thompson, Wiza and Bergstrom",
        "sector": "Services",
        "siren": 122984303,
        "results": [
            2859,
            2860
        ]
    },
    {
        "id": 1432,
        "name": "Dickinson-Hauck",
        "sector": "Electronic",
        "siren": 118582382,
        "results": [
            2861,
            2862
        ]
    },
    {
        "id": 1433,
        "name": "Connelly-Emmerich",
        "sector": "Services",
        "siren": 113938988,
        "results": [
            2863,
            2864
        ]
    },
    {
        "id": 1434,
        "name": "Mohr-Willms",
        "sector": "Energy",
        "siren": 187522743,
        "results": [
            2865,
            2866
        ]
    },
    {
        "id": 1435,
        "name": "Kiehn and Sons",
        "sector": "Services",
        "siren": 158676324,
        "results": [
            2867,
            2868
        ]
    },
    {
        "id": 1436,
        "name": "Strosin-Nienow",
        "sector": "Energy",
        "siren": 107572331,
        "results": [
            2869,
            2870
        ]
    },
    {
        "id": 1437,
        "name": "Bergstrom, Beatty and Runolfsson",
        "sector": "Electronic",
        "siren": 121012810,
        "results": [
            2871,
            2872
        ]
    },
    {
        "id": 1438,
        "name": "Halvorson LLC",
        "sector": "Retail",
        "siren": 156132597,
        "results": [
            2873,
            2874
        ]
    },
    {
        "id": 1439,
        "name": "Yost Inc",
        "sector": "Luxury",
        "siren": 116036824,
        "results": [
            2875,
            2876
        ]
    },
    {
        "id": 1440,
        "name": "Veum-Gleichner",
        "sector": "Luxury",
        "siren": 152821236,
        "results": [
            2877,
            2878
        ]
    },
    {
        "id": 1441,
        "name": "Hyatt and Sons",
        "sector": "Retail",
        "siren": 178440800,
        "results": [
            2879,
            2880
        ]
    },
    {
        "id": 1442,
        "name": "Jenkins-Berge",
        "sector": "Energy",
        "siren": 146784275,
        "results": [
            2881,
            2882
        ]
    },
    {
        "id": 1443,
        "name": "Runolfsson-Bergnaum",
        "sector": "Electronic",
        "siren": 145978278,
        "results": [
            2883,
            2884
        ]
    },
    {
        "id": 1444,
        "name": "McCullough-Glover",
        "sector": "Energy",
        "siren": 113262106,
        "results": [
            2885,
            2886
        ]
    },
    {
        "id": 1445,
        "name": "Roberts-Nolan",
        "sector": "Energy",
        "siren": 174223676,
        "results": [
            2887,
            2888
        ]
    },
    {
        "id": 1446,
        "name": "Littel Group",
        "sector": "Luxury",
        "siren": 175783016,
        "results": [
            2889,
            2890
        ]
    },
    {
        "id": 1447,
        "name": "Lynch-Borer",
        "sector": "Energy",
        "siren": 150864939,
        "results": [
            2891,
            2892
        ]
    },
    {
        "id": 1448,
        "name": "West and Sons",
        "sector": "Luxury",
        "siren": 129195143,
        "results": [
            2893,
            2894
        ]
    },
    {
        "id": 1449,
        "name": "Reynolds-Klein",
        "sector": "Electronic",
        "siren": 136442190,
        "results": [
            2895,
            2896
        ]
    },
    {
        "id": 1450,
        "name": "Ebert-Wilkinson",
        "sector": "Electronic",
        "siren": 153250828,
        "results": [
            2897,
            2898
        ]
    },
    {
        "id": 1451,
        "name": "Veum Inc",
        "sector": "Retail",
        "siren": 189026579,
        "results": [
            2899,
            2900
        ]
    },
    {
        "id": 1452,
        "name": "Kulas, Dickens and Schimmel",
        "sector": "Electronic",
        "siren": 188764097,
        "results": [
            2901,
            2902
        ]
    },
    {
        "id": 1453,
        "name": "Bashirian, Predovic and Thiel",
        "sector": "Services",
        "siren": 174893385,
        "results": [
            2903,
            2904
        ]
    },
    {
        "id": 1454,
        "name": "Dooley, Schmidt and Corwin",
        "sector": "Electronic",
        "siren": 101357409,
        "results": [
            2905,
            2906
        ]
    },
    {
        "id": 1455,
        "name": "Ward-Hilpert",
        "sector": "Retail",
        "siren": 113999321,
        "results": [
            2907,
            2908
        ]
    },
    {
        "id": 1456,
        "name": "Anderson, Kautzer and Osinski",
        "sector": "Electronic",
        "siren": 104595654,
        "results": [
            2909,
            2910
        ]
    },
    {
        "id": 1457,
        "name": "Zemlak-Kertzmann",
        "sector": "Services",
        "siren": 156021041,
        "results": [
            2911,
            2912
        ]
    },
    {
        "id": 1458,
        "name": "Harvey, Ryan and Romaguera",
        "sector": "Energy",
        "siren": 195567025,
        "results": [
            2913,
            2914
        ]
    },
    {
        "id": 1459,
        "name": "Smith LLC",
        "sector": "Energy",
        "siren": 151675230,
        "results": [
            2915,
            2916
        ]
    },
    {
        "id": 1460,
        "name": "Morissette-Bechtelar",
        "sector": "Electronic",
        "siren": 131829498,
        "results": [
            2917,
            2918
        ]
    },
    {
        "id": 1461,
        "name": "Davis Inc",
        "sector": "Luxury",
        "siren": 128915257,
        "results": [
            2919,
            2920
        ]
    },
    {
        "id": 1462,
        "name": "Hagenes-Mertz",
        "sector": "Retail",
        "siren": 132293761,
        "results": [
            2921,
            2922
        ]
    },
    {
        "id": 1463,
        "name": "Spinka-Kulas",
        "sector": "Electronic",
        "siren": 173768175,
        "results": [
            2923,
            2924
        ]
    },
    {
        "id": 1464,
        "name": "Bednar and Sons",
        "sector": "Electronic",
        "siren": 149652676,
        "results": [
            2925,
            2926
        ]
    },
    {
        "id": 1465,
        "name": "Schinner Inc",
        "sector": "Retail",
        "siren": 173498224,
        "results": [
            2927,
            2928
        ]
    },
    {
        "id": 1466,
        "name": "Hickle, Cronin and Rolfson",
        "sector": "Services",
        "siren": 176249839,
        "results": [
            2929,
            2930
        ]
    },
    {
        "id": 1467,
        "name": "Gleason, Will and Fay",
        "sector": "Luxury",
        "siren": 164765227,
        "results": [
            2931,
            2932
        ]
    },
    {
        "id": 1468,
        "name": "Funk Inc",
        "sector": "Retail",
        "siren": 137803307,
        "results": [
            2933,
            2934
        ]
    },
    {
        "id": 1469,
        "name": "Wisoky Inc",
        "sector": "Retail",
        "siren": 121556034,
        "results": [
            2935,
            2936
        ]
    },
    {
        "id": 1470,
        "name": "Weimann-Marvin",
        "sector": "Electronic",
        "siren": 127467544,
        "results": [
            2937,
            2938
        ]
    },
    {
        "id": 1471,
        "name": "Swift LLC",
        "sector": "Electronic",
        "siren": 109568865,
        "results": [
            2939,
            2940
        ]
    },
    {
        "id": 1472,
        "name": "Kovacek Group",
        "sector": "Services",
        "siren": 181313577,
        "results": [
            2941,
            2942
        ]
    },
    {
        "id": 1473,
        "name": "Reynolds, Gislason and Krajcik",
        "sector": "Electronic",
        "siren": 159546715,
        "results": [
            2943,
            2944
        ]
    },
    {
        "id": 1474,
        "name": "McLaughlin, Kozey and Murazik",
        "sector": "Retail",
        "siren": 182618959,
        "results": [
            2945,
            2946
        ]
    },
    {
        "id": 1475,
        "name": "Kovacek, Herzog and Bruen",
        "sector": "Services",
        "siren": 129403218,
        "results": [
            2947,
            2948
        ]
    },
    {
        "id": 1476,
        "name": "Bechtelar-Aufderhar",
        "sector": "Electronic",
        "siren": 154065184,
        "results": [
            2949,
            2950
        ]
    },
    {
        "id": 1477,
        "name": "Lueilwitz-Funk",
        "sector": "Services",
        "siren": 118541345,
        "results": [
            2951,
            2952
        ]
    },
    {
        "id": 1478,
        "name": "Langworth, Bins and Corwin",
        "sector": "Retail",
        "siren": 178527207,
        "results": [
            2953,
            2954
        ]
    },
    {
        "id": 1479,
        "name": "Becker-Abshire",
        "sector": "Services",
        "siren": 188856089,
        "results": [
            2955,
            2956
        ]
    },
    {
        "id": 1480,
        "name": "Blick LLC",
        "sector": "Retail",
        "siren": 128232319,
        "results": [
            2957,
            2958
        ]
    },
    {
        "id": 1481,
        "name": "Herman Group",
        "sector": "Luxury",
        "siren": 142725171,
        "results": [
            2959,
            2960
        ]
    },
    {
        "id": 1482,
        "name": "Willms-Harvey",
        "sector": "Retail",
        "siren": 135901454,
        "results": [
            2961,
            2962
        ]
    },
    {
        "id": 1483,
        "name": "Olson-Rowe",
        "sector": "Electronic",
        "siren": 113318308,
        "results": [
            2963,
            2964
        ]
    },
    {
        "id": 1484,
        "name": "Nicolas, Mante and Abbott",
        "sector": "Energy",
        "siren": 189491851,
        "results": [
            2965,
            2966
        ]
    },
    {
        "id": 1485,
        "name": "Koch-Grant",
        "sector": "Energy",
        "siren": 110261861,
        "results": [
            2967,
            2968
        ]
    },
    {
        "id": 1486,
        "name": "Bechtelar, Marks and Jast",
        "sector": "Services",
        "siren": 159467015,
        "results": [
            2969,
            2970
        ]
    },
    {
        "id": 1487,
        "name": "Senger and Sons",
        "sector": "Services",
        "siren": 196046815,
        "results": [
            2971,
            2972
        ]
    },
    {
        "id": 1488,
        "name": "Spinka Group",
        "sector": "Electronic",
        "siren": 119044687,
        "results": [
            2973,
            2974
        ]
    },
    {
        "id": 1489,
        "name": "Hessel, Zulauf and Weissnat",
        "sector": "Energy",
        "siren": 168259446,
        "results": [
            2975,
            2976
        ]
    },
    {
        "id": 1490,
        "name": "Keebler-Marvin",
        "sector": "Retail",
        "siren": 199067048,
        "results": [
            2977,
            2978
        ]
    },
    {
        "id": 1491,
        "name": "Williamson-Thompson",
        "sector": "Retail",
        "siren": 162996923,
        "results": [
            2979,
            2980
        ]
    },
    {
        "id": 1492,
        "name": "Thompson, Willms and Lueilwitz",
        "sector": "Luxury",
        "siren": 134457607,
        "results": [
            2981,
            2982
        ]
    },
    {
        "id": 1493,
        "name": "Littel-Von",
        "sector": "Luxury",
        "siren": 190435864,
        "results": [
            2983,
            2984
        ]
    },
    {
        "id": 1494,
        "name": "O'Keefe Inc",
        "sector": "Services",
        "siren": 122025835,
        "results": [
            2985,
            2986
        ]
    },
    {
        "id": 1495,
        "name": "Huels and Sons",
        "sector": "Services",
        "siren": 100742639,
        "results": [
            2987,
            2988
        ]
    },
    {
        "id": 1496,
        "name": "Rice, Mayert and Wisoky",
        "sector": "Electronic",
        "siren": 158220536,
        "results": [
            2989,
            2990
        ]
    },
    {
        "id": 1497,
        "name": "Spinka LLC",
        "sector": "Retail",
        "siren": 116908228,
        "results": [
            2991,
            2992
        ]
    },
    {
        "id": 1498,
        "name": "Jones Inc",
        "sector": "Services",
        "siren": 129953296,
        "results": [
            2993,
            2994
        ]
    },
    {
        "id": 1499,
        "name": "Gerhold, McLaughlin and Leuschke",
        "sector": "Services",
        "siren": 132966531,
        "results": [
            2995,
            2996
        ]
    },
    {
        "id": 1500,
        "name": "Dooley-Turcotte",
        "sector": "Luxury",
        "siren": 179279468,
        "results": [
            2997,
            2998
        ]
    },
    {
        "id": 1501,
        "name": "Carroll, Rippin and Corkery",
        "sector": "Retail",
        "siren": 129087805,
        "results": [
            2999,
            3000
        ]
    },
    {
        "id": 1502,
        "name": "Bins and Sons",
        "sector": "Luxury",
        "siren": 175820542,
        "results": [
            3001,
            3002
        ]
    },
    {
        "id": 1503,
        "name": "Lowe, Schuster and Hartmann",
        "sector": "Energy",
        "siren": 154756281,
        "results": [
            3003,
            3004
        ]
    },
    {
        "id": 1504,
        "name": "Runte LLC",
        "sector": "Services",
        "siren": 170053801,
        "results": [
            3005,
            3006
        ]
    },
    {
        "id": 1505,
        "name": "Wunsch, Beatty and Rogahn",
        "sector": "Electronic",
        "siren": 108707894,
        "results": [
            3007,
            3008
        ]
    },
    {
        "id": 1506,
        "name": "Ryan, Pfannerstill and Stroman",
        "sector": "Luxury",
        "siren": 148513566,
        "results": [
            3009,
            3010
        ]
    },
    {
        "id": 1507,
        "name": "Lind, Windler and Nienow",
        "sector": "Retail",
        "siren": 194799851,
        "results": [
            3011,
            3012
        ]
    },
    {
        "id": 1508,
        "name": "O'Connell LLC",
        "sector": "Retail",
        "siren": 146392762,
        "results": [
            3013,
            3014
        ]
    },
    {
        "id": 1509,
        "name": "Paucek and Sons",
        "sector": "Luxury",
        "siren": 100193913,
        "results": [
            3015,
            3016
        ]
    },
    {
        "id": 1510,
        "name": "Champlin-Bergstrom",
        "sector": "Electronic",
        "siren": 103878945,
        "results": [
            3017,
            3018
        ]
    },
    {
        "id": 1511,
        "name": "Cronin Group",
        "sector": "Energy",
        "siren": 169765022,
        "results": [
            3019,
            3020
        ]
    },
    {
        "id": 1512,
        "name": "Kris-Hartmann",
        "sector": "Energy",
        "siren": 158608930,
        "results": [
            3021,
            3022
        ]
    },
    {
        "id": 1513,
        "name": "Hansen, Hamill and Volkman",
        "sector": "Services",
        "siren": 171744012,
        "results": [
            3023,
            3024
        ]
    },
    {
        "id": 1514,
        "name": "Waters, Sporer and Hodkiewicz",
        "sector": "Retail",
        "siren": 114491510,
        "results": [
            3025,
            3026
        ]
    },
    {
        "id": 1515,
        "name": "Haag, Turcotte and Rodriguez",
        "sector": "Services",
        "siren": 135599618,
        "results": [
            3027,
            3028
        ]
    },
    {
        "id": 1516,
        "name": "Koch and Sons",
        "sector": "Retail",
        "siren": 129281145,
        "results": [
            3029,
            3030
        ]
    },
    {
        "id": 1517,
        "name": "Abbott-Orn",
        "sector": "Services",
        "siren": 175574586,
        "results": [
            3031,
            3032
        ]
    },
    {
        "id": 1518,
        "name": "Kutch, Hammes and Wolff",
        "sector": "Energy",
        "siren": 125726321,
        "results": [
            3033,
            3034
        ]
    },
    {
        "id": 1519,
        "name": "Towne, Robel and McClure",
        "sector": "Luxury",
        "siren": 189818068,
        "results": [
            3035,
            3036
        ]
    },
    {
        "id": 1520,
        "name": "Schoen Group",
        "sector": "Services",
        "siren": 104760922,
        "results": [
            3037,
            3038
        ]
    },
    {
        "id": 1521,
        "name": "Dicki Group",
        "sector": "Energy",
        "siren": 194491506,
        "results": [
            3039,
            3040
        ]
    },
    {
        "id": 1522,
        "name": "Okuneva, Tromp and Cole",
        "sector": "Services",
        "siren": 143821444,
        "results": [
            3041,
            3042
        ]
    },
    {
        "id": 1523,
        "name": "Moen-Kshlerin",
        "sector": "Retail",
        "siren": 116169729,
        "results": [
            3043,
            3044
        ]
    },
    {
        "id": 1524,
        "name": "Runte Inc",
        "sector": "Luxury",
        "siren": 129549741,
        "results": [
            3045,
            3046
        ]
    },
    {
        "id": 1525,
        "name": "O'Connell, Nolan and Beer",
        "sector": "Energy",
        "siren": 192563933,
        "results": [
            3047,
            3048
        ]
    },
    {
        "id": 1526,
        "name": "Conn Group",
        "sector": "Electronic",
        "siren": 110690030,
        "results": [
            3049,
            3050
        ]
    },
    {
        "id": 1527,
        "name": "Koch, Ratke and Hyatt",
        "sector": "Electronic",
        "siren": 149194214,
        "results": [
            3051,
            3052
        ]
    },
    {
        "id": 1528,
        "name": "O'Reilly-O'Conner",
        "sector": "Services",
        "siren": 171094192,
        "results": [
            3053,
            3054
        ]
    },
    {
        "id": 1529,
        "name": "Kuhic, Reichel and Hilpert",
        "sector": "Services",
        "siren": 183568091,
        "results": [
            3055,
            3056
        ]
    },
    {
        "id": 1530,
        "name": "Oberbrunner-Lebsack",
        "sector": "Energy",
        "siren": 111910705,
        "results": [
            3057,
            3058
        ]
    },
    {
        "id": 1531,
        "name": "McCullough-Adams",
        "sector": "Retail",
        "siren": 184916496,
        "results": [
            3059,
            3060
        ]
    },
    {
        "id": 1532,
        "name": "Buckridge-Aufderhar",
        "sector": "Retail",
        "siren": 180781481,
        "results": [
            3061,
            3062
        ]
    },
    {
        "id": 1533,
        "name": "Maggio Inc",
        "sector": "Luxury",
        "siren": 123066808,
        "results": [
            3063,
            3064
        ]
    },
    {
        "id": 1534,
        "name": "Wuckert, Thiel and Kunze",
        "sector": "Energy",
        "siren": 163452953,
        "results": [
            3065,
            3066
        ]
    },
    {
        "id": 1535,
        "name": "Murray LLC",
        "sector": "Luxury",
        "siren": 159304380,
        "results": [
            3067,
            3068
        ]
    },
    {
        "id": 1536,
        "name": "Feest LLC",
        "sector": "Services",
        "siren": 117304068,
        "results": [
            3069,
            3070
        ]
    },
    {
        "id": 1537,
        "name": "Altenwerth and Sons",
        "sector": "Luxury",
        "siren": 125735323,
        "results": [
            3071,
            3072
        ]
    },
    {
        "id": 1538,
        "name": "Kovacek, Kreiger and Turcotte",
        "sector": "Services",
        "siren": 170068224,
        "results": [
            3073,
            3074
        ]
    },
    {
        "id": 1539,
        "name": "Vandervort-Hauck",
        "sector": "Energy",
        "siren": 117801397,
        "results": [
            3075,
            3076
        ]
    },
    {
        "id": 1540,
        "name": "Rice Group",
        "sector": "Electronic",
        "siren": 142836550,
        "results": [
            3077,
            3078
        ]
    },
    {
        "id": 1541,
        "name": "Brekke Group",
        "sector": "Luxury",
        "siren": 173580801,
        "results": [
            3079,
            3080
        ]
    },
    {
        "id": 1542,
        "name": "Brekke and Sons",
        "sector": "Electronic",
        "siren": 152758790,
        "results": [
            3081,
            3082
        ]
    },
    {
        "id": 1543,
        "name": "Will Inc",
        "sector": "Energy",
        "siren": 178155597,
        "results": [
            3083,
            3084
        ]
    },
    {
        "id": 1544,
        "name": "Mitchell, Hickle and Champlin",
        "sector": "Luxury",
        "siren": 155854012,
        "results": [
            3085,
            3086
        ]
    },
    {
        "id": 1545,
        "name": "O'Reilly-Nienow",
        "sector": "Retail",
        "siren": 112351723,
        "results": [
            3087,
            3088
        ]
    },
    {
        "id": 1546,
        "name": "Harber-Kshlerin",
        "sector": "Luxury",
        "siren": 180653331,
        "results": [
            3089,
            3090
        ]
    },
    {
        "id": 1547,
        "name": "Dicki-MacGyver",
        "sector": "Electronic",
        "siren": 138541953,
        "results": [
            3091,
            3092
        ]
    },
    {
        "id": 1548,
        "name": "Walker, Bashirian and Erdman",
        "sector": "Electronic",
        "siren": 154147387,
        "results": [
            3093,
            3094
        ]
    },
    {
        "id": 1549,
        "name": "Nienow, Armstrong and Klein",
        "sector": "Services",
        "siren": 126399885,
        "results": [
            3095,
            3096
        ]
    },
    {
        "id": 1550,
        "name": "Mills, Morissette and Hand",
        "sector": "Energy",
        "siren": 103861247,
        "results": [
            3097,
            3098
        ]
    },
    {
        "id": 1551,
        "name": "Predovic and Sons",
        "sector": "Services",
        "siren": 151762755,
        "results": [
            3099,
            3100
        ]
    },
    {
        "id": 1552,
        "name": "Cole, Tromp and Lehner",
        "sector": "Energy",
        "siren": 146828326,
        "results": [
            3101,
            3102
        ]
    },
    {
        "id": 1553,
        "name": "Little LLC",
        "sector": "Energy",
        "siren": 119931553,
        "results": [
            3103,
            3104
        ]
    },
    {
        "id": 1554,
        "name": "Labadie, Mohr and Friesen",
        "sector": "Energy",
        "siren": 171769085,
        "results": [
            3105,
            3106
        ]
    },
    {
        "id": 1555,
        "name": "Bogisich-Quigley",
        "sector": "Luxury",
        "siren": 182992869,
        "results": [
            3107,
            3108
        ]
    },
    {
        "id": 1556,
        "name": "Abernathy and Sons",
        "sector": "Services",
        "siren": 144183923,
        "results": [
            3109,
            3110
        ]
    },
    {
        "id": 1557,
        "name": "Schmeler-Langworth",
        "sector": "Services",
        "siren": 129156724,
        "results": [
            3111,
            3112
        ]
    },
    {
        "id": 1558,
        "name": "Schultz, Dicki and Hoppe",
        "sector": "Retail",
        "siren": 115897770,
        "results": [
            3113,
            3114
        ]
    },
    {
        "id": 1559,
        "name": "D'Amore-Koch",
        "sector": "Luxury",
        "siren": 150851464,
        "results": [
            3115,
            3116
        ]
    },
    {
        "id": 1560,
        "name": "Fahey-Hayes",
        "sector": "Energy",
        "siren": 146839022,
        "results": [
            3117,
            3118
        ]
    },
    {
        "id": 1561,
        "name": "Wolff LLC",
        "sector": "Luxury",
        "siren": 143686502,
        "results": [
            3119,
            3120
        ]
    },
    {
        "id": 1562,
        "name": "McKenzie LLC",
        "sector": "Luxury",
        "siren": 103950268,
        "results": [
            3121,
            3122
        ]
    },
    {
        "id": 1563,
        "name": "Jacobson-Hammes",
        "sector": "Services",
        "siren": 193756088,
        "results": [
            3123,
            3124
        ]
    },
    {
        "id": 1564,
        "name": "Collins Inc",
        "sector": "Electronic",
        "siren": 197730432,
        "results": [
            3125,
            3126
        ]
    },
    {
        "id": 1565,
        "name": "Watsica-Orn",
        "sector": "Retail",
        "siren": 160228726,
        "results": [
            3127,
            3128
        ]
    },
    {
        "id": 1566,
        "name": "Bode, Glover and Kuhn",
        "sector": "Retail",
        "siren": 129048235,
        "results": [
            3129,
            3130
        ]
    },
    {
        "id": 1567,
        "name": "Veum Group",
        "sector": "Energy",
        "siren": 137631772,
        "results": [
            3131,
            3132
        ]
    },
    {
        "id": 1568,
        "name": "Blanda LLC",
        "sector": "Energy",
        "siren": 195898910,
        "results": [
            3133,
            3134
        ]
    },
    {
        "id": 1569,
        "name": "Ortiz-Swaniawski",
        "sector": "Services",
        "siren": 193544778,
        "results": [
            3135,
            3136
        ]
    },
    {
        "id": 1570,
        "name": "Cassin-Douglas",
        "sector": "Electronic",
        "siren": 182212539,
        "results": [
            3137,
            3138
        ]
    },
    {
        "id": 1571,
        "name": "Nader-Hudson",
        "sector": "Retail",
        "siren": 185571783,
        "results": [
            3139,
            3140
        ]
    },
    {
        "id": 1572,
        "name": "Koepp and Sons",
        "sector": "Retail",
        "siren": 111728197,
        "results": [
            3141,
            3142
        ]
    },
    {
        "id": 1573,
        "name": "Williamson LLC",
        "sector": "Services",
        "siren": 177383374,
        "results": [
            3143,
            3144
        ]
    },
    {
        "id": 1574,
        "name": "Predovic Group",
        "sector": "Services",
        "siren": 197297674,
        "results": [
            3145,
            3146
        ]
    },
    {
        "id": 1575,
        "name": "Gottlieb Group",
        "sector": "Luxury",
        "siren": 133579118,
        "results": [
            3147,
            3148
        ]
    },
    {
        "id": 1576,
        "name": "Bode-Turner",
        "sector": "Services",
        "siren": 115317245,
        "results": [
            3149,
            3150
        ]
    },
    {
        "id": 1577,
        "name": "Weber Group",
        "sector": "Retail",
        "siren": 199897529,
        "results": [
            3151,
            3152
        ]
    },
    {
        "id": 1578,
        "name": "Carter-Rogahn",
        "sector": "Energy",
        "siren": 104851838,
        "results": [
            3153,
            3154
        ]
    },
    {
        "id": 1579,
        "name": "Sipes, Reilly and Schmitt",
        "sector": "Electronic",
        "siren": 145286636,
        "results": [
            3155,
            3156
        ]
    },
    {
        "id": 1580,
        "name": "Cummings-Hilpert",
        "sector": "Services",
        "siren": 139222209,
        "results": [
            3157,
            3158
        ]
    },
    {
        "id": 1581,
        "name": "Kovacek-Feest",
        "sector": "Services",
        "siren": 105730848,
        "results": [
            3159,
            3160
        ]
    },
    {
        "id": 1582,
        "name": "Beahan, Mitchell and Haley",
        "sector": "Electronic",
        "siren": 108079099,
        "results": [
            3161,
            3162
        ]
    },
    {
        "id": 1583,
        "name": "Labadie, Turcotte and Reinger",
        "sector": "Electronic",
        "siren": 131235804,
        "results": [
            3163,
            3164
        ]
    },
    {
        "id": 1584,
        "name": "Kovacek Inc",
        "sector": "Electronic",
        "siren": 175592282,
        "results": [
            3165,
            3166
        ]
    },
    {
        "id": 1585,
        "name": "Schultz Group",
        "sector": "Retail",
        "siren": 150254209,
        "results": [
            3167,
            3168
        ]
    },
    {
        "id": 1586,
        "name": "Gerhold, Zulauf and Boehm",
        "sector": "Energy",
        "siren": 134724077,
        "results": [
            3169,
            3170
        ]
    },
    {
        "id": 1587,
        "name": "Gulgowski-Balistreri",
        "sector": "Luxury",
        "siren": 137824570,
        "results": [
            3171,
            3172
        ]
    },
    {
        "id": 1588,
        "name": "Howe LLC",
        "sector": "Services",
        "siren": 165849742,
        "results": [
            3173,
            3174
        ]
    },
    {
        "id": 1589,
        "name": "Weissnat, Johnston and Fahey",
        "sector": "Luxury",
        "siren": 107804190,
        "results": [
            3175,
            3176
        ]
    },
    {
        "id": 1590,
        "name": "Kerluke, Dibbert and Farrell",
        "sector": "Services",
        "siren": 128396917,
        "results": [
            3177,
            3178
        ]
    },
    {
        "id": 1591,
        "name": "Bechtelar-Casper",
        "sector": "Energy",
        "siren": 165563519,
        "results": [
            3179,
            3180
        ]
    },
    {
        "id": 1592,
        "name": "Fahey, Kemmer and Kuhn",
        "sector": "Services",
        "siren": 102140674,
        "results": [
            3181,
            3182
        ]
    },
    {
        "id": 1593,
        "name": "Kuphal LLC",
        "sector": "Energy",
        "siren": 136541629,
        "results": [
            3183,
            3184
        ]
    },
    {
        "id": 1594,
        "name": "Conn and Sons",
        "sector": "Electronic",
        "siren": 172465765,
        "results": [
            3185,
            3186
        ]
    },
    {
        "id": 1595,
        "name": "Kohler, Muller and Walker",
        "sector": "Energy",
        "siren": 136004178,
        "results": [
            3187,
            3188
        ]
    },
    {
        "id": 1596,
        "name": "Armstrong-Lynch",
        "sector": "Luxury",
        "siren": 194327179,
        "results": [
            3189,
            3190
        ]
    },
    {
        "id": 1597,
        "name": "Wisozk, Hills and Bins",
        "sector": "Electronic",
        "siren": 179324963,
        "results": [
            3191,
            3192
        ]
    },
    {
        "id": 1598,
        "name": "Miller, Marquardt and Ryan",
        "sector": "Retail",
        "siren": 124713342,
        "results": [
            3193,
            3194
        ]
    },
    {
        "id": 1599,
        "name": "Leannon, Toy and Rogahn",
        "sector": "Services",
        "siren": 191122787,
        "results": [
            3195,
            3196
        ]
    },
    {
        "id": 1600,
        "name": "Cummings and Sons",
        "sector": "Luxury",
        "siren": 199090646,
        "results": [
            3197,
            3198
        ]
    },
    {
        "id": 1601,
        "name": "Heaney, Wuckert and Aufderhar",
        "sector": "Energy",
        "siren": 149129202,
        "results": [
            3199,
            3200
        ]
    },
    {
        "id": 1602,
        "name": "Collins Inc",
        "sector": "Energy",
        "siren": 191251696,
        "results": [
            3201,
            3202
        ]
    },
    {
        "id": 1603,
        "name": "White Inc",
        "sector": "Luxury",
        "siren": 158546353,
        "results": [
            3203,
            3204
        ]
    },
    {
        "id": 1604,
        "name": "Hodkiewicz, Jaskolski and Jones",
        "sector": "Services",
        "siren": 120164334,
        "results": [
            3205,
            3206
        ]
    },
    {
        "id": 1605,
        "name": "Kshlerin-Sipes",
        "sector": "Luxury",
        "siren": 114501607,
        "results": [
            3207,
            3208
        ]
    },
    {
        "id": 1606,
        "name": "Monahan, Block and Predovic",
        "sector": "Electronic",
        "siren": 153635299,
        "results": [
            3209,
            3210
        ]
    },
    {
        "id": 1607,
        "name": "Denesik-Klein",
        "sector": "Services",
        "siren": 168031548,
        "results": [
            3211,
            3212
        ]
    },
    {
        "id": 1608,
        "name": "Schulist LLC",
        "sector": "Retail",
        "siren": 125705383,
        "results": [
            3213,
            3214
        ]
    },
    {
        "id": 1609,
        "name": "Torphy-Daniel",
        "sector": "Retail",
        "siren": 196118686,
        "results": [
            3215,
            3216
        ]
    },
    {
        "id": 1610,
        "name": "Bradtke LLC",
        "sector": "Services",
        "siren": 189365994,
        "results": [
            3217,
            3218
        ]
    },
    {
        "id": 1611,
        "name": "Gerlach-Krajcik",
        "sector": "Energy",
        "siren": 186141734,
        "results": [
            3219,
            3220
        ]
    },
    {
        "id": 1612,
        "name": "Mohr, Upton and Wisoky",
        "sector": "Services",
        "siren": 140703976,
        "results": [
            3221,
            3222
        ]
    },
    {
        "id": 1613,
        "name": "Hane-Stiedemann",
        "sector": "Electronic",
        "siren": 132177139,
        "results": [
            3223,
            3224
        ]
    },
    {
        "id": 1614,
        "name": "Veum, Kassulke and Harvey",
        "sector": "Electronic",
        "siren": 138849076,
        "results": [
            3225,
            3226
        ]
    },
    {
        "id": 1615,
        "name": "Buckridge Group",
        "sector": "Energy",
        "siren": 122989323,
        "results": [
            3227,
            3228
        ]
    },
    {
        "id": 1616,
        "name": "Brekke, Lebsack and Schoen",
        "sector": "Energy",
        "siren": 175981544,
        "results": [
            3229,
            3230
        ]
    },
    {
        "id": 1617,
        "name": "Donnelly LLC",
        "sector": "Luxury",
        "siren": 176077969,
        "results": [
            3231,
            3232
        ]
    },
    {
        "id": 1618,
        "name": "Ernser Group",
        "sector": "Retail",
        "siren": 180037849,
        "results": [
            3233,
            3234
        ]
    },
    {
        "id": 1619,
        "name": "Daugherty-Hudson",
        "sector": "Retail",
        "siren": 199361427,
        "results": [
            3235,
            3236
        ]
    },
    {
        "id": 1620,
        "name": "Hermann, Paucek and Sawayn",
        "sector": "Retail",
        "siren": 177238411,
        "results": [
            3237,
            3238
        ]
    },
    {
        "id": 1621,
        "name": "Rice, Friesen and Shields",
        "sector": "Services",
        "siren": 124413494,
        "results": [
            3239,
            3240
        ]
    },
    {
        "id": 1622,
        "name": "Toy-Kertzmann",
        "sector": "Retail",
        "siren": 149448263,
        "results": [
            3241,
            3242
        ]
    },
    {
        "id": 1623,
        "name": "Kunze Inc",
        "sector": "Retail",
        "siren": 161347387,
        "results": [
            3243,
            3244
        ]
    },
    {
        "id": 1624,
        "name": "Bode-Moen",
        "sector": "Energy",
        "siren": 141141391,
        "results": [
            3245,
            3246
        ]
    },
    {
        "id": 1625,
        "name": "DuBuque-Hamill",
        "sector": "Services",
        "siren": 101998355,
        "results": [
            3247,
            3248
        ]
    },
    {
        "id": 1626,
        "name": "Hyatt and Sons",
        "sector": "Electronic",
        "siren": 111079941,
        "results": [
            3249,
            3250
        ]
    },
    {
        "id": 1627,
        "name": "Spinka, Tromp and Trantow",
        "sector": "Luxury",
        "siren": 170845536,
        "results": [
            3251,
            3252
        ]
    },
    {
        "id": 1628,
        "name": "Cassin Inc",
        "sector": "Retail",
        "siren": 150880034,
        "results": [
            3253,
            3254
        ]
    },
    {
        "id": 1629,
        "name": "Flatley Inc",
        "sector": "Services",
        "siren": 193533574,
        "results": [
            3255,
            3256
        ]
    },
    {
        "id": 1630,
        "name": "Lind, Bayer and Gulgowski",
        "sector": "Retail",
        "siren": 177474735,
        "results": [
            3257,
            3258
        ]
    },
    {
        "id": 1631,
        "name": "Turner, Turner and Corkery",
        "sector": "Services",
        "siren": 140655908,
        "results": [
            3259,
            3260
        ]
    },
    {
        "id": 1632,
        "name": "Gulgowski LLC",
        "sector": "Services",
        "siren": 125233111,
        "results": [
            3261,
            3262
        ]
    },
    {
        "id": 1633,
        "name": "Welch Group",
        "sector": "Electronic",
        "siren": 151857807,
        "results": [
            3263,
            3264
        ]
    },
    {
        "id": 1634,
        "name": "Abshire-Schinner",
        "sector": "Electronic",
        "siren": 146318708,
        "results": [
            3265,
            3266
        ]
    },
    {
        "id": 1635,
        "name": "Bayer, McLaughlin and Morar",
        "sector": "Luxury",
        "siren": 190330748,
        "results": [
            3267,
            3268
        ]
    },
    {
        "id": 1636,
        "name": "Padberg-Gulgowski",
        "sector": "Luxury",
        "siren": 189945549,
        "results": [
            3269,
            3270
        ]
    },
    {
        "id": 1637,
        "name": "Kautzer LLC",
        "sector": "Services",
        "siren": 198644582,
        "results": [
            3271,
            3272
        ]
    },
    {
        "id": 1638,
        "name": "Paucek Inc",
        "sector": "Retail",
        "siren": 170937792,
        "results": [
            3273,
            3274
        ]
    },
    {
        "id": 1639,
        "name": "Jacobi, Orn and McDermott",
        "sector": "Energy",
        "siren": 169474929,
        "results": [
            3275,
            3276
        ]
    },
    {
        "id": 1640,
        "name": "Robel Inc",
        "sector": "Electronic",
        "siren": 140027586,
        "results": [
            3277,
            3278
        ]
    },
    {
        "id": 1641,
        "name": "Conroy, Barton and Bruen",
        "sector": "Electronic",
        "siren": 183593664,
        "results": [
            3279,
            3280
        ]
    },
    {
        "id": 1642,
        "name": "Wilkinson, Kozey and Haley",
        "sector": "Electronic",
        "siren": 129428633,
        "results": [
            3281,
            3282
        ]
    },
    {
        "id": 1643,
        "name": "O'Reilly LLC",
        "sector": "Services",
        "siren": 141328365,
        "results": [
            3283,
            3284
        ]
    },
    {
        "id": 1644,
        "name": "Herman Inc",
        "sector": "Energy",
        "siren": 139037208,
        "results": [
            3285,
            3286
        ]
    },
    {
        "id": 1645,
        "name": "Labadie-Upton",
        "sector": "Energy",
        "siren": 159714970,
        "results": [
            3287,
            3288
        ]
    },
    {
        "id": 1646,
        "name": "Quitzon-Feeney",
        "sector": "Luxury",
        "siren": 100845985,
        "results": [
            3289,
            3290
        ]
    },
    {
        "id": 1647,
        "name": "Bogan, Weber and Welch",
        "sector": "Services",
        "siren": 143462248,
        "results": [
            3291,
            3292
        ]
    },
    {
        "id": 1648,
        "name": "Waelchi LLC",
        "sector": "Services",
        "siren": 160796992,
        "results": [
            3293,
            3294
        ]
    },
    {
        "id": 1649,
        "name": "Kuhlman, Kuhic and Smitham",
        "sector": "Luxury",
        "siren": 107650092,
        "results": [
            3295,
            3296
        ]
    },
    {
        "id": 1650,
        "name": "Adams and Sons",
        "sector": "Energy",
        "siren": 125941439,
        "results": [
            3297,
            3298
        ]
    },
    {
        "id": 1651,
        "name": "Hagenes Group",
        "sector": "Electronic",
        "siren": 175355707,
        "results": [
            3299,
            3300
        ]
    },
    {
        "id": 1652,
        "name": "Farrell, Borer and Paucek",
        "sector": "Energy",
        "siren": 108313700,
        "results": [
            3301,
            3302
        ]
    },
    {
        "id": 1653,
        "name": "Borer-Balistreri",
        "sector": "Services",
        "siren": 162322494,
        "results": [
            3303,
            3304
        ]
    },
    {
        "id": 1654,
        "name": "Carroll, Kozey and Gleason",
        "sector": "Energy",
        "siren": 126999678,
        "results": [
            3305,
            3306
        ]
    },
    {
        "id": 1655,
        "name": "Braun-Dietrich",
        "sector": "Luxury",
        "siren": 131452203,
        "results": [
            3307,
            3308
        ]
    },
    {
        "id": 1656,
        "name": "Hammes and Sons",
        "sector": "Electronic",
        "siren": 149392207,
        "results": [
            3309,
            3310
        ]
    },
    {
        "id": 1657,
        "name": "Johnson, Pollich and Wiza",
        "sector": "Services",
        "siren": 114366317,
        "results": [
            3311,
            3312
        ]
    },
    {
        "id": 1658,
        "name": "Hodkiewicz-Koelpin",
        "sector": "Services",
        "siren": 132241605,
        "results": [
            3313,
            3314
        ]
    },
    {
        "id": 1659,
        "name": "Thiel, Barrows and Kunde",
        "sector": "Retail",
        "siren": 109625682,
        "results": [
            3315,
            3316
        ]
    },
    {
        "id": 1660,
        "name": "Rolfson Inc",
        "sector": "Luxury",
        "siren": 183804774,
        "results": [
            3317,
            3318
        ]
    },
    {
        "id": 1661,
        "name": "Dooley-Gaylord",
        "sector": "Luxury",
        "siren": 150278344,
        "results": [
            3319,
            3320
        ]
    },
    {
        "id": 1662,
        "name": "Reichel, Rolfson and Langworth",
        "sector": "Electronic",
        "siren": 167947171,
        "results": [
            3321,
            3322
        ]
    },
    {
        "id": 1663,
        "name": "Auer and Sons",
        "sector": "Luxury",
        "siren": 134489702,
        "results": [
            3323,
            3324
        ]
    },
    {
        "id": 1664,
        "name": "Purdy LLC",
        "sector": "Energy",
        "siren": 180621422,
        "results": [
            3325,
            3326
        ]
    },
    {
        "id": 1665,
        "name": "Koss, Bosco and Heathcote",
        "sector": "Retail",
        "siren": 149391344,
        "results": [
            3327,
            3328
        ]
    },
    {
        "id": 1666,
        "name": "Hackett-Ferry",
        "sector": "Retail",
        "siren": 116123081,
        "results": [
            3329,
            3330
        ]
    },
    {
        "id": 1667,
        "name": "Willms Inc",
        "sector": "Retail",
        "siren": 188339393,
        "results": [
            3331,
            3332
        ]
    },
    {
        "id": 1668,
        "name": "Reilly-Watsica",
        "sector": "Retail",
        "siren": 113573152,
        "results": [
            3333,
            3334
        ]
    },
    {
        "id": 1669,
        "name": "Rohan Group",
        "sector": "Electronic",
        "siren": 143298703,
        "results": [
            3335,
            3336
        ]
    },
    {
        "id": 1670,
        "name": "Maggio, Kshlerin and Graham",
        "sector": "Services",
        "siren": 181598610,
        "results": [
            3337,
            3338
        ]
    },
    {
        "id": 1671,
        "name": "Jacobi Inc",
        "sector": "Electronic",
        "siren": 138093371,
        "results": [
            3339,
            3340
        ]
    },
    {
        "id": 1672,
        "name": "Emmerich, Stokes and Keebler",
        "sector": "Retail",
        "siren": 190101087,
        "results": [
            3341,
            3342
        ]
    },
    {
        "id": 1673,
        "name": "Roberts Inc",
        "sector": "Luxury",
        "siren": 192243537,
        "results": [
            3343,
            3344
        ]
    },
    {
        "id": 1674,
        "name": "Eichmann-Fadel",
        "sector": "Retail",
        "siren": 134279961,
        "results": [
            3345,
            3346
        ]
    },
    {
        "id": 1675,
        "name": "Gutmann and Sons",
        "sector": "Electronic",
        "siren": 174001368,
        "results": [
            3347,
            3348
        ]
    },
    {
        "id": 1676,
        "name": "Harvey Inc",
        "sector": "Retail",
        "siren": 139096852,
        "results": [
            3349,
            3350
        ]
    },
    {
        "id": 1677,
        "name": "Turner, Gleichner and Mitchell",
        "sector": "Luxury",
        "siren": 137276242,
        "results": [
            3351,
            3352
        ]
    },
    {
        "id": 1678,
        "name": "Smith LLC",
        "sector": "Energy",
        "siren": 136727252,
        "results": [
            3353,
            3354
        ]
    },
    {
        "id": 1679,
        "name": "Lemke-Medhurst",
        "sector": "Services",
        "siren": 154580576,
        "results": [
            3355,
            3356
        ]
    },
    {
        "id": 1680,
        "name": "Jacobi Group",
        "sector": "Luxury",
        "siren": 142191189,
        "results": [
            3357,
            3358
        ]
    },
    {
        "id": 1681,
        "name": "Hettinger, Robel and Johnston",
        "sector": "Luxury",
        "siren": 127038881,
        "results": [
            3359,
            3360
        ]
    },
    {
        "id": 1682,
        "name": "Kunze LLC",
        "sector": "Services",
        "siren": 158963137,
        "results": [
            3361,
            3362
        ]
    },
    {
        "id": 1683,
        "name": "Kassulke, Little and Carroll",
        "sector": "Services",
        "siren": 196815640,
        "results": [
            3363,
            3364
        ]
    },
    {
        "id": 1684,
        "name": "Cummerata and Sons",
        "sector": "Retail",
        "siren": 179066630,
        "results": [
            3365,
            3366
        ]
    },
    {
        "id": 1685,
        "name": "Bartoletti and Sons",
        "sector": "Luxury",
        "siren": 188770598,
        "results": [
            3367,
            3368
        ]
    },
    {
        "id": 1686,
        "name": "Schultz-Herman",
        "sector": "Services",
        "siren": 122021430,
        "results": [
            3369,
            3370
        ]
    },
    {
        "id": 1687,
        "name": "Purdy-Will",
        "sector": "Energy",
        "siren": 161364293,
        "results": [
            3371,
            3372
        ]
    },
    {
        "id": 1688,
        "name": "Ferry, Bergnaum and Cartwright",
        "sector": "Services",
        "siren": 129677047,
        "results": [
            3373,
            3374
        ]
    },
    {
        "id": 1689,
        "name": "Gorczany Inc",
        "sector": "Retail",
        "siren": 130169872,
        "results": [
            3375,
            3376
        ]
    },
    {
        "id": 1690,
        "name": "Schinner-Pfannerstill",
        "sector": "Energy",
        "siren": 196335109,
        "results": [
            3377,
            3378
        ]
    },
    {
        "id": 1691,
        "name": "Spencer Inc",
        "sector": "Electronic",
        "siren": 140329966,
        "results": [
            3379,
            3380
        ]
    },
    {
        "id": 1692,
        "name": "Prosacco, Harvey and Lang",
        "sector": "Services",
        "siren": 152912105,
        "results": [
            3381,
            3382
        ]
    },
    {
        "id": 1693,
        "name": "Price, Runte and Mraz",
        "sector": "Energy",
        "siren": 106222759,
        "results": [
            3383,
            3384
        ]
    },
    {
        "id": 1694,
        "name": "Willms, Roob and Ferry",
        "sector": "Electronic",
        "siren": 121080673,
        "results": [
            3385,
            3386
        ]
    },
    {
        "id": 1695,
        "name": "Stark and Sons",
        "sector": "Services",
        "siren": 143858510,
        "results": [
            3387,
            3388
        ]
    },
    {
        "id": 1696,
        "name": "Walter Group",
        "sector": "Energy",
        "siren": 186991596,
        "results": [
            3389,
            3390
        ]
    },
    {
        "id": 1697,
        "name": "Crooks-Quigley",
        "sector": "Energy",
        "siren": 116708593,
        "results": [
            3391,
            3392
        ]
    },
    {
        "id": 1698,
        "name": "Torp Group",
        "sector": "Electronic",
        "siren": 182277819,
        "results": [
            3393,
            3394
        ]
    },
    {
        "id": 1699,
        "name": "Rosenbaum-Lemke",
        "sector": "Energy",
        "siren": 165374644,
        "results": [
            3395,
            3396
        ]
    },
    {
        "id": 1700,
        "name": "Hoeger, Robel and Mills",
        "sector": "Electronic",
        "siren": 165529688,
        "results": [
            3397,
            3398
        ]
    },
    {
        "id": 1701,
        "name": "Rogahn, Goodwin and Parisian",
        "sector": "Luxury",
        "siren": 193860755,
        "results": [
            3399,
            3400
        ]
    },
    {
        "id": 1702,
        "name": "Lowe Group",
        "sector": "Services",
        "siren": 174853670,
        "results": [
            3401,
            3402
        ]
    },
    {
        "id": 1703,
        "name": "Rosenbaum Group",
        "sector": "Electronic",
        "siren": 100629176,
        "results": [
            3403,
            3404
        ]
    },
    {
        "id": 1704,
        "name": "Little LLC",
        "sector": "Luxury",
        "siren": 179240825,
        "results": [
            3405,
            3406
        ]
    },
    {
        "id": 1705,
        "name": "Dicki, Cole and Stamm",
        "sector": "Services",
        "siren": 199986100,
        "results": [
            3407,
            3408
        ]
    },
    {
        "id": 1706,
        "name": "Braun Inc",
        "sector": "Luxury",
        "siren": 157224799,
        "results": [
            3409,
            3410
        ]
    },
    {
        "id": 1707,
        "name": "Thompson-Stehr",
        "sector": "Luxury",
        "siren": 132517204,
        "results": [
            3411,
            3412
        ]
    },
    {
        "id": 1708,
        "name": "Baumbach and Sons",
        "sector": "Energy",
        "siren": 137520268,
        "results": [
            3413,
            3414
        ]
    },
    {
        "id": 1709,
        "name": "Gusikowski Group",
        "sector": "Services",
        "siren": 130933431,
        "results": [
            3415,
            3416
        ]
    },
    {
        "id": 1710,
        "name": "Hackett, Skiles and Kub",
        "sector": "Retail",
        "siren": 138334261,
        "results": [
            3417,
            3418
        ]
    },
    {
        "id": 1711,
        "name": "Harvey-Hills",
        "sector": "Retail",
        "siren": 182994382,
        "results": [
            3419,
            3420
        ]
    },
    {
        "id": 1712,
        "name": "Haley and Sons",
        "sector": "Retail",
        "siren": 151450992,
        "results": [
            3421,
            3422
        ]
    },
    {
        "id": 1713,
        "name": "Torp-Dibbert",
        "sector": "Luxury",
        "siren": 144601014,
        "results": [
            3423,
            3424
        ]
    },
    {
        "id": 1714,
        "name": "Simonis, Bednar and Rippin",
        "sector": "Services",
        "siren": 165221492,
        "results": [
            3425,
            3426
        ]
    },
    {
        "id": 1715,
        "name": "Abbott and Sons",
        "sector": "Luxury",
        "siren": 113996185,
        "results": [
            3427,
            3428
        ]
    },
    {
        "id": 1716,
        "name": "Bosco, Schaefer and Lowe",
        "sector": "Retail",
        "siren": 157478040,
        "results": [
            3429,
            3430
        ]
    },
    {
        "id": 1717,
        "name": "Gorczany, Sawayn and McGlynn",
        "sector": "Services",
        "siren": 160059963,
        "results": [
            3431,
            3432
        ]
    },
    {
        "id": 1718,
        "name": "Bins Group",
        "sector": "Electronic",
        "siren": 116099037,
        "results": [
            3433,
            3434
        ]
    },
    {
        "id": 1719,
        "name": "Leuschke-Kilback",
        "sector": "Electronic",
        "siren": 198600005,
        "results": [
            3435,
            3436
        ]
    },
    {
        "id": 1720,
        "name": "Larkin, Shields and Jakubowski",
        "sector": "Services",
        "siren": 110483889,
        "results": [
            3437,
            3438
        ]
    },
    {
        "id": 1721,
        "name": "Mraz-Mraz",
        "sector": "Energy",
        "siren": 172473419,
        "results": [
            3439,
            3440
        ]
    },
    {
        "id": 1722,
        "name": "Weissnat, Labadie and Fritsch",
        "sector": "Energy",
        "siren": 174322593,
        "results": [
            3441,
            3442
        ]
    },
    {
        "id": 1723,
        "name": "Ernser, Stracke and Towne",
        "sector": "Retail",
        "siren": 167969115,
        "results": [
            3443,
            3444
        ]
    },
    {
        "id": 1724,
        "name": "Johnston, McLaughlin and O'Connell",
        "sector": "Retail",
        "siren": 193048136,
        "results": [
            3445,
            3446
        ]
    },
    {
        "id": 1725,
        "name": "Kihn-Hessel",
        "sector": "Retail",
        "siren": 118060487,
        "results": [
            3447,
            3448
        ]
    },
    {
        "id": 1726,
        "name": "Wilkinson, Haag and Quitzon",
        "sector": "Electronic",
        "siren": 109363148,
        "results": [
            3449,
            3450
        ]
    },
    {
        "id": 1727,
        "name": "Barrows, Jerde and Johns",
        "sector": "Luxury",
        "siren": 164637641,
        "results": [
            3451,
            3452
        ]
    },
    {
        "id": 1728,
        "name": "Waters Inc",
        "sector": "Retail",
        "siren": 113972729,
        "results": [
            3453,
            3454
        ]
    },
    {
        "id": 1729,
        "name": "Luettgen and Sons",
        "sector": "Services",
        "siren": 185773008,
        "results": [
            3455,
            3456
        ]
    },
    {
        "id": 1730,
        "name": "Hintz, Osinski and Cassin",
        "sector": "Electronic",
        "siren": 113094912,
        "results": [
            3457,
            3458
        ]
    },
    {
        "id": 1731,
        "name": "Crona, Kautzer and Stoltenberg",
        "sector": "Electronic",
        "siren": 130734218,
        "results": [
            3459,
            3460
        ]
    },
    {
        "id": 1732,
        "name": "Baumbach, Murazik and Mertz",
        "sector": "Luxury",
        "siren": 153857981,
        "results": [
            3461,
            3462
        ]
    },
    {
        "id": 1733,
        "name": "Bernier-Lebsack",
        "sector": "Services",
        "siren": 150256433,
        "results": [
            3463,
            3464
        ]
    },
    {
        "id": 1734,
        "name": "Schneider-Maggio",
        "sector": "Energy",
        "siren": 172089593,
        "results": [
            3465,
            3466
        ]
    },
    {
        "id": 1735,
        "name": "Wilkinson-Roberts",
        "sector": "Energy",
        "siren": 175622981,
        "results": [
            3467,
            3468
        ]
    },
    {
        "id": 1736,
        "name": "Wilderman Inc",
        "sector": "Services",
        "siren": 125295327,
        "results": [
            3469,
            3470
        ]
    },
    {
        "id": 1737,
        "name": "Leffler and Sons",
        "sector": "Electronic",
        "siren": 186523701,
        "results": [
            3471,
            3472
        ]
    },
    {
        "id": 1738,
        "name": "Runolfsdottir-Lemke",
        "sector": "Luxury",
        "siren": 192618213,
        "results": [
            3473,
            3474
        ]
    },
    {
        "id": 1739,
        "name": "Kassulke, Cummings and Bernier",
        "sector": "Energy",
        "siren": 126316106,
        "results": [
            3475,
            3476
        ]
    },
    {
        "id": 1740,
        "name": "Bailey-White",
        "sector": "Energy",
        "siren": 104371166,
        "results": [
            3477,
            3478
        ]
    },
    {
        "id": 1741,
        "name": "Hermiston-Wintheiser",
        "sector": "Electronic",
        "siren": 155108336,
        "results": [
            3479,
            3480
        ]
    },
    {
        "id": 1742,
        "name": "Boyle-Dach",
        "sector": "Electronic",
        "siren": 123420846,
        "results": [
            3481,
            3482
        ]
    },
    {
        "id": 1743,
        "name": "Dibbert-Dibbert",
        "sector": "Electronic",
        "siren": 101153573,
        "results": [
            3483,
            3484
        ]
    },
    {
        "id": 1744,
        "name": "Deckow, Grimes and Kohler",
        "sector": "Retail",
        "siren": 166021815,
        "results": [
            3485,
            3486
        ]
    },
    {
        "id": 1745,
        "name": "Lueilwitz, Simonis and Larkin",
        "sector": "Electronic",
        "siren": 188342281,
        "results": [
            3487,
            3488
        ]
    },
    {
        "id": 1746,
        "name": "Heathcote, Pollich and Harvey",
        "sector": "Retail",
        "siren": 149628249,
        "results": [
            3489,
            3490
        ]
    },
    {
        "id": 1747,
        "name": "Zemlak-Reichel",
        "sector": "Services",
        "siren": 134911473,
        "results": [
            3491,
            3492
        ]
    },
    {
        "id": 1748,
        "name": "Lakin-Spinka",
        "sector": "Luxury",
        "siren": 199382696,
        "results": [
            3493,
            3494
        ]
    },
    {
        "id": 1749,
        "name": "O'Keefe-Halvorson",
        "sector": "Services",
        "siren": 178088396,
        "results": [
            3495,
            3496
        ]
    },
    {
        "id": 1750,
        "name": "Crist, Kessler and Johnson",
        "sector": "Retail",
        "siren": 107859887,
        "results": [
            3497,
            3498
        ]
    },
    {
        "id": 1751,
        "name": "Stiedemann-Fahey",
        "sector": "Retail",
        "siren": 117424271,
        "results": [
            3499,
            3500
        ]
    },
    {
        "id": 1752,
        "name": "Goodwin-Reynolds",
        "sector": "Services",
        "siren": 193407207,
        "results": [
            3501,
            3502
        ]
    },
    {
        "id": 1753,
        "name": "Braun, Stanton and Okuneva",
        "sector": "Electronic",
        "siren": 190708262,
        "results": [
            3503,
            3504
        ]
    },
    {
        "id": 1754,
        "name": "Hahn-Torp",
        "sector": "Luxury",
        "siren": 107000490,
        "results": [
            3505,
            3506
        ]
    },
    {
        "id": 1755,
        "name": "Kozey-Swift",
        "sector": "Retail",
        "siren": 192090659,
        "results": [
            3507,
            3508
        ]
    },
    {
        "id": 1756,
        "name": "Bartoletti Group",
        "sector": "Luxury",
        "siren": 136943954,
        "results": [
            3509,
            3510
        ]
    },
    {
        "id": 1757,
        "name": "Nicolas, Little and Jacobson",
        "sector": "Services",
        "siren": 153253980,
        "results": [
            3511,
            3512
        ]
    },
    {
        "id": 1758,
        "name": "Lindgren-Hoeger",
        "sector": "Luxury",
        "siren": 119804976,
        "results": [
            3513,
            3514
        ]
    },
    {
        "id": 1759,
        "name": "Mitchell LLC",
        "sector": "Electronic",
        "siren": 178944328,
        "results": [
            3515,
            3516
        ]
    },
    {
        "id": 1760,
        "name": "Schroeder-Jacobson",
        "sector": "Energy",
        "siren": 147197381,
        "results": [
            3517,
            3518
        ]
    },
    {
        "id": 1761,
        "name": "McKenzie-Kuhic",
        "sector": "Luxury",
        "siren": 190437806,
        "results": [
            3519,
            3520
        ]
    },
    {
        "id": 1762,
        "name": "McCullough-Cassin",
        "sector": "Services",
        "siren": 160132658,
        "results": [
            3521,
            3522
        ]
    },
    {
        "id": 1763,
        "name": "Braun LLC",
        "sector": "Services",
        "siren": 196168992,
        "results": [
            3523,
            3524
        ]
    },
    {
        "id": 1764,
        "name": "Lemke LLC",
        "sector": "Energy",
        "siren": 138090362,
        "results": [
            3525,
            3526
        ]
    },
    {
        "id": 1765,
        "name": "Gutkowski Group",
        "sector": "Luxury",
        "siren": 115193251,
        "results": [
            3527,
            3528
        ]
    },
    {
        "id": 1766,
        "name": "Kiehn, Walter and Corkery",
        "sector": "Services",
        "siren": 166309097,
        "results": [
            3529,
            3530
        ]
    },
    {
        "id": 1767,
        "name": "Bogisich Inc",
        "sector": "Luxury",
        "siren": 197808747,
        "results": [
            3531,
            3532
        ]
    },
    {
        "id": 1768,
        "name": "Donnelly and Sons",
        "sector": "Retail",
        "siren": 123525391,
        "results": [
            3533,
            3534
        ]
    },
    {
        "id": 1769,
        "name": "VonRueden-Herman",
        "sector": "Retail",
        "siren": 156347768,
        "results": [
            3535,
            3536
        ]
    },
    {
        "id": 1770,
        "name": "Miller Inc",
        "sector": "Luxury",
        "siren": 132846185,
        "results": [
            3537,
            3538
        ]
    },
    {
        "id": 1771,
        "name": "Bruen Inc",
        "sector": "Services",
        "siren": 164392116,
        "results": [
            3539,
            3540
        ]
    },
    {
        "id": 1772,
        "name": "Dietrich-Crooks",
        "sector": "Energy",
        "siren": 199183252,
        "results": [
            3541,
            3542
        ]
    },
    {
        "id": 1773,
        "name": "Kautzer-Skiles",
        "sector": "Services",
        "siren": 131225918,
        "results": [
            3543,
            3544
        ]
    },
    {
        "id": 1774,
        "name": "Steuber and Sons",
        "sector": "Electronic",
        "siren": 189194255,
        "results": [
            3545,
            3546
        ]
    },
    {
        "id": 1775,
        "name": "Howe-Torphy",
        "sector": "Retail",
        "siren": 195511475,
        "results": [
            3547,
            3548
        ]
    },
    {
        "id": 1776,
        "name": "McGlynn, Kihn and Schuppe",
        "sector": "Electronic",
        "siren": 173529930,
        "results": [
            3549,
            3550
        ]
    },
    {
        "id": 1777,
        "name": "Zieme-Dietrich",
        "sector": "Services",
        "siren": 114438154,
        "results": [
            3551,
            3552
        ]
    },
    {
        "id": 1778,
        "name": "Schmeler Group",
        "sector": "Luxury",
        "siren": 111413783,
        "results": [
            3553,
            3554
        ]
    },
    {
        "id": 1779,
        "name": "Sanford-Considine",
        "sector": "Services",
        "siren": 170657089,
        "results": [
            3555,
            3556
        ]
    },
    {
        "id": 1780,
        "name": "Stokes, Homenick and Nader",
        "sector": "Luxury",
        "siren": 147173425,
        "results": [
            3557,
            3558
        ]
    },
    {
        "id": 1781,
        "name": "Considine-Cummings",
        "sector": "Services",
        "siren": 198256349,
        "results": [
            3559,
            3560
        ]
    },
    {
        "id": 1782,
        "name": "Casper, Fay and Jerde",
        "sector": "Services",
        "siren": 117021662,
        "results": [
            3561,
            3562
        ]
    },
    {
        "id": 1783,
        "name": "Wolf, Morissette and Schulist",
        "sector": "Luxury",
        "siren": 128370244,
        "results": [
            3563,
            3564
        ]
    },
    {
        "id": 1784,
        "name": "Herzog and Sons",
        "sector": "Electronic",
        "siren": 101089433,
        "results": [
            3565,
            3566
        ]
    },
    {
        "id": 1785,
        "name": "Bednar Group",
        "sector": "Retail",
        "siren": 199436997,
        "results": [
            3567,
            3568
        ]
    },
    {
        "id": 1786,
        "name": "Runolfsson Group",
        "sector": "Luxury",
        "siren": 161322515,
        "results": [
            3569,
            3570
        ]
    },
    {
        "id": 1787,
        "name": "Howell, Bailey and Feil",
        "sector": "Retail",
        "siren": 196801336,
        "results": [
            3571,
            3572
        ]
    },
    {
        "id": 1788,
        "name": "Ferry-Will",
        "sector": "Services",
        "siren": 147994018,
        "results": [
            3573,
            3574
        ]
    },
    {
        "id": 1789,
        "name": "Paucek Inc",
        "sector": "Services",
        "siren": 159055475,
        "results": [
            3575,
            3576
        ]
    },
    {
        "id": 1790,
        "name": "Cremin LLC",
        "sector": "Luxury",
        "siren": 144720282,
        "results": [
            3577,
            3578
        ]
    },
    {
        "id": 1791,
        "name": "Wiegand-Hickle",
        "sector": "Retail",
        "siren": 152118912,
        "results": [
            3579,
            3580
        ]
    },
    {
        "id": 1792,
        "name": "Schamberger LLC",
        "sector": "Energy",
        "siren": 197222466,
        "results": [
            3581,
            3582
        ]
    },
    {
        "id": 1793,
        "name": "Hoeger-King",
        "sector": "Luxury",
        "siren": 134035800,
        "results": [
            3583,
            3584
        ]
    },
    {
        "id": 1794,
        "name": "Bashirian-Thompson",
        "sector": "Electronic",
        "siren": 182822166,
        "results": [
            3585,
            3586
        ]
    },
    {
        "id": 1795,
        "name": "Lebsack and Sons",
        "sector": "Services",
        "siren": 148314895,
        "results": [
            3587,
            3588
        ]
    },
    {
        "id": 1796,
        "name": "Larson, Murray and Hamill",
        "sector": "Energy",
        "siren": 196282306,
        "results": [
            3589,
            3590
        ]
    },
    {
        "id": 1797,
        "name": "Kutch, Ruecker and Krajcik",
        "sector": "Energy",
        "siren": 120301296,
        "results": [
            3591,
            3592
        ]
    },
    {
        "id": 1798,
        "name": "Smitham Inc",
        "sector": "Luxury",
        "siren": 158346415,
        "results": [
            3593,
            3594
        ]
    },
    {
        "id": 1799,
        "name": "Hilll, Prosacco and Dickens",
        "sector": "Energy",
        "siren": 142348939,
        "results": [
            3595,
            3596
        ]
    },
    {
        "id": 1800,
        "name": "Homenick and Sons",
        "sector": "Retail",
        "siren": 199752635,
        "results": [
            3597,
            3598
        ]
    },
    {
        "id": 1801,
        "name": "Hartmann-Considine",
        "sector": "Retail",
        "siren": 142490319,
        "results": [
            3599,
            3600
        ]
    },
    {
        "id": 1802,
        "name": "Abshire Group",
        "sector": "Retail",
        "siren": 182946986,
        "results": [
            3601,
            3602
        ]
    },
    {
        "id": 1803,
        "name": "Rolfson, Schowalter and Witting",
        "sector": "Electronic",
        "siren": 115548592,
        "results": [
            3603,
            3604
        ]
    },
    {
        "id": 1804,
        "name": "Smith, Mayer and Huels",
        "sector": "Energy",
        "siren": 116819731,
        "results": [
            3605,
            3606
        ]
    },
    {
        "id": 1805,
        "name": "Christiansen Group",
        "sector": "Retail",
        "siren": 105304056,
        "results": [
            3607,
            3608
        ]
    },
    {
        "id": 1806,
        "name": "Grimes-Hirthe",
        "sector": "Retail",
        "siren": 156142607,
        "results": [
            3609,
            3610
        ]
    },
    {
        "id": 1807,
        "name": "Douglas-Leffler",
        "sector": "Services",
        "siren": 155969051,
        "results": [
            3611,
            3612
        ]
    },
    {
        "id": 1808,
        "name": "Zboncak and Sons",
        "sector": "Energy",
        "siren": 147813224,
        "results": [
            3613,
            3614
        ]
    },
    {
        "id": 1809,
        "name": "Lockman-Borer",
        "sector": "Retail",
        "siren": 126729648,
        "results": [
            3615,
            3616
        ]
    },
    {
        "id": 1810,
        "name": "Bergstrom Group",
        "sector": "Retail",
        "siren": 148036040,
        "results": [
            3617,
            3618
        ]
    },
    {
        "id": 1811,
        "name": "Langosh-D'Amore",
        "sector": "Electronic",
        "siren": 151623097,
        "results": [
            3619,
            3620
        ]
    },
    {
        "id": 1812,
        "name": "Lynch-Zulauf",
        "sector": "Retail",
        "siren": 195588812,
        "results": [
            3621,
            3622
        ]
    },
    {
        "id": 1813,
        "name": "Fisher, Cummerata and Rutherford",
        "sector": "Electronic",
        "siren": 180364589,
        "results": []
    },
    {
        "id": 1814,
        "name": "Reinger Inc",
        "sector": "Services",
        "siren": 135694027,
        "results": [
            3623,
            3624
        ]
    },
    {
        "id": 1815,
        "name": "Torphy, Rosenbaum and Rempel",
        "sector": "Electronic",
        "siren": 107855014,
        "results": [
            3625,
            3626
        ]
    },
    {
        "id": 1816,
        "name": "Towne-Dach",
        "sector": "Energy",
        "siren": 115104805,
        "results": [
            3627,
            3628
        ]
    },
    {
        "id": 1817,
        "name": "Hane-Stanton",
        "sector": "Luxury",
        "siren": 151419067,
        "results": [
            3629,
            3630
        ]
    },
    {
        "id": 1818,
        "name": "Gaylord and Sons",
        "sector": "Retail",
        "siren": 147007807,
        "results": [
            3631,
            3632
        ]
    },
    {
        "id": 1819,
        "name": "Wiegand-Hoeger",
        "sector": "Energy",
        "siren": 143629487,
        "results": [
            3633,
            3634
        ]
    },
    {
        "id": 1820,
        "name": "Rogahn and Sons",
        "sector": "Services",
        "siren": 194214776,
        "results": [
            3635,
            3636
        ]
    },
    {
        "id": 1821,
        "name": "Pagac, Bednar and Von",
        "sector": "Retail",
        "siren": 176873074,
        "results": [
            3637,
            3638
        ]
    },
    {
        "id": 1822,
        "name": "Wilderman-Fay",
        "sector": "Services",
        "siren": 130425768,
        "results": [
            3639,
            3640
        ]
    },
    {
        "id": 1823,
        "name": "Muller Group",
        "sector": "Luxury",
        "siren": 175112687,
        "results": [
            3641,
            3642
        ]
    },
    {
        "id": 1824,
        "name": "Cronin, Kessler and Corwin",
        "sector": "Energy",
        "siren": 119802584,
        "results": [
            3643,
            3644
        ]
    },
    {
        "id": 1825,
        "name": "Sporer-Romaguera",
        "sector": "Electronic",
        "siren": 100614525,
        "results": [
            3645,
            3646
        ]
    },
    {
        "id": 1826,
        "name": "Borer and Sons",
        "sector": "Retail",
        "siren": 162375181,
        "results": [
            3647,
            3648
        ]
    },
    {
        "id": 1827,
        "name": "Berge, Blanda and Gutmann",
        "sector": "Electronic",
        "siren": 128182766,
        "results": [
            3649,
            3650
        ]
    },
    {
        "id": 1828,
        "name": "Sawayn-Hermiston",
        "sector": "Luxury",
        "siren": 189859166,
        "results": [
            3651,
            3652
        ]
    },
    {
        "id": 1829,
        "name": "Halvorson Group",
        "sector": "Luxury",
        "siren": 199790774,
        "results": [
            3653,
            3654
        ]
    },
    {
        "id": 1830,
        "name": "Donnelly-Mraz",
        "sector": "Services",
        "siren": 179611598,
        "results": [
            3655,
            3656
        ]
    },
    {
        "id": 1831,
        "name": "Legros, Bradtke and O'Keefe",
        "sector": "Retail",
        "siren": 114151737,
        "results": [
            3657,
            3658
        ]
    },
    {
        "id": 1832,
        "name": "Fay and Sons",
        "sector": "Luxury",
        "siren": 100933072,
        "results": [
            3659,
            3660
        ]
    },
    {
        "id": 1833,
        "name": "Cassin LLC",
        "sector": "Electronic",
        "siren": 159459542,
        "results": [
            3661,
            3662
        ]
    },
    {
        "id": 1834,
        "name": "Robel Inc",
        "sector": "Luxury",
        "siren": 138199832,
        "results": [
            3663,
            3664
        ]
    },
    {
        "id": 1835,
        "name": "Reinger Inc",
        "sector": "Services",
        "siren": 135694027,
        "results": [
            3665,
            3666
        ]
    },
    {
        "id": 1836,
        "name": "Torphy, Rosenbaum and Rempel",
        "sector": "Electronic",
        "siren": 107855014,
        "results": [
            3667,
            3668
        ]
    },
    {
        "id": 1837,
        "name": "Towne-Dach",
        "sector": "Energy",
        "siren": 115104805,
        "results": [
            3669,
            3670
        ]
    },
    {
        "id": 1838,
        "name": "Hane-Stanton",
        "sector": "Luxury",
        "siren": 151419067,
        "results": [
            3671,
            3672
        ]
    },
    {
        "id": 1839,
        "name": "Gaylord and Sons",
        "sector": "Retail",
        "siren": 147007807,
        "results": [
            3673,
            3674
        ]
    },
    {
        "id": 1840,
        "name": "Wiegand-Hoeger",
        "sector": "Energy",
        "siren": 143629487,
        "results": [
            3675,
            3676
        ]
    },
    {
        "id": 1841,
        "name": "Rogahn and Sons",
        "sector": "Services",
        "siren": 194214776,
        "results": [
            3677,
            3678
        ]
    },
    {
        "id": 1842,
        "name": "Pagac, Bednar and Von",
        "sector": "Retail",
        "siren": 176873074,
        "results": [
            3679,
            3680
        ]
    },
    {
        "id": 1843,
        "name": "Wilderman-Fay",
        "sector": "Services",
        "siren": 130425768,
        "results": [
            3681,
            3682
        ]
    },
    {
        "id": 1844,
        "name": "Muller Group",
        "sector": "Luxury",
        "siren": 175112687,
        "results": [
            3683,
            3684
        ]
    },
    {
        "id": 1845,
        "name": "Cronin, Kessler and Corwin",
        "sector": "Energy",
        "siren": 119802584,
        "results": [
            3685,
            3686
        ]
    },
    {
        "id": 1846,
        "name": "Sporer-Romaguera",
        "sector": "Electronic",
        "siren": 100614525,
        "results": [
            3687,
            3688
        ]
    },
    {
        "id": 1847,
        "name": "Borer and Sons",
        "sector": "Retail",
        "siren": 162375181,
        "results": [
            3689,
            3690
        ]
    },
    {
        "id": 1848,
        "name": "Berge, Blanda and Gutmann",
        "sector": "Electronic",
        "siren": 128182766,
        "results": [
            3691,
            3692
        ]
    },
    {
        "id": 1849,
        "name": "Sawayn-Hermiston",
        "sector": "Luxury",
        "siren": 189859166,
        "results": [
            3693,
            3694
        ]
    },
    {
        "id": 1850,
        "name": "Halvorson Group",
        "sector": "Luxury",
        "siren": 199790774,
        "results": [
            3695,
            3696
        ]
    },
    {
        "id": 1851,
        "name": "Donnelly-Mraz",
        "sector": "Services",
        "siren": 179611598,
        "results": [
            3697,
            3698
        ]
    },
    {
        "id": 1852,
        "name": "Legros, Bradtke and O'Keefe",
        "sector": "Retail",
        "siren": 114151737,
        "results": [
            3699,
            3700
        ]
    },
    {
        "id": 1853,
        "name": "Fay and Sons",
        "sector": "Luxury",
        "siren": 100933072,
        "results": [
            3701,
            3702
        ]
    },
    {
        "id": 1854,
        "name": "Cassin LLC",
        "sector": "Electronic",
        "siren": 159459542,
        "results": [
            3703,
            3704
        ]
    },
    {
        "id": 1855,
        "name": "Robel Inc",
        "sector": "Luxury",
        "siren": 138199832,
        "results": [
            3705,
            3706
        ]
    },
    {
        "id": 1856,
        "name": "Oberbrunner-Gutmann",
        "sector": "Energy",
        "siren": 131043727,
        "results": [
            3707,
            3708
        ]
    },
    {
        "id": 1857,
        "name": "Stracke Group",
        "sector": "Electronic",
        "siren": 190537129,
        "results": [
            3709,
            3710
        ]
    },
    {
        "id": 1858,
        "name": "Collins Group",
        "sector": "Retail",
        "siren": 148151467,
        "results": [
            3711,
            3712
        ]
    },
    {
        "id": 1859,
        "name": "Hoeger, Schoen and Dibbert",
        "sector": "Luxury",
        "siren": 175662557,
        "results": [
            3713,
            3714
        ]
    },
    {
        "id": 1860,
        "name": "Pacocha-Schmitt",
        "sector": "Energy",
        "siren": 132741221,
        "results": [
            3715,
            3716
        ]
    },
    {
        "id": 1861,
        "name": "Collier-Goldner",
        "sector": "Electronic",
        "siren": 190574530,
        "results": [
            3717,
            3718
        ]
    },
    {
        "id": 1862,
        "name": "Kiehn, Stoltenberg and Friesen",
        "sector": "Electronic",
        "siren": 151306292,
        "results": [
            3719,
            3720
        ]
    },
    {
        "id": 1863,
        "name": "Johnston, Mante and Purdy",
        "sector": "Services",
        "siren": 132122930,
        "results": [
            3721,
            3722
        ]
    },
    {
        "id": 1864,
        "name": "Lowe-Legros",
        "sector": "Electronic",
        "siren": 103764020,
        "results": [
            3723,
            3724
        ]
    },
    {
        "id": 1865,
        "name": "Schulist LLC",
        "sector": "Services",
        "siren": 130132106,
        "results": [
            3725,
            3726
        ]
    },
    {
        "id": 1866,
        "name": "Ankunding-Lindgren",
        "sector": "Energy",
        "siren": 190875445,
        "results": [
            3727,
            3728
        ]
    },
    {
        "id": 1867,
        "name": "Hudson, Cole and Torp",
        "sector": "Electronic",
        "siren": 149620575,
        "results": [
            3729,
            3730
        ]
    },
    {
        "id": 1868,
        "name": "Fisher Inc",
        "sector": "Energy",
        "siren": 195699182,
        "results": [
            3731,
            3732
        ]
    },
    {
        "id": 1869,
        "name": "Turner Inc",
        "sector": "Energy",
        "siren": 181691080,
        "results": [
            3733,
            3734
        ]
    },
    {
        "id": 1870,
        "name": "Welch, Rohan and Ortiz",
        "sector": "Electronic",
        "siren": 148674050,
        "results": [
            3735,
            3736
        ]
    },
    {
        "id": 1871,
        "name": "Senger Group",
        "sector": "Retail",
        "siren": 196126254,
        "results": [
            3737,
            3738
        ]
    },
    {
        "id": 1872,
        "name": "Kertzmann Group",
        "sector": "Retail",
        "siren": 187537793,
        "results": [
            3739,
            3740
        ]
    },
    {
        "id": 1873,
        "name": "Trantow, Bauch and Brown",
        "sector": "Electronic",
        "siren": 194314995,
        "results": [
            3741,
            3742
        ]
    },
    {
        "id": 1874,
        "name": "Kertzmann-Cremin",
        "sector": "Luxury",
        "siren": 110861915,
        "results": [
            3743,
            3744
        ]
    },
    {
        "id": 1875,
        "name": "Jaskolski and Sons",
        "sector": "Services",
        "siren": 163203664,
        "results": [
            3745,
            3746
        ]
    },
    {
        "id": 1876,
        "name": "Gottlieb Inc",
        "sector": "Services",
        "siren": 173594891,
        "results": [
            3747,
            3748
        ]
    },
    {
        "id": 1877,
        "name": "Bins Inc",
        "sector": "Retail",
        "siren": 156610978,
        "results": [
            3749,
            3750
        ]
    },
    {
        "id": 1878,
        "name": "Purdy, Barrows and Mills",
        "sector": "Electronic",
        "siren": 125001735,
        "results": [
            3751,
            3752
        ]
    },
    {
        "id": 1879,
        "name": "Becker and Sons",
        "sector": "Retail",
        "siren": 108220327,
        "results": [
            3753,
            3754
        ]
    },
    {
        "id": 1880,
        "name": "Kozey, Haag and Kuvalis",
        "sector": "Services",
        "siren": 197683277,
        "results": [
            3755,
            3756
        ]
    },
    {
        "id": 1881,
        "name": "Wilkinson, Nienow and Schmeler",
        "sector": "Retail",
        "siren": 195451954,
        "results": [
            3757,
            3758
        ]
    },
    {
        "id": 1882,
        "name": "Cummings, Towne and Stanton",
        "sector": "Services",
        "siren": 175032418,
        "results": [
            3759,
            3760
        ]
    },
    {
        "id": 1883,
        "name": "Kreiger, Mosciski and Kiehn",
        "sector": "Energy",
        "siren": 164388517,
        "results": [
            3761,
            3762
        ]
    },
    {
        "id": 1884,
        "name": "Bode, Hudson and Kulas",
        "sector": "Electronic",
        "siren": 177384240,
        "results": [
            3763,
            3764
        ]
    },
    {
        "id": 1885,
        "name": "Walker, Abbott and Brekke",
        "sector": "Retail",
        "siren": 108949277,
        "results": [
            3765,
            3766
        ]
    },
    {
        "id": 1886,
        "name": "Rath, Legros and Feil",
        "sector": "Electronic",
        "siren": 105376773,
        "results": [
            3767,
            3768
        ]
    },
    {
        "id": 1887,
        "name": "Wunsch, Nienow and Russel",
        "sector": "Retail",
        "siren": 170490793,
        "results": [
            3769,
            3770
        ]
    },
    {
        "id": 1888,
        "name": "Baumbach-Howe",
        "sector": "Luxury",
        "siren": 197432382,
        "results": [
            3771,
            3772
        ]
    },
    {
        "id": 1889,
        "name": "Hartmann, Bruen and McDermott",
        "sector": "Services",
        "siren": 183064272,
        "results": [
            3773,
            3774
        ]
    },
    {
        "id": 1890,
        "name": "Rippin-Klocko",
        "sector": "Luxury",
        "siren": 109837685,
        "results": [
            3775,
            3776
        ]
    },
    {
        "id": 1891,
        "name": "Beer, Simonis and Runolfsdottir",
        "sector": "Energy",
        "siren": 188135119,
        "results": [
            3777,
            3778
        ]
    },
    {
        "id": 1892,
        "name": "Schamberger, Yundt and Zemlak",
        "sector": "Energy",
        "siren": 133026662,
        "results": [
            3779,
            3780
        ]
    },
    {
        "id": 1893,
        "name": "Feeney and Sons",
        "sector": "Services",
        "siren": 132298627,
        "results": [
            3781,
            3782
        ]
    },
    {
        "id": 1894,
        "name": "Kerluke, Durgan and Bernhard",
        "sector": "Retail",
        "siren": 168792627,
        "results": [
            3783,
            3784
        ]
    },
    {
        "id": 1895,
        "name": "Dicki, Moen and Robel",
        "sector": "Retail",
        "siren": 135883737,
        "results": [
            3785,
            3786
        ]
    },
    {
        "id": 1896,
        "name": "Sporer and Sons",
        "sector": "Luxury",
        "siren": 160840028,
        "results": [
            3787,
            3788
        ]
    },
    {
        "id": 1897,
        "name": "Skiles-Gusikowski",
        "sector": "Luxury",
        "siren": 121692227,
        "results": [
            3789,
            3790
        ]
    },
    {
        "id": 1898,
        "name": "Swaniawski Group",
        "sector": "Retail",
        "siren": 173672744,
        "results": [
            3791,
            3792
        ]
    },
    {
        "id": 1899,
        "name": "Satterfield, Brekke and Stanton",
        "sector": "Services",
        "siren": 195857228,
        "results": [
            3793,
            3794
        ]
    },
    {
        "id": 1900,
        "name": "Ortiz-Connelly",
        "sector": "Services",
        "siren": 182726877,
        "results": [
            3795,
            3796
        ]
    },
    {
        "id": 1901,
        "name": "Donnelly, Abernathy and Pacocha",
        "sector": "Retail",
        "siren": 156951403,
        "results": [
            3797,
            3798
        ]
    },
    {
        "id": 1902,
        "name": "Hudson, Reynolds and Jacobson",
        "sector": "Services",
        "siren": 132253095,
        "results": [
            3799,
            3800
        ]
    },
    {
        "id": 1903,
        "name": "Wuckert Group",
        "sector": "Electronic",
        "siren": 165950424,
        "results": [
            3801,
            3802
        ]
    },
    {
        "id": 1904,
        "name": "Larson, Gleason and Murphy",
        "sector": "Retail",
        "siren": 117623669,
        "results": [
            3803,
            3804
        ]
    },
    {
        "id": 1905,
        "name": "Dickinson-Strosin",
        "sector": "Energy",
        "siren": 175066823,
        "results": [
            3805,
            3806
        ]
    },
    {
        "id": 1906,
        "name": "Franecki-Cassin",
        "sector": "Retail",
        "siren": 158424603,
        "results": [
            3807,
            3808
        ]
    },
    {
        "id": 1907,
        "name": "Nikolaus-Flatley",
        "sector": "Electronic",
        "siren": 133495059,
        "results": [
            3809,
            3810
        ]
    },
    {
        "id": 1908,
        "name": "Hickle, Stamm and Fahey",
        "sector": "Services",
        "siren": 101590590,
        "results": [
            3811,
            3812
        ]
    },
    {
        "id": 1909,
        "name": "Bahringer, Blanda and Schmitt",
        "sector": "Luxury",
        "siren": 137219707,
        "results": [
            3813,
            3814
        ]
    },
    {
        "id": 1910,
        "name": "Herman-Abbott",
        "sector": "Retail",
        "siren": 174831134,
        "results": [
            3815,
            3816
        ]
    },
    {
        "id": 1911,
        "name": "Stokes-Hegmann",
        "sector": "Energy",
        "siren": 152222171,
        "results": [
            3817,
            3818
        ]
    },
    {
        "id": 1912,
        "name": "Moen, Krajcik and O'Keefe",
        "sector": "Retail",
        "siren": 179058220,
        "results": [
            3819,
            3820
        ]
    },
    {
        "id": 1913,
        "name": "Huels-Koepp",
        "sector": "Services",
        "siren": 103436807,
        "results": [
            3821,
            3822
        ]
    },
    {
        "id": 1914,
        "name": "Turcotte LLC",
        "sector": "Services",
        "siren": 115411209,
        "results": [
            3823,
            3824
        ]
    },
    {
        "id": 1915,
        "name": "Glover, Kirlin and McGlynn",
        "sector": "Energy",
        "siren": 184190735,
        "results": [
            3825,
            3826
        ]
    },
    {
        "id": 1916,
        "name": "Nader-Bergnaum",
        "sector": "Electronic",
        "siren": 142087889,
        "results": [
            3827,
            3828
        ]
    },
    {
        "id": 1917,
        "name": "McDermott-Rolfson",
        "sector": "Energy",
        "siren": 117468732,
        "results": [
            3829,
            3830
        ]
    },
    {
        "id": 1918,
        "name": "Treutel Group",
        "sector": "Retail",
        "siren": 138837726,
        "results": [
            3831,
            3832
        ]
    },
    {
        "id": 1919,
        "name": "Lynch, Wunsch and Kris",
        "sector": "Services",
        "siren": 152402150,
        "results": [
            3833,
            3834
        ]
    },
    {
        "id": 1920,
        "name": "Tremblay, Keeling and Breitenberg",
        "sector": "Services",
        "siren": 125362017,
        "results": [
            3835,
            3836
        ]
    },
    {
        "id": 1921,
        "name": "Leffler LLC",
        "sector": "Retail",
        "siren": 150610837,
        "results": [
            3837,
            3838
        ]
    },
    {
        "id": 1922,
        "name": "Hintz Inc",
        "sector": "Electronic",
        "siren": 170053342,
        "results": [
            3839,
            3840
        ]
    },
    {
        "id": 1923,
        "name": "Howell Inc",
        "sector": "Energy",
        "siren": 115871891,
        "results": [
            3841,
            3842
        ]
    },
    {
        "id": 1924,
        "name": "Windler-Pfeffer",
        "sector": "Electronic",
        "siren": 186052047,
        "results": [
            3843,
            3844
        ]
    },
    {
        "id": 1925,
        "name": "Greenfelder Group",
        "sector": "Services",
        "siren": 123389196,
        "results": [
            3845,
            3846
        ]
    },
    {
        "id": 1926,
        "name": "Hessel Group",
        "sector": "Electronic",
        "siren": 130378540,
        "results": [
            3847,
            3848
        ]
    },
    {
        "id": 1927,
        "name": "Goyette, Cummerata and Windler",
        "sector": "Luxury",
        "siren": 173090205,
        "results": [
            3849,
            3850
        ]
    },
    {
        "id": 1928,
        "name": "Green LLC",
        "sector": "Energy",
        "siren": 142811173,
        "results": [
            3851,
            3852
        ]
    },
    {
        "id": 1929,
        "name": "MacGyver LLC",
        "sector": "Energy",
        "siren": 180573399,
        "results": [
            3853,
            3854
        ]
    },
    {
        "id": 1930,
        "name": "Cassin-Weissnat",
        "sector": "Electronic",
        "siren": 174008422,
        "results": [
            3855,
            3856
        ]
    },
    {
        "id": 1931,
        "name": "Koelpin-Herman",
        "sector": "Services",
        "siren": 123713934,
        "results": [
            3857,
            3858
        ]
    },
    {
        "id": 1932,
        "name": "Murray, Keeling and Pfeffer",
        "sector": "Services",
        "siren": 153108580,
        "results": [
            3859,
            3860
        ]
    },
    {
        "id": 1933,
        "name": "Metz and Sons",
        "sector": "Electronic",
        "siren": 132514765,
        "results": [
            3861,
            3862
        ]
    },
    {
        "id": 1934,
        "name": "Trantow, Stoltenberg and Rau",
        "sector": "Luxury",
        "siren": 142196394,
        "results": [
            3863,
            3864
        ]
    },
    {
        "id": 1935,
        "name": "Hermann and Sons",
        "sector": "Electronic",
        "siren": 199577547,
        "results": [
            3865,
            3866
        ]
    },
    {
        "id": 1936,
        "name": "Hickle-Cartwright",
        "sector": "Luxury",
        "siren": 145170204,
        "results": [
            3867,
            3868
        ]
    },
    {
        "id": 1937,
        "name": "Balistreri and Sons",
        "sector": "Retail",
        "siren": 122783975,
        "results": [
            3869,
            3870
        ]
    },
    {
        "id": 1938,
        "name": "Welch-Wisoky",
        "sector": "Electronic",
        "siren": 180856598,
        "results": [
            3871,
            3872
        ]
    },
    {
        "id": 1939,
        "name": "Schamberger-Leuschke",
        "sector": "Retail",
        "siren": 101786222,
        "results": [
            3873,
            3874
        ]
    },
    {
        "id": 1940,
        "name": "Hudson and Sons",
        "sector": "Retail",
        "siren": 159421714,
        "results": [
            3875,
            3876
        ]
    },
    {
        "id": 1941,
        "name": "Stehr-Larson",
        "sector": "Electronic",
        "siren": 110442504,
        "results": [
            3877,
            3878
        ]
    },
    {
        "id": 1942,
        "name": "Deckow-Rowe",
        "sector": "Electronic",
        "siren": 140318401,
        "results": [
            3879,
            3880
        ]
    },
    {
        "id": 1943,
        "name": "Mann-Wisoky",
        "sector": "Luxury",
        "siren": 154437824,
        "results": [
            3881,
            3882
        ]
    },
    {
        "id": 1944,
        "name": "Bradtke, Bauch and Hermann",
        "sector": "Electronic",
        "siren": 119255732,
        "results": [
            3883,
            3884
        ]
    },
    {
        "id": 1945,
        "name": "Jaskolski Group",
        "sector": "Electronic",
        "siren": 188974299,
        "results": [
            3885,
            3886
        ]
    },
    {
        "id": 1946,
        "name": "Glover, Lubowitz and Labadie",
        "sector": "Energy",
        "siren": 111353919,
        "results": [
            3887,
            3888
        ]
    },
    {
        "id": 1947,
        "name": "Mraz, Little and Fritsch",
        "sector": "Luxury",
        "siren": 162877974,
        "results": [
            3889,
            3890
        ]
    },
    {
        "id": 1948,
        "name": "Medhurst and Sons",
        "sector": "Services",
        "siren": 125625509,
        "results": [
            3891,
            3892
        ]
    },
    {
        "id": 1949,
        "name": "Schultz Inc",
        "sector": "Retail",
        "siren": 163815675,
        "results": [
            3893,
            3894
        ]
    },
    {
        "id": 1950,
        "name": "Brown Inc",
        "sector": "Retail",
        "siren": 169391204,
        "results": [
            3895,
            3896
        ]
    },
    {
        "id": 1951,
        "name": "Huels Inc",
        "sector": "Luxury",
        "siren": 135296056,
        "results": [
            3897,
            3898
        ]
    },
    {
        "id": 1952,
        "name": "Cassin-Collins",
        "sector": "Energy",
        "siren": 136888845,
        "results": [
            3899,
            3900
        ]
    },
    {
        "id": 1953,
        "name": "Murphy, Reichert and Walsh",
        "sector": "Electronic",
        "siren": 168943428,
        "results": [
            3901,
            3902
        ]
    },
    {
        "id": 1954,
        "name": "Dooley-Flatley",
        "sector": "Retail",
        "siren": 121546181,
        "results": [
            3903,
            3904
        ]
    },
    {
        "id": 1955,
        "name": "Wisozk-Langosh",
        "sector": "Services",
        "siren": 104018793,
        "results": [
            3905,
            3906
        ]
    },
    {
        "id": 1956,
        "name": "Dickinson, Thiel and Wisoky",
        "sector": "Retail",
        "siren": 173786909,
        "results": [
            3907,
            3908
        ]
    },
    {
        "id": 1957,
        "name": "Williamson and Sons",
        "sector": "Luxury",
        "siren": 155097096,
        "results": [
            3909,
            3910
        ]
    },
    {
        "id": 1958,
        "name": "Ferry Group",
        "sector": "Energy",
        "siren": 176633557,
        "results": [
            3911,
            3912
        ]
    },
    {
        "id": 1959,
        "name": "Schiller-Schmidt",
        "sector": "Services",
        "siren": 195591022,
        "results": [
            3913,
            3914
        ]
    },
    {
        "id": 1960,
        "name": "Abshire, Wilderman and Mitchell",
        "sector": "Retail",
        "siren": 141993614,
        "results": [
            3915,
            3916
        ]
    },
    {
        "id": 1961,
        "name": "Hayes LLC",
        "sector": "Services",
        "siren": 143826718,
        "results": [
            3917,
            3918
        ]
    },
    {
        "id": 1962,
        "name": "Tremblay and Sons",
        "sector": "Services",
        "siren": 133962923,
        "results": [
            3919,
            3920
        ]
    },
    {
        "id": 1963,
        "name": "Wisozk Inc",
        "sector": "Luxury",
        "siren": 107568203,
        "results": [
            3921,
            3922
        ]
    },
    {
        "id": 1964,
        "name": "Marvin-Stiedemann",
        "sector": "Electronic",
        "siren": 108626405,
        "results": [
            3923,
            3924
        ]
    },
    {
        "id": 1965,
        "name": "Borer-Cassin",
        "sector": "Luxury",
        "siren": 104300586,
        "results": [
            3925,
            3926
        ]
    },
    {
        "id": 1966,
        "name": "Tromp, Heidenreich and Ziemann",
        "sector": "Retail",
        "siren": 148080477,
        "results": [
            3927,
            3928
        ]
    },
    {
        "id": 1967,
        "name": "Funk Inc",
        "sector": "Electronic",
        "siren": 157012674,
        "results": [
            3929,
            3930
        ]
    },
    {
        "id": 1968,
        "name": "Hayes-Ernser",
        "sector": "Energy",
        "siren": 175994582,
        "results": [
            3931,
            3932
        ]
    },
    {
        "id": 1969,
        "name": "DuBuque, Sawayn and Schaefer",
        "sector": "Electronic",
        "siren": 173913299,
        "results": [
            3933,
            3934
        ]
    },
    {
        "id": 1970,
        "name": "Hyatt-Fahey",
        "sector": "Luxury",
        "siren": 172493289,
        "results": [
            3935,
            3936
        ]
    },
    {
        "id": 1971,
        "name": "Witting-Durgan",
        "sector": "Retail",
        "siren": 193631684,
        "results": [
            3937,
            3938
        ]
    },
    {
        "id": 1972,
        "name": "Wuckert-Gottlieb",
        "sector": "Luxury",
        "siren": 163261401,
        "results": [
            3939,
            3940
        ]
    },
    {
        "id": 1973,
        "name": "Ritchie, Haag and Kuhn",
        "sector": "Energy",
        "siren": 105467035,
        "results": [
            3941,
            3942
        ]
    },
    {
        "id": 1974,
        "name": "Cummerata-Prosacco",
        "sector": "Retail",
        "siren": 116769708,
        "results": [
            3943,
            3944
        ]
    },
    {
        "id": 1975,
        "name": "Schmitt and Sons",
        "sector": "Energy",
        "siren": 146939069,
        "results": [
            3945,
            3946
        ]
    },
    {
        "id": 1976,
        "name": "Bogisich Group",
        "sector": "Retail",
        "siren": 198492376,
        "results": [
            3947,
            3948
        ]
    },
    {
        "id": 1977,
        "name": "Kessler Group",
        "sector": "Electronic",
        "siren": 195285188,
        "results": [
            3949,
            3950
        ]
    },
    {
        "id": 1978,
        "name": "Reilly, Turner and Kilback",
        "sector": "Energy",
        "siren": 170348871,
        "results": [
            3951,
            3952
        ]
    },
    {
        "id": 1979,
        "name": "Stamm-McLaughlin",
        "sector": "Services",
        "siren": 152902170,
        "results": [
            3953,
            3954
        ]
    },
    {
        "id": 1980,
        "name": "Adams, Kassulke and Walter",
        "sector": "Services",
        "siren": 165989484,
        "results": [
            3955,
            3956
        ]
    },
    {
        "id": 1981,
        "name": "Okuneva Inc",
        "sector": "Retail",
        "siren": 113287300,
        "results": [
            3957,
            3958
        ]
    },
    {
        "id": 1982,
        "name": "Kiehn-Greenholt",
        "sector": "Retail",
        "siren": 135593651,
        "results": [
            3959,
            3960
        ]
    },
    {
        "id": 1983,
        "name": "Stanton, Stehr and Considine",
        "sector": "Services",
        "siren": 111297821,
        "results": [
            3961,
            3962
        ]
    },
    {
        "id": 1984,
        "name": "Pagac and Sons",
        "sector": "Energy",
        "siren": 141417076,
        "results": [
            3963,
            3964
        ]
    },
    {
        "id": 1985,
        "name": "Ullrich, Gaylord and Gleason",
        "sector": "Retail",
        "siren": 106730899,
        "results": [
            3965,
            3966
        ]
    },
    {
        "id": 1986,
        "name": "Lemke-Leannon",
        "sector": "Retail",
        "siren": 181852901,
        "results": [
            3967,
            3968
        ]
    },
    {
        "id": 1987,
        "name": "Medhurst Group",
        "sector": "Services",
        "siren": 172472287,
        "results": [
            3969,
            3970
        ]
    },
    {
        "id": 1988,
        "name": "Stoltenberg LLC",
        "sector": "Services",
        "siren": 169273144,
        "results": [
            3971,
            3972
        ]
    },
    {
        "id": 1989,
        "name": "Kerluke LLC",
        "sector": "Energy",
        "siren": 153691905,
        "results": [
            3973,
            3974
        ]
    },
    {
        "id": 1990,
        "name": "Murphy-Lesch",
        "sector": "Electronic",
        "siren": 160775851,
        "results": [
            3975,
            3976
        ]
    },
    {
        "id": 1991,
        "name": "Kilback-Hudson",
        "sector": "Electronic",
        "siren": 198340969,
        "results": [
            3977,
            3978
        ]
    },
    {
        "id": 1992,
        "name": "Rowe, Adams and Pacocha",
        "sector": "Luxury",
        "siren": 152968462,
        "results": [
            3979,
            3980
        ]
    },
    {
        "id": 1993,
        "name": "Schroeder-Toy",
        "sector": "Services",
        "siren": 106049474,
        "results": [
            3981,
            3982
        ]
    },
    {
        "id": 1994,
        "name": "Reilly-Bartoletti",
        "sector": "Luxury",
        "siren": 185568403,
        "results": [
            3983,
            3984
        ]
    },
    {
        "id": 1995,
        "name": "Runte, Trantow and Eichmann",
        "sector": "Services",
        "siren": 163211374,
        "results": [
            3985,
            3986
        ]
    },
    {
        "id": 1996,
        "name": "McGlynn Inc",
        "sector": "Services",
        "siren": 177088555,
        "results": [
            3987,
            3988
        ]
    },
    {
        "id": 1997,
        "name": "Berge Group",
        "sector": "Services",
        "siren": 191593539,
        "results": [
            3989,
            3990
        ]
    },
    {
        "id": 1998,
        "name": "Hansen, Gerhold and Zemlak",
        "sector": "Retail",
        "siren": 196059202,
        "results": [
            3991,
            3992
        ]
    },
    {
        "id": 1999,
        "name": "Leuschke and Sons",
        "sector": "Luxury",
        "siren": 185546426,
        "results": [
            3993,
            3994
        ]
    },
    {
        "id": 2000,
        "name": "Kemmer-Lynch",
        "sector": "Electronic",
        "siren": 130518404,
        "results": [
            3995,
            3996
        ]
    },
    {
        "id": 2001,
        "name": "Tillman, Ruecker and D'Amore",
        "sector": "Retail",
        "siren": 185836676,
        "results": [
            3997,
            3998
        ]
    },
    {
        "id": 2002,
        "name": "Hagenes-Nicolas",
        "sector": "Luxury",
        "siren": 181839234,
        "results": [
            3999,
            4000
        ]
    },
    {
        "id": 2003,
        "name": "Adams LLC",
        "sector": "Energy",
        "siren": 162705282,
        "results": [
            4001,
            4002
        ]
    },
    {
        "id": 2004,
        "name": "Kling, Frami and Thiel",
        "sector": "Electronic",
        "siren": 153775737,
        "results": [
            4003,
            4004
        ]
    },
    {
        "id": 2005,
        "name": "Hirthe Group",
        "sector": "Electronic",
        "siren": 109390434,
        "results": [
            4005,
            4006
        ]
    },
    {
        "id": 2006,
        "name": "Grant-Hills",
        "sector": "Services",
        "siren": 152889154,
        "results": [
            4007,
            4008
        ]
    },
    {
        "id": 2007,
        "name": "Koch, Cassin and Murphy",
        "sector": "Electronic",
        "siren": 175818545,
        "results": [
            4009,
            4010
        ]
    },
    {
        "id": 2008,
        "name": "Koss, Leffler and Fay",
        "sector": "Energy",
        "siren": 119128103,
        "results": [
            4011,
            4012
        ]
    },
    {
        "id": 2009,
        "name": "Corwin-Vandervort",
        "sector": "Energy",
        "siren": 179335809,
        "results": [
            4013,
            4014
        ]
    },
    {
        "id": 2010,
        "name": "Bartoletti-Effertz",
        "sector": "Luxury",
        "siren": 158737316,
        "results": [
            4015,
            4016
        ]
    },
    {
        "id": 2011,
        "name": "O'Reilly, Langosh and Raynor",
        "sector": "Electronic",
        "siren": 138908158,
        "results": [
            4017,
            4018
        ]
    },
    {
        "id": 2012,
        "name": "Upton, Cormier and Morissette",
        "sector": "Luxury",
        "siren": 148123081,
        "results": [
            4019,
            4020
        ]
    },
    {
        "id": 2013,
        "name": "Grady Inc",
        "sector": "Services",
        "siren": 124921215,
        "results": [
            4021,
            4022
        ]
    },
    {
        "id": 2014,
        "name": "Schimmel Group",
        "sector": "Luxury",
        "siren": 182073248,
        "results": [
            4023,
            4024
        ]
    },
    {
        "id": 2015,
        "name": "Schiller Inc",
        "sector": "Retail",
        "siren": 152363753,
        "results": [
            4025,
            4026
        ]
    },
    {
        "id": 2016,
        "name": "Heathcote-Pagac",
        "sector": "Electronic",
        "siren": 142665129,
        "results": [
            4027,
            4028
        ]
    },
    {
        "id": 2017,
        "name": "Dietrich-Kassulke",
        "sector": "Electronic",
        "siren": 153434268,
        "results": [
            4029,
            4030
        ]
    },
    {
        "id": 2018,
        "name": "Carter LLC",
        "sector": "Energy",
        "siren": 137164647,
        "results": [
            4031,
            4032
        ]
    },
    {
        "id": 2019,
        "name": "Stokes-Beahan",
        "sector": "Services",
        "siren": 173257908,
        "results": [
            4033,
            4034
        ]
    },
    {
        "id": 2020,
        "name": "Ward-Leffler",
        "sector": "Electronic",
        "siren": 129146450,
        "results": [
            4035,
            4036
        ]
    },
    {
        "id": 2021,
        "name": "Bogisich Group",
        "sector": "Retail",
        "siren": 155864068,
        "results": [
            4037,
            4038
        ]
    },
    {
        "id": 2022,
        "name": "Wiza, Abshire and Yundt",
        "sector": "Electronic",
        "siren": 167802466,
        "results": [
            4039,
            4040
        ]
    },
    {
        "id": 2023,
        "name": "Hodkiewicz Inc",
        "sector": "Energy",
        "siren": 109632592,
        "results": [
            4041,
            4042
        ]
    },
    {
        "id": 2024,
        "name": "Walker-Legros",
        "sector": "Retail",
        "siren": 139341533,
        "results": [
            4043,
            4044
        ]
    },
    {
        "id": 2025,
        "name": "Willms, Nicolas and Torphy",
        "sector": "Retail",
        "siren": 183352652,
        "results": [
            4045,
            4046
        ]
    },
    {
        "id": 2026,
        "name": "Marks and Sons",
        "sector": "Electronic",
        "siren": 129610484,
        "results": [
            4047,
            4048
        ]
    },
    {
        "id": 2027,
        "name": "Ziemann-Hintz",
        "sector": "Energy",
        "siren": 149431058,
        "results": [
            4049,
            4050
        ]
    },
    {
        "id": 2028,
        "name": "Walter-Bartell",
        "sector": "Energy",
        "siren": 159270097,
        "results": [
            4051,
            4052
        ]
    },
    {
        "id": 2029,
        "name": "Harber and Sons",
        "sector": "Luxury",
        "siren": 105385372,
        "results": [
            4053,
            4054
        ]
    },
    {
        "id": 2030,
        "name": "Pfeffer, Volkman and Jacobs",
        "sector": "Services",
        "siren": 155828039,
        "results": [
            4055,
            4056
        ]
    },
    {
        "id": 2031,
        "name": "Heathcote, Block and Rempel",
        "sector": "Retail",
        "siren": 148575346,
        "results": [
            4057,
            4058
        ]
    },
    {
        "id": 2032,
        "name": "Schuster, Hintz and Luettgen",
        "sector": "Retail",
        "siren": 139843626,
        "results": [
            4059,
            4060
        ]
    },
    {
        "id": 2033,
        "name": "Moore-Funk",
        "sector": "Retail",
        "siren": 138402141,
        "results": [
            4061,
            4062
        ]
    },
    {
        "id": 2034,
        "name": "Gutkowski, Farrell and Altenwerth",
        "sector": "Luxury",
        "siren": 162175274,
        "results": [
            4063,
            4064
        ]
    },
    {
        "id": 2035,
        "name": "Turcotte, Pagac and Welch",
        "sector": "Services",
        "siren": 176753871,
        "results": [
            4065,
            4066
        ]
    },
    {
        "id": 2036,
        "name": "Kovacek-Larkin",
        "sector": "Services",
        "siren": 113674387,
        "results": [
            4067,
            4068
        ]
    },
    {
        "id": 2037,
        "name": "Fay and Sons",
        "sector": "Services",
        "siren": 144972814,
        "results": [
            4069,
            4070
        ]
    },
    {
        "id": 2038,
        "name": "Cummerata-Berge",
        "sector": "Electronic",
        "siren": 154318426,
        "results": [
            4071,
            4072
        ]
    },
    {
        "id": 2039,
        "name": "Schultz, Sporer and Hoppe",
        "sector": "Retail",
        "siren": 174292657,
        "results": [
            4073,
            4074
        ]
    },
    {
        "id": 2040,
        "name": "Cole-Langosh",
        "sector": "Retail",
        "siren": 149623513,
        "results": [
            4075,
            4076
        ]
    },
    {
        "id": 2041,
        "name": "Jakubowski, Spinka and Bogisich",
        "sector": "Retail",
        "siren": 156086955,
        "results": [
            4077,
            4078
        ]
    },
    {
        "id": 2042,
        "name": "Effertz-Batz",
        "sector": "Energy",
        "siren": 191578492,
        "results": [
            4079,
            4080
        ]
    },
    {
        "id": 2043,
        "name": "Parisian Inc",
        "sector": "Electronic",
        "siren": 100544297,
        "results": [
            4081,
            4082
        ]
    },
    {
        "id": 2044,
        "name": "Jacobson-Hammes",
        "sector": "Retail",
        "siren": 197942932,
        "results": [
            4083,
            4084
        ]
    },
    {
        "id": 2045,
        "name": "Leuschke-Mante",
        "sector": "Electronic",
        "siren": 197657514,
        "results": [
            4085,
            4086
        ]
    },
    {
        "id": 2046,
        "name": "Bernhard Inc",
        "sector": "Electronic",
        "siren": 102657824,
        "results": [
            4087,
            4088
        ]
    },
    {
        "id": 2047,
        "name": "Bergstrom, O'Reilly and Bogan",
        "sector": "Electronic",
        "siren": 194602712,
        "results": [
            4089,
            4090
        ]
    },
    {
        "id": 2048,
        "name": "Nitzsche, Stark and Mitchell",
        "sector": "Energy",
        "siren": 192119655,
        "results": [
            4091,
            4092
        ]
    },
    {
        "id": 2049,
        "name": "Dare, Ryan and Hickle",
        "sector": "Services",
        "siren": 190429858,
        "results": [
            4093,
            4094
        ]
    },
    {
        "id": 2050,
        "name": "Johns and Sons",
        "sector": "Electronic",
        "siren": 196788807,
        "results": [
            4095,
            4096
        ]
    },
    {
        "id": 2051,
        "name": "Larkin-Jast",
        "sector": "Electronic",
        "siren": 119438694,
        "results": [
            4097,
            4098
        ]
    },
    {
        "id": 2052,
        "name": "Schinner-Batz",
        "sector": "Luxury",
        "siren": 113489329,
        "results": [
            4099,
            4100
        ]
    },
    {
        "id": 2053,
        "name": "Fay, Bosco and Williamson",
        "sector": "Energy",
        "siren": 117151370,
        "results": [
            4101,
            4102
        ]
    },
    {
        "id": 2054,
        "name": "Wiza Group",
        "sector": "Energy",
        "siren": 119972532,
        "results": [
            4103,
            4104
        ]
    },
    {
        "id": 2055,
        "name": "Koepp-Hilll",
        "sector": "Energy",
        "siren": 154362070,
        "results": [
            4105,
            4106
        ]
    },
    {
        "id": 2056,
        "name": "O'Keefe-Brown",
        "sector": "Energy",
        "siren": 123618667,
        "results": [
            4107,
            4108
        ]
    },
    {
        "id": 2057,
        "name": "Stehr-Sanford",
        "sector": "Electronic",
        "siren": 167001629,
        "results": [
            4109,
            4110
        ]
    },
    {
        "id": 2058,
        "name": "Kunze-Towne",
        "sector": "Luxury",
        "siren": 194461061,
        "results": [
            4111,
            4112
        ]
    },
    {
        "id": 2059,
        "name": "Donnelly and Sons",
        "sector": "Services",
        "siren": 145161488,
        "results": [
            4113,
            4114
        ]
    },
    {
        "id": 2060,
        "name": "Schneider Inc",
        "sector": "Retail",
        "siren": 164176868,
        "results": [
            4115,
            4116
        ]
    },
    {
        "id": 2061,
        "name": "Collins-Pfannerstill",
        "sector": "Retail",
        "siren": 179486766,
        "results": [
            4117,
            4118
        ]
    },
    {
        "id": 2062,
        "name": "Huel-Bernhard",
        "sector": "Services",
        "siren": 131003782,
        "results": [
            4119,
            4120
        ]
    },
    {
        "id": 2063,
        "name": "Yost-Ullrich",
        "sector": "Energy",
        "siren": 188847833,
        "results": [
            4121,
            4122
        ]
    },
    {
        "id": 2064,
        "name": "McCullough, Spinka and Miller",
        "sector": "Energy",
        "siren": 199981161,
        "results": [
            4123,
            4124
        ]
    },
    {
        "id": 2065,
        "name": "Hilpert, Veum and Donnelly",
        "sector": "Services",
        "siren": 160977920,
        "results": [
            4125,
            4126
        ]
    },
    {
        "id": 2066,
        "name": "Kutch LLC",
        "sector": "Electronic",
        "siren": 110094965,
        "results": [
            4127,
            4128
        ]
    },
    {
        "id": 2067,
        "name": "Muller-Volkman",
        "sector": "Energy",
        "siren": 144184638,
        "results": [
            4129,
            4130
        ]
    },
    {
        "id": 2068,
        "name": "Sawayn and Sons",
        "sector": "Energy",
        "siren": 131330675,
        "results": [
            4131,
            4132
        ]
    },
    {
        "id": 2069,
        "name": "Stehr-Hessel",
        "sector": "Retail",
        "siren": 191815148,
        "results": [
            4133,
            4134
        ]
    },
    {
        "id": 2070,
        "name": "O'Kon-Hermiston",
        "sector": "Services",
        "siren": 150529572,
        "results": [
            4135,
            4136
        ]
    },
    {
        "id": 2071,
        "name": "Stokes, Walter and Bode",
        "sector": "Electronic",
        "siren": 161617766,
        "results": [
            4137,
            4138
        ]
    },
    {
        "id": 2072,
        "name": "MacGyver and Sons",
        "sector": "Electronic",
        "siren": 107852119,
        "results": [
            4139,
            4140
        ]
    },
    {
        "id": 2073,
        "name": "Reichert LLC",
        "sector": "Energy",
        "siren": 111533385,
        "results": [
            4141,
            4142
        ]
    },
    {
        "id": 2074,
        "name": "Ernser, Gleichner and Hane",
        "sector": "Services",
        "siren": 138679184,
        "results": [
            4143,
            4144
        ]
    },
    {
        "id": 2075,
        "name": "Bauch, Stiedemann and Bogisich",
        "sector": "Electronic",
        "siren": 115223293,
        "results": [
            4145,
            4146
        ]
    },
    {
        "id": 2076,
        "name": "Feest-Bogan",
        "sector": "Luxury",
        "siren": 159946640,
        "results": [
            4147,
            4148
        ]
    },
    {
        "id": 2077,
        "name": "Bauch-Rice",
        "sector": "Services",
        "siren": 104113426,
        "results": [
            4149,
            4150
        ]
    },
    {
        "id": 2078,
        "name": "Weissnat-Hermann",
        "sector": "Energy",
        "siren": 125243257,
        "results": [
            4151,
            4152
        ]
    },
    {
        "id": 2079,
        "name": "Boyer LLC",
        "sector": "Retail",
        "siren": 142415138,
        "results": [
            4153,
            4154
        ]
    },
    {
        "id": 2080,
        "name": "Schaden-Maggio",
        "sector": "Services",
        "siren": 148429613,
        "results": [
            4155,
            4156
        ]
    },
    {
        "id": 2081,
        "name": "Conroy, Kiehn and Bahringer",
        "sector": "Energy",
        "siren": 111224568,
        "results": [
            4157,
            4158
        ]
    },
    {
        "id": 2082,
        "name": "Dooley, Volkman and Thompson",
        "sector": "Services",
        "siren": 110179331,
        "results": [
            4159,
            4160
        ]
    },
    {
        "id": 2083,
        "name": "Hammes-Boyer",
        "sector": "Retail",
        "siren": 147649127,
        "results": [
            4161,
            4162
        ]
    },
    {
        "id": 2084,
        "name": "O'Reilly and Sons",
        "sector": "Retail",
        "siren": 196424074,
        "results": [
            4163,
            4164
        ]
    },
    {
        "id": 2085,
        "name": "Kuhic, Hagenes and Stehr",
        "sector": "Retail",
        "siren": 109863760,
        "results": [
            4165,
            4166
        ]
    },
    {
        "id": 2086,
        "name": "Braun-Hills",
        "sector": "Electronic",
        "siren": 178204654,
        "results": [
            4167,
            4168
        ]
    },
    {
        "id": 2087,
        "name": "O'Connell-Botsford",
        "sector": "Electronic",
        "siren": 150471122,
        "results": [
            4169,
            4170
        ]
    },
    {
        "id": 2088,
        "name": "Gusikowski Inc",
        "sector": "Services",
        "siren": 148012572,
        "results": [
            4171,
            4172
        ]
    },
    {
        "id": 2089,
        "name": "Homenick-Schulist",
        "sector": "Energy",
        "siren": 199417647,
        "results": [
            4173,
            4174
        ]
    },
    {
        "id": 2090,
        "name": "Mayert-Nader",
        "sector": "Electronic",
        "siren": 196578469,
        "results": [
            4175,
            4176
        ]
    },
    {
        "id": 2091,
        "name": "Kessler and Sons",
        "sector": "Retail",
        "siren": 161771017,
        "results": [
            4177,
            4178
        ]
    },
    {
        "id": 2092,
        "name": "Kohler Group",
        "sector": "Energy",
        "siren": 109223179,
        "results": [
            4179,
            4180
        ]
    },
    {
        "id": 2093,
        "name": "Cartwright, Langosh and Ratke",
        "sector": "Electronic",
        "siren": 148131215,
        "results": [
            4181,
            4182
        ]
    },
    {
        "id": 2094,
        "name": "Zieme-Littel",
        "sector": "Retail",
        "siren": 119585372,
        "results": [
            4183,
            4184
        ]
    },
    {
        "id": 2095,
        "name": "Jacobs-Romaguera",
        "sector": "Electronic",
        "siren": 161977766,
        "results": [
            4185,
            4186
        ]
    },
    {
        "id": 2096,
        "name": "Johnson, Ferry and Bailey",
        "sector": "Retail",
        "siren": 186288766,
        "results": [
            4187,
            4188
        ]
    },
    {
        "id": 2097,
        "name": "Abbott, Jacobson and Kessler",
        "sector": "Energy",
        "siren": 190068556,
        "results": [
            4189,
            4190
        ]
    },
    {
        "id": 2098,
        "name": "Fisher Group",
        "sector": "Services",
        "siren": 177894686,
        "results": [
            4191,
            4192
        ]
    },
    {
        "id": 2099,
        "name": "Weimann-Wuckert",
        "sector": "Retail",
        "siren": 161472408,
        "results": [
            4193,
            4194
        ]
    },
    {
        "id": 2100,
        "name": "West LLC",
        "sector": "Energy",
        "siren": 190837968,
        "results": [
            4195,
            4196
        ]
    },
    {
        "id": 2101,
        "name": "Gottlieb-Ondricka",
        "sector": "Electronic",
        "siren": 190862988,
        "results": [
            4197,
            4198
        ]
    },
    {
        "id": 2102,
        "name": "Roob Inc",
        "sector": "Luxury",
        "siren": 101958734,
        "results": [
            4199,
            4200
        ]
    },
    {
        "id": 2103,
        "name": "Morissette and Sons",
        "sector": "Retail",
        "siren": 167669722,
        "results": [
            4201,
            4202
        ]
    },
    {
        "id": 2104,
        "name": "Zemlak-Connelly",
        "sector": "Luxury",
        "siren": 104649344,
        "results": [
            4203,
            4204
        ]
    },
    {
        "id": 2105,
        "name": "Johnson-Jakubowski",
        "sector": "Luxury",
        "siren": 192817456,
        "results": [
            4205,
            4206
        ]
    },
    {
        "id": 2106,
        "name": "Volkman-Kovacek",
        "sector": "Luxury",
        "siren": 117895725,
        "results": [
            4207,
            4208
        ]
    },
    {
        "id": 2107,
        "name": "Tillman, Skiles and Hilpert",
        "sector": "Energy",
        "siren": 117107520,
        "results": [
            4209,
            4210
        ]
    },
    {
        "id": 2108,
        "name": "Kub-Daniel",
        "sector": "Services",
        "siren": 106341027,
        "results": [
            4211,
            4212
        ]
    },
    {
        "id": 2109,
        "name": "Kohler-Dickinson",
        "sector": "Luxury",
        "siren": 187328834,
        "results": [
            4213,
            4214
        ]
    },
    {
        "id": 2110,
        "name": "Carter, Hermann and Abbott",
        "sector": "Energy",
        "siren": 118248539,
        "results": [
            4215,
            4216
        ]
    },
    {
        "id": 2111,
        "name": "Pfeffer Inc",
        "sector": "Energy",
        "siren": 196877153,
        "results": [
            4217,
            4218
        ]
    },
    {
        "id": 2112,
        "name": "Bernier-Trantow",
        "sector": "Luxury",
        "siren": 144677992,
        "results": [
            4219,
            4220
        ]
    },
    {
        "id": 2113,
        "name": "Spinka LLC",
        "sector": "Luxury",
        "siren": 116843327,
        "results": [
            4221,
            4222
        ]
    },
    {
        "id": 2114,
        "name": "Walsh, Runolfsdottir and Kilback",
        "sector": "Luxury",
        "siren": 124931602,
        "results": [
            4223,
            4224
        ]
    },
    {
        "id": 2115,
        "name": "Kreiger Group",
        "sector": "Electronic",
        "siren": 172446196,
        "results": [
            4225,
            4226
        ]
    },
    {
        "id": 2116,
        "name": "Legros-Quigley",
        "sector": "Energy",
        "siren": 189491425,
        "results": [
            4227,
            4228
        ]
    },
    {
        "id": 2117,
        "name": "Stracke, Feeney and Schmeler",
        "sector": "Retail",
        "siren": 172260753,
        "results": [
            4229,
            4230
        ]
    },
    {
        "id": 2118,
        "name": "Gibson-Lynch",
        "sector": "Luxury",
        "siren": 131306836,
        "results": [
            4231,
            4232
        ]
    },
    {
        "id": 2119,
        "name": "Reichel-Torp",
        "sector": "Services",
        "siren": 138938680,
        "results": [
            4233,
            4234
        ]
    },
    {
        "id": 2120,
        "name": "Deckow-Herman",
        "sector": "Energy",
        "siren": 145463778,
        "results": [
            4235,
            4236
        ]
    },
    {
        "id": 2121,
        "name": "Ondricka Inc",
        "sector": "Retail",
        "siren": 114106817,
        "results": [
            4237,
            4238
        ]
    },
    {
        "id": 2122,
        "name": "Kassulke Group",
        "sector": "Services",
        "siren": 125326583,
        "results": [
            4239,
            4240
        ]
    },
    {
        "id": 2123,
        "name": "Gutkowski and Sons",
        "sector": "Luxury",
        "siren": 194518065,
        "results": [
            4241,
            4242
        ]
    },
    {
        "id": 2124,
        "name": "Brekke Inc",
        "sector": "Luxury",
        "siren": 144810441,
        "results": [
            4243,
            4244
        ]
    },
    {
        "id": 2125,
        "name": "Sanford, Abbott and Doyle",
        "sector": "Luxury",
        "siren": 109581460,
        "results": [
            4245,
            4246
        ]
    },
    {
        "id": 2126,
        "name": "Terry, Watsica and Marks",
        "sector": "Services",
        "siren": 163369130,
        "results": [
            4247,
            4248
        ]
    },
    {
        "id": 2127,
        "name": "Windler, Beer and Reichert",
        "sector": "Energy",
        "siren": 162705486,
        "results": [
            4249,
            4250
        ]
    },
    {
        "id": 2128,
        "name": "Quigley Inc",
        "sector": "Services",
        "siren": 171902083,
        "results": [
            4251,
            4252
        ]
    },
    {
        "id": 2129,
        "name": "Kub and Sons",
        "sector": "Retail",
        "siren": 133035315,
        "results": [
            4253,
            4254
        ]
    },
    {
        "id": 2130,
        "name": "Kutch LLC",
        "sector": "Services",
        "siren": 143661189,
        "results": [
            4255,
            4256
        ]
    },
    {
        "id": 2131,
        "name": "Doyle, Batz and Stoltenberg",
        "sector": "Luxury",
        "siren": 187532589,
        "results": [
            4257,
            4258
        ]
    },
    {
        "id": 2132,
        "name": "Goyette and Sons",
        "sector": "Energy",
        "siren": 199540783,
        "results": [
            4259,
            4260
        ]
    },
    {
        "id": 2133,
        "name": "Windler Inc",
        "sector": "Services",
        "siren": 178765604,
        "results": [
            4261,
            4262
        ]
    },
    {
        "id": 2134,
        "name": "Dicki Group",
        "sector": "Retail",
        "siren": 116237749,
        "results": [
            4263,
            4264
        ]
    },
    {
        "id": 2135,
        "name": "Quitzon and Sons",
        "sector": "Luxury",
        "siren": 125672275,
        "results": [
            4265,
            4266
        ]
    },
    {
        "id": 2136,
        "name": "Steuber-Metz",
        "sector": "Retail",
        "siren": 184946759,
        "results": [
            4267,
            4268
        ]
    },
    {
        "id": 2137,
        "name": "Larson and Sons",
        "sector": "Energy",
        "siren": 160194912,
        "results": [
            4269,
            4270
        ]
    },
    {
        "id": 2138,
        "name": "Bernier Inc",
        "sector": "Electronic",
        "siren": 118680509,
        "results": [
            4271,
            4272
        ]
    },
    {
        "id": 2139,
        "name": "Deckow and Sons",
        "sector": "Electronic",
        "siren": 167104227,
        "results": [
            4273,
            4274
        ]
    },
    {
        "id": 2140,
        "name": "Harris and Sons",
        "sector": "Energy",
        "siren": 128610634,
        "results": [
            4275,
            4276
        ]
    },
    {
        "id": 2141,
        "name": "Medhurst and Sons",
        "sector": "Luxury",
        "siren": 102925161,
        "results": [
            4277,
            4278
        ]
    },
    {
        "id": 2142,
        "name": "Nader-Marks",
        "sector": "Luxury",
        "siren": 191120490,
        "results": [
            4279,
            4280
        ]
    },
    {
        "id": 2143,
        "name": "Harris, O'Conner and Rodriguez",
        "sector": "Retail",
        "siren": 153285638,
        "results": [
            4281,
            4282
        ]
    },
    {
        "id": 2144,
        "name": "Emard-Wisoky",
        "sector": "Luxury",
        "siren": 131865937,
        "results": [
            4283,
            4284
        ]
    },
    {
        "id": 2145,
        "name": "Gleichner-Buckridge",
        "sector": "Electronic",
        "siren": 142254757,
        "results": [
            4285,
            4286
        ]
    },
    {
        "id": 2146,
        "name": "Stroman, Durgan and Schuster",
        "sector": "Electronic",
        "siren": 186553896,
        "results": [
            4287,
            4288
        ]
    },
    {
        "id": 2147,
        "name": "Bahringer-Beer",
        "sector": "Electronic",
        "siren": 155909003,
        "results": [
            4289,
            4290
        ]
    },
    {
        "id": 2148,
        "name": "Ankunding Group",
        "sector": "Services",
        "siren": 146522165,
        "results": [
            4291,
            4292
        ]
    },
    {
        "id": 2149,
        "name": "Bailey and Sons",
        "sector": "Retail",
        "siren": 116912814,
        "results": [
            4293,
            4294
        ]
    },
    {
        "id": 2150,
        "name": "Stiedemann Group",
        "sector": "Services",
        "siren": 138130435,
        "results": [
            4295,
            4296
        ]
    },
    {
        "id": 2151,
        "name": "VonRueden, Stokes and Hammes",
        "sector": "Services",
        "siren": 136246184,
        "results": [
            4297,
            4298
        ]
    },
    {
        "id": 2152,
        "name": "Cole, Schuppe and Nolan",
        "sector": "Energy",
        "siren": 126595826,
        "results": [
            4299,
            4300
        ]
    },
    {
        "id": 2153,
        "name": "Gerlach-Haley",
        "sector": "Energy",
        "siren": 140145973,
        "results": [
            4301,
            4302
        ]
    },
    {
        "id": 2154,
        "name": "Nader-Feest",
        "sector": "Energy",
        "siren": 142651328,
        "results": [
            4303,
            4304
        ]
    },
    {
        "id": 2155,
        "name": "Barrows-Fahey",
        "sector": "Luxury",
        "siren": 197267187,
        "results": [
            4305,
            4306
        ]
    },
    {
        "id": 2156,
        "name": "Botsford, Corkery and Zboncak",
        "sector": "Retail",
        "siren": 156360441,
        "results": [
            4307,
            4308
        ]
    },
    {
        "id": 2157,
        "name": "Davis LLC",
        "sector": "Luxury",
        "siren": 187427886,
        "results": [
            4309,
            4310
        ]
    },
    {
        "id": 2158,
        "name": "Sawayn Inc",
        "sector": "Retail",
        "siren": 199558391,
        "results": [
            4311,
            4312
        ]
    },
    {
        "id": 2159,
        "name": "Pollich LLC",
        "sector": "Services",
        "siren": 131071003,
        "results": [
            4313,
            4314
        ]
    },
    {
        "id": 2160,
        "name": "Nader, Heathcote and Beier",
        "sector": "Retail",
        "siren": 163154696,
        "results": [
            4315,
            4316
        ]
    },
    {
        "id": 2161,
        "name": "Hauck-Kutch",
        "sector": "Retail",
        "siren": 151613004,
        "results": [
            4317,
            4318
        ]
    },
    {
        "id": 2162,
        "name": "Denesik LLC",
        "sector": "Retail",
        "siren": 103479498,
        "results": [
            4319,
            4320
        ]
    },
    {
        "id": 2163,
        "name": "Jast Group",
        "sector": "Energy",
        "siren": 143432110,
        "results": [
            4321,
            4322
        ]
    },
    {
        "id": 2164,
        "name": "Larkin, Durgan and Franecki",
        "sector": "Electronic",
        "siren": 116000875,
        "results": [
            4323,
            4324
        ]
    },
    {
        "id": 2165,
        "name": "Erdman, Breitenberg and Streich",
        "sector": "Electronic",
        "siren": 159175169,
        "results": [
            4325,
            4326
        ]
    },
    {
        "id": 2166,
        "name": "Feest-Batz",
        "sector": "Electronic",
        "siren": 164860406,
        "results": [
            4327,
            4328
        ]
    },
    {
        "id": 2167,
        "name": "Mayer Inc",
        "sector": "Energy",
        "siren": 101482936,
        "results": [
            4329,
            4330
        ]
    },
    {
        "id": 2168,
        "name": "Balistreri, Will and Walker",
        "sector": "Retail",
        "siren": 161501031,
        "results": [
            4331,
            4332
        ]
    },
    {
        "id": 2169,
        "name": "Rau, Yundt and Bergstrom",
        "sector": "Energy",
        "siren": 192338635,
        "results": [
            4333,
            4334
        ]
    },
    {
        "id": 2170,
        "name": "Howell, Littel and Shanahan",
        "sector": "Luxury",
        "siren": 153414397,
        "results": [
            4335,
            4336
        ]
    },
    {
        "id": 2171,
        "name": "Steuber, Thompson and Toy",
        "sector": "Services",
        "siren": 123940721,
        "results": [
            4337,
            4338
        ]
    },
    {
        "id": 2172,
        "name": "Olson-Jakubowski",
        "sector": "Electronic",
        "siren": 167690862,
        "results": [
            4339,
            4340
        ]
    },
    {
        "id": 2173,
        "name": "Rowe, Ziemann and Wintheiser",
        "sector": "Luxury",
        "siren": 184418505,
        "results": [
            4341,
            4342
        ]
    },
    {
        "id": 2174,
        "name": "McKenzie-Waters",
        "sector": "Retail",
        "siren": 100313670,
        "results": [
            4343,
            4344
        ]
    },
    {
        "id": 2175,
        "name": "Breitenberg, Emard and Schiller",
        "sector": "Energy",
        "siren": 182874115,
        "results": [
            4345,
            4346
        ]
    },
    {
        "id": 2176,
        "name": "Reichel and Sons",
        "sector": "Electronic",
        "siren": 162185639,
        "results": [
            4347,
            4348
        ]
    },
    {
        "id": 2177,
        "name": "Botsford LLC",
        "sector": "Energy",
        "siren": 108406570,
        "results": [
            4349,
            4350
        ]
    },
    {
        "id": 2178,
        "name": "Hilpert LLC",
        "sector": "Electronic",
        "siren": 192146857,
        "results": [
            4351,
            4352
        ]
    },
    {
        "id": 2179,
        "name": "Fritsch, Hahn and Veum",
        "sector": "Energy",
        "siren": 106505507,
        "results": [
            4353,
            4354
        ]
    },
    {
        "id": 2180,
        "name": "Prosacco-Wiza",
        "sector": "Retail",
        "siren": 189019628,
        "results": [
            4355,
            4356
        ]
    },
    {
        "id": 2181,
        "name": "Turner, Kovacek and Osinski",
        "sector": "Electronic",
        "siren": 136565825,
        "results": [
            4357,
            4358
        ]
    },
    {
        "id": 2182,
        "name": "Feeney, Homenick and Anderson",
        "sector": "Services",
        "siren": 160773085,
        "results": [
            4359,
            4360
        ]
    },
    {
        "id": 2183,
        "name": "Wuckert LLC",
        "sector": "Retail",
        "siren": 185956961,
        "results": [
            4361,
            4362
        ]
    },
    {
        "id": 2184,
        "name": "Schamberger, Schuppe and Marks",
        "sector": "Services",
        "siren": 152638843,
        "results": [
            4363,
            4364
        ]
    },
    {
        "id": 2185,
        "name": "Kuphal-Kovacek",
        "sector": "Luxury",
        "siren": 165732658,
        "results": [
            4365,
            4366
        ]
    },
    {
        "id": 2186,
        "name": "Paucek Group",
        "sector": "Luxury",
        "siren": 119495081,
        "results": [
            4367,
            4368
        ]
    },
    {
        "id": 2187,
        "name": "MacGyver-Hintz",
        "sector": "Electronic",
        "siren": 117496732,
        "results": [
            4369,
            4370
        ]
    },
    {
        "id": 2188,
        "name": "Ratke and Sons",
        "sector": "Energy",
        "siren": 170431877,
        "results": [
            4371,
            4372
        ]
    },
    {
        "id": 2189,
        "name": "Brekke, Greenfelder and Hills",
        "sector": "Energy",
        "siren": 151517029,
        "results": [
            4373,
            4374
        ]
    },
    {
        "id": 2190,
        "name": "Kirlin Group",
        "sector": "Retail",
        "siren": 119879668,
        "results": [
            4375,
            4376
        ]
    },
    {
        "id": 2191,
        "name": "Strosin, Wunsch and Kerluke",
        "sector": "Electronic",
        "siren": 106238133,
        "results": [
            4377,
            4378
        ]
    },
    {
        "id": 2192,
        "name": "Barton, Pollich and Gaylord",
        "sector": "Electronic",
        "siren": 122325130,
        "results": [
            4379,
            4380
        ]
    },
    {
        "id": 2193,
        "name": "Marks-Rolfson",
        "sector": "Luxury",
        "siren": 114187547,
        "results": [
            4381,
            4382
        ]
    },
    {
        "id": 2194,
        "name": "Ferry Inc",
        "sector": "Luxury",
        "siren": 146000588,
        "results": [
            4383,
            4384
        ]
    },
    {
        "id": 2195,
        "name": "Jones-Wuckert",
        "sector": "Services",
        "siren": 199815719,
        "results": [
            4385,
            4386
        ]
    },
    {
        "id": 2196,
        "name": "Schuster-Pouros",
        "sector": "Energy",
        "siren": 123345367,
        "results": [
            4387,
            4388
        ]
    },
    {
        "id": 2197,
        "name": "Reilly Group",
        "sector": "Energy",
        "siren": 195257069,
        "results": [
            4389,
            4390
        ]
    },
    {
        "id": 2198,
        "name": "Swift-Schmeler",
        "sector": "Luxury",
        "siren": 159163298,
        "results": [
            4391,
            4392
        ]
    },
    {
        "id": 2199,
        "name": "Frami, Kassulke and Williamson",
        "sector": "Luxury",
        "siren": 119389057,
        "results": [
            4393,
            4394
        ]
    },
    {
        "id": 2200,
        "name": "Goldner-Ondricka",
        "sector": "Retail",
        "siren": 175911534,
        "results": [
            4395,
            4396
        ]
    },
    {
        "id": 2201,
        "name": "O'Hara LLC",
        "sector": "Luxury",
        "siren": 138708659,
        "results": [
            4397,
            4398
        ]
    },
    {
        "id": 2202,
        "name": "Raynor, Gibson and Schaden",
        "sector": "Retail",
        "siren": 132489467,
        "results": [
            4399,
            4400
        ]
    },
    {
        "id": 2203,
        "name": "Konopelski-Parisian",
        "sector": "Electronic",
        "siren": 125596906,
        "results": [
            4401,
            4402
        ]
    },
    {
        "id": 2204,
        "name": "Bergstrom-Bayer",
        "sector": "Retail",
        "siren": 172596887,
        "results": [
            4403,
            4404
        ]
    },
    {
        "id": 2205,
        "name": "Gutmann-Wintheiser",
        "sector": "Electronic",
        "siren": 136870795,
        "results": [
            4405,
            4406
        ]
    },
    {
        "id": 2206,
        "name": "Ruecker Inc",
        "sector": "Energy",
        "siren": 107771540,
        "results": [
            4407,
            4408
        ]
    },
    {
        "id": 2207,
        "name": "Schowalter and Sons",
        "sector": "Electronic",
        "siren": 104892063,
        "results": [
            4409,
            4410
        ]
    },
    {
        "id": 2208,
        "name": "Weimann Inc",
        "sector": "Electronic",
        "siren": 115032180,
        "results": [
            4411,
            4412
        ]
    },
    {
        "id": 2209,
        "name": "Fay-Wolf",
        "sector": "Retail",
        "siren": 152912420,
        "results": [
            4413,
            4414
        ]
    },
    {
        "id": 2210,
        "name": "Jakubowski, Tillman and Hamill",
        "sector": "Energy",
        "siren": 186447593,
        "results": [
            4415,
            4416
        ]
    },
    {
        "id": 2211,
        "name": "Green and Sons",
        "sector": "Electronic",
        "siren": 119660051,
        "results": [
            4417,
            4418
        ]
    },
    {
        "id": 2212,
        "name": "Schumm-Kirlin",
        "sector": "Luxury",
        "siren": 108906276,
        "results": [
            4419,
            4420
        ]
    },
    {
        "id": 2213,
        "name": "Waelchi Inc",
        "sector": "Luxury",
        "siren": 150114349,
        "results": [
            4421,
            4422
        ]
    },
    {
        "id": 2214,
        "name": "Rodriguez, Morissette and Runolfsson",
        "sector": "Services",
        "siren": 178558625,
        "results": [
            4423,
            4424
        ]
    },
    {
        "id": 2215,
        "name": "Mosciski, O'Keefe and Beier",
        "sector": "Luxury",
        "siren": 181047279,
        "results": [
            4425,
            4426
        ]
    },
    {
        "id": 2216,
        "name": "Ankunding-Hansen",
        "sector": "Energy",
        "siren": 198569365,
        "results": [
            4427,
            4428
        ]
    },
    {
        "id": 2217,
        "name": "Considine, Ullrich and Beatty",
        "sector": "Energy",
        "siren": 167785468,
        "results": [
            4429,
            4430
        ]
    },
    {
        "id": 2218,
        "name": "Macejkovic, Barton and Purdy",
        "sector": "Energy",
        "siren": 158559600,
        "results": [
            4431,
            4432
        ]
    },
    {
        "id": 2219,
        "name": "Kshlerin Inc",
        "sector": "Retail",
        "siren": 164045216,
        "results": [
            4433,
            4434
        ]
    },
    {
        "id": 2220,
        "name": "Schuster-Vandervort",
        "sector": "Retail",
        "siren": 183312705,
        "results": [
            4435,
            4436
        ]
    },
    {
        "id": 2221,
        "name": "Steuber, Marvin and Balistreri",
        "sector": "Services",
        "siren": 184552006,
        "results": [
            4437,
            4438
        ]
    },
    {
        "id": 2222,
        "name": "Kuvalis LLC",
        "sector": "Electronic",
        "siren": 107252195,
        "results": [
            4439,
            4440
        ]
    },
    {
        "id": 2223,
        "name": "Hegmann-Murazik",
        "sector": "Luxury",
        "siren": 162358868,
        "results": [
            4441,
            4442
        ]
    },
    {
        "id": 2224,
        "name": "Lebsack, Weissnat and Marquardt",
        "sector": "Services",
        "siren": 130350712,
        "results": [
            4443,
            4444
        ]
    },
    {
        "id": 2225,
        "name": "Schulist, Auer and Eichmann",
        "sector": "Electronic",
        "siren": 173544794,
        "results": [
            4445,
            4446
        ]
    },
    {
        "id": 2226,
        "name": "Wehner Inc",
        "sector": "Electronic",
        "siren": 193306137,
        "results": [
            4447,
            4448
        ]
    },
    {
        "id": 2227,
        "name": "Feest LLC",
        "sector": "Energy",
        "siren": 148619127,
        "results": [
            4449,
            4450
        ]
    },
    {
        "id": 2228,
        "name": "Stroman, Bauch and McKenzie",
        "sector": "Electronic",
        "siren": 111498818,
        "results": [
            4451,
            4452
        ]
    },
    {
        "id": 2229,
        "name": "Greenfelder-Olson",
        "sector": "Luxury",
        "siren": 186018493,
        "results": [
            4453,
            4454
        ]
    },
    {
        "id": 2230,
        "name": "Brown, Monahan and Hintz",
        "sector": "Energy",
        "siren": 124558272,
        "results": [
            4455,
            4456
        ]
    },
    {
        "id": 2231,
        "name": "Runolfsson, Jenkins and Carter",
        "sector": "Energy",
        "siren": 163601798,
        "results": [
            4457,
            4458
        ]
    },
    {
        "id": 2232,
        "name": "Hahn, Gleichner and Bechtelar",
        "sector": "Electronic",
        "siren": 195222821,
        "results": [
            4459,
            4460
        ]
    },
    {
        "id": 2233,
        "name": "Roberts-Stracke",
        "sector": "Electronic",
        "siren": 175690581,
        "results": [
            4461,
            4462
        ]
    },
    {
        "id": 2234,
        "name": "Stehr, Wisoky and Carroll",
        "sector": "Retail",
        "siren": 180337425,
        "results": [
            4463,
            4464
        ]
    },
    {
        "id": 2235,
        "name": "Feeney, Larkin and Bailey",
        "sector": "Energy",
        "siren": 191843405,
        "results": [
            4465,
            4466
        ]
    },
    {
        "id": 2236,
        "name": "Wunsch-Kub",
        "sector": "Energy",
        "siren": 114733505,
        "results": [
            4467,
            4468
        ]
    },
    {
        "id": 2237,
        "name": "Prosacco and Sons",
        "sector": "Electronic",
        "siren": 107733229,
        "results": [
            4469,
            4470
        ]
    },
    {
        "id": 2238,
        "name": "Wuckert-Spinka",
        "sector": "Energy",
        "siren": 142809805,
        "results": [
            4471,
            4472
        ]
    },
    {
        "id": 2239,
        "name": "Fritsch, Haley and Wuckert",
        "sector": "Retail",
        "siren": 160133554,
        "results": [
            4473,
            4474
        ]
    },
    {
        "id": 2240,
        "name": "Jaskolski and Sons",
        "sector": "Retail",
        "siren": 182186809,
        "results": [
            4475,
            4476
        ]
    },
    {
        "id": 2241,
        "name": "Beer, Reynolds and Altenwerth",
        "sector": "Services",
        "siren": 166645816,
        "results": [
            4477,
            4478
        ]
    },
    {
        "id": 2242,
        "name": "Jacobs-Fay",
        "sector": "Retail",
        "siren": 187905465,
        "results": [
            4479,
            4480
        ]
    },
    {
        "id": 2243,
        "name": "Lynch, Volkman and Mayert",
        "sector": "Electronic",
        "siren": 167643726,
        "results": [
            4481,
            4482
        ]
    },
    {
        "id": 2244,
        "name": "Goodwin-Stoltenberg",
        "sector": "Luxury",
        "siren": 115979485,
        "results": [
            4483,
            4484
        ]
    },
    {
        "id": 2245,
        "name": "Turner-Stracke",
        "sector": "Electronic",
        "siren": 100650646,
        "results": [
            4485,
            4486
        ]
    },
    {
        "id": 2246,
        "name": "Ebert, Emmerich and Thompson",
        "sector": "Retail",
        "siren": 115340847,
        "results": [
            4487,
            4488
        ]
    },
    {
        "id": 2247,
        "name": "Rau, Block and Friesen",
        "sector": "Retail",
        "siren": 122048074,
        "results": [
            4489,
            4490
        ]
    },
    {
        "id": 2248,
        "name": "Stanton Inc",
        "sector": "Luxury",
        "siren": 191782204,
        "results": [
            4491,
            4492
        ]
    },
    {
        "id": 2249,
        "name": "Braun LLC",
        "sector": "Luxury",
        "siren": 113043006,
        "results": [
            4493,
            4494
        ]
    },
    {
        "id": 2250,
        "name": "Ankunding, Wolff and Ferry",
        "sector": "Luxury",
        "siren": 146431624,
        "results": [
            4495,
            4496
        ]
    },
    {
        "id": 2251,
        "name": "Kertzmann Group",
        "sector": "Luxury",
        "siren": 161802172,
        "results": [
            4497,
            4498
        ]
    },
    {
        "id": 2252,
        "name": "Cartwright Group",
        "sector": "Energy",
        "siren": 194116781,
        "results": [
            4499,
            4500
        ]
    },
    {
        "id": 2253,
        "name": "Hodkiewicz, Prohaska and Mueller",
        "sector": "Retail",
        "siren": 113021215,
        "results": [
            4501,
            4502
        ]
    },
    {
        "id": 2254,
        "name": "Lang-Borer",
        "sector": "Energy",
        "siren": 132031123,
        "results": [
            4503,
            4504
        ]
    },
    {
        "id": 2255,
        "name": "Terry Inc",
        "sector": "Energy",
        "siren": 158816796,
        "results": [
            4505,
            4506
        ]
    },
    {
        "id": 2256,
        "name": "Kilback, White and Kuhn",
        "sector": "Retail",
        "siren": 195265239,
        "results": [
            4507,
            4508
        ]
    },
    {
        "id": 2257,
        "name": "Kozey, Dare and Wolff",
        "sector": "Luxury",
        "siren": 188745517,
        "results": [
            4509,
            4510
        ]
    },
    {
        "id": 2258,
        "name": "Sporer-Zemlak",
        "sector": "Luxury",
        "siren": 161108543,
        "results": [
            4511,
            4512
        ]
    },
    {
        "id": 2259,
        "name": "Crooks, Nolan and Monahan",
        "sector": "Services",
        "siren": 143702778,
        "results": [
            4513,
            4514
        ]
    },
    {
        "id": 2260,
        "name": "Miller and Sons",
        "sector": "Luxury",
        "siren": 104496126,
        "results": [
            4515,
            4516
        ]
    },
    {
        "id": 2261,
        "name": "Kertzmann-Greenholt",
        "sector": "Electronic",
        "siren": 195850715,
        "results": [
            4517,
            4518
        ]
    },
    {
        "id": 2262,
        "name": "Jones Inc",
        "sector": "Services",
        "siren": 182091222,
        "results": [
            4519,
            4520
        ]
    },
    {
        "id": 2263,
        "name": "Green, Harvey and Johns",
        "sector": "Energy",
        "siren": 156317095,
        "results": [
            4521,
            4522
        ]
    },
    {
        "id": 2264,
        "name": "Wunsch-Mante",
        "sector": "Energy",
        "siren": 142459232,
        "results": [
            4523,
            4524
        ]
    },
    {
        "id": 2265,
        "name": "Graham-Swaniawski",
        "sector": "Energy",
        "siren": 190807753,
        "results": [
            4525,
            4526
        ]
    },
    {
        "id": 2266,
        "name": "Ferry, Fritsch and Fadel",
        "sector": "Energy",
        "siren": 161226595,
        "results": [
            4527,
            4528
        ]
    },
    {
        "id": 2267,
        "name": "Marks-Dicki",
        "sector": "Energy",
        "siren": 166825502,
        "results": [
            4529,
            4530
        ]
    },
    {
        "id": 2268,
        "name": "Price and Sons",
        "sector": "Retail",
        "siren": 125486381,
        "results": [
            4531,
            4532
        ]
    },
    {
        "id": 2269,
        "name": "Rutherford-Pouros",
        "sector": "Energy",
        "siren": 193019462,
        "results": [
            4533,
            4534
        ]
    },
    {
        "id": 2270,
        "name": "Walter-Mohr",
        "sector": "Electronic",
        "siren": 113458358,
        "results": [
            4535,
            4536
        ]
    },
    {
        "id": 2271,
        "name": "McKenzie LLC",
        "sector": "Luxury",
        "siren": 112664870,
        "results": [
            4537,
            4538
        ]
    },
    {
        "id": 2272,
        "name": "Miller, Pacocha and Bechtelar",
        "sector": "Electronic",
        "siren": 108443710,
        "results": [
            4539,
            4540
        ]
    },
    {
        "id": 2273,
        "name": "Corkery and Sons",
        "sector": "Luxury",
        "siren": 178465657,
        "results": [
            4541,
            4542
        ]
    },
    {
        "id": 2274,
        "name": "Halvorson, Bernier and Hammes",
        "sector": "Electronic",
        "siren": 122900550,
        "results": [
            4543,
            4544
        ]
    },
    {
        "id": 2275,
        "name": "Wiegand-Dickens",
        "sector": "Services",
        "siren": 143579372,
        "results": [
            4545,
            4546
        ]
    },
    {
        "id": 2276,
        "name": "Torp Inc",
        "sector": "Energy",
        "siren": 189725524,
        "results": [
            4547,
            4548
        ]
    },
    {
        "id": 2277,
        "name": "Daugherty LLC",
        "sector": "Electronic",
        "siren": 128217325,
        "results": [
            4549,
            4550
        ]
    },
    {
        "id": 2278,
        "name": "Ledner, Kulas and Howe",
        "sector": "Retail",
        "siren": 178754669,
        "results": [
            4551,
            4552
        ]
    },
    {
        "id": 2279,
        "name": "Cummerata-Pacocha",
        "sector": "Electronic",
        "siren": 139964584,
        "results": [
            4553,
            4554
        ]
    },
    {
        "id": 2280,
        "name": "Buckridge, Hoppe and Pouros",
        "sector": "Services",
        "siren": 181577867,
        "results": [
            4555,
            4556
        ]
    },
    {
        "id": 2281,
        "name": "Yost, Hauck and Crist",
        "sector": "Services",
        "siren": 136140105,
        "results": [
            4557,
            4558
        ]
    },
    {
        "id": 2282,
        "name": "Emard, Gottlieb and Erdman",
        "sector": "Services",
        "siren": 197348760,
        "results": [
            4559,
            4560
        ]
    },
    {
        "id": 2283,
        "name": "Legros-Grant",
        "sector": "Luxury",
        "siren": 111581904,
        "results": [
            4561,
            4562
        ]
    },
    {
        "id": 2284,
        "name": "Donnelly and Sons",
        "sector": "Luxury",
        "siren": 191402137,
        "results": [
            4563,
            4564
        ]
    },
    {
        "id": 2285,
        "name": "McDermott Inc",
        "sector": "Luxury",
        "siren": 128440199,
        "results": [
            4565,
            4566
        ]
    },
    {
        "id": 2286,
        "name": "Gutmann-Buckridge",
        "sector": "Energy",
        "siren": 155312193,
        "results": [
            4567,
            4568
        ]
    },
    {
        "id": 2287,
        "name": "Murray LLC",
        "sector": "Electronic",
        "siren": 167238818,
        "results": [
            4569,
            4570
        ]
    },
    {
        "id": 2288,
        "name": "O'Conner Group",
        "sector": "Services",
        "siren": 112907980,
        "results": [
            4571,
            4572
        ]
    },
    {
        "id": 2289,
        "name": "Kassulke, Hahn and Turner",
        "sector": "Electronic",
        "siren": 183456129,
        "results": [
            4573,
            4574
        ]
    },
    {
        "id": 2290,
        "name": "Stanton-Kirlin",
        "sector": "Electronic",
        "siren": 193551149,
        "results": [
            4575,
            4576
        ]
    },
    {
        "id": 2291,
        "name": "Bergstrom-Botsford",
        "sector": "Energy",
        "siren": 192063048,
        "results": [
            4577,
            4578
        ]
    },
    {
        "id": 2292,
        "name": "Feest Inc",
        "sector": "Electronic",
        "siren": 171639217,
        "results": [
            4579,
            4580
        ]
    },
    {
        "id": 2293,
        "name": "Gibson and Sons",
        "sector": "Electronic",
        "siren": 141394359,
        "results": [
            4581,
            4582
        ]
    },
    {
        "id": 2294,
        "name": "McClure, Doyle and Lemke",
        "sector": "Services",
        "siren": 185255508,
        "results": [
            4583,
            4584
        ]
    },
    {
        "id": 2295,
        "name": "Koelpin-Schuster",
        "sector": "Services",
        "siren": 129367452,
        "results": [
            4585,
            4586
        ]
    },
    {
        "id": 2296,
        "name": "Blick Group",
        "sector": "Retail",
        "siren": 109638278,
        "results": [
            4587,
            4588
        ]
    },
    {
        "id": 2297,
        "name": "Thompson, Wiza and Bergstrom",
        "sector": "Services",
        "siren": 122984303,
        "results": [
            4589,
            4590
        ]
    },
    {
        "id": 2298,
        "name": "Dickinson-Hauck",
        "sector": "Electronic",
        "siren": 118582382,
        "results": [
            4591,
            4592
        ]
    },
    {
        "id": 2299,
        "name": "Connelly-Emmerich",
        "sector": "Services",
        "siren": 113938988,
        "results": [
            4593,
            4594
        ]
    },
    {
        "id": 2300,
        "name": "Mohr-Willms",
        "sector": "Energy",
        "siren": 187522743,
        "results": [
            4595,
            4596
        ]
    },
    {
        "id": 2301,
        "name": "Kiehn and Sons",
        "sector": "Services",
        "siren": 158676324,
        "results": [
            4597,
            4598
        ]
    },
    {
        "id": 2302,
        "name": "Strosin-Nienow",
        "sector": "Energy",
        "siren": 107572331,
        "results": [
            4599,
            4600
        ]
    },
    {
        "id": 2303,
        "name": "Bergstrom, Beatty and Runolfsson",
        "sector": "Electronic",
        "siren": 121012810,
        "results": [
            4601,
            4602
        ]
    },
    {
        "id": 2304,
        "name": "Halvorson LLC",
        "sector": "Retail",
        "siren": 156132597,
        "results": [
            4603,
            4604
        ]
    },
    {
        "id": 2305,
        "name": "Yost Inc",
        "sector": "Luxury",
        "siren": 116036824,
        "results": [
            4605,
            4606
        ]
    },
    {
        "id": 2306,
        "name": "Veum-Gleichner",
        "sector": "Luxury",
        "siren": 152821236,
        "results": [
            4607,
            4608
        ]
    },
    {
        "id": 2307,
        "name": "Hyatt and Sons",
        "sector": "Retail",
        "siren": 178440800,
        "results": [
            4609,
            4610
        ]
    },
    {
        "id": 2308,
        "name": "Jenkins-Berge",
        "sector": "Energy",
        "siren": 146784275,
        "results": [
            4611,
            4612
        ]
    },
    {
        "id": 2309,
        "name": "Runolfsson-Bergnaum",
        "sector": "Electronic",
        "siren": 145978278,
        "results": [
            4613,
            4614
        ]
    },
    {
        "id": 2310,
        "name": "McCullough-Glover",
        "sector": "Energy",
        "siren": 113262106,
        "results": [
            4615,
            4616
        ]
    },
    {
        "id": 2311,
        "name": "Roberts-Nolan",
        "sector": "Energy",
        "siren": 174223676,
        "results": [
            4617,
            4618
        ]
    },
    {
        "id": 2312,
        "name": "Littel Group",
        "sector": "Luxury",
        "siren": 175783016,
        "results": [
            4619,
            4620
        ]
    },
    {
        "id": 2313,
        "name": "Lynch-Borer",
        "sector": "Energy",
        "siren": 150864939,
        "results": [
            4621,
            4622
        ]
    },
    {
        "id": 2314,
        "name": "West and Sons",
        "sector": "Luxury",
        "siren": 129195143,
        "results": [
            4623,
            4624
        ]
    },
    {
        "id": 2315,
        "name": "Reynolds-Klein",
        "sector": "Electronic",
        "siren": 136442190,
        "results": [
            4625,
            4626
        ]
    },
    {
        "id": 2316,
        "name": "Ebert-Wilkinson",
        "sector": "Electronic",
        "siren": 153250828,
        "results": [
            4627,
            4628
        ]
    },
    {
        "id": 2317,
        "name": "Veum Inc",
        "sector": "Retail",
        "siren": 189026579,
        "results": [
            4629,
            4630
        ]
    },
    {
        "id": 2318,
        "name": "Kulas, Dickens and Schimmel",
        "sector": "Electronic",
        "siren": 188764097,
        "results": [
            4631,
            4632
        ]
    },
    {
        "id": 2319,
        "name": "Bashirian, Predovic and Thiel",
        "sector": "Services",
        "siren": 174893385,
        "results": [
            4633,
            4634
        ]
    },
    {
        "id": 2320,
        "name": "Dooley, Schmidt and Corwin",
        "sector": "Electronic",
        "siren": 101357409,
        "results": [
            4635,
            4636
        ]
    },
    {
        "id": 2321,
        "name": "Ward-Hilpert",
        "sector": "Retail",
        "siren": 113999321,
        "results": [
            4637,
            4638
        ]
    },
    {
        "id": 2322,
        "name": "Anderson, Kautzer and Osinski",
        "sector": "Electronic",
        "siren": 104595654,
        "results": [
            4639,
            4640
        ]
    },
    {
        "id": 2323,
        "name": "Zemlak-Kertzmann",
        "sector": "Services",
        "siren": 156021041,
        "results": [
            4641,
            4642
        ]
    },
    {
        "id": 2324,
        "name": "Harvey, Ryan and Romaguera",
        "sector": "Energy",
        "siren": 195567025,
        "results": [
            4643,
            4644
        ]
    },
    {
        "id": 2325,
        "name": "Smith LLC",
        "sector": "Energy",
        "siren": 151675230,
        "results": [
            4645,
            4646
        ]
    },
    {
        "id": 2326,
        "name": "Morissette-Bechtelar",
        "sector": "Electronic",
        "siren": 131829498,
        "results": [
            4647,
            4648
        ]
    },
    {
        "id": 2327,
        "name": "Davis Inc",
        "sector": "Luxury",
        "siren": 128915257,
        "results": [
            4649,
            4650
        ]
    },
    {
        "id": 2328,
        "name": "Hagenes-Mertz",
        "sector": "Retail",
        "siren": 132293761,
        "results": [
            4651,
            4652
        ]
    },
    {
        "id": 2329,
        "name": "Spinka-Kulas",
        "sector": "Electronic",
        "siren": 173768175,
        "results": [
            4653,
            4654
        ]
    },
    {
        "id": 2330,
        "name": "Bednar and Sons",
        "sector": "Electronic",
        "siren": 149652676,
        "results": [
            4655,
            4656
        ]
    },
    {
        "id": 2331,
        "name": "Schinner Inc",
        "sector": "Retail",
        "siren": 173498224,
        "results": [
            4657,
            4658
        ]
    },
    {
        "id": 2332,
        "name": "Hickle, Cronin and Rolfson",
        "sector": "Services",
        "siren": 176249839,
        "results": [
            4659,
            4660
        ]
    },
    {
        "id": 2333,
        "name": "Gleason, Will and Fay",
        "sector": "Luxury",
        "siren": 164765227,
        "results": [
            4661,
            4662
        ]
    },
    {
        "id": 2334,
        "name": "Funk Inc",
        "sector": "Retail",
        "siren": 137803307,
        "results": [
            4663,
            4664
        ]
    },
    {
        "id": 2335,
        "name": "Wisoky Inc",
        "sector": "Retail",
        "siren": 121556034,
        "results": [
            4665,
            4666
        ]
    },
    {
        "id": 2336,
        "name": "Weimann-Marvin",
        "sector": "Electronic",
        "siren": 127467544,
        "results": [
            4667,
            4668
        ]
    },
    {
        "id": 2337,
        "name": "Swift LLC",
        "sector": "Electronic",
        "siren": 109568865,
        "results": [
            4669,
            4670
        ]
    },
    {
        "id": 2338,
        "name": "Kovacek Group",
        "sector": "Services",
        "siren": 181313577,
        "results": [
            4671,
            4672
        ]
    },
    {
        "id": 2339,
        "name": "Reynolds, Gislason and Krajcik",
        "sector": "Electronic",
        "siren": 159546715,
        "results": [
            4673,
            4674
        ]
    },
    {
        "id": 2340,
        "name": "McLaughlin, Kozey and Murazik",
        "sector": "Retail",
        "siren": 182618959,
        "results": [
            4675,
            4676
        ]
    },
    {
        "id": 2341,
        "name": "Kovacek, Herzog and Bruen",
        "sector": "Services",
        "siren": 129403218,
        "results": [
            4677,
            4678
        ]
    },
    {
        "id": 2342,
        "name": "Bechtelar-Aufderhar",
        "sector": "Electronic",
        "siren": 154065184,
        "results": [
            4679,
            4680
        ]
    },
    {
        "id": 2343,
        "name": "Lueilwitz-Funk",
        "sector": "Services",
        "siren": 118541345,
        "results": [
            4681,
            4682
        ]
    },
    {
        "id": 2344,
        "name": "Langworth, Bins and Corwin",
        "sector": "Retail",
        "siren": 178527207,
        "results": [
            4683,
            4684
        ]
    },
    {
        "id": 2345,
        "name": "Becker-Abshire",
        "sector": "Services",
        "siren": 188856089,
        "results": [
            4685,
            4686
        ]
    },
    {
        "id": 2346,
        "name": "Blick LLC",
        "sector": "Retail",
        "siren": 128232319,
        "results": [
            4687,
            4688
        ]
    },
    {
        "id": 2347,
        "name": "Herman Group",
        "sector": "Luxury",
        "siren": 142725171,
        "results": [
            4689,
            4690
        ]
    },
    {
        "id": 2348,
        "name": "Willms-Harvey",
        "sector": "Retail",
        "siren": 135901454,
        "results": [
            4691,
            4692
        ]
    },
    {
        "id": 2349,
        "name": "Olson-Rowe",
        "sector": "Electronic",
        "siren": 113318308,
        "results": [
            4693,
            4694
        ]
    },
    {
        "id": 2350,
        "name": "Nicolas, Mante and Abbott",
        "sector": "Energy",
        "siren": 189491851,
        "results": [
            4695,
            4696
        ]
    },
    {
        "id": 2351,
        "name": "Koch-Grant",
        "sector": "Energy",
        "siren": 110261861,
        "results": [
            4697,
            4698
        ]
    },
    {
        "id": 2352,
        "name": "Bechtelar, Marks and Jast",
        "sector": "Services",
        "siren": 159467015,
        "results": [
            4699,
            4700
        ]
    },
    {
        "id": 2353,
        "name": "Senger and Sons",
        "sector": "Services",
        "siren": 196046815,
        "results": [
            4701,
            4702
        ]
    },
    {
        "id": 2354,
        "name": "Spinka Group",
        "sector": "Electronic",
        "siren": 119044687,
        "results": [
            4703,
            4704
        ]
    },
    {
        "id": 2355,
        "name": "Hessel, Zulauf and Weissnat",
        "sector": "Energy",
        "siren": 168259446,
        "results": [
            4705,
            4706
        ]
    },
    {
        "id": 2356,
        "name": "Keebler-Marvin",
        "sector": "Retail",
        "siren": 199067048,
        "results": [
            4707,
            4708
        ]
    },
    {
        "id": 2357,
        "name": "Williamson-Thompson",
        "sector": "Retail",
        "siren": 162996923,
        "results": [
            4709,
            4710
        ]
    },
    {
        "id": 2358,
        "name": "Thompson, Willms and Lueilwitz",
        "sector": "Luxury",
        "siren": 134457607,
        "results": [
            4711,
            4712
        ]
    },
    {
        "id": 2359,
        "name": "Littel-Von",
        "sector": "Luxury",
        "siren": 190435864,
        "results": [
            4713,
            4714
        ]
    },
    {
        "id": 2360,
        "name": "O'Keefe Inc",
        "sector": "Services",
        "siren": 122025835,
        "results": [
            4715,
            4716
        ]
    },
    {
        "id": 2361,
        "name": "Huels and Sons",
        "sector": "Services",
        "siren": 100742639,
        "results": [
            4717,
            4718
        ]
    },
    {
        "id": 2362,
        "name": "Rice, Mayert and Wisoky",
        "sector": "Electronic",
        "siren": 158220536,
        "results": [
            4719,
            4720
        ]
    },
    {
        "id": 2363,
        "name": "Spinka LLC",
        "sector": "Retail",
        "siren": 116908228,
        "results": [
            4721,
            4722
        ]
    },
    {
        "id": 2364,
        "name": "Jones Inc",
        "sector": "Services",
        "siren": 129953296,
        "results": [
            4723,
            4724
        ]
    },
    {
        "id": 2365,
        "name": "Gerhold, McLaughlin and Leuschke",
        "sector": "Services",
        "siren": 132966531,
        "results": [
            4725,
            4726
        ]
    },
    {
        "id": 2366,
        "name": "Dooley-Turcotte",
        "sector": "Luxury",
        "siren": 179279468,
        "results": [
            4727,
            4728
        ]
    },
    {
        "id": 2367,
        "name": "Carroll, Rippin and Corkery",
        "sector": "Retail",
        "siren": 129087805,
        "results": [
            4729,
            4730
        ]
    },
    {
        "id": 2368,
        "name": "Bins and Sons",
        "sector": "Luxury",
        "siren": 175820542,
        "results": [
            4731,
            4732
        ]
    },
    {
        "id": 2369,
        "name": "Lowe, Schuster and Hartmann",
        "sector": "Energy",
        "siren": 154756281,
        "results": [
            4733,
            4734
        ]
    },
    {
        "id": 2370,
        "name": "Runte LLC",
        "sector": "Services",
        "siren": 170053801,
        "results": [
            4735,
            4736
        ]
    },
    {
        "id": 2371,
        "name": "Wunsch, Beatty and Rogahn",
        "sector": "Electronic",
        "siren": 108707894,
        "results": [
            4737,
            4738
        ]
    },
    {
        "id": 2372,
        "name": "Ryan, Pfannerstill and Stroman",
        "sector": "Luxury",
        "siren": 148513566,
        "results": [
            4739,
            4740
        ]
    },
    {
        "id": 2373,
        "name": "Lind, Windler and Nienow",
        "sector": "Retail",
        "siren": 194799851,
        "results": [
            4741,
            4742
        ]
    },
    {
        "id": 2374,
        "name": "O'Connell LLC",
        "sector": "Retail",
        "siren": 146392762,
        "results": [
            4743,
            4744
        ]
    },
    {
        "id": 2375,
        "name": "Paucek and Sons",
        "sector": "Luxury",
        "siren": 100193913,
        "results": [
            4745,
            4746
        ]
    },
    {
        "id": 2376,
        "name": "Champlin-Bergstrom",
        "sector": "Electronic",
        "siren": 103878945,
        "results": [
            4747,
            4748
        ]
    },
    {
        "id": 2377,
        "name": "Cronin Group",
        "sector": "Energy",
        "siren": 169765022,
        "results": [
            4749,
            4750
        ]
    },
    {
        "id": 2378,
        "name": "Kris-Hartmann",
        "sector": "Energy",
        "siren": 158608930,
        "results": [
            4751,
            4752
        ]
    },
    {
        "id": 2379,
        "name": "Hansen, Hamill and Volkman",
        "sector": "Services",
        "siren": 171744012,
        "results": [
            4753,
            4754
        ]
    },
    {
        "id": 2380,
        "name": "Waters, Sporer and Hodkiewicz",
        "sector": "Retail",
        "siren": 114491510,
        "results": [
            4755,
            4756
        ]
    },
    {
        "id": 2381,
        "name": "Haag, Turcotte and Rodriguez",
        "sector": "Services",
        "siren": 135599618,
        "results": [
            4757,
            4758
        ]
    },
    {
        "id": 2382,
        "name": "Koch and Sons",
        "sector": "Retail",
        "siren": 129281145,
        "results": [
            4759,
            4760
        ]
    },
    {
        "id": 2383,
        "name": "Abbott-Orn",
        "sector": "Services",
        "siren": 175574586,
        "results": [
            4761,
            4762
        ]
    },
    {
        "id": 2384,
        "name": "Kutch, Hammes and Wolff",
        "sector": "Energy",
        "siren": 125726321,
        "results": [
            4763,
            4764
        ]
    },
    {
        "id": 2385,
        "name": "Towne, Robel and McClure",
        "sector": "Luxury",
        "siren": 189818068,
        "results": [
            4765,
            4766
        ]
    },
    {
        "id": 2386,
        "name": "Schoen Group",
        "sector": "Services",
        "siren": 104760922,
        "results": [
            4767,
            4768
        ]
    },
    {
        "id": 2387,
        "name": "Dicki Group",
        "sector": "Energy",
        "siren": 194491506,
        "results": [
            4769,
            4770
        ]
    },
    {
        "id": 2388,
        "name": "Okuneva, Tromp and Cole",
        "sector": "Services",
        "siren": 143821444,
        "results": [
            4771,
            4772
        ]
    },
    {
        "id": 2389,
        "name": "Moen-Kshlerin",
        "sector": "Retail",
        "siren": 116169729,
        "results": [
            4773,
            4774
        ]
    },
    {
        "id": 2390,
        "name": "Runte Inc",
        "sector": "Luxury",
        "siren": 129549741,
        "results": [
            4775,
            4776
        ]
    },
    {
        "id": 2391,
        "name": "O'Connell, Nolan and Beer",
        "sector": "Energy",
        "siren": 192563933,
        "results": [
            4777,
            4778
        ]
    },
    {
        "id": 2392,
        "name": "Conn Group",
        "sector": "Electronic",
        "siren": 110690030,
        "results": [
            4779,
            4780
        ]
    },
    {
        "id": 2393,
        "name": "Koch, Ratke and Hyatt",
        "sector": "Electronic",
        "siren": 149194214,
        "results": [
            4781,
            4782
        ]
    },
    {
        "id": 2394,
        "name": "O'Reilly-O'Conner",
        "sector": "Services",
        "siren": 171094192,
        "results": [
            4783,
            4784
        ]
    },
    {
        "id": 2395,
        "name": "Kuhic, Reichel and Hilpert",
        "sector": "Services",
        "siren": 183568091,
        "results": [
            4785,
            4786
        ]
    },
    {
        "id": 2396,
        "name": "Oberbrunner-Lebsack",
        "sector": "Energy",
        "siren": 111910705,
        "results": [
            4787,
            4788
        ]
    },
    {
        "id": 2397,
        "name": "McCullough-Adams",
        "sector": "Retail",
        "siren": 184916496,
        "results": [
            4789,
            4790
        ]
    },
    {
        "id": 2398,
        "name": "Buckridge-Aufderhar",
        "sector": "Retail",
        "siren": 180781481,
        "results": [
            4791,
            4792
        ]
    },
    {
        "id": 2399,
        "name": "Maggio Inc",
        "sector": "Luxury",
        "siren": 123066808,
        "results": [
            4793,
            4794
        ]
    },
    {
        "id": 2400,
        "name": "Wuckert, Thiel and Kunze",
        "sector": "Energy",
        "siren": 163452953,
        "results": [
            4795,
            4796
        ]
    },
    {
        "id": 2401,
        "name": "Murray LLC",
        "sector": "Luxury",
        "siren": 159304380,
        "results": [
            4797,
            4798
        ]
    },
    {
        "id": 2402,
        "name": "Feest LLC",
        "sector": "Services",
        "siren": 117304068,
        "results": [
            4799,
            4800
        ]
    },
    {
        "id": 2403,
        "name": "Altenwerth and Sons",
        "sector": "Luxury",
        "siren": 125735323,
        "results": [
            4801,
            4802
        ]
    },
    {
        "id": 2404,
        "name": "Kovacek, Kreiger and Turcotte",
        "sector": "Services",
        "siren": 170068224,
        "results": [
            4803,
            4804
        ]
    },
    {
        "id": 2405,
        "name": "Vandervort-Hauck",
        "sector": "Energy",
        "siren": 117801397,
        "results": [
            4805,
            4806
        ]
    },
    {
        "id": 2406,
        "name": "Rice Group",
        "sector": "Electronic",
        "siren": 142836550,
        "results": [
            4807,
            4808
        ]
    },
    {
        "id": 2407,
        "name": "Brekke Group",
        "sector": "Luxury",
        "siren": 173580801,
        "results": [
            4809,
            4810
        ]
    },
    {
        "id": 2408,
        "name": "Brekke and Sons",
        "sector": "Electronic",
        "siren": 152758790,
        "results": [
            4811,
            4812
        ]
    },
    {
        "id": 2409,
        "name": "Will Inc",
        "sector": "Energy",
        "siren": 178155597,
        "results": [
            4813,
            4814
        ]
    },
    {
        "id": 2410,
        "name": "Mitchell, Hickle and Champlin",
        "sector": "Luxury",
        "siren": 155854012,
        "results": [
            4815,
            4816
        ]
    },
    {
        "id": 2411,
        "name": "O'Reilly-Nienow",
        "sector": "Retail",
        "siren": 112351723,
        "results": [
            4817,
            4818
        ]
    },
    {
        "id": 2412,
        "name": "Harber-Kshlerin",
        "sector": "Luxury",
        "siren": 180653331,
        "results": [
            4819,
            4820
        ]
    },
    {
        "id": 2413,
        "name": "Dicki-MacGyver",
        "sector": "Electronic",
        "siren": 138541953,
        "results": [
            4821,
            4822
        ]
    },
    {
        "id": 2414,
        "name": "Walker, Bashirian and Erdman",
        "sector": "Electronic",
        "siren": 154147387,
        "results": [
            4823,
            4824
        ]
    },
    {
        "id": 2415,
        "name": "Nienow, Armstrong and Klein",
        "sector": "Services",
        "siren": 126399885,
        "results": [
            4825,
            4826
        ]
    },
    {
        "id": 2416,
        "name": "Mills, Morissette and Hand",
        "sector": "Energy",
        "siren": 103861247,
        "results": [
            4827,
            4828
        ]
    },
    {
        "id": 2417,
        "name": "Predovic and Sons",
        "sector": "Services",
        "siren": 151762755,
        "results": [
            4829,
            4830
        ]
    },
    {
        "id": 2418,
        "name": "Cole, Tromp and Lehner",
        "sector": "Energy",
        "siren": 146828326,
        "results": [
            4831,
            4832
        ]
    },
    {
        "id": 2419,
        "name": "Little LLC",
        "sector": "Energy",
        "siren": 119931553,
        "results": [
            4833,
            4834
        ]
    },
    {
        "id": 2420,
        "name": "Labadie, Mohr and Friesen",
        "sector": "Energy",
        "siren": 171769085,
        "results": [
            4835,
            4836
        ]
    },
    {
        "id": 2421,
        "name": "Bogisich-Quigley",
        "sector": "Luxury",
        "siren": 182992869,
        "results": [
            4837,
            4838
        ]
    },
    {
        "id": 2422,
        "name": "Abernathy and Sons",
        "sector": "Services",
        "siren": 144183923,
        "results": [
            4839,
            4840
        ]
    },
    {
        "id": 2423,
        "name": "Schmeler-Langworth",
        "sector": "Services",
        "siren": 129156724,
        "results": [
            4841,
            4842
        ]
    },
    {
        "id": 2424,
        "name": "Schultz, Dicki and Hoppe",
        "sector": "Retail",
        "siren": 115897770,
        "results": [
            4843,
            4844
        ]
    },
    {
        "id": 2425,
        "name": "D'Amore-Koch",
        "sector": "Luxury",
        "siren": 150851464,
        "results": [
            4845,
            4846
        ]
    },
    {
        "id": 2426,
        "name": "Fahey-Hayes",
        "sector": "Energy",
        "siren": 146839022,
        "results": [
            4847,
            4848
        ]
    },
    {
        "id": 2427,
        "name": "Wolff LLC",
        "sector": "Luxury",
        "siren": 143686502,
        "results": [
            4849,
            4850
        ]
    },
    {
        "id": 2428,
        "name": "McKenzie LLC",
        "sector": "Luxury",
        "siren": 103950268,
        "results": [
            4851,
            4852
        ]
    },
    {
        "id": 2429,
        "name": "Jacobson-Hammes",
        "sector": "Services",
        "siren": 193756088,
        "results": [
            4853,
            4854
        ]
    },
    {
        "id": 2430,
        "name": "Collins Inc",
        "sector": "Electronic",
        "siren": 197730432,
        "results": [
            4855,
            4856
        ]
    },
    {
        "id": 2431,
        "name": "Watsica-Orn",
        "sector": "Retail",
        "siren": 160228726,
        "results": [
            4857,
            4858
        ]
    },
    {
        "id": 2432,
        "name": "Bode, Glover and Kuhn",
        "sector": "Retail",
        "siren": 129048235,
        "results": [
            4859,
            4860
        ]
    },
    {
        "id": 2433,
        "name": "Veum Group",
        "sector": "Energy",
        "siren": 137631772,
        "results": [
            4861,
            4862
        ]
    },
    {
        "id": 2434,
        "name": "Blanda LLC",
        "sector": "Energy",
        "siren": 195898910,
        "results": [
            4863,
            4864
        ]
    },
    {
        "id": 2435,
        "name": "Ortiz-Swaniawski",
        "sector": "Services",
        "siren": 193544778,
        "results": [
            4865,
            4866
        ]
    },
    {
        "id": 2436,
        "name": "Cassin-Douglas",
        "sector": "Electronic",
        "siren": 182212539,
        "results": []
    },
    {
        "id": 2437,
        "name": "Reinger Inc",
        "sector": "Services",
        "siren": 135694027,
        "results": [
            4867,
            4868
        ]
    },
    {
        "id": 2438,
        "name": "Torphy, Rosenbaum and Rempel",
        "sector": "Electronic",
        "siren": 107855014,
        "results": [
            4869,
            4870
        ]
    },
    {
        "id": 2439,
        "name": "Towne-Dach",
        "sector": "Energy",
        "siren": 115104805,
        "results": [
            4871,
            4872
        ]
    },
    {
        "id": 2440,
        "name": "Hane-Stanton",
        "sector": "Luxury",
        "siren": 151419067,
        "results": [
            4873,
            4874
        ]
    },
    {
        "id": 2441,
        "name": "Gaylord and Sons",
        "sector": "Retail",
        "siren": 147007807,
        "results": [
            4875,
            4876
        ]
    },
    {
        "id": 2442,
        "name": "Wiegand-Hoeger",
        "sector": "Energy",
        "siren": 143629487,
        "results": [
            4877,
            4878
        ]
    },
    {
        "id": 2443,
        "name": "Rogahn and Sons",
        "sector": "Services",
        "siren": 194214776,
        "results": [
            4879,
            4880
        ]
    },
    {
        "id": 2444,
        "name": "Pagac, Bednar and Von",
        "sector": "Retail",
        "siren": 176873074,
        "results": [
            4881,
            4882
        ]
    },
    {
        "id": 2445,
        "name": "Wilderman-Fay",
        "sector": "Services",
        "siren": 130425768,
        "results": [
            4883,
            4884
        ]
    },
    {
        "id": 2446,
        "name": "Muller Group",
        "sector": "Luxury",
        "siren": 175112687,
        "results": [
            4885,
            4886
        ]
    },
    {
        "id": 2447,
        "name": "Cronin, Kessler and Corwin",
        "sector": "Energy",
        "siren": 119802584,
        "results": [
            4887,
            4888
        ]
    },
    {
        "id": 2448,
        "name": "Sporer-Romaguera",
        "sector": "Electronic",
        "siren": 100614525,
        "results": [
            4889,
            4890
        ]
    },
    {
        "id": 2449,
        "name": "Borer and Sons",
        "sector": "Retail",
        "siren": 162375181,
        "results": [
            4891,
            4892
        ]
    },
    {
        "id": 2450,
        "name": "Berge, Blanda and Gutmann",
        "sector": "Electronic",
        "siren": 128182766,
        "results": [
            4893,
            4894
        ]
    },
    {
        "id": 2451,
        "name": "Sawayn-Hermiston",
        "sector": "Luxury",
        "siren": 189859166,
        "results": [
            4895,
            4896
        ]
    },
    {
        "id": 2452,
        "name": "Halvorson Group",
        "sector": "Luxury",
        "siren": 199790774,
        "results": [
            4897,
            4898
        ]
    },
    {
        "id": 2453,
        "name": "Donnelly-Mraz",
        "sector": "Services",
        "siren": 179611598,
        "results": [
            4899,
            4900
        ]
    },
    {
        "id": 2454,
        "name": "Legros, Bradtke and O'Keefe",
        "sector": "Retail",
        "siren": 114151737,
        "results": [
            4901,
            4902
        ]
    },
    {
        "id": 2455,
        "name": "Fay and Sons",
        "sector": "Luxury",
        "siren": 100933072,
        "results": [
            4903,
            4904
        ]
    },
    {
        "id": 2456,
        "name": "Cassin LLC",
        "sector": "Electronic",
        "siren": 159459542,
        "results": [
            4905,
            4906
        ]
    },
    {
        "id": 2457,
        "name": "Robel Inc",
        "sector": "Luxury",
        "siren": 138199832,
        "results": [
            4907,
            4908
        ]
    },
    {
        "id": 2458,
        "name": "Oberbrunner-Gutmann",
        "sector": "Energy",
        "siren": 131043727,
        "results": [
            4909,
            4910
        ]
    },
    {
        "id": 2459,
        "name": "Stracke Group",
        "sector": "Electronic",
        "siren": 190537129,
        "results": [
            4911,
            4912
        ]
    },
    {
        "id": 2460,
        "name": "Collins Group",
        "sector": "Retail",
        "siren": 148151467,
        "results": [
            4913,
            4914
        ]
    },
    {
        "id": 2461,
        "name": "Hoeger, Schoen and Dibbert",
        "sector": "Luxury",
        "siren": 175662557,
        "results": [
            4915,
            4916
        ]
    },
    {
        "id": 2462,
        "name": "Pacocha-Schmitt",
        "sector": "Energy",
        "siren": 132741221,
        "results": [
            4917,
            4918
        ]
    },
    {
        "id": 2463,
        "name": "Collier-Goldner",
        "sector": "Electronic",
        "siren": 190574530,
        "results": [
            4919,
            4920
        ]
    },
    {
        "id": 2464,
        "name": "Kiehn, Stoltenberg and Friesen",
        "sector": "Electronic",
        "siren": 151306292,
        "results": [
            4921,
            4922
        ]
    },
    {
        "id": 2465,
        "name": "Johnston, Mante and Purdy",
        "sector": "Services",
        "siren": 132122930,
        "results": [
            4923,
            4924
        ]
    },
    {
        "id": 2466,
        "name": "Lowe-Legros",
        "sector": "Electronic",
        "siren": 103764020,
        "results": [
            4925,
            4926
        ]
    },
    {
        "id": 2467,
        "name": "Schulist LLC",
        "sector": "Services",
        "siren": 130132106,
        "results": [
            4927,
            4928
        ]
    },
    {
        "id": 2468,
        "name": "Ankunding-Lindgren",
        "sector": "Energy",
        "siren": 190875445,
        "results": [
            4929,
            4930
        ]
    },
    {
        "id": 2469,
        "name": "Hudson, Cole and Torp",
        "sector": "Electronic",
        "siren": 149620575,
        "results": [
            4931,
            4932
        ]
    },
    {
        "id": 2470,
        "name": "Fisher Inc",
        "sector": "Energy",
        "siren": 195699182,
        "results": [
            4933,
            4934
        ]
    },
    {
        "id": 2471,
        "name": "Turner Inc",
        "sector": "Energy",
        "siren": 181691080,
        "results": [
            4935,
            4936
        ]
    },
    {
        "id": 2472,
        "name": "Welch, Rohan and Ortiz",
        "sector": "Electronic",
        "siren": 148674050,
        "results": [
            4937,
            4938
        ]
    },
    {
        "id": 2473,
        "name": "Senger Group",
        "sector": "Retail",
        "siren": 196126254,
        "results": [
            4939,
            4940
        ]
    },
    {
        "id": 2474,
        "name": "Kertzmann Group",
        "sector": "Retail",
        "siren": 187537793,
        "results": [
            4941,
            4942
        ]
    },
    {
        "id": 2475,
        "name": "Trantow, Bauch and Brown",
        "sector": "Electronic",
        "siren": 194314995,
        "results": [
            4943,
            4944
        ]
    },
    {
        "id": 2476,
        "name": "Kertzmann-Cremin",
        "sector": "Luxury",
        "siren": 110861915,
        "results": [
            4945,
            4946
        ]
    },
    {
        "id": 2477,
        "name": "Jaskolski and Sons",
        "sector": "Services",
        "siren": 163203664,
        "results": [
            4947,
            4948
        ]
    },
    {
        "id": 2478,
        "name": "Gottlieb Inc",
        "sector": "Services",
        "siren": 173594891,
        "results": [
            4949,
            4950
        ]
    },
    {
        "id": 2479,
        "name": "Bins Inc",
        "sector": "Retail",
        "siren": 156610978,
        "results": [
            4951,
            4952
        ]
    },
    {
        "id": 2480,
        "name": "Purdy, Barrows and Mills",
        "sector": "Electronic",
        "siren": 125001735,
        "results": [
            4953,
            4954
        ]
    },
    {
        "id": 2481,
        "name": "Becker and Sons",
        "sector": "Retail",
        "siren": 108220327,
        "results": [
            4955,
            4956
        ]
    },
    {
        "id": 2482,
        "name": "Kozey, Haag and Kuvalis",
        "sector": "Services",
        "siren": 197683277,
        "results": [
            4957,
            4958
        ]
    },
    {
        "id": 2483,
        "name": "Wilkinson, Nienow and Schmeler",
        "sector": "Retail",
        "siren": 195451954,
        "results": [
            4959,
            4960
        ]
    },
    {
        "id": 2484,
        "name": "Cummings, Towne and Stanton",
        "sector": "Services",
        "siren": 175032418,
        "results": [
            4961,
            4962
        ]
    },
    {
        "id": 2485,
        "name": "Kreiger, Mosciski and Kiehn",
        "sector": "Energy",
        "siren": 164388517,
        "results": [
            4963,
            4964
        ]
    },
    {
        "id": 2486,
        "name": "Bode, Hudson and Kulas",
        "sector": "Electronic",
        "siren": 177384240,
        "results": [
            4965,
            4966
        ]
    },
    {
        "id": 2487,
        "name": "Walker, Abbott and Brekke",
        "sector": "Retail",
        "siren": 108949277,
        "results": [
            4967,
            4968
        ]
    },
    {
        "id": 2488,
        "name": "Rath, Legros and Feil",
        "sector": "Electronic",
        "siren": 105376773,
        "results": [
            4969,
            4970
        ]
    },
    {
        "id": 2489,
        "name": "Wunsch, Nienow and Russel",
        "sector": "Retail",
        "siren": 170490793,
        "results": [
            4971,
            4972
        ]
    },
    {
        "id": 2490,
        "name": "Baumbach-Howe",
        "sector": "Luxury",
        "siren": 197432382,
        "results": [
            4973,
            4974
        ]
    },
    {
        "id": 2491,
        "name": "Hartmann, Bruen and McDermott",
        "sector": "Services",
        "siren": 183064272,
        "results": [
            4975,
            4976
        ]
    },
    {
        "id": 2492,
        "name": "Rippin-Klocko",
        "sector": "Luxury",
        "siren": 109837685,
        "results": [
            4977,
            4978
        ]
    },
    {
        "id": 2493,
        "name": "Beer, Simonis and Runolfsdottir",
        "sector": "Energy",
        "siren": 188135119,
        "results": [
            4979,
            4980
        ]
    },
    {
        "id": 2494,
        "name": "Schamberger, Yundt and Zemlak",
        "sector": "Energy",
        "siren": 133026662,
        "results": [
            4981,
            4982
        ]
    },
    {
        "id": 2495,
        "name": "Feeney and Sons",
        "sector": "Services",
        "siren": 132298627,
        "results": [
            4983,
            4984
        ]
    },
    {
        "id": 2496,
        "name": "Kerluke, Durgan and Bernhard",
        "sector": "Retail",
        "siren": 168792627,
        "results": [
            4985,
            4986
        ]
    },
    {
        "id": 2497,
        "name": "Dicki, Moen and Robel",
        "sector": "Retail",
        "siren": 135883737,
        "results": [
            4987,
            4988
        ]
    },
    {
        "id": 2498,
        "name": "Sporer and Sons",
        "sector": "Luxury",
        "siren": 160840028,
        "results": [
            4989,
            4990
        ]
    },
    {
        "id": 2499,
        "name": "Skiles-Gusikowski",
        "sector": "Luxury",
        "siren": 121692227,
        "results": [
            4991,
            4992
        ]
    },
    {
        "id": 2500,
        "name": "Swaniawski Group",
        "sector": "Retail",
        "siren": 173672744,
        "results": [
            4993,
            4994
        ]
    },
    {
        "id": 2501,
        "name": "Satterfield, Brekke and Stanton",
        "sector": "Services",
        "siren": 195857228,
        "results": [
            4995,
            4996
        ]
    },
    {
        "id": 2502,
        "name": "Ortiz-Connelly",
        "sector": "Services",
        "siren": 182726877,
        "results": [
            4997,
            4998
        ]
    },
    {
        "id": 2503,
        "name": "Donnelly, Abernathy and Pacocha",
        "sector": "Retail",
        "siren": 156951403,
        "results": [
            4999,
            5000
        ]
    },
    {
        "id": 2504,
        "name": "Hudson, Reynolds and Jacobson",
        "sector": "Services",
        "siren": 132253095,
        "results": [
            5001,
            5002
        ]
    },
    {
        "id": 2505,
        "name": "Wuckert Group",
        "sector": "Electronic",
        "siren": 165950424,
        "results": [
            5003,
            5004
        ]
    },
    {
        "id": 2506,
        "name": "Larson, Gleason and Murphy",
        "sector": "Retail",
        "siren": 117623669,
        "results": [
            5005,
            5006
        ]
    },
    {
        "id": 2507,
        "name": "Dickinson-Strosin",
        "sector": "Energy",
        "siren": 175066823,
        "results": [
            5007,
            5008
        ]
    },
    {
        "id": 2508,
        "name": "Franecki-Cassin",
        "sector": "Retail",
        "siren": 158424603,
        "results": [
            5009,
            5010
        ]
    },
    {
        "id": 2509,
        "name": "Nikolaus-Flatley",
        "sector": "Electronic",
        "siren": 133495059,
        "results": [
            5011,
            5012
        ]
    },
    {
        "id": 2510,
        "name": "Hickle, Stamm and Fahey",
        "sector": "Services",
        "siren": 101590590,
        "results": [
            5013,
            5014
        ]
    },
    {
        "id": 2511,
        "name": "Bahringer, Blanda and Schmitt",
        "sector": "Luxury",
        "siren": 137219707,
        "results": [
            5015,
            5016
        ]
    },
    {
        "id": 2512,
        "name": "Herman-Abbott",
        "sector": "Retail",
        "siren": 174831134,
        "results": [
            5017,
            5018
        ]
    },
    {
        "id": 2513,
        "name": "Stokes-Hegmann",
        "sector": "Energy",
        "siren": 152222171,
        "results": [
            5019,
            5020
        ]
    },
    {
        "id": 2514,
        "name": "Moen, Krajcik and O'Keefe",
        "sector": "Retail",
        "siren": 179058220,
        "results": [
            5021,
            5022
        ]
    },
    {
        "id": 2515,
        "name": "Huels-Koepp",
        "sector": "Services",
        "siren": 103436807,
        "results": [
            5023,
            5024
        ]
    },
    {
        "id": 2516,
        "name": "Turcotte LLC",
        "sector": "Services",
        "siren": 115411209,
        "results": [
            5025,
            5026
        ]
    },
    {
        "id": 2517,
        "name": "Glover, Kirlin and McGlynn",
        "sector": "Energy",
        "siren": 184190735,
        "results": [
            5027,
            5028
        ]
    },
    {
        "id": 2518,
        "name": "Nader-Bergnaum",
        "sector": "Electronic",
        "siren": 142087889,
        "results": [
            5029,
            5030
        ]
    },
    {
        "id": 2519,
        "name": "McDermott-Rolfson",
        "sector": "Energy",
        "siren": 117468732,
        "results": [
            5031,
            5032
        ]
    },
    {
        "id": 2520,
        "name": "Treutel Group",
        "sector": "Retail",
        "siren": 138837726,
        "results": [
            5033,
            5034
        ]
    },
    {
        "id": 2521,
        "name": "Lynch, Wunsch and Kris",
        "sector": "Services",
        "siren": 152402150,
        "results": [
            5035,
            5036
        ]
    },
    {
        "id": 2522,
        "name": "Tremblay, Keeling and Breitenberg",
        "sector": "Services",
        "siren": 125362017,
        "results": [
            5037,
            5038
        ]
    },
    {
        "id": 2523,
        "name": "Leffler LLC",
        "sector": "Retail",
        "siren": 150610837,
        "results": [
            5039,
            5040
        ]
    },
    {
        "id": 2524,
        "name": "Hintz Inc",
        "sector": "Electronic",
        "siren": 170053342,
        "results": [
            5041,
            5042
        ]
    },
    {
        "id": 2525,
        "name": "Howell Inc",
        "sector": "Energy",
        "siren": 115871891,
        "results": [
            5043,
            5044
        ]
    },
    {
        "id": 2526,
        "name": "Windler-Pfeffer",
        "sector": "Electronic",
        "siren": 186052047,
        "results": [
            5045,
            5046
        ]
    },
    {
        "id": 2527,
        "name": "Greenfelder Group",
        "sector": "Services",
        "siren": 123389196,
        "results": [
            5047,
            5048
        ]
    },
    {
        "id": 2528,
        "name": "Hessel Group",
        "sector": "Electronic",
        "siren": 130378540,
        "results": [
            5049,
            5050
        ]
    },
    {
        "id": 2529,
        "name": "Goyette, Cummerata and Windler",
        "sector": "Luxury",
        "siren": 173090205,
        "results": [
            5051,
            5052
        ]
    },
    {
        "id": 2530,
        "name": "Green LLC",
        "sector": "Energy",
        "siren": 142811173,
        "results": [
            5053,
            5054
        ]
    },
    {
        "id": 2531,
        "name": "MacGyver LLC",
        "sector": "Energy",
        "siren": 180573399,
        "results": [
            5055,
            5056
        ]
    },
    {
        "id": 2532,
        "name": "Cassin-Weissnat",
        "sector": "Electronic",
        "siren": 174008422,
        "results": [
            5057,
            5058
        ]
    },
    {
        "id": 2533,
        "name": "Koelpin-Herman",
        "sector": "Services",
        "siren": 123713934,
        "results": [
            5059,
            5060
        ]
    },
    {
        "id": 2534,
        "name": "Murray, Keeling and Pfeffer",
        "sector": "Services",
        "siren": 153108580,
        "results": [
            5061,
            5062
        ]
    },
    {
        "id": 2535,
        "name": "Metz and Sons",
        "sector": "Electronic",
        "siren": 132514765,
        "results": [
            5063,
            5064
        ]
    },
    {
        "id": 2536,
        "name": "Trantow, Stoltenberg and Rau",
        "sector": "Luxury",
        "siren": 142196394,
        "results": [
            5065,
            5066
        ]
    },
    {
        "id": 2537,
        "name": "Hermann and Sons",
        "sector": "Electronic",
        "siren": 199577547,
        "results": [
            5067,
            5068
        ]
    },
    {
        "id": 2538,
        "name": "Hickle-Cartwright",
        "sector": "Luxury",
        "siren": 145170204,
        "results": [
            5069,
            5070
        ]
    },
    {
        "id": 2539,
        "name": "Balistreri and Sons",
        "sector": "Retail",
        "siren": 122783975,
        "results": [
            5071,
            5072
        ]
    },
    {
        "id": 2540,
        "name": "Welch-Wisoky",
        "sector": "Electronic",
        "siren": 180856598,
        "results": [
            5073,
            5074
        ]
    },
    {
        "id": 2541,
        "name": "Schamberger-Leuschke",
        "sector": "Retail",
        "siren": 101786222,
        "results": [
            5075,
            5076
        ]
    },
    {
        "id": 2542,
        "name": "Hudson and Sons",
        "sector": "Retail",
        "siren": 159421714,
        "results": [
            5077,
            5078
        ]
    },
    {
        "id": 2543,
        "name": "Stehr-Larson",
        "sector": "Electronic",
        "siren": 110442504,
        "results": [
            5079,
            5080
        ]
    },
    {
        "id": 2544,
        "name": "Deckow-Rowe",
        "sector": "Electronic",
        "siren": 140318401,
        "results": [
            5081,
            5082
        ]
    },
    {
        "id": 2545,
        "name": "Mann-Wisoky",
        "sector": "Luxury",
        "siren": 154437824,
        "results": [
            5083
        ]
    },
    {
        "id": 2546,
        "name": "Reinger Inc",
        "sector": "Services",
        "siren": 135694027,
        "results": [
            5084,
            5085
        ]
    },
    {
        "id": 2547,
        "name": "Torphy, Rosenbaum and Rempel",
        "sector": "Electronic",
        "siren": 107855014,
        "results": [
            5086,
            5087
        ]
    },
    {
        "id": 2548,
        "name": "Towne-Dach",
        "sector": "Energy",
        "siren": 115104805,
        "results": [
            5088,
            5089
        ]
    },
    {
        "id": 2549,
        "name": "Hane-Stanton",
        "sector": "Luxury",
        "siren": 151419067,
        "results": [
            5090,
            5091
        ]
    },
    {
        "id": 2550,
        "name": "Gaylord and Sons",
        "sector": "Retail",
        "siren": 147007807,
        "results": [
            5092,
            5093
        ]
    },
    {
        "id": 2551,
        "name": "Wiegand-Hoeger",
        "sector": "Energy",
        "siren": 143629487,
        "results": [
            5094,
            5095
        ]
    },
    {
        "id": 2552,
        "name": "Rogahn and Sons",
        "sector": "Services",
        "siren": 194214776,
        "results": [
            5096,
            5097
        ]
    },
    {
        "id": 2553,
        "name": "Pagac, Bednar and Von",
        "sector": "Retail",
        "siren": 176873074,
        "results": [
            5098,
            5099
        ]
    },
    {
        "id": 2554,
        "name": "Wilderman-Fay",
        "sector": "Services",
        "siren": 130425768,
        "results": [
            5100,
            5101
        ]
    },
    {
        "id": 2555,
        "name": "Muller Group",
        "sector": "Luxury",
        "siren": 175112687,
        "results": [
            5102,
            5103
        ]
    },
    {
        "id": 2556,
        "name": "Cronin, Kessler and Corwin",
        "sector": "Energy",
        "siren": 119802584,
        "results": [
            5104,
            5105
        ]
    },
    {
        "id": 2557,
        "name": "Sporer-Romaguera",
        "sector": "Electronic",
        "siren": 100614525,
        "results": [
            5106,
            5107
        ]
    },
    {
        "id": 2558,
        "name": "Borer and Sons",
        "sector": "Retail",
        "siren": 162375181,
        "results": [
            5108,
            5109
        ]
    },
    {
        "id": 2559,
        "name": "Berge, Blanda and Gutmann",
        "sector": "Electronic",
        "siren": 128182766,
        "results": [
            5110,
            5111
        ]
    },
    {
        "id": 2560,
        "name": "Sawayn-Hermiston",
        "sector": "Luxury",
        "siren": 189859166,
        "results": [
            5112,
            5113
        ]
    },
    {
        "id": 2561,
        "name": "Halvorson Group",
        "sector": "Luxury",
        "siren": 199790774,
        "results": [
            5114,
            5115
        ]
    },
    {
        "id": 2562,
        "name": "Donnelly-Mraz",
        "sector": "Services",
        "siren": 179611598,
        "results": [
            5116,
            5117
        ]
    },
    {
        "id": 2563,
        "name": "Legros, Bradtke and O'Keefe",
        "sector": "Retail",
        "siren": 114151737,
        "results": [
            5118,
            5119
        ]
    },
    {
        "id": 2564,
        "name": "Fay and Sons",
        "sector": "Luxury",
        "siren": 100933072,
        "results": [
            5120,
            5121
        ]
    },
    {
        "id": 2565,
        "name": "Cassin LLC",
        "sector": "Electronic",
        "siren": 159459542,
        "results": [
            5122,
            5123
        ]
    },
    {
        "id": 2566,
        "name": "Robel Inc",
        "sector": "Luxury",
        "siren": 138199832,
        "results": [
            5124,
            5125
        ]
    },
    {
        "id": 2567,
        "name": "Oberbrunner-Gutmann",
        "sector": "Energy",
        "siren": 131043727,
        "results": [
            5126,
            5127
        ]
    },
    {
        "id": 2568,
        "name": "Stracke Group",
        "sector": "Electronic",
        "siren": 190537129,
        "results": [
            5128,
            5129
        ]
    },
    {
        "id": 2569,
        "name": "Collins Group",
        "sector": "Retail",
        "siren": 148151467,
        "results": [
            5130,
            5131
        ]
    },
    {
        "id": 2570,
        "name": "Hoeger, Schoen and Dibbert",
        "sector": "Luxury",
        "siren": 175662557,
        "results": [
            5132,
            5133
        ]
    },
    {
        "id": 2571,
        "name": "Pacocha-Schmitt",
        "sector": "Energy",
        "siren": 132741221,
        "results": [
            5134,
            5135
        ]
    },
    {
        "id": 2572,
        "name": "Collier-Goldner",
        "sector": "Electronic",
        "siren": 190574530,
        "results": [
            5136,
            5137
        ]
    },
    {
        "id": 2573,
        "name": "Kiehn, Stoltenberg and Friesen",
        "sector": "Electronic",
        "siren": 151306292,
        "results": [
            5138,
            5139
        ]
    },
    {
        "id": 2574,
        "name": "Johnston, Mante and Purdy",
        "sector": "Services",
        "siren": 132122930,
        "results": [
            5140,
            5141
        ]
    },
    {
        "id": 2575,
        "name": "Lowe-Legros",
        "sector": "Electronic",
        "siren": 103764020,
        "results": [
            5142,
            5143
        ]
    },
    {
        "id": 2576,
        "name": "Schulist LLC",
        "sector": "Services",
        "siren": 130132106,
        "results": [
            5144,
            5145
        ]
    },
    {
        "id": 2577,
        "name": "Ankunding-Lindgren",
        "sector": "Energy",
        "siren": 190875445,
        "results": [
            5146,
            5147
        ]
    },
    {
        "id": 2578,
        "name": "Hudson, Cole and Torp",
        "sector": "Electronic",
        "siren": 149620575,
        "results": [
            5148,
            5149
        ]
    },
    {
        "id": 2579,
        "name": "Fisher Inc",
        "sector": "Energy",
        "siren": 195699182,
        "results": [
            5150,
            5151
        ]
    },
    {
        "id": 2580,
        "name": "Turner Inc",
        "sector": "Energy",
        "siren": 181691080,
        "results": [
            5152,
            5153
        ]
    },
    {
        "id": 2581,
        "name": "Welch, Rohan and Ortiz",
        "sector": "Electronic",
        "siren": 148674050,
        "results": [
            5154,
            5155
        ]
    },
    {
        "id": 2582,
        "name": "Senger Group",
        "sector": "Retail",
        "siren": 196126254,
        "results": [
            5156,
            5157
        ]
    },
    {
        "id": 2583,
        "name": "Kertzmann Group",
        "sector": "Retail",
        "siren": 187537793,
        "results": [
            5158,
            5159
        ]
    },
    {
        "id": 2584,
        "name": "Trantow, Bauch and Brown",
        "sector": "Electronic",
        "siren": 194314995,
        "results": [
            5160,
            5161
        ]
    },
    {
        "id": 2585,
        "name": "Kertzmann-Cremin",
        "sector": "Luxury",
        "siren": 110861915,
        "results": [
            5162,
            5163
        ]
    },
    {
        "id": 2586,
        "name": "Jaskolski and Sons",
        "sector": "Services",
        "siren": 163203664,
        "results": [
            5164,
            5165
        ]
    },
    {
        "id": 2587,
        "name": "Gottlieb Inc",
        "sector": "Services",
        "siren": 173594891,
        "results": [
            5166,
            5167
        ]
    },
    {
        "id": 2588,
        "name": "Bins Inc",
        "sector": "Retail",
        "siren": 156610978,
        "results": [
            5168,
            5169
        ]
    },
    {
        "id": 2589,
        "name": "Purdy, Barrows and Mills",
        "sector": "Electronic",
        "siren": 125001735,
        "results": [
            5170,
            5171
        ]
    },
    {
        "id": 2590,
        "name": "Becker and Sons",
        "sector": "Retail",
        "siren": 108220327,
        "results": [
            5172,
            5173
        ]
    },
    {
        "id": 2591,
        "name": "Kozey, Haag and Kuvalis",
        "sector": "Services",
        "siren": 197683277,
        "results": [
            5174,
            5175
        ]
    },
    {
        "id": 2592,
        "name": "Wilkinson, Nienow and Schmeler",
        "sector": "Retail",
        "siren": 195451954,
        "results": [
            5176,
            5177
        ]
    },
    {
        "id": 2593,
        "name": "Cummings, Towne and Stanton",
        "sector": "Services",
        "siren": 175032418,
        "results": [
            5178,
            5179
        ]
    },
    {
        "id": 2594,
        "name": "Kreiger, Mosciski and Kiehn",
        "sector": "Energy",
        "siren": 164388517,
        "results": [
            5180,
            5181
        ]
    },
    {
        "id": 2595,
        "name": "Bode, Hudson and Kulas",
        "sector": "Electronic",
        "siren": 177384240,
        "results": [
            5182,
            5183
        ]
    },
    {
        "id": 2596,
        "name": "Walker, Abbott and Brekke",
        "sector": "Retail",
        "siren": 108949277,
        "results": [
            5184,
            5185
        ]
    },
    {
        "id": 2597,
        "name": "Rath, Legros and Feil",
        "sector": "Electronic",
        "siren": 105376773,
        "results": [
            5186,
            5187
        ]
    },
    {
        "id": 2598,
        "name": "Wunsch, Nienow and Russel",
        "sector": "Retail",
        "siren": 170490793,
        "results": [
            5188,
            5189
        ]
    },
    {
        "id": 2599,
        "name": "Baumbach-Howe",
        "sector": "Luxury",
        "siren": 197432382,
        "results": [
            5190,
            5191
        ]
    },
    {
        "id": 2600,
        "name": "Hartmann, Bruen and McDermott",
        "sector": "Services",
        "siren": 183064272,
        "results": [
            5192,
            5193
        ]
    },
    {
        "id": 2601,
        "name": "Rippin-Klocko",
        "sector": "Luxury",
        "siren": 109837685,
        "results": [
            5194,
            5195
        ]
    },
    {
        "id": 2602,
        "name": "Beer, Simonis and Runolfsdottir",
        "sector": "Energy",
        "siren": 188135119,
        "results": [
            5196,
            5197
        ]
    },
    {
        "id": 2603,
        "name": "Schamberger, Yundt and Zemlak",
        "sector": "Energy",
        "siren": 133026662,
        "results": [
            5198,
            5199
        ]
    },
    {
        "id": 2604,
        "name": "Feeney and Sons",
        "sector": "Services",
        "siren": 132298627,
        "results": [
            5200,
            5201
        ]
    },
    {
        "id": 2605,
        "name": "Kerluke, Durgan and Bernhard",
        "sector": "Retail",
        "siren": 168792627,
        "results": [
            5202,
            5203
        ]
    },
    {
        "id": 2606,
        "name": "Dicki, Moen and Robel",
        "sector": "Retail",
        "siren": 135883737,
        "results": [
            5204,
            5205
        ]
    },
    {
        "id": 2607,
        "name": "Sporer and Sons",
        "sector": "Luxury",
        "siren": 160840028,
        "results": [
            5206,
            5207
        ]
    },
    {
        "id": 2608,
        "name": "Skiles-Gusikowski",
        "sector": "Luxury",
        "siren": 121692227,
        "results": [
            5208,
            5209
        ]
    },
    {
        "id": 2609,
        "name": "Swaniawski Group",
        "sector": "Retail",
        "siren": 173672744,
        "results": [
            5210,
            5211
        ]
    },
    {
        "id": 2610,
        "name": "Satterfield, Brekke and Stanton",
        "sector": "Services",
        "siren": 195857228,
        "results": [
            5212,
            5213
        ]
    },
    {
        "id": 2611,
        "name": "Ortiz-Connelly",
        "sector": "Services",
        "siren": 182726877,
        "results": [
            5214,
            5215
        ]
    },
    {
        "id": 2612,
        "name": "Donnelly, Abernathy and Pacocha",
        "sector": "Retail",
        "siren": 156951403,
        "results": [
            5216,
            5217
        ]
    },
    {
        "id": 2613,
        "name": "Hudson, Reynolds and Jacobson",
        "sector": "Services",
        "siren": 132253095,
        "results": [
            5218,
            5219
        ]
    },
    {
        "id": 2614,
        "name": "Wuckert Group",
        "sector": "Electronic",
        "siren": 165950424,
        "results": [
            5220,
            5221
        ]
    },
    {
        "id": 2615,
        "name": "Larson, Gleason and Murphy",
        "sector": "Retail",
        "siren": 117623669,
        "results": [
            5222,
            5223
        ]
    },
    {
        "id": 2616,
        "name": "Dickinson-Strosin",
        "sector": "Energy",
        "siren": 175066823,
        "results": [
            5224,
            5225
        ]
    },
    {
        "id": 2617,
        "name": "Franecki-Cassin",
        "sector": "Retail",
        "siren": 158424603,
        "results": [
            5226,
            5227
        ]
    },
    {
        "id": 2618,
        "name": "Nikolaus-Flatley",
        "sector": "Electronic",
        "siren": 133495059,
        "results": [
            5228,
            5229
        ]
    },
    {
        "id": 2619,
        "name": "Hickle, Stamm and Fahey",
        "sector": "Services",
        "siren": 101590590,
        "results": [
            5230,
            5231
        ]
    },
    {
        "id": 2620,
        "name": "Bahringer, Blanda and Schmitt",
        "sector": "Luxury",
        "siren": 137219707,
        "results": [
            5232,
            5233
        ]
    },
    {
        "id": 2621,
        "name": "Herman-Abbott",
        "sector": "Retail",
        "siren": 174831134,
        "results": [
            5234,
            5235
        ]
    },
    {
        "id": 2622,
        "name": "Stokes-Hegmann",
        "sector": "Energy",
        "siren": 152222171,
        "results": [
            5236,
            5237
        ]
    },
    {
        "id": 2623,
        "name": "Moen, Krajcik and O'Keefe",
        "sector": "Retail",
        "siren": 179058220,
        "results": [
            5238,
            5239
        ]
    },
    {
        "id": 2624,
        "name": "Huels-Koepp",
        "sector": "Services",
        "siren": 103436807,
        "results": [
            5240,
            5241
        ]
    },
    {
        "id": 2625,
        "name": "Turcotte LLC",
        "sector": "Services",
        "siren": 115411209,
        "results": [
            5242,
            5243
        ]
    },
    {
        "id": 2626,
        "name": "Glover, Kirlin and McGlynn",
        "sector": "Energy",
        "siren": 184190735,
        "results": [
            5244,
            5245
        ]
    },
    {
        "id": 2627,
        "name": "Nader-Bergnaum",
        "sector": "Electronic",
        "siren": 142087889,
        "results": [
            5246,
            5247
        ]
    },
    {
        "id": 2628,
        "name": "McDermott-Rolfson",
        "sector": "Energy",
        "siren": 117468732,
        "results": [
            5248,
            5249
        ]
    },
    {
        "id": 2629,
        "name": "Treutel Group",
        "sector": "Retail",
        "siren": 138837726,
        "results": [
            5250,
            5251
        ]
    },
    {
        "id": 2630,
        "name": "Lynch, Wunsch and Kris",
        "sector": "Services",
        "siren": 152402150,
        "results": [
            5252,
            5253
        ]
    },
    {
        "id": 2631,
        "name": "Tremblay, Keeling and Breitenberg",
        "sector": "Services",
        "siren": 125362017,
        "results": [
            5254,
            5255
        ]
    },
    {
        "id": 2632,
        "name": "Leffler LLC",
        "sector": "Retail",
        "siren": 150610837,
        "results": [
            5256,
            5257
        ]
    },
    {
        "id": 2633,
        "name": "Hintz Inc",
        "sector": "Electronic",
        "siren": 170053342,
        "results": [
            5258,
            5259
        ]
    },
    {
        "id": 2634,
        "name": "Howell Inc",
        "sector": "Energy",
        "siren": 115871891,
        "results": [
            5260,
            5261
        ]
    },
    {
        "id": 2635,
        "name": "Windler-Pfeffer",
        "sector": "Electronic",
        "siren": 186052047,
        "results": [
            5262,
            5263
        ]
    },
    {
        "id": 2636,
        "name": "Greenfelder Group",
        "sector": "Services",
        "siren": 123389196,
        "results": [
            5264,
            5265
        ]
    },
    {
        "id": 2637,
        "name": "Hessel Group",
        "sector": "Electronic",
        "siren": 130378540,
        "results": [
            5266,
            5267
        ]
    },
    {
        "id": 2638,
        "name": "Goyette, Cummerata and Windler",
        "sector": "Luxury",
        "siren": 173090205,
        "results": [
            5268,
            5269
        ]
    },
    {
        "id": 2639,
        "name": "Green LLC",
        "sector": "Energy",
        "siren": 142811173,
        "results": [
            5270,
            5271
        ]
    },
    {
        "id": 2640,
        "name": "MacGyver LLC",
        "sector": "Energy",
        "siren": 180573399,
        "results": [
            5272,
            5273
        ]
    },
    {
        "id": 2641,
        "name": "Cassin-Weissnat",
        "sector": "Electronic",
        "siren": 174008422,
        "results": [
            5274,
            5275
        ]
    },
    {
        "id": 2642,
        "name": "Koelpin-Herman",
        "sector": "Services",
        "siren": 123713934,
        "results": [
            5276,
            5277
        ]
    },
    {
        "id": 2643,
        "name": "Murray, Keeling and Pfeffer",
        "sector": "Services",
        "siren": 153108580,
        "results": [
            5278,
            5279
        ]
    },
    {
        "id": 2644,
        "name": "Metz and Sons",
        "sector": "Electronic",
        "siren": 132514765,
        "results": [
            5280,
            5281
        ]
    },
    {
        "id": 2645,
        "name": "Trantow, Stoltenberg and Rau",
        "sector": "Luxury",
        "siren": 142196394,
        "results": [
            5282,
            5283
        ]
    },
    {
        "id": 2646,
        "name": "Hermann and Sons",
        "sector": "Electronic",
        "siren": 199577547,
        "results": [
            5284,
            5285
        ]
    },
    {
        "id": 2647,
        "name": "Hickle-Cartwright",
        "sector": "Luxury",
        "siren": 145170204,
        "results": [
            5286,
            5287
        ]
    },
    {
        "id": 2648,
        "name": "Balistreri and Sons",
        "sector": "Retail",
        "siren": 122783975,
        "results": [
            5288,
            5289
        ]
    },
    {
        "id": 2649,
        "name": "Welch-Wisoky",
        "sector": "Electronic",
        "siren": 180856598,
        "results": [
            5290,
            5291
        ]
    },
    {
        "id": 2650,
        "name": "Schamberger-Leuschke",
        "sector": "Retail",
        "siren": 101786222,
        "results": [
            5292,
            5293
        ]
    },
    {
        "id": 2651,
        "name": "Hudson and Sons",
        "sector": "Retail",
        "siren": 159421714,
        "results": [
            5294,
            5295
        ]
    },
    {
        "id": 2652,
        "name": "Stehr-Larson",
        "sector": "Electronic",
        "siren": 110442504,
        "results": [
            5296,
            5297
        ]
    },
    {
        "id": 2653,
        "name": "Deckow-Rowe",
        "sector": "Electronic",
        "siren": 140318401,
        "results": [
            5298,
            5299
        ]
    },
    {
        "id": 2654,
        "name": "Mann-Wisoky",
        "sector": "Luxury",
        "siren": 154437824,
        "results": [
            5300,
            5301
        ]
    },
    {
        "id": 2655,
        "name": "Bradtke, Bauch and Hermann",
        "sector": "Electronic",
        "siren": 119255732,
        "results": [
            5302,
            5303
        ]
    },
    {
        "id": 2656,
        "name": "Jaskolski Group",
        "sector": "Electronic",
        "siren": 188974299,
        "results": [
            5304,
            5305
        ]
    },
    {
        "id": 2657,
        "name": "Glover, Lubowitz and Labadie",
        "sector": "Energy",
        "siren": 111353919,
        "results": [
            5306,
            5307
        ]
    },
    {
        "id": 2658,
        "name": "Mraz, Little and Fritsch",
        "sector": "Luxury",
        "siren": 162877974,
        "results": [
            5308,
            5309
        ]
    },
    {
        "id": 2659,
        "name": "Medhurst and Sons",
        "sector": "Services",
        "siren": 125625509,
        "results": [
            5310,
            5311
        ]
    },
    {
        "id": 2660,
        "name": "Schultz Inc",
        "sector": "Retail",
        "siren": 163815675,
        "results": [
            5312,
            5313
        ]
    },
    {
        "id": 2661,
        "name": "Brown Inc",
        "sector": "Retail",
        "siren": 169391204,
        "results": [
            5314,
            5315
        ]
    },
    {
        "id": 2662,
        "name": "Huels Inc",
        "sector": "Luxury",
        "siren": 135296056,
        "results": [
            5316,
            5317
        ]
    },
    {
        "id": 2663,
        "name": "Cassin-Collins",
        "sector": "Energy",
        "siren": 136888845,
        "results": [
            5318,
            5319
        ]
    },
    {
        "id": 2664,
        "name": "Murphy, Reichert and Walsh",
        "sector": "Electronic",
        "siren": 168943428,
        "results": [
            5320,
            5321
        ]
    },
    {
        "id": 2665,
        "name": "Dooley-Flatley",
        "sector": "Retail",
        "siren": 121546181,
        "results": [
            5322,
            5323
        ]
    },
    {
        "id": 2666,
        "name": "Wisozk-Langosh",
        "sector": "Services",
        "siren": 104018793,
        "results": [
            5324,
            5325
        ]
    },
    {
        "id": 2667,
        "name": "Dickinson, Thiel and Wisoky",
        "sector": "Retail",
        "siren": 173786909,
        "results": [
            5326,
            5327
        ]
    },
    {
        "id": 2668,
        "name": "Williamson and Sons",
        "sector": "Luxury",
        "siren": 155097096,
        "results": [
            5328,
            5329
        ]
    },
    {
        "id": 2669,
        "name": "Ferry Group",
        "sector": "Energy",
        "siren": 176633557,
        "results": [
            5330,
            5331
        ]
    },
    {
        "id": 2670,
        "name": "Schiller-Schmidt",
        "sector": "Services",
        "siren": 195591022,
        "results": [
            5332,
            5333
        ]
    },
    {
        "id": 2671,
        "name": "Abshire, Wilderman and Mitchell",
        "sector": "Retail",
        "siren": 141993614,
        "results": [
            5334,
            5335
        ]
    },
    {
        "id": 2672,
        "name": "Hayes LLC",
        "sector": "Services",
        "siren": 143826718,
        "results": [
            5336,
            5337
        ]
    },
    {
        "id": 2673,
        "name": "Tremblay and Sons",
        "sector": "Services",
        "siren": 133962923,
        "results": [
            5338,
            5339
        ]
    },
    {
        "id": 2674,
        "name": "Wisozk Inc",
        "sector": "Luxury",
        "siren": 107568203,
        "results": [
            5340,
            5341
        ]
    },
    {
        "id": 2675,
        "name": "Marvin-Stiedemann",
        "sector": "Electronic",
        "siren": 108626405,
        "results": [
            5342,
            5343
        ]
    },
    {
        "id": 2676,
        "name": "Borer-Cassin",
        "sector": "Luxury",
        "siren": 104300586,
        "results": [
            5344,
            5345
        ]
    },
    {
        "id": 2677,
        "name": "Tromp, Heidenreich and Ziemann",
        "sector": "Retail",
        "siren": 148080477,
        "results": [
            5346,
            5347
        ]
    },
    {
        "id": 2678,
        "name": "Funk Inc",
        "sector": "Electronic",
        "siren": 157012674,
        "results": [
            5348,
            5349
        ]
    },
    {
        "id": 2679,
        "name": "Hayes-Ernser",
        "sector": "Energy",
        "siren": 175994582,
        "results": [
            5350,
            5351
        ]
    },
    {
        "id": 2680,
        "name": "DuBuque, Sawayn and Schaefer",
        "sector": "Electronic",
        "siren": 173913299,
        "results": [
            5352,
            5353
        ]
    },
    {
        "id": 2681,
        "name": "Hyatt-Fahey",
        "sector": "Luxury",
        "siren": 172493289,
        "results": [
            5354,
            5355
        ]
    },
    {
        "id": 2682,
        "name": "Witting-Durgan",
        "sector": "Retail",
        "siren": 193631684,
        "results": [
            5356,
            5357
        ]
    },
    {
        "id": 2683,
        "name": "Wuckert-Gottlieb",
        "sector": "Luxury",
        "siren": 163261401,
        "results": [
            5358,
            5359
        ]
    },
    {
        "id": 2684,
        "name": "Ritchie, Haag and Kuhn",
        "sector": "Energy",
        "siren": 105467035,
        "results": [
            5360,
            5361
        ]
    },
    {
        "id": 2685,
        "name": "Cummerata-Prosacco",
        "sector": "Retail",
        "siren": 116769708,
        "results": [
            5362,
            5363
        ]
    },
    {
        "id": 2686,
        "name": "Schmitt and Sons",
        "sector": "Energy",
        "siren": 146939069,
        "results": [
            5364,
            5365
        ]
    },
    {
        "id": 2687,
        "name": "Bogisich Group",
        "sector": "Retail",
        "siren": 198492376,
        "results": [
            5366,
            5367
        ]
    },
    {
        "id": 2688,
        "name": "Kessler Group",
        "sector": "Electronic",
        "siren": 195285188,
        "results": [
            5368,
            5369
        ]
    },
    {
        "id": 2689,
        "name": "Reilly, Turner and Kilback",
        "sector": "Energy",
        "siren": 170348871,
        "results": [
            5370,
            5371
        ]
    },
    {
        "id": 2690,
        "name": "Stamm-McLaughlin",
        "sector": "Services",
        "siren": 152902170,
        "results": [
            5372,
            5373
        ]
    },
    {
        "id": 2691,
        "name": "Adams, Kassulke and Walter",
        "sector": "Services",
        "siren": 165989484,
        "results": [
            5374,
            5375
        ]
    },
    {
        "id": 2692,
        "name": "Okuneva Inc",
        "sector": "Retail",
        "siren": 113287300,
        "results": [
            5376,
            5377
        ]
    },
    {
        "id": 2693,
        "name": "Kiehn-Greenholt",
        "sector": "Retail",
        "siren": 135593651,
        "results": [
            5378,
            5379
        ]
    },
    {
        "id": 2694,
        "name": "Stanton, Stehr and Considine",
        "sector": "Services",
        "siren": 111297821,
        "results": [
            5380,
            5381
        ]
    },
    {
        "id": 2695,
        "name": "Pagac and Sons",
        "sector": "Energy",
        "siren": 141417076,
        "results": [
            5382,
            5383
        ]
    },
    {
        "id": 2696,
        "name": "Ullrich, Gaylord and Gleason",
        "sector": "Retail",
        "siren": 106730899,
        "results": [
            5384,
            5385
        ]
    },
    {
        "id": 2697,
        "name": "Lemke-Leannon",
        "sector": "Retail",
        "siren": 181852901,
        "results": [
            5386,
            5387
        ]
    },
    {
        "id": 2698,
        "name": "Medhurst Group",
        "sector": "Services",
        "siren": 172472287,
        "results": [
            5388,
            5389
        ]
    },
    {
        "id": 2699,
        "name": "Stoltenberg LLC",
        "sector": "Services",
        "siren": 169273144,
        "results": [
            5390,
            5391
        ]
    },
    {
        "id": 2700,
        "name": "Kerluke LLC",
        "sector": "Energy",
        "siren": 153691905,
        "results": [
            5392,
            5393
        ]
    },
    {
        "id": 2701,
        "name": "Murphy-Lesch",
        "sector": "Electronic",
        "siren": 160775851,
        "results": [
            5394,
            5395
        ]
    },
    {
        "id": 2702,
        "name": "Kilback-Hudson",
        "sector": "Electronic",
        "siren": 198340969,
        "results": [
            5396,
            5397
        ]
    },
    {
        "id": 2703,
        "name": "Rowe, Adams and Pacocha",
        "sector": "Luxury",
        "siren": 152968462,
        "results": [
            5398,
            5399
        ]
    },
    {
        "id": 2704,
        "name": "Schroeder-Toy",
        "sector": "Services",
        "siren": 106049474,
        "results": [
            5400,
            5401
        ]
    },
    {
        "id": 2705,
        "name": "Reilly-Bartoletti",
        "sector": "Luxury",
        "siren": 185568403,
        "results": [
            5402,
            5403
        ]
    },
    {
        "id": 2706,
        "name": "Runte, Trantow and Eichmann",
        "sector": "Services",
        "siren": 163211374,
        "results": [
            5404,
            5405
        ]
    },
    {
        "id": 2707,
        "name": "McGlynn Inc",
        "sector": "Services",
        "siren": 177088555,
        "results": [
            5406,
            5407
        ]
    },
    {
        "id": 2708,
        "name": "Berge Group",
        "sector": "Services",
        "siren": 191593539,
        "results": [
            5408,
            5409
        ]
    },
    {
        "id": 2709,
        "name": "Hansen, Gerhold and Zemlak",
        "sector": "Retail",
        "siren": 196059202,
        "results": [
            5410,
            5411
        ]
    },
    {
        "id": 2710,
        "name": "Leuschke and Sons",
        "sector": "Luxury",
        "siren": 185546426,
        "results": [
            5412,
            5413
        ]
    },
    {
        "id": 2711,
        "name": "Kemmer-Lynch",
        "sector": "Electronic",
        "siren": 130518404,
        "results": [
            5414,
            5415
        ]
    },
    {
        "id": 2712,
        "name": "Tillman, Ruecker and D'Amore",
        "sector": "Retail",
        "siren": 185836676,
        "results": [
            5416,
            5417
        ]
    },
    {
        "id": 2713,
        "name": "Hagenes-Nicolas",
        "sector": "Luxury",
        "siren": 181839234,
        "results": [
            5418,
            5419
        ]
    },
    {
        "id": 2714,
        "name": "Adams LLC",
        "sector": "Energy",
        "siren": 162705282,
        "results": [
            5420,
            5421
        ]
    },
    {
        "id": 2715,
        "name": "Kling, Frami and Thiel",
        "sector": "Electronic",
        "siren": 153775737,
        "results": [
            5422,
            5423
        ]
    },
    {
        "id": 2716,
        "name": "Hirthe Group",
        "sector": "Electronic",
        "siren": 109390434,
        "results": [
            5424,
            5425
        ]
    },
    {
        "id": 2717,
        "name": "Grant-Hills",
        "sector": "Services",
        "siren": 152889154,
        "results": [
            5426,
            5427
        ]
    },
    {
        "id": 2718,
        "name": "Koch, Cassin and Murphy",
        "sector": "Electronic",
        "siren": 175818545,
        "results": [
            5428,
            5429
        ]
    },
    {
        "id": 2719,
        "name": "Koss, Leffler and Fay",
        "sector": "Energy",
        "siren": 119128103,
        "results": [
            5430,
            5431
        ]
    },
    {
        "id": 2720,
        "name": "Corwin-Vandervort",
        "sector": "Energy",
        "siren": 179335809,
        "results": [
            5432,
            5433
        ]
    },
    {
        "id": 2721,
        "name": "Bartoletti-Effertz",
        "sector": "Luxury",
        "siren": 158737316,
        "results": [
            5434,
            5435
        ]
    },
    {
        "id": 2722,
        "name": "O'Reilly, Langosh and Raynor",
        "sector": "Electronic",
        "siren": 138908158,
        "results": [
            5436,
            5437
        ]
    },
    {
        "id": 2723,
        "name": "Upton, Cormier and Morissette",
        "sector": "Luxury",
        "siren": 148123081,
        "results": [
            5438,
            5439
        ]
    },
    {
        "id": 2724,
        "name": "Grady Inc",
        "sector": "Services",
        "siren": 124921215,
        "results": [
            5440,
            5441
        ]
    },
    {
        "id": 2725,
        "name": "Schimmel Group",
        "sector": "Luxury",
        "siren": 182073248,
        "results": [
            5442,
            5443
        ]
    },
    {
        "id": 2726,
        "name": "Schiller Inc",
        "sector": "Retail",
        "siren": 152363753,
        "results": [
            5444,
            5445
        ]
    },
    {
        "id": 2727,
        "name": "Heathcote-Pagac",
        "sector": "Electronic",
        "siren": 142665129,
        "results": [
            5446,
            5447
        ]
    },
    {
        "id": 2728,
        "name": "Dietrich-Kassulke",
        "sector": "Electronic",
        "siren": 153434268,
        "results": [
            5448,
            5449
        ]
    },
    {
        "id": 2729,
        "name": "Carter LLC",
        "sector": "Energy",
        "siren": 137164647,
        "results": [
            5450,
            5451
        ]
    },
    {
        "id": 2730,
        "name": "Stokes-Beahan",
        "sector": "Services",
        "siren": 173257908,
        "results": [
            5452,
            5453
        ]
    },
    {
        "id": 2731,
        "name": "Ward-Leffler",
        "sector": "Electronic",
        "siren": 129146450,
        "results": [
            5454,
            5455
        ]
    },
    {
        "id": 2732,
        "name": "Bogisich Group",
        "sector": "Retail",
        "siren": 155864068,
        "results": [
            5456,
            5457
        ]
    },
    {
        "id": 2733,
        "name": "Wiza, Abshire and Yundt",
        "sector": "Electronic",
        "siren": 167802466,
        "results": [
            5458,
            5459
        ]
    },
    {
        "id": 2734,
        "name": "Hodkiewicz Inc",
        "sector": "Energy",
        "siren": 109632592,
        "results": [
            5460,
            5461
        ]
    },
    {
        "id": 2735,
        "name": "Walker-Legros",
        "sector": "Retail",
        "siren": 139341533,
        "results": [
            5462,
            5463
        ]
    },
    {
        "id": 2736,
        "name": "Willms, Nicolas and Torphy",
        "sector": "Retail",
        "siren": 183352652,
        "results": [
            5464,
            5465
        ]
    },
    {
        "id": 2737,
        "name": "Marks and Sons",
        "sector": "Electronic",
        "siren": 129610484,
        "results": [
            5466,
            5467
        ]
    },
    {
        "id": 2738,
        "name": "Ziemann-Hintz",
        "sector": "Energy",
        "siren": 149431058,
        "results": [
            5468,
            5469
        ]
    },
    {
        "id": 2739,
        "name": "Walter-Bartell",
        "sector": "Energy",
        "siren": 159270097,
        "results": [
            5470,
            5471
        ]
    },
    {
        "id": 2740,
        "name": "Harber and Sons",
        "sector": "Luxury",
        "siren": 105385372,
        "results": [
            5472,
            5473
        ]
    },
    {
        "id": 2741,
        "name": "Pfeffer, Volkman and Jacobs",
        "sector": "Services",
        "siren": 155828039,
        "results": [
            5474,
            5475
        ]
    },
    {
        "id": 2742,
        "name": "Heathcote, Block and Rempel",
        "sector": "Retail",
        "siren": 148575346,
        "results": [
            5476,
            5477
        ]
    },
    {
        "id": 2743,
        "name": "Schuster, Hintz and Luettgen",
        "sector": "Retail",
        "siren": 139843626,
        "results": [
            5478,
            5479
        ]
    },
    {
        "id": 2744,
        "name": "Moore-Funk",
        "sector": "Retail",
        "siren": 138402141,
        "results": [
            5480,
            5481
        ]
    },
    {
        "id": 2745,
        "name": "Gutkowski, Farrell and Altenwerth",
        "sector": "Luxury",
        "siren": 162175274,
        "results": [
            5482,
            5483
        ]
    },
    {
        "id": 2746,
        "name": "Turcotte, Pagac and Welch",
        "sector": "Services",
        "siren": 176753871,
        "results": [
            5484,
            5485
        ]
    },
    {
        "id": 2747,
        "name": "Kovacek-Larkin",
        "sector": "Services",
        "siren": 113674387,
        "results": [
            5486,
            5487
        ]
    },
    {
        "id": 2748,
        "name": "Fay and Sons",
        "sector": "Services",
        "siren": 144972814,
        "results": [
            5488,
            5489
        ]
    },
    {
        "id": 2749,
        "name": "Cummerata-Berge",
        "sector": "Electronic",
        "siren": 154318426,
        "results": [
            5490,
            5491
        ]
    },
    {
        "id": 2750,
        "name": "Schultz, Sporer and Hoppe",
        "sector": "Retail",
        "siren": 174292657,
        "results": [
            5492,
            5493
        ]
    },
    {
        "id": 2751,
        "name": "Cole-Langosh",
        "sector": "Retail",
        "siren": 149623513,
        "results": [
            5494,
            5495
        ]
    },
    {
        "id": 2752,
        "name": "Jakubowski, Spinka and Bogisich",
        "sector": "Retail",
        "siren": 156086955,
        "results": []
    },
    {
        "id": 2753,
        "name": "Reinger Inc",
        "sector": "Services",
        "siren": 135694027,
        "results": [
            5496,
            5497
        ]
    },
    {
        "id": 2754,
        "name": "Torphy, Rosenbaum and Rempel",
        "sector": "Electronic",
        "siren": 107855014,
        "results": [
            5498,
            5499
        ]
    },
    {
        "id": 2755,
        "name": "Towne-Dach",
        "sector": "Energy",
        "siren": 115104805,
        "results": [
            5500,
            5501
        ]
    },
    {
        "id": 2756,
        "name": "Hane-Stanton",
        "sector": "Luxury",
        "siren": 151419067,
        "results": [
            5502,
            5503
        ]
    },
    {
        "id": 2757,
        "name": "Gaylord and Sons",
        "sector": "Retail",
        "siren": 147007807,
        "results": [
            5504,
            5505
        ]
    },
    {
        "id": 2758,
        "name": "Wiegand-Hoeger",
        "sector": "Energy",
        "siren": 143629487,
        "results": [
            5506,
            5507
        ]
    },
    {
        "id": 2759,
        "name": "Rogahn and Sons",
        "sector": "Services",
        "siren": 194214776,
        "results": [
            5508,
            5509
        ]
    },
    {
        "id": 2760,
        "name": "Pagac, Bednar and Von",
        "sector": "Retail",
        "siren": 176873074,
        "results": [
            5510,
            5511
        ]
    },
    {
        "id": 2761,
        "name": "Wilderman-Fay",
        "sector": "Services",
        "siren": 130425768,
        "results": [
            5512,
            5513
        ]
    },
    {
        "id": 2762,
        "name": "Muller Group",
        "sector": "Luxury",
        "siren": 175112687,
        "results": [
            5514,
            5515
        ]
    },
    {
        "id": 2763,
        "name": "Cronin, Kessler and Corwin",
        "sector": "Energy",
        "siren": 119802584,
        "results": [
            5516,
            5517
        ]
    },
    {
        "id": 2764,
        "name": "Sporer-Romaguera",
        "sector": "Electronic",
        "siren": 100614525,
        "results": [
            5518,
            5519
        ]
    },
    {
        "id": 2765,
        "name": "Borer and Sons",
        "sector": "Retail",
        "siren": 162375181,
        "results": [
            5520,
            5521
        ]
    },
    {
        "id": 2766,
        "name": "Berge, Blanda and Gutmann",
        "sector": "Electronic",
        "siren": 128182766,
        "results": [
            5522,
            5523
        ]
    },
    {
        "id": 2767,
        "name": "Sawayn-Hermiston",
        "sector": "Luxury",
        "siren": 189859166,
        "results": [
            5524,
            5525
        ]
    },
    {
        "id": 2768,
        "name": "Halvorson Group",
        "sector": "Luxury",
        "siren": 199790774,
        "results": [
            5526,
            5527
        ]
    },
    {
        "id": 2769,
        "name": "Donnelly-Mraz",
        "sector": "Services",
        "siren": 179611598,
        "results": [
            5528,
            5529
        ]
    },
    {
        "id": 2770,
        "name": "Legros, Bradtke and O'Keefe",
        "sector": "Retail",
        "siren": 114151737,
        "results": [
            5530,
            5531
        ]
    },
    {
        "id": 2771,
        "name": "Fay and Sons",
        "sector": "Luxury",
        "siren": 100933072,
        "results": [
            5532,
            5533
        ]
    },
    {
        "id": 2772,
        "name": "Cassin LLC",
        "sector": "Electronic",
        "siren": 159459542,
        "results": [
            5534,
            5535
        ]
    },
    {
        "id": 2773,
        "name": "Robel Inc",
        "sector": "Luxury",
        "siren": 138199832,
        "results": [
            5536,
            5537
        ]
    },
    {
        "id": 2774,
        "name": "Oberbrunner-Gutmann",
        "sector": "Energy",
        "siren": 131043727,
        "results": [
            5538,
            5539
        ]
    },
    {
        "id": 2775,
        "name": "Stracke Group",
        "sector": "Electronic",
        "siren": 190537129,
        "results": [
            5540,
            5541
        ]
    },
    {
        "id": 2776,
        "name": "Collins Group",
        "sector": "Retail",
        "siren": 148151467,
        "results": [
            5542,
            5543
        ]
    },
    {
        "id": 2777,
        "name": "Hoeger, Schoen and Dibbert",
        "sector": "Luxury",
        "siren": 175662557,
        "results": [
            5544,
            5545
        ]
    },
    {
        "id": 2778,
        "name": "Pacocha-Schmitt",
        "sector": "Energy",
        "siren": 132741221,
        "results": [
            5546,
            5547
        ]
    },
    {
        "id": 2779,
        "name": "Collier-Goldner",
        "sector": "Electronic",
        "siren": 190574530,
        "results": [
            5548,
            5549
        ]
    },
    {
        "id": 2780,
        "name": "Kiehn, Stoltenberg and Friesen",
        "sector": "Electronic",
        "siren": 151306292,
        "results": [
            5550,
            5551
        ]
    },
    {
        "id": 2781,
        "name": "Johnston, Mante and Purdy",
        "sector": "Services",
        "siren": 132122930,
        "results": [
            5552,
            5553
        ]
    },
    {
        "id": 2782,
        "name": "Lowe-Legros",
        "sector": "Electronic",
        "siren": 103764020,
        "results": [
            5554,
            5555
        ]
    },
    {
        "id": 2783,
        "name": "Schulist LLC",
        "sector": "Services",
        "siren": 130132106,
        "results": [
            5556,
            5557
        ]
    },
    {
        "id": 2784,
        "name": "Ankunding-Lindgren",
        "sector": "Energy",
        "siren": 190875445,
        "results": [
            5558,
            5559
        ]
    },
    {
        "id": 2785,
        "name": "Hudson, Cole and Torp",
        "sector": "Electronic",
        "siren": 149620575,
        "results": [
            5560,
            5561
        ]
    },
    {
        "id": 2786,
        "name": "Fisher Inc",
        "sector": "Energy",
        "siren": 195699182,
        "results": [
            5562,
            5563
        ]
    },
    {
        "id": 2787,
        "name": "Turner Inc",
        "sector": "Energy",
        "siren": 181691080,
        "results": [
            5564,
            5565
        ]
    },
    {
        "id": 2788,
        "name": "Welch, Rohan and Ortiz",
        "sector": "Electronic",
        "siren": 148674050,
        "results": [
            5566,
            5567
        ]
    },
    {
        "id": 2789,
        "name": "Senger Group",
        "sector": "Retail",
        "siren": 196126254,
        "results": [
            5568,
            5569
        ]
    },
    {
        "id": 2790,
        "name": "Kertzmann Group",
        "sector": "Retail",
        "siren": 187537793,
        "results": [
            5570,
            5571
        ]
    },
    {
        "id": 2791,
        "name": "Trantow, Bauch and Brown",
        "sector": "Electronic",
        "siren": 194314995,
        "results": [
            5572,
            5573
        ]
    },
    {
        "id": 2792,
        "name": "Kertzmann-Cremin",
        "sector": "Luxury",
        "siren": 110861915,
        "results": [
            5574,
            5575
        ]
    },
    {
        "id": 2793,
        "name": "Jaskolski and Sons",
        "sector": "Services",
        "siren": 163203664,
        "results": [
            5576,
            5577
        ]
    },
    {
        "id": 2794,
        "name": "Gottlieb Inc",
        "sector": "Services",
        "siren": 173594891,
        "results": [
            5578,
            5579
        ]
    },
    {
        "id": 2795,
        "name": "Bins Inc",
        "sector": "Retail",
        "siren": 156610978,
        "results": [
            5580,
            5581
        ]
    },
    {
        "id": 2796,
        "name": "Purdy, Barrows and Mills",
        "sector": "Electronic",
        "siren": 125001735,
        "results": [
            5582,
            5583
        ]
    },
    {
        "id": 2797,
        "name": "Becker and Sons",
        "sector": "Retail",
        "siren": 108220327,
        "results": [
            5584,
            5585
        ]
    },
    {
        "id": 2798,
        "name": "Kozey, Haag and Kuvalis",
        "sector": "Services",
        "siren": 197683277,
        "results": [
            5586,
            5587
        ]
    },
    {
        "id": 2799,
        "name": "Wilkinson, Nienow and Schmeler",
        "sector": "Retail",
        "siren": 195451954,
        "results": [
            5588,
            5589
        ]
    },
    {
        "id": 2800,
        "name": "Cummings, Towne and Stanton",
        "sector": "Services",
        "siren": 175032418,
        "results": [
            5590,
            5591
        ]
    },
    {
        "id": 2801,
        "name": "Kreiger, Mosciski and Kiehn",
        "sector": "Energy",
        "siren": 164388517,
        "results": [
            5592,
            5593
        ]
    },
    {
        "id": 2802,
        "name": "Bode, Hudson and Kulas",
        "sector": "Electronic",
        "siren": 177384240,
        "results": [
            5594,
            5595
        ]
    },
    {
        "id": 2803,
        "name": "Walker, Abbott and Brekke",
        "sector": "Retail",
        "siren": 108949277,
        "results": [
            5596,
            5597
        ]
    },
    {
        "id": 2804,
        "name": "Rath, Legros and Feil",
        "sector": "Electronic",
        "siren": 105376773,
        "results": [
            5598,
            5599
        ]
    },
    {
        "id": 2805,
        "name": "Wunsch, Nienow and Russel",
        "sector": "Retail",
        "siren": 170490793,
        "results": [
            5600,
            5601
        ]
    },
    {
        "id": 2806,
        "name": "Baumbach-Howe",
        "sector": "Luxury",
        "siren": 197432382,
        "results": [
            5602,
            5603
        ]
    },
    {
        "id": 2807,
        "name": "Hartmann, Bruen and McDermott",
        "sector": "Services",
        "siren": 183064272,
        "results": [
            5604,
            5605
        ]
    },
    {
        "id": 2808,
        "name": "Rippin-Klocko",
        "sector": "Luxury",
        "siren": 109837685,
        "results": [
            5606,
            5607
        ]
    },
    {
        "id": 2809,
        "name": "Beer, Simonis and Runolfsdottir",
        "sector": "Energy",
        "siren": 188135119,
        "results": [
            5608,
            5609
        ]
    },
    {
        "id": 2810,
        "name": "Schamberger, Yundt and Zemlak",
        "sector": "Energy",
        "siren": 133026662,
        "results": [
            5610,
            5611
        ]
    },
    {
        "id": 2811,
        "name": "Feeney and Sons",
        "sector": "Services",
        "siren": 132298627,
        "results": [
            5612,
            5613
        ]
    },
    {
        "id": 2812,
        "name": "Kerluke, Durgan and Bernhard",
        "sector": "Retail",
        "siren": 168792627,
        "results": [
            5614,
            5615
        ]
    },
    {
        "id": 2813,
        "name": "Dicki, Moen and Robel",
        "sector": "Retail",
        "siren": 135883737,
        "results": [
            5616,
            5617
        ]
    },
    {
        "id": 2814,
        "name": "Sporer and Sons",
        "sector": "Luxury",
        "siren": 160840028,
        "results": [
            5618,
            5619
        ]
    },
    {
        "id": 2815,
        "name": "Skiles-Gusikowski",
        "sector": "Luxury",
        "siren": 121692227,
        "results": [
            5620,
            5621
        ]
    },
    {
        "id": 2816,
        "name": "Swaniawski Group",
        "sector": "Retail",
        "siren": 173672744,
        "results": [
            5622,
            5623
        ]
    },
    {
        "id": 2817,
        "name": "Satterfield, Brekke and Stanton",
        "sector": "Services",
        "siren": 195857228,
        "results": [
            5624,
            5625
        ]
    },
    {
        "id": 2818,
        "name": "Ortiz-Connelly",
        "sector": "Services",
        "siren": 182726877,
        "results": [
            5626,
            5627
        ]
    },
    {
        "id": 2819,
        "name": "Donnelly, Abernathy and Pacocha",
        "sector": "Retail",
        "siren": 156951403,
        "results": [
            5628,
            5629
        ]
    },
    {
        "id": 2820,
        "name": "Hudson, Reynolds and Jacobson",
        "sector": "Services",
        "siren": 132253095,
        "results": [
            5630,
            5631
        ]
    },
    {
        "id": 2821,
        "name": "Wuckert Group",
        "sector": "Electronic",
        "siren": 165950424,
        "results": [
            5632,
            5633
        ]
    },
    {
        "id": 2822,
        "name": "Larson, Gleason and Murphy",
        "sector": "Retail",
        "siren": 117623669,
        "results": [
            5634,
            5635
        ]
    },
    {
        "id": 2823,
        "name": "Dickinson-Strosin",
        "sector": "Energy",
        "siren": 175066823,
        "results": [
            5636,
            5637
        ]
    },
    {
        "id": 2824,
        "name": "Franecki-Cassin",
        "sector": "Retail",
        "siren": 158424603,
        "results": [
            5638,
            5639
        ]
    },
    {
        "id": 2825,
        "name": "Nikolaus-Flatley",
        "sector": "Electronic",
        "siren": 133495059,
        "results": [
            5640,
            5641
        ]
    },
    {
        "id": 2826,
        "name": "Hickle, Stamm and Fahey",
        "sector": "Services",
        "siren": 101590590,
        "results": [
            5642,
            5643
        ]
    },
    {
        "id": 2827,
        "name": "Bahringer, Blanda and Schmitt",
        "sector": "Luxury",
        "siren": 137219707,
        "results": [
            5644,
            5645
        ]
    },
    {
        "id": 2828,
        "name": "Herman-Abbott",
        "sector": "Retail",
        "siren": 174831134,
        "results": [
            5646,
            5647
        ]
    },
    {
        "id": 2829,
        "name": "Stokes-Hegmann",
        "sector": "Energy",
        "siren": 152222171,
        "results": [
            5648,
            5649
        ]
    },
    {
        "id": 2830,
        "name": "Moen, Krajcik and O'Keefe",
        "sector": "Retail",
        "siren": 179058220,
        "results": [
            5650,
            5651
        ]
    },
    {
        "id": 2831,
        "name": "Huels-Koepp",
        "sector": "Services",
        "siren": 103436807,
        "results": [
            5652,
            5653
        ]
    },
    {
        "id": 2832,
        "name": "Turcotte LLC",
        "sector": "Services",
        "siren": 115411209,
        "results": [
            5654,
            5655
        ]
    },
    {
        "id": 2833,
        "name": "Glover, Kirlin and McGlynn",
        "sector": "Energy",
        "siren": 184190735,
        "results": [
            5656,
            5657
        ]
    },
    {
        "id": 2834,
        "name": "Nader-Bergnaum",
        "sector": "Electronic",
        "siren": 142087889,
        "results": [
            5658,
            5659
        ]
    },
    {
        "id": 2835,
        "name": "McDermott-Rolfson",
        "sector": "Energy",
        "siren": 117468732,
        "results": [
            5660,
            5661
        ]
    },
    {
        "id": 2836,
        "name": "Treutel Group",
        "sector": "Retail",
        "siren": 138837726,
        "results": [
            5662,
            5663
        ]
    },
    {
        "id": 2837,
        "name": "Lynch, Wunsch and Kris",
        "sector": "Services",
        "siren": 152402150,
        "results": [
            5664,
            5665
        ]
    },
    {
        "id": 2838,
        "name": "Tremblay, Keeling and Breitenberg",
        "sector": "Services",
        "siren": 125362017,
        "results": [
            5666,
            5667
        ]
    },
    {
        "id": 2839,
        "name": "Leffler LLC",
        "sector": "Retail",
        "siren": 150610837,
        "results": [
            5668,
            5669
        ]
    },
    {
        "id": 2840,
        "name": "Hintz Inc",
        "sector": "Electronic",
        "siren": 170053342,
        "results": [
            5670,
            5671
        ]
    },
    {
        "id": 2841,
        "name": "Howell Inc",
        "sector": "Energy",
        "siren": 115871891,
        "results": [
            5672,
            5673
        ]
    },
    {
        "id": 2842,
        "name": "Windler-Pfeffer",
        "sector": "Electronic",
        "siren": 186052047,
        "results": [
            5674,
            5675
        ]
    },
    {
        "id": 2843,
        "name": "Greenfelder Group",
        "sector": "Services",
        "siren": 123389196,
        "results": [
            5676,
            5677
        ]
    },
    {
        "id": 2844,
        "name": "Hessel Group",
        "sector": "Electronic",
        "siren": 130378540,
        "results": [
            5678,
            5679
        ]
    },
    {
        "id": 2845,
        "name": "Goyette, Cummerata and Windler",
        "sector": "Luxury",
        "siren": 173090205,
        "results": [
            5680,
            5681
        ]
    },
    {
        "id": 2846,
        "name": "Green LLC",
        "sector": "Energy",
        "siren": 142811173,
        "results": [
            5682,
            5683
        ]
    },
    {
        "id": 2847,
        "name": "MacGyver LLC",
        "sector": "Energy",
        "siren": 180573399,
        "results": [
            5684,
            5685
        ]
    },
    {
        "id": 2848,
        "name": "Cassin-Weissnat",
        "sector": "Electronic",
        "siren": 174008422,
        "results": [
            5686,
            5687
        ]
    },
    {
        "id": 2849,
        "name": "Koelpin-Herman",
        "sector": "Services",
        "siren": 123713934,
        "results": [
            5688,
            5689
        ]
    },
    {
        "id": 2850,
        "name": "Murray, Keeling and Pfeffer",
        "sector": "Services",
        "siren": 153108580,
        "results": [
            5690,
            5691
        ]
    },
    {
        "id": 2851,
        "name": "Metz and Sons",
        "sector": "Electronic",
        "siren": 132514765,
        "results": [
            5692,
            5693
        ]
    },
    {
        "id": 2852,
        "name": "Trantow, Stoltenberg and Rau",
        "sector": "Luxury",
        "siren": 142196394,
        "results": [
            5694,
            5695
        ]
    },
    {
        "id": 2853,
        "name": "Hermann and Sons",
        "sector": "Electronic",
        "siren": 199577547,
        "results": [
            5696,
            5697
        ]
    },
    {
        "id": 2854,
        "name": "Hickle-Cartwright",
        "sector": "Luxury",
        "siren": 145170204,
        "results": [
            5698,
            5699
        ]
    },
    {
        "id": 2855,
        "name": "Balistreri and Sons",
        "sector": "Retail",
        "siren": 122783975,
        "results": [
            5700,
            5701
        ]
    },
    {
        "id": 2856,
        "name": "Welch-Wisoky",
        "sector": "Electronic",
        "siren": 180856598,
        "results": [
            5702,
            5703
        ]
    },
    {
        "id": 2857,
        "name": "Schamberger-Leuschke",
        "sector": "Retail",
        "siren": 101786222,
        "results": [
            5704,
            5705
        ]
    },
    {
        "id": 2858,
        "name": "Hudson and Sons",
        "sector": "Retail",
        "siren": 159421714,
        "results": [
            5706,
            5707
        ]
    },
    {
        "id": 2859,
        "name": "Stehr-Larson",
        "sector": "Electronic",
        "siren": 110442504,
        "results": [
            5708,
            5709
        ]
    },
    {
        "id": 2860,
        "name": "Deckow-Rowe",
        "sector": "Electronic",
        "siren": 140318401,
        "results": [
            5710,
            5711
        ]
    },
    {
        "id": 2861,
        "name": "Mann-Wisoky",
        "sector": "Luxury",
        "siren": 154437824,
        "results": [
            5712,
            5713
        ]
    },
    {
        "id": 2862,
        "name": "Bradtke, Bauch and Hermann",
        "sector": "Electronic",
        "siren": 119255732,
        "results": [
            5714,
            5715
        ]
    },
    {
        "id": 2863,
        "name": "Jaskolski Group",
        "sector": "Electronic",
        "siren": 188974299,
        "results": [
            5716,
            5717
        ]
    },
    {
        "id": 2864,
        "name": "Glover, Lubowitz and Labadie",
        "sector": "Energy",
        "siren": 111353919,
        "results": [
            5718,
            5719
        ]
    },
    {
        "id": 2865,
        "name": "Mraz, Little and Fritsch",
        "sector": "Luxury",
        "siren": 162877974,
        "results": [
            5720,
            5721
        ]
    },
    {
        "id": 2866,
        "name": "Medhurst and Sons",
        "sector": "Services",
        "siren": 125625509,
        "results": [
            5722,
            5723
        ]
    },
    {
        "id": 2867,
        "name": "Schultz Inc",
        "sector": "Retail",
        "siren": 163815675,
        "results": [
            5724,
            5725
        ]
    },
    {
        "id": 2868,
        "name": "Brown Inc",
        "sector": "Retail",
        "siren": 169391204,
        "results": [
            5726,
            5727
        ]
    },
    {
        "id": 2869,
        "name": "Huels Inc",
        "sector": "Luxury",
        "siren": 135296056,
        "results": [
            5728,
            5729
        ]
    },
    {
        "id": 2870,
        "name": "Cassin-Collins",
        "sector": "Energy",
        "siren": 136888845,
        "results": [
            5730,
            5731
        ]
    },
    {
        "id": 2871,
        "name": "Murphy, Reichert and Walsh",
        "sector": "Electronic",
        "siren": 168943428,
        "results": [
            5732,
            5733
        ]
    },
    {
        "id": 2872,
        "name": "Dooley-Flatley",
        "sector": "Retail",
        "siren": 121546181,
        "results": [
            5734,
            5735
        ]
    },
    {
        "id": 2873,
        "name": "Wisozk-Langosh",
        "sector": "Services",
        "siren": 104018793,
        "results": [
            5736,
            5737
        ]
    },
    {
        "id": 2874,
        "name": "Dickinson, Thiel and Wisoky",
        "sector": "Retail",
        "siren": 173786909,
        "results": [
            5738,
            5739
        ]
    },
    {
        "id": 2875,
        "name": "Williamson and Sons",
        "sector": "Luxury",
        "siren": 155097096,
        "results": [
            5740,
            5741
        ]
    },
    {
        "id": 2876,
        "name": "Ferry Group",
        "sector": "Energy",
        "siren": 176633557,
        "results": [
            5742,
            5743
        ]
    },
    {
        "id": 2877,
        "name": "Schiller-Schmidt",
        "sector": "Services",
        "siren": 195591022,
        "results": [
            5744,
            5745
        ]
    },
    {
        "id": 2878,
        "name": "Abshire, Wilderman and Mitchell",
        "sector": "Retail",
        "siren": 141993614,
        "results": [
            5746,
            5747
        ]
    },
    {
        "id": 2879,
        "name": "Hayes LLC",
        "sector": "Services",
        "siren": 143826718,
        "results": [
            5748,
            5749
        ]
    },
    {
        "id": 2880,
        "name": "Tremblay and Sons",
        "sector": "Services",
        "siren": 133962923,
        "results": [
            5750,
            5751
        ]
    },
    {
        "id": 2881,
        "name": "Wisozk Inc",
        "sector": "Luxury",
        "siren": 107568203,
        "results": [
            5752,
            5753
        ]
    },
    {
        "id": 2882,
        "name": "Marvin-Stiedemann",
        "sector": "Electronic",
        "siren": 108626405,
        "results": [
            5754,
            5755
        ]
    },
    {
        "id": 2883,
        "name": "Borer-Cassin",
        "sector": "Luxury",
        "siren": 104300586,
        "results": [
            5756,
            5757
        ]
    },
    {
        "id": 2884,
        "name": "Tromp, Heidenreich and Ziemann",
        "sector": "Retail",
        "siren": 148080477,
        "results": [
            5758,
            5759
        ]
    },
    {
        "id": 2885,
        "name": "Funk Inc",
        "sector": "Electronic",
        "siren": 157012674,
        "results": [
            5760,
            5761
        ]
    },
    {
        "id": 2886,
        "name": "Hayes-Ernser",
        "sector": "Energy",
        "siren": 175994582,
        "results": [
            5762,
            5763
        ]
    },
    {
        "id": 2887,
        "name": "DuBuque, Sawayn and Schaefer",
        "sector": "Electronic",
        "siren": 173913299,
        "results": [
            5764,
            5765
        ]
    },
    {
        "id": 2888,
        "name": "Hyatt-Fahey",
        "sector": "Luxury",
        "siren": 172493289,
        "results": [
            5766,
            5767
        ]
    },
    {
        "id": 2889,
        "name": "Witting-Durgan",
        "sector": "Retail",
        "siren": 193631684,
        "results": [
            5768,
            5769
        ]
    },
    {
        "id": 2890,
        "name": "Wuckert-Gottlieb",
        "sector": "Luxury",
        "siren": 163261401,
        "results": [
            5770,
            5771
        ]
    },
    {
        "id": 2891,
        "name": "Ritchie, Haag and Kuhn",
        "sector": "Energy",
        "siren": 105467035,
        "results": [
            5772,
            5773
        ]
    },
    {
        "id": 2892,
        "name": "Cummerata-Prosacco",
        "sector": "Retail",
        "siren": 116769708,
        "results": [
            5774,
            5775
        ]
    },
    {
        "id": 2893,
        "name": "Schmitt and Sons",
        "sector": "Energy",
        "siren": 146939069,
        "results": [
            5776,
            5777
        ]
    },
    {
        "id": 2894,
        "name": "Bogisich Group",
        "sector": "Retail",
        "siren": 198492376,
        "results": [
            5778,
            5779
        ]
    },
    {
        "id": 2895,
        "name": "Kessler Group",
        "sector": "Electronic",
        "siren": 195285188,
        "results": [
            5780,
            5781
        ]
    },
    {
        "id": 2896,
        "name": "Reilly, Turner and Kilback",
        "sector": "Energy",
        "siren": 170348871,
        "results": [
            5782,
            5783
        ]
    },
    {
        "id": 2897,
        "name": "Stamm-McLaughlin",
        "sector": "Services",
        "siren": 152902170,
        "results": [
            5784,
            5785
        ]
    },
    {
        "id": 2898,
        "name": "Adams, Kassulke and Walter",
        "sector": "Services",
        "siren": 165989484,
        "results": [
            5786,
            5787
        ]
    },
    {
        "id": 2899,
        "name": "Okuneva Inc",
        "sector": "Retail",
        "siren": 113287300,
        "results": [
            5788,
            5789
        ]
    },
    {
        "id": 2900,
        "name": "Kiehn-Greenholt",
        "sector": "Retail",
        "siren": 135593651,
        "results": [
            5790,
            5791
        ]
    },
    {
        "id": 2901,
        "name": "Stanton, Stehr and Considine",
        "sector": "Services",
        "siren": 111297821,
        "results": [
            5792,
            5793
        ]
    },
    {
        "id": 2902,
        "name": "Pagac and Sons",
        "sector": "Energy",
        "siren": 141417076,
        "results": [
            5794,
            5795
        ]
    },
    {
        "id": 2903,
        "name": "Ullrich, Gaylord and Gleason",
        "sector": "Retail",
        "siren": 106730899,
        "results": [
            5796,
            5797
        ]
    },
    {
        "id": 2904,
        "name": "Lemke-Leannon",
        "sector": "Retail",
        "siren": 181852901,
        "results": [
            5798,
            5799
        ]
    },
    {
        "id": 2905,
        "name": "Medhurst Group",
        "sector": "Services",
        "siren": 172472287,
        "results": [
            5800,
            5801
        ]
    },
    {
        "id": 2906,
        "name": "Stoltenberg LLC",
        "sector": "Services",
        "siren": 169273144,
        "results": [
            5802,
            5803
        ]
    },
    {
        "id": 2907,
        "name": "Kerluke LLC",
        "sector": "Energy",
        "siren": 153691905,
        "results": [
            5804,
            5805
        ]
    },
    {
        "id": 2908,
        "name": "Murphy-Lesch",
        "sector": "Electronic",
        "siren": 160775851,
        "results": [
            5806,
            5807
        ]
    },
    {
        "id": 2909,
        "name": "Kilback-Hudson",
        "sector": "Electronic",
        "siren": 198340969,
        "results": [
            5808,
            5809
        ]
    },
    {
        "id": 2910,
        "name": "Rowe, Adams and Pacocha",
        "sector": "Luxury",
        "siren": 152968462,
        "results": [
            5810,
            5811
        ]
    },
    {
        "id": 2911,
        "name": "Schroeder-Toy",
        "sector": "Services",
        "siren": 106049474,
        "results": [
            5812,
            5813
        ]
    },
    {
        "id": 2912,
        "name": "Reilly-Bartoletti",
        "sector": "Luxury",
        "siren": 185568403,
        "results": [
            5814,
            5815
        ]
    },
    {
        "id": 2913,
        "name": "Runte, Trantow and Eichmann",
        "sector": "Services",
        "siren": 163211374,
        "results": [
            5816,
            5817
        ]
    },
    {
        "id": 2914,
        "name": "McGlynn Inc",
        "sector": "Services",
        "siren": 177088555,
        "results": [
            5818,
            5819
        ]
    },
    {
        "id": 2915,
        "name": "Berge Group",
        "sector": "Services",
        "siren": 191593539,
        "results": [
            5820,
            5821
        ]
    },
    {
        "id": 2916,
        "name": "Hansen, Gerhold and Zemlak",
        "sector": "Retail",
        "siren": 196059202,
        "results": [
            5822,
            5823
        ]
    },
    {
        "id": 2917,
        "name": "Leuschke and Sons",
        "sector": "Luxury",
        "siren": 185546426,
        "results": [
            5824,
            5825
        ]
    },
    {
        "id": 2918,
        "name": "Kemmer-Lynch",
        "sector": "Electronic",
        "siren": 130518404,
        "results": [
            5826,
            5827
        ]
    },
    {
        "id": 2919,
        "name": "Tillman, Ruecker and D'Amore",
        "sector": "Retail",
        "siren": 185836676,
        "results": [
            5828,
            5829
        ]
    },
    {
        "id": 2920,
        "name": "Hagenes-Nicolas",
        "sector": "Luxury",
        "siren": 181839234,
        "results": [
            5830,
            5831
        ]
    },
    {
        "id": 2921,
        "name": "Adams LLC",
        "sector": "Energy",
        "siren": 162705282,
        "results": [
            5832,
            5833
        ]
    },
    {
        "id": 2922,
        "name": "Kling, Frami and Thiel",
        "sector": "Electronic",
        "siren": 153775737,
        "results": [
            5834,
            5835
        ]
    },
    {
        "id": 2923,
        "name": "Hirthe Group",
        "sector": "Electronic",
        "siren": 109390434,
        "results": [
            5836,
            5837
        ]
    },
    {
        "id": 2924,
        "name": "Grant-Hills",
        "sector": "Services",
        "siren": 152889154,
        "results": [
            5838,
            5839
        ]
    },
    {
        "id": 2925,
        "name": "Koch, Cassin and Murphy",
        "sector": "Electronic",
        "siren": 175818545,
        "results": [
            5840,
            5841
        ]
    },
    {
        "id": 2926,
        "name": "Koss, Leffler and Fay",
        "sector": "Energy",
        "siren": 119128103,
        "results": [
            5842,
            5843
        ]
    },
    {
        "id": 2927,
        "name": "Corwin-Vandervort",
        "sector": "Energy",
        "siren": 179335809,
        "results": [
            5844,
            5845
        ]
    },
    {
        "id": 2928,
        "name": "Bartoletti-Effertz",
        "sector": "Luxury",
        "siren": 158737316,
        "results": [
            5846,
            5847
        ]
    },
    {
        "id": 2929,
        "name": "O'Reilly, Langosh and Raynor",
        "sector": "Electronic",
        "siren": 138908158,
        "results": [
            5848,
            5849
        ]
    },
    {
        "id": 2930,
        "name": "Upton, Cormier and Morissette",
        "sector": "Luxury",
        "siren": 148123081,
        "results": [
            5850,
            5851
        ]
    },
    {
        "id": 2931,
        "name": "Grady Inc",
        "sector": "Services",
        "siren": 124921215,
        "results": [
            5852,
            5853
        ]
    },
    {
        "id": 2932,
        "name": "Schimmel Group",
        "sector": "Luxury",
        "siren": 182073248,
        "results": [
            5854,
            5855
        ]
    },
    {
        "id": 2933,
        "name": "Schiller Inc",
        "sector": "Retail",
        "siren": 152363753,
        "results": [
            5856,
            5857
        ]
    },
    {
        "id": 2934,
        "name": "Heathcote-Pagac",
        "sector": "Electronic",
        "siren": 142665129,
        "results": [
            5858,
            5859
        ]
    },
    {
        "id": 2935,
        "name": "Dietrich-Kassulke",
        "sector": "Electronic",
        "siren": 153434268,
        "results": [
            5860,
            5861
        ]
    },
    {
        "id": 2936,
        "name": "Carter LLC",
        "sector": "Energy",
        "siren": 137164647,
        "results": [
            5862,
            5863
        ]
    },
    {
        "id": 2937,
        "name": "Stokes-Beahan",
        "sector": "Services",
        "siren": 173257908,
        "results": [
            5864,
            5865
        ]
    },
    {
        "id": 2938,
        "name": "Ward-Leffler",
        "sector": "Electronic",
        "siren": 129146450,
        "results": [
            5866,
            5867
        ]
    },
    {
        "id": 2939,
        "name": "Bogisich Group",
        "sector": "Retail",
        "siren": 155864068,
        "results": [
            5868,
            5869
        ]
    },
    {
        "id": 2940,
        "name": "Wiza, Abshire and Yundt",
        "sector": "Electronic",
        "siren": 167802466,
        "results": [
            5870,
            5871
        ]
    },
    {
        "id": 2941,
        "name": "Hodkiewicz Inc",
        "sector": "Energy",
        "siren": 109632592,
        "results": [
            5872,
            5873
        ]
    },
    {
        "id": 2942,
        "name": "Walker-Legros",
        "sector": "Retail",
        "siren": 139341533,
        "results": [
            5874,
            5875
        ]
    },
    {
        "id": 2943,
        "name": "Willms, Nicolas and Torphy",
        "sector": "Retail",
        "siren": 183352652,
        "results": [
            5876,
            5877
        ]
    },
    {
        "id": 2944,
        "name": "Marks and Sons",
        "sector": "Electronic",
        "siren": 129610484,
        "results": [
            5878,
            5879
        ]
    },
    {
        "id": 2945,
        "name": "Ziemann-Hintz",
        "sector": "Energy",
        "siren": 149431058,
        "results": [
            5880,
            5881
        ]
    },
    {
        "id": 2946,
        "name": "Walter-Bartell",
        "sector": "Energy",
        "siren": 159270097,
        "results": [
            5882,
            5883
        ]
    },
    {
        "id": 2947,
        "name": "Harber and Sons",
        "sector": "Luxury",
        "siren": 105385372,
        "results": [
            5884,
            5885
        ]
    },
    {
        "id": 2948,
        "name": "Pfeffer, Volkman and Jacobs",
        "sector": "Services",
        "siren": 155828039,
        "results": [
            5886,
            5887
        ]
    },
    {
        "id": 2949,
        "name": "Heathcote, Block and Rempel",
        "sector": "Retail",
        "siren": 148575346,
        "results": [
            5888,
            5889
        ]
    },
    {
        "id": 2950,
        "name": "Schuster, Hintz and Luettgen",
        "sector": "Retail",
        "siren": 139843626,
        "results": [
            5890,
            5891
        ]
    },
    {
        "id": 2951,
        "name": "Moore-Funk",
        "sector": "Retail",
        "siren": 138402141,
        "results": [
            5892,
            5893
        ]
    },
    {
        "id": 2952,
        "name": "Gutkowski, Farrell and Altenwerth",
        "sector": "Luxury",
        "siren": 162175274,
        "results": [
            5894,
            5895
        ]
    },
    {
        "id": 2953,
        "name": "Turcotte, Pagac and Welch",
        "sector": "Services",
        "siren": 176753871,
        "results": [
            5896,
            5897
        ]
    },
    {
        "id": 2954,
        "name": "Kovacek-Larkin",
        "sector": "Services",
        "siren": 113674387,
        "results": [
            5898,
            5899
        ]
    },
    {
        "id": 2955,
        "name": "Fay and Sons",
        "sector": "Services",
        "siren": 144972814,
        "results": [
            5900,
            5901
        ]
    },
    {
        "id": 2956,
        "name": "Cummerata-Berge",
        "sector": "Electronic",
        "siren": 154318426,
        "results": [
            5902,
            5903
        ]
    },
    {
        "id": 2957,
        "name": "Schultz, Sporer and Hoppe",
        "sector": "Retail",
        "siren": 174292657,
        "results": [
            5904,
            5905
        ]
    },
    {
        "id": 2958,
        "name": "Cole-Langosh",
        "sector": "Retail",
        "siren": 149623513,
        "results": [
            5906,
            5907
        ]
    },
    {
        "id": 2959,
        "name": "Jakubowski, Spinka and Bogisich",
        "sector": "Retail",
        "siren": 156086955,
        "results": [
            5908,
            5909
        ]
    },
    {
        "id": 2960,
        "name": "Effertz-Batz",
        "sector": "Energy",
        "siren": 191578492,
        "results": [
            5910,
            5911
        ]
    },
    {
        "id": 2961,
        "name": "Parisian Inc",
        "sector": "Electronic",
        "siren": 100544297,
        "results": [
            5912,
            5913
        ]
    },
    {
        "id": 2962,
        "name": "Jacobson-Hammes",
        "sector": "Retail",
        "siren": 197942932,
        "results": [
            5914,
            5915
        ]
    },
    {
        "id": 2963,
        "name": "Leuschke-Mante",
        "sector": "Electronic",
        "siren": 197657514,
        "results": [
            5916,
            5917
        ]
    },
    {
        "id": 2964,
        "name": "Bernhard Inc",
        "sector": "Electronic",
        "siren": 102657824,
        "results": [
            5918,
            5919
        ]
    },
    {
        "id": 2965,
        "name": "Bergstrom, O'Reilly and Bogan",
        "sector": "Electronic",
        "siren": 194602712,
        "results": [
            5920,
            5921
        ]
    },
    {
        "id": 2966,
        "name": "Nitzsche, Stark and Mitchell",
        "sector": "Energy",
        "siren": 192119655,
        "results": [
            5922,
            5923
        ]
    },
    {
        "id": 2967,
        "name": "Dare, Ryan and Hickle",
        "sector": "Services",
        "siren": 190429858,
        "results": [
            5924,
            5925
        ]
    },
    {
        "id": 2968,
        "name": "Johns and Sons",
        "sector": "Electronic",
        "siren": 196788807,
        "results": [
            5926,
            5927
        ]
    },
    {
        "id": 2969,
        "name": "Larkin-Jast",
        "sector": "Electronic",
        "siren": 119438694,
        "results": [
            5928,
            5929
        ]
    },
    {
        "id": 2970,
        "name": "Schinner-Batz",
        "sector": "Luxury",
        "siren": 113489329,
        "results": [
            5930,
            5931
        ]
    },
    {
        "id": 2971,
        "name": "Fay, Bosco and Williamson",
        "sector": "Energy",
        "siren": 117151370,
        "results": [
            5932,
            5933
        ]
    },
    {
        "id": 2972,
        "name": "Wiza Group",
        "sector": "Energy",
        "siren": 119972532,
        "results": [
            5934,
            5935
        ]
    },
    {
        "id": 2973,
        "name": "Koepp-Hilll",
        "sector": "Energy",
        "siren": 154362070,
        "results": [
            5936,
            5937
        ]
    },
    {
        "id": 2974,
        "name": "O'Keefe-Brown",
        "sector": "Energy",
        "siren": 123618667,
        "results": [
            5938,
            5939
        ]
    },
    {
        "id": 2975,
        "name": "Stehr-Sanford",
        "sector": "Electronic",
        "siren": 167001629,
        "results": [
            5940,
            5941
        ]
    },
    {
        "id": 2976,
        "name": "Kunze-Towne",
        "sector": "Luxury",
        "siren": 194461061,
        "results": [
            5942,
            5943
        ]
    },
    {
        "id": 2977,
        "name": "Donnelly and Sons",
        "sector": "Services",
        "siren": 145161488,
        "results": [
            5944,
            5945
        ]
    },
    {
        "id": 2978,
        "name": "Schneider Inc",
        "sector": "Retail",
        "siren": 164176868,
        "results": [
            5946,
            5947
        ]
    },
    {
        "id": 2979,
        "name": "Collins-Pfannerstill",
        "sector": "Retail",
        "siren": 179486766,
        "results": [
            5948,
            5949
        ]
    },
    {
        "id": 2980,
        "name": "Huel-Bernhard",
        "sector": "Services",
        "siren": 131003782,
        "results": [
            5950,
            5951
        ]
    },
    {
        "id": 2981,
        "name": "Yost-Ullrich",
        "sector": "Energy",
        "siren": 188847833,
        "results": [
            5952,
            5953
        ]
    },
    {
        "id": 2982,
        "name": "McCullough, Spinka and Miller",
        "sector": "Energy",
        "siren": 199981161,
        "results": [
            5954,
            5955
        ]
    },
    {
        "id": 2983,
        "name": "Hilpert, Veum and Donnelly",
        "sector": "Services",
        "siren": 160977920,
        "results": [
            5956,
            5957
        ]
    },
    {
        "id": 2984,
        "name": "Kutch LLC",
        "sector": "Electronic",
        "siren": 110094965,
        "results": [
            5958,
            5959
        ]
    },
    {
        "id": 2985,
        "name": "Muller-Volkman",
        "sector": "Energy",
        "siren": 144184638,
        "results": [
            5960,
            5961
        ]
    },
    {
        "id": 2986,
        "name": "Sawayn and Sons",
        "sector": "Energy",
        "siren": 131330675,
        "results": [
            5962,
            5963
        ]
    },
    {
        "id": 2987,
        "name": "Stehr-Hessel",
        "sector": "Retail",
        "siren": 191815148,
        "results": [
            5964,
            5965
        ]
    },
    {
        "id": 2988,
        "name": "O'Kon-Hermiston",
        "sector": "Services",
        "siren": 150529572,
        "results": [
            5966,
            5967
        ]
    },
    {
        "id": 2989,
        "name": "Stokes, Walter and Bode",
        "sector": "Electronic",
        "siren": 161617766,
        "results": [
            5968,
            5969
        ]
    },
    {
        "id": 2990,
        "name": "MacGyver and Sons",
        "sector": "Electronic",
        "siren": 107852119,
        "results": [
            5970,
            5971
        ]
    },
    {
        "id": 2991,
        "name": "Reichert LLC",
        "sector": "Energy",
        "siren": 111533385,
        "results": [
            5972,
            5973
        ]
    },
    {
        "id": 2992,
        "name": "Ernser, Gleichner and Hane",
        "sector": "Services",
        "siren": 138679184,
        "results": [
            5974,
            5975
        ]
    },
    {
        "id": 2993,
        "name": "Bauch, Stiedemann and Bogisich",
        "sector": "Electronic",
        "siren": 115223293,
        "results": [
            5976,
            5977
        ]
    },
    {
        "id": 2994,
        "name": "Feest-Bogan",
        "sector": "Luxury",
        "siren": 159946640,
        "results": [
            5978,
            5979
        ]
    },
    {
        "id": 2995,
        "name": "Bauch-Rice",
        "sector": "Services",
        "siren": 104113426,
        "results": [
            5980,
            5981
        ]
    },
    {
        "id": 2996,
        "name": "Weissnat-Hermann",
        "sector": "Energy",
        "siren": 125243257,
        "results": [
            5982,
            5983
        ]
    },
    {
        "id": 2997,
        "name": "Boyer LLC",
        "sector": "Retail",
        "siren": 142415138,
        "results": [
            5984,
            5985
        ]
    },
    {
        "id": 2998,
        "name": "Schaden-Maggio",
        "sector": "Services",
        "siren": 148429613,
        "results": [
            5986,
            5987
        ]
    },
    {
        "id": 2999,
        "name": "Conroy, Kiehn and Bahringer",
        "sector": "Energy",
        "siren": 111224568,
        "results": [
            5988,
            5989
        ]
    },
    {
        "id": 3000,
        "name": "Dooley, Volkman and Thompson",
        "sector": "Services",
        "siren": 110179331,
        "results": [
            5990,
            5991
        ]
    },
    {
        "id": 3001,
        "name": "Hammes-Boyer",
        "sector": "Retail",
        "siren": 147649127,
        "results": [
            5992,
            5993
        ]
    },
    {
        "id": 3002,
        "name": "O'Reilly and Sons",
        "sector": "Retail",
        "siren": 196424074,
        "results": [
            5994,
            5995
        ]
    },
    {
        "id": 3003,
        "name": "Kuhic, Hagenes and Stehr",
        "sector": "Retail",
        "siren": 109863760,
        "results": [
            5996,
            5997
        ]
    },
    {
        "id": 3004,
        "name": "Braun-Hills",
        "sector": "Electronic",
        "siren": 178204654,
        "results": [
            5998,
            5999
        ]
    },
    {
        "id": 3005,
        "name": "O'Connell-Botsford",
        "sector": "Electronic",
        "siren": 150471122,
        "results": [
            6000,
            6001
        ]
    },
    {
        "id": 3006,
        "name": "Gusikowski Inc",
        "sector": "Services",
        "siren": 148012572,
        "results": [
            6002,
            6003
        ]
    },
    {
        "id": 3007,
        "name": "Homenick-Schulist",
        "sector": "Energy",
        "siren": 199417647,
        "results": [
            6004,
            6005
        ]
    },
    {
        "id": 3008,
        "name": "Mayert-Nader",
        "sector": "Electronic",
        "siren": 196578469,
        "results": [
            6006,
            6007
        ]
    },
    {
        "id": 3009,
        "name": "Kessler and Sons",
        "sector": "Retail",
        "siren": 161771017,
        "results": [
            6008,
            6009
        ]
    },
    {
        "id": 3010,
        "name": "Kohler Group",
        "sector": "Energy",
        "siren": 109223179,
        "results": [
            6010,
            6011
        ]
    },
    {
        "id": 3011,
        "name": "Cartwright, Langosh and Ratke",
        "sector": "Electronic",
        "siren": 148131215,
        "results": [
            6012,
            6013
        ]
    },
    {
        "id": 3012,
        "name": "Zieme-Littel",
        "sector": "Retail",
        "siren": 119585372,
        "results": [
            6014,
            6015
        ]
    },
    {
        "id": 3013,
        "name": "Jacobs-Romaguera",
        "sector": "Electronic",
        "siren": 161977766,
        "results": [
            6016,
            6017
        ]
    },
    {
        "id": 3014,
        "name": "Johnson, Ferry and Bailey",
        "sector": "Retail",
        "siren": 186288766,
        "results": [
            6018,
            6019
        ]
    },
    {
        "id": 3015,
        "name": "Abbott, Jacobson and Kessler",
        "sector": "Energy",
        "siren": 190068556,
        "results": [
            6020,
            6021
        ]
    },
    {
        "id": 3016,
        "name": "Fisher Group",
        "sector": "Services",
        "siren": 177894686,
        "results": [
            6022,
            6023
        ]
    },
    {
        "id": 3017,
        "name": "Weimann-Wuckert",
        "sector": "Retail",
        "siren": 161472408,
        "results": [
            6024,
            6025
        ]
    },
    {
        "id": 3018,
        "name": "West LLC",
        "sector": "Energy",
        "siren": 190837968,
        "results": [
            6026,
            6027
        ]
    },
    {
        "id": 3019,
        "name": "Gottlieb-Ondricka",
        "sector": "Electronic",
        "siren": 190862988,
        "results": [
            6028,
            6029
        ]
    },
    {
        "id": 3020,
        "name": "Roob Inc",
        "sector": "Luxury",
        "siren": 101958734,
        "results": [
            6030,
            6031
        ]
    },
    {
        "id": 3021,
        "name": "Morissette and Sons",
        "sector": "Retail",
        "siren": 167669722,
        "results": [
            6032,
            6033
        ]
    },
    {
        "id": 3022,
        "name": "Zemlak-Connelly",
        "sector": "Luxury",
        "siren": 104649344,
        "results": [
            6034,
            6035
        ]
    },
    {
        "id": 3023,
        "name": "Johnson-Jakubowski",
        "sector": "Luxury",
        "siren": 192817456,
        "results": [
            6036,
            6037
        ]
    },
    {
        "id": 3024,
        "name": "Volkman-Kovacek",
        "sector": "Luxury",
        "siren": 117895725,
        "results": [
            6038,
            6039
        ]
    },
    {
        "id": 3025,
        "name": "Tillman, Skiles and Hilpert",
        "sector": "Energy",
        "siren": 117107520,
        "results": [
            6040,
            6041
        ]
    },
    {
        "id": 3026,
        "name": "Kub-Daniel",
        "sector": "Services",
        "siren": 106341027,
        "results": [
            6042,
            6043
        ]
    },
    {
        "id": 3027,
        "name": "Kohler-Dickinson",
        "sector": "Luxury",
        "siren": 187328834,
        "results": [
            6044,
            6045
        ]
    },
    {
        "id": 3028,
        "name": "Carter, Hermann and Abbott",
        "sector": "Energy",
        "siren": 118248539,
        "results": [
            6046,
            6047
        ]
    },
    {
        "id": 3029,
        "name": "Pfeffer Inc",
        "sector": "Energy",
        "siren": 196877153,
        "results": [
            6048,
            6049
        ]
    },
    {
        "id": 3030,
        "name": "Bernier-Trantow",
        "sector": "Luxury",
        "siren": 144677992,
        "results": [
            6050,
            6051
        ]
    },
    {
        "id": 3031,
        "name": "Spinka LLC",
        "sector": "Luxury",
        "siren": 116843327,
        "results": [
            6052,
            6053
        ]
    },
    {
        "id": 3032,
        "name": "Walsh, Runolfsdottir and Kilback",
        "sector": "Luxury",
        "siren": 124931602,
        "results": [
            6054,
            6055
        ]
    },
    {
        "id": 3033,
        "name": "Kreiger Group",
        "sector": "Electronic",
        "siren": 172446196,
        "results": [
            6056,
            6057
        ]
    },
    {
        "id": 3034,
        "name": "Legros-Quigley",
        "sector": "Energy",
        "siren": 189491425,
        "results": [
            6058,
            6059
        ]
    },
    {
        "id": 3035,
        "name": "Stracke, Feeney and Schmeler",
        "sector": "Retail",
        "siren": 172260753,
        "results": [
            6060,
            6061
        ]
    },
    {
        "id": 3036,
        "name": "Gibson-Lynch",
        "sector": "Luxury",
        "siren": 131306836,
        "results": [
            6062,
            6063
        ]
    },
    {
        "id": 3037,
        "name": "Reichel-Torp",
        "sector": "Services",
        "siren": 138938680,
        "results": [
            6064,
            6065
        ]
    },
    {
        "id": 3038,
        "name": "Deckow-Herman",
        "sector": "Energy",
        "siren": 145463778,
        "results": [
            6066,
            6067
        ]
    },
    {
        "id": 3039,
        "name": "Ondricka Inc",
        "sector": "Retail",
        "siren": 114106817,
        "results": [
            6068,
            6069
        ]
    },
    {
        "id": 3040,
        "name": "Kassulke Group",
        "sector": "Services",
        "siren": 125326583,
        "results": [
            6070,
            6071
        ]
    },
    {
        "id": 3041,
        "name": "Gutkowski and Sons",
        "sector": "Luxury",
        "siren": 194518065,
        "results": [
            6072,
            6073
        ]
    },
    {
        "id": 3042,
        "name": "Brekke Inc",
        "sector": "Luxury",
        "siren": 144810441,
        "results": [
            6074,
            6075
        ]
    },
    {
        "id": 3043,
        "name": "Sanford, Abbott and Doyle",
        "sector": "Luxury",
        "siren": 109581460,
        "results": [
            6076,
            6077
        ]
    },
    {
        "id": 3044,
        "name": "Terry, Watsica and Marks",
        "sector": "Services",
        "siren": 163369130,
        "results": [
            6078,
            6079
        ]
    },
    {
        "id": 3045,
        "name": "Windler, Beer and Reichert",
        "sector": "Energy",
        "siren": 162705486,
        "results": [
            6080,
            6081
        ]
    },
    {
        "id": 3046,
        "name": "Quigley Inc",
        "sector": "Services",
        "siren": 171902083,
        "results": [
            6082,
            6083
        ]
    },
    {
        "id": 3047,
        "name": "Kub and Sons",
        "sector": "Retail",
        "siren": 133035315,
        "results": [
            6084,
            6085
        ]
    },
    {
        "id": 3048,
        "name": "Kutch LLC",
        "sector": "Services",
        "siren": 143661189,
        "results": [
            6086,
            6087
        ]
    },
    {
        "id": 3049,
        "name": "Doyle, Batz and Stoltenberg",
        "sector": "Luxury",
        "siren": 187532589,
        "results": [
            6088,
            6089
        ]
    },
    {
        "id": 3050,
        "name": "Goyette and Sons",
        "sector": "Energy",
        "siren": 199540783,
        "results": [
            6090,
            6091
        ]
    },
    {
        "id": 3051,
        "name": "Windler Inc",
        "sector": "Services",
        "siren": 178765604,
        "results": [
            6092,
            6093
        ]
    },
    {
        "id": 3052,
        "name": "Dicki Group",
        "sector": "Retail",
        "siren": 116237749,
        "results": [
            6094,
            6095
        ]
    },
    {
        "id": 3053,
        "name": "Quitzon and Sons",
        "sector": "Luxury",
        "siren": 125672275,
        "results": [
            6096,
            6097
        ]
    },
    {
        "id": 3054,
        "name": "Steuber-Metz",
        "sector": "Retail",
        "siren": 184946759,
        "results": [
            6098,
            6099
        ]
    },
    {
        "id": 3055,
        "name": "Larson and Sons",
        "sector": "Energy",
        "siren": 160194912,
        "results": [
            6100,
            6101
        ]
    },
    {
        "id": 3056,
        "name": "Bernier Inc",
        "sector": "Electronic",
        "siren": 118680509,
        "results": [
            6102,
            6103
        ]
    },
    {
        "id": 3057,
        "name": "Deckow and Sons",
        "sector": "Electronic",
        "siren": 167104227,
        "results": [
            6104,
            6105
        ]
    },
    {
        "id": 3058,
        "name": "Harris and Sons",
        "sector": "Energy",
        "siren": 128610634,
        "results": [
            6106,
            6107
        ]
    },
    {
        "id": 3059,
        "name": "Medhurst and Sons",
        "sector": "Luxury",
        "siren": 102925161,
        "results": [
            6108,
            6109
        ]
    },
    {
        "id": 3060,
        "name": "Nader-Marks",
        "sector": "Luxury",
        "siren": 191120490,
        "results": [
            6110,
            6111
        ]
    },
    {
        "id": 3061,
        "name": "Harris, O'Conner and Rodriguez",
        "sector": "Retail",
        "siren": 153285638,
        "results": [
            6112,
            6113
        ]
    },
    {
        "id": 3062,
        "name": "Emard-Wisoky",
        "sector": "Luxury",
        "siren": 131865937,
        "results": [
            6114,
            6115
        ]
    },
    {
        "id": 3063,
        "name": "Gleichner-Buckridge",
        "sector": "Electronic",
        "siren": 142254757,
        "results": [
            6116,
            6117
        ]
    },
    {
        "id": 3064,
        "name": "Stroman, Durgan and Schuster",
        "sector": "Electronic",
        "siren": 186553896,
        "results": [
            6118,
            6119
        ]
    },
    {
        "id": 3065,
        "name": "Bahringer-Beer",
        "sector": "Electronic",
        "siren": 155909003,
        "results": [
            6120,
            6121
        ]
    },
    {
        "id": 3066,
        "name": "Ankunding Group",
        "sector": "Services",
        "siren": 146522165,
        "results": [
            6122,
            6123
        ]
    },
    {
        "id": 3067,
        "name": "Bailey and Sons",
        "sector": "Retail",
        "siren": 116912814,
        "results": [
            6124,
            6125
        ]
    },
    {
        "id": 3068,
        "name": "Stiedemann Group",
        "sector": "Services",
        "siren": 138130435,
        "results": [
            6126,
            6127
        ]
    },
    {
        "id": 3069,
        "name": "VonRueden, Stokes and Hammes",
        "sector": "Services",
        "siren": 136246184,
        "results": [
            6128,
            6129
        ]
    },
    {
        "id": 3070,
        "name": "Cole, Schuppe and Nolan",
        "sector": "Energy",
        "siren": 126595826,
        "results": [
            6130,
            6131
        ]
    },
    {
        "id": 3071,
        "name": "Gerlach-Haley",
        "sector": "Energy",
        "siren": 140145973,
        "results": [
            6132,
            6133
        ]
    },
    {
        "id": 3072,
        "name": "Nader-Feest",
        "sector": "Energy",
        "siren": 142651328,
        "results": [
            6134,
            6135
        ]
    },
    {
        "id": 3073,
        "name": "Barrows-Fahey",
        "sector": "Luxury",
        "siren": 197267187,
        "results": [
            6136,
            6137
        ]
    },
    {
        "id": 3074,
        "name": "Botsford, Corkery and Zboncak",
        "sector": "Retail",
        "siren": 156360441,
        "results": [
            6138,
            6139
        ]
    },
    {
        "id": 3075,
        "name": "Davis LLC",
        "sector": "Luxury",
        "siren": 187427886,
        "results": [
            6140,
            6141
        ]
    },
    {
        "id": 3076,
        "name": "Sawayn Inc",
        "sector": "Retail",
        "siren": 199558391,
        "results": [
            6142,
            6143
        ]
    },
    {
        "id": 3077,
        "name": "Pollich LLC",
        "sector": "Services",
        "siren": 131071003,
        "results": [
            6144,
            6145
        ]
    },
    {
        "id": 3078,
        "name": "Nader, Heathcote and Beier",
        "sector": "Retail",
        "siren": 163154696,
        "results": [
            6146,
            6147
        ]
    },
    {
        "id": 3079,
        "name": "Hauck-Kutch",
        "sector": "Retail",
        "siren": 151613004,
        "results": [
            6148,
            6149
        ]
    },
    {
        "id": 3080,
        "name": "Denesik LLC",
        "sector": "Retail",
        "siren": 103479498,
        "results": [
            6150,
            6151
        ]
    },
    {
        "id": 3081,
        "name": "Jast Group",
        "sector": "Energy",
        "siren": 143432110,
        "results": [
            6152,
            6153
        ]
    },
    {
        "id": 3082,
        "name": "Larkin, Durgan and Franecki",
        "sector": "Electronic",
        "siren": 116000875,
        "results": [
            6154,
            6155
        ]
    },
    {
        "id": 3083,
        "name": "Erdman, Breitenberg and Streich",
        "sector": "Electronic",
        "siren": 159175169,
        "results": [
            6156,
            6157
        ]
    },
    {
        "id": 3084,
        "name": "Feest-Batz",
        "sector": "Electronic",
        "siren": 164860406,
        "results": [
            6158,
            6159
        ]
    },
    {
        "id": 3085,
        "name": "Mayer Inc",
        "sector": "Energy",
        "siren": 101482936,
        "results": [
            6160,
            6161
        ]
    },
    {
        "id": 3086,
        "name": "Balistreri, Will and Walker",
        "sector": "Retail",
        "siren": 161501031,
        "results": [
            6162,
            6163
        ]
    },
    {
        "id": 3087,
        "name": "Rau, Yundt and Bergstrom",
        "sector": "Energy",
        "siren": 192338635,
        "results": [
            6164,
            6165
        ]
    },
    {
        "id": 3088,
        "name": "Howell, Littel and Shanahan",
        "sector": "Luxury",
        "siren": 153414397,
        "results": [
            6166,
            6167
        ]
    },
    {
        "id": 3089,
        "name": "Steuber, Thompson and Toy",
        "sector": "Services",
        "siren": 123940721,
        "results": [
            6168,
            6169
        ]
    },
    {
        "id": 3090,
        "name": "Olson-Jakubowski",
        "sector": "Electronic",
        "siren": 167690862,
        "results": [
            6170,
            6171
        ]
    },
    {
        "id": 3091,
        "name": "Rowe, Ziemann and Wintheiser",
        "sector": "Luxury",
        "siren": 184418505,
        "results": [
            6172,
            6173
        ]
    },
    {
        "id": 3092,
        "name": "McKenzie-Waters",
        "sector": "Retail",
        "siren": 100313670,
        "results": [
            6174,
            6175
        ]
    },
    {
        "id": 3093,
        "name": "Breitenberg, Emard and Schiller",
        "sector": "Energy",
        "siren": 182874115,
        "results": [
            6176,
            6177
        ]
    },
    {
        "id": 3094,
        "name": "Reichel and Sons",
        "sector": "Electronic",
        "siren": 162185639,
        "results": [
            6178,
            6179
        ]
    },
    {
        "id": 3095,
        "name": "Botsford LLC",
        "sector": "Energy",
        "siren": 108406570,
        "results": [
            6180,
            6181
        ]
    },
    {
        "id": 3096,
        "name": "Hilpert LLC",
        "sector": "Electronic",
        "siren": 192146857,
        "results": [
            6182,
            6183
        ]
    },
    {
        "id": 3097,
        "name": "Fritsch, Hahn and Veum",
        "sector": "Energy",
        "siren": 106505507,
        "results": [
            6184,
            6185
        ]
    },
    {
        "id": 3098,
        "name": "Prosacco-Wiza",
        "sector": "Retail",
        "siren": 189019628,
        "results": [
            6186,
            6187
        ]
    },
    {
        "id": 3099,
        "name": "Turner, Kovacek and Osinski",
        "sector": "Electronic",
        "siren": 136565825,
        "results": [
            6188,
            6189
        ]
    },
    {
        "id": 3100,
        "name": "Feeney, Homenick and Anderson",
        "sector": "Services",
        "siren": 160773085,
        "results": [
            6190,
            6191
        ]
    },
    {
        "id": 3101,
        "name": "Wuckert LLC",
        "sector": "Retail",
        "siren": 185956961,
        "results": [
            6192,
            6193
        ]
    },
    {
        "id": 3102,
        "name": "Schamberger, Schuppe and Marks",
        "sector": "Services",
        "siren": 152638843,
        "results": [
            6194,
            6195
        ]
    },
    {
        "id": 3103,
        "name": "Kuphal-Kovacek",
        "sector": "Luxury",
        "siren": 165732658,
        "results": [
            6196,
            6197
        ]
    },
    {
        "id": 3104,
        "name": "Paucek Group",
        "sector": "Luxury",
        "siren": 119495081,
        "results": [
            6198,
            6199
        ]
    },
    {
        "id": 3105,
        "name": "MacGyver-Hintz",
        "sector": "Electronic",
        "siren": 117496732,
        "results": [
            6200,
            6201
        ]
    },
    {
        "id": 3106,
        "name": "Ratke and Sons",
        "sector": "Energy",
        "siren": 170431877,
        "results": [
            6202,
            6203
        ]
    },
    {
        "id": 3107,
        "name": "Brekke, Greenfelder and Hills",
        "sector": "Energy",
        "siren": 151517029,
        "results": [
            6204,
            6205
        ]
    },
    {
        "id": 3108,
        "name": "Kirlin Group",
        "sector": "Retail",
        "siren": 119879668,
        "results": [
            6206,
            6207
        ]
    },
    {
        "id": 3109,
        "name": "Strosin, Wunsch and Kerluke",
        "sector": "Electronic",
        "siren": 106238133,
        "results": [
            6208,
            6209
        ]
    },
    {
        "id": 3110,
        "name": "Barton, Pollich and Gaylord",
        "sector": "Electronic",
        "siren": 122325130,
        "results": [
            6210,
            6211
        ]
    },
    {
        "id": 3111,
        "name": "Marks-Rolfson",
        "sector": "Luxury",
        "siren": 114187547,
        "results": [
            6212,
            6213
        ]
    },
    {
        "id": 3112,
        "name": "Ferry Inc",
        "sector": "Luxury",
        "siren": 146000588,
        "results": [
            6214,
            6215
        ]
    },
    {
        "id": 3113,
        "name": "Jones-Wuckert",
        "sector": "Services",
        "siren": 199815719,
        "results": [
            6216,
            6217
        ]
    },
    {
        "id": 3114,
        "name": "Schuster-Pouros",
        "sector": "Energy",
        "siren": 123345367,
        "results": [
            6218,
            6219
        ]
    },
    {
        "id": 3115,
        "name": "Reilly Group",
        "sector": "Energy",
        "siren": 195257069,
        "results": [
            6220,
            6221
        ]
    },
    {
        "id": 3116,
        "name": "Swift-Schmeler",
        "sector": "Luxury",
        "siren": 159163298,
        "results": [
            6222,
            6223
        ]
    },
    {
        "id": 3117,
        "name": "Frami, Kassulke and Williamson",
        "sector": "Luxury",
        "siren": 119389057,
        "results": [
            6224,
            6225
        ]
    },
    {
        "id": 3118,
        "name": "Goldner-Ondricka",
        "sector": "Retail",
        "siren": 175911534,
        "results": [
            6226,
            6227
        ]
    },
    {
        "id": 3119,
        "name": "O'Hara LLC",
        "sector": "Luxury",
        "siren": 138708659,
        "results": [
            6228,
            6229
        ]
    },
    {
        "id": 3120,
        "name": "Raynor, Gibson and Schaden",
        "sector": "Retail",
        "siren": 132489467,
        "results": [
            6230,
            6231
        ]
    },
    {
        "id": 3121,
        "name": "Konopelski-Parisian",
        "sector": "Electronic",
        "siren": 125596906,
        "results": [
            6232,
            6233
        ]
    },
    {
        "id": 3122,
        "name": "Bergstrom-Bayer",
        "sector": "Retail",
        "siren": 172596887,
        "results": [
            6234,
            6235
        ]
    },
    {
        "id": 3123,
        "name": "Gutmann-Wintheiser",
        "sector": "Electronic",
        "siren": 136870795,
        "results": [
            6236,
            6237
        ]
    },
    {
        "id": 3124,
        "name": "Ruecker Inc",
        "sector": "Energy",
        "siren": 107771540,
        "results": [
            6238,
            6239
        ]
    },
    {
        "id": 3125,
        "name": "Schowalter and Sons",
        "sector": "Electronic",
        "siren": 104892063,
        "results": [
            6240,
            6241
        ]
    },
    {
        "id": 3126,
        "name": "Weimann Inc",
        "sector": "Electronic",
        "siren": 115032180,
        "results": [
            6242,
            6243
        ]
    },
    {
        "id": 3127,
        "name": "Fay-Wolf",
        "sector": "Retail",
        "siren": 152912420,
        "results": [
            6244,
            6245
        ]
    },
    {
        "id": 3128,
        "name": "Jakubowski, Tillman and Hamill",
        "sector": "Energy",
        "siren": 186447593,
        "results": [
            6246,
            6247
        ]
    },
    {
        "id": 3129,
        "name": "Green and Sons",
        "sector": "Electronic",
        "siren": 119660051,
        "results": [
            6248,
            6249
        ]
    },
    {
        "id": 3130,
        "name": "Schumm-Kirlin",
        "sector": "Luxury",
        "siren": 108906276,
        "results": [
            6250,
            6251
        ]
    },
    {
        "id": 3131,
        "name": "Waelchi Inc",
        "sector": "Luxury",
        "siren": 150114349,
        "results": [
            6252,
            6253
        ]
    },
    {
        "id": 3132,
        "name": "Rodriguez, Morissette and Runolfsson",
        "sector": "Services",
        "siren": 178558625,
        "results": [
            6254,
            6255
        ]
    },
    {
        "id": 3133,
        "name": "Mosciski, O'Keefe and Beier",
        "sector": "Luxury",
        "siren": 181047279,
        "results": [
            6256,
            6257
        ]
    },
    {
        "id": 3134,
        "name": "Ankunding-Hansen",
        "sector": "Energy",
        "siren": 198569365,
        "results": [
            6258,
            6259
        ]
    },
    {
        "id": 3135,
        "name": "Considine, Ullrich and Beatty",
        "sector": "Energy",
        "siren": 167785468,
        "results": [
            6260,
            6261
        ]
    },
    {
        "id": 3136,
        "name": "Macejkovic, Barton and Purdy",
        "sector": "Energy",
        "siren": 158559600,
        "results": [
            6262,
            6263
        ]
    },
    {
        "id": 3137,
        "name": "Kshlerin Inc",
        "sector": "Retail",
        "siren": 164045216,
        "results": [
            6264,
            6265
        ]
    },
    {
        "id": 3138,
        "name": "Schuster-Vandervort",
        "sector": "Retail",
        "siren": 183312705,
        "results": [
            6266,
            6267
        ]
    },
    {
        "id": 3139,
        "name": "Steuber, Marvin and Balistreri",
        "sector": "Services",
        "siren": 184552006,
        "results": [
            6268,
            6269
        ]
    },
    {
        "id": 3140,
        "name": "Kuvalis LLC",
        "sector": "Electronic",
        "siren": 107252195,
        "results": [
            6270,
            6271
        ]
    },
    {
        "id": 3141,
        "name": "Hegmann-Murazik",
        "sector": "Luxury",
        "siren": 162358868,
        "results": [
            6272,
            6273
        ]
    },
    {
        "id": 3142,
        "name": "Lebsack, Weissnat and Marquardt",
        "sector": "Services",
        "siren": 130350712,
        "results": [
            6274,
            6275
        ]
    },
    {
        "id": 3143,
        "name": "Schulist, Auer and Eichmann",
        "sector": "Electronic",
        "siren": 173544794,
        "results": [
            6276,
            6277
        ]
    },
    {
        "id": 3144,
        "name": "Wehner Inc",
        "sector": "Electronic",
        "siren": 193306137,
        "results": [
            6278,
            6279
        ]
    },
    {
        "id": 3145,
        "name": "Feest LLC",
        "sector": "Energy",
        "siren": 148619127,
        "results": [
            6280,
            6281
        ]
    },
    {
        "id": 3146,
        "name": "Stroman, Bauch and McKenzie",
        "sector": "Electronic",
        "siren": 111498818,
        "results": [
            6282,
            6283
        ]
    },
    {
        "id": 3147,
        "name": "Greenfelder-Olson",
        "sector": "Luxury",
        "siren": 186018493,
        "results": [
            6284,
            6285
        ]
    },
    {
        "id": 3148,
        "name": "Brown, Monahan and Hintz",
        "sector": "Energy",
        "siren": 124558272,
        "results": [
            6286,
            6287
        ]
    },
    {
        "id": 3149,
        "name": "Runolfsson, Jenkins and Carter",
        "sector": "Energy",
        "siren": 163601798,
        "results": [
            6288,
            6289
        ]
    },
    {
        "id": 3150,
        "name": "Hahn, Gleichner and Bechtelar",
        "sector": "Electronic",
        "siren": 195222821,
        "results": [
            6290,
            6291
        ]
    },
    {
        "id": 3151,
        "name": "Roberts-Stracke",
        "sector": "Electronic",
        "siren": 175690581,
        "results": [
            6292,
            6293
        ]
    },
    {
        "id": 3152,
        "name": "Stehr, Wisoky and Carroll",
        "sector": "Retail",
        "siren": 180337425,
        "results": [
            6294,
            6295
        ]
    },
    {
        "id": 3153,
        "name": "Feeney, Larkin and Bailey",
        "sector": "Energy",
        "siren": 191843405,
        "results": [
            6296,
            6297
        ]
    },
    {
        "id": 3154,
        "name": "Wunsch-Kub",
        "sector": "Energy",
        "siren": 114733505,
        "results": [
            6298,
            6299
        ]
    },
    {
        "id": 3155,
        "name": "Prosacco and Sons",
        "sector": "Electronic",
        "siren": 107733229,
        "results": [
            6300,
            6301
        ]
    },
    {
        "id": 3156,
        "name": "Wuckert-Spinka",
        "sector": "Energy",
        "siren": 142809805,
        "results": [
            6302,
            6303
        ]
    },
    {
        "id": 3157,
        "name": "Fritsch, Haley and Wuckert",
        "sector": "Retail",
        "siren": 160133554,
        "results": [
            6304,
            6305
        ]
    },
    {
        "id": 3158,
        "name": "Jaskolski and Sons",
        "sector": "Retail",
        "siren": 182186809,
        "results": [
            6306,
            6307
        ]
    },
    {
        "id": 3159,
        "name": "Beer, Reynolds and Altenwerth",
        "sector": "Services",
        "siren": 166645816,
        "results": [
            6308,
            6309
        ]
    },
    {
        "id": 3160,
        "name": "Jacobs-Fay",
        "sector": "Retail",
        "siren": 187905465,
        "results": [
            6310,
            6311
        ]
    },
    {
        "id": 3161,
        "name": "Lynch, Volkman and Mayert",
        "sector": "Electronic",
        "siren": 167643726,
        "results": [
            6312,
            6313
        ]
    },
    {
        "id": 3162,
        "name": "Goodwin-Stoltenberg",
        "sector": "Luxury",
        "siren": 115979485,
        "results": [
            6314,
            6315
        ]
    },
    {
        "id": 3163,
        "name": "Turner-Stracke",
        "sector": "Electronic",
        "siren": 100650646,
        "results": [
            6316,
            6317
        ]
    },
    {
        "id": 3164,
        "name": "Ebert, Emmerich and Thompson",
        "sector": "Retail",
        "siren": 115340847,
        "results": [
            6318,
            6319
        ]
    },
    {
        "id": 3165,
        "name": "Rau, Block and Friesen",
        "sector": "Retail",
        "siren": 122048074,
        "results": [
            6320,
            6321
        ]
    },
    {
        "id": 3166,
        "name": "Stanton Inc",
        "sector": "Luxury",
        "siren": 191782204,
        "results": [
            6322,
            6323
        ]
    },
    {
        "id": 3167,
        "name": "Braun LLC",
        "sector": "Luxury",
        "siren": 113043006,
        "results": [
            6324,
            6325
        ]
    },
    {
        "id": 3168,
        "name": "Ankunding, Wolff and Ferry",
        "sector": "Luxury",
        "siren": 146431624,
        "results": [
            6326,
            6327
        ]
    },
    {
        "id": 3169,
        "name": "Kertzmann Group",
        "sector": "Luxury",
        "siren": 161802172,
        "results": [
            6328,
            6329
        ]
    },
    {
        "id": 3170,
        "name": "Cartwright Group",
        "sector": "Energy",
        "siren": 194116781,
        "results": [
            6330,
            6331
        ]
    },
    {
        "id": 3171,
        "name": "Hodkiewicz, Prohaska and Mueller",
        "sector": "Retail",
        "siren": 113021215,
        "results": [
            6332,
            6333
        ]
    },
    {
        "id": 3172,
        "name": "Lang-Borer",
        "sector": "Energy",
        "siren": 132031123,
        "results": [
            6334,
            6335
        ]
    },
    {
        "id": 3173,
        "name": "Terry Inc",
        "sector": "Energy",
        "siren": 158816796,
        "results": [
            6336,
            6337
        ]
    },
    {
        "id": 3174,
        "name": "Kilback, White and Kuhn",
        "sector": "Retail",
        "siren": 195265239,
        "results": [
            6338,
            6339
        ]
    },
    {
        "id": 3175,
        "name": "Kozey, Dare and Wolff",
        "sector": "Luxury",
        "siren": 188745517,
        "results": [
            6340,
            6341
        ]
    },
    {
        "id": 3176,
        "name": "Sporer-Zemlak",
        "sector": "Luxury",
        "siren": 161108543,
        "results": [
            6342,
            6343
        ]
    },
    {
        "id": 3177,
        "name": "Crooks, Nolan and Monahan",
        "sector": "Services",
        "siren": 143702778,
        "results": [
            6344,
            6345
        ]
    },
    {
        "id": 3178,
        "name": "Miller and Sons",
        "sector": "Luxury",
        "siren": 104496126,
        "results": [
            6346,
            6347
        ]
    },
    {
        "id": 3179,
        "name": "Kertzmann-Greenholt",
        "sector": "Electronic",
        "siren": 195850715,
        "results": [
            6348,
            6349
        ]
    },
    {
        "id": 3180,
        "name": "Jones Inc",
        "sector": "Services",
        "siren": 182091222,
        "results": [
            6350,
            6351
        ]
    },
    {
        "id": 3181,
        "name": "Green, Harvey and Johns",
        "sector": "Energy",
        "siren": 156317095,
        "results": [
            6352,
            6353
        ]
    },
    {
        "id": 3182,
        "name": "Wunsch-Mante",
        "sector": "Energy",
        "siren": 142459232,
        "results": [
            6354,
            6355
        ]
    },
    {
        "id": 3183,
        "name": "Graham-Swaniawski",
        "sector": "Energy",
        "siren": 190807753,
        "results": [
            6356,
            6357
        ]
    },
    {
        "id": 3184,
        "name": "Ferry, Fritsch and Fadel",
        "sector": "Energy",
        "siren": 161226595,
        "results": [
            6358,
            6359
        ]
    },
    {
        "id": 3185,
        "name": "Marks-Dicki",
        "sector": "Energy",
        "siren": 166825502,
        "results": [
            6360,
            6361
        ]
    },
    {
        "id": 3186,
        "name": "Price and Sons",
        "sector": "Retail",
        "siren": 125486381,
        "results": [
            6362,
            6363
        ]
    },
    {
        "id": 3187,
        "name": "Rutherford-Pouros",
        "sector": "Energy",
        "siren": 193019462,
        "results": [
            6364,
            6365
        ]
    },
    {
        "id": 3188,
        "name": "Walter-Mohr",
        "sector": "Electronic",
        "siren": 113458358,
        "results": [
            6366,
            6367
        ]
    },
    {
        "id": 3189,
        "name": "McKenzie LLC",
        "sector": "Luxury",
        "siren": 112664870,
        "results": [
            6368,
            6369
        ]
    },
    {
        "id": 3190,
        "name": "Miller, Pacocha and Bechtelar",
        "sector": "Electronic",
        "siren": 108443710,
        "results": [
            6370,
            6371
        ]
    },
    {
        "id": 3191,
        "name": "Corkery and Sons",
        "sector": "Luxury",
        "siren": 178465657,
        "results": [
            6372,
            6373
        ]
    },
    {
        "id": 3192,
        "name": "Halvorson, Bernier and Hammes",
        "sector": "Electronic",
        "siren": 122900550,
        "results": [
            6374,
            6375
        ]
    },
    {
        "id": 3193,
        "name": "Wiegand-Dickens",
        "sector": "Services",
        "siren": 143579372,
        "results": [
            6376,
            6377
        ]
    },
    {
        "id": 3194,
        "name": "Torp Inc",
        "sector": "Energy",
        "siren": 189725524,
        "results": [
            6378,
            6379
        ]
    },
    {
        "id": 3195,
        "name": "Daugherty LLC",
        "sector": "Electronic",
        "siren": 128217325,
        "results": [
            6380,
            6381
        ]
    },
    {
        "id": 3196,
        "name": "Ledner, Kulas and Howe",
        "sector": "Retail",
        "siren": 178754669,
        "results": [
            6382,
            6383
        ]
    },
    {
        "id": 3197,
        "name": "Cummerata-Pacocha",
        "sector": "Electronic",
        "siren": 139964584,
        "results": [
            6384,
            6385
        ]
    },
    {
        "id": 3198,
        "name": "Buckridge, Hoppe and Pouros",
        "sector": "Services",
        "siren": 181577867,
        "results": [
            6386,
            6387
        ]
    },
    {
        "id": 3199,
        "name": "Yost, Hauck and Crist",
        "sector": "Services",
        "siren": 136140105,
        "results": [
            6388,
            6389
        ]
    },
    {
        "id": 3200,
        "name": "Emard, Gottlieb and Erdman",
        "sector": "Services",
        "siren": 197348760,
        "results": [
            6390,
            6391
        ]
    },
    {
        "id": 3201,
        "name": "Legros-Grant",
        "sector": "Luxury",
        "siren": 111581904,
        "results": [
            6392,
            6393
        ]
    },
    {
        "id": 3202,
        "name": "Donnelly and Sons",
        "sector": "Luxury",
        "siren": 191402137,
        "results": [
            6394,
            6395
        ]
    },
    {
        "id": 3203,
        "name": "McDermott Inc",
        "sector": "Luxury",
        "siren": 128440199,
        "results": [
            6396,
            6397
        ]
    },
    {
        "id": 3204,
        "name": "Gutmann-Buckridge",
        "sector": "Energy",
        "siren": 155312193,
        "results": [
            6398,
            6399
        ]
    },
    {
        "id": 3205,
        "name": "Murray LLC",
        "sector": "Electronic",
        "siren": 167238818,
        "results": [
            6400,
            6401
        ]
    },
    {
        "id": 3206,
        "name": "O'Conner Group",
        "sector": "Services",
        "siren": 112907980,
        "results": [
            6402,
            6403
        ]
    },
    {
        "id": 3207,
        "name": "Kassulke, Hahn and Turner",
        "sector": "Electronic",
        "siren": 183456129,
        "results": [
            6404,
            6405
        ]
    },
    {
        "id": 3208,
        "name": "Stanton-Kirlin",
        "sector": "Electronic",
        "siren": 193551149,
        "results": [
            6406,
            6407
        ]
    },
    {
        "id": 3209,
        "name": "Bergstrom-Botsford",
        "sector": "Energy",
        "siren": 192063048,
        "results": [
            6408,
            6409
        ]
    },
    {
        "id": 3210,
        "name": "Feest Inc",
        "sector": "Electronic",
        "siren": 171639217,
        "results": [
            6410,
            6411
        ]
    },
    {
        "id": 3211,
        "name": "Gibson and Sons",
        "sector": "Electronic",
        "siren": 141394359,
        "results": [
            6412,
            6413
        ]
    },
    {
        "id": 3212,
        "name": "McClure, Doyle and Lemke",
        "sector": "Services",
        "siren": 185255508,
        "results": [
            6414,
            6415
        ]
    },
    {
        "id": 3213,
        "name": "Koelpin-Schuster",
        "sector": "Services",
        "siren": 129367452,
        "results": [
            6416,
            6417
        ]
    },
    {
        "id": 3214,
        "name": "Blick Group",
        "sector": "Retail",
        "siren": 109638278,
        "results": [
            6418,
            6419
        ]
    },
    {
        "id": 3215,
        "name": "Thompson, Wiza and Bergstrom",
        "sector": "Services",
        "siren": 122984303,
        "results": [
            6420,
            6421
        ]
    },
    {
        "id": 3216,
        "name": "Dickinson-Hauck",
        "sector": "Electronic",
        "siren": 118582382,
        "results": [
            6422,
            6423
        ]
    },
    {
        "id": 3217,
        "name": "Connelly-Emmerich",
        "sector": "Services",
        "siren": 113938988,
        "results": [
            6424,
            6425
        ]
    },
    {
        "id": 3218,
        "name": "Mohr-Willms",
        "sector": "Energy",
        "siren": 187522743,
        "results": [
            6426,
            6427
        ]
    },
    {
        "id": 3219,
        "name": "Kiehn and Sons",
        "sector": "Services",
        "siren": 158676324,
        "results": [
            6428,
            6429
        ]
    },
    {
        "id": 3220,
        "name": "Strosin-Nienow",
        "sector": "Energy",
        "siren": 107572331,
        "results": [
            6430,
            6431
        ]
    },
    {
        "id": 3221,
        "name": "Bergstrom, Beatty and Runolfsson",
        "sector": "Electronic",
        "siren": 121012810,
        "results": [
            6432,
            6433
        ]
    },
    {
        "id": 3222,
        "name": "Halvorson LLC",
        "sector": "Retail",
        "siren": 156132597,
        "results": [
            6434,
            6435
        ]
    },
    {
        "id": 3223,
        "name": "Yost Inc",
        "sector": "Luxury",
        "siren": 116036824,
        "results": [
            6436,
            6437
        ]
    },
    {
        "id": 3224,
        "name": "Veum-Gleichner",
        "sector": "Luxury",
        "siren": 152821236,
        "results": [
            6438,
            6439
        ]
    },
    {
        "id": 3225,
        "name": "Hyatt and Sons",
        "sector": "Retail",
        "siren": 178440800,
        "results": [
            6440,
            6441
        ]
    },
    {
        "id": 3226,
        "name": "Jenkins-Berge",
        "sector": "Energy",
        "siren": 146784275,
        "results": [
            6442,
            6443
        ]
    },
    {
        "id": 3227,
        "name": "Runolfsson-Bergnaum",
        "sector": "Electronic",
        "siren": 145978278,
        "results": [
            6444,
            6445
        ]
    },
    {
        "id": 3228,
        "name": "McCullough-Glover",
        "sector": "Energy",
        "siren": 113262106,
        "results": [
            6446,
            6447
        ]
    },
    {
        "id": 3229,
        "name": "Roberts-Nolan",
        "sector": "Energy",
        "siren": 174223676,
        "results": [
            6448,
            6449
        ]
    },
    {
        "id": 3230,
        "name": "Littel Group",
        "sector": "Luxury",
        "siren": 175783016,
        "results": [
            6450,
            6451
        ]
    },
    {
        "id": 3231,
        "name": "Lynch-Borer",
        "sector": "Energy",
        "siren": 150864939,
        "results": [
            6452,
            6453
        ]
    },
    {
        "id": 3232,
        "name": "West and Sons",
        "sector": "Luxury",
        "siren": 129195143,
        "results": [
            6454,
            6455
        ]
    },
    {
        "id": 3233,
        "name": "Reynolds-Klein",
        "sector": "Electronic",
        "siren": 136442190,
        "results": [
            6456,
            6457
        ]
    },
    {
        "id": 3234,
        "name": "Ebert-Wilkinson",
        "sector": "Electronic",
        "siren": 153250828,
        "results": [
            6458,
            6459
        ]
    },
    {
        "id": 3235,
        "name": "Veum Inc",
        "sector": "Retail",
        "siren": 189026579,
        "results": [
            6460,
            6461
        ]
    },
    {
        "id": 3236,
        "name": "Kulas, Dickens and Schimmel",
        "sector": "Electronic",
        "siren": 188764097,
        "results": [
            6462,
            6463
        ]
    },
    {
        "id": 3237,
        "name": "Bashirian, Predovic and Thiel",
        "sector": "Services",
        "siren": 174893385,
        "results": [
            6464,
            6465
        ]
    },
    {
        "id": 3238,
        "name": "Dooley, Schmidt and Corwin",
        "sector": "Electronic",
        "siren": 101357409,
        "results": [
            6466,
            6467
        ]
    },
    {
        "id": 3239,
        "name": "Ward-Hilpert",
        "sector": "Retail",
        "siren": 113999321,
        "results": [
            6468,
            6469
        ]
    },
    {
        "id": 3240,
        "name": "Anderson, Kautzer and Osinski",
        "sector": "Electronic",
        "siren": 104595654,
        "results": [
            6470,
            6471
        ]
    },
    {
        "id": 3241,
        "name": "Zemlak-Kertzmann",
        "sector": "Services",
        "siren": 156021041,
        "results": [
            6472,
            6473
        ]
    },
    {
        "id": 3242,
        "name": "Harvey, Ryan and Romaguera",
        "sector": "Energy",
        "siren": 195567025,
        "results": [
            6474,
            6475
        ]
    },
    {
        "id": 3243,
        "name": "Smith LLC",
        "sector": "Energy",
        "siren": 151675230,
        "results": [
            6476,
            6477
        ]
    },
    {
        "id": 3244,
        "name": "Morissette-Bechtelar",
        "sector": "Electronic",
        "siren": 131829498,
        "results": [
            6478,
            6479
        ]
    },
    {
        "id": 3245,
        "name": "Davis Inc",
        "sector": "Luxury",
        "siren": 128915257,
        "results": [
            6480,
            6481
        ]
    },
    {
        "id": 3246,
        "name": "Hagenes-Mertz",
        "sector": "Retail",
        "siren": 132293761,
        "results": [
            6482,
            6483
        ]
    },
    {
        "id": 3247,
        "name": "Spinka-Kulas",
        "sector": "Electronic",
        "siren": 173768175,
        "results": [
            6484,
            6485
        ]
    },
    {
        "id": 3248,
        "name": "Bednar and Sons",
        "sector": "Electronic",
        "siren": 149652676,
        "results": [
            6486,
            6487
        ]
    },
    {
        "id": 3249,
        "name": "Schinner Inc",
        "sector": "Retail",
        "siren": 173498224,
        "results": [
            6488,
            6489
        ]
    },
    {
        "id": 3250,
        "name": "Hickle, Cronin and Rolfson",
        "sector": "Services",
        "siren": 176249839,
        "results": [
            6490,
            6491
        ]
    },
    {
        "id": 3251,
        "name": "Gleason, Will and Fay",
        "sector": "Luxury",
        "siren": 164765227,
        "results": [
            6492,
            6493
        ]
    },
    {
        "id": 3252,
        "name": "Funk Inc",
        "sector": "Retail",
        "siren": 137803307,
        "results": [
            6494,
            6495
        ]
    },
    {
        "id": 3253,
        "name": "Wisoky Inc",
        "sector": "Retail",
        "siren": 121556034,
        "results": [
            6496,
            6497
        ]
    },
    {
        "id": 3254,
        "name": "Weimann-Marvin",
        "sector": "Electronic",
        "siren": 127467544,
        "results": [
            6498,
            6499
        ]
    },
    {
        "id": 3255,
        "name": "Swift LLC",
        "sector": "Electronic",
        "siren": 109568865,
        "results": [
            6500,
            6501
        ]
    },
    {
        "id": 3256,
        "name": "Kovacek Group",
        "sector": "Services",
        "siren": 181313577,
        "results": [
            6502,
            6503
        ]
    },
    {
        "id": 3257,
        "name": "Reynolds, Gislason and Krajcik",
        "sector": "Electronic",
        "siren": 159546715,
        "results": [
            6504,
            6505
        ]
    },
    {
        "id": 3258,
        "name": "McLaughlin, Kozey and Murazik",
        "sector": "Retail",
        "siren": 182618959,
        "results": [
            6506,
            6507
        ]
    },
    {
        "id": 3259,
        "name": "Kovacek, Herzog and Bruen",
        "sector": "Services",
        "siren": 129403218,
        "results": [
            6508,
            6509
        ]
    },
    {
        "id": 3260,
        "name": "Bechtelar-Aufderhar",
        "sector": "Electronic",
        "siren": 154065184,
        "results": [
            6510,
            6511
        ]
    },
    {
        "id": 3261,
        "name": "Lueilwitz-Funk",
        "sector": "Services",
        "siren": 118541345,
        "results": [
            6512,
            6513
        ]
    },
    {
        "id": 3262,
        "name": "Langworth, Bins and Corwin",
        "sector": "Retail",
        "siren": 178527207,
        "results": [
            6514,
            6515
        ]
    },
    {
        "id": 3263,
        "name": "Becker-Abshire",
        "sector": "Services",
        "siren": 188856089,
        "results": [
            6516,
            6517
        ]
    },
    {
        "id": 3264,
        "name": "Blick LLC",
        "sector": "Retail",
        "siren": 128232319,
        "results": [
            6518,
            6519
        ]
    },
    {
        "id": 3265,
        "name": "Herman Group",
        "sector": "Luxury",
        "siren": 142725171,
        "results": [
            6520,
            6521
        ]
    },
    {
        "id": 3266,
        "name": "Willms-Harvey",
        "sector": "Retail",
        "siren": 135901454,
        "results": [
            6522,
            6523
        ]
    },
    {
        "id": 3267,
        "name": "Olson-Rowe",
        "sector": "Electronic",
        "siren": 113318308,
        "results": [
            6524,
            6525
        ]
    },
    {
        "id": 3268,
        "name": "Nicolas, Mante and Abbott",
        "sector": "Energy",
        "siren": 189491851,
        "results": [
            6526,
            6527
        ]
    },
    {
        "id": 3269,
        "name": "Koch-Grant",
        "sector": "Energy",
        "siren": 110261861,
        "results": [
            6528,
            6529
        ]
    },
    {
        "id": 3270,
        "name": "Bechtelar, Marks and Jast",
        "sector": "Services",
        "siren": 159467015,
        "results": [
            6530,
            6531
        ]
    },
    {
        "id": 3271,
        "name": "Senger and Sons",
        "sector": "Services",
        "siren": 196046815,
        "results": [
            6532,
            6533
        ]
    },
    {
        "id": 3272,
        "name": "Spinka Group",
        "sector": "Electronic",
        "siren": 119044687,
        "results": [
            6534,
            6535
        ]
    },
    {
        "id": 3273,
        "name": "Hessel, Zulauf and Weissnat",
        "sector": "Energy",
        "siren": 168259446,
        "results": [
            6536,
            6537
        ]
    },
    {
        "id": 3274,
        "name": "Keebler-Marvin",
        "sector": "Retail",
        "siren": 199067048,
        "results": [
            6538,
            6539
        ]
    },
    {
        "id": 3275,
        "name": "Williamson-Thompson",
        "sector": "Retail",
        "siren": 162996923,
        "results": [
            6540,
            6541
        ]
    },
    {
        "id": 3276,
        "name": "Thompson, Willms and Lueilwitz",
        "sector": "Luxury",
        "siren": 134457607,
        "results": [
            6542,
            6543
        ]
    },
    {
        "id": 3277,
        "name": "Littel-Von",
        "sector": "Luxury",
        "siren": 190435864,
        "results": [
            6544,
            6545
        ]
    },
    {
        "id": 3278,
        "name": "O'Keefe Inc",
        "sector": "Services",
        "siren": 122025835,
        "results": [
            6546,
            6547
        ]
    },
    {
        "id": 3279,
        "name": "Huels and Sons",
        "sector": "Services",
        "siren": 100742639,
        "results": [
            6548,
            6549
        ]
    },
    {
        "id": 3280,
        "name": "Rice, Mayert and Wisoky",
        "sector": "Electronic",
        "siren": 158220536,
        "results": [
            6550,
            6551
        ]
    },
    {
        "id": 3281,
        "name": "Spinka LLC",
        "sector": "Retail",
        "siren": 116908228,
        "results": [
            6552,
            6553
        ]
    },
    {
        "id": 3282,
        "name": "Jones Inc",
        "sector": "Services",
        "siren": 129953296,
        "results": [
            6554,
            6555
        ]
    },
    {
        "id": 3283,
        "name": "Gerhold, McLaughlin and Leuschke",
        "sector": "Services",
        "siren": 132966531,
        "results": [
            6556,
            6557
        ]
    },
    {
        "id": 3284,
        "name": "Dooley-Turcotte",
        "sector": "Luxury",
        "siren": 179279468,
        "results": [
            6558,
            6559
        ]
    },
    {
        "id": 3285,
        "name": "Carroll, Rippin and Corkery",
        "sector": "Retail",
        "siren": 129087805,
        "results": [
            6560,
            6561
        ]
    },
    {
        "id": 3286,
        "name": "Bins and Sons",
        "sector": "Luxury",
        "siren": 175820542,
        "results": [
            6562,
            6563
        ]
    },
    {
        "id": 3287,
        "name": "Lowe, Schuster and Hartmann",
        "sector": "Energy",
        "siren": 154756281,
        "results": [
            6564,
            6565
        ]
    },
    {
        "id": 3288,
        "name": "Runte LLC",
        "sector": "Services",
        "siren": 170053801,
        "results": [
            6566,
            6567
        ]
    },
    {
        "id": 3289,
        "name": "Wunsch, Beatty and Rogahn",
        "sector": "Electronic",
        "siren": 108707894,
        "results": [
            6568,
            6569
        ]
    },
    {
        "id": 3290,
        "name": "Ryan, Pfannerstill and Stroman",
        "sector": "Luxury",
        "siren": 148513566,
        "results": [
            6570,
            6571
        ]
    },
    {
        "id": 3291,
        "name": "Lind, Windler and Nienow",
        "sector": "Retail",
        "siren": 194799851,
        "results": [
            6572,
            6573
        ]
    },
    {
        "id": 3292,
        "name": "O'Connell LLC",
        "sector": "Retail",
        "siren": 146392762,
        "results": [
            6574,
            6575
        ]
    },
    {
        "id": 3293,
        "name": "Paucek and Sons",
        "sector": "Luxury",
        "siren": 100193913,
        "results": [
            6576,
            6577
        ]
    },
    {
        "id": 3294,
        "name": "Champlin-Bergstrom",
        "sector": "Electronic",
        "siren": 103878945,
        "results": [
            6578,
            6579
        ]
    },
    {
        "id": 3295,
        "name": "Cronin Group",
        "sector": "Energy",
        "siren": 169765022,
        "results": [
            6580,
            6581
        ]
    },
    {
        "id": 3296,
        "name": "Kris-Hartmann",
        "sector": "Energy",
        "siren": 158608930,
        "results": [
            6582,
            6583
        ]
    },
    {
        "id": 3297,
        "name": "Hansen, Hamill and Volkman",
        "sector": "Services",
        "siren": 171744012,
        "results": [
            6584,
            6585
        ]
    },
    {
        "id": 3298,
        "name": "Waters, Sporer and Hodkiewicz",
        "sector": "Retail",
        "siren": 114491510,
        "results": [
            6586,
            6587
        ]
    },
    {
        "id": 3299,
        "name": "Haag, Turcotte and Rodriguez",
        "sector": "Services",
        "siren": 135599618,
        "results": [
            6588,
            6589
        ]
    },
    {
        "id": 3300,
        "name": "Koch and Sons",
        "sector": "Retail",
        "siren": 129281145,
        "results": [
            6590,
            6591
        ]
    },
    {
        "id": 3301,
        "name": "Abbott-Orn",
        "sector": "Services",
        "siren": 175574586,
        "results": [
            6592,
            6593
        ]
    },
    {
        "id": 3302,
        "name": "Kutch, Hammes and Wolff",
        "sector": "Energy",
        "siren": 125726321,
        "results": [
            6594,
            6595
        ]
    },
    {
        "id": 3303,
        "name": "Towne, Robel and McClure",
        "sector": "Luxury",
        "siren": 189818068,
        "results": [
            6596,
            6597
        ]
    },
    {
        "id": 3304,
        "name": "Schoen Group",
        "sector": "Services",
        "siren": 104760922,
        "results": [
            6598,
            6599
        ]
    },
    {
        "id": 3305,
        "name": "Dicki Group",
        "sector": "Energy",
        "siren": 194491506,
        "results": [
            6600,
            6601
        ]
    },
    {
        "id": 3306,
        "name": "Okuneva, Tromp and Cole",
        "sector": "Services",
        "siren": 143821444,
        "results": [
            6602,
            6603
        ]
    },
    {
        "id": 3307,
        "name": "Moen-Kshlerin",
        "sector": "Retail",
        "siren": 116169729,
        "results": [
            6604,
            6605
        ]
    },
    {
        "id": 3308,
        "name": "Runte Inc",
        "sector": "Luxury",
        "siren": 129549741,
        "results": [
            6606,
            6607
        ]
    },
    {
        "id": 3309,
        "name": "O'Connell, Nolan and Beer",
        "sector": "Energy",
        "siren": 192563933,
        "results": [
            6608,
            6609
        ]
    },
    {
        "id": 3310,
        "name": "Conn Group",
        "sector": "Electronic",
        "siren": 110690030,
        "results": [
            6610,
            6611
        ]
    },
    {
        "id": 3311,
        "name": "Koch, Ratke and Hyatt",
        "sector": "Electronic",
        "siren": 149194214,
        "results": [
            6612,
            6613
        ]
    },
    {
        "id": 3312,
        "name": "O'Reilly-O'Conner",
        "sector": "Services",
        "siren": 171094192,
        "results": [
            6614,
            6615
        ]
    },
    {
        "id": 3313,
        "name": "Kuhic, Reichel and Hilpert",
        "sector": "Services",
        "siren": 183568091,
        "results": [
            6616,
            6617
        ]
    },
    {
        "id": 3314,
        "name": "Oberbrunner-Lebsack",
        "sector": "Energy",
        "siren": 111910705,
        "results": [
            6618,
            6619
        ]
    },
    {
        "id": 3315,
        "name": "McCullough-Adams",
        "sector": "Retail",
        "siren": 184916496,
        "results": [
            6620,
            6621
        ]
    },
    {
        "id": 3316,
        "name": "Buckridge-Aufderhar",
        "sector": "Retail",
        "siren": 180781481,
        "results": [
            6622,
            6623
        ]
    },
    {
        "id": 3317,
        "name": "Maggio Inc",
        "sector": "Luxury",
        "siren": 123066808,
        "results": [
            6624,
            6625
        ]
    },
    {
        "id": 3318,
        "name": "Wuckert, Thiel and Kunze",
        "sector": "Energy",
        "siren": 163452953,
        "results": [
            6626,
            6627
        ]
    },
    {
        "id": 3319,
        "name": "Murray LLC",
        "sector": "Luxury",
        "siren": 159304380,
        "results": [
            6628,
            6629
        ]
    },
    {
        "id": 3320,
        "name": "Feest LLC",
        "sector": "Services",
        "siren": 117304068,
        "results": [
            6630,
            6631
        ]
    },
    {
        "id": 3321,
        "name": "Altenwerth and Sons",
        "sector": "Luxury",
        "siren": 125735323,
        "results": [
            6632,
            6633
        ]
    },
    {
        "id": 3322,
        "name": "Kovacek, Kreiger and Turcotte",
        "sector": "Services",
        "siren": 170068224,
        "results": [
            6634,
            6635
        ]
    },
    {
        "id": 3323,
        "name": "Vandervort-Hauck",
        "sector": "Energy",
        "siren": 117801397,
        "results": [
            6636,
            6637
        ]
    },
    {
        "id": 3324,
        "name": "Rice Group",
        "sector": "Electronic",
        "siren": 142836550,
        "results": [
            6638,
            6639
        ]
    },
    {
        "id": 3325,
        "name": "Brekke Group",
        "sector": "Luxury",
        "siren": 173580801,
        "results": [
            6640,
            6641
        ]
    },
    {
        "id": 3326,
        "name": "Brekke and Sons",
        "sector": "Electronic",
        "siren": 152758790,
        "results": [
            6642,
            6643
        ]
    },
    {
        "id": 3327,
        "name": "Will Inc",
        "sector": "Energy",
        "siren": 178155597,
        "results": [
            6644,
            6645
        ]
    },
    {
        "id": 3328,
        "name": "Mitchell, Hickle and Champlin",
        "sector": "Luxury",
        "siren": 155854012,
        "results": [
            6646,
            6647
        ]
    },
    {
        "id": 3329,
        "name": "O'Reilly-Nienow",
        "sector": "Retail",
        "siren": 112351723,
        "results": [
            6648,
            6649
        ]
    },
    {
        "id": 3330,
        "name": "Harber-Kshlerin",
        "sector": "Luxury",
        "siren": 180653331,
        "results": [
            6650,
            6651
        ]
    },
    {
        "id": 3331,
        "name": "Dicki-MacGyver",
        "sector": "Electronic",
        "siren": 138541953,
        "results": [
            6652,
            6653
        ]
    },
    {
        "id": 3332,
        "name": "Walker, Bashirian and Erdman",
        "sector": "Electronic",
        "siren": 154147387,
        "results": [
            6654,
            6655
        ]
    },
    {
        "id": 3333,
        "name": "Nienow, Armstrong and Klein",
        "sector": "Services",
        "siren": 126399885,
        "results": [
            6656,
            6657
        ]
    },
    {
        "id": 3334,
        "name": "Mills, Morissette and Hand",
        "sector": "Energy",
        "siren": 103861247,
        "results": [
            6658,
            6659
        ]
    },
    {
        "id": 3335,
        "name": "Predovic and Sons",
        "sector": "Services",
        "siren": 151762755,
        "results": [
            6660,
            6661
        ]
    },
    {
        "id": 3336,
        "name": "Cole, Tromp and Lehner",
        "sector": "Energy",
        "siren": 146828326,
        "results": [
            6662,
            6663
        ]
    },
    {
        "id": 3337,
        "name": "Little LLC",
        "sector": "Energy",
        "siren": 119931553,
        "results": [
            6664,
            6665
        ]
    },
    {
        "id": 3338,
        "name": "Labadie, Mohr and Friesen",
        "sector": "Energy",
        "siren": 171769085,
        "results": [
            6666,
            6667
        ]
    },
    {
        "id": 3339,
        "name": "Bogisich-Quigley",
        "sector": "Luxury",
        "siren": 182992869,
        "results": [
            6668,
            6669
        ]
    },
    {
        "id": 3340,
        "name": "Abernathy and Sons",
        "sector": "Services",
        "siren": 144183923,
        "results": [
            6670,
            6671
        ]
    },
    {
        "id": 3341,
        "name": "Schmeler-Langworth",
        "sector": "Services",
        "siren": 129156724,
        "results": [
            6672,
            6673
        ]
    },
    {
        "id": 3342,
        "name": "Schultz, Dicki and Hoppe",
        "sector": "Retail",
        "siren": 115897770,
        "results": [
            6674,
            6675
        ]
    },
    {
        "id": 3343,
        "name": "D'Amore-Koch",
        "sector": "Luxury",
        "siren": 150851464,
        "results": [
            6676,
            6677
        ]
    },
    {
        "id": 3344,
        "name": "Fahey-Hayes",
        "sector": "Energy",
        "siren": 146839022,
        "results": [
            6678,
            6679
        ]
    },
    {
        "id": 3345,
        "name": "Wolff LLC",
        "sector": "Luxury",
        "siren": 143686502,
        "results": [
            6680,
            6681
        ]
    },
    {
        "id": 3346,
        "name": "McKenzie LLC",
        "sector": "Luxury",
        "siren": 103950268,
        "results": [
            6682,
            6683
        ]
    },
    {
        "id": 3347,
        "name": "Jacobson-Hammes",
        "sector": "Services",
        "siren": 193756088,
        "results": [
            6684,
            6685
        ]
    },
    {
        "id": 3348,
        "name": "Collins Inc",
        "sector": "Electronic",
        "siren": 197730432,
        "results": [
            6686,
            6687
        ]
    },
    {
        "id": 3349,
        "name": "Watsica-Orn",
        "sector": "Retail",
        "siren": 160228726,
        "results": [
            6688,
            6689
        ]
    },
    {
        "id": 3350,
        "name": "Bode, Glover and Kuhn",
        "sector": "Retail",
        "siren": 129048235,
        "results": [
            6690,
            6691
        ]
    },
    {
        "id": 3351,
        "name": "Veum Group",
        "sector": "Energy",
        "siren": 137631772,
        "results": [
            6692,
            6693
        ]
    },
    {
        "id": 3352,
        "name": "Blanda LLC",
        "sector": "Energy",
        "siren": 195898910,
        "results": [
            6694,
            6695
        ]
    },
    {
        "id": 3353,
        "name": "Ortiz-Swaniawski",
        "sector": "Services",
        "siren": 193544778,
        "results": [
            6696,
            6697
        ]
    },
    {
        "id": 3354,
        "name": "Cassin-Douglas",
        "sector": "Electronic",
        "siren": 182212539,
        "results": [
            6698,
            6699
        ]
    },
    {
        "id": 3355,
        "name": "Nader-Hudson",
        "sector": "Retail",
        "siren": 185571783,
        "results": [
            6700,
            6701
        ]
    },
    {
        "id": 3356,
        "name": "Koepp and Sons",
        "sector": "Retail",
        "siren": 111728197,
        "results": [
            6702,
            6703
        ]
    },
    {
        "id": 3357,
        "name": "Williamson LLC",
        "sector": "Services",
        "siren": 177383374,
        "results": [
            6704,
            6705
        ]
    },
    {
        "id": 3358,
        "name": "Predovic Group",
        "sector": "Services",
        "siren": 197297674,
        "results": [
            6706,
            6707
        ]
    },
    {
        "id": 3359,
        "name": "Gottlieb Group",
        "sector": "Luxury",
        "siren": 133579118,
        "results": [
            6708,
            6709
        ]
    },
    {
        "id": 3360,
        "name": "Bode-Turner",
        "sector": "Services",
        "siren": 115317245,
        "results": [
            6710,
            6711
        ]
    },
    {
        "id": 3361,
        "name": "Weber Group",
        "sector": "Retail",
        "siren": 199897529,
        "results": [
            6712,
            6713
        ]
    },
    {
        "id": 3362,
        "name": "Carter-Rogahn",
        "sector": "Energy",
        "siren": 104851838,
        "results": [
            6714,
            6715
        ]
    },
    {
        "id": 3363,
        "name": "Sipes, Reilly and Schmitt",
        "sector": "Electronic",
        "siren": 145286636,
        "results": [
            6716,
            6717
        ]
    },
    {
        "id": 3364,
        "name": "Cummings-Hilpert",
        "sector": "Services",
        "siren": 139222209,
        "results": [
            6718,
            6719
        ]
    },
    {
        "id": 3365,
        "name": "Kovacek-Feest",
        "sector": "Services",
        "siren": 105730848,
        "results": [
            6720,
            6721
        ]
    },
    {
        "id": 3366,
        "name": "Beahan, Mitchell and Haley",
        "sector": "Electronic",
        "siren": 108079099,
        "results": [
            6722,
            6723
        ]
    },
    {
        "id": 3367,
        "name": "Labadie, Turcotte and Reinger",
        "sector": "Electronic",
        "siren": 131235804,
        "results": [
            6724,
            6725
        ]
    },
    {
        "id": 3368,
        "name": "Kovacek Inc",
        "sector": "Electronic",
        "siren": 175592282,
        "results": [
            6726,
            6727
        ]
    },
    {
        "id": 3369,
        "name": "Schultz Group",
        "sector": "Retail",
        "siren": 150254209,
        "results": [
            6728,
            6729
        ]
    },
    {
        "id": 3370,
        "name": "Gerhold, Zulauf and Boehm",
        "sector": "Energy",
        "siren": 134724077,
        "results": [
            6730,
            6731
        ]
    },
    {
        "id": 3371,
        "name": "Gulgowski-Balistreri",
        "sector": "Luxury",
        "siren": 137824570,
        "results": [
            6732,
            6733
        ]
    },
    {
        "id": 3372,
        "name": "Howe LLC",
        "sector": "Services",
        "siren": 165849742,
        "results": [
            6734,
            6735
        ]
    },
    {
        "id": 3373,
        "name": "Weissnat, Johnston and Fahey",
        "sector": "Luxury",
        "siren": 107804190,
        "results": [
            6736,
            6737
        ]
    },
    {
        "id": 3374,
        "name": "Kerluke, Dibbert and Farrell",
        "sector": "Services",
        "siren": 128396917,
        "results": [
            6738,
            6739
        ]
    },
    {
        "id": 3375,
        "name": "Bechtelar-Casper",
        "sector": "Energy",
        "siren": 165563519,
        "results": [
            6740,
            6741
        ]
    },
    {
        "id": 3376,
        "name": "Fahey, Kemmer and Kuhn",
        "sector": "Services",
        "siren": 102140674,
        "results": [
            6742,
            6743
        ]
    },
    {
        "id": 3377,
        "name": "Kuphal LLC",
        "sector": "Energy",
        "siren": 136541629,
        "results": [
            6744,
            6745
        ]
    },
    {
        "id": 3378,
        "name": "Conn and Sons",
        "sector": "Electronic",
        "siren": 172465765,
        "results": [
            6746,
            6747
        ]
    },
    {
        "id": 3379,
        "name": "Kohler, Muller and Walker",
        "sector": "Energy",
        "siren": 136004178,
        "results": [
            6748,
            6749
        ]
    },
    {
        "id": 3380,
        "name": "Armstrong-Lynch",
        "sector": "Luxury",
        "siren": 194327179,
        "results": [
            6750,
            6751
        ]
    },
    {
        "id": 3381,
        "name": "Wisozk, Hills and Bins",
        "sector": "Electronic",
        "siren": 179324963,
        "results": [
            6752,
            6753
        ]
    },
    {
        "id": 3382,
        "name": "Miller, Marquardt and Ryan",
        "sector": "Retail",
        "siren": 124713342,
        "results": [
            6754,
            6755
        ]
    },
    {
        "id": 3383,
        "name": "Leannon, Toy and Rogahn",
        "sector": "Services",
        "siren": 191122787,
        "results": [
            6756,
            6757
        ]
    },
    {
        "id": 3384,
        "name": "Cummings and Sons",
        "sector": "Luxury",
        "siren": 199090646,
        "results": [
            6758,
            6759
        ]
    },
    {
        "id": 3385,
        "name": "Heaney, Wuckert and Aufderhar",
        "sector": "Energy",
        "siren": 149129202,
        "results": [
            6760,
            6761
        ]
    },
    {
        "id": 3386,
        "name": "Collins Inc",
        "sector": "Energy",
        "siren": 191251696,
        "results": [
            6762,
            6763
        ]
    },
    {
        "id": 3387,
        "name": "White Inc",
        "sector": "Luxury",
        "siren": 158546353,
        "results": [
            6764,
            6765
        ]
    },
    {
        "id": 3388,
        "name": "Hodkiewicz, Jaskolski and Jones",
        "sector": "Services",
        "siren": 120164334,
        "results": [
            6766,
            6767
        ]
    },
    {
        "id": 3389,
        "name": "Kshlerin-Sipes",
        "sector": "Luxury",
        "siren": 114501607,
        "results": [
            6768,
            6769
        ]
    },
    {
        "id": 3390,
        "name": "Monahan, Block and Predovic",
        "sector": "Electronic",
        "siren": 153635299,
        "results": [
            6770,
            6771
        ]
    },
    {
        "id": 3391,
        "name": "Denesik-Klein",
        "sector": "Services",
        "siren": 168031548,
        "results": [
            6772,
            6773
        ]
    },
    {
        "id": 3392,
        "name": "Schulist LLC",
        "sector": "Retail",
        "siren": 125705383,
        "results": [
            6774,
            6775
        ]
    },
    {
        "id": 3393,
        "name": "Torphy-Daniel",
        "sector": "Retail",
        "siren": 196118686,
        "results": [
            6776,
            6777
        ]
    },
    {
        "id": 3394,
        "name": "Bradtke LLC",
        "sector": "Services",
        "siren": 189365994,
        "results": [
            6778,
            6779
        ]
    },
    {
        "id": 3395,
        "name": "Gerlach-Krajcik",
        "sector": "Energy",
        "siren": 186141734,
        "results": [
            6780,
            6781
        ]
    },
    {
        "id": 3396,
        "name": "Mohr, Upton and Wisoky",
        "sector": "Services",
        "siren": 140703976,
        "results": [
            6782,
            6783
        ]
    },
    {
        "id": 3397,
        "name": "Hane-Stiedemann",
        "sector": "Electronic",
        "siren": 132177139,
        "results": [
            6784,
            6785
        ]
    },
    {
        "id": 3398,
        "name": "Veum, Kassulke and Harvey",
        "sector": "Electronic",
        "siren": 138849076,
        "results": [
            6786,
            6787
        ]
    },
    {
        "id": 3399,
        "name": "Buckridge Group",
        "sector": "Energy",
        "siren": 122989323,
        "results": [
            6788,
            6789
        ]
    },
    {
        "id": 3400,
        "name": "Brekke, Lebsack and Schoen",
        "sector": "Energy",
        "siren": 175981544,
        "results": [
            6790,
            6791
        ]
    },
    {
        "id": 3401,
        "name": "Donnelly LLC",
        "sector": "Luxury",
        "siren": 176077969,
        "results": [
            6792,
            6793
        ]
    },
    {
        "id": 3402,
        "name": "Ernser Group",
        "sector": "Retail",
        "siren": 180037849,
        "results": [
            6794,
            6795
        ]
    },
    {
        "id": 3403,
        "name": "Daugherty-Hudson",
        "sector": "Retail",
        "siren": 199361427,
        "results": [
            6796,
            6797
        ]
    },
    {
        "id": 3404,
        "name": "Hermann, Paucek and Sawayn",
        "sector": "Retail",
        "siren": 177238411,
        "results": [
            6798,
            6799
        ]
    },
    {
        "id": 3405,
        "name": "Rice, Friesen and Shields",
        "sector": "Services",
        "siren": 124413494,
        "results": [
            6800,
            6801
        ]
    },
    {
        "id": 3406,
        "name": "Toy-Kertzmann",
        "sector": "Retail",
        "siren": 149448263,
        "results": [
            6802,
            6803
        ]
    },
    {
        "id": 3407,
        "name": "Kunze Inc",
        "sector": "Retail",
        "siren": 161347387,
        "results": [
            6804,
            6805
        ]
    },
    {
        "id": 3408,
        "name": "Bode-Moen",
        "sector": "Energy",
        "siren": 141141391,
        "results": [
            6806,
            6807
        ]
    },
    {
        "id": 3409,
        "name": "DuBuque-Hamill",
        "sector": "Services",
        "siren": 101998355,
        "results": [
            6808,
            6809
        ]
    },
    {
        "id": 3410,
        "name": "Hyatt and Sons",
        "sector": "Electronic",
        "siren": 111079941,
        "results": [
            6810,
            6811
        ]
    },
    {
        "id": 3411,
        "name": "Spinka, Tromp and Trantow",
        "sector": "Luxury",
        "siren": 170845536,
        "results": [
            6812,
            6813
        ]
    },
    {
        "id": 3412,
        "name": "Cassin Inc",
        "sector": "Retail",
        "siren": 150880034,
        "results": [
            6814,
            6815
        ]
    },
    {
        "id": 3413,
        "name": "Flatley Inc",
        "sector": "Services",
        "siren": 193533574,
        "results": [
            6816,
            6817
        ]
    },
    {
        "id": 3414,
        "name": "Lind, Bayer and Gulgowski",
        "sector": "Retail",
        "siren": 177474735,
        "results": [
            6818,
            6819
        ]
    },
    {
        "id": 3415,
        "name": "Turner, Turner and Corkery",
        "sector": "Services",
        "siren": 140655908,
        "results": [
            6820,
            6821
        ]
    },
    {
        "id": 3416,
        "name": "Gulgowski LLC",
        "sector": "Services",
        "siren": 125233111,
        "results": [
            6822,
            6823
        ]
    },
    {
        "id": 3417,
        "name": "Welch Group",
        "sector": "Electronic",
        "siren": 151857807,
        "results": [
            6824,
            6825
        ]
    },
    {
        "id": 3418,
        "name": "Abshire-Schinner",
        "sector": "Electronic",
        "siren": 146318708,
        "results": [
            6826,
            6827
        ]
    },
    {
        "id": 3419,
        "name": "Bayer, McLaughlin and Morar",
        "sector": "Luxury",
        "siren": 190330748,
        "results": [
            6828,
            6829
        ]
    },
    {
        "id": 3420,
        "name": "Padberg-Gulgowski",
        "sector": "Luxury",
        "siren": 189945549,
        "results": [
            6830,
            6831
        ]
    },
    {
        "id": 3421,
        "name": "Kautzer LLC",
        "sector": "Services",
        "siren": 198644582,
        "results": [
            6832,
            6833
        ]
    },
    {
        "id": 3422,
        "name": "Paucek Inc",
        "sector": "Retail",
        "siren": 170937792,
        "results": [
            6834,
            6835
        ]
    },
    {
        "id": 3423,
        "name": "Jacobi, Orn and McDermott",
        "sector": "Energy",
        "siren": 169474929,
        "results": [
            6836,
            6837
        ]
    },
    {
        "id": 3424,
        "name": "Robel Inc",
        "sector": "Electronic",
        "siren": 140027586,
        "results": [
            6838,
            6839
        ]
    },
    {
        "id": 3425,
        "name": "Conroy, Barton and Bruen",
        "sector": "Electronic",
        "siren": 183593664,
        "results": [
            6840,
            6841
        ]
    },
    {
        "id": 3426,
        "name": "Wilkinson, Kozey and Haley",
        "sector": "Electronic",
        "siren": 129428633,
        "results": [
            6842,
            6843
        ]
    },
    {
        "id": 3427,
        "name": "O'Reilly LLC",
        "sector": "Services",
        "siren": 141328365,
        "results": [
            6844,
            6845
        ]
    },
    {
        "id": 3428,
        "name": "Herman Inc",
        "sector": "Energy",
        "siren": 139037208,
        "results": [
            6846,
            6847
        ]
    },
    {
        "id": 3429,
        "name": "Labadie-Upton",
        "sector": "Energy",
        "siren": 159714970,
        "results": [
            6848,
            6849
        ]
    },
    {
        "id": 3430,
        "name": "Quitzon-Feeney",
        "sector": "Luxury",
        "siren": 100845985,
        "results": [
            6850,
            6851
        ]
    },
    {
        "id": 3431,
        "name": "Bogan, Weber and Welch",
        "sector": "Services",
        "siren": 143462248,
        "results": [
            6852,
            6853
        ]
    },
    {
        "id": 3432,
        "name": "Waelchi LLC",
        "sector": "Services",
        "siren": 160796992,
        "results": [
            6854,
            6855
        ]
    },
    {
        "id": 3433,
        "name": "Kuhlman, Kuhic and Smitham",
        "sector": "Luxury",
        "siren": 107650092,
        "results": [
            6856,
            6857
        ]
    },
    {
        "id": 3434,
        "name": "Adams and Sons",
        "sector": "Energy",
        "siren": 125941439,
        "results": [
            6858,
            6859
        ]
    },
    {
        "id": 3435,
        "name": "Hagenes Group",
        "sector": "Electronic",
        "siren": 175355707,
        "results": [
            6860,
            6861
        ]
    },
    {
        "id": 3436,
        "name": "Farrell, Borer and Paucek",
        "sector": "Energy",
        "siren": 108313700,
        "results": [
            6862,
            6863
        ]
    },
    {
        "id": 3437,
        "name": "Borer-Balistreri",
        "sector": "Services",
        "siren": 162322494,
        "results": [
            6864,
            6865
        ]
    },
    {
        "id": 3438,
        "name": "Carroll, Kozey and Gleason",
        "sector": "Energy",
        "siren": 126999678,
        "results": [
            6866,
            6867
        ]
    },
    {
        "id": 3439,
        "name": "Braun-Dietrich",
        "sector": "Luxury",
        "siren": 131452203,
        "results": [
            6868,
            6869
        ]
    },
    {
        "id": 3440,
        "name": "Hammes and Sons",
        "sector": "Electronic",
        "siren": 149392207,
        "results": [
            6870,
            6871
        ]
    },
    {
        "id": 3441,
        "name": "Johnson, Pollich and Wiza",
        "sector": "Services",
        "siren": 114366317,
        "results": [
            6872,
            6873
        ]
    },
    {
        "id": 3442,
        "name": "Hodkiewicz-Koelpin",
        "sector": "Services",
        "siren": 132241605,
        "results": [
            6874,
            6875
        ]
    },
    {
        "id": 3443,
        "name": "Thiel, Barrows and Kunde",
        "sector": "Retail",
        "siren": 109625682,
        "results": [
            6876,
            6877
        ]
    },
    {
        "id": 3444,
        "name": "Rolfson Inc",
        "sector": "Luxury",
        "siren": 183804774,
        "results": [
            6878,
            6879
        ]
    },
    {
        "id": 3445,
        "name": "Dooley-Gaylord",
        "sector": "Luxury",
        "siren": 150278344,
        "results": [
            6880,
            6881
        ]
    },
    {
        "id": 3446,
        "name": "Reichel, Rolfson and Langworth",
        "sector": "Electronic",
        "siren": 167947171,
        "results": [
            6882,
            6883
        ]
    },
    {
        "id": 3447,
        "name": "Auer and Sons",
        "sector": "Luxury",
        "siren": 134489702,
        "results": [
            6884,
            6885
        ]
    },
    {
        "id": 3448,
        "name": "Purdy LLC",
        "sector": "Energy",
        "siren": 180621422,
        "results": [
            6886,
            6887
        ]
    },
    {
        "id": 3449,
        "name": "Koss, Bosco and Heathcote",
        "sector": "Retail",
        "siren": 149391344,
        "results": [
            6888,
            6889
        ]
    },
    {
        "id": 3450,
        "name": "Hackett-Ferry",
        "sector": "Retail",
        "siren": 116123081,
        "results": [
            6890,
            6891
        ]
    },
    {
        "id": 3451,
        "name": "Willms Inc",
        "sector": "Retail",
        "siren": 188339393,
        "results": [
            6892,
            6893
        ]
    },
    {
        "id": 3452,
        "name": "Reilly-Watsica",
        "sector": "Retail",
        "siren": 113573152,
        "results": [
            6894,
            6895
        ]
    },
    {
        "id": 3453,
        "name": "Rohan Group",
        "sector": "Electronic",
        "siren": 143298703,
        "results": [
            6896,
            6897
        ]
    },
    {
        "id": 3454,
        "name": "Maggio, Kshlerin and Graham",
        "sector": "Services",
        "siren": 181598610,
        "results": [
            6898,
            6899
        ]
    },
    {
        "id": 3455,
        "name": "Jacobi Inc",
        "sector": "Electronic",
        "siren": 138093371,
        "results": [
            6900,
            6901
        ]
    },
    {
        "id": 3456,
        "name": "Emmerich, Stokes and Keebler",
        "sector": "Retail",
        "siren": 190101087,
        "results": [
            6902,
            6903
        ]
    },
    {
        "id": 3457,
        "name": "Roberts Inc",
        "sector": "Luxury",
        "siren": 192243537,
        "results": [
            6904,
            6905
        ]
    },
    {
        "id": 3458,
        "name": "Eichmann-Fadel",
        "sector": "Retail",
        "siren": 134279961,
        "results": [
            6906,
            6907
        ]
    },
    {
        "id": 3459,
        "name": "Gutmann and Sons",
        "sector": "Electronic",
        "siren": 174001368,
        "results": [
            6908,
            6909
        ]
    },
    {
        "id": 3460,
        "name": "Harvey Inc",
        "sector": "Retail",
        "siren": 139096852,
        "results": [
            6910,
            6911
        ]
    },
    {
        "id": 3461,
        "name": "Turner, Gleichner and Mitchell",
        "sector": "Luxury",
        "siren": 137276242,
        "results": [
            6912,
            6913
        ]
    },
    {
        "id": 3462,
        "name": "Smith LLC",
        "sector": "Energy",
        "siren": 136727252,
        "results": [
            6914,
            6915
        ]
    },
    {
        "id": 3463,
        "name": "Lemke-Medhurst",
        "sector": "Services",
        "siren": 154580576,
        "results": [
            6916,
            6917
        ]
    },
    {
        "id": 3464,
        "name": "Jacobi Group",
        "sector": "Luxury",
        "siren": 142191189,
        "results": [
            6918,
            6919
        ]
    },
    {
        "id": 3465,
        "name": "Hettinger, Robel and Johnston",
        "sector": "Luxury",
        "siren": 127038881,
        "results": [
            6920,
            6921
        ]
    },
    {
        "id": 3466,
        "name": "Kunze LLC",
        "sector": "Services",
        "siren": 158963137,
        "results": [
            6922,
            6923
        ]
    },
    {
        "id": 3467,
        "name": "Kassulke, Little and Carroll",
        "sector": "Services",
        "siren": 196815640,
        "results": [
            6924,
            6925
        ]
    },
    {
        "id": 3468,
        "name": "Cummerata and Sons",
        "sector": "Retail",
        "siren": 179066630,
        "results": [
            6926,
            6927
        ]
    },
    {
        "id": 3469,
        "name": "Bartoletti and Sons",
        "sector": "Luxury",
        "siren": 188770598,
        "results": [
            6928,
            6929
        ]
    },
    {
        "id": 3470,
        "name": "Schultz-Herman",
        "sector": "Services",
        "siren": 122021430,
        "results": [
            6930,
            6931
        ]
    },
    {
        "id": 3471,
        "name": "Purdy-Will",
        "sector": "Energy",
        "siren": 161364293,
        "results": [
            6932,
            6933
        ]
    },
    {
        "id": 3472,
        "name": "Ferry, Bergnaum and Cartwright",
        "sector": "Services",
        "siren": 129677047,
        "results": [
            6934,
            6935
        ]
    },
    {
        "id": 3473,
        "name": "Gorczany Inc",
        "sector": "Retail",
        "siren": 130169872,
        "results": [
            6936,
            6937
        ]
    },
    {
        "id": 3474,
        "name": "Schinner-Pfannerstill",
        "sector": "Energy",
        "siren": 196335109,
        "results": [
            6938,
            6939
        ]
    },
    {
        "id": 3475,
        "name": "Spencer Inc",
        "sector": "Electronic",
        "siren": 140329966,
        "results": [
            6940,
            6941
        ]
    },
    {
        "id": 3476,
        "name": "Prosacco, Harvey and Lang",
        "sector": "Services",
        "siren": 152912105,
        "results": [
            6942,
            6943
        ]
    },
    {
        "id": 3477,
        "name": "Price, Runte and Mraz",
        "sector": "Energy",
        "siren": 106222759,
        "results": [
            6944,
            6945
        ]
    },
    {
        "id": 3478,
        "name": "Willms, Roob and Ferry",
        "sector": "Electronic",
        "siren": 121080673,
        "results": [
            6946,
            6947
        ]
    },
    {
        "id": 3479,
        "name": "Stark and Sons",
        "sector": "Services",
        "siren": 143858510,
        "results": [
            6948,
            6949
        ]
    },
    {
        "id": 3480,
        "name": "Walter Group",
        "sector": "Energy",
        "siren": 186991596,
        "results": [
            6950,
            6951
        ]
    },
    {
        "id": 3481,
        "name": "Crooks-Quigley",
        "sector": "Energy",
        "siren": 116708593,
        "results": [
            6952,
            6953
        ]
    },
    {
        "id": 3482,
        "name": "Torp Group",
        "sector": "Electronic",
        "siren": 182277819,
        "results": [
            6954,
            6955
        ]
    },
    {
        "id": 3483,
        "name": "Rosenbaum-Lemke",
        "sector": "Energy",
        "siren": 165374644,
        "results": [
            6956,
            6957
        ]
    },
    {
        "id": 3484,
        "name": "Hoeger, Robel and Mills",
        "sector": "Electronic",
        "siren": 165529688,
        "results": [
            6958,
            6959
        ]
    },
    {
        "id": 3485,
        "name": "Rogahn, Goodwin and Parisian",
        "sector": "Luxury",
        "siren": 193860755,
        "results": [
            6960,
            6961
        ]
    },
    {
        "id": 3486,
        "name": "Lowe Group",
        "sector": "Services",
        "siren": 174853670,
        "results": [
            6962,
            6963
        ]
    },
    {
        "id": 3487,
        "name": "Rosenbaum Group",
        "sector": "Electronic",
        "siren": 100629176,
        "results": [
            6964,
            6965
        ]
    },
    {
        "id": 3488,
        "name": "Little LLC",
        "sector": "Luxury",
        "siren": 179240825,
        "results": [
            6966,
            6967
        ]
    },
    {
        "id": 3489,
        "name": "Dicki, Cole and Stamm",
        "sector": "Services",
        "siren": 199986100,
        "results": [
            6968,
            6969
        ]
    },
    {
        "id": 3490,
        "name": "Braun Inc",
        "sector": "Luxury",
        "siren": 157224799,
        "results": [
            6970,
            6971
        ]
    },
    {
        "id": 3491,
        "name": "Thompson-Stehr",
        "sector": "Luxury",
        "siren": 132517204,
        "results": [
            6972,
            6973
        ]
    },
    {
        "id": 3492,
        "name": "Baumbach and Sons",
        "sector": "Energy",
        "siren": 137520268,
        "results": [
            6974,
            6975
        ]
    },
    {
        "id": 3493,
        "name": "Gusikowski Group",
        "sector": "Services",
        "siren": 130933431,
        "results": [
            6976,
            6977
        ]
    },
    {
        "id": 3494,
        "name": "Hackett, Skiles and Kub",
        "sector": "Retail",
        "siren": 138334261,
        "results": [
            6978,
            6979
        ]
    },
    {
        "id": 3495,
        "name": "Harvey-Hills",
        "sector": "Retail",
        "siren": 182994382,
        "results": [
            6980,
            6981
        ]
    },
    {
        "id": 3496,
        "name": "Haley and Sons",
        "sector": "Retail",
        "siren": 151450992,
        "results": [
            6982,
            6983
        ]
    },
    {
        "id": 3497,
        "name": "Torp-Dibbert",
        "sector": "Luxury",
        "siren": 144601014,
        "results": [
            6984,
            6985
        ]
    },
    {
        "id": 3498,
        "name": "Simonis, Bednar and Rippin",
        "sector": "Services",
        "siren": 165221492,
        "results": [
            6986,
            6987
        ]
    },
    {
        "id": 3499,
        "name": "Abbott and Sons",
        "sector": "Luxury",
        "siren": 113996185,
        "results": [
            6988,
            6989
        ]
    },
    {
        "id": 3500,
        "name": "Bosco, Schaefer and Lowe",
        "sector": "Retail",
        "siren": 157478040,
        "results": [
            6990,
            6991
        ]
    },
    {
        "id": 3501,
        "name": "Gorczany, Sawayn and McGlynn",
        "sector": "Services",
        "siren": 160059963,
        "results": [
            6992,
            6993
        ]
    },
    {
        "id": 3502,
        "name": "Bins Group",
        "sector": "Electronic",
        "siren": 116099037,
        "results": [
            6994,
            6995
        ]
    },
    {
        "id": 3503,
        "name": "Leuschke-Kilback",
        "sector": "Electronic",
        "siren": 198600005,
        "results": [
            6996,
            6997
        ]
    },
    {
        "id": 3504,
        "name": "Larkin, Shields and Jakubowski",
        "sector": "Services",
        "siren": 110483889,
        "results": [
            6998,
            6999
        ]
    },
    {
        "id": 3505,
        "name": "Mraz-Mraz",
        "sector": "Energy",
        "siren": 172473419,
        "results": [
            7000,
            7001
        ]
    },
    {
        "id": 3506,
        "name": "Weissnat, Labadie and Fritsch",
        "sector": "Energy",
        "siren": 174322593,
        "results": [
            7002,
            7003
        ]
    },
    {
        "id": 3507,
        "name": "Ernser, Stracke and Towne",
        "sector": "Retail",
        "siren": 167969115,
        "results": [
            7004,
            7005
        ]
    },
    {
        "id": 3508,
        "name": "Johnston, McLaughlin and O'Connell",
        "sector": "Retail",
        "siren": 193048136,
        "results": [
            7006,
            7007
        ]
    },
    {
        "id": 3509,
        "name": "Kihn-Hessel",
        "sector": "Retail",
        "siren": 118060487,
        "results": [
            7008,
            7009
        ]
    },
    {
        "id": 3510,
        "name": "Wilkinson, Haag and Quitzon",
        "sector": "Electronic",
        "siren": 109363148,
        "results": [
            7010,
            7011
        ]
    },
    {
        "id": 3511,
        "name": "Barrows, Jerde and Johns",
        "sector": "Luxury",
        "siren": 164637641,
        "results": [
            7012,
            7013
        ]
    },
    {
        "id": 3512,
        "name": "Waters Inc",
        "sector": "Retail",
        "siren": 113972729,
        "results": [
            7014,
            7015
        ]
    },
    {
        "id": 3513,
        "name": "Luettgen and Sons",
        "sector": "Services",
        "siren": 185773008,
        "results": [
            7016,
            7017
        ]
    },
    {
        "id": 3514,
        "name": "Hintz, Osinski and Cassin",
        "sector": "Electronic",
        "siren": 113094912,
        "results": [
            7018,
            7019
        ]
    },
    {
        "id": 3515,
        "name": "Crona, Kautzer and Stoltenberg",
        "sector": "Electronic",
        "siren": 130734218,
        "results": [
            7020,
            7021
        ]
    },
    {
        "id": 3516,
        "name": "Baumbach, Murazik and Mertz",
        "sector": "Luxury",
        "siren": 153857981,
        "results": [
            7022,
            7023
        ]
    },
    {
        "id": 3517,
        "name": "Bernier-Lebsack",
        "sector": "Services",
        "siren": 150256433,
        "results": [
            7024,
            7025
        ]
    },
    {
        "id": 3518,
        "name": "Schneider-Maggio",
        "sector": "Energy",
        "siren": 172089593,
        "results": [
            7026,
            7027
        ]
    },
    {
        "id": 3519,
        "name": "Wilkinson-Roberts",
        "sector": "Energy",
        "siren": 175622981,
        "results": [
            7028,
            7029
        ]
    },
    {
        "id": 3520,
        "name": "Wilderman Inc",
        "sector": "Services",
        "siren": 125295327,
        "results": [
            7030,
            7031
        ]
    },
    {
        "id": 3521,
        "name": "Leffler and Sons",
        "sector": "Electronic",
        "siren": 186523701,
        "results": [
            7032,
            7033
        ]
    },
    {
        "id": 3522,
        "name": "Runolfsdottir-Lemke",
        "sector": "Luxury",
        "siren": 192618213,
        "results": [
            7034,
            7035
        ]
    },
    {
        "id": 3523,
        "name": "Kassulke, Cummings and Bernier",
        "sector": "Energy",
        "siren": 126316106,
        "results": [
            7036,
            7037
        ]
    },
    {
        "id": 3524,
        "name": "Bailey-White",
        "sector": "Energy",
        "siren": 104371166,
        "results": [
            7038,
            7039
        ]
    },
    {
        "id": 3525,
        "name": "Hermiston-Wintheiser",
        "sector": "Electronic",
        "siren": 155108336,
        "results": [
            7040,
            7041
        ]
    },
    {
        "id": 3526,
        "name": "Boyle-Dach",
        "sector": "Electronic",
        "siren": 123420846,
        "results": [
            7042,
            7043
        ]
    },
    {
        "id": 3527,
        "name": "Dibbert-Dibbert",
        "sector": "Electronic",
        "siren": 101153573,
        "results": [
            7044,
            7045
        ]
    },
    {
        "id": 3528,
        "name": "Deckow, Grimes and Kohler",
        "sector": "Retail",
        "siren": 166021815,
        "results": [
            7046,
            7047
        ]
    },
    {
        "id": 3529,
        "name": "Lueilwitz, Simonis and Larkin",
        "sector": "Electronic",
        "siren": 188342281,
        "results": [
            7048,
            7049
        ]
    },
    {
        "id": 3530,
        "name": "Heathcote, Pollich and Harvey",
        "sector": "Retail",
        "siren": 149628249,
        "results": [
            7050,
            7051
        ]
    },
    {
        "id": 3531,
        "name": "Zemlak-Reichel",
        "sector": "Services",
        "siren": 134911473,
        "results": [
            7052,
            7053
        ]
    },
    {
        "id": 3532,
        "name": "Lakin-Spinka",
        "sector": "Luxury",
        "siren": 199382696,
        "results": [
            7054,
            7055
        ]
    },
    {
        "id": 3533,
        "name": "O'Keefe-Halvorson",
        "sector": "Services",
        "siren": 178088396,
        "results": [
            7056,
            7057
        ]
    },
    {
        "id": 3534,
        "name": "Crist, Kessler and Johnson",
        "sector": "Retail",
        "siren": 107859887,
        "results": [
            7058,
            7059
        ]
    },
    {
        "id": 3535,
        "name": "Stiedemann-Fahey",
        "sector": "Retail",
        "siren": 117424271,
        "results": [
            7060,
            7061
        ]
    },
    {
        "id": 3536,
        "name": "Goodwin-Reynolds",
        "sector": "Services",
        "siren": 193407207,
        "results": [
            7062,
            7063
        ]
    },
    {
        "id": 3537,
        "name": "Braun, Stanton and Okuneva",
        "sector": "Electronic",
        "siren": 190708262,
        "results": [
            7064,
            7065
        ]
    },
    {
        "id": 3538,
        "name": "Hahn-Torp",
        "sector": "Luxury",
        "siren": 107000490,
        "results": [
            7066,
            7067
        ]
    },
    {
        "id": 3539,
        "name": "Kozey-Swift",
        "sector": "Retail",
        "siren": 192090659,
        "results": [
            7068,
            7069
        ]
    },
    {
        "id": 3540,
        "name": "Bartoletti Group",
        "sector": "Luxury",
        "siren": 136943954,
        "results": [
            7070,
            7071
        ]
    },
    {
        "id": 3541,
        "name": "Nicolas, Little and Jacobson",
        "sector": "Services",
        "siren": 153253980,
        "results": [
            7072,
            7073
        ]
    },
    {
        "id": 3542,
        "name": "Lindgren-Hoeger",
        "sector": "Luxury",
        "siren": 119804976,
        "results": [
            7074,
            7075
        ]
    },
    {
        "id": 3543,
        "name": "Mitchell LLC",
        "sector": "Electronic",
        "siren": 178944328,
        "results": [
            7076,
            7077
        ]
    },
    {
        "id": 3544,
        "name": "Schroeder-Jacobson",
        "sector": "Energy",
        "siren": 147197381,
        "results": [
            7078,
            7079
        ]
    },
    {
        "id": 3545,
        "name": "McKenzie-Kuhic",
        "sector": "Luxury",
        "siren": 190437806,
        "results": [
            7080,
            7081
        ]
    },
    {
        "id": 3546,
        "name": "McCullough-Cassin",
        "sector": "Services",
        "siren": 160132658,
        "results": [
            7082,
            7083
        ]
    },
    {
        "id": 3547,
        "name": "Braun LLC",
        "sector": "Services",
        "siren": 196168992,
        "results": [
            7084,
            7085
        ]
    },
    {
        "id": 3548,
        "name": "Lemke LLC",
        "sector": "Energy",
        "siren": 138090362,
        "results": [
            7086,
            7087
        ]
    },
    {
        "id": 3549,
        "name": "Gutkowski Group",
        "sector": "Luxury",
        "siren": 115193251,
        "results": [
            7088,
            7089
        ]
    },
    {
        "id": 3550,
        "name": "Kiehn, Walter and Corkery",
        "sector": "Services",
        "siren": 166309097,
        "results": [
            7090,
            7091
        ]
    },
    {
        "id": 3551,
        "name": "Bogisich Inc",
        "sector": "Luxury",
        "siren": 197808747,
        "results": [
            7092,
            7093
        ]
    },
    {
        "id": 3552,
        "name": "Donnelly and Sons",
        "sector": "Retail",
        "siren": 123525391,
        "results": [
            7094,
            7095
        ]
    },
    {
        "id": 3553,
        "name": "VonRueden-Herman",
        "sector": "Retail",
        "siren": 156347768,
        "results": [
            7096,
            7097
        ]
    },
    {
        "id": 3554,
        "name": "Miller Inc",
        "sector": "Luxury",
        "siren": 132846185,
        "results": [
            7098,
            7099
        ]
    },
    {
        "id": 3555,
        "name": "Bruen Inc",
        "sector": "Services",
        "siren": 164392116,
        "results": [
            7100,
            7101
        ]
    },
    {
        "id": 3556,
        "name": "Dietrich-Crooks",
        "sector": "Energy",
        "siren": 199183252,
        "results": [
            7102,
            7103
        ]
    },
    {
        "id": 3557,
        "name": "Kautzer-Skiles",
        "sector": "Services",
        "siren": 131225918,
        "results": [
            7104,
            7105
        ]
    },
    {
        "id": 3558,
        "name": "Steuber and Sons",
        "sector": "Electronic",
        "siren": 189194255,
        "results": [
            7106,
            7107
        ]
    },
    {
        "id": 3559,
        "name": "Howe-Torphy",
        "sector": "Retail",
        "siren": 195511475,
        "results": [
            7108,
            7109
        ]
    },
    {
        "id": 3560,
        "name": "McGlynn, Kihn and Schuppe",
        "sector": "Electronic",
        "siren": 173529930,
        "results": [
            7110,
            7111
        ]
    },
    {
        "id": 3561,
        "name": "Zieme-Dietrich",
        "sector": "Services",
        "siren": 114438154,
        "results": [
            7112,
            7113
        ]
    },
    {
        "id": 3562,
        "name": "Schmeler Group",
        "sector": "Luxury",
        "siren": 111413783,
        "results": [
            7114,
            7115
        ]
    },
    {
        "id": 3563,
        "name": "Sanford-Considine",
        "sector": "Services",
        "siren": 170657089,
        "results": [
            7116,
            7117
        ]
    },
    {
        "id": 3564,
        "name": "Stokes, Homenick and Nader",
        "sector": "Luxury",
        "siren": 147173425,
        "results": [
            7118,
            7119
        ]
    },
    {
        "id": 3565,
        "name": "Considine-Cummings",
        "sector": "Services",
        "siren": 198256349,
        "results": [
            7120,
            7121
        ]
    },
    {
        "id": 3566,
        "name": "Casper, Fay and Jerde",
        "sector": "Services",
        "siren": 117021662,
        "results": [
            7122,
            7123
        ]
    },
    {
        "id": 3567,
        "name": "Wolf, Morissette and Schulist",
        "sector": "Luxury",
        "siren": 128370244,
        "results": [
            7124,
            7125
        ]
    },
    {
        "id": 3568,
        "name": "Herzog and Sons",
        "sector": "Electronic",
        "siren": 101089433,
        "results": [
            7126,
            7127
        ]
    },
    {
        "id": 3569,
        "name": "Bednar Group",
        "sector": "Retail",
        "siren": 199436997,
        "results": [
            7128,
            7129
        ]
    },
    {
        "id": 3570,
        "name": "Runolfsson Group",
        "sector": "Luxury",
        "siren": 161322515,
        "results": [
            7130,
            7131
        ]
    },
    {
        "id": 3571,
        "name": "Howell, Bailey and Feil",
        "sector": "Retail",
        "siren": 196801336,
        "results": [
            7132,
            7133
        ]
    },
    {
        "id": 3572,
        "name": "Ferry-Will",
        "sector": "Services",
        "siren": 147994018,
        "results": [
            7134,
            7135
        ]
    },
    {
        "id": 3573,
        "name": "Paucek Inc",
        "sector": "Services",
        "siren": 159055475,
        "results": [
            7136,
            7137
        ]
    },
    {
        "id": 3574,
        "name": "Cremin LLC",
        "sector": "Luxury",
        "siren": 144720282,
        "results": [
            7138,
            7139
        ]
    },
    {
        "id": 3575,
        "name": "Wiegand-Hickle",
        "sector": "Retail",
        "siren": 152118912,
        "results": [
            7140,
            7141
        ]
    },
    {
        "id": 3576,
        "name": "Schamberger LLC",
        "sector": "Energy",
        "siren": 197222466,
        "results": [
            7142,
            7143
        ]
    },
    {
        "id": 3577,
        "name": "Hoeger-King",
        "sector": "Luxury",
        "siren": 134035800,
        "results": [
            7144,
            7145
        ]
    },
    {
        "id": 3578,
        "name": "Bashirian-Thompson",
        "sector": "Electronic",
        "siren": 182822166,
        "results": [
            7146,
            7147
        ]
    },
    {
        "id": 3579,
        "name": "Lebsack and Sons",
        "sector": "Services",
        "siren": 148314895,
        "results": [
            7148,
            7149
        ]
    },
    {
        "id": 3580,
        "name": "Larson, Murray and Hamill",
        "sector": "Energy",
        "siren": 196282306,
        "results": [
            7150,
            7151
        ]
    },
    {
        "id": 3581,
        "name": "Kutch, Ruecker and Krajcik",
        "sector": "Energy",
        "siren": 120301296,
        "results": [
            7152,
            7153
        ]
    },
    {
        "id": 3582,
        "name": "Smitham Inc",
        "sector": "Luxury",
        "siren": 158346415,
        "results": [
            7154,
            7155
        ]
    },
    {
        "id": 3583,
        "name": "Hilll, Prosacco and Dickens",
        "sector": "Energy",
        "siren": 142348939,
        "results": [
            7156,
            7157
        ]
    },
    {
        "id": 3584,
        "name": "Homenick and Sons",
        "sector": "Retail",
        "siren": 199752635,
        "results": [
            7158,
            7159
        ]
    },
    {
        "id": 3585,
        "name": "Hartmann-Considine",
        "sector": "Retail",
        "siren": 142490319,
        "results": [
            7160,
            7161
        ]
    },
    {
        "id": 3586,
        "name": "Abshire Group",
        "sector": "Retail",
        "siren": 182946986,
        "results": [
            7162,
            7163
        ]
    },
    {
        "id": 3587,
        "name": "Rolfson, Schowalter and Witting",
        "sector": "Electronic",
        "siren": 115548592,
        "results": [
            7164,
            7165
        ]
    },
    {
        "id": 3588,
        "name": "Smith, Mayer and Huels",
        "sector": "Energy",
        "siren": 116819731,
        "results": [
            7166,
            7167
        ]
    },
    {
        "id": 3589,
        "name": "Christiansen Group",
        "sector": "Retail",
        "siren": 105304056,
        "results": [
            7168,
            7169
        ]
    },
    {
        "id": 3590,
        "name": "Grimes-Hirthe",
        "sector": "Retail",
        "siren": 156142607,
        "results": [
            7170,
            7171
        ]
    },
    {
        "id": 3591,
        "name": "Douglas-Leffler",
        "sector": "Services",
        "siren": 155969051,
        "results": [
            7172,
            7173
        ]
    },
    {
        "id": 3592,
        "name": "Zboncak and Sons",
        "sector": "Energy",
        "siren": 147813224,
        "results": [
            7174,
            7175
        ]
    },
    {
        "id": 3593,
        "name": "Lockman-Borer",
        "sector": "Retail",
        "siren": 126729648,
        "results": [
            7176,
            7177
        ]
    },
    {
        "id": 3594,
        "name": "Bergstrom Group",
        "sector": "Retail",
        "siren": 148036040,
        "results": [
            7178,
            7179
        ]
    },
    {
        "id": 3595,
        "name": "Langosh-D'Amore",
        "sector": "Electronic",
        "siren": 151623097,
        "results": [
            7180,
            7181
        ]
    },
    {
        "id": 3596,
        "name": "Lynch-Zulauf",
        "sector": "Retail",
        "siren": 195588812,
        "results": [
            7182,
            7183
        ]
    },
    {
        "id": 3597,
        "name": "Fisher, Cummerata and Rutherford",
        "sector": "Electronic",
        "siren": 180364589,
        "results": [
            7184,
            7185
        ]
    },
    {
        "id": 3598,
        "name": "Dach, Hessel and Block",
        "sector": "Retail",
        "siren": 186056327,
        "results": [
            7186,
            7187
        ]
    },
    {
        "id": 3599,
        "name": "Kiehn, Jerde and Hudson",
        "sector": "Retail",
        "siren": 120247783,
        "results": [
            7188,
            7189
        ]
    },
    {
        "id": 3600,
        "name": "McKenzie LLC",
        "sector": "Services",
        "siren": 130812670,
        "results": [
            7190,
            7191
        ]
    },
    {
        "id": 3601,
        "name": "Hayes LLC",
        "sector": "Luxury",
        "siren": 107033551,
        "results": [
            7192,
            7193
        ]
    },
    {
        "id": 3602,
        "name": "Rau-Lang",
        "sector": "Luxury",
        "siren": 199132585,
        "results": [
            7194,
            7195
        ]
    },
    {
        "id": 3603,
        "name": "Tillman-Ortiz",
        "sector": "Energy",
        "siren": 134213332,
        "results": [
            7196,
            7197
        ]
    },
    {
        "id": 3604,
        "name": "Spencer Inc",
        "sector": "Services",
        "siren": 191219500,
        "results": [
            7198,
            7199
        ]
    },
    {
        "id": 3605,
        "name": "Labadie-Harris",
        "sector": "Luxury",
        "siren": 101968094,
        "results": [
            7200,
            7201
        ]
    },
    {
        "id": 3606,
        "name": "Jenkins, Monahan and Stark",
        "sector": "Luxury",
        "siren": 118434088,
        "results": [
            7202,
            7203
        ]
    },
    {
        "id": 3607,
        "name": "Gutmann-Schinner",
        "sector": "Luxury",
        "siren": 170251390,
        "results": [
            7204,
            7205
        ]
    },
    {
        "id": 3608,
        "name": "Ortiz Group",
        "sector": "Services",
        "siren": 140985145,
        "results": [
            7206,
            7207
        ]
    },
    {
        "id": 3609,
        "name": "Cremin, Kihn and Muller",
        "sector": "Electronic",
        "siren": 158655868,
        "results": [
            7208,
            7209
        ]
    },
    {
        "id": 3610,
        "name": "MacGyver, Howell and Dicki",
        "sector": "Retail",
        "siren": 117138514,
        "results": [
            7210,
            7211
        ]
    },
    {
        "id": 3611,
        "name": "Corkery-Ruecker",
        "sector": "Retail",
        "siren": 135203043,
        "results": [
            7212,
            7213
        ]
    },
    {
        "id": 3612,
        "name": "Paucek LLC",
        "sector": "Electronic",
        "siren": 186363957,
        "results": [
            7214,
            7215
        ]
    },
    {
        "id": 3613,
        "name": "Kemmer-Balistreri",
        "sector": "Services",
        "siren": 153544373,
        "results": [
            7216,
            7217
        ]
    },
    {
        "id": 3614,
        "name": "Murray-Armstrong",
        "sector": "Retail",
        "siren": 182206760,
        "results": [
            7218,
            7219
        ]
    },
    {
        "id": 3615,
        "name": "Russel-Gusikowski",
        "sector": "Services",
        "siren": 110776409,
        "results": [
            7220,
            7221
        ]
    },
    {
        "id": 3616,
        "name": "Nader and Sons",
        "sector": "Retail",
        "siren": 141726105,
        "results": [
            7222,
            7223
        ]
    },
    {
        "id": 3617,
        "name": "Rath, Brekke and Wilkinson",
        "sector": "Electronic",
        "siren": 116533032,
        "results": [
            7224,
            7225
        ]
    },
    {
        "id": 3618,
        "name": "Hansen-Lockman",
        "sector": "Luxury",
        "siren": 130142180,
        "results": [
            7226,
            7227
        ]
    },
    {
        "id": 3619,
        "name": "Daniel LLC",
        "sector": "Electronic",
        "siren": 191867185,
        "results": [
            7228,
            7229
        ]
    },
    {
        "id": 3620,
        "name": "Corwin-Morissette",
        "sector": "Services",
        "siren": 137287245,
        "results": [
            7230,
            7231
        ]
    },
    {
        "id": 3621,
        "name": "Hammes, Miller and Abshire",
        "sector": "Electronic",
        "siren": 120268542,
        "results": [
            7232,
            7233
        ]
    },
    {
        "id": 3622,
        "name": "Murray, Tillman and Stamm",
        "sector": "Retail",
        "siren": 103205275,
        "results": [
            7234,
            7235
        ]
    },
    {
        "id": 3623,
        "name": "Schaden, Gerlach and Schuster",
        "sector": "Electronic",
        "siren": 120368821,
        "results": [
            7236,
            7237
        ]
    },
    {
        "id": 3624,
        "name": "McClure, Bernier and Muller",
        "sector": "Luxury",
        "siren": 174556529,
        "results": [
            7238,
            7239
        ]
    },
    {
        "id": 3625,
        "name": "Cremin, Stark and Reinger",
        "sector": "Energy",
        "siren": 115130123,
        "results": [
            7240,
            7241
        ]
    },
    {
        "id": 3626,
        "name": "Torphy-Considine",
        "sector": "Services",
        "siren": 143415883,
        "results": [
            7242,
            7243
        ]
    },
    {
        "id": 3627,
        "name": "Dibbert and Sons",
        "sector": "Energy",
        "siren": 106054253,
        "results": [
            7244,
            7245
        ]
    },
    {
        "id": 3628,
        "name": "Schuppe-Roberts",
        "sector": "Electronic",
        "siren": 163224087,
        "results": [
            7246,
            7247
        ]
    },
    {
        "id": 3629,
        "name": "Rodriguez, Kuhn and Barton",
        "sector": "Luxury",
        "siren": 142283650,
        "results": [
            7248,
            7249
        ]
    },
    {
        "id": 3630,
        "name": "Cormier Inc",
        "sector": "Retail",
        "siren": 129443783,
        "results": [
            7250,
            7251
        ]
    },
    {
        "id": 3631,
        "name": "Wilderman, Cummerata and Runolfsdottir",
        "sector": "Luxury",
        "siren": 101899290,
        "results": [
            7252,
            7253
        ]
    },
    {
        "id": 3632,
        "name": "Kemmer, Kohler and Ondricka",
        "sector": "Services",
        "siren": 122068376,
        "results": [
            7254,
            7255
        ]
    },
    {
        "id": 3633,
        "name": "Rodriguez-Bailey",
        "sector": "Energy",
        "siren": 127943555,
        "results": [
            7256,
            7257
        ]
    },
    {
        "id": 3634,
        "name": "Walker LLC",
        "sector": "Luxury",
        "siren": 111913414,
        "results": [
            7258,
            7259
        ]
    },
    {
        "id": 3635,
        "name": "Hayes, Larson and Luettgen",
        "sector": "Services",
        "siren": 198449701,
        "results": [
            7260,
            7261
        ]
    },
    {
        "id": 3636,
        "name": "Goldner-Schaden",
        "sector": "Retail",
        "siren": 117500657,
        "results": [
            7262,
            7263
        ]
    },
    {
        "id": 3637,
        "name": "Reichel, Yundt and Streich",
        "sector": "Retail",
        "siren": 167991100,
        "results": [
            7264,
            7265
        ]
    },
    {
        "id": 3638,
        "name": "Haley LLC",
        "sector": "Services",
        "siren": 193522266,
        "results": [
            7266,
            7267
        ]
    },
    {
        "id": 3639,
        "name": "Flatley-Dietrich",
        "sector": "Electronic",
        "siren": 130732053,
        "results": [
            7268,
            7269
        ]
    },
    {
        "id": 3640,
        "name": "Kub LLC",
        "sector": "Luxury",
        "siren": 198041690,
        "results": [
            7270,
            7271
        ]
    },
    {
        "id": 3641,
        "name": "Brakus, McDermott and Stark",
        "sector": "Energy",
        "siren": 167768499,
        "results": [
            7272,
            7273
        ]
    },
    {
        "id": 3642,
        "name": "Toy, Waelchi and Cartwright",
        "sector": "Retail",
        "siren": 181900593,
        "results": [
            7274,
            7275
        ]
    },
    {
        "id": 3643,
        "name": "Hilpert-Harvey",
        "sector": "Electronic",
        "siren": 104422444,
        "results": [
            7276,
            7277
        ]
    },
    {
        "id": 3644,
        "name": "Ratke-Lynch",
        "sector": "Retail",
        "siren": 146448311,
        "results": [
            7278,
            7279
        ]
    },
    {
        "id": 3645,
        "name": "Durgan Inc",
        "sector": "Retail",
        "siren": 168636217,
        "results": [
            7280,
            7281
        ]
    },
    {
        "id": 3646,
        "name": "Deckow, Doyle and Balistreri",
        "sector": "Energy",
        "siren": 140984093,
        "results": [
            7282,
            7283
        ]
    },
    {
        "id": 3647,
        "name": "Hirthe Inc",
        "sector": "Energy",
        "siren": 186960196,
        "results": [
            7284,
            7285
        ]
    },
    {
        "id": 3648,
        "name": "Kunde-Upton",
        "sector": "Luxury",
        "siren": 149897282,
        "results": [
            7286,
            7287
        ]
    },
    {
        "id": 3649,
        "name": "Schowalter, Schneider and Crooks",
        "sector": "Services",
        "siren": 159218325,
        "results": [
            7288,
            7289
        ]
    },
    {
        "id": 3650,
        "name": "Hirthe, Lesch and Dickens",
        "sector": "Services",
        "siren": 103224589,
        "results": [
            7290,
            7291
        ]
    },
    {
        "id": 3651,
        "name": "Murphy, Mills and Shanahan",
        "sector": "Energy",
        "siren": 157775572,
        "results": [
            7292,
            7293
        ]
    },
    {
        "id": 3652,
        "name": "Spinka Inc",
        "sector": "Energy",
        "siren": 195309504,
        "results": [
            7294,
            7295
        ]
    },
    {
        "id": 3653,
        "name": "Herman Inc",
        "sector": "Electronic",
        "siren": 154606048,
        "results": [
            7296,
            7297
        ]
    },
    {
        "id": 3654,
        "name": "Hermann-Heller",
        "sector": "Luxury",
        "siren": 154840133,
        "results": [
            7298,
            7299
        ]
    },
    {
        "id": 3655,
        "name": "Schuppe Inc",
        "sector": "Luxury",
        "siren": 176367772,
        "results": [
            7300,
            7301
        ]
    },
    {
        "id": 3656,
        "name": "Price Group",
        "sector": "Luxury",
        "siren": 110921605,
        "results": [
            7302,
            7303
        ]
    },
    {
        "id": 3657,
        "name": "Beatty and Sons",
        "sector": "Luxury",
        "siren": 197268582,
        "results": [
            7304,
            7305
        ]
    },
    {
        "id": 3658,
        "name": "Fay, Ratke and Erdman",
        "sector": "Electronic",
        "siren": 165557185,
        "results": [
            7306,
            7307
        ]
    },
    {
        "id": 3659,
        "name": "Hilll, Crist and Greenholt",
        "sector": "Services",
        "siren": 193977640,
        "results": [
            7308,
            7309
        ]
    },
    {
        "id": 3660,
        "name": "Pagac-Crist",
        "sector": "Services",
        "siren": 178921498,
        "results": [
            7310,
            7311
        ]
    },
    {
        "id": 3661,
        "name": "Heidenreich LLC",
        "sector": "Retail",
        "siren": 162006135,
        "results": [
            7312,
            7313
        ]
    },
    {
        "id": 3662,
        "name": "Feeney-Brakus",
        "sector": "Services",
        "siren": 113346547,
        "results": [
            7314,
            7315
        ]
    },
    {
        "id": 3663,
        "name": "Goldner, Halvorson and Welch",
        "sector": "Luxury",
        "siren": 101287881,
        "results": [
            7316,
            7317
        ]
    },
    {
        "id": 3664,
        "name": "Hodkiewicz LLC",
        "sector": "Luxury",
        "siren": 186815939,
        "results": [
            7318,
            7319
        ]
    },
    {
        "id": 3665,
        "name": "Collins Group",
        "sector": "Electronic",
        "siren": 144028595,
        "results": [
            7320,
            7321
        ]
    },
    {
        "id": 3666,
        "name": "Nader-Wiza",
        "sector": "Energy",
        "siren": 121350506,
        "results": [
            7322,
            7323
        ]
    },
    {
        "id": 3667,
        "name": "Tremblay-Hodkiewicz",
        "sector": "Services",
        "siren": 140601772,
        "results": [
            7324,
            7325
        ]
    },
    {
        "id": 3668,
        "name": "Johns-Witting",
        "sector": "Energy",
        "siren": 152310548,
        "results": [
            7326,
            7327
        ]
    },
    {
        "id": 3669,
        "name": "Wilkinson-Heaney",
        "sector": "Energy",
        "siren": 165002972,
        "results": [
            7328,
            7329
        ]
    },
    {
        "id": 3670,
        "name": "Kub-Beer",
        "sector": "Luxury",
        "siren": 191897727,
        "results": [
            7330,
            7331
        ]
    },
    {
        "id": 3671,
        "name": "Will, Ondricka and Terry",
        "sector": "Retail",
        "siren": 190539893,
        "results": [
            7332,
            7333
        ]
    },
    {
        "id": 3672,
        "name": "Aufderhar, Spencer and Mraz",
        "sector": "Retail",
        "siren": 146498168,
        "results": [
            7334,
            7335
        ]
    },
    {
        "id": 3673,
        "name": "Howe and Sons",
        "sector": "Energy",
        "siren": 169811491,
        "results": [
            7336,
            7337
        ]
    },
    {
        "id": 3674,
        "name": "Quigley-Hauck",
        "sector": "Luxury",
        "siren": 112334965,
        "results": [
            7338,
            7339
        ]
    },
    {
        "id": 3675,
        "name": "Leuschke, Abshire and Beatty",
        "sector": "Electronic",
        "siren": 113307476,
        "results": [
            7340,
            7341
        ]
    },
    {
        "id": 3676,
        "name": "Schumm-Bahringer",
        "sector": "Retail",
        "siren": 157893004,
        "results": [
            7342,
            7343
        ]
    },
    {
        "id": 3677,
        "name": "Buckridge, Kohler and Harris",
        "sector": "Electronic",
        "siren": 163707890,
        "results": [
            7344,
            7345
        ]
    },
    {
        "id": 3678,
        "name": "Gusikowski LLC",
        "sector": "Retail",
        "siren": 199498635,
        "results": [
            7346,
            7347
        ]
    },
    {
        "id": 3679,
        "name": "Jacobi LLC",
        "sector": "Energy",
        "siren": 103737434,
        "results": [
            7348,
            7349
        ]
    },
    {
        "id": 3680,
        "name": "Graham, Okuneva and Larkin",
        "sector": "Luxury",
        "siren": 103655720,
        "results": [
            7350,
            7351
        ]
    },
    {
        "id": 3681,
        "name": "Goodwin, Williamson and Lueilwitz",
        "sector": "Luxury",
        "siren": 122435988,
        "results": [
            7352,
            7353
        ]
    },
    {
        "id": 3682,
        "name": "Ullrich-McLaughlin",
        "sector": "Luxury",
        "siren": 181146775,
        "results": [
            7354,
            7355
        ]
    },
    {
        "id": 3683,
        "name": "Morissette Inc",
        "sector": "Energy",
        "siren": 171046978,
        "results": [
            7356,
            7357
        ]
    },
    {
        "id": 3684,
        "name": "Kris Inc",
        "sector": "Electronic",
        "siren": 124779827,
        "results": [
            7358,
            7359
        ]
    },
    {
        "id": 3685,
        "name": "Stanton, Adams and Predovic",
        "sector": "Luxury",
        "siren": 196138812,
        "results": [
            7360,
            7361
        ]
    },
    {
        "id": 3686,
        "name": "Shields and Sons",
        "sector": "Electronic",
        "siren": 163178272,
        "results": [
            7362,
            7363
        ]
    },
    {
        "id": 3687,
        "name": "Kessler, Adams and Rohan",
        "sector": "Luxury",
        "siren": 197214450,
        "results": [
            7364,
            7365
        ]
    },
    {
        "id": 3688,
        "name": "Torp, Cummings and Rolfson",
        "sector": "Luxury",
        "siren": 183515655,
        "results": [
            7366,
            7367
        ]
    },
    {
        "id": 3689,
        "name": "Klein LLC",
        "sector": "Retail",
        "siren": 157408234,
        "results": [
            7368,
            7369
        ]
    },
    {
        "id": 3690,
        "name": "Parker Group",
        "sector": "Luxury",
        "siren": 145091747,
        "results": [
            7370,
            7371
        ]
    },
    {
        "id": 3691,
        "name": "Walsh Inc",
        "sector": "Retail",
        "siren": 180561052,
        "results": [
            7372,
            7373
        ]
    },
    {
        "id": 3692,
        "name": "West-Gerhold",
        "sector": "Electronic",
        "siren": 175577482,
        "results": [
            7374,
            7375
        ]
    },
    {
        "id": 3693,
        "name": "McClure Inc",
        "sector": "Energy",
        "siren": 181813605,
        "results": [
            7376,
            7377
        ]
    },
    {
        "id": 3694,
        "name": "Weimann-Gerlach",
        "sector": "Electronic",
        "siren": 188558651,
        "results": [
            7378,
            7379
        ]
    },
    {
        "id": 3695,
        "name": "Satterfield-Beier",
        "sector": "Luxury",
        "siren": 117417262,
        "results": [
            7380,
            7381
        ]
    },
    {
        "id": 3696,
        "name": "Kuhic Group",
        "sector": "Retail",
        "siren": 192454570,
        "results": [
            7382,
            7383
        ]
    },
    {
        "id": 3697,
        "name": "Rau Group",
        "sector": "Luxury",
        "siren": 182936381,
        "results": [
            7384,
            7385
        ]
    },
    {
        "id": 3698,
        "name": "Effertz, Hoeger and Johns",
        "sector": "Electronic",
        "siren": 120946022,
        "results": [
            7386,
            7387
        ]
    },
    {
        "id": 3699,
        "name": "Reinger-Carter",
        "sector": "Services",
        "siren": 118944349,
        "results": [
            7388,
            7389
        ]
    },
    {
        "id": 3700,
        "name": "Mante-Goldner",
        "sector": "Services",
        "siren": 142472114,
        "results": [
            7390,
            7391
        ]
    },
    {
        "id": 3701,
        "name": "Grant-Rutherford",
        "sector": "Retail",
        "siren": 135950485,
        "results": [
            7392,
            7393
        ]
    },
    {
        "id": 3702,
        "name": "Mayert-Koch",
        "sector": "Retail",
        "siren": 133607310,
        "results": [
            7394,
            7395
        ]
    },
    {
        "id": 3703,
        "name": "Greenfelder Group",
        "sector": "Services",
        "siren": 163945476,
        "results": [
            7396,
            7397
        ]
    },
    {
        "id": 3704,
        "name": "Roberts-Rohan",
        "sector": "Services",
        "siren": 104475598,
        "results": [
            7398,
            7399
        ]
    },
    {
        "id": 3705,
        "name": "Champlin Group",
        "sector": "Services",
        "siren": 108020066,
        "results": [
            7400,
            7401
        ]
    },
    {
        "id": 3706,
        "name": "Luettgen LLC",
        "sector": "Luxury",
        "siren": 193960564,
        "results": [
            7402,
            7403
        ]
    },
    {
        "id": 3707,
        "name": "Kohler Group",
        "sector": "Luxury",
        "siren": 103046562,
        "results": [
            7404,
            7405
        ]
    },
    {
        "id": 3708,
        "name": "Mertz, Crist and Beier",
        "sector": "Energy",
        "siren": 152843200,
        "results": [
            7406,
            7407
        ]
    },
    {
        "id": 3709,
        "name": "Howell LLC",
        "sector": "Luxury",
        "siren": 179339752,
        "results": [
            7408,
            7409
        ]
    },
    {
        "id": 3710,
        "name": "Legros LLC",
        "sector": "Energy",
        "siren": 158965625,
        "results": [
            7410,
            7411
        ]
    },
    {
        "id": 3711,
        "name": "Bode, Harber and Klein",
        "sector": "Retail",
        "siren": 134129105,
        "results": [
            7412,
            7413
        ]
    },
    {
        "id": 3712,
        "name": "Anderson, Green and Dare",
        "sector": "Luxury",
        "siren": 193242808,
        "results": [
            7414,
            7415
        ]
    },
    {
        "id": 3713,
        "name": "Paucek Inc",
        "sector": "Energy",
        "siren": 167472292,
        "results": [
            7416,
            7417
        ]
    },
    {
        "id": 3714,
        "name": "Kshlerin Inc",
        "sector": "Luxury",
        "siren": 107110002,
        "results": [
            7418,
            7419
        ]
    },
    {
        "id": 3715,
        "name": "Lubowitz-McGlynn",
        "sector": "Energy",
        "siren": 189489990,
        "results": [
            7420,
            7421
        ]
    },
    {
        "id": 3716,
        "name": "Windler-Runolfsson",
        "sector": "Luxury",
        "siren": 116719240,
        "results": [
            7422,
            7423
        ]
    },
    {
        "id": 3717,
        "name": "Collier LLC",
        "sector": "Energy",
        "siren": 173069971,
        "results": [
            7424,
            7425
        ]
    },
    {
        "id": 3718,
        "name": "Medhurst Group",
        "sector": "Energy",
        "siren": 143957250,
        "results": [
            7426,
            7427
        ]
    },
    {
        "id": 3719,
        "name": "Nolan, Medhurst and Berge",
        "sector": "Services",
        "siren": 139725278,
        "results": [
            7428,
            7429
        ]
    },
    {
        "id": 3720,
        "name": "Harber, Spencer and Harber",
        "sector": "Electronic",
        "siren": 148565122,
        "results": [
            7430,
            7431
        ]
    },
    {
        "id": 3721,
        "name": "Kozey, Keeling and Moen",
        "sector": "Energy",
        "siren": 189451047,
        "results": [
            7432,
            7433
        ]
    },
    {
        "id": 3722,
        "name": "Daugherty-Heaney",
        "sector": "Retail",
        "siren": 196916312,
        "results": [
            7434,
            7435
        ]
    },
    {
        "id": 3723,
        "name": "Hahn-Denesik",
        "sector": "Luxury",
        "siren": 144640679,
        "results": [
            7436,
            7437
        ]
    },
    {
        "id": 3724,
        "name": "Brakus LLC",
        "sector": "Energy",
        "siren": 147647860,
        "results": [
            7438,
            7439
        ]
    },
    {
        "id": 3725,
        "name": "Jones-Breitenberg",
        "sector": "Services",
        "siren": 194481130,
        "results": [
            7440,
            7441
        ]
    },
    {
        "id": 3726,
        "name": "Nolan-Ratke",
        "sector": "Energy",
        "siren": 139887108,
        "results": [
            7442,
            7443
        ]
    },
    {
        "id": 3727,
        "name": "Cole-Bashirian",
        "sector": "Luxury",
        "siren": 159994387,
        "results": [
            7444,
            7445
        ]
    },
    {
        "id": 3728,
        "name": "Heidenreich, Nitzsche and Corwin",
        "sector": "Retail",
        "siren": 158756835,
        "results": [
            7446,
            7447
        ]
    },
    {
        "id": 3729,
        "name": "Daugherty-Hessel",
        "sector": "Electronic",
        "siren": 106049556,
        "results": [
            7448,
            7449
        ]
    },
    {
        "id": 3730,
        "name": "Gutmann, Kuphal and Oberbrunner",
        "sector": "Services",
        "siren": 157105039,
        "results": [
            7450,
            7451
        ]
    },
    {
        "id": 3731,
        "name": "Grimes-Hudson",
        "sector": "Services",
        "siren": 115844465,
        "results": [
            7452,
            7453
        ]
    },
    {
        "id": 3732,
        "name": "Larson, Osinski and Will",
        "sector": "Retail",
        "siren": 140774907,
        "results": [
            7454,
            7455
        ]
    },
    {
        "id": 3733,
        "name": "Runolfsson, Ondricka and Jacobson",
        "sector": "Energy",
        "siren": 164348844,
        "results": [
            7456,
            7457
        ]
    },
    {
        "id": 3734,
        "name": "Rolfson, Fisher and Howe",
        "sector": "Energy",
        "siren": 199718848,
        "results": [
            7458,
            7459
        ]
    },
    {
        "id": 3735,
        "name": "Morissette, Erdman and Sporer",
        "sector": "Retail",
        "siren": 175551474,
        "results": [
            7460,
            7461
        ]
    },
    {
        "id": 3736,
        "name": "Jacobs-Rogahn",
        "sector": "Electronic",
        "siren": 155582074,
        "results": [
            7462,
            7463
        ]
    },
    {
        "id": 3737,
        "name": "Stiedemann Group",
        "sector": "Energy",
        "siren": 149288645,
        "results": [
            7464,
            7465
        ]
    },
    {
        "id": 3738,
        "name": "Hoeger-Purdy",
        "sector": "Energy",
        "siren": 198222875,
        "results": [
            7466,
            7467
        ]
    },
    {
        "id": 3739,
        "name": "Pfannerstill, Abbott and Smith",
        "sector": "Retail",
        "siren": 167717393,
        "results": [
            7468,
            7469
        ]
    },
    {
        "id": 3740,
        "name": "Schowalter, O'Connell and Lockman",
        "sector": "Electronic",
        "siren": 163136351,
        "results": [
            7470,
            7471
        ]
    },
    {
        "id": 3741,
        "name": "Olson-Osinski",
        "sector": "Energy",
        "siren": 177664567,
        "results": [
            7472,
            7473
        ]
    },
    {
        "id": 3742,
        "name": "Hand Group",
        "sector": "Retail",
        "siren": 196224880,
        "results": [
            7474,
            7475
        ]
    },
    {
        "id": 3743,
        "name": "Johnson, Keeling and Kshlerin",
        "sector": "Luxury",
        "siren": 157317210,
        "results": [
            7476,
            7477
        ]
    },
    {
        "id": 3744,
        "name": "Goyette, Price and Halvorson",
        "sector": "Energy",
        "siren": 193757416,
        "results": [
            7478,
            7479
        ]
    },
    {
        "id": 3745,
        "name": "Bechtelar-Schiller",
        "sector": "Services",
        "siren": 159248747,
        "results": [
            7480,
            7481
        ]
    },
    {
        "id": 3746,
        "name": "Labadie Group",
        "sector": "Electronic",
        "siren": 171071362,
        "results": [
            7482,
            7483
        ]
    },
    {
        "id": 3747,
        "name": "Adams-Goyette",
        "sector": "Services",
        "siren": 141873628,
        "results": [
            7484,
            7485
        ]
    },
    {
        "id": 3748,
        "name": "Tremblay-Runolfsson",
        "sector": "Retail",
        "siren": 187852804,
        "results": [
            7486,
            7487
        ]
    },
    {
        "id": 3749,
        "name": "Ratke and Sons",
        "sector": "Services",
        "siren": 152617868,
        "results": [
            7488,
            7489
        ]
    },
    {
        "id": 3750,
        "name": "Kessler, Wolf and Kub",
        "sector": "Retail",
        "siren": 114771531,
        "results": [
            7490,
            7491
        ]
    },
    {
        "id": 3751,
        "name": "Batz LLC",
        "sector": "Electronic",
        "siren": 155088158,
        "results": [
            7492,
            7493
        ]
    },
    {
        "id": 3752,
        "name": "Mertz and Sons",
        "sector": "Energy",
        "siren": 130026805,
        "results": [
            7494,
            7495
        ]
    }
];

export default function Graph_One () {
  return (

    <><>
      <div className='container_arrow'>
        <div><button className='img-graph'><a href='/'><img src={Image6} /></a></button></div>
        <div className='Text6'>
          <p>Abbott and Sons</p>
          <p>n° Siren 113996185</p>
        </div>
      </div>
    </>
    <div className='BarChart'>
    <BarChart className='barchart'
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 35,
        bottom: 5
      }}
    >
      <h1>bonjour</h1>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="id" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="name" fill="#2508" />
        <Bar dataKey="sector" fill="#8884d8" />
        <Bar dataKey="siren" fill="#82ca9d" />
        <Bar dataKey="results" fill="#82ca04" />
      </BarChart>
      </div></>
  );
}