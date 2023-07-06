import React from 'react'
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
        "ca": 2077357,
        "margin": 497351,
        "ebitda": 65952,
        "loss": 858474,
        "year": 2017,
        "business": 1
    },
    {
        "id": 2,
        "ca": 432070,
        "margin": 427778,
        "ebitda": 290433,
        "loss": 8023406,
        "year": 2016,
        "business": 1
    },
    {
        "id": 3,
        "ca": 364921,
        "margin": 61976,
        "ebitda": 960673,
        "loss": 2812728,
        "year": 2017,
        "business": 2
    },
    {
        "id": 4,
        "ca": 1944186,
        "margin": 738525,
        "ebitda": 846608,
        "loss": 657145,
        "year": 2016,
        "business": 2
    },
    {
        "id": 5,
        "ca": 2752578,
        "margin": -147358,
        "ebitda": 485891,
        "loss": 331323,
        "year": 2017,
        "business": 3
    },
    {
        "id": 6,
        "ca": 1686886,
        "margin": -117670,
        "ebitda": 390980,
        "loss": 3205084,
        "year": 2016,
        "business": 3
    },
    {
        "id": 7,
        "ca": 1911503,
        "margin": 340643,
        "ebitda": 417233,
        "loss": 5121889,
        "year": 2017,
        "business": 4
    },
    {
        "id": 8,
        "ca": 3669705,
        "margin": 937608,
        "ebitda": 162576,
        "loss": 8516803,
        "year": 2016,
        "business": 4
    },
    {
        "id": 9,
        "ca": 2802947,
        "margin": -192527,
        "ebitda": 895332,
        "loss": 168490,
        "year": 2017,
        "business": 5
    },
    {
        "id": 10,
        "ca": 1704685,
        "margin": 675635,
        "ebitda": 175060,
        "loss": 8978142,
        "year": 2016,
        "business": 5
    },
    {
        "id": 11,
        "ca": 3366027,
        "margin": 987873,
        "ebitda": 196501,
        "loss": 7956104,
        "year": 2017,
        "business": 6
    },
    {
        "id": 12,
        "ca": 2312009,
        "margin": 564257,
        "ebitda": 534160,
        "loss": 5616100,
        "year": 2016,
        "business": 6
    },
    {
        "id": 13,
        "ca": 807176,
        "margin": -170771,
        "ebitda": 501330,
        "loss": 107559,
        "year": 2017,
        "business": 7
    },
    {
        "id": 14,
        "ca": 1677728,
        "margin": 405029,
        "ebitda": 919989,
        "loss": 7064750,
        "year": 2016,
        "business": 7
    },
    {
        "id": 15,
        "ca": 845912,
        "margin": -55821,
        "ebitda": 224135,
        "loss": 2658021,
        "year": 2017,
        "business": 8
    },
    {
        "id": 16,
        "ca": 2744919,
        "margin": 681582,
        "ebitda": 236779,
        "loss": 4376894,
        "year": 2016,
        "business": 8
    },
    {
        "id": 17,
        "ca": 2645052,
        "margin": -41159,
        "ebitda": 173240,
        "loss": 1967321,
        "year": 2017,
        "business": 9
    },
    {
        "id": 18,
        "ca": 732362,
        "margin": 698731,
        "ebitda": 463853,
        "loss": 5229956,
        "year": 2016,
        "business": 9
    },
    {
        "id": 19,
        "ca": 1399582,
        "margin": 985314,
        "ebitda": 725283,
        "loss": 4266902,
        "year": 2017,
        "business": 10
    },
    {
        "id": 20,
        "ca": 1916496,
        "margin": 979357,
        "ebitda": 942617,
        "loss": 2478758,
        "year": 2016,
        "business": 10
    },
    {
        "id": 21,
        "ca": 490022,
        "margin": 352486,
        "ebitda": 213406,
        "loss": 608978,
        "year": 2017,
        "business": 11
    },
    {
        "id": 22,
        "ca": 2814806,
        "margin": 150982,
        "ebitda": 255155,
        "loss": 4306009,
        "year": 2016,
        "business": 11
    },
    {
        "id": 23,
        "ca": 498678,
        "margin": 154466,
        "ebitda": 620676,
        "loss": 548809,
        "year": 2017,
        "business": 12
    },
    {
        "id": 24,
        "ca": 2772820,
        "margin": 119935,
        "ebitda": 271449,
        "loss": 5095792,
        "year": 2016,
        "business": 12
    },
    {
        "id": 25,
        "ca": 2302368,
        "margin": 469510,
        "ebitda": 250648,
        "loss": 5131438,
        "year": 2017,
        "business": 13
    },
    {
        "id": 26,
        "ca": 3011160,
        "margin": 429420,
        "ebitda": 940827,
        "loss": 7664834,
        "year": 2016,
        "business": 13
    },
    {
        "id": 27,
        "ca": 2091227,
        "margin": 809190,
        "ebitda": 589384,
        "loss": 6212269,
        "year": 2017,
        "business": 14
    },
    {
        "id": 28,
        "ca": 676290,
        "margin": 202279,
        "ebitda": 718696,
        "loss": 5774367,
        "year": 2016,
        "business": 14
    },
    {
        "id": 29,
        "ca": 1071840,
        "margin": 70852,
        "ebitda": 571568,
        "loss": 2690278,
        "year": 2017,
        "business": 15
    },
    {
        "id": 30,
        "ca": 2169468,
        "margin": -92185,
        "ebitda": 134714,
        "loss": 2327708,
        "year": 2016,
        "business": 15
    },
    {
        "id": 31,
        "ca": 227469,
        "margin": -172937,
        "ebitda": 849147,
        "loss": 3197097,
        "year": 2017,
        "business": 16
    },
    {
        "id": 32,
        "ca": 2950073,
        "margin": 291666,
        "ebitda": 358533,
        "loss": 2035460,
        "year": 2016,
        "business": 16
    },
    {
        "id": 33,
        "ca": 1659892,
        "margin": 228500,
        "ebitda": 676123,
        "loss": 113437,
        "year": 2017,
        "business": 17
    },
    {
        "id": 34,
        "ca": 1332202,
        "margin": -10635,
        "ebitda": 591615,
        "loss": 1731490,
        "year": 2016,
        "business": 17
    },
    {
        "id": 35,
        "ca": 2698460,
        "margin": 367570,
        "ebitda": 943598,
        "loss": 6190258,
        "year": 2017,
        "business": 18
    },
    {
        "id": 36,
        "ca": 1547921,
        "margin": 898131,
        "ebitda": 549866,
        "loss": 695666,
        "year": 2016,
        "business": 18
    },
    {
        "id": 37,
        "ca": 3902519,
        "margin": 765501,
        "ebitda": 873377,
        "loss": 2554825,
        "year": 2017,
        "business": 19
    },
    {
        "id": 38,
        "ca": 804936,
        "margin": 182411,
        "ebitda": 466946,
        "loss": 9989170,
        "year": 2016,
        "business": 19
    },
    {
        "id": 39,
        "ca": 1658933,
        "margin": 647423,
        "ebitda": 568089,
        "loss": 6579924,
        "year": 2017,
        "business": 20
    },
    {
        "id": 40,
        "ca": 1738120,
        "margin": 674431,
        "ebitda": 429561,
        "loss": 408865,
        "year": 2016,
        "business": 20
    },
    {
        "id": 41,
        "ca": 2026715,
        "margin": -198616,
        "ebitda": 965383,
        "loss": 6439279,
        "year": 2017,
        "business": 21
    },
    {
        "id": 42,
        "ca": 3894824,
        "margin": 606068,
        "ebitda": 694184,
        "loss": 5969030,
        "year": 2016,
        "business": 21
    },
    {
        "id": 43,
        "ca": 2494629,
        "margin": 240340,
        "ebitda": 282056,
        "loss": 6994907,
        "year": 2017,
        "business": 22
    },
    {
        "id": 44,
        "ca": 1974168,
        "margin": 484412,
        "ebitda": 253168,
        "loss": 1670528,
        "year": 2016,
        "business": 22
    },
    {
        "id": 45,
        "ca": 3977217,
        "margin": 175757,
        "ebitda": 241608,
        "loss": 6107207,
        "year": 2017,
        "business": 23
    },
    {
        "id": 46,
        "ca": 809720,
        "margin": 545355,
        "ebitda": 842297,
        "loss": 7239634,
        "year": 2016,
        "business": 23
    },
    {
        "id": 47,
        "ca": 3055261,
        "margin": -29529,
        "ebitda": 988508,
        "loss": 3307127,
        "year": 2017,
        "business": 24
    },
    {
        "id": 48,
        "ca": 441182,
        "margin": 616025,
        "ebitda": 739319,
        "loss": 754174,
        "year": 2016,
        "business": 24
    },
    {
        "id": 49,
        "ca": 3778120,
        "margin": 946201,
        "ebitda": 737398,
        "loss": 828816,
        "year": 2017,
        "business": 25
    },
    {
        "id": 50,
        "ca": 377221,
        "margin": 644941,
        "ebitda": 330869,
        "loss": 4185104,
        "year": 2016,
        "business": 25
    },
    {
        "id": 51,
        "ca": 3293799,
        "margin": 762392,
        "ebitda": 874292,
        "loss": 3623463,
        "year": 2017,
        "business": 26
    },
    {
        "id": 52,
        "ca": 858506,
        "margin": 189441,
        "ebitda": 609871,
        "loss": 177061,
        "year": 2016,
        "business": 26
    },
    {
        "id": 53,
        "ca": 1952026,
        "margin": 105098,
        "ebitda": 802326,
        "loss": 5262609,
        "year": 2017,
        "business": 27
    },
    {
        "id": 54,
        "ca": 353809,
        "margin": 802651,
        "ebitda": 720150,
        "loss": 953096,
        "year": 2016,
        "business": 27
    },
    {
        "id": 55,
        "ca": 3812845,
        "margin": 536146,
        "ebitda": 197412,
        "loss": 3385756,
        "year": 2017,
        "business": 28
    },
    {
        "id": 56,
        "ca": 900740,
        "margin": 452037,
        "ebitda": 479167,
        "loss": 9372921,
        "year": 2016,
        "business": 28
    },
    {
        "id": 57,
        "ca": 1298429,
        "margin": 85209,
        "ebitda": 801714,
        "loss": 1874888,
        "year": 2017,
        "business": 29
    },
    {
        "id": 58,
        "ca": 3372389,
        "margin": -46817,
        "ebitda": 962766,
        "loss": 1038773,
        "year": 2016,
        "business": 29
    },
    {
        "id": 59,
        "ca": 1571590,
        "margin": 465195,
        "ebitda": 715373,
        "loss": 6767658,
        "year": 2017,
        "business": 30
    },
    {
        "id": 60,
        "ca": 1885922,
        "margin": 294164,
        "ebitda": 602655,
        "loss": 5395737,
        "year": 2016,
        "business": 30
    },
    {
        "id": 61,
        "ca": 609290,
        "margin": 476030,
        "ebitda": 414815,
        "loss": 650125,
        "year": 2017,
        "business": 31
    },
    {
        "id": 62,
        "ca": 383265,
        "margin": -109517,
        "ebitda": 516401,
        "loss": 7914729,
        "year": 2016,
        "business": 31
    },
    {
        "id": 63,
        "ca": 3646184,
        "margin": -117596,
        "ebitda": 904991,
        "loss": 369354,
        "year": 2017,
        "business": 32
    },
    {
        "id": 64,
        "ca": 215663,
        "margin": 343155,
        "ebitda": 914212,
        "loss": 386124,
        "year": 2016,
        "business": 32
    },
    {
        "id": 65,
        "ca": 3081311,
        "margin": 760359,
        "ebitda": 515188,
        "loss": 866840,
        "year": 2017,
        "business": 33
    },
    {
        "id": 66,
        "ca": 2987931,
        "margin": 94163,
        "ebitda": 833533,
        "loss": 2548828,
        "year": 2016,
        "business": 33
    },
    {
        "id": 67,
        "ca": 1918594,
        "margin": 608420,
        "ebitda": 48656,
        "loss": 3929717,
        "year": 2017,
        "business": 34
    },
    {
        "id": 68,
        "ca": 3838016,
        "margin": -125324,
        "ebitda": 689653,
        "loss": 5153326,
        "year": 2016,
        "business": 34
    },
    {
        "id": 69,
        "ca": 784201,
        "margin": 152713,
        "ebitda": 747400,
        "loss": 5136538,
        "year": 2017,
        "business": 35
    },
    {
        "id": 70,
        "ca": 503662,
        "margin": 920524,
        "ebitda": 630705,
        "loss": 2303495,
        "year": 2016,
        "business": 35
    },
    {
        "id": 71,
        "ca": 929090,
        "margin": 564220,
        "ebitda": 252906,
        "loss": 9746310,
        "year": 2017,
        "business": 36
    },
    {
        "id": 72,
        "ca": 2158639,
        "margin": 105807,
        "ebitda": 693906,
        "loss": 1359336,
        "year": 2016,
        "business": 36
    },
    {
        "id": 73,
        "ca": 812364,
        "margin": 960696,
        "ebitda": 949485,
        "loss": 6544371,
        "year": 2017,
        "business": 37
    },
    {
        "id": 74,
        "ca": 1407290,
        "margin": -47395,
        "ebitda": 670520,
        "loss": 8967033,
        "year": 2016,
        "business": 37
    },
    {
        "id": 75,
        "ca": 2153000,
        "margin": 438242,
        "ebitda": 139511,
        "loss": 2935698,
        "year": 2017,
        "business": 38
    },
    {
        "id": 76,
        "ca": 3740737,
        "margin": 220257,
        "ebitda": 664757,
        "loss": 9211966,
        "year": 2016,
        "business": 38
    },
    {
        "id": 77,
        "ca": 2818761,
        "margin": -33832,
        "ebitda": 788293,
        "loss": 5486323,
        "year": 2017,
        "business": 39
    },
    {
        "id": 78,
        "ca": 2834251,
        "margin": 591851,
        "ebitda": 979319,
        "loss": 8620705,
        "year": 2016,
        "business": 39
    },
    {
        "id": 79,
        "ca": 2529178,
        "margin": 197369,
        "ebitda": 886454,
        "loss": 7279257,
        "year": 2017,
        "business": 40
    },
    {
        "id": 80,
        "ca": 3546117,
        "margin": 244818,
        "ebitda": 645308,
        "loss": 6806083,
        "year": 2016,
        "business": 40
    },
    {
        "id": 81,
        "ca": 1429780,
        "margin": 799453,
        "ebitda": 36259,
        "loss": 3355722,
        "year": 2017,
        "business": 41
    },
    {
        "id": 82,
        "ca": 2099179,
        "margin": -54616,
        "ebitda": 527125,
        "loss": 5403606,
        "year": 2016,
        "business": 41
    },
    {
        "id": 83,
        "ca": 2889040,
        "margin": 703385,
        "ebitda": 752653,
        "loss": 8681358,
        "year": 2017,
        "business": 42
    },
    {
        "id": 84,
        "ca": 2258022,
        "margin": 871789,
        "ebitda": 822206,
        "loss": 1999996,
        "year": 2016,
        "business": 42
    },
    {
        "id": 85,
        "ca": 2567850,
        "margin": -114309,
        "ebitda": 803022,
        "loss": 3644955,
        "year": 2017,
        "business": 43
    },
    {
        "id": 86,
        "ca": 2327035,
        "margin": 651791,
        "ebitda": 325188,
        "loss": 5600022,
        "year": 2016,
        "business": 43
    },
    {
        "id": 87,
        "ca": 3175010,
        "margin": 303265,
        "ebitda": 16810,
        "loss": 5997395,
        "year": 2017,
        "business": 44
    },
    {
        "id": 88,
        "ca": 3837947,
        "margin": -136899,
        "ebitda": 927198,
        "loss": 80596,
        "year": 2016,
        "business": 44
    },
    {
        "id": 89,
        "ca": 234247,
        "margin": 953337,
        "ebitda": 591502,
        "loss": 5046849,
        "year": 2017,
        "business": 45
    },
    {
        "id": 90,
        "ca": 3641315,
        "margin": 184658,
        "ebitda": 732802,
        "loss": 8076404,
        "year": 2016,
        "business": 45
    },
    {
        "id": 91,
        "ca": 1656818,
        "margin": 595587,
        "ebitda": 289090,
        "loss": 2974264,
        "year": 2017,
        "business": 46
    },
    {
        "id": 92,
        "ca": 398030,
        "margin": 593684,
        "ebitda": 562458,
        "loss": 5755394,
        "year": 2016,
        "business": 46
    },
    {
        "id": 93,
        "ca": 888190,
        "margin": -133730,
        "ebitda": 753834,
        "loss": 3572235,
        "year": 2017,
        "business": 47
    },
    {
        "id": 94,
        "ca": 819653,
        "margin": 714896,
        "ebitda": 990159,
        "loss": 7031751,
        "year": 2016,
        "business": 47
    },
    {
        "id": 95,
        "ca": 1361366,
        "margin": 738358,
        "ebitda": 886639,
        "loss": 804053,
        "year": 2017,
        "business": 48
    },
    {
        "id": 96,
        "ca": 2006011,
        "margin": 84480,
        "ebitda": 49659,
        "loss": 4884748,
        "year": 2016,
        "business": 48
    },
    {
        "id": 97,
        "ca": 3441535,
        "margin": 889969,
        "ebitda": 889269,
        "loss": 8285903,
        "year": 2017,
        "business": 49
    },
    {
        "id": 98,
        "ca": 2323637,
        "margin": 566912,
        "ebitda": 736335,
        "loss": 1409551,
        "year": 2016,
        "business": 49
    },
    {
        "id": 99,
        "ca": 2369218,
        "margin": -73152,
        "ebitda": 655888,
        "loss": 2911597,
        "year": 2017,
        "business": 50
    },
    {
        "id": 100,
        "ca": 1149241,
        "margin": 97437,
        "ebitda": 64417,
        "loss": 3166514,
        "year": 2016,
        "business": 50
    },
    {
        "id": 101,
        "ca": 814328,
        "margin": -48315,
        "ebitda": 783356,
        "loss": 576601,
        "year": 2017,
        "business": 51
    },
    {
        "id": 102,
        "ca": 1365842,
        "margin": -14642,
        "ebitda": 646031,
        "loss": 5953844,
        "year": 2016,
        "business": 51
    },
    {
        "id": 103,
        "ca": 1834374,
        "margin": 326249,
        "ebitda": 959880,
        "loss": 7187013,
        "year": 2017,
        "business": 52
    },
    {
        "id": 104,
        "ca": 1192992,
        "margin": 334113,
        "ebitda": 549808,
        "loss": 2930291,
        "year": 2016,
        "business": 52
    },
    {
        "id": 105,
        "ca": 2801651,
        "margin": -28139,
        "ebitda": 297122,
        "loss": 4191837,
        "year": 2017,
        "business": 53
    },
    {
        "id": 106,
        "ca": 3314282,
        "margin": 641617,
        "ebitda": 995032,
        "loss": 8459886,
        "year": 2016,
        "business": 53
    },
    {
        "id": 107,
        "ca": 2598845,
        "margin": 289164,
        "ebitda": 137003,
        "loss": 6548481,
        "year": 2017,
        "business": 54
    },
    {
        "id": 108,
        "ca": 3324436,
        "margin": 611157,
        "ebitda": 665734,
        "loss": 8164744,
        "year": 2016,
        "business": 54
    },
    {
        "id": 109,
        "ca": 1793980,
        "margin": 857354,
        "ebitda": 364851,
        "loss": 2272533,
        "year": 2017,
        "business": 55
    },
    {
        "id": 110,
        "ca": 212326,
        "margin": 147161,
        "ebitda": 359990,
        "loss": 9366460,
        "year": 2016,
        "business": 55
    },
    {
        "id": 111,
        "ca": 3060129,
        "margin": -57748,
        "ebitda": 111143,
        "loss": 5801049,
        "year": 2017,
        "business": 56
    },
    {
        "id": 112,
        "ca": 2732443,
        "margin": -185117,
        "ebitda": 897047,
        "loss": 5541022,
        "year": 2016,
        "business": 56
    },
    {
        "id": 113,
        "ca": 3683294,
        "margin": -12673,
        "ebitda": 436741,
        "loss": 3246692,
        "year": 2017,
        "business": 57
    },
    {
        "id": 114,
        "ca": 985195,
        "margin": 220215,
        "ebitda": 765111,
        "loss": 2435349,
        "year": 2016,
        "business": 57
    },
    {
        "id": 115,
        "ca": 1059793,
        "margin": 925668,
        "ebitda": 29499,
        "loss": 6657054,
        "year": 2017,
        "business": 58
    },
    {
        "id": 116,
        "ca": 3867970,
        "margin": 127172,
        "ebitda": 262415,
        "loss": 4816646,
        "year": 2016,
        "business": 58
    },
    {
        "id": 117,
        "ca": 1463808,
        "margin": 348258,
        "ebitda": 590048,
        "loss": 4065483,
        "year": 2017,
        "business": 59
    },
    {
        "id": 118,
        "ca": 1359073,
        "margin": 437928,
        "ebitda": 454686,
        "loss": 5863600,
        "year": 2016,
        "business": 59
    },
    {
        "id": 119,
        "ca": 824151,
        "margin": 966975,
        "ebitda": 688976,
        "loss": 4876715,
        "year": 2017,
        "business": 60
    },
    {
        "id": 120,
        "ca": 2072963,
        "margin": 185234,
        "ebitda": 496657,
        "loss": 6646201,
        "year": 2016,
        "business": 60
    },
    {
        "id": 121,
        "ca": 941673,
        "margin": 378932,
        "ebitda": 896642,
        "loss": 7541673,
        "year": 2017,
        "business": 61
    },
    {
        "id": 122,
        "ca": 3564685,
        "margin": 123815,
        "ebitda": 496294,
        "loss": 3757149,
        "year": 2016,
        "business": 61
    },
    {
        "id": 123,
        "ca": 3579908,
        "margin": 854056,
        "ebitda": 875551,
        "loss": 7027042,
        "year": 2017,
        "business": 62
    },
    {
        "id": 124,
        "ca": 3856568,
        "margin": 150722,
        "ebitda": 991135,
        "loss": 1980958,
        "year": 2016,
        "business": 62
    },
    {
        "id": 125,
        "ca": 1688779,
        "margin": -159723,
        "ebitda": 127885,
        "loss": 9553725,
        "year": 2017,
        "business": 63
    },
    {
        "id": 126,
        "ca": 2615968,
        "margin": 896077,
        "ebitda": 32744,
        "loss": 3546095,
        "year": 2016,
        "business": 63
    },
    {
        "id": 127,
        "ca": 699746,
        "margin": 91275,
        "ebitda": 400593,
        "loss": 3032962,
        "year": 2017,
        "business": 64
    },
    {
        "id": 128,
        "ca": 3004201,
        "margin": 439139,
        "ebitda": 203405,
        "loss": 903996,
        "year": 2016,
        "business": 64
    },
    {
        "id": 129,
        "ca": 585224,
        "margin": 146590,
        "ebitda": 695672,
        "loss": 211200,
        "year": 2017,
        "business": 65
    },
    {
        "id": 130,
        "ca": 3866780,
        "margin": 675857,
        "ebitda": 365233,
        "loss": 8891632,
        "year": 2016,
        "business": 65
    },
    {
        "id": 131,
        "ca": 809248,
        "margin": 333878,
        "ebitda": 816467,
        "loss": 8691711,
        "year": 2017,
        "business": 66
    },
    {
        "id": 132,
        "ca": 2637226,
        "margin": 319549,
        "ebitda": 91713,
        "loss": 3167156,
        "year": 2016,
        "business": 66
    },
    {
        "id": 133,
        "ca": 3778638,
        "margin": 334773,
        "ebitda": 679137,
        "loss": 7806071,
        "year": 2017,
        "business": 67
    },
    {
        "id": 134,
        "ca": 3497909,
        "margin": 319175,
        "ebitda": 450324,
        "loss": 4784609,
        "year": 2016,
        "business": 67
    },
    {
        "id": 135,
        "ca": 2425895,
        "margin": -36097,
        "ebitda": 510250,
        "loss": 4585429,
        "year": 2017,
        "business": 68
    },
    {
        "id": 136,
        "ca": 2291345,
        "margin": 82259,
        "ebitda": 699924,
        "loss": 7475043,
        "year": 2016,
        "business": 68
    },
    {
        "id": 137,
        "ca": 3506766,
        "margin": 274133,
        "ebitda": 34174,
        "loss": 3677732,
        "year": 2017,
        "business": 69
    },
    {
        "id": 138,
        "ca": 3282506,
        "margin": 259763,
        "ebitda": 103786,
        "loss": 6295907,
        "year": 2016,
        "business": 69
    },
    {
        "id": 139,
        "ca": 2909729,
        "margin": 369706,
        "ebitda": 85593,
        "loss": 3061624,
        "year": 2017,
        "business": 70
    },
    {
        "id": 140,
        "ca": 3276126,
        "margin": 288118,
        "ebitda": 993894,
        "loss": 2191412,
        "year": 2016,
        "business": 70
    },
    {
        "id": 141,
        "ca": 3587822,
        "margin": 74700,
        "ebitda": 522215,
        "loss": 6140731,
        "year": 2017,
        "business": 71
    },
    {
        "id": 142,
        "ca": 1583816,
        "margin": 570319,
        "ebitda": 574093,
        "loss": 5758950,
        "year": 2016,
        "business": 71
    },
    {
        "id": 143,
        "ca": 2661473,
        "margin": 917155,
        "ebitda": 431477,
        "loss": 9398696,
        "year": 2017,
        "business": 72
    },
    {
        "id": 144,
        "ca": 3912135,
        "margin": -79026,
        "ebitda": 907216,
        "loss": 5839494,
        "year": 2016,
        "business": 72
    },
    {
        "id": 145,
        "ca": 3916482,
        "margin": 789171,
        "ebitda": 591525,
        "loss": 4337407,
        "year": 2017,
        "business": 73
    },
    {
        "id": 146,
        "ca": 2851391,
        "margin": 154011,
        "ebitda": 75755,
        "loss": 4917589,
        "year": 2016,
        "business": 73
    },
    {
        "id": 147,
        "ca": 3877874,
        "margin": -64877,
        "ebitda": 283661,
        "loss": 8850825,
        "year": 2017,
        "business": 74
    },
    {
        "id": 148,
        "ca": 1780165,
        "margin": 627707,
        "ebitda": 188020,
        "loss": 4142561,
        "year": 2016,
        "business": 74
    },
    {
        "id": 149,
        "ca": 904887,
        "margin": 161426,
        "ebitda": 560772,
        "loss": 6954504,
        "year": 2017,
        "business": 75
    },
    {
        "id": 150,
        "ca": 675847,
        "margin": 233939,
        "ebitda": 339451,
        "loss": 8460591,
        "year": 2016,
        "business": 75
    },
    {
        "id": 151,
        "ca": 1258712,
        "margin": 193533,
        "ebitda": 133533,
        "loss": 2318027,
        "year": 2017,
        "business": 76
    },
    {
        "id": 152,
        "ca": 3082650,
        "margin": 728343,
        "ebitda": 380527,
        "loss": 4210061,
        "year": 2016,
        "business": 76
    },
    {
        "id": 153,
        "ca": 2145984,
        "margin": 192499,
        "ebitda": 678170,
        "loss": 2268864,
        "year": 2017,
        "business": 77
    },
    {
        "id": 154,
        "ca": 3810752,
        "margin": 501467,
        "ebitda": 529022,
        "loss": 3323238,
        "year": 2016,
        "business": 77
    },
    {
        "id": 155,
        "ca": 3393679,
        "margin": 512183,
        "ebitda": 633008,
        "loss": 73604,
        "year": 2017,
        "business": 78
    },
    {
        "id": 156,
        "ca": 2760846,
        "margin": 190767,
        "ebitda": 817737,
        "loss": 9471846,
        "year": 2016,
        "business": 78
    },
    {
        "id": 157,
        "ca": 490523,
        "margin": 144313,
        "ebitda": 564730,
        "loss": 8367688,
        "year": 2017,
        "business": 79
    },
    {
        "id": 158,
        "ca": 2068840,
        "margin": 114319,
        "ebitda": 650235,
        "loss": 8027168,
        "year": 2016,
        "business": 79
    },
    {
        "id": 159,
        "ca": 1512775,
        "margin": 940569,
        "ebitda": 603753,
        "loss": 206523,
        "year": 2017,
        "business": 80
    },
    {
        "id": 160,
        "ca": 2148636,
        "margin": 113689,
        "ebitda": 649884,
        "loss": 1327309,
        "year": 2016,
        "business": 80
    },
    {
        "id": 161,
        "ca": 2439582,
        "margin": 944973,
        "ebitda": 341871,
        "loss": 5177689,
        "year": 2017,
        "business": 81
    },
    {
        "id": 162,
        "ca": 2198174,
        "margin": 771806,
        "ebitda": 980122,
        "loss": 9350034,
        "year": 2016,
        "business": 81
    },
    {
        "id": 163,
        "ca": 3659120,
        "margin": 779837,
        "ebitda": 305681,
        "loss": 9238657,
        "year": 2017,
        "business": 82
    },
    {
        "id": 164,
        "ca": 979885,
        "margin": 290030,
        "ebitda": 902063,
        "loss": 4866811,
        "year": 2016,
        "business": 82
    },
    {
        "id": 165,
        "ca": 237512,
        "margin": -173455,
        "ebitda": 382060,
        "loss": 8829098,
        "year": 2017,
        "business": 83
    },
    {
        "id": 166,
        "ca": 2664685,
        "margin": 307524,
        "ebitda": 569126,
        "loss": 2712404,
        "year": 2016,
        "business": 83
    },
    {
        "id": 167,
        "ca": 3103484,
        "margin": 590803,
        "ebitda": 619969,
        "loss": 3865183,
        "year": 2017,
        "business": 84
    },
    {
        "id": 168,
        "ca": 3017136,
        "margin": 84984,
        "ebitda": 240512,
        "loss": 4807954,
        "year": 2016,
        "business": 84
    },
    {
        "id": 169,
        "ca": 3912615,
        "margin": -117225,
        "ebitda": 445707,
        "loss": 5775246,
        "year": 2017,
        "business": 85
    },
    {
        "id": 170,
        "ca": 1049888,
        "margin": 256288,
        "ebitda": 478302,
        "loss": 4897795,
        "year": 2016,
        "business": 85
    },
    {
        "id": 171,
        "ca": 3659084,
        "margin": 834841,
        "ebitda": 111987,
        "loss": 1501108,
        "year": 2017,
        "business": 86
    },
    {
        "id": 172,
        "ca": 1948201,
        "margin": 721214,
        "ebitda": 419050,
        "loss": 227777,
        "year": 2016,
        "business": 86
    },
    {
        "id": 173,
        "ca": 2468229,
        "margin": 265421,
        "ebitda": 302920,
        "loss": 6742927,
        "year": 2017,
        "business": 87
    },
    {
        "id": 174,
        "ca": 981901,
        "margin": 790569,
        "ebitda": 582045,
        "loss": 7632615,
        "year": 2016,
        "business": 87
    },
    {
        "id": 175,
        "ca": 2887913,
        "margin": 228444,
        "ebitda": 728088,
        "loss": 3141232,
        "year": 2017,
        "business": 88
    },
    {
        "id": 176,
        "ca": 189415,
        "margin": 806284,
        "ebitda": 356532,
        "loss": 3905434,
        "year": 2016,
        "business": 88
    },
    {
        "id": 177,
        "ca": 3800083,
        "margin": -89532,
        "ebitda": 327736,
        "loss": 6824193,
        "year": 2017,
        "business": 89
    },
    {
        "id": 178,
        "ca": 1908162,
        "margin": 431094,
        "ebitda": 25992,
        "loss": 9595756,
        "year": 2016,
        "business": 89
    },
    {
        "id": 179,
        "ca": 3745483,
        "margin": 75040,
        "ebitda": 162296,
        "loss": 3479762,
        "year": 2017,
        "business": 90
    },
    {
        "id": 180,
        "ca": 343820,
        "margin": 20513,
        "ebitda": 59485,
        "loss": 5856270,
        "year": 2016,
        "business": 90
    },
    {
        "id": 181,
        "ca": 3425132,
        "margin": -158363,
        "ebitda": 693691,
        "loss": 3120330,
        "year": 2017,
        "business": 91
    },
    {
        "id": 182,
        "ca": 822070,
        "margin": 84604,
        "ebitda": 656191,
        "loss": 7205276,
        "year": 2016,
        "business": 91
    },
    {
        "id": 183,
        "ca": 655614,
        "margin": -52212,
        "ebitda": 269990,
        "loss": 1615367,
        "year": 2017,
        "business": 92
    },
    {
        "id": 184,
        "ca": 2728842,
        "margin": 160237,
        "ebitda": 185348,
        "loss": 4906909,
        "year": 2016,
        "business": 92
    },
    {
        "id": 185,
        "ca": 2447276,
        "margin": 759527,
        "ebitda": 264569,
        "loss": 7761164,
        "year": 2017,
        "business": 93
    },
    {
        "id": 186,
        "ca": 1386121,
        "margin": 113756,
        "ebitda": 957702,
        "loss": 9364683,
        "year": 2016,
        "business": 93
    },
    {
        "id": 187,
        "ca": 3416004,
        "margin": 786426,
        "ebitda": 707607,
        "loss": 23276,
        "year": 2017,
        "business": 94
    },
    {
        "id": 188,
        "ca": 2612412,
        "margin": -199540,
        "ebitda": 691088,
        "loss": 2221698,
        "year": 2016,
        "business": 94
    },
    {
        "id": 189,
        "ca": 2234315,
        "margin": 854793,
        "ebitda": 497843,
        "loss": 1765597,
        "year": 2017,
        "business": 95
    },
    {
        "id": 190,
        "ca": 2195485,
        "margin": 482912,
        "ebitda": 496411,
        "loss": 1351504,
        "year": 2016,
        "business": 95
    },
    {
        "id": 191,
        "ca": 3192822,
        "margin": 218034,
        "ebitda": 176043,
        "loss": 1017293,
        "year": 2017,
        "business": 96
    },
    {
        "id": 192,
        "ca": 3860272,
        "margin": 508122,
        "ebitda": 427761,
        "loss": 2805201,
        "year": 2016,
        "business": 96
    },
    {
        "id": 193,
        "ca": 3200566,
        "margin": -185746,
        "ebitda": 195282,
        "loss": 5455395,
        "year": 2017,
        "business": 97
    },
    {
        "id": 194,
        "ca": 3857386,
        "margin": -69191,
        "ebitda": 810974,
        "loss": 5892310,
        "year": 2016,
        "business": 97
    },
    {
        "id": 195,
        "ca": 1962652,
        "margin": -154905,
        "ebitda": 25111,
        "loss": 8546105,
        "year": 2017,
        "business": 98
    },
    {
        "id": 196,
        "ca": 3195779,
        "margin": 951399,
        "ebitda": 867936,
        "loss": 5735554,
        "year": 2016,
        "business": 98
    },
    {
        "id": 197,
        "ca": 1644293,
        "margin": 673942,
        "ebitda": 903520,
        "loss": 4987871,
        "year": 2017,
        "business": 99
    },
    {
        "id": 198,
        "ca": 1470234,
        "margin": 829962,
        "ebitda": 51651,
        "loss": 8454350,
        "year": 2016,
        "business": 99
    },
    {
        "id": 199,
        "ca": 2826282,
        "margin": 649836,
        "ebitda": 509479,
        "loss": 6041428,
        "year": 2017,
        "business": 100
    },
    {
        "id": 200,
        "ca": 245755,
        "margin": 587147,
        "ebitda": 594271,
        "loss": 6957641,
        "year": 2016,
        "business": 100
    },
    {
        "id": 201,
        "ca": 3327290,
        "margin": 899824,
        "ebitda": 550704,
        "loss": 1504113,
        "year": 2017,
        "business": 101
    },
    {
        "id": 202,
        "ca": 341283,
        "margin": 119743,
        "ebitda": 570573,
        "loss": 55269,
        "year": 2016,
        "business": 101
    },
    {
        "id": 203,
        "ca": 462668,
        "margin": 604230,
        "ebitda": 356528,
        "loss": 8071941,
        "year": 2017,
        "business": 102
    },
    {
        "id": 204,
        "ca": 3380896,
        "margin": 756817,
        "ebitda": 99705,
        "loss": 9239734,
        "year": 2016,
        "business": 102
    },
    {
        "id": 205,
        "ca": 1135055,
        "margin": 443478,
        "ebitda": 546961,
        "loss": 9210909,
        "year": 2017,
        "business": 103
    },
    {
        "id": 206,
        "ca": 545741,
        "margin": -98098,
        "ebitda": 957298,
        "loss": 9236643,
        "year": 2016,
        "business": 103
    },
    {
        "id": 207,
        "ca": 2127852,
        "margin": -43695,
        "ebitda": 825959,
        "loss": 5476726,
        "year": 2017,
        "business": 104
    },
    {
        "id": 208,
        "ca": 3590326,
        "margin": 586725,
        "ebitda": 577118,
        "loss": 3504338,
        "year": 2016,
        "business": 104
    },
    {
        "id": 209,
        "ca": 2778639,
        "margin": -140897,
        "ebitda": 777472,
        "loss": 7785753,
        "year": 2017,
        "business": 105
    },
    {
        "id": 210,
        "ca": 2613872,
        "margin": 297422,
        "ebitda": 247167,
        "loss": 2497521,
        "year": 2016,
        "business": 105
    },
    {
        "id": 211,
        "ca": 3688832,
        "margin": 975240,
        "ebitda": 846552,
        "loss": 4088075,
        "year": 2017,
        "business": 106
    },
    {
        "id": 212,
        "ca": 1969358,
        "margin": 460144,
        "ebitda": 102752,
        "loss": 3499302,
        "year": 2016,
        "business": 106
    },
    {
        "id": 213,
        "ca": 2470780,
        "margin": 961928,
        "ebitda": 924211,
        "loss": 3421789,
        "year": 2017,
        "business": 107
    },
    {
        "id": 214,
        "ca": 224960,
        "margin": -119746,
        "ebitda": 372508,
        "loss": 3206750,
        "year": 2016,
        "business": 107
    },
    {
        "id": 215,
        "ca": 2764252,
        "margin": 529821,
        "ebitda": 114227,
        "loss": 5435275,
        "year": 2017,
        "business": 108
    },
    {
        "id": 216,
        "ca": 3652719,
        "margin": 405054,
        "ebitda": 531878,
        "loss": 2135356,
        "year": 2016,
        "business": 108
    },
    {
        "id": 217,
        "ca": 2185450,
        "margin": 931264,
        "ebitda": 662242,
        "loss": 1313372,
        "year": 2017,
        "business": 109
    },
    {
        "id": 218,
        "ca": 1044919,
        "margin": 516351,
        "ebitda": 784607,
        "loss": 6096208,
        "year": 2016,
        "business": 109
    },
    {
        "id": 219,
        "ca": 259137,
        "margin": -18515,
        "ebitda": 299908,
        "loss": 3178418,
        "year": 2017,
        "business": 110
    },
    {
        "id": 220,
        "ca": 2534435,
        "margin": 956966,
        "ebitda": 416290,
        "loss": 1027510,
        "year": 2016,
        "business": 110
    },
    {
        "id": 221,
        "ca": 1162815,
        "margin": -14235,
        "ebitda": 398776,
        "loss": 8756129,
        "year": 2017,
        "business": 111
    },
    {
        "id": 222,
        "ca": 459280,
        "margin": 193369,
        "ebitda": 207787,
        "loss": 1827340,
        "year": 2016,
        "business": 111
    },
    {
        "id": 223,
        "ca": 2620136,
        "margin": -101904,
        "ebitda": 479649,
        "loss": 7479609,
        "year": 2017,
        "business": 112
    },
    {
        "id": 224,
        "ca": 3287400,
        "margin": -151678,
        "ebitda": 813570,
        "loss": 1946322,
        "year": 2016,
        "business": 112
    },
    {
        "id": 225,
        "ca": 1140344,
        "margin": 723390,
        "ebitda": 100896,
        "loss": 1688200,
        "year": 2017,
        "business": 113
    },
    {
        "id": 226,
        "ca": 2717260,
        "margin": 210390,
        "ebitda": 676120,
        "loss": 2957295,
        "year": 2016,
        "business": 113
    },
    {
        "id": 227,
        "ca": 2538329,
        "margin": 734860,
        "ebitda": 508364,
        "loss": 451322,
        "year": 2017,
        "business": 114
    },
    {
        "id": 228,
        "ca": 2189921,
        "margin": 626527,
        "ebitda": 233808,
        "loss": 7066105,
        "year": 2016,
        "business": 114
    },
    {
        "id": 229,
        "ca": 3065956,
        "margin": -195154,
        "ebitda": 177226,
        "loss": 6948108,
        "year": 2017,
        "business": 115
    },
    {
        "id": 230,
        "ca": 3195702,
        "margin": -69009,
        "ebitda": 114003,
        "loss": 5127790,
        "year": 2016,
        "business": 115
    },
    {
        "id": 231,
        "ca": 422978,
        "margin": 94559,
        "ebitda": 823744,
        "loss": 3359150,
        "year": 2017,
        "business": 116
    },
    {
        "id": 232,
        "ca": 208146,
        "margin": 57654,
        "ebitda": 640763,
        "loss": 183093,
        "year": 2016,
        "business": 116
    },
    {
        "id": 233,
        "ca": 972570,
        "margin": 629649,
        "ebitda": 37940,
        "loss": 8979978,
        "year": 2017,
        "business": 117
    },
    {
        "id": 234,
        "ca": 396800,
        "margin": 834123,
        "ebitda": 67102,
        "loss": 7209932,
        "year": 2016,
        "business": 117
    },
    {
        "id": 235,
        "ca": 2943058,
        "margin": 215243,
        "ebitda": 48482,
        "loss": 4402355,
        "year": 2017,
        "business": 118
    },
    {
        "id": 236,
        "ca": 3257610,
        "margin": 320457,
        "ebitda": 263553,
        "loss": 4910999,
        "year": 2016,
        "business": 118
    },
    {
        "id": 237,
        "ca": 2664114,
        "margin": 490145,
        "ebitda": 36829,
        "loss": 6897664,
        "year": 2017,
        "business": 119
    },
    {
        "id": 238,
        "ca": 1131974,
        "margin": -42196,
        "ebitda": 313290,
        "loss": 9926057,
        "year": 2016,
        "business": 119
    },
    {
        "id": 239,
        "ca": 1941867,
        "margin": 471839,
        "ebitda": 13173,
        "loss": 7905781,
        "year": 2017,
        "business": 120
    },
    {
        "id": 240,
        "ca": 331860,
        "margin": 690879,
        "ebitda": 662024,
        "loss": 6624351,
        "year": 2016,
        "business": 120
    },
    {
        "id": 241,
        "ca": 3125130,
        "margin": 744785,
        "ebitda": 447239,
        "loss": 7954513,
        "year": 2017,
        "business": 121
    },
    {
        "id": 242,
        "ca": 1776670,
        "margin": 335968,
        "ebitda": 530468,
        "loss": 7222889,
        "year": 2016,
        "business": 121
    },
    {
        "id": 243,
        "ca": 742960,
        "margin": 858653,
        "ebitda": 281458,
        "loss": 3466749,
        "year": 2017,
        "business": 122
    },
    {
        "id": 244,
        "ca": 707651,
        "margin": 759887,
        "ebitda": 88486,
        "loss": 8495068,
        "year": 2016,
        "business": 122
    },
    {
        "id": 245,
        "ca": 3789623,
        "margin": 594833,
        "ebitda": 468811,
        "loss": 4259578,
        "year": 2017,
        "business": 123
    },
    {
        "id": 246,
        "ca": 2673438,
        "margin": -174464,
        "ebitda": 146370,
        "loss": 3437376,
        "year": 2016,
        "business": 123
    },
    {
        "id": 247,
        "ca": 3983091,
        "margin": 321894,
        "ebitda": 468394,
        "loss": 3598738,
        "year": 2017,
        "business": 124
    },
    {
        "id": 248,
        "ca": 2155612,
        "margin": -90426,
        "ebitda": 135069,
        "loss": 7570748,
        "year": 2016,
        "business": 124
    },
    {
        "id": 249,
        "ca": 3356712,
        "margin": 434919,
        "ebitda": 545026,
        "loss": 493058,
        "year": 2017,
        "business": 125
    },
    {
        "id": 250,
        "ca": 3389973,
        "margin": 434454,
        "ebitda": 498436,
        "loss": 5510423,
        "year": 2016,
        "business": 125
    },
    {
        "id": 251,
        "ca": 2478546,
        "margin": 961503,
        "ebitda": 857657,
        "loss": 8775511,
        "year": 2017,
        "business": 126
    },
    {
        "id": 252,
        "ca": 938287,
        "margin": -55114,
        "ebitda": 950421,
        "loss": 4285809,
        "year": 2016,
        "business": 126
    },
    {
        "id": 253,
        "ca": 1968605,
        "margin": -125632,
        "ebitda": 475499,
        "loss": 812398,
        "year": 2017,
        "business": 127
    },
    {
        "id": 254,
        "ca": 3267318,
        "margin": 842626,
        "ebitda": 764070,
        "loss": 5126685,
        "year": 2016,
        "business": 127
    },
    {
        "id": 255,
        "ca": 3801438,
        "margin": -153083,
        "ebitda": 245354,
        "loss": 2158373,
        "year": 2017,
        "business": 128
    },
    {
        "id": 256,
        "ca": 3778888,
        "margin": 127422,
        "ebitda": 594834,
        "loss": 4421471,
        "year": 2016,
        "business": 128
    },
    {
        "id": 257,
        "ca": 3416590,
        "margin": -157804,
        "ebitda": 343015,
        "loss": 7227365,
        "year": 2017,
        "business": 129
    },
    {
        "id": 258,
        "ca": 377108,
        "margin": -138893,
        "ebitda": 871520,
        "loss": 9007279,
        "year": 2016,
        "business": 129
    },
    {
        "id": 259,
        "ca": 2568272,
        "margin": 984764,
        "ebitda": 373439,
        "loss": 9908569,
        "year": 2017,
        "business": 130
    },
    {
        "id": 260,
        "ca": 2921971,
        "margin": 977489,
        "ebitda": 449249,
        "loss": 6869930,
        "year": 2016,
        "business": 130
    },
    {
        "id": 261,
        "ca": 1355013,
        "margin": 850802,
        "ebitda": 11507,
        "loss": 6313235,
        "year": 2017,
        "business": 131
    },
    {
        "id": 262,
        "ca": 830234,
        "margin": -183139,
        "ebitda": 848478,
        "loss": 4909293,
        "year": 2016,
        "business": 131
    },
    {
        "id": 263,
        "ca": 2840236,
        "margin": 440627,
        "ebitda": 163252,
        "loss": 3711355,
        "year": 2017,
        "business": 132
    },
    {
        "id": 264,
        "ca": 2589957,
        "margin": 249459,
        "ebitda": 93916,
        "loss": 3213459,
        "year": 2016,
        "business": 132
    },
    {
        "id": 265,
        "ca": 2549056,
        "margin": -85700,
        "ebitda": 5389,
        "loss": 2116436,
        "year": 2017,
        "business": 133
    },
    {
        "id": 266,
        "ca": 3944708,
        "margin": 719236,
        "ebitda": 173232,
        "loss": 1386439,
        "year": 2016,
        "business": 133
    },
    {
        "id": 267,
        "ca": 437190,
        "margin": 493156,
        "ebitda": 157659,
        "loss": 7395462,
        "year": 2017,
        "business": 134
    },
    {
        "id": 268,
        "ca": 1065528,
        "margin": 763303,
        "ebitda": 373006,
        "loss": 1495155,
        "year": 2016,
        "business": 134
    },
    {
        "id": 269,
        "ca": 3755756,
        "margin": 262148,
        "ebitda": 913094,
        "loss": 1041892,
        "year": 2017,
        "business": 135
    },
    {
        "id": 270,
        "ca": 2234815,
        "margin": 852632,
        "ebitda": 974573,
        "loss": 9917319,
        "year": 2016,
        "business": 135
    },
    {
        "id": 271,
        "ca": 3946624,
        "margin": 34429,
        "ebitda": 402147,
        "loss": 111655,
        "year": 2017,
        "business": 136
    },
    {
        "id": 272,
        "ca": 3681572,
        "margin": -8227,
        "ebitda": 626437,
        "loss": 4923464,
        "year": 2016,
        "business": 136
    },
    {
        "id": 273,
        "ca": 1005335,
        "margin": 368433,
        "ebitda": 550062,
        "loss": 900926,
        "year": 2017,
        "business": 137
    },
    {
        "id": 274,
        "ca": 888539,
        "margin": 94321,
        "ebitda": 784603,
        "loss": 5320548,
        "year": 2016,
        "business": 137
    },
    {
        "id": 275,
        "ca": 2395166,
        "margin": 969533,
        "ebitda": 71778,
        "loss": 2587520,
        "year": 2017,
        "business": 138
    },
    {
        "id": 276,
        "ca": 3616153,
        "margin": 226390,
        "ebitda": 991195,
        "loss": 2094547,
        "year": 2016,
        "business": 138
    },
    {
        "id": 277,
        "ca": 422266,
        "margin": 682533,
        "ebitda": 431425,
        "loss": 6597671,
        "year": 2017,
        "business": 139
    },
    {
        "id": 278,
        "ca": 3342599,
        "margin": 218946,
        "ebitda": 392966,
        "loss": 1752443,
        "year": 2016,
        "business": 139
    },
    {
        "id": 279,
        "ca": 2782561,
        "margin": 777578,
        "ebitda": 930379,
        "loss": 8318681,
        "year": 2017,
        "business": 140
    },
    {
        "id": 280,
        "ca": 3787599,
        "margin": 645089,
        "ebitda": 267539,
        "loss": 2980623,
        "year": 2016,
        "business": 140
    },
    {
        "id": 281,
        "ca": 1550625,
        "margin": -85942,
        "ebitda": 907511,
        "loss": 3183937,
        "year": 2017,
        "business": 141
    },
    {
        "id": 282,
        "ca": 712133,
        "margin": 968052,
        "ebitda": 132100,
        "loss": 1854200,
        "year": 2016,
        "business": 141
    },
    {
        "id": 283,
        "ca": 692862,
        "margin": 690260,
        "ebitda": 169366,
        "loss": 1084,
        "year": 2017,
        "business": 142
    },
    {
        "id": 284,
        "ca": 3019123,
        "margin": 16984,
        "ebitda": 191909,
        "loss": 8781499,
        "year": 2016,
        "business": 142
    },
    {
        "id": 285,
        "ca": 3888122,
        "margin": 403405,
        "ebitda": 860517,
        "loss": 2219960,
        "year": 2017,
        "business": 143
    },
    {
        "id": 286,
        "ca": 3486309,
        "margin": 941118,
        "ebitda": 792651,
        "loss": 5300191,
        "year": 2016,
        "business": 143
    },
    {
        "id": 287,
        "ca": 1927731,
        "margin": 429683,
        "ebitda": 191211,
        "loss": 7817217,
        "year": 2017,
        "business": 144
    },
    {
        "id": 288,
        "ca": 3277944,
        "margin": 627776,
        "ebitda": 459614,
        "loss": 3720740,
        "year": 2016,
        "business": 144
    },
    {
        "id": 289,
        "ca": 882814,
        "margin": 758601,
        "ebitda": 216464,
        "loss": 4544052,
        "year": 2017,
        "business": 145
    },
    {
        "id": 290,
        "ca": 2631088,
        "margin": 956106,
        "ebitda": 622017,
        "loss": 8809182,
        "year": 2016,
        "business": 145
    },
    {
        "id": 291,
        "ca": 3444784,
        "margin": 195522,
        "ebitda": 376220,
        "loss": 2911014,
        "year": 2017,
        "business": 146
    },
    {
        "id": 292,
        "ca": 682068,
        "margin": 269857,
        "ebitda": 464165,
        "loss": 192658,
        "year": 2016,
        "business": 146
    },
    {
        "id": 293,
        "ca": 2562170,
        "margin": 81679,
        "ebitda": 799147,
        "loss": 5478487,
        "year": 2017,
        "business": 147
    },
    {
        "id": 294,
        "ca": 1890803,
        "margin": 59146,
        "ebitda": 630618,
        "loss": 8869806,
        "year": 2016,
        "business": 147
    },
    {
        "id": 295,
        "ca": 681126,
        "margin": 376036,
        "ebitda": 167727,
        "loss": 4979890,
        "year": 2017,
        "business": 148
    },
    {
        "id": 296,
        "ca": 2944448,
        "margin": 994337,
        "ebitda": 79204,
        "loss": 6921074,
        "year": 2016,
        "business": 148
    },
    {
        "id": 297,
        "ca": 585068,
        "margin": 225329,
        "ebitda": 90207,
        "loss": 6434449,
        "year": 2017,
        "business": 149
    },
    {
        "id": 298,
        "ca": 1204281,
        "margin": 854108,
        "ebitda": 966444,
        "loss": 8562260,
        "year": 2016,
        "business": 149
    },
    {
        "id": 299,
        "ca": 893560,
        "margin": 97802,
        "ebitda": 904144,
        "loss": 3800312,
        "year": 2017,
        "business": 150
    },
    {
        "id": 300,
        "ca": 2349739,
        "margin": 434666,
        "ebitda": 56349,
        "loss": 561275,
        "year": 2016,
        "business": 150
    },
    {
        "id": 301,
        "ca": 1614918,
        "margin": 382197,
        "ebitda": 844139,
        "loss": 5643268,
        "year": 2017,
        "business": 151
    },
    {
        "id": 302,
        "ca": 3785592,
        "margin": 665218,
        "ebitda": 469223,
        "loss": 6358594,
        "year": 2016,
        "business": 151
    },
    {
        "id": 303,
        "ca": 1392867,
        "margin": 368445,
        "ebitda": 46335,
        "loss": 9507259,
        "year": 2017,
        "business": 152
    },
    {
        "id": 304,
        "ca": 1757963,
        "margin": 725923,
        "ebitda": 403027,
        "loss": 8971658,
        "year": 2016,
        "business": 152
    },
    {
        "id": 305,
        "ca": 1341838,
        "margin": 754167,
        "ebitda": 335288,
        "loss": 3878838,
        "year": 2017,
        "business": 153
    },
    {
        "id": 306,
        "ca": 2619963,
        "margin": -83882,
        "ebitda": 126462,
        "loss": 1145383,
        "year": 2016,
        "business": 153
    },
    {
        "id": 307,
        "ca": 2437096,
        "margin": 487616,
        "ebitda": 912412,
        "loss": 6760181,
        "year": 2017,
        "business": 154
    },
    {
        "id": 308,
        "ca": 316486,
        "margin": 139218,
        "ebitda": 224389,
        "loss": 603330,
        "year": 2016,
        "business": 154
    },
    {
        "id": 309,
        "ca": 2921327,
        "margin": 373338,
        "ebitda": 511463,
        "loss": 4733450,
        "year": 2017,
        "business": 155
    },
    {
        "id": 310,
        "ca": 2505362,
        "margin": 187809,
        "ebitda": 122822,
        "loss": 1032870,
        "year": 2016,
        "business": 155
    },
    {
        "id": 311,
        "ca": 2126856,
        "margin": 877768,
        "ebitda": 847746,
        "loss": 4021009,
        "year": 2017,
        "business": 156
    },
    {
        "id": 312,
        "ca": 1477996,
        "margin": 45120,
        "ebitda": 972963,
        "loss": 2583371,
        "year": 2016,
        "business": 156
    },
    {
        "id": 313,
        "ca": 2432945,
        "margin": 291324,
        "ebitda": 683014,
        "loss": 7616154,
        "year": 2017,
        "business": 157
    },
    {
        "id": 314,
        "ca": 3769832,
        "margin": 216140,
        "ebitda": 551569,
        "loss": 5413005,
        "year": 2016,
        "business": 157
    },
    {
        "id": 315,
        "ca": 135769,
        "margin": -156465,
        "ebitda": 403001,
        "loss": 3563671,
        "year": 2017,
        "business": 158
    },
    {
        "id": 316,
        "ca": 212281,
        "margin": 467116,
        "ebitda": 121450,
        "loss": 9302688,
        "year": 2016,
        "business": 158
    },
    {
        "id": 317,
        "ca": 1777633,
        "margin": 460911,
        "ebitda": 644913,
        "loss": 1587930,
        "year": 2017,
        "business": 159
    },
    {
        "id": 318,
        "ca": 2546679,
        "margin": 595119,
        "ebitda": 553749,
        "loss": 5492039,
        "year": 2016,
        "business": 159
    },
    {
        "id": 319,
        "ca": 3746698,
        "margin": 213990,
        "ebitda": 43605,
        "loss": 6109786,
        "year": 2017,
        "business": 160
    },
    {
        "id": 320,
        "ca": 3114941,
        "margin": 361126,
        "ebitda": 441915,
        "loss": 2765979,
        "year": 2016,
        "business": 160
    },
    {
        "id": 321,
        "ca": 3325510,
        "margin": 769574,
        "ebitda": 66975,
        "loss": 4644168,
        "year": 2017,
        "business": 161
    },
    {
        "id": 322,
        "ca": 3517098,
        "margin": 337812,
        "ebitda": 800242,
        "loss": 7143754,
        "year": 2016,
        "business": 161
    },
    {
        "id": 323,
        "ca": 3861761,
        "margin": -24465,
        "ebitda": 484479,
        "loss": 5561445,
        "year": 2017,
        "business": 162
    },
    {
        "id": 324,
        "ca": 3557896,
        "margin": 591734,
        "ebitda": 343633,
        "loss": 4083362,
        "year": 2016,
        "business": 162
    },
    {
        "id": 325,
        "ca": 1920785,
        "margin": 667395,
        "ebitda": 732506,
        "loss": 716880,
        "year": 2017,
        "business": 163
    },
    {
        "id": 326,
        "ca": 2539401,
        "margin": 62751,
        "ebitda": 353245,
        "loss": 5528983,
        "year": 2016,
        "business": 163
    },
    {
        "id": 327,
        "ca": 395830,
        "margin": -31127,
        "ebitda": 569196,
        "loss": 3324194,
        "year": 2017,
        "business": 164
    },
    {
        "id": 328,
        "ca": 3982803,
        "margin": 230150,
        "ebitda": 413155,
        "loss": 4555447,
        "year": 2016,
        "business": 164
    },
    {
        "id": 329,
        "ca": 2969124,
        "margin": 83607,
        "ebitda": 616539,
        "loss": 4563818,
        "year": 2017,
        "business": 165
    },
    {
        "id": 330,
        "ca": 3501568,
        "margin": 971779,
        "ebitda": 503991,
        "loss": 6859937,
        "year": 2016,
        "business": 165
    },
    {
        "id": 331,
        "ca": 2642821,
        "margin": 814335,
        "ebitda": 488875,
        "loss": 9368034,
        "year": 2017,
        "business": 166
    },
    {
        "id": 332,
        "ca": 3384738,
        "margin": 221024,
        "ebitda": 139033,
        "loss": 2968175,
        "year": 2016,
        "business": 166
    },
    {
        "id": 333,
        "ca": 2569913,
        "margin": 496831,
        "ebitda": 535131,
        "loss": 7106661,
        "year": 2017,
        "business": 167
    },
    {
        "id": 334,
        "ca": 2087883,
        "margin": 213266,
        "ebitda": 544093,
        "loss": 9546973,
        "year": 2016,
        "business": 167
    },
    {
        "id": 335,
        "ca": 3406554,
        "margin": -185455,
        "ebitda": 71849,
        "loss": 3334975,
        "year": 2017,
        "business": 168
    },
    {
        "id": 336,
        "ca": 2593135,
        "margin": 708076,
        "ebitda": 879420,
        "loss": 9313385,
        "year": 2016,
        "business": 168
    },
    {
        "id": 337,
        "ca": 1884890,
        "margin": 183610,
        "ebitda": 41640,
        "loss": 8047935,
        "year": 2017,
        "business": 169
    },
    {
        "id": 338,
        "ca": 538038,
        "margin": 924445,
        "ebitda": 219592,
        "loss": 4407039,
        "year": 2016,
        "business": 169
    },
    {
        "id": 339,
        "ca": 119365,
        "margin": 60990,
        "ebitda": 703590,
        "loss": 284338,
        "year": 2017,
        "business": 170
    },
    {
        "id": 340,
        "ca": 3946517,
        "margin": 390557,
        "ebitda": 662955,
        "loss": 9170616,
        "year": 2016,
        "business": 170
    },
    {
        "id": 341,
        "ca": 2813075,
        "margin": 630400,
        "ebitda": 67567,
        "loss": 1476733,
        "year": 2017,
        "business": 171
    },
    {
        "id": 342,
        "ca": 3576450,
        "margin": 661458,
        "ebitda": 371638,
        "loss": 9636123,
        "year": 2016,
        "business": 171
    },
    {
        "id": 343,
        "ca": 3365933,
        "margin": 823024,
        "ebitda": 56764,
        "loss": 110733,
        "year": 2017,
        "business": 172
    },
    {
        "id": 344,
        "ca": 228843,
        "margin": 290197,
        "ebitda": 142212,
        "loss": 4974910,
        "year": 2016,
        "business": 172
    },
    {
        "id": 345,
        "ca": 3958314,
        "margin": 893118,
        "ebitda": 141658,
        "loss": 8494474,
        "year": 2017,
        "business": 173
    },
    {
        "id": 346,
        "ca": 527951,
        "margin": 19072,
        "ebitda": 612565,
        "loss": 3916439,
        "year": 2016,
        "business": 173
    },
    {
        "id": 347,
        "ca": 3462684,
        "margin": 644266,
        "ebitda": 472240,
        "loss": 7405624,
        "year": 2017,
        "business": 174
    },
    {
        "id": 348,
        "ca": 3537276,
        "margin": 663791,
        "ebitda": 796987,
        "loss": 2377887,
        "year": 2016,
        "business": 174
    },
    {
        "id": 349,
        "ca": 2544895,
        "margin": -141165,
        "ebitda": 283671,
        "loss": 508099,
        "year": 2017,
        "business": 175
    },
    {
        "id": 350,
        "ca": 3698373,
        "margin": 404379,
        "ebitda": 571012,
        "loss": 1987033,
        "year": 2016,
        "business": 175
    },
    {
        "id": 351,
        "ca": 3210938,
        "margin": -189704,
        "ebitda": 553580,
        "loss": 4995940,
        "year": 2017,
        "business": 176
    },
    {
        "id": 352,
        "ca": 2992011,
        "margin": 586103,
        "ebitda": 514250,
        "loss": 8596448,
        "year": 2016,
        "business": 176
    },
    {
        "id": 353,
        "ca": 1336448,
        "margin": 490008,
        "ebitda": 750571,
        "loss": 3664654,
        "year": 2017,
        "business": 177
    },
    {
        "id": 354,
        "ca": 2992164,
        "margin": 538208,
        "ebitda": 647371,
        "loss": 4033479,
        "year": 2016,
        "business": 177
    },
    {
        "id": 355,
        "ca": 3194909,
        "margin": 186423,
        "ebitda": 226764,
        "loss": 4638762,
        "year": 2017,
        "business": 178
    },
    {
        "id": 356,
        "ca": 2755844,
        "margin": 12454,
        "ebitda": 648122,
        "loss": 6664079,
        "year": 2016,
        "business": 178
    },
    {
        "id": 357,
        "ca": 3602830,
        "margin": -154058,
        "ebitda": 524059,
        "loss": 9102881,
        "year": 2017,
        "business": 179
    },
    {
        "id": 358,
        "ca": 2506505,
        "margin": -175518,
        "ebitda": 657072,
        "loss": 36933,
        "year": 2016,
        "business": 179
    },
    {
        "id": 359,
        "ca": 2839567,
        "margin": 732502,
        "ebitda": 374009,
        "loss": 2046547,
        "year": 2017,
        "business": 180
    },
    {
        "id": 360,
        "ca": 1146459,
        "margin": 591485,
        "ebitda": 162006,
        "loss": 1718123,
        "year": 2016,
        "business": 180
    },
    {
        "id": 361,
        "ca": 358435,
        "margin": 337169,
        "ebitda": 629865,
        "loss": 6094688,
        "year": 2017,
        "business": 181
    },
    {
        "id": 362,
        "ca": 785779,
        "margin": 885873,
        "ebitda": 269914,
        "loss": 7522765,
        "year": 2016,
        "business": 181
    },
    {
        "id": 363,
        "ca": 1021656,
        "margin": 507711,
        "ebitda": 624623,
        "loss": 6483736,
        "year": 2017,
        "business": 182
    },
    {
        "id": 364,
        "ca": 1670117,
        "margin": 194408,
        "ebitda": 359738,
        "loss": 6034374,
        "year": 2016,
        "business": 182
    },
    {
        "id": 365,
        "ca": 2611382,
        "margin": 425943,
        "ebitda": 316796,
        "loss": 9923888,
        "year": 2017,
        "business": 183
    },
    {
        "id": 366,
        "ca": 2595729,
        "margin": 157343,
        "ebitda": 198976,
        "loss": 3155285,
        "year": 2016,
        "business": 183
    },
    {
        "id": 367,
        "ca": 2285910,
        "margin": 63737,
        "ebitda": 362562,
        "loss": 6239080,
        "year": 2017,
        "business": 184
    },
    {
        "id": 368,
        "ca": 289467,
        "margin": 840863,
        "ebitda": 585829,
        "loss": 1982316,
        "year": 2016,
        "business": 184
    },
    {
        "id": 369,
        "ca": 2965432,
        "margin": 184079,
        "ebitda": 744758,
        "loss": 4597289,
        "year": 2017,
        "business": 185
    },
    {
        "id": 370,
        "ca": 2799755,
        "margin": 49662,
        "ebitda": 133091,
        "loss": 1774510,
        "year": 2016,
        "business": 185
    },
    {
        "id": 371,
        "ca": 1057476,
        "margin": 441918,
        "ebitda": 156841,
        "loss": 4403545,
        "year": 2017,
        "business": 186
    },
    {
        "id": 372,
        "ca": 3085139,
        "margin": 623575,
        "ebitda": 969986,
        "loss": 3834447,
        "year": 2016,
        "business": 186
    },
    {
        "id": 373,
        "ca": 3184439,
        "margin": 488997,
        "ebitda": 470887,
        "loss": 341753,
        "year": 2017,
        "business": 187
    },
    {
        "id": 374,
        "ca": 2695711,
        "margin": 223140,
        "ebitda": 282841,
        "loss": 9950206,
        "year": 2016,
        "business": 187
    },
    {
        "id": 375,
        "ca": 2323601,
        "margin": -130096,
        "ebitda": 292465,
        "loss": 6739558,
        "year": 2017,
        "business": 188
    },
    {
        "id": 376,
        "ca": 3910324,
        "margin": 975948,
        "ebitda": 123494,
        "loss": 5361820,
        "year": 2016,
        "business": 188
    },
    {
        "id": 377,
        "ca": 1383179,
        "margin": 525934,
        "ebitda": 620050,
        "loss": 5708808,
        "year": 2017,
        "business": 189
    },
    {
        "id": 378,
        "ca": 181821,
        "margin": 273390,
        "ebitda": 187686,
        "loss": 195782,
        "year": 2016,
        "business": 189
    },
    {
        "id": 379,
        "ca": 1837254,
        "margin": -23600,
        "ebitda": 630765,
        "loss": 330346,
        "year": 2017,
        "business": 190
    },
    {
        "id": 380,
        "ca": 364299,
        "margin": 981381,
        "ebitda": 716787,
        "loss": 7314765,
        "year": 2016,
        "business": 190
    },
    {
        "id": 381,
        "ca": 1124569,
        "margin": 244282,
        "ebitda": 867654,
        "loss": 9078361,
        "year": 2017,
        "business": 191
    },
    {
        "id": 382,
        "ca": 403549,
        "margin": 959000,
        "ebitda": 741391,
        "loss": 3199016,
        "year": 2016,
        "business": 191
    },
    {
        "id": 383,
        "ca": 928986,
        "margin": -169867,
        "ebitda": 599256,
        "loss": 3641711,
        "year": 2017,
        "business": 192
    },
    {
        "id": 384,
        "ca": 2861820,
        "margin": 645921,
        "ebitda": 833062,
        "loss": 5892050,
        "year": 2016,
        "business": 192
    },
    {
        "id": 385,
        "ca": 396503,
        "margin": 759077,
        "ebitda": 316573,
        "loss": 2058773,
        "year": 2017,
        "business": 193
    },
    {
        "id": 386,
        "ca": 3285593,
        "margin": 3312,
        "ebitda": 902305,
        "loss": 1983829,
        "year": 2016,
        "business": 193
    },
    {
        "id": 387,
        "ca": 1890402,
        "margin": -178874,
        "ebitda": 155672,
        "loss": 4156046,
        "year": 2017,
        "business": 194
    },
    {
        "id": 388,
        "ca": 1319212,
        "margin": 717738,
        "ebitda": 472275,
        "loss": 2953966,
        "year": 2016,
        "business": 194
    },
    {
        "id": 389,
        "ca": 1554459,
        "margin": 531257,
        "ebitda": 718279,
        "loss": 269453,
        "year": 2017,
        "business": 195
    },
    {
        "id": 390,
        "ca": 2906345,
        "margin": 748364,
        "ebitda": 135631,
        "loss": 2041759,
        "year": 2016,
        "business": 195
    },
    {
        "id": 391,
        "ca": 3447094,
        "margin": 203296,
        "ebitda": 792136,
        "loss": 7500645,
        "year": 2017,
        "business": 196
    },
    {
        "id": 392,
        "ca": 2852163,
        "margin": -63678,
        "ebitda": 865549,
        "loss": 6324055,
        "year": 2016,
        "business": 196
    },
    {
        "id": 393,
        "ca": 1296714,
        "margin": 816170,
        "ebitda": 828818,
        "loss": 8073508,
        "year": 2017,
        "business": 197
    },
    {
        "id": 394,
        "ca": 1180926,
        "margin": 607709,
        "ebitda": 753816,
        "loss": 4592164,
        "year": 2016,
        "business": 197
    },
    {
        "id": 395,
        "ca": 2067456,
        "margin": 314329,
        "ebitda": 276534,
        "loss": 6637806,
        "year": 2017,
        "business": 198
    },
    {
        "id": 396,
        "ca": 2187099,
        "margin": 683866,
        "ebitda": 911399,
        "loss": 8801200,
        "year": 2016,
        "business": 198
    },
    {
        "id": 397,
        "ca": 3890899,
        "margin": 441660,
        "ebitda": 222974,
        "loss": 8363608,
        "year": 2017,
        "business": 199
    },
    {
        "id": 398,
        "ca": 3162720,
        "margin": 519856,
        "ebitda": 301416,
        "loss": 3767343,
        "year": 2016,
        "business": 199
    },
    {
        "id": 399,
        "ca": 523895,
        "margin": -12046,
        "ebitda": 453440,
        "loss": 4037711,
        "year": 2017,
        "business": 200
    },
    {
        "id": 400,
        "ca": 1173626,
        "margin": 174745,
        "ebitda": 946818,
        "loss": 2245031,
        "year": 2016,
        "business": 200
    },
    {
        "id": 401,
        "ca": 3307617,
        "margin": -1987,
        "ebitda": 923815,
        "loss": 8106555,
        "year": 2017,
        "business": 201
    },
    {
        "id": 402,
        "ca": 3812238,
        "margin": 399970,
        "ebitda": 626752,
        "loss": 5883384,
        "year": 2016,
        "business": 201
    },
    {
        "id": 403,
        "ca": 1667068,
        "margin": 265689,
        "ebitda": 155850,
        "loss": 390853,
        "year": 2017,
        "business": 202
    },
    {
        "id": 404,
        "ca": 1562368,
        "margin": 382981,
        "ebitda": 11510,
        "loss": 3963531,
        "year": 2016,
        "business": 202
    },
    {
        "id": 405,
        "ca": 2925064,
        "margin": 122742,
        "ebitda": 230410,
        "loss": 4527692,
        "year": 2017,
        "business": 203
    },
    {
        "id": 406,
        "ca": 3463883,
        "margin": 119451,
        "ebitda": 777862,
        "loss": 2700523,
        "year": 2016,
        "business": 203
    },
    {
        "id": 407,
        "ca": 1285405,
        "margin": 351543,
        "ebitda": 862074,
        "loss": 9415788,
        "year": 2017,
        "business": 204
    },
    {
        "id": 408,
        "ca": 1679240,
        "margin": 594176,
        "ebitda": 727597,
        "loss": 7062503,
        "year": 2016,
        "business": 204
    },
    {
        "id": 409,
        "ca": 2860440,
        "margin": 229094,
        "ebitda": 643970,
        "loss": 3686020,
        "year": 2017,
        "business": 205
    },
    {
        "id": 410,
        "ca": 1571485,
        "margin": 719144,
        "ebitda": 204031,
        "loss": 3557270,
        "year": 2016,
        "business": 205
    },
    {
        "id": 411,
        "ca": 2687578,
        "margin": 812459,
        "ebitda": 598150,
        "loss": 1097899,
        "year": 2017,
        "business": 206
    },
    {
        "id": 412,
        "ca": 294285,
        "margin": -68914,
        "ebitda": 386469,
        "loss": 2642747,
        "year": 2016,
        "business": 206
    },
    {
        "id": 413,
        "ca": 2779532,
        "margin": 262840,
        "ebitda": 889096,
        "loss": 4960989,
        "year": 2017,
        "business": 207
    },
    {
        "id": 414,
        "ca": 595444,
        "margin": 533623,
        "ebitda": 622157,
        "loss": 6647924,
        "year": 2016,
        "business": 207
    },
    {
        "id": 415,
        "ca": 366675,
        "margin": 738947,
        "ebitda": 675433,
        "loss": 2870953,
        "year": 2017,
        "business": 208
    },
    {
        "id": 416,
        "ca": 2866906,
        "margin": 607038,
        "ebitda": 175704,
        "loss": 1440136,
        "year": 2016,
        "business": 208
    },
    {
        "id": 417,
        "ca": 2300901,
        "margin": 21458,
        "ebitda": 790803,
        "loss": 5132923,
        "year": 2017,
        "business": 209
    },
    {
        "id": 418,
        "ca": 3489522,
        "margin": 931936,
        "ebitda": 801643,
        "loss": 4808791,
        "year": 2016,
        "business": 209
    },
    {
        "id": 419,
        "ca": 3412747,
        "margin": 947042,
        "ebitda": 910029,
        "loss": 1947641,
        "year": 2017,
        "business": 210
    },
    {
        "id": 420,
        "ca": 1956790,
        "margin": 958065,
        "ebitda": 565309,
        "loss": 7660599,
        "year": 2016,
        "business": 210
    },
    {
        "id": 421,
        "ca": 1568063,
        "margin": 62833,
        "ebitda": 207237,
        "loss": 6307868,
        "year": 2017,
        "business": 211
    },
    {
        "id": 422,
        "ca": 1941614,
        "margin": 943627,
        "ebitda": 850972,
        "loss": 7008539,
        "year": 2016,
        "business": 211
    },
    {
        "id": 423,
        "ca": 1413434,
        "margin": -198488,
        "ebitda": 919047,
        "loss": 884992,
        "year": 2017,
        "business": 212
    },
    {
        "id": 424,
        "ca": 3223334,
        "margin": 197753,
        "ebitda": 839964,
        "loss": 654740,
        "year": 2016,
        "business": 212
    },
    {
        "id": 425,
        "ca": 722645,
        "margin": 161551,
        "ebitda": 662831,
        "loss": 1356749,
        "year": 2017,
        "business": 213
    },
    {
        "id": 426,
        "ca": 326444,
        "margin": 445708,
        "ebitda": 448271,
        "loss": 7629668,
        "year": 2016,
        "business": 213
    },
    {
        "id": 427,
        "ca": 529619,
        "margin": 331955,
        "ebitda": 646647,
        "loss": 3535870,
        "year": 2017,
        "business": 214
    },
    {
        "id": 428,
        "ca": 2762765,
        "margin": 547256,
        "ebitda": 285767,
        "loss": 1562770,
        "year": 2016,
        "business": 214
    },
    {
        "id": 429,
        "ca": 3471496,
        "margin": 801027,
        "ebitda": 892427,
        "loss": 9985604,
        "year": 2017,
        "business": 215
    },
    {
        "id": 430,
        "ca": 550979,
        "margin": 555238,
        "ebitda": 205400,
        "loss": 7487590,
        "year": 2016,
        "business": 215
    },
    {
        "id": 431,
        "ca": 995998,
        "margin": 374164,
        "ebitda": 578755,
        "loss": 7068204,
        "year": 2017,
        "business": 216
    },
    {
        "id": 432,
        "ca": 2055987,
        "margin": 365581,
        "ebitda": 822455,
        "loss": 8436882,
        "year": 2016,
        "business": 216
    },
    {
        "id": 433,
        "ca": 1759245,
        "margin": 217688,
        "ebitda": 233775,
        "loss": 1527604,
        "year": 2017,
        "business": 217
    },
    {
        "id": 434,
        "ca": 3144748,
        "margin": 943888,
        "ebitda": 684002,
        "loss": 6144160,
        "year": 2016,
        "business": 217
    },
    {
        "id": 435,
        "ca": 2762880,
        "margin": 935547,
        "ebitda": 475909,
        "loss": 2616824,
        "year": 2017,
        "business": 218
    },
    {
        "id": 436,
        "ca": 2427457,
        "margin": 535535,
        "ebitda": 857922,
        "loss": 3604422,
        "year": 2016,
        "business": 218
    },
    {
        "id": 437,
        "ca": 608907,
        "margin": 232346,
        "ebitda": 182998,
        "loss": 4482450,
        "year": 2017,
        "business": 219
    },
    {
        "id": 438,
        "ca": 2892392,
        "margin": 682223,
        "ebitda": 995255,
        "loss": 5096605,
        "year": 2016,
        "business": 219
    },
    {
        "id": 439,
        "ca": 103806,
        "margin": 652161,
        "ebitda": 55773,
        "loss": 4610112,
        "year": 2017,
        "business": 220
    },
    {
        "id": 440,
        "ca": 1749159,
        "margin": 92327,
        "ebitda": 771155,
        "loss": 9429054,
        "year": 2016,
        "business": 220
    },
    {
        "id": 441,
        "ca": 496689,
        "margin": 907225,
        "ebitda": 847624,
        "loss": 2870199,
        "year": 2017,
        "business": 221
    },
    {
        "id": 442,
        "ca": 135074,
        "margin": -6211,
        "ebitda": 630370,
        "loss": 3300640,
        "year": 2016,
        "business": 221
    },
    {
        "id": 443,
        "ca": 3959745,
        "margin": 164875,
        "ebitda": 33559,
        "loss": 4860253,
        "year": 2017,
        "business": 222
    },
    {
        "id": 444,
        "ca": 2616436,
        "margin": 703387,
        "ebitda": 773764,
        "loss": 4497309,
        "year": 2016,
        "business": 222
    },
    {
        "id": 445,
        "ca": 3098364,
        "margin": 295222,
        "ebitda": 237628,
        "loss": 8824486,
        "year": 2017,
        "business": 223
    },
    {
        "id": 446,
        "ca": 2836963,
        "margin": 347671,
        "ebitda": 301331,
        "loss": 25631,
        "year": 2016,
        "business": 223
    },
    {
        "id": 447,
        "ca": 3607659,
        "margin": -189859,
        "ebitda": 466063,
        "loss": 4587411,
        "year": 2017,
        "business": 224
    },
    {
        "id": 448,
        "ca": 395340,
        "margin": 179427,
        "ebitda": 571353,
        "loss": 8575357,
        "year": 2016,
        "business": 224
    },
    {
        "id": 449,
        "ca": 379203,
        "margin": -93020,
        "ebitda": 259766,
        "loss": 8481496,
        "year": 2017,
        "business": 225
    },
    {
        "id": 450,
        "ca": 144396,
        "margin": 517453,
        "ebitda": 591711,
        "loss": 6232523,
        "year": 2016,
        "business": 225
    },
    {
        "id": 451,
        "ca": 3179508,
        "margin": 67641,
        "ebitda": 780727,
        "loss": 3722604,
        "year": 2017,
        "business": 226
    },
    {
        "id": 452,
        "ca": 1744348,
        "margin": 396308,
        "ebitda": 542501,
        "loss": 5579533,
        "year": 2016,
        "business": 226
    },
    {
        "id": 453,
        "ca": 1728921,
        "margin": 665662,
        "ebitda": 991743,
        "loss": 4038748,
        "year": 2017,
        "business": 227
    },
    {
        "id": 454,
        "ca": 139687,
        "margin": 358646,
        "ebitda": 935035,
        "loss": 356369,
        "year": 2016,
        "business": 227
    },
    {
        "id": 455,
        "ca": 2681633,
        "margin": 64633,
        "ebitda": 38873,
        "loss": 4026699,
        "year": 2017,
        "business": 228
    },
    {
        "id": 456,
        "ca": 1357003,
        "margin": -117910,
        "ebitda": 866302,
        "loss": 8169181,
        "year": 2016,
        "business": 228
    },
    {
        "id": 457,
        "ca": 697972,
        "margin": 109349,
        "ebitda": 748214,
        "loss": 7788287,
        "year": 2017,
        "business": 229
    },
    {
        "id": 458,
        "ca": 3821833,
        "margin": -150587,
        "ebitda": 455744,
        "loss": 1774670,
        "year": 2016,
        "business": 229
    },
    {
        "id": 459,
        "ca": 1736167,
        "margin": -71098,
        "ebitda": 369044,
        "loss": 7587644,
        "year": 2017,
        "business": 230
    },
    {
        "id": 460,
        "ca": 2994791,
        "margin": -189455,
        "ebitda": 584789,
        "loss": 8253641,
        "year": 2016,
        "business": 230
    },
    {
        "id": 461,
        "ca": 3866480,
        "margin": 846424,
        "ebitda": 723539,
        "loss": 7059958,
        "year": 2017,
        "business": 231
    },
    {
        "id": 462,
        "ca": 2002973,
        "margin": 864708,
        "ebitda": 715081,
        "loss": 9769978,
        "year": 2016,
        "business": 231
    },
    {
        "id": 463,
        "ca": 2168061,
        "margin": 283947,
        "ebitda": 882487,
        "loss": 1942313,
        "year": 2017,
        "business": 232
    },
    {
        "id": 464,
        "ca": 645047,
        "margin": 134625,
        "ebitda": 974136,
        "loss": 7970717,
        "year": 2016,
        "business": 232
    },
    {
        "id": 465,
        "ca": 3882691,
        "margin": 370353,
        "ebitda": 411563,
        "loss": 8937022,
        "year": 2017,
        "business": 233
    },
    {
        "id": 466,
        "ca": 2517891,
        "margin": -120139,
        "ebitda": 172997,
        "loss": 9643858,
        "year": 2016,
        "business": 233
    },
    {
        "id": 467,
        "ca": 1381725,
        "margin": 521890,
        "ebitda": 969346,
        "loss": 6200579,
        "year": 2017,
        "business": 234
    },
    {
        "id": 468,
        "ca": 3989466,
        "margin": -132656,
        "ebitda": 339426,
        "loss": 1356962,
        "year": 2016,
        "business": 234
    },
    {
        "id": 469,
        "ca": 1908431,
        "margin": 500963,
        "ebitda": 360880,
        "loss": 1000301,
        "year": 2017,
        "business": 235
    },
    {
        "id": 470,
        "ca": 1617090,
        "margin": 723375,
        "ebitda": 966379,
        "loss": 7175687,
        "year": 2016,
        "business": 235
    },
    {
        "id": 471,
        "ca": 3660703,
        "margin": 260358,
        "ebitda": 827985,
        "loss": 2216670,
        "year": 2017,
        "business": 236
    },
    {
        "id": 472,
        "ca": 3391877,
        "margin": 715081,
        "ebitda": 526732,
        "loss": 5204173,
        "year": 2016,
        "business": 236
    },
    {
        "id": 473,
        "ca": 2981598,
        "margin": 839640,
        "ebitda": 254466,
        "loss": 557923,
        "year": 2017,
        "business": 237
    },
    {
        "id": 474,
        "ca": 2264669,
        "margin": 85859,
        "ebitda": 701532,
        "loss": 5889667,
        "year": 2016,
        "business": 237
    },
    {
        "id": 475,
        "ca": 2515502,
        "margin": 383884,
        "ebitda": 314194,
        "loss": 1447954,
        "year": 2017,
        "business": 238
    },
    {
        "id": 476,
        "ca": 1639067,
        "margin": 251545,
        "ebitda": 232780,
        "loss": 5703733,
        "year": 2016,
        "business": 238
    },
    {
        "id": 477,
        "ca": 3990163,
        "margin": -23653,
        "ebitda": 618446,
        "loss": 7611738,
        "year": 2017,
        "business": 239
    },
    {
        "id": 478,
        "ca": 3399377,
        "margin": -34562,
        "ebitda": 676135,
        "loss": 2625186,
        "year": 2016,
        "business": 239
    },
    {
        "id": 479,
        "ca": 2624865,
        "margin": 21282,
        "ebitda": 252014,
        "loss": 2397148,
        "year": 2017,
        "business": 240
    },
    {
        "id": 480,
        "ca": 2673540,
        "margin": 320968,
        "ebitda": 489969,
        "loss": 6933441,
        "year": 2016,
        "business": 240
    },
    {
        "id": 481,
        "ca": 3946352,
        "margin": 299886,
        "ebitda": 161465,
        "loss": 6615188,
        "year": 2017,
        "business": 241
    },
    {
        "id": 482,
        "ca": 3998834,
        "margin": 261503,
        "ebitda": 477645,
        "loss": 7523061,
        "year": 2016,
        "business": 241
    },
    {
        "id": 483,
        "ca": 396543,
        "margin": -15795,
        "ebitda": 571537,
        "loss": 1491676,
        "year": 2017,
        "business": 242
    },
    {
        "id": 484,
        "ca": 3585987,
        "margin": 69181,
        "ebitda": 724505,
        "loss": 355804,
        "year": 2016,
        "business": 242
    },
    {
        "id": 485,
        "ca": 3514916,
        "margin": 850407,
        "ebitda": 528644,
        "loss": 6528495,
        "year": 2017,
        "business": 243
    },
    {
        "id": 486,
        "ca": 674593,
        "margin": -65955,
        "ebitda": 452223,
        "loss": 3974195,
        "year": 2016,
        "business": 243
    },
    {
        "id": 487,
        "ca": 3982779,
        "margin": 847980,
        "ebitda": 25457,
        "loss": 6382830,
        "year": 2017,
        "business": 244
    },
    {
        "id": 488,
        "ca": 501454,
        "margin": 522579,
        "ebitda": 151048,
        "loss": 7167120,
        "year": 2016,
        "business": 244
    },
    {
        "id": 489,
        "ca": 2899048,
        "margin": 446361,
        "ebitda": 780465,
        "loss": 6175065,
        "year": 2017,
        "business": 245
    },
    {
        "id": 490,
        "ca": 3286750,
        "margin": 753934,
        "ebitda": 492488,
        "loss": 5716259,
        "year": 2016,
        "business": 245
    },
    {
        "id": 491,
        "ca": 321130,
        "margin": -106862,
        "ebitda": 493927,
        "loss": 3219872,
        "year": 2017,
        "business": 246
    },
    {
        "id": 492,
        "ca": 1468024,
        "margin": 877052,
        "ebitda": 201151,
        "loss": 6880040,
        "year": 2016,
        "business": 246
    },
    {
        "id": 493,
        "ca": 1202306,
        "margin": 927668,
        "ebitda": 763436,
        "loss": 2307300,
        "year": 2017,
        "business": 247
    },
    {
        "id": 494,
        "ca": 711411,
        "margin": 98405,
        "ebitda": 127258,
        "loss": 1351493,
        "year": 2016,
        "business": 247
    },
    {
        "id": 495,
        "ca": 873010,
        "margin": 424430,
        "ebitda": 713124,
        "loss": 2935034,
        "year": 2017,
        "business": 248
    },
    {
        "id": 496,
        "ca": 1516162,
        "margin": 942403,
        "ebitda": 558387,
        "loss": 5967964,
        "year": 2016,
        "business": 248
    },
    {
        "id": 497,
        "ca": 670761,
        "margin": 826590,
        "ebitda": 731510,
        "loss": 3079216,
        "year": 2017,
        "business": 249
    },
    {
        "id": 498,
        "ca": 2676855,
        "margin": 918362,
        "ebitda": 469186,
        "loss": 2171934,
        "year": 2016,
        "business": 249
    },
    {
        "id": 499,
        "ca": 242467,
        "margin": -188020,
        "ebitda": 531483,
        "loss": 7973940,
        "year": 2017,
        "business": 250
    },
    {
        "id": 500,
        "ca": 3858424,
        "margin": -196542,
        "ebitda": 679848,
        "loss": 7374394,
        "year": 2016,
        "business": 250
    },
    {
        "id": 501,
        "ca": 3630977,
        "margin": -191217,
        "ebitda": 565955,
        "loss": 6361163,
        "year": 2017,
        "business": 251
    },
    {
        "id": 502,
        "ca": 276602,
        "margin": 962997,
        "ebitda": 923379,
        "loss": 291587,
        "year": 2016,
        "business": 251
    },
    {
        "id": 503,
        "ca": 3053219,
        "margin": 891154,
        "ebitda": 748467,
        "loss": 5033395,
        "year": 2017,
        "business": 252
    },
    {
        "id": 504,
        "ca": 727813,
        "margin": 394241,
        "ebitda": 57145,
        "loss": 3649595,
        "year": 2016,
        "business": 252
    },
    {
        "id": 505,
        "ca": 1915743,
        "margin": 579738,
        "ebitda": 671571,
        "loss": 2146574,
        "year": 2017,
        "business": 253
    },
    {
        "id": 506,
        "ca": 1765238,
        "margin": 725611,
        "ebitda": 183725,
        "loss": 2018896,
        "year": 2016,
        "business": 253
    },
    {
        "id": 507,
        "ca": 1307856,
        "margin": -19394,
        "ebitda": 464868,
        "loss": 7453373,
        "year": 2017,
        "business": 254
    },
    {
        "id": 508,
        "ca": 3784995,
        "margin": 117975,
        "ebitda": 348996,
        "loss": 9750533,
        "year": 2016,
        "business": 254
    },
    {
        "id": 509,
        "ca": 579640,
        "margin": 708604,
        "ebitda": 476367,
        "loss": 7985293,
        "year": 2017,
        "business": 255
    },
    {
        "id": 510,
        "ca": 401500,
        "margin": 901486,
        "ebitda": 750040,
        "loss": 9512030,
        "year": 2016,
        "business": 255
    },
    {
        "id": 511,
        "ca": 675090,
        "margin": 837643,
        "ebitda": 234174,
        "loss": 8744069,
        "year": 2017,
        "business": 256
    },
    {
        "id": 512,
        "ca": 3999870,
        "margin": 183000,
        "ebitda": 715121,
        "loss": 3817111,
        "year": 2016,
        "business": 256
    },
    {
        "id": 513,
        "ca": 1357050,
        "margin": 930392,
        "ebitda": 114816,
        "loss": 206483,
        "year": 2017,
        "business": 257
    },
    {
        "id": 514,
        "ca": 1284602,
        "margin": 298382,
        "ebitda": 344379,
        "loss": 1354516,
        "year": 2016,
        "business": 257
    },
    {
        "id": 515,
        "ca": 437404,
        "margin": 443309,
        "ebitda": 924393,
        "loss": 8344342,
        "year": 2017,
        "business": 258
    },
    {
        "id": 516,
        "ca": 2295941,
        "margin": 262959,
        "ebitda": 398360,
        "loss": 4731833,
        "year": 2016,
        "business": 258
    },
    {
        "id": 517,
        "ca": 1722916,
        "margin": 758629,
        "ebitda": 738064,
        "loss": 8203486,
        "year": 2017,
        "business": 259
    },
    {
        "id": 518,
        "ca": 3022820,
        "margin": 68719,
        "ebitda": 702919,
        "loss": 3778150,
        "year": 2016,
        "business": 259
    },
    {
        "id": 519,
        "ca": 3939948,
        "margin": 802846,
        "ebitda": 663635,
        "loss": 5542135,
        "year": 2017,
        "business": 260
    },
    {
        "id": 520,
        "ca": 276559,
        "margin": 139817,
        "ebitda": 493621,
        "loss": 7195203,
        "year": 2016,
        "business": 260
    },
    {
        "id": 521,
        "ca": 3239235,
        "margin": 340217,
        "ebitda": 449758,
        "loss": 1334666,
        "year": 2017,
        "business": 261
    },
    {
        "id": 522,
        "ca": 2412749,
        "margin": 430859,
        "ebitda": 166502,
        "loss": 7762703,
        "year": 2016,
        "business": 261
    },
    {
        "id": 523,
        "ca": 1656238,
        "margin": 815153,
        "ebitda": 17020,
        "loss": 657973,
        "year": 2017,
        "business": 262
    },
    {
        "id": 524,
        "ca": 286407,
        "margin": 81459,
        "ebitda": 751775,
        "loss": 1171673,
        "year": 2016,
        "business": 262
    },
    {
        "id": 525,
        "ca": 1623267,
        "margin": 390850,
        "ebitda": 160709,
        "loss": 6228102,
        "year": 2017,
        "business": 263
    },
    {
        "id": 526,
        "ca": 1244864,
        "margin": 468907,
        "ebitda": 513580,
        "loss": 406566,
        "year": 2016,
        "business": 263
    },
    {
        "id": 527,
        "ca": 1302638,
        "margin": 127698,
        "ebitda": 901385,
        "loss": 1035350,
        "year": 2017,
        "business": 264
    },
    {
        "id": 528,
        "ca": 3024172,
        "margin": 594634,
        "ebitda": 817461,
        "loss": 6847908,
        "year": 2016,
        "business": 264
    },
    {
        "id": 529,
        "ca": 2632843,
        "margin": 275924,
        "ebitda": 284692,
        "loss": 3566120,
        "year": 2017,
        "business": 265
    },
    {
        "id": 530,
        "ca": 3612783,
        "margin": 145292,
        "ebitda": 942467,
        "loss": 6543481,
        "year": 2016,
        "business": 265
    },
    {
        "id": 531,
        "ca": 1521736,
        "margin": -108388,
        "ebitda": 254616,
        "loss": 2442956,
        "year": 2017,
        "business": 266
    },
    {
        "id": 532,
        "ca": 3500336,
        "margin": -17690,
        "ebitda": 817347,
        "loss": 8840333,
        "year": 2016,
        "business": 266
    },
    {
        "id": 533,
        "ca": 1836167,
        "margin": 702191,
        "ebitda": 839661,
        "loss": 5922025,
        "year": 2017,
        "business": 267
    },
    {
        "id": 534,
        "ca": 3927945,
        "margin": 831558,
        "ebitda": 339263,
        "loss": 7914051,
        "year": 2016,
        "business": 267
    },
    {
        "id": 535,
        "ca": 2042075,
        "margin": 941932,
        "ebitda": 39499,
        "loss": 8186728,
        "year": 2017,
        "business": 268
    },
    {
        "id": 536,
        "ca": 3285163,
        "margin": -117789,
        "ebitda": 504976,
        "loss": 1588712,
        "year": 2016,
        "business": 268
    },
    {
        "id": 537,
        "ca": 1392806,
        "margin": 407754,
        "ebitda": 888531,
        "loss": 8319998,
        "year": 2017,
        "business": 269
    },
    {
        "id": 538,
        "ca": 1423185,
        "margin": 656415,
        "ebitda": 354677,
        "loss": 2368935,
        "year": 2016,
        "business": 269
    },
    {
        "id": 539,
        "ca": 2606836,
        "margin": 804607,
        "ebitda": 14325,
        "loss": 2896996,
        "year": 2017,
        "business": 270
    },
    {
        "id": 540,
        "ca": 516903,
        "margin": 609870,
        "ebitda": 798215,
        "loss": 7703626,
        "year": 2016,
        "business": 270
    },
    {
        "id": 541,
        "ca": 3480353,
        "margin": 216290,
        "ebitda": 441732,
        "loss": 462267,
        "year": 2017,
        "business": 271
    },
    {
        "id": 542,
        "ca": 1177842,
        "margin": 620215,
        "ebitda": 860501,
        "loss": 6589168,
        "year": 2016,
        "business": 271
    },
    {
        "id": 543,
        "ca": 861557,
        "margin": 386117,
        "ebitda": 938199,
        "loss": 8206339,
        "year": 2017,
        "business": 272
    },
    {
        "id": 544,
        "ca": 2943536,
        "margin": 852707,
        "ebitda": 94471,
        "loss": 1840329,
        "year": 2016,
        "business": 272
    },
    {
        "id": 545,
        "ca": 1846841,
        "margin": 96976,
        "ebitda": 425424,
        "loss": 25493,
        "year": 2017,
        "business": 273
    },
    {
        "id": 546,
        "ca": 2052522,
        "margin": 609255,
        "ebitda": 236691,
        "loss": 5395446,
        "year": 2016,
        "business": 273
    },
    {
        "id": 547,
        "ca": 2915358,
        "margin": 901951,
        "ebitda": 543322,
        "loss": 683229,
        "year": 2017,
        "business": 274
    },
    {
        "id": 548,
        "ca": 1318119,
        "margin": 926649,
        "ebitda": 485151,
        "loss": 8753427,
        "year": 2016,
        "business": 274
    },
    {
        "id": 549,
        "ca": 3531451,
        "margin": -7532,
        "ebitda": 190463,
        "loss": 9727952,
        "year": 2017,
        "business": 275
    },
    {
        "id": 550,
        "ca": 152385,
        "margin": 626370,
        "ebitda": 665984,
        "loss": 1301506,
        "year": 2016,
        "business": 275
    },
    {
        "id": 551,
        "ca": 1863195,
        "margin": 885156,
        "ebitda": 691132,
        "loss": 3331463,
        "year": 2017,
        "business": 276
    },
    {
        "id": 552,
        "ca": 1492494,
        "margin": 451974,
        "ebitda": 470527,
        "loss": 6116639,
        "year": 2016,
        "business": 276
    },
    {
        "id": 553,
        "ca": 1325093,
        "margin": 416334,
        "ebitda": 810310,
        "loss": 2295917,
        "year": 2017,
        "business": 277
    },
    {
        "id": 554,
        "ca": 1468293,
        "margin": 47641,
        "ebitda": 685557,
        "loss": 7057002,
        "year": 2016,
        "business": 277
    },
    {
        "id": 555,
        "ca": 391860,
        "margin": 418189,
        "ebitda": 716083,
        "loss": 8376039,
        "year": 2017,
        "business": 278
    },
    {
        "id": 556,
        "ca": 1101433,
        "margin": 495505,
        "ebitda": 391024,
        "loss": 7516228,
        "year": 2016,
        "business": 278
    },
    {
        "id": 557,
        "ca": 1770926,
        "margin": 725459,
        "ebitda": 422508,
        "loss": 696824,
        "year": 2017,
        "business": 279
    },
    {
        "id": 558,
        "ca": 844272,
        "margin": -62922,
        "ebitda": 807620,
        "loss": 1381217,
        "year": 2016,
        "business": 279
    },
    {
        "id": 559,
        "ca": 1950330,
        "margin": 971754,
        "ebitda": 477053,
        "loss": 9514153,
        "year": 2017,
        "business": 280
    },
    {
        "id": 560,
        "ca": 747090,
        "margin": -45669,
        "ebitda": 488641,
        "loss": 2271665,
        "year": 2016,
        "business": 280
    },
    {
        "id": 561,
        "ca": 3537514,
        "margin": -73399,
        "ebitda": 964482,
        "loss": 7441441,
        "year": 2017,
        "business": 281
    },
    {
        "id": 562,
        "ca": 1787038,
        "margin": -57380,
        "ebitda": 849512,
        "loss": 2623796,
        "year": 2016,
        "business": 281
    },
    {
        "id": 563,
        "ca": 1169472,
        "margin": 354993,
        "ebitda": 567329,
        "loss": 1369101,
        "year": 2017,
        "business": 282
    },
    {
        "id": 564,
        "ca": 3653740,
        "margin": 860240,
        "ebitda": 611312,
        "loss": 1081867,
        "year": 2016,
        "business": 282
    },
    {
        "id": 565,
        "ca": 2247463,
        "margin": 401415,
        "ebitda": 949482,
        "loss": 4040262,
        "year": 2017,
        "business": 283
    },
    {
        "id": 566,
        "ca": 1614202,
        "margin": 435597,
        "ebitda": 899366,
        "loss": 8403583,
        "year": 2016,
        "business": 283
    },
    {
        "id": 567,
        "ca": 1464401,
        "margin": 140222,
        "ebitda": 543863,
        "loss": 3046940,
        "year": 2017,
        "business": 284
    },
    {
        "id": 568,
        "ca": 3192296,
        "margin": 842618,
        "ebitda": 182710,
        "loss": 5357381,
        "year": 2016,
        "business": 284
    },
    {
        "id": 569,
        "ca": 3031637,
        "margin": 679669,
        "ebitda": 76621,
        "loss": 9745843,
        "year": 2017,
        "business": 285
    },
    {
        "id": 570,
        "ca": 1041670,
        "margin": 492196,
        "ebitda": 641042,
        "loss": 7889625,
        "year": 2016,
        "business": 285
    },
    {
        "id": 571,
        "ca": 3665813,
        "margin": 764550,
        "ebitda": 643073,
        "loss": 9904839,
        "year": 2017,
        "business": 286
    },
    {
        "id": 572,
        "ca": 1818052,
        "margin": 787374,
        "ebitda": 275126,
        "loss": 4001065,
        "year": 2016,
        "business": 286
    },
    {
        "id": 573,
        "ca": 772162,
        "margin": 878637,
        "ebitda": 754484,
        "loss": 2048022,
        "year": 2017,
        "business": 287
    },
    {
        "id": 574,
        "ca": 545552,
        "margin": -69391,
        "ebitda": 830605,
        "loss": 3054587,
        "year": 2016,
        "business": 287
    },
    {
        "id": 575,
        "ca": 929599,
        "margin": 435326,
        "ebitda": 671472,
        "loss": 7712503,
        "year": 2017,
        "business": 288
    },
    {
        "id": 576,
        "ca": 1076023,
        "margin": 595589,
        "ebitda": 950398,
        "loss": 5022871,
        "year": 2016,
        "business": 288
    },
    {
        "id": 577,
        "ca": 534446,
        "margin": 236496,
        "ebitda": 262407,
        "loss": 1884251,
        "year": 2017,
        "business": 289
    },
    {
        "id": 578,
        "ca": 1053849,
        "margin": 905825,
        "ebitda": 296672,
        "loss": 6330120,
        "year": 2016,
        "business": 289
    },
    {
        "id": 579,
        "ca": 1905560,
        "margin": 287037,
        "ebitda": 432415,
        "loss": 9494153,
        "year": 2017,
        "business": 290
    },
    {
        "id": 580,
        "ca": 1237217,
        "margin": 549518,
        "ebitda": 22570,
        "loss": 7720823,
        "year": 2016,
        "business": 290
    },
    {
        "id": 581,
        "ca": 2822936,
        "margin": 737245,
        "ebitda": 502023,
        "loss": 822282,
        "year": 2017,
        "business": 291
    },
    {
        "id": 582,
        "ca": 1528294,
        "margin": 379394,
        "ebitda": 250801,
        "loss": 5083643,
        "year": 2016,
        "business": 291
    },
    {
        "id": 583,
        "ca": 2536749,
        "margin": 965332,
        "ebitda": 368262,
        "loss": 1201000,
        "year": 2017,
        "business": 292
    },
    {
        "id": 584,
        "ca": 2702233,
        "margin": -42416,
        "ebitda": 209342,
        "loss": 231725,
        "year": 2016,
        "business": 292
    },
    {
        "id": 585,
        "ca": 3584565,
        "margin": 631302,
        "ebitda": 216935,
        "loss": 8712213,
        "year": 2017,
        "business": 293
    },
    {
        "id": 586,
        "ca": 2961029,
        "margin": 358082,
        "ebitda": 644271,
        "loss": 9053011,
        "year": 2016,
        "business": 293
    },
    {
        "id": 587,
        "ca": 397984,
        "margin": 309572,
        "ebitda": 196244,
        "loss": 6514652,
        "year": 2017,
        "business": 294
    },
    {
        "id": 588,
        "ca": 3515292,
        "margin": 171319,
        "ebitda": 220895,
        "loss": 5052465,
        "year": 2016,
        "business": 294
    },
    {
        "id": 589,
        "ca": 2834046,
        "margin": 951329,
        "ebitda": 959573,
        "loss": 1194389,
        "year": 2017,
        "business": 295
    },
    {
        "id": 590,
        "ca": 2660639,
        "margin": 848997,
        "ebitda": 872268,
        "loss": 578344,
        "year": 2016,
        "business": 295
    },
    {
        "id": 591,
        "ca": 2089413,
        "margin": 484214,
        "ebitda": 975320,
        "loss": 728273,
        "year": 2017,
        "business": 296
    },
    {
        "id": 592,
        "ca": 1092462,
        "margin": 625754,
        "ebitda": 829443,
        "loss": 3627836,
        "year": 2016,
        "business": 296
    },
    {
        "id": 593,
        "ca": 346001,
        "margin": 50994,
        "ebitda": 423793,
        "loss": 1138923,
        "year": 2017,
        "business": 297
    },
    {
        "id": 594,
        "ca": 2143948,
        "margin": 515651,
        "ebitda": 416180,
        "loss": 7169085,
        "year": 2016,
        "business": 297
    },
    {
        "id": 595,
        "ca": 604883,
        "margin": 822012,
        "ebitda": 93405,
        "loss": 3626802,
        "year": 2017,
        "business": 298
    },
    {
        "id": 596,
        "ca": 222653,
        "margin": -135032,
        "ebitda": 550778,
        "loss": 5815190,
        "year": 2016,
        "business": 298
    },
    {
        "id": 597,
        "ca": 1020933,
        "margin": 704919,
        "ebitda": 9280,
        "loss": 5144338,
        "year": 2017,
        "business": 299
    },
    {
        "id": 598,
        "ca": 3020560,
        "margin": 548119,
        "ebitda": 386384,
        "loss": 4871927,
        "year": 2016,
        "business": 299
    },
    {
        "id": 599,
        "ca": 307764,
        "margin": 153983,
        "ebitda": 108281,
        "loss": 2580980,
        "year": 2017,
        "business": 300
    },
    {
        "id": 600,
        "ca": 1135979,
        "margin": 914245,
        "ebitda": 77906,
        "loss": 6955952,
        "year": 2016,
        "business": 300
    },
    {
        "id": 601,
        "ca": 1194003,
        "margin": 506263,
        "ebitda": 224082,
        "loss": 1934212,
        "year": 2017,
        "business": 301
    },
    {
        "id": 602,
        "ca": 438045,
        "margin": 935630,
        "ebitda": 190266,
        "loss": 4059307,
        "year": 2016,
        "business": 301
    },
    {
        "id": 603,
        "ca": 1572233,
        "margin": 43965,
        "ebitda": 314350,
        "loss": 6016223,
        "year": 2017,
        "business": 302
    },
    {
        "id": 604,
        "ca": 1617028,
        "margin": 148517,
        "ebitda": 864839,
        "loss": 9180946,
        "year": 2016,
        "business": 302
    },
    {
        "id": 605,
        "ca": 3882042,
        "margin": 227547,
        "ebitda": 730703,
        "loss": 748084,
        "year": 2017,
        "business": 303
    },
    {
        "id": 606,
        "ca": 1323002,
        "margin": 277049,
        "ebitda": 705669,
        "loss": 4106329,
        "year": 2016,
        "business": 303
    },
    {
        "id": 607,
        "ca": 3333515,
        "margin": 752911,
        "ebitda": 863272,
        "loss": 140940,
        "year": 2017,
        "business": 304
    },
    {
        "id": 608,
        "ca": 1913659,
        "margin": 452521,
        "ebitda": 275458,
        "loss": 311085,
        "year": 2016,
        "business": 304
    },
    {
        "id": 609,
        "ca": 1055674,
        "margin": 472906,
        "ebitda": 728127,
        "loss": 3011701,
        "year": 2017,
        "business": 305
    },
    {
        "id": 610,
        "ca": 3505870,
        "margin": -75301,
        "ebitda": 370667,
        "loss": 1684556,
        "year": 2016,
        "business": 305
    },
    {
        "id": 611,
        "ca": 3712247,
        "margin": 689224,
        "ebitda": 944551,
        "loss": 684306,
        "year": 2017,
        "business": 306
    },
    {
        "id": 612,
        "ca": 565545,
        "margin": 979600,
        "ebitda": 247048,
        "loss": 3961991,
        "year": 2016,
        "business": 306
    },
    {
        "id": 613,
        "ca": 2698414,
        "margin": 294022,
        "ebitda": 512183,
        "loss": 9626020,
        "year": 2017,
        "business": 307
    },
    {
        "id": 614,
        "ca": 724785,
        "margin": -37602,
        "ebitda": 214519,
        "loss": 7284805,
        "year": 2016,
        "business": 307
    },
    {
        "id": 615,
        "ca": 2860170,
        "margin": 852080,
        "ebitda": 263823,
        "loss": 1948319,
        "year": 2017,
        "business": 308
    },
    {
        "id": 616,
        "ca": 2156461,
        "margin": -184566,
        "ebitda": 418592,
        "loss": 1231751,
        "year": 2016,
        "business": 308
    },
    {
        "id": 617,
        "ca": 3762860,
        "margin": 951288,
        "ebitda": 978871,
        "loss": 2502425,
        "year": 2017,
        "business": 309
    },
    {
        "id": 618,
        "ca": 2174739,
        "margin": 239603,
        "ebitda": 91698,
        "loss": 3834844,
        "year": 2016,
        "business": 309
    },
    {
        "id": 619,
        "ca": 3830780,
        "margin": 291785,
        "ebitda": 38151,
        "loss": 6365551,
        "year": 2017,
        "business": 310
    },
    {
        "id": 620,
        "ca": 1621430,
        "margin": 146345,
        "ebitda": 124977,
        "loss": 7508553,
        "year": 2016,
        "business": 310
    },
    {
        "id": 621,
        "ca": 1400867,
        "margin": 472482,
        "ebitda": 967326,
        "loss": 3731128,
        "year": 2017,
        "business": 311
    },
    {
        "id": 622,
        "ca": 1995657,
        "margin": 748942,
        "ebitda": 614653,
        "loss": 6671311,
        "year": 2016,
        "business": 311
    },
    {
        "id": 623,
        "ca": 2997645,
        "margin": 901958,
        "ebitda": 785681,
        "loss": 1303785,
        "year": 2017,
        "business": 312
    },
    {
        "id": 624,
        "ca": 299696,
        "margin": 997820,
        "ebitda": 979764,
        "loss": 895819,
        "year": 2016,
        "business": 312
    },
    {
        "id": 625,
        "ca": 1525869,
        "margin": -131775,
        "ebitda": 311759,
        "loss": 2312255,
        "year": 2017,
        "business": 313
    },
    {
        "id": 626,
        "ca": 3758644,
        "margin": 988659,
        "ebitda": 365305,
        "loss": 5456939,
        "year": 2016,
        "business": 313
    },
    {
        "id": 627,
        "ca": 3768703,
        "margin": 968893,
        "ebitda": 161094,
        "loss": 1440412,
        "year": 2017,
        "business": 314
    },
    {
        "id": 628,
        "ca": 1973250,
        "margin": 683987,
        "ebitda": 840989,
        "loss": 7792481,
        "year": 2016,
        "business": 314
    },
    {
        "id": 629,
        "ca": 1918712,
        "margin": 208297,
        "ebitda": 109242,
        "loss": 2496800,
        "year": 2017,
        "business": 315
    },
    {
        "id": 630,
        "ca": 1891958,
        "margin": 993650,
        "ebitda": 271152,
        "loss": 2251648,
        "year": 2016,
        "business": 315
    },
    {
        "id": 631,
        "ca": 327108,
        "margin": 574817,
        "ebitda": 644454,
        "loss": 1469710,
        "year": 2017,
        "business": 316
    },
    {
        "id": 632,
        "ca": 864623,
        "margin": 730868,
        "ebitda": 71430,
        "loss": 8920097,
        "year": 2016,
        "business": 316
    },
    {
        "id": 633,
        "ca": 3348358,
        "margin": 209455,
        "ebitda": 768052,
        "loss": 4831940,
        "year": 2017,
        "business": 317
    },
    {
        "id": 634,
        "ca": 378035,
        "margin": -144425,
        "ebitda": 879574,
        "loss": 2893750,
        "year": 2016,
        "business": 317
    },
    {
        "id": 635,
        "ca": 416852,
        "margin": 777518,
        "ebitda": 693690,
        "loss": 4558030,
        "year": 2017,
        "business": 318
    },
    {
        "id": 636,
        "ca": 154265,
        "margin": -155260,
        "ebitda": 873014,
        "loss": 391026,
        "year": 2016,
        "business": 318
    },
    {
        "id": 637,
        "ca": 1814038,
        "margin": 22943,
        "ebitda": 764251,
        "loss": 4910711,
        "year": 2017,
        "business": 319
    },
    {
        "id": 638,
        "ca": 1467097,
        "margin": 313290,
        "ebitda": 627746,
        "loss": 1989470,
        "year": 2016,
        "business": 319
    },
    {
        "id": 639,
        "ca": 3084902,
        "margin": -111002,
        "ebitda": 318636,
        "loss": 6437713,
        "year": 2017,
        "business": 320
    },
    {
        "id": 640,
        "ca": 1487036,
        "margin": -23511,
        "ebitda": 297467,
        "loss": 8915320,
        "year": 2016,
        "business": 320
    },
    {
        "id": 641,
        "ca": 922790,
        "margin": 629028,
        "ebitda": 924228,
        "loss": 4611051,
        "year": 2017,
        "business": 321
    },
    {
        "id": 642,
        "ca": 143812,
        "margin": 191264,
        "ebitda": 555470,
        "loss": 7666400,
        "year": 2016,
        "business": 321
    },
    {
        "id": 643,
        "ca": 2527824,
        "margin": 669466,
        "ebitda": 215899,
        "loss": 2881112,
        "year": 2017,
        "business": 322
    },
    {
        "id": 644,
        "ca": 3283470,
        "margin": 272280,
        "ebitda": 901020,
        "loss": 2371452,
        "year": 2016,
        "business": 322
    },
    {
        "id": 645,
        "ca": 3566116,
        "margin": 841355,
        "ebitda": 177259,
        "loss": 4616427,
        "year": 2017,
        "business": 323
    },
    {
        "id": 646,
        "ca": 2522467,
        "margin": -17537,
        "ebitda": 186826,
        "loss": 7537421,
        "year": 2016,
        "business": 323
    },
    {
        "id": 647,
        "ca": 2924230,
        "margin": 932363,
        "ebitda": 413216,
        "loss": 3110712,
        "year": 2017,
        "business": 324
    },
    {
        "id": 648,
        "ca": 2855686,
        "margin": 785881,
        "ebitda": 739501,
        "loss": 1027313,
        "year": 2016,
        "business": 324
    },
    {
        "id": 649,
        "ca": 3813603,
        "margin": 578564,
        "ebitda": 261361,
        "loss": 5073025,
        "year": 2017,
        "business": 325
    },
    {
        "id": 650,
        "ca": 3424670,
        "margin": 765757,
        "ebitda": 835577,
        "loss": 6248108,
        "year": 2016,
        "business": 325
    },
    {
        "id": 651,
        "ca": 3375462,
        "margin": 909693,
        "ebitda": 150159,
        "loss": 1727,
        "year": 2017,
        "business": 326
    },
    {
        "id": 652,
        "ca": 3928748,
        "margin": 613973,
        "ebitda": 837251,
        "loss": 2922583,
        "year": 2016,
        "business": 326
    },
    {
        "id": 653,
        "ca": 2924633,
        "margin": 854336,
        "ebitda": 95194,
        "loss": 3489284,
        "year": 2017,
        "business": 327
    },
    {
        "id": 654,
        "ca": 2730637,
        "margin": 262515,
        "ebitda": 9135,
        "loss": 5751480,
        "year": 2016,
        "business": 327
    },
    {
        "id": 655,
        "ca": 939500,
        "margin": 108657,
        "ebitda": 901864,
        "loss": 4930016,
        "year": 2017,
        "business": 328
    },
    {
        "id": 656,
        "ca": 262556,
        "margin": 870447,
        "ebitda": 889054,
        "loss": 8490563,
        "year": 2016,
        "business": 328
    },
    {
        "id": 657,
        "ca": 1401002,
        "margin": 680397,
        "ebitda": 447359,
        "loss": 9184928,
        "year": 2017,
        "business": 329
    },
    {
        "id": 658,
        "ca": 1561751,
        "margin": 743108,
        "ebitda": 307893,
        "loss": 4325104,
        "year": 2016,
        "business": 329
    },
    {
        "id": 659,
        "ca": 3751315,
        "margin": -33992,
        "ebitda": 376084,
        "loss": 2538808,
        "year": 2017,
        "business": 330
    },
    {
        "id": 660,
        "ca": 816190,
        "margin": 34186,
        "ebitda": 865129,
        "loss": 7746295,
        "year": 2016,
        "business": 330
    },
    {
        "id": 661,
        "ca": 389859,
        "margin": 767903,
        "ebitda": 565840,
        "loss": 4942546,
        "year": 2017,
        "business": 331
    },
    {
        "id": 662,
        "ca": 3322262,
        "margin": 490616,
        "ebitda": 983418,
        "loss": 2900475,
        "year": 2016,
        "business": 331
    },
    {
        "id": 663,
        "ca": 3008708,
        "margin": 145170,
        "ebitda": 993767,
        "loss": 7886365,
        "year": 2017,
        "business": 332
    },
    {
        "id": 664,
        "ca": 1891977,
        "margin": 791302,
        "ebitda": 825442,
        "loss": 2197021,
        "year": 2016,
        "business": 332
    },
    {
        "id": 665,
        "ca": 3436399,
        "margin": 697795,
        "ebitda": 453017,
        "loss": 6758421,
        "year": 2017,
        "business": 333
    },
    {
        "id": 666,
        "ca": 2777766,
        "margin": 233259,
        "ebitda": 454646,
        "loss": 4859546,
        "year": 2016,
        "business": 333
    },
    {
        "id": 667,
        "ca": 561816,
        "margin": 122652,
        "ebitda": 766568,
        "loss": 6213834,
        "year": 2017,
        "business": 334
    },
    {
        "id": 668,
        "ca": 1123653,
        "margin": 703877,
        "ebitda": 732949,
        "loss": 8712235,
        "year": 2016,
        "business": 334
    },
    {
        "id": 669,
        "ca": 3528061,
        "margin": -96959,
        "ebitda": 362847,
        "loss": 5667564,
        "year": 2017,
        "business": 335
    },
    {
        "id": 670,
        "ca": 2033786,
        "margin": -148002,
        "ebitda": 537580,
        "loss": 8289176,
        "year": 2016,
        "business": 335
    },
    {
        "id": 671,
        "ca": 2827084,
        "margin": 311461,
        "ebitda": 953549,
        "loss": 5004704,
        "year": 2017,
        "business": 336
    },
    {
        "id": 672,
        "ca": 2907853,
        "margin": -85606,
        "ebitda": 835974,
        "loss": 5771536,
        "year": 2016,
        "business": 336
    },
    {
        "id": 673,
        "ca": 3415351,
        "margin": -62798,
        "ebitda": 680366,
        "loss": 9914651,
        "year": 2017,
        "business": 337
    },
    {
        "id": 674,
        "ca": 2577367,
        "margin": -127795,
        "ebitda": 789431,
        "loss": 9600878,
        "year": 2016,
        "business": 337
    },
    {
        "id": 675,
        "ca": 2283949,
        "margin": 211942,
        "ebitda": 615754,
        "loss": 4408371,
        "year": 2017,
        "business": 338
    },
    {
        "id": 676,
        "ca": 3633153,
        "margin": 364836,
        "ebitda": 836880,
        "loss": 9490839,
        "year": 2016,
        "business": 338
    },
    {
        "id": 677,
        "ca": 3200485,
        "margin": 246613,
        "ebitda": 701075,
        "loss": 4285701,
        "year": 2017,
        "business": 339
    },
    {
        "id": 678,
        "ca": 2376895,
        "margin": 960599,
        "ebitda": 685330,
        "loss": 570540,
        "year": 2016,
        "business": 339
    },
    {
        "id": 679,
        "ca": 1813138,
        "margin": 246825,
        "ebitda": 913583,
        "loss": 5171162,
        "year": 2017,
        "business": 340
    },
    {
        "id": 680,
        "ca": 1567335,
        "margin": -61943,
        "ebitda": 657166,
        "loss": 5650051,
        "year": 2016,
        "business": 340
    },
    {
        "id": 681,
        "ca": 3666078,
        "margin": 231198,
        "ebitda": 11414,
        "loss": 3863213,
        "year": 2017,
        "business": 341
    },
    {
        "id": 682,
        "ca": 1519251,
        "margin": 819246,
        "ebitda": 85641,
        "loss": 41538,
        "year": 2016,
        "business": 341
    },
    {
        "id": 683,
        "ca": 3000372,
        "margin": 888426,
        "ebitda": 34276,
        "loss": 8492496,
        "year": 2017,
        "business": 342
    },
    {
        "id": 684,
        "ca": 3340910,
        "margin": 981296,
        "ebitda": 949939,
        "loss": 9620390,
        "year": 2016,
        "business": 342
    },
    {
        "id": 685,
        "ca": 3742337,
        "margin": 54508,
        "ebitda": 178630,
        "loss": 566562,
        "year": 2017,
        "business": 343
    },
    {
        "id": 686,
        "ca": 1430653,
        "margin": 784142,
        "ebitda": 755349,
        "loss": 6489537,
        "year": 2016,
        "business": 343
    },
    {
        "id": 687,
        "ca": 3866784,
        "margin": 408461,
        "ebitda": 691124,
        "loss": 8994536,
        "year": 2017,
        "business": 344
    },
    {
        "id": 688,
        "ca": 2073279,
        "margin": 753672,
        "ebitda": 455332,
        "loss": 1426681,
        "year": 2016,
        "business": 344
    },
    {
        "id": 689,
        "ca": 1548788,
        "margin": 799184,
        "ebitda": 595013,
        "loss": 8922685,
        "year": 2017,
        "business": 345
    },
    {
        "id": 690,
        "ca": 2489641,
        "margin": 929108,
        "ebitda": 802323,
        "loss": 1676400,
        "year": 2016,
        "business": 345
    },
    {
        "id": 691,
        "ca": 1839504,
        "margin": 722840,
        "ebitda": 653032,
        "loss": 4524202,
        "year": 2017,
        "business": 346
    },
    {
        "id": 692,
        "ca": 2943791,
        "margin": 873032,
        "ebitda": 406039,
        "loss": 9625198,
        "year": 2016,
        "business": 346
    },
    {
        "id": 693,
        "ca": 2070655,
        "margin": 410447,
        "ebitda": 619161,
        "loss": 6694192,
        "year": 2017,
        "business": 347
    },
    {
        "id": 694,
        "ca": 2309658,
        "margin": 722691,
        "ebitda": 708220,
        "loss": 6204578,
        "year": 2016,
        "business": 347
    },
    {
        "id": 695,
        "ca": 1845240,
        "margin": -24334,
        "ebitda": 48102,
        "loss": 2602406,
        "year": 2017,
        "business": 348
    },
    {
        "id": 696,
        "ca": 859136,
        "margin": 54222,
        "ebitda": 75909,
        "loss": 8067701,
        "year": 2016,
        "business": 348
    },
    {
        "id": 697,
        "ca": 2256806,
        "margin": 755948,
        "ebitda": 747333,
        "loss": 3703339,
        "year": 2017,
        "business": 349
    },
    {
        "id": 698,
        "ca": 3521637,
        "margin": -57333,
        "ebitda": 41601,
        "loss": 5714553,
        "year": 2016,
        "business": 349
    },
    {
        "id": 699,
        "ca": 2815727,
        "margin": -195519,
        "ebitda": 719841,
        "loss": 901698,
        "year": 2017,
        "business": 350
    },
    {
        "id": 700,
        "ca": 2015840,
        "margin": 138241,
        "ebitda": 598147,
        "loss": 4198905,
        "year": 2016,
        "business": 350
    },
    {
        "id": 701,
        "ca": 3705522,
        "margin": 996756,
        "ebitda": 602658,
        "loss": 7970005,
        "year": 2017,
        "business": 351
    },
    {
        "id": 702,
        "ca": 2666854,
        "margin": -195357,
        "ebitda": 949062,
        "loss": 3130848,
        "year": 2016,
        "business": 351
    },
    {
        "id": 703,
        "ca": 3603883,
        "margin": 774461,
        "ebitda": 636122,
        "loss": 4943918,
        "year": 2017,
        "business": 352
    },
    {
        "id": 704,
        "ca": 3814851,
        "margin": 663838,
        "ebitda": 577149,
        "loss": 2527285,
        "year": 2016,
        "business": 352
    },
    {
        "id": 705,
        "ca": 1629966,
        "margin": 746069,
        "ebitda": 850600,
        "loss": 2709161,
        "year": 2017,
        "business": 353
    },
    {
        "id": 706,
        "ca": 2846044,
        "margin": 611249,
        "ebitda": 460149,
        "loss": 5250808,
        "year": 2016,
        "business": 353
    },
    {
        "id": 707,
        "ca": 3249803,
        "margin": -847,
        "ebitda": 105411,
        "loss": 2520700,
        "year": 2017,
        "business": 354
    },
    {
        "id": 708,
        "ca": 1921730,
        "margin": 626212,
        "ebitda": 22819,
        "loss": 5118968,
        "year": 2016,
        "business": 354
    },
    {
        "id": 709,
        "ca": 1579791,
        "margin": 949432,
        "ebitda": 637092,
        "loss": 3850113,
        "year": 2017,
        "business": 355
    },
    {
        "id": 710,
        "ca": 676502,
        "margin": 586097,
        "ebitda": 917732,
        "loss": 8035471,
        "year": 2016,
        "business": 355
    },
    {
        "id": 711,
        "ca": 2950736,
        "margin": 41353,
        "ebitda": 623061,
        "loss": 6113881,
        "year": 2017,
        "business": 356
    },
    {
        "id": 712,
        "ca": 3150706,
        "margin": 133352,
        "ebitda": 490164,
        "loss": 7660482,
        "year": 2016,
        "business": 356
    },
    {
        "id": 713,
        "ca": 899193,
        "margin": 772406,
        "ebitda": 963667,
        "loss": 6815698,
        "year": 2017,
        "business": 357
    },
    {
        "id": 714,
        "ca": 194722,
        "margin": 582959,
        "ebitda": 35452,
        "loss": 5234463,
        "year": 2016,
        "business": 357
    },
    {
        "id": 715,
        "ca": 1774014,
        "margin": 812171,
        "ebitda": 816247,
        "loss": 4795,
        "year": 2017,
        "business": 358
    },
    {
        "id": 716,
        "ca": 1106349,
        "margin": 946899,
        "ebitda": 3148,
        "loss": 4350676,
        "year": 2016,
        "business": 358
    },
    {
        "id": 717,
        "ca": 1187490,
        "margin": 917067,
        "ebitda": 455869,
        "loss": 3178879,
        "year": 2017,
        "business": 359
    },
    {
        "id": 718,
        "ca": 2388737,
        "margin": 48027,
        "ebitda": 281517,
        "loss": 533574,
        "year": 2016,
        "business": 359
    },
    {
        "id": 719,
        "ca": 2156126,
        "margin": 122500,
        "ebitda": 337337,
        "loss": 6435130,
        "year": 2017,
        "business": 360
    },
    {
        "id": 720,
        "ca": 2599176,
        "margin": 195236,
        "ebitda": 972498,
        "loss": 9801343,
        "year": 2016,
        "business": 360
    },
    {
        "id": 721,
        "ca": 3151423,
        "margin": 984862,
        "ebitda": 168374,
        "loss": 9707189,
        "year": 2017,
        "business": 361
    },
    {
        "id": 722,
        "ca": 2095312,
        "margin": 522848,
        "ebitda": 362540,
        "loss": 5681269,
        "year": 2016,
        "business": 361
    },
    {
        "id": 723,
        "ca": 1893869,
        "margin": 945565,
        "ebitda": 321181,
        "loss": 4080963,
        "year": 2017,
        "business": 362
    },
    {
        "id": 724,
        "ca": 3975986,
        "margin": -179582,
        "ebitda": 276129,
        "loss": 7201593,
        "year": 2016,
        "business": 362
    },
    {
        "id": 725,
        "ca": 242272,
        "margin": 618550,
        "ebitda": 961486,
        "loss": 3487113,
        "year": 2017,
        "business": 363
    },
    {
        "id": 726,
        "ca": 3203225,
        "margin": -196757,
        "ebitda": 359647,
        "loss": 7518833,
        "year": 2016,
        "business": 363
    },
    {
        "id": 727,
        "ca": 1880214,
        "margin": -112617,
        "ebitda": 395946,
        "loss": 2630162,
        "year": 2017,
        "business": 364
    },
    {
        "id": 728,
        "ca": 2742006,
        "margin": 22675,
        "ebitda": 945818,
        "loss": 6911677,
        "year": 2016,
        "business": 364
    },
    {
        "id": 729,
        "ca": 2690893,
        "margin": 667809,
        "ebitda": 371700,
        "loss": 1590085,
        "year": 2017,
        "business": 365
    },
    {
        "id": 730,
        "ca": 363863,
        "margin": -196490,
        "ebitda": 377252,
        "loss": 1442802,
        "year": 2016,
        "business": 365
    },
    {
        "id": 731,
        "ca": 3889022,
        "margin": 330749,
        "ebitda": 154345,
        "loss": 5901331,
        "year": 2017,
        "business": 366
    },
    {
        "id": 732,
        "ca": 2898183,
        "margin": 412020,
        "ebitda": 211412,
        "loss": 1898781,
        "year": 2016,
        "business": 366
    },
    {
        "id": 733,
        "ca": 2219717,
        "margin": 761838,
        "ebitda": 816857,
        "loss": 5635793,
        "year": 2017,
        "business": 367
    },
    {
        "id": 734,
        "ca": 1756341,
        "margin": 551974,
        "ebitda": 187358,
        "loss": 4214180,
        "year": 2016,
        "business": 367
    },
    {
        "id": 735,
        "ca": 569647,
        "margin": 207950,
        "ebitda": 83795,
        "loss": 1445553,
        "year": 2017,
        "business": 368
    },
    {
        "id": 736,
        "ca": 3913544,
        "margin": 401166,
        "ebitda": 97592,
        "loss": 8342416,
        "year": 2016,
        "business": 368
    },
    {
        "id": 737,
        "ca": 2253393,
        "margin": 718227,
        "ebitda": 643447,
        "loss": 9503316,
        "year": 2017,
        "business": 369
    },
    {
        "id": 738,
        "ca": 3035875,
        "margin": 334290,
        "ebitda": 836489,
        "loss": 5840951,
        "year": 2016,
        "business": 369
    },
    {
        "id": 739,
        "ca": 3042317,
        "margin": 658569,
        "ebitda": 71018,
        "loss": 9471325,
        "year": 2017,
        "business": 370
    },
    {
        "id": 740,
        "ca": 3299800,
        "margin": 948579,
        "ebitda": 131329,
        "loss": 784470,
        "year": 2016,
        "business": 370
    },
    {
        "id": 741,
        "ca": 1298526,
        "margin": 747600,
        "ebitda": 266745,
        "loss": 8434161,
        "year": 2017,
        "business": 371
    },
    {
        "id": 742,
        "ca": 2464257,
        "margin": 291019,
        "ebitda": 133772,
        "loss": 4757829,
        "year": 2016,
        "business": 371
    },
    {
        "id": 743,
        "ca": 656037,
        "margin": 920962,
        "ebitda": 363136,
        "loss": 715611,
        "year": 2017,
        "business": 372
    },
    {
        "id": 744,
        "ca": 137280,
        "margin": -107503,
        "ebitda": 45496,
        "loss": 2511641,
        "year": 2016,
        "business": 372
    },
    {
        "id": 745,
        "ca": 2718905,
        "margin": -8382,
        "ebitda": 422157,
        "loss": 8472060,
        "year": 2017,
        "business": 373
    },
    {
        "id": 746,
        "ca": 1685173,
        "margin": 821441,
        "ebitda": 51345,
        "loss": 3556685,
        "year": 2016,
        "business": 373
    },
    {
        "id": 747,
        "ca": 3575753,
        "margin": 446185,
        "ebitda": 624581,
        "loss": 9017996,
        "year": 2017,
        "business": 374
    },
    {
        "id": 748,
        "ca": 209955,
        "margin": 373733,
        "ebitda": 788932,
        "loss": 5333421,
        "year": 2016,
        "business": 374
    },
    {
        "id": 749,
        "ca": 3839319,
        "margin": 668896,
        "ebitda": 54927,
        "loss": 1714494,
        "year": 2017,
        "business": 375
    },
    {
        "id": 750,
        "ca": 2167669,
        "margin": 516756,
        "ebitda": 54948,
        "loss": 5883349,
        "year": 2016,
        "business": 375
    },
    {
        "id": 751,
        "ca": 860675,
        "margin": 726715,
        "ebitda": 274949,
        "loss": 6317226,
        "year": 2017,
        "business": 376
    },
    {
        "id": 752,
        "ca": 1401590,
        "margin": 762884,
        "ebitda": 893200,
        "loss": 2049642,
        "year": 2016,
        "business": 376
    },
    {
        "id": 753,
        "ca": 1716556,
        "margin": -126313,
        "ebitda": 234803,
        "loss": 7214121,
        "year": 2017,
        "business": 377
    },
    {
        "id": 754,
        "ca": 284385,
        "margin": 382663,
        "ebitda": 559178,
        "loss": 4567945,
        "year": 2016,
        "business": 377
    },
    {
        "id": 755,
        "ca": 760972,
        "margin": 608660,
        "ebitda": 662529,
        "loss": 9343354,
        "year": 2017,
        "business": 378
    },
    {
        "id": 756,
        "ca": 2956499,
        "margin": 325767,
        "ebitda": 33453,
        "loss": 46559,
        "year": 2016,
        "business": 378
    },
    {
        "id": 757,
        "ca": 1010520,
        "margin": 466668,
        "ebitda": 410516,
        "loss": 6408445,
        "year": 2017,
        "business": 379
    },
    {
        "id": 758,
        "ca": 3003038,
        "margin": 633917,
        "ebitda": 748296,
        "loss": 7334582,
        "year": 2016,
        "business": 379
    },
    {
        "id": 759,
        "ca": 1787673,
        "margin": 391473,
        "ebitda": 17367,
        "loss": 8838290,
        "year": 2017,
        "business": 380
    },
    {
        "id": 760,
        "ca": 3056695,
        "margin": 118720,
        "ebitda": 833986,
        "loss": 1329689,
        "year": 2016,
        "business": 380
    },
    {
        "id": 761,
        "ca": 2931922,
        "margin": 545582,
        "ebitda": 262168,
        "loss": 8322734,
        "year": 2017,
        "business": 381
    },
    {
        "id": 762,
        "ca": 3106178,
        "margin": 802826,
        "ebitda": 870047,
        "loss": 1968437,
        "year": 2016,
        "business": 381
    },
    {
        "id": 763,
        "ca": 951318,
        "margin": 41579,
        "ebitda": 674636,
        "loss": 4910920,
        "year": 2017,
        "business": 382
    },
    {
        "id": 764,
        "ca": 1349760,
        "margin": 611029,
        "ebitda": 517653,
        "loss": 9358256,
        "year": 2016,
        "business": 382
    },
    {
        "id": 765,
        "ca": 2569565,
        "margin": -5245,
        "ebitda": 33578,
        "loss": 5063700,
        "year": 2017,
        "business": 383
    },
    {
        "id": 766,
        "ca": 1568746,
        "margin": 720222,
        "ebitda": 254339,
        "loss": 4275511,
        "year": 2016,
        "business": 383
    },
    {
        "id": 767,
        "ca": 1923199,
        "margin": 608612,
        "ebitda": 839213,
        "loss": 7724503,
        "year": 2017,
        "business": 384
    },
    {
        "id": 768,
        "ca": 664102,
        "margin": 869980,
        "ebitda": 140011,
        "loss": 9316937,
        "year": 2016,
        "business": 384
    },
    {
        "id": 769,
        "ca": 392087,
        "margin": 53147,
        "ebitda": 842057,
        "loss": 6132850,
        "year": 2017,
        "business": 385
    },
    {
        "id": 770,
        "ca": 2261787,
        "margin": 556825,
        "ebitda": 915400,
        "loss": 8581554,
        "year": 2016,
        "business": 385
    },
    {
        "id": 771,
        "ca": 2284928,
        "margin": 114387,
        "ebitda": 377939,
        "loss": 5883459,
        "year": 2017,
        "business": 386
    },
    {
        "id": 772,
        "ca": 1621269,
        "margin": 891839,
        "ebitda": 665915,
        "loss": 5702747,
        "year": 2016,
        "business": 386
    },
    {
        "id": 773,
        "ca": 847545,
        "margin": 915350,
        "ebitda": 529109,
        "loss": 9461549,
        "year": 2017,
        "business": 387
    },
    {
        "id": 774,
        "ca": 1530298,
        "margin": 455171,
        "ebitda": 851352,
        "loss": 2596535,
        "year": 2016,
        "business": 387
    },
    {
        "id": 775,
        "ca": 1446193,
        "margin": 813909,
        "ebitda": 747653,
        "loss": 4350919,
        "year": 2017,
        "business": 388
    },
    {
        "id": 776,
        "ca": 1501763,
        "margin": 254720,
        "ebitda": 201559,
        "loss": 363810,
        "year": 2016,
        "business": 388
    },
    {
        "id": 777,
        "ca": 3354980,
        "margin": 288394,
        "ebitda": 954936,
        "loss": 339268,
        "year": 2017,
        "business": 389
    },
    {
        "id": 778,
        "ca": 705691,
        "margin": 31143,
        "ebitda": 279893,
        "loss": 868212,
        "year": 2016,
        "business": 389
    },
    {
        "id": 779,
        "ca": 1468082,
        "margin": 920479,
        "ebitda": 14209,
        "loss": 4997015,
        "year": 2017,
        "business": 390
    },
    {
        "id": 780,
        "ca": 1440635,
        "margin": 477581,
        "ebitda": 181965,
        "loss": 4799804,
        "year": 2016,
        "business": 390
    },
    {
        "id": 781,
        "ca": 1834736,
        "margin": 266930,
        "ebitda": 139596,
        "loss": 2694091,
        "year": 2017,
        "business": 391
    },
    {
        "id": 782,
        "ca": 861386,
        "margin": 278691,
        "ebitda": 840633,
        "loss": 351358,
        "year": 2016,
        "business": 391
    },
    {
        "id": 783,
        "ca": 2098835,
        "margin": 303890,
        "ebitda": 64509,
        "loss": 7448366,
        "year": 2017,
        "business": 392
    },
    {
        "id": 784,
        "ca": 1962087,
        "margin": 160425,
        "ebitda": 521042,
        "loss": 5559694,
        "year": 2016,
        "business": 392
    },
    {
        "id": 785,
        "ca": 2120874,
        "margin": 464133,
        "ebitda": 812432,
        "loss": 5430314,
        "year": 2017,
        "business": 393
    },
    {
        "id": 786,
        "ca": 2138762,
        "margin": 693207,
        "ebitda": 338632,
        "loss": 258643,
        "year": 2016,
        "business": 393
    },
    {
        "id": 787,
        "ca": 474921,
        "margin": -185517,
        "ebitda": 631776,
        "loss": 3218944,
        "year": 2017,
        "business": 394
    },
    {
        "id": 788,
        "ca": 2990297,
        "margin": -51262,
        "ebitda": 53780,
        "loss": 3031239,
        "year": 2016,
        "business": 394
    },
    {
        "id": 789,
        "ca": 2664465,
        "margin": -16421,
        "ebitda": 285623,
        "loss": 464911,
        "year": 2017,
        "business": 395
    },
    {
        "id": 790,
        "ca": 2325616,
        "margin": 852331,
        "ebitda": 666424,
        "loss": 4003657,
        "year": 2016,
        "business": 395
    },
    {
        "id": 791,
        "ca": 2229344,
        "margin": 554057,
        "ebitda": 201811,
        "loss": 8645420,
        "year": 2017,
        "business": 396
    },
    {
        "id": 792,
        "ca": 3190362,
        "margin": 889913,
        "ebitda": 779869,
        "loss": 5944041,
        "year": 2016,
        "business": 396
    },
    {
        "id": 793,
        "ca": 3551453,
        "margin": 821869,
        "ebitda": 434250,
        "loss": 1197258,
        "year": 2017,
        "business": 397
    },
    {
        "id": 794,
        "ca": 3837549,
        "margin": 706701,
        "ebitda": 820626,
        "loss": 8870882,
        "year": 2016,
        "business": 397
    },
    {
        "id": 795,
        "ca": 3950992,
        "margin": 913472,
        "ebitda": 519731,
        "loss": 8520981,
        "year": 2017,
        "business": 398
    },
    {
        "id": 796,
        "ca": 839183,
        "margin": 677435,
        "ebitda": 290693,
        "loss": 3045717,
        "year": 2016,
        "business": 398
    },
    {
        "id": 797,
        "ca": 1962552,
        "margin": -53451,
        "ebitda": 927863,
        "loss": 8404124,
        "year": 2017,
        "business": 399
    },
    {
        "id": 798,
        "ca": 3482972,
        "margin": 883776,
        "ebitda": 122439,
        "loss": 1252687,
        "year": 2016,
        "business": 399
    },
    {
        "id": 799,
        "ca": 566017,
        "margin": 749208,
        "ebitda": 648826,
        "loss": 8833738,
        "year": 2017,
        "business": 400
    },
    {
        "id": 800,
        "ca": 1082597,
        "margin": -136917,
        "ebitda": 307618,
        "loss": 6522319,
        "year": 2016,
        "business": 400
    },
    {
        "id": 801,
        "ca": 2288930,
        "margin": 625866,
        "ebitda": 527456,
        "loss": 9011473,
        "year": 2017,
        "business": 401
    },
    {
        "id": 802,
        "ca": 1211123,
        "margin": 192301,
        "ebitda": 791774,
        "loss": 1162884,
        "year": 2016,
        "business": 401
    },
    {
        "id": 803,
        "ca": 916593,
        "margin": 872099,
        "ebitda": 105123,
        "loss": 2187726,
        "year": 2017,
        "business": 402
    },
    {
        "id": 804,
        "ca": 3480523,
        "margin": 887867,
        "ebitda": 923437,
        "loss": 5417054,
        "year": 2016,
        "business": 402
    },
    {
        "id": 805,
        "ca": 1968315,
        "margin": 804693,
        "ebitda": 489249,
        "loss": 4969114,
        "year": 2017,
        "business": 403
    },
    {
        "id": 806,
        "ca": 1240908,
        "margin": 800701,
        "ebitda": 46021,
        "loss": 2781958,
        "year": 2016,
        "business": 403
    },
    {
        "id": 807,
        "ca": 2170870,
        "margin": -30607,
        "ebitda": 557277,
        "loss": 7459962,
        "year": 2017,
        "business": 404
    },
    {
        "id": 808,
        "ca": 1029086,
        "margin": 477424,
        "ebitda": 419485,
        "loss": 3592286,
        "year": 2016,
        "business": 404
    },
    {
        "id": 809,
        "ca": 2711782,
        "margin": 736784,
        "ebitda": 522943,
        "loss": 8552177,
        "year": 2017,
        "business": 405
    },
    {
        "id": 810,
        "ca": 1197378,
        "margin": 150762,
        "ebitda": 434527,
        "loss": 3712530,
        "year": 2016,
        "business": 405
    },
    {
        "id": 811,
        "ca": 1112998,
        "margin": 975979,
        "ebitda": 638482,
        "loss": 7559601,
        "year": 2017,
        "business": 406
    },
    {
        "id": 812,
        "ca": 3812725,
        "margin": 636443,
        "ebitda": 135589,
        "loss": 7138591,
        "year": 2016,
        "business": 406
    },
    {
        "id": 813,
        "ca": 2383838,
        "margin": 616939,
        "ebitda": 93826,
        "loss": 2747264,
        "year": 2017,
        "business": 407
    },
    {
        "id": 814,
        "ca": 181012,
        "margin": 250837,
        "ebitda": 115430,
        "loss": 9199688,
        "year": 2016,
        "business": 407
    },
    {
        "id": 815,
        "ca": 1405292,
        "margin": 540777,
        "ebitda": 28731,
        "loss": 2524599,
        "year": 2017,
        "business": 408
    },
    {
        "id": 816,
        "ca": 329921,
        "margin": 346998,
        "ebitda": 835285,
        "loss": 4111345,
        "year": 2016,
        "business": 408
    },
    {
        "id": 817,
        "ca": 3302508,
        "margin": 168359,
        "ebitda": 846929,
        "loss": 1222148,
        "year": 2017,
        "business": 409
    },
    {
        "id": 818,
        "ca": 3575626,
        "margin": 876556,
        "ebitda": 371425,
        "loss": 1804369,
        "year": 2016,
        "business": 409
    },
    {
        "id": 819,
        "ca": 2366861,
        "margin": 190274,
        "ebitda": 455961,
        "loss": 1587340,
        "year": 2017,
        "business": 410
    },
    {
        "id": 820,
        "ca": 3560590,
        "margin": 10046,
        "ebitda": 914632,
        "loss": 4602986,
        "year": 2016,
        "business": 410
    },
    {
        "id": 821,
        "ca": 3576414,
        "margin": 909487,
        "ebitda": 852413,
        "loss": 5217031,
        "year": 2017,
        "business": 411
    },
    {
        "id": 822,
        "ca": 2352924,
        "margin": 152405,
        "ebitda": 326292,
        "loss": 952533,
        "year": 2016,
        "business": 411
    },
    {
        "id": 823,
        "ca": 3558108,
        "margin": -95600,
        "ebitda": 171362,
        "loss": 7210648,
        "year": 2017,
        "business": 412
    },
    {
        "id": 824,
        "ca": 1606860,
        "margin": 188624,
        "ebitda": 607255,
        "loss": 7826122,
        "year": 2016,
        "business": 412
    },
    {
        "id": 825,
        "ca": 3270824,
        "margin": 761275,
        "ebitda": 754007,
        "loss": 4707835,
        "year": 2017,
        "business": 413
    },
    {
        "id": 826,
        "ca": 3448481,
        "margin": -90003,
        "ebitda": 179065,
        "loss": 3175883,
        "year": 2016,
        "business": 413
    },
    {
        "id": 827,
        "ca": 1314254,
        "margin": 308412,
        "ebitda": 897616,
        "loss": 4718253,
        "year": 2017,
        "business": 414
    },
    {
        "id": 828,
        "ca": 3846330,
        "margin": 799473,
        "ebitda": 521937,
        "loss": 4576128,
        "year": 2016,
        "business": 414
    },
    {
        "id": 829,
        "ca": 1621442,
        "margin": -124749,
        "ebitda": 986696,
        "loss": 9496804,
        "year": 2017,
        "business": 415
    },
    {
        "id": 830,
        "ca": 3406668,
        "margin": 45680,
        "ebitda": 712892,
        "loss": 9152835,
        "year": 2016,
        "business": 415
    },
    {
        "id": 831,
        "ca": 2269765,
        "margin": -149226,
        "ebitda": 792527,
        "loss": 1323550,
        "year": 2017,
        "business": 416
    },
    {
        "id": 832,
        "ca": 2963306,
        "margin": 454366,
        "ebitda": 724729,
        "loss": 5595133,
        "year": 2016,
        "business": 416
    },
    {
        "id": 833,
        "ca": 1605992,
        "margin": 988656,
        "ebitda": 462810,
        "loss": 9989406,
        "year": 2017,
        "business": 417
    },
    {
        "id": 834,
        "ca": 1686924,
        "margin": 365867,
        "ebitda": 41800,
        "loss": 2985081,
        "year": 2016,
        "business": 417
    },
    {
        "id": 835,
        "ca": 1581711,
        "margin": 211622,
        "ebitda": 341743,
        "loss": 2826364,
        "year": 2017,
        "business": 418
    },
    {
        "id": 836,
        "ca": 967668,
        "margin": 616783,
        "ebitda": 829230,
        "loss": 4969477,
        "year": 2016,
        "business": 418
    },
    {
        "id": 837,
        "ca": 2130668,
        "margin": 187434,
        "ebitda": 82987,
        "loss": 2374500,
        "year": 2017,
        "business": 419
    },
    {
        "id": 838,
        "ca": 2060937,
        "margin": 693994,
        "ebitda": 173536,
        "loss": 738598,
        "year": 2016,
        "business": 419
    },
    {
        "id": 839,
        "ca": 3783759,
        "margin": -102080,
        "ebitda": 236607,
        "loss": 5425293,
        "year": 2017,
        "business": 420
    },
    {
        "id": 840,
        "ca": 215432,
        "margin": 573524,
        "ebitda": 470330,
        "loss": 7000,
        "year": 2016,
        "business": 420
    },
    {
        "id": 841,
        "ca": 2905580,
        "margin": 764773,
        "ebitda": 154364,
        "loss": 4777236,
        "year": 2017,
        "business": 421
    },
    {
        "id": 842,
        "ca": 1195582,
        "margin": 70071,
        "ebitda": 212451,
        "loss": 1188373,
        "year": 2016,
        "business": 421
    },
    {
        "id": 843,
        "ca": 3495377,
        "margin": 636655,
        "ebitda": 134257,
        "loss": 3172749,
        "year": 2017,
        "business": 422
    },
    {
        "id": 844,
        "ca": 1677355,
        "margin": 911493,
        "ebitda": 888192,
        "loss": 6089259,
        "year": 2016,
        "business": 422
    },
    {
        "id": 845,
        "ca": 1466196,
        "margin": 548741,
        "ebitda": 160073,
        "loss": 9729979,
        "year": 2017,
        "business": 423
    },
    {
        "id": 846,
        "ca": 1661417,
        "margin": 197013,
        "ebitda": 290678,
        "loss": 4389395,
        "year": 2016,
        "business": 423
    },
    {
        "id": 847,
        "ca": 3127946,
        "margin": 893831,
        "ebitda": 288833,
        "loss": 7748286,
        "year": 2017,
        "business": 424
    },
    {
        "id": 848,
        "ca": 2225294,
        "margin": 217009,
        "ebitda": 62425,
        "loss": 1368019,
        "year": 2016,
        "business": 424
    },
    {
        "id": 849,
        "ca": 1132704,
        "margin": -150713,
        "ebitda": 232972,
        "loss": 1084483,
        "year": 2017,
        "business": 425
    },
    {
        "id": 850,
        "ca": 3465107,
        "margin": 199917,
        "ebitda": 689631,
        "loss": 3865907,
        "year": 2016,
        "business": 425
    },
    {
        "id": 851,
        "ca": 3217194,
        "margin": -111319,
        "ebitda": 990607,
        "loss": 7304804,
        "year": 2017,
        "business": 426
    },
    {
        "id": 852,
        "ca": 1751330,
        "margin": 57717,
        "ebitda": 662916,
        "loss": 5826769,
        "year": 2016,
        "business": 426
    },
    {
        "id": 853,
        "ca": 1382913,
        "margin": 19950,
        "ebitda": 382795,
        "loss": 4053846,
        "year": 2017,
        "business": 427
    },
    {
        "id": 854,
        "ca": 1988292,
        "margin": 662285,
        "ebitda": 349462,
        "loss": 2033756,
        "year": 2016,
        "business": 427
    },
    {
        "id": 855,
        "ca": 2043418,
        "margin": -19705,
        "ebitda": 502427,
        "loss": 2460692,
        "year": 2017,
        "business": 428
    },
    {
        "id": 856,
        "ca": 3748605,
        "margin": 698430,
        "ebitda": 836909,
        "loss": 6905693,
        "year": 2016,
        "business": 428
    },
    {
        "id": 857,
        "ca": 707876,
        "margin": 790040,
        "ebitda": 245530,
        "loss": 8748923,
        "year": 2017,
        "business": 429
    },
    {
        "id": 858,
        "ca": 1935866,
        "margin": 201333,
        "ebitda": 969947,
        "loss": 563824,
        "year": 2016,
        "business": 429
    },
    {
        "id": 859,
        "ca": 2803582,
        "margin": 56784,
        "ebitda": 353169,
        "loss": 4319179,
        "year": 2017,
        "business": 430
    },
    {
        "id": 860,
        "ca": 1482824,
        "margin": -46544,
        "ebitda": 300833,
        "loss": 2922905,
        "year": 2016,
        "business": 430
    },
    {
        "id": 861,
        "ca": 1071588,
        "margin": 615008,
        "ebitda": 759283,
        "loss": 3420671,
        "year": 2017,
        "business": 431
    },
    {
        "id": 862,
        "ca": 2185143,
        "margin": 373678,
        "ebitda": 768236,
        "loss": 1655402,
        "year": 2016,
        "business": 431
    },
    {
        "id": 863,
        "ca": 3743866,
        "margin": 977142,
        "ebitda": 7294,
        "loss": 61695,
        "year": 2017,
        "business": 432
    },
    {
        "id": 864,
        "ca": 1838054,
        "margin": 710668,
        "ebitda": 73938,
        "loss": 7620100,
        "year": 2016,
        "business": 432
    },
    {
        "id": 865,
        "ca": 1110597,
        "margin": 357251,
        "ebitda": 384948,
        "loss": 2165446,
        "year": 2017,
        "business": 433
    },
    {
        "id": 866,
        "ca": 603497,
        "margin": 880604,
        "ebitda": 498291,
        "loss": 6209682,
        "year": 2016,
        "business": 433
    },
    {
        "id": 867,
        "ca": 3582353,
        "margin": 647395,
        "ebitda": 756430,
        "loss": 5710510,
        "year": 2017,
        "business": 434
    },
    {
        "id": 868,
        "ca": 2897457,
        "margin": 101904,
        "ebitda": 765526,
        "loss": 369894,
        "year": 2016,
        "business": 434
    },
    {
        "id": 869,
        "ca": 2085654,
        "margin": 945811,
        "ebitda": 685290,
        "loss": 7008522,
        "year": 2017,
        "business": 435
    },
    {
        "id": 870,
        "ca": 3575110,
        "margin": -166822,
        "ebitda": 56090,
        "loss": 6708429,
        "year": 2016,
        "business": 435
    },
    {
        "id": 871,
        "ca": 3800200,
        "margin": 983408,
        "ebitda": 656006,
        "loss": 3614391,
        "year": 2017,
        "business": 436
    },
    {
        "id": 872,
        "ca": 3156339,
        "margin": 938715,
        "ebitda": 110395,
        "loss": 9988595,
        "year": 2016,
        "business": 436
    },
    {
        "id": 873,
        "ca": 2779663,
        "margin": 484032,
        "ebitda": 420505,
        "loss": 2877267,
        "year": 2017,
        "business": 437
    },
    {
        "id": 874,
        "ca": 3192092,
        "margin": 695775,
        "ebitda": 446858,
        "loss": 1989627,
        "year": 2016,
        "business": 437
    },
    {
        "id": 875,
        "ca": 2628236,
        "margin": 923745,
        "ebitda": 406925,
        "loss": 4739018,
        "year": 2017,
        "business": 438
    },
    {
        "id": 876,
        "ca": 2504588,
        "margin": 716151,
        "ebitda": 517226,
        "loss": 8122080,
        "year": 2016,
        "business": 438
    },
    {
        "id": 877,
        "ca": 997117,
        "margin": 601282,
        "ebitda": 941833,
        "loss": 8276036,
        "year": 2017,
        "business": 439
    },
    {
        "id": 878,
        "ca": 2850944,
        "margin": 339898,
        "ebitda": 460552,
        "loss": 4659996,
        "year": 2016,
        "business": 439
    },
    {
        "id": 879,
        "ca": 2862585,
        "margin": 614851,
        "ebitda": 935409,
        "loss": 9626931,
        "year": 2017,
        "business": 440
    },
    {
        "id": 880,
        "ca": 442032,
        "margin": 66568,
        "ebitda": 424129,
        "loss": 3074482,
        "year": 2016,
        "business": 440
    },
    {
        "id": 881,
        "ca": 1749281,
        "margin": 305442,
        "ebitda": 792086,
        "loss": 8975322,
        "year": 2017,
        "business": 441
    },
    {
        "id": 882,
        "ca": 1705519,
        "margin": 219592,
        "ebitda": 813822,
        "loss": 8136019,
        "year": 2016,
        "business": 441
    },
    {
        "id": 883,
        "ca": 3085562,
        "margin": 541397,
        "ebitda": 941276,
        "loss": 799152,
        "year": 2017,
        "business": 442
    },
    {
        "id": 884,
        "ca": 2681506,
        "margin": 582101,
        "ebitda": 1093,
        "loss": 3946368,
        "year": 2016,
        "business": 442
    },
    {
        "id": 885,
        "ca": 2045899,
        "margin": 638998,
        "ebitda": 377189,
        "loss": 1935631,
        "year": 2017,
        "business": 443
    },
    {
        "id": 886,
        "ca": 2450274,
        "margin": 556985,
        "ebitda": 67665,
        "loss": 7462333,
        "year": 2016,
        "business": 443
    },
    {
        "id": 887,
        "ca": 2725524,
        "margin": -79936,
        "ebitda": 283420,
        "loss": 1513558,
        "year": 2017,
        "business": 444
    },
    {
        "id": 888,
        "ca": 2168066,
        "margin": 932147,
        "ebitda": 181329,
        "loss": 6875170,
        "year": 2016,
        "business": 444
    },
    {
        "id": 889,
        "ca": 3124755,
        "margin": 555100,
        "ebitda": 844024,
        "loss": 7460202,
        "year": 2017,
        "business": 445
    },
    {
        "id": 890,
        "ca": 3620914,
        "margin": 7120,
        "ebitda": 731419,
        "loss": 2674956,
        "year": 2016,
        "business": 445
    },
    {
        "id": 891,
        "ca": 2770687,
        "margin": -57402,
        "ebitda": 247868,
        "loss": 7239538,
        "year": 2017,
        "business": 446
    },
    {
        "id": 892,
        "ca": 1501347,
        "margin": 498682,
        "ebitda": 720131,
        "loss": 5222928,
        "year": 2016,
        "business": 446
    },
    {
        "id": 893,
        "ca": 2847864,
        "margin": 943351,
        "ebitda": 2204,
        "loss": 5569937,
        "year": 2017,
        "business": 447
    },
    {
        "id": 894,
        "ca": 2250194,
        "margin": 190540,
        "ebitda": 999126,
        "loss": 9676330,
        "year": 2016,
        "business": 447
    },
    {
        "id": 895,
        "ca": 3418804,
        "margin": 564868,
        "ebitda": 683794,
        "loss": 5886162,
        "year": 2017,
        "business": 448
    },
    {
        "id": 896,
        "ca": 2674143,
        "margin": -69468,
        "ebitda": 567767,
        "loss": 7289695,
        "year": 2016,
        "business": 448
    },
    {
        "id": 897,
        "ca": 2527069,
        "margin": 347646,
        "ebitda": 517752,
        "loss": 5525663,
        "year": 2017,
        "business": 449
    },
    {
        "id": 898,
        "ca": 2239416,
        "margin": -16094,
        "ebitda": 756599,
        "loss": 2475871,
        "year": 2016,
        "business": 449
    },
    {
        "id": 899,
        "ca": 3855462,
        "margin": 439437,
        "ebitda": 229158,
        "loss": 5632398,
        "year": 2017,
        "business": 450
    },
    {
        "id": 900,
        "ca": 3542559,
        "margin": 403375,
        "ebitda": 347885,
        "loss": 459845,
        "year": 2016,
        "business": 450
    },
    {
        "id": 901,
        "ca": 780418,
        "margin": 253910,
        "ebitda": 61490,
        "loss": 2302731,
        "year": 2017,
        "business": 451
    },
    {
        "id": 902,
        "ca": 852624,
        "margin": 950961,
        "ebitda": 415343,
        "loss": 5304281,
        "year": 2016,
        "business": 451
    },
    {
        "id": 903,
        "ca": 1683315,
        "margin": 366569,
        "ebitda": 904660,
        "loss": 9447066,
        "year": 2017,
        "business": 452
    },
    {
        "id": 904,
        "ca": 2481528,
        "margin": 843435,
        "ebitda": 253405,
        "loss": 227331,
        "year": 2016,
        "business": 452
    },
    {
        "id": 905,
        "ca": 2923356,
        "margin": 40946,
        "ebitda": 224150,
        "loss": 5998069,
        "year": 2017,
        "business": 453
    },
    {
        "id": 906,
        "ca": 2166751,
        "margin": -191638,
        "ebitda": 499742,
        "loss": 5399421,
        "year": 2016,
        "business": 453
    },
    {
        "id": 907,
        "ca": 2638760,
        "margin": 475681,
        "ebitda": 933826,
        "loss": 8523412,
        "year": 2017,
        "business": 454
    },
    {
        "id": 908,
        "ca": 971252,
        "margin": 653981,
        "ebitda": 418201,
        "loss": 8203281,
        "year": 2016,
        "business": 454
    },
    {
        "id": 909,
        "ca": 3157255,
        "margin": 68908,
        "ebitda": 828045,
        "loss": 3667986,
        "year": 2017,
        "business": 455
    },
    {
        "id": 910,
        "ca": 739942,
        "margin": 886381,
        "ebitda": 246003,
        "loss": 2360889,
        "year": 2016,
        "business": 455
    },
    {
        "id": 911,
        "ca": 3214168,
        "margin": 338364,
        "ebitda": 639154,
        "loss": 4144626,
        "year": 2017,
        "business": 456
    },
    {
        "id": 912,
        "ca": 1118078,
        "margin": -129297,
        "ebitda": 435120,
        "loss": 2079426,
        "year": 2016,
        "business": 456
    },
    {
        "id": 913,
        "ca": 3615862,
        "margin": 298206,
        "ebitda": 481195,
        "loss": 5200679,
        "year": 2017,
        "business": 457
    },
    {
        "id": 914,
        "ca": 690989,
        "margin": 235668,
        "ebitda": 753715,
        "loss": 8693035,
        "year": 2016,
        "business": 457
    },
    {
        "id": 915,
        "ca": 3862714,
        "margin": 151739,
        "ebitda": 751571,
        "loss": 3531120,
        "year": 2017,
        "business": 458
    },
    {
        "id": 916,
        "ca": 3848570,
        "margin": -101425,
        "ebitda": 507648,
        "loss": 5507248,
        "year": 2016,
        "business": 458
    },
    {
        "id": 917,
        "ca": 1810831,
        "margin": 336372,
        "ebitda": 698792,
        "loss": 280354,
        "year": 2017,
        "business": 459
    },
    {
        "id": 918,
        "ca": 2472954,
        "margin": 11517,
        "ebitda": 271457,
        "loss": 3860091,
        "year": 2016,
        "business": 459
    },
    {
        "id": 919,
        "ca": 2495145,
        "margin": 269393,
        "ebitda": 611512,
        "loss": 9524803,
        "year": 2017,
        "business": 460
    },
    {
        "id": 920,
        "ca": 2742711,
        "margin": 618463,
        "ebitda": 603368,
        "loss": 381360,
        "year": 2016,
        "business": 460
    },
    {
        "id": 921,
        "ca": 2468948,
        "margin": 266613,
        "ebitda": 518012,
        "loss": 8264606,
        "year": 2017,
        "business": 461
    },
    {
        "id": 922,
        "ca": 2998984,
        "margin": 466802,
        "ebitda": 619463,
        "loss": 5488379,
        "year": 2016,
        "business": 461
    },
    {
        "id": 923,
        "ca": 3800623,
        "margin": 877950,
        "ebitda": 684045,
        "loss": 2672828,
        "year": 2017,
        "business": 462
    },
    {
        "id": 924,
        "ca": 2423741,
        "margin": 638411,
        "ebitda": 390220,
        "loss": 7443191,
        "year": 2016,
        "business": 462
    },
    {
        "id": 925,
        "ca": 1137052,
        "margin": 707224,
        "ebitda": 934608,
        "loss": 7813918,
        "year": 2017,
        "business": 463
    },
    {
        "id": 926,
        "ca": 1785791,
        "margin": 286417,
        "ebitda": 941119,
        "loss": 6486162,
        "year": 2016,
        "business": 463
    },
    {
        "id": 927,
        "ca": 3028204,
        "margin": 484698,
        "ebitda": 736343,
        "loss": 694053,
        "year": 2017,
        "business": 464
    },
    {
        "id": 928,
        "ca": 3691937,
        "margin": 689405,
        "ebitda": 330008,
        "loss": 6404240,
        "year": 2016,
        "business": 464
    },
    {
        "id": 929,
        "ca": 3359516,
        "margin": 848271,
        "ebitda": 802381,
        "loss": 1960985,
        "year": 2017,
        "business": 465
    },
    {
        "id": 930,
        "ca": 629838,
        "margin": 142714,
        "ebitda": 98320,
        "loss": 7795293,
        "year": 2016,
        "business": 465
    },
    {
        "id": 931,
        "ca": 755864,
        "margin": -134281,
        "ebitda": 50907,
        "loss": 7205032,
        "year": 2017,
        "business": 466
    },
    {
        "id": 932,
        "ca": 1304154,
        "margin": 666758,
        "ebitda": 473219,
        "loss": 3120724,
        "year": 2016,
        "business": 466
    },
    {
        "id": 933,
        "ca": 2391428,
        "margin": 366454,
        "ebitda": 572774,
        "loss": 226070,
        "year": 2017,
        "business": 467
    },
    {
        "id": 934,
        "ca": 2543543,
        "margin": 340375,
        "ebitda": 975406,
        "loss": 1784203,
        "year": 2016,
        "business": 467
    },
    {
        "id": 935,
        "ca": 597931,
        "margin": 864210,
        "ebitda": 103209,
        "loss": 9041769,
        "year": 2017,
        "business": 468
    },
    {
        "id": 936,
        "ca": 1416031,
        "margin": 24317,
        "ebitda": 801787,
        "loss": 2280285,
        "year": 2016,
        "business": 468
    },
    {
        "id": 937,
        "ca": 221003,
        "margin": -196582,
        "ebitda": 799669,
        "loss": 1486436,
        "year": 2017,
        "business": 469
    },
    {
        "id": 938,
        "ca": 2849613,
        "margin": 295582,
        "ebitda": 440676,
        "loss": 5325285,
        "year": 2016,
        "business": 469
    },
    {
        "id": 939,
        "ca": 3955854,
        "margin": 392345,
        "ebitda": 568943,
        "loss": 2154566,
        "year": 2017,
        "business": 470
    },
    {
        "id": 940,
        "ca": 963387,
        "margin": 746525,
        "ebitda": 237115,
        "loss": 5620944,
        "year": 2016,
        "business": 470
    },
    {
        "id": 941,
        "ca": 1488892,
        "margin": 558521,
        "ebitda": 929707,
        "loss": 5059510,
        "year": 2017,
        "business": 471
    },
    {
        "id": 942,
        "ca": 2011175,
        "margin": 616697,
        "ebitda": 9370,
        "loss": 218048,
        "year": 2016,
        "business": 471
    },
    {
        "id": 943,
        "ca": 1743144,
        "margin": 729583,
        "ebitda": 978075,
        "loss": 7080274,
        "year": 2017,
        "business": 472
    },
    {
        "id": 944,
        "ca": 3866677,
        "margin": 177613,
        "ebitda": 940170,
        "loss": 700722,
        "year": 2016,
        "business": 472
    },
    {
        "id": 945,
        "ca": 558480,
        "margin": 238388,
        "ebitda": 971986,
        "loss": 4304085,
        "year": 2017,
        "business": 473
    },
    {
        "id": 946,
        "ca": 3936613,
        "margin": 401206,
        "ebitda": 975541,
        "loss": 6920108,
        "year": 2016,
        "business": 473
    },
    {
        "id": 947,
        "ca": 1735954,
        "margin": 574924,
        "ebitda": 103121,
        "loss": 4073656,
        "year": 2017,
        "business": 474
    },
    {
        "id": 948,
        "ca": 2758509,
        "margin": 377633,
        "ebitda": 41448,
        "loss": 3022862,
        "year": 2016,
        "business": 474
    },
    {
        "id": 949,
        "ca": 1761211,
        "margin": 304069,
        "ebitda": 84834,
        "loss": 5676435,
        "year": 2017,
        "business": 475
    },
    {
        "id": 950,
        "ca": 1984146,
        "margin": 91575,
        "ebitda": 347428,
        "loss": 9622164,
        "year": 2016,
        "business": 475
    },
    {
        "id": 951,
        "ca": 2643273,
        "margin": -29798,
        "ebitda": 340699,
        "loss": 8373660,
        "year": 2017,
        "business": 476
    },
    {
        "id": 952,
        "ca": 1423040,
        "margin": 610125,
        "ebitda": 768396,
        "loss": 544295,
        "year": 2016,
        "business": 476
    },
    {
        "id": 953,
        "ca": 3299213,
        "margin": 709627,
        "ebitda": 264062,
        "loss": 3046361,
        "year": 2017,
        "business": 477
    },
    {
        "id": 954,
        "ca": 2592250,
        "margin": 421402,
        "ebitda": 956385,
        "loss": 2911830,
        "year": 2016,
        "business": 477
    },
    {
        "id": 955,
        "ca": 3165716,
        "margin": 172285,
        "ebitda": 757818,
        "loss": 6384375,
        "year": 2017,
        "business": 478
    },
    {
        "id": 956,
        "ca": 2164222,
        "margin": -35561,
        "ebitda": 576956,
        "loss": 6606107,
        "year": 2016,
        "business": 478
    },
    {
        "id": 957,
        "ca": 2568448,
        "margin": -107963,
        "ebitda": 231533,
        "loss": 7426081,
        "year": 2017,
        "business": 479
    },
    {
        "id": 958,
        "ca": 1475779,
        "margin": 712563,
        "ebitda": 797915,
        "loss": 7693019,
        "year": 2016,
        "business": 479
    },
    {
        "id": 959,
        "ca": 1430004,
        "margin": 540902,
        "ebitda": 545668,
        "loss": 4841050,
        "year": 2017,
        "business": 480
    },
    {
        "id": 960,
        "ca": 1799190,
        "margin": 159426,
        "ebitda": 240493,
        "loss": 8388552,
        "year": 2016,
        "business": 480
    },
    {
        "id": 961,
        "ca": 3832122,
        "margin": 990622,
        "ebitda": 83076,
        "loss": 9566831,
        "year": 2017,
        "business": 481
    },
    {
        "id": 962,
        "ca": 1340863,
        "margin": 729015,
        "ebitda": 702524,
        "loss": 9452543,
        "year": 2016,
        "business": 481
    },
    {
        "id": 963,
        "ca": 3086356,
        "margin": 286645,
        "ebitda": 664128,
        "loss": 7357791,
        "year": 2017,
        "business": 482
    },
    {
        "id": 964,
        "ca": 896683,
        "margin": -75904,
        "ebitda": 83236,
        "loss": 9403115,
        "year": 2016,
        "business": 482
    },
    {
        "id": 965,
        "ca": 1864832,
        "margin": 979099,
        "ebitda": 94814,
        "loss": 393823,
        "year": 2017,
        "business": 483
    },
    {
        "id": 966,
        "ca": 3003763,
        "margin": 802759,
        "ebitda": 114823,
        "loss": 1811169,
        "year": 2016,
        "business": 483
    },
    {
        "id": 967,
        "ca": 2813307,
        "margin": 260988,
        "ebitda": 312849,
        "loss": 8685092,
        "year": 2017,
        "business": 484
    },
    {
        "id": 968,
        "ca": 983588,
        "margin": 569805,
        "ebitda": 243499,
        "loss": 1988781,
        "year": 2016,
        "business": 484
    },
    {
        "id": 969,
        "ca": 1059086,
        "margin": 726540,
        "ebitda": 555656,
        "loss": 9370789,
        "year": 2017,
        "business": 485
    },
    {
        "id": 970,
        "ca": 2699069,
        "margin": 408401,
        "ebitda": 133834,
        "loss": 7171094,
        "year": 2016,
        "business": 485
    },
    {
        "id": 971,
        "ca": 2805564,
        "margin": -74978,
        "ebitda": 636458,
        "loss": 3732852,
        "year": 2017,
        "business": 486
    },
    {
        "id": 972,
        "ca": 320099,
        "margin": 622018,
        "ebitda": 340595,
        "loss": 6852352,
        "year": 2016,
        "business": 486
    },
    {
        "id": 973,
        "ca": 3677227,
        "margin": 70725,
        "ebitda": 502277,
        "loss": 5969492,
        "year": 2017,
        "business": 487
    },
    {
        "id": 974,
        "ca": 3421899,
        "margin": 840494,
        "ebitda": 393761,
        "loss": 9866139,
        "year": 2016,
        "business": 487
    },
    {
        "id": 975,
        "ca": 1120485,
        "margin": 543583,
        "ebitda": 955755,
        "loss": 8280534,
        "year": 2017,
        "business": 488
    },
    {
        "id": 976,
        "ca": 318012,
        "margin": 669498,
        "ebitda": 139045,
        "loss": 3466042,
        "year": 2016,
        "business": 488
    },
    {
        "id": 977,
        "ca": 773015,
        "margin": 318896,
        "ebitda": 168539,
        "loss": 1650166,
        "year": 2017,
        "business": 489
    },
    {
        "id": 978,
        "ca": 3084411,
        "margin": 566649,
        "ebitda": 870175,
        "loss": 6696072,
        "year": 2016,
        "business": 489
    },
    {
        "id": 979,
        "ca": 1229260,
        "margin": 876715,
        "ebitda": 402751,
        "loss": 9692064,
        "year": 2017,
        "business": 490
    },
    {
        "id": 980,
        "ca": 1850444,
        "margin": 826875,
        "ebitda": 195436,
        "loss": 9929812,
        "year": 2016,
        "business": 490
    },
    {
        "id": 981,
        "ca": 3537898,
        "margin": 322510,
        "ebitda": 714186,
        "loss": 5612606,
        "year": 2017,
        "business": 491
    },
    {
        "id": 982,
        "ca": 2275617,
        "margin": 365658,
        "ebitda": 15200,
        "loss": 6011480,
        "year": 2016,
        "business": 491
    },
    {
        "id": 983,
        "ca": 988115,
        "margin": 670118,
        "ebitda": 259837,
        "loss": 8708467,
        "year": 2017,
        "business": 492
    },
    {
        "id": 984,
        "ca": 3478598,
        "margin": 108184,
        "ebitda": 684974,
        "loss": 212414,
        "year": 2016,
        "business": 492
    },
    {
        "id": 985,
        "ca": 247767,
        "margin": 306228,
        "ebitda": 935869,
        "loss": 545239,
        "year": 2017,
        "business": 493
    },
    {
        "id": 986,
        "ca": 2363023,
        "margin": -138419,
        "ebitda": 687807,
        "loss": 1530817,
        "year": 2016,
        "business": 493
    },
    {
        "id": 987,
        "ca": 1973033,
        "margin": 699356,
        "ebitda": 1035,
        "loss": 4978977,
        "year": 2017,
        "business": 494
    },
    {
        "id": 988,
        "ca": 2131056,
        "margin": -161204,
        "ebitda": 877471,
        "loss": 5818986,
        "year": 2016,
        "business": 494
    },
    {
        "id": 989,
        "ca": 458550,
        "margin": 55359,
        "ebitda": 930583,
        "loss": 875340,
        "year": 2017,
        "business": 495
    },
    {
        "id": 990,
        "ca": 2945215,
        "margin": 370600,
        "ebitda": 116737,
        "loss": 7124628,
        "year": 2016,
        "business": 495
    },
    {
        "id": 991,
        "ca": 2606784,
        "margin": 316988,
        "ebitda": 165773,
        "loss": 9560526,
        "year": 2017,
        "business": 496
    },
    {
        "id": 992,
        "ca": 3944452,
        "margin": -91526,
        "ebitda": 625578,
        "loss": 4850207,
        "year": 2016,
        "business": 496
    },
    {
        "id": 993,
        "ca": 2424162,
        "margin": 347987,
        "ebitda": 457653,
        "loss": 9899539,
        "year": 2017,
        "business": 497
    },
    {
        "id": 994,
        "ca": 971031,
        "margin": 544796,
        "ebitda": 484799,
        "loss": 8584826,
        "year": 2016,
        "business": 497
    },
    {
        "id": 995,
        "ca": 3008526,
        "margin": 199036,
        "ebitda": 637670,
        "loss": 1592478,
        "year": 2017,
        "business": 498
    },
    {
        "id": 996,
        "ca": 3478351,
        "margin": -116528,
        "ebitda": 131151,
        "loss": 618158,
        "year": 2016,
        "business": 498
    },
    {
        "id": 997,
        "ca": 834888,
        "margin": 280921,
        "ebitda": 138727,
        "loss": 1304092,
        "year": 2017,
        "business": 499
    },
    {
        "id": 998,
        "ca": 505444,
        "margin": 641477,
        "ebitda": 282113,
        "loss": 4468581,
        "year": 2016,
        "business": 499
    },
    {
        "id": 999,
        "ca": 644905,
        "margin": 707606,
        "ebitda": 372426,
        "loss": 4740379,
        "year": 2017,
        "business": 500
    },
    {
        "id": 1000,
        "ca": 533279,
        "margin": 477171,
        "ebitda": 572980,
        "loss": 286632,
        "year": 2016,
        "business": 500
    },
    {
        "id": 1001,
        "ca": 2487709,
        "margin": 136545,
        "ebitda": 418716,
        "loss": 8899193,
        "year": 2017,
        "business": 501
    },
    {
        "id": 1002,
        "ca": 524472,
        "margin": 300617,
        "ebitda": 519336,
        "loss": 6279750,
        "year": 2016,
        "business": 501
    },
    {
        "id": 1003,
        "ca": 990976,
        "margin": 740840,
        "ebitda": 799119,
        "loss": 4435259,
        "year": 2017,
        "business": 502
    },
    {
        "id": 1004,
        "ca": 2611344,
        "margin": 189230,
        "ebitda": 513401,
        "loss": 8293995,
        "year": 2016,
        "business": 502
    },
    {
        "id": 1005,
        "ca": 701514,
        "margin": 509708,
        "ebitda": 244264,
        "loss": 8960265,
        "year": 2017,
        "business": 503
    },
    {
        "id": 1006,
        "ca": 1653285,
        "margin": 930816,
        "ebitda": 85988,
        "loss": 6446751,
        "year": 2016,
        "business": 503
    },
    {
        "id": 1007,
        "ca": 949622,
        "margin": -133320,
        "ebitda": 779425,
        "loss": 8783185,
        "year": 2017,
        "business": 504
    },
    {
        "id": 1008,
        "ca": 2294969,
        "margin": 96891,
        "ebitda": 664641,
        "loss": 1202828,
        "year": 2016,
        "business": 504
    },
    {
        "id": 1009,
        "ca": 2438988,
        "margin": 7002,
        "ebitda": 437538,
        "loss": 1572090,
        "year": 2017,
        "business": 505
    },
    {
        "id": 1010,
        "ca": 2609849,
        "margin": 383242,
        "ebitda": 947591,
        "loss": 8049549,
        "year": 2016,
        "business": 505
    },
    {
        "id": 1011,
        "ca": 2577452,
        "margin": 956503,
        "ebitda": 792855,
        "loss": 7448164,
        "year": 2017,
        "business": 506
    },
    {
        "id": 1012,
        "ca": 162451,
        "margin": 906310,
        "ebitda": 549134,
        "loss": 6527603,
        "year": 2016,
        "business": 506
    },
    {
        "id": 1013,
        "ca": 1805880,
        "margin": 486850,
        "ebitda": 621705,
        "loss": 1158819,
        "year": 2017,
        "business": 507
    },
    {
        "id": 1014,
        "ca": 2736439,
        "margin": 210967,
        "ebitda": 688271,
        "loss": 6528806,
        "year": 2016,
        "business": 507
    },
    {
        "id": 1015,
        "ca": 243270,
        "margin": 5598,
        "ebitda": 589401,
        "loss": 5013851,
        "year": 2017,
        "business": 508
    },
    {
        "id": 1016,
        "ca": 3454439,
        "margin": 821135,
        "ebitda": 66826,
        "loss": 4242001,
        "year": 2016,
        "business": 508
    },
    {
        "id": 1017,
        "ca": 1378778,
        "margin": -114498,
        "ebitda": 618264,
        "loss": 448975,
        "year": 2017,
        "business": 509
    },
    {
        "id": 1018,
        "ca": 2889480,
        "margin": -57018,
        "ebitda": 755689,
        "loss": 4693159,
        "year": 2016,
        "business": 509
    },
    {
        "id": 1019,
        "ca": 1092961,
        "margin": 288432,
        "ebitda": 268858,
        "loss": 5084356,
        "year": 2017,
        "business": 510
    },
    {
        "id": 1020,
        "ca": 754332,
        "margin": 554025,
        "ebitda": 659972,
        "loss": 7709920,
        "year": 2016,
        "business": 510
    },
    {
        "id": 1021,
        "ca": 413212,
        "margin": 489303,
        "ebitda": 979943,
        "loss": 1874040,
        "year": 2017,
        "business": 511
    },
    {
        "id": 1022,
        "ca": 2934989,
        "margin": 993051,
        "ebitda": 749920,
        "loss": 1260905,
        "year": 2016,
        "business": 511
    },
    {
        "id": 1023,
        "ca": 3585629,
        "margin": -79058,
        "ebitda": 628608,
        "loss": 8524299,
        "year": 2017,
        "business": 512
    },
    {
        "id": 1024,
        "ca": 1167740,
        "margin": -179498,
        "ebitda": 968075,
        "loss": 9469489,
        "year": 2016,
        "business": 512
    },
    {
        "id": 1025,
        "ca": 1038072,
        "margin": 61247,
        "ebitda": 145948,
        "loss": 5945019,
        "year": 2017,
        "business": 513
    },
    {
        "id": 1026,
        "ca": 2744807,
        "margin": -178918,
        "ebitda": 940542,
        "loss": 8389243,
        "year": 2016,
        "business": 513
    },
    {
        "id": 1027,
        "ca": 680717,
        "margin": 789260,
        "ebitda": 23168,
        "loss": 9375154,
        "year": 2017,
        "business": 514
    },
    {
        "id": 1028,
        "ca": 3048882,
        "margin": 456127,
        "ebitda": 794015,
        "loss": 6045197,
        "year": 2016,
        "business": 514
    },
    {
        "id": 1029,
        "ca": 2860212,
        "margin": 989637,
        "ebitda": 697267,
        "loss": 7584954,
        "year": 2017,
        "business": 515
    },
    {
        "id": 1030,
        "ca": 1613875,
        "margin": -164275,
        "ebitda": 195362,
        "loss": 2277967,
        "year": 2016,
        "business": 515
    },
    {
        "id": 1031,
        "ca": 3231992,
        "margin": 105075,
        "ebitda": 360254,
        "loss": 6389455,
        "year": 2017,
        "business": 516
    },
    {
        "id": 1032,
        "ca": 1521612,
        "margin": 880685,
        "ebitda": 403557,
        "loss": 6790343,
        "year": 2016,
        "business": 516
    },
    {
        "id": 1033,
        "ca": 2291583,
        "margin": 867237,
        "ebitda": 927967,
        "loss": 3790086,
        "year": 2017,
        "business": 517
    },
    {
        "id": 1034,
        "ca": 1049311,
        "margin": 660876,
        "ebitda": 496702,
        "loss": 9855295,
        "year": 2016,
        "business": 517
    },
    {
        "id": 1035,
        "ca": 164397,
        "margin": 317314,
        "ebitda": 318042,
        "loss": 9140926,
        "year": 2017,
        "business": 518
    },
    {
        "id": 1036,
        "ca": 134225,
        "margin": 592137,
        "ebitda": 573854,
        "loss": 5827994,
        "year": 2016,
        "business": 518
    },
    {
        "id": 1037,
        "ca": 129551,
        "margin": 310074,
        "ebitda": 357978,
        "loss": 7767682,
        "year": 2017,
        "business": 519
    },
    {
        "id": 1038,
        "ca": 3406774,
        "margin": 137550,
        "ebitda": 410300,
        "loss": 4434726,
        "year": 2016,
        "business": 519
    },
    {
        "id": 1039,
        "ca": 1601751,
        "margin": 391023,
        "ebitda": 243915,
        "loss": 9979374,
        "year": 2017,
        "business": 520
    },
    {
        "id": 1040,
        "ca": 3545802,
        "margin": 192428,
        "ebitda": 485930,
        "loss": 419572,
        "year": 2016,
        "business": 520
    },
    {
        "id": 1041,
        "ca": 2349466,
        "margin": 219941,
        "ebitda": 5570,
        "loss": 8680644,
        "year": 2017,
        "business": 521
    },
    {
        "id": 1042,
        "ca": 1706775,
        "margin": 227646,
        "ebitda": 362797,
        "loss": 9504689,
        "year": 2016,
        "business": 521
    },
    {
        "id": 1043,
        "ca": 396663,
        "margin": 127945,
        "ebitda": 301058,
        "loss": 2394148,
        "year": 2017,
        "business": 522
    },
    {
        "id": 1044,
        "ca": 3033560,
        "margin": -142850,
        "ebitda": 216886,
        "loss": 5784011,
        "year": 2016,
        "business": 522
    },
    {
        "id": 1045,
        "ca": 2661841,
        "margin": -87902,
        "ebitda": 485005,
        "loss": 2095804,
        "year": 2017,
        "business": 523
    },
    {
        "id": 1046,
        "ca": 2253265,
        "margin": 162707,
        "ebitda": 233801,
        "loss": 6711968,
        "year": 2016,
        "business": 523
    },
    {
        "id": 1047,
        "ca": 3057762,
        "margin": -139449,
        "ebitda": 327352,
        "loss": 4519431,
        "year": 2017,
        "business": 524
    },
    {
        "id": 1048,
        "ca": 218608,
        "margin": 601761,
        "ebitda": 574866,
        "loss": 2401123,
        "year": 2016,
        "business": 524
    },
    {
        "id": 1049,
        "ca": 347903,
        "margin": 531388,
        "ebitda": 744361,
        "loss": 7825401,
        "year": 2017,
        "business": 525
    },
    {
        "id": 1050,
        "ca": 3706608,
        "margin": 997439,
        "ebitda": 825797,
        "loss": 5244642,
        "year": 2016,
        "business": 525
    },
    {
        "id": 1051,
        "ca": 2840710,
        "margin": 545508,
        "ebitda": 869151,
        "loss": 3200310,
        "year": 2017,
        "business": 526
    },
    {
        "id": 1052,
        "ca": 2972322,
        "margin": -8489,
        "ebitda": 523351,
        "loss": 4233835,
        "year": 2016,
        "business": 526
    },
    {
        "id": 1053,
        "ca": 3205718,
        "margin": 931431,
        "ebitda": 745877,
        "loss": 7547419,
        "year": 2017,
        "business": 527
    },
    {
        "id": 1054,
        "ca": 2658433,
        "margin": 244724,
        "ebitda": 68037,
        "loss": 9052789,
        "year": 2016,
        "business": 527
    },
    {
        "id": 1055,
        "ca": 2836409,
        "margin": -52965,
        "ebitda": 642034,
        "loss": 650358,
        "year": 2017,
        "business": 528
    },
    {
        "id": 1056,
        "ca": 1944602,
        "margin": 25293,
        "ebitda": 824874,
        "loss": 7586359,
        "year": 2016,
        "business": 528
    },
    {
        "id": 1057,
        "ca": 2143913,
        "margin": 106171,
        "ebitda": 172306,
        "loss": 4813057,
        "year": 2017,
        "business": 529
    },
    {
        "id": 1058,
        "ca": 726703,
        "margin": 634578,
        "ebitda": 496517,
        "loss": 3067864,
        "year": 2016,
        "business": 529
    },
    {
        "id": 1059,
        "ca": 2813324,
        "margin": 543587,
        "ebitda": 930624,
        "loss": 6380189,
        "year": 2017,
        "business": 530
    },
    {
        "id": 1060,
        "ca": 1949622,
        "margin": 257553,
        "ebitda": 715585,
        "loss": 1712947,
        "year": 2016,
        "business": 530
    },
    {
        "id": 1061,
        "ca": 3141175,
        "margin": -10078,
        "ebitda": 413362,
        "loss": 2542564,
        "year": 2017,
        "business": 531
    },
    {
        "id": 1062,
        "ca": 2159337,
        "margin": 834060,
        "ebitda": 110322,
        "loss": 9331383,
        "year": 2016,
        "business": 531
    },
    {
        "id": 1063,
        "ca": 1812005,
        "margin": 824195,
        "ebitda": 378758,
        "loss": 805670,
        "year": 2017,
        "business": 532
    },
    {
        "id": 1064,
        "ca": 318842,
        "margin": 975292,
        "ebitda": 116269,
        "loss": 7700266,
        "year": 2016,
        "business": 532
    },
    {
        "id": 1065,
        "ca": 558150,
        "margin": 612452,
        "ebitda": 586018,
        "loss": 2446467,
        "year": 2017,
        "business": 533
    },
    {
        "id": 1066,
        "ca": 1349450,
        "margin": -40151,
        "ebitda": 280930,
        "loss": 554118,
        "year": 2016,
        "business": 533
    },
    {
        "id": 1067,
        "ca": 1792190,
        "margin": 711559,
        "ebitda": 308801,
        "loss": 5591378,
        "year": 2017,
        "business": 534
    },
    {
        "id": 1068,
        "ca": 637105,
        "margin": 696402,
        "ebitda": 696791,
        "loss": 8243856,
        "year": 2016,
        "business": 534
    },
    {
        "id": 1069,
        "ca": 2211699,
        "margin": 128483,
        "ebitda": 645149,
        "loss": 5320043,
        "year": 2017,
        "business": 535
    },
    {
        "id": 1070,
        "ca": 292037,
        "margin": 11283,
        "ebitda": 596879,
        "loss": 9209073,
        "year": 2016,
        "business": 535
    },
    {
        "id": 1071,
        "ca": 1861925,
        "margin": 664690,
        "ebitda": 647952,
        "loss": 6790717,
        "year": 2017,
        "business": 536
    },
    {
        "id": 1072,
        "ca": 2417377,
        "margin": 308685,
        "ebitda": 250773,
        "loss": 484810,
        "year": 2016,
        "business": 536
    },
    {
        "id": 1073,
        "ca": 406005,
        "margin": 980051,
        "ebitda": 663573,
        "loss": 6481503,
        "year": 2017,
        "business": 537
    },
    {
        "id": 1074,
        "ca": 1862039,
        "margin": 482489,
        "ebitda": 482344,
        "loss": 1652224,
        "year": 2016,
        "business": 537
    },
    {
        "id": 1075,
        "ca": 1467215,
        "margin": 132020,
        "ebitda": 373917,
        "loss": 3437043,
        "year": 2017,
        "business": 538
    },
    {
        "id": 1076,
        "ca": 1135343,
        "margin": 667253,
        "ebitda": 272589,
        "loss": 6261102,
        "year": 2016,
        "business": 538
    },
    {
        "id": 1077,
        "ca": 117798,
        "margin": 827650,
        "ebitda": 170411,
        "loss": 9201294,
        "year": 2017,
        "business": 539
    },
    {
        "id": 1078,
        "ca": 3124464,
        "margin": 902231,
        "ebitda": 177211,
        "loss": 3794139,
        "year": 2016,
        "business": 539
    },
    {
        "id": 1079,
        "ca": 921077,
        "margin": -137899,
        "ebitda": 903257,
        "loss": 3722070,
        "year": 2017,
        "business": 540
    },
    {
        "id": 1080,
        "ca": 2645573,
        "margin": 540040,
        "ebitda": 123121,
        "loss": 586567,
        "year": 2016,
        "business": 540
    },
    {
        "id": 1081,
        "ca": 948252,
        "margin": 792538,
        "ebitda": 49813,
        "loss": 3084210,
        "year": 2017,
        "business": 541
    },
    {
        "id": 1082,
        "ca": 139390,
        "margin": 943578,
        "ebitda": 494751,
        "loss": 1596061,
        "year": 2016,
        "business": 541
    },
    {
        "id": 1083,
        "ca": 728116,
        "margin": 994107,
        "ebitda": 921484,
        "loss": 1067054,
        "year": 2017,
        "business": 542
    },
    {
        "id": 1084,
        "ca": 1065248,
        "margin": 659685,
        "ebitda": 6236,
        "loss": 1574284,
        "year": 2016,
        "business": 542
    },
    {
        "id": 1085,
        "ca": 716783,
        "margin": 570860,
        "ebitda": 21987,
        "loss": 5267395,
        "year": 2017,
        "business": 543
    },
    {
        "id": 1086,
        "ca": 316632,
        "margin": 778696,
        "ebitda": 324594,
        "loss": 7031038,
        "year": 2016,
        "business": 543
    },
    {
        "id": 1087,
        "ca": 2771849,
        "margin": 84486,
        "ebitda": 181212,
        "loss": 3918374,
        "year": 2017,
        "business": 544
    },
    {
        "id": 1088,
        "ca": 169000,
        "margin": 365612,
        "ebitda": 649214,
        "loss": 841923,
        "year": 2016,
        "business": 544
    },
    {
        "id": 1089,
        "ca": 1762287,
        "margin": 102439,
        "ebitda": 722916,
        "loss": 7833440,
        "year": 2017,
        "business": 545
    },
    {
        "id": 1090,
        "ca": 291824,
        "margin": 130148,
        "ebitda": 623417,
        "loss": 1629125,
        "year": 2016,
        "business": 545
    },
    {
        "id": 1091,
        "ca": 1499365,
        "margin": 57080,
        "ebitda": 156356,
        "loss": 1021748,
        "year": 2017,
        "business": 546
    },
    {
        "id": 1092,
        "ca": 524678,
        "margin": -144122,
        "ebitda": 638331,
        "loss": 6832039,
        "year": 2016,
        "business": 546
    },
    {
        "id": 1093,
        "ca": 1305546,
        "margin": 890959,
        "ebitda": 80989,
        "loss": 2228161,
        "year": 2017,
        "business": 547
    },
    {
        "id": 1094,
        "ca": 1695317,
        "margin": 923694,
        "ebitda": 989104,
        "loss": 1562338,
        "year": 2016,
        "business": 547
    },
    {
        "id": 1095,
        "ca": 683018,
        "margin": 995152,
        "ebitda": 170904,
        "loss": 9628558,
        "year": 2017,
        "business": 548
    },
    {
        "id": 1096,
        "ca": 303810,
        "margin": -156298,
        "ebitda": 336332,
        "loss": 1525082,
        "year": 2016,
        "business": 548
    },
    {
        "id": 1097,
        "ca": 3991934,
        "margin": 731434,
        "ebitda": 671175,
        "loss": 7299376,
        "year": 2017,
        "business": 549
    },
    {
        "id": 1098,
        "ca": 372982,
        "margin": 69283,
        "ebitda": 543797,
        "loss": 7332054,
        "year": 2016,
        "business": 549
    },
    {
        "id": 1099,
        "ca": 963795,
        "margin": 515108,
        "ebitda": 190681,
        "loss": 3749379,
        "year": 2017,
        "business": 550
    },
    {
        "id": 1100,
        "ca": 1416006,
        "margin": 75210,
        "ebitda": 919516,
        "loss": 7432996,
        "year": 2016,
        "business": 550
    },
    {
        "id": 1101,
        "ca": 1752436,
        "margin": 96454,
        "ebitda": 741147,
        "loss": 3254124,
        "year": 2017,
        "business": 551
    },
    {
        "id": 1102,
        "ca": 1708354,
        "margin": -176402,
        "ebitda": 554102,
        "loss": 7890249,
        "year": 2016,
        "business": 551
    },
    {
        "id": 1103,
        "ca": 744318,
        "margin": 103496,
        "ebitda": 576229,
        "loss": 9905360,
        "year": 2017,
        "business": 552
    },
    {
        "id": 1104,
        "ca": 181935,
        "margin": 122718,
        "ebitda": 354176,
        "loss": 4814304,
        "year": 2016,
        "business": 552
    },
    {
        "id": 1105,
        "ca": 1863949,
        "margin": -65034,
        "ebitda": 61494,
        "loss": 6983568,
        "year": 2017,
        "business": 553
    },
    {
        "id": 1106,
        "ca": 3020076,
        "margin": 670970,
        "ebitda": 412282,
        "loss": 2793160,
        "year": 2016,
        "business": 553
    },
    {
        "id": 1107,
        "ca": 2734736,
        "margin": 982226,
        "ebitda": 481398,
        "loss": 6322916,
        "year": 2017,
        "business": 554
    },
    {
        "id": 1108,
        "ca": 2601308,
        "margin": 333052,
        "ebitda": 93411,
        "loss": 10903,
        "year": 2016,
        "business": 554
    },
    {
        "id": 1109,
        "ca": 2393765,
        "margin": 647370,
        "ebitda": 268473,
        "loss": 784233,
        "year": 2017,
        "business": 555
    },
    {
        "id": 1110,
        "ca": 587756,
        "margin": 810481,
        "ebitda": 49865,
        "loss": 2802340,
        "year": 2016,
        "business": 555
    },
    {
        "id": 1111,
        "ca": 2044393,
        "margin": 488875,
        "ebitda": 731519,
        "loss": 7027060,
        "year": 2017,
        "business": 556
    },
    {
        "id": 1112,
        "ca": 121670,
        "margin": 182578,
        "ebitda": 393596,
        "loss": 9887138,
        "year": 2016,
        "business": 556
    },
    {
        "id": 1113,
        "ca": 1956401,
        "margin": 260869,
        "ebitda": 465173,
        "loss": 1034672,
        "year": 2017,
        "business": 557
    },
    {
        "id": 1114,
        "ca": 1738061,
        "margin": 489672,
        "ebitda": 503544,
        "loss": 1652359,
        "year": 2016,
        "business": 557
    },
    {
        "id": 1115,
        "ca": 3670991,
        "margin": -20675,
        "ebitda": 170558,
        "loss": 3869471,
        "year": 2017,
        "business": 558
    },
    {
        "id": 1116,
        "ca": 492284,
        "margin": -35764,
        "ebitda": 4319,
        "loss": 8138660,
        "year": 2016,
        "business": 558
    },
    {
        "id": 1117,
        "ca": 3986032,
        "margin": 496147,
        "ebitda": 625529,
        "loss": 148159,
        "year": 2017,
        "business": 559
    },
    {
        "id": 1118,
        "ca": 659094,
        "margin": -199859,
        "ebitda": 55690,
        "loss": 4600718,
        "year": 2016,
        "business": 559
    },
    {
        "id": 1119,
        "ca": 2197523,
        "margin": 486409,
        "ebitda": 297718,
        "loss": 4127513,
        "year": 2017,
        "business": 560
    },
    {
        "id": 1120,
        "ca": 160707,
        "margin": 797807,
        "ebitda": 823203,
        "loss": 6603381,
        "year": 2016,
        "business": 560
    },
    {
        "id": 1121,
        "ca": 2314790,
        "margin": 342031,
        "ebitda": 172440,
        "loss": 8381127,
        "year": 2017,
        "business": 561
    },
    {
        "id": 1122,
        "ca": 2649979,
        "margin": 62457,
        "ebitda": 985731,
        "loss": 9016091,
        "year": 2016,
        "business": 561
    },
    {
        "id": 1123,
        "ca": 1627606,
        "margin": 182725,
        "ebitda": 872978,
        "loss": 6304396,
        "year": 2017,
        "business": 562
    },
    {
        "id": 1124,
        "ca": 2178283,
        "margin": 555989,
        "ebitda": 504401,
        "loss": 4572515,
        "year": 2016,
        "business": 562
    },
    {
        "id": 1125,
        "ca": 137619,
        "margin": -45047,
        "ebitda": 852472,
        "loss": 7393300,
        "year": 2017,
        "business": 563
    },
    {
        "id": 1126,
        "ca": 2632010,
        "margin": 552487,
        "ebitda": 337354,
        "loss": 2556865,
        "year": 2016,
        "business": 563
    },
    {
        "id": 1127,
        "ca": 2907368,
        "margin": 946694,
        "ebitda": 578208,
        "loss": 140731,
        "year": 2017,
        "business": 564
    },
    {
        "id": 1128,
        "ca": 1531656,
        "margin": 751165,
        "ebitda": 758012,
        "loss": 8104700,
        "year": 2016,
        "business": 564
    },
    {
        "id": 1129,
        "ca": 1601358,
        "margin": 881075,
        "ebitda": 506863,
        "loss": 934741,
        "year": 2017,
        "business": 565
    },
    {
        "id": 1130,
        "ca": 224605,
        "margin": 323834,
        "ebitda": 150156,
        "loss": 3395853,
        "year": 2016,
        "business": 565
    },
    {
        "id": 1131,
        "ca": 3911838,
        "margin": 749881,
        "ebitda": 767494,
        "loss": 8779814,
        "year": 2017,
        "business": 566
    },
    {
        "id": 1132,
        "ca": 1660522,
        "margin": 982551,
        "ebitda": 372552,
        "loss": 5607303,
        "year": 2016,
        "business": 566
    },
    {
        "id": 1133,
        "ca": 1644095,
        "margin": 817567,
        "ebitda": 393262,
        "loss": 7295120,
        "year": 2017,
        "business": 567
    },
    {
        "id": 1134,
        "ca": 491779,
        "margin": 2072,
        "ebitda": 566710,
        "loss": 7848527,
        "year": 2016,
        "business": 567
    },
    {
        "id": 1135,
        "ca": 2861638,
        "margin": 491834,
        "ebitda": 538314,
        "loss": 526246,
        "year": 2017,
        "business": 568
    },
    {
        "id": 1136,
        "ca": 2301201,
        "margin": 781536,
        "ebitda": 88344,
        "loss": 2994930,
        "year": 2016,
        "business": 568
    },
    {
        "id": 1137,
        "ca": 1662133,
        "margin": 777953,
        "ebitda": 516084,
        "loss": 2245869,
        "year": 2017,
        "business": 569
    },
    {
        "id": 1138,
        "ca": 387641,
        "margin": 71807,
        "ebitda": 924342,
        "loss": 325979,
        "year": 2016,
        "business": 569
    },
    {
        "id": 1139,
        "ca": 247195,
        "margin": 634605,
        "ebitda": 709363,
        "loss": 898607,
        "year": 2017,
        "business": 570
    },
    {
        "id": 1140,
        "ca": 119852,
        "margin": 309278,
        "ebitda": 160648,
        "loss": 9281795,
        "year": 2016,
        "business": 570
    },
    {
        "id": 1141,
        "ca": 2299664,
        "margin": -135115,
        "ebitda": 583094,
        "loss": 9239699,
        "year": 2017,
        "business": 571
    },
    {
        "id": 1142,
        "ca": 2571699,
        "margin": 722393,
        "ebitda": 17182,
        "loss": 4032449,
        "year": 2016,
        "business": 571
    },
    {
        "id": 1143,
        "ca": 1677911,
        "margin": 163405,
        "ebitda": 515423,
        "loss": 1864397,
        "year": 2017,
        "business": 572
    },
    {
        "id": 1144,
        "ca": 813563,
        "margin": 511714,
        "ebitda": 593192,
        "loss": 2686986,
        "year": 2016,
        "business": 572
    },
    {
        "id": 1145,
        "ca": 2709541,
        "margin": 229695,
        "ebitda": 663411,
        "loss": 3875286,
        "year": 2017,
        "business": 573
    },
    {
        "id": 1146,
        "ca": 634459,
        "margin": 231805,
        "ebitda": 647374,
        "loss": 3602349,
        "year": 2016,
        "business": 573
    },
    {
        "id": 1147,
        "ca": 1952680,
        "margin": 591527,
        "ebitda": 712950,
        "loss": 2979479,
        "year": 2017,
        "business": 574
    },
    {
        "id": 1148,
        "ca": 3342862,
        "margin": -69963,
        "ebitda": 690253,
        "loss": 9351964,
        "year": 2016,
        "business": 574
    },
    {
        "id": 1149,
        "ca": 1015626,
        "margin": 955117,
        "ebitda": 815940,
        "loss": 1056473,
        "year": 2017,
        "business": 575
    },
    {
        "id": 1150,
        "ca": 2888532,
        "margin": 625093,
        "ebitda": 110974,
        "loss": 1132136,
        "year": 2016,
        "business": 575
    },
    {
        "id": 1151,
        "ca": 354304,
        "margin": -115585,
        "ebitda": 799466,
        "loss": 1538011,
        "year": 2017,
        "business": 576
    },
    {
        "id": 1152,
        "ca": 2563090,
        "margin": 425055,
        "ebitda": 376388,
        "loss": 8271563,
        "year": 2016,
        "business": 576
    },
    {
        "id": 1153,
        "ca": 940447,
        "margin": 729845,
        "ebitda": 167721,
        "loss": 6157266,
        "year": 2017,
        "business": 577
    },
    {
        "id": 1154,
        "ca": 2442788,
        "margin": -119755,
        "ebitda": 428414,
        "loss": 6513738,
        "year": 2016,
        "business": 577
    },
    {
        "id": 1155,
        "ca": 3500490,
        "margin": 528080,
        "ebitda": 56057,
        "loss": 7875420,
        "year": 2017,
        "business": 578
    },
    {
        "id": 1156,
        "ca": 961364,
        "margin": 333893,
        "ebitda": 169134,
        "loss": 2599452,
        "year": 2016,
        "business": 578
    },
    {
        "id": 1157,
        "ca": 515346,
        "margin": 411358,
        "ebitda": 153381,
        "loss": 4890658,
        "year": 2017,
        "business": 579
    },
    {
        "id": 1158,
        "ca": 1575387,
        "margin": 916113,
        "ebitda": 718372,
        "loss": 3215109,
        "year": 2016,
        "business": 579
    },
    {
        "id": 1159,
        "ca": 1297997,
        "margin": -19875,
        "ebitda": 516170,
        "loss": 3810636,
        "year": 2017,
        "business": 580
    },
    {
        "id": 1160,
        "ca": 1072825,
        "margin": -22201,
        "ebitda": 287048,
        "loss": 3084817,
        "year": 2016,
        "business": 580
    },
    {
        "id": 1161,
        "ca": 2769889,
        "margin": 873496,
        "ebitda": 471427,
        "loss": 2405509,
        "year": 2017,
        "business": 581
    },
    {
        "id": 1162,
        "ca": 2054357,
        "margin": 654017,
        "ebitda": 175194,
        "loss": 9302832,
        "year": 2016,
        "business": 581
    },
    {
        "id": 1163,
        "ca": 810713,
        "margin": 998897,
        "ebitda": 59050,
        "loss": 7501572,
        "year": 2017,
        "business": 582
    },
    {
        "id": 1164,
        "ca": 3772494,
        "margin": 890874,
        "ebitda": 238464,
        "loss": 8921783,
        "year": 2016,
        "business": 582
    },
    {
        "id": 1165,
        "ca": 2077357,
        "margin": 497351,
        "ebitda": 65952,
        "loss": 858474,
        "year": 2017,
        "business": 583
    },
    {
        "id": 1166,
        "ca": 432070,
        "margin": 427778,
        "ebitda": 290433,
        "loss": 8023406,
        "year": 2016,
        "business": 583
    },
    {
        "id": 1167,
        "ca": 364921,
        "margin": 61976,
        "ebitda": 960673,
        "loss": 2812728,
        "year": 2017,
        "business": 584
    },
    {
        "id": 1168,
        "ca": 1944186,
        "margin": 738525,
        "ebitda": 846608,
        "loss": 657145,
        "year": 2016,
        "business": 584
    },
    {
        "id": 1169,
        "ca": 2752578,
        "margin": -147358,
        "ebitda": 485891,
        "loss": 331323,
        "year": 2017,
        "business": 585
    },
    {
        "id": 1170,
        "ca": 1686886,
        "margin": -117670,
        "ebitda": 390980,
        "loss": 3205084,
        "year": 2016,
        "business": 585
    },
    {
        "id": 1171,
        "ca": 1911503,
        "margin": 340643,
        "ebitda": 417233,
        "loss": 5121889,
        "year": 2017,
        "business": 586
    },
    {
        "id": 1172,
        "ca": 3669705,
        "margin": 937608,
        "ebitda": 162576,
        "loss": 8516803,
        "year": 2016,
        "business": 586
    },
    {
        "id": 1173,
        "ca": 2802947,
        "margin": -192527,
        "ebitda": 895332,
        "loss": 168490,
        "year": 2017,
        "business": 587
    },
    {
        "id": 1174,
        "ca": 1704685,
        "margin": 675635,
        "ebitda": 175060,
        "loss": 8978142,
        "year": 2016,
        "business": 587
    },
    {
        "id": 1175,
        "ca": 3366027,
        "margin": 987873,
        "ebitda": 196501,
        "loss": 7956104,
        "year": 2017,
        "business": 588
    },
    {
        "id": 1176,
        "ca": 2312009,
        "margin": 564257,
        "ebitda": 534160,
        "loss": 5616100,
        "year": 2016,
        "business": 588
    },
    {
        "id": 1177,
        "ca": 807176,
        "margin": -170771,
        "ebitda": 501330,
        "loss": 107559,
        "year": 2017,
        "business": 589
    },
    {
        "id": 1178,
        "ca": 1677728,
        "margin": 405029,
        "ebitda": 919989,
        "loss": 7064750,
        "year": 2016,
        "business": 589
    },
    {
        "id": 1179,
        "ca": 845912,
        "margin": -55821,
        "ebitda": 224135,
        "loss": 2658021,
        "year": 2017,
        "business": 590
    },
    {
        "id": 1180,
        "ca": 2744919,
        "margin": 681582,
        "ebitda": 236779,
        "loss": 4376894,
        "year": 2016,
        "business": 590
    },
    {
        "id": 1181,
        "ca": 2645052,
        "margin": -41159,
        "ebitda": 173240,
        "loss": 1967321,
        "year": 2017,
        "business": 591
    },
    {
        "id": 1182,
        "ca": 732362,
        "margin": 698731,
        "ebitda": 463853,
        "loss": 5229956,
        "year": 2016,
        "business": 591
    },
    {
        "id": 1183,
        "ca": 1399582,
        "margin": 985314,
        "ebitda": 725283,
        "loss": 4266902,
        "year": 2017,
        "business": 592
    },
    {
        "id": 1184,
        "ca": 1916496,
        "margin": 979357,
        "ebitda": 942617,
        "loss": 2478758,
        "year": 2016,
        "business": 592
    },
    {
        "id": 1185,
        "ca": 490022,
        "margin": 352486,
        "ebitda": 213406,
        "loss": 608978,
        "year": 2017,
        "business": 593
    },
    {
        "id": 1186,
        "ca": 2814806,
        "margin": 150982,
        "ebitda": 255155,
        "loss": 4306009,
        "year": 2016,
        "business": 593
    },
    {
        "id": 1187,
        "ca": 498678,
        "margin": 154466,
        "ebitda": 620676,
        "loss": 548809,
        "year": 2017,
        "business": 594
    },
    {
        "id": 1188,
        "ca": 2772820,
        "margin": 119935,
        "ebitda": 271449,
        "loss": 5095792,
        "year": 2016,
        "business": 594
    },
    {
        "id": 1189,
        "ca": 2302368,
        "margin": 469510,
        "ebitda": 250648,
        "loss": 5131438,
        "year": 2017,
        "business": 595
    },
    {
        "id": 1190,
        "ca": 3011160,
        "margin": 429420,
        "ebitda": 940827,
        "loss": 7664834,
        "year": 2016,
        "business": 595
    },
    {
        "id": 1191,
        "ca": 2091227,
        "margin": 809190,
        "ebitda": 589384,
        "loss": 6212269,
        "year": 2017,
        "business": 596
    },
    {
        "id": 1192,
        "ca": 676290,
        "margin": 202279,
        "ebitda": 718696,
        "loss": 5774367,
        "year": 2016,
        "business": 596
    },
    {
        "id": 1193,
        "ca": 1071840,
        "margin": 70852,
        "ebitda": 571568,
        "loss": 2690278,
        "year": 2017,
        "business": 597
    },
    {
        "id": 1194,
        "ca": 2169468,
        "margin": -92185,
        "ebitda": 134714,
        "loss": 2327708,
        "year": 2016,
        "business": 597
    },
    {
        "id": 1195,
        "ca": 227469,
        "margin": -172937,
        "ebitda": 849147,
        "loss": 3197097,
        "year": 2017,
        "business": 598
    },
    {
        "id": 1196,
        "ca": 2950073,
        "margin": 291666,
        "ebitda": 358533,
        "loss": 2035460,
        "year": 2016,
        "business": 598
    },
    {
        "id": 1197,
        "ca": 1659892,
        "margin": 228500,
        "ebitda": 676123,
        "loss": 113437,
        "year": 2017,
        "business": 599
    },
    {
        "id": 1198,
        "ca": 1332202,
        "margin": -10635,
        "ebitda": 591615,
        "loss": 1731490,
        "year": 2016,
        "business": 599
    },
    {
        "id": 1199,
        "ca": 2698460,
        "margin": 367570,
        "ebitda": 943598,
        "loss": 6190258,
        "year": 2017,
        "business": 600
    },
    {
        "id": 1200,
        "ca": 1547921,
        "margin": 898131,
        "ebitda": 549866,
        "loss": 695666,
        "year": 2016,
        "business": 600
    },
    {
        "id": 1201,
        "ca": 3902519,
        "margin": 765501,
        "ebitda": 873377,
        "loss": 2554825,
        "year": 2017,
        "business": 601
    },
    {
        "id": 1202,
        "ca": 804936,
        "margin": 182411,
        "ebitda": 466946,
        "loss": 9989170,
        "year": 2016,
        "business": 601
    },
    {
        "id": 1203,
        "ca": 1658933,
        "margin": 647423,
        "ebitda": 568089,
        "loss": 6579924,
        "year": 2017,
        "business": 602
    },
    {
        "id": 1204,
        "ca": 1738120,
        "margin": 674431,
        "ebitda": 429561,
        "loss": 408865,
        "year": 2016,
        "business": 602
    },
    {
        "id": 1205,
        "ca": 2026715,
        "margin": -198616,
        "ebitda": 965383,
        "loss": 6439279,
        "year": 2017,
        "business": 603
    },
    {
        "id": 1206,
        "ca": 3894824,
        "margin": 606068,
        "ebitda": 694184,
        "loss": 5969030,
        "year": 2016,
        "business": 603
    },
    {
        "id": 1207,
        "ca": 2494629,
        "margin": 240340,
        "ebitda": 282056,
        "loss": 6994907,
        "year": 2017,
        "business": 604
    },
    {
        "id": 1208,
        "ca": 1974168,
        "margin": 484412,
        "ebitda": 253168,
        "loss": 1670528,
        "year": 2016,
        "business": 604
    },
    {
        "id": 1209,
        "ca": 3977217,
        "margin": 175757,
        "ebitda": 241608,
        "loss": 6107207,
        "year": 2017,
        "business": 605
    },
    {
        "id": 1210,
        "ca": 809720,
        "margin": 545355,
        "ebitda": 842297,
        "loss": 7239634,
        "year": 2016,
        "business": 605
    },
    {
        "id": 1211,
        "ca": 3055261,
        "margin": -29529,
        "ebitda": 988508,
        "loss": 3307127,
        "year": 2017,
        "business": 606
    },
    {
        "id": 1212,
        "ca": 441182,
        "margin": 616025,
        "ebitda": 739319,
        "loss": 754174,
        "year": 2016,
        "business": 606
    },
    {
        "id": 1213,
        "ca": 3778120,
        "margin": 946201,
        "ebitda": 737398,
        "loss": 828816,
        "year": 2017,
        "business": 607
    },
    {
        "id": 1214,
        "ca": 377221,
        "margin": 644941,
        "ebitda": 330869,
        "loss": 4185104,
        "year": 2016,
        "business": 607
    },
    {
        "id": 1215,
        "ca": 3293799,
        "margin": 762392,
        "ebitda": 874292,
        "loss": 3623463,
        "year": 2017,
        "business": 608
    },
    {
        "id": 1216,
        "ca": 858506,
        "margin": 189441,
        "ebitda": 609871,
        "loss": 177061,
        "year": 2016,
        "business": 608
    },
    {
        "id": 1217,
        "ca": 1952026,
        "margin": 105098,
        "ebitda": 802326,
        "loss": 5262609,
        "year": 2017,
        "business": 609
    },
    {
        "id": 1218,
        "ca": 353809,
        "margin": 802651,
        "ebitda": 720150,
        "loss": 953096,
        "year": 2016,
        "business": 609
    },
    {
        "id": 1219,
        "ca": 3812845,
        "margin": 536146,
        "ebitda": 197412,
        "loss": 3385756,
        "year": 2017,
        "business": 610
    },
    {
        "id": 1220,
        "ca": 900740,
        "margin": 452037,
        "ebitda": 479167,
        "loss": 9372921,
        "year": 2016,
        "business": 610
    },
    {
        "id": 1221,
        "ca": 1298429,
        "margin": 85209,
        "ebitda": 801714,
        "loss": 1874888,
        "year": 2017,
        "business": 611
    },
    {
        "id": 1222,
        "ca": 3372389,
        "margin": -46817,
        "ebitda": 962766,
        "loss": 1038773,
        "year": 2016,
        "business": 611
    },
    {
        "id": 1223,
        "ca": 1571590,
        "margin": 465195,
        "ebitda": 715373,
        "loss": 6767658,
        "year": 2017,
        "business": 612
    },
    {
        "id": 1224,
        "ca": 1885922,
        "margin": 294164,
        "ebitda": 602655,
        "loss": 5395737,
        "year": 2016,
        "business": 612
    },
    {
        "id": 1225,
        "ca": 609290,
        "margin": 476030,
        "ebitda": 414815,
        "loss": 650125,
        "year": 2017,
        "business": 613
    },
    {
        "id": 1226,
        "ca": 383265,
        "margin": -109517,
        "ebitda": 516401,
        "loss": 7914729,
        "year": 2016,
        "business": 613
    },
    {
        "id": 1227,
        "ca": 3646184,
        "margin": -117596,
        "ebitda": 904991,
        "loss": 369354,
        "year": 2017,
        "business": 614
    },
    {
        "id": 1228,
        "ca": 215663,
        "margin": 343155,
        "ebitda": 914212,
        "loss": 386124,
        "year": 2016,
        "business": 614
    },
    {
        "id": 1229,
        "ca": 3081311,
        "margin": 760359,
        "ebitda": 515188,
        "loss": 866840,
        "year": 2017,
        "business": 615
    },
    {
        "id": 1230,
        "ca": 2987931,
        "margin": 94163,
        "ebitda": 833533,
        "loss": 2548828,
        "year": 2016,
        "business": 615
    },
    {
        "id": 1231,
        "ca": 1918594,
        "margin": 608420,
        "ebitda": 48656,
        "loss": 3929717,
        "year": 2017,
        "business": 616
    },
    {
        "id": 1232,
        "ca": 3838016,
        "margin": -125324,
        "ebitda": 689653,
        "loss": 5153326,
        "year": 2016,
        "business": 616
    },
    {
        "id": 1233,
        "ca": 784201,
        "margin": 152713,
        "ebitda": 747400,
        "loss": 5136538,
        "year": 2017,
        "business": 617
    },
    {
        "id": 1234,
        "ca": 503662,
        "margin": 920524,
        "ebitda": 630705,
        "loss": 2303495,
        "year": 2016,
        "business": 617
    },
    {
        "id": 1235,
        "ca": 929090,
        "margin": 564220,
        "ebitda": 252906,
        "loss": 9746310,
        "year": 2017,
        "business": 618
    },
    {
        "id": 1236,
        "ca": 2158639,
        "margin": 105807,
        "ebitda": 693906,
        "loss": 1359336,
        "year": 2016,
        "business": 618
    },
    {
        "id": 1237,
        "ca": 812364,
        "margin": 960696,
        "ebitda": 949485,
        "loss": 6544371,
        "year": 2017,
        "business": 619
    },
    {
        "id": 1238,
        "ca": 1407290,
        "margin": -47395,
        "ebitda": 670520,
        "loss": 8967033,
        "year": 2016,
        "business": 619
    },
    {
        "id": 1239,
        "ca": 2153000,
        "margin": 438242,
        "ebitda": 139511,
        "loss": 2935698,
        "year": 2017,
        "business": 620
    },
    {
        "id": 1240,
        "ca": 3740737,
        "margin": 220257,
        "ebitda": 664757,
        "loss": 9211966,
        "year": 2016,
        "business": 620
    },
    {
        "id": 1241,
        "ca": 2818761,
        "margin": -33832,
        "ebitda": 788293,
        "loss": 5486323,
        "year": 2017,
        "business": 621
    },
    {
        "id": 1242,
        "ca": 2834251,
        "margin": 591851,
        "ebitda": 979319,
        "loss": 8620705,
        "year": 2016,
        "business": 621
    },
    {
        "id": 1243,
        "ca": 2529178,
        "margin": 197369,
        "ebitda": 886454,
        "loss": 7279257,
        "year": 2017,
        "business": 622
    },
    {
        "id": 1244,
        "ca": 3546117,
        "margin": 244818,
        "ebitda": 645308,
        "loss": 6806083,
        "year": 2016,
        "business": 622
    },
    {
        "id": 1245,
        "ca": 1429780,
        "margin": 799453,
        "ebitda": 36259,
        "loss": 3355722,
        "year": 2017,
        "business": 623
    },
    {
        "id": 1246,
        "ca": 2099179,
        "margin": -54616,
        "ebitda": 527125,
        "loss": 5403606,
        "year": 2016,
        "business": 623
    },
    {
        "id": 1247,
        "ca": 2889040,
        "margin": 703385,
        "ebitda": 752653,
        "loss": 8681358,
        "year": 2017,
        "business": 624
    },
    {
        "id": 1248,
        "ca": 2258022,
        "margin": 871789,
        "ebitda": 822206,
        "loss": 1999996,
        "year": 2016,
        "business": 624
    },
    {
        "id": 1249,
        "ca": 2567850,
        "margin": -114309,
        "ebitda": 803022,
        "loss": 3644955,
        "year": 2017,
        "business": 625
    },
    {
        "id": 1250,
        "ca": 2327035,
        "margin": 651791,
        "ebitda": 325188,
        "loss": 5600022,
        "year": 2016,
        "business": 625
    },
    {
        "id": 1251,
        "ca": 3175010,
        "margin": 303265,
        "ebitda": 16810,
        "loss": 5997395,
        "year": 2017,
        "business": 626
    },
    {
        "id": 1252,
        "ca": 3837947,
        "margin": -136899,
        "ebitda": 927198,
        "loss": 80596,
        "year": 2016,
        "business": 626
    },
    {
        "id": 1253,
        "ca": 234247,
        "margin": 953337,
        "ebitda": 591502,
        "loss": 5046849,
        "year": 2017,
        "business": 627
    },
    {
        "id": 1254,
        "ca": 3641315,
        "margin": 184658,
        "ebitda": 732802,
        "loss": 8076404,
        "year": 2016,
        "business": 627
    },
    {
        "id": 1255,
        "ca": 1656818,
        "margin": 595587,
        "ebitda": 289090,
        "loss": 2974264,
        "year": 2017,
        "business": 628
    },
    {
        "id": 1256,
        "ca": 398030,
        "margin": 593684,
        "ebitda": 562458,
        "loss": 5755394,
        "year": 2016,
        "business": 628
    },
    {
        "id": 1257,
        "ca": 888190,
        "margin": -133730,
        "ebitda": 753834,
        "loss": 3572235,
        "year": 2017,
        "business": 629
    },
    {
        "id": 1258,
        "ca": 819653,
        "margin": 714896,
        "ebitda": 990159,
        "loss": 7031751,
        "year": 2016,
        "business": 629
    },
    {
        "id": 1259,
        "ca": 1361366,
        "margin": 738358,
        "ebitda": 886639,
        "loss": 804053,
        "year": 2017,
        "business": 630
    },
    {
        "id": 1260,
        "ca": 2006011,
        "margin": 84480,
        "ebitda": 49659,
        "loss": 4884748,
        "year": 2016,
        "business": 630
    },
    {
        "id": 1261,
        "ca": 3441535,
        "margin": 889969,
        "ebitda": 889269,
        "loss": 8285903,
        "year": 2017,
        "business": 631
    },
    {
        "id": 1262,
        "ca": 2323637,
        "margin": 566912,
        "ebitda": 736335,
        "loss": 1409551,
        "year": 2016,
        "business": 631
    },
    {
        "id": 1263,
        "ca": 2369218,
        "margin": -73152,
        "ebitda": 655888,
        "loss": 2911597,
        "year": 2017,
        "business": 632
    },
    {
        "id": 1264,
        "ca": 1149241,
        "margin": 97437,
        "ebitda": 64417,
        "loss": 3166514,
        "year": 2016,
        "business": 632
    },
    {
        "id": 1265,
        "ca": 814328,
        "margin": -48315,
        "ebitda": 783356,
        "loss": 576601,
        "year": 2017,
        "business": 633
    },
    {
        "id": 1266,
        "ca": 1365842,
        "margin": -14642,
        "ebitda": 646031,
        "loss": 5953844,
        "year": 2016,
        "business": 633
    },
    {
        "id": 1267,
        "ca": 1834374,
        "margin": 326249,
        "ebitda": 959880,
        "loss": 7187013,
        "year": 2017,
        "business": 634
    },
    {
        "id": 1268,
        "ca": 1192992,
        "margin": 334113,
        "ebitda": 549808,
        "loss": 2930291,
        "year": 2016,
        "business": 634
    },
    {
        "id": 1269,
        "ca": 2801651,
        "margin": -28139,
        "ebitda": 297122,
        "loss": 4191837,
        "year": 2017,
        "business": 635
    },
    {
        "id": 1270,
        "ca": 3314282,
        "margin": 641617,
        "ebitda": 995032,
        "loss": 8459886,
        "year": 2016,
        "business": 635
    },
    {
        "id": 1271,
        "ca": 2598845,
        "margin": 289164,
        "ebitda": 137003,
        "loss": 6548481,
        "year": 2017,
        "business": 636
    },
    {
        "id": 1272,
        "ca": 3324436,
        "margin": 611157,
        "ebitda": 665734,
        "loss": 8164744,
        "year": 2016,
        "business": 636
    },
    {
        "id": 1273,
        "ca": 1793980,
        "margin": 857354,
        "ebitda": 364851,
        "loss": 2272533,
        "year": 2017,
        "business": 637
    },
    {
        "id": 1274,
        "ca": 212326,
        "margin": 147161,
        "ebitda": 359990,
        "loss": 9366460,
        "year": 2016,
        "business": 637
    },
    {
        "id": 1275,
        "ca": 3060129,
        "margin": -57748,
        "ebitda": 111143,
        "loss": 5801049,
        "year": 2017,
        "business": 638
    },
    {
        "id": 1276,
        "ca": 2732443,
        "margin": -185117,
        "ebitda": 897047,
        "loss": 5541022,
        "year": 2016,
        "business": 638
    },
    {
        "id": 1277,
        "ca": 3683294,
        "margin": -12673,
        "ebitda": 436741,
        "loss": 3246692,
        "year": 2017,
        "business": 639
    },
    {
        "id": 1278,
        "ca": 985195,
        "margin": 220215,
        "ebitda": 765111,
        "loss": 2435349,
        "year": 2016,
        "business": 639
    },
    {
        "id": 1279,
        "ca": 1059793,
        "margin": 925668,
        "ebitda": 29499,
        "loss": 6657054,
        "year": 2017,
        "business": 640
    },
    {
        "id": 1280,
        "ca": 3867970,
        "margin": 127172,
        "ebitda": 262415,
        "loss": 4816646,
        "year": 2016,
        "business": 640
    },
    {
        "id": 1281,
        "ca": 1463808,
        "margin": 348258,
        "ebitda": 590048,
        "loss": 4065483,
        "year": 2017,
        "business": 641
    },
    {
        "id": 1282,
        "ca": 1359073,
        "margin": 437928,
        "ebitda": 454686,
        "loss": 5863600,
        "year": 2016,
        "business": 641
    },
    {
        "id": 1283,
        "ca": 824151,
        "margin": 966975,
        "ebitda": 688976,
        "loss": 4876715,
        "year": 2017,
        "business": 642
    },
    {
        "id": 1284,
        "ca": 2072963,
        "margin": 185234,
        "ebitda": 496657,
        "loss": 6646201,
        "year": 2016,
        "business": 642
    },
    {
        "id": 1285,
        "ca": 941673,
        "margin": 378932,
        "ebitda": 896642,
        "loss": 7541673,
        "year": 2017,
        "business": 643
    },
    {
        "id": 1286,
        "ca": 3564685,
        "margin": 123815,
        "ebitda": 496294,
        "loss": 3757149,
        "year": 2016,
        "business": 643
    },
    {
        "id": 1287,
        "ca": 3579908,
        "margin": 854056,
        "ebitda": 875551,
        "loss": 7027042,
        "year": 2017,
        "business": 644
    },
    {
        "id": 1288,
        "ca": 3856568,
        "margin": 150722,
        "ebitda": 991135,
        "loss": 1980958,
        "year": 2016,
        "business": 644
    },
    {
        "id": 1289,
        "ca": 1688779,
        "margin": -159723,
        "ebitda": 127885,
        "loss": 9553725,
        "year": 2017,
        "business": 645
    },
    {
        "id": 1290,
        "ca": 2615968,
        "margin": 896077,
        "ebitda": 32744,
        "loss": 3546095,
        "year": 2016,
        "business": 645
    },
    {
        "id": 1291,
        "ca": 699746,
        "margin": 91275,
        "ebitda": 400593,
        "loss": 3032962,
        "year": 2017,
        "business": 646
    },
    {
        "id": 1292,
        "ca": 3004201,
        "margin": 439139,
        "ebitda": 203405,
        "loss": 903996,
        "year": 2016,
        "business": 646
    },
    {
        "id": 1293,
        "ca": 585224,
        "margin": 146590,
        "ebitda": 695672,
        "loss": 211200,
        "year": 2017,
        "business": 647
    },
    {
        "id": 1294,
        "ca": 3866780,
        "margin": 675857,
        "ebitda": 365233,
        "loss": 8891632,
        "year": 2016,
        "business": 647
    },
    {
        "id": 1295,
        "ca": 809248,
        "margin": 333878,
        "ebitda": 816467,
        "loss": 8691711,
        "year": 2017,
        "business": 648
    },
    {
        "id": 1296,
        "ca": 2637226,
        "margin": 319549,
        "ebitda": 91713,
        "loss": 3167156,
        "year": 2016,
        "business": 648
    },
    {
        "id": 1297,
        "ca": 3778638,
        "margin": 334773,
        "ebitda": 679137,
        "loss": 7806071,
        "year": 2017,
        "business": 649
    },
    {
        "id": 1298,
        "ca": 3497909,
        "margin": 319175,
        "ebitda": 450324,
        "loss": 4784609,
        "year": 2016,
        "business": 649
    },
    {
        "id": 1299,
        "ca": 2425895,
        "margin": -36097,
        "ebitda": 510250,
        "loss": 4585429,
        "year": 2017,
        "business": 650
    },
    {
        "id": 1300,
        "ca": 2291345,
        "margin": 82259,
        "ebitda": 699924,
        "loss": 7475043,
        "year": 2016,
        "business": 650
    },
    {
        "id": 1301,
        "ca": 3506766,
        "margin": 274133,
        "ebitda": 34174,
        "loss": 3677732,
        "year": 2017,
        "business": 651
    },
    {
        "id": 1302,
        "ca": 3282506,
        "margin": 259763,
        "ebitda": 103786,
        "loss": 6295907,
        "year": 2016,
        "business": 651
    },
    {
        "id": 1303,
        "ca": 2909729,
        "margin": 369706,
        "ebitda": 85593,
        "loss": 3061624,
        "year": 2017,
        "business": 652
    },
    {
        "id": 1304,
        "ca": 3276126,
        "margin": 288118,
        "ebitda": 993894,
        "loss": 2191412,
        "year": 2016,
        "business": 652
    },
    {
        "id": 1305,
        "ca": 3587822,
        "margin": 74700,
        "ebitda": 522215,
        "loss": 6140731,
        "year": 2017,
        "business": 653
    },
    {
        "id": 1306,
        "ca": 1583816,
        "margin": 570319,
        "ebitda": 574093,
        "loss": 5758950,
        "year": 2016,
        "business": 653
    },
    {
        "id": 1307,
        "ca": 2661473,
        "margin": 917155,
        "ebitda": 431477,
        "loss": 9398696,
        "year": 2017,
        "business": 654
    },
    {
        "id": 1308,
        "ca": 3912135,
        "margin": -79026,
        "ebitda": 907216,
        "loss": 5839494,
        "year": 2016,
        "business": 654
    },
    {
        "id": 1309,
        "ca": 3916482,
        "margin": 789171,
        "ebitda": 591525,
        "loss": 4337407,
        "year": 2017,
        "business": 655
    },
    {
        "id": 1310,
        "ca": 2851391,
        "margin": 154011,
        "ebitda": 75755,
        "loss": 4917589,
        "year": 2016,
        "business": 655
    },
    {
        "id": 1311,
        "ca": 3877874,
        "margin": -64877,
        "ebitda": 283661,
        "loss": 8850825,
        "year": 2017,
        "business": 656
    },
    {
        "id": 1312,
        "ca": 1780165,
        "margin": 627707,
        "ebitda": 188020,
        "loss": 4142561,
        "year": 2016,
        "business": 656
    },
    {
        "id": 1313,
        "ca": 904887,
        "margin": 161426,
        "ebitda": 560772,
        "loss": 6954504,
        "year": 2017,
        "business": 657
    },
    {
        "id": 1314,
        "ca": 675847,
        "margin": 233939,
        "ebitda": 339451,
        "loss": 8460591,
        "year": 2016,
        "business": 657
    },
    {
        "id": 1315,
        "ca": 1258712,
        "margin": 193533,
        "ebitda": 133533,
        "loss": 2318027,
        "year": 2017,
        "business": 658
    },
    {
        "id": 1316,
        "ca": 3082650,
        "margin": 728343,
        "ebitda": 380527,
        "loss": 4210061,
        "year": 2016,
        "business": 658
    },
    {
        "id": 1317,
        "ca": 2145984,
        "margin": 192499,
        "ebitda": 678170,
        "loss": 2268864,
        "year": 2017,
        "business": 659
    },
    {
        "id": 1318,
        "ca": 3810752,
        "margin": 501467,
        "ebitda": 529022,
        "loss": 3323238,
        "year": 2016,
        "business": 659
    },
    {
        "id": 1319,
        "ca": 3393679,
        "margin": 512183,
        "ebitda": 633008,
        "loss": 73604,
        "year": 2017,
        "business": 660
    },
    {
        "id": 1320,
        "ca": 2760846,
        "margin": 190767,
        "ebitda": 817737,
        "loss": 9471846,
        "year": 2016,
        "business": 660
    },
    {
        "id": 1321,
        "ca": 490523,
        "margin": 144313,
        "ebitda": 564730,
        "loss": 8367688,
        "year": 2017,
        "business": 661
    },
    {
        "id": 1322,
        "ca": 2068840,
        "margin": 114319,
        "ebitda": 650235,
        "loss": 8027168,
        "year": 2016,
        "business": 661
    },
    {
        "id": 1323,
        "ca": 1512775,
        "margin": 940569,
        "ebitda": 603753,
        "loss": 206523,
        "year": 2017,
        "business": 662
    },
    {
        "id": 1324,
        "ca": 2148636,
        "margin": 113689,
        "ebitda": 649884,
        "loss": 1327309,
        "year": 2016,
        "business": 662
    },
    {
        "id": 1325,
        "ca": 2439582,
        "margin": 944973,
        "ebitda": 341871,
        "loss": 5177689,
        "year": 2017,
        "business": 663
    },
    {
        "id": 1326,
        "ca": 2198174,
        "margin": 771806,
        "ebitda": 980122,
        "loss": 9350034,
        "year": 2016,
        "business": 663
    },
    {
        "id": 1327,
        "ca": 3659120,
        "margin": 779837,
        "ebitda": 305681,
        "loss": 9238657,
        "year": 2017,
        "business": 664
    },
    {
        "id": 1328,
        "ca": 979885,
        "margin": 290030,
        "ebitda": 902063,
        "loss": 4866811,
        "year": 2016,
        "business": 664
    },
    {
        "id": 1329,
        "ca": 237512,
        "margin": -173455,
        "ebitda": 382060,
        "loss": 8829098,
        "year": 2017,
        "business": 665
    },
    {
        "id": 1330,
        "ca": 2664685,
        "margin": 307524,
        "ebitda": 569126,
        "loss": 2712404,
        "year": 2016,
        "business": 665
    },
    {
        "id": 1331,
        "ca": 3103484,
        "margin": 590803,
        "ebitda": 619969,
        "loss": 3865183,
        "year": 2017,
        "business": 666
    },
    {
        "id": 1332,
        "ca": 3017136,
        "margin": 84984,
        "ebitda": 240512,
        "loss": 4807954,
        "year": 2016,
        "business": 666
    },
    {
        "id": 1333,
        "ca": 3912615,
        "margin": -117225,
        "ebitda": 445707,
        "loss": 5775246,
        "year": 2017,
        "business": 667
    },
    {
        "id": 1334,
        "ca": 1049888,
        "margin": 256288,
        "ebitda": 478302,
        "loss": 4897795,
        "year": 2016,
        "business": 667
    },
    {
        "id": 1335,
        "ca": 3659084,
        "margin": 834841,
        "ebitda": 111987,
        "loss": 1501108,
        "year": 2017,
        "business": 668
    },
    {
        "id": 1336,
        "ca": 1948201,
        "margin": 721214,
        "ebitda": 419050,
        "loss": 227777,
        "year": 2016,
        "business": 668
    },
    {
        "id": 1337,
        "ca": 2468229,
        "margin": 265421,
        "ebitda": 302920,
        "loss": 6742927,
        "year": 2017,
        "business": 669
    },
    {
        "id": 1338,
        "ca": 981901,
        "margin": 790569,
        "ebitda": 582045,
        "loss": 7632615,
        "year": 2016,
        "business": 669
    },
    {
        "id": 1339,
        "ca": 2887913,
        "margin": 228444,
        "ebitda": 728088,
        "loss": 3141232,
        "year": 2017,
        "business": 670
    },
    {
        "id": 1340,
        "ca": 189415,
        "margin": 806284,
        "ebitda": 356532,
        "loss": 3905434,
        "year": 2016,
        "business": 670
    },
    {
        "id": 1341,
        "ca": 3800083,
        "margin": -89532,
        "ebitda": 327736,
        "loss": 6824193,
        "year": 2017,
        "business": 671
    },
    {
        "id": 1342,
        "ca": 1908162,
        "margin": 431094,
        "ebitda": 25992,
        "loss": 9595756,
        "year": 2016,
        "business": 671
    },
    {
        "id": 1343,
        "ca": 3745483,
        "margin": 75040,
        "ebitda": 162296,
        "loss": 3479762,
        "year": 2017,
        "business": 672
    },
    {
        "id": 1344,
        "ca": 343820,
        "margin": 20513,
        "ebitda": 59485,
        "loss": 5856270,
        "year": 2016,
        "business": 672
    },
    {
        "id": 1345,
        "ca": 3425132,
        "margin": -158363,
        "ebitda": 693691,
        "loss": 3120330,
        "year": 2017,
        "business": 673
    },
    {
        "id": 1346,
        "ca": 822070,
        "margin": 84604,
        "ebitda": 656191,
        "loss": 7205276,
        "year": 2016,
        "business": 673
    },
    {
        "id": 1347,
        "ca": 655614,
        "margin": -52212,
        "ebitda": 269990,
        "loss": 1615367,
        "year": 2017,
        "business": 674
    },
    {
        "id": 1348,
        "ca": 2728842,
        "margin": 160237,
        "ebitda": 185348,
        "loss": 4906909,
        "year": 2016,
        "business": 674
    },
    {
        "id": 1349,
        "ca": 2447276,
        "margin": 759527,
        "ebitda": 264569,
        "loss": 7761164,
        "year": 2017,
        "business": 675
    },
    {
        "id": 1350,
        "ca": 1386121,
        "margin": 113756,
        "ebitda": 957702,
        "loss": 9364683,
        "year": 2016,
        "business": 675
    },
    {
        "id": 1351,
        "ca": 3416004,
        "margin": 786426,
        "ebitda": 707607,
        "loss": 23276,
        "year": 2017,
        "business": 676
    },
    {
        "id": 1352,
        "ca": 2612412,
        "margin": -199540,
        "ebitda": 691088,
        "loss": 2221698,
        "year": 2016,
        "business": 676
    },
    {
        "id": 1353,
        "ca": 2234315,
        "margin": 854793,
        "ebitda": 497843,
        "loss": 1765597,
        "year": 2017,
        "business": 677
    },
    {
        "id": 1354,
        "ca": 2195485,
        "margin": 482912,
        "ebitda": 496411,
        "loss": 1351504,
        "year": 2016,
        "business": 677
    },
    {
        "id": 1355,
        "ca": 3192822,
        "margin": 218034,
        "ebitda": 176043,
        "loss": 1017293,
        "year": 2017,
        "business": 678
    },
    {
        "id": 1356,
        "ca": 3860272,
        "margin": 508122,
        "ebitda": 427761,
        "loss": 2805201,
        "year": 2016,
        "business": 678
    },
    {
        "id": 1357,
        "ca": 3200566,
        "margin": -185746,
        "ebitda": 195282,
        "loss": 5455395,
        "year": 2017,
        "business": 679
    },
    {
        "id": 1358,
        "ca": 3857386,
        "margin": -69191,
        "ebitda": 810974,
        "loss": 5892310,
        "year": 2016,
        "business": 679
    },
    {
        "id": 1359,
        "ca": 1962652,
        "margin": -154905,
        "ebitda": 25111,
        "loss": 8546105,
        "year": 2017,
        "business": 680
    },
    {
        "id": 1360,
        "ca": 3195779,
        "margin": 951399,
        "ebitda": 867936,
        "loss": 5735554,
        "year": 2016,
        "business": 680
    },
    {
        "id": 1361,
        "ca": 1644293,
        "margin": 673942,
        "ebitda": 903520,
        "loss": 4987871,
        "year": 2017,
        "business": 681
    },
    {
        "id": 1362,
        "ca": 1470234,
        "margin": 829962,
        "ebitda": 51651,
        "loss": 8454350,
        "year": 2016,
        "business": 681
    },
    {
        "id": 1363,
        "ca": 2826282,
        "margin": 649836,
        "ebitda": 509479,
        "loss": 6041428,
        "year": 2017,
        "business": 682
    },
    {
        "id": 1364,
        "ca": 245755,
        "margin": 587147,
        "ebitda": 594271,
        "loss": 6957641,
        "year": 2016,
        "business": 682
    },
    {
        "id": 1365,
        "ca": 3327290,
        "margin": 899824,
        "ebitda": 550704,
        "loss": 1504113,
        "year": 2017,
        "business": 683
    },
    {
        "id": 1366,
        "ca": 341283,
        "margin": 119743,
        "ebitda": 570573,
        "loss": 55269,
        "year": 2016,
        "business": 683
    },
    {
        "id": 1367,
        "ca": 462668,
        "margin": 604230,
        "ebitda": 356528,
        "loss": 8071941,
        "year": 2017,
        "business": 684
    },
    {
        "id": 1368,
        "ca": 3380896,
        "margin": 756817,
        "ebitda": 99705,
        "loss": 9239734,
        "year": 2016,
        "business": 684
    },
    {
        "id": 1369,
        "ca": 1135055,
        "margin": 443478,
        "ebitda": 546961,
        "loss": 9210909,
        "year": 2017,
        "business": 685
    },
    {
        "id": 1370,
        "ca": 545741,
        "margin": -98098,
        "ebitda": 957298,
        "loss": 9236643,
        "year": 2016,
        "business": 685
    },
    {
        "id": 1371,
        "ca": 2127852,
        "margin": -43695,
        "ebitda": 825959,
        "loss": 5476726,
        "year": 2017,
        "business": 686
    },
    {
        "id": 1372,
        "ca": 3590326,
        "margin": 586725,
        "ebitda": 577118,
        "loss": 3504338,
        "year": 2016,
        "business": 686
    },
    {
        "id": 1373,
        "ca": 2778639,
        "margin": -140897,
        "ebitda": 777472,
        "loss": 7785753,
        "year": 2017,
        "business": 687
    },
    {
        "id": 1374,
        "ca": 2613872,
        "margin": 297422,
        "ebitda": 247167,
        "loss": 2497521,
        "year": 2016,
        "business": 687
    },
    {
        "id": 1375,
        "ca": 3688832,
        "margin": 975240,
        "ebitda": 846552,
        "loss": 4088075,
        "year": 2017,
        "business": 688
    },
    {
        "id": 1376,
        "ca": 1969358,
        "margin": 460144,
        "ebitda": 102752,
        "loss": 3499302,
        "year": 2016,
        "business": 688
    },
    {
        "id": 1377,
        "ca": 2470780,
        "margin": 961928,
        "ebitda": 924211,
        "loss": 3421789,
        "year": 2017,
        "business": 689
    },
    {
        "id": 1378,
        "ca": 224960,
        "margin": -119746,
        "ebitda": 372508,
        "loss": 3206750,
        "year": 2016,
        "business": 689
    },
    {
        "id": 1379,
        "ca": 2764252,
        "margin": 529821,
        "ebitda": 114227,
        "loss": 5435275,
        "year": 2017,
        "business": 690
    },
    {
        "id": 1380,
        "ca": 3652719,
        "margin": 405054,
        "ebitda": 531878,
        "loss": 2135356,
        "year": 2016,
        "business": 690
    },
    {
        "id": 1381,
        "ca": 2185450,
        "margin": 931264,
        "ebitda": 662242,
        "loss": 1313372,
        "year": 2017,
        "business": 691
    },
    {
        "id": 1382,
        "ca": 1044919,
        "margin": 516351,
        "ebitda": 784607,
        "loss": 6096208,
        "year": 2016,
        "business": 691
    },
    {
        "id": 1383,
        "ca": 259137,
        "margin": -18515,
        "ebitda": 299908,
        "loss": 3178418,
        "year": 2017,
        "business": 692
    },
    {
        "id": 1384,
        "ca": 2534435,
        "margin": 956966,
        "ebitda": 416290,
        "loss": 1027510,
        "year": 2016,
        "business": 692
    },
    {
        "id": 1385,
        "ca": 1162815,
        "margin": -14235,
        "ebitda": 398776,
        "loss": 8756129,
        "year": 2017,
        "business": 693
    },
    {
        "id": 1386,
        "ca": 459280,
        "margin": 193369,
        "ebitda": 207787,
        "loss": 1827340,
        "year": 2016,
        "business": 693
    },
    {
        "id": 1387,
        "ca": 2620136,
        "margin": -101904,
        "ebitda": 479649,
        "loss": 7479609,
        "year": 2017,
        "business": 694
    },
    {
        "id": 1388,
        "ca": 3287400,
        "margin": -151678,
        "ebitda": 813570,
        "loss": 1946322,
        "year": 2016,
        "business": 694
    },
    {
        "id": 1389,
        "ca": 1140344,
        "margin": 723390,
        "ebitda": 100896,
        "loss": 1688200,
        "year": 2017,
        "business": 695
    },
    {
        "id": 1390,
        "ca": 2717260,
        "margin": 210390,
        "ebitda": 676120,
        "loss": 2957295,
        "year": 2016,
        "business": 695
    },
    {
        "id": 1391,
        "ca": 2538329,
        "margin": 734860,
        "ebitda": 508364,
        "loss": 451322,
        "year": 2017,
        "business": 696
    },
    {
        "id": 1392,
        "ca": 2189921,
        "margin": 626527,
        "ebitda": 233808,
        "loss": 7066105,
        "year": 2016,
        "business": 696
    },
    {
        "id": 1393,
        "ca": 3065956,
        "margin": -195154,
        "ebitda": 177226,
        "loss": 6948108,
        "year": 2017,
        "business": 697
    },
    {
        "id": 1394,
        "ca": 3195702,
        "margin": -69009,
        "ebitda": 114003,
        "loss": 5127790,
        "year": 2016,
        "business": 697
    },
    {
        "id": 1395,
        "ca": 422978,
        "margin": 94559,
        "ebitda": 823744,
        "loss": 3359150,
        "year": 2017,
        "business": 698
    },
    {
        "id": 1396,
        "ca": 208146,
        "margin": 57654,
        "ebitda": 640763,
        "loss": 183093,
        "year": 2016,
        "business": 698
    },
    {
        "id": 1397,
        "ca": 972570,
        "margin": 629649,
        "ebitda": 37940,
        "loss": 8979978,
        "year": 2017,
        "business": 699
    },
    {
        "id": 1398,
        "ca": 396800,
        "margin": 834123,
        "ebitda": 67102,
        "loss": 7209932,
        "year": 2016,
        "business": 699
    },
    {
        "id": 1399,
        "ca": 2943058,
        "margin": 215243,
        "ebitda": 48482,
        "loss": 4402355,
        "year": 2017,
        "business": 700
    },
    {
        "id": 1400,
        "ca": 3257610,
        "margin": 320457,
        "ebitda": 263553,
        "loss": 4910999,
        "year": 2016,
        "business": 700
    },
    {
        "id": 1401,
        "ca": 2664114,
        "margin": 490145,
        "ebitda": 36829,
        "loss": 6897664,
        "year": 2017,
        "business": 701
    },
    {
        "id": 1402,
        "ca": 1131974,
        "margin": -42196,
        "ebitda": 313290,
        "loss": 9926057,
        "year": 2016,
        "business": 701
    },
    {
        "id": 1403,
        "ca": 1941867,
        "margin": 471839,
        "ebitda": 13173,
        "loss": 7905781,
        "year": 2017,
        "business": 702
    },
    {
        "id": 1404,
        "ca": 331860,
        "margin": 690879,
        "ebitda": 662024,
        "loss": 6624351,
        "year": 2016,
        "business": 702
    },
    {
        "id": 1405,
        "ca": 3125130,
        "margin": 744785,
        "ebitda": 447239,
        "loss": 7954513,
        "year": 2017,
        "business": 703
    },
    {
        "id": 1406,
        "ca": 1776670,
        "margin": 335968,
        "ebitda": 530468,
        "loss": 7222889,
        "year": 2016,
        "business": 703
    },
    {
        "id": 1407,
        "ca": 742960,
        "margin": 858653,
        "ebitda": 281458,
        "loss": 3466749,
        "year": 2017,
        "business": 704
    },
    {
        "id": 1408,
        "ca": 707651,
        "margin": 759887,
        "ebitda": 88486,
        "loss": 8495068,
        "year": 2016,
        "business": 704
    },
    {
        "id": 1409,
        "ca": 3789623,
        "margin": 594833,
        "ebitda": 468811,
        "loss": 4259578,
        "year": 2017,
        "business": 705
    },
    {
        "id": 1410,
        "ca": 2673438,
        "margin": -174464,
        "ebitda": 146370,
        "loss": 3437376,
        "year": 2016,
        "business": 705
    },
    {
        "id": 1411,
        "ca": 3983091,
        "margin": 321894,
        "ebitda": 468394,
        "loss": 3598738,
        "year": 2017,
        "business": 706
    },
    {
        "id": 1412,
        "ca": 2155612,
        "margin": -90426,
        "ebitda": 135069,
        "loss": 7570748,
        "year": 2016,
        "business": 706
    },
    {
        "id": 1413,
        "ca": 3356712,
        "margin": 434919,
        "ebitda": 545026,
        "loss": 493058,
        "year": 2017,
        "business": 707
    },
    {
        "id": 1414,
        "ca": 3389973,
        "margin": 434454,
        "ebitda": 498436,
        "loss": 5510423,
        "year": 2016,
        "business": 707
    },
    {
        "id": 1415,
        "ca": 2478546,
        "margin": 961503,
        "ebitda": 857657,
        "loss": 8775511,
        "year": 2017,
        "business": 708
    },
    {
        "id": 1416,
        "ca": 938287,
        "margin": -55114,
        "ebitda": 950421,
        "loss": 4285809,
        "year": 2016,
        "business": 708
    },
    {
        "id": 1417,
        "ca": 1968605,
        "margin": -125632,
        "ebitda": 475499,
        "loss": 812398,
        "year": 2017,
        "business": 709
    },
    {
        "id": 1418,
        "ca": 3267318,
        "margin": 842626,
        "ebitda": 764070,
        "loss": 5126685,
        "year": 2016,
        "business": 709
    },
    {
        "id": 1419,
        "ca": 3801438,
        "margin": -153083,
        "ebitda": 245354,
        "loss": 2158373,
        "year": 2017,
        "business": 710
    },
    {
        "id": 1420,
        "ca": 3778888,
        "margin": 127422,
        "ebitda": 594834,
        "loss": 4421471,
        "year": 2016,
        "business": 710
    },
    {
        "id": 1421,
        "ca": 3416590,
        "margin": -157804,
        "ebitda": 343015,
        "loss": 7227365,
        "year": 2017,
        "business": 711
    },
    {
        "id": 1422,
        "ca": 377108,
        "margin": -138893,
        "ebitda": 871520,
        "loss": 9007279,
        "year": 2016,
        "business": 711
    },
    {
        "id": 1423,
        "ca": 2568272,
        "margin": 984764,
        "ebitda": 373439,
        "loss": 9908569,
        "year": 2017,
        "business": 712
    },
    {
        "id": 1424,
        "ca": 2921971,
        "margin": 977489,
        "ebitda": 449249,
        "loss": 6869930,
        "year": 2016,
        "business": 712
    },
    {
        "id": 1425,
        "ca": 1355013,
        "margin": 850802,
        "ebitda": 11507,
        "loss": 6313235,
        "year": 2017,
        "business": 713
    },
    {
        "id": 1426,
        "ca": 830234,
        "margin": -183139,
        "ebitda": 848478,
        "loss": 4909293,
        "year": 2016,
        "business": 713
    },
    {
        "id": 1427,
        "ca": 2840236,
        "margin": 440627,
        "ebitda": 163252,
        "loss": 3711355,
        "year": 2017,
        "business": 714
    },
    {
        "id": 1428,
        "ca": 2589957,
        "margin": 249459,
        "ebitda": 93916,
        "loss": 3213459,
        "year": 2016,
        "business": 714
    },
    {
        "id": 1429,
        "ca": 2549056,
        "margin": -85700,
        "ebitda": 5389,
        "loss": 2116436,
        "year": 2017,
        "business": 715
    },
    {
        "id": 1430,
        "ca": 3944708,
        "margin": 719236,
        "ebitda": 173232,
        "loss": 1386439,
        "year": 2016,
        "business": 715
    },
    {
        "id": 1431,
        "ca": 437190,
        "margin": 493156,
        "ebitda": 157659,
        "loss": 7395462,
        "year": 2017,
        "business": 716
    },
    {
        "id": 1432,
        "ca": 1065528,
        "margin": 763303,
        "ebitda": 373006,
        "loss": 1495155,
        "year": 2016,
        "business": 716
    },
    {
        "id": 1433,
        "ca": 3755756,
        "margin": 262148,
        "ebitda": 913094,
        "loss": 1041892,
        "year": 2017,
        "business": 717
    },
    {
        "id": 1434,
        "ca": 2234815,
        "margin": 852632,
        "ebitda": 974573,
        "loss": 9917319,
        "year": 2016,
        "business": 717
    },
    {
        "id": 1435,
        "ca": 3946624,
        "margin": 34429,
        "ebitda": 402147,
        "loss": 111655,
        "year": 2017,
        "business": 718
    },
    {
        "id": 1436,
        "ca": 3681572,
        "margin": -8227,
        "ebitda": 626437,
        "loss": 4923464,
        "year": 2016,
        "business": 718
    },
    {
        "id": 1437,
        "ca": 1005335,
        "margin": 368433,
        "ebitda": 550062,
        "loss": 900926,
        "year": 2017,
        "business": 719
    },
    {
        "id": 1438,
        "ca": 888539,
        "margin": 94321,
        "ebitda": 784603,
        "loss": 5320548,
        "year": 2016,
        "business": 719
    },
    {
        "id": 1439,
        "ca": 2395166,
        "margin": 969533,
        "ebitda": 71778,
        "loss": 2587520,
        "year": 2017,
        "business": 720
    },
    {
        "id": 1440,
        "ca": 3616153,
        "margin": 226390,
        "ebitda": 991195,
        "loss": 2094547,
        "year": 2016,
        "business": 720
    },
    {
        "id": 1441,
        "ca": 422266,
        "margin": 682533,
        "ebitda": 431425,
        "loss": 6597671,
        "year": 2017,
        "business": 721
    },
    {
        "id": 1442,
        "ca": 3342599,
        "margin": 218946,
        "ebitda": 392966,
        "loss": 1752443,
        "year": 2016,
        "business": 721
    },
    {
        "id": 1443,
        "ca": 2782561,
        "margin": 777578,
        "ebitda": 930379,
        "loss": 8318681,
        "year": 2017,
        "business": 722
    },
    {
        "id": 1444,
        "ca": 3787599,
        "margin": 645089,
        "ebitda": 267539,
        "loss": 2980623,
        "year": 2016,
        "business": 722
    },
    {
        "id": 1445,
        "ca": 1550625,
        "margin": -85942,
        "ebitda": 907511,
        "loss": 3183937,
        "year": 2017,
        "business": 723
    },
    {
        "id": 1446,
        "ca": 712133,
        "margin": 968052,
        "ebitda": 132100,
        "loss": 1854200,
        "year": 2016,
        "business": 723
    },
    {
        "id": 1447,
        "ca": 692862,
        "margin": 690260,
        "ebitda": 169366,
        "loss": 1084,
        "year": 2017,
        "business": 724
    },
    {
        "id": 1448,
        "ca": 3019123,
        "margin": 16984,
        "ebitda": 191909,
        "loss": 8781499,
        "year": 2016,
        "business": 724
    },
    {
        "id": 1449,
        "ca": 3888122,
        "margin": 403405,
        "ebitda": 860517,
        "loss": 2219960,
        "year": 2017,
        "business": 725
    },
    {
        "id": 1450,
        "ca": 3486309,
        "margin": 941118,
        "ebitda": 792651,
        "loss": 5300191,
        "year": 2016,
        "business": 725
    },
    {
        "id": 1451,
        "ca": 1927731,
        "margin": 429683,
        "ebitda": 191211,
        "loss": 7817217,
        "year": 2017,
        "business": 726
    },
    {
        "id": 1452,
        "ca": 3277944,
        "margin": 627776,
        "ebitda": 459614,
        "loss": 3720740,
        "year": 2016,
        "business": 726
    },
    {
        "id": 1453,
        "ca": 882814,
        "margin": 758601,
        "ebitda": 216464,
        "loss": 4544052,
        "year": 2017,
        "business": 727
    },
    {
        "id": 1454,
        "ca": 2631088,
        "margin": 956106,
        "ebitda": 622017,
        "loss": 8809182,
        "year": 2016,
        "business": 727
    },
    {
        "id": 1455,
        "ca": 3444784,
        "margin": 195522,
        "ebitda": 376220,
        "loss": 2911014,
        "year": 2017,
        "business": 728
    },
    {
        "id": 1456,
        "ca": 682068,
        "margin": 269857,
        "ebitda": 464165,
        "loss": 192658,
        "year": 2016,
        "business": 728
    },
    {
        "id": 1457,
        "ca": 2562170,
        "margin": 81679,
        "ebitda": 799147,
        "loss": 5478487,
        "year": 2017,
        "business": 729
    },
    {
        "id": 1458,
        "ca": 1890803,
        "margin": 59146,
        "ebitda": 630618,
        "loss": 8869806,
        "year": 2016,
        "business": 729
    },
    {
        "id": 1459,
        "ca": 681126,
        "margin": 376036,
        "ebitda": 167727,
        "loss": 4979890,
        "year": 2017,
        "business": 730
    },
    {
        "id": 1460,
        "ca": 2944448,
        "margin": 994337,
        "ebitda": 79204,
        "loss": 6921074,
        "year": 2016,
        "business": 730
    },
    {
        "id": 1461,
        "ca": 585068,
        "margin": 225329,
        "ebitda": 90207,
        "loss": 6434449,
        "year": 2017,
        "business": 731
    },
    {
        "id": 1462,
        "ca": 1204281,
        "margin": 854108,
        "ebitda": 966444,
        "loss": 8562260,
        "year": 2016,
        "business": 731
    },
    {
        "id": 1463,
        "ca": 893560,
        "margin": 97802,
        "ebitda": 904144,
        "loss": 3800312,
        "year": 2017,
        "business": 732
    },
    {
        "id": 1464,
        "ca": 2349739,
        "margin": 434666,
        "ebitda": 56349,
        "loss": 561275,
        "year": 2016,
        "business": 732
    },
    {
        "id": 1465,
        "ca": 1614918,
        "margin": 382197,
        "ebitda": 844139,
        "loss": 5643268,
        "year": 2017,
        "business": 733
    },
    {
        "id": 1466,
        "ca": 3785592,
        "margin": 665218,
        "ebitda": 469223,
        "loss": 6358594,
        "year": 2016,
        "business": 733
    },
    {
        "id": 1467,
        "ca": 1392867,
        "margin": 368445,
        "ebitda": 46335,
        "loss": 9507259,
        "year": 2017,
        "business": 734
    },
    {
        "id": 1468,
        "ca": 1757963,
        "margin": 725923,
        "ebitda": 403027,
        "loss": 8971658,
        "year": 2016,
        "business": 734
    },
    {
        "id": 1469,
        "ca": 1341838,
        "margin": 754167,
        "ebitda": 335288,
        "loss": 3878838,
        "year": 2017,
        "business": 735
    },
    {
        "id": 1470,
        "ca": 2619963,
        "margin": -83882,
        "ebitda": 126462,
        "loss": 1145383,
        "year": 2016,
        "business": 735
    },
    {
        "id": 1471,
        "ca": 2437096,
        "margin": 487616,
        "ebitda": 912412,
        "loss": 6760181,
        "year": 2017,
        "business": 736
    },
    {
        "id": 1472,
        "ca": 316486,
        "margin": 139218,
        "ebitda": 224389,
        "loss": 603330,
        "year": 2016,
        "business": 736
    },
    {
        "id": 1473,
        "ca": 2921327,
        "margin": 373338,
        "ebitda": 511463,
        "loss": 4733450,
        "year": 2017,
        "business": 737
    },
    {
        "id": 1474,
        "ca": 2505362,
        "margin": 187809,
        "ebitda": 122822,
        "loss": 1032870,
        "year": 2016,
        "business": 737
    },
    {
        "id": 1475,
        "ca": 2126856,
        "margin": 877768,
        "ebitda": 847746,
        "loss": 4021009,
        "year": 2017,
        "business": 738
    },
    {
        "id": 1476,
        "ca": 1477996,
        "margin": 45120,
        "ebitda": 972963,
        "loss": 2583371,
        "year": 2016,
        "business": 738
    },
    {
        "id": 1477,
        "ca": 2432945,
        "margin": 291324,
        "ebitda": 683014,
        "loss": 7616154,
        "year": 2017,
        "business": 739
    },
    {
        "id": 1478,
        "ca": 3769832,
        "margin": 216140,
        "ebitda": 551569,
        "loss": 5413005,
        "year": 2016,
        "business": 739
    },
    {
        "id": 1479,
        "ca": 135769,
        "margin": -156465,
        "ebitda": 403001,
        "loss": 3563671,
        "year": 2017,
        "business": 740
    },
    {
        "id": 1480,
        "ca": 212281,
        "margin": 467116,
        "ebitda": 121450,
        "loss": 9302688,
        "year": 2016,
        "business": 740
    },
    {
        "id": 1481,
        "ca": 1777633,
        "margin": 460911,
        "ebitda": 644913,
        "loss": 1587930,
        "year": 2017,
        "business": 741
    },
    {
        "id": 1482,
        "ca": 2546679,
        "margin": 595119,
        "ebitda": 553749,
        "loss": 5492039,
        "year": 2016,
        "business": 741
    },
    {
        "id": 1483,
        "ca": 3746698,
        "margin": 213990,
        "ebitda": 43605,
        "loss": 6109786,
        "year": 2017,
        "business": 742
    },
    {
        "id": 1484,
        "ca": 3114941,
        "margin": 361126,
        "ebitda": 441915,
        "loss": 2765979,
        "year": 2016,
        "business": 742
    },
    {
        "id": 1485,
        "ca": 3325510,
        "margin": 769574,
        "ebitda": 66975,
        "loss": 4644168,
        "year": 2017,
        "business": 743
    },
    {
        "id": 1486,
        "ca": 3517098,
        "margin": 337812,
        "ebitda": 800242,
        "loss": 7143754,
        "year": 2016,
        "business": 743
    },
    {
        "id": 1487,
        "ca": 3861761,
        "margin": -24465,
        "ebitda": 484479,
        "loss": 5561445,
        "year": 2017,
        "business": 744
    },
    {
        "id": 1488,
        "ca": 3557896,
        "margin": 591734,
        "ebitda": 343633,
        "loss": 4083362,
        "year": 2016,
        "business": 744
    },
    {
        "id": 1489,
        "ca": 1920785,
        "margin": 667395,
        "ebitda": 732506,
        "loss": 716880,
        "year": 2017,
        "business": 745
    },
    {
        "id": 1490,
        "ca": 2539401,
        "margin": 62751,
        "ebitda": 353245,
        "loss": 5528983,
        "year": 2016,
        "business": 745
    },
    {
        "id": 1491,
        "ca": 395830,
        "margin": -31127,
        "ebitda": 569196,
        "loss": 3324194,
        "year": 2017,
        "business": 746
    },
    {
        "id": 1492,
        "ca": 3982803,
        "margin": 230150,
        "ebitda": 413155,
        "loss": 4555447,
        "year": 2016,
        "business": 746
    },
    {
        "id": 1493,
        "ca": 2969124,
        "margin": 83607,
        "ebitda": 616539,
        "loss": 4563818,
        "year": 2017,
        "business": 747
    },
    {
        "id": 1494,
        "ca": 3501568,
        "margin": 971779,
        "ebitda": 503991,
        "loss": 6859937,
        "year": 2016,
        "business": 747
    },
    {
        "id": 1495,
        "ca": 2642821,
        "margin": 814335,
        "ebitda": 488875,
        "loss": 9368034,
        "year": 2017,
        "business": 748
    },
    {
        "id": 1496,
        "ca": 3384738,
        "margin": 221024,
        "ebitda": 139033,
        "loss": 2968175,
        "year": 2016,
        "business": 748
    },
    {
        "id": 1497,
        "ca": 2569913,
        "margin": 496831,
        "ebitda": 535131,
        "loss": 7106661,
        "year": 2017,
        "business": 749
    },
    {
        "id": 1498,
        "ca": 2087883,
        "margin": 213266,
        "ebitda": 544093,
        "loss": 9546973,
        "year": 2016,
        "business": 749
    },
    {
        "id": 1499,
        "ca": 3406554,
        "margin": -185455,
        "ebitda": 71849,
        "loss": 3334975,
        "year": 2017,
        "business": 750
    },
    {
        "id": 1500,
        "ca": 2593135,
        "margin": 708076,
        "ebitda": 879420,
        "loss": 9313385,
        "year": 2016,
        "business": 750
    },
    {
        "id": 1501,
        "ca": 1884890,
        "margin": 183610,
        "ebitda": 41640,
        "loss": 8047935,
        "year": 2017,
        "business": 751
    },
    {
        "id": 1502,
        "ca": 538038,
        "margin": 924445,
        "ebitda": 219592,
        "loss": 4407039,
        "year": 2016,
        "business": 751
    },
    {
        "id": 1503,
        "ca": 119365,
        "margin": 60990,
        "ebitda": 703590,
        "loss": 284338,
        "year": 2017,
        "business": 752
    },
    {
        "id": 1504,
        "ca": 3946517,
        "margin": 390557,
        "ebitda": 662955,
        "loss": 9170616,
        "year": 2016,
        "business": 752
    },
    {
        "id": 1505,
        "ca": 2813075,
        "margin": 630400,
        "ebitda": 67567,
        "loss": 1476733,
        "year": 2017,
        "business": 753
    },
    {
        "id": 1506,
        "ca": 3576450,
        "margin": 661458,
        "ebitda": 371638,
        "loss": 9636123,
        "year": 2016,
        "business": 753
    },
    {
        "id": 1507,
        "ca": 3365933,
        "margin": 823024,
        "ebitda": 56764,
        "loss": 110733,
        "year": 2017,
        "business": 754
    },
    {
        "id": 1508,
        "ca": 228843,
        "margin": 290197,
        "ebitda": 142212,
        "loss": 4974910,
        "year": 2016,
        "business": 754
    },
    {
        "id": 1509,
        "ca": 3958314,
        "margin": 893118,
        "ebitda": 141658,
        "loss": 8494474,
        "year": 2017,
        "business": 755
    },
    {
        "id": 1510,
        "ca": 527951,
        "margin": 19072,
        "ebitda": 612565,
        "loss": 3916439,
        "year": 2016,
        "business": 755
    },
    {
        "id": 1511,
        "ca": 3462684,
        "margin": 644266,
        "ebitda": 472240,
        "loss": 7405624,
        "year": 2017,
        "business": 756
    },
    {
        "id": 1512,
        "ca": 3537276,
        "margin": 663791,
        "ebitda": 796987,
        "loss": 2377887,
        "year": 2016,
        "business": 756
    },
    {
        "id": 1513,
        "ca": 2544895,
        "margin": -141165,
        "ebitda": 283671,
        "loss": 508099,
        "year": 2017,
        "business": 757
    },
    {
        "id": 1514,
        "ca": 3698373,
        "margin": 404379,
        "ebitda": 571012,
        "loss": 1987033,
        "year": 2016,
        "business": 757
    },
    {
        "id": 1515,
        "ca": 3210938,
        "margin": -189704,
        "ebitda": 553580,
        "loss": 4995940,
        "year": 2017,
        "business": 758
    },
    {
        "id": 1516,
        "ca": 2992011,
        "margin": 586103,
        "ebitda": 514250,
        "loss": 8596448,
        "year": 2016,
        "business": 758
    },
    {
        "id": 1517,
        "ca": 1336448,
        "margin": 490008,
        "ebitda": 750571,
        "loss": 3664654,
        "year": 2017,
        "business": 759
    },
    {
        "id": 1518,
        "ca": 2992164,
        "margin": 538208,
        "ebitda": 647371,
        "loss": 4033479,
        "year": 2016,
        "business": 759
    },
    {
        "id": 1519,
        "ca": 3194909,
        "margin": 186423,
        "ebitda": 226764,
        "loss": 4638762,
        "year": 2017,
        "business": 760
    },
    {
        "id": 1520,
        "ca": 2755844,
        "margin": 12454,
        "ebitda": 648122,
        "loss": 6664079,
        "year": 2016,
        "business": 760
    },
    {
        "id": 1521,
        "ca": 3602830,
        "margin": -154058,
        "ebitda": 524059,
        "loss": 9102881,
        "year": 2017,
        "business": 761
    },
    {
        "id": 1522,
        "ca": 2506505,
        "margin": -175518,
        "ebitda": 657072,
        "loss": 36933,
        "year": 2016,
        "business": 761
    },
    {
        "id": 1523,
        "ca": 2839567,
        "margin": 732502,
        "ebitda": 374009,
        "loss": 2046547,
        "year": 2017,
        "business": 762
    },
    {
        "id": 1524,
        "ca": 1146459,
        "margin": 591485,
        "ebitda": 162006,
        "loss": 1718123,
        "year": 2016,
        "business": 762
    },
    {
        "id": 1525,
        "ca": 358435,
        "margin": 337169,
        "ebitda": 629865,
        "loss": 6094688,
        "year": 2017,
        "business": 763
    },
    {
        "id": 1526,
        "ca": 785779,
        "margin": 885873,
        "ebitda": 269914,
        "loss": 7522765,
        "year": 2016,
        "business": 763
    },
    {
        "id": 1527,
        "ca": 1021656,
        "margin": 507711,
        "ebitda": 624623,
        "loss": 6483736,
        "year": 2017,
        "business": 764
    },
    {
        "id": 1528,
        "ca": 1670117,
        "margin": 194408,
        "ebitda": 359738,
        "loss": 6034374,
        "year": 2016,
        "business": 764
    },
    {
        "id": 1529,
        "ca": 2611382,
        "margin": 425943,
        "ebitda": 316796,
        "loss": 9923888,
        "year": 2017,
        "business": 765
    },
    {
        "id": 1530,
        "ca": 2595729,
        "margin": 157343,
        "ebitda": 198976,
        "loss": 3155285,
        "year": 2016,
        "business": 765
    },
    {
        "id": 1531,
        "ca": 2285910,
        "margin": 63737,
        "ebitda": 362562,
        "loss": 6239080,
        "year": 2017,
        "business": 766
    },
    {
        "id": 1532,
        "ca": 289467,
        "margin": 840863,
        "ebitda": 585829,
        "loss": 1982316,
        "year": 2016,
        "business": 766
    },
    {
        "id": 1533,
        "ca": 2965432,
        "margin": 184079,
        "ebitda": 744758,
        "loss": 4597289,
        "year": 2017,
        "business": 767
    },
    {
        "id": 1534,
        "ca": 2799755,
        "margin": 49662,
        "ebitda": 133091,
        "loss": 1774510,
        "year": 2016,
        "business": 767
    },
    {
        "id": 1535,
        "ca": 1057476,
        "margin": 441918,
        "ebitda": 156841,
        "loss": 4403545,
        "year": 2017,
        "business": 768
    },
    {
        "id": 1536,
        "ca": 3085139,
        "margin": 623575,
        "ebitda": 969986,
        "loss": 3834447,
        "year": 2016,
        "business": 768
    },
    {
        "id": 1537,
        "ca": 3184439,
        "margin": 488997,
        "ebitda": 470887,
        "loss": 341753,
        "year": 2017,
        "business": 769
    },
    {
        "id": 1538,
        "ca": 2695711,
        "margin": 223140,
        "ebitda": 282841,
        "loss": 9950206,
        "year": 2016,
        "business": 769
    },
    {
        "id": 1539,
        "ca": 2323601,
        "margin": -130096,
        "ebitda": 292465,
        "loss": 6739558,
        "year": 2017,
        "business": 770
    },
    {
        "id": 1540,
        "ca": 3910324,
        "margin": 975948,
        "ebitda": 123494,
        "loss": 5361820,
        "year": 2016,
        "business": 770
    },
    {
        "id": 1541,
        "ca": 1383179,
        "margin": 525934,
        "ebitda": 620050,
        "loss": 5708808,
        "year": 2017,
        "business": 771
    },
    {
        "id": 1542,
        "ca": 181821,
        "margin": 273390,
        "ebitda": 187686,
        "loss": 195782,
        "year": 2016,
        "business": 771
    },
    {
        "id": 1543,
        "ca": 1837254,
        "margin": -23600,
        "ebitda": 630765,
        "loss": 330346,
        "year": 2017,
        "business": 772
    },
    {
        "id": 1544,
        "ca": 364299,
        "margin": 981381,
        "ebitda": 716787,
        "loss": 7314765,
        "year": 2016,
        "business": 772
    },
    {
        "id": 1545,
        "ca": 1124569,
        "margin": 244282,
        "ebitda": 867654,
        "loss": 9078361,
        "year": 2017,
        "business": 773
    },
    {
        "id": 1546,
        "ca": 403549,
        "margin": 959000,
        "ebitda": 741391,
        "loss": 3199016,
        "year": 2016,
        "business": 773
    },
    {
        "id": 1547,
        "ca": 928986,
        "margin": -169867,
        "ebitda": 599256,
        "loss": 3641711,
        "year": 2017,
        "business": 774
    },
    {
        "id": 1548,
        "ca": 2861820,
        "margin": 645921,
        "ebitda": 833062,
        "loss": 5892050,
        "year": 2016,
        "business": 774
    },
    {
        "id": 1549,
        "ca": 396503,
        "margin": 759077,
        "ebitda": 316573,
        "loss": 2058773,
        "year": 2017,
        "business": 775
    },
    {
        "id": 1550,
        "ca": 3285593,
        "margin": 3312,
        "ebitda": 902305,
        "loss": 1983829,
        "year": 2016,
        "business": 775
    },
    {
        "id": 1551,
        "ca": 1890402,
        "margin": -178874,
        "ebitda": 155672,
        "loss": 4156046,
        "year": 2017,
        "business": 776
    },
    {
        "id": 1552,
        "ca": 1319212,
        "margin": 717738,
        "ebitda": 472275,
        "loss": 2953966,
        "year": 2016,
        "business": 776
    },
    {
        "id": 1553,
        "ca": 1554459,
        "margin": 531257,
        "ebitda": 718279,
        "loss": 269453,
        "year": 2017,
        "business": 777
    },
    {
        "id": 1554,
        "ca": 2906345,
        "margin": 748364,
        "ebitda": 135631,
        "loss": 2041759,
        "year": 2016,
        "business": 777
    },
    {
        "id": 1555,
        "ca": 3447094,
        "margin": 203296,
        "ebitda": 792136,
        "loss": 7500645,
        "year": 2017,
        "business": 778
    },
    {
        "id": 1556,
        "ca": 2852163,
        "margin": -63678,
        "ebitda": 865549,
        "loss": 6324055,
        "year": 2016,
        "business": 778
    },
    {
        "id": 1557,
        "ca": 1296714,
        "margin": 816170,
        "ebitda": 828818,
        "loss": 8073508,
        "year": 2017,
        "business": 779
    },
    {
        "id": 1558,
        "ca": 1180926,
        "margin": 607709,
        "ebitda": 753816,
        "loss": 4592164,
        "year": 2016,
        "business": 779
    },
    {
        "id": 1559,
        "ca": 2067456,
        "margin": 314329,
        "ebitda": 276534,
        "loss": 6637806,
        "year": 2017,
        "business": 780
    },
    {
        "id": 1560,
        "ca": 2187099,
        "margin": 683866,
        "ebitda": 911399,
        "loss": 8801200,
        "year": 2016,
        "business": 780
    },
    {
        "id": 1561,
        "ca": 3890899,
        "margin": 441660,
        "ebitda": 222974,
        "loss": 8363608,
        "year": 2017,
        "business": 781
    },
    {
        "id": 1562,
        "ca": 3162720,
        "margin": 519856,
        "ebitda": 301416,
        "loss": 3767343,
        "year": 2016,
        "business": 781
    },
    {
        "id": 1563,
        "ca": 523895,
        "margin": -12046,
        "ebitda": 453440,
        "loss": 4037711,
        "year": 2017,
        "business": 782
    },
    {
        "id": 1564,
        "ca": 1173626,
        "margin": 174745,
        "ebitda": 946818,
        "loss": 2245031,
        "year": 2016,
        "business": 782
    },
    {
        "id": 1565,
        "ca": 3307617,
        "margin": -1987,
        "ebitda": 923815,
        "loss": 8106555,
        "year": 2017,
        "business": 783
    },
    {
        "id": 1566,
        "ca": 3812238,
        "margin": 399970,
        "ebitda": 626752,
        "loss": 5883384,
        "year": 2016,
        "business": 783
    },
    {
        "id": 1567,
        "ca": 1667068,
        "margin": 265689,
        "ebitda": 155850,
        "loss": 390853,
        "year": 2017,
        "business": 784
    },
    {
        "id": 1568,
        "ca": 1562368,
        "margin": 382981,
        "ebitda": 11510,
        "loss": 3963531,
        "year": 2016,
        "business": 784
    },
    {
        "id": 1569,
        "ca": 2925064,
        "margin": 122742,
        "ebitda": 230410,
        "loss": 4527692,
        "year": 2017,
        "business": 785
    },
    {
        "id": 1570,
        "ca": 3463883,
        "margin": 119451,
        "ebitda": 777862,
        "loss": 2700523,
        "year": 2016,
        "business": 785
    },
    {
        "id": 1571,
        "ca": 1285405,
        "margin": 351543,
        "ebitda": 862074,
        "loss": 9415788,
        "year": 2017,
        "business": 786
    },
    {
        "id": 1572,
        "ca": 1679240,
        "margin": 594176,
        "ebitda": 727597,
        "loss": 7062503,
        "year": 2016,
        "business": 786
    },
    {
        "id": 1573,
        "ca": 2860440,
        "margin": 229094,
        "ebitda": 643970,
        "loss": 3686020,
        "year": 2017,
        "business": 787
    },
    {
        "id": 1574,
        "ca": 1571485,
        "margin": 719144,
        "ebitda": 204031,
        "loss": 3557270,
        "year": 2016,
        "business": 787
    },
    {
        "id": 1575,
        "ca": 2687578,
        "margin": 812459,
        "ebitda": 598150,
        "loss": 1097899,
        "year": 2017,
        "business": 788
    },
    {
        "id": 1576,
        "ca": 294285,
        "margin": -68914,
        "ebitda": 386469,
        "loss": 2642747,
        "year": 2016,
        "business": 788
    },
    {
        "id": 1577,
        "ca": 2779532,
        "margin": 262840,
        "ebitda": 889096,
        "loss": 4960989,
        "year": 2017,
        "business": 789
    },
    {
        "id": 1578,
        "ca": 595444,
        "margin": 533623,
        "ebitda": 622157,
        "loss": 6647924,
        "year": 2016,
        "business": 789
    },
    {
        "id": 1579,
        "ca": 366675,
        "margin": 738947,
        "ebitda": 675433,
        "loss": 2870953,
        "year": 2017,
        "business": 790
    },
    {
        "id": 1580,
        "ca": 2866906,
        "margin": 607038,
        "ebitda": 175704,
        "loss": 1440136,
        "year": 2016,
        "business": 790
    },
    {
        "id": 1581,
        "ca": 2300901,
        "margin": 21458,
        "ebitda": 790803,
        "loss": 5132923,
        "year": 2017,
        "business": 791
    },
    {
        "id": 1582,
        "ca": 3489522,
        "margin": 931936,
        "ebitda": 801643,
        "loss": 4808791,
        "year": 2016,
        "business": 791
    },
    {
        "id": 1583,
        "ca": 3412747,
        "margin": 947042,
        "ebitda": 910029,
        "loss": 1947641,
        "year": 2017,
        "business": 792
    },
    {
        "id": 1584,
        "ca": 1956790,
        "margin": 958065,
        "ebitda": 565309,
        "loss": 7660599,
        "year": 2016,
        "business": 792
    },
    {
        "id": 1585,
        "ca": 1568063,
        "margin": 62833,
        "ebitda": 207237,
        "loss": 6307868,
        "year": 2017,
        "business": 793
    },
    {
        "id": 1586,
        "ca": 1941614,
        "margin": 943627,
        "ebitda": 850972,
        "loss": 7008539,
        "year": 2016,
        "business": 793
    },
    {
        "id": 1587,
        "ca": 1413434,
        "margin": -198488,
        "ebitda": 919047,
        "loss": 884992,
        "year": 2017,
        "business": 794
    },
    {
        "id": 1588,
        "ca": 3223334,
        "margin": 197753,
        "ebitda": 839964,
        "loss": 654740,
        "year": 2016,
        "business": 794
    },
    {
        "id": 1589,
        "ca": 722645,
        "margin": 161551,
        "ebitda": 662831,
        "loss": 1356749,
        "year": 2017,
        "business": 795
    },
    {
        "id": 1590,
        "ca": 326444,
        "margin": 445708,
        "ebitda": 448271,
        "loss": 7629668,
        "year": 2016,
        "business": 795
    },
    {
        "id": 1591,
        "ca": 529619,
        "margin": 331955,
        "ebitda": 646647,
        "loss": 3535870,
        "year": 2017,
        "business": 796
    },
    {
        "id": 1592,
        "ca": 2762765,
        "margin": 547256,
        "ebitda": 285767,
        "loss": 1562770,
        "year": 2016,
        "business": 796
    },
    {
        "id": 1593,
        "ca": 3471496,
        "margin": 801027,
        "ebitda": 892427,
        "loss": 9985604,
        "year": 2017,
        "business": 797
    },
    {
        "id": 1594,
        "ca": 550979,
        "margin": 555238,
        "ebitda": 205400,
        "loss": 7487590,
        "year": 2016,
        "business": 797
    },
    {
        "id": 1595,
        "ca": 995998,
        "margin": 374164,
        "ebitda": 578755,
        "loss": 7068204,
        "year": 2017,
        "business": 798
    },
    {
        "id": 1596,
        "ca": 2055987,
        "margin": 365581,
        "ebitda": 822455,
        "loss": 8436882,
        "year": 2016,
        "business": 798
    },
    {
        "id": 1597,
        "ca": 1759245,
        "margin": 217688,
        "ebitda": 233775,
        "loss": 1527604,
        "year": 2017,
        "business": 799
    },
    {
        "id": 1598,
        "ca": 3144748,
        "margin": 943888,
        "ebitda": 684002,
        "loss": 6144160,
        "year": 2016,
        "business": 799
    },
    {
        "id": 1599,
        "ca": 2762880,
        "margin": 935547,
        "ebitda": 475909,
        "loss": 2616824,
        "year": 2017,
        "business": 800
    },
    {
        "id": 1600,
        "ca": 2427457,
        "margin": 535535,
        "ebitda": 857922,
        "loss": 3604422,
        "year": 2016,
        "business": 800
    },
    {
        "id": 1601,
        "ca": 608907,
        "margin": 232346,
        "ebitda": 182998,
        "loss": 4482450,
        "year": 2017,
        "business": 801
    },
    {
        "id": 1602,
        "ca": 2892392,
        "margin": 682223,
        "ebitda": 995255,
        "loss": 5096605,
        "year": 2016,
        "business": 801
    },
    {
        "id": 1603,
        "ca": 103806,
        "margin": 652161,
        "ebitda": 55773,
        "loss": 4610112,
        "year": 2017,
        "business": 802
    },
    {
        "id": 1604,
        "ca": 1749159,
        "margin": 92327,
        "ebitda": 771155,
        "loss": 9429054,
        "year": 2016,
        "business": 802
    },
    {
        "id": 1605,
        "ca": 496689,
        "margin": 907225,
        "ebitda": 847624,
        "loss": 2870199,
        "year": 2017,
        "business": 803
    },
    {
        "id": 1606,
        "ca": 135074,
        "margin": -6211,
        "ebitda": 630370,
        "loss": 3300640,
        "year": 2016,
        "business": 803
    },
    {
        "id": 1607,
        "ca": 3959745,
        "margin": 164875,
        "ebitda": 33559,
        "loss": 4860253,
        "year": 2017,
        "business": 804
    },
    {
        "id": 1608,
        "ca": 2616436,
        "margin": 703387,
        "ebitda": 773764,
        "loss": 4497309,
        "year": 2016,
        "business": 804
    },
    {
        "id": 1609,
        "ca": 3098364,
        "margin": 295222,
        "ebitda": 237628,
        "loss": 8824486,
        "year": 2017,
        "business": 805
    },
    {
        "id": 1610,
        "ca": 2836963,
        "margin": 347671,
        "ebitda": 301331,
        "loss": 25631,
        "year": 2016,
        "business": 805
    },
    {
        "id": 1611,
        "ca": 3607659,
        "margin": -189859,
        "ebitda": 466063,
        "loss": 4587411,
        "year": 2017,
        "business": 806
    },
    {
        "id": 1612,
        "ca": 395340,
        "margin": 179427,
        "ebitda": 571353,
        "loss": 8575357,
        "year": 2016,
        "business": 806
    },
    {
        "id": 1613,
        "ca": 379203,
        "margin": -93020,
        "ebitda": 259766,
        "loss": 8481496,
        "year": 2017,
        "business": 807
    },
    {
        "id": 1614,
        "ca": 144396,
        "margin": 517453,
        "ebitda": 591711,
        "loss": 6232523,
        "year": 2016,
        "business": 807
    },
    {
        "id": 1615,
        "ca": 3179508,
        "margin": 67641,
        "ebitda": 780727,
        "loss": 3722604,
        "year": 2017,
        "business": 808
    },
    {
        "id": 1616,
        "ca": 1744348,
        "margin": 396308,
        "ebitda": 542501,
        "loss": 5579533,
        "year": 2016,
        "business": 808
    },
    {
        "id": 1617,
        "ca": 1728921,
        "margin": 665662,
        "ebitda": 991743,
        "loss": 4038748,
        "year": 2017,
        "business": 809
    },
    {
        "id": 1618,
        "ca": 139687,
        "margin": 358646,
        "ebitda": 935035,
        "loss": 356369,
        "year": 2016,
        "business": 809
    },
    {
        "id": 1619,
        "ca": 2681633,
        "margin": 64633,
        "ebitda": 38873,
        "loss": 4026699,
        "year": 2017,
        "business": 810
    },
    {
        "id": 1620,
        "ca": 1357003,
        "margin": -117910,
        "ebitda": 866302,
        "loss": 8169181,
        "year": 2016,
        "business": 810
    },
    {
        "id": 1621,
        "ca": 697972,
        "margin": 109349,
        "ebitda": 748214,
        "loss": 7788287,
        "year": 2017,
        "business": 811
    },
    {
        "id": 1622,
        "ca": 3821833,
        "margin": -150587,
        "ebitda": 455744,
        "loss": 1774670,
        "year": 2016,
        "business": 811
    },
    {
        "id": 1623,
        "ca": 1736167,
        "margin": -71098,
        "ebitda": 369044,
        "loss": 7587644,
        "year": 2017,
        "business": 812
    },
    {
        "id": 1624,
        "ca": 2994791,
        "margin": -189455,
        "ebitda": 584789,
        "loss": 8253641,
        "year": 2016,
        "business": 812
    },
    {
        "id": 1625,
        "ca": 3866480,
        "margin": 846424,
        "ebitda": 723539,
        "loss": 7059958,
        "year": 2017,
        "business": 813
    },
    {
        "id": 1626,
        "ca": 2002973,
        "margin": 864708,
        "ebitda": 715081,
        "loss": 9769978,
        "year": 2016,
        "business": 813
    },
    {
        "id": 1627,
        "ca": 2168061,
        "margin": 283947,
        "ebitda": 882487,
        "loss": 1942313,
        "year": 2017,
        "business": 814
    },
    {
        "id": 1628,
        "ca": 645047,
        "margin": 134625,
        "ebitda": 974136,
        "loss": 7970717,
        "year": 2016,
        "business": 814
    },
    {
        "id": 1629,
        "ca": 3882691,
        "margin": 370353,
        "ebitda": 411563,
        "loss": 8937022,
        "year": 2017,
        "business": 815
    },
    {
        "id": 1630,
        "ca": 2517891,
        "margin": -120139,
        "ebitda": 172997,
        "loss": 9643858,
        "year": 2016,
        "business": 815
    },
    {
        "id": 1631,
        "ca": 1381725,
        "margin": 521890,
        "ebitda": 969346,
        "loss": 6200579,
        "year": 2017,
        "business": 816
    },
    {
        "id": 1632,
        "ca": 3989466,
        "margin": -132656,
        "ebitda": 339426,
        "loss": 1356962,
        "year": 2016,
        "business": 816
    },
    {
        "id": 1633,
        "ca": 1908431,
        "margin": 500963,
        "ebitda": 360880,
        "loss": 1000301,
        "year": 2017,
        "business": 817
    },
    {
        "id": 1634,
        "ca": 1617090,
        "margin": 723375,
        "ebitda": 966379,
        "loss": 7175687,
        "year": 2016,
        "business": 817
    },
    {
        "id": 1635,
        "ca": 3660703,
        "margin": 260358,
        "ebitda": 827985,
        "loss": 2216670,
        "year": 2017,
        "business": 818
    },
    {
        "id": 1636,
        "ca": 3391877,
        "margin": 715081,
        "ebitda": 526732,
        "loss": 5204173,
        "year": 2016,
        "business": 818
    },
    {
        "id": 1637,
        "ca": 2981598,
        "margin": 839640,
        "ebitda": 254466,
        "loss": 557923,
        "year": 2017,
        "business": 819
    },
    {
        "id": 1638,
        "ca": 2264669,
        "margin": 85859,
        "ebitda": 701532,
        "loss": 5889667,
        "year": 2016,
        "business": 819
    },
    {
        "id": 1639,
        "ca": 2515502,
        "margin": 383884,
        "ebitda": 314194,
        "loss": 1447954,
        "year": 2017,
        "business": 820
    },
    {
        "id": 1640,
        "ca": 1639067,
        "margin": 251545,
        "ebitda": 232780,
        "loss": 5703733,
        "year": 2016,
        "business": 820
    },
    {
        "id": 1641,
        "ca": 3990163,
        "margin": -23653,
        "ebitda": 618446,
        "loss": 7611738,
        "year": 2017,
        "business": 821
    },
    {
        "id": 1642,
        "ca": 3399377,
        "margin": -34562,
        "ebitda": 676135,
        "loss": 2625186,
        "year": 2016,
        "business": 821
    },
    {
        "id": 1643,
        "ca": 2624865,
        "margin": 21282,
        "ebitda": 252014,
        "loss": 2397148,
        "year": 2017,
        "business": 822
    },
    {
        "id": 1644,
        "ca": 2673540,
        "margin": 320968,
        "ebitda": 489969,
        "loss": 6933441,
        "year": 2016,
        "business": 822
    },
    {
        "id": 1645,
        "ca": 3946352,
        "margin": 299886,
        "ebitda": 161465,
        "loss": 6615188,
        "year": 2017,
        "business": 823
    },
    {
        "id": 1646,
        "ca": 3998834,
        "margin": 261503,
        "ebitda": 477645,
        "loss": 7523061,
        "year": 2016,
        "business": 823
    },
    {
        "id": 1647,
        "ca": 396543,
        "margin": -15795,
        "ebitda": 571537,
        "loss": 1491676,
        "year": 2017,
        "business": 824
    },
    {
        "id": 1648,
        "ca": 3585987,
        "margin": 69181,
        "ebitda": 724505,
        "loss": 355804,
        "year": 2016,
        "business": 824
    },
    {
        "id": 1649,
        "ca": 3514916,
        "margin": 850407,
        "ebitda": 528644,
        "loss": 6528495,
        "year": 2017,
        "business": 825
    },
    {
        "id": 1650,
        "ca": 674593,
        "margin": -65955,
        "ebitda": 452223,
        "loss": 3974195,
        "year": 2016,
        "business": 825
    },
    {
        "id": 1651,
        "ca": 3982779,
        "margin": 847980,
        "ebitda": 25457,
        "loss": 6382830,
        "year": 2017,
        "business": 826
    },
    {
        "id": 1652,
        "ca": 501454,
        "margin": 522579,
        "ebitda": 151048,
        "loss": 7167120,
        "year": 2016,
        "business": 826
    },
    {
        "id": 1653,
        "ca": 2899048,
        "margin": 446361,
        "ebitda": 780465,
        "loss": 6175065,
        "year": 2017,
        "business": 827
    },
    {
        "id": 1654,
        "ca": 3286750,
        "margin": 753934,
        "ebitda": 492488,
        "loss": 5716259,
        "year": 2016,
        "business": 827
    },
    {
        "id": 1655,
        "ca": 321130,
        "margin": -106862,
        "ebitda": 493927,
        "loss": 3219872,
        "year": 2017,
        "business": 828
    },
    {
        "id": 1656,
        "ca": 1468024,
        "margin": 877052,
        "ebitda": 201151,
        "loss": 6880040,
        "year": 2016,
        "business": 828
    },
    {
        "id": 1657,
        "ca": 1202306,
        "margin": 927668,
        "ebitda": 763436,
        "loss": 2307300,
        "year": 2017,
        "business": 829
    },
    {
        "id": 1658,
        "ca": 711411,
        "margin": 98405,
        "ebitda": 127258,
        "loss": 1351493,
        "year": 2016,
        "business": 829
    },
    {
        "id": 1659,
        "ca": 873010,
        "margin": 424430,
        "ebitda": 713124,
        "loss": 2935034,
        "year": 2017,
        "business": 830
    },
    {
        "id": 1660,
        "ca": 1516162,
        "margin": 942403,
        "ebitda": 558387,
        "loss": 5967964,
        "year": 2016,
        "business": 830
    },
    {
        "id": 1661,
        "ca": 670761,
        "margin": 826590,
        "ebitda": 731510,
        "loss": 3079216,
        "year": 2017,
        "business": 831
    },
    {
        "id": 1662,
        "ca": 2676855,
        "margin": 918362,
        "ebitda": 469186,
        "loss": 2171934,
        "year": 2016,
        "business": 831
    },
    {
        "id": 1663,
        "ca": 242467,
        "margin": -188020,
        "ebitda": 531483,
        "loss": 7973940,
        "year": 2017,
        "business": 832
    },
    {
        "id": 1664,
        "ca": 3858424,
        "margin": -196542,
        "ebitda": 679848,
        "loss": 7374394,
        "year": 2016,
        "business": 832
    },
    {
        "id": 1665,
        "ca": 3630977,
        "margin": -191217,
        "ebitda": 565955,
        "loss": 6361163,
        "year": 2017,
        "business": 833
    },
    {
        "id": 1666,
        "ca": 276602,
        "margin": 962997,
        "ebitda": 923379,
        "loss": 291587,
        "year": 2016,
        "business": 833
    },
    {
        "id": 1667,
        "ca": 3053219,
        "margin": 891154,
        "ebitda": 748467,
        "loss": 5033395,
        "year": 2017,
        "business": 834
    },
    {
        "id": 1668,
        "ca": 727813,
        "margin": 394241,
        "ebitda": 57145,
        "loss": 3649595,
        "year": 2016,
        "business": 834
    },
    {
        "id": 1669,
        "ca": 1915743,
        "margin": 579738,
        "ebitda": 671571,
        "loss": 2146574,
        "year": 2017,
        "business": 835
    },
    {
        "id": 1670,
        "ca": 1765238,
        "margin": 725611,
        "ebitda": 183725,
        "loss": 2018896,
        "year": 2016,
        "business": 835
    },
    {
        "id": 1671,
        "ca": 1307856,
        "margin": -19394,
        "ebitda": 464868,
        "loss": 7453373,
        "year": 2017,
        "business": 836
    },
    {
        "id": 1672,
        "ca": 3784995,
        "margin": 117975,
        "ebitda": 348996,
        "loss": 9750533,
        "year": 2016,
        "business": 836
    },
    {
        "id": 1673,
        "ca": 579640,
        "margin": 708604,
        "ebitda": 476367,
        "loss": 7985293,
        "year": 2017,
        "business": 837
    },
    {
        "id": 1674,
        "ca": 401500,
        "margin": 901486,
        "ebitda": 750040,
        "loss": 9512030,
        "year": 2016,
        "business": 837
    },
    {
        "id": 1675,
        "ca": 675090,
        "margin": 837643,
        "ebitda": 234174,
        "loss": 8744069,
        "year": 2017,
        "business": 838
    },
    {
        "id": 1676,
        "ca": 3999870,
        "margin": 183000,
        "ebitda": 715121,
        "loss": 3817111,
        "year": 2016,
        "business": 838
    },
    {
        "id": 1677,
        "ca": 1357050,
        "margin": 930392,
        "ebitda": 114816,
        "loss": 206483,
        "year": 2017,
        "business": 839
    },
    {
        "id": 1678,
        "ca": 1284602,
        "margin": 298382,
        "ebitda": 344379,
        "loss": 1354516,
        "year": 2016,
        "business": 839
    },
    {
        "id": 1679,
        "ca": 437404,
        "margin": 443309,
        "ebitda": 924393,
        "loss": 8344342,
        "year": 2017,
        "business": 840
    },
    {
        "id": 1680,
        "ca": 2295941,
        "margin": 262959,
        "ebitda": 398360,
        "loss": 4731833,
        "year": 2016,
        "business": 840
    },
    {
        "id": 1681,
        "ca": 1722916,
        "margin": 758629,
        "ebitda": 738064,
        "loss": 8203486,
        "year": 2017,
        "business": 841
    },
    {
        "id": 1682,
        "ca": 3022820,
        "margin": 68719,
        "ebitda": 702919,
        "loss": 3778150,
        "year": 2016,
        "business": 841
    },
    {
        "id": 1683,
        "ca": 3939948,
        "margin": 802846,
        "ebitda": 663635,
        "loss": 5542135,
        "year": 2017,
        "business": 842
    },
    {
        "id": 1684,
        "ca": 276559,
        "margin": 139817,
        "ebitda": 493621,
        "loss": 7195203,
        "year": 2016,
        "business": 842
    },
    {
        "id": 1685,
        "ca": 3239235,
        "margin": 340217,
        "ebitda": 449758,
        "loss": 1334666,
        "year": 2017,
        "business": 843
    },
    {
        "id": 1686,
        "ca": 2412749,
        "margin": 430859,
        "ebitda": 166502,
        "loss": 7762703,
        "year": 2016,
        "business": 843
    },
    {
        "id": 1687,
        "ca": 1656238,
        "margin": 815153,
        "ebitda": 17020,
        "loss": 657973,
        "year": 2017,
        "business": 844
    },
    {
        "id": 1688,
        "ca": 286407,
        "margin": 81459,
        "ebitda": 751775,
        "loss": 1171673,
        "year": 2016,
        "business": 844
    },
    {
        "id": 1689,
        "ca": 1623267,
        "margin": 390850,
        "ebitda": 160709,
        "loss": 6228102,
        "year": 2017,
        "business": 845
    },
    {
        "id": 1690,
        "ca": 1244864,
        "margin": 468907,
        "ebitda": 513580,
        "loss": 406566,
        "year": 2016,
        "business": 845
    },
    {
        "id": 1691,
        "ca": 1302638,
        "margin": 127698,
        "ebitda": 901385,
        "loss": 1035350,
        "year": 2017,
        "business": 846
    },
    {
        "id": 1692,
        "ca": 3024172,
        "margin": 594634,
        "ebitda": 817461,
        "loss": 6847908,
        "year": 2016,
        "business": 846
    },
    {
        "id": 1693,
        "ca": 2632843,
        "margin": 275924,
        "ebitda": 284692,
        "loss": 3566120,
        "year": 2017,
        "business": 847
    },
    {
        "id": 1694,
        "ca": 3612783,
        "margin": 145292,
        "ebitda": 942467,
        "loss": 6543481,
        "year": 2016,
        "business": 847
    },
    {
        "id": 1695,
        "ca": 1521736,
        "margin": -108388,
        "ebitda": 254616,
        "loss": 2442956,
        "year": 2017,
        "business": 848
    },
    {
        "id": 1696,
        "ca": 3500336,
        "margin": -17690,
        "ebitda": 817347,
        "loss": 8840333,
        "year": 2016,
        "business": 848
    },
    {
        "id": 1697,
        "ca": 1836167,
        "margin": 702191,
        "ebitda": 839661,
        "loss": 5922025,
        "year": 2017,
        "business": 849
    },
    {
        "id": 1698,
        "ca": 3927945,
        "margin": 831558,
        "ebitda": 339263,
        "loss": 7914051,
        "year": 2016,
        "business": 849
    },
    {
        "id": 1699,
        "ca": 2042075,
        "margin": 941932,
        "ebitda": 39499,
        "loss": 8186728,
        "year": 2017,
        "business": 850
    },
    {
        "id": 1700,
        "ca": 3285163,
        "margin": -117789,
        "ebitda": 504976,
        "loss": 1588712,
        "year": 2016,
        "business": 850
    },
    {
        "id": 1701,
        "ca": 1392806,
        "margin": 407754,
        "ebitda": 888531,
        "loss": 8319998,
        "year": 2017,
        "business": 851
    },
    {
        "id": 1702,
        "ca": 1423185,
        "margin": 656415,
        "ebitda": 354677,
        "loss": 2368935,
        "year": 2016,
        "business": 851
    },
    {
        "id": 1703,
        "ca": 2606836,
        "margin": 804607,
        "ebitda": 14325,
        "loss": 2896996,
        "year": 2017,
        "business": 852
    },
    {
        "id": 1704,
        "ca": 516903,
        "margin": 609870,
        "ebitda": 798215,
        "loss": 7703626,
        "year": 2016,
        "business": 852
    },
    {
        "id": 1705,
        "ca": 3480353,
        "margin": 216290,
        "ebitda": 441732,
        "loss": 462267,
        "year": 2017,
        "business": 853
    },
    {
        "id": 1706,
        "ca": 1177842,
        "margin": 620215,
        "ebitda": 860501,
        "loss": 6589168,
        "year": 2016,
        "business": 853
    },
    {
        "id": 1707,
        "ca": 861557,
        "margin": 386117,
        "ebitda": 938199,
        "loss": 8206339,
        "year": 2017,
        "business": 854
    },
    {
        "id": 1708,
        "ca": 2943536,
        "margin": 852707,
        "ebitda": 94471,
        "loss": 1840329,
        "year": 2016,
        "business": 854
    },
    {
        "id": 1709,
        "ca": 1846841,
        "margin": 96976,
        "ebitda": 425424,
        "loss": 25493,
        "year": 2017,
        "business": 855
    },
    {
        "id": 1710,
        "ca": 2052522,
        "margin": 609255,
        "ebitda": 236691,
        "loss": 5395446,
        "year": 2016,
        "business": 855
    },
    {
        "id": 1711,
        "ca": 2915358,
        "margin": 901951,
        "ebitda": 543322,
        "loss": 683229,
        "year": 2017,
        "business": 856
    },
    {
        "id": 1712,
        "ca": 1318119,
        "margin": 926649,
        "ebitda": 485151,
        "loss": 8753427,
        "year": 2016,
        "business": 856
    },
    {
        "id": 1713,
        "ca": 3531451,
        "margin": -7532,
        "ebitda": 190463,
        "loss": 9727952,
        "year": 2017,
        "business": 857
    },
    {
        "id": 1714,
        "ca": 152385,
        "margin": 626370,
        "ebitda": 665984,
        "loss": 1301506,
        "year": 2016,
        "business": 857
    },
    {
        "id": 1715,
        "ca": 1863195,
        "margin": 885156,
        "ebitda": 691132,
        "loss": 3331463,
        "year": 2017,
        "business": 858
    },
    {
        "id": 1716,
        "ca": 1492494,
        "margin": 451974,
        "ebitda": 470527,
        "loss": 6116639,
        "year": 2016,
        "business": 858
    },
    {
        "id": 1717,
        "ca": 1325093,
        "margin": 416334,
        "ebitda": 810310,
        "loss": 2295917,
        "year": 2017,
        "business": 859
    },
    {
        "id": 1718,
        "ca": 1468293,
        "margin": 47641,
        "ebitda": 685557,
        "loss": 7057002,
        "year": 2016,
        "business": 859
    },
    {
        "id": 1719,
        "ca": 391860,
        "margin": 418189,
        "ebitda": 716083,
        "loss": 8376039,
        "year": 2017,
        "business": 860
    },
    {
        "id": 1720,
        "ca": 1101433,
        "margin": 495505,
        "ebitda": 391024,
        "loss": 7516228,
        "year": 2016,
        "business": 860
    },
    {
        "id": 1721,
        "ca": 1770926,
        "margin": 725459,
        "ebitda": 422508,
        "loss": 696824,
        "year": 2017,
        "business": 861
    },
    {
        "id": 1722,
        "ca": 844272,
        "margin": -62922,
        "ebitda": 807620,
        "loss": 1381217,
        "year": 2016,
        "business": 861
    },
    {
        "id": 1723,
        "ca": 1950330,
        "margin": 971754,
        "ebitda": 477053,
        "loss": 9514153,
        "year": 2017,
        "business": 862
    },
    {
        "id": 1724,
        "ca": 747090,
        "margin": -45669,
        "ebitda": 488641,
        "loss": 2271665,
        "year": 2016,
        "business": 862
    },
    {
        "id": 1725,
        "ca": 3537514,
        "margin": -73399,
        "ebitda": 964482,
        "loss": 7441441,
        "year": 2017,
        "business": 863
    },
    {
        "id": 1726,
        "ca": 1787038,
        "margin": -57380,
        "ebitda": 849512,
        "loss": 2623796,
        "year": 2016,
        "business": 863
    },
    {
        "id": 1727,
        "ca": 1169472,
        "margin": 354993,
        "ebitda": 567329,
        "loss": 1369101,
        "year": 2017,
        "business": 864
    },
    {
        "id": 1728,
        "ca": 3653740,
        "margin": 860240,
        "ebitda": 611312,
        "loss": 1081867,
        "year": 2016,
        "business": 864
    },
    {
        "id": 1729,
        "ca": 2247463,
        "margin": 401415,
        "ebitda": 949482,
        "loss": 4040262,
        "year": 2017,
        "business": 865
    },
    {
        "id": 1730,
        "ca": 1614202,
        "margin": 435597,
        "ebitda": 899366,
        "loss": 8403583,
        "year": 2016,
        "business": 865
    },
    {
        "id": 1731,
        "ca": 1464401,
        "margin": 140222,
        "ebitda": 543863,
        "loss": 3046940,
        "year": 2017,
        "business": 866
    },
    {
        "id": 1732,
        "ca": 3192296,
        "margin": 842618,
        "ebitda": 182710,
        "loss": 5357381,
        "year": 2016,
        "business": 866
    },
    {
        "id": 1733,
        "ca": 3031637,
        "margin": 679669,
        "ebitda": 76621,
        "loss": 9745843,
        "year": 2017,
        "business": 867
    },
    {
        "id": 1734,
        "ca": 1041670,
        "margin": 492196,
        "ebitda": 641042,
        "loss": 7889625,
        "year": 2016,
        "business": 867
    },
    {
        "id": 1735,
        "ca": 3665813,
        "margin": 764550,
        "ebitda": 643073,
        "loss": 9904839,
        "year": 2017,
        "business": 868
    },
    {
        "id": 1736,
        "ca": 1818052,
        "margin": 787374,
        "ebitda": 275126,
        "loss": 4001065,
        "year": 2016,
        "business": 868
    },
    {
        "id": 1737,
        "ca": 772162,
        "margin": 878637,
        "ebitda": 754484,
        "loss": 2048022,
        "year": 2017,
        "business": 869
    },
    {
        "id": 1738,
        "ca": 545552,
        "margin": -69391,
        "ebitda": 830605,
        "loss": 3054587,
        "year": 2016,
        "business": 869
    },
    {
        "id": 1739,
        "ca": 929599,
        "margin": 435326,
        "ebitda": 671472,
        "loss": 7712503,
        "year": 2017,
        "business": 870
    },
    {
        "id": 1740,
        "ca": 1076023,
        "margin": 595589,
        "ebitda": 950398,
        "loss": 5022871,
        "year": 2016,
        "business": 870
    },
    {
        "id": 1741,
        "ca": 534446,
        "margin": 236496,
        "ebitda": 262407,
        "loss": 1884251,
        "year": 2017,
        "business": 871
    },
    {
        "id": 1742,
        "ca": 1053849,
        "margin": 905825,
        "ebitda": 296672,
        "loss": 6330120,
        "year": 2016,
        "business": 871
    },
    {
        "id": 1743,
        "ca": 1905560,
        "margin": 287037,
        "ebitda": 432415,
        "loss": 9494153,
        "year": 2017,
        "business": 872
    },
    {
        "id": 1744,
        "ca": 1237217,
        "margin": 549518,
        "ebitda": 22570,
        "loss": 7720823,
        "year": 2016,
        "business": 872
    },
    {
        "id": 1745,
        "ca": 2822936,
        "margin": 737245,
        "ebitda": 502023,
        "loss": 822282,
        "year": 2017,
        "business": 873
    },
    {
        "id": 1746,
        "ca": 1528294,
        "margin": 379394,
        "ebitda": 250801,
        "loss": 5083643,
        "year": 2016,
        "business": 873
    },
    {
        "id": 1747,
        "ca": 2536749,
        "margin": 965332,
        "ebitda": 368262,
        "loss": 1201000,
        "year": 2017,
        "business": 874
    },
    {
        "id": 1748,
        "ca": 2702233,
        "margin": -42416,
        "ebitda": 209342,
        "loss": 231725,
        "year": 2016,
        "business": 874
    },
    {
        "id": 1749,
        "ca": 3584565,
        "margin": 631302,
        "ebitda": 216935,
        "loss": 8712213,
        "year": 2017,
        "business": 875
    },
    {
        "id": 1750,
        "ca": 2961029,
        "margin": 358082,
        "ebitda": 644271,
        "loss": 9053011,
        "year": 2016,
        "business": 875
    },
    {
        "id": 1751,
        "ca": 397984,
        "margin": 309572,
        "ebitda": 196244,
        "loss": 6514652,
        "year": 2017,
        "business": 876
    },
    {
        "id": 1752,
        "ca": 3515292,
        "margin": 171319,
        "ebitda": 220895,
        "loss": 5052465,
        "year": 2016,
        "business": 876
    },
    {
        "id": 1753,
        "ca": 2834046,
        "margin": 951329,
        "ebitda": 959573,
        "loss": 1194389,
        "year": 2017,
        "business": 877
    },
    {
        "id": 1754,
        "ca": 2660639,
        "margin": 848997,
        "ebitda": 872268,
        "loss": 578344,
        "year": 2016,
        "business": 877
    },
    {
        "id": 1755,
        "ca": 2089413,
        "margin": 484214,
        "ebitda": 975320,
        "loss": 728273,
        "year": 2017,
        "business": 878
    },
    {
        "id": 1756,
        "ca": 1092462,
        "margin": 625754,
        "ebitda": 829443,
        "loss": 3627836,
        "year": 2016,
        "business": 878
    },
    {
        "id": 1757,
        "ca": 346001,
        "margin": 50994,
        "ebitda": 423793,
        "loss": 1138923,
        "year": 2017,
        "business": 879
    },
    {
        "id": 1758,
        "ca": 2143948,
        "margin": 515651,
        "ebitda": 416180,
        "loss": 7169085,
        "year": 2016,
        "business": 879
    },
    {
        "id": 1759,
        "ca": 604883,
        "margin": 822012,
        "ebitda": 93405,
        "loss": 3626802,
        "year": 2017,
        "business": 880
    },
    {
        "id": 1760,
        "ca": 222653,
        "margin": -135032,
        "ebitda": 550778,
        "loss": 5815190,
        "year": 2016,
        "business": 880
    },
    {
        "id": 1761,
        "ca": 1020933,
        "margin": 704919,
        "ebitda": 9280,
        "loss": 5144338,
        "year": 2017,
        "business": 881
    },
    {
        "id": 1762,
        "ca": 3020560,
        "margin": 548119,
        "ebitda": 386384,
        "loss": 4871927,
        "year": 2016,
        "business": 881
    },
    {
        "id": 1763,
        "ca": 307764,
        "margin": 153983,
        "ebitda": 108281,
        "loss": 2580980,
        "year": 2017,
        "business": 882
    },
    {
        "id": 1764,
        "ca": 1135979,
        "margin": 914245,
        "ebitda": 77906,
        "loss": 6955952,
        "year": 2016,
        "business": 882
    },
    {
        "id": 1765,
        "ca": 1194003,
        "margin": 506263,
        "ebitda": 224082,
        "loss": 1934212,
        "year": 2017,
        "business": 883
    },
    {
        "id": 1766,
        "ca": 438045,
        "margin": 935630,
        "ebitda": 190266,
        "loss": 4059307,
        "year": 2016,
        "business": 883
    },
    {
        "id": 1767,
        "ca": 1572233,
        "margin": 43965,
        "ebitda": 314350,
        "loss": 6016223,
        "year": 2017,
        "business": 884
    },
    {
        "id": 1768,
        "ca": 1617028,
        "margin": 148517,
        "ebitda": 864839,
        "loss": 9180946,
        "year": 2016,
        "business": 884
    },
    {
        "id": 1769,
        "ca": 3882042,
        "margin": 227547,
        "ebitda": 730703,
        "loss": 748084,
        "year": 2017,
        "business": 885
    },
    {
        "id": 1770,
        "ca": 1323002,
        "margin": 277049,
        "ebitda": 705669,
        "loss": 4106329,
        "year": 2016,
        "business": 885
    },
    {
        "id": 1771,
        "ca": 3333515,
        "margin": 752911,
        "ebitda": 863272,
        "loss": 140940,
        "year": 2017,
        "business": 886
    },
    {
        "id": 1772,
        "ca": 1913659,
        "margin": 452521,
        "ebitda": 275458,
        "loss": 311085,
        "year": 2016,
        "business": 886
    },
    {
        "id": 1773,
        "ca": 1055674,
        "margin": 472906,
        "ebitda": 728127,
        "loss": 3011701,
        "year": 2017,
        "business": 887
    },
    {
        "id": 1774,
        "ca": 3505870,
        "margin": -75301,
        "ebitda": 370667,
        "loss": 1684556,
        "year": 2016,
        "business": 887
    },
    {
        "id": 1775,
        "ca": 3712247,
        "margin": 689224,
        "ebitda": 944551,
        "loss": 684306,
        "year": 2017,
        "business": 888
    },
    {
        "id": 1776,
        "ca": 565545,
        "margin": 979600,
        "ebitda": 247048,
        "loss": 3961991,
        "year": 2016,
        "business": 888
    },
    {
        "id": 1777,
        "ca": 2698414,
        "margin": 294022,
        "ebitda": 512183,
        "loss": 9626020,
        "year": 2017,
        "business": 889
    },
    {
        "id": 1778,
        "ca": 724785,
        "margin": -37602,
        "ebitda": 214519,
        "loss": 7284805,
        "year": 2016,
        "business": 889
    },
    {
        "id": 1779,
        "ca": 2860170,
        "margin": 852080,
        "ebitda": 263823,
        "loss": 1948319,
        "year": 2017,
        "business": 890
    },
    {
        "id": 1780,
        "ca": 2156461,
        "margin": -184566,
        "ebitda": 418592,
        "loss": 1231751,
        "year": 2016,
        "business": 890
    },
    {
        "id": 1781,
        "ca": 3762860,
        "margin": 951288,
        "ebitda": 978871,
        "loss": 2502425,
        "year": 2017,
        "business": 891
    },
    {
        "id": 1782,
        "ca": 2174739,
        "margin": 239603,
        "ebitda": 91698,
        "loss": 3834844,
        "year": 2016,
        "business": 891
    },
    {
        "id": 1783,
        "ca": 3830780,
        "margin": 291785,
        "ebitda": 38151,
        "loss": 6365551,
        "year": 2017,
        "business": 892
    },
    {
        "id": 1784,
        "ca": 1621430,
        "margin": 146345,
        "ebitda": 124977,
        "loss": 7508553,
        "year": 2016,
        "business": 892
    },
    {
        "id": 1785,
        "ca": 1400867,
        "margin": 472482,
        "ebitda": 967326,
        "loss": 3731128,
        "year": 2017,
        "business": 893
    },
    {
        "id": 1786,
        "ca": 1995657,
        "margin": 748942,
        "ebitda": 614653,
        "loss": 6671311,
        "year": 2016,
        "business": 893
    },
    {
        "id": 1787,
        "ca": 2997645,
        "margin": 901958,
        "ebitda": 785681,
        "loss": 1303785,
        "year": 2017,
        "business": 894
    },
    {
        "id": 1788,
        "ca": 299696,
        "margin": 997820,
        "ebitda": 979764,
        "loss": 895819,
        "year": 2016,
        "business": 894
    },
    {
        "id": 1789,
        "ca": 1525869,
        "margin": -131775,
        "ebitda": 311759,
        "loss": 2312255,
        "year": 2017,
        "business": 895
    },
    {
        "id": 1790,
        "ca": 3758644,
        "margin": 988659,
        "ebitda": 365305,
        "loss": 5456939,
        "year": 2016,
        "business": 895
    },
    {
        "id": 1791,
        "ca": 3768703,
        "margin": 968893,
        "ebitda": 161094,
        "loss": 1440412,
        "year": 2017,
        "business": 896
    },
    {
        "id": 1792,
        "ca": 1973250,
        "margin": 683987,
        "ebitda": 840989,
        "loss": 7792481,
        "year": 2016,
        "business": 896
    },
    {
        "id": 1793,
        "ca": 1918712,
        "margin": 208297,
        "ebitda": 109242,
        "loss": 2496800,
        "year": 2017,
        "business": 897
    },
    {
        "id": 1794,
        "ca": 1891958,
        "margin": 993650,
        "ebitda": 271152,
        "loss": 2251648,
        "year": 2016,
        "business": 897
    },
    {
        "id": 1795,
        "ca": 327108,
        "margin": 574817,
        "ebitda": 644454,
        "loss": 1469710,
        "year": 2017,
        "business": 898
    },
    {
        "id": 1796,
        "ca": 864623,
        "margin": 730868,
        "ebitda": 71430,
        "loss": 8920097,
        "year": 2016,
        "business": 898
    },
    {
        "id": 1797,
        "ca": 3348358,
        "margin": 209455,
        "ebitda": 768052,
        "loss": 4831940,
        "year": 2017,
        "business": 899
    },
    {
        "id": 1798,
        "ca": 378035,
        "margin": -144425,
        "ebitda": 879574,
        "loss": 2893750,
        "year": 2016,
        "business": 899
    },
    {
        "id": 1799,
        "ca": 416852,
        "margin": 777518,
        "ebitda": 693690,
        "loss": 4558030,
        "year": 2017,
        "business": 900
    },
    {
        "id": 1800,
        "ca": 154265,
        "margin": -155260,
        "ebitda": 873014,
        "loss": 391026,
        "year": 2016,
        "business": 900
    },
    {
        "id": 1801,
        "ca": 1814038,
        "margin": 22943,
        "ebitda": 764251,
        "loss": 4910711,
        "year": 2017,
        "business": 901
    },
    {
        "id": 1802,
        "ca": 1467097,
        "margin": 313290,
        "ebitda": 627746,
        "loss": 1989470,
        "year": 2016,
        "business": 901
    },
    {
        "id": 1803,
        "ca": 3084902,
        "margin": -111002,
        "ebitda": 318636,
        "loss": 6437713,
        "year": 2017,
        "business": 902
    },
    {
        "id": 1804,
        "ca": 1487036,
        "margin": -23511,
        "ebitda": 297467,
        "loss": 8915320,
        "year": 2016,
        "business": 902
    },
    {
        "id": 1805,
        "ca": 922790,
        "margin": 629028,
        "ebitda": 924228,
        "loss": 4611051,
        "year": 2017,
        "business": 903
    },
    {
        "id": 1806,
        "ca": 143812,
        "margin": 191264,
        "ebitda": 555470,
        "loss": 7666400,
        "year": 2016,
        "business": 903
    },
    {
        "id": 1807,
        "ca": 2527824,
        "margin": 669466,
        "ebitda": 215899,
        "loss": 2881112,
        "year": 2017,
        "business": 904
    },
    {
        "id": 1808,
        "ca": 3283470,
        "margin": 272280,
        "ebitda": 901020,
        "loss": 2371452,
        "year": 2016,
        "business": 904
    },
    {
        "id": 1809,
        "ca": 3566116,
        "margin": 841355,
        "ebitda": 177259,
        "loss": 4616427,
        "year": 2017,
        "business": 905
    },
    {
        "id": 1810,
        "ca": 2522467,
        "margin": -17537,
        "ebitda": 186826,
        "loss": 7537421,
        "year": 2016,
        "business": 905
    },
    {
        "id": 1811,
        "ca": 2924230,
        "margin": 932363,
        "ebitda": 413216,
        "loss": 3110712,
        "year": 2017,
        "business": 906
    },
    {
        "id": 1812,
        "ca": 2855686,
        "margin": 785881,
        "ebitda": 739501,
        "loss": 1027313,
        "year": 2016,
        "business": 906
    },
    {
        "id": 1813,
        "ca": 3813603,
        "margin": 578564,
        "ebitda": 261361,
        "loss": 5073025,
        "year": 2017,
        "business": 907
    },
    {
        "id": 1814,
        "ca": 3424670,
        "margin": 765757,
        "ebitda": 835577,
        "loss": 6248108,
        "year": 2016,
        "business": 907
    },
    {
        "id": 1815,
        "ca": 3375462,
        "margin": 909693,
        "ebitda": 150159,
        "loss": 1727,
        "year": 2017,
        "business": 908
    },
    {
        "id": 1816,
        "ca": 3928748,
        "margin": 613973,
        "ebitda": 837251,
        "loss": 2922583,
        "year": 2016,
        "business": 908
    },
    {
        "id": 1817,
        "ca": 2924633,
        "margin": 854336,
        "ebitda": 95194,
        "loss": 3489284,
        "year": 2017,
        "business": 909
    },
    {
        "id": 1818,
        "ca": 2730637,
        "margin": 262515,
        "ebitda": 9135,
        "loss": 5751480,
        "year": 2016,
        "business": 909
    },
    {
        "id": 1819,
        "ca": 939500,
        "margin": 108657,
        "ebitda": 901864,
        "loss": 4930016,
        "year": 2017,
        "business": 910
    },
    {
        "id": 1820,
        "ca": 262556,
        "margin": 870447,
        "ebitda": 889054,
        "loss": 8490563,
        "year": 2016,
        "business": 910
    },
    {
        "id": 1821,
        "ca": 1401002,
        "margin": 680397,
        "ebitda": 447359,
        "loss": 9184928,
        "year": 2017,
        "business": 911
    },
    {
        "id": 1822,
        "ca": 1561751,
        "margin": 743108,
        "ebitda": 307893,
        "loss": 4325104,
        "year": 2016,
        "business": 911
    },
    {
        "id": 1823,
        "ca": 3751315,
        "margin": -33992,
        "ebitda": 376084,
        "loss": 2538808,
        "year": 2017,
        "business": 912
    },
    {
        "id": 1824,
        "ca": 816190,
        "margin": 34186,
        "ebitda": 865129,
        "loss": 7746295,
        "year": 2016,
        "business": 912
    },
    {
        "id": 1825,
        "ca": 389859,
        "margin": 767903,
        "ebitda": 565840,
        "loss": 4942546,
        "year": 2017,
        "business": 913
    },
    {
        "id": 1826,
        "ca": 3322262,
        "margin": 490616,
        "ebitda": 983418,
        "loss": 2900475,
        "year": 2016,
        "business": 913
    },
    {
        "id": 1827,
        "ca": 3008708,
        "margin": 145170,
        "ebitda": 993767,
        "loss": 7886365,
        "year": 2017,
        "business": 914
    },
    {
        "id": 1828,
        "ca": 1891977,
        "margin": 791302,
        "ebitda": 825442,
        "loss": 2197021,
        "year": 2016,
        "business": 914
    },
    {
        "id": 1829,
        "ca": 3436399,
        "margin": 697795,
        "ebitda": 453017,
        "loss": 6758421,
        "year": 2017,
        "business": 915
    },
    {
        "id": 1830,
        "ca": 2777766,
        "margin": 233259,
        "ebitda": 454646,
        "loss": 4859546,
        "year": 2016,
        "business": 915
    },
    {
        "id": 1831,
        "ca": 561816,
        "margin": 122652,
        "ebitda": 766568,
        "loss": 6213834,
        "year": 2017,
        "business": 916
    },
    {
        "id": 1832,
        "ca": 1123653,
        "margin": 703877,
        "ebitda": 732949,
        "loss": 8712235,
        "year": 2016,
        "business": 916
    },
    {
        "id": 1833,
        "ca": 3528061,
        "margin": -96959,
        "ebitda": 362847,
        "loss": 5667564,
        "year": 2017,
        "business": 917
    },
    {
        "id": 1834,
        "ca": 2033786,
        "margin": -148002,
        "ebitda": 537580,
        "loss": 8289176,
        "year": 2016,
        "business": 917
    },
    {
        "id": 1835,
        "ca": 2827084,
        "margin": 311461,
        "ebitda": 953549,
        "loss": 5004704,
        "year": 2017,
        "business": 918
    },
    {
        "id": 1836,
        "ca": 2907853,
        "margin": -85606,
        "ebitda": 835974,
        "loss": 5771536,
        "year": 2016,
        "business": 918
    },
    {
        "id": 1837,
        "ca": 3415351,
        "margin": -62798,
        "ebitda": 680366,
        "loss": 9914651,
        "year": 2017,
        "business": 919
    },
    {
        "id": 1838,
        "ca": 2577367,
        "margin": -127795,
        "ebitda": 789431,
        "loss": 9600878,
        "year": 2016,
        "business": 919
    },
    {
        "id": 1839,
        "ca": 2283949,
        "margin": 211942,
        "ebitda": 615754,
        "loss": 4408371,
        "year": 2017,
        "business": 920
    },
    {
        "id": 1840,
        "ca": 3633153,
        "margin": 364836,
        "ebitda": 836880,
        "loss": 9490839,
        "year": 2016,
        "business": 920
    },
    {
        "id": 1841,
        "ca": 3200485,
        "margin": 246613,
        "ebitda": 701075,
        "loss": 4285701,
        "year": 2017,
        "business": 921
    },
    {
        "id": 1842,
        "ca": 2376895,
        "margin": 960599,
        "ebitda": 685330,
        "loss": 570540,
        "year": 2016,
        "business": 921
    },
    {
        "id": 1843,
        "ca": 1813138,
        "margin": 246825,
        "ebitda": 913583,
        "loss": 5171162,
        "year": 2017,
        "business": 922
    },
    {
        "id": 1844,
        "ca": 1567335,
        "margin": -61943,
        "ebitda": 657166,
        "loss": 5650051,
        "year": 2016,
        "business": 922
    },
    {
        "id": 1845,
        "ca": 3666078,
        "margin": 231198,
        "ebitda": 11414,
        "loss": 3863213,
        "year": 2017,
        "business": 923
    },
    {
        "id": 1846,
        "ca": 1519251,
        "margin": 819246,
        "ebitda": 85641,
        "loss": 41538,
        "year": 2016,
        "business": 923
    },
    {
        "id": 1847,
        "ca": 3000372,
        "margin": 888426,
        "ebitda": 34276,
        "loss": 8492496,
        "year": 2017,
        "business": 924
    },
    {
        "id": 1848,
        "ca": 3340910,
        "margin": 981296,
        "ebitda": 949939,
        "loss": 9620390,
        "year": 2016,
        "business": 924
    },
    {
        "id": 1849,
        "ca": 3742337,
        "margin": 54508,
        "ebitda": 178630,
        "loss": 566562,
        "year": 2017,
        "business": 925
    },
    {
        "id": 1850,
        "ca": 1430653,
        "margin": 784142,
        "ebitda": 755349,
        "loss": 6489537,
        "year": 2016,
        "business": 925
    },
    {
        "id": 1851,
        "ca": 3866784,
        "margin": 408461,
        "ebitda": 691124,
        "loss": 8994536,
        "year": 2017,
        "business": 926
    },
    {
        "id": 1852,
        "ca": 2073279,
        "margin": 753672,
        "ebitda": 455332,
        "loss": 1426681,
        "year": 2016,
        "business": 926
    },
    {
        "id": 1853,
        "ca": 1548788,
        "margin": 799184,
        "ebitda": 595013,
        "loss": 8922685,
        "year": 2017,
        "business": 927
    },
    {
        "id": 1854,
        "ca": 2489641,
        "margin": 929108,
        "ebitda": 802323,
        "loss": 1676400,
        "year": 2016,
        "business": 927
    },
    {
        "id": 1855,
        "ca": 1839504,
        "margin": 722840,
        "ebitda": 653032,
        "loss": 4524202,
        "year": 2017,
        "business": 928
    },
    {
        "id": 1856,
        "ca": 2943791,
        "margin": 873032,
        "ebitda": 406039,
        "loss": 9625198,
        "year": 2016,
        "business": 928
    },
    {
        "id": 1857,
        "ca": 2070655,
        "margin": 410447,
        "ebitda": 619161,
        "loss": 6694192,
        "year": 2017,
        "business": 929
    },
    {
        "id": 1858,
        "ca": 2309658,
        "margin": 722691,
        "ebitda": 708220,
        "loss": 6204578,
        "year": 2016,
        "business": 929
    },
    {
        "id": 1859,
        "ca": 1845240,
        "margin": -24334,
        "ebitda": 48102,
        "loss": 2602406,
        "year": 2017,
        "business": 930
    },
    {
        "id": 1860,
        "ca": 859136,
        "margin": 54222,
        "ebitda": 75909,
        "loss": 8067701,
        "year": 2016,
        "business": 930
    },
    {
        "id": 1861,
        "ca": 2256806,
        "margin": 755948,
        "ebitda": 747333,
        "loss": 3703339,
        "year": 2017,
        "business": 931
    },
    {
        "id": 1862,
        "ca": 3521637,
        "margin": -57333,
        "ebitda": 41601,
        "loss": 5714553,
        "year": 2016,
        "business": 931
    },
    {
        "id": 1863,
        "ca": 2815727,
        "margin": -195519,
        "ebitda": 719841,
        "loss": 901698,
        "year": 2017,
        "business": 932
    },
    {
        "id": 1864,
        "ca": 2015840,
        "margin": 138241,
        "ebitda": 598147,
        "loss": 4198905,
        "year": 2016,
        "business": 932
    },
    {
        "id": 1865,
        "ca": 3705522,
        "margin": 996756,
        "ebitda": 602658,
        "loss": 7970005,
        "year": 2017,
        "business": 933
    },
    {
        "id": 1866,
        "ca": 2666854,
        "margin": -195357,
        "ebitda": 949062,
        "loss": 3130848,
        "year": 2016,
        "business": 933
    },
    {
        "id": 1867,
        "ca": 3603883,
        "margin": 774461,
        "ebitda": 636122,
        "loss": 4943918,
        "year": 2017,
        "business": 934
    },
    {
        "id": 1868,
        "ca": 3814851,
        "margin": 663838,
        "ebitda": 577149,
        "loss": 2527285,
        "year": 2016,
        "business": 934
    },
    {
        "id": 1869,
        "ca": 1629966,
        "margin": 746069,
        "ebitda": 850600,
        "loss": 2709161,
        "year": 2017,
        "business": 935
    },
    {
        "id": 1870,
        "ca": 2846044,
        "margin": 611249,
        "ebitda": 460149,
        "loss": 5250808,
        "year": 2016,
        "business": 935
    },
    {
        "id": 1871,
        "ca": 3249803,
        "margin": -847,
        "ebitda": 105411,
        "loss": 2520700,
        "year": 2017,
        "business": 936
    },
    {
        "id": 1872,
        "ca": 1921730,
        "margin": 626212,
        "ebitda": 22819,
        "loss": 5118968,
        "year": 2016,
        "business": 936
    },
    {
        "id": 1873,
        "ca": 1579791,
        "margin": 949432,
        "ebitda": 637092,
        "loss": 3850113,
        "year": 2017,
        "business": 937
    },
    {
        "id": 1874,
        "ca": 676502,
        "margin": 586097,
        "ebitda": 917732,
        "loss": 8035471,
        "year": 2016,
        "business": 937
    },
    {
        "id": 1875,
        "ca": 2950736,
        "margin": 41353,
        "ebitda": 623061,
        "loss": 6113881,
        "year": 2017,
        "business": 938
    },
    {
        "id": 1876,
        "ca": 3150706,
        "margin": 133352,
        "ebitda": 490164,
        "loss": 7660482,
        "year": 2016,
        "business": 938
    },
    {
        "id": 1877,
        "ca": 899193,
        "margin": 772406,
        "ebitda": 963667,
        "loss": 6815698,
        "year": 2017,
        "business": 939
    },
    {
        "id": 1878,
        "ca": 194722,
        "margin": 582959,
        "ebitda": 35452,
        "loss": 5234463,
        "year": 2016,
        "business": 939
    },
    {
        "id": 1879,
        "ca": 1774014,
        "margin": 812171,
        "ebitda": 816247,
        "loss": 4795,
        "year": 2017,
        "business": 940
    },
    {
        "id": 1880,
        "ca": 1106349,
        "margin": 946899,
        "ebitda": 3148,
        "loss": 4350676,
        "year": 2016,
        "business": 940
    },
    {
        "id": 1881,
        "ca": 1187490,
        "margin": 917067,
        "ebitda": 455869,
        "loss": 3178879,
        "year": 2017,
        "business": 941
    },
    {
        "id": 1882,
        "ca": 2388737,
        "margin": 48027,
        "ebitda": 281517,
        "loss": 533574,
        "year": 2016,
        "business": 941
    },
    {
        "id": 1883,
        "ca": 2156126,
        "margin": 122500,
        "ebitda": 337337,
        "loss": 6435130,
        "year": 2017,
        "business": 942
    },
    {
        "id": 1884,
        "ca": 2599176,
        "margin": 195236,
        "ebitda": 972498,
        "loss": 9801343,
        "year": 2016,
        "business": 942
    },
    {
        "id": 1885,
        "ca": 3151423,
        "margin": 984862,
        "ebitda": 168374,
        "loss": 9707189,
        "year": 2017,
        "business": 943
    },
    {
        "id": 1886,
        "ca": 2095312,
        "margin": 522848,
        "ebitda": 362540,
        "loss": 5681269,
        "year": 2016,
        "business": 943
    },
    {
        "id": 1887,
        "ca": 1893869,
        "margin": 945565,
        "ebitda": 321181,
        "loss": 4080963,
        "year": 2017,
        "business": 944
    },
    {
        "id": 1888,
        "ca": 3975986,
        "margin": -179582,
        "ebitda": 276129,
        "loss": 7201593,
        "year": 2016,
        "business": 944
    },
    {
        "id": 1889,
        "ca": 242272,
        "margin": 618550,
        "ebitda": 961486,
        "loss": 3487113,
        "year": 2017,
        "business": 945
    },
    {
        "id": 1890,
        "ca": 3203225,
        "margin": -196757,
        "ebitda": 359647,
        "loss": 7518833,
        "year": 2016,
        "business": 945
    },
    {
        "id": 1891,
        "ca": 1880214,
        "margin": -112617,
        "ebitda": 395946,
        "loss": 2630162,
        "year": 2017,
        "business": 946
    },
    {
        "id": 1892,
        "ca": 2742006,
        "margin": 22675,
        "ebitda": 945818,
        "loss": 6911677,
        "year": 2016,
        "business": 946
    },
    {
        "id": 1893,
        "ca": 2690893,
        "margin": 667809,
        "ebitda": 371700,
        "loss": 1590085,
        "year": 2017,
        "business": 947
    },
    {
        "id": 1894,
        "ca": 363863,
        "margin": -196490,
        "ebitda": 377252,
        "loss": 1442802,
        "year": 2016,
        "business": 947
    },
    {
        "id": 1895,
        "ca": 3889022,
        "margin": 330749,
        "ebitda": 154345,
        "loss": 5901331,
        "year": 2017,
        "business": 948
    },
    {
        "id": 1896,
        "ca": 2898183,
        "margin": 412020,
        "ebitda": 211412,
        "loss": 1898781,
        "year": 2016,
        "business": 948
    },
    {
        "id": 1897,
        "ca": 2219717,
        "margin": 761838,
        "ebitda": 816857,
        "loss": 5635793,
        "year": 2017,
        "business": 949
    },
    {
        "id": 1898,
        "ca": 1756341,
        "margin": 551974,
        "ebitda": 187358,
        "loss": 4214180,
        "year": 2016,
        "business": 949
    },
    {
        "id": 1899,
        "ca": 569647,
        "margin": 207950,
        "ebitda": 83795,
        "loss": 1445553,
        "year": 2017,
        "business": 950
    },
    {
        "id": 1900,
        "ca": 3913544,
        "margin": 401166,
        "ebitda": 97592,
        "loss": 8342416,
        "year": 2016,
        "business": 950
    },
    {
        "id": 1901,
        "ca": 2253393,
        "margin": 718227,
        "ebitda": 643447,
        "loss": 9503316,
        "year": 2017,
        "business": 951
    },
    {
        "id": 1902,
        "ca": 3035875,
        "margin": 334290,
        "ebitda": 836489,
        "loss": 5840951,
        "year": 2016,
        "business": 951
    },
    {
        "id": 1903,
        "ca": 3042317,
        "margin": 658569,
        "ebitda": 71018,
        "loss": 9471325,
        "year": 2017,
        "business": 952
    },
    {
        "id": 1904,
        "ca": 3299800,
        "margin": 948579,
        "ebitda": 131329,
        "loss": 784470,
        "year": 2016,
        "business": 952
    },
    {
        "id": 1905,
        "ca": 1298526,
        "margin": 747600,
        "ebitda": 266745,
        "loss": 8434161,
        "year": 2017,
        "business": 953
    },
    {
        "id": 1906,
        "ca": 2464257,
        "margin": 291019,
        "ebitda": 133772,
        "loss": 4757829,
        "year": 2016,
        "business": 953
    },
    {
        "id": 1907,
        "ca": 656037,
        "margin": 920962,
        "ebitda": 363136,
        "loss": 715611,
        "year": 2017,
        "business": 954
    },
    {
        "id": 1908,
        "ca": 137280,
        "margin": -107503,
        "ebitda": 45496,
        "loss": 2511641,
        "year": 2016,
        "business": 954
    },
    {
        "id": 1909,
        "ca": 2718905,
        "margin": -8382,
        "ebitda": 422157,
        "loss": 8472060,
        "year": 2017,
        "business": 955
    },
    {
        "id": 1910,
        "ca": 1685173,
        "margin": 821441,
        "ebitda": 51345,
        "loss": 3556685,
        "year": 2016,
        "business": 955
    },
    {
        "id": 1911,
        "ca": 3575753,
        "margin": 446185,
        "ebitda": 624581,
        "loss": 9017996,
        "year": 2017,
        "business": 956
    },
    {
        "id": 1912,
        "ca": 209955,
        "margin": 373733,
        "ebitda": 788932,
        "loss": 5333421,
        "year": 2016,
        "business": 956
    },
    {
        "id": 1913,
        "ca": 3839319,
        "margin": 668896,
        "ebitda": 54927,
        "loss": 1714494,
        "year": 2017,
        "business": 957
    },
    {
        "id": 1914,
        "ca": 2167669,
        "margin": 516756,
        "ebitda": 54948,
        "loss": 5883349,
        "year": 2016,
        "business": 957
    },
    {
        "id": 1915,
        "ca": 860675,
        "margin": 726715,
        "ebitda": 274949,
        "loss": 6317226,
        "year": 2017,
        "business": 958
    },
    {
        "id": 1916,
        "ca": 1401590,
        "margin": 762884,
        "ebitda": 893200,
        "loss": 2049642,
        "year": 2016,
        "business": 958
    },
    {
        "id": 1917,
        "ca": 1716556,
        "margin": -126313,
        "ebitda": 234803,
        "loss": 7214121,
        "year": 2017,
        "business": 959
    },
    {
        "id": 1918,
        "ca": 284385,
        "margin": 382663,
        "ebitda": 559178,
        "loss": 4567945,
        "year": 2016,
        "business": 959
    },
    {
        "id": 1919,
        "ca": 760972,
        "margin": 608660,
        "ebitda": 662529,
        "loss": 9343354,
        "year": 2017,
        "business": 960
    },
    {
        "id": 1920,
        "ca": 2956499,
        "margin": 325767,
        "ebitda": 33453,
        "loss": 46559,
        "year": 2016,
        "business": 960
    },
    {
        "id": 1921,
        "ca": 1010520,
        "margin": 466668,
        "ebitda": 410516,
        "loss": 6408445,
        "year": 2017,
        "business": 961
    },
    {
        "id": 1922,
        "ca": 3003038,
        "margin": 633917,
        "ebitda": 748296,
        "loss": 7334582,
        "year": 2016,
        "business": 961
    },
    {
        "id": 1923,
        "ca": 1787673,
        "margin": 391473,
        "ebitda": 17367,
        "loss": 8838290,
        "year": 2017,
        "business": 962
    },
    {
        "id": 1924,
        "ca": 3056695,
        "margin": 118720,
        "ebitda": 833986,
        "loss": 1329689,
        "year": 2016,
        "business": 962
    },
    {
        "id": 1925,
        "ca": 2931922,
        "margin": 545582,
        "ebitda": 262168,
        "loss": 8322734,
        "year": 2017,
        "business": 963
    },
    {
        "id": 1926,
        "ca": 3106178,
        "margin": 802826,
        "ebitda": 870047,
        "loss": 1968437,
        "year": 2016,
        "business": 963
    },
    {
        "id": 1927,
        "ca": 951318,
        "margin": 41579,
        "ebitda": 674636,
        "loss": 4910920,
        "year": 2017,
        "business": 964
    },
    {
        "id": 1928,
        "ca": 1349760,
        "margin": 611029,
        "ebitda": 517653,
        "loss": 9358256,
        "year": 2016,
        "business": 964
    },
    {
        "id": 1929,
        "ca": 2569565,
        "margin": -5245,
        "ebitda": 33578,
        "loss": 5063700,
        "year": 2017,
        "business": 965
    },
    {
        "id": 1930,
        "ca": 1568746,
        "margin": 720222,
        "ebitda": 254339,
        "loss": 4275511,
        "year": 2016,
        "business": 965
    },
    {
        "id": 1931,
        "ca": 1923199,
        "margin": 608612,
        "ebitda": 839213,
        "loss": 7724503,
        "year": 2017,
        "business": 966
    },
    {
        "id": 1932,
        "ca": 664102,
        "margin": 869980,
        "ebitda": 140011,
        "loss": 9316937,
        "year": 2016,
        "business": 966
    },
    {
        "id": 1933,
        "ca": 392087,
        "margin": 53147,
        "ebitda": 842057,
        "loss": 6132850,
        "year": 2017,
        "business": 967
    },
    {
        "id": 1934,
        "ca": 2261787,
        "margin": 556825,
        "ebitda": 915400,
        "loss": 8581554,
        "year": 2016,
        "business": 967
    },
    {
        "id": 1935,
        "ca": 2077357,
        "margin": 497351,
        "ebitda": 65952,
        "loss": 858474,
        "year": 2017,
        "business": 969
    },
    {
        "id": 1936,
        "ca": 432070,
        "margin": 427778,
        "ebitda": 290433,
        "loss": 8023406,
        "year": 2016,
        "business": 969
    },
    {
        "id": 1937,
        "ca": 364921,
        "margin": 61976,
        "ebitda": 960673,
        "loss": 2812728,
        "year": 2017,
        "business": 970
    },
    {
        "id": 1938,
        "ca": 1944186,
        "margin": 738525,
        "ebitda": 846608,
        "loss": 657145,
        "year": 2016,
        "business": 970
    },
    {
        "id": 1939,
        "ca": 2752578,
        "margin": -147358,
        "ebitda": 485891,
        "loss": 331323,
        "year": 2017,
        "business": 971
    },
    {
        "id": 1940,
        "ca": 1686886,
        "margin": -117670,
        "ebitda": 390980,
        "loss": 3205084,
        "year": 2016,
        "business": 971
    },
    {
        "id": 1941,
        "ca": 1911503,
        "margin": 340643,
        "ebitda": 417233,
        "loss": 5121889,
        "year": 2017,
        "business": 972
    },
    {
        "id": 1942,
        "ca": 3669705,
        "margin": 937608,
        "ebitda": 162576,
        "loss": 8516803,
        "year": 2016,
        "business": 972
    },
    {
        "id": 1943,
        "ca": 2802947,
        "margin": -192527,
        "ebitda": 895332,
        "loss": 168490,
        "year": 2017,
        "business": 973
    },
    {
        "id": 1944,
        "ca": 1704685,
        "margin": 675635,
        "ebitda": 175060,
        "loss": 8978142,
        "year": 2016,
        "business": 973
    },
    {
        "id": 1945,
        "ca": 3366027,
        "margin": 987873,
        "ebitda": 196501,
        "loss": 7956104,
        "year": 2017,
        "business": 974
    },
    {
        "id": 1946,
        "ca": 2312009,
        "margin": 564257,
        "ebitda": 534160,
        "loss": 5616100,
        "year": 2016,
        "business": 974
    },
    {
        "id": 1947,
        "ca": 807176,
        "margin": -170771,
        "ebitda": 501330,
        "loss": 107559,
        "year": 2017,
        "business": 975
    },
    {
        "id": 1948,
        "ca": 1677728,
        "margin": 405029,
        "ebitda": 919989,
        "loss": 7064750,
        "year": 2016,
        "business": 975
    },
    {
        "id": 1949,
        "ca": 845912,
        "margin": -55821,
        "ebitda": 224135,
        "loss": 2658021,
        "year": 2017,
        "business": 976
    },
    {
        "id": 1950,
        "ca": 2744919,
        "margin": 681582,
        "ebitda": 236779,
        "loss": 4376894,
        "year": 2016,
        "business": 976
    },
    {
        "id": 1951,
        "ca": 2645052,
        "margin": -41159,
        "ebitda": 173240,
        "loss": 1967321,
        "year": 2017,
        "business": 977
    },
    {
        "id": 1952,
        "ca": 732362,
        "margin": 698731,
        "ebitda": 463853,
        "loss": 5229956,
        "year": 2016,
        "business": 977
    },
    {
        "id": 1953,
        "ca": 1399582,
        "margin": 985314,
        "ebitda": 725283,
        "loss": 4266902,
        "year": 2017,
        "business": 978
    },
    {
        "id": 1954,
        "ca": 1916496,
        "margin": 979357,
        "ebitda": 942617,
        "loss": 2478758,
        "year": 2016,
        "business": 978
    },
    {
        "id": 1955,
        "ca": 490022,
        "margin": 352486,
        "ebitda": 213406,
        "loss": 608978,
        "year": 2017,
        "business": 979
    },
    {
        "id": 1956,
        "ca": 2814806,
        "margin": 150982,
        "ebitda": 255155,
        "loss": 4306009,
        "year": 2016,
        "business": 979
    },
    {
        "id": 1957,
        "ca": 498678,
        "margin": 154466,
        "ebitda": 620676,
        "loss": 548809,
        "year": 2017,
        "business": 980
    },
    {
        "id": 1958,
        "ca": 2772820,
        "margin": 119935,
        "ebitda": 271449,
        "loss": 5095792,
        "year": 2016,
        "business": 980
    },
    {
        "id": 1959,
        "ca": 2302368,
        "margin": 469510,
        "ebitda": 250648,
        "loss": 5131438,
        "year": 2017,
        "business": 981
    },
    {
        "id": 1960,
        "ca": 3011160,
        "margin": 429420,
        "ebitda": 940827,
        "loss": 7664834,
        "year": 2016,
        "business": 981
    },
    {
        "id": 1961,
        "ca": 2091227,
        "margin": 809190,
        "ebitda": 589384,
        "loss": 6212269,
        "year": 2017,
        "business": 982
    },
    {
        "id": 1962,
        "ca": 676290,
        "margin": 202279,
        "ebitda": 718696,
        "loss": 5774367,
        "year": 2016,
        "business": 982
    },
    {
        "id": 1963,
        "ca": 1071840,
        "margin": 70852,
        "ebitda": 571568,
        "loss": 2690278,
        "year": 2017,
        "business": 983
    },
    {
        "id": 1964,
        "ca": 2169468,
        "margin": -92185,
        "ebitda": 134714,
        "loss": 2327708,
        "year": 2016,
        "business": 983
    },
    {
        "id": 1965,
        "ca": 227469,
        "margin": -172937,
        "ebitda": 849147,
        "loss": 3197097,
        "year": 2017,
        "business": 984
    },
    {
        "id": 1966,
        "ca": 2950073,
        "margin": 291666,
        "ebitda": 358533,
        "loss": 2035460,
        "year": 2016,
        "business": 984
    },
    {
        "id": 1967,
        "ca": 1659892,
        "margin": 228500,
        "ebitda": 676123,
        "loss": 113437,
        "year": 2017,
        "business": 985
    },
    {
        "id": 1968,
        "ca": 1332202,
        "margin": -10635,
        "ebitda": 591615,
        "loss": 1731490,
        "year": 2016,
        "business": 985
    },
    {
        "id": 1969,
        "ca": 2698460,
        "margin": 367570,
        "ebitda": 943598,
        "loss": 6190258,
        "year": 2017,
        "business": 986
    },
    {
        "id": 1970,
        "ca": 1547921,
        "margin": 898131,
        "ebitda": 549866,
        "loss": 695666,
        "year": 2016,
        "business": 986
    },
    {
        "id": 1971,
        "ca": 3902519,
        "margin": 765501,
        "ebitda": 873377,
        "loss": 2554825,
        "year": 2017,
        "business": 987
    },
    {
        "id": 1972,
        "ca": 804936,
        "margin": 182411,
        "ebitda": 466946,
        "loss": 9989170,
        "year": 2016,
        "business": 987
    },
    {
        "id": 1973,
        "ca": 1658933,
        "margin": 647423,
        "ebitda": 568089,
        "loss": 6579924,
        "year": 2017,
        "business": 988
    },
    {
        "id": 1974,
        "ca": 1738120,
        "margin": 674431,
        "ebitda": 429561,
        "loss": 408865,
        "year": 2016,
        "business": 988
    },
    {
        "id": 1975,
        "ca": 2026715,
        "margin": -198616,
        "ebitda": 965383,
        "loss": 6439279,
        "year": 2017,
        "business": 989
    },
    {
        "id": 1976,
        "ca": 3894824,
        "margin": 606068,
        "ebitda": 694184,
        "loss": 5969030,
        "year": 2016,
        "business": 989
    },
    {
        "id": 1977,
        "ca": 2494629,
        "margin": 240340,
        "ebitda": 282056,
        "loss": 6994907,
        "year": 2017,
        "business": 990
    },
    {
        "id": 1978,
        "ca": 1974168,
        "margin": 484412,
        "ebitda": 253168,
        "loss": 1670528,
        "year": 2016,
        "business": 990
    },
    {
        "id": 1979,
        "ca": 3977217,
        "margin": 175757,
        "ebitda": 241608,
        "loss": 6107207,
        "year": 2017,
        "business": 991
    },
    {
        "id": 1980,
        "ca": 809720,
        "margin": 545355,
        "ebitda": 842297,
        "loss": 7239634,
        "year": 2016,
        "business": 991
    },
    {
        "id": 1981,
        "ca": 3055261,
        "margin": -29529,
        "ebitda": 988508,
        "loss": 3307127,
        "year": 2017,
        "business": 992
    },
    {
        "id": 1982,
        "ca": 441182,
        "margin": 616025,
        "ebitda": 739319,
        "loss": 754174,
        "year": 2016,
        "business": 992
    },
    {
        "id": 1983,
        "ca": 3778120,
        "margin": 946201,
        "ebitda": 737398,
        "loss": 828816,
        "year": 2017,
        "business": 993
    },
    {
        "id": 1984,
        "ca": 377221,
        "margin": 644941,
        "ebitda": 330869,
        "loss": 4185104,
        "year": 2016,
        "business": 993
    },
    {
        "id": 1985,
        "ca": 3293799,
        "margin": 762392,
        "ebitda": 874292,
        "loss": 3623463,
        "year": 2017,
        "business": 994
    },
    {
        "id": 1986,
        "ca": 858506,
        "margin": 189441,
        "ebitda": 609871,
        "loss": 177061,
        "year": 2016,
        "business": 994
    },
    {
        "id": 1987,
        "ca": 1952026,
        "margin": 105098,
        "ebitda": 802326,
        "loss": 5262609,
        "year": 2017,
        "business": 995
    },
    {
        "id": 1988,
        "ca": 353809,
        "margin": 802651,
        "ebitda": 720150,
        "loss": 953096,
        "year": 2016,
        "business": 995
    },
    {
        "id": 1989,
        "ca": 3812845,
        "margin": 536146,
        "ebitda": 197412,
        "loss": 3385756,
        "year": 2017,
        "business": 996
    },
    {
        "id": 1990,
        "ca": 900740,
        "margin": 452037,
        "ebitda": 479167,
        "loss": 9372921,
        "year": 2016,
        "business": 996
    },
    {
        "id": 1991,
        "ca": 1298429,
        "margin": 85209,
        "ebitda": 801714,
        "loss": 1874888,
        "year": 2017,
        "business": 997
    },
    {
        "id": 1992,
        "ca": 3372389,
        "margin": -46817,
        "ebitda": 962766,
        "loss": 1038773,
        "year": 2016,
        "business": 997
    },
    {
        "id": 1993,
        "ca": 1571590,
        "margin": 465195,
        "ebitda": 715373,
        "loss": 6767658,
        "year": 2017,
        "business": 998
    },
    {
        "id": 1994,
        "ca": 1885922,
        "margin": 294164,
        "ebitda": 602655,
        "loss": 5395737,
        "year": 2016,
        "business": 998
    },
    {
        "id": 1995,
        "ca": 609290,
        "margin": 476030,
        "ebitda": 414815,
        "loss": 650125,
        "year": 2017,
        "business": 999
    },
    {
        "id": 1996,
        "ca": 383265,
        "margin": -109517,
        "ebitda": 516401,
        "loss": 7914729,
        "year": 2016,
        "business": 999
    },
    {
        "id": 1997,
        "ca": 3646184,
        "margin": -117596,
        "ebitda": 904991,
        "loss": 369354,
        "year": 2017,
        "business": 1000
    },
    {
        "id": 1998,
        "ca": 215663,
        "margin": 343155,
        "ebitda": 914212,
        "loss": 386124,
        "year": 2016,
        "business": 1000
    },
    {
        "id": 1999,
        "ca": 3081311,
        "margin": 760359,
        "ebitda": 515188,
        "loss": 866840,
        "year": 2017,
        "business": 1001
    },
    {
        "id": 2000,
        "ca": 2987931,
        "margin": 94163,
        "ebitda": 833533,
        "loss": 2548828,
        "year": 2016,
        "business": 1001
    },
    {
        "id": 2001,
        "ca": 1918594,
        "margin": 608420,
        "ebitda": 48656,
        "loss": 3929717,
        "year": 2017,
        "business": 1002
    },
    {
        "id": 2002,
        "ca": 3838016,
        "margin": -125324,
        "ebitda": 689653,
        "loss": 5153326,
        "year": 2016,
        "business": 1002
    },
    {
        "id": 2003,
        "ca": 784201,
        "margin": 152713,
        "ebitda": 747400,
        "loss": 5136538,
        "year": 2017,
        "business": 1003
    },
    {
        "id": 2004,
        "ca": 503662,
        "margin": 920524,
        "ebitda": 630705,
        "loss": 2303495,
        "year": 2016,
        "business": 1003
    },
    {
        "id": 2005,
        "ca": 929090,
        "margin": 564220,
        "ebitda": 252906,
        "loss": 9746310,
        "year": 2017,
        "business": 1004
    },
    {
        "id": 2006,
        "ca": 2158639,
        "margin": 105807,
        "ebitda": 693906,
        "loss": 1359336,
        "year": 2016,
        "business": 1004
    },
    {
        "id": 2007,
        "ca": 812364,
        "margin": 960696,
        "ebitda": 949485,
        "loss": 6544371,
        "year": 2017,
        "business": 1005
    },
    {
        "id": 2008,
        "ca": 1407290,
        "margin": -47395,
        "ebitda": 670520,
        "loss": 8967033,
        "year": 2016,
        "business": 1005
    },
    {
        "id": 2009,
        "ca": 2153000,
        "margin": 438242,
        "ebitda": 139511,
        "loss": 2935698,
        "year": 2017,
        "business": 1006
    },
    {
        "id": 2010,
        "ca": 3740737,
        "margin": 220257,
        "ebitda": 664757,
        "loss": 9211966,
        "year": 2016,
        "business": 1006
    },
    {
        "id": 2011,
        "ca": 2818761,
        "margin": -33832,
        "ebitda": 788293,
        "loss": 5486323,
        "year": 2017,
        "business": 1007
    },
    {
        "id": 2012,
        "ca": 2834251,
        "margin": 591851,
        "ebitda": 979319,
        "loss": 8620705,
        "year": 2016,
        "business": 1007
    },
    {
        "id": 2013,
        "ca": 2529178,
        "margin": 197369,
        "ebitda": 886454,
        "loss": 7279257,
        "year": 2017,
        "business": 1008
    },
    {
        "id": 2014,
        "ca": 3546117,
        "margin": 244818,
        "ebitda": 645308,
        "loss": 6806083,
        "year": 2016,
        "business": 1008
    },
    {
        "id": 2015,
        "ca": 1429780,
        "margin": 799453,
        "ebitda": 36259,
        "loss": 3355722,
        "year": 2017,
        "business": 1009
    },
    {
        "id": 2016,
        "ca": 2099179,
        "margin": -54616,
        "ebitda": 527125,
        "loss": 5403606,
        "year": 2016,
        "business": 1009
    },
    {
        "id": 2017,
        "ca": 2889040,
        "margin": 703385,
        "ebitda": 752653,
        "loss": 8681358,
        "year": 2017,
        "business": 1010
    },
    {
        "id": 2018,
        "ca": 2258022,
        "margin": 871789,
        "ebitda": 822206,
        "loss": 1999996,
        "year": 2016,
        "business": 1010
    },
    {
        "id": 2019,
        "ca": 2567850,
        "margin": -114309,
        "ebitda": 803022,
        "loss": 3644955,
        "year": 2017,
        "business": 1011
    },
    {
        "id": 2020,
        "ca": 2327035,
        "margin": 651791,
        "ebitda": 325188,
        "loss": 5600022,
        "year": 2016,
        "business": 1011
    },
    {
        "id": 2021,
        "ca": 3175010,
        "margin": 303265,
        "ebitda": 16810,
        "loss": 5997395,
        "year": 2017,
        "business": 1012
    },
    {
        "id": 2022,
        "ca": 3837947,
        "margin": -136899,
        "ebitda": 927198,
        "loss": 80596,
        "year": 2016,
        "business": 1012
    },
    {
        "id": 2023,
        "ca": 234247,
        "margin": 953337,
        "ebitda": 591502,
        "loss": 5046849,
        "year": 2017,
        "business": 1013
    },
    {
        "id": 2024,
        "ca": 3641315,
        "margin": 184658,
        "ebitda": 732802,
        "loss": 8076404,
        "year": 2016,
        "business": 1013
    },
    {
        "id": 2025,
        "ca": 1656818,
        "margin": 595587,
        "ebitda": 289090,
        "loss": 2974264,
        "year": 2017,
        "business": 1014
    },
    {
        "id": 2026,
        "ca": 398030,
        "margin": 593684,
        "ebitda": 562458,
        "loss": 5755394,
        "year": 2016,
        "business": 1014
    },
    {
        "id": 2027,
        "ca": 888190,
        "margin": -133730,
        "ebitda": 753834,
        "loss": 3572235,
        "year": 2017,
        "business": 1015
    },
    {
        "id": 2028,
        "ca": 819653,
        "margin": 714896,
        "ebitda": 990159,
        "loss": 7031751,
        "year": 2016,
        "business": 1015
    },
    {
        "id": 2029,
        "ca": 1361366,
        "margin": 738358,
        "ebitda": 886639,
        "loss": 804053,
        "year": 2017,
        "business": 1016
    },
    {
        "id": 2030,
        "ca": 2006011,
        "margin": 84480,
        "ebitda": 49659,
        "loss": 4884748,
        "year": 2016,
        "business": 1016
    },
    {
        "id": 2031,
        "ca": 3441535,
        "margin": 889969,
        "ebitda": 889269,
        "loss": 8285903,
        "year": 2017,
        "business": 1017
    },
    {
        "id": 2032,
        "ca": 2323637,
        "margin": 566912,
        "ebitda": 736335,
        "loss": 1409551,
        "year": 2016,
        "business": 1017
    },
    {
        "id": 2033,
        "ca": 2369218,
        "margin": -73152,
        "ebitda": 655888,
        "loss": 2911597,
        "year": 2017,
        "business": 1018
    },
    {
        "id": 2034,
        "ca": 1149241,
        "margin": 97437,
        "ebitda": 64417,
        "loss": 3166514,
        "year": 2016,
        "business": 1018
    },
    {
        "id": 2035,
        "ca": 814328,
        "margin": -48315,
        "ebitda": 783356,
        "loss": 576601,
        "year": 2017,
        "business": 1019
    },
    {
        "id": 2036,
        "ca": 1365842,
        "margin": -14642,
        "ebitda": 646031,
        "loss": 5953844,
        "year": 2016,
        "business": 1019
    },
    {
        "id": 2037,
        "ca": 1834374,
        "margin": 326249,
        "ebitda": 959880,
        "loss": 7187013,
        "year": 2017,
        "business": 1020
    },
    {
        "id": 2038,
        "ca": 1192992,
        "margin": 334113,
        "ebitda": 549808,
        "loss": 2930291,
        "year": 2016,
        "business": 1020
    },
    {
        "id": 2039,
        "ca": 2801651,
        "margin": -28139,
        "ebitda": 297122,
        "loss": 4191837,
        "year": 2017,
        "business": 1021
    },
    {
        "id": 2040,
        "ca": 3314282,
        "margin": 641617,
        "ebitda": 995032,
        "loss": 8459886,
        "year": 2016,
        "business": 1021
    },
    {
        "id": 2041,
        "ca": 2598845,
        "margin": 289164,
        "ebitda": 137003,
        "loss": 6548481,
        "year": 2017,
        "business": 1022
    },
    {
        "id": 2042,
        "ca": 3324436,
        "margin": 611157,
        "ebitda": 665734,
        "loss": 8164744,
        "year": 2016,
        "business": 1022
    },
    {
        "id": 2043,
        "ca": 1793980,
        "margin": 857354,
        "ebitda": 364851,
        "loss": 2272533,
        "year": 2017,
        "business": 1023
    },
    {
        "id": 2044,
        "ca": 212326,
        "margin": 147161,
        "ebitda": 359990,
        "loss": 9366460,
        "year": 2016,
        "business": 1023
    },
    {
        "id": 2045,
        "ca": 3060129,
        "margin": -57748,
        "ebitda": 111143,
        "loss": 5801049,
        "year": 2017,
        "business": 1024
    },
    {
        "id": 2046,
        "ca": 2732443,
        "margin": -185117,
        "ebitda": 897047,
        "loss": 5541022,
        "year": 2016,
        "business": 1024
    },
    {
        "id": 2047,
        "ca": 3683294,
        "margin": -12673,
        "ebitda": 436741,
        "loss": 3246692,
        "year": 2017,
        "business": 1025
    },
    {
        "id": 2048,
        "ca": 985195,
        "margin": 220215,
        "ebitda": 765111,
        "loss": 2435349,
        "year": 2016,
        "business": 1025
    },
    {
        "id": 2049,
        "ca": 1059793,
        "margin": 925668,
        "ebitda": 29499,
        "loss": 6657054,
        "year": 2017,
        "business": 1026
    },
    {
        "id": 2050,
        "ca": 3867970,
        "margin": 127172,
        "ebitda": 262415,
        "loss": 4816646,
        "year": 2016,
        "business": 1026
    },
    {
        "id": 2051,
        "ca": 1463808,
        "margin": 348258,
        "ebitda": 590048,
        "loss": 4065483,
        "year": 2017,
        "business": 1027
    },
    {
        "id": 2052,
        "ca": 1359073,
        "margin": 437928,
        "ebitda": 454686,
        "loss": 5863600,
        "year": 2016,
        "business": 1027
    },
    {
        "id": 2053,
        "ca": 824151,
        "margin": 966975,
        "ebitda": 688976,
        "loss": 4876715,
        "year": 2017,
        "business": 1028
    },
    {
        "id": 2054,
        "ca": 2072963,
        "margin": 185234,
        "ebitda": 496657,
        "loss": 6646201,
        "year": 2016,
        "business": 1028
    },
    {
        "id": 2055,
        "ca": 941673,
        "margin": 378932,
        "ebitda": 896642,
        "loss": 7541673,
        "year": 2017,
        "business": 1029
    },
    {
        "id": 2056,
        "ca": 3564685,
        "margin": 123815,
        "ebitda": 496294,
        "loss": 3757149,
        "year": 2016,
        "business": 1029
    },
    {
        "id": 2057,
        "ca": 3579908,
        "margin": 854056,
        "ebitda": 875551,
        "loss": 7027042,
        "year": 2017,
        "business": 1030
    },
    {
        "id": 2058,
        "ca": 3856568,
        "margin": 150722,
        "ebitda": 991135,
        "loss": 1980958,
        "year": 2016,
        "business": 1030
    },
    {
        "id": 2059,
        "ca": 1688779,
        "margin": -159723,
        "ebitda": 127885,
        "loss": 9553725,
        "year": 2017,
        "business": 1031
    },
    {
        "id": 2060,
        "ca": 2615968,
        "margin": 896077,
        "ebitda": 32744,
        "loss": 3546095,
        "year": 2016,
        "business": 1031
    },
    {
        "id": 2061,
        "ca": 699746,
        "margin": 91275,
        "ebitda": 400593,
        "loss": 3032962,
        "year": 2017,
        "business": 1032
    },
    {
        "id": 2062,
        "ca": 3004201,
        "margin": 439139,
        "ebitda": 203405,
        "loss": 903996,
        "year": 2016,
        "business": 1032
    },
    {
        "id": 2063,
        "ca": 585224,
        "margin": 146590,
        "ebitda": 695672,
        "loss": 211200,
        "year": 2017,
        "business": 1033
    },
    {
        "id": 2064,
        "ca": 3866780,
        "margin": 675857,
        "ebitda": 365233,
        "loss": 8891632,
        "year": 2016,
        "business": 1033
    },
    {
        "id": 2065,
        "ca": 809248,
        "margin": 333878,
        "ebitda": 816467,
        "loss": 8691711,
        "year": 2017,
        "business": 1034
    },
    {
        "id": 2066,
        "ca": 2637226,
        "margin": 319549,
        "ebitda": 91713,
        "loss": 3167156,
        "year": 2016,
        "business": 1034
    },
    {
        "id": 2067,
        "ca": 3778638,
        "margin": 334773,
        "ebitda": 679137,
        "loss": 7806071,
        "year": 2017,
        "business": 1035
    },
    {
        "id": 2068,
        "ca": 3497909,
        "margin": 319175,
        "ebitda": 450324,
        "loss": 4784609,
        "year": 2016,
        "business": 1035
    },
    {
        "id": 2069,
        "ca": 2425895,
        "margin": -36097,
        "ebitda": 510250,
        "loss": 4585429,
        "year": 2017,
        "business": 1036
    },
    {
        "id": 2070,
        "ca": 2291345,
        "margin": 82259,
        "ebitda": 699924,
        "loss": 7475043,
        "year": 2016,
        "business": 1036
    },
    {
        "id": 2071,
        "ca": 3506766,
        "margin": 274133,
        "ebitda": 34174,
        "loss": 3677732,
        "year": 2017,
        "business": 1037
    },
    {
        "id": 2072,
        "ca": 3282506,
        "margin": 259763,
        "ebitda": 103786,
        "loss": 6295907,
        "year": 2016,
        "business": 1037
    },
    {
        "id": 2073,
        "ca": 2909729,
        "margin": 369706,
        "ebitda": 85593,
        "loss": 3061624,
        "year": 2017,
        "business": 1038
    },
    {
        "id": 2074,
        "ca": 3276126,
        "margin": 288118,
        "ebitda": 993894,
        "loss": 2191412,
        "year": 2016,
        "business": 1038
    },
    {
        "id": 2075,
        "ca": 3587822,
        "margin": 74700,
        "ebitda": 522215,
        "loss": 6140731,
        "year": 2017,
        "business": 1039
    },
    {
        "id": 2076,
        "ca": 1583816,
        "margin": 570319,
        "ebitda": 574093,
        "loss": 5758950,
        "year": 2016,
        "business": 1039
    },
    {
        "id": 2077,
        "ca": 2661473,
        "margin": 917155,
        "ebitda": 431477,
        "loss": 9398696,
        "year": 2017,
        "business": 1040
    },
    {
        "id": 2078,
        "ca": 3912135,
        "margin": -79026,
        "ebitda": 907216,
        "loss": 5839494,
        "year": 2016,
        "business": 1040
    },
    {
        "id": 2079,
        "ca": 3916482,
        "margin": 789171,
        "ebitda": 591525,
        "loss": 4337407,
        "year": 2017,
        "business": 1041
    },
    {
        "id": 2080,
        "ca": 2851391,
        "margin": 154011,
        "ebitda": 75755,
        "loss": 4917589,
        "year": 2016,
        "business": 1041
    },
    {
        "id": 2081,
        "ca": 3877874,
        "margin": -64877,
        "ebitda": 283661,
        "loss": 8850825,
        "year": 2017,
        "business": 1042
    },
    {
        "id": 2082,
        "ca": 1780165,
        "margin": 627707,
        "ebitda": 188020,
        "loss": 4142561,
        "year": 2016,
        "business": 1042
    },
    {
        "id": 2083,
        "ca": 904887,
        "margin": 161426,
        "ebitda": 560772,
        "loss": 6954504,
        "year": 2017,
        "business": 1043
    },
    {
        "id": 2084,
        "ca": 675847,
        "margin": 233939,
        "ebitda": 339451,
        "loss": 8460591,
        "year": 2016,
        "business": 1043
    },
    {
        "id": 2085,
        "ca": 1258712,
        "margin": 193533,
        "ebitda": 133533,
        "loss": 2318027,
        "year": 2017,
        "business": 1044
    },
    {
        "id": 2086,
        "ca": 3082650,
        "margin": 728343,
        "ebitda": 380527,
        "loss": 4210061,
        "year": 2016,
        "business": 1044
    },
    {
        "id": 2087,
        "ca": 2145984,
        "margin": 192499,
        "ebitda": 678170,
        "loss": 2268864,
        "year": 2017,
        "business": 1045
    },
    {
        "id": 2088,
        "ca": 3810752,
        "margin": 501467,
        "ebitda": 529022,
        "loss": 3323238,
        "year": 2016,
        "business": 1045
    },
    {
        "id": 2089,
        "ca": 3393679,
        "margin": 512183,
        "ebitda": 633008,
        "loss": 73604,
        "year": 2017,
        "business": 1046
    },
    {
        "id": 2090,
        "ca": 2760846,
        "margin": 190767,
        "ebitda": 817737,
        "loss": 9471846,
        "year": 2016,
        "business": 1046
    },
    {
        "id": 2091,
        "ca": 490523,
        "margin": 144313,
        "ebitda": 564730,
        "loss": 8367688,
        "year": 2017,
        "business": 1047
    },
    {
        "id": 2092,
        "ca": 2068840,
        "margin": 114319,
        "ebitda": 650235,
        "loss": 8027168,
        "year": 2016,
        "business": 1047
    },
    {
        "id": 2093,
        "ca": 1512775,
        "margin": 940569,
        "ebitda": 603753,
        "loss": 206523,
        "year": 2017,
        "business": 1048
    },
    {
        "id": 2094,
        "ca": 2148636,
        "margin": 113689,
        "ebitda": 649884,
        "loss": 1327309,
        "year": 2016,
        "business": 1048
    },
    {
        "id": 2095,
        "ca": 2439582,
        "margin": 944973,
        "ebitda": 341871,
        "loss": 5177689,
        "year": 2017,
        "business": 1049
    },
    {
        "id": 2096,
        "ca": 2198174,
        "margin": 771806,
        "ebitda": 980122,
        "loss": 9350034,
        "year": 2016,
        "business": 1049
    },
    {
        "id": 2097,
        "ca": 3659120,
        "margin": 779837,
        "ebitda": 305681,
        "loss": 9238657,
        "year": 2017,
        "business": 1050
    },
    {
        "id": 2098,
        "ca": 979885,
        "margin": 290030,
        "ebitda": 902063,
        "loss": 4866811,
        "year": 2016,
        "business": 1050
    },
    {
        "id": 2099,
        "ca": 237512,
        "margin": -173455,
        "ebitda": 382060,
        "loss": 8829098,
        "year": 2017,
        "business": 1051
    },
    {
        "id": 2100,
        "ca": 2664685,
        "margin": 307524,
        "ebitda": 569126,
        "loss": 2712404,
        "year": 2016,
        "business": 1051
    },
    {
        "id": 2101,
        "ca": 3103484,
        "margin": 590803,
        "ebitda": 619969,
        "loss": 3865183,
        "year": 2017,
        "business": 1052
    },
    {
        "id": 2102,
        "ca": 3017136,
        "margin": 84984,
        "ebitda": 240512,
        "loss": 4807954,
        "year": 2016,
        "business": 1052
    },
    {
        "id": 2103,
        "ca": 3912615,
        "margin": -117225,
        "ebitda": 445707,
        "loss": 5775246,
        "year": 2017,
        "business": 1053
    },
    {
        "id": 2104,
        "ca": 1049888,
        "margin": 256288,
        "ebitda": 478302,
        "loss": 4897795,
        "year": 2016,
        "business": 1053
    },
    {
        "id": 2105,
        "ca": 3659084,
        "margin": 834841,
        "ebitda": 111987,
        "loss": 1501108,
        "year": 2017,
        "business": 1054
    },
    {
        "id": 2106,
        "ca": 1948201,
        "margin": 721214,
        "ebitda": 419050,
        "loss": 227777,
        "year": 2016,
        "business": 1054
    },
    {
        "id": 2107,
        "ca": 2468229,
        "margin": 265421,
        "ebitda": 302920,
        "loss": 6742927,
        "year": 2017,
        "business": 1055
    },
    {
        "id": 2108,
        "ca": 981901,
        "margin": 790569,
        "ebitda": 582045,
        "loss": 7632615,
        "year": 2016,
        "business": 1055
    },
    {
        "id": 2109,
        "ca": 2887913,
        "margin": 228444,
        "ebitda": 728088,
        "loss": 3141232,
        "year": 2017,
        "business": 1056
    },
    {
        "id": 2110,
        "ca": 189415,
        "margin": 806284,
        "ebitda": 356532,
        "loss": 3905434,
        "year": 2016,
        "business": 1056
    },
    {
        "id": 2111,
        "ca": 3800083,
        "margin": -89532,
        "ebitda": 327736,
        "loss": 6824193,
        "year": 2017,
        "business": 1057
    },
    {
        "id": 2112,
        "ca": 1908162,
        "margin": 431094,
        "ebitda": 25992,
        "loss": 9595756,
        "year": 2016,
        "business": 1057
    },
    {
        "id": 2113,
        "ca": 3745483,
        "margin": 75040,
        "ebitda": 162296,
        "loss": 3479762,
        "year": 2017,
        "business": 1058
    },
    {
        "id": 2114,
        "ca": 343820,
        "margin": 20513,
        "ebitda": 59485,
        "loss": 5856270,
        "year": 2016,
        "business": 1058
    },
    {
        "id": 2115,
        "ca": 3425132,
        "margin": -158363,
        "ebitda": 693691,
        "loss": 3120330,
        "year": 2017,
        "business": 1059
    },
    {
        "id": 2116,
        "ca": 822070,
        "margin": 84604,
        "ebitda": 656191,
        "loss": 7205276,
        "year": 2016,
        "business": 1059
    },
    {
        "id": 2117,
        "ca": 655614,
        "margin": -52212,
        "ebitda": 269990,
        "loss": 1615367,
        "year": 2017,
        "business": 1060
    },
    {
        "id": 2118,
        "ca": 2728842,
        "margin": 160237,
        "ebitda": 185348,
        "loss": 4906909,
        "year": 2016,
        "business": 1060
    },
    {
        "id": 2119,
        "ca": 2447276,
        "margin": 759527,
        "ebitda": 264569,
        "loss": 7761164,
        "year": 2017,
        "business": 1061
    },
    {
        "id": 2120,
        "ca": 1386121,
        "margin": 113756,
        "ebitda": 957702,
        "loss": 9364683,
        "year": 2016,
        "business": 1061
    },
    {
        "id": 2121,
        "ca": 3416004,
        "margin": 786426,
        "ebitda": 707607,
        "loss": 23276,
        "year": 2017,
        "business": 1062
    },
    {
        "id": 2122,
        "ca": 2612412,
        "margin": -199540,
        "ebitda": 691088,
        "loss": 2221698,
        "year": 2016,
        "business": 1062
    },
    {
        "id": 2123,
        "ca": 2234315,
        "margin": 854793,
        "ebitda": 497843,
        "loss": 1765597,
        "year": 2017,
        "business": 1063
    },
    {
        "id": 2124,
        "ca": 2195485,
        "margin": 482912,
        "ebitda": 496411,
        "loss": 1351504,
        "year": 2016,
        "business": 1063
    },
    {
        "id": 2125,
        "ca": 3192822,
        "margin": 218034,
        "ebitda": 176043,
        "loss": 1017293,
        "year": 2017,
        "business": 1064
    },
    {
        "id": 2126,
        "ca": 3860272,
        "margin": 508122,
        "ebitda": 427761,
        "loss": 2805201,
        "year": 2016,
        "business": 1064
    },
    {
        "id": 2127,
        "ca": 3200566,
        "margin": -185746,
        "ebitda": 195282,
        "loss": 5455395,
        "year": 2017,
        "business": 1065
    },
    {
        "id": 2128,
        "ca": 3857386,
        "margin": -69191,
        "ebitda": 810974,
        "loss": 5892310,
        "year": 2016,
        "business": 1065
    },
    {
        "id": 2129,
        "ca": 1962652,
        "margin": -154905,
        "ebitda": 25111,
        "loss": 8546105,
        "year": 2017,
        "business": 1066
    },
    {
        "id": 2130,
        "ca": 3195779,
        "margin": 951399,
        "ebitda": 867936,
        "loss": 5735554,
        "year": 2016,
        "business": 1066
    },
    {
        "id": 2131,
        "ca": 1644293,
        "margin": 673942,
        "ebitda": 903520,
        "loss": 4987871,
        "year": 2017,
        "business": 1067
    },
    {
        "id": 2132,
        "ca": 1470234,
        "margin": 829962,
        "ebitda": 51651,
        "loss": 8454350,
        "year": 2016,
        "business": 1067
    },
    {
        "id": 2133,
        "ca": 2826282,
        "margin": 649836,
        "ebitda": 509479,
        "loss": 6041428,
        "year": 2017,
        "business": 1068
    },
    {
        "id": 2134,
        "ca": 245755,
        "margin": 587147,
        "ebitda": 594271,
        "loss": 6957641,
        "year": 2016,
        "business": 1068
    },
    {
        "id": 2135,
        "ca": 3327290,
        "margin": 899824,
        "ebitda": 550704,
        "loss": 1504113,
        "year": 2017,
        "business": 1069
    },
    {
        "id": 2136,
        "ca": 341283,
        "margin": 119743,
        "ebitda": 570573,
        "loss": 55269,
        "year": 2016,
        "business": 1069
    },
    {
        "id": 2137,
        "ca": 462668,
        "margin": 604230,
        "ebitda": 356528,
        "loss": 8071941,
        "year": 2017,
        "business": 1070
    },
    {
        "id": 2138,
        "ca": 3380896,
        "margin": 756817,
        "ebitda": 99705,
        "loss": 9239734,
        "year": 2016,
        "business": 1070
    },
    {
        "id": 2139,
        "ca": 1135055,
        "margin": 443478,
        "ebitda": 546961,
        "loss": 9210909,
        "year": 2017,
        "business": 1071
    },
    {
        "id": 2140,
        "ca": 545741,
        "margin": -98098,
        "ebitda": 957298,
        "loss": 9236643,
        "year": 2016,
        "business": 1071
    },
    {
        "id": 2141,
        "ca": 2127852,
        "margin": -43695,
        "ebitda": 825959,
        "loss": 5476726,
        "year": 2017,
        "business": 1072
    },
    {
        "id": 2142,
        "ca": 3590326,
        "margin": 586725,
        "ebitda": 577118,
        "loss": 3504338,
        "year": 2016,
        "business": 1072
    },
    {
        "id": 2143,
        "ca": 2778639,
        "margin": -140897,
        "ebitda": 777472,
        "loss": 7785753,
        "year": 2017,
        "business": 1073
    },
    {
        "id": 2144,
        "ca": 2613872,
        "margin": 297422,
        "ebitda": 247167,
        "loss": 2497521,
        "year": 2016,
        "business": 1073
    },
    {
        "id": 2145,
        "ca": 3688832,
        "margin": 975240,
        "ebitda": 846552,
        "loss": 4088075,
        "year": 2017,
        "business": 1074
    },
    {
        "id": 2146,
        "ca": 1969358,
        "margin": 460144,
        "ebitda": 102752,
        "loss": 3499302,
        "year": 2016,
        "business": 1074
    },
    {
        "id": 2147,
        "ca": 2470780,
        "margin": 961928,
        "ebitda": 924211,
        "loss": 3421789,
        "year": 2017,
        "business": 1075
    },
    {
        "id": 2148,
        "ca": 224960,
        "margin": -119746,
        "ebitda": 372508,
        "loss": 3206750,
        "year": 2016,
        "business": 1075
    },
    {
        "id": 2149,
        "ca": 2764252,
        "margin": 529821,
        "ebitda": 114227,
        "loss": 5435275,
        "year": 2017,
        "business": 1076
    },
    {
        "id": 2150,
        "ca": 3652719,
        "margin": 405054,
        "ebitda": 531878,
        "loss": 2135356,
        "year": 2016,
        "business": 1076
    },
    {
        "id": 2151,
        "ca": 2185450,
        "margin": 931264,
        "ebitda": 662242,
        "loss": 1313372,
        "year": 2017,
        "business": 1077
    },
    {
        "id": 2152,
        "ca": 1044919,
        "margin": 516351,
        "ebitda": 784607,
        "loss": 6096208,
        "year": 2016,
        "business": 1077
    },
    {
        "id": 2153,
        "ca": 259137,
        "margin": -18515,
        "ebitda": 299908,
        "loss": 3178418,
        "year": 2017,
        "business": 1078
    },
    {
        "id": 2154,
        "ca": 2534435,
        "margin": 956966,
        "ebitda": 416290,
        "loss": 1027510,
        "year": 2016,
        "business": 1078
    },
    {
        "id": 2155,
        "ca": 1162815,
        "margin": -14235,
        "ebitda": 398776,
        "loss": 8756129,
        "year": 2017,
        "business": 1079
    },
    {
        "id": 2156,
        "ca": 459280,
        "margin": 193369,
        "ebitda": 207787,
        "loss": 1827340,
        "year": 2016,
        "business": 1079
    },
    {
        "id": 2157,
        "ca": 2620136,
        "margin": -101904,
        "ebitda": 479649,
        "loss": 7479609,
        "year": 2017,
        "business": 1080
    },
    {
        "id": 2158,
        "ca": 3287400,
        "margin": -151678,
        "ebitda": 813570,
        "loss": 1946322,
        "year": 2016,
        "business": 1080
    },
    {
        "id": 2159,
        "ca": 1140344,
        "margin": 723390,
        "ebitda": 100896,
        "loss": 1688200,
        "year": 2017,
        "business": 1081
    },
    {
        "id": 2160,
        "ca": 2717260,
        "margin": 210390,
        "ebitda": 676120,
        "loss": 2957295,
        "year": 2016,
        "business": 1081
    },
    {
        "id": 2161,
        "ca": 2538329,
        "margin": 734860,
        "ebitda": 508364,
        "loss": 451322,
        "year": 2017,
        "business": 1082
    },
    {
        "id": 2162,
        "ca": 2189921,
        "margin": 626527,
        "ebitda": 233808,
        "loss": 7066105,
        "year": 2016,
        "business": 1082
    },
    {
        "id": 2163,
        "ca": 3065956,
        "margin": -195154,
        "ebitda": 177226,
        "loss": 6948108,
        "year": 2017,
        "business": 1083
    },
    {
        "id": 2164,
        "ca": 3195702,
        "margin": -69009,
        "ebitda": 114003,
        "loss": 5127790,
        "year": 2016,
        "business": 1083
    },
    {
        "id": 2165,
        "ca": 422978,
        "margin": 94559,
        "ebitda": 823744,
        "loss": 3359150,
        "year": 2017,
        "business": 1084
    },
    {
        "id": 2166,
        "ca": 208146,
        "margin": 57654,
        "ebitda": 640763,
        "loss": 183093,
        "year": 2016,
        "business": 1084
    },
    {
        "id": 2167,
        "ca": 972570,
        "margin": 629649,
        "ebitda": 37940,
        "loss": 8979978,
        "year": 2017,
        "business": 1085
    },
    {
        "id": 2168,
        "ca": 396800,
        "margin": 834123,
        "ebitda": 67102,
        "loss": 7209932,
        "year": 2016,
        "business": 1085
    },
    {
        "id": 2169,
        "ca": 2943058,
        "margin": 215243,
        "ebitda": 48482,
        "loss": 4402355,
        "year": 2017,
        "business": 1086
    },
    {
        "id": 2170,
        "ca": 3257610,
        "margin": 320457,
        "ebitda": 263553,
        "loss": 4910999,
        "year": 2016,
        "business": 1086
    },
    {
        "id": 2171,
        "ca": 2664114,
        "margin": 490145,
        "ebitda": 36829,
        "loss": 6897664,
        "year": 2017,
        "business": 1087
    },
    {
        "id": 2172,
        "ca": 1131974,
        "margin": -42196,
        "ebitda": 313290,
        "loss": 9926057,
        "year": 2016,
        "business": 1087
    },
    {
        "id": 2173,
        "ca": 1941867,
        "margin": 471839,
        "ebitda": 13173,
        "loss": 7905781,
        "year": 2017,
        "business": 1088
    },
    {
        "id": 2174,
        "ca": 331860,
        "margin": 690879,
        "ebitda": 662024,
        "loss": 6624351,
        "year": 2016,
        "business": 1088
    },
    {
        "id": 2175,
        "ca": 3125130,
        "margin": 744785,
        "ebitda": 447239,
        "loss": 7954513,
        "year": 2017,
        "business": 1089
    },
    {
        "id": 2176,
        "ca": 1776670,
        "margin": 335968,
        "ebitda": 530468,
        "loss": 7222889,
        "year": 2016,
        "business": 1089
    },
    {
        "id": 2177,
        "ca": 742960,
        "margin": 858653,
        "ebitda": 281458,
        "loss": 3466749,
        "year": 2017,
        "business": 1090
    },
    {
        "id": 2178,
        "ca": 707651,
        "margin": 759887,
        "ebitda": 88486,
        "loss": 8495068,
        "year": 2016,
        "business": 1090
    },
    {
        "id": 2179,
        "ca": 3789623,
        "margin": 594833,
        "ebitda": 468811,
        "loss": 4259578,
        "year": 2017,
        "business": 1091
    },
    {
        "id": 2180,
        "ca": 2673438,
        "margin": -174464,
        "ebitda": 146370,
        "loss": 3437376,
        "year": 2016,
        "business": 1091
    },
    {
        "id": 2181,
        "ca": 3983091,
        "margin": 321894,
        "ebitda": 468394,
        "loss": 3598738,
        "year": 2017,
        "business": 1092
    },
    {
        "id": 2182,
        "ca": 2155612,
        "margin": -90426,
        "ebitda": 135069,
        "loss": 7570748,
        "year": 2016,
        "business": 1092
    },
    {
        "id": 2183,
        "ca": 3356712,
        "margin": 434919,
        "ebitda": 545026,
        "loss": 493058,
        "year": 2017,
        "business": 1093
    },
    {
        "id": 2184,
        "ca": 3389973,
        "margin": 434454,
        "ebitda": 498436,
        "loss": 5510423,
        "year": 2016,
        "business": 1093
    },
    {
        "id": 2185,
        "ca": 2478546,
        "margin": 961503,
        "ebitda": 857657,
        "loss": 8775511,
        "year": 2017,
        "business": 1094
    },
    {
        "id": 2186,
        "ca": 938287,
        "margin": -55114,
        "ebitda": 950421,
        "loss": 4285809,
        "year": 2016,
        "business": 1094
    },
    {
        "id": 2187,
        "ca": 1968605,
        "margin": -125632,
        "ebitda": 475499,
        "loss": 812398,
        "year": 2017,
        "business": 1095
    },
    {
        "id": 2188,
        "ca": 3267318,
        "margin": 842626,
        "ebitda": 764070,
        "loss": 5126685,
        "year": 2016,
        "business": 1095
    },
    {
        "id": 2189,
        "ca": 3801438,
        "margin": -153083,
        "ebitda": 245354,
        "loss": 2158373,
        "year": 2017,
        "business": 1096
    },
    {
        "id": 2190,
        "ca": 3778888,
        "margin": 127422,
        "ebitda": 594834,
        "loss": 4421471,
        "year": 2016,
        "business": 1096
    },
    {
        "id": 2191,
        "ca": 3416590,
        "margin": -157804,
        "ebitda": 343015,
        "loss": 7227365,
        "year": 2017,
        "business": 1097
    },
    {
        "id": 2192,
        "ca": 377108,
        "margin": -138893,
        "ebitda": 871520,
        "loss": 9007279,
        "year": 2016,
        "business": 1097
    },
    {
        "id": 2193,
        "ca": 2568272,
        "margin": 984764,
        "ebitda": 373439,
        "loss": 9908569,
        "year": 2017,
        "business": 1098
    },
    {
        "id": 2194,
        "ca": 2921971,
        "margin": 977489,
        "ebitda": 449249,
        "loss": 6869930,
        "year": 2016,
        "business": 1098
    },
    {
        "id": 2195,
        "ca": 1355013,
        "margin": 850802,
        "ebitda": 11507,
        "loss": 6313235,
        "year": 2017,
        "business": 1099
    },
    {
        "id": 2196,
        "ca": 830234,
        "margin": -183139,
        "ebitda": 848478,
        "loss": 4909293,
        "year": 2016,
        "business": 1099
    },
    {
        "id": 2197,
        "ca": 2840236,
        "margin": 440627,
        "ebitda": 163252,
        "loss": 3711355,
        "year": 2017,
        "business": 1100
    },
    {
        "id": 2198,
        "ca": 2589957,
        "margin": 249459,
        "ebitda": 93916,
        "loss": 3213459,
        "year": 2016,
        "business": 1100
    },
    {
        "id": 2199,
        "ca": 2549056,
        "margin": -85700,
        "ebitda": 5389,
        "loss": 2116436,
        "year": 2017,
        "business": 1101
    },
    {
        "id": 2200,
        "ca": 3944708,
        "margin": 719236,
        "ebitda": 173232,
        "loss": 1386439,
        "year": 2016,
        "business": 1101
    },
    {
        "id": 2201,
        "ca": 437190,
        "margin": 493156,
        "ebitda": 157659,
        "loss": 7395462,
        "year": 2017,
        "business": 1102
    },
    {
        "id": 2202,
        "ca": 1065528,
        "margin": 763303,
        "ebitda": 373006,
        "loss": 1495155,
        "year": 2016,
        "business": 1102
    },
    {
        "id": 2203,
        "ca": 3755756,
        "margin": 262148,
        "ebitda": 913094,
        "loss": 1041892,
        "year": 2017,
        "business": 1103
    },
    {
        "id": 2204,
        "ca": 2234815,
        "margin": 852632,
        "ebitda": 974573,
        "loss": 9917319,
        "year": 2016,
        "business": 1103
    },
    {
        "id": 2205,
        "ca": 3946624,
        "margin": 34429,
        "ebitda": 402147,
        "loss": 111655,
        "year": 2017,
        "business": 1104
    },
    {
        "id": 2206,
        "ca": 3681572,
        "margin": -8227,
        "ebitda": 626437,
        "loss": 4923464,
        "year": 2016,
        "business": 1104
    },
    {
        "id": 2207,
        "ca": 1005335,
        "margin": 368433,
        "ebitda": 550062,
        "loss": 900926,
        "year": 2017,
        "business": 1105
    },
    {
        "id": 2208,
        "ca": 888539,
        "margin": 94321,
        "ebitda": 784603,
        "loss": 5320548,
        "year": 2016,
        "business": 1105
    },
    {
        "id": 2209,
        "ca": 2395166,
        "margin": 969533,
        "ebitda": 71778,
        "loss": 2587520,
        "year": 2017,
        "business": 1106
    },
    {
        "id": 2210,
        "ca": 3616153,
        "margin": 226390,
        "ebitda": 991195,
        "loss": 2094547,
        "year": 2016,
        "business": 1106
    },
    {
        "id": 2211,
        "ca": 422266,
        "margin": 682533,
        "ebitda": 431425,
        "loss": 6597671,
        "year": 2017,
        "business": 1107
    },
    {
        "id": 2212,
        "ca": 3342599,
        "margin": 218946,
        "ebitda": 392966,
        "loss": 1752443,
        "year": 2016,
        "business": 1107
    },
    {
        "id": 2213,
        "ca": 2782561,
        "margin": 777578,
        "ebitda": 930379,
        "loss": 8318681,
        "year": 2017,
        "business": 1108
    },
    {
        "id": 2214,
        "ca": 3787599,
        "margin": 645089,
        "ebitda": 267539,
        "loss": 2980623,
        "year": 2016,
        "business": 1108
    },
    {
        "id": 2215,
        "ca": 1550625,
        "margin": -85942,
        "ebitda": 907511,
        "loss": 3183937,
        "year": 2017,
        "business": 1109
    },
    {
        "id": 2216,
        "ca": 712133,
        "margin": 968052,
        "ebitda": 132100,
        "loss": 1854200,
        "year": 2016,
        "business": 1109
    },
    {
        "id": 2217,
        "ca": 692862,
        "margin": 690260,
        "ebitda": 169366,
        "loss": 1084,
        "year": 2017,
        "business": 1110
    },
    {
        "id": 2218,
        "ca": 3019123,
        "margin": 16984,
        "ebitda": 191909,
        "loss": 8781499,
        "year": 2016,
        "business": 1110
    },
    {
        "id": 2219,
        "ca": 3888122,
        "margin": 403405,
        "ebitda": 860517,
        "loss": 2219960,
        "year": 2017,
        "business": 1111
    },
    {
        "id": 2220,
        "ca": 3486309,
        "margin": 941118,
        "ebitda": 792651,
        "loss": 5300191,
        "year": 2016,
        "business": 1111
    },
    {
        "id": 2221,
        "ca": 1927731,
        "margin": 429683,
        "ebitda": 191211,
        "loss": 7817217,
        "year": 2017,
        "business": 1112
    },
    {
        "id": 2222,
        "ca": 3277944,
        "margin": 627776,
        "ebitda": 459614,
        "loss": 3720740,
        "year": 2016,
        "business": 1112
    },
    {
        "id": 2223,
        "ca": 882814,
        "margin": 758601,
        "ebitda": 216464,
        "loss": 4544052,
        "year": 2017,
        "business": 1113
    },
    {
        "id": 2224,
        "ca": 2631088,
        "margin": 956106,
        "ebitda": 622017,
        "loss": 8809182,
        "year": 2016,
        "business": 1113
    },
    {
        "id": 2225,
        "ca": 3444784,
        "margin": 195522,
        "ebitda": 376220,
        "loss": 2911014,
        "year": 2017,
        "business": 1114
    },
    {
        "id": 2226,
        "ca": 682068,
        "margin": 269857,
        "ebitda": 464165,
        "loss": 192658,
        "year": 2016,
        "business": 1114
    },
    {
        "id": 2227,
        "ca": 2562170,
        "margin": 81679,
        "ebitda": 799147,
        "loss": 5478487,
        "year": 2017,
        "business": 1115
    },
    {
        "id": 2228,
        "ca": 1890803,
        "margin": 59146,
        "ebitda": 630618,
        "loss": 8869806,
        "year": 2016,
        "business": 1115
    },
    {
        "id": 2229,
        "ca": 681126,
        "margin": 376036,
        "ebitda": 167727,
        "loss": 4979890,
        "year": 2017,
        "business": 1116
    },
    {
        "id": 2230,
        "ca": 2944448,
        "margin": 994337,
        "ebitda": 79204,
        "loss": 6921074,
        "year": 2016,
        "business": 1116
    },
    {
        "id": 2231,
        "ca": 585068,
        "margin": 225329,
        "ebitda": 90207,
        "loss": 6434449,
        "year": 2017,
        "business": 1117
    },
    {
        "id": 2232,
        "ca": 1204281,
        "margin": 854108,
        "ebitda": 966444,
        "loss": 8562260,
        "year": 2016,
        "business": 1117
    },
    {
        "id": 2233,
        "ca": 893560,
        "margin": 97802,
        "ebitda": 904144,
        "loss": 3800312,
        "year": 2017,
        "business": 1118
    },
    {
        "id": 2234,
        "ca": 2349739,
        "margin": 434666,
        "ebitda": 56349,
        "loss": 561275,
        "year": 2016,
        "business": 1118
    },
    {
        "id": 2235,
        "ca": 1614918,
        "margin": 382197,
        "ebitda": 844139,
        "loss": 5643268,
        "year": 2017,
        "business": 1119
    },
    {
        "id": 2236,
        "ca": 3785592,
        "margin": 665218,
        "ebitda": 469223,
        "loss": 6358594,
        "year": 2016,
        "business": 1119
    },
    {
        "id": 2237,
        "ca": 1392867,
        "margin": 368445,
        "ebitda": 46335,
        "loss": 9507259,
        "year": 2017,
        "business": 1120
    },
    {
        "id": 2238,
        "ca": 1757963,
        "margin": 725923,
        "ebitda": 403027,
        "loss": 8971658,
        "year": 2016,
        "business": 1120
    },
    {
        "id": 2239,
        "ca": 1341838,
        "margin": 754167,
        "ebitda": 335288,
        "loss": 3878838,
        "year": 2017,
        "business": 1121
    },
    {
        "id": 2240,
        "ca": 2619963,
        "margin": -83882,
        "ebitda": 126462,
        "loss": 1145383,
        "year": 2016,
        "business": 1121
    },
    {
        "id": 2241,
        "ca": 2437096,
        "margin": 487616,
        "ebitda": 912412,
        "loss": 6760181,
        "year": 2017,
        "business": 1122
    },
    {
        "id": 2242,
        "ca": 316486,
        "margin": 139218,
        "ebitda": 224389,
        "loss": 603330,
        "year": 2016,
        "business": 1122
    },
    {
        "id": 2243,
        "ca": 2921327,
        "margin": 373338,
        "ebitda": 511463,
        "loss": 4733450,
        "year": 2017,
        "business": 1123
    },
    {
        "id": 2244,
        "ca": 2505362,
        "margin": 187809,
        "ebitda": 122822,
        "loss": 1032870,
        "year": 2016,
        "business": 1123
    },
    {
        "id": 2245,
        "ca": 2126856,
        "margin": 877768,
        "ebitda": 847746,
        "loss": 4021009,
        "year": 2017,
        "business": 1124
    },
    {
        "id": 2246,
        "ca": 1477996,
        "margin": 45120,
        "ebitda": 972963,
        "loss": 2583371,
        "year": 2016,
        "business": 1124
    },
    {
        "id": 2247,
        "ca": 2432945,
        "margin": 291324,
        "ebitda": 683014,
        "loss": 7616154,
        "year": 2017,
        "business": 1125
    },
    {
        "id": 2248,
        "ca": 3769832,
        "margin": 216140,
        "ebitda": 551569,
        "loss": 5413005,
        "year": 2016,
        "business": 1125
    },
    {
        "id": 2249,
        "ca": 135769,
        "margin": -156465,
        "ebitda": 403001,
        "loss": 3563671,
        "year": 2017,
        "business": 1126
    },
    {
        "id": 2250,
        "ca": 212281,
        "margin": 467116,
        "ebitda": 121450,
        "loss": 9302688,
        "year": 2016,
        "business": 1126
    },
    {
        "id": 2251,
        "ca": 1777633,
        "margin": 460911,
        "ebitda": 644913,
        "loss": 1587930,
        "year": 2017,
        "business": 1127
    },
    {
        "id": 2252,
        "ca": 2546679,
        "margin": 595119,
        "ebitda": 553749,
        "loss": 5492039,
        "year": 2016,
        "business": 1127
    },
    {
        "id": 2253,
        "ca": 3746698,
        "margin": 213990,
        "ebitda": 43605,
        "loss": 6109786,
        "year": 2017,
        "business": 1128
    },
    {
        "id": 2254,
        "ca": 3114941,
        "margin": 361126,
        "ebitda": 441915,
        "loss": 2765979,
        "year": 2016,
        "business": 1128
    },
    {
        "id": 2255,
        "ca": 3325510,
        "margin": 769574,
        "ebitda": 66975,
        "loss": 4644168,
        "year": 2017,
        "business": 1129
    },
    {
        "id": 2256,
        "ca": 3517098,
        "margin": 337812,
        "ebitda": 800242,
        "loss": 7143754,
        "year": 2016,
        "business": 1129
    },
    {
        "id": 2257,
        "ca": 3861761,
        "margin": -24465,
        "ebitda": 484479,
        "loss": 5561445,
        "year": 2017,
        "business": 1130
    },
    {
        "id": 2258,
        "ca": 3557896,
        "margin": 591734,
        "ebitda": 343633,
        "loss": 4083362,
        "year": 2016,
        "business": 1130
    },
    {
        "id": 2259,
        "ca": 1920785,
        "margin": 667395,
        "ebitda": 732506,
        "loss": 716880,
        "year": 2017,
        "business": 1131
    },
    {
        "id": 2260,
        "ca": 2539401,
        "margin": 62751,
        "ebitda": 353245,
        "loss": 5528983,
        "year": 2016,
        "business": 1131
    },
    {
        "id": 2261,
        "ca": 395830,
        "margin": -31127,
        "ebitda": 569196,
        "loss": 3324194,
        "year": 2017,
        "business": 1132
    },
    {
        "id": 2262,
        "ca": 3982803,
        "margin": 230150,
        "ebitda": 413155,
        "loss": 4555447,
        "year": 2016,
        "business": 1132
    },
    {
        "id": 2263,
        "ca": 2969124,
        "margin": 83607,
        "ebitda": 616539,
        "loss": 4563818,
        "year": 2017,
        "business": 1133
    },
    {
        "id": 2264,
        "ca": 3501568,
        "margin": 971779,
        "ebitda": 503991,
        "loss": 6859937,
        "year": 2016,
        "business": 1133
    },
    {
        "id": 2265,
        "ca": 2642821,
        "margin": 814335,
        "ebitda": 488875,
        "loss": 9368034,
        "year": 2017,
        "business": 1134
    },
    {
        "id": 2266,
        "ca": 3384738,
        "margin": 221024,
        "ebitda": 139033,
        "loss": 2968175,
        "year": 2016,
        "business": 1134
    },
    {
        "id": 2267,
        "ca": 2569913,
        "margin": 496831,
        "ebitda": 535131,
        "loss": 7106661,
        "year": 2017,
        "business": 1135
    },
    {
        "id": 2268,
        "ca": 2087883,
        "margin": 213266,
        "ebitda": 544093,
        "loss": 9546973,
        "year": 2016,
        "business": 1135
    },
    {
        "id": 2269,
        "ca": 3406554,
        "margin": -185455,
        "ebitda": 71849,
        "loss": 3334975,
        "year": 2017,
        "business": 1136
    },
    {
        "id": 2270,
        "ca": 2593135,
        "margin": 708076,
        "ebitda": 879420,
        "loss": 9313385,
        "year": 2016,
        "business": 1136
    },
    {
        "id": 2271,
        "ca": 1884890,
        "margin": 183610,
        "ebitda": 41640,
        "loss": 8047935,
        "year": 2017,
        "business": 1137
    },
    {
        "id": 2272,
        "ca": 538038,
        "margin": 924445,
        "ebitda": 219592,
        "loss": 4407039,
        "year": 2016,
        "business": 1137
    },
    {
        "id": 2273,
        "ca": 119365,
        "margin": 60990,
        "ebitda": 703590,
        "loss": 284338,
        "year": 2017,
        "business": 1138
    },
    {
        "id": 2274,
        "ca": 3946517,
        "margin": 390557,
        "ebitda": 662955,
        "loss": 9170616,
        "year": 2016,
        "business": 1138
    },
    {
        "id": 2275,
        "ca": 2813075,
        "margin": 630400,
        "ebitda": 67567,
        "loss": 1476733,
        "year": 2017,
        "business": 1139
    },
    {
        "id": 2276,
        "ca": 3576450,
        "margin": 661458,
        "ebitda": 371638,
        "loss": 9636123,
        "year": 2016,
        "business": 1139
    },
    {
        "id": 2277,
        "ca": 3365933,
        "margin": 823024,
        "ebitda": 56764,
        "loss": 110733,
        "year": 2017,
        "business": 1140
    },
    {
        "id": 2278,
        "ca": 228843,
        "margin": 290197,
        "ebitda": 142212,
        "loss": 4974910,
        "year": 2016,
        "business": 1140
    },
    {
        "id": 2279,
        "ca": 3958314,
        "margin": 893118,
        "ebitda": 141658,
        "loss": 8494474,
        "year": 2017,
        "business": 1141
    },
    {
        "id": 2280,
        "ca": 527951,
        "margin": 19072,
        "ebitda": 612565,
        "loss": 3916439,
        "year": 2016,
        "business": 1141
    },
    {
        "id": 2281,
        "ca": 3462684,
        "margin": 644266,
        "ebitda": 472240,
        "loss": 7405624,
        "year": 2017,
        "business": 1142
    },
    {
        "id": 2282,
        "ca": 3537276,
        "margin": 663791,
        "ebitda": 796987,
        "loss": 2377887,
        "year": 2016,
        "business": 1142
    },
    {
        "id": 2283,
        "ca": 2544895,
        "margin": -141165,
        "ebitda": 283671,
        "loss": 508099,
        "year": 2017,
        "business": 1143
    },
    {
        "id": 2284,
        "ca": 3698373,
        "margin": 404379,
        "ebitda": 571012,
        "loss": 1987033,
        "year": 2016,
        "business": 1143
    },
    {
        "id": 2285,
        "ca": 3210938,
        "margin": -189704,
        "ebitda": 553580,
        "loss": 4995940,
        "year": 2017,
        "business": 1144
    },
    {
        "id": 2286,
        "ca": 2992011,
        "margin": 586103,
        "ebitda": 514250,
        "loss": 8596448,
        "year": 2016,
        "business": 1144
    },
    {
        "id": 2287,
        "ca": 1336448,
        "margin": 490008,
        "ebitda": 750571,
        "loss": 3664654,
        "year": 2017,
        "business": 1145
    },
    {
        "id": 2288,
        "ca": 2992164,
        "margin": 538208,
        "ebitda": 647371,
        "loss": 4033479,
        "year": 2016,
        "business": 1145
    },
    {
        "id": 2289,
        "ca": 3194909,
        "margin": 186423,
        "ebitda": 226764,
        "loss": 4638762,
        "year": 2017,
        "business": 1146
    },
    {
        "id": 2290,
        "ca": 2755844,
        "margin": 12454,
        "ebitda": 648122,
        "loss": 6664079,
        "year": 2016,
        "business": 1146
    },
    {
        "id": 2291,
        "ca": 3602830,
        "margin": -154058,
        "ebitda": 524059,
        "loss": 9102881,
        "year": 2017,
        "business": 1147
    },
    {
        "id": 2292,
        "ca": 2506505,
        "margin": -175518,
        "ebitda": 657072,
        "loss": 36933,
        "year": 2016,
        "business": 1147
    },
    {
        "id": 2293,
        "ca": 2839567,
        "margin": 732502,
        "ebitda": 374009,
        "loss": 2046547,
        "year": 2017,
        "business": 1148
    },
    {
        "id": 2294,
        "ca": 1146459,
        "margin": 591485,
        "ebitda": 162006,
        "loss": 1718123,
        "year": 2016,
        "business": 1148
    },
    {
        "id": 2295,
        "ca": 358435,
        "margin": 337169,
        "ebitda": 629865,
        "loss": 6094688,
        "year": 2017,
        "business": 1149
    },
    {
        "id": 2296,
        "ca": 785779,
        "margin": 885873,
        "ebitda": 269914,
        "loss": 7522765,
        "year": 2016,
        "business": 1149
    },
    {
        "id": 2297,
        "ca": 1021656,
        "margin": 507711,
        "ebitda": 624623,
        "loss": 6483736,
        "year": 2017,
        "business": 1150
    },
    {
        "id": 2298,
        "ca": 1670117,
        "margin": 194408,
        "ebitda": 359738,
        "loss": 6034374,
        "year": 2016,
        "business": 1150
    },
    {
        "id": 2299,
        "ca": 2611382,
        "margin": 425943,
        "ebitda": 316796,
        "loss": 9923888,
        "year": 2017,
        "business": 1151
    },
    {
        "id": 2300,
        "ca": 2595729,
        "margin": 157343,
        "ebitda": 198976,
        "loss": 3155285,
        "year": 2016,
        "business": 1151
    },
    {
        "id": 2301,
        "ca": 2285910,
        "margin": 63737,
        "ebitda": 362562,
        "loss": 6239080,
        "year": 2017,
        "business": 1152
    },
    {
        "id": 2302,
        "ca": 289467,
        "margin": 840863,
        "ebitda": 585829,
        "loss": 1982316,
        "year": 2016,
        "business": 1152
    },
    {
        "id": 2303,
        "ca": 2965432,
        "margin": 184079,
        "ebitda": 744758,
        "loss": 4597289,
        "year": 2017,
        "business": 1153
    },
    {
        "id": 2304,
        "ca": 2799755,
        "margin": 49662,
        "ebitda": 133091,
        "loss": 1774510,
        "year": 2016,
        "business": 1153
    },
    {
        "id": 2305,
        "ca": 1057476,
        "margin": 441918,
        "ebitda": 156841,
        "loss": 4403545,
        "year": 2017,
        "business": 1154
    },
    {
        "id": 2306,
        "ca": 3085139,
        "margin": 623575,
        "ebitda": 969986,
        "loss": 3834447,
        "year": 2016,
        "business": 1154
    },
    {
        "id": 2307,
        "ca": 3184439,
        "margin": 488997,
        "ebitda": 470887,
        "loss": 341753,
        "year": 2017,
        "business": 1155
    },
    {
        "id": 2308,
        "ca": 2695711,
        "margin": 223140,
        "ebitda": 282841,
        "loss": 9950206,
        "year": 2016,
        "business": 1155
    },
    {
        "id": 2309,
        "ca": 2323601,
        "margin": -130096,
        "ebitda": 292465,
        "loss": 6739558,
        "year": 2017,
        "business": 1156
    },
    {
        "id": 2310,
        "ca": 3910324,
        "margin": 975948,
        "ebitda": 123494,
        "loss": 5361820,
        "year": 2016,
        "business": 1156
    },
    {
        "id": 2311,
        "ca": 1383179,
        "margin": 525934,
        "ebitda": 620050,
        "loss": 5708808,
        "year": 2017,
        "business": 1157
    },
    {
        "id": 2312,
        "ca": 181821,
        "margin": 273390,
        "ebitda": 187686,
        "loss": 195782,
        "year": 2016,
        "business": 1157
    },
    {
        "id": 2313,
        "ca": 1837254,
        "margin": -23600,
        "ebitda": 630765,
        "loss": 330346,
        "year": 2017,
        "business": 1158
    },
    {
        "id": 2314,
        "ca": 364299,
        "margin": 981381,
        "ebitda": 716787,
        "loss": 7314765,
        "year": 2016,
        "business": 1158
    },
    {
        "id": 2315,
        "ca": 1124569,
        "margin": 244282,
        "ebitda": 867654,
        "loss": 9078361,
        "year": 2017,
        "business": 1159
    },
    {
        "id": 2316,
        "ca": 403549,
        "margin": 959000,
        "ebitda": 741391,
        "loss": 3199016,
        "year": 2016,
        "business": 1159
    },
    {
        "id": 2317,
        "ca": 928986,
        "margin": -169867,
        "ebitda": 599256,
        "loss": 3641711,
        "year": 2017,
        "business": 1160
    },
    {
        "id": 2318,
        "ca": 2861820,
        "margin": 645921,
        "ebitda": 833062,
        "loss": 5892050,
        "year": 2016,
        "business": 1160
    },
    {
        "id": 2319,
        "ca": 396503,
        "margin": 759077,
        "ebitda": 316573,
        "loss": 2058773,
        "year": 2017,
        "business": 1161
    },
    {
        "id": 2320,
        "ca": 3285593,
        "margin": 3312,
        "ebitda": 902305,
        "loss": 1983829,
        "year": 2016,
        "business": 1161
    },
    {
        "id": 2321,
        "ca": 1890402,
        "margin": -178874,
        "ebitda": 155672,
        "loss": 4156046,
        "year": 2017,
        "business": 1162
    },
    {
        "id": 2322,
        "ca": 1319212,
        "margin": 717738,
        "ebitda": 472275,
        "loss": 2953966,
        "year": 2016,
        "business": 1162
    },
    {
        "id": 2323,
        "ca": 1554459,
        "margin": 531257,
        "ebitda": 718279,
        "loss": 269453,
        "year": 2017,
        "business": 1163
    },
    {
        "id": 2324,
        "ca": 2906345,
        "margin": 748364,
        "ebitda": 135631,
        "loss": 2041759,
        "year": 2016,
        "business": 1163
    },
    {
        "id": 2325,
        "ca": 3447094,
        "margin": 203296,
        "ebitda": 792136,
        "loss": 7500645,
        "year": 2017,
        "business": 1164
    },
    {
        "id": 2326,
        "ca": 2852163,
        "margin": -63678,
        "ebitda": 865549,
        "loss": 6324055,
        "year": 2016,
        "business": 1164
    },
    {
        "id": 2327,
        "ca": 1296714,
        "margin": 816170,
        "ebitda": 828818,
        "loss": 8073508,
        "year": 2017,
        "business": 1165
    },
    {
        "id": 2328,
        "ca": 1180926,
        "margin": 607709,
        "ebitda": 753816,
        "loss": 4592164,
        "year": 2016,
        "business": 1165
    },
    {
        "id": 2329,
        "ca": 2067456,
        "margin": 314329,
        "ebitda": 276534,
        "loss": 6637806,
        "year": 2017,
        "business": 1166
    },
    {
        "id": 2330,
        "ca": 2187099,
        "margin": 683866,
        "ebitda": 911399,
        "loss": 8801200,
        "year": 2016,
        "business": 1166
    },
    {
        "id": 2331,
        "ca": 3890899,
        "margin": 441660,
        "ebitda": 222974,
        "loss": 8363608,
        "year": 2017,
        "business": 1167
    },
    {
        "id": 2332,
        "ca": 3162720,
        "margin": 519856,
        "ebitda": 301416,
        "loss": 3767343,
        "year": 2016,
        "business": 1167
    },
    {
        "id": 2333,
        "ca": 523895,
        "margin": -12046,
        "ebitda": 453440,
        "loss": 4037711,
        "year": 2017,
        "business": 1168
    },
    {
        "id": 2334,
        "ca": 1173626,
        "margin": 174745,
        "ebitda": 946818,
        "loss": 2245031,
        "year": 2016,
        "business": 1168
    },
    {
        "id": 2335,
        "ca": 3307617,
        "margin": -1987,
        "ebitda": 923815,
        "loss": 8106555,
        "year": 2017,
        "business": 1169
    },
    {
        "id": 2336,
        "ca": 3812238,
        "margin": 399970,
        "ebitda": 626752,
        "loss": 5883384,
        "year": 2016,
        "business": 1169
    },
    {
        "id": 2337,
        "ca": 1667068,
        "margin": 265689,
        "ebitda": 155850,
        "loss": 390853,
        "year": 2017,
        "business": 1170
    },
    {
        "id": 2338,
        "ca": 1562368,
        "margin": 382981,
        "ebitda": 11510,
        "loss": 3963531,
        "year": 2016,
        "business": 1170
    },
    {
        "id": 2339,
        "ca": 2925064,
        "margin": 122742,
        "ebitda": 230410,
        "loss": 4527692,
        "year": 2017,
        "business": 1171
    },
    {
        "id": 2340,
        "ca": 3463883,
        "margin": 119451,
        "ebitda": 777862,
        "loss": 2700523,
        "year": 2016,
        "business": 1171
    },
    {
        "id": 2341,
        "ca": 1285405,
        "margin": 351543,
        "ebitda": 862074,
        "loss": 9415788,
        "year": 2017,
        "business": 1172
    },
    {
        "id": 2342,
        "ca": 1679240,
        "margin": 594176,
        "ebitda": 727597,
        "loss": 7062503,
        "year": 2016,
        "business": 1172
    },
    {
        "id": 2343,
        "ca": 2860440,
        "margin": 229094,
        "ebitda": 643970,
        "loss": 3686020,
        "year": 2017,
        "business": 1173
    },
    {
        "id": 2344,
        "ca": 1571485,
        "margin": 719144,
        "ebitda": 204031,
        "loss": 3557270,
        "year": 2016,
        "business": 1173
    },
    {
        "id": 2345,
        "ca": 2687578,
        "margin": 812459,
        "ebitda": 598150,
        "loss": 1097899,
        "year": 2017,
        "business": 1174
    },
    {
        "id": 2346,
        "ca": 294285,
        "margin": -68914,
        "ebitda": 386469,
        "loss": 2642747,
        "year": 2016,
        "business": 1174
    },
    {
        "id": 2347,
        "ca": 2779532,
        "margin": 262840,
        "ebitda": 889096,
        "loss": 4960989,
        "year": 2017,
        "business": 1175
    },
    {
        "id": 2348,
        "ca": 595444,
        "margin": 533623,
        "ebitda": 622157,
        "loss": 6647924,
        "year": 2016,
        "business": 1175
    },
    {
        "id": 2349,
        "ca": 366675,
        "margin": 738947,
        "ebitda": 675433,
        "loss": 2870953,
        "year": 2017,
        "business": 1176
    },
    {
        "id": 2350,
        "ca": 2866906,
        "margin": 607038,
        "ebitda": 175704,
        "loss": 1440136,
        "year": 2016,
        "business": 1176
    },
    {
        "id": 2351,
        "ca": 2300901,
        "margin": 21458,
        "ebitda": 790803,
        "loss": 5132923,
        "year": 2017,
        "business": 1177
    },
    {
        "id": 2352,
        "ca": 3489522,
        "margin": 931936,
        "ebitda": 801643,
        "loss": 4808791,
        "year": 2016,
        "business": 1177
    },
    {
        "id": 2353,
        "ca": 3412747,
        "margin": 947042,
        "ebitda": 910029,
        "loss": 1947641,
        "year": 2017,
        "business": 1178
    },
    {
        "id": 2354,
        "ca": 1956790,
        "margin": 958065,
        "ebitda": 565309,
        "loss": 7660599,
        "year": 2016,
        "business": 1178
    },
    {
        "id": 2355,
        "ca": 1568063,
        "margin": 62833,
        "ebitda": 207237,
        "loss": 6307868,
        "year": 2017,
        "business": 1179
    },
    {
        "id": 2356,
        "ca": 1941614,
        "margin": 943627,
        "ebitda": 850972,
        "loss": 7008539,
        "year": 2016,
        "business": 1179
    },
    {
        "id": 2357,
        "ca": 1413434,
        "margin": -198488,
        "ebitda": 919047,
        "loss": 884992,
        "year": 2017,
        "business": 1180
    },
    {
        "id": 2358,
        "ca": 3223334,
        "margin": 197753,
        "ebitda": 839964,
        "loss": 654740,
        "year": 2016,
        "business": 1180
    },
    {
        "id": 2359,
        "ca": 722645,
        "margin": 161551,
        "ebitda": 662831,
        "loss": 1356749,
        "year": 2017,
        "business": 1181
    },
    {
        "id": 2360,
        "ca": 326444,
        "margin": 445708,
        "ebitda": 448271,
        "loss": 7629668,
        "year": 2016,
        "business": 1181
    },
    {
        "id": 2361,
        "ca": 529619,
        "margin": 331955,
        "ebitda": 646647,
        "loss": 3535870,
        "year": 2017,
        "business": 1182
    },
    {
        "id": 2362,
        "ca": 2762765,
        "margin": 547256,
        "ebitda": 285767,
        "loss": 1562770,
        "year": 2016,
        "business": 1182
    },
    {
        "id": 2363,
        "ca": 3471496,
        "margin": 801027,
        "ebitda": 892427,
        "loss": 9985604,
        "year": 2017,
        "business": 1183
    },
    {
        "id": 2364,
        "ca": 550979,
        "margin": 555238,
        "ebitda": 205400,
        "loss": 7487590,
        "year": 2016,
        "business": 1183
    },
    {
        "id": 2365,
        "ca": 995998,
        "margin": 374164,
        "ebitda": 578755,
        "loss": 7068204,
        "year": 2017,
        "business": 1184
    },
    {
        "id": 2366,
        "ca": 2055987,
        "margin": 365581,
        "ebitda": 822455,
        "loss": 8436882,
        "year": 2016,
        "business": 1184
    },
    {
        "id": 2367,
        "ca": 1759245,
        "margin": 217688,
        "ebitda": 233775,
        "loss": 1527604,
        "year": 2017,
        "business": 1185
    },
    {
        "id": 2368,
        "ca": 3144748,
        "margin": 943888,
        "ebitda": 684002,
        "loss": 6144160,
        "year": 2016,
        "business": 1185
    },
    {
        "id": 2369,
        "ca": 2762880,
        "margin": 935547,
        "ebitda": 475909,
        "loss": 2616824,
        "year": 2017,
        "business": 1186
    },
    {
        "id": 2370,
        "ca": 2427457,
        "margin": 535535,
        "ebitda": 857922,
        "loss": 3604422,
        "year": 2016,
        "business": 1186
    },
    {
        "id": 2371,
        "ca": 608907,
        "margin": 232346,
        "ebitda": 182998,
        "loss": 4482450,
        "year": 2017,
        "business": 1187
    },
    {
        "id": 2372,
        "ca": 2892392,
        "margin": 682223,
        "ebitda": 995255,
        "loss": 5096605,
        "year": 2016,
        "business": 1187
    },
    {
        "id": 2373,
        "ca": 103806,
        "margin": 652161,
        "ebitda": 55773,
        "loss": 4610112,
        "year": 2017,
        "business": 1188
    },
    {
        "id": 2374,
        "ca": 1749159,
        "margin": 92327,
        "ebitda": 771155,
        "loss": 9429054,
        "year": 2016,
        "business": 1188
    },
    {
        "id": 2375,
        "ca": 496689,
        "margin": 907225,
        "ebitda": 847624,
        "loss": 2870199,
        "year": 2017,
        "business": 1189
    },
    {
        "id": 2376,
        "ca": 135074,
        "margin": -6211,
        "ebitda": 630370,
        "loss": 3300640,
        "year": 2016,
        "business": 1189
    },
    {
        "id": 2377,
        "ca": 3959745,
        "margin": 164875,
        "ebitda": 33559,
        "loss": 4860253,
        "year": 2017,
        "business": 1190
    },
    {
        "id": 2378,
        "ca": 2616436,
        "margin": 703387,
        "ebitda": 773764,
        "loss": 4497309,
        "year": 2016,
        "business": 1190
    },
    {
        "id": 2379,
        "ca": 3098364,
        "margin": 295222,
        "ebitda": 237628,
        "loss": 8824486,
        "year": 2017,
        "business": 1191
    },
    {
        "id": 2380,
        "ca": 2836963,
        "margin": 347671,
        "ebitda": 301331,
        "loss": 25631,
        "year": 2016,
        "business": 1191
    },
    {
        "id": 2381,
        "ca": 3607659,
        "margin": -189859,
        "ebitda": 466063,
        "loss": 4587411,
        "year": 2017,
        "business": 1192
    },
    {
        "id": 2382,
        "ca": 395340,
        "margin": 179427,
        "ebitda": 571353,
        "loss": 8575357,
        "year": 2016,
        "business": 1192
    },
    {
        "id": 2383,
        "ca": 379203,
        "margin": -93020,
        "ebitda": 259766,
        "loss": 8481496,
        "year": 2017,
        "business": 1193
    },
    {
        "id": 2384,
        "ca": 144396,
        "margin": 517453,
        "ebitda": 591711,
        "loss": 6232523,
        "year": 2016,
        "business": 1193
    },
    {
        "id": 2385,
        "ca": 3179508,
        "margin": 67641,
        "ebitda": 780727,
        "loss": 3722604,
        "year": 2017,
        "business": 1194
    },
    {
        "id": 2386,
        "ca": 1744348,
        "margin": 396308,
        "ebitda": 542501,
        "loss": 5579533,
        "year": 2016,
        "business": 1194
    },
    {
        "id": 2387,
        "ca": 1728921,
        "margin": 665662,
        "ebitda": 991743,
        "loss": 4038748,
        "year": 2017,
        "business": 1195
    },
    {
        "id": 2388,
        "ca": 139687,
        "margin": 358646,
        "ebitda": 935035,
        "loss": 356369,
        "year": 2016,
        "business": 1195
    },
    {
        "id": 2389,
        "ca": 2681633,
        "margin": 64633,
        "ebitda": 38873,
        "loss": 4026699,
        "year": 2017,
        "business": 1196
    },
    {
        "id": 2390,
        "ca": 1357003,
        "margin": -117910,
        "ebitda": 866302,
        "loss": 8169181,
        "year": 2016,
        "business": 1196
    },
    {
        "id": 2391,
        "ca": 697972,
        "margin": 109349,
        "ebitda": 748214,
        "loss": 7788287,
        "year": 2017,
        "business": 1197
    },
    {
        "id": 2392,
        "ca": 3821833,
        "margin": -150587,
        "ebitda": 455744,
        "loss": 1774670,
        "year": 2016,
        "business": 1197
    },
    {
        "id": 2393,
        "ca": 1736167,
        "margin": -71098,
        "ebitda": 369044,
        "loss": 7587644,
        "year": 2017,
        "business": 1198
    },
    {
        "id": 2394,
        "ca": 2994791,
        "margin": -189455,
        "ebitda": 584789,
        "loss": 8253641,
        "year": 2016,
        "business": 1198
    },
    {
        "id": 2395,
        "ca": 3866480,
        "margin": 846424,
        "ebitda": 723539,
        "loss": 7059958,
        "year": 2017,
        "business": 1199
    },
    {
        "id": 2396,
        "ca": 2002973,
        "margin": 864708,
        "ebitda": 715081,
        "loss": 9769978,
        "year": 2016,
        "business": 1199
    },
    {
        "id": 2397,
        "ca": 2168061,
        "margin": 283947,
        "ebitda": 882487,
        "loss": 1942313,
        "year": 2017,
        "business": 1200
    },
    {
        "id": 2398,
        "ca": 645047,
        "margin": 134625,
        "ebitda": 974136,
        "loss": 7970717,
        "year": 2016,
        "business": 1200
    },
    {
        "id": 2399,
        "ca": 3882691,
        "margin": 370353,
        "ebitda": 411563,
        "loss": 8937022,
        "year": 2017,
        "business": 1201
    },
    {
        "id": 2400,
        "ca": 2517891,
        "margin": -120139,
        "ebitda": 172997,
        "loss": 9643858,
        "year": 2016,
        "business": 1201
    },
    {
        "id": 2401,
        "ca": 1381725,
        "margin": 521890,
        "ebitda": 969346,
        "loss": 6200579,
        "year": 2017,
        "business": 1202
    },
    {
        "id": 2402,
        "ca": 3989466,
        "margin": -132656,
        "ebitda": 339426,
        "loss": 1356962,
        "year": 2016,
        "business": 1202
    },
    {
        "id": 2403,
        "ca": 1908431,
        "margin": 500963,
        "ebitda": 360880,
        "loss": 1000301,
        "year": 2017,
        "business": 1203
    },
    {
        "id": 2404,
        "ca": 1617090,
        "margin": 723375,
        "ebitda": 966379,
        "loss": 7175687,
        "year": 2016,
        "business": 1203
    },
    {
        "id": 2405,
        "ca": 3660703,
        "margin": 260358,
        "ebitda": 827985,
        "loss": 2216670,
        "year": 2017,
        "business": 1204
    },
    {
        "id": 2406,
        "ca": 3391877,
        "margin": 715081,
        "ebitda": 526732,
        "loss": 5204173,
        "year": 2016,
        "business": 1204
    },
    {
        "id": 2407,
        "ca": 2981598,
        "margin": 839640,
        "ebitda": 254466,
        "loss": 557923,
        "year": 2017,
        "business": 1205
    },
    {
        "id": 2408,
        "ca": 2264669,
        "margin": 85859,
        "ebitda": 701532,
        "loss": 5889667,
        "year": 2016,
        "business": 1205
    },
    {
        "id": 2409,
        "ca": 2515502,
        "margin": 383884,
        "ebitda": 314194,
        "loss": 1447954,
        "year": 2017,
        "business": 1206
    },
    {
        "id": 2410,
        "ca": 1639067,
        "margin": 251545,
        "ebitda": 232780,
        "loss": 5703733,
        "year": 2016,
        "business": 1206
    },
    {
        "id": 2411,
        "ca": 3990163,
        "margin": -23653,
        "ebitda": 618446,
        "loss": 7611738,
        "year": 2017,
        "business": 1207
    },
    {
        "id": 2412,
        "ca": 3399377,
        "margin": -34562,
        "ebitda": 676135,
        "loss": 2625186,
        "year": 2016,
        "business": 1207
    },
    {
        "id": 2413,
        "ca": 2624865,
        "margin": 21282,
        "ebitda": 252014,
        "loss": 2397148,
        "year": 2017,
        "business": 1208
    },
    {
        "id": 2414,
        "ca": 2673540,
        "margin": 320968,
        "ebitda": 489969,
        "loss": 6933441,
        "year": 2016,
        "business": 1208
    },
    {
        "id": 2415,
        "ca": 3946352,
        "margin": 299886,
        "ebitda": 161465,
        "loss": 6615188,
        "year": 2017,
        "business": 1209
    },
    {
        "id": 2416,
        "ca": 3998834,
        "margin": 261503,
        "ebitda": 477645,
        "loss": 7523061,
        "year": 2016,
        "business": 1209
    },
    {
        "id": 2417,
        "ca": 396543,
        "margin": -15795,
        "ebitda": 571537,
        "loss": 1491676,
        "year": 2017,
        "business": 1210
    },
    {
        "id": 2418,
        "ca": 3585987,
        "margin": 69181,
        "ebitda": 724505,
        "loss": 355804,
        "year": 2016,
        "business": 1210
    },
    {
        "id": 2419,
        "ca": 3514916,
        "margin": 850407,
        "ebitda": 528644,
        "loss": 6528495,
        "year": 2017,
        "business": 1211
    },
    {
        "id": 2420,
        "ca": 674593,
        "margin": -65955,
        "ebitda": 452223,
        "loss": 3974195,
        "year": 2016,
        "business": 1211
    },
    {
        "id": 2421,
        "ca": 3982779,
        "margin": 847980,
        "ebitda": 25457,
        "loss": 6382830,
        "year": 2017,
        "business": 1212
    },
    {
        "id": 2422,
        "ca": 501454,
        "margin": 522579,
        "ebitda": 151048,
        "loss": 7167120,
        "year": 2016,
        "business": 1212
    },
    {
        "id": 2423,
        "ca": 2899048,
        "margin": 446361,
        "ebitda": 780465,
        "loss": 6175065,
        "year": 2017,
        "business": 1213
    },
    {
        "id": 2424,
        "ca": 3286750,
        "margin": 753934,
        "ebitda": 492488,
        "loss": 5716259,
        "year": 2016,
        "business": 1213
    },
    {
        "id": 2425,
        "ca": 321130,
        "margin": -106862,
        "ebitda": 493927,
        "loss": 3219872,
        "year": 2017,
        "business": 1214
    },
    {
        "id": 2426,
        "ca": 1468024,
        "margin": 877052,
        "ebitda": 201151,
        "loss": 6880040,
        "year": 2016,
        "business": 1214
    },
    {
        "id": 2427,
        "ca": 1202306,
        "margin": 927668,
        "ebitda": 763436,
        "loss": 2307300,
        "year": 2017,
        "business": 1215
    },
    {
        "id": 2428,
        "ca": 711411,
        "margin": 98405,
        "ebitda": 127258,
        "loss": 1351493,
        "year": 2016,
        "business": 1215
    },
    {
        "id": 2429,
        "ca": 873010,
        "margin": 424430,
        "ebitda": 713124,
        "loss": 2935034,
        "year": 2017,
        "business": 1216
    },
    {
        "id": 2430,
        "ca": 1516162,
        "margin": 942403,
        "ebitda": 558387,
        "loss": 5967964,
        "year": 2016,
        "business": 1216
    },
    {
        "id": 2431,
        "ca": 670761,
        "margin": 826590,
        "ebitda": 731510,
        "loss": 3079216,
        "year": 2017,
        "business": 1217
    },
    {
        "id": 2432,
        "ca": 2676855,
        "margin": 918362,
        "ebitda": 469186,
        "loss": 2171934,
        "year": 2016,
        "business": 1217
    },
    {
        "id": 2433,
        "ca": 242467,
        "margin": -188020,
        "ebitda": 531483,
        "loss": 7973940,
        "year": 2017,
        "business": 1218
    },
    {
        "id": 2434,
        "ca": 3858424,
        "margin": -196542,
        "ebitda": 679848,
        "loss": 7374394,
        "year": 2016,
        "business": 1218
    },
    {
        "id": 2435,
        "ca": 3630977,
        "margin": -191217,
        "ebitda": 565955,
        "loss": 6361163,
        "year": 2017,
        "business": 1219
    },
    {
        "id": 2436,
        "ca": 276602,
        "margin": 962997,
        "ebitda": 923379,
        "loss": 291587,
        "year": 2016,
        "business": 1219
    },
    {
        "id": 2437,
        "ca": 3053219,
        "margin": 891154,
        "ebitda": 748467,
        "loss": 5033395,
        "year": 2017,
        "business": 1220
    },
    {
        "id": 2438,
        "ca": 727813,
        "margin": 394241,
        "ebitda": 57145,
        "loss": 3649595,
        "year": 2016,
        "business": 1220
    },
    {
        "id": 2439,
        "ca": 1915743,
        "margin": 579738,
        "ebitda": 671571,
        "loss": 2146574,
        "year": 2017,
        "business": 1221
    },
    {
        "id": 2440,
        "ca": 1765238,
        "margin": 725611,
        "ebitda": 183725,
        "loss": 2018896,
        "year": 2016,
        "business": 1221
    },
    {
        "id": 2441,
        "ca": 1307856,
        "margin": -19394,
        "ebitda": 464868,
        "loss": 7453373,
        "year": 2017,
        "business": 1222
    },
    {
        "id": 2442,
        "ca": 3784995,
        "margin": 117975,
        "ebitda": 348996,
        "loss": 9750533,
        "year": 2016,
        "business": 1222
    },
    {
        "id": 2443,
        "ca": 579640,
        "margin": 708604,
        "ebitda": 476367,
        "loss": 7985293,
        "year": 2017,
        "business": 1223
    },
    {
        "id": 2444,
        "ca": 401500,
        "margin": 901486,
        "ebitda": 750040,
        "loss": 9512030,
        "year": 2016,
        "business": 1223
    },
    {
        "id": 2445,
        "ca": 675090,
        "margin": 837643,
        "ebitda": 234174,
        "loss": 8744069,
        "year": 2017,
        "business": 1224
    },
    {
        "id": 2446,
        "ca": 3999870,
        "margin": 183000,
        "ebitda": 715121,
        "loss": 3817111,
        "year": 2016,
        "business": 1224
    },
    {
        "id": 2447,
        "ca": 1357050,
        "margin": 930392,
        "ebitda": 114816,
        "loss": 206483,
        "year": 2017,
        "business": 1225
    },
    {
        "id": 2448,
        "ca": 1284602,
        "margin": 298382,
        "ebitda": 344379,
        "loss": 1354516,
        "year": 2016,
        "business": 1225
    },
    {
        "id": 2449,
        "ca": 437404,
        "margin": 443309,
        "ebitda": 924393,
        "loss": 8344342,
        "year": 2017,
        "business": 1226
    },
    {
        "id": 2450,
        "ca": 2295941,
        "margin": 262959,
        "ebitda": 398360,
        "loss": 4731833,
        "year": 2016,
        "business": 1226
    },
    {
        "id": 2451,
        "ca": 1722916,
        "margin": 758629,
        "ebitda": 738064,
        "loss": 8203486,
        "year": 2017,
        "business": 1227
    },
    {
        "id": 2452,
        "ca": 3022820,
        "margin": 68719,
        "ebitda": 702919,
        "loss": 3778150,
        "year": 2016,
        "business": 1227
    },
    {
        "id": 2453,
        "ca": 3939948,
        "margin": 802846,
        "ebitda": 663635,
        "loss": 5542135,
        "year": 2017,
        "business": 1228
    },
    {
        "id": 2454,
        "ca": 276559,
        "margin": 139817,
        "ebitda": 493621,
        "loss": 7195203,
        "year": 2016,
        "business": 1228
    },
    {
        "id": 2455,
        "ca": 3239235,
        "margin": 340217,
        "ebitda": 449758,
        "loss": 1334666,
        "year": 2017,
        "business": 1229
    },
    {
        "id": 2456,
        "ca": 2412749,
        "margin": 430859,
        "ebitda": 166502,
        "loss": 7762703,
        "year": 2016,
        "business": 1229
    },
    {
        "id": 2457,
        "ca": 1656238,
        "margin": 815153,
        "ebitda": 17020,
        "loss": 657973,
        "year": 2017,
        "business": 1230
    },
    {
        "id": 2458,
        "ca": 286407,
        "margin": 81459,
        "ebitda": 751775,
        "loss": 1171673,
        "year": 2016,
        "business": 1230
    },
    {
        "id": 2459,
        "ca": 1623267,
        "margin": 390850,
        "ebitda": 160709,
        "loss": 6228102,
        "year": 2017,
        "business": 1231
    },
    {
        "id": 2460,
        "ca": 1244864,
        "margin": 468907,
        "ebitda": 513580,
        "loss": 406566,
        "year": 2016,
        "business": 1231
    },
    {
        "id": 2461,
        "ca": 1302638,
        "margin": 127698,
        "ebitda": 901385,
        "loss": 1035350,
        "year": 2017,
        "business": 1232
    },
    {
        "id": 2462,
        "ca": 3024172,
        "margin": 594634,
        "ebitda": 817461,
        "loss": 6847908,
        "year": 2016,
        "business": 1232
    },
    {
        "id": 2463,
        "ca": 2632843,
        "margin": 275924,
        "ebitda": 284692,
        "loss": 3566120,
        "year": 2017,
        "business": 1233
    },
    {
        "id": 2464,
        "ca": 3612783,
        "margin": 145292,
        "ebitda": 942467,
        "loss": 6543481,
        "year": 2016,
        "business": 1233
    },
    {
        "id": 2465,
        "ca": 1521736,
        "margin": -108388,
        "ebitda": 254616,
        "loss": 2442956,
        "year": 2017,
        "business": 1234
    },
    {
        "id": 2466,
        "ca": 3500336,
        "margin": -17690,
        "ebitda": 817347,
        "loss": 8840333,
        "year": 2016,
        "business": 1234
    },
    {
        "id": 2467,
        "ca": 1836167,
        "margin": 702191,
        "ebitda": 839661,
        "loss": 5922025,
        "year": 2017,
        "business": 1235
    },
    {
        "id": 2468,
        "ca": 3927945,
        "margin": 831558,
        "ebitda": 339263,
        "loss": 7914051,
        "year": 2016,
        "business": 1235
    },
    {
        "id": 2469,
        "ca": 2042075,
        "margin": 941932,
        "ebitda": 39499,
        "loss": 8186728,
        "year": 2017,
        "business": 1236
    },
    {
        "id": 2470,
        "ca": 3285163,
        "margin": -117789,
        "ebitda": 504976,
        "loss": 1588712,
        "year": 2016,
        "business": 1236
    },
    {
        "id": 2471,
        "ca": 1392806,
        "margin": 407754,
        "ebitda": 888531,
        "loss": 8319998,
        "year": 2017,
        "business": 1237
    },
    {
        "id": 2472,
        "ca": 1423185,
        "margin": 656415,
        "ebitda": 354677,
        "loss": 2368935,
        "year": 2016,
        "business": 1237
    },
    {
        "id": 2473,
        "ca": 2606836,
        "margin": 804607,
        "ebitda": 14325,
        "loss": 2896996,
        "year": 2017,
        "business": 1238
    },
    {
        "id": 2474,
        "ca": 516903,
        "margin": 609870,
        "ebitda": 798215,
        "loss": 7703626,
        "year": 2016,
        "business": 1238
    },
    {
        "id": 2475,
        "ca": 3480353,
        "margin": 216290,
        "ebitda": 441732,
        "loss": 462267,
        "year": 2017,
        "business": 1239
    },
    {
        "id": 2476,
        "ca": 1177842,
        "margin": 620215,
        "ebitda": 860501,
        "loss": 6589168,
        "year": 2016,
        "business": 1239
    },
    {
        "id": 2477,
        "ca": 861557,
        "margin": 386117,
        "ebitda": 938199,
        "loss": 8206339,
        "year": 2017,
        "business": 1240
    },
    {
        "id": 2478,
        "ca": 2943536,
        "margin": 852707,
        "ebitda": 94471,
        "loss": 1840329,
        "year": 2016,
        "business": 1240
    },
    {
        "id": 2479,
        "ca": 1846841,
        "margin": 96976,
        "ebitda": 425424,
        "loss": 25493,
        "year": 2017,
        "business": 1241
    },
    {
        "id": 2480,
        "ca": 2052522,
        "margin": 609255,
        "ebitda": 236691,
        "loss": 5395446,
        "year": 2016,
        "business": 1241
    },
    {
        "id": 2481,
        "ca": 2915358,
        "margin": 901951,
        "ebitda": 543322,
        "loss": 683229,
        "year": 2017,
        "business": 1242
    },
    {
        "id": 2482,
        "ca": 1318119,
        "margin": 926649,
        "ebitda": 485151,
        "loss": 8753427,
        "year": 2016,
        "business": 1242
    },
    {
        "id": 2483,
        "ca": 3531451,
        "margin": -7532,
        "ebitda": 190463,
        "loss": 9727952,
        "year": 2017,
        "business": 1243
    },
    {
        "id": 2484,
        "ca": 152385,
        "margin": 626370,
        "ebitda": 665984,
        "loss": 1301506,
        "year": 2016,
        "business": 1243
    },
    {
        "id": 2485,
        "ca": 1863195,
        "margin": 885156,
        "ebitda": 691132,
        "loss": 3331463,
        "year": 2017,
        "business": 1244
    },
    {
        "id": 2486,
        "ca": 1492494,
        "margin": 451974,
        "ebitda": 470527,
        "loss": 6116639,
        "year": 2016,
        "business": 1244
    },
    {
        "id": 2487,
        "ca": 1325093,
        "margin": 416334,
        "ebitda": 810310,
        "loss": 2295917,
        "year": 2017,
        "business": 1245
    },
    {
        "id": 2488,
        "ca": 1468293,
        "margin": 47641,
        "ebitda": 685557,
        "loss": 7057002,
        "year": 2016,
        "business": 1245
    },
    {
        "id": 2489,
        "ca": 391860,
        "margin": 418189,
        "ebitda": 716083,
        "loss": 8376039,
        "year": 2017,
        "business": 1246
    },
    {
        "id": 2490,
        "ca": 1101433,
        "margin": 495505,
        "ebitda": 391024,
        "loss": 7516228,
        "year": 2016,
        "business": 1246
    },
    {
        "id": 2491,
        "ca": 1770926,
        "margin": 725459,
        "ebitda": 422508,
        "loss": 696824,
        "year": 2017,
        "business": 1247
    },
    {
        "id": 2492,
        "ca": 844272,
        "margin": -62922,
        "ebitda": 807620,
        "loss": 1381217,
        "year": 2016,
        "business": 1247
    },
    {
        "id": 2493,
        "ca": 1950330,
        "margin": 971754,
        "ebitda": 477053,
        "loss": 9514153,
        "year": 2017,
        "business": 1248
    },
    {
        "id": 2494,
        "ca": 747090,
        "margin": -45669,
        "ebitda": 488641,
        "loss": 2271665,
        "year": 2016,
        "business": 1248
    },
    {
        "id": 2495,
        "ca": 3537514,
        "margin": -73399,
        "ebitda": 964482,
        "loss": 7441441,
        "year": 2017,
        "business": 1249
    },
    {
        "id": 2496,
        "ca": 1787038,
        "margin": -57380,
        "ebitda": 849512,
        "loss": 2623796,
        "year": 2016,
        "business": 1249
    },
    {
        "id": 2497,
        "ca": 1169472,
        "margin": 354993,
        "ebitda": 567329,
        "loss": 1369101,
        "year": 2017,
        "business": 1250
    },
    {
        "id": 2498,
        "ca": 3653740,
        "margin": 860240,
        "ebitda": 611312,
        "loss": 1081867,
        "year": 2016,
        "business": 1250
    },
    {
        "id": 2499,
        "ca": 2247463,
        "margin": 401415,
        "ebitda": 949482,
        "loss": 4040262,
        "year": 2017,
        "business": 1251
    },
    {
        "id": 2500,
        "ca": 1614202,
        "margin": 435597,
        "ebitda": 899366,
        "loss": 8403583,
        "year": 2016,
        "business": 1251
    },
    {
        "id": 2501,
        "ca": 1464401,
        "margin": 140222,
        "ebitda": 543863,
        "loss": 3046940,
        "year": 2017,
        "business": 1252
    },
    {
        "id": 2502,
        "ca": 3192296,
        "margin": 842618,
        "ebitda": 182710,
        "loss": 5357381,
        "year": 2016,
        "business": 1252
    },
    {
        "id": 2503,
        "ca": 3031637,
        "margin": 679669,
        "ebitda": 76621,
        "loss": 9745843,
        "year": 2017,
        "business": 1253
    },
    {
        "id": 2504,
        "ca": 1041670,
        "margin": 492196,
        "ebitda": 641042,
        "loss": 7889625,
        "year": 2016,
        "business": 1253
    },
    {
        "id": 2505,
        "ca": 3665813,
        "margin": 764550,
        "ebitda": 643073,
        "loss": 9904839,
        "year": 2017,
        "business": 1254
    },
    {
        "id": 2506,
        "ca": 1818052,
        "margin": 787374,
        "ebitda": 275126,
        "loss": 4001065,
        "year": 2016,
        "business": 1254
    },
    {
        "id": 2507,
        "ca": 772162,
        "margin": 878637,
        "ebitda": 754484,
        "loss": 2048022,
        "year": 2017,
        "business": 1255
    },
    {
        "id": 2508,
        "ca": 545552,
        "margin": -69391,
        "ebitda": 830605,
        "loss": 3054587,
        "year": 2016,
        "business": 1255
    },
    {
        "id": 2509,
        "ca": 929599,
        "margin": 435326,
        "ebitda": 671472,
        "loss": 7712503,
        "year": 2017,
        "business": 1256
    },
    {
        "id": 2510,
        "ca": 1076023,
        "margin": 595589,
        "ebitda": 950398,
        "loss": 5022871,
        "year": 2016,
        "business": 1256
    },
    {
        "id": 2511,
        "ca": 534446,
        "margin": 236496,
        "ebitda": 262407,
        "loss": 1884251,
        "year": 2017,
        "business": 1257
    },
    {
        "id": 2512,
        "ca": 1053849,
        "margin": 905825,
        "ebitda": 296672,
        "loss": 6330120,
        "year": 2016,
        "business": 1257
    },
    {
        "id": 2513,
        "ca": 1905560,
        "margin": 287037,
        "ebitda": 432415,
        "loss": 9494153,
        "year": 2017,
        "business": 1258
    },
    {
        "id": 2514,
        "ca": 1237217,
        "margin": 549518,
        "ebitda": 22570,
        "loss": 7720823,
        "year": 2016,
        "business": 1258
    },
    {
        "id": 2515,
        "ca": 2822936,
        "margin": 737245,
        "ebitda": 502023,
        "loss": 822282,
        "year": 2017,
        "business": 1259
    },
    {
        "id": 2516,
        "ca": 1528294,
        "margin": 379394,
        "ebitda": 250801,
        "loss": 5083643,
        "year": 2016,
        "business": 1259
    },
    {
        "id": 2517,
        "ca": 2536749,
        "margin": 965332,
        "ebitda": 368262,
        "loss": 1201000,
        "year": 2017,
        "business": 1260
    },
    {
        "id": 2518,
        "ca": 2702233,
        "margin": -42416,
        "ebitda": 209342,
        "loss": 231725,
        "year": 2016,
        "business": 1260
    },
    {
        "id": 2519,
        "ca": 3584565,
        "margin": 631302,
        "ebitda": 216935,
        "loss": 8712213,
        "year": 2017,
        "business": 1261
    },
    {
        "id": 2520,
        "ca": 2961029,
        "margin": 358082,
        "ebitda": 644271,
        "loss": 9053011,
        "year": 2016,
        "business": 1261
    },
    {
        "id": 2521,
        "ca": 397984,
        "margin": 309572,
        "ebitda": 196244,
        "loss": 6514652,
        "year": 2017,
        "business": 1262
    },
    {
        "id": 2522,
        "ca": 3515292,
        "margin": 171319,
        "ebitda": 220895,
        "loss": 5052465,
        "year": 2016,
        "business": 1262
    },
    {
        "id": 2523,
        "ca": 2834046,
        "margin": 951329,
        "ebitda": 959573,
        "loss": 1194389,
        "year": 2017,
        "business": 1263
    },
    {
        "id": 2524,
        "ca": 2660639,
        "margin": 848997,
        "ebitda": 872268,
        "loss": 578344,
        "year": 2016,
        "business": 1263
    },
    {
        "id": 2525,
        "ca": 2089413,
        "margin": 484214,
        "ebitda": 975320,
        "loss": 728273,
        "year": 2017,
        "business": 1264
    },
    {
        "id": 2526,
        "ca": 1092462,
        "margin": 625754,
        "ebitda": 829443,
        "loss": 3627836,
        "year": 2016,
        "business": 1264
    },
    {
        "id": 2527,
        "ca": 346001,
        "margin": 50994,
        "ebitda": 423793,
        "loss": 1138923,
        "year": 2017,
        "business": 1265
    },
    {
        "id": 2528,
        "ca": 2143948,
        "margin": 515651,
        "ebitda": 416180,
        "loss": 7169085,
        "year": 2016,
        "business": 1265
    },
    {
        "id": 2529,
        "ca": 604883,
        "margin": 822012,
        "ebitda": 93405,
        "loss": 3626802,
        "year": 2017,
        "business": 1266
    },
    {
        "id": 2530,
        "ca": 222653,
        "margin": -135032,
        "ebitda": 550778,
        "loss": 5815190,
        "year": 2016,
        "business": 1266
    },
    {
        "id": 2531,
        "ca": 1020933,
        "margin": 704919,
        "ebitda": 9280,
        "loss": 5144338,
        "year": 2017,
        "business": 1267
    },
    {
        "id": 2532,
        "ca": 3020560,
        "margin": 548119,
        "ebitda": 386384,
        "loss": 4871927,
        "year": 2016,
        "business": 1267
    },
    {
        "id": 2533,
        "ca": 307764,
        "margin": 153983,
        "ebitda": 108281,
        "loss": 2580980,
        "year": 2017,
        "business": 1268
    },
    {
        "id": 2534,
        "ca": 1135979,
        "margin": 914245,
        "ebitda": 77906,
        "loss": 6955952,
        "year": 2016,
        "business": 1268
    },
    {
        "id": 2535,
        "ca": 1194003,
        "margin": 506263,
        "ebitda": 224082,
        "loss": 1934212,
        "year": 2017,
        "business": 1269
    },
    {
        "id": 2536,
        "ca": 438045,
        "margin": 935630,
        "ebitda": 190266,
        "loss": 4059307,
        "year": 2016,
        "business": 1269
    },
    {
        "id": 2537,
        "ca": 1572233,
        "margin": 43965,
        "ebitda": 314350,
        "loss": 6016223,
        "year": 2017,
        "business": 1270
    },
    {
        "id": 2538,
        "ca": 1617028,
        "margin": 148517,
        "ebitda": 864839,
        "loss": 9180946,
        "year": 2016,
        "business": 1270
    },
    {
        "id": 2539,
        "ca": 3882042,
        "margin": 227547,
        "ebitda": 730703,
        "loss": 748084,
        "year": 2017,
        "business": 1271
    },
    {
        "id": 2540,
        "ca": 1323002,
        "margin": 277049,
        "ebitda": 705669,
        "loss": 4106329,
        "year": 2016,
        "business": 1271
    },
    {
        "id": 2541,
        "ca": 3333515,
        "margin": 752911,
        "ebitda": 863272,
        "loss": 140940,
        "year": 2017,
        "business": 1272
    },
    {
        "id": 2542,
        "ca": 1913659,
        "margin": 452521,
        "ebitda": 275458,
        "loss": 311085,
        "year": 2016,
        "business": 1272
    },
    {
        "id": 2543,
        "ca": 1055674,
        "margin": 472906,
        "ebitda": 728127,
        "loss": 3011701,
        "year": 2017,
        "business": 1273
    },
    {
        "id": 2544,
        "ca": 3505870,
        "margin": -75301,
        "ebitda": 370667,
        "loss": 1684556,
        "year": 2016,
        "business": 1273
    },
    {
        "id": 2545,
        "ca": 3712247,
        "margin": 689224,
        "ebitda": 944551,
        "loss": 684306,
        "year": 2017,
        "business": 1274
    },
    {
        "id": 2546,
        "ca": 565545,
        "margin": 979600,
        "ebitda": 247048,
        "loss": 3961991,
        "year": 2016,
        "business": 1274
    },
    {
        "id": 2547,
        "ca": 2698414,
        "margin": 294022,
        "ebitda": 512183,
        "loss": 9626020,
        "year": 2017,
        "business": 1275
    },
    {
        "id": 2548,
        "ca": 724785,
        "margin": -37602,
        "ebitda": 214519,
        "loss": 7284805,
        "year": 2016,
        "business": 1275
    },
    {
        "id": 2549,
        "ca": 2860170,
        "margin": 852080,
        "ebitda": 263823,
        "loss": 1948319,
        "year": 2017,
        "business": 1276
    },
    {
        "id": 2550,
        "ca": 2156461,
        "margin": -184566,
        "ebitda": 418592,
        "loss": 1231751,
        "year": 2016,
        "business": 1276
    },
    {
        "id": 2551,
        "ca": 3762860,
        "margin": 951288,
        "ebitda": 978871,
        "loss": 2502425,
        "year": 2017,
        "business": 1277
    },
    {
        "id": 2552,
        "ca": 2174739,
        "margin": 239603,
        "ebitda": 91698,
        "loss": 3834844,
        "year": 2016,
        "business": 1277
    },
    {
        "id": 2553,
        "ca": 3830780,
        "margin": 291785,
        "ebitda": 38151,
        "loss": 6365551,
        "year": 2017,
        "business": 1278
    },
    {
        "id": 2554,
        "ca": 1621430,
        "margin": 146345,
        "ebitda": 124977,
        "loss": 7508553,
        "year": 2016,
        "business": 1278
    },
    {
        "id": 2555,
        "ca": 1400867,
        "margin": 472482,
        "ebitda": 967326,
        "loss": 3731128,
        "year": 2017,
        "business": 1279
    },
    {
        "id": 2556,
        "ca": 1995657,
        "margin": 748942,
        "ebitda": 614653,
        "loss": 6671311,
        "year": 2016,
        "business": 1279
    },
    {
        "id": 2557,
        "ca": 2997645,
        "margin": 901958,
        "ebitda": 785681,
        "loss": 1303785,
        "year": 2017,
        "business": 1280
    },
    {
        "id": 2558,
        "ca": 299696,
        "margin": 997820,
        "ebitda": 979764,
        "loss": 895819,
        "year": 2016,
        "business": 1280
    },
    {
        "id": 2559,
        "ca": 1525869,
        "margin": -131775,
        "ebitda": 311759,
        "loss": 2312255,
        "year": 2017,
        "business": 1281
    },
    {
        "id": 2560,
        "ca": 3758644,
        "margin": 988659,
        "ebitda": 365305,
        "loss": 5456939,
        "year": 2016,
        "business": 1281
    },
    {
        "id": 2561,
        "ca": 3768703,
        "margin": 968893,
        "ebitda": 161094,
        "loss": 1440412,
        "year": 2017,
        "business": 1282
    },
    {
        "id": 2562,
        "ca": 1973250,
        "margin": 683987,
        "ebitda": 840989,
        "loss": 7792481,
        "year": 2016,
        "business": 1282
    },
    {
        "id": 2563,
        "ca": 1918712,
        "margin": 208297,
        "ebitda": 109242,
        "loss": 2496800,
        "year": 2017,
        "business": 1283
    },
    {
        "id": 2564,
        "ca": 1891958,
        "margin": 993650,
        "ebitda": 271152,
        "loss": 2251648,
        "year": 2016,
        "business": 1283
    },
    {
        "id": 2565,
        "ca": 327108,
        "margin": 574817,
        "ebitda": 644454,
        "loss": 1469710,
        "year": 2017,
        "business": 1284
    },
    {
        "id": 2566,
        "ca": 864623,
        "margin": 730868,
        "ebitda": 71430,
        "loss": 8920097,
        "year": 2016,
        "business": 1284
    },
    {
        "id": 2567,
        "ca": 3348358,
        "margin": 209455,
        "ebitda": 768052,
        "loss": 4831940,
        "year": 2017,
        "business": 1285
    },
    {
        "id": 2568,
        "ca": 378035,
        "margin": -144425,
        "ebitda": 879574,
        "loss": 2893750,
        "year": 2016,
        "business": 1285
    },
    {
        "id": 2569,
        "ca": 416852,
        "margin": 777518,
        "ebitda": 693690,
        "loss": 4558030,
        "year": 2017,
        "business": 1286
    },
    {
        "id": 2570,
        "ca": 154265,
        "margin": -155260,
        "ebitda": 873014,
        "loss": 391026,
        "year": 2016,
        "business": 1286
    },
    {
        "id": 2571,
        "ca": 1814038,
        "margin": 22943,
        "ebitda": 764251,
        "loss": 4910711,
        "year": 2017,
        "business": 1287
    },
    {
        "id": 2572,
        "ca": 1467097,
        "margin": 313290,
        "ebitda": 627746,
        "loss": 1989470,
        "year": 2016,
        "business": 1287
    },
    {
        "id": 2573,
        "ca": 3084902,
        "margin": -111002,
        "ebitda": 318636,
        "loss": 6437713,
        "year": 2017,
        "business": 1288
    },
    {
        "id": 2574,
        "ca": 1487036,
        "margin": -23511,
        "ebitda": 297467,
        "loss": 8915320,
        "year": 2016,
        "business": 1288
    },
    {
        "id": 2575,
        "ca": 922790,
        "margin": 629028,
        "ebitda": 924228,
        "loss": 4611051,
        "year": 2017,
        "business": 1289
    },
    {
        "id": 2576,
        "ca": 143812,
        "margin": 191264,
        "ebitda": 555470,
        "loss": 7666400,
        "year": 2016,
        "business": 1289
    },
    {
        "id": 2577,
        "ca": 2527824,
        "margin": 669466,
        "ebitda": 215899,
        "loss": 2881112,
        "year": 2017,
        "business": 1290
    },
    {
        "id": 2578,
        "ca": 3283470,
        "margin": 272280,
        "ebitda": 901020,
        "loss": 2371452,
        "year": 2016,
        "business": 1290
    },
    {
        "id": 2579,
        "ca": 3566116,
        "margin": 841355,
        "ebitda": 177259,
        "loss": 4616427,
        "year": 2017,
        "business": 1291
    },
    {
        "id": 2580,
        "ca": 2522467,
        "margin": -17537,
        "ebitda": 186826,
        "loss": 7537421,
        "year": 2016,
        "business": 1291
    },
    {
        "id": 2581,
        "ca": 2924230,
        "margin": 932363,
        "ebitda": 413216,
        "loss": 3110712,
        "year": 2017,
        "business": 1292
    },
    {
        "id": 2582,
        "ca": 2855686,
        "margin": 785881,
        "ebitda": 739501,
        "loss": 1027313,
        "year": 2016,
        "business": 1292
    },
    {
        "id": 2583,
        "ca": 3813603,
        "margin": 578564,
        "ebitda": 261361,
        "loss": 5073025,
        "year": 2017,
        "business": 1293
    },
    {
        "id": 2584,
        "ca": 3424670,
        "margin": 765757,
        "ebitda": 835577,
        "loss": 6248108,
        "year": 2016,
        "business": 1293
    },
    {
        "id": 2585,
        "ca": 3375462,
        "margin": 909693,
        "ebitda": 150159,
        "loss": 1727,
        "year": 2017,
        "business": 1294
    },
    {
        "id": 2586,
        "ca": 3928748,
        "margin": 613973,
        "ebitda": 837251,
        "loss": 2922583,
        "year": 2016,
        "business": 1294
    },
    {
        "id": 2587,
        "ca": 2924633,
        "margin": 854336,
        "ebitda": 95194,
        "loss": 3489284,
        "year": 2017,
        "business": 1295
    },
    {
        "id": 2588,
        "ca": 2730637,
        "margin": 262515,
        "ebitda": 9135,
        "loss": 5751480,
        "year": 2016,
        "business": 1295
    },
    {
        "id": 2589,
        "ca": 939500,
        "margin": 108657,
        "ebitda": 901864,
        "loss": 4930016,
        "year": 2017,
        "business": 1296
    },
    {
        "id": 2590,
        "ca": 262556,
        "margin": 870447,
        "ebitda": 889054,
        "loss": 8490563,
        "year": 2016,
        "business": 1296
    },
    {
        "id": 2591,
        "ca": 1401002,
        "margin": 680397,
        "ebitda": 447359,
        "loss": 9184928,
        "year": 2017,
        "business": 1297
    },
    {
        "id": 2592,
        "ca": 1561751,
        "margin": 743108,
        "ebitda": 307893,
        "loss": 4325104,
        "year": 2016,
        "business": 1297
    },
    {
        "id": 2593,
        "ca": 3751315,
        "margin": -33992,
        "ebitda": 376084,
        "loss": 2538808,
        "year": 2017,
        "business": 1298
    },
    {
        "id": 2594,
        "ca": 816190,
        "margin": 34186,
        "ebitda": 865129,
        "loss": 7746295,
        "year": 2016,
        "business": 1298
    },
    {
        "id": 2595,
        "ca": 389859,
        "margin": 767903,
        "ebitda": 565840,
        "loss": 4942546,
        "year": 2017,
        "business": 1299
    },
    {
        "id": 2596,
        "ca": 3322262,
        "margin": 490616,
        "ebitda": 983418,
        "loss": 2900475,
        "year": 2016,
        "business": 1299
    },
    {
        "id": 2597,
        "ca": 3008708,
        "margin": 145170,
        "ebitda": 993767,
        "loss": 7886365,
        "year": 2017,
        "business": 1300
    },
    {
        "id": 2598,
        "ca": 1891977,
        "margin": 791302,
        "ebitda": 825442,
        "loss": 2197021,
        "year": 2016,
        "business": 1300
    },
    {
        "id": 2599,
        "ca": 3436399,
        "margin": 697795,
        "ebitda": 453017,
        "loss": 6758421,
        "year": 2017,
        "business": 1301
    },
    {
        "id": 2600,
        "ca": 2777766,
        "margin": 233259,
        "ebitda": 454646,
        "loss": 4859546,
        "year": 2016,
        "business": 1301
    },
    {
        "id": 2601,
        "ca": 561816,
        "margin": 122652,
        "ebitda": 766568,
        "loss": 6213834,
        "year": 2017,
        "business": 1302
    },
    {
        "id": 2602,
        "ca": 1123653,
        "margin": 703877,
        "ebitda": 732949,
        "loss": 8712235,
        "year": 2016,
        "business": 1302
    },
    {
        "id": 2603,
        "ca": 3528061,
        "margin": -96959,
        "ebitda": 362847,
        "loss": 5667564,
        "year": 2017,
        "business": 1303
    },
    {
        "id": 2604,
        "ca": 2033786,
        "margin": -148002,
        "ebitda": 537580,
        "loss": 8289176,
        "year": 2016,
        "business": 1303
    },
    {
        "id": 2605,
        "ca": 2827084,
        "margin": 311461,
        "ebitda": 953549,
        "loss": 5004704,
        "year": 2017,
        "business": 1304
    },
    {
        "id": 2606,
        "ca": 2907853,
        "margin": -85606,
        "ebitda": 835974,
        "loss": 5771536,
        "year": 2016,
        "business": 1304
    },
    {
        "id": 2607,
        "ca": 3415351,
        "margin": -62798,
        "ebitda": 680366,
        "loss": 9914651,
        "year": 2017,
        "business": 1305
    },
    {
        "id": 2608,
        "ca": 2577367,
        "margin": -127795,
        "ebitda": 789431,
        "loss": 9600878,
        "year": 2016,
        "business": 1305
    },
    {
        "id": 2609,
        "ca": 2283949,
        "margin": 211942,
        "ebitda": 615754,
        "loss": 4408371,
        "year": 2017,
        "business": 1306
    },
    {
        "id": 2610,
        "ca": 3633153,
        "margin": 364836,
        "ebitda": 836880,
        "loss": 9490839,
        "year": 2016,
        "business": 1306
    },
    {
        "id": 2611,
        "ca": 3200485,
        "margin": 246613,
        "ebitda": 701075,
        "loss": 4285701,
        "year": 2017,
        "business": 1307
    },
    {
        "id": 2612,
        "ca": 2376895,
        "margin": 960599,
        "ebitda": 685330,
        "loss": 570540,
        "year": 2016,
        "business": 1307
    },
    {
        "id": 2613,
        "ca": 1813138,
        "margin": 246825,
        "ebitda": 913583,
        "loss": 5171162,
        "year": 2017,
        "business": 1308
    },
    {
        "id": 2614,
        "ca": 1567335,
        "margin": -61943,
        "ebitda": 657166,
        "loss": 5650051,
        "year": 2016,
        "business": 1308
    },
    {
        "id": 2615,
        "ca": 3666078,
        "margin": 231198,
        "ebitda": 11414,
        "loss": 3863213,
        "year": 2017,
        "business": 1309
    },
    {
        "id": 2616,
        "ca": 1519251,
        "margin": 819246,
        "ebitda": 85641,
        "loss": 41538,
        "year": 2016,
        "business": 1309
    },
    {
        "id": 2617,
        "ca": 3000372,
        "margin": 888426,
        "ebitda": 34276,
        "loss": 8492496,
        "year": 2017,
        "business": 1310
    },
    {
        "id": 2618,
        "ca": 3340910,
        "margin": 981296,
        "ebitda": 949939,
        "loss": 9620390,
        "year": 2016,
        "business": 1310
    },
    {
        "id": 2619,
        "ca": 3742337,
        "margin": 54508,
        "ebitda": 178630,
        "loss": 566562,
        "year": 2017,
        "business": 1311
    },
    {
        "id": 2620,
        "ca": 1430653,
        "margin": 784142,
        "ebitda": 755349,
        "loss": 6489537,
        "year": 2016,
        "business": 1311
    },
    {
        "id": 2621,
        "ca": 3866784,
        "margin": 408461,
        "ebitda": 691124,
        "loss": 8994536,
        "year": 2017,
        "business": 1312
    },
    {
        "id": 2622,
        "ca": 2073279,
        "margin": 753672,
        "ebitda": 455332,
        "loss": 1426681,
        "year": 2016,
        "business": 1312
    },
    {
        "id": 2623,
        "ca": 1548788,
        "margin": 799184,
        "ebitda": 595013,
        "loss": 8922685,
        "year": 2017,
        "business": 1313
    },
    {
        "id": 2624,
        "ca": 2489641,
        "margin": 929108,
        "ebitda": 802323,
        "loss": 1676400,
        "year": 2016,
        "business": 1313
    },
    {
        "id": 2625,
        "ca": 1839504,
        "margin": 722840,
        "ebitda": 653032,
        "loss": 4524202,
        "year": 2017,
        "business": 1314
    },
    {
        "id": 2626,
        "ca": 2943791,
        "margin": 873032,
        "ebitda": 406039,
        "loss": 9625198,
        "year": 2016,
        "business": 1314
    },
    {
        "id": 2627,
        "ca": 2070655,
        "margin": 410447,
        "ebitda": 619161,
        "loss": 6694192,
        "year": 2017,
        "business": 1315
    },
    {
        "id": 2628,
        "ca": 2309658,
        "margin": 722691,
        "ebitda": 708220,
        "loss": 6204578,
        "year": 2016,
        "business": 1315
    },
    {
        "id": 2629,
        "ca": 1845240,
        "margin": -24334,
        "ebitda": 48102,
        "loss": 2602406,
        "year": 2017,
        "business": 1316
    },
    {
        "id": 2630,
        "ca": 859136,
        "margin": 54222,
        "ebitda": 75909,
        "loss": 8067701,
        "year": 2016,
        "business": 1316
    },
    {
        "id": 2631,
        "ca": 2256806,
        "margin": 755948,
        "ebitda": 747333,
        "loss": 3703339,
        "year": 2017,
        "business": 1317
    },
    {
        "id": 2632,
        "ca": 3521637,
        "margin": -57333,
        "ebitda": 41601,
        "loss": 5714553,
        "year": 2016,
        "business": 1317
    },
    {
        "id": 2633,
        "ca": 2815727,
        "margin": -195519,
        "ebitda": 719841,
        "loss": 901698,
        "year": 2017,
        "business": 1318
    },
    {
        "id": 2634,
        "ca": 2015840,
        "margin": 138241,
        "ebitda": 598147,
        "loss": 4198905,
        "year": 2016,
        "business": 1318
    },
    {
        "id": 2635,
        "ca": 3705522,
        "margin": 996756,
        "ebitda": 602658,
        "loss": 7970005,
        "year": 2017,
        "business": 1319
    },
    {
        "id": 2636,
        "ca": 2666854,
        "margin": -195357,
        "ebitda": 949062,
        "loss": 3130848,
        "year": 2016,
        "business": 1319
    },
    {
        "id": 2637,
        "ca": 3603883,
        "margin": 774461,
        "ebitda": 636122,
        "loss": 4943918,
        "year": 2017,
        "business": 1320
    },
    {
        "id": 2638,
        "ca": 3814851,
        "margin": 663838,
        "ebitda": 577149,
        "loss": 2527285,
        "year": 2016,
        "business": 1320
    },
    {
        "id": 2639,
        "ca": 1629966,
        "margin": 746069,
        "ebitda": 850600,
        "loss": 2709161,
        "year": 2017,
        "business": 1321
    },
    {
        "id": 2640,
        "ca": 2846044,
        "margin": 611249,
        "ebitda": 460149,
        "loss": 5250808,
        "year": 2016,
        "business": 1321
    },
    {
        "id": 2641,
        "ca": 3249803,
        "margin": -847,
        "ebitda": 105411,
        "loss": 2520700,
        "year": 2017,
        "business": 1322
    },
    {
        "id": 2642,
        "ca": 1921730,
        "margin": 626212,
        "ebitda": 22819,
        "loss": 5118968,
        "year": 2016,
        "business": 1322
    },
    {
        "id": 2643,
        "ca": 1579791,
        "margin": 949432,
        "ebitda": 637092,
        "loss": 3850113,
        "year": 2017,
        "business": 1323
    },
    {
        "id": 2644,
        "ca": 676502,
        "margin": 586097,
        "ebitda": 917732,
        "loss": 8035471,
        "year": 2016,
        "business": 1323
    },
    {
        "id": 2645,
        "ca": 2950736,
        "margin": 41353,
        "ebitda": 623061,
        "loss": 6113881,
        "year": 2017,
        "business": 1324
    },
    {
        "id": 2646,
        "ca": 3150706,
        "margin": 133352,
        "ebitda": 490164,
        "loss": 7660482,
        "year": 2016,
        "business": 1324
    },
    {
        "id": 2647,
        "ca": 899193,
        "margin": 772406,
        "ebitda": 963667,
        "loss": 6815698,
        "year": 2017,
        "business": 1325
    },
    {
        "id": 2648,
        "ca": 194722,
        "margin": 582959,
        "ebitda": 35452,
        "loss": 5234463,
        "year": 2016,
        "business": 1325
    },
    {
        "id": 2649,
        "ca": 1774014,
        "margin": 812171,
        "ebitda": 816247,
        "loss": 4795,
        "year": 2017,
        "business": 1326
    },
    {
        "id": 2650,
        "ca": 1106349,
        "margin": 946899,
        "ebitda": 3148,
        "loss": 4350676,
        "year": 2016,
        "business": 1326
    },
    {
        "id": 2651,
        "ca": 1187490,
        "margin": 917067,
        "ebitda": 455869,
        "loss": 3178879,
        "year": 2017,
        "business": 1327
    },
    {
        "id": 2652,
        "ca": 2388737,
        "margin": 48027,
        "ebitda": 281517,
        "loss": 533574,
        "year": 2016,
        "business": 1327
    },
    {
        "id": 2653,
        "ca": 2156126,
        "margin": 122500,
        "ebitda": 337337,
        "loss": 6435130,
        "year": 2017,
        "business": 1328
    },
    {
        "id": 2654,
        "ca": 2599176,
        "margin": 195236,
        "ebitda": 972498,
        "loss": 9801343,
        "year": 2016,
        "business": 1328
    },
    {
        "id": 2655,
        "ca": 3151423,
        "margin": 984862,
        "ebitda": 168374,
        "loss": 9707189,
        "year": 2017,
        "business": 1329
    },
    {
        "id": 2656,
        "ca": 2095312,
        "margin": 522848,
        "ebitda": 362540,
        "loss": 5681269,
        "year": 2016,
        "business": 1329
    },
    {
        "id": 2657,
        "ca": 1893869,
        "margin": 945565,
        "ebitda": 321181,
        "loss": 4080963,
        "year": 2017,
        "business": 1330
    },
    {
        "id": 2658,
        "ca": 3975986,
        "margin": -179582,
        "ebitda": 276129,
        "loss": 7201593,
        "year": 2016,
        "business": 1330
    },
    {
        "id": 2659,
        "ca": 242272,
        "margin": 618550,
        "ebitda": 961486,
        "loss": 3487113,
        "year": 2017,
        "business": 1331
    },
    {
        "id": 2660,
        "ca": 3203225,
        "margin": -196757,
        "ebitda": 359647,
        "loss": 7518833,
        "year": 2016,
        "business": 1331
    },
    {
        "id": 2661,
        "ca": 1880214,
        "margin": -112617,
        "ebitda": 395946,
        "loss": 2630162,
        "year": 2017,
        "business": 1332
    },
    {
        "id": 2662,
        "ca": 2742006,
        "margin": 22675,
        "ebitda": 945818,
        "loss": 6911677,
        "year": 2016,
        "business": 1332
    },
    {
        "id": 2663,
        "ca": 2690893,
        "margin": 667809,
        "ebitda": 371700,
        "loss": 1590085,
        "year": 2017,
        "business": 1333
    },
    {
        "id": 2664,
        "ca": 363863,
        "margin": -196490,
        "ebitda": 377252,
        "loss": 1442802,
        "year": 2016,
        "business": 1333
    },
    {
        "id": 2665,
        "ca": 3889022,
        "margin": 330749,
        "ebitda": 154345,
        "loss": 5901331,
        "year": 2017,
        "business": 1334
    },
    {
        "id": 2666,
        "ca": 2898183,
        "margin": 412020,
        "ebitda": 211412,
        "loss": 1898781,
        "year": 2016,
        "business": 1334
    },
    {
        "id": 2667,
        "ca": 2219717,
        "margin": 761838,
        "ebitda": 816857,
        "loss": 5635793,
        "year": 2017,
        "business": 1335
    },
    {
        "id": 2668,
        "ca": 1756341,
        "margin": 551974,
        "ebitda": 187358,
        "loss": 4214180,
        "year": 2016,
        "business": 1335
    },
    {
        "id": 2669,
        "ca": 569647,
        "margin": 207950,
        "ebitda": 83795,
        "loss": 1445553,
        "year": 2017,
        "business": 1336
    },
    {
        "id": 2670,
        "ca": 3913544,
        "margin": 401166,
        "ebitda": 97592,
        "loss": 8342416,
        "year": 2016,
        "business": 1336
    },
    {
        "id": 2671,
        "ca": 2253393,
        "margin": 718227,
        "ebitda": 643447,
        "loss": 9503316,
        "year": 2017,
        "business": 1337
    },
    {
        "id": 2672,
        "ca": 3035875,
        "margin": 334290,
        "ebitda": 836489,
        "loss": 5840951,
        "year": 2016,
        "business": 1337
    },
    {
        "id": 2673,
        "ca": 3042317,
        "margin": 658569,
        "ebitda": 71018,
        "loss": 9471325,
        "year": 2017,
        "business": 1338
    },
    {
        "id": 2674,
        "ca": 3299800,
        "margin": 948579,
        "ebitda": 131329,
        "loss": 784470,
        "year": 2016,
        "business": 1338
    },
    {
        "id": 2675,
        "ca": 1298526,
        "margin": 747600,
        "ebitda": 266745,
        "loss": 8434161,
        "year": 2017,
        "business": 1339
    },
    {
        "id": 2676,
        "ca": 2464257,
        "margin": 291019,
        "ebitda": 133772,
        "loss": 4757829,
        "year": 2016,
        "business": 1339
    },
    {
        "id": 2677,
        "ca": 656037,
        "margin": 920962,
        "ebitda": 363136,
        "loss": 715611,
        "year": 2017,
        "business": 1340
    },
    {
        "id": 2678,
        "ca": 137280,
        "margin": -107503,
        "ebitda": 45496,
        "loss": 2511641,
        "year": 2016,
        "business": 1340
    },
    {
        "id": 2679,
        "ca": 2718905,
        "margin": -8382,
        "ebitda": 422157,
        "loss": 8472060,
        "year": 2017,
        "business": 1341
    },
    {
        "id": 2680,
        "ca": 1685173,
        "margin": 821441,
        "ebitda": 51345,
        "loss": 3556685,
        "year": 2016,
        "business": 1341
    },
    {
        "id": 2681,
        "ca": 3575753,
        "margin": 446185,
        "ebitda": 624581,
        "loss": 9017996,
        "year": 2017,
        "business": 1342
    },
    {
        "id": 2682,
        "ca": 209955,
        "margin": 373733,
        "ebitda": 788932,
        "loss": 5333421,
        "year": 2016,
        "business": 1342
    },
    {
        "id": 2683,
        "ca": 3839319,
        "margin": 668896,
        "ebitda": 54927,
        "loss": 1714494,
        "year": 2017,
        "business": 1343
    },
    {
        "id": 2684,
        "ca": 2167669,
        "margin": 516756,
        "ebitda": 54948,
        "loss": 5883349,
        "year": 2016,
        "business": 1343
    },
    {
        "id": 2685,
        "ca": 860675,
        "margin": 726715,
        "ebitda": 274949,
        "loss": 6317226,
        "year": 2017,
        "business": 1344
    },
    {
        "id": 2686,
        "ca": 1401590,
        "margin": 762884,
        "ebitda": 893200,
        "loss": 2049642,
        "year": 2016,
        "business": 1344
    },
    {
        "id": 2687,
        "ca": 1716556,
        "margin": -126313,
        "ebitda": 234803,
        "loss": 7214121,
        "year": 2017,
        "business": 1345
    },
    {
        "id": 2688,
        "ca": 284385,
        "margin": 382663,
        "ebitda": 559178,
        "loss": 4567945,
        "year": 2016,
        "business": 1345
    },
    {
        "id": 2689,
        "ca": 760972,
        "margin": 608660,
        "ebitda": 662529,
        "loss": 9343354,
        "year": 2017,
        "business": 1346
    },
    {
        "id": 2690,
        "ca": 2956499,
        "margin": 325767,
        "ebitda": 33453,
        "loss": 46559,
        "year": 2016,
        "business": 1346
    },
    {
        "id": 2691,
        "ca": 1010520,
        "margin": 466668,
        "ebitda": 410516,
        "loss": 6408445,
        "year": 2017,
        "business": 1347
    },
    {
        "id": 2692,
        "ca": 3003038,
        "margin": 633917,
        "ebitda": 748296,
        "loss": 7334582,
        "year": 2016,
        "business": 1347
    },
    {
        "id": 2693,
        "ca": 1787673,
        "margin": 391473,
        "ebitda": 17367,
        "loss": 8838290,
        "year": 2017,
        "business": 1348
    },
    {
        "id": 2694,
        "ca": 3056695,
        "margin": 118720,
        "ebitda": 833986,
        "loss": 1329689,
        "year": 2016,
        "business": 1348
    },
    {
        "id": 2695,
        "ca": 2931922,
        "margin": 545582,
        "ebitda": 262168,
        "loss": 8322734,
        "year": 2017,
        "business": 1349
    },
    {
        "id": 2696,
        "ca": 3106178,
        "margin": 802826,
        "ebitda": 870047,
        "loss": 1968437,
        "year": 2016,
        "business": 1349
    },
    {
        "id": 2697,
        "ca": 951318,
        "margin": 41579,
        "ebitda": 674636,
        "loss": 4910920,
        "year": 2017,
        "business": 1350
    },
    {
        "id": 2698,
        "ca": 1349760,
        "margin": 611029,
        "ebitda": 517653,
        "loss": 9358256,
        "year": 2016,
        "business": 1350
    },
    {
        "id": 2699,
        "ca": 2569565,
        "margin": -5245,
        "ebitda": 33578,
        "loss": 5063700,
        "year": 2017,
        "business": 1351
    },
    {
        "id": 2700,
        "ca": 1568746,
        "margin": 720222,
        "ebitda": 254339,
        "loss": 4275511,
        "year": 2016,
        "business": 1351
    },
    {
        "id": 2701,
        "ca": 1923199,
        "margin": 608612,
        "ebitda": 839213,
        "loss": 7724503,
        "year": 2017,
        "business": 1352
    },
    {
        "id": 2702,
        "ca": 664102,
        "margin": 869980,
        "ebitda": 140011,
        "loss": 9316937,
        "year": 2016,
        "business": 1352
    },
    {
        "id": 2703,
        "ca": 392087,
        "margin": 53147,
        "ebitda": 842057,
        "loss": 6132850,
        "year": 2017,
        "business": 1353
    },
    {
        "id": 2704,
        "ca": 2261787,
        "margin": 556825,
        "ebitda": 915400,
        "loss": 8581554,
        "year": 2016,
        "business": 1353
    },
    {
        "id": 2705,
        "ca": 2284928,
        "margin": 114387,
        "ebitda": 377939,
        "loss": 5883459,
        "year": 2017,
        "business": 1354
    },
    {
        "id": 2706,
        "ca": 1621269,
        "margin": 891839,
        "ebitda": 665915,
        "loss": 5702747,
        "year": 2016,
        "business": 1354
    },
    {
        "id": 2707,
        "ca": 847545,
        "margin": 915350,
        "ebitda": 529109,
        "loss": 9461549,
        "year": 2017,
        "business": 1355
    },
    {
        "id": 2708,
        "ca": 1530298,
        "margin": 455171,
        "ebitda": 851352,
        "loss": 2596535,
        "year": 2016,
        "business": 1355
    },
    {
        "id": 2709,
        "ca": 1446193,
        "margin": 813909,
        "ebitda": 747653,
        "loss": 4350919,
        "year": 2017,
        "business": 1356
    },
    {
        "id": 2710,
        "ca": 1501763,
        "margin": 254720,
        "ebitda": 201559,
        "loss": 363810,
        "year": 2016,
        "business": 1356
    },
    {
        "id": 2711,
        "ca": 3354980,
        "margin": 288394,
        "ebitda": 954936,
        "loss": 339268,
        "year": 2017,
        "business": 1357
    },
    {
        "id": 2712,
        "ca": 705691,
        "margin": 31143,
        "ebitda": 279893,
        "loss": 868212,
        "year": 2016,
        "business": 1357
    },
    {
        "id": 2713,
        "ca": 1468082,
        "margin": 920479,
        "ebitda": 14209,
        "loss": 4997015,
        "year": 2017,
        "business": 1358
    },
    {
        "id": 2714,
        "ca": 1440635,
        "margin": 477581,
        "ebitda": 181965,
        "loss": 4799804,
        "year": 2016,
        "business": 1358
    },
    {
        "id": 2715,
        "ca": 1834736,
        "margin": 266930,
        "ebitda": 139596,
        "loss": 2694091,
        "year": 2017,
        "business": 1359
    },
    {
        "id": 2716,
        "ca": 861386,
        "margin": 278691,
        "ebitda": 840633,
        "loss": 351358,
        "year": 2016,
        "business": 1359
    },
    {
        "id": 2717,
        "ca": 2098835,
        "margin": 303890,
        "ebitda": 64509,
        "loss": 7448366,
        "year": 2017,
        "business": 1360
    },
    {
        "id": 2718,
        "ca": 1962087,
        "margin": 160425,
        "ebitda": 521042,
        "loss": 5559694,
        "year": 2016,
        "business": 1360
    },
    {
        "id": 2719,
        "ca": 2120874,
        "margin": 464133,
        "ebitda": 812432,
        "loss": 5430314,
        "year": 2017,
        "business": 1361
    },
    {
        "id": 2720,
        "ca": 2138762,
        "margin": 693207,
        "ebitda": 338632,
        "loss": 258643,
        "year": 2016,
        "business": 1361
    },
    {
        "id": 2721,
        "ca": 474921,
        "margin": -185517,
        "ebitda": 631776,
        "loss": 3218944,
        "year": 2017,
        "business": 1362
    },
    {
        "id": 2722,
        "ca": 2990297,
        "margin": -51262,
        "ebitda": 53780,
        "loss": 3031239,
        "year": 2016,
        "business": 1362
    },
    {
        "id": 2723,
        "ca": 2664465,
        "margin": -16421,
        "ebitda": 285623,
        "loss": 464911,
        "year": 2017,
        "business": 1363
    },
    {
        "id": 2724,
        "ca": 2325616,
        "margin": 852331,
        "ebitda": 666424,
        "loss": 4003657,
        "year": 2016,
        "business": 1363
    },
    {
        "id": 2725,
        "ca": 2229344,
        "margin": 554057,
        "ebitda": 201811,
        "loss": 8645420,
        "year": 2017,
        "business": 1364
    },
    {
        "id": 2726,
        "ca": 3190362,
        "margin": 889913,
        "ebitda": 779869,
        "loss": 5944041,
        "year": 2016,
        "business": 1364
    },
    {
        "id": 2727,
        "ca": 3551453,
        "margin": 821869,
        "ebitda": 434250,
        "loss": 1197258,
        "year": 2017,
        "business": 1365
    },
    {
        "id": 2728,
        "ca": 3837549,
        "margin": 706701,
        "ebitda": 820626,
        "loss": 8870882,
        "year": 2016,
        "business": 1365
    },
    {
        "id": 2729,
        "ca": 3950992,
        "margin": 913472,
        "ebitda": 519731,
        "loss": 8520981,
        "year": 2017,
        "business": 1366
    },
    {
        "id": 2730,
        "ca": 839183,
        "margin": 677435,
        "ebitda": 290693,
        "loss": 3045717,
        "year": 2016,
        "business": 1366
    },
    {
        "id": 2731,
        "ca": 1962552,
        "margin": -53451,
        "ebitda": 927863,
        "loss": 8404124,
        "year": 2017,
        "business": 1367
    },
    {
        "id": 2732,
        "ca": 3482972,
        "margin": 883776,
        "ebitda": 122439,
        "loss": 1252687,
        "year": 2016,
        "business": 1367
    },
    {
        "id": 2733,
        "ca": 566017,
        "margin": 749208,
        "ebitda": 648826,
        "loss": 8833738,
        "year": 2017,
        "business": 1368
    },
    {
        "id": 2734,
        "ca": 1082597,
        "margin": -136917,
        "ebitda": 307618,
        "loss": 6522319,
        "year": 2016,
        "business": 1368
    },
    {
        "id": 2735,
        "ca": 2288930,
        "margin": 625866,
        "ebitda": 527456,
        "loss": 9011473,
        "year": 2017,
        "business": 1369
    },
    {
        "id": 2736,
        "ca": 1211123,
        "margin": 192301,
        "ebitda": 791774,
        "loss": 1162884,
        "year": 2016,
        "business": 1369
    },
    {
        "id": 2737,
        "ca": 916593,
        "margin": 872099,
        "ebitda": 105123,
        "loss": 2187726,
        "year": 2017,
        "business": 1370
    },
    {
        "id": 2738,
        "ca": 3480523,
        "margin": 887867,
        "ebitda": 923437,
        "loss": 5417054,
        "year": 2016,
        "business": 1370
    },
    {
        "id": 2739,
        "ca": 1968315,
        "margin": 804693,
        "ebitda": 489249,
        "loss": 4969114,
        "year": 2017,
        "business": 1371
    },
    {
        "id": 2740,
        "ca": 1240908,
        "margin": 800701,
        "ebitda": 46021,
        "loss": 2781958,
        "year": 2016,
        "business": 1371
    },
    {
        "id": 2741,
        "ca": 2170870,
        "margin": -30607,
        "ebitda": 557277,
        "loss": 7459962,
        "year": 2017,
        "business": 1372
    },
    {
        "id": 2742,
        "ca": 1029086,
        "margin": 477424,
        "ebitda": 419485,
        "loss": 3592286,
        "year": 2016,
        "business": 1372
    },
    {
        "id": 2743,
        "ca": 2711782,
        "margin": 736784,
        "ebitda": 522943,
        "loss": 8552177,
        "year": 2017,
        "business": 1373
    },
    {
        "id": 2744,
        "ca": 1197378,
        "margin": 150762,
        "ebitda": 434527,
        "loss": 3712530,
        "year": 2016,
        "business": 1373
    },
    {
        "id": 2745,
        "ca": 1112998,
        "margin": 975979,
        "ebitda": 638482,
        "loss": 7559601,
        "year": 2017,
        "business": 1374
    },
    {
        "id": 2746,
        "ca": 3812725,
        "margin": 636443,
        "ebitda": 135589,
        "loss": 7138591,
        "year": 2016,
        "business": 1374
    },
    {
        "id": 2747,
        "ca": 2383838,
        "margin": 616939,
        "ebitda": 93826,
        "loss": 2747264,
        "year": 2017,
        "business": 1375
    },
    {
        "id": 2748,
        "ca": 181012,
        "margin": 250837,
        "ebitda": 115430,
        "loss": 9199688,
        "year": 2016,
        "business": 1375
    },
    {
        "id": 2749,
        "ca": 1405292,
        "margin": 540777,
        "ebitda": 28731,
        "loss": 2524599,
        "year": 2017,
        "business": 1376
    },
    {
        "id": 2750,
        "ca": 329921,
        "margin": 346998,
        "ebitda": 835285,
        "loss": 4111345,
        "year": 2016,
        "business": 1376
    },
    {
        "id": 2751,
        "ca": 3302508,
        "margin": 168359,
        "ebitda": 846929,
        "loss": 1222148,
        "year": 2017,
        "business": 1377
    },
    {
        "id": 2752,
        "ca": 3575626,
        "margin": 876556,
        "ebitda": 371425,
        "loss": 1804369,
        "year": 2016,
        "business": 1377
    },
    {
        "id": 2753,
        "ca": 2366861,
        "margin": 190274,
        "ebitda": 455961,
        "loss": 1587340,
        "year": 2017,
        "business": 1378
    },
    {
        "id": 2754,
        "ca": 3560590,
        "margin": 10046,
        "ebitda": 914632,
        "loss": 4602986,
        "year": 2016,
        "business": 1378
    },
    {
        "id": 2755,
        "ca": 3576414,
        "margin": 909487,
        "ebitda": 852413,
        "loss": 5217031,
        "year": 2017,
        "business": 1379
    },
    {
        "id": 2756,
        "ca": 2352924,
        "margin": 152405,
        "ebitda": 326292,
        "loss": 952533,
        "year": 2016,
        "business": 1379
    },
    {
        "id": 2757,
        "ca": 3558108,
        "margin": -95600,
        "ebitda": 171362,
        "loss": 7210648,
        "year": 2017,
        "business": 1380
    },
    {
        "id": 2758,
        "ca": 1606860,
        "margin": 188624,
        "ebitda": 607255,
        "loss": 7826122,
        "year": 2016,
        "business": 1380
    },
    {
        "id": 2759,
        "ca": 3270824,
        "margin": 761275,
        "ebitda": 754007,
        "loss": 4707835,
        "year": 2017,
        "business": 1381
    },
    {
        "id": 2760,
        "ca": 3448481,
        "margin": -90003,
        "ebitda": 179065,
        "loss": 3175883,
        "year": 2016,
        "business": 1381
    },
    {
        "id": 2761,
        "ca": 1314254,
        "margin": 308412,
        "ebitda": 897616,
        "loss": 4718253,
        "year": 2017,
        "business": 1382
    },
    {
        "id": 2762,
        "ca": 3846330,
        "margin": 799473,
        "ebitda": 521937,
        "loss": 4576128,
        "year": 2016,
        "business": 1382
    },
    {
        "id": 2763,
        "ca": 1621442,
        "margin": -124749,
        "ebitda": 986696,
        "loss": 9496804,
        "year": 2017,
        "business": 1383
    },
    {
        "id": 2764,
        "ca": 3406668,
        "margin": 45680,
        "ebitda": 712892,
        "loss": 9152835,
        "year": 2016,
        "business": 1383
    },
    {
        "id": 2765,
        "ca": 2269765,
        "margin": -149226,
        "ebitda": 792527,
        "loss": 1323550,
        "year": 2017,
        "business": 1384
    },
    {
        "id": 2766,
        "ca": 2963306,
        "margin": 454366,
        "ebitda": 724729,
        "loss": 5595133,
        "year": 2016,
        "business": 1384
    },
    {
        "id": 2767,
        "ca": 1605992,
        "margin": 988656,
        "ebitda": 462810,
        "loss": 9989406,
        "year": 2017,
        "business": 1385
    },
    {
        "id": 2768,
        "ca": 1686924,
        "margin": 365867,
        "ebitda": 41800,
        "loss": 2985081,
        "year": 2016,
        "business": 1385
    },
    {
        "id": 2769,
        "ca": 1581711,
        "margin": 211622,
        "ebitda": 341743,
        "loss": 2826364,
        "year": 2017,
        "business": 1386
    },
    {
        "id": 2770,
        "ca": 967668,
        "margin": 616783,
        "ebitda": 829230,
        "loss": 4969477,
        "year": 2016,
        "business": 1386
    },
    {
        "id": 2771,
        "ca": 2130668,
        "margin": 187434,
        "ebitda": 82987,
        "loss": 2374500,
        "year": 2017,
        "business": 1387
    },
    {
        "id": 2772,
        "ca": 2060937,
        "margin": 693994,
        "ebitda": 173536,
        "loss": 738598,
        "year": 2016,
        "business": 1387
    },
    {
        "id": 2773,
        "ca": 3783759,
        "margin": -102080,
        "ebitda": 236607,
        "loss": 5425293,
        "year": 2017,
        "business": 1388
    },
    {
        "id": 2774,
        "ca": 215432,
        "margin": 573524,
        "ebitda": 470330,
        "loss": 7000,
        "year": 2016,
        "business": 1388
    },
    {
        "id": 2775,
        "ca": 2905580,
        "margin": 764773,
        "ebitda": 154364,
        "loss": 4777236,
        "year": 2017,
        "business": 1389
    },
    {
        "id": 2776,
        "ca": 1195582,
        "margin": 70071,
        "ebitda": 212451,
        "loss": 1188373,
        "year": 2016,
        "business": 1389
    },
    {
        "id": 2777,
        "ca": 3495377,
        "margin": 636655,
        "ebitda": 134257,
        "loss": 3172749,
        "year": 2017,
        "business": 1390
    },
    {
        "id": 2778,
        "ca": 1677355,
        "margin": 911493,
        "ebitda": 888192,
        "loss": 6089259,
        "year": 2016,
        "business": 1390
    },
    {
        "id": 2779,
        "ca": 1466196,
        "margin": 548741,
        "ebitda": 160073,
        "loss": 9729979,
        "year": 2017,
        "business": 1391
    },
    {
        "id": 2780,
        "ca": 1661417,
        "margin": 197013,
        "ebitda": 290678,
        "loss": 4389395,
        "year": 2016,
        "business": 1391
    },
    {
        "id": 2781,
        "ca": 3127946,
        "margin": 893831,
        "ebitda": 288833,
        "loss": 7748286,
        "year": 2017,
        "business": 1392
    },
    {
        "id": 2782,
        "ca": 2225294,
        "margin": 217009,
        "ebitda": 62425,
        "loss": 1368019,
        "year": 2016,
        "business": 1392
    },
    {
        "id": 2783,
        "ca": 1132704,
        "margin": -150713,
        "ebitda": 232972,
        "loss": 1084483,
        "year": 2017,
        "business": 1393
    },
    {
        "id": 2784,
        "ca": 3465107,
        "margin": 199917,
        "ebitda": 689631,
        "loss": 3865907,
        "year": 2016,
        "business": 1393
    },
    {
        "id": 2785,
        "ca": 3217194,
        "margin": -111319,
        "ebitda": 990607,
        "loss": 7304804,
        "year": 2017,
        "business": 1394
    },
    {
        "id": 2786,
        "ca": 1751330,
        "margin": 57717,
        "ebitda": 662916,
        "loss": 5826769,
        "year": 2016,
        "business": 1394
    },
    {
        "id": 2787,
        "ca": 1382913,
        "margin": 19950,
        "ebitda": 382795,
        "loss": 4053846,
        "year": 2017,
        "business": 1395
    },
    {
        "id": 2788,
        "ca": 1988292,
        "margin": 662285,
        "ebitda": 349462,
        "loss": 2033756,
        "year": 2016,
        "business": 1395
    },
    {
        "id": 2789,
        "ca": 2043418,
        "margin": -19705,
        "ebitda": 502427,
        "loss": 2460692,
        "year": 2017,
        "business": 1396
    },
    {
        "id": 2790,
        "ca": 3748605,
        "margin": 698430,
        "ebitda": 836909,
        "loss": 6905693,
        "year": 2016,
        "business": 1396
    },
    {
        "id": 2791,
        "ca": 707876,
        "margin": 790040,
        "ebitda": 245530,
        "loss": 8748923,
        "year": 2017,
        "business": 1397
    },
    {
        "id": 2792,
        "ca": 1935866,
        "margin": 201333,
        "ebitda": 969947,
        "loss": 563824,
        "year": 2016,
        "business": 1397
    },
    {
        "id": 2793,
        "ca": 2803582,
        "margin": 56784,
        "ebitda": 353169,
        "loss": 4319179,
        "year": 2017,
        "business": 1398
    },
    {
        "id": 2794,
        "ca": 1482824,
        "margin": -46544,
        "ebitda": 300833,
        "loss": 2922905,
        "year": 2016,
        "business": 1398
    },
    {
        "id": 2795,
        "ca": 1071588,
        "margin": 615008,
        "ebitda": 759283,
        "loss": 3420671,
        "year": 2017,
        "business": 1399
    },
    {
        "id": 2796,
        "ca": 2185143,
        "margin": 373678,
        "ebitda": 768236,
        "loss": 1655402,
        "year": 2016,
        "business": 1399
    },
    {
        "id": 2797,
        "ca": 3743866,
        "margin": 977142,
        "ebitda": 7294,
        "loss": 61695,
        "year": 2017,
        "business": 1400
    },
    {
        "id": 2798,
        "ca": 1838054,
        "margin": 710668,
        "ebitda": 73938,
        "loss": 7620100,
        "year": 2016,
        "business": 1400
    },
    {
        "id": 2799,
        "ca": 1110597,
        "margin": 357251,
        "ebitda": 384948,
        "loss": 2165446,
        "year": 2017,
        "business": 1401
    },
    {
        "id": 2800,
        "ca": 603497,
        "margin": 880604,
        "ebitda": 498291,
        "loss": 6209682,
        "year": 2016,
        "business": 1401
    },
    {
        "id": 2801,
        "ca": 3582353,
        "margin": 647395,
        "ebitda": 756430,
        "loss": 5710510,
        "year": 2017,
        "business": 1402
    },
    {
        "id": 2802,
        "ca": 2897457,
        "margin": 101904,
        "ebitda": 765526,
        "loss": 369894,
        "year": 2016,
        "business": 1402
    },
    {
        "id": 2803,
        "ca": 2085654,
        "margin": 945811,
        "ebitda": 685290,
        "loss": 7008522,
        "year": 2017,
        "business": 1403
    },
    {
        "id": 2804,
        "ca": 3575110,
        "margin": -166822,
        "ebitda": 56090,
        "loss": 6708429,
        "year": 2016,
        "business": 1403
    },
    {
        "id": 2805,
        "ca": 3800200,
        "margin": 983408,
        "ebitda": 656006,
        "loss": 3614391,
        "year": 2017,
        "business": 1404
    },
    {
        "id": 2806,
        "ca": 3156339,
        "margin": 938715,
        "ebitda": 110395,
        "loss": 9988595,
        "year": 2016,
        "business": 1404
    },
    {
        "id": 2807,
        "ca": 2779663,
        "margin": 484032,
        "ebitda": 420505,
        "loss": 2877267,
        "year": 2017,
        "business": 1405
    },
    {
        "id": 2808,
        "ca": 3192092,
        "margin": 695775,
        "ebitda": 446858,
        "loss": 1989627,
        "year": 2016,
        "business": 1405
    },
    {
        "id": 2809,
        "ca": 2628236,
        "margin": 923745,
        "ebitda": 406925,
        "loss": 4739018,
        "year": 2017,
        "business": 1406
    },
    {
        "id": 2810,
        "ca": 2504588,
        "margin": 716151,
        "ebitda": 517226,
        "loss": 8122080,
        "year": 2016,
        "business": 1406
    },
    {
        "id": 2811,
        "ca": 997117,
        "margin": 601282,
        "ebitda": 941833,
        "loss": 8276036,
        "year": 2017,
        "business": 1407
    },
    {
        "id": 2812,
        "ca": 2850944,
        "margin": 339898,
        "ebitda": 460552,
        "loss": 4659996,
        "year": 2016,
        "business": 1407
    },
    {
        "id": 2813,
        "ca": 2862585,
        "margin": 614851,
        "ebitda": 935409,
        "loss": 9626931,
        "year": 2017,
        "business": 1408
    },
    {
        "id": 2814,
        "ca": 442032,
        "margin": 66568,
        "ebitda": 424129,
        "loss": 3074482,
        "year": 2016,
        "business": 1408
    },
    {
        "id": 2815,
        "ca": 1749281,
        "margin": 305442,
        "ebitda": 792086,
        "loss": 8975322,
        "year": 2017,
        "business": 1409
    },
    {
        "id": 2816,
        "ca": 1705519,
        "margin": 219592,
        "ebitda": 813822,
        "loss": 8136019,
        "year": 2016,
        "business": 1409
    },
    {
        "id": 2817,
        "ca": 3085562,
        "margin": 541397,
        "ebitda": 941276,
        "loss": 799152,
        "year": 2017,
        "business": 1410
    },
    {
        "id": 2818,
        "ca": 2681506,
        "margin": 582101,
        "ebitda": 1093,
        "loss": 3946368,
        "year": 2016,
        "business": 1410
    },
    {
        "id": 2819,
        "ca": 2045899,
        "margin": 638998,
        "ebitda": 377189,
        "loss": 1935631,
        "year": 2017,
        "business": 1411
    },
    {
        "id": 2820,
        "ca": 2450274,
        "margin": 556985,
        "ebitda": 67665,
        "loss": 7462333,
        "year": 2016,
        "business": 1411
    },
    {
        "id": 2821,
        "ca": 2725524,
        "margin": -79936,
        "ebitda": 283420,
        "loss": 1513558,
        "year": 2017,
        "business": 1412
    },
    {
        "id": 2822,
        "ca": 2168066,
        "margin": 932147,
        "ebitda": 181329,
        "loss": 6875170,
        "year": 2016,
        "business": 1412
    },
    {
        "id": 2823,
        "ca": 3124755,
        "margin": 555100,
        "ebitda": 844024,
        "loss": 7460202,
        "year": 2017,
        "business": 1413
    },
    {
        "id": 2824,
        "ca": 3620914,
        "margin": 7120,
        "ebitda": 731419,
        "loss": 2674956,
        "year": 2016,
        "business": 1413
    },
    {
        "id": 2825,
        "ca": 2770687,
        "margin": -57402,
        "ebitda": 247868,
        "loss": 7239538,
        "year": 2017,
        "business": 1414
    },
    {
        "id": 2826,
        "ca": 1501347,
        "margin": 498682,
        "ebitda": 720131,
        "loss": 5222928,
        "year": 2016,
        "business": 1414
    },
    {
        "id": 2827,
        "ca": 2847864,
        "margin": 943351,
        "ebitda": 2204,
        "loss": 5569937,
        "year": 2017,
        "business": 1415
    },
    {
        "id": 2828,
        "ca": 2250194,
        "margin": 190540,
        "ebitda": 999126,
        "loss": 9676330,
        "year": 2016,
        "business": 1415
    },
    {
        "id": 2829,
        "ca": 3418804,
        "margin": 564868,
        "ebitda": 683794,
        "loss": 5886162,
        "year": 2017,
        "business": 1416
    },
    {
        "id": 2830,
        "ca": 2674143,
        "margin": -69468,
        "ebitda": 567767,
        "loss": 7289695,
        "year": 2016,
        "business": 1416
    },
    {
        "id": 2831,
        "ca": 2527069,
        "margin": 347646,
        "ebitda": 517752,
        "loss": 5525663,
        "year": 2017,
        "business": 1417
    },
    {
        "id": 2832,
        "ca": 2239416,
        "margin": -16094,
        "ebitda": 756599,
        "loss": 2475871,
        "year": 2016,
        "business": 1417
    },
    {
        "id": 2833,
        "ca": 3855462,
        "margin": 439437,
        "ebitda": 229158,
        "loss": 5632398,
        "year": 2017,
        "business": 1418
    },
    {
        "id": 2834,
        "ca": 3542559,
        "margin": 403375,
        "ebitda": 347885,
        "loss": 459845,
        "year": 2016,
        "business": 1418
    },
    {
        "id": 2835,
        "ca": 780418,
        "margin": 253910,
        "ebitda": 61490,
        "loss": 2302731,
        "year": 2017,
        "business": 1419
    },
    {
        "id": 2836,
        "ca": 852624,
        "margin": 950961,
        "ebitda": 415343,
        "loss": 5304281,
        "year": 2016,
        "business": 1419
    },
    {
        "id": 2837,
        "ca": 1683315,
        "margin": 366569,
        "ebitda": 904660,
        "loss": 9447066,
        "year": 2017,
        "business": 1420
    },
    {
        "id": 2838,
        "ca": 2481528,
        "margin": 843435,
        "ebitda": 253405,
        "loss": 227331,
        "year": 2016,
        "business": 1420
    },
    {
        "id": 2839,
        "ca": 2923356,
        "margin": 40946,
        "ebitda": 224150,
        "loss": 5998069,
        "year": 2017,
        "business": 1421
    },
    {
        "id": 2840,
        "ca": 2166751,
        "margin": -191638,
        "ebitda": 499742,
        "loss": 5399421,
        "year": 2016,
        "business": 1421
    },
    {
        "id": 2841,
        "ca": 2638760,
        "margin": 475681,
        "ebitda": 933826,
        "loss": 8523412,
        "year": 2017,
        "business": 1422
    },
    {
        "id": 2842,
        "ca": 971252,
        "margin": 653981,
        "ebitda": 418201,
        "loss": 8203281,
        "year": 2016,
        "business": 1422
    },
    {
        "id": 2843,
        "ca": 3157255,
        "margin": 68908,
        "ebitda": 828045,
        "loss": 3667986,
        "year": 2017,
        "business": 1423
    },
    {
        "id": 2844,
        "ca": 739942,
        "margin": 886381,
        "ebitda": 246003,
        "loss": 2360889,
        "year": 2016,
        "business": 1423
    },
    {
        "id": 2845,
        "ca": 3214168,
        "margin": 338364,
        "ebitda": 639154,
        "loss": 4144626,
        "year": 2017,
        "business": 1424
    },
    {
        "id": 2846,
        "ca": 1118078,
        "margin": -129297,
        "ebitda": 435120,
        "loss": 2079426,
        "year": 2016,
        "business": 1424
    },
    {
        "id": 2847,
        "ca": 3615862,
        "margin": 298206,
        "ebitda": 481195,
        "loss": 5200679,
        "year": 2017,
        "business": 1425
    },
    {
        "id": 2848,
        "ca": 690989,
        "margin": 235668,
        "ebitda": 753715,
        "loss": 8693035,
        "year": 2016,
        "business": 1425
    },
    {
        "id": 2849,
        "ca": 3862714,
        "margin": 151739,
        "ebitda": 751571,
        "loss": 3531120,
        "year": 2017,
        "business": 1426
    },
    {
        "id": 2850,
        "ca": 3848570,
        "margin": -101425,
        "ebitda": 507648,
        "loss": 5507248,
        "year": 2016,
        "business": 1426
    },
    {
        "id": 2851,
        "ca": 1810831,
        "margin": 336372,
        "ebitda": 698792,
        "loss": 280354,
        "year": 2017,
        "business": 1427
    },
    {
        "id": 2852,
        "ca": 2472954,
        "margin": 11517,
        "ebitda": 271457,
        "loss": 3860091,
        "year": 2016,
        "business": 1427
    },
    {
        "id": 2853,
        "ca": 2495145,
        "margin": 269393,
        "ebitda": 611512,
        "loss": 9524803,
        "year": 2017,
        "business": 1428
    },
    {
        "id": 2854,
        "ca": 2742711,
        "margin": 618463,
        "ebitda": 603368,
        "loss": 381360,
        "year": 2016,
        "business": 1428
    },
    {
        "id": 2855,
        "ca": 2468948,
        "margin": 266613,
        "ebitda": 518012,
        "loss": 8264606,
        "year": 2017,
        "business": 1429
    },
    {
        "id": 2856,
        "ca": 2998984,
        "margin": 466802,
        "ebitda": 619463,
        "loss": 5488379,
        "year": 2016,
        "business": 1429
    },
    {
        "id": 2857,
        "ca": 3800623,
        "margin": 877950,
        "ebitda": 684045,
        "loss": 2672828,
        "year": 2017,
        "business": 1430
    },
    {
        "id": 2858,
        "ca": 2423741,
        "margin": 638411,
        "ebitda": 390220,
        "loss": 7443191,
        "year": 2016,
        "business": 1430
    },
    {
        "id": 2859,
        "ca": 1137052,
        "margin": 707224,
        "ebitda": 934608,
        "loss": 7813918,
        "year": 2017,
        "business": 1431
    },
    {
        "id": 2860,
        "ca": 1785791,
        "margin": 286417,
        "ebitda": 941119,
        "loss": 6486162,
        "year": 2016,
        "business": 1431
    },
    {
        "id": 2861,
        "ca": 3028204,
        "margin": 484698,
        "ebitda": 736343,
        "loss": 694053,
        "year": 2017,
        "business": 1432
    },
    {
        "id": 2862,
        "ca": 3691937,
        "margin": 689405,
        "ebitda": 330008,
        "loss": 6404240,
        "year": 2016,
        "business": 1432
    },
    {
        "id": 2863,
        "ca": 3359516,
        "margin": 848271,
        "ebitda": 802381,
        "loss": 1960985,
        "year": 2017,
        "business": 1433
    },
    {
        "id": 2864,
        "ca": 629838,
        "margin": 142714,
        "ebitda": 98320,
        "loss": 7795293,
        "year": 2016,
        "business": 1433
    },
    {
        "id": 2865,
        "ca": 755864,
        "margin": -134281,
        "ebitda": 50907,
        "loss": 7205032,
        "year": 2017,
        "business": 1434
    },
    {
        "id": 2866,
        "ca": 1304154,
        "margin": 666758,
        "ebitda": 473219,
        "loss": 3120724,
        "year": 2016,
        "business": 1434
    },
    {
        "id": 2867,
        "ca": 2391428,
        "margin": 366454,
        "ebitda": 572774,
        "loss": 226070,
        "year": 2017,
        "business": 1435
    },
    {
        "id": 2868,
        "ca": 2543543,
        "margin": 340375,
        "ebitda": 975406,
        "loss": 1784203,
        "year": 2016,
        "business": 1435
    },
    {
        "id": 2869,
        "ca": 597931,
        "margin": 864210,
        "ebitda": 103209,
        "loss": 9041769,
        "year": 2017,
        "business": 1436
    },
    {
        "id": 2870,
        "ca": 1416031,
        "margin": 24317,
        "ebitda": 801787,
        "loss": 2280285,
        "year": 2016,
        "business": 1436
    },
    {
        "id": 2871,
        "ca": 221003,
        "margin": -196582,
        "ebitda": 799669,
        "loss": 1486436,
        "year": 2017,
        "business": 1437
    },
    {
        "id": 2872,
        "ca": 2849613,
        "margin": 295582,
        "ebitda": 440676,
        "loss": 5325285,
        "year": 2016,
        "business": 1437
    },
    {
        "id": 2873,
        "ca": 3955854,
        "margin": 392345,
        "ebitda": 568943,
        "loss": 2154566,
        "year": 2017,
        "business": 1438
    },
    {
        "id": 2874,
        "ca": 963387,
        "margin": 746525,
        "ebitda": 237115,
        "loss": 5620944,
        "year": 2016,
        "business": 1438
    },
    {
        "id": 2875,
        "ca": 1488892,
        "margin": 558521,
        "ebitda": 929707,
        "loss": 5059510,
        "year": 2017,
        "business": 1439
    },
    {
        "id": 2876,
        "ca": 2011175,
        "margin": 616697,
        "ebitda": 9370,
        "loss": 218048,
        "year": 2016,
        "business": 1439
    },
    {
        "id": 2877,
        "ca": 1743144,
        "margin": 729583,
        "ebitda": 978075,
        "loss": 7080274,
        "year": 2017,
        "business": 1440
    },
    {
        "id": 2878,
        "ca": 3866677,
        "margin": 177613,
        "ebitda": 940170,
        "loss": 700722,
        "year": 2016,
        "business": 1440
    },
    {
        "id": 2879,
        "ca": 558480,
        "margin": 238388,
        "ebitda": 971986,
        "loss": 4304085,
        "year": 2017,
        "business": 1441
    },
    {
        "id": 2880,
        "ca": 3936613,
        "margin": 401206,
        "ebitda": 975541,
        "loss": 6920108,
        "year": 2016,
        "business": 1441
    },
    {
        "id": 2881,
        "ca": 1735954,
        "margin": 574924,
        "ebitda": 103121,
        "loss": 4073656,
        "year": 2017,
        "business": 1442
    },
    {
        "id": 2882,
        "ca": 2758509,
        "margin": 377633,
        "ebitda": 41448,
        "loss": 3022862,
        "year": 2016,
        "business": 1442
    },
    {
        "id": 2883,
        "ca": 1761211,
        "margin": 304069,
        "ebitda": 84834,
        "loss": 5676435,
        "year": 2017,
        "business": 1443
    },
    {
        "id": 2884,
        "ca": 1984146,
        "margin": 91575,
        "ebitda": 347428,
        "loss": 9622164,
        "year": 2016,
        "business": 1443
    },
    {
        "id": 2885,
        "ca": 2643273,
        "margin": -29798,
        "ebitda": 340699,
        "loss": 8373660,
        "year": 2017,
        "business": 1444
    },
    {
        "id": 2886,
        "ca": 1423040,
        "margin": 610125,
        "ebitda": 768396,
        "loss": 544295,
        "year": 2016,
        "business": 1444
    },
    {
        "id": 2887,
        "ca": 3299213,
        "margin": 709627,
        "ebitda": 264062,
        "loss": 3046361,
        "year": 2017,
        "business": 1445
    },
    {
        "id": 2888,
        "ca": 2592250,
        "margin": 421402,
        "ebitda": 956385,
        "loss": 2911830,
        "year": 2016,
        "business": 1445
    },
    {
        "id": 2889,
        "ca": 3165716,
        "margin": 172285,
        "ebitda": 757818,
        "loss": 6384375,
        "year": 2017,
        "business": 1446
    },
    {
        "id": 2890,
        "ca": 2164222,
        "margin": -35561,
        "ebitda": 576956,
        "loss": 6606107,
        "year": 2016,
        "business": 1446
    },
    {
        "id": 2891,
        "ca": 2568448,
        "margin": -107963,
        "ebitda": 231533,
        "loss": 7426081,
        "year": 2017,
        "business": 1447
    },
    {
        "id": 2892,
        "ca": 1475779,
        "margin": 712563,
        "ebitda": 797915,
        "loss": 7693019,
        "year": 2016,
        "business": 1447
    },
    {
        "id": 2893,
        "ca": 1430004,
        "margin": 540902,
        "ebitda": 545668,
        "loss": 4841050,
        "year": 2017,
        "business": 1448
    },
    {
        "id": 2894,
        "ca": 1799190,
        "margin": 159426,
        "ebitda": 240493,
        "loss": 8388552,
        "year": 2016,
        "business": 1448
    },
    {
        "id": 2895,
        "ca": 3832122,
        "margin": 990622,
        "ebitda": 83076,
        "loss": 9566831,
        "year": 2017,
        "business": 1449
    },
    {
        "id": 2896,
        "ca": 1340863,
        "margin": 729015,
        "ebitda": 702524,
        "loss": 9452543,
        "year": 2016,
        "business": 1449
    },
    {
        "id": 2897,
        "ca": 3086356,
        "margin": 286645,
        "ebitda": 664128,
        "loss": 7357791,
        "year": 2017,
        "business": 1450
    },
    {
        "id": 2898,
        "ca": 896683,
        "margin": -75904,
        "ebitda": 83236,
        "loss": 9403115,
        "year": 2016,
        "business": 1450
    },
    {
        "id": 2899,
        "ca": 1864832,
        "margin": 979099,
        "ebitda": 94814,
        "loss": 393823,
        "year": 2017,
        "business": 1451
    },
    {
        "id": 2900,
        "ca": 3003763,
        "margin": 802759,
        "ebitda": 114823,
        "loss": 1811169,
        "year": 2016,
        "business": 1451
    },
    {
        "id": 2901,
        "ca": 2813307,
        "margin": 260988,
        "ebitda": 312849,
        "loss": 8685092,
        "year": 2017,
        "business": 1452
    },
    {
        "id": 2902,
        "ca": 983588,
        "margin": 569805,
        "ebitda": 243499,
        "loss": 1988781,
        "year": 2016,
        "business": 1452
    },
    {
        "id": 2903,
        "ca": 1059086,
        "margin": 726540,
        "ebitda": 555656,
        "loss": 9370789,
        "year": 2017,
        "business": 1453
    },
    {
        "id": 2904,
        "ca": 2699069,
        "margin": 408401,
        "ebitda": 133834,
        "loss": 7171094,
        "year": 2016,
        "business": 1453
    },
    {
        "id": 2905,
        "ca": 2805564,
        "margin": -74978,
        "ebitda": 636458,
        "loss": 3732852,
        "year": 2017,
        "business": 1454
    },
    {
        "id": 2906,
        "ca": 320099,
        "margin": 622018,
        "ebitda": 340595,
        "loss": 6852352,
        "year": 2016,
        "business": 1454
    },
    {
        "id": 2907,
        "ca": 3677227,
        "margin": 70725,
        "ebitda": 502277,
        "loss": 5969492,
        "year": 2017,
        "business": 1455
    },
    {
        "id": 2908,
        "ca": 3421899,
        "margin": 840494,
        "ebitda": 393761,
        "loss": 9866139,
        "year": 2016,
        "business": 1455
    },
    {
        "id": 2909,
        "ca": 1120485,
        "margin": 543583,
        "ebitda": 955755,
        "loss": 8280534,
        "year": 2017,
        "business": 1456
    },
    {
        "id": 2910,
        "ca": 318012,
        "margin": 669498,
        "ebitda": 139045,
        "loss": 3466042,
        "year": 2016,
        "business": 1456
    },
    {
        "id": 2911,
        "ca": 773015,
        "margin": 318896,
        "ebitda": 168539,
        "loss": 1650166,
        "year": 2017,
        "business": 1457
    },
    {
        "id": 2912,
        "ca": 3084411,
        "margin": 566649,
        "ebitda": 870175,
        "loss": 6696072,
        "year": 2016,
        "business": 1457
    },
    {
        "id": 2913,
        "ca": 1229260,
        "margin": 876715,
        "ebitda": 402751,
        "loss": 9692064,
        "year": 2017,
        "business": 1458
    },
    {
        "id": 2914,
        "ca": 1850444,
        "margin": 826875,
        "ebitda": 195436,
        "loss": 9929812,
        "year": 2016,
        "business": 1458
    },
    {
        "id": 2915,
        "ca": 3537898,
        "margin": 322510,
        "ebitda": 714186,
        "loss": 5612606,
        "year": 2017,
        "business": 1459
    },
    {
        "id": 2916,
        "ca": 2275617,
        "margin": 365658,
        "ebitda": 15200,
        "loss": 6011480,
        "year": 2016,
        "business": 1459
    },
    {
        "id": 2917,
        "ca": 988115,
        "margin": 670118,
        "ebitda": 259837,
        "loss": 8708467,
        "year": 2017,
        "business": 1460
    },
    {
        "id": 2918,
        "ca": 3478598,
        "margin": 108184,
        "ebitda": 684974,
        "loss": 212414,
        "year": 2016,
        "business": 1460
    },
    {
        "id": 2919,
        "ca": 247767,
        "margin": 306228,
        "ebitda": 935869,
        "loss": 545239,
        "year": 2017,
        "business": 1461
    },
    {
        "id": 2920,
        "ca": 2363023,
        "margin": -138419,
        "ebitda": 687807,
        "loss": 1530817,
        "year": 2016,
        "business": 1461
    },
    {
        "id": 2921,
        "ca": 1973033,
        "margin": 699356,
        "ebitda": 1035,
        "loss": 4978977,
        "year": 2017,
        "business": 1462
    },
    {
        "id": 2922,
        "ca": 2131056,
        "margin": -161204,
        "ebitda": 877471,
        "loss": 5818986,
        "year": 2016,
        "business": 1462
    },
    {
        "id": 2923,
        "ca": 458550,
        "margin": 55359,
        "ebitda": 930583,
        "loss": 875340,
        "year": 2017,
        "business": 1463
    },
    {
        "id": 2924,
        "ca": 2945215,
        "margin": 370600,
        "ebitda": 116737,
        "loss": 7124628,
        "year": 2016,
        "business": 1463
    },
    {
        "id": 2925,
        "ca": 2606784,
        "margin": 316988,
        "ebitda": 165773,
        "loss": 9560526,
        "year": 2017,
        "business": 1464
    },
    {
        "id": 2926,
        "ca": 3944452,
        "margin": -91526,
        "ebitda": 625578,
        "loss": 4850207,
        "year": 2016,
        "business": 1464
    },
    {
        "id": 2927,
        "ca": 2424162,
        "margin": 347987,
        "ebitda": 457653,
        "loss": 9899539,
        "year": 2017,
        "business": 1465
    },
    {
        "id": 2928,
        "ca": 971031,
        "margin": 544796,
        "ebitda": 484799,
        "loss": 8584826,
        "year": 2016,
        "business": 1465
    },
    {
        "id": 2929,
        "ca": 3008526,
        "margin": 199036,
        "ebitda": 637670,
        "loss": 1592478,
        "year": 2017,
        "business": 1466
    },
    {
        "id": 2930,
        "ca": 3478351,
        "margin": -116528,
        "ebitda": 131151,
        "loss": 618158,
        "year": 2016,
        "business": 1466
    },
    {
        "id": 2931,
        "ca": 834888,
        "margin": 280921,
        "ebitda": 138727,
        "loss": 1304092,
        "year": 2017,
        "business": 1467
    },
    {
        "id": 2932,
        "ca": 505444,
        "margin": 641477,
        "ebitda": 282113,
        "loss": 4468581,
        "year": 2016,
        "business": 1467
    },
    {
        "id": 2933,
        "ca": 644905,
        "margin": 707606,
        "ebitda": 372426,
        "loss": 4740379,
        "year": 2017,
        "business": 1468
    },
    {
        "id": 2934,
        "ca": 533279,
        "margin": 477171,
        "ebitda": 572980,
        "loss": 286632,
        "year": 2016,
        "business": 1468
    },
    {
        "id": 2935,
        "ca": 2487709,
        "margin": 136545,
        "ebitda": 418716,
        "loss": 8899193,
        "year": 2017,
        "business": 1469
    },
    {
        "id": 2936,
        "ca": 524472,
        "margin": 300617,
        "ebitda": 519336,
        "loss": 6279750,
        "year": 2016,
        "business": 1469
    },
    {
        "id": 2937,
        "ca": 990976,
        "margin": 740840,
        "ebitda": 799119,
        "loss": 4435259,
        "year": 2017,
        "business": 1470
    },
    {
        "id": 2938,
        "ca": 2611344,
        "margin": 189230,
        "ebitda": 513401,
        "loss": 8293995,
        "year": 2016,
        "business": 1470
    },
    {
        "id": 2939,
        "ca": 701514,
        "margin": 509708,
        "ebitda": 244264,
        "loss": 8960265,
        "year": 2017,
        "business": 1471
    },
    {
        "id": 2940,
        "ca": 1653285,
        "margin": 930816,
        "ebitda": 85988,
        "loss": 6446751,
        "year": 2016,
        "business": 1471
    },
    {
        "id": 2941,
        "ca": 949622,
        "margin": -133320,
        "ebitda": 779425,
        "loss": 8783185,
        "year": 2017,
        "business": 1472
    },
    {
        "id": 2942,
        "ca": 2294969,
        "margin": 96891,
        "ebitda": 664641,
        "loss": 1202828,
        "year": 2016,
        "business": 1472
    },
    {
        "id": 2943,
        "ca": 2438988,
        "margin": 7002,
        "ebitda": 437538,
        "loss": 1572090,
        "year": 2017,
        "business": 1473
    },
    {
        "id": 2944,
        "ca": 2609849,
        "margin": 383242,
        "ebitda": 947591,
        "loss": 8049549,
        "year": 2016,
        "business": 1473
    },
    {
        "id": 2945,
        "ca": 2577452,
        "margin": 956503,
        "ebitda": 792855,
        "loss": 7448164,
        "year": 2017,
        "business": 1474
    },
    {
        "id": 2946,
        "ca": 162451,
        "margin": 906310,
        "ebitda": 549134,
        "loss": 6527603,
        "year": 2016,
        "business": 1474
    },
    {
        "id": 2947,
        "ca": 1805880,
        "margin": 486850,
        "ebitda": 621705,
        "loss": 1158819,
        "year": 2017,
        "business": 1475
    },
    {
        "id": 2948,
        "ca": 2736439,
        "margin": 210967,
        "ebitda": 688271,
        "loss": 6528806,
        "year": 2016,
        "business": 1475
    },
    {
        "id": 2949,
        "ca": 243270,
        "margin": 5598,
        "ebitda": 589401,
        "loss": 5013851,
        "year": 2017,
        "business": 1476
    },
    {
        "id": 2950,
        "ca": 3454439,
        "margin": 821135,
        "ebitda": 66826,
        "loss": 4242001,
        "year": 2016,
        "business": 1476
    },
    {
        "id": 2951,
        "ca": 1378778,
        "margin": -114498,
        "ebitda": 618264,
        "loss": 448975,
        "year": 2017,
        "business": 1477
    },
    {
        "id": 2952,
        "ca": 2889480,
        "margin": -57018,
        "ebitda": 755689,
        "loss": 4693159,
        "year": 2016,
        "business": 1477
    },
    {
        "id": 2953,
        "ca": 1092961,
        "margin": 288432,
        "ebitda": 268858,
        "loss": 5084356,
        "year": 2017,
        "business": 1478
    },
    {
        "id": 2954,
        "ca": 754332,
        "margin": 554025,
        "ebitda": 659972,
        "loss": 7709920,
        "year": 2016,
        "business": 1478
    },
    {
        "id": 2955,
        "ca": 413212,
        "margin": 489303,
        "ebitda": 979943,
        "loss": 1874040,
        "year": 2017,
        "business": 1479
    },
    {
        "id": 2956,
        "ca": 2934989,
        "margin": 993051,
        "ebitda": 749920,
        "loss": 1260905,
        "year": 2016,
        "business": 1479
    },
    {
        "id": 2957,
        "ca": 3585629,
        "margin": -79058,
        "ebitda": 628608,
        "loss": 8524299,
        "year": 2017,
        "business": 1480
    },
    {
        "id": 2958,
        "ca": 1167740,
        "margin": -179498,
        "ebitda": 968075,
        "loss": 9469489,
        "year": 2016,
        "business": 1480
    },
    {
        "id": 2959,
        "ca": 1038072,
        "margin": 61247,
        "ebitda": 145948,
        "loss": 5945019,
        "year": 2017,
        "business": 1481
    },
    {
        "id": 2960,
        "ca": 2744807,
        "margin": -178918,
        "ebitda": 940542,
        "loss": 8389243,
        "year": 2016,
        "business": 1481
    },
    {
        "id": 2961,
        "ca": 680717,
        "margin": 789260,
        "ebitda": 23168,
        "loss": 9375154,
        "year": 2017,
        "business": 1482
    },
    {
        "id": 2962,
        "ca": 3048882,
        "margin": 456127,
        "ebitda": 794015,
        "loss": 6045197,
        "year": 2016,
        "business": 1482
    },
    {
        "id": 2963,
        "ca": 2860212,
        "margin": 989637,
        "ebitda": 697267,
        "loss": 7584954,
        "year": 2017,
        "business": 1483
    },
    {
        "id": 2964,
        "ca": 1613875,
        "margin": -164275,
        "ebitda": 195362,
        "loss": 2277967,
        "year": 2016,
        "business": 1483
    },
    {
        "id": 2965,
        "ca": 3231992,
        "margin": 105075,
        "ebitda": 360254,
        "loss": 6389455,
        "year": 2017,
        "business": 1484
    },
    {
        "id": 2966,
        "ca": 1521612,
        "margin": 880685,
        "ebitda": 403557,
        "loss": 6790343,
        "year": 2016,
        "business": 1484
    },
    {
        "id": 2967,
        "ca": 2291583,
        "margin": 867237,
        "ebitda": 927967,
        "loss": 3790086,
        "year": 2017,
        "business": 1485
    },
    {
        "id": 2968,
        "ca": 1049311,
        "margin": 660876,
        "ebitda": 496702,
        "loss": 9855295,
        "year": 2016,
        "business": 1485
    },
    {
        "id": 2969,
        "ca": 164397,
        "margin": 317314,
        "ebitda": 318042,
        "loss": 9140926,
        "year": 2017,
        "business": 1486
    },
    {
        "id": 2970,
        "ca": 134225,
        "margin": 592137,
        "ebitda": 573854,
        "loss": 5827994,
        "year": 2016,
        "business": 1486
    },
    {
        "id": 2971,
        "ca": 129551,
        "margin": 310074,
        "ebitda": 357978,
        "loss": 7767682,
        "year": 2017,
        "business": 1487
    },
    {
        "id": 2972,
        "ca": 3406774,
        "margin": 137550,
        "ebitda": 410300,
        "loss": 4434726,
        "year": 2016,
        "business": 1487
    },
    {
        "id": 2973,
        "ca": 1601751,
        "margin": 391023,
        "ebitda": 243915,
        "loss": 9979374,
        "year": 2017,
        "business": 1488
    },
    {
        "id": 2974,
        "ca": 3545802,
        "margin": 192428,
        "ebitda": 485930,
        "loss": 419572,
        "year": 2016,
        "business": 1488
    },
    {
        "id": 2975,
        "ca": 2349466,
        "margin": 219941,
        "ebitda": 5570,
        "loss": 8680644,
        "year": 2017,
        "business": 1489
    },
    {
        "id": 2976,
        "ca": 1706775,
        "margin": 227646,
        "ebitda": 362797,
        "loss": 9504689,
        "year": 2016,
        "business": 1489
    },
    {
        "id": 2977,
        "ca": 396663,
        "margin": 127945,
        "ebitda": 301058,
        "loss": 2394148,
        "year": 2017,
        "business": 1490
    },
    {
        "id": 2978,
        "ca": 3033560,
        "margin": -142850,
        "ebitda": 216886,
        "loss": 5784011,
        "year": 2016,
        "business": 1490
    },
    {
        "id": 2979,
        "ca": 2661841,
        "margin": -87902,
        "ebitda": 485005,
        "loss": 2095804,
        "year": 2017,
        "business": 1491
    },
    {
        "id": 2980,
        "ca": 2253265,
        "margin": 162707,
        "ebitda": 233801,
        "loss": 6711968,
        "year": 2016,
        "business": 1491
    },
    {
        "id": 2981,
        "ca": 3057762,
        "margin": -139449,
        "ebitda": 327352,
        "loss": 4519431,
        "year": 2017,
        "business": 1492
    },
    {
        "id": 2982,
        "ca": 218608,
        "margin": 601761,
        "ebitda": 574866,
        "loss": 2401123,
        "year": 2016,
        "business": 1492
    },
    {
        "id": 2983,
        "ca": 347903,
        "margin": 531388,
        "ebitda": 744361,
        "loss": 7825401,
        "year": 2017,
        "business": 1493
    },
    {
        "id": 2984,
        "ca": 3706608,
        "margin": 997439,
        "ebitda": 825797,
        "loss": 5244642,
        "year": 2016,
        "business": 1493
    },
    {
        "id": 2985,
        "ca": 2840710,
        "margin": 545508,
        "ebitda": 869151,
        "loss": 3200310,
        "year": 2017,
        "business": 1494
    },
    {
        "id": 2986,
        "ca": 2972322,
        "margin": -8489,
        "ebitda": 523351,
        "loss": 4233835,
        "year": 2016,
        "business": 1494
    },
    {
        "id": 2987,
        "ca": 3205718,
        "margin": 931431,
        "ebitda": 745877,
        "loss": 7547419,
        "year": 2017,
        "business": 1495
    },
    {
        "id": 2988,
        "ca": 2658433,
        "margin": 244724,
        "ebitda": 68037,
        "loss": 9052789,
        "year": 2016,
        "business": 1495
    },
    {
        "id": 2989,
        "ca": 2836409,
        "margin": -52965,
        "ebitda": 642034,
        "loss": 650358,
        "year": 2017,
        "business": 1496
    },
    {
        "id": 2990,
        "ca": 1944602,
        "margin": 25293,
        "ebitda": 824874,
        "loss": 7586359,
        "year": 2016,
        "business": 1496
    },
    {
        "id": 2991,
        "ca": 2143913,
        "margin": 106171,
        "ebitda": 172306,
        "loss": 4813057,
        "year": 2017,
        "business": 1497
    },
    {
        "id": 2992,
        "ca": 726703,
        "margin": 634578,
        "ebitda": 496517,
        "loss": 3067864,
        "year": 2016,
        "business": 1497
    },
    {
        "id": 2993,
        "ca": 2813324,
        "margin": 543587,
        "ebitda": 930624,
        "loss": 6380189,
        "year": 2017,
        "business": 1498
    },
    {
        "id": 2994,
        "ca": 1949622,
        "margin": 257553,
        "ebitda": 715585,
        "loss": 1712947,
        "year": 2016,
        "business": 1498
    },
    {
        "id": 2995,
        "ca": 3141175,
        "margin": -10078,
        "ebitda": 413362,
        "loss": 2542564,
        "year": 2017,
        "business": 1499
    },
    {
        "id": 2996,
        "ca": 2159337,
        "margin": 834060,
        "ebitda": 110322,
        "loss": 9331383,
        "year": 2016,
        "business": 1499
    },
    {
        "id": 2997,
        "ca": 1812005,
        "margin": 824195,
        "ebitda": 378758,
        "loss": 805670,
        "year": 2017,
        "business": 1500
    },
    {
        "id": 2998,
        "ca": 318842,
        "margin": 975292,
        "ebitda": 116269,
        "loss": 7700266,
        "year": 2016,
        "business": 1500
    },
    {
        "id": 2999,
        "ca": 558150,
        "margin": 612452,
        "ebitda": 586018,
        "loss": 2446467,
        "year": 2017,
        "business": 1501
    },
    {
        "id": 3000,
        "ca": 1349450,
        "margin": -40151,
        "ebitda": 280930,
        "loss": 554118,
        "year": 2016,
        "business": 1501
    },
    {
        "id": 3001,
        "ca": 1792190,
        "margin": 711559,
        "ebitda": 308801,
        "loss": 5591378,
        "year": 2017,
        "business": 1502
    },
    {
        "id": 3002,
        "ca": 637105,
        "margin": 696402,
        "ebitda": 696791,
        "loss": 8243856,
        "year": 2016,
        "business": 1502
    },
    {
        "id": 3003,
        "ca": 2211699,
        "margin": 128483,
        "ebitda": 645149,
        "loss": 5320043,
        "year": 2017,
        "business": 1503
    },
    {
        "id": 3004,
        "ca": 292037,
        "margin": 11283,
        "ebitda": 596879,
        "loss": 9209073,
        "year": 2016,
        "business": 1503
    },
    {
        "id": 3005,
        "ca": 1861925,
        "margin": 664690,
        "ebitda": 647952,
        "loss": 6790717,
        "year": 2017,
        "business": 1504
    },
    {
        "id": 3006,
        "ca": 2417377,
        "margin": 308685,
        "ebitda": 250773,
        "loss": 484810,
        "year": 2016,
        "business": 1504
    },
    {
        "id": 3007,
        "ca": 406005,
        "margin": 980051,
        "ebitda": 663573,
        "loss": 6481503,
        "year": 2017,
        "business": 1505
    },
    {
        "id": 3008,
        "ca": 1862039,
        "margin": 482489,
        "ebitda": 482344,
        "loss": 1652224,
        "year": 2016,
        "business": 1505
    },
    {
        "id": 3009,
        "ca": 1467215,
        "margin": 132020,
        "ebitda": 373917,
        "loss": 3437043,
        "year": 2017,
        "business": 1506
    },
    {
        "id": 3010,
        "ca": 1135343,
        "margin": 667253,
        "ebitda": 272589,
        "loss": 6261102,
        "year": 2016,
        "business": 1506
    },
    {
        "id": 3011,
        "ca": 117798,
        "margin": 827650,
        "ebitda": 170411,
        "loss": 9201294,
        "year": 2017,
        "business": 1507
    },
    {
        "id": 3012,
        "ca": 3124464,
        "margin": 902231,
        "ebitda": 177211,
        "loss": 3794139,
        "year": 2016,
        "business": 1507
    },
    {
        "id": 3013,
        "ca": 921077,
        "margin": -137899,
        "ebitda": 903257,
        "loss": 3722070,
        "year": 2017,
        "business": 1508
    },
    {
        "id": 3014,
        "ca": 2645573,
        "margin": 540040,
        "ebitda": 123121,
        "loss": 586567,
        "year": 2016,
        "business": 1508
    },
    {
        "id": 3015,
        "ca": 948252,
        "margin": 792538,
        "ebitda": 49813,
        "loss": 3084210,
        "year": 2017,
        "business": 1509
    },
    {
        "id": 3016,
        "ca": 139390,
        "margin": 943578,
        "ebitda": 494751,
        "loss": 1596061,
        "year": 2016,
        "business": 1509
    },
    {
        "id": 3017,
        "ca": 728116,
        "margin": 994107,
        "ebitda": 921484,
        "loss": 1067054,
        "year": 2017,
        "business": 1510
    },
    {
        "id": 3018,
        "ca": 1065248,
        "margin": 659685,
        "ebitda": 6236,
        "loss": 1574284,
        "year": 2016,
        "business": 1510
    },
    {
        "id": 3019,
        "ca": 716783,
        "margin": 570860,
        "ebitda": 21987,
        "loss": 5267395,
        "year": 2017,
        "business": 1511
    },
    {
        "id": 3020,
        "ca": 316632,
        "margin": 778696,
        "ebitda": 324594,
        "loss": 7031038,
        "year": 2016,
        "business": 1511
    },
    {
        "id": 3021,
        "ca": 2771849,
        "margin": 84486,
        "ebitda": 181212,
        "loss": 3918374,
        "year": 2017,
        "business": 1512
    },
    {
        "id": 3022,
        "ca": 169000,
        "margin": 365612,
        "ebitda": 649214,
        "loss": 841923,
        "year": 2016,
        "business": 1512
    },
    {
        "id": 3023,
        "ca": 1762287,
        "margin": 102439,
        "ebitda": 722916,
        "loss": 7833440,
        "year": 2017,
        "business": 1513
    },
    {
        "id": 3024,
        "ca": 291824,
        "margin": 130148,
        "ebitda": 623417,
        "loss": 1629125,
        "year": 2016,
        "business": 1513
    },
    {
        "id": 3025,
        "ca": 1499365,
        "margin": 57080,
        "ebitda": 156356,
        "loss": 1021748,
        "year": 2017,
        "business": 1514
    },
    {
        "id": 3026,
        "ca": 524678,
        "margin": -144122,
        "ebitda": 638331,
        "loss": 6832039,
        "year": 2016,
        "business": 1514
    },
    {
        "id": 3027,
        "ca": 1305546,
        "margin": 890959,
        "ebitda": 80989,
        "loss": 2228161,
        "year": 2017,
        "business": 1515
    },
    {
        "id": 3028,
        "ca": 1695317,
        "margin": 923694,
        "ebitda": 989104,
        "loss": 1562338,
        "year": 2016,
        "business": 1515
    },
    {
        "id": 3029,
        "ca": 683018,
        "margin": 995152,
        "ebitda": 170904,
        "loss": 9628558,
        "year": 2017,
        "business": 1516
    },
    {
        "id": 3030,
        "ca": 303810,
        "margin": -156298,
        "ebitda": 336332,
        "loss": 1525082,
        "year": 2016,
        "business": 1516
    },
    {
        "id": 3031,
        "ca": 3991934,
        "margin": 731434,
        "ebitda": 671175,
        "loss": 7299376,
        "year": 2017,
        "business": 1517
    },
    {
        "id": 3032,
        "ca": 372982,
        "margin": 69283,
        "ebitda": 543797,
        "loss": 7332054,
        "year": 2016,
        "business": 1517
    },
    {
        "id": 3033,
        "ca": 963795,
        "margin": 515108,
        "ebitda": 190681,
        "loss": 3749379,
        "year": 2017,
        "business": 1518
    },
    {
        "id": 3034,
        "ca": 1416006,
        "margin": 75210,
        "ebitda": 919516,
        "loss": 7432996,
        "year": 2016,
        "business": 1518
    },
    {
        "id": 3035,
        "ca": 1752436,
        "margin": 96454,
        "ebitda": 741147,
        "loss": 3254124,
        "year": 2017,
        "business": 1519
    },
    {
        "id": 3036,
        "ca": 1708354,
        "margin": -176402,
        "ebitda": 554102,
        "loss": 7890249,
        "year": 2016,
        "business": 1519
    },
    {
        "id": 3037,
        "ca": 744318,
        "margin": 103496,
        "ebitda": 576229,
        "loss": 9905360,
        "year": 2017,
        "business": 1520
    },
    {
        "id": 3038,
        "ca": 181935,
        "margin": 122718,
        "ebitda": 354176,
        "loss": 4814304,
        "year": 2016,
        "business": 1520
    },
    {
        "id": 3039,
        "ca": 1863949,
        "margin": -65034,
        "ebitda": 61494,
        "loss": 6983568,
        "year": 2017,
        "business": 1521
    },
    {
        "id": 3040,
        "ca": 3020076,
        "margin": 670970,
        "ebitda": 412282,
        "loss": 2793160,
        "year": 2016,
        "business": 1521
    },
    {
        "id": 3041,
        "ca": 2734736,
        "margin": 982226,
        "ebitda": 481398,
        "loss": 6322916,
        "year": 2017,
        "business": 1522
    },
    {
        "id": 3042,
        "ca": 2601308,
        "margin": 333052,
        "ebitda": 93411,
        "loss": 10903,
        "year": 2016,
        "business": 1522
    },
    {
        "id": 3043,
        "ca": 2393765,
        "margin": 647370,
        "ebitda": 268473,
        "loss": 784233,
        "year": 2017,
        "business": 1523
    },
    {
        "id": 3044,
        "ca": 587756,
        "margin": 810481,
        "ebitda": 49865,
        "loss": 2802340,
        "year": 2016,
        "business": 1523
    },
    {
        "id": 3045,
        "ca": 2044393,
        "margin": 488875,
        "ebitda": 731519,
        "loss": 7027060,
        "year": 2017,
        "business": 1524
    },
    {
        "id": 3046,
        "ca": 121670,
        "margin": 182578,
        "ebitda": 393596,
        "loss": 9887138,
        "year": 2016,
        "business": 1524
    },
    {
        "id": 3047,
        "ca": 1956401,
        "margin": 260869,
        "ebitda": 465173,
        "loss": 1034672,
        "year": 2017,
        "business": 1525
    },
    {
        "id": 3048,
        "ca": 1738061,
        "margin": 489672,
        "ebitda": 503544,
        "loss": 1652359,
        "year": 2016,
        "business": 1525
    },
    {
        "id": 3049,
        "ca": 3670991,
        "margin": -20675,
        "ebitda": 170558,
        "loss": 3869471,
        "year": 2017,
        "business": 1526
    },
    {
        "id": 3050,
        "ca": 492284,
        "margin": -35764,
        "ebitda": 4319,
        "loss": 8138660,
        "year": 2016,
        "business": 1526
    },
    {
        "id": 3051,
        "ca": 3986032,
        "margin": 496147,
        "ebitda": 625529,
        "loss": 148159,
        "year": 2017,
        "business": 1527
    },
    {
        "id": 3052,
        "ca": 659094,
        "margin": -199859,
        "ebitda": 55690,
        "loss": 4600718,
        "year": 2016,
        "business": 1527
    },
    {
        "id": 3053,
        "ca": 2197523,
        "margin": 486409,
        "ebitda": 297718,
        "loss": 4127513,
        "year": 2017,
        "business": 1528
    },
    {
        "id": 3054,
        "ca": 160707,
        "margin": 797807,
        "ebitda": 823203,
        "loss": 6603381,
        "year": 2016,
        "business": 1528
    },
    {
        "id": 3055,
        "ca": 2314790,
        "margin": 342031,
        "ebitda": 172440,
        "loss": 8381127,
        "year": 2017,
        "business": 1529
    },
    {
        "id": 3056,
        "ca": 2649979,
        "margin": 62457,
        "ebitda": 985731,
        "loss": 9016091,
        "year": 2016,
        "business": 1529
    },
    {
        "id": 3057,
        "ca": 1627606,
        "margin": 182725,
        "ebitda": 872978,
        "loss": 6304396,
        "year": 2017,
        "business": 1530
    },
    {
        "id": 3058,
        "ca": 2178283,
        "margin": 555989,
        "ebitda": 504401,
        "loss": 4572515,
        "year": 2016,
        "business": 1530
    },
    {
        "id": 3059,
        "ca": 137619,
        "margin": -45047,
        "ebitda": 852472,
        "loss": 7393300,
        "year": 2017,
        "business": 1531
    },
    {
        "id": 3060,
        "ca": 2632010,
        "margin": 552487,
        "ebitda": 337354,
        "loss": 2556865,
        "year": 2016,
        "business": 1531
    },
    {
        "id": 3061,
        "ca": 2907368,
        "margin": 946694,
        "ebitda": 578208,
        "loss": 140731,
        "year": 2017,
        "business": 1532
    },
    {
        "id": 3062,
        "ca": 1531656,
        "margin": 751165,
        "ebitda": 758012,
        "loss": 8104700,
        "year": 2016,
        "business": 1532
    },
    {
        "id": 3063,
        "ca": 1601358,
        "margin": 881075,
        "ebitda": 506863,
        "loss": 934741,
        "year": 2017,
        "business": 1533
    },
    {
        "id": 3064,
        "ca": 224605,
        "margin": 323834,
        "ebitda": 150156,
        "loss": 3395853,
        "year": 2016,
        "business": 1533
    },
    {
        "id": 3065,
        "ca": 3911838,
        "margin": 749881,
        "ebitda": 767494,
        "loss": 8779814,
        "year": 2017,
        "business": 1534
    },
    {
        "id": 3066,
        "ca": 1660522,
        "margin": 982551,
        "ebitda": 372552,
        "loss": 5607303,
        "year": 2016,
        "business": 1534
    },
    {
        "id": 3067,
        "ca": 1644095,
        "margin": 817567,
        "ebitda": 393262,
        "loss": 7295120,
        "year": 2017,
        "business": 1535
    },
    {
        "id": 3068,
        "ca": 491779,
        "margin": 2072,
        "ebitda": 566710,
        "loss": 7848527,
        "year": 2016,
        "business": 1535
    },
    {
        "id": 3069,
        "ca": 2861638,
        "margin": 491834,
        "ebitda": 538314,
        "loss": 526246,
        "year": 2017,
        "business": 1536
    },
    {
        "id": 3070,
        "ca": 2301201,
        "margin": 781536,
        "ebitda": 88344,
        "loss": 2994930,
        "year": 2016,
        "business": 1536
    },
    {
        "id": 3071,
        "ca": 1662133,
        "margin": 777953,
        "ebitda": 516084,
        "loss": 2245869,
        "year": 2017,
        "business": 1537
    },
    {
        "id": 3072,
        "ca": 387641,
        "margin": 71807,
        "ebitda": 924342,
        "loss": 325979,
        "year": 2016,
        "business": 1537
    },
    {
        "id": 3073,
        "ca": 247195,
        "margin": 634605,
        "ebitda": 709363,
        "loss": 898607,
        "year": 2017,
        "business": 1538
    },
    {
        "id": 3074,
        "ca": 119852,
        "margin": 309278,
        "ebitda": 160648,
        "loss": 9281795,
        "year": 2016,
        "business": 1538
    },
    {
        "id": 3075,
        "ca": 2299664,
        "margin": -135115,
        "ebitda": 583094,
        "loss": 9239699,
        "year": 2017,
        "business": 1539
    },
    {
        "id": 3076,
        "ca": 2571699,
        "margin": 722393,
        "ebitda": 17182,
        "loss": 4032449,
        "year": 2016,
        "business": 1539
    },
    {
        "id": 3077,
        "ca": 1677911,
        "margin": 163405,
        "ebitda": 515423,
        "loss": 1864397,
        "year": 2017,
        "business": 1540
    },
    {
        "id": 3078,
        "ca": 813563,
        "margin": 511714,
        "ebitda": 593192,
        "loss": 2686986,
        "year": 2016,
        "business": 1540
    },
    {
        "id": 3079,
        "ca": 2709541,
        "margin": 229695,
        "ebitda": 663411,
        "loss": 3875286,
        "year": 2017,
        "business": 1541
    },
    {
        "id": 3080,
        "ca": 634459,
        "margin": 231805,
        "ebitda": 647374,
        "loss": 3602349,
        "year": 2016,
        "business": 1541
    },
    {
        "id": 3081,
        "ca": 1952680,
        "margin": 591527,
        "ebitda": 712950,
        "loss": 2979479,
        "year": 2017,
        "business": 1542
    },
    {
        "id": 3082,
        "ca": 3342862,
        "margin": -69963,
        "ebitda": 690253,
        "loss": 9351964,
        "year": 2016,
        "business": 1542
    },
    {
        "id": 3083,
        "ca": 1015626,
        "margin": 955117,
        "ebitda": 815940,
        "loss": 1056473,
        "year": 2017,
        "business": 1543
    },
    {
        "id": 3084,
        "ca": 2888532,
        "margin": 625093,
        "ebitda": 110974,
        "loss": 1132136,
        "year": 2016,
        "business": 1543
    },
    {
        "id": 3085,
        "ca": 354304,
        "margin": -115585,
        "ebitda": 799466,
        "loss": 1538011,
        "year": 2017,
        "business": 1544
    },
    {
        "id": 3086,
        "ca": 2563090,
        "margin": 425055,
        "ebitda": 376388,
        "loss": 8271563,
        "year": 2016,
        "business": 1544
    },
    {
        "id": 3087,
        "ca": 940447,
        "margin": 729845,
        "ebitda": 167721,
        "loss": 6157266,
        "year": 2017,
        "business": 1545
    },
    {
        "id": 3088,
        "ca": 2442788,
        "margin": -119755,
        "ebitda": 428414,
        "loss": 6513738,
        "year": 2016,
        "business": 1545
    },
    {
        "id": 3089,
        "ca": 3500490,
        "margin": 528080,
        "ebitda": 56057,
        "loss": 7875420,
        "year": 2017,
        "business": 1546
    },
    {
        "id": 3090,
        "ca": 961364,
        "margin": 333893,
        "ebitda": 169134,
        "loss": 2599452,
        "year": 2016,
        "business": 1546
    },
    {
        "id": 3091,
        "ca": 515346,
        "margin": 411358,
        "ebitda": 153381,
        "loss": 4890658,
        "year": 2017,
        "business": 1547
    },
    {
        "id": 3092,
        "ca": 1575387,
        "margin": 916113,
        "ebitda": 718372,
        "loss": 3215109,
        "year": 2016,
        "business": 1547
    },
    {
        "id": 3093,
        "ca": 1297997,
        "margin": -19875,
        "ebitda": 516170,
        "loss": 3810636,
        "year": 2017,
        "business": 1548
    },
    {
        "id": 3094,
        "ca": 1072825,
        "margin": -22201,
        "ebitda": 287048,
        "loss": 3084817,
        "year": 2016,
        "business": 1548
    },
    {
        "id": 3095,
        "ca": 2769889,
        "margin": 873496,
        "ebitda": 471427,
        "loss": 2405509,
        "year": 2017,
        "business": 1549
    },
    {
        "id": 3096,
        "ca": 2054357,
        "margin": 654017,
        "ebitda": 175194,
        "loss": 9302832,
        "year": 2016,
        "business": 1549
    },
    {
        "id": 3097,
        "ca": 810713,
        "margin": 998897,
        "ebitda": 59050,
        "loss": 7501572,
        "year": 2017,
        "business": 1550
    },
    {
        "id": 3098,
        "ca": 3772494,
        "margin": 890874,
        "ebitda": 238464,
        "loss": 8921783,
        "year": 2016,
        "business": 1550
    },
    {
        "id": 3099,
        "ca": 2081678,
        "margin": 342091,
        "ebitda": 539235,
        "loss": 1272684,
        "year": 2017,
        "business": 1551
    },
    {
        "id": 3100,
        "ca": 1785602,
        "margin": 542360,
        "ebitda": 912278,
        "loss": 7205487,
        "year": 2016,
        "business": 1551
    },
    {
        "id": 3101,
        "ca": 1592891,
        "margin": 387911,
        "ebitda": 726576,
        "loss": 1194318,
        "year": 2017,
        "business": 1552
    },
    {
        "id": 3102,
        "ca": 102581,
        "margin": 401351,
        "ebitda": 553293,
        "loss": 4489927,
        "year": 2016,
        "business": 1552
    },
    {
        "id": 3103,
        "ca": 3520649,
        "margin": 757968,
        "ebitda": 890165,
        "loss": 18410,
        "year": 2017,
        "business": 1553
    },
    {
        "id": 3104,
        "ca": 2463192,
        "margin": 42031,
        "ebitda": 57637,
        "loss": 154118,
        "year": 2016,
        "business": 1553
    },
    {
        "id": 3105,
        "ca": 2149248,
        "margin": -17422,
        "ebitda": 824444,
        "loss": 5601684,
        "year": 2017,
        "business": 1554
    },
    {
        "id": 3106,
        "ca": 349397,
        "margin": -142505,
        "ebitda": 832385,
        "loss": 1592159,
        "year": 2016,
        "business": 1554
    },
    {
        "id": 3107,
        "ca": 3663726,
        "margin": 936336,
        "ebitda": 375741,
        "loss": 2633118,
        "year": 2017,
        "business": 1555
    },
    {
        "id": 3108,
        "ca": 698462,
        "margin": 468420,
        "ebitda": 807387,
        "loss": 8606017,
        "year": 2016,
        "business": 1555
    },
    {
        "id": 3109,
        "ca": 2156650,
        "margin": 126375,
        "ebitda": 952488,
        "loss": 4270658,
        "year": 2017,
        "business": 1556
    },
    {
        "id": 3110,
        "ca": 2937650,
        "margin": 622526,
        "ebitda": 830875,
        "loss": 7180549,
        "year": 2016,
        "business": 1556
    },
    {
        "id": 3111,
        "ca": 2046135,
        "margin": -107921,
        "ebitda": 759044,
        "loss": 6674911,
        "year": 2017,
        "business": 1557
    },
    {
        "id": 3112,
        "ca": 2801306,
        "margin": -92559,
        "ebitda": 764337,
        "loss": 1757134,
        "year": 2016,
        "business": 1557
    },
    {
        "id": 3113,
        "ca": 1001954,
        "margin": 206434,
        "ebitda": 180636,
        "loss": 1453014,
        "year": 2017,
        "business": 1558
    },
    {
        "id": 3114,
        "ca": 905030,
        "margin": 309707,
        "ebitda": 518058,
        "loss": 7612630,
        "year": 2016,
        "business": 1558
    },
    {
        "id": 3115,
        "ca": 3307268,
        "margin": 888831,
        "ebitda": 76839,
        "loss": 4610952,
        "year": 2017,
        "business": 1559
    },
    {
        "id": 3116,
        "ca": 3038954,
        "margin": 697602,
        "ebitda": 275373,
        "loss": 1412711,
        "year": 2016,
        "business": 1559
    },
    {
        "id": 3117,
        "ca": 2147843,
        "margin": 546808,
        "ebitda": 86232,
        "loss": 8181141,
        "year": 2017,
        "business": 1560
    },
    {
        "id": 3118,
        "ca": 1117486,
        "margin": 372720,
        "ebitda": 291376,
        "loss": 784905,
        "year": 2016,
        "business": 1560
    },
    {
        "id": 3119,
        "ca": 850796,
        "margin": 415034,
        "ebitda": 460970,
        "loss": 8000981,
        "year": 2017,
        "business": 1561
    },
    {
        "id": 3120,
        "ca": 3359330,
        "margin": 455440,
        "ebitda": 424393,
        "loss": 5984608,
        "year": 2016,
        "business": 1561
    },
    {
        "id": 3121,
        "ca": 1545543,
        "margin": 413438,
        "ebitda": 516697,
        "loss": 3060048,
        "year": 2017,
        "business": 1562
    },
    {
        "id": 3122,
        "ca": 3451964,
        "margin": 134088,
        "ebitda": 863920,
        "loss": 8707163,
        "year": 2016,
        "business": 1562
    },
    {
        "id": 3123,
        "ca": 505389,
        "margin": 413541,
        "ebitda": 714381,
        "loss": 9036477,
        "year": 2017,
        "business": 1563
    },
    {
        "id": 3124,
        "ca": 745773,
        "margin": 661284,
        "ebitda": 890456,
        "loss": 580236,
        "year": 2016,
        "business": 1563
    },
    {
        "id": 3125,
        "ca": 3042373,
        "margin": -6607,
        "ebitda": 599324,
        "loss": 7963049,
        "year": 2017,
        "business": 1564
    },
    {
        "id": 3126,
        "ca": 493723,
        "margin": 412058,
        "ebitda": 167294,
        "loss": 7119483,
        "year": 2016,
        "business": 1564
    },
    {
        "id": 3127,
        "ca": 3291031,
        "margin": -53356,
        "ebitda": 235393,
        "loss": 6780672,
        "year": 2017,
        "business": 1565
    },
    {
        "id": 3128,
        "ca": 1805521,
        "margin": 94173,
        "ebitda": 102448,
        "loss": 8130100,
        "year": 2016,
        "business": 1565
    },
    {
        "id": 3129,
        "ca": 897317,
        "margin": -74478,
        "ebitda": 361133,
        "loss": 6733941,
        "year": 2017,
        "business": 1566
    },
    {
        "id": 3130,
        "ca": 847926,
        "margin": 760319,
        "ebitda": 243455,
        "loss": 5460772,
        "year": 2016,
        "business": 1566
    },
    {
        "id": 3131,
        "ca": 2621412,
        "margin": 650297,
        "ebitda": 637223,
        "loss": 4881188,
        "year": 2017,
        "business": 1567
    },
    {
        "id": 3132,
        "ca": 1874617,
        "margin": 724099,
        "ebitda": 199595,
        "loss": 2258152,
        "year": 2016,
        "business": 1567
    },
    {
        "id": 3133,
        "ca": 1092118,
        "margin": 924001,
        "ebitda": 77897,
        "loss": 1225356,
        "year": 2017,
        "business": 1568
    },
    {
        "id": 3134,
        "ca": 2552393,
        "margin": 456969,
        "ebitda": 54200,
        "loss": 3540777,
        "year": 2016,
        "business": 1568
    },
    {
        "id": 3135,
        "ca": 2146147,
        "margin": 887626,
        "ebitda": 810654,
        "loss": 8100203,
        "year": 2017,
        "business": 1569
    },
    {
        "id": 3136,
        "ca": 3058593,
        "margin": -5090,
        "ebitda": 882566,
        "loss": 5938506,
        "year": 2016,
        "business": 1569
    },
    {
        "id": 3137,
        "ca": 2594074,
        "margin": 401618,
        "ebitda": 643265,
        "loss": 3436833,
        "year": 2017,
        "business": 1570
    },
    {
        "id": 3138,
        "ca": 1354514,
        "margin": -121435,
        "ebitda": 678824,
        "loss": 8768795,
        "year": 2016,
        "business": 1570
    },
    {
        "id": 3139,
        "ca": 3713532,
        "margin": 670769,
        "ebitda": 510342,
        "loss": 4549825,
        "year": 2017,
        "business": 1571
    },
    {
        "id": 3140,
        "ca": 3548161,
        "margin": 676056,
        "ebitda": 354170,
        "loss": 7399262,
        "year": 2016,
        "business": 1571
    },
    {
        "id": 3141,
        "ca": 1001244,
        "margin": 107766,
        "ebitda": 784367,
        "loss": 6016637,
        "year": 2017,
        "business": 1572
    },
    {
        "id": 3142,
        "ca": 3914387,
        "margin": 403670,
        "ebitda": 837871,
        "loss": 3811031,
        "year": 2016,
        "business": 1572
    },
    {
        "id": 3143,
        "ca": 3351826,
        "margin": -180202,
        "ebitda": 196161,
        "loss": 7724549,
        "year": 2017,
        "business": 1573
    },
    {
        "id": 3144,
        "ca": 1733189,
        "margin": 682186,
        "ebitda": 594860,
        "loss": 8667576,
        "year": 2016,
        "business": 1573
    },
    {
        "id": 3145,
        "ca": 3734499,
        "margin": -10617,
        "ebitda": 957414,
        "loss": 1972985,
        "year": 2017,
        "business": 1574
    },
    {
        "id": 3146,
        "ca": 3112346,
        "margin": 603062,
        "ebitda": 891943,
        "loss": 6503519,
        "year": 2016,
        "business": 1574
    },
    {
        "id": 3147,
        "ca": 3665085,
        "margin": 807148,
        "ebitda": 710896,
        "loss": 6203929,
        "year": 2017,
        "business": 1575
    },
    {
        "id": 3148,
        "ca": 792090,
        "margin": 471611,
        "ebitda": 297968,
        "loss": 7855769,
        "year": 2016,
        "business": 1575
    },
    {
        "id": 3149,
        "ca": 555654,
        "margin": 9494,
        "ebitda": 947858,
        "loss": 9451848,
        "year": 2017,
        "business": 1576
    },
    {
        "id": 3150,
        "ca": 2728073,
        "margin": -37574,
        "ebitda": 819429,
        "loss": 3814742,
        "year": 2016,
        "business": 1576
    },
    {
        "id": 3151,
        "ca": 2263260,
        "margin": 672841,
        "ebitda": 942644,
        "loss": 6182068,
        "year": 2017,
        "business": 1577
    },
    {
        "id": 3152,
        "ca": 3580128,
        "margin": 975659,
        "ebitda": 792207,
        "loss": 5616427,
        "year": 2016,
        "business": 1577
    },
    {
        "id": 3153,
        "ca": 1409606,
        "margin": 989499,
        "ebitda": 949397,
        "loss": 7530124,
        "year": 2017,
        "business": 1578
    },
    {
        "id": 3154,
        "ca": 2575583,
        "margin": 63253,
        "ebitda": 724033,
        "loss": 8745237,
        "year": 2016,
        "business": 1578
    },
    {
        "id": 3155,
        "ca": 1084025,
        "margin": -10608,
        "ebitda": 534102,
        "loss": 2274246,
        "year": 2017,
        "business": 1579
    },
    {
        "id": 3156,
        "ca": 503223,
        "margin": 164231,
        "ebitda": 983325,
        "loss": 8923813,
        "year": 2016,
        "business": 1579
    },
    {
        "id": 3157,
        "ca": 320039,
        "margin": 47556,
        "ebitda": 469558,
        "loss": 4315903,
        "year": 2017,
        "business": 1580
    },
    {
        "id": 3158,
        "ca": 2476550,
        "margin": 769282,
        "ebitda": 87513,
        "loss": 4516955,
        "year": 2016,
        "business": 1580
    },
    {
        "id": 3159,
        "ca": 3460976,
        "margin": 638156,
        "ebitda": 656856,
        "loss": 1143291,
        "year": 2017,
        "business": 1581
    },
    {
        "id": 3160,
        "ca": 2106182,
        "margin": 939784,
        "ebitda": 968226,
        "loss": 7074002,
        "year": 2016,
        "business": 1581
    },
    {
        "id": 3161,
        "ca": 592717,
        "margin": -95734,
        "ebitda": 99790,
        "loss": 9509731,
        "year": 2017,
        "business": 1582
    },
    {
        "id": 3162,
        "ca": 1775075,
        "margin": 804269,
        "ebitda": 927231,
        "loss": 4926430,
        "year": 2016,
        "business": 1582
    },
    {
        "id": 3163,
        "ca": 3687307,
        "margin": -9195,
        "ebitda": 701208,
        "loss": 1465313,
        "year": 2017,
        "business": 1583
    },
    {
        "id": 3164,
        "ca": 2511282,
        "margin": 192946,
        "ebitda": 579704,
        "loss": 2273015,
        "year": 2016,
        "business": 1583
    },
    {
        "id": 3165,
        "ca": 2992034,
        "margin": -13568,
        "ebitda": 152042,
        "loss": 5860163,
        "year": 2017,
        "business": 1584
    },
    {
        "id": 3166,
        "ca": 2500232,
        "margin": 400554,
        "ebitda": 181520,
        "loss": 7841117,
        "year": 2016,
        "business": 1584
    },
    {
        "id": 3167,
        "ca": 3583561,
        "margin": 651521,
        "ebitda": 31043,
        "loss": 1465921,
        "year": 2017,
        "business": 1585
    },
    {
        "id": 3168,
        "ca": 1562977,
        "margin": 996416,
        "ebitda": 992312,
        "loss": 1014917,
        "year": 2016,
        "business": 1585
    },
    {
        "id": 3169,
        "ca": 3781637,
        "margin": 754819,
        "ebitda": 959504,
        "loss": 4216671,
        "year": 2017,
        "business": 1586
    },
    {
        "id": 3170,
        "ca": 1089396,
        "margin": -132845,
        "ebitda": 644565,
        "loss": 9040045,
        "year": 2016,
        "business": 1586
    },
    {
        "id": 3171,
        "ca": 3396263,
        "margin": 772910,
        "ebitda": 285815,
        "loss": 6854949,
        "year": 2017,
        "business": 1587
    },
    {
        "id": 3172,
        "ca": 1323614,
        "margin": 989480,
        "ebitda": 423046,
        "loss": 4608274,
        "year": 2016,
        "business": 1587
    },
    {
        "id": 3173,
        "ca": 2427108,
        "margin": 236614,
        "ebitda": 851110,
        "loss": 1728999,
        "year": 2017,
        "business": 1588
    },
    {
        "id": 3174,
        "ca": 1442024,
        "margin": 985450,
        "ebitda": 294575,
        "loss": 2779507,
        "year": 2016,
        "business": 1588
    },
    {
        "id": 3175,
        "ca": 3992794,
        "margin": 777921,
        "ebitda": 343118,
        "loss": 1352891,
        "year": 2017,
        "business": 1589
    },
    {
        "id": 3176,
        "ca": 2497153,
        "margin": 555717,
        "ebitda": 916672,
        "loss": 3423941,
        "year": 2016,
        "business": 1589
    },
    {
        "id": 3177,
        "ca": 2044669,
        "margin": 158768,
        "ebitda": 634924,
        "loss": 7225863,
        "year": 2017,
        "business": 1590
    },
    {
        "id": 3178,
        "ca": 3401256,
        "margin": -31432,
        "ebitda": 14774,
        "loss": 6419596,
        "year": 2016,
        "business": 1590
    },
    {
        "id": 3179,
        "ca": 835183,
        "margin": -16005,
        "ebitda": 977115,
        "loss": 2501744,
        "year": 2017,
        "business": 1591
    },
    {
        "id": 3180,
        "ca": 1852269,
        "margin": 44443,
        "ebitda": 304853,
        "loss": 850699,
        "year": 2016,
        "business": 1591
    },
    {
        "id": 3181,
        "ca": 1044988,
        "margin": -96593,
        "ebitda": 592291,
        "loss": 7050179,
        "year": 2017,
        "business": 1592
    },
    {
        "id": 3182,
        "ca": 1901021,
        "margin": 4433,
        "ebitda": 898116,
        "loss": 1694655,
        "year": 2016,
        "business": 1592
    },
    {
        "id": 3183,
        "ca": 3424329,
        "margin": -102147,
        "ebitda": 157448,
        "loss": 4688627,
        "year": 2017,
        "business": 1593
    },
    {
        "id": 3184,
        "ca": 784985,
        "margin": 803705,
        "ebitda": 973910,
        "loss": 7593546,
        "year": 2016,
        "business": 1593
    },
    {
        "id": 3185,
        "ca": 2474157,
        "margin": 831100,
        "ebitda": 631108,
        "loss": 3736908,
        "year": 2017,
        "business": 1594
    },
    {
        "id": 3186,
        "ca": 2837461,
        "margin": 70669,
        "ebitda": 143835,
        "loss": 4767174,
        "year": 2016,
        "business": 1594
    },
    {
        "id": 3187,
        "ca": 1486037,
        "margin": 553135,
        "ebitda": 300570,
        "loss": 469668,
        "year": 2017,
        "business": 1595
    },
    {
        "id": 3188,
        "ca": 3761326,
        "margin": 250131,
        "ebitda": 972546,
        "loss": 2336313,
        "year": 2016,
        "business": 1595
    },
    {
        "id": 3189,
        "ca": 3080224,
        "margin": 789804,
        "ebitda": 427012,
        "loss": 656816,
        "year": 2017,
        "business": 1596
    },
    {
        "id": 3190,
        "ca": 1504070,
        "margin": -195346,
        "ebitda": 454293,
        "loss": 6842904,
        "year": 2016,
        "business": 1596
    },
    {
        "id": 3191,
        "ca": 1432397,
        "margin": 984673,
        "ebitda": 836747,
        "loss": 7661829,
        "year": 2017,
        "business": 1597
    },
    {
        "id": 3192,
        "ca": 1800250,
        "margin": 687644,
        "ebitda": 816703,
        "loss": 7937081,
        "year": 2016,
        "business": 1597
    },
    {
        "id": 3193,
        "ca": 2712034,
        "margin": 25746,
        "ebitda": 543429,
        "loss": 6840281,
        "year": 2017,
        "business": 1598
    },
    {
        "id": 3194,
        "ca": 877221,
        "margin": 383476,
        "ebitda": 501820,
        "loss": 8996959,
        "year": 2016,
        "business": 1598
    },
    {
        "id": 3195,
        "ca": 1523970,
        "margin": 332378,
        "ebitda": 511802,
        "loss": 7537373,
        "year": 2017,
        "business": 1599
    },
    {
        "id": 3196,
        "ca": 3372521,
        "margin": 157,
        "ebitda": 598399,
        "loss": 5528079,
        "year": 2016,
        "business": 1599
    },
    {
        "id": 3197,
        "ca": 2017688,
        "margin": 950320,
        "ebitda": 833365,
        "loss": 5073257,
        "year": 2017,
        "business": 1600
    },
    {
        "id": 3198,
        "ca": 2376660,
        "margin": 168615,
        "ebitda": 591110,
        "loss": 1182523,
        "year": 2016,
        "business": 1600
    },
    {
        "id": 3199,
        "ca": 3204042,
        "margin": 545569,
        "ebitda": 24969,
        "loss": 3354004,
        "year": 2017,
        "business": 1601
    },
    {
        "id": 3200,
        "ca": 2114156,
        "margin": 975323,
        "ebitda": 792082,
        "loss": 4719526,
        "year": 2016,
        "business": 1601
    },
    {
        "id": 3201,
        "ca": 137287,
        "margin": 874111,
        "ebitda": 173405,
        "loss": 8046232,
        "year": 2017,
        "business": 1602
    },
    {
        "id": 3202,
        "ca": 1919157,
        "margin": -170261,
        "ebitda": 441660,
        "loss": 7663111,
        "year": 2016,
        "business": 1602
    },
    {
        "id": 3203,
        "ca": 2399725,
        "margin": -20403,
        "ebitda": 229264,
        "loss": 9791244,
        "year": 2017,
        "business": 1603
    },
    {
        "id": 3204,
        "ca": 2708931,
        "margin": -72334,
        "ebitda": 927938,
        "loss": 1177457,
        "year": 2016,
        "business": 1603
    },
    {
        "id": 3205,
        "ca": 1484686,
        "margin": 426666,
        "ebitda": 10874,
        "loss": 8505653,
        "year": 2017,
        "business": 1604
    },
    {
        "id": 3206,
        "ca": 1247640,
        "margin": 6451,
        "ebitda": 165750,
        "loss": 966368,
        "year": 2016,
        "business": 1604
    },
    {
        "id": 3207,
        "ca": 2997754,
        "margin": 247599,
        "ebitda": 401292,
        "loss": 8556058,
        "year": 2017,
        "business": 1605
    },
    {
        "id": 3208,
        "ca": 164236,
        "margin": 64188,
        "ebitda": 985000,
        "loss": 2832578,
        "year": 2016,
        "business": 1605
    },
    {
        "id": 3209,
        "ca": 239869,
        "margin": 874329,
        "ebitda": 281132,
        "loss": 5253511,
        "year": 2017,
        "business": 1606
    },
    {
        "id": 3210,
        "ca": 1015978,
        "margin": 479174,
        "ebitda": 696275,
        "loss": 1108023,
        "year": 2016,
        "business": 1606
    },
    {
        "id": 3211,
        "ca": 3336093,
        "margin": 975047,
        "ebitda": 780263,
        "loss": 7063211,
        "year": 2017,
        "business": 1607
    },
    {
        "id": 3212,
        "ca": 3479133,
        "margin": 265874,
        "ebitda": 705526,
        "loss": 9810261,
        "year": 2016,
        "business": 1607
    },
    {
        "id": 3213,
        "ca": 2900321,
        "margin": 521320,
        "ebitda": 855041,
        "loss": 2431280,
        "year": 2017,
        "business": 1608
    },
    {
        "id": 3214,
        "ca": 3196978,
        "margin": 764801,
        "ebitda": 505565,
        "loss": 8547182,
        "year": 2016,
        "business": 1608
    },
    {
        "id": 3215,
        "ca": 3982943,
        "margin": 104963,
        "ebitda": 721810,
        "loss": 460813,
        "year": 2017,
        "business": 1609
    },
    {
        "id": 3216,
        "ca": 2858463,
        "margin": -104086,
        "ebitda": 318936,
        "loss": 7902218,
        "year": 2016,
        "business": 1609
    },
    {
        "id": 3217,
        "ca": 1935856,
        "margin": 76856,
        "ebitda": 885293,
        "loss": 8650852,
        "year": 2017,
        "business": 1610
    },
    {
        "id": 3218,
        "ca": 1035361,
        "margin": 771491,
        "ebitda": 218324,
        "loss": 3030794,
        "year": 2016,
        "business": 1610
    },
    {
        "id": 3219,
        "ca": 915725,
        "margin": 478554,
        "ebitda": 770702,
        "loss": 2758768,
        "year": 2017,
        "business": 1611
    },
    {
        "id": 3220,
        "ca": 2393465,
        "margin": 356941,
        "ebitda": 610621,
        "loss": 3203591,
        "year": 2016,
        "business": 1611
    },
    {
        "id": 3221,
        "ca": 640290,
        "margin": 283009,
        "ebitda": 714860,
        "loss": 560621,
        "year": 2017,
        "business": 1612
    },
    {
        "id": 3222,
        "ca": 1607127,
        "margin": 591871,
        "ebitda": 419242,
        "loss": 9382889,
        "year": 2016,
        "business": 1612
    },
    {
        "id": 3223,
        "ca": 3974376,
        "margin": 648828,
        "ebitda": 993576,
        "loss": 9917238,
        "year": 2017,
        "business": 1613
    },
    {
        "id": 3224,
        "ca": 3270412,
        "margin": 205236,
        "ebitda": 132050,
        "loss": 2509416,
        "year": 2016,
        "business": 1613
    },
    {
        "id": 3225,
        "ca": 477620,
        "margin": 480100,
        "ebitda": 305237,
        "loss": 4807626,
        "year": 2017,
        "business": 1614
    },
    {
        "id": 3226,
        "ca": 3359321,
        "margin": 863765,
        "ebitda": 913041,
        "loss": 1029961,
        "year": 2016,
        "business": 1614
    },
    {
        "id": 3227,
        "ca": 619350,
        "margin": 16957,
        "ebitda": 786306,
        "loss": 8920865,
        "year": 2017,
        "business": 1615
    },
    {
        "id": 3228,
        "ca": 2613586,
        "margin": 269170,
        "ebitda": 5221,
        "loss": 4514029,
        "year": 2016,
        "business": 1615
    },
    {
        "id": 3229,
        "ca": 625440,
        "margin": 924720,
        "ebitda": 871381,
        "loss": 8301413,
        "year": 2017,
        "business": 1616
    },
    {
        "id": 3230,
        "ca": 1315016,
        "margin": -193106,
        "ebitda": 769579,
        "loss": 6268844,
        "year": 2016,
        "business": 1616
    },
    {
        "id": 3231,
        "ca": 2179832,
        "margin": 181924,
        "ebitda": 986921,
        "loss": 3927310,
        "year": 2017,
        "business": 1617
    },
    {
        "id": 3232,
        "ca": 1035314,
        "margin": 469307,
        "ebitda": 82561,
        "loss": 5604284,
        "year": 2016,
        "business": 1617
    },
    {
        "id": 3233,
        "ca": 3295906,
        "margin": 883527,
        "ebitda": 609641,
        "loss": 9344965,
        "year": 2017,
        "business": 1618
    },
    {
        "id": 3234,
        "ca": 1303598,
        "margin": -36203,
        "ebitda": 258517,
        "loss": 831091,
        "year": 2016,
        "business": 1618
    },
    {
        "id": 3235,
        "ca": 2266878,
        "margin": 884794,
        "ebitda": 250568,
        "loss": 7630451,
        "year": 2017,
        "business": 1619
    },
    {
        "id": 3236,
        "ca": 1172272,
        "margin": 891261,
        "ebitda": 953450,
        "loss": 6374903,
        "year": 2016,
        "business": 1619
    },
    {
        "id": 3237,
        "ca": 1216797,
        "margin": -180899,
        "ebitda": 855934,
        "loss": 9114530,
        "year": 2017,
        "business": 1620
    },
    {
        "id": 3238,
        "ca": 1804977,
        "margin": 632041,
        "ebitda": 163029,
        "loss": 6671355,
        "year": 2016,
        "business": 1620
    },
    {
        "id": 3239,
        "ca": 536868,
        "margin": 247163,
        "ebitda": 901551,
        "loss": 1837057,
        "year": 2017,
        "business": 1621
    },
    {
        "id": 3240,
        "ca": 1548480,
        "margin": 495430,
        "ebitda": 769292,
        "loss": 8054662,
        "year": 2016,
        "business": 1621
    },
    {
        "id": 3241,
        "ca": 1895987,
        "margin": -171008,
        "ebitda": 731337,
        "loss": 1113552,
        "year": 2017,
        "business": 1622
    },
    {
        "id": 3242,
        "ca": 1655594,
        "margin": 520995,
        "ebitda": 218217,
        "loss": 8726764,
        "year": 2016,
        "business": 1622
    },
    {
        "id": 3243,
        "ca": 2514064,
        "margin": 890981,
        "ebitda": 93177,
        "loss": 5831641,
        "year": 2017,
        "business": 1623
    },
    {
        "id": 3244,
        "ca": 2057019,
        "margin": 536372,
        "ebitda": 520809,
        "loss": 6266328,
        "year": 2016,
        "business": 1623
    },
    {
        "id": 3245,
        "ca": 3034730,
        "margin": 122143,
        "ebitda": 902941,
        "loss": 4646738,
        "year": 2017,
        "business": 1624
    },
    {
        "id": 3246,
        "ca": 2635464,
        "margin": 203182,
        "ebitda": 198997,
        "loss": 9949006,
        "year": 2016,
        "business": 1624
    },
    {
        "id": 3247,
        "ca": 3692656,
        "margin": 862330,
        "ebitda": 777055,
        "loss": 2054309,
        "year": 2017,
        "business": 1625
    },
    {
        "id": 3248,
        "ca": 776140,
        "margin": 870378,
        "ebitda": 547308,
        "loss": 5664567,
        "year": 2016,
        "business": 1625
    },
    {
        "id": 3249,
        "ca": 1376955,
        "margin": 76243,
        "ebitda": 938840,
        "loss": 23596,
        "year": 2017,
        "business": 1626
    },
    {
        "id": 3250,
        "ca": 457477,
        "margin": 456831,
        "ebitda": 48029,
        "loss": 4024862,
        "year": 2016,
        "business": 1626
    },
    {
        "id": 3251,
        "ca": 1567228,
        "margin": 529196,
        "ebitda": 390372,
        "loss": 2793606,
        "year": 2017,
        "business": 1627
    },
    {
        "id": 3252,
        "ca": 2305306,
        "margin": 613690,
        "ebitda": 184232,
        "loss": 2818348,
        "year": 2016,
        "business": 1627
    },
    {
        "id": 3253,
        "ca": 305759,
        "margin": 376429,
        "ebitda": 575118,
        "loss": 4332368,
        "year": 2017,
        "business": 1628
    },
    {
        "id": 3254,
        "ca": 3891167,
        "margin": -67110,
        "ebitda": 930913,
        "loss": 4039565,
        "year": 2016,
        "business": 1628
    },
    {
        "id": 3255,
        "ca": 686629,
        "margin": 721586,
        "ebitda": 395512,
        "loss": 4784380,
        "year": 2017,
        "business": 1629
    },
    {
        "id": 3256,
        "ca": 2113964,
        "margin": 403576,
        "ebitda": 902709,
        "loss": 2682566,
        "year": 2016,
        "business": 1629
    },
    {
        "id": 3257,
        "ca": 2889570,
        "margin": 457398,
        "ebitda": 130310,
        "loss": 9730002,
        "year": 2017,
        "business": 1630
    },
    {
        "id": 3258,
        "ca": 715448,
        "margin": 674108,
        "ebitda": 521792,
        "loss": 5237581,
        "year": 2016,
        "business": 1630
    },
    {
        "id": 3259,
        "ca": 1761683,
        "margin": 534367,
        "ebitda": 896218,
        "loss": 602666,
        "year": 2017,
        "business": 1631
    },
    {
        "id": 3260,
        "ca": 3620013,
        "margin": -113779,
        "ebitda": 234281,
        "loss": 3286566,
        "year": 2016,
        "business": 1631
    },
    {
        "id": 3261,
        "ca": 1095942,
        "margin": 792803,
        "ebitda": 129622,
        "loss": 644206,
        "year": 2017,
        "business": 1632
    },
    {
        "id": 3262,
        "ca": 2725926,
        "margin": 986289,
        "ebitda": 979448,
        "loss": 9597131,
        "year": 2016,
        "business": 1632
    },
    {
        "id": 3263,
        "ca": 1867030,
        "margin": 161459,
        "ebitda": 740011,
        "loss": 4963132,
        "year": 2017,
        "business": 1633
    },
    {
        "id": 3264,
        "ca": 2432007,
        "margin": 983602,
        "ebitda": 452468,
        "loss": 9151394,
        "year": 2016,
        "business": 1633
    },
    {
        "id": 3265,
        "ca": 3426527,
        "margin": -80545,
        "ebitda": 794389,
        "loss": 3203460,
        "year": 2017,
        "business": 1634
    },
    {
        "id": 3266,
        "ca": 1168702,
        "margin": -76390,
        "ebitda": 577444,
        "loss": 6176510,
        "year": 2016,
        "business": 1634
    },
    {
        "id": 3267,
        "ca": 444217,
        "margin": -12734,
        "ebitda": 262955,
        "loss": 2341927,
        "year": 2017,
        "business": 1635
    },
    {
        "id": 3268,
        "ca": 826790,
        "margin": 270067,
        "ebitda": 921236,
        "loss": 6529618,
        "year": 2016,
        "business": 1635
    },
    {
        "id": 3269,
        "ca": 2749150,
        "margin": 573077,
        "ebitda": 559001,
        "loss": 8612262,
        "year": 2017,
        "business": 1636
    },
    {
        "id": 3270,
        "ca": 1117869,
        "margin": 946397,
        "ebitda": 156581,
        "loss": 47342,
        "year": 2016,
        "business": 1636
    },
    {
        "id": 3271,
        "ca": 2778921,
        "margin": 613744,
        "ebitda": 565928,
        "loss": 8353207,
        "year": 2017,
        "business": 1637
    },
    {
        "id": 3272,
        "ca": 158752,
        "margin": 774624,
        "ebitda": 471430,
        "loss": 2794921,
        "year": 2016,
        "business": 1637
    },
    {
        "id": 3273,
        "ca": 2931075,
        "margin": 852367,
        "ebitda": 878464,
        "loss": 6229177,
        "year": 2017,
        "business": 1638
    },
    {
        "id": 3274,
        "ca": 3089922,
        "margin": 901040,
        "ebitda": 93524,
        "loss": 6649956,
        "year": 2016,
        "business": 1638
    },
    {
        "id": 3275,
        "ca": 1891530,
        "margin": 963343,
        "ebitda": 641570,
        "loss": 9385454,
        "year": 2017,
        "business": 1639
    },
    {
        "id": 3276,
        "ca": 1253986,
        "margin": 522536,
        "ebitda": 500582,
        "loss": 2439882,
        "year": 2016,
        "business": 1639
    },
    {
        "id": 3277,
        "ca": 2000576,
        "margin": -129625,
        "ebitda": 552953,
        "loss": 9168416,
        "year": 2017,
        "business": 1640
    },
    {
        "id": 3278,
        "ca": 1077278,
        "margin": 202576,
        "ebitda": 987589,
        "loss": 2426847,
        "year": 2016,
        "business": 1640
    },
    {
        "id": 3279,
        "ca": 1782610,
        "margin": 765988,
        "ebitda": 439606,
        "loss": 9857339,
        "year": 2017,
        "business": 1641
    },
    {
        "id": 3280,
        "ca": 2066108,
        "margin": -179211,
        "ebitda": 777146,
        "loss": 1120573,
        "year": 2016,
        "business": 1641
    },
    {
        "id": 3281,
        "ca": 2078392,
        "margin": -156838,
        "ebitda": 313303,
        "loss": 5902574,
        "year": 2017,
        "business": 1642
    },
    {
        "id": 3282,
        "ca": 2200097,
        "margin": 15115,
        "ebitda": 964014,
        "loss": 8807764,
        "year": 2016,
        "business": 1642
    },
    {
        "id": 3283,
        "ca": 116902,
        "margin": 119499,
        "ebitda": 136491,
        "loss": 553579,
        "year": 2017,
        "business": 1643
    },
    {
        "id": 3284,
        "ca": 343379,
        "margin": 425675,
        "ebitda": 492176,
        "loss": 250379,
        "year": 2016,
        "business": 1643
    },
    {
        "id": 3285,
        "ca": 2822083,
        "margin": 246810,
        "ebitda": 786359,
        "loss": 3591206,
        "year": 2017,
        "business": 1644
    },
    {
        "id": 3286,
        "ca": 302132,
        "margin": 692599,
        "ebitda": 211261,
        "loss": 9260518,
        "year": 2016,
        "business": 1644
    },
    {
        "id": 3287,
        "ca": 2122751,
        "margin": 48998,
        "ebitda": 877847,
        "loss": 9723463,
        "year": 2017,
        "business": 1645
    },
    {
        "id": 3288,
        "ca": 3569532,
        "margin": 791752,
        "ebitda": 720222,
        "loss": 2840045,
        "year": 2016,
        "business": 1645
    },
    {
        "id": 3289,
        "ca": 2705979,
        "margin": 987578,
        "ebitda": 40530,
        "loss": 7053187,
        "year": 2017,
        "business": 1646
    },
    {
        "id": 3290,
        "ca": 1451148,
        "margin": 43610,
        "ebitda": 581992,
        "loss": 2555751,
        "year": 2016,
        "business": 1646
    },
    {
        "id": 3291,
        "ca": 2110712,
        "margin": 971915,
        "ebitda": 467026,
        "loss": 6002001,
        "year": 2017,
        "business": 1647
    },
    {
        "id": 3292,
        "ca": 647878,
        "margin": 805440,
        "ebitda": 581399,
        "loss": 1104725,
        "year": 2016,
        "business": 1647
    },
    {
        "id": 3293,
        "ca": 1774030,
        "margin": 45652,
        "ebitda": 520241,
        "loss": 1239200,
        "year": 2017,
        "business": 1648
    },
    {
        "id": 3294,
        "ca": 799201,
        "margin": 713888,
        "ebitda": 324966,
        "loss": 7247006,
        "year": 2016,
        "business": 1648
    },
    {
        "id": 3295,
        "ca": 491669,
        "margin": 193471,
        "ebitda": 784062,
        "loss": 7996787,
        "year": 2017,
        "business": 1649
    },
    {
        "id": 3296,
        "ca": 3847851,
        "margin": 254799,
        "ebitda": 952655,
        "loss": 9497544,
        "year": 2016,
        "business": 1649
    },
    {
        "id": 3297,
        "ca": 2045283,
        "margin": 760056,
        "ebitda": 331557,
        "loss": 4499092,
        "year": 2017,
        "business": 1650
    },
    {
        "id": 3298,
        "ca": 1657747,
        "margin": 607918,
        "ebitda": 933897,
        "loss": 6777090,
        "year": 2016,
        "business": 1650
    },
    {
        "id": 3299,
        "ca": 1812536,
        "margin": 658694,
        "ebitda": 858988,
        "loss": 8690019,
        "year": 2017,
        "business": 1651
    },
    {
        "id": 3300,
        "ca": 891284,
        "margin": 553376,
        "ebitda": 27814,
        "loss": 9592246,
        "year": 2016,
        "business": 1651
    },
    {
        "id": 3301,
        "ca": 3565446,
        "margin": 706918,
        "ebitda": 255488,
        "loss": 1011399,
        "year": 2017,
        "business": 1652
    },
    {
        "id": 3302,
        "ca": 1804506,
        "margin": 955002,
        "ebitda": 75971,
        "loss": 6869656,
        "year": 2016,
        "business": 1652
    },
    {
        "id": 3303,
        "ca": 3815960,
        "margin": 624042,
        "ebitda": 55097,
        "loss": 8291623,
        "year": 2017,
        "business": 1653
    },
    {
        "id": 3304,
        "ca": 2167196,
        "margin": -14922,
        "ebitda": 835789,
        "loss": 5801471,
        "year": 2016,
        "business": 1653
    },
    {
        "id": 3305,
        "ca": 271427,
        "margin": 903862,
        "ebitda": 680732,
        "loss": 8775365,
        "year": 2017,
        "business": 1654
    },
    {
        "id": 3306,
        "ca": 1362754,
        "margin": 513644,
        "ebitda": 909897,
        "loss": 4341121,
        "year": 2016,
        "business": 1654
    },
    {
        "id": 3307,
        "ca": 824348,
        "margin": 289820,
        "ebitda": 797638,
        "loss": 7416979,
        "year": 2017,
        "business": 1655
    },
    {
        "id": 3308,
        "ca": 1071238,
        "margin": 453975,
        "ebitda": 217808,
        "loss": 9462633,
        "year": 2016,
        "business": 1655
    },
    {
        "id": 3309,
        "ca": 1051870,
        "margin": -45417,
        "ebitda": 946692,
        "loss": 288704,
        "year": 2017,
        "business": 1656
    },
    {
        "id": 3310,
        "ca": 981079,
        "margin": 488266,
        "ebitda": 904142,
        "loss": 6660975,
        "year": 2016,
        "business": 1656
    },
    {
        "id": 3311,
        "ca": 3489399,
        "margin": -195457,
        "ebitda": 254259,
        "loss": 9352432,
        "year": 2017,
        "business": 1657
    },
    {
        "id": 3312,
        "ca": 3557391,
        "margin": -192768,
        "ebitda": 208031,
        "loss": 8131841,
        "year": 2016,
        "business": 1657
    },
    {
        "id": 3313,
        "ca": 3418642,
        "margin": 388361,
        "ebitda": 913242,
        "loss": 6009171,
        "year": 2017,
        "business": 1658
    },
    {
        "id": 3314,
        "ca": 1625584,
        "margin": 394152,
        "ebitda": 166888,
        "loss": 1521821,
        "year": 2016,
        "business": 1658
    },
    {
        "id": 3315,
        "ca": 520714,
        "margin": 683476,
        "ebitda": 409424,
        "loss": 5287,
        "year": 2017,
        "business": 1659
    },
    {
        "id": 3316,
        "ca": 3146678,
        "margin": 190789,
        "ebitda": 478775,
        "loss": 5426143,
        "year": 2016,
        "business": 1659
    },
    {
        "id": 3317,
        "ca": 2145421,
        "margin": 262440,
        "ebitda": 724480,
        "loss": 9193979,
        "year": 2017,
        "business": 1660
    },
    {
        "id": 3318,
        "ca": 1335046,
        "margin": 320930,
        "ebitda": 780987,
        "loss": 5291410,
        "year": 2016,
        "business": 1660
    },
    {
        "id": 3319,
        "ca": 2213693,
        "margin": 800859,
        "ebitda": 418545,
        "loss": 3785263,
        "year": 2017,
        "business": 1661
    },
    {
        "id": 3320,
        "ca": 2708123,
        "margin": 256537,
        "ebitda": 920890,
        "loss": 2098475,
        "year": 2016,
        "business": 1661
    },
    {
        "id": 3321,
        "ca": 1217091,
        "margin": 356935,
        "ebitda": 84095,
        "loss": 6200940,
        "year": 2017,
        "business": 1662
    },
    {
        "id": 3322,
        "ca": 542500,
        "margin": -141718,
        "ebitda": 217477,
        "loss": 9496875,
        "year": 2016,
        "business": 1662
    },
    {
        "id": 3323,
        "ca": 249464,
        "margin": 625358,
        "ebitda": 358009,
        "loss": 4890293,
        "year": 2017,
        "business": 1663
    },
    {
        "id": 3324,
        "ca": 2391467,
        "margin": 267263,
        "ebitda": 934883,
        "loss": 8997733,
        "year": 2016,
        "business": 1663
    },
    {
        "id": 3325,
        "ca": 1899854,
        "margin": 716260,
        "ebitda": 952021,
        "loss": 6305989,
        "year": 2017,
        "business": 1664
    },
    {
        "id": 3326,
        "ca": 2468009,
        "margin": 562862,
        "ebitda": 190274,
        "loss": 8393154,
        "year": 2016,
        "business": 1664
    },
    {
        "id": 3327,
        "ca": 2387975,
        "margin": -28569,
        "ebitda": 276978,
        "loss": 6329266,
        "year": 2017,
        "business": 1665
    },
    {
        "id": 3328,
        "ca": 2892345,
        "margin": 39520,
        "ebitda": 161882,
        "loss": 2003172,
        "year": 2016,
        "business": 1665
    },
    {
        "id": 3329,
        "ca": 1947614,
        "margin": 30916,
        "ebitda": 61861,
        "loss": 9342508,
        "year": 2017,
        "business": 1666
    },
    {
        "id": 3330,
        "ca": 2857577,
        "margin": -112411,
        "ebitda": 189002,
        "loss": 425063,
        "year": 2016,
        "business": 1666
    },
    {
        "id": 3331,
        "ca": 2602033,
        "margin": 421705,
        "ebitda": 955377,
        "loss": 1017879,
        "year": 2017,
        "business": 1667
    },
    {
        "id": 3332,
        "ca": 3740310,
        "margin": 680027,
        "ebitda": 859669,
        "loss": 5308700,
        "year": 2016,
        "business": 1667
    },
    {
        "id": 3333,
        "ca": 556767,
        "margin": 276559,
        "ebitda": 899170,
        "loss": 2670657,
        "year": 2017,
        "business": 1668
    },
    {
        "id": 3334,
        "ca": 2282464,
        "margin": 561608,
        "ebitda": 530918,
        "loss": 3128608,
        "year": 2016,
        "business": 1668
    },
    {
        "id": 3335,
        "ca": 2574693,
        "margin": 435706,
        "ebitda": 971165,
        "loss": 4314035,
        "year": 2017,
        "business": 1669
    },
    {
        "id": 3336,
        "ca": 1508077,
        "margin": 414157,
        "ebitda": 42918,
        "loss": 2411850,
        "year": 2016,
        "business": 1669
    },
    {
        "id": 3337,
        "ca": 3951450,
        "margin": 941882,
        "ebitda": 609063,
        "loss": 626032,
        "year": 2017,
        "business": 1670
    },
    {
        "id": 3338,
        "ca": 846612,
        "margin": -127576,
        "ebitda": 799940,
        "loss": 3504022,
        "year": 2016,
        "business": 1670
    },
    {
        "id": 3339,
        "ca": 3378755,
        "margin": 182019,
        "ebitda": 694820,
        "loss": 8126007,
        "year": 2017,
        "business": 1671
    },
    {
        "id": 3340,
        "ca": 1950430,
        "margin": 2707,
        "ebitda": 472337,
        "loss": 1674357,
        "year": 2016,
        "business": 1671
    },
    {
        "id": 3341,
        "ca": 3084959,
        "margin": -55863,
        "ebitda": 173137,
        "loss": 9126491,
        "year": 2017,
        "business": 1672
    },
    {
        "id": 3342,
        "ca": 2678146,
        "margin": 131360,
        "ebitda": 636998,
        "loss": 8741209,
        "year": 2016,
        "business": 1672
    },
    {
        "id": 3343,
        "ca": 1213701,
        "margin": 595947,
        "ebitda": 674206,
        "loss": 3629266,
        "year": 2017,
        "business": 1673
    },
    {
        "id": 3344,
        "ca": 3539781,
        "margin": 472252,
        "ebitda": 619905,
        "loss": 9300641,
        "year": 2016,
        "business": 1673
    },
    {
        "id": 3345,
        "ca": 3665704,
        "margin": 417049,
        "ebitda": 761109,
        "loss": 2410200,
        "year": 2017,
        "business": 1674
    },
    {
        "id": 3346,
        "ca": 3199923,
        "margin": 899234,
        "ebitda": 797389,
        "loss": 103051,
        "year": 2016,
        "business": 1674
    },
    {
        "id": 3347,
        "ca": 3128780,
        "margin": -195784,
        "ebitda": 220255,
        "loss": 3941667,
        "year": 2017,
        "business": 1675
    },
    {
        "id": 3348,
        "ca": 172723,
        "margin": 546093,
        "ebitda": 437537,
        "loss": 9722189,
        "year": 2016,
        "business": 1675
    },
    {
        "id": 3349,
        "ca": 2564210,
        "margin": -162022,
        "ebitda": 844304,
        "loss": 3128080,
        "year": 2017,
        "business": 1676
    },
    {
        "id": 3350,
        "ca": 141929,
        "margin": 66666,
        "ebitda": 857737,
        "loss": 6584661,
        "year": 2016,
        "business": 1676
    },
    {
        "id": 3351,
        "ca": 145627,
        "margin": 977709,
        "ebitda": 819863,
        "loss": 1890897,
        "year": 2017,
        "business": 1677
    },
    {
        "id": 3352,
        "ca": 2132221,
        "margin": -184112,
        "ebitda": 668908,
        "loss": 3286619,
        "year": 2016,
        "business": 1677
    },
    {
        "id": 3353,
        "ca": 1939907,
        "margin": 632239,
        "ebitda": 84912,
        "loss": 2063185,
        "year": 2017,
        "business": 1678
    },
    {
        "id": 3354,
        "ca": 3183339,
        "margin": -182832,
        "ebitda": 700833,
        "loss": 9382524,
        "year": 2016,
        "business": 1678
    },
    {
        "id": 3355,
        "ca": 2067753,
        "margin": 611730,
        "ebitda": 758705,
        "loss": 8701013,
        "year": 2017,
        "business": 1679
    },
    {
        "id": 3356,
        "ca": 2134574,
        "margin": 9058,
        "ebitda": 659567,
        "loss": 7416137,
        "year": 2016,
        "business": 1679
    },
    {
        "id": 3357,
        "ca": 1996929,
        "margin": 688230,
        "ebitda": 102400,
        "loss": 1469706,
        "year": 2017,
        "business": 1680
    },
    {
        "id": 3358,
        "ca": 3193644,
        "margin": 669089,
        "ebitda": 469462,
        "loss": 555135,
        "year": 2016,
        "business": 1680
    },
    {
        "id": 3359,
        "ca": 1732659,
        "margin": 627959,
        "ebitda": 453300,
        "loss": 2833385,
        "year": 2017,
        "business": 1681
    },
    {
        "id": 3360,
        "ca": 3657664,
        "margin": -132138,
        "ebitda": 754982,
        "loss": 4103650,
        "year": 2016,
        "business": 1681
    },
    {
        "id": 3361,
        "ca": 1300741,
        "margin": 114780,
        "ebitda": 469958,
        "loss": 9983325,
        "year": 2017,
        "business": 1682
    },
    {
        "id": 3362,
        "ca": 173360,
        "margin": 455208,
        "ebitda": 985031,
        "loss": 8516452,
        "year": 2016,
        "business": 1682
    },
    {
        "id": 3363,
        "ca": 2987621,
        "margin": 8435,
        "ebitda": 967755,
        "loss": 8389939,
        "year": 2017,
        "business": 1683
    },
    {
        "id": 3364,
        "ca": 3776244,
        "margin": 45903,
        "ebitda": 157644,
        "loss": 5735049,
        "year": 2016,
        "business": 1683
    },
    {
        "id": 3365,
        "ca": 2482790,
        "margin": -106102,
        "ebitda": 588937,
        "loss": 3026348,
        "year": 2017,
        "business": 1684
    },
    {
        "id": 3366,
        "ca": 198914,
        "margin": 56253,
        "ebitda": 789512,
        "loss": 5309987,
        "year": 2016,
        "business": 1684
    },
    {
        "id": 3367,
        "ca": 3530593,
        "margin": 984317,
        "ebitda": 833812,
        "loss": 1577800,
        "year": 2017,
        "business": 1685
    },
    {
        "id": 3368,
        "ca": 1458402,
        "margin": 211974,
        "ebitda": 369753,
        "loss": 6614691,
        "year": 2016,
        "business": 1685
    },
    {
        "id": 3369,
        "ca": 415239,
        "margin": 459494,
        "ebitda": 410853,
        "loss": 3093292,
        "year": 2017,
        "business": 1686
    },
    {
        "id": 3370,
        "ca": 2909952,
        "margin": 932249,
        "ebitda": 846620,
        "loss": 7474107,
        "year": 2016,
        "business": 1686
    },
    {
        "id": 3371,
        "ca": 1400286,
        "margin": 502769,
        "ebitda": 934724,
        "loss": 3873411,
        "year": 2017,
        "business": 1687
    },
    {
        "id": 3372,
        "ca": 306244,
        "margin": 327212,
        "ebitda": 49393,
        "loss": 893915,
        "year": 2016,
        "business": 1687
    },
    {
        "id": 3373,
        "ca": 1448531,
        "margin": 495427,
        "ebitda": 66071,
        "loss": 2408598,
        "year": 2017,
        "business": 1688
    },
    {
        "id": 3374,
        "ca": 473851,
        "margin": 696353,
        "ebitda": 942510,
        "loss": 7141753,
        "year": 2016,
        "business": 1688
    },
    {
        "id": 3375,
        "ca": 1261515,
        "margin": 195198,
        "ebitda": 833581,
        "loss": 4255693,
        "year": 2017,
        "business": 1689
    },
    {
        "id": 3376,
        "ca": 2525875,
        "margin": 23987,
        "ebitda": 801527,
        "loss": 2167423,
        "year": 2016,
        "business": 1689
    },
    {
        "id": 3377,
        "ca": 957823,
        "margin": 827332,
        "ebitda": 853525,
        "loss": 5408822,
        "year": 2017,
        "business": 1690
    },
    {
        "id": 3378,
        "ca": 1033847,
        "margin": 251559,
        "ebitda": 586823,
        "loss": 3651196,
        "year": 2016,
        "business": 1690
    },
    {
        "id": 3379,
        "ca": 2982398,
        "margin": 970544,
        "ebitda": 656300,
        "loss": 1354234,
        "year": 2017,
        "business": 1691
    },
    {
        "id": 3380,
        "ca": 3366275,
        "margin": 343706,
        "ebitda": 855105,
        "loss": 2411145,
        "year": 2016,
        "business": 1691
    },
    {
        "id": 3381,
        "ca": 2239982,
        "margin": 416908,
        "ebitda": 936365,
        "loss": 1638346,
        "year": 2017,
        "business": 1692
    },
    {
        "id": 3382,
        "ca": 1057736,
        "margin": 645448,
        "ebitda": 506934,
        "loss": 1708068,
        "year": 2016,
        "business": 1692
    },
    {
        "id": 3383,
        "ca": 3230275,
        "margin": -182814,
        "ebitda": 178237,
        "loss": 1247008,
        "year": 2017,
        "business": 1693
    },
    {
        "id": 3384,
        "ca": 3761227,
        "margin": 631048,
        "ebitda": 182899,
        "loss": 4080254,
        "year": 2016,
        "business": 1693
    },
    {
        "id": 3385,
        "ca": 2076352,
        "margin": 5758,
        "ebitda": 876240,
        "loss": 1994590,
        "year": 2017,
        "business": 1694
    },
    {
        "id": 3386,
        "ca": 587703,
        "margin": 518934,
        "ebitda": 762377,
        "loss": 4673502,
        "year": 2016,
        "business": 1694
    },
    {
        "id": 3387,
        "ca": 1573986,
        "margin": -71095,
        "ebitda": 325479,
        "loss": 7573572,
        "year": 2017,
        "business": 1695
    },
    {
        "id": 3388,
        "ca": 411645,
        "margin": -124016,
        "ebitda": 337053,
        "loss": 5044612,
        "year": 2016,
        "business": 1695
    },
    {
        "id": 3389,
        "ca": 2244266,
        "margin": 281833,
        "ebitda": 737732,
        "loss": 1345587,
        "year": 2017,
        "business": 1696
    },
    {
        "id": 3390,
        "ca": 623195,
        "margin": 990983,
        "ebitda": 75200,
        "loss": 4735918,
        "year": 2016,
        "business": 1696
    },
    {
        "id": 3391,
        "ca": 1958634,
        "margin": -162323,
        "ebitda": 488598,
        "loss": 3086683,
        "year": 2017,
        "business": 1697
    },
    {
        "id": 3392,
        "ca": 2044236,
        "margin": 71367,
        "ebitda": 862681,
        "loss": 4022199,
        "year": 2016,
        "business": 1697
    },
    {
        "id": 3393,
        "ca": 3536953,
        "margin": -24702,
        "ebitda": 116782,
        "loss": 6249622,
        "year": 2017,
        "business": 1698
    },
    {
        "id": 3394,
        "ca": 1894303,
        "margin": 511783,
        "ebitda": 661627,
        "loss": 4782966,
        "year": 2016,
        "business": 1698
    },
    {
        "id": 3395,
        "ca": 590811,
        "margin": 796987,
        "ebitda": 93758,
        "loss": 3846030,
        "year": 2017,
        "business": 1699
    },
    {
        "id": 3396,
        "ca": 899386,
        "margin": -136915,
        "ebitda": 789035,
        "loss": 1247074,
        "year": 2016,
        "business": 1699
    },
    {
        "id": 3397,
        "ca": 3865305,
        "margin": 773627,
        "ebitda": 363203,
        "loss": 6760399,
        "year": 2017,
        "business": 1700
    },
    {
        "id": 3398,
        "ca": 538201,
        "margin": 426069,
        "ebitda": 120106,
        "loss": 9905909,
        "year": 2016,
        "business": 1700
    },
    {
        "id": 3399,
        "ca": 3773190,
        "margin": 92485,
        "ebitda": 708401,
        "loss": 3412388,
        "year": 2017,
        "business": 1701
    },
    {
        "id": 3400,
        "ca": 3953974,
        "margin": 584265,
        "ebitda": 251195,
        "loss": 3720300,
        "year": 2016,
        "business": 1701
    },
    {
        "id": 3401,
        "ca": 499908,
        "margin": -75470,
        "ebitda": 645719,
        "loss": 7212760,
        "year": 2017,
        "business": 1702
    },
    {
        "id": 3402,
        "ca": 139928,
        "margin": 527778,
        "ebitda": 930619,
        "loss": 5125131,
        "year": 2016,
        "business": 1702
    },
    {
        "id": 3403,
        "ca": 2108263,
        "margin": -106559,
        "ebitda": 582832,
        "loss": 659413,
        "year": 2017,
        "business": 1703
    },
    {
        "id": 3404,
        "ca": 2421561,
        "margin": 247123,
        "ebitda": 367056,
        "loss": 3297384,
        "year": 2016,
        "business": 1703
    },
    {
        "id": 3405,
        "ca": 450519,
        "margin": 578057,
        "ebitda": 949142,
        "loss": 8534231,
        "year": 2017,
        "business": 1704
    },
    {
        "id": 3406,
        "ca": 2462224,
        "margin": 601369,
        "ebitda": 527998,
        "loss": 3280663,
        "year": 2016,
        "business": 1704
    },
    {
        "id": 3407,
        "ca": 2340353,
        "margin": 903006,
        "ebitda": 272852,
        "loss": 2829703,
        "year": 2017,
        "business": 1705
    },
    {
        "id": 3408,
        "ca": 3950356,
        "margin": -111361,
        "ebitda": 365890,
        "loss": 3624465,
        "year": 2016,
        "business": 1705
    },
    {
        "id": 3409,
        "ca": 839357,
        "margin": 183743,
        "ebitda": 991312,
        "loss": 7664698,
        "year": 2017,
        "business": 1706
    },
    {
        "id": 3410,
        "ca": 2119253,
        "margin": -138010,
        "ebitda": 567152,
        "loss": 7641831,
        "year": 2016,
        "business": 1706
    },
    {
        "id": 3411,
        "ca": 2669128,
        "margin": 355503,
        "ebitda": 231351,
        "loss": 7296630,
        "year": 2017,
        "business": 1707
    },
    {
        "id": 3412,
        "ca": 1915615,
        "margin": 699215,
        "ebitda": 971148,
        "loss": 1503763,
        "year": 2016,
        "business": 1707
    },
    {
        "id": 3413,
        "ca": 1853574,
        "margin": 550489,
        "ebitda": 958157,
        "loss": 1170559,
        "year": 2017,
        "business": 1708
    },
    {
        "id": 3414,
        "ca": 2419264,
        "margin": 885175,
        "ebitda": 511743,
        "loss": 7259874,
        "year": 2016,
        "business": 1708
    },
    {
        "id": 3415,
        "ca": 949546,
        "margin": -197494,
        "ebitda": 583665,
        "loss": 8574723,
        "year": 2017,
        "business": 1709
    },
    {
        "id": 3416,
        "ca": 961223,
        "margin": 168497,
        "ebitda": 797972,
        "loss": 5405779,
        "year": 2016,
        "business": 1709
    },
    {
        "id": 3417,
        "ca": 3792278,
        "margin": 408730,
        "ebitda": 845103,
        "loss": 195888,
        "year": 2017,
        "business": 1710
    },
    {
        "id": 3418,
        "ca": 2942957,
        "margin": 107573,
        "ebitda": 934658,
        "loss": 710407,
        "year": 2016,
        "business": 1710
    },
    {
        "id": 3419,
        "ca": 3847672,
        "margin": 712628,
        "ebitda": 311683,
        "loss": 4197699,
        "year": 2017,
        "business": 1711
    },
    {
        "id": 3420,
        "ca": 2143480,
        "margin": -77084,
        "ebitda": 561928,
        "loss": 6765694,
        "year": 2016,
        "business": 1711
    },
    {
        "id": 3421,
        "ca": 650289,
        "margin": 233381,
        "ebitda": 959770,
        "loss": 5680529,
        "year": 2017,
        "business": 1712
    },
    {
        "id": 3422,
        "ca": 3268670,
        "margin": 490544,
        "ebitda": 260423,
        "loss": 3648331,
        "year": 2016,
        "business": 1712
    },
    {
        "id": 3423,
        "ca": 2997994,
        "margin": 893955,
        "ebitda": 52730,
        "loss": 4367326,
        "year": 2017,
        "business": 1713
    },
    {
        "id": 3424,
        "ca": 3888634,
        "margin": -24325,
        "ebitda": 55399,
        "loss": 4278209,
        "year": 2016,
        "business": 1713
    },
    {
        "id": 3425,
        "ca": 2016186,
        "margin": 719933,
        "ebitda": 738868,
        "loss": 7813379,
        "year": 2017,
        "business": 1714
    },
    {
        "id": 3426,
        "ca": 3991176,
        "margin": 109903,
        "ebitda": 601537,
        "loss": 345255,
        "year": 2016,
        "business": 1714
    },
    {
        "id": 3427,
        "ca": 3105832,
        "margin": -46976,
        "ebitda": 647928,
        "loss": 5982055,
        "year": 2017,
        "business": 1715
    },
    {
        "id": 3428,
        "ca": 1001290,
        "margin": 497420,
        "ebitda": 463817,
        "loss": 28781,
        "year": 2016,
        "business": 1715
    },
    {
        "id": 3429,
        "ca": 1321675,
        "margin": 657903,
        "ebitda": 708150,
        "loss": 6162828,
        "year": 2017,
        "business": 1716
    },
    {
        "id": 3430,
        "ca": 666836,
        "margin": 677049,
        "ebitda": 151241,
        "loss": 9674786,
        "year": 2016,
        "business": 1716
    },
    {
        "id": 3431,
        "ca": 218698,
        "margin": 677046,
        "ebitda": 859227,
        "loss": 6352273,
        "year": 2017,
        "business": 1717
    },
    {
        "id": 3432,
        "ca": 1901092,
        "margin": 226541,
        "ebitda": 570787,
        "loss": 9609645,
        "year": 2016,
        "business": 1717
    },
    {
        "id": 3433,
        "ca": 222860,
        "margin": 507559,
        "ebitda": 722870,
        "loss": 5017261,
        "year": 2017,
        "business": 1718
    },
    {
        "id": 3434,
        "ca": 1224998,
        "margin": 218227,
        "ebitda": 229135,
        "loss": 3432928,
        "year": 2016,
        "business": 1718
    },
    {
        "id": 3435,
        "ca": 3665215,
        "margin": -40566,
        "ebitda": 481286,
        "loss": 2991373,
        "year": 2017,
        "business": 1719
    },
    {
        "id": 3436,
        "ca": 1080895,
        "margin": 556699,
        "ebitda": 841548,
        "loss": 5049808,
        "year": 2016,
        "business": 1719
    },
    {
        "id": 3437,
        "ca": 1132420,
        "margin": 449992,
        "ebitda": 375107,
        "loss": 8856657,
        "year": 2017,
        "business": 1720
    },
    {
        "id": 3438,
        "ca": 139110,
        "margin": 744521,
        "ebitda": 704564,
        "loss": 3554197,
        "year": 2016,
        "business": 1720
    },
    {
        "id": 3439,
        "ca": 2196608,
        "margin": 983351,
        "ebitda": 615160,
        "loss": 3171973,
        "year": 2017,
        "business": 1721
    },
    {
        "id": 3440,
        "ca": 3400967,
        "margin": -83667,
        "ebitda": 935504,
        "loss": 866481,
        "year": 2016,
        "business": 1721
    },
    {
        "id": 3441,
        "ca": 527620,
        "margin": 155253,
        "ebitda": 564611,
        "loss": 5883557,
        "year": 2017,
        "business": 1722
    },
    {
        "id": 3442,
        "ca": 1435553,
        "margin": 715818,
        "ebitda": 357695,
        "loss": 9467432,
        "year": 2016,
        "business": 1722
    },
    {
        "id": 3443,
        "ca": 3562692,
        "margin": 627483,
        "ebitda": 289808,
        "loss": 6190550,
        "year": 2017,
        "business": 1723
    },
    {
        "id": 3444,
        "ca": 3510784,
        "margin": 830604,
        "ebitda": 175364,
        "loss": 9280568,
        "year": 2016,
        "business": 1723
    },
    {
        "id": 3445,
        "ca": 2548594,
        "margin": 499953,
        "ebitda": 652521,
        "loss": 543679,
        "year": 2017,
        "business": 1724
    },
    {
        "id": 3446,
        "ca": 3554878,
        "margin": -175032,
        "ebitda": 83182,
        "loss": 2025851,
        "year": 2016,
        "business": 1724
    },
    {
        "id": 3447,
        "ca": 3719635,
        "margin": 148040,
        "ebitda": 751941,
        "loss": 5461320,
        "year": 2017,
        "business": 1725
    },
    {
        "id": 3448,
        "ca": 1964297,
        "margin": 188273,
        "ebitda": 676912,
        "loss": 8317310,
        "year": 2016,
        "business": 1725
    },
    {
        "id": 3449,
        "ca": 2814256,
        "margin": -153903,
        "ebitda": 323309,
        "loss": 5863644,
        "year": 2017,
        "business": 1726
    },
    {
        "id": 3450,
        "ca": 2840739,
        "margin": 723872,
        "ebitda": 350353,
        "loss": 1701190,
        "year": 2016,
        "business": 1726
    },
    {
        "id": 3451,
        "ca": 3751713,
        "margin": 524164,
        "ebitda": 353314,
        "loss": 1970469,
        "year": 2017,
        "business": 1727
    },
    {
        "id": 3452,
        "ca": 3450485,
        "margin": 940956,
        "ebitda": 659776,
        "loss": 3537170,
        "year": 2016,
        "business": 1727
    },
    {
        "id": 3453,
        "ca": 1102398,
        "margin": 905928,
        "ebitda": 240375,
        "loss": 3443733,
        "year": 2017,
        "business": 1728
    },
    {
        "id": 3454,
        "ca": 525565,
        "margin": 86413,
        "ebitda": 683068,
        "loss": 9460082,
        "year": 2016,
        "business": 1728
    },
    {
        "id": 3455,
        "ca": 2455159,
        "margin": 536135,
        "ebitda": 613407,
        "loss": 5684784,
        "year": 2017,
        "business": 1729
    },
    {
        "id": 3456,
        "ca": 3941856,
        "margin": -141228,
        "ebitda": 656005,
        "loss": 6903911,
        "year": 2016,
        "business": 1729
    },
    {
        "id": 3457,
        "ca": 259752,
        "margin": 661864,
        "ebitda": 665543,
        "loss": 1320596,
        "year": 2017,
        "business": 1730
    },
    {
        "id": 3458,
        "ca": 3063672,
        "margin": 110052,
        "ebitda": 468077,
        "loss": 1397938,
        "year": 2016,
        "business": 1730
    },
    {
        "id": 3459,
        "ca": 516298,
        "margin": -62155,
        "ebitda": 511242,
        "loss": 9090370,
        "year": 2017,
        "business": 1731
    },
    {
        "id": 3460,
        "ca": 656808,
        "margin": 758799,
        "ebitda": 99428,
        "loss": 5134337,
        "year": 2016,
        "business": 1731
    },
    {
        "id": 3461,
        "ca": 2452260,
        "margin": -150069,
        "ebitda": 119816,
        "loss": 9839318,
        "year": 2017,
        "business": 1732
    },
    {
        "id": 3462,
        "ca": 931223,
        "margin": 19450,
        "ebitda": 104896,
        "loss": 7572543,
        "year": 2016,
        "business": 1732
    },
    {
        "id": 3463,
        "ca": 3073876,
        "margin": 942495,
        "ebitda": 551888,
        "loss": 1870584,
        "year": 2017,
        "business": 1733
    },
    {
        "id": 3464,
        "ca": 2362978,
        "margin": 594418,
        "ebitda": 224742,
        "loss": 4937894,
        "year": 2016,
        "business": 1733
    },
    {
        "id": 3465,
        "ca": 1516616,
        "margin": 420484,
        "ebitda": 295418,
        "loss": 1741395,
        "year": 2017,
        "business": 1734
    },
    {
        "id": 3466,
        "ca": 3262750,
        "margin": 550653,
        "ebitda": 926064,
        "loss": 8014526,
        "year": 2016,
        "business": 1734
    },
    {
        "id": 3467,
        "ca": 1616489,
        "margin": 900410,
        "ebitda": 881023,
        "loss": 5708918,
        "year": 2017,
        "business": 1735
    },
    {
        "id": 3468,
        "ca": 2188082,
        "margin": 503730,
        "ebitda": 191364,
        "loss": 3227924,
        "year": 2016,
        "business": 1735
    },
    {
        "id": 3469,
        "ca": 2615248,
        "margin": -107094,
        "ebitda": 752535,
        "loss": 5348299,
        "year": 2017,
        "business": 1736
    },
    {
        "id": 3470,
        "ca": 3102949,
        "margin": 974867,
        "ebitda": 744670,
        "loss": 2819582,
        "year": 2016,
        "business": 1736
    },
    {
        "id": 3471,
        "ca": 2405117,
        "margin": 69482,
        "ebitda": 948636,
        "loss": 4653259,
        "year": 2017,
        "business": 1737
    },
    {
        "id": 3472,
        "ca": 3564696,
        "margin": 291286,
        "ebitda": 299129,
        "loss": 6672090,
        "year": 2016,
        "business": 1737
    },
    {
        "id": 3473,
        "ca": 2906611,
        "margin": 637496,
        "ebitda": 934465,
        "loss": 3150429,
        "year": 2017,
        "business": 1738
    },
    {
        "id": 3474,
        "ca": 2073223,
        "margin": 13566,
        "ebitda": 388287,
        "loss": 3958961,
        "year": 2016,
        "business": 1738
    },
    {
        "id": 3475,
        "ca": 3172468,
        "margin": -77339,
        "ebitda": 487104,
        "loss": 2957416,
        "year": 2017,
        "business": 1739
    },
    {
        "id": 3476,
        "ca": 3386098,
        "margin": 818210,
        "ebitda": 238982,
        "loss": 973273,
        "year": 2016,
        "business": 1739
    },
    {
        "id": 3477,
        "ca": 516996,
        "margin": 715321,
        "ebitda": 341381,
        "loss": 7016689,
        "year": 2017,
        "business": 1740
    },
    {
        "id": 3478,
        "ca": 713004,
        "margin": 333273,
        "ebitda": 161725,
        "loss": 6595110,
        "year": 2016,
        "business": 1740
    },
    {
        "id": 3479,
        "ca": 1702790,
        "margin": 827539,
        "ebitda": 325886,
        "loss": 1547485,
        "year": 2017,
        "business": 1741
    },
    {
        "id": 3480,
        "ca": 2799552,
        "margin": 703284,
        "ebitda": 581185,
        "loss": 3477973,
        "year": 2016,
        "business": 1741
    },
    {
        "id": 3481,
        "ca": 3242057,
        "margin": 398702,
        "ebitda": 554579,
        "loss": 567314,
        "year": 2017,
        "business": 1742
    },
    {
        "id": 3482,
        "ca": 249694,
        "margin": 529941,
        "ebitda": 306301,
        "loss": 1020819,
        "year": 2016,
        "business": 1742
    },
    {
        "id": 3483,
        "ca": 3565917,
        "margin": 599139,
        "ebitda": 132512,
        "loss": 8486683,
        "year": 2017,
        "business": 1743
    },
    {
        "id": 3484,
        "ca": 698869,
        "margin": 692410,
        "ebitda": 427608,
        "loss": 5830210,
        "year": 2016,
        "business": 1743
    },
    {
        "id": 3485,
        "ca": 3946495,
        "margin": 728227,
        "ebitda": 162232,
        "loss": 8233430,
        "year": 2017,
        "business": 1744
    },
    {
        "id": 3486,
        "ca": 3663382,
        "margin": 624148,
        "ebitda": 340694,
        "loss": 413221,
        "year": 2016,
        "business": 1744
    },
    {
        "id": 3487,
        "ca": 2801908,
        "margin": 387492,
        "ebitda": 561140,
        "loss": 7166372,
        "year": 2017,
        "business": 1745
    },
    {
        "id": 3488,
        "ca": 272252,
        "margin": 251683,
        "ebitda": 198658,
        "loss": 9615832,
        "year": 2016,
        "business": 1745
    },
    {
        "id": 3489,
        "ca": 2092198,
        "margin": 415648,
        "ebitda": 833898,
        "loss": 7892173,
        "year": 2017,
        "business": 1746
    },
    {
        "id": 3490,
        "ca": 721671,
        "margin": 543568,
        "ebitda": 178252,
        "loss": 6696497,
        "year": 2016,
        "business": 1746
    },
    {
        "id": 3491,
        "ca": 1338040,
        "margin": 64481,
        "ebitda": 585953,
        "loss": 9933479,
        "year": 2017,
        "business": 1747
    },
    {
        "id": 3492,
        "ca": 185203,
        "margin": 755005,
        "ebitda": 334671,
        "loss": 5839985,
        "year": 2016,
        "business": 1747
    },
    {
        "id": 3493,
        "ca": 3401648,
        "margin": 915588,
        "ebitda": 973016,
        "loss": 780580,
        "year": 2017,
        "business": 1748
    },
    {
        "id": 3494,
        "ca": 3122718,
        "margin": 293859,
        "ebitda": 837596,
        "loss": 7692325,
        "year": 2016,
        "business": 1748
    },
    {
        "id": 3495,
        "ca": 2339505,
        "margin": -83140,
        "ebitda": 448330,
        "loss": 5244556,
        "year": 2017,
        "business": 1749
    },
    {
        "id": 3496,
        "ca": 3381902,
        "margin": 601697,
        "ebitda": 158126,
        "loss": 1819359,
        "year": 2016,
        "business": 1749
    },
    {
        "id": 3497,
        "ca": 891827,
        "margin": 21640,
        "ebitda": 197265,
        "loss": 3252413,
        "year": 2017,
        "business": 1750
    },
    {
        "id": 3498,
        "ca": 3711514,
        "margin": -173341,
        "ebitda": 786171,
        "loss": 9742384,
        "year": 2016,
        "business": 1750
    },
    {
        "id": 3499,
        "ca": 3376581,
        "margin": 997761,
        "ebitda": 915152,
        "loss": 6335066,
        "year": 2017,
        "business": 1751
    },
    {
        "id": 3500,
        "ca": 3864165,
        "margin": -142647,
        "ebitda": 702030,
        "loss": 6633123,
        "year": 2016,
        "business": 1751
    },
    {
        "id": 3501,
        "ca": 1739797,
        "margin": 780881,
        "ebitda": 764777,
        "loss": 8572738,
        "year": 2017,
        "business": 1752
    },
    {
        "id": 3502,
        "ca": 2741736,
        "margin": 586734,
        "ebitda": 600526,
        "loss": 4645801,
        "year": 2016,
        "business": 1752
    },
    {
        "id": 3503,
        "ca": 905795,
        "margin": 471999,
        "ebitda": 284310,
        "loss": 1525391,
        "year": 2017,
        "business": 1753
    },
    {
        "id": 3504,
        "ca": 2351846,
        "margin": 182818,
        "ebitda": 214650,
        "loss": 5604560,
        "year": 2016,
        "business": 1753
    },
    {
        "id": 3505,
        "ca": 482376,
        "margin": 265327,
        "ebitda": 856187,
        "loss": 7240546,
        "year": 2017,
        "business": 1754
    },
    {
        "id": 3506,
        "ca": 1350802,
        "margin": -30138,
        "ebitda": 702471,
        "loss": 2187259,
        "year": 2016,
        "business": 1754
    },
    {
        "id": 3507,
        "ca": 679759,
        "margin": 150578,
        "ebitda": 180459,
        "loss": 2997175,
        "year": 2017,
        "business": 1755
    },
    {
        "id": 3508,
        "ca": 3800461,
        "margin": 402405,
        "ebitda": 208846,
        "loss": 2721497,
        "year": 2016,
        "business": 1755
    },
    {
        "id": 3509,
        "ca": 3334266,
        "margin": 880161,
        "ebitda": 597622,
        "loss": 4655094,
        "year": 2017,
        "business": 1756
    },
    {
        "id": 3510,
        "ca": 1313567,
        "margin": 618919,
        "ebitda": 888700,
        "loss": 1419014,
        "year": 2016,
        "business": 1756
    },
    {
        "id": 3511,
        "ca": 586534,
        "margin": 420495,
        "ebitda": 619459,
        "loss": 7954259,
        "year": 2017,
        "business": 1757
    },
    {
        "id": 3512,
        "ca": 2283140,
        "margin": 98683,
        "ebitda": 249351,
        "loss": 9133226,
        "year": 2016,
        "business": 1757
    },
    {
        "id": 3513,
        "ca": 3099408,
        "margin": 868953,
        "ebitda": 705724,
        "loss": 8831387,
        "year": 2017,
        "business": 1758
    },
    {
        "id": 3514,
        "ca": 2033319,
        "margin": 535257,
        "ebitda": 750483,
        "loss": 2513541,
        "year": 2016,
        "business": 1758
    },
    {
        "id": 3515,
        "ca": 3458403,
        "margin": 523642,
        "ebitda": 597906,
        "loss": 3880292,
        "year": 2017,
        "business": 1759
    },
    {
        "id": 3516,
        "ca": 3918014,
        "margin": 326638,
        "ebitda": 258661,
        "loss": 1094413,
        "year": 2016,
        "business": 1759
    },
    {
        "id": 3517,
        "ca": 3980727,
        "margin": -175357,
        "ebitda": 668083,
        "loss": 4596029,
        "year": 2017,
        "business": 1760
    },
    {
        "id": 3518,
        "ca": 2596027,
        "margin": 778013,
        "ebitda": 944055,
        "loss": 5972113,
        "year": 2016,
        "business": 1760
    },
    {
        "id": 3519,
        "ca": 1277573,
        "margin": 55251,
        "ebitda": 310356,
        "loss": 5366370,
        "year": 2017,
        "business": 1761
    },
    {
        "id": 3520,
        "ca": 2775721,
        "margin": 293706,
        "ebitda": 490374,
        "loss": 3881480,
        "year": 2016,
        "business": 1761
    },
    {
        "id": 3521,
        "ca": 1866215,
        "margin": 654424,
        "ebitda": 894230,
        "loss": 1091802,
        "year": 2017,
        "business": 1762
    },
    {
        "id": 3522,
        "ca": 3632974,
        "margin": 901994,
        "ebitda": 167509,
        "loss": 817432,
        "year": 2016,
        "business": 1762
    },
    {
        "id": 3523,
        "ca": 826036,
        "margin": 305692,
        "ebitda": 551005,
        "loss": 3947329,
        "year": 2017,
        "business": 1763
    },
    {
        "id": 3524,
        "ca": 2801671,
        "margin": 565811,
        "ebitda": 845161,
        "loss": 3242099,
        "year": 2016,
        "business": 1763
    },
    {
        "id": 3525,
        "ca": 384680,
        "margin": -99162,
        "ebitda": 674206,
        "loss": 9225786,
        "year": 2017,
        "business": 1764
    },
    {
        "id": 3526,
        "ca": 3674280,
        "margin": 527524,
        "ebitda": 341406,
        "loss": 7349121,
        "year": 2016,
        "business": 1764
    },
    {
        "id": 3527,
        "ca": 1733624,
        "margin": 261057,
        "ebitda": 357783,
        "loss": 4183673,
        "year": 2017,
        "business": 1765
    },
    {
        "id": 3528,
        "ca": 396162,
        "margin": 340522,
        "ebitda": 634175,
        "loss": 4782937,
        "year": 2016,
        "business": 1765
    },
    {
        "id": 3529,
        "ca": 1946554,
        "margin": 166567,
        "ebitda": 889655,
        "loss": 9283826,
        "year": 2017,
        "business": 1766
    },
    {
        "id": 3530,
        "ca": 626411,
        "margin": 482008,
        "ebitda": 33004,
        "loss": 3790186,
        "year": 2016,
        "business": 1766
    },
    {
        "id": 3531,
        "ca": 2619606,
        "margin": 543725,
        "ebitda": 23952,
        "loss": 8392997,
        "year": 2017,
        "business": 1767
    },
    {
        "id": 3532,
        "ca": 1643427,
        "margin": 330490,
        "ebitda": 767148,
        "loss": 1006029,
        "year": 2016,
        "business": 1767
    },
    {
        "id": 3533,
        "ca": 1644201,
        "margin": 213038,
        "ebitda": 194315,
        "loss": 4912837,
        "year": 2017,
        "business": 1768
    },
    {
        "id": 3534,
        "ca": 3596525,
        "margin": 847658,
        "ebitda": 383224,
        "loss": 2015692,
        "year": 2016,
        "business": 1768
    },
    {
        "id": 3535,
        "ca": 2268982,
        "margin": 249174,
        "ebitda": 827308,
        "loss": 8673589,
        "year": 2017,
        "business": 1769
    },
    {
        "id": 3536,
        "ca": 3177776,
        "margin": 382377,
        "ebitda": 899071,
        "loss": 3583384,
        "year": 2016,
        "business": 1769
    },
    {
        "id": 3537,
        "ca": 225179,
        "margin": 122428,
        "ebitda": 170536,
        "loss": 2865449,
        "year": 2017,
        "business": 1770
    },
    {
        "id": 3538,
        "ca": 1891637,
        "margin": 92721,
        "ebitda": 905257,
        "loss": 6188240,
        "year": 2016,
        "business": 1770
    },
    {
        "id": 3539,
        "ca": 177070,
        "margin": 25701,
        "ebitda": 41447,
        "loss": 9191097,
        "year": 2017,
        "business": 1771
    },
    {
        "id": 3540,
        "ca": 2672987,
        "margin": -36548,
        "ebitda": 685519,
        "loss": 4550502,
        "year": 2016,
        "business": 1771
    },
    {
        "id": 3541,
        "ca": 2370451,
        "margin": 943641,
        "ebitda": 60699,
        "loss": 6876280,
        "year": 2017,
        "business": 1772
    },
    {
        "id": 3542,
        "ca": 1443844,
        "margin": -139495,
        "ebitda": 104251,
        "loss": 1651685,
        "year": 2016,
        "business": 1772
    },
    {
        "id": 3543,
        "ca": 335959,
        "margin": 426697,
        "ebitda": 970302,
        "loss": 2451782,
        "year": 2017,
        "business": 1773
    },
    {
        "id": 3544,
        "ca": 692797,
        "margin": 516054,
        "ebitda": 970922,
        "loss": 5766053,
        "year": 2016,
        "business": 1773
    },
    {
        "id": 3545,
        "ca": 2686049,
        "margin": 1649,
        "ebitda": 455602,
        "loss": 1534757,
        "year": 2017,
        "business": 1774
    },
    {
        "id": 3546,
        "ca": 3672184,
        "margin": 109105,
        "ebitda": 6988,
        "loss": 4360257,
        "year": 2016,
        "business": 1774
    },
    {
        "id": 3547,
        "ca": 1274543,
        "margin": -183604,
        "ebitda": 165574,
        "loss": 8723912,
        "year": 2017,
        "business": 1775
    },
    {
        "id": 3548,
        "ca": 1113977,
        "margin": -111549,
        "ebitda": 991281,
        "loss": 2684020,
        "year": 2016,
        "business": 1775
    },
    {
        "id": 3549,
        "ca": 2196445,
        "margin": 94927,
        "ebitda": 399976,
        "loss": 1536881,
        "year": 2017,
        "business": 1776
    },
    {
        "id": 3550,
        "ca": 3014910,
        "margin": 923465,
        "ebitda": 768179,
        "loss": 2152699,
        "year": 2016,
        "business": 1776
    },
    {
        "id": 3551,
        "ca": 1629355,
        "margin": 38750,
        "ebitda": 794150,
        "loss": 4124210,
        "year": 2017,
        "business": 1777
    },
    {
        "id": 3552,
        "ca": 430790,
        "margin": 901385,
        "ebitda": 296726,
        "loss": 8481724,
        "year": 2016,
        "business": 1777
    },
    {
        "id": 3553,
        "ca": 3536314,
        "margin": 777338,
        "ebitda": 744054,
        "loss": 9526795,
        "year": 2017,
        "business": 1778
    },
    {
        "id": 3554,
        "ca": 2423243,
        "margin": 882662,
        "ebitda": 190830,
        "loss": 1656837,
        "year": 2016,
        "business": 1778
    },
    {
        "id": 3555,
        "ca": 3507609,
        "margin": -3727,
        "ebitda": 171852,
        "loss": 1465521,
        "year": 2017,
        "business": 1779
    },
    {
        "id": 3556,
        "ca": 1626631,
        "margin": 211798,
        "ebitda": 130637,
        "loss": 577093,
        "year": 2016,
        "business": 1779
    },
    {
        "id": 3557,
        "ca": 684367,
        "margin": 7638,
        "ebitda": 838045,
        "loss": 1421099,
        "year": 2017,
        "business": 1780
    },
    {
        "id": 3558,
        "ca": 3443769,
        "margin": 415592,
        "ebitda": 458142,
        "loss": 5674216,
        "year": 2016,
        "business": 1780
    },
    {
        "id": 3559,
        "ca": 1456776,
        "margin": -84507,
        "ebitda": 879826,
        "loss": 3486057,
        "year": 2017,
        "business": 1781
    },
    {
        "id": 3560,
        "ca": 1581826,
        "margin": 896004,
        "ebitda": 247034,
        "loss": 4564383,
        "year": 2016,
        "business": 1781
    },
    {
        "id": 3561,
        "ca": 2187815,
        "margin": 156174,
        "ebitda": 990447,
        "loss": 8515827,
        "year": 2017,
        "business": 1782
    },
    {
        "id": 3562,
        "ca": 2794481,
        "margin": -57583,
        "ebitda": 894271,
        "loss": 7987444,
        "year": 2016,
        "business": 1782
    },
    {
        "id": 3563,
        "ca": 2732433,
        "margin": 390580,
        "ebitda": 555545,
        "loss": 5504930,
        "year": 2017,
        "business": 1783
    },
    {
        "id": 3564,
        "ca": 1609419,
        "margin": 588107,
        "ebitda": 745747,
        "loss": 6256273,
        "year": 2016,
        "business": 1783
    },
    {
        "id": 3565,
        "ca": 2148372,
        "margin": 84946,
        "ebitda": 861906,
        "loss": 8102158,
        "year": 2017,
        "business": 1784
    },
    {
        "id": 3566,
        "ca": 2562130,
        "margin": -119321,
        "ebitda": 92069,
        "loss": 4432333,
        "year": 2016,
        "business": 1784
    },
    {
        "id": 3567,
        "ca": 3292531,
        "margin": 24941,
        "ebitda": 539352,
        "loss": 7162766,
        "year": 2017,
        "business": 1785
    },
    {
        "id": 3568,
        "ca": 2254095,
        "margin": -181832,
        "ebitda": 79619,
        "loss": 7748690,
        "year": 2016,
        "business": 1785
    },
    {
        "id": 3569,
        "ca": 1802464,
        "margin": -129321,
        "ebitda": 475942,
        "loss": 6441906,
        "year": 2017,
        "business": 1786
    },
    {
        "id": 3570,
        "ca": 3222518,
        "margin": 584490,
        "ebitda": 416460,
        "loss": 5260185,
        "year": 2016,
        "business": 1786
    },
    {
        "id": 3571,
        "ca": 541731,
        "margin": -140478,
        "ebitda": 911350,
        "loss": 1972964,
        "year": 2017,
        "business": 1787
    },
    {
        "id": 3572,
        "ca": 2736319,
        "margin": 297603,
        "ebitda": 314238,
        "loss": 7975333,
        "year": 2016,
        "business": 1787
    },
    {
        "id": 3573,
        "ca": 2672246,
        "margin": 629897,
        "ebitda": 847739,
        "loss": 2987082,
        "year": 2017,
        "business": 1788
    },
    {
        "id": 3574,
        "ca": 2297364,
        "margin": 515714,
        "ebitda": 891133,
        "loss": 1491578,
        "year": 2016,
        "business": 1788
    },
    {
        "id": 3575,
        "ca": 1912176,
        "margin": 102650,
        "ebitda": 673153,
        "loss": 6263174,
        "year": 2017,
        "business": 1789
    },
    {
        "id": 3576,
        "ca": 1999567,
        "margin": -105304,
        "ebitda": 178638,
        "loss": 3059633,
        "year": 2016,
        "business": 1789
    },
    {
        "id": 3577,
        "ca": 1976901,
        "margin": 251649,
        "ebitda": 366072,
        "loss": 2737616,
        "year": 2017,
        "business": 1790
    },
    {
        "id": 3578,
        "ca": 1196033,
        "margin": 836746,
        "ebitda": 706158,
        "loss": 8662053,
        "year": 2016,
        "business": 1790
    },
    {
        "id": 3579,
        "ca": 153088,
        "margin": 950390,
        "ebitda": 23330,
        "loss": 5306745,
        "year": 2017,
        "business": 1791
    },
    {
        "id": 3580,
        "ca": 3468356,
        "margin": 31512,
        "ebitda": 869019,
        "loss": 8306211,
        "year": 2016,
        "business": 1791
    },
    {
        "id": 3581,
        "ca": 362164,
        "margin": 457336,
        "ebitda": 683788,
        "loss": 3727787,
        "year": 2017,
        "business": 1792
    },
    {
        "id": 3582,
        "ca": 1475636,
        "margin": 931407,
        "ebitda": 463301,
        "loss": 1854138,
        "year": 2016,
        "business": 1792
    },
    {
        "id": 3583,
        "ca": 1856444,
        "margin": -125178,
        "ebitda": 182747,
        "loss": 1803773,
        "year": 2017,
        "business": 1793
    },
    {
        "id": 3584,
        "ca": 1289243,
        "margin": -130931,
        "ebitda": 51728,
        "loss": 5354380,
        "year": 2016,
        "business": 1793
    },
    {
        "id": 3585,
        "ca": 1394223,
        "margin": 319500,
        "ebitda": 239866,
        "loss": 4675843,
        "year": 2017,
        "business": 1794
    },
    {
        "id": 3586,
        "ca": 1073823,
        "margin": 407352,
        "ebitda": 922472,
        "loss": 172047,
        "year": 2016,
        "business": 1794
    },
    {
        "id": 3587,
        "ca": 2925651,
        "margin": 610812,
        "ebitda": 546894,
        "loss": 4908259,
        "year": 2017,
        "business": 1795
    },
    {
        "id": 3588,
        "ca": 2164396,
        "margin": -114303,
        "ebitda": 514952,
        "loss": 38913,
        "year": 2016,
        "business": 1795
    },
    {
        "id": 3589,
        "ca": 1890998,
        "margin": -97057,
        "ebitda": 778648,
        "loss": 4537562,
        "year": 2017,
        "business": 1796
    },
    {
        "id": 3590,
        "ca": 2078458,
        "margin": 798051,
        "ebitda": 652175,
        "loss": 2795985,
        "year": 2016,
        "business": 1796
    },
    {
        "id": 3591,
        "ca": 666666,
        "margin": 660710,
        "ebitda": 426051,
        "loss": 4237731,
        "year": 2017,
        "business": 1797
    },
    {
        "id": 3592,
        "ca": 426795,
        "margin": -86442,
        "ebitda": 36235,
        "loss": 8199404,
        "year": 2016,
        "business": 1797
    },
    {
        "id": 3593,
        "ca": 2671932,
        "margin": 905334,
        "ebitda": 129972,
        "loss": 5388737,
        "year": 2017,
        "business": 1798
    },
    {
        "id": 3594,
        "ca": 2519863,
        "margin": 881159,
        "ebitda": 962767,
        "loss": 7486405,
        "year": 2016,
        "business": 1798
    },
    {
        "id": 3595,
        "ca": 2550193,
        "margin": 383344,
        "ebitda": 342858,
        "loss": 2534076,
        "year": 2017,
        "business": 1799
    },
    {
        "id": 3596,
        "ca": 1484360,
        "margin": 600633,
        "ebitda": 296391,
        "loss": 673174,
        "year": 2016,
        "business": 1799
    },
    {
        "id": 3597,
        "ca": 3849893,
        "margin": 233786,
        "ebitda": 917771,
        "loss": 5098134,
        "year": 2017,
        "business": 1800
    },
    {
        "id": 3598,
        "ca": 1958834,
        "margin": 391989,
        "ebitda": 222724,
        "loss": 276911,
        "year": 2016,
        "business": 1800
    },
    {
        "id": 3599,
        "ca": 914120,
        "margin": 488949,
        "ebitda": 221038,
        "loss": 4353690,
        "year": 2017,
        "business": 1801
    },
    {
        "id": 3600,
        "ca": 1852655,
        "margin": 819044,
        "ebitda": 407575,
        "loss": 581563,
        "year": 2016,
        "business": 1801
    },
    {
        "id": 3601,
        "ca": 3839552,
        "margin": 178439,
        "ebitda": 774461,
        "loss": 5770032,
        "year": 2017,
        "business": 1802
    },
    {
        "id": 3602,
        "ca": 3754624,
        "margin": -110353,
        "ebitda": 508838,
        "loss": 2323188,
        "year": 2016,
        "business": 1802
    },
    {
        "id": 3603,
        "ca": 3843640,
        "margin": 537459,
        "ebitda": 822941,
        "loss": 897927,
        "year": 2017,
        "business": 1803
    },
    {
        "id": 3604,
        "ca": 2902753,
        "margin": 106443,
        "ebitda": 613398,
        "loss": 5794639,
        "year": 2016,
        "business": 1803
    },
    {
        "id": 3605,
        "ca": 1058620,
        "margin": -128820,
        "ebitda": 352419,
        "loss": 6512877,
        "year": 2017,
        "business": 1804
    },
    {
        "id": 3606,
        "ca": 2446787,
        "margin": 478468,
        "ebitda": 8685,
        "loss": 9992550,
        "year": 2016,
        "business": 1804
    },
    {
        "id": 3607,
        "ca": 2818532,
        "margin": 635042,
        "ebitda": 146382,
        "loss": 8420833,
        "year": 2017,
        "business": 1805
    },
    {
        "id": 3608,
        "ca": 195099,
        "margin": 184788,
        "ebitda": 337987,
        "loss": 4543128,
        "year": 2016,
        "business": 1805
    },
    {
        "id": 3609,
        "ca": 389690,
        "margin": 998817,
        "ebitda": 998890,
        "loss": 3604449,
        "year": 2017,
        "business": 1806
    },
    {
        "id": 3610,
        "ca": 2706674,
        "margin": 223768,
        "ebitda": 631472,
        "loss": 2043776,
        "year": 2016,
        "business": 1806
    },
    {
        "id": 3611,
        "ca": 2709828,
        "margin": 659988,
        "ebitda": 307329,
        "loss": 7216804,
        "year": 2017,
        "business": 1807
    },
    {
        "id": 3612,
        "ca": 3833353,
        "margin": 976052,
        "ebitda": 264501,
        "loss": 4914578,
        "year": 2016,
        "business": 1807
    },
    {
        "id": 3613,
        "ca": 499660,
        "margin": 29396,
        "ebitda": 688999,
        "loss": 6395165,
        "year": 2017,
        "business": 1808
    },
    {
        "id": 3614,
        "ca": 3942973,
        "margin": 795797,
        "ebitda": 604635,
        "loss": 3435198,
        "year": 2016,
        "business": 1808
    },
    {
        "id": 3615,
        "ca": 2534275,
        "margin": 401699,
        "ebitda": 524766,
        "loss": 3627892,
        "year": 2017,
        "business": 1809
    },
    {
        "id": 3616,
        "ca": 1141967,
        "margin": 798220,
        "ebitda": 934295,
        "loss": 7067035,
        "year": 2016,
        "business": 1809
    },
    {
        "id": 3617,
        "ca": 3214706,
        "margin": 439847,
        "ebitda": 699300,
        "loss": 6912866,
        "year": 2017,
        "business": 1810
    },
    {
        "id": 3618,
        "ca": 1505307,
        "margin": 925747,
        "ebitda": 73243,
        "loss": 8736561,
        "year": 2016,
        "business": 1810
    },
    {
        "id": 3619,
        "ca": 1984815,
        "margin": 988320,
        "ebitda": 838976,
        "loss": 8218207,
        "year": 2017,
        "business": 1811
    },
    {
        "id": 3620,
        "ca": 659748,
        "margin": 669408,
        "ebitda": 508276,
        "loss": 3936215,
        "year": 2016,
        "business": 1811
    },
    {
        "id": 3621,
        "ca": 2061254,
        "margin": 293144,
        "ebitda": 32995,
        "loss": 5201878,
        "year": 2017,
        "business": 1812
    },
    {
        "id": 3622,
        "ca": 3292201,
        "margin": 388920,
        "ebitda": 669024,
        "loss": 7457182,
        "year": 2016,
        "business": 1812
    },
    {
        "id": 3623,
        "ca": 2077357,
        "margin": 497351,
        "ebitda": 65952,
        "loss": 858474,
        "year": 2017,
        "business": 1814
    },
    {
        "id": 3624,
        "ca": 432070,
        "margin": 427778,
        "ebitda": 290433,
        "loss": 8023406,
        "year": 2016,
        "business": 1814
    },
    {
        "id": 3625,
        "ca": 364921,
        "margin": 61976,
        "ebitda": 960673,
        "loss": 2812728,
        "year": 2017,
        "business": 1815
    },
    {
        "id": 3626,
        "ca": 1944186,
        "margin": 738525,
        "ebitda": 846608,
        "loss": 657145,
        "year": 2016,
        "business": 1815
    },
    {
        "id": 3627,
        "ca": 2752578,
        "margin": -147358,
        "ebitda": 485891,
        "loss": 331323,
        "year": 2017,
        "business": 1816
    },
    {
        "id": 3628,
        "ca": 1686886,
        "margin": -117670,
        "ebitda": 390980,
        "loss": 3205084,
        "year": 2016,
        "business": 1816
    },
    {
        "id": 3629,
        "ca": 1911503,
        "margin": 340643,
        "ebitda": 417233,
        "loss": 5121889,
        "year": 2017,
        "business": 1817
    },
    {
        "id": 3630,
        "ca": 3669705,
        "margin": 937608,
        "ebitda": 162576,
        "loss": 8516803,
        "year": 2016,
        "business": 1817
    },
    {
        "id": 3631,
        "ca": 2802947,
        "margin": -192527,
        "ebitda": 895332,
        "loss": 168490,
        "year": 2017,
        "business": 1818
    },
    {
        "id": 3632,
        "ca": 1704685,
        "margin": 675635,
        "ebitda": 175060,
        "loss": 8978142,
        "year": 2016,
        "business": 1818
    },
    {
        "id": 3633,
        "ca": 3366027,
        "margin": 987873,
        "ebitda": 196501,
        "loss": 7956104,
        "year": 2017,
        "business": 1819
    },
    {
        "id": 3634,
        "ca": 2312009,
        "margin": 564257,
        "ebitda": 534160,
        "loss": 5616100,
        "year": 2016,
        "business": 1819
    },
    {
        "id": 3635,
        "ca": 807176,
        "margin": -170771,
        "ebitda": 501330,
        "loss": 107559,
        "year": 2017,
        "business": 1820
    },
    {
        "id": 3636,
        "ca": 1677728,
        "margin": 405029,
        "ebitda": 919989,
        "loss": 7064750,
        "year": 2016,
        "business": 1820
    },
    {
        "id": 3637,
        "ca": 845912,
        "margin": -55821,
        "ebitda": 224135,
        "loss": 2658021,
        "year": 2017,
        "business": 1821
    },
    {
        "id": 3638,
        "ca": 2744919,
        "margin": 681582,
        "ebitda": 236779,
        "loss": 4376894,
        "year": 2016,
        "business": 1821
    },
    {
        "id": 3639,
        "ca": 2645052,
        "margin": -41159,
        "ebitda": 173240,
        "loss": 1967321,
        "year": 2017,
        "business": 1822
    },
    {
        "id": 3640,
        "ca": 732362,
        "margin": 698731,
        "ebitda": 463853,
        "loss": 5229956,
        "year": 2016,
        "business": 1822
    },
    {
        "id": 3641,
        "ca": 1399582,
        "margin": 985314,
        "ebitda": 725283,
        "loss": 4266902,
        "year": 2017,
        "business": 1823
    },
    {
        "id": 3642,
        "ca": 1916496,
        "margin": 979357,
        "ebitda": 942617,
        "loss": 2478758,
        "year": 2016,
        "business": 1823
    },
    {
        "id": 3643,
        "ca": 490022,
        "margin": 352486,
        "ebitda": 213406,
        "loss": 608978,
        "year": 2017,
        "business": 1824
    },
    {
        "id": 3644,
        "ca": 2814806,
        "margin": 150982,
        "ebitda": 255155,
        "loss": 4306009,
        "year": 2016,
        "business": 1824
    },
    {
        "id": 3645,
        "ca": 498678,
        "margin": 154466,
        "ebitda": 620676,
        "loss": 548809,
        "year": 2017,
        "business": 1825
    },
    {
        "id": 3646,
        "ca": 2772820,
        "margin": 119935,
        "ebitda": 271449,
        "loss": 5095792,
        "year": 2016,
        "business": 1825
    },
    {
        "id": 3647,
        "ca": 2302368,
        "margin": 469510,
        "ebitda": 250648,
        "loss": 5131438,
        "year": 2017,
        "business": 1826
    },
    {
        "id": 3648,
        "ca": 3011160,
        "margin": 429420,
        "ebitda": 940827,
        "loss": 7664834,
        "year": 2016,
        "business": 1826
    },
    {
        "id": 3649,
        "ca": 2091227,
        "margin": 809190,
        "ebitda": 589384,
        "loss": 6212269,
        "year": 2017,
        "business": 1827
    },
    {
        "id": 3650,
        "ca": 676290,
        "margin": 202279,
        "ebitda": 718696,
        "loss": 5774367,
        "year": 2016,
        "business": 1827
    },
    {
        "id": 3651,
        "ca": 1071840,
        "margin": 70852,
        "ebitda": 571568,
        "loss": 2690278,
        "year": 2017,
        "business": 1828
    },
    {
        "id": 3652,
        "ca": 2169468,
        "margin": -92185,
        "ebitda": 134714,
        "loss": 2327708,
        "year": 2016,
        "business": 1828
    },
    {
        "id": 3653,
        "ca": 227469,
        "margin": -172937,
        "ebitda": 849147,
        "loss": 3197097,
        "year": 2017,
        "business": 1829
    },
    {
        "id": 3654,
        "ca": 2950073,
        "margin": 291666,
        "ebitda": 358533,
        "loss": 2035460,
        "year": 2016,
        "business": 1829
    },
    {
        "id": 3655,
        "ca": 1659892,
        "margin": 228500,
        "ebitda": 676123,
        "loss": 113437,
        "year": 2017,
        "business": 1830
    },
    {
        "id": 3656,
        "ca": 1332202,
        "margin": -10635,
        "ebitda": 591615,
        "loss": 1731490,
        "year": 2016,
        "business": 1830
    },
    {
        "id": 3657,
        "ca": 2698460,
        "margin": 367570,
        "ebitda": 943598,
        "loss": 6190258,
        "year": 2017,
        "business": 1831
    },
    {
        "id": 3658,
        "ca": 1547921,
        "margin": 898131,
        "ebitda": 549866,
        "loss": 695666,
        "year": 2016,
        "business": 1831
    },
    {
        "id": 3659,
        "ca": 3902519,
        "margin": 765501,
        "ebitda": 873377,
        "loss": 2554825,
        "year": 2017,
        "business": 1832
    },
    {
        "id": 3660,
        "ca": 804936,
        "margin": 182411,
        "ebitda": 466946,
        "loss": 9989170,
        "year": 2016,
        "business": 1832
    },
    {
        "id": 3661,
        "ca": 1658933,
        "margin": 647423,
        "ebitda": 568089,
        "loss": 6579924,
        "year": 2017,
        "business": 1833
    },
    {
        "id": 3662,
        "ca": 1738120,
        "margin": 674431,
        "ebitda": 429561,
        "loss": 408865,
        "year": 2016,
        "business": 1833
    },
    {
        "id": 3663,
        "ca": 2026715,
        "margin": -198616,
        "ebitda": 965383,
        "loss": 6439279,
        "year": 2017,
        "business": 1834
    },
    {
        "id": 3664,
        "ca": 3894824,
        "margin": 606068,
        "ebitda": 694184,
        "loss": 5969030,
        "year": 2016,
        "business": 1834
    },
    {
        "id": 3665,
        "ca": 2077357,
        "margin": 497351,
        "ebitda": 65952,
        "loss": 858474,
        "year": 2017,
        "business": 1835
    },
    {
        "id": 3666,
        "ca": 432070,
        "margin": 427778,
        "ebitda": 290433,
        "loss": 8023406,
        "year": 2016,
        "business": 1835
    },
    {
        "id": 3667,
        "ca": 364921,
        "margin": 61976,
        "ebitda": 960673,
        "loss": 2812728,
        "year": 2017,
        "business": 1836
    },
    {
        "id": 3668,
        "ca": 1944186,
        "margin": 738525,
        "ebitda": 846608,
        "loss": 657145,
        "year": 2016,
        "business": 1836
    },
    {
        "id": 3669,
        "ca": 2752578,
        "margin": -147358,
        "ebitda": 485891,
        "loss": 331323,
        "year": 2017,
        "business": 1837
    },
    {
        "id": 3670,
        "ca": 1686886,
        "margin": -117670,
        "ebitda": 390980,
        "loss": 3205084,
        "year": 2016,
        "business": 1837
    },
    {
        "id": 3671,
        "ca": 1911503,
        "margin": 340643,
        "ebitda": 417233,
        "loss": 5121889,
        "year": 2017,
        "business": 1838
    },
    {
        "id": 3672,
        "ca": 3669705,
        "margin": 937608,
        "ebitda": 162576,
        "loss": 8516803,
        "year": 2016,
        "business": 1838
    },
    {
        "id": 3673,
        "ca": 2802947,
        "margin": -192527,
        "ebitda": 895332,
        "loss": 168490,
        "year": 2017,
        "business": 1839
    },
    {
        "id": 3674,
        "ca": 1704685,
        "margin": 675635,
        "ebitda": 175060,
        "loss": 8978142,
        "year": 2016,
        "business": 1839
    },
    {
        "id": 3675,
        "ca": 3366027,
        "margin": 987873,
        "ebitda": 196501,
        "loss": 7956104,
        "year": 2017,
        "business": 1840
    },
    {
        "id": 3676,
        "ca": 2312009,
        "margin": 564257,
        "ebitda": 534160,
        "loss": 5616100,
        "year": 2016,
        "business": 1840
    },
    {
        "id": 3677,
        "ca": 807176,
        "margin": -170771,
        "ebitda": 501330,
        "loss": 107559,
        "year": 2017,
        "business": 1841
    },
    {
        "id": 3678,
        "ca": 1677728,
        "margin": 405029,
        "ebitda": 919989,
        "loss": 7064750,
        "year": 2016,
        "business": 1841
    },
    {
        "id": 3679,
        "ca": 845912,
        "margin": -55821,
        "ebitda": 224135,
        "loss": 2658021,
        "year": 2017,
        "business": 1842
    },
    {
        "id": 3680,
        "ca": 2744919,
        "margin": 681582,
        "ebitda": 236779,
        "loss": 4376894,
        "year": 2016,
        "business": 1842
    },
    {
        "id": 3681,
        "ca": 2645052,
        "margin": -41159,
        "ebitda": 173240,
        "loss": 1967321,
        "year": 2017,
        "business": 1843
    },
    {
        "id": 3682,
        "ca": 732362,
        "margin": 698731,
        "ebitda": 463853,
        "loss": 5229956,
        "year": 2016,
        "business": 1843
    },
    {
        "id": 3683,
        "ca": 1399582,
        "margin": 985314,
        "ebitda": 725283,
        "loss": 4266902,
        "year": 2017,
        "business": 1844
    },
    {
        "id": 3684,
        "ca": 1916496,
        "margin": 979357,
        "ebitda": 942617,
        "loss": 2478758,
        "year": 2016,
        "business": 1844
    },
    {
        "id": 3685,
        "ca": 490022,
        "margin": 352486,
        "ebitda": 213406,
        "loss": 608978,
        "year": 2017,
        "business": 1845
    },
    {
        "id": 3686,
        "ca": 2814806,
        "margin": 150982,
        "ebitda": 255155,
        "loss": 4306009,
        "year": 2016,
        "business": 1845
    },
    {
        "id": 3687,
        "ca": 498678,
        "margin": 154466,
        "ebitda": 620676,
        "loss": 548809,
        "year": 2017,
        "business": 1846
    },
    {
        "id": 3688,
        "ca": 2772820,
        "margin": 119935,
        "ebitda": 271449,
        "loss": 5095792,
        "year": 2016,
        "business": 1846
    },
    {
        "id": 3689,
        "ca": 2302368,
        "margin": 469510,
        "ebitda": 250648,
        "loss": 5131438,
        "year": 2017,
        "business": 1847
    },
    {
        "id": 3690,
        "ca": 3011160,
        "margin": 429420,
        "ebitda": 940827,
        "loss": 7664834,
        "year": 2016,
        "business": 1847
    },
    {
        "id": 3691,
        "ca": 2091227,
        "margin": 809190,
        "ebitda": 589384,
        "loss": 6212269,
        "year": 2017,
        "business": 1848
    },
    {
        "id": 3692,
        "ca": 676290,
        "margin": 202279,
        "ebitda": 718696,
        "loss": 5774367,
        "year": 2016,
        "business": 1848
    },
    {
        "id": 3693,
        "ca": 1071840,
        "margin": 70852,
        "ebitda": 571568,
        "loss": 2690278,
        "year": 2017,
        "business": 1849
    },
    {
        "id": 3694,
        "ca": 2169468,
        "margin": -92185,
        "ebitda": 134714,
        "loss": 2327708,
        "year": 2016,
        "business": 1849
    },
    {
        "id": 3695,
        "ca": 227469,
        "margin": -172937,
        "ebitda": 849147,
        "loss": 3197097,
        "year": 2017,
        "business": 1850
    },
    {
        "id": 3696,
        "ca": 2950073,
        "margin": 291666,
        "ebitda": 358533,
        "loss": 2035460,
        "year": 2016,
        "business": 1850
    },
    {
        "id": 3697,
        "ca": 1659892,
        "margin": 228500,
        "ebitda": 676123,
        "loss": 113437,
        "year": 2017,
        "business": 1851
    },
    {
        "id": 3698,
        "ca": 1332202,
        "margin": -10635,
        "ebitda": 591615,
        "loss": 1731490,
        "year": 2016,
        "business": 1851
    },
    {
        "id": 3699,
        "ca": 2698460,
        "margin": 367570,
        "ebitda": 943598,
        "loss": 6190258,
        "year": 2017,
        "business": 1852
    },
    {
        "id": 3700,
        "ca": 1547921,
        "margin": 898131,
        "ebitda": 549866,
        "loss": 695666,
        "year": 2016,
        "business": 1852
    },
    {
        "id": 3701,
        "ca": 3902519,
        "margin": 765501,
        "ebitda": 873377,
        "loss": 2554825,
        "year": 2017,
        "business": 1853
    },
    {
        "id": 3702,
        "ca": 804936,
        "margin": 182411,
        "ebitda": 466946,
        "loss": 9989170,
        "year": 2016,
        "business": 1853
    },
    {
        "id": 3703,
        "ca": 1658933,
        "margin": 647423,
        "ebitda": 568089,
        "loss": 6579924,
        "year": 2017,
        "business": 1854
    },
    {
        "id": 3704,
        "ca": 1738120,
        "margin": 674431,
        "ebitda": 429561,
        "loss": 408865,
        "year": 2016,
        "business": 1854
    },
    {
        "id": 3705,
        "ca": 2026715,
        "margin": -198616,
        "ebitda": 965383,
        "loss": 6439279,
        "year": 2017,
        "business": 1855
    },
    {
        "id": 3706,
        "ca": 3894824,
        "margin": 606068,
        "ebitda": 694184,
        "loss": 5969030,
        "year": 2016,
        "business": 1855
    },
    {
        "id": 3707,
        "ca": 2494629,
        "margin": 240340,
        "ebitda": 282056,
        "loss": 6994907,
        "year": 2017,
        "business": 1856
    },
    {
        "id": 3708,
        "ca": 1974168,
        "margin": 484412,
        "ebitda": 253168,
        "loss": 1670528,
        "year": 2016,
        "business": 1856
    },
    {
        "id": 3709,
        "ca": 3977217,
        "margin": 175757,
        "ebitda": 241608,
        "loss": 6107207,
        "year": 2017,
        "business": 1857
    },
    {
        "id": 3710,
        "ca": 809720,
        "margin": 545355,
        "ebitda": 842297,
        "loss": 7239634,
        "year": 2016,
        "business": 1857
    },
    {
        "id": 3711,
        "ca": 3055261,
        "margin": -29529,
        "ebitda": 988508,
        "loss": 3307127,
        "year": 2017,
        "business": 1858
    },
    {
        "id": 3712,
        "ca": 441182,
        "margin": 616025,
        "ebitda": 739319,
        "loss": 754174,
        "year": 2016,
        "business": 1858
    },
    {
        "id": 3713,
        "ca": 3778120,
        "margin": 946201,
        "ebitda": 737398,
        "loss": 828816,
        "year": 2017,
        "business": 1859
    },
    {
        "id": 3714,
        "ca": 377221,
        "margin": 644941,
        "ebitda": 330869,
        "loss": 4185104,
        "year": 2016,
        "business": 1859
    },
    {
        "id": 3715,
        "ca": 3293799,
        "margin": 762392,
        "ebitda": 874292,
        "loss": 3623463,
        "year": 2017,
        "business": 1860
    },
    {
        "id": 3716,
        "ca": 858506,
        "margin": 189441,
        "ebitda": 609871,
        "loss": 177061,
        "year": 2016,
        "business": 1860
    },
    {
        "id": 3717,
        "ca": 1952026,
        "margin": 105098,
        "ebitda": 802326,
        "loss": 5262609,
        "year": 2017,
        "business": 1861
    },
    {
        "id": 3718,
        "ca": 353809,
        "margin": 802651,
        "ebitda": 720150,
        "loss": 953096,
        "year": 2016,
        "business": 1861
    },
    {
        "id": 3719,
        "ca": 3812845,
        "margin": 536146,
        "ebitda": 197412,
        "loss": 3385756,
        "year": 2017,
        "business": 1862
    },
    {
        "id": 3720,
        "ca": 900740,
        "margin": 452037,
        "ebitda": 479167,
        "loss": 9372921,
        "year": 2016,
        "business": 1862
    },
    {
        "id": 3721,
        "ca": 1298429,
        "margin": 85209,
        "ebitda": 801714,
        "loss": 1874888,
        "year": 2017,
        "business": 1863
    },
    {
        "id": 3722,
        "ca": 3372389,
        "margin": -46817,
        "ebitda": 962766,
        "loss": 1038773,
        "year": 2016,
        "business": 1863
    },
    {
        "id": 3723,
        "ca": 1571590,
        "margin": 465195,
        "ebitda": 715373,
        "loss": 6767658,
        "year": 2017,
        "business": 1864
    },
    {
        "id": 3724,
        "ca": 1885922,
        "margin": 294164,
        "ebitda": 602655,
        "loss": 5395737,
        "year": 2016,
        "business": 1864
    },
    {
        "id": 3725,
        "ca": 609290,
        "margin": 476030,
        "ebitda": 414815,
        "loss": 650125,
        "year": 2017,
        "business": 1865
    },
    {
        "id": 3726,
        "ca": 383265,
        "margin": -109517,
        "ebitda": 516401,
        "loss": 7914729,
        "year": 2016,
        "business": 1865
    },
    {
        "id": 3727,
        "ca": 3646184,
        "margin": -117596,
        "ebitda": 904991,
        "loss": 369354,
        "year": 2017,
        "business": 1866
    },
    {
        "id": 3728,
        "ca": 215663,
        "margin": 343155,
        "ebitda": 914212,
        "loss": 386124,
        "year": 2016,
        "business": 1866
    },
    {
        "id": 3729,
        "ca": 3081311,
        "margin": 760359,
        "ebitda": 515188,
        "loss": 866840,
        "year": 2017,
        "business": 1867
    },
    {
        "id": 3730,
        "ca": 2987931,
        "margin": 94163,
        "ebitda": 833533,
        "loss": 2548828,
        "year": 2016,
        "business": 1867
    },
    {
        "id": 3731,
        "ca": 1918594,
        "margin": 608420,
        "ebitda": 48656,
        "loss": 3929717,
        "year": 2017,
        "business": 1868
    },
    {
        "id": 3732,
        "ca": 3838016,
        "margin": -125324,
        "ebitda": 689653,
        "loss": 5153326,
        "year": 2016,
        "business": 1868
    },
    {
        "id": 3733,
        "ca": 784201,
        "margin": 152713,
        "ebitda": 747400,
        "loss": 5136538,
        "year": 2017,
        "business": 1869
    },
    {
        "id": 3734,
        "ca": 503662,
        "margin": 920524,
        "ebitda": 630705,
        "loss": 2303495,
        "year": 2016,
        "business": 1869
    },
    {
        "id": 3735,
        "ca": 929090,
        "margin": 564220,
        "ebitda": 252906,
        "loss": 9746310,
        "year": 2017,
        "business": 1870
    },
    {
        "id": 3736,
        "ca": 2158639,
        "margin": 105807,
        "ebitda": 693906,
        "loss": 1359336,
        "year": 2016,
        "business": 1870
    },
    {
        "id": 3737,
        "ca": 812364,
        "margin": 960696,
        "ebitda": 949485,
        "loss": 6544371,
        "year": 2017,
        "business": 1871
    },
    {
        "id": 3738,
        "ca": 1407290,
        "margin": -47395,
        "ebitda": 670520,
        "loss": 8967033,
        "year": 2016,
        "business": 1871
    },
    {
        "id": 3739,
        "ca": 2153000,
        "margin": 438242,
        "ebitda": 139511,
        "loss": 2935698,
        "year": 2017,
        "business": 1872
    },
    {
        "id": 3740,
        "ca": 3740737,
        "margin": 220257,
        "ebitda": 664757,
        "loss": 9211966,
        "year": 2016,
        "business": 1872
    },
    {
        "id": 3741,
        "ca": 2818761,
        "margin": -33832,
        "ebitda": 788293,
        "loss": 5486323,
        "year": 2017,
        "business": 1873
    },
    {
        "id": 3742,
        "ca": 2834251,
        "margin": 591851,
        "ebitda": 979319,
        "loss": 8620705,
        "year": 2016,
        "business": 1873
    },
    {
        "id": 3743,
        "ca": 2529178,
        "margin": 197369,
        "ebitda": 886454,
        "loss": 7279257,
        "year": 2017,
        "business": 1874
    },
    {
        "id": 3744,
        "ca": 3546117,
        "margin": 244818,
        "ebitda": 645308,
        "loss": 6806083,
        "year": 2016,
        "business": 1874
    },
    {
        "id": 3745,
        "ca": 1429780,
        "margin": 799453,
        "ebitda": 36259,
        "loss": 3355722,
        "year": 2017,
        "business": 1875
    },
    {
        "id": 3746,
        "ca": 2099179,
        "margin": -54616,
        "ebitda": 527125,
        "loss": 5403606,
        "year": 2016,
        "business": 1875
    },
    {
        "id": 3747,
        "ca": 2889040,
        "margin": 703385,
        "ebitda": 752653,
        "loss": 8681358,
        "year": 2017,
        "business": 1876
    },
    {
        "id": 3748,
        "ca": 2258022,
        "margin": 871789,
        "ebitda": 822206,
        "loss": 1999996,
        "year": 2016,
        "business": 1876
    },
    {
        "id": 3749,
        "ca": 2567850,
        "margin": -114309,
        "ebitda": 803022,
        "loss": 3644955,
        "year": 2017,
        "business": 1877
    },
    {
        "id": 3750,
        "ca": 2327035,
        "margin": 651791,
        "ebitda": 325188,
        "loss": 5600022,
        "year": 2016,
        "business": 1877
    },
    {
        "id": 3751,
        "ca": 3175010,
        "margin": 303265,
        "ebitda": 16810,
        "loss": 5997395,
        "year": 2017,
        "business": 1878
    },
    {
        "id": 3752,
        "ca": 3837947,
        "margin": -136899,
        "ebitda": 927198,
        "loss": 80596,
        "year": 2016,
        "business": 1878
    },
    {
        "id": 3753,
        "ca": 234247,
        "margin": 953337,
        "ebitda": 591502,
        "loss": 5046849,
        "year": 2017,
        "business": 1879
    },
    {
        "id": 3754,
        "ca": 3641315,
        "margin": 184658,
        "ebitda": 732802,
        "loss": 8076404,
        "year": 2016,
        "business": 1879
    },
    {
        "id": 3755,
        "ca": 1656818,
        "margin": 595587,
        "ebitda": 289090,
        "loss": 2974264,
        "year": 2017,
        "business": 1880
    },
    {
        "id": 3756,
        "ca": 398030,
        "margin": 593684,
        "ebitda": 562458,
        "loss": 5755394,
        "year": 2016,
        "business": 1880
    },
    {
        "id": 3757,
        "ca": 888190,
        "margin": -133730,
        "ebitda": 753834,
        "loss": 3572235,
        "year": 2017,
        "business": 1881
    },
    {
        "id": 3758,
        "ca": 819653,
        "margin": 714896,
        "ebitda": 990159,
        "loss": 7031751,
        "year": 2016,
        "business": 1881
    },
    {
        "id": 3759,
        "ca": 1361366,
        "margin": 738358,
        "ebitda": 886639,
        "loss": 804053,
        "year": 2017,
        "business": 1882
    },
    {
        "id": 3760,
        "ca": 2006011,
        "margin": 84480,
        "ebitda": 49659,
        "loss": 4884748,
        "year": 2016,
        "business": 1882
    },
    {
        "id": 3761,
        "ca": 3441535,
        "margin": 889969,
        "ebitda": 889269,
        "loss": 8285903,
        "year": 2017,
        "business": 1883
    },
    {
        "id": 3762,
        "ca": 2323637,
        "margin": 566912,
        "ebitda": 736335,
        "loss": 1409551,
        "year": 2016,
        "business": 1883
    },
    {
        "id": 3763,
        "ca": 2369218,
        "margin": -73152,
        "ebitda": 655888,
        "loss": 2911597,
        "year": 2017,
        "business": 1884
    },
    {
        "id": 3764,
        "ca": 1149241,
        "margin": 97437,
        "ebitda": 64417,
        "loss": 3166514,
        "year": 2016,
        "business": 1884
    },
    {
        "id": 3765,
        "ca": 814328,
        "margin": -48315,
        "ebitda": 783356,
        "loss": 576601,
        "year": 2017,
        "business": 1885
    },
    {
        "id": 3766,
        "ca": 1365842,
        "margin": -14642,
        "ebitda": 646031,
        "loss": 5953844,
        "year": 2016,
        "business": 1885
    },
    {
        "id": 3767,
        "ca": 1834374,
        "margin": 326249,
        "ebitda": 959880,
        "loss": 7187013,
        "year": 2017,
        "business": 1886
    },
    {
        "id": 3768,
        "ca": 1192992,
        "margin": 334113,
        "ebitda": 549808,
        "loss": 2930291,
        "year": 2016,
        "business": 1886
    },
    {
        "id": 3769,
        "ca": 2801651,
        "margin": -28139,
        "ebitda": 297122,
        "loss": 4191837,
        "year": 2017,
        "business": 1887
    },
    {
        "id": 3770,
        "ca": 3314282,
        "margin": 641617,
        "ebitda": 995032,
        "loss": 8459886,
        "year": 2016,
        "business": 1887
    },
    {
        "id": 3771,
        "ca": 2598845,
        "margin": 289164,
        "ebitda": 137003,
        "loss": 6548481,
        "year": 2017,
        "business": 1888
    },
    {
        "id": 3772,
        "ca": 3324436,
        "margin": 611157,
        "ebitda": 665734,
        "loss": 8164744,
        "year": 2016,
        "business": 1888
    },
    {
        "id": 3773,
        "ca": 1793980,
        "margin": 857354,
        "ebitda": 364851,
        "loss": 2272533,
        "year": 2017,
        "business": 1889
    },
    {
        "id": 3774,
        "ca": 212326,
        "margin": 147161,
        "ebitda": 359990,
        "loss": 9366460,
        "year": 2016,
        "business": 1889
    },
    {
        "id": 3775,
        "ca": 3060129,
        "margin": -57748,
        "ebitda": 111143,
        "loss": 5801049,
        "year": 2017,
        "business": 1890
    },
    {
        "id": 3776,
        "ca": 2732443,
        "margin": -185117,
        "ebitda": 897047,
        "loss": 5541022,
        "year": 2016,
        "business": 1890
    },
    {
        "id": 3777,
        "ca": 3683294,
        "margin": -12673,
        "ebitda": 436741,
        "loss": 3246692,
        "year": 2017,
        "business": 1891
    },
    {
        "id": 3778,
        "ca": 985195,
        "margin": 220215,
        "ebitda": 765111,
        "loss": 2435349,
        "year": 2016,
        "business": 1891
    },
    {
        "id": 3779,
        "ca": 1059793,
        "margin": 925668,
        "ebitda": 29499,
        "loss": 6657054,
        "year": 2017,
        "business": 1892
    },
    {
        "id": 3780,
        "ca": 3867970,
        "margin": 127172,
        "ebitda": 262415,
        "loss": 4816646,
        "year": 2016,
        "business": 1892
    },
    {
        "id": 3781,
        "ca": 1463808,
        "margin": 348258,
        "ebitda": 590048,
        "loss": 4065483,
        "year": 2017,
        "business": 1893
    },
    {
        "id": 3782,
        "ca": 1359073,
        "margin": 437928,
        "ebitda": 454686,
        "loss": 5863600,
        "year": 2016,
        "business": 1893
    },
    {
        "id": 3783,
        "ca": 824151,
        "margin": 966975,
        "ebitda": 688976,
        "loss": 4876715,
        "year": 2017,
        "business": 1894
    },
    {
        "id": 3784,
        "ca": 2072963,
        "margin": 185234,
        "ebitda": 496657,
        "loss": 6646201,
        "year": 2016,
        "business": 1894
    },
    {
        "id": 3785,
        "ca": 941673,
        "margin": 378932,
        "ebitda": 896642,
        "loss": 7541673,
        "year": 2017,
        "business": 1895
    },
    {
        "id": 3786,
        "ca": 3564685,
        "margin": 123815,
        "ebitda": 496294,
        "loss": 3757149,
        "year": 2016,
        "business": 1895
    },
    {
        "id": 3787,
        "ca": 3579908,
        "margin": 854056,
        "ebitda": 875551,
        "loss": 7027042,
        "year": 2017,
        "business": 1896
    },
    {
        "id": 3788,
        "ca": 3856568,
        "margin": 150722,
        "ebitda": 991135,
        "loss": 1980958,
        "year": 2016,
        "business": 1896
    },
    {
        "id": 3789,
        "ca": 1688779,
        "margin": -159723,
        "ebitda": 127885,
        "loss": 9553725,
        "year": 2017,
        "business": 1897
    },
    {
        "id": 3790,
        "ca": 2615968,
        "margin": 896077,
        "ebitda": 32744,
        "loss": 3546095,
        "year": 2016,
        "business": 1897
    },
    {
        "id": 3791,
        "ca": 699746,
        "margin": 91275,
        "ebitda": 400593,
        "loss": 3032962,
        "year": 2017,
        "business": 1898
    },
    {
        "id": 3792,
        "ca": 3004201,
        "margin": 439139,
        "ebitda": 203405,
        "loss": 903996,
        "year": 2016,
        "business": 1898
    },
    {
        "id": 3793,
        "ca": 585224,
        "margin": 146590,
        "ebitda": 695672,
        "loss": 211200,
        "year": 2017,
        "business": 1899
    },
    {
        "id": 3794,
        "ca": 3866780,
        "margin": 675857,
        "ebitda": 365233,
        "loss": 8891632,
        "year": 2016,
        "business": 1899
    },
    {
        "id": 3795,
        "ca": 809248,
        "margin": 333878,
        "ebitda": 816467,
        "loss": 8691711,
        "year": 2017,
        "business": 1900
    },
    {
        "id": 3796,
        "ca": 2637226,
        "margin": 319549,
        "ebitda": 91713,
        "loss": 3167156,
        "year": 2016,
        "business": 1900
    },
    {
        "id": 3797,
        "ca": 3778638,
        "margin": 334773,
        "ebitda": 679137,
        "loss": 7806071,
        "year": 2017,
        "business": 1901
    },
    {
        "id": 3798,
        "ca": 3497909,
        "margin": 319175,
        "ebitda": 450324,
        "loss": 4784609,
        "year": 2016,
        "business": 1901
    },
    {
        "id": 3799,
        "ca": 2425895,
        "margin": -36097,
        "ebitda": 510250,
        "loss": 4585429,
        "year": 2017,
        "business": 1902
    },
    {
        "id": 3800,
        "ca": 2291345,
        "margin": 82259,
        "ebitda": 699924,
        "loss": 7475043,
        "year": 2016,
        "business": 1902
    },
    {
        "id": 3801,
        "ca": 3506766,
        "margin": 274133,
        "ebitda": 34174,
        "loss": 3677732,
        "year": 2017,
        "business": 1903
    },
    {
        "id": 3802,
        "ca": 3282506,
        "margin": 259763,
        "ebitda": 103786,
        "loss": 6295907,
        "year": 2016,
        "business": 1903
    },
    {
        "id": 3803,
        "ca": 2909729,
        "margin": 369706,
        "ebitda": 85593,
        "loss": 3061624,
        "year": 2017,
        "business": 1904
    },
    {
        "id": 3804,
        "ca": 3276126,
        "margin": 288118,
        "ebitda": 993894,
        "loss": 2191412,
        "year": 2016,
        "business": 1904
    },
    {
        "id": 3805,
        "ca": 3587822,
        "margin": 74700,
        "ebitda": 522215,
        "loss": 6140731,
        "year": 2017,
        "business": 1905
    },
    {
        "id": 3806,
        "ca": 1583816,
        "margin": 570319,
        "ebitda": 574093,
        "loss": 5758950,
        "year": 2016,
        "business": 1905
    },
    {
        "id": 3807,
        "ca": 2661473,
        "margin": 917155,
        "ebitda": 431477,
        "loss": 9398696,
        "year": 2017,
        "business": 1906
    },
    {
        "id": 3808,
        "ca": 3912135,
        "margin": -79026,
        "ebitda": 907216,
        "loss": 5839494,
        "year": 2016,
        "business": 1906
    },
    {
        "id": 3809,
        "ca": 3916482,
        "margin": 789171,
        "ebitda": 591525,
        "loss": 4337407,
        "year": 2017,
        "business": 1907
    },
    {
        "id": 3810,
        "ca": 2851391,
        "margin": 154011,
        "ebitda": 75755,
        "loss": 4917589,
        "year": 2016,
        "business": 1907
    },
    {
        "id": 3811,
        "ca": 3877874,
        "margin": -64877,
        "ebitda": 283661,
        "loss": 8850825,
        "year": 2017,
        "business": 1908
    },
    {
        "id": 3812,
        "ca": 1780165,
        "margin": 627707,
        "ebitda": 188020,
        "loss": 4142561,
        "year": 2016,
        "business": 1908
    },
    {
        "id": 3813,
        "ca": 904887,
        "margin": 161426,
        "ebitda": 560772,
        "loss": 6954504,
        "year": 2017,
        "business": 1909
    },
    {
        "id": 3814,
        "ca": 675847,
        "margin": 233939,
        "ebitda": 339451,
        "loss": 8460591,
        "year": 2016,
        "business": 1909
    },
    {
        "id": 3815,
        "ca": 1258712,
        "margin": 193533,
        "ebitda": 133533,
        "loss": 2318027,
        "year": 2017,
        "business": 1910
    },
    {
        "id": 3816,
        "ca": 3082650,
        "margin": 728343,
        "ebitda": 380527,
        "loss": 4210061,
        "year": 2016,
        "business": 1910
    },
    {
        "id": 3817,
        "ca": 2145984,
        "margin": 192499,
        "ebitda": 678170,
        "loss": 2268864,
        "year": 2017,
        "business": 1911
    },
    {
        "id": 3818,
        "ca": 3810752,
        "margin": 501467,
        "ebitda": 529022,
        "loss": 3323238,
        "year": 2016,
        "business": 1911
    },
    {
        "id": 3819,
        "ca": 3393679,
        "margin": 512183,
        "ebitda": 633008,
        "loss": 73604,
        "year": 2017,
        "business": 1912
    },
    {
        "id": 3820,
        "ca": 2760846,
        "margin": 190767,
        "ebitda": 817737,
        "loss": 9471846,
        "year": 2016,
        "business": 1912
    },
    {
        "id": 3821,
        "ca": 490523,
        "margin": 144313,
        "ebitda": 564730,
        "loss": 8367688,
        "year": 2017,
        "business": 1913
    },
    {
        "id": 3822,
        "ca": 2068840,
        "margin": 114319,
        "ebitda": 650235,
        "loss": 8027168,
        "year": 2016,
        "business": 1913
    },
    {
        "id": 3823,
        "ca": 1512775,
        "margin": 940569,
        "ebitda": 603753,
        "loss": 206523,
        "year": 2017,
        "business": 1914
    },
    {
        "id": 3824,
        "ca": 2148636,
        "margin": 113689,
        "ebitda": 649884,
        "loss": 1327309,
        "year": 2016,
        "business": 1914
    },
    {
        "id": 3825,
        "ca": 2439582,
        "margin": 944973,
        "ebitda": 341871,
        "loss": 5177689,
        "year": 2017,
        "business": 1915
    },
    {
        "id": 3826,
        "ca": 2198174,
        "margin": 771806,
        "ebitda": 980122,
        "loss": 9350034,
        "year": 2016,
        "business": 1915
    },
    {
        "id": 3827,
        "ca": 3659120,
        "margin": 779837,
        "ebitda": 305681,
        "loss": 9238657,
        "year": 2017,
        "business": 1916
    },
    {
        "id": 3828,
        "ca": 979885,
        "margin": 290030,
        "ebitda": 902063,
        "loss": 4866811,
        "year": 2016,
        "business": 1916
    },
    {
        "id": 3829,
        "ca": 237512,
        "margin": -173455,
        "ebitda": 382060,
        "loss": 8829098,
        "year": 2017,
        "business": 1917
    },
    {
        "id": 3830,
        "ca": 2664685,
        "margin": 307524,
        "ebitda": 569126,
        "loss": 2712404,
        "year": 2016,
        "business": 1917
    },
    {
        "id": 3831,
        "ca": 3103484,
        "margin": 590803,
        "ebitda": 619969,
        "loss": 3865183,
        "year": 2017,
        "business": 1918
    },
    {
        "id": 3832,
        "ca": 3017136,
        "margin": 84984,
        "ebitda": 240512,
        "loss": 4807954,
        "year": 2016,
        "business": 1918
    },
    {
        "id": 3833,
        "ca": 3912615,
        "margin": -117225,
        "ebitda": 445707,
        "loss": 5775246,
        "year": 2017,
        "business": 1919
    },
    {
        "id": 3834,
        "ca": 1049888,
        "margin": 256288,
        "ebitda": 478302,
        "loss": 4897795,
        "year": 2016,
        "business": 1919
    },
    {
        "id": 3835,
        "ca": 3659084,
        "margin": 834841,
        "ebitda": 111987,
        "loss": 1501108,
        "year": 2017,
        "business": 1920
    },
    {
        "id": 3836,
        "ca": 1948201,
        "margin": 721214,
        "ebitda": 419050,
        "loss": 227777,
        "year": 2016,
        "business": 1920
    },
    {
        "id": 3837,
        "ca": 2468229,
        "margin": 265421,
        "ebitda": 302920,
        "loss": 6742927,
        "year": 2017,
        "business": 1921
    },
    {
        "id": 3838,
        "ca": 981901,
        "margin": 790569,
        "ebitda": 582045,
        "loss": 7632615,
        "year": 2016,
        "business": 1921
    },
    {
        "id": 3839,
        "ca": 2887913,
        "margin": 228444,
        "ebitda": 728088,
        "loss": 3141232,
        "year": 2017,
        "business": 1922
    },
    {
        "id": 3840,
        "ca": 189415,
        "margin": 806284,
        "ebitda": 356532,
        "loss": 3905434,
        "year": 2016,
        "business": 1922
    },
    {
        "id": 3841,
        "ca": 3800083,
        "margin": -89532,
        "ebitda": 327736,
        "loss": 6824193,
        "year": 2017,
        "business": 1923
    },
    {
        "id": 3842,
        "ca": 1908162,
        "margin": 431094,
        "ebitda": 25992,
        "loss": 9595756,
        "year": 2016,
        "business": 1923
    },
    {
        "id": 3843,
        "ca": 3745483,
        "margin": 75040,
        "ebitda": 162296,
        "loss": 3479762,
        "year": 2017,
        "business": 1924
    },
    {
        "id": 3844,
        "ca": 343820,
        "margin": 20513,
        "ebitda": 59485,
        "loss": 5856270,
        "year": 2016,
        "business": 1924
    },
    {
        "id": 3845,
        "ca": 3425132,
        "margin": -158363,
        "ebitda": 693691,
        "loss": 3120330,
        "year": 2017,
        "business": 1925
    },
    {
        "id": 3846,
        "ca": 822070,
        "margin": 84604,
        "ebitda": 656191,
        "loss": 7205276,
        "year": 2016,
        "business": 1925
    },
    {
        "id": 3847,
        "ca": 655614,
        "margin": -52212,
        "ebitda": 269990,
        "loss": 1615367,
        "year": 2017,
        "business": 1926
    },
    {
        "id": 3848,
        "ca": 2728842,
        "margin": 160237,
        "ebitda": 185348,
        "loss": 4906909,
        "year": 2016,
        "business": 1926
    },
    {
        "id": 3849,
        "ca": 2447276,
        "margin": 759527,
        "ebitda": 264569,
        "loss": 7761164,
        "year": 2017,
        "business": 1927
    },
    {
        "id": 3850,
        "ca": 1386121,
        "margin": 113756,
        "ebitda": 957702,
        "loss": 9364683,
        "year": 2016,
        "business": 1927
    },
    {
        "id": 3851,
        "ca": 3416004,
        "margin": 786426,
        "ebitda": 707607,
        "loss": 23276,
        "year": 2017,
        "business": 1928
    },
    {
        "id": 3852,
        "ca": 2612412,
        "margin": -199540,
        "ebitda": 691088,
        "loss": 2221698,
        "year": 2016,
        "business": 1928
    },
    {
        "id": 3853,
        "ca": 2234315,
        "margin": 854793,
        "ebitda": 497843,
        "loss": 1765597,
        "year": 2017,
        "business": 1929
    },
    {
        "id": 3854,
        "ca": 2195485,
        "margin": 482912,
        "ebitda": 496411,
        "loss": 1351504,
        "year": 2016,
        "business": 1929
    },
    {
        "id": 3855,
        "ca": 3192822,
        "margin": 218034,
        "ebitda": 176043,
        "loss": 1017293,
        "year": 2017,
        "business": 1930
    },
    {
        "id": 3856,
        "ca": 3860272,
        "margin": 508122,
        "ebitda": 427761,
        "loss": 2805201,
        "year": 2016,
        "business": 1930
    },
    {
        "id": 3857,
        "ca": 3200566,
        "margin": -185746,
        "ebitda": 195282,
        "loss": 5455395,
        "year": 2017,
        "business": 1931
    },
    {
        "id": 3858,
        "ca": 3857386,
        "margin": -69191,
        "ebitda": 810974,
        "loss": 5892310,
        "year": 2016,
        "business": 1931
    },
    {
        "id": 3859,
        "ca": 1962652,
        "margin": -154905,
        "ebitda": 25111,
        "loss": 8546105,
        "year": 2017,
        "business": 1932
    },
    {
        "id": 3860,
        "ca": 3195779,
        "margin": 951399,
        "ebitda": 867936,
        "loss": 5735554,
        "year": 2016,
        "business": 1932
    },
    {
        "id": 3861,
        "ca": 1644293,
        "margin": 673942,
        "ebitda": 903520,
        "loss": 4987871,
        "year": 2017,
        "business": 1933
    },
    {
        "id": 3862,
        "ca": 1470234,
        "margin": 829962,
        "ebitda": 51651,
        "loss": 8454350,
        "year": 2016,
        "business": 1933
    },
    {
        "id": 3863,
        "ca": 2826282,
        "margin": 649836,
        "ebitda": 509479,
        "loss": 6041428,
        "year": 2017,
        "business": 1934
    },
    {
        "id": 3864,
        "ca": 245755,
        "margin": 587147,
        "ebitda": 594271,
        "loss": 6957641,
        "year": 2016,
        "business": 1934
    },
    {
        "id": 3865,
        "ca": 3327290,
        "margin": 899824,
        "ebitda": 550704,
        "loss": 1504113,
        "year": 2017,
        "business": 1935
    },
    {
        "id": 3866,
        "ca": 341283,
        "margin": 119743,
        "ebitda": 570573,
        "loss": 55269,
        "year": 2016,
        "business": 1935
    },
    {
        "id": 3867,
        "ca": 462668,
        "margin": 604230,
        "ebitda": 356528,
        "loss": 8071941,
        "year": 2017,
        "business": 1936
    },
    {
        "id": 3868,
        "ca": 3380896,
        "margin": 756817,
        "ebitda": 99705,
        "loss": 9239734,
        "year": 2016,
        "business": 1936
    },
    {
        "id": 3869,
        "ca": 1135055,
        "margin": 443478,
        "ebitda": 546961,
        "loss": 9210909,
        "year": 2017,
        "business": 1937
    },
    {
        "id": 3870,
        "ca": 545741,
        "margin": -98098,
        "ebitda": 957298,
        "loss": 9236643,
        "year": 2016,
        "business": 1937
    },
    {
        "id": 3871,
        "ca": 2127852,
        "margin": -43695,
        "ebitda": 825959,
        "loss": 5476726,
        "year": 2017,
        "business": 1938
    },
    {
        "id": 3872,
        "ca": 3590326,
        "margin": 586725,
        "ebitda": 577118,
        "loss": 3504338,
        "year": 2016,
        "business": 1938
    },
    {
        "id": 3873,
        "ca": 2778639,
        "margin": -140897,
        "ebitda": 777472,
        "loss": 7785753,
        "year": 2017,
        "business": 1939
    },
    {
        "id": 3874,
        "ca": 2613872,
        "margin": 297422,
        "ebitda": 247167,
        "loss": 2497521,
        "year": 2016,
        "business": 1939
    },
    {
        "id": 3875,
        "ca": 3688832,
        "margin": 975240,
        "ebitda": 846552,
        "loss": 4088075,
        "year": 2017,
        "business": 1940
    },
    {
        "id": 3876,
        "ca": 1969358,
        "margin": 460144,
        "ebitda": 102752,
        "loss": 3499302,
        "year": 2016,
        "business": 1940
    },
    {
        "id": 3877,
        "ca": 2470780,
        "margin": 961928,
        "ebitda": 924211,
        "loss": 3421789,
        "year": 2017,
        "business": 1941
    },
    {
        "id": 3878,
        "ca": 224960,
        "margin": -119746,
        "ebitda": 372508,
        "loss": 3206750,
        "year": 2016,
        "business": 1941
    },
    {
        "id": 3879,
        "ca": 2764252,
        "margin": 529821,
        "ebitda": 114227,
        "loss": 5435275,
        "year": 2017,
        "business": 1942
    },
    {
        "id": 3880,
        "ca": 3652719,
        "margin": 405054,
        "ebitda": 531878,
        "loss": 2135356,
        "year": 2016,
        "business": 1942
    },
    {
        "id": 3881,
        "ca": 2185450,
        "margin": 931264,
        "ebitda": 662242,
        "loss": 1313372,
        "year": 2017,
        "business": 1943
    },
    {
        "id": 3882,
        "ca": 1044919,
        "margin": 516351,
        "ebitda": 784607,
        "loss": 6096208,
        "year": 2016,
        "business": 1943
    },
    {
        "id": 3883,
        "ca": 259137,
        "margin": -18515,
        "ebitda": 299908,
        "loss": 3178418,
        "year": 2017,
        "business": 1944
    },
    {
        "id": 3884,
        "ca": 2534435,
        "margin": 956966,
        "ebitda": 416290,
        "loss": 1027510,
        "year": 2016,
        "business": 1944
    },
    {
        "id": 3885,
        "ca": 1162815,
        "margin": -14235,
        "ebitda": 398776,
        "loss": 8756129,
        "year": 2017,
        "business": 1945
    },
    {
        "id": 3886,
        "ca": 459280,
        "margin": 193369,
        "ebitda": 207787,
        "loss": 1827340,
        "year": 2016,
        "business": 1945
    },
    {
        "id": 3887,
        "ca": 2620136,
        "margin": -101904,
        "ebitda": 479649,
        "loss": 7479609,
        "year": 2017,
        "business": 1946
    },
    {
        "id": 3888,
        "ca": 3287400,
        "margin": -151678,
        "ebitda": 813570,
        "loss": 1946322,
        "year": 2016,
        "business": 1946
    },
    {
        "id": 3889,
        "ca": 1140344,
        "margin": 723390,
        "ebitda": 100896,
        "loss": 1688200,
        "year": 2017,
        "business": 1947
    },
    {
        "id": 3890,
        "ca": 2717260,
        "margin": 210390,
        "ebitda": 676120,
        "loss": 2957295,
        "year": 2016,
        "business": 1947
    },
    {
        "id": 3891,
        "ca": 2538329,
        "margin": 734860,
        "ebitda": 508364,
        "loss": 451322,
        "year": 2017,
        "business": 1948
    },
    {
        "id": 3892,
        "ca": 2189921,
        "margin": 626527,
        "ebitda": 233808,
        "loss": 7066105,
        "year": 2016,
        "business": 1948
    },
    {
        "id": 3893,
        "ca": 3065956,
        "margin": -195154,
        "ebitda": 177226,
        "loss": 6948108,
        "year": 2017,
        "business": 1949
    },
    {
        "id": 3894,
        "ca": 3195702,
        "margin": -69009,
        "ebitda": 114003,
        "loss": 5127790,
        "year": 2016,
        "business": 1949
    },
    {
        "id": 3895,
        "ca": 422978,
        "margin": 94559,
        "ebitda": 823744,
        "loss": 3359150,
        "year": 2017,
        "business": 1950
    },
    {
        "id": 3896,
        "ca": 208146,
        "margin": 57654,
        "ebitda": 640763,
        "loss": 183093,
        "year": 2016,
        "business": 1950
    },
    {
        "id": 3897,
        "ca": 972570,
        "margin": 629649,
        "ebitda": 37940,
        "loss": 8979978,
        "year": 2017,
        "business": 1951
    },
    {
        "id": 3898,
        "ca": 396800,
        "margin": 834123,
        "ebitda": 67102,
        "loss": 7209932,
        "year": 2016,
        "business": 1951
    },
    {
        "id": 3899,
        "ca": 2943058,
        "margin": 215243,
        "ebitda": 48482,
        "loss": 4402355,
        "year": 2017,
        "business": 1952
    },
    {
        "id": 3900,
        "ca": 3257610,
        "margin": 320457,
        "ebitda": 263553,
        "loss": 4910999,
        "year": 2016,
        "business": 1952
    },
    {
        "id": 3901,
        "ca": 2664114,
        "margin": 490145,
        "ebitda": 36829,
        "loss": 6897664,
        "year": 2017,
        "business": 1953
    },
    {
        "id": 3902,
        "ca": 1131974,
        "margin": -42196,
        "ebitda": 313290,
        "loss": 9926057,
        "year": 2016,
        "business": 1953
    },
    {
        "id": 3903,
        "ca": 1941867,
        "margin": 471839,
        "ebitda": 13173,
        "loss": 7905781,
        "year": 2017,
        "business": 1954
    },
    {
        "id": 3904,
        "ca": 331860,
        "margin": 690879,
        "ebitda": 662024,
        "loss": 6624351,
        "year": 2016,
        "business": 1954
    },
    {
        "id": 3905,
        "ca": 3125130,
        "margin": 744785,
        "ebitda": 447239,
        "loss": 7954513,
        "year": 2017,
        "business": 1955
    },
    {
        "id": 3906,
        "ca": 1776670,
        "margin": 335968,
        "ebitda": 530468,
        "loss": 7222889,
        "year": 2016,
        "business": 1955
    },
    {
        "id": 3907,
        "ca": 742960,
        "margin": 858653,
        "ebitda": 281458,
        "loss": 3466749,
        "year": 2017,
        "business": 1956
    },
    {
        "id": 3908,
        "ca": 707651,
        "margin": 759887,
        "ebitda": 88486,
        "loss": 8495068,
        "year": 2016,
        "business": 1956
    },
    {
        "id": 3909,
        "ca": 3789623,
        "margin": 594833,
        "ebitda": 468811,
        "loss": 4259578,
        "year": 2017,
        "business": 1957
    },
    {
        "id": 3910,
        "ca": 2673438,
        "margin": -174464,
        "ebitda": 146370,
        "loss": 3437376,
        "year": 2016,
        "business": 1957
    },
    {
        "id": 3911,
        "ca": 3983091,
        "margin": 321894,
        "ebitda": 468394,
        "loss": 3598738,
        "year": 2017,
        "business": 1958
    },
    {
        "id": 3912,
        "ca": 2155612,
        "margin": -90426,
        "ebitda": 135069,
        "loss": 7570748,
        "year": 2016,
        "business": 1958
    },
    {
        "id": 3913,
        "ca": 3356712,
        "margin": 434919,
        "ebitda": 545026,
        "loss": 493058,
        "year": 2017,
        "business": 1959
    },
    {
        "id": 3914,
        "ca": 3389973,
        "margin": 434454,
        "ebitda": 498436,
        "loss": 5510423,
        "year": 2016,
        "business": 1959
    },
    {
        "id": 3915,
        "ca": 2478546,
        "margin": 961503,
        "ebitda": 857657,
        "loss": 8775511,
        "year": 2017,
        "business": 1960
    },
    {
        "id": 3916,
        "ca": 938287,
        "margin": -55114,
        "ebitda": 950421,
        "loss": 4285809,
        "year": 2016,
        "business": 1960
    },
    {
        "id": 3917,
        "ca": 1968605,
        "margin": -125632,
        "ebitda": 475499,
        "loss": 812398,
        "year": 2017,
        "business": 1961
    },
    {
        "id": 3918,
        "ca": 3267318,
        "margin": 842626,
        "ebitda": 764070,
        "loss": 5126685,
        "year": 2016,
        "business": 1961
    },
    {
        "id": 3919,
        "ca": 3801438,
        "margin": -153083,
        "ebitda": 245354,
        "loss": 2158373,
        "year": 2017,
        "business": 1962
    },
    {
        "id": 3920,
        "ca": 3778888,
        "margin": 127422,
        "ebitda": 594834,
        "loss": 4421471,
        "year": 2016,
        "business": 1962
    },
    {
        "id": 3921,
        "ca": 3416590,
        "margin": -157804,
        "ebitda": 343015,
        "loss": 7227365,
        "year": 2017,
        "business": 1963
    },
    {
        "id": 3922,
        "ca": 377108,
        "margin": -138893,
        "ebitda": 871520,
        "loss": 9007279,
        "year": 2016,
        "business": 1963
    },
    {
        "id": 3923,
        "ca": 2568272,
        "margin": 984764,
        "ebitda": 373439,
        "loss": 9908569,
        "year": 2017,
        "business": 1964
    },
    {
        "id": 3924,
        "ca": 2921971,
        "margin": 977489,
        "ebitda": 449249,
        "loss": 6869930,
        "year": 2016,
        "business": 1964
    },
    {
        "id": 3925,
        "ca": 1355013,
        "margin": 850802,
        "ebitda": 11507,
        "loss": 6313235,
        "year": 2017,
        "business": 1965
    },
    {
        "id": 3926,
        "ca": 830234,
        "margin": -183139,
        "ebitda": 848478,
        "loss": 4909293,
        "year": 2016,
        "business": 1965
    },
    {
        "id": 3927,
        "ca": 2840236,
        "margin": 440627,
        "ebitda": 163252,
        "loss": 3711355,
        "year": 2017,
        "business": 1966
    },
    {
        "id": 3928,
        "ca": 2589957,
        "margin": 249459,
        "ebitda": 93916,
        "loss": 3213459,
        "year": 2016,
        "business": 1966
    },
    {
        "id": 3929,
        "ca": 2549056,
        "margin": -85700,
        "ebitda": 5389,
        "loss": 2116436,
        "year": 2017,
        "business": 1967
    },
    {
        "id": 3930,
        "ca": 3944708,
        "margin": 719236,
        "ebitda": 173232,
        "loss": 1386439,
        "year": 2016,
        "business": 1967
    },
    {
        "id": 3931,
        "ca": 437190,
        "margin": 493156,
        "ebitda": 157659,
        "loss": 7395462,
        "year": 2017,
        "business": 1968
    },
    {
        "id": 3932,
        "ca": 1065528,
        "margin": 763303,
        "ebitda": 373006,
        "loss": 1495155,
        "year": 2016,
        "business": 1968
    },
    {
        "id": 3933,
        "ca": 3755756,
        "margin": 262148,
        "ebitda": 913094,
        "loss": 1041892,
        "year": 2017,
        "business": 1969
    },
    {
        "id": 3934,
        "ca": 2234815,
        "margin": 852632,
        "ebitda": 974573,
        "loss": 9917319,
        "year": 2016,
        "business": 1969
    },
    {
        "id": 3935,
        "ca": 3946624,
        "margin": 34429,
        "ebitda": 402147,
        "loss": 111655,
        "year": 2017,
        "business": 1970
    },
    {
        "id": 3936,
        "ca": 3681572,
        "margin": -8227,
        "ebitda": 626437,
        "loss": 4923464,
        "year": 2016,
        "business": 1970
    },
    {
        "id": 3937,
        "ca": 1005335,
        "margin": 368433,
        "ebitda": 550062,
        "loss": 900926,
        "year": 2017,
        "business": 1971
    },
    {
        "id": 3938,
        "ca": 888539,
        "margin": 94321,
        "ebitda": 784603,
        "loss": 5320548,
        "year": 2016,
        "business": 1971
    },
    {
        "id": 3939,
        "ca": 2395166,
        "margin": 969533,
        "ebitda": 71778,
        "loss": 2587520,
        "year": 2017,
        "business": 1972
    },
    {
        "id": 3940,
        "ca": 3616153,
        "margin": 226390,
        "ebitda": 991195,
        "loss": 2094547,
        "year": 2016,
        "business": 1972
    },
    {
        "id": 3941,
        "ca": 422266,
        "margin": 682533,
        "ebitda": 431425,
        "loss": 6597671,
        "year": 2017,
        "business": 1973
    },
    {
        "id": 3942,
        "ca": 3342599,
        "margin": 218946,
        "ebitda": 392966,
        "loss": 1752443,
        "year": 2016,
        "business": 1973
    },
    {
        "id": 3943,
        "ca": 2782561,
        "margin": 777578,
        "ebitda": 930379,
        "loss": 8318681,
        "year": 2017,
        "business": 1974
    },
    {
        "id": 3944,
        "ca": 3787599,
        "margin": 645089,
        "ebitda": 267539,
        "loss": 2980623,
        "year": 2016,
        "business": 1974
    },
    {
        "id": 3945,
        "ca": 1550625,
        "margin": -85942,
        "ebitda": 907511,
        "loss": 3183937,
        "year": 2017,
        "business": 1975
    },
    {
        "id": 3946,
        "ca": 712133,
        "margin": 968052,
        "ebitda": 132100,
        "loss": 1854200,
        "year": 2016,
        "business": 1975
    },
    {
        "id": 3947,
        "ca": 692862,
        "margin": 690260,
        "ebitda": 169366,
        "loss": 1084,
        "year": 2017,
        "business": 1976
    },
    {
        "id": 3948,
        "ca": 3019123,
        "margin": 16984,
        "ebitda": 191909,
        "loss": 8781499,
        "year": 2016,
        "business": 1976
    },
    {
        "id": 3949,
        "ca": 3888122,
        "margin": 403405,
        "ebitda": 860517,
        "loss": 2219960,
        "year": 2017,
        "business": 1977
    },
    {
        "id": 3950,
        "ca": 3486309,
        "margin": 941118,
        "ebitda": 792651,
        "loss": 5300191,
        "year": 2016,
        "business": 1977
    },
    {
        "id": 3951,
        "ca": 1927731,
        "margin": 429683,
        "ebitda": 191211,
        "loss": 7817217,
        "year": 2017,
        "business": 1978
    },
    {
        "id": 3952,
        "ca": 3277944,
        "margin": 627776,
        "ebitda": 459614,
        "loss": 3720740,
        "year": 2016,
        "business": 1978
    },
    {
        "id": 3953,
        "ca": 882814,
        "margin": 758601,
        "ebitda": 216464,
        "loss": 4544052,
        "year": 2017,
        "business": 1979
    },
    {
        "id": 3954,
        "ca": 2631088,
        "margin": 956106,
        "ebitda": 622017,
        "loss": 8809182,
        "year": 2016,
        "business": 1979
    },
    {
        "id": 3955,
        "ca": 3444784,
        "margin": 195522,
        "ebitda": 376220,
        "loss": 2911014,
        "year": 2017,
        "business": 1980
    },
    {
        "id": 3956,
        "ca": 682068,
        "margin": 269857,
        "ebitda": 464165,
        "loss": 192658,
        "year": 2016,
        "business": 1980
    },
    {
        "id": 3957,
        "ca": 2562170,
        "margin": 81679,
        "ebitda": 799147,
        "loss": 5478487,
        "year": 2017,
        "business": 1981
    },
    {
        "id": 3958,
        "ca": 1890803,
        "margin": 59146,
        "ebitda": 630618,
        "loss": 8869806,
        "year": 2016,
        "business": 1981
    },
    {
        "id": 3959,
        "ca": 681126,
        "margin": 376036,
        "ebitda": 167727,
        "loss": 4979890,
        "year": 2017,
        "business": 1982
    },
    {
        "id": 3960,
        "ca": 2944448,
        "margin": 994337,
        "ebitda": 79204,
        "loss": 6921074,
        "year": 2016,
        "business": 1982
    },
    {
        "id": 3961,
        "ca": 585068,
        "margin": 225329,
        "ebitda": 90207,
        "loss": 6434449,
        "year": 2017,
        "business": 1983
    },
    {
        "id": 3962,
        "ca": 1204281,
        "margin": 854108,
        "ebitda": 966444,
        "loss": 8562260,
        "year": 2016,
        "business": 1983
    },
    {
        "id": 3963,
        "ca": 893560,
        "margin": 97802,
        "ebitda": 904144,
        "loss": 3800312,
        "year": 2017,
        "business": 1984
    },
    {
        "id": 3964,
        "ca": 2349739,
        "margin": 434666,
        "ebitda": 56349,
        "loss": 561275,
        "year": 2016,
        "business": 1984
    },
    {
        "id": 3965,
        "ca": 1614918,
        "margin": 382197,
        "ebitda": 844139,
        "loss": 5643268,
        "year": 2017,
        "business": 1985
    },
    {
        "id": 3966,
        "ca": 3785592,
        "margin": 665218,
        "ebitda": 469223,
        "loss": 6358594,
        "year": 2016,
        "business": 1985
    },
    {
        "id": 3967,
        "ca": 1392867,
        "margin": 368445,
        "ebitda": 46335,
        "loss": 9507259,
        "year": 2017,
        "business": 1986
    },
    {
        "id": 3968,
        "ca": 1757963,
        "margin": 725923,
        "ebitda": 403027,
        "loss": 8971658,
        "year": 2016,
        "business": 1986
    },
    {
        "id": 3969,
        "ca": 1341838,
        "margin": 754167,
        "ebitda": 335288,
        "loss": 3878838,
        "year": 2017,
        "business": 1987
    },
    {
        "id": 3970,
        "ca": 2619963,
        "margin": -83882,
        "ebitda": 126462,
        "loss": 1145383,
        "year": 2016,
        "business": 1987
    },
    {
        "id": 3971,
        "ca": 2437096,
        "margin": 487616,
        "ebitda": 912412,
        "loss": 6760181,
        "year": 2017,
        "business": 1988
    },
    {
        "id": 3972,
        "ca": 316486,
        "margin": 139218,
        "ebitda": 224389,
        "loss": 603330,
        "year": 2016,
        "business": 1988
    },
    {
        "id": 3973,
        "ca": 2921327,
        "margin": 373338,
        "ebitda": 511463,
        "loss": 4733450,
        "year": 2017,
        "business": 1989
    },
    {
        "id": 3974,
        "ca": 2505362,
        "margin": 187809,
        "ebitda": 122822,
        "loss": 1032870,
        "year": 2016,
        "business": 1989
    },
    {
        "id": 3975,
        "ca": 2126856,
        "margin": 877768,
        "ebitda": 847746,
        "loss": 4021009,
        "year": 2017,
        "business": 1990
    },
    {
        "id": 3976,
        "ca": 1477996,
        "margin": 45120,
        "ebitda": 972963,
        "loss": 2583371,
        "year": 2016,
        "business": 1990
    },
    {
        "id": 3977,
        "ca": 2432945,
        "margin": 291324,
        "ebitda": 683014,
        "loss": 7616154,
        "year": 2017,
        "business": 1991
    },
    {
        "id": 3978,
        "ca": 3769832,
        "margin": 216140,
        "ebitda": 551569,
        "loss": 5413005,
        "year": 2016,
        "business": 1991
    },
    {
        "id": 3979,
        "ca": 135769,
        "margin": -156465,
        "ebitda": 403001,
        "loss": 3563671,
        "year": 2017,
        "business": 1992
    },
    {
        "id": 3980,
        "ca": 212281,
        "margin": 467116,
        "ebitda": 121450,
        "loss": 9302688,
        "year": 2016,
        "business": 1992
    },
    {
        "id": 3981,
        "ca": 1777633,
        "margin": 460911,
        "ebitda": 644913,
        "loss": 1587930,
        "year": 2017,
        "business": 1993
    },
    {
        "id": 3982,
        "ca": 2546679,
        "margin": 595119,
        "ebitda": 553749,
        "loss": 5492039,
        "year": 2016,
        "business": 1993
    },
    {
        "id": 3983,
        "ca": 3746698,
        "margin": 213990,
        "ebitda": 43605,
        "loss": 6109786,
        "year": 2017,
        "business": 1994
    },
    {
        "id": 3984,
        "ca": 3114941,
        "margin": 361126,
        "ebitda": 441915,
        "loss": 2765979,
        "year": 2016,
        "business": 1994
    },
    {
        "id": 3985,
        "ca": 3325510,
        "margin": 769574,
        "ebitda": 66975,
        "loss": 4644168,
        "year": 2017,
        "business": 1995
    },
    {
        "id": 3986,
        "ca": 3517098,
        "margin": 337812,
        "ebitda": 800242,
        "loss": 7143754,
        "year": 2016,
        "business": 1995
    },
    {
        "id": 3987,
        "ca": 3861761,
        "margin": -24465,
        "ebitda": 484479,
        "loss": 5561445,
        "year": 2017,
        "business": 1996
    },
    {
        "id": 3988,
        "ca": 3557896,
        "margin": 591734,
        "ebitda": 343633,
        "loss": 4083362,
        "year": 2016,
        "business": 1996
    },
    {
        "id": 3989,
        "ca": 1920785,
        "margin": 667395,
        "ebitda": 732506,
        "loss": 716880,
        "year": 2017,
        "business": 1997
    },
    {
        "id": 3990,
        "ca": 2539401,
        "margin": 62751,
        "ebitda": 353245,
        "loss": 5528983,
        "year": 2016,
        "business": 1997
    },
    {
        "id": 3991,
        "ca": 395830,
        "margin": -31127,
        "ebitda": 569196,
        "loss": 3324194,
        "year": 2017,
        "business": 1998
    },
    {
        "id": 3992,
        "ca": 3982803,
        "margin": 230150,
        "ebitda": 413155,
        "loss": 4555447,
        "year": 2016,
        "business": 1998
    },
    {
        "id": 3993,
        "ca": 2969124,
        "margin": 83607,
        "ebitda": 616539,
        "loss": 4563818,
        "year": 2017,
        "business": 1999
    },
    {
        "id": 3994,
        "ca": 3501568,
        "margin": 971779,
        "ebitda": 503991,
        "loss": 6859937,
        "year": 2016,
        "business": 1999
    },
    {
        "id": 3995,
        "ca": 2642821,
        "margin": 814335,
        "ebitda": 488875,
        "loss": 9368034,
        "year": 2017,
        "business": 2000
    },
    {
        "id": 3996,
        "ca": 3384738,
        "margin": 221024,
        "ebitda": 139033,
        "loss": 2968175,
        "year": 2016,
        "business": 2000
    },
    {
        "id": 3997,
        "ca": 2569913,
        "margin": 496831,
        "ebitda": 535131,
        "loss": 7106661,
        "year": 2017,
        "business": 2001
    },
    {
        "id": 3998,
        "ca": 2087883,
        "margin": 213266,
        "ebitda": 544093,
        "loss": 9546973,
        "year": 2016,
        "business": 2001
    },
    {
        "id": 3999,
        "ca": 3406554,
        "margin": -185455,
        "ebitda": 71849,
        "loss": 3334975,
        "year": 2017,
        "business": 2002
    },
    {
        "id": 4000,
        "ca": 2593135,
        "margin": 708076,
        "ebitda": 879420,
        "loss": 9313385,
        "year": 2016,
        "business": 2002
    },
    {
        "id": 4001,
        "ca": 1884890,
        "margin": 183610,
        "ebitda": 41640,
        "loss": 8047935,
        "year": 2017,
        "business": 2003
    },
    {
        "id": 4002,
        "ca": 538038,
        "margin": 924445,
        "ebitda": 219592,
        "loss": 4407039,
        "year": 2016,
        "business": 2003
    },
    {
        "id": 4003,
        "ca": 119365,
        "margin": 60990,
        "ebitda": 703590,
        "loss": 284338,
        "year": 2017,
        "business": 2004
    },
    {
        "id": 4004,
        "ca": 3946517,
        "margin": 390557,
        "ebitda": 662955,
        "loss": 9170616,
        "year": 2016,
        "business": 2004
    },
    {
        "id": 4005,
        "ca": 2813075,
        "margin": 630400,
        "ebitda": 67567,
        "loss": 1476733,
        "year": 2017,
        "business": 2005
    },
    {
        "id": 4006,
        "ca": 3576450,
        "margin": 661458,
        "ebitda": 371638,
        "loss": 9636123,
        "year": 2016,
        "business": 2005
    },
    {
        "id": 4007,
        "ca": 3365933,
        "margin": 823024,
        "ebitda": 56764,
        "loss": 110733,
        "year": 2017,
        "business": 2006
    },
    {
        "id": 4008,
        "ca": 228843,
        "margin": 290197,
        "ebitda": 142212,
        "loss": 4974910,
        "year": 2016,
        "business": 2006
    },
    {
        "id": 4009,
        "ca": 3958314,
        "margin": 893118,
        "ebitda": 141658,
        "loss": 8494474,
        "year": 2017,
        "business": 2007
    },
    {
        "id": 4010,
        "ca": 527951,
        "margin": 19072,
        "ebitda": 612565,
        "loss": 3916439,
        "year": 2016,
        "business": 2007
    },
    {
        "id": 4011,
        "ca": 3462684,
        "margin": 644266,
        "ebitda": 472240,
        "loss": 7405624,
        "year": 2017,
        "business": 2008
    },
    {
        "id": 4012,
        "ca": 3537276,
        "margin": 663791,
        "ebitda": 796987,
        "loss": 2377887,
        "year": 2016,
        "business": 2008
    },
    {
        "id": 4013,
        "ca": 2544895,
        "margin": -141165,
        "ebitda": 283671,
        "loss": 508099,
        "year": 2017,
        "business": 2009
    },
    {
        "id": 4014,
        "ca": 3698373,
        "margin": 404379,
        "ebitda": 571012,
        "loss": 1987033,
        "year": 2016,
        "business": 2009
    },
    {
        "id": 4015,
        "ca": 3210938,
        "margin": -189704,
        "ebitda": 553580,
        "loss": 4995940,
        "year": 2017,
        "business": 2010
    },
    {
        "id": 4016,
        "ca": 2992011,
        "margin": 586103,
        "ebitda": 514250,
        "loss": 8596448,
        "year": 2016,
        "business": 2010
    },
    {
        "id": 4017,
        "ca": 1336448,
        "margin": 490008,
        "ebitda": 750571,
        "loss": 3664654,
        "year": 2017,
        "business": 2011
    },
    {
        "id": 4018,
        "ca": 2992164,
        "margin": 538208,
        "ebitda": 647371,
        "loss": 4033479,
        "year": 2016,
        "business": 2011
    },
    {
        "id": 4019,
        "ca": 3194909,
        "margin": 186423,
        "ebitda": 226764,
        "loss": 4638762,
        "year": 2017,
        "business": 2012
    },
    {
        "id": 4020,
        "ca": 2755844,
        "margin": 12454,
        "ebitda": 648122,
        "loss": 6664079,
        "year": 2016,
        "business": 2012
    },
    {
        "id": 4021,
        "ca": 3602830,
        "margin": -154058,
        "ebitda": 524059,
        "loss": 9102881,
        "year": 2017,
        "business": 2013
    },
    {
        "id": 4022,
        "ca": 2506505,
        "margin": -175518,
        "ebitda": 657072,
        "loss": 36933,
        "year": 2016,
        "business": 2013
    },
    {
        "id": 4023,
        "ca": 2839567,
        "margin": 732502,
        "ebitda": 374009,
        "loss": 2046547,
        "year": 2017,
        "business": 2014
    },
    {
        "id": 4024,
        "ca": 1146459,
        "margin": 591485,
        "ebitda": 162006,
        "loss": 1718123,
        "year": 2016,
        "business": 2014
    },
    {
        "id": 4025,
        "ca": 358435,
        "margin": 337169,
        "ebitda": 629865,
        "loss": 6094688,
        "year": 2017,
        "business": 2015
    },
    {
        "id": 4026,
        "ca": 785779,
        "margin": 885873,
        "ebitda": 269914,
        "loss": 7522765,
        "year": 2016,
        "business": 2015
    },
    {
        "id": 4027,
        "ca": 1021656,
        "margin": 507711,
        "ebitda": 624623,
        "loss": 6483736,
        "year": 2017,
        "business": 2016
    },
    {
        "id": 4028,
        "ca": 1670117,
        "margin": 194408,
        "ebitda": 359738,
        "loss": 6034374,
        "year": 2016,
        "business": 2016
    },
    {
        "id": 4029,
        "ca": 2611382,
        "margin": 425943,
        "ebitda": 316796,
        "loss": 9923888,
        "year": 2017,
        "business": 2017
    },
    {
        "id": 4030,
        "ca": 2595729,
        "margin": 157343,
        "ebitda": 198976,
        "loss": 3155285,
        "year": 2016,
        "business": 2017
    },
    {
        "id": 4031,
        "ca": 2285910,
        "margin": 63737,
        "ebitda": 362562,
        "loss": 6239080,
        "year": 2017,
        "business": 2018
    },
    {
        "id": 4032,
        "ca": 289467,
        "margin": 840863,
        "ebitda": 585829,
        "loss": 1982316,
        "year": 2016,
        "business": 2018
    },
    {
        "id": 4033,
        "ca": 2965432,
        "margin": 184079,
        "ebitda": 744758,
        "loss": 4597289,
        "year": 2017,
        "business": 2019
    },
    {
        "id": 4034,
        "ca": 2799755,
        "margin": 49662,
        "ebitda": 133091,
        "loss": 1774510,
        "year": 2016,
        "business": 2019
    },
    {
        "id": 4035,
        "ca": 1057476,
        "margin": 441918,
        "ebitda": 156841,
        "loss": 4403545,
        "year": 2017,
        "business": 2020
    },
    {
        "id": 4036,
        "ca": 3085139,
        "margin": 623575,
        "ebitda": 969986,
        "loss": 3834447,
        "year": 2016,
        "business": 2020
    },
    {
        "id": 4037,
        "ca": 3184439,
        "margin": 488997,
        "ebitda": 470887,
        "loss": 341753,
        "year": 2017,
        "business": 2021
    },
    {
        "id": 4038,
        "ca": 2695711,
        "margin": 223140,
        "ebitda": 282841,
        "loss": 9950206,
        "year": 2016,
        "business": 2021
    },
    {
        "id": 4039,
        "ca": 2323601,
        "margin": -130096,
        "ebitda": 292465,
        "loss": 6739558,
        "year": 2017,
        "business": 2022
    },
    {
        "id": 4040,
        "ca": 3910324,
        "margin": 975948,
        "ebitda": 123494,
        "loss": 5361820,
        "year": 2016,
        "business": 2022
    },
    {
        "id": 4041,
        "ca": 1383179,
        "margin": 525934,
        "ebitda": 620050,
        "loss": 5708808,
        "year": 2017,
        "business": 2023
    },
    {
        "id": 4042,
        "ca": 181821,
        "margin": 273390,
        "ebitda": 187686,
        "loss": 195782,
        "year": 2016,
        "business": 2023
    },
    {
        "id": 4043,
        "ca": 1837254,
        "margin": -23600,
        "ebitda": 630765,
        "loss": 330346,
        "year": 2017,
        "business": 2024
    },
    {
        "id": 4044,
        "ca": 364299,
        "margin": 981381,
        "ebitda": 716787,
        "loss": 7314765,
        "year": 2016,
        "business": 2024
    },
    {
        "id": 4045,
        "ca": 1124569,
        "margin": 244282,
        "ebitda": 867654,
        "loss": 9078361,
        "year": 2017,
        "business": 2025
    },
    {
        "id": 4046,
        "ca": 403549,
        "margin": 959000,
        "ebitda": 741391,
        "loss": 3199016,
        "year": 2016,
        "business": 2025
    },
    {
        "id": 4047,
        "ca": 928986,
        "margin": -169867,
        "ebitda": 599256,
        "loss": 3641711,
        "year": 2017,
        "business": 2026
    },
    {
        "id": 4048,
        "ca": 2861820,
        "margin": 645921,
        "ebitda": 833062,
        "loss": 5892050,
        "year": 2016,
        "business": 2026
    },
    {
        "id": 4049,
        "ca": 396503,
        "margin": 759077,
        "ebitda": 316573,
        "loss": 2058773,
        "year": 2017,
        "business": 2027
    },
    {
        "id": 4050,
        "ca": 3285593,
        "margin": 3312,
        "ebitda": 902305,
        "loss": 1983829,
        "year": 2016,
        "business": 2027
    },
    {
        "id": 4051,
        "ca": 1890402,
        "margin": -178874,
        "ebitda": 155672,
        "loss": 4156046,
        "year": 2017,
        "business": 2028
    },
    {
        "id": 4052,
        "ca": 1319212,
        "margin": 717738,
        "ebitda": 472275,
        "loss": 2953966,
        "year": 2016,
        "business": 2028
    },
    {
        "id": 4053,
        "ca": 1554459,
        "margin": 531257,
        "ebitda": 718279,
        "loss": 269453,
        "year": 2017,
        "business": 2029
    },
    {
        "id": 4054,
        "ca": 2906345,
        "margin": 748364,
        "ebitda": 135631,
        "loss": 2041759,
        "year": 2016,
        "business": 2029
    },
    {
        "id": 4055,
        "ca": 3447094,
        "margin": 203296,
        "ebitda": 792136,
        "loss": 7500645,
        "year": 2017,
        "business": 2030
    },
    {
        "id": 4056,
        "ca": 2852163,
        "margin": -63678,
        "ebitda": 865549,
        "loss": 6324055,
        "year": 2016,
        "business": 2030
    },
    {
        "id": 4057,
        "ca": 1296714,
        "margin": 816170,
        "ebitda": 828818,
        "loss": 8073508,
        "year": 2017,
        "business": 2031
    },
    {
        "id": 4058,
        "ca": 1180926,
        "margin": 607709,
        "ebitda": 753816,
        "loss": 4592164,
        "year": 2016,
        "business": 2031
    },
    {
        "id": 4059,
        "ca": 2067456,
        "margin": 314329,
        "ebitda": 276534,
        "loss": 6637806,
        "year": 2017,
        "business": 2032
    },
    {
        "id": 4060,
        "ca": 2187099,
        "margin": 683866,
        "ebitda": 911399,
        "loss": 8801200,
        "year": 2016,
        "business": 2032
    },
    {
        "id": 4061,
        "ca": 3890899,
        "margin": 441660,
        "ebitda": 222974,
        "loss": 8363608,
        "year": 2017,
        "business": 2033
    },
    {
        "id": 4062,
        "ca": 3162720,
        "margin": 519856,
        "ebitda": 301416,
        "loss": 3767343,
        "year": 2016,
        "business": 2033
    },
    {
        "id": 4063,
        "ca": 523895,
        "margin": -12046,
        "ebitda": 453440,
        "loss": 4037711,
        "year": 2017,
        "business": 2034
    },
    {
        "id": 4064,
        "ca": 1173626,
        "margin": 174745,
        "ebitda": 946818,
        "loss": 2245031,
        "year": 2016,
        "business": 2034
    },
    {
        "id": 4065,
        "ca": 3307617,
        "margin": -1987,
        "ebitda": 923815,
        "loss": 8106555,
        "year": 2017,
        "business": 2035
    },
    {
        "id": 4066,
        "ca": 3812238,
        "margin": 399970,
        "ebitda": 626752,
        "loss": 5883384,
        "year": 2016,
        "business": 2035
    },
    {
        "id": 4067,
        "ca": 1667068,
        "margin": 265689,
        "ebitda": 155850,
        "loss": 390853,
        "year": 2017,
        "business": 2036
    },
    {
        "id": 4068,
        "ca": 1562368,
        "margin": 382981,
        "ebitda": 11510,
        "loss": 3963531,
        "year": 2016,
        "business": 2036
    },
    {
        "id": 4069,
        "ca": 2925064,
        "margin": 122742,
        "ebitda": 230410,
        "loss": 4527692,
        "year": 2017,
        "business": 2037
    },
    {
        "id": 4070,
        "ca": 3463883,
        "margin": 119451,
        "ebitda": 777862,
        "loss": 2700523,
        "year": 2016,
        "business": 2037
    },
    {
        "id": 4071,
        "ca": 1285405,
        "margin": 351543,
        "ebitda": 862074,
        "loss": 9415788,
        "year": 2017,
        "business": 2038
    },
    {
        "id": 4072,
        "ca": 1679240,
        "margin": 594176,
        "ebitda": 727597,
        "loss": 7062503,
        "year": 2016,
        "business": 2038
    },
    {
        "id": 4073,
        "ca": 2860440,
        "margin": 229094,
        "ebitda": 643970,
        "loss": 3686020,
        "year": 2017,
        "business": 2039
    },
    {
        "id": 4074,
        "ca": 1571485,
        "margin": 719144,
        "ebitda": 204031,
        "loss": 3557270,
        "year": 2016,
        "business": 2039
    },
    {
        "id": 4075,
        "ca": 2687578,
        "margin": 812459,
        "ebitda": 598150,
        "loss": 1097899,
        "year": 2017,
        "business": 2040
    },
    {
        "id": 4076,
        "ca": 294285,
        "margin": -68914,
        "ebitda": 386469,
        "loss": 2642747,
        "year": 2016,
        "business": 2040
    },
    {
        "id": 4077,
        "ca": 2779532,
        "margin": 262840,
        "ebitda": 889096,
        "loss": 4960989,
        "year": 2017,
        "business": 2041
    },
    {
        "id": 4078,
        "ca": 595444,
        "margin": 533623,
        "ebitda": 622157,
        "loss": 6647924,
        "year": 2016,
        "business": 2041
    },
    {
        "id": 4079,
        "ca": 366675,
        "margin": 738947,
        "ebitda": 675433,
        "loss": 2870953,
        "year": 2017,
        "business": 2042
    },
    {
        "id": 4080,
        "ca": 2866906,
        "margin": 607038,
        "ebitda": 175704,
        "loss": 1440136,
        "year": 2016,
        "business": 2042
    },
    {
        "id": 4081,
        "ca": 2300901,
        "margin": 21458,
        "ebitda": 790803,
        "loss": 5132923,
        "year": 2017,
        "business": 2043
    },
    {
        "id": 4082,
        "ca": 3489522,
        "margin": 931936,
        "ebitda": 801643,
        "loss": 4808791,
        "year": 2016,
        "business": 2043
    },
    {
        "id": 4083,
        "ca": 3412747,
        "margin": 947042,
        "ebitda": 910029,
        "loss": 1947641,
        "year": 2017,
        "business": 2044
    },
    {
        "id": 4084,
        "ca": 1956790,
        "margin": 958065,
        "ebitda": 565309,
        "loss": 7660599,
        "year": 2016,
        "business": 2044
    },
    {
        "id": 4085,
        "ca": 1568063,
        "margin": 62833,
        "ebitda": 207237,
        "loss": 6307868,
        "year": 2017,
        "business": 2045
    },
    {
        "id": 4086,
        "ca": 1941614,
        "margin": 943627,
        "ebitda": 850972,
        "loss": 7008539,
        "year": 2016,
        "business": 2045
    },
    {
        "id": 4087,
        "ca": 1413434,
        "margin": -198488,
        "ebitda": 919047,
        "loss": 884992,
        "year": 2017,
        "business": 2046
    },
    {
        "id": 4088,
        "ca": 3223334,
        "margin": 197753,
        "ebitda": 839964,
        "loss": 654740,
        "year": 2016,
        "business": 2046
    },
    {
        "id": 4089,
        "ca": 722645,
        "margin": 161551,
        "ebitda": 662831,
        "loss": 1356749,
        "year": 2017,
        "business": 2047
    },
    {
        "id": 4090,
        "ca": 326444,
        "margin": 445708,
        "ebitda": 448271,
        "loss": 7629668,
        "year": 2016,
        "business": 2047
    },
    {
        "id": 4091,
        "ca": 529619,
        "margin": 331955,
        "ebitda": 646647,
        "loss": 3535870,
        "year": 2017,
        "business": 2048
    },
    {
        "id": 4092,
        "ca": 2762765,
        "margin": 547256,
        "ebitda": 285767,
        "loss": 1562770,
        "year": 2016,
        "business": 2048
    },
    {
        "id": 4093,
        "ca": 3471496,
        "margin": 801027,
        "ebitda": 892427,
        "loss": 9985604,
        "year": 2017,
        "business": 2049
    },
    {
        "id": 4094,
        "ca": 550979,
        "margin": 555238,
        "ebitda": 205400,
        "loss": 7487590,
        "year": 2016,
        "business": 2049
    },
    {
        "id": 4095,
        "ca": 995998,
        "margin": 374164,
        "ebitda": 578755,
        "loss": 7068204,
        "year": 2017,
        "business": 2050
    },
    {
        "id": 4096,
        "ca": 2055987,
        "margin": 365581,
        "ebitda": 822455,
        "loss": 8436882,
        "year": 2016,
        "business": 2050
    },
    {
        "id": 4097,
        "ca": 1759245,
        "margin": 217688,
        "ebitda": 233775,
        "loss": 1527604,
        "year": 2017,
        "business": 2051
    },
    {
        "id": 4098,
        "ca": 3144748,
        "margin": 943888,
        "ebitda": 684002,
        "loss": 6144160,
        "year": 2016,
        "business": 2051
    },
    {
        "id": 4099,
        "ca": 2762880,
        "margin": 935547,
        "ebitda": 475909,
        "loss": 2616824,
        "year": 2017,
        "business": 2052
    },
    {
        "id": 4100,
        "ca": 2427457,
        "margin": 535535,
        "ebitda": 857922,
        "loss": 3604422,
        "year": 2016,
        "business": 2052
    },
    {
        "id": 4101,
        "ca": 608907,
        "margin": 232346,
        "ebitda": 182998,
        "loss": 4482450,
        "year": 2017,
        "business": 2053
    },
    {
        "id": 4102,
        "ca": 2892392,
        "margin": 682223,
        "ebitda": 995255,
        "loss": 5096605,
        "year": 2016,
        "business": 2053
    },
    {
        "id": 4103,
        "ca": 103806,
        "margin": 652161,
        "ebitda": 55773,
        "loss": 4610112,
        "year": 2017,
        "business": 2054
    },
    {
        "id": 4104,
        "ca": 1749159,
        "margin": 92327,
        "ebitda": 771155,
        "loss": 9429054,
        "year": 2016,
        "business": 2054
    },
    {
        "id": 4105,
        "ca": 496689,
        "margin": 907225,
        "ebitda": 847624,
        "loss": 2870199,
        "year": 2017,
        "business": 2055
    },
    {
        "id": 4106,
        "ca": 135074,
        "margin": -6211,
        "ebitda": 630370,
        "loss": 3300640,
        "year": 2016,
        "business": 2055
    },
    {
        "id": 4107,
        "ca": 3959745,
        "margin": 164875,
        "ebitda": 33559,
        "loss": 4860253,
        "year": 2017,
        "business": 2056
    },
    {
        "id": 4108,
        "ca": 2616436,
        "margin": 703387,
        "ebitda": 773764,
        "loss": 4497309,
        "year": 2016,
        "business": 2056
    },
    {
        "id": 4109,
        "ca": 3098364,
        "margin": 295222,
        "ebitda": 237628,
        "loss": 8824486,
        "year": 2017,
        "business": 2057
    },
    {
        "id": 4110,
        "ca": 2836963,
        "margin": 347671,
        "ebitda": 301331,
        "loss": 25631,
        "year": 2016,
        "business": 2057
    },
    {
        "id": 4111,
        "ca": 3607659,
        "margin": -189859,
        "ebitda": 466063,
        "loss": 4587411,
        "year": 2017,
        "business": 2058
    },
    {
        "id": 4112,
        "ca": 395340,
        "margin": 179427,
        "ebitda": 571353,
        "loss": 8575357,
        "year": 2016,
        "business": 2058
    },
    {
        "id": 4113,
        "ca": 379203,
        "margin": -93020,
        "ebitda": 259766,
        "loss": 8481496,
        "year": 2017,
        "business": 2059
    },
    {
        "id": 4114,
        "ca": 144396,
        "margin": 517453,
        "ebitda": 591711,
        "loss": 6232523,
        "year": 2016,
        "business": 2059
    },
    {
        "id": 4115,
        "ca": 3179508,
        "margin": 67641,
        "ebitda": 780727,
        "loss": 3722604,
        "year": 2017,
        "business": 2060
    },
    {
        "id": 4116,
        "ca": 1744348,
        "margin": 396308,
        "ebitda": 542501,
        "loss": 5579533,
        "year": 2016,
        "business": 2060
    },
    {
        "id": 4117,
        "ca": 1728921,
        "margin": 665662,
        "ebitda": 991743,
        "loss": 4038748,
        "year": 2017,
        "business": 2061
    },
    {
        "id": 4118,
        "ca": 139687,
        "margin": 358646,
        "ebitda": 935035,
        "loss": 356369,
        "year": 2016,
        "business": 2061
    },
    {
        "id": 4119,
        "ca": 2681633,
        "margin": 64633,
        "ebitda": 38873,
        "loss": 4026699,
        "year": 2017,
        "business": 2062
    },
    {
        "id": 4120,
        "ca": 1357003,
        "margin": -117910,
        "ebitda": 866302,
        "loss": 8169181,
        "year": 2016,
        "business": 2062
    },
    {
        "id": 4121,
        "ca": 697972,
        "margin": 109349,
        "ebitda": 748214,
        "loss": 7788287,
        "year": 2017,
        "business": 2063
    },
    {
        "id": 4122,
        "ca": 3821833,
        "margin": -150587,
        "ebitda": 455744,
        "loss": 1774670,
        "year": 2016,
        "business": 2063
    },
    {
        "id": 4123,
        "ca": 1736167,
        "margin": -71098,
        "ebitda": 369044,
        "loss": 7587644,
        "year": 2017,
        "business": 2064
    },
    {
        "id": 4124,
        "ca": 2994791,
        "margin": -189455,
        "ebitda": 584789,
        "loss": 8253641,
        "year": 2016,
        "business": 2064
    },
    {
        "id": 4125,
        "ca": 3866480,
        "margin": 846424,
        "ebitda": 723539,
        "loss": 7059958,
        "year": 2017,
        "business": 2065
    },
    {
        "id": 4126,
        "ca": 2002973,
        "margin": 864708,
        "ebitda": 715081,
        "loss": 9769978,
        "year": 2016,
        "business": 2065
    },
    {
        "id": 4127,
        "ca": 2168061,
        "margin": 283947,
        "ebitda": 882487,
        "loss": 1942313,
        "year": 2017,
        "business": 2066
    },
    {
        "id": 4128,
        "ca": 645047,
        "margin": 134625,
        "ebitda": 974136,
        "loss": 7970717,
        "year": 2016,
        "business": 2066
    },
    {
        "id": 4129,
        "ca": 3882691,
        "margin": 370353,
        "ebitda": 411563,
        "loss": 8937022,
        "year": 2017,
        "business": 2067
    },
    {
        "id": 4130,
        "ca": 2517891,
        "margin": -120139,
        "ebitda": 172997,
        "loss": 9643858,
        "year": 2016,
        "business": 2067
    },
    {
        "id": 4131,
        "ca": 1381725,
        "margin": 521890,
        "ebitda": 969346,
        "loss": 6200579,
        "year": 2017,
        "business": 2068
    },
    {
        "id": 4132,
        "ca": 3989466,
        "margin": -132656,
        "ebitda": 339426,
        "loss": 1356962,
        "year": 2016,
        "business": 2068
    },
    {
        "id": 4133,
        "ca": 1908431,
        "margin": 500963,
        "ebitda": 360880,
        "loss": 1000301,
        "year": 2017,
        "business": 2069
    },
    {
        "id": 4134,
        "ca": 1617090,
        "margin": 723375,
        "ebitda": 966379,
        "loss": 7175687,
        "year": 2016,
        "business": 2069
    },
    {
        "id": 4135,
        "ca": 3660703,
        "margin": 260358,
        "ebitda": 827985,
        "loss": 2216670,
        "year": 2017,
        "business": 2070
    },
    {
        "id": 4136,
        "ca": 3391877,
        "margin": 715081,
        "ebitda": 526732,
        "loss": 5204173,
        "year": 2016,
        "business": 2070
    },
    {
        "id": 4137,
        "ca": 2981598,
        "margin": 839640,
        "ebitda": 254466,
        "loss": 557923,
        "year": 2017,
        "business": 2071
    },
    {
        "id": 4138,
        "ca": 2264669,
        "margin": 85859,
        "ebitda": 701532,
        "loss": 5889667,
        "year": 2016,
        "business": 2071
    },
    {
        "id": 4139,
        "ca": 2515502,
        "margin": 383884,
        "ebitda": 314194,
        "loss": 1447954,
        "year": 2017,
        "business": 2072
    },
    {
        "id": 4140,
        "ca": 1639067,
        "margin": 251545,
        "ebitda": 232780,
        "loss": 5703733,
        "year": 2016,
        "business": 2072
    },
    {
        "id": 4141,
        "ca": 3990163,
        "margin": -23653,
        "ebitda": 618446,
        "loss": 7611738,
        "year": 2017,
        "business": 2073
    },
    {
        "id": 4142,
        "ca": 3399377,
        "margin": -34562,
        "ebitda": 676135,
        "loss": 2625186,
        "year": 2016,
        "business": 2073
    },
    {
        "id": 4143,
        "ca": 2624865,
        "margin": 21282,
        "ebitda": 252014,
        "loss": 2397148,
        "year": 2017,
        "business": 2074
    },
    {
        "id": 4144,
        "ca": 2673540,
        "margin": 320968,
        "ebitda": 489969,
        "loss": 6933441,
        "year": 2016,
        "business": 2074
    },
    {
        "id": 4145,
        "ca": 3946352,
        "margin": 299886,
        "ebitda": 161465,
        "loss": 6615188,
        "year": 2017,
        "business": 2075
    },
    {
        "id": 4146,
        "ca": 3998834,
        "margin": 261503,
        "ebitda": 477645,
        "loss": 7523061,
        "year": 2016,
        "business": 2075
    },
    {
        "id": 4147,
        "ca": 396543,
        "margin": -15795,
        "ebitda": 571537,
        "loss": 1491676,
        "year": 2017,
        "business": 2076
    },
    {
        "id": 4148,
        "ca": 3585987,
        "margin": 69181,
        "ebitda": 724505,
        "loss": 355804,
        "year": 2016,
        "business": 2076
    },
    {
        "id": 4149,
        "ca": 3514916,
        "margin": 850407,
        "ebitda": 528644,
        "loss": 6528495,
        "year": 2017,
        "business": 2077
    },
    {
        "id": 4150,
        "ca": 674593,
        "margin": -65955,
        "ebitda": 452223,
        "loss": 3974195,
        "year": 2016,
        "business": 2077
    },
    {
        "id": 4151,
        "ca": 3982779,
        "margin": 847980,
        "ebitda": 25457,
        "loss": 6382830,
        "year": 2017,
        "business": 2078
    },
    {
        "id": 4152,
        "ca": 501454,
        "margin": 522579,
        "ebitda": 151048,
        "loss": 7167120,
        "year": 2016,
        "business": 2078
    },
    {
        "id": 4153,
        "ca": 2899048,
        "margin": 446361,
        "ebitda": 780465,
        "loss": 6175065,
        "year": 2017,
        "business": 2079
    },
    {
        "id": 4154,
        "ca": 3286750,
        "margin": 753934,
        "ebitda": 492488,
        "loss": 5716259,
        "year": 2016,
        "business": 2079
    },
    {
        "id": 4155,
        "ca": 321130,
        "margin": -106862,
        "ebitda": 493927,
        "loss": 3219872,
        "year": 2017,
        "business": 2080
    },
    {
        "id": 4156,
        "ca": 1468024,
        "margin": 877052,
        "ebitda": 201151,
        "loss": 6880040,
        "year": 2016,
        "business": 2080
    },
    {
        "id": 4157,
        "ca": 1202306,
        "margin": 927668,
        "ebitda": 763436,
        "loss": 2307300,
        "year": 2017,
        "business": 2081
    },
    {
        "id": 4158,
        "ca": 711411,
        "margin": 98405,
        "ebitda": 127258,
        "loss": 1351493,
        "year": 2016,
        "business": 2081
    },
    {
        "id": 4159,
        "ca": 873010,
        "margin": 424430,
        "ebitda": 713124,
        "loss": 2935034,
        "year": 2017,
        "business": 2082
    },
    {
        "id": 4160,
        "ca": 1516162,
        "margin": 942403,
        "ebitda": 558387,
        "loss": 5967964,
        "year": 2016,
        "business": 2082
    },
    {
        "id": 4161,
        "ca": 670761,
        "margin": 826590,
        "ebitda": 731510,
        "loss": 3079216,
        "year": 2017,
        "business": 2083
    },
    {
        "id": 4162,
        "ca": 2676855,
        "margin": 918362,
        "ebitda": 469186,
        "loss": 2171934,
        "year": 2016,
        "business": 2083
    },
    {
        "id": 4163,
        "ca": 242467,
        "margin": -188020,
        "ebitda": 531483,
        "loss": 7973940,
        "year": 2017,
        "business": 2084
    },
    {
        "id": 4164,
        "ca": 3858424,
        "margin": -196542,
        "ebitda": 679848,
        "loss": 7374394,
        "year": 2016,
        "business": 2084
    },
    {
        "id": 4165,
        "ca": 3630977,
        "margin": -191217,
        "ebitda": 565955,
        "loss": 6361163,
        "year": 2017,
        "business": 2085
    },
    {
        "id": 4166,
        "ca": 276602,
        "margin": 962997,
        "ebitda": 923379,
        "loss": 291587,
        "year": 2016,
        "business": 2085
    },
    {
        "id": 4167,
        "ca": 3053219,
        "margin": 891154,
        "ebitda": 748467,
        "loss": 5033395,
        "year": 2017,
        "business": 2086
    },
    {
        "id": 4168,
        "ca": 727813,
        "margin": 394241,
        "ebitda": 57145,
        "loss": 3649595,
        "year": 2016,
        "business": 2086
    },
    {
        "id": 4169,
        "ca": 1915743,
        "margin": 579738,
        "ebitda": 671571,
        "loss": 2146574,
        "year": 2017,
        "business": 2087
    },
    {
        "id": 4170,
        "ca": 1765238,
        "margin": 725611,
        "ebitda": 183725,
        "loss": 2018896,
        "year": 2016,
        "business": 2087
    },
    {
        "id": 4171,
        "ca": 1307856,
        "margin": -19394,
        "ebitda": 464868,
        "loss": 7453373,
        "year": 2017,
        "business": 2088
    },
    {
        "id": 4172,
        "ca": 3784995,
        "margin": 117975,
        "ebitda": 348996,
        "loss": 9750533,
        "year": 2016,
        "business": 2088
    },
    {
        "id": 4173,
        "ca": 579640,
        "margin": 708604,
        "ebitda": 476367,
        "loss": 7985293,
        "year": 2017,
        "business": 2089
    },
    {
        "id": 4174,
        "ca": 401500,
        "margin": 901486,
        "ebitda": 750040,
        "loss": 9512030,
        "year": 2016,
        "business": 2089
    },
    {
        "id": 4175,
        "ca": 675090,
        "margin": 837643,
        "ebitda": 234174,
        "loss": 8744069,
        "year": 2017,
        "business": 2090
    },
    {
        "id": 4176,
        "ca": 3999870,
        "margin": 183000,
        "ebitda": 715121,
        "loss": 3817111,
        "year": 2016,
        "business": 2090
    },
    {
        "id": 4177,
        "ca": 1357050,
        "margin": 930392,
        "ebitda": 114816,
        "loss": 206483,
        "year": 2017,
        "business": 2091
    },
    {
        "id": 4178,
        "ca": 1284602,
        "margin": 298382,
        "ebitda": 344379,
        "loss": 1354516,
        "year": 2016,
        "business": 2091
    },
    {
        "id": 4179,
        "ca": 437404,
        "margin": 443309,
        "ebitda": 924393,
        "loss": 8344342,
        "year": 2017,
        "business": 2092
    },
    {
        "id": 4180,
        "ca": 2295941,
        "margin": 262959,
        "ebitda": 398360,
        "loss": 4731833,
        "year": 2016,
        "business": 2092
    },
    {
        "id": 4181,
        "ca": 1722916,
        "margin": 758629,
        "ebitda": 738064,
        "loss": 8203486,
        "year": 2017,
        "business": 2093
    },
    {
        "id": 4182,
        "ca": 3022820,
        "margin": 68719,
        "ebitda": 702919,
        "loss": 3778150,
        "year": 2016,
        "business": 2093
    },
    {
        "id": 4183,
        "ca": 3939948,
        "margin": 802846,
        "ebitda": 663635,
        "loss": 5542135,
        "year": 2017,
        "business": 2094
    },
    {
        "id": 4184,
        "ca": 276559,
        "margin": 139817,
        "ebitda": 493621,
        "loss": 7195203,
        "year": 2016,
        "business": 2094
    },
    {
        "id": 4185,
        "ca": 3239235,
        "margin": 340217,
        "ebitda": 449758,
        "loss": 1334666,
        "year": 2017,
        "business": 2095
    },
    {
        "id": 4186,
        "ca": 2412749,
        "margin": 430859,
        "ebitda": 166502,
        "loss": 7762703,
        "year": 2016,
        "business": 2095
    },
    {
        "id": 4187,
        "ca": 1656238,
        "margin": 815153,
        "ebitda": 17020,
        "loss": 657973,
        "year": 2017,
        "business": 2096
    },
    {
        "id": 4188,
        "ca": 286407,
        "margin": 81459,
        "ebitda": 751775,
        "loss": 1171673,
        "year": 2016,
        "business": 2096
    },
    {
        "id": 4189,
        "ca": 1623267,
        "margin": 390850,
        "ebitda": 160709,
        "loss": 6228102,
        "year": 2017,
        "business": 2097
    },
    {
        "id": 4190,
        "ca": 1244864,
        "margin": 468907,
        "ebitda": 513580,
        "loss": 406566,
        "year": 2016,
        "business": 2097
    },
    {
        "id": 4191,
        "ca": 1302638,
        "margin": 127698,
        "ebitda": 901385,
        "loss": 1035350,
        "year": 2017,
        "business": 2098
    },
    {
        "id": 4192,
        "ca": 3024172,
        "margin": 594634,
        "ebitda": 817461,
        "loss": 6847908,
        "year": 2016,
        "business": 2098
    },
    {
        "id": 4193,
        "ca": 2632843,
        "margin": 275924,
        "ebitda": 284692,
        "loss": 3566120,
        "year": 2017,
        "business": 2099
    },
    {
        "id": 4194,
        "ca": 3612783,
        "margin": 145292,
        "ebitda": 942467,
        "loss": 6543481,
        "year": 2016,
        "business": 2099
    },
    {
        "id": 4195,
        "ca": 1521736,
        "margin": -108388,
        "ebitda": 254616,
        "loss": 2442956,
        "year": 2017,
        "business": 2100
    },
    {
        "id": 4196,
        "ca": 3500336,
        "margin": -17690,
        "ebitda": 817347,
        "loss": 8840333,
        "year": 2016,
        "business": 2100
    },
    {
        "id": 4197,
        "ca": 1836167,
        "margin": 702191,
        "ebitda": 839661,
        "loss": 5922025,
        "year": 2017,
        "business": 2101
    },
    {
        "id": 4198,
        "ca": 3927945,
        "margin": 831558,
        "ebitda": 339263,
        "loss": 7914051,
        "year": 2016,
        "business": 2101
    },
    {
        "id": 4199,
        "ca": 2042075,
        "margin": 941932,
        "ebitda": 39499,
        "loss": 8186728,
        "year": 2017,
        "business": 2102
    },
    {
        "id": 4200,
        "ca": 3285163,
        "margin": -117789,
        "ebitda": 504976,
        "loss": 1588712,
        "year": 2016,
        "business": 2102
    },
    {
        "id": 4201,
        "ca": 1392806,
        "margin": 407754,
        "ebitda": 888531,
        "loss": 8319998,
        "year": 2017,
        "business": 2103
    },
    {
        "id": 4202,
        "ca": 1423185,
        "margin": 656415,
        "ebitda": 354677,
        "loss": 2368935,
        "year": 2016,
        "business": 2103
    },
    {
        "id": 4203,
        "ca": 2606836,
        "margin": 804607,
        "ebitda": 14325,
        "loss": 2896996,
        "year": 2017,
        "business": 2104
    },
    {
        "id": 4204,
        "ca": 516903,
        "margin": 609870,
        "ebitda": 798215,
        "loss": 7703626,
        "year": 2016,
        "business": 2104
    },
    {
        "id": 4205,
        "ca": 3480353,
        "margin": 216290,
        "ebitda": 441732,
        "loss": 462267,
        "year": 2017,
        "business": 2105
    },
    {
        "id": 4206,
        "ca": 1177842,
        "margin": 620215,
        "ebitda": 860501,
        "loss": 6589168,
        "year": 2016,
        "business": 2105
    },
    {
        "id": 4207,
        "ca": 861557,
        "margin": 386117,
        "ebitda": 938199,
        "loss": 8206339,
        "year": 2017,
        "business": 2106
    },
    {
        "id": 4208,
        "ca": 2943536,
        "margin": 852707,
        "ebitda": 94471,
        "loss": 1840329,
        "year": 2016,
        "business": 2106
    },
    {
        "id": 4209,
        "ca": 1846841,
        "margin": 96976,
        "ebitda": 425424,
        "loss": 25493,
        "year": 2017,
        "business": 2107
    },
    {
        "id": 4210,
        "ca": 2052522,
        "margin": 609255,
        "ebitda": 236691,
        "loss": 5395446,
        "year": 2016,
        "business": 2107
    },
    {
        "id": 4211,
        "ca": 2915358,
        "margin": 901951,
        "ebitda": 543322,
        "loss": 683229,
        "year": 2017,
        "business": 2108
    },
    {
        "id": 4212,
        "ca": 1318119,
        "margin": 926649,
        "ebitda": 485151,
        "loss": 8753427,
        "year": 2016,
        "business": 2108
    },
    {
        "id": 4213,
        "ca": 3531451,
        "margin": -7532,
        "ebitda": 190463,
        "loss": 9727952,
        "year": 2017,
        "business": 2109
    },
    {
        "id": 4214,
        "ca": 152385,
        "margin": 626370,
        "ebitda": 665984,
        "loss": 1301506,
        "year": 2016,
        "business": 2109
    },
    {
        "id": 4215,
        "ca": 1863195,
        "margin": 885156,
        "ebitda": 691132,
        "loss": 3331463,
        "year": 2017,
        "business": 2110
    },
    {
        "id": 4216,
        "ca": 1492494,
        "margin": 451974,
        "ebitda": 470527,
        "loss": 6116639,
        "year": 2016,
        "business": 2110
    },
    {
        "id": 4217,
        "ca": 1325093,
        "margin": 416334,
        "ebitda": 810310,
        "loss": 2295917,
        "year": 2017,
        "business": 2111
    },
    {
        "id": 4218,
        "ca": 1468293,
        "margin": 47641,
        "ebitda": 685557,
        "loss": 7057002,
        "year": 2016,
        "business": 2111
    },
    {
        "id": 4219,
        "ca": 391860,
        "margin": 418189,
        "ebitda": 716083,
        "loss": 8376039,
        "year": 2017,
        "business": 2112
    },
    {
        "id": 4220,
        "ca": 1101433,
        "margin": 495505,
        "ebitda": 391024,
        "loss": 7516228,
        "year": 2016,
        "business": 2112
    },
    {
        "id": 4221,
        "ca": 1770926,
        "margin": 725459,
        "ebitda": 422508,
        "loss": 696824,
        "year": 2017,
        "business": 2113
    },
    {
        "id": 4222,
        "ca": 844272,
        "margin": -62922,
        "ebitda": 807620,
        "loss": 1381217,
        "year": 2016,
        "business": 2113
    },
    {
        "id": 4223,
        "ca": 1950330,
        "margin": 971754,
        "ebitda": 477053,
        "loss": 9514153,
        "year": 2017,
        "business": 2114
    },
    {
        "id": 4224,
        "ca": 747090,
        "margin": -45669,
        "ebitda": 488641,
        "loss": 2271665,
        "year": 2016,
        "business": 2114
    },
    {
        "id": 4225,
        "ca": 3537514,
        "margin": -73399,
        "ebitda": 964482,
        "loss": 7441441,
        "year": 2017,
        "business": 2115
    },
    {
        "id": 4226,
        "ca": 1787038,
        "margin": -57380,
        "ebitda": 849512,
        "loss": 2623796,
        "year": 2016,
        "business": 2115
    },
    {
        "id": 4227,
        "ca": 1169472,
        "margin": 354993,
        "ebitda": 567329,
        "loss": 1369101,
        "year": 2017,
        "business": 2116
    },
    {
        "id": 4228,
        "ca": 3653740,
        "margin": 860240,
        "ebitda": 611312,
        "loss": 1081867,
        "year": 2016,
        "business": 2116
    },
    {
        "id": 4229,
        "ca": 2247463,
        "margin": 401415,
        "ebitda": 949482,
        "loss": 4040262,
        "year": 2017,
        "business": 2117
    },
    {
        "id": 4230,
        "ca": 1614202,
        "margin": 435597,
        "ebitda": 899366,
        "loss": 8403583,
        "year": 2016,
        "business": 2117
    },
    {
        "id": 4231,
        "ca": 1464401,
        "margin": 140222,
        "ebitda": 543863,
        "loss": 3046940,
        "year": 2017,
        "business": 2118
    },
    {
        "id": 4232,
        "ca": 3192296,
        "margin": 842618,
        "ebitda": 182710,
        "loss": 5357381,
        "year": 2016,
        "business": 2118
    },
    {
        "id": 4233,
        "ca": 3031637,
        "margin": 679669,
        "ebitda": 76621,
        "loss": 9745843,
        "year": 2017,
        "business": 2119
    },
    {
        "id": 4234,
        "ca": 1041670,
        "margin": 492196,
        "ebitda": 641042,
        "loss": 7889625,
        "year": 2016,
        "business": 2119
    },
    {
        "id": 4235,
        "ca": 3665813,
        "margin": 764550,
        "ebitda": 643073,
        "loss": 9904839,
        "year": 2017,
        "business": 2120
    },
    {
        "id": 4236,
        "ca": 1818052,
        "margin": 787374,
        "ebitda": 275126,
        "loss": 4001065,
        "year": 2016,
        "business": 2120
    },
    {
        "id": 4237,
        "ca": 772162,
        "margin": 878637,
        "ebitda": 754484,
        "loss": 2048022,
        "year": 2017,
        "business": 2121
    },
    {
        "id": 4238,
        "ca": 545552,
        "margin": -69391,
        "ebitda": 830605,
        "loss": 3054587,
        "year": 2016,
        "business": 2121
    },
    {
        "id": 4239,
        "ca": 929599,
        "margin": 435326,
        "ebitda": 671472,
        "loss": 7712503,
        "year": 2017,
        "business": 2122
    },
    {
        "id": 4240,
        "ca": 1076023,
        "margin": 595589,
        "ebitda": 950398,
        "loss": 5022871,
        "year": 2016,
        "business": 2122
    },
    {
        "id": 4241,
        "ca": 534446,
        "margin": 236496,
        "ebitda": 262407,
        "loss": 1884251,
        "year": 2017,
        "business": 2123
    },
    {
        "id": 4242,
        "ca": 1053849,
        "margin": 905825,
        "ebitda": 296672,
        "loss": 6330120,
        "year": 2016,
        "business": 2123
    },
    {
        "id": 4243,
        "ca": 1905560,
        "margin": 287037,
        "ebitda": 432415,
        "loss": 9494153,
        "year": 2017,
        "business": 2124
    },
    {
        "id": 4244,
        "ca": 1237217,
        "margin": 549518,
        "ebitda": 22570,
        "loss": 7720823,
        "year": 2016,
        "business": 2124
    },
    {
        "id": 4245,
        "ca": 2822936,
        "margin": 737245,
        "ebitda": 502023,
        "loss": 822282,
        "year": 2017,
        "business": 2125
    },
    {
        "id": 4246,
        "ca": 1528294,
        "margin": 379394,
        "ebitda": 250801,
        "loss": 5083643,
        "year": 2016,
        "business": 2125
    },
    {
        "id": 4247,
        "ca": 2536749,
        "margin": 965332,
        "ebitda": 368262,
        "loss": 1201000,
        "year": 2017,
        "business": 2126
    },
    {
        "id": 4248,
        "ca": 2702233,
        "margin": -42416,
        "ebitda": 209342,
        "loss": 231725,
        "year": 2016,
        "business": 2126
    },
    {
        "id": 4249,
        "ca": 3584565,
        "margin": 631302,
        "ebitda": 216935,
        "loss": 8712213,
        "year": 2017,
        "business": 2127
    },
    {
        "id": 4250,
        "ca": 2961029,
        "margin": 358082,
        "ebitda": 644271,
        "loss": 9053011,
        "year": 2016,
        "business": 2127
    },
    {
        "id": 4251,
        "ca": 397984,
        "margin": 309572,
        "ebitda": 196244,
        "loss": 6514652,
        "year": 2017,
        "business": 2128
    },
    {
        "id": 4252,
        "ca": 3515292,
        "margin": 171319,
        "ebitda": 220895,
        "loss": 5052465,
        "year": 2016,
        "business": 2128
    },
    {
        "id": 4253,
        "ca": 2834046,
        "margin": 951329,
        "ebitda": 959573,
        "loss": 1194389,
        "year": 2017,
        "business": 2129
    },
    {
        "id": 4254,
        "ca": 2660639,
        "margin": 848997,
        "ebitda": 872268,
        "loss": 578344,
        "year": 2016,
        "business": 2129
    },
    {
        "id": 4255,
        "ca": 2089413,
        "margin": 484214,
        "ebitda": 975320,
        "loss": 728273,
        "year": 2017,
        "business": 2130
    },
    {
        "id": 4256,
        "ca": 1092462,
        "margin": 625754,
        "ebitda": 829443,
        "loss": 3627836,
        "year": 2016,
        "business": 2130
    },
    {
        "id": 4257,
        "ca": 346001,
        "margin": 50994,
        "ebitda": 423793,
        "loss": 1138923,
        "year": 2017,
        "business": 2131
    },
    {
        "id": 4258,
        "ca": 2143948,
        "margin": 515651,
        "ebitda": 416180,
        "loss": 7169085,
        "year": 2016,
        "business": 2131
    },
    {
        "id": 4259,
        "ca": 604883,
        "margin": 822012,
        "ebitda": 93405,
        "loss": 3626802,
        "year": 2017,
        "business": 2132
    },
    {
        "id": 4260,
        "ca": 222653,
        "margin": -135032,
        "ebitda": 550778,
        "loss": 5815190,
        "year": 2016,
        "business": 2132
    },
    {
        "id": 4261,
        "ca": 1020933,
        "margin": 704919,
        "ebitda": 9280,
        "loss": 5144338,
        "year": 2017,
        "business": 2133
    },
    {
        "id": 4262,
        "ca": 3020560,
        "margin": 548119,
        "ebitda": 386384,
        "loss": 4871927,
        "year": 2016,
        "business": 2133
    },
    {
        "id": 4263,
        "ca": 307764,
        "margin": 153983,
        "ebitda": 108281,
        "loss": 2580980,
        "year": 2017,
        "business": 2134
    },
    {
        "id": 4264,
        "ca": 1135979,
        "margin": 914245,
        "ebitda": 77906,
        "loss": 6955952,
        "year": 2016,
        "business": 2134
    },
    {
        "id": 4265,
        "ca": 1194003,
        "margin": 506263,
        "ebitda": 224082,
        "loss": 1934212,
        "year": 2017,
        "business": 2135
    },
    {
        "id": 4266,
        "ca": 438045,
        "margin": 935630,
        "ebitda": 190266,
        "loss": 4059307,
        "year": 2016,
        "business": 2135
    },
    {
        "id": 4267,
        "ca": 1572233,
        "margin": 43965,
        "ebitda": 314350,
        "loss": 6016223,
        "year": 2017,
        "business": 2136
    },
    {
        "id": 4268,
        "ca": 1617028,
        "margin": 148517,
        "ebitda": 864839,
        "loss": 9180946,
        "year": 2016,
        "business": 2136
    },
    {
        "id": 4269,
        "ca": 3882042,
        "margin": 227547,
        "ebitda": 730703,
        "loss": 748084,
        "year": 2017,
        "business": 2137
    },
    {
        "id": 4270,
        "ca": 1323002,
        "margin": 277049,
        "ebitda": 705669,
        "loss": 4106329,
        "year": 2016,
        "business": 2137
    },
    {
        "id": 4271,
        "ca": 3333515,
        "margin": 752911,
        "ebitda": 863272,
        "loss": 140940,
        "year": 2017,
        "business": 2138
    },
    {
        "id": 4272,
        "ca": 1913659,
        "margin": 452521,
        "ebitda": 275458,
        "loss": 311085,
        "year": 2016,
        "business": 2138
    },
    {
        "id": 4273,
        "ca": 1055674,
        "margin": 472906,
        "ebitda": 728127,
        "loss": 3011701,
        "year": 2017,
        "business": 2139
    },
    {
        "id": 4274,
        "ca": 3505870,
        "margin": -75301,
        "ebitda": 370667,
        "loss": 1684556,
        "year": 2016,
        "business": 2139
    },
    {
        "id": 4275,
        "ca": 3712247,
        "margin": 689224,
        "ebitda": 944551,
        "loss": 684306,
        "year": 2017,
        "business": 2140
    },
    {
        "id": 4276,
        "ca": 565545,
        "margin": 979600,
        "ebitda": 247048,
        "loss": 3961991,
        "year": 2016,
        "business": 2140
    },
    {
        "id": 4277,
        "ca": 2698414,
        "margin": 294022,
        "ebitda": 512183,
        "loss": 9626020,
        "year": 2017,
        "business": 2141
    },
    {
        "id": 4278,
        "ca": 724785,
        "margin": -37602,
        "ebitda": 214519,
        "loss": 7284805,
        "year": 2016,
        "business": 2141
    },
    {
        "id": 4279,
        "ca": 2860170,
        "margin": 852080,
        "ebitda": 263823,
        "loss": 1948319,
        "year": 2017,
        "business": 2142
    },
    {
        "id": 4280,
        "ca": 2156461,
        "margin": -184566,
        "ebitda": 418592,
        "loss": 1231751,
        "year": 2016,
        "business": 2142
    },
    {
        "id": 4281,
        "ca": 3762860,
        "margin": 951288,
        "ebitda": 978871,
        "loss": 2502425,
        "year": 2017,
        "business": 2143
    },
    {
        "id": 4282,
        "ca": 2174739,
        "margin": 239603,
        "ebitda": 91698,
        "loss": 3834844,
        "year": 2016,
        "business": 2143
    },
    {
        "id": 4283,
        "ca": 3830780,
        "margin": 291785,
        "ebitda": 38151,
        "loss": 6365551,
        "year": 2017,
        "business": 2144
    },
    {
        "id": 4284,
        "ca": 1621430,
        "margin": 146345,
        "ebitda": 124977,
        "loss": 7508553,
        "year": 2016,
        "business": 2144
    },
    {
        "id": 4285,
        "ca": 1400867,
        "margin": 472482,
        "ebitda": 967326,
        "loss": 3731128,
        "year": 2017,
        "business": 2145
    },
    {
        "id": 4286,
        "ca": 1995657,
        "margin": 748942,
        "ebitda": 614653,
        "loss": 6671311,
        "year": 2016,
        "business": 2145
    },
    {
        "id": 4287,
        "ca": 2997645,
        "margin": 901958,
        "ebitda": 785681,
        "loss": 1303785,
        "year": 2017,
        "business": 2146
    },
    {
        "id": 4288,
        "ca": 299696,
        "margin": 997820,
        "ebitda": 979764,
        "loss": 895819,
        "year": 2016,
        "business": 2146
    },
    {
        "id": 4289,
        "ca": 1525869,
        "margin": -131775,
        "ebitda": 311759,
        "loss": 2312255,
        "year": 2017,
        "business": 2147
    },
    {
        "id": 4290,
        "ca": 3758644,
        "margin": 988659,
        "ebitda": 365305,
        "loss": 5456939,
        "year": 2016,
        "business": 2147
    },
    {
        "id": 4291,
        "ca": 3768703,
        "margin": 968893,
        "ebitda": 161094,
        "loss": 1440412,
        "year": 2017,
        "business": 2148
    },
    {
        "id": 4292,
        "ca": 1973250,
        "margin": 683987,
        "ebitda": 840989,
        "loss": 7792481,
        "year": 2016,
        "business": 2148
    },
    {
        "id": 4293,
        "ca": 1918712,
        "margin": 208297,
        "ebitda": 109242,
        "loss": 2496800,
        "year": 2017,
        "business": 2149
    },
    {
        "id": 4294,
        "ca": 1891958,
        "margin": 993650,
        "ebitda": 271152,
        "loss": 2251648,
        "year": 2016,
        "business": 2149
    },
    {
        "id": 4295,
        "ca": 327108,
        "margin": 574817,
        "ebitda": 644454,
        "loss": 1469710,
        "year": 2017,
        "business": 2150
    },
    {
        "id": 4296,
        "ca": 864623,
        "margin": 730868,
        "ebitda": 71430,
        "loss": 8920097,
        "year": 2016,
        "business": 2150
    },
    {
        "id": 4297,
        "ca": 3348358,
        "margin": 209455,
        "ebitda": 768052,
        "loss": 4831940,
        "year": 2017,
        "business": 2151
    },
    {
        "id": 4298,
        "ca": 378035,
        "margin": -144425,
        "ebitda": 879574,
        "loss": 2893750,
        "year": 2016,
        "business": 2151
    },
    {
        "id": 4299,
        "ca": 416852,
        "margin": 777518,
        "ebitda": 693690,
        "loss": 4558030,
        "year": 2017,
        "business": 2152
    },
    {
        "id": 4300,
        "ca": 154265,
        "margin": -155260,
        "ebitda": 873014,
        "loss": 391026,
        "year": 2016,
        "business": 2152
    },
    {
        "id": 4301,
        "ca": 1814038,
        "margin": 22943,
        "ebitda": 764251,
        "loss": 4910711,
        "year": 2017,
        "business": 2153
    },
    {
        "id": 4302,
        "ca": 1467097,
        "margin": 313290,
        "ebitda": 627746,
        "loss": 1989470,
        "year": 2016,
        "business": 2153
    },
    {
        "id": 4303,
        "ca": 3084902,
        "margin": -111002,
        "ebitda": 318636,
        "loss": 6437713,
        "year": 2017,
        "business": 2154
    },
    {
        "id": 4304,
        "ca": 1487036,
        "margin": -23511,
        "ebitda": 297467,
        "loss": 8915320,
        "year": 2016,
        "business": 2154
    },
    {
        "id": 4305,
        "ca": 922790,
        "margin": 629028,
        "ebitda": 924228,
        "loss": 4611051,
        "year": 2017,
        "business": 2155
    },
    {
        "id": 4306,
        "ca": 143812,
        "margin": 191264,
        "ebitda": 555470,
        "loss": 7666400,
        "year": 2016,
        "business": 2155
    },
    {
        "id": 4307,
        "ca": 2527824,
        "margin": 669466,
        "ebitda": 215899,
        "loss": 2881112,
        "year": 2017,
        "business": 2156
    },
    {
        "id": 4308,
        "ca": 3283470,
        "margin": 272280,
        "ebitda": 901020,
        "loss": 2371452,
        "year": 2016,
        "business": 2156
    },
    {
        "id": 4309,
        "ca": 3566116,
        "margin": 841355,
        "ebitda": 177259,
        "loss": 4616427,
        "year": 2017,
        "business": 2157
    },
    {
        "id": 4310,
        "ca": 2522467,
        "margin": -17537,
        "ebitda": 186826,
        "loss": 7537421,
        "year": 2016,
        "business": 2157
    },
    {
        "id": 4311,
        "ca": 2924230,
        "margin": 932363,
        "ebitda": 413216,
        "loss": 3110712,
        "year": 2017,
        "business": 2158
    },
    {
        "id": 4312,
        "ca": 2855686,
        "margin": 785881,
        "ebitda": 739501,
        "loss": 1027313,
        "year": 2016,
        "business": 2158
    },
    {
        "id": 4313,
        "ca": 3813603,
        "margin": 578564,
        "ebitda": 261361,
        "loss": 5073025,
        "year": 2017,
        "business": 2159
    },
    {
        "id": 4314,
        "ca": 3424670,
        "margin": 765757,
        "ebitda": 835577,
        "loss": 6248108,
        "year": 2016,
        "business": 2159
    },
    {
        "id": 4315,
        "ca": 3375462,
        "margin": 909693,
        "ebitda": 150159,
        "loss": 1727,
        "year": 2017,
        "business": 2160
    },
    {
        "id": 4316,
        "ca": 3928748,
        "margin": 613973,
        "ebitda": 837251,
        "loss": 2922583,
        "year": 2016,
        "business": 2160
    },
    {
        "id": 4317,
        "ca": 2924633,
        "margin": 854336,
        "ebitda": 95194,
        "loss": 3489284,
        "year": 2017,
        "business": 2161
    },
    {
        "id": 4318,
        "ca": 2730637,
        "margin": 262515,
        "ebitda": 9135,
        "loss": 5751480,
        "year": 2016,
        "business": 2161
    },
    {
        "id": 4319,
        "ca": 939500,
        "margin": 108657,
        "ebitda": 901864,
        "loss": 4930016,
        "year": 2017,
        "business": 2162
    },
    {
        "id": 4320,
        "ca": 262556,
        "margin": 870447,
        "ebitda": 889054,
        "loss": 8490563,
        "year": 2016,
        "business": 2162
    },
    {
        "id": 4321,
        "ca": 1401002,
        "margin": 680397,
        "ebitda": 447359,
        "loss": 9184928,
        "year": 2017,
        "business": 2163
    },
    {
        "id": 4322,
        "ca": 1561751,
        "margin": 743108,
        "ebitda": 307893,
        "loss": 4325104,
        "year": 2016,
        "business": 2163
    },
    {
        "id": 4323,
        "ca": 3751315,
        "margin": -33992,
        "ebitda": 376084,
        "loss": 2538808,
        "year": 2017,
        "business": 2164
    },
    {
        "id": 4324,
        "ca": 816190,
        "margin": 34186,
        "ebitda": 865129,
        "loss": 7746295,
        "year": 2016,
        "business": 2164
    },
    {
        "id": 4325,
        "ca": 389859,
        "margin": 767903,
        "ebitda": 565840,
        "loss": 4942546,
        "year": 2017,
        "business": 2165
    },
    {
        "id": 4326,
        "ca": 3322262,
        "margin": 490616,
        "ebitda": 983418,
        "loss": 2900475,
        "year": 2016,
        "business": 2165
    },
    {
        "id": 4327,
        "ca": 3008708,
        "margin": 145170,
        "ebitda": 993767,
        "loss": 7886365,
        "year": 2017,
        "business": 2166
    },
    {
        "id": 4328,
        "ca": 1891977,
        "margin": 791302,
        "ebitda": 825442,
        "loss": 2197021,
        "year": 2016,
        "business": 2166
    },
    {
        "id": 4329,
        "ca": 3436399,
        "margin": 697795,
        "ebitda": 453017,
        "loss": 6758421,
        "year": 2017,
        "business": 2167
    },
    {
        "id": 4330,
        "ca": 2777766,
        "margin": 233259,
        "ebitda": 454646,
        "loss": 4859546,
        "year": 2016,
        "business": 2167
    },
    {
        "id": 4331,
        "ca": 561816,
        "margin": 122652,
        "ebitda": 766568,
        "loss": 6213834,
        "year": 2017,
        "business": 2168
    },
    {
        "id": 4332,
        "ca": 1123653,
        "margin": 703877,
        "ebitda": 732949,
        "loss": 8712235,
        "year": 2016,
        "business": 2168
    },
    {
        "id": 4333,
        "ca": 3528061,
        "margin": -96959,
        "ebitda": 362847,
        "loss": 5667564,
        "year": 2017,
        "business": 2169
    },
    {
        "id": 4334,
        "ca": 2033786,
        "margin": -148002,
        "ebitda": 537580,
        "loss": 8289176,
        "year": 2016,
        "business": 2169
    },
    {
        "id": 4335,
        "ca": 2827084,
        "margin": 311461,
        "ebitda": 953549,
        "loss": 5004704,
        "year": 2017,
        "business": 2170
    },
    {
        "id": 4336,
        "ca": 2907853,
        "margin": -85606,
        "ebitda": 835974,
        "loss": 5771536,
        "year": 2016,
        "business": 2170
    },
    {
        "id": 4337,
        "ca": 3415351,
        "margin": -62798,
        "ebitda": 680366,
        "loss": 9914651,
        "year": 2017,
        "business": 2171
    },
    {
        "id": 4338,
        "ca": 2577367,
        "margin": -127795,
        "ebitda": 789431,
        "loss": 9600878,
        "year": 2016,
        "business": 2171
    },
    {
        "id": 4339,
        "ca": 2283949,
        "margin": 211942,
        "ebitda": 615754,
        "loss": 4408371,
        "year": 2017,
        "business": 2172
    },
    {
        "id": 4340,
        "ca": 3633153,
        "margin": 364836,
        "ebitda": 836880,
        "loss": 9490839,
        "year": 2016,
        "business": 2172
    },
    {
        "id": 4341,
        "ca": 3200485,
        "margin": 246613,
        "ebitda": 701075,
        "loss": 4285701,
        "year": 2017,
        "business": 2173
    },
    {
        "id": 4342,
        "ca": 2376895,
        "margin": 960599,
        "ebitda": 685330,
        "loss": 570540,
        "year": 2016,
        "business": 2173
    },
    {
        "id": 4343,
        "ca": 1813138,
        "margin": 246825,
        "ebitda": 913583,
        "loss": 5171162,
        "year": 2017,
        "business": 2174
    },
    {
        "id": 4344,
        "ca": 1567335,
        "margin": -61943,
        "ebitda": 657166,
        "loss": 5650051,
        "year": 2016,
        "business": 2174
    },
    {
        "id": 4345,
        "ca": 3666078,
        "margin": 231198,
        "ebitda": 11414,
        "loss": 3863213,
        "year": 2017,
        "business": 2175
    },
    {
        "id": 4346,
        "ca": 1519251,
        "margin": 819246,
        "ebitda": 85641,
        "loss": 41538,
        "year": 2016,
        "business": 2175
    },
    {
        "id": 4347,
        "ca": 3000372,
        "margin": 888426,
        "ebitda": 34276,
        "loss": 8492496,
        "year": 2017,
        "business": 2176
    },
    {
        "id": 4348,
        "ca": 3340910,
        "margin": 981296,
        "ebitda": 949939,
        "loss": 9620390,
        "year": 2016,
        "business": 2176
    },
    {
        "id": 4349,
        "ca": 3742337,
        "margin": 54508,
        "ebitda": 178630,
        "loss": 566562,
        "year": 2017,
        "business": 2177
    },
    {
        "id": 4350,
        "ca": 1430653,
        "margin": 784142,
        "ebitda": 755349,
        "loss": 6489537,
        "year": 2016,
        "business": 2177
    },
    {
        "id": 4351,
        "ca": 3866784,
        "margin": 408461,
        "ebitda": 691124,
        "loss": 8994536,
        "year": 2017,
        "business": 2178
    },
    {
        "id": 4352,
        "ca": 2073279,
        "margin": 753672,
        "ebitda": 455332,
        "loss": 1426681,
        "year": 2016,
        "business": 2178
    },
    {
        "id": 4353,
        "ca": 1548788,
        "margin": 799184,
        "ebitda": 595013,
        "loss": 8922685,
        "year": 2017,
        "business": 2179
    },
    {
        "id": 4354,
        "ca": 2489641,
        "margin": 929108,
        "ebitda": 802323,
        "loss": 1676400,
        "year": 2016,
        "business": 2179
    },
    {
        "id": 4355,
        "ca": 1839504,
        "margin": 722840,
        "ebitda": 653032,
        "loss": 4524202,
        "year": 2017,
        "business": 2180
    },
    {
        "id": 4356,
        "ca": 2943791,
        "margin": 873032,
        "ebitda": 406039,
        "loss": 9625198,
        "year": 2016,
        "business": 2180
    },
    {
        "id": 4357,
        "ca": 2070655,
        "margin": 410447,
        "ebitda": 619161,
        "loss": 6694192,
        "year": 2017,
        "business": 2181
    },
    {
        "id": 4358,
        "ca": 2309658,
        "margin": 722691,
        "ebitda": 708220,
        "loss": 6204578,
        "year": 2016,
        "business": 2181
    },
    {
        "id": 4359,
        "ca": 1845240,
        "margin": -24334,
        "ebitda": 48102,
        "loss": 2602406,
        "year": 2017,
        "business": 2182
    },
    {
        "id": 4360,
        "ca": 859136,
        "margin": 54222,
        "ebitda": 75909,
        "loss": 8067701,
        "year": 2016,
        "business": 2182
    },
    {
        "id": 4361,
        "ca": 2256806,
        "margin": 755948,
        "ebitda": 747333,
        "loss": 3703339,
        "year": 2017,
        "business": 2183
    },
    {
        "id": 4362,
        "ca": 3521637,
        "margin": -57333,
        "ebitda": 41601,
        "loss": 5714553,
        "year": 2016,
        "business": 2183
    },
    {
        "id": 4363,
        "ca": 2815727,
        "margin": -195519,
        "ebitda": 719841,
        "loss": 901698,
        "year": 2017,
        "business": 2184
    },
    {
        "id": 4364,
        "ca": 2015840,
        "margin": 138241,
        "ebitda": 598147,
        "loss": 4198905,
        "year": 2016,
        "business": 2184
    },
    {
        "id": 4365,
        "ca": 3705522,
        "margin": 996756,
        "ebitda": 602658,
        "loss": 7970005,
        "year": 2017,
        "business": 2185
    },
    {
        "id": 4366,
        "ca": 2666854,
        "margin": -195357,
        "ebitda": 949062,
        "loss": 3130848,
        "year": 2016,
        "business": 2185
    },
    {
        "id": 4367,
        "ca": 3603883,
        "margin": 774461,
        "ebitda": 636122,
        "loss": 4943918,
        "year": 2017,
        "business": 2186
    },
    {
        "id": 4368,
        "ca": 3814851,
        "margin": 663838,
        "ebitda": 577149,
        "loss": 2527285,
        "year": 2016,
        "business": 2186
    },
    {
        "id": 4369,
        "ca": 1629966,
        "margin": 746069,
        "ebitda": 850600,
        "loss": 2709161,
        "year": 2017,
        "business": 2187
    },
    {
        "id": 4370,
        "ca": 2846044,
        "margin": 611249,
        "ebitda": 460149,
        "loss": 5250808,
        "year": 2016,
        "business": 2187
    },
    {
        "id": 4371,
        "ca": 3249803,
        "margin": -847,
        "ebitda": 105411,
        "loss": 2520700,
        "year": 2017,
        "business": 2188
    },
    {
        "id": 4372,
        "ca": 1921730,
        "margin": 626212,
        "ebitda": 22819,
        "loss": 5118968,
        "year": 2016,
        "business": 2188
    },
    {
        "id": 4373,
        "ca": 1579791,
        "margin": 949432,
        "ebitda": 637092,
        "loss": 3850113,
        "year": 2017,
        "business": 2189
    },
    {
        "id": 4374,
        "ca": 676502,
        "margin": 586097,
        "ebitda": 917732,
        "loss": 8035471,
        "year": 2016,
        "business": 2189
    },
    {
        "id": 4375,
        "ca": 2950736,
        "margin": 41353,
        "ebitda": 623061,
        "loss": 6113881,
        "year": 2017,
        "business": 2190
    },
    {
        "id": 4376,
        "ca": 3150706,
        "margin": 133352,
        "ebitda": 490164,
        "loss": 7660482,
        "year": 2016,
        "business": 2190
    },
    {
        "id": 4377,
        "ca": 899193,
        "margin": 772406,
        "ebitda": 963667,
        "loss": 6815698,
        "year": 2017,
        "business": 2191
    },
    {
        "id": 4378,
        "ca": 194722,
        "margin": 582959,
        "ebitda": 35452,
        "loss": 5234463,
        "year": 2016,
        "business": 2191
    },
    {
        "id": 4379,
        "ca": 1774014,
        "margin": 812171,
        "ebitda": 816247,
        "loss": 4795,
        "year": 2017,
        "business": 2192
    },
    {
        "id": 4380,
        "ca": 1106349,
        "margin": 946899,
        "ebitda": 3148,
        "loss": 4350676,
        "year": 2016,
        "business": 2192
    },
    {
        "id": 4381,
        "ca": 1187490,
        "margin": 917067,
        "ebitda": 455869,
        "loss": 3178879,
        "year": 2017,
        "business": 2193
    },
    {
        "id": 4382,
        "ca": 2388737,
        "margin": 48027,
        "ebitda": 281517,
        "loss": 533574,
        "year": 2016,
        "business": 2193
    },
    {
        "id": 4383,
        "ca": 2156126,
        "margin": 122500,
        "ebitda": 337337,
        "loss": 6435130,
        "year": 2017,
        "business": 2194
    },
    {
        "id": 4384,
        "ca": 2599176,
        "margin": 195236,
        "ebitda": 972498,
        "loss": 9801343,
        "year": 2016,
        "business": 2194
    },
    {
        "id": 4385,
        "ca": 3151423,
        "margin": 984862,
        "ebitda": 168374,
        "loss": 9707189,
        "year": 2017,
        "business": 2195
    },
    {
        "id": 4386,
        "ca": 2095312,
        "margin": 522848,
        "ebitda": 362540,
        "loss": 5681269,
        "year": 2016,
        "business": 2195
    },
    {
        "id": 4387,
        "ca": 1893869,
        "margin": 945565,
        "ebitda": 321181,
        "loss": 4080963,
        "year": 2017,
        "business": 2196
    },
    {
        "id": 4388,
        "ca": 3975986,
        "margin": -179582,
        "ebitda": 276129,
        "loss": 7201593,
        "year": 2016,
        "business": 2196
    },
    {
        "id": 4389,
        "ca": 242272,
        "margin": 618550,
        "ebitda": 961486,
        "loss": 3487113,
        "year": 2017,
        "business": 2197
    },
    {
        "id": 4390,
        "ca": 3203225,
        "margin": -196757,
        "ebitda": 359647,
        "loss": 7518833,
        "year": 2016,
        "business": 2197
    },
    {
        "id": 4391,
        "ca": 1880214,
        "margin": -112617,
        "ebitda": 395946,
        "loss": 2630162,
        "year": 2017,
        "business": 2198
    },
    {
        "id": 4392,
        "ca": 2742006,
        "margin": 22675,
        "ebitda": 945818,
        "loss": 6911677,
        "year": 2016,
        "business": 2198
    },
    {
        "id": 4393,
        "ca": 2690893,
        "margin": 667809,
        "ebitda": 371700,
        "loss": 1590085,
        "year": 2017,
        "business": 2199
    },
    {
        "id": 4394,
        "ca": 363863,
        "margin": -196490,
        "ebitda": 377252,
        "loss": 1442802,
        "year": 2016,
        "business": 2199
    },
    {
        "id": 4395,
        "ca": 3889022,
        "margin": 330749,
        "ebitda": 154345,
        "loss": 5901331,
        "year": 2017,
        "business": 2200
    },
    {
        "id": 4396,
        "ca": 2898183,
        "margin": 412020,
        "ebitda": 211412,
        "loss": 1898781,
        "year": 2016,
        "business": 2200
    },
    {
        "id": 4397,
        "ca": 2219717,
        "margin": 761838,
        "ebitda": 816857,
        "loss": 5635793,
        "year": 2017,
        "business": 2201
    },
    {
        "id": 4398,
        "ca": 1756341,
        "margin": 551974,
        "ebitda": 187358,
        "loss": 4214180,
        "year": 2016,
        "business": 2201
    },
    {
        "id": 4399,
        "ca": 569647,
        "margin": 207950,
        "ebitda": 83795,
        "loss": 1445553,
        "year": 2017,
        "business": 2202
    },
    {
        "id": 4400,
        "ca": 3913544,
        "margin": 401166,
        "ebitda": 97592,
        "loss": 8342416,
        "year": 2016,
        "business": 2202
    },
    {
        "id": 4401,
        "ca": 2253393,
        "margin": 718227,
        "ebitda": 643447,
        "loss": 9503316,
        "year": 2017,
        "business": 2203
    },
    {
        "id": 4402,
        "ca": 3035875,
        "margin": 334290,
        "ebitda": 836489,
        "loss": 5840951,
        "year": 2016,
        "business": 2203
    },
    {
        "id": 4403,
        "ca": 3042317,
        "margin": 658569,
        "ebitda": 71018,
        "loss": 9471325,
        "year": 2017,
        "business": 2204
    },
    {
        "id": 4404,
        "ca": 3299800,
        "margin": 948579,
        "ebitda": 131329,
        "loss": 784470,
        "year": 2016,
        "business": 2204
    },
    {
        "id": 4405,
        "ca": 1298526,
        "margin": 747600,
        "ebitda": 266745,
        "loss": 8434161,
        "year": 2017,
        "business": 2205
    },
    {
        "id": 4406,
        "ca": 2464257,
        "margin": 291019,
        "ebitda": 133772,
        "loss": 4757829,
        "year": 2016,
        "business": 2205
    },
    {
        "id": 4407,
        "ca": 656037,
        "margin": 920962,
        "ebitda": 363136,
        "loss": 715611,
        "year": 2017,
        "business": 2206
    },
    {
        "id": 4408,
        "ca": 137280,
        "margin": -107503,
        "ebitda": 45496,
        "loss": 2511641,
        "year": 2016,
        "business": 2206
    },
    {
        "id": 4409,
        "ca": 2718905,
        "margin": -8382,
        "ebitda": 422157,
        "loss": 8472060,
        "year": 2017,
        "business": 2207
    },
    {
        "id": 4410,
        "ca": 1685173,
        "margin": 821441,
        "ebitda": 51345,
        "loss": 3556685,
        "year": 2016,
        "business": 2207
    },
    {
        "id": 4411,
        "ca": 3575753,
        "margin": 446185,
        "ebitda": 624581,
        "loss": 9017996,
        "year": 2017,
        "business": 2208
    },
    {
        "id": 4412,
        "ca": 209955,
        "margin": 373733,
        "ebitda": 788932,
        "loss": 5333421,
        "year": 2016,
        "business": 2208
    },
    {
        "id": 4413,
        "ca": 3839319,
        "margin": 668896,
        "ebitda": 54927,
        "loss": 1714494,
        "year": 2017,
        "business": 2209
    },
    {
        "id": 4414,
        "ca": 2167669,
        "margin": 516756,
        "ebitda": 54948,
        "loss": 5883349,
        "year": 2016,
        "business": 2209
    },
    {
        "id": 4415,
        "ca": 860675,
        "margin": 726715,
        "ebitda": 274949,
        "loss": 6317226,
        "year": 2017,
        "business": 2210
    },
    {
        "id": 4416,
        "ca": 1401590,
        "margin": 762884,
        "ebitda": 893200,
        "loss": 2049642,
        "year": 2016,
        "business": 2210
    },
    {
        "id": 4417,
        "ca": 1716556,
        "margin": -126313,
        "ebitda": 234803,
        "loss": 7214121,
        "year": 2017,
        "business": 2211
    },
    {
        "id": 4418,
        "ca": 284385,
        "margin": 382663,
        "ebitda": 559178,
        "loss": 4567945,
        "year": 2016,
        "business": 2211
    },
    {
        "id": 4419,
        "ca": 760972,
        "margin": 608660,
        "ebitda": 662529,
        "loss": 9343354,
        "year": 2017,
        "business": 2212
    },
    {
        "id": 4420,
        "ca": 2956499,
        "margin": 325767,
        "ebitda": 33453,
        "loss": 46559,
        "year": 2016,
        "business": 2212
    },
    {
        "id": 4421,
        "ca": 1010520,
        "margin": 466668,
        "ebitda": 410516,
        "loss": 6408445,
        "year": 2017,
        "business": 2213
    },
    {
        "id": 4422,
        "ca": 3003038,
        "margin": 633917,
        "ebitda": 748296,
        "loss": 7334582,
        "year": 2016,
        "business": 2213
    },
    {
        "id": 4423,
        "ca": 1787673,
        "margin": 391473,
        "ebitda": 17367,
        "loss": 8838290,
        "year": 2017,
        "business": 2214
    },
    {
        "id": 4424,
        "ca": 3056695,
        "margin": 118720,
        "ebitda": 833986,
        "loss": 1329689,
        "year": 2016,
        "business": 2214
    },
    {
        "id": 4425,
        "ca": 2931922,
        "margin": 545582,
        "ebitda": 262168,
        "loss": 8322734,
        "year": 2017,
        "business": 2215
    },
    {
        "id": 4426,
        "ca": 3106178,
        "margin": 802826,
        "ebitda": 870047,
        "loss": 1968437,
        "year": 2016,
        "business": 2215
    },
    {
        "id": 4427,
        "ca": 951318,
        "margin": 41579,
        "ebitda": 674636,
        "loss": 4910920,
        "year": 2017,
        "business": 2216
    },
    {
        "id": 4428,
        "ca": 1349760,
        "margin": 611029,
        "ebitda": 517653,
        "loss": 9358256,
        "year": 2016,
        "business": 2216
    },
    {
        "id": 4429,
        "ca": 2569565,
        "margin": -5245,
        "ebitda": 33578,
        "loss": 5063700,
        "year": 2017,
        "business": 2217
    },
    {
        "id": 4430,
        "ca": 1568746,
        "margin": 720222,
        "ebitda": 254339,
        "loss": 4275511,
        "year": 2016,
        "business": 2217
    },
    {
        "id": 4431,
        "ca": 1923199,
        "margin": 608612,
        "ebitda": 839213,
        "loss": 7724503,
        "year": 2017,
        "business": 2218
    },
    {
        "id": 4432,
        "ca": 664102,
        "margin": 869980,
        "ebitda": 140011,
        "loss": 9316937,
        "year": 2016,
        "business": 2218
    },
    {
        "id": 4433,
        "ca": 392087,
        "margin": 53147,
        "ebitda": 842057,
        "loss": 6132850,
        "year": 2017,
        "business": 2219
    },
    {
        "id": 4434,
        "ca": 2261787,
        "margin": 556825,
        "ebitda": 915400,
        "loss": 8581554,
        "year": 2016,
        "business": 2219
    },
    {
        "id": 4435,
        "ca": 2284928,
        "margin": 114387,
        "ebitda": 377939,
        "loss": 5883459,
        "year": 2017,
        "business": 2220
    },
    {
        "id": 4436,
        "ca": 1621269,
        "margin": 891839,
        "ebitda": 665915,
        "loss": 5702747,
        "year": 2016,
        "business": 2220
    },
    {
        "id": 4437,
        "ca": 847545,
        "margin": 915350,
        "ebitda": 529109,
        "loss": 9461549,
        "year": 2017,
        "business": 2221
    },
    {
        "id": 4438,
        "ca": 1530298,
        "margin": 455171,
        "ebitda": 851352,
        "loss": 2596535,
        "year": 2016,
        "business": 2221
    },
    {
        "id": 4439,
        "ca": 1446193,
        "margin": 813909,
        "ebitda": 747653,
        "loss": 4350919,
        "year": 2017,
        "business": 2222
    },
    {
        "id": 4440,
        "ca": 1501763,
        "margin": 254720,
        "ebitda": 201559,
        "loss": 363810,
        "year": 2016,
        "business": 2222
    },
    {
        "id": 4441,
        "ca": 3354980,
        "margin": 288394,
        "ebitda": 954936,
        "loss": 339268,
        "year": 2017,
        "business": 2223
    },
    {
        "id": 4442,
        "ca": 705691,
        "margin": 31143,
        "ebitda": 279893,
        "loss": 868212,
        "year": 2016,
        "business": 2223
    },
    {
        "id": 4443,
        "ca": 1468082,
        "margin": 920479,
        "ebitda": 14209,
        "loss": 4997015,
        "year": 2017,
        "business": 2224
    },
    {
        "id": 4444,
        "ca": 1440635,
        "margin": 477581,
        "ebitda": 181965,
        "loss": 4799804,
        "year": 2016,
        "business": 2224
    },
    {
        "id": 4445,
        "ca": 1834736,
        "margin": 266930,
        "ebitda": 139596,
        "loss": 2694091,
        "year": 2017,
        "business": 2225
    },
    {
        "id": 4446,
        "ca": 861386,
        "margin": 278691,
        "ebitda": 840633,
        "loss": 351358,
        "year": 2016,
        "business": 2225
    },
    {
        "id": 4447,
        "ca": 2098835,
        "margin": 303890,
        "ebitda": 64509,
        "loss": 7448366,
        "year": 2017,
        "business": 2226
    },
    {
        "id": 4448,
        "ca": 1962087,
        "margin": 160425,
        "ebitda": 521042,
        "loss": 5559694,
        "year": 2016,
        "business": 2226
    },
    {
        "id": 4449,
        "ca": 2120874,
        "margin": 464133,
        "ebitda": 812432,
        "loss": 5430314,
        "year": 2017,
        "business": 2227
    },
    {
        "id": 4450,
        "ca": 2138762,
        "margin": 693207,
        "ebitda": 338632,
        "loss": 258643,
        "year": 2016,
        "business": 2227
    },
    {
        "id": 4451,
        "ca": 474921,
        "margin": -185517,
        "ebitda": 631776,
        "loss": 3218944,
        "year": 2017,
        "business": 2228
    },
    {
        "id": 4452,
        "ca": 2990297,
        "margin": -51262,
        "ebitda": 53780,
        "loss": 3031239,
        "year": 2016,
        "business": 2228
    },
    {
        "id": 4453,
        "ca": 2664465,
        "margin": -16421,
        "ebitda": 285623,
        "loss": 464911,
        "year": 2017,
        "business": 2229
    },
    {
        "id": 4454,
        "ca": 2325616,
        "margin": 852331,
        "ebitda": 666424,
        "loss": 4003657,
        "year": 2016,
        "business": 2229
    },
    {
        "id": 4455,
        "ca": 2229344,
        "margin": 554057,
        "ebitda": 201811,
        "loss": 8645420,
        "year": 2017,
        "business": 2230
    },
    {
        "id": 4456,
        "ca": 3190362,
        "margin": 889913,
        "ebitda": 779869,
        "loss": 5944041,
        "year": 2016,
        "business": 2230
    },
    {
        "id": 4457,
        "ca": 3551453,
        "margin": 821869,
        "ebitda": 434250,
        "loss": 1197258,
        "year": 2017,
        "business": 2231
    },
    {
        "id": 4458,
        "ca": 3837549,
        "margin": 706701,
        "ebitda": 820626,
        "loss": 8870882,
        "year": 2016,
        "business": 2231
    },
    {
        "id": 4459,
        "ca": 3950992,
        "margin": 913472,
        "ebitda": 519731,
        "loss": 8520981,
        "year": 2017,
        "business": 2232
    },
    {
        "id": 4460,
        "ca": 839183,
        "margin": 677435,
        "ebitda": 290693,
        "loss": 3045717,
        "year": 2016,
        "business": 2232
    },
    {
        "id": 4461,
        "ca": 1962552,
        "margin": -53451,
        "ebitda": 927863,
        "loss": 8404124,
        "year": 2017,
        "business": 2233
    },
    {
        "id": 4462,
        "ca": 3482972,
        "margin": 883776,
        "ebitda": 122439,
        "loss": 1252687,
        "year": 2016,
        "business": 2233
    },
    {
        "id": 4463,
        "ca": 566017,
        "margin": 749208,
        "ebitda": 648826,
        "loss": 8833738,
        "year": 2017,
        "business": 2234
    },
    {
        "id": 4464,
        "ca": 1082597,
        "margin": -136917,
        "ebitda": 307618,
        "loss": 6522319,
        "year": 2016,
        "business": 2234
    },
    {
        "id": 4465,
        "ca": 2288930,
        "margin": 625866,
        "ebitda": 527456,
        "loss": 9011473,
        "year": 2017,
        "business": 2235
    },
    {
        "id": 4466,
        "ca": 1211123,
        "margin": 192301,
        "ebitda": 791774,
        "loss": 1162884,
        "year": 2016,
        "business": 2235
    },
    {
        "id": 4467,
        "ca": 916593,
        "margin": 872099,
        "ebitda": 105123,
        "loss": 2187726,
        "year": 2017,
        "business": 2236
    },
    {
        "id": 4468,
        "ca": 3480523,
        "margin": 887867,
        "ebitda": 923437,
        "loss": 5417054,
        "year": 2016,
        "business": 2236
    },
    {
        "id": 4469,
        "ca": 1968315,
        "margin": 804693,
        "ebitda": 489249,
        "loss": 4969114,
        "year": 2017,
        "business": 2237
    },
    {
        "id": 4470,
        "ca": 1240908,
        "margin": 800701,
        "ebitda": 46021,
        "loss": 2781958,
        "year": 2016,
        "business": 2237
    },
    {
        "id": 4471,
        "ca": 2170870,
        "margin": -30607,
        "ebitda": 557277,
        "loss": 7459962,
        "year": 2017,
        "business": 2238
    },
    {
        "id": 4472,
        "ca": 1029086,
        "margin": 477424,
        "ebitda": 419485,
        "loss": 3592286,
        "year": 2016,
        "business": 2238
    },
    {
        "id": 4473,
        "ca": 2711782,
        "margin": 736784,
        "ebitda": 522943,
        "loss": 8552177,
        "year": 2017,
        "business": 2239
    },
    {
        "id": 4474,
        "ca": 1197378,
        "margin": 150762,
        "ebitda": 434527,
        "loss": 3712530,
        "year": 2016,
        "business": 2239
    },
    {
        "id": 4475,
        "ca": 1112998,
        "margin": 975979,
        "ebitda": 638482,
        "loss": 7559601,
        "year": 2017,
        "business": 2240
    },
    {
        "id": 4476,
        "ca": 3812725,
        "margin": 636443,
        "ebitda": 135589,
        "loss": 7138591,
        "year": 2016,
        "business": 2240
    },
    {
        "id": 4477,
        "ca": 2383838,
        "margin": 616939,
        "ebitda": 93826,
        "loss": 2747264,
        "year": 2017,
        "business": 2241
    },
    {
        "id": 4478,
        "ca": 181012,
        "margin": 250837,
        "ebitda": 115430,
        "loss": 9199688,
        "year": 2016,
        "business": 2241
    },
    {
        "id": 4479,
        "ca": 1405292,
        "margin": 540777,
        "ebitda": 28731,
        "loss": 2524599,
        "year": 2017,
        "business": 2242
    },
    {
        "id": 4480,
        "ca": 329921,
        "margin": 346998,
        "ebitda": 835285,
        "loss": 4111345,
        "year": 2016,
        "business": 2242
    },
    {
        "id": 4481,
        "ca": 3302508,
        "margin": 168359,
        "ebitda": 846929,
        "loss": 1222148,
        "year": 2017,
        "business": 2243
    },
    {
        "id": 4482,
        "ca": 3575626,
        "margin": 876556,
        "ebitda": 371425,
        "loss": 1804369,
        "year": 2016,
        "business": 2243
    },
    {
        "id": 4483,
        "ca": 2366861,
        "margin": 190274,
        "ebitda": 455961,
        "loss": 1587340,
        "year": 2017,
        "business": 2244
    },
    {
        "id": 4484,
        "ca": 3560590,
        "margin": 10046,
        "ebitda": 914632,
        "loss": 4602986,
        "year": 2016,
        "business": 2244
    },
    {
        "id": 4485,
        "ca": 3576414,
        "margin": 909487,
        "ebitda": 852413,
        "loss": 5217031,
        "year": 2017,
        "business": 2245
    },
    {
        "id": 4486,
        "ca": 2352924,
        "margin": 152405,
        "ebitda": 326292,
        "loss": 952533,
        "year": 2016,
        "business": 2245
    },
    {
        "id": 4487,
        "ca": 3558108,
        "margin": -95600,
        "ebitda": 171362,
        "loss": 7210648,
        "year": 2017,
        "business": 2246
    },
    {
        "id": 4488,
        "ca": 1606860,
        "margin": 188624,
        "ebitda": 607255,
        "loss": 7826122,
        "year": 2016,
        "business": 2246
    },
    {
        "id": 4489,
        "ca": 3270824,
        "margin": 761275,
        "ebitda": 754007,
        "loss": 4707835,
        "year": 2017,
        "business": 2247
    },
    {
        "id": 4490,
        "ca": 3448481,
        "margin": -90003,
        "ebitda": 179065,
        "loss": 3175883,
        "year": 2016,
        "business": 2247
    },
    {
        "id": 4491,
        "ca": 1314254,
        "margin": 308412,
        "ebitda": 897616,
        "loss": 4718253,
        "year": 2017,
        "business": 2248
    },
    {
        "id": 4492,
        "ca": 3846330,
        "margin": 799473,
        "ebitda": 521937,
        "loss": 4576128,
        "year": 2016,
        "business": 2248
    },
    {
        "id": 4493,
        "ca": 1621442,
        "margin": -124749,
        "ebitda": 986696,
        "loss": 9496804,
        "year": 2017,
        "business": 2249
    },
    {
        "id": 4494,
        "ca": 3406668,
        "margin": 45680,
        "ebitda": 712892,
        "loss": 9152835,
        "year": 2016,
        "business": 2249
    },
    {
        "id": 4495,
        "ca": 2269765,
        "margin": -149226,
        "ebitda": 792527,
        "loss": 1323550,
        "year": 2017,
        "business": 2250
    },
    {
        "id": 4496,
        "ca": 2963306,
        "margin": 454366,
        "ebitda": 724729,
        "loss": 5595133,
        "year": 2016,
        "business": 2250
    },
    {
        "id": 4497,
        "ca": 1605992,
        "margin": 988656,
        "ebitda": 462810,
        "loss": 9989406,
        "year": 2017,
        "business": 2251
    },
    {
        "id": 4498,
        "ca": 1686924,
        "margin": 365867,
        "ebitda": 41800,
        "loss": 2985081,
        "year": 2016,
        "business": 2251
    },
    {
        "id": 4499,
        "ca": 1581711,
        "margin": 211622,
        "ebitda": 341743,
        "loss": 2826364,
        "year": 2017,
        "business": 2252
    },
    {
        "id": 4500,
        "ca": 967668,
        "margin": 616783,
        "ebitda": 829230,
        "loss": 4969477,
        "year": 2016,
        "business": 2252
    },
    {
        "id": 4501,
        "ca": 2130668,
        "margin": 187434,
        "ebitda": 82987,
        "loss": 2374500,
        "year": 2017,
        "business": 2253
    },
    {
        "id": 4502,
        "ca": 2060937,
        "margin": 693994,
        "ebitda": 173536,
        "loss": 738598,
        "year": 2016,
        "business": 2253
    },
    {
        "id": 4503,
        "ca": 3783759,
        "margin": -102080,
        "ebitda": 236607,
        "loss": 5425293,
        "year": 2017,
        "business": 2254
    },
    {
        "id": 4504,
        "ca": 215432,
        "margin": 573524,
        "ebitda": 470330,
        "loss": 7000,
        "year": 2016,
        "business": 2254
    },
    {
        "id": 4505,
        "ca": 2905580,
        "margin": 764773,
        "ebitda": 154364,
        "loss": 4777236,
        "year": 2017,
        "business": 2255
    },
    {
        "id": 4506,
        "ca": 1195582,
        "margin": 70071,
        "ebitda": 212451,
        "loss": 1188373,
        "year": 2016,
        "business": 2255
    },
    {
        "id": 4507,
        "ca": 3495377,
        "margin": 636655,
        "ebitda": 134257,
        "loss": 3172749,
        "year": 2017,
        "business": 2256
    },
    {
        "id": 4508,
        "ca": 1677355,
        "margin": 911493,
        "ebitda": 888192,
        "loss": 6089259,
        "year": 2016,
        "business": 2256
    },
    {
        "id": 4509,
        "ca": 1466196,
        "margin": 548741,
        "ebitda": 160073,
        "loss": 9729979,
        "year": 2017,
        "business": 2257
    },
    {
        "id": 4510,
        "ca": 1661417,
        "margin": 197013,
        "ebitda": 290678,
        "loss": 4389395,
        "year": 2016,
        "business": 2257
    },
    {
        "id": 4511,
        "ca": 3127946,
        "margin": 893831,
        "ebitda": 288833,
        "loss": 7748286,
        "year": 2017,
        "business": 2258
    },
    {
        "id": 4512,
        "ca": 2225294,
        "margin": 217009,
        "ebitda": 62425,
        "loss": 1368019,
        "year": 2016,
        "business": 2258
    },
    {
        "id": 4513,
        "ca": 1132704,
        "margin": -150713,
        "ebitda": 232972,
        "loss": 1084483,
        "year": 2017,
        "business": 2259
    },
    {
        "id": 4514,
        "ca": 3465107,
        "margin": 199917,
        "ebitda": 689631,
        "loss": 3865907,
        "year": 2016,
        "business": 2259
    },
    {
        "id": 4515,
        "ca": 3217194,
        "margin": -111319,
        "ebitda": 990607,
        "loss": 7304804,
        "year": 2017,
        "business": 2260
    },
    {
        "id": 4516,
        "ca": 1751330,
        "margin": 57717,
        "ebitda": 662916,
        "loss": 5826769,
        "year": 2016,
        "business": 2260
    },
    {
        "id": 4517,
        "ca": 1382913,
        "margin": 19950,
        "ebitda": 382795,
        "loss": 4053846,
        "year": 2017,
        "business": 2261
    },
    {
        "id": 4518,
        "ca": 1988292,
        "margin": 662285,
        "ebitda": 349462,
        "loss": 2033756,
        "year": 2016,
        "business": 2261
    },
    {
        "id": 4519,
        "ca": 2043418,
        "margin": -19705,
        "ebitda": 502427,
        "loss": 2460692,
        "year": 2017,
        "business": 2262
    },
    {
        "id": 4520,
        "ca": 3748605,
        "margin": 698430,
        "ebitda": 836909,
        "loss": 6905693,
        "year": 2016,
        "business": 2262
    },
    {
        "id": 4521,
        "ca": 707876,
        "margin": 790040,
        "ebitda": 245530,
        "loss": 8748923,
        "year": 2017,
        "business": 2263
    },
    {
        "id": 4522,
        "ca": 1935866,
        "margin": 201333,
        "ebitda": 969947,
        "loss": 563824,
        "year": 2016,
        "business": 2263
    },
    {
        "id": 4523,
        "ca": 2803582,
        "margin": 56784,
        "ebitda": 353169,
        "loss": 4319179,
        "year": 2017,
        "business": 2264
    },
    {
        "id": 4524,
        "ca": 1482824,
        "margin": -46544,
        "ebitda": 300833,
        "loss": 2922905,
        "year": 2016,
        "business": 2264
    },
    {
        "id": 4525,
        "ca": 1071588,
        "margin": 615008,
        "ebitda": 759283,
        "loss": 3420671,
        "year": 2017,
        "business": 2265
    },
    {
        "id": 4526,
        "ca": 2185143,
        "margin": 373678,
        "ebitda": 768236,
        "loss": 1655402,
        "year": 2016,
        "business": 2265
    },
    {
        "id": 4527,
        "ca": 3743866,
        "margin": 977142,
        "ebitda": 7294,
        "loss": 61695,
        "year": 2017,
        "business": 2266
    },
    {
        "id": 4528,
        "ca": 1838054,
        "margin": 710668,
        "ebitda": 73938,
        "loss": 7620100,
        "year": 2016,
        "business": 2266
    },
    {
        "id": 4529,
        "ca": 1110597,
        "margin": 357251,
        "ebitda": 384948,
        "loss": 2165446,
        "year": 2017,
        "business": 2267
    },
    {
        "id": 4530,
        "ca": 603497,
        "margin": 880604,
        "ebitda": 498291,
        "loss": 6209682,
        "year": 2016,
        "business": 2267
    },
    {
        "id": 4531,
        "ca": 3582353,
        "margin": 647395,
        "ebitda": 756430,
        "loss": 5710510,
        "year": 2017,
        "business": 2268
    },
    {
        "id": 4532,
        "ca": 2897457,
        "margin": 101904,
        "ebitda": 765526,
        "loss": 369894,
        "year": 2016,
        "business": 2268
    },
    {
        "id": 4533,
        "ca": 2085654,
        "margin": 945811,
        "ebitda": 685290,
        "loss": 7008522,
        "year": 2017,
        "business": 2269
    },
    {
        "id": 4534,
        "ca": 3575110,
        "margin": -166822,
        "ebitda": 56090,
        "loss": 6708429,
        "year": 2016,
        "business": 2269
    },
    {
        "id": 4535,
        "ca": 3800200,
        "margin": 983408,
        "ebitda": 656006,
        "loss": 3614391,
        "year": 2017,
        "business": 2270
    },
    {
        "id": 4536,
        "ca": 3156339,
        "margin": 938715,
        "ebitda": 110395,
        "loss": 9988595,
        "year": 2016,
        "business": 2270
    },
    {
        "id": 4537,
        "ca": 2779663,
        "margin": 484032,
        "ebitda": 420505,
        "loss": 2877267,
        "year": 2017,
        "business": 2271
    },
    {
        "id": 4538,
        "ca": 3192092,
        "margin": 695775,
        "ebitda": 446858,
        "loss": 1989627,
        "year": 2016,
        "business": 2271
    },
    {
        "id": 4539,
        "ca": 2628236,
        "margin": 923745,
        "ebitda": 406925,
        "loss": 4739018,
        "year": 2017,
        "business": 2272
    },
    {
        "id": 4540,
        "ca": 2504588,
        "margin": 716151,
        "ebitda": 517226,
        "loss": 8122080,
        "year": 2016,
        "business": 2272
    },
    {
        "id": 4541,
        "ca": 997117,
        "margin": 601282,
        "ebitda": 941833,
        "loss": 8276036,
        "year": 2017,
        "business": 2273
    },
    {
        "id": 4542,
        "ca": 2850944,
        "margin": 339898,
        "ebitda": 460552,
        "loss": 4659996,
        "year": 2016,
        "business": 2273
    },
    {
        "id": 4543,
        "ca": 2862585,
        "margin": 614851,
        "ebitda": 935409,
        "loss": 9626931,
        "year": 2017,
        "business": 2274
    },
    {
        "id": 4544,
        "ca": 442032,
        "margin": 66568,
        "ebitda": 424129,
        "loss": 3074482,
        "year": 2016,
        "business": 2274
    },
    {
        "id": 4545,
        "ca": 1749281,
        "margin": 305442,
        "ebitda": 792086,
        "loss": 8975322,
        "year": 2017,
        "business": 2275
    },
    {
        "id": 4546,
        "ca": 1705519,
        "margin": 219592,
        "ebitda": 813822,
        "loss": 8136019,
        "year": 2016,
        "business": 2275
    },
    {
        "id": 4547,
        "ca": 3085562,
        "margin": 541397,
        "ebitda": 941276,
        "loss": 799152,
        "year": 2017,
        "business": 2276
    },
    {
        "id": 4548,
        "ca": 2681506,
        "margin": 582101,
        "ebitda": 1093,
        "loss": 3946368,
        "year": 2016,
        "business": 2276
    },
    {
        "id": 4549,
        "ca": 2045899,
        "margin": 638998,
        "ebitda": 377189,
        "loss": 1935631,
        "year": 2017,
        "business": 2277
    },
    {
        "id": 4550,
        "ca": 2450274,
        "margin": 556985,
        "ebitda": 67665,
        "loss": 7462333,
        "year": 2016,
        "business": 2277
    },
    {
        "id": 4551,
        "ca": 2725524,
        "margin": -79936,
        "ebitda": 283420,
        "loss": 1513558,
        "year": 2017,
        "business": 2278
    },
    {
        "id": 4552,
        "ca": 2168066,
        "margin": 932147,
        "ebitda": 181329,
        "loss": 6875170,
        "year": 2016,
        "business": 2278
    },
    {
        "id": 4553,
        "ca": 3124755,
        "margin": 555100,
        "ebitda": 844024,
        "loss": 7460202,
        "year": 2017,
        "business": 2279
    },
    {
        "id": 4554,
        "ca": 3620914,
        "margin": 7120,
        "ebitda": 731419,
        "loss": 2674956,
        "year": 2016,
        "business": 2279
    },
    {
        "id": 4555,
        "ca": 2770687,
        "margin": -57402,
        "ebitda": 247868,
        "loss": 7239538,
        "year": 2017,
        "business": 2280
    },
    {
        "id": 4556,
        "ca": 1501347,
        "margin": 498682,
        "ebitda": 720131,
        "loss": 5222928,
        "year": 2016,
        "business": 2280
    },
    {
        "id": 4557,
        "ca": 2847864,
        "margin": 943351,
        "ebitda": 2204,
        "loss": 5569937,
        "year": 2017,
        "business": 2281
    },
    {
        "id": 4558,
        "ca": 2250194,
        "margin": 190540,
        "ebitda": 999126,
        "loss": 9676330,
        "year": 2016,
        "business": 2281
    },
    {
        "id": 4559,
        "ca": 3418804,
        "margin": 564868,
        "ebitda": 683794,
        "loss": 5886162,
        "year": 2017,
        "business": 2282
    },
    {
        "id": 4560,
        "ca": 2674143,
        "margin": -69468,
        "ebitda": 567767,
        "loss": 7289695,
        "year": 2016,
        "business": 2282
    },
    {
        "id": 4561,
        "ca": 2527069,
        "margin": 347646,
        "ebitda": 517752,
        "loss": 5525663,
        "year": 2017,
        "business": 2283
    },
    {
        "id": 4562,
        "ca": 2239416,
        "margin": -16094,
        "ebitda": 756599,
        "loss": 2475871,
        "year": 2016,
        "business": 2283
    },
    {
        "id": 4563,
        "ca": 3855462,
        "margin": 439437,
        "ebitda": 229158,
        "loss": 5632398,
        "year": 2017,
        "business": 2284
    },
    {
        "id": 4564,
        "ca": 3542559,
        "margin": 403375,
        "ebitda": 347885,
        "loss": 459845,
        "year": 2016,
        "business": 2284
    },
    {
        "id": 4565,
        "ca": 780418,
        "margin": 253910,
        "ebitda": 61490,
        "loss": 2302731,
        "year": 2017,
        "business": 2285
    },
    {
        "id": 4566,
        "ca": 852624,
        "margin": 950961,
        "ebitda": 415343,
        "loss": 5304281,
        "year": 2016,
        "business": 2285
    },
    {
        "id": 4567,
        "ca": 1683315,
        "margin": 366569,
        "ebitda": 904660,
        "loss": 9447066,
        "year": 2017,
        "business": 2286
    },
    {
        "id": 4568,
        "ca": 2481528,
        "margin": 843435,
        "ebitda": 253405,
        "loss": 227331,
        "year": 2016,
        "business": 2286
    },
    {
        "id": 4569,
        "ca": 2923356,
        "margin": 40946,
        "ebitda": 224150,
        "loss": 5998069,
        "year": 2017,
        "business": 2287
    },
    {
        "id": 4570,
        "ca": 2166751,
        "margin": -191638,
        "ebitda": 499742,
        "loss": 5399421,
        "year": 2016,
        "business": 2287
    },
    {
        "id": 4571,
        "ca": 2638760,
        "margin": 475681,
        "ebitda": 933826,
        "loss": 8523412,
        "year": 2017,
        "business": 2288
    },
    {
        "id": 4572,
        "ca": 971252,
        "margin": 653981,
        "ebitda": 418201,
        "loss": 8203281,
        "year": 2016,
        "business": 2288
    },
    {
        "id": 4573,
        "ca": 3157255,
        "margin": 68908,
        "ebitda": 828045,
        "loss": 3667986,
        "year": 2017,
        "business": 2289
    },
    {
        "id": 4574,
        "ca": 739942,
        "margin": 886381,
        "ebitda": 246003,
        "loss": 2360889,
        "year": 2016,
        "business": 2289
    },
    {
        "id": 4575,
        "ca": 3214168,
        "margin": 338364,
        "ebitda": 639154,
        "loss": 4144626,
        "year": 2017,
        "business": 2290
    },
    {
        "id": 4576,
        "ca": 1118078,
        "margin": -129297,
        "ebitda": 435120,
        "loss": 2079426,
        "year": 2016,
        "business": 2290
    },
    {
        "id": 4577,
        "ca": 3615862,
        "margin": 298206,
        "ebitda": 481195,
        "loss": 5200679,
        "year": 2017,
        "business": 2291
    },
    {
        "id": 4578,
        "ca": 690989,
        "margin": 235668,
        "ebitda": 753715,
        "loss": 8693035,
        "year": 2016,
        "business": 2291
    },
    {
        "id": 4579,
        "ca": 3862714,
        "margin": 151739,
        "ebitda": 751571,
        "loss": 3531120,
        "year": 2017,
        "business": 2292
    },
    {
        "id": 4580,
        "ca": 3848570,
        "margin": -101425,
        "ebitda": 507648,
        "loss": 5507248,
        "year": 2016,
        "business": 2292
    },
    {
        "id": 4581,
        "ca": 1810831,
        "margin": 336372,
        "ebitda": 698792,
        "loss": 280354,
        "year": 2017,
        "business": 2293
    },
    {
        "id": 4582,
        "ca": 2472954,
        "margin": 11517,
        "ebitda": 271457,
        "loss": 3860091,
        "year": 2016,
        "business": 2293
    },
    {
        "id": 4583,
        "ca": 2495145,
        "margin": 269393,
        "ebitda": 611512,
        "loss": 9524803,
        "year": 2017,
        "business": 2294
    },
    {
        "id": 4584,
        "ca": 2742711,
        "margin": 618463,
        "ebitda": 603368,
        "loss": 381360,
        "year": 2016,
        "business": 2294
    },
    {
        "id": 4585,
        "ca": 2468948,
        "margin": 266613,
        "ebitda": 518012,
        "loss": 8264606,
        "year": 2017,
        "business": 2295
    },
    {
        "id": 4586,
        "ca": 2998984,
        "margin": 466802,
        "ebitda": 619463,
        "loss": 5488379,
        "year": 2016,
        "business": 2295
    },
    {
        "id": 4587,
        "ca": 3800623,
        "margin": 877950,
        "ebitda": 684045,
        "loss": 2672828,
        "year": 2017,
        "business": 2296
    },
    {
        "id": 4588,
        "ca": 2423741,
        "margin": 638411,
        "ebitda": 390220,
        "loss": 7443191,
        "year": 2016,
        "business": 2296
    },
    {
        "id": 4589,
        "ca": 1137052,
        "margin": 707224,
        "ebitda": 934608,
        "loss": 7813918,
        "year": 2017,
        "business": 2297
    },
    {
        "id": 4590,
        "ca": 1785791,
        "margin": 286417,
        "ebitda": 941119,
        "loss": 6486162,
        "year": 2016,
        "business": 2297
    },
    {
        "id": 4591,
        "ca": 3028204,
        "margin": 484698,
        "ebitda": 736343,
        "loss": 694053,
        "year": 2017,
        "business": 2298
    },
    {
        "id": 4592,
        "ca": 3691937,
        "margin": 689405,
        "ebitda": 330008,
        "loss": 6404240,
        "year": 2016,
        "business": 2298
    },
    {
        "id": 4593,
        "ca": 3359516,
        "margin": 848271,
        "ebitda": 802381,
        "loss": 1960985,
        "year": 2017,
        "business": 2299
    },
    {
        "id": 4594,
        "ca": 629838,
        "margin": 142714,
        "ebitda": 98320,
        "loss": 7795293,
        "year": 2016,
        "business": 2299
    },
    {
        "id": 4595,
        "ca": 755864,
        "margin": -134281,
        "ebitda": 50907,
        "loss": 7205032,
        "year": 2017,
        "business": 2300
    },
    {
        "id": 4596,
        "ca": 1304154,
        "margin": 666758,
        "ebitda": 473219,
        "loss": 3120724,
        "year": 2016,
        "business": 2300
    },
    {
        "id": 4597,
        "ca": 2391428,
        "margin": 366454,
        "ebitda": 572774,
        "loss": 226070,
        "year": 2017,
        "business": 2301
    },
    {
        "id": 4598,
        "ca": 2543543,
        "margin": 340375,
        "ebitda": 975406,
        "loss": 1784203,
        "year": 2016,
        "business": 2301
    },
    {
        "id": 4599,
        "ca": 597931,
        "margin": 864210,
        "ebitda": 103209,
        "loss": 9041769,
        "year": 2017,
        "business": 2302
    },
    {
        "id": 4600,
        "ca": 1416031,
        "margin": 24317,
        "ebitda": 801787,
        "loss": 2280285,
        "year": 2016,
        "business": 2302
    },
    {
        "id": 4601,
        "ca": 221003,
        "margin": -196582,
        "ebitda": 799669,
        "loss": 1486436,
        "year": 2017,
        "business": 2303
    },
    {
        "id": 4602,
        "ca": 2849613,
        "margin": 295582,
        "ebitda": 440676,
        "loss": 5325285,
        "year": 2016,
        "business": 2303
    },
    {
        "id": 4603,
        "ca": 3955854,
        "margin": 392345,
        "ebitda": 568943,
        "loss": 2154566,
        "year": 2017,
        "business": 2304
    },
    {
        "id": 4604,
        "ca": 963387,
        "margin": 746525,
        "ebitda": 237115,
        "loss": 5620944,
        "year": 2016,
        "business": 2304
    },
    {
        "id": 4605,
        "ca": 1488892,
        "margin": 558521,
        "ebitda": 929707,
        "loss": 5059510,
        "year": 2017,
        "business": 2305
    },
    {
        "id": 4606,
        "ca": 2011175,
        "margin": 616697,
        "ebitda": 9370,
        "loss": 218048,
        "year": 2016,
        "business": 2305
    },
    {
        "id": 4607,
        "ca": 1743144,
        "margin": 729583,
        "ebitda": 978075,
        "loss": 7080274,
        "year": 2017,
        "business": 2306
    },
    {
        "id": 4608,
        "ca": 3866677,
        "margin": 177613,
        "ebitda": 940170,
        "loss": 700722,
        "year": 2016,
        "business": 2306
    },
    {
        "id": 4609,
        "ca": 558480,
        "margin": 238388,
        "ebitda": 971986,
        "loss": 4304085,
        "year": 2017,
        "business": 2307
    },
    {
        "id": 4610,
        "ca": 3936613,
        "margin": 401206,
        "ebitda": 975541,
        "loss": 6920108,
        "year": 2016,
        "business": 2307
    },
    {
        "id": 4611,
        "ca": 1735954,
        "margin": 574924,
        "ebitda": 103121,
        "loss": 4073656,
        "year": 2017,
        "business": 2308
    },
    {
        "id": 4612,
        "ca": 2758509,
        "margin": 377633,
        "ebitda": 41448,
        "loss": 3022862,
        "year": 2016,
        "business": 2308
    },
    {
        "id": 4613,
        "ca": 1761211,
        "margin": 304069,
        "ebitda": 84834,
        "loss": 5676435,
        "year": 2017,
        "business": 2309
    },
    {
        "id": 4614,
        "ca": 1984146,
        "margin": 91575,
        "ebitda": 347428,
        "loss": 9622164,
        "year": 2016,
        "business": 2309
    },
    {
        "id": 4615,
        "ca": 2643273,
        "margin": -29798,
        "ebitda": 340699,
        "loss": 8373660,
        "year": 2017,
        "business": 2310
    },
    {
        "id": 4616,
        "ca": 1423040,
        "margin": 610125,
        "ebitda": 768396,
        "loss": 544295,
        "year": 2016,
        "business": 2310
    },
    {
        "id": 4617,
        "ca": 3299213,
        "margin": 709627,
        "ebitda": 264062,
        "loss": 3046361,
        "year": 2017,
        "business": 2311
    },
    {
        "id": 4618,
        "ca": 2592250,
        "margin": 421402,
        "ebitda": 956385,
        "loss": 2911830,
        "year": 2016,
        "business": 2311
    },
    {
        "id": 4619,
        "ca": 3165716,
        "margin": 172285,
        "ebitda": 757818,
        "loss": 6384375,
        "year": 2017,
        "business": 2312
    },
    {
        "id": 4620,
        "ca": 2164222,
        "margin": -35561,
        "ebitda": 576956,
        "loss": 6606107,
        "year": 2016,
        "business": 2312
    },
    {
        "id": 4621,
        "ca": 2568448,
        "margin": -107963,
        "ebitda": 231533,
        "loss": 7426081,
        "year": 2017,
        "business": 2313
    },
    {
        "id": 4622,
        "ca": 1475779,
        "margin": 712563,
        "ebitda": 797915,
        "loss": 7693019,
        "year": 2016,
        "business": 2313
    },
    {
        "id": 4623,
        "ca": 1430004,
        "margin": 540902,
        "ebitda": 545668,
        "loss": 4841050,
        "year": 2017,
        "business": 2314
    },
    {
        "id": 4624,
        "ca": 1799190,
        "margin": 159426,
        "ebitda": 240493,
        "loss": 8388552,
        "year": 2016,
        "business": 2314
    },
    {
        "id": 4625,
        "ca": 3832122,
        "margin": 990622,
        "ebitda": 83076,
        "loss": 9566831,
        "year": 2017,
        "business": 2315
    },
    {
        "id": 4626,
        "ca": 1340863,
        "margin": 729015,
        "ebitda": 702524,
        "loss": 9452543,
        "year": 2016,
        "business": 2315
    },
    {
        "id": 4627,
        "ca": 3086356,
        "margin": 286645,
        "ebitda": 664128,
        "loss": 7357791,
        "year": 2017,
        "business": 2316
    },
    {
        "id": 4628,
        "ca": 896683,
        "margin": -75904,
        "ebitda": 83236,
        "loss": 9403115,
        "year": 2016,
        "business": 2316
    },
    {
        "id": 4629,
        "ca": 1864832,
        "margin": 979099,
        "ebitda": 94814,
        "loss": 393823,
        "year": 2017,
        "business": 2317
    },
    {
        "id": 4630,
        "ca": 3003763,
        "margin": 802759,
        "ebitda": 114823,
        "loss": 1811169,
        "year": 2016,
        "business": 2317
    },
    {
        "id": 4631,
        "ca": 2813307,
        "margin": 260988,
        "ebitda": 312849,
        "loss": 8685092,
        "year": 2017,
        "business": 2318
    },
    {
        "id": 4632,
        "ca": 983588,
        "margin": 569805,
        "ebitda": 243499,
        "loss": 1988781,
        "year": 2016,
        "business": 2318
    },
    {
        "id": 4633,
        "ca": 1059086,
        "margin": 726540,
        "ebitda": 555656,
        "loss": 9370789,
        "year": 2017,
        "business": 2319
    },
    {
        "id": 4634,
        "ca": 2699069,
        "margin": 408401,
        "ebitda": 133834,
        "loss": 7171094,
        "year": 2016,
        "business": 2319
    },
    {
        "id": 4635,
        "ca": 2805564,
        "margin": -74978,
        "ebitda": 636458,
        "loss": 3732852,
        "year": 2017,
        "business": 2320
    },
    {
        "id": 4636,
        "ca": 320099,
        "margin": 622018,
        "ebitda": 340595,
        "loss": 6852352,
        "year": 2016,
        "business": 2320
    },
    {
        "id": 4637,
        "ca": 3677227,
        "margin": 70725,
        "ebitda": 502277,
        "loss": 5969492,
        "year": 2017,
        "business": 2321
    },
    {
        "id": 4638,
        "ca": 3421899,
        "margin": 840494,
        "ebitda": 393761,
        "loss": 9866139,
        "year": 2016,
        "business": 2321
    },
    {
        "id": 4639,
        "ca": 1120485,
        "margin": 543583,
        "ebitda": 955755,
        "loss": 8280534,
        "year": 2017,
        "business": 2322
    },
    {
        "id": 4640,
        "ca": 318012,
        "margin": 669498,
        "ebitda": 139045,
        "loss": 3466042,
        "year": 2016,
        "business": 2322
    },
    {
        "id": 4641,
        "ca": 773015,
        "margin": 318896,
        "ebitda": 168539,
        "loss": 1650166,
        "year": 2017,
        "business": 2323
    },
    {
        "id": 4642,
        "ca": 3084411,
        "margin": 566649,
        "ebitda": 870175,
        "loss": 6696072,
        "year": 2016,
        "business": 2323
    },
    {
        "id": 4643,
        "ca": 1229260,
        "margin": 876715,
        "ebitda": 402751,
        "loss": 9692064,
        "year": 2017,
        "business": 2324
    },
    {
        "id": 4644,
        "ca": 1850444,
        "margin": 826875,
        "ebitda": 195436,
        "loss": 9929812,
        "year": 2016,
        "business": 2324
    },
    {
        "id": 4645,
        "ca": 3537898,
        "margin": 322510,
        "ebitda": 714186,
        "loss": 5612606,
        "year": 2017,
        "business": 2325
    },
    {
        "id": 4646,
        "ca": 2275617,
        "margin": 365658,
        "ebitda": 15200,
        "loss": 6011480,
        "year": 2016,
        "business": 2325
    },
    {
        "id": 4647,
        "ca": 988115,
        "margin": 670118,
        "ebitda": 259837,
        "loss": 8708467,
        "year": 2017,
        "business": 2326
    },
    {
        "id": 4648,
        "ca": 3478598,
        "margin": 108184,
        "ebitda": 684974,
        "loss": 212414,
        "year": 2016,
        "business": 2326
    },
    {
        "id": 4649,
        "ca": 247767,
        "margin": 306228,
        "ebitda": 935869,
        "loss": 545239,
        "year": 2017,
        "business": 2327
    },
    {
        "id": 4650,
        "ca": 2363023,
        "margin": -138419,
        "ebitda": 687807,
        "loss": 1530817,
        "year": 2016,
        "business": 2327
    },
    {
        "id": 4651,
        "ca": 1973033,
        "margin": 699356,
        "ebitda": 1035,
        "loss": 4978977,
        "year": 2017,
        "business": 2328
    },
    {
        "id": 4652,
        "ca": 2131056,
        "margin": -161204,
        "ebitda": 877471,
        "loss": 5818986,
        "year": 2016,
        "business": 2328
    },
    {
        "id": 4653,
        "ca": 458550,
        "margin": 55359,
        "ebitda": 930583,
        "loss": 875340,
        "year": 2017,
        "business": 2329
    },
    {
        "id": 4654,
        "ca": 2945215,
        "margin": 370600,
        "ebitda": 116737,
        "loss": 7124628,
        "year": 2016,
        "business": 2329
    },
    {
        "id": 4655,
        "ca": 2606784,
        "margin": 316988,
        "ebitda": 165773,
        "loss": 9560526,
        "year": 2017,
        "business": 2330
    },
    {
        "id": 4656,
        "ca": 3944452,
        "margin": -91526,
        "ebitda": 625578,
        "loss": 4850207,
        "year": 2016,
        "business": 2330
    },
    {
        "id": 4657,
        "ca": 2424162,
        "margin": 347987,
        "ebitda": 457653,
        "loss": 9899539,
        "year": 2017,
        "business": 2331
    },
    {
        "id": 4658,
        "ca": 971031,
        "margin": 544796,
        "ebitda": 484799,
        "loss": 8584826,
        "year": 2016,
        "business": 2331
    },
    {
        "id": 4659,
        "ca": 3008526,
        "margin": 199036,
        "ebitda": 637670,
        "loss": 1592478,
        "year": 2017,
        "business": 2332
    },
    {
        "id": 4660,
        "ca": 3478351,
        "margin": -116528,
        "ebitda": 131151,
        "loss": 618158,
        "year": 2016,
        "business": 2332
    },
    {
        "id": 4661,
        "ca": 834888,
        "margin": 280921,
        "ebitda": 138727,
        "loss": 1304092,
        "year": 2017,
        "business": 2333
    },
    {
        "id": 4662,
        "ca": 505444,
        "margin": 641477,
        "ebitda": 282113,
        "loss": 4468581,
        "year": 2016,
        "business": 2333
    },
    {
        "id": 4663,
        "ca": 644905,
        "margin": 707606,
        "ebitda": 372426,
        "loss": 4740379,
        "year": 2017,
        "business": 2334
    },
    {
        "id": 4664,
        "ca": 533279,
        "margin": 477171,
        "ebitda": 572980,
        "loss": 286632,
        "year": 2016,
        "business": 2334
    },
    {
        "id": 4665,
        "ca": 2487709,
        "margin": 136545,
        "ebitda": 418716,
        "loss": 8899193,
        "year": 2017,
        "business": 2335
    },
    {
        "id": 4666,
        "ca": 524472,
        "margin": 300617,
        "ebitda": 519336,
        "loss": 6279750,
        "year": 2016,
        "business": 2335
    },
    {
        "id": 4667,
        "ca": 990976,
        "margin": 740840,
        "ebitda": 799119,
        "loss": 4435259,
        "year": 2017,
        "business": 2336
    },
    {
        "id": 4668,
        "ca": 2611344,
        "margin": 189230,
        "ebitda": 513401,
        "loss": 8293995,
        "year": 2016,
        "business": 2336
    },
    {
        "id": 4669,
        "ca": 701514,
        "margin": 509708,
        "ebitda": 244264,
        "loss": 8960265,
        "year": 2017,
        "business": 2337
    },
    {
        "id": 4670,
        "ca": 1653285,
        "margin": 930816,
        "ebitda": 85988,
        "loss": 6446751,
        "year": 2016,
        "business": 2337
    },
    {
        "id": 4671,
        "ca": 949622,
        "margin": -133320,
        "ebitda": 779425,
        "loss": 8783185,
        "year": 2017,
        "business": 2338
    },
    {
        "id": 4672,
        "ca": 2294969,
        "margin": 96891,
        "ebitda": 664641,
        "loss": 1202828,
        "year": 2016,
        "business": 2338
    },
    {
        "id": 4673,
        "ca": 2438988,
        "margin": 7002,
        "ebitda": 437538,
        "loss": 1572090,
        "year": 2017,
        "business": 2339
    },
    {
        "id": 4674,
        "ca": 2609849,
        "margin": 383242,
        "ebitda": 947591,
        "loss": 8049549,
        "year": 2016,
        "business": 2339
    },
    {
        "id": 4675,
        "ca": 2577452,
        "margin": 956503,
        "ebitda": 792855,
        "loss": 7448164,
        "year": 2017,
        "business": 2340
    },
    {
        "id": 4676,
        "ca": 162451,
        "margin": 906310,
        "ebitda": 549134,
        "loss": 6527603,
        "year": 2016,
        "business": 2340
    },
    {
        "id": 4677,
        "ca": 1805880,
        "margin": 486850,
        "ebitda": 621705,
        "loss": 1158819,
        "year": 2017,
        "business": 2341
    },
    {
        "id": 4678,
        "ca": 2736439,
        "margin": 210967,
        "ebitda": 688271,
        "loss": 6528806,
        "year": 2016,
        "business": 2341
    },
    {
        "id": 4679,
        "ca": 243270,
        "margin": 5598,
        "ebitda": 589401,
        "loss": 5013851,
        "year": 2017,
        "business": 2342
    },
    {
        "id": 4680,
        "ca": 3454439,
        "margin": 821135,
        "ebitda": 66826,
        "loss": 4242001,
        "year": 2016,
        "business": 2342
    },
    {
        "id": 4681,
        "ca": 1378778,
        "margin": -114498,
        "ebitda": 618264,
        "loss": 448975,
        "year": 2017,
        "business": 2343
    },
    {
        "id": 4682,
        "ca": 2889480,
        "margin": -57018,
        "ebitda": 755689,
        "loss": 4693159,
        "year": 2016,
        "business": 2343
    },
    {
        "id": 4683,
        "ca": 1092961,
        "margin": 288432,
        "ebitda": 268858,
        "loss": 5084356,
        "year": 2017,
        "business": 2344
    },
    {
        "id": 4684,
        "ca": 754332,
        "margin": 554025,
        "ebitda": 659972,
        "loss": 7709920,
        "year": 2016,
        "business": 2344
    },
    {
        "id": 4685,
        "ca": 413212,
        "margin": 489303,
        "ebitda": 979943,
        "loss": 1874040,
        "year": 2017,
        "business": 2345
    },
    {
        "id": 4686,
        "ca": 2934989,
        "margin": 993051,
        "ebitda": 749920,
        "loss": 1260905,
        "year": 2016,
        "business": 2345
    },
    {
        "id": 4687,
        "ca": 3585629,
        "margin": -79058,
        "ebitda": 628608,
        "loss": 8524299,
        "year": 2017,
        "business": 2346
    },
    {
        "id": 4688,
        "ca": 1167740,
        "margin": -179498,
        "ebitda": 968075,
        "loss": 9469489,
        "year": 2016,
        "business": 2346
    },
    {
        "id": 4689,
        "ca": 1038072,
        "margin": 61247,
        "ebitda": 145948,
        "loss": 5945019,
        "year": 2017,
        "business": 2347
    },
    {
        "id": 4690,
        "ca": 2744807,
        "margin": -178918,
        "ebitda": 940542,
        "loss": 8389243,
        "year": 2016,
        "business": 2347
    },
    {
        "id": 4691,
        "ca": 680717,
        "margin": 789260,
        "ebitda": 23168,
        "loss": 9375154,
        "year": 2017,
        "business": 2348
    },
    {
        "id": 4692,
        "ca": 3048882,
        "margin": 456127,
        "ebitda": 794015,
        "loss": 6045197,
        "year": 2016,
        "business": 2348
    },
    {
        "id": 4693,
        "ca": 2860212,
        "margin": 989637,
        "ebitda": 697267,
        "loss": 7584954,
        "year": 2017,
        "business": 2349
    },
    {
        "id": 4694,
        "ca": 1613875,
        "margin": -164275,
        "ebitda": 195362,
        "loss": 2277967,
        "year": 2016,
        "business": 2349
    },
    {
        "id": 4695,
        "ca": 3231992,
        "margin": 105075,
        "ebitda": 360254,
        "loss": 6389455,
        "year": 2017,
        "business": 2350
    },
    {
        "id": 4696,
        "ca": 1521612,
        "margin": 880685,
        "ebitda": 403557,
        "loss": 6790343,
        "year": 2016,
        "business": 2350
    },
    {
        "id": 4697,
        "ca": 2291583,
        "margin": 867237,
        "ebitda": 927967,
        "loss": 3790086,
        "year": 2017,
        "business": 2351
    },
    {
        "id": 4698,
        "ca": 1049311,
        "margin": 660876,
        "ebitda": 496702,
        "loss": 9855295,
        "year": 2016,
        "business": 2351
    },
    {
        "id": 4699,
        "ca": 164397,
        "margin": 317314,
        "ebitda": 318042,
        "loss": 9140926,
        "year": 2017,
        "business": 2352
    },
    {
        "id": 4700,
        "ca": 134225,
        "margin": 592137,
        "ebitda": 573854,
        "loss": 5827994,
        "year": 2016,
        "business": 2352
    },
    {
        "id": 4701,
        "ca": 129551,
        "margin": 310074,
        "ebitda": 357978,
        "loss": 7767682,
        "year": 2017,
        "business": 2353
    },
    {
        "id": 4702,
        "ca": 3406774,
        "margin": 137550,
        "ebitda": 410300,
        "loss": 4434726,
        "year": 2016,
        "business": 2353
    },
    {
        "id": 4703,
        "ca": 1601751,
        "margin": 391023,
        "ebitda": 243915,
        "loss": 9979374,
        "year": 2017,
        "business": 2354
    },
    {
        "id": 4704,
        "ca": 3545802,
        "margin": 192428,
        "ebitda": 485930,
        "loss": 419572,
        "year": 2016,
        "business": 2354
    },
    {
        "id": 4705,
        "ca": 2349466,
        "margin": 219941,
        "ebitda": 5570,
        "loss": 8680644,
        "year": 2017,
        "business": 2355
    },
    {
        "id": 4706,
        "ca": 1706775,
        "margin": 227646,
        "ebitda": 362797,
        "loss": 9504689,
        "year": 2016,
        "business": 2355
    },
    {
        "id": 4707,
        "ca": 396663,
        "margin": 127945,
        "ebitda": 301058,
        "loss": 2394148,
        "year": 2017,
        "business": 2356
    },
    {
        "id": 4708,
        "ca": 3033560,
        "margin": -142850,
        "ebitda": 216886,
        "loss": 5784011,
        "year": 2016,
        "business": 2356
    },
    {
        "id": 4709,
        "ca": 2661841,
        "margin": -87902,
        "ebitda": 485005,
        "loss": 2095804,
        "year": 2017,
        "business": 2357
    },
    {
        "id": 4710,
        "ca": 2253265,
        "margin": 162707,
        "ebitda": 233801,
        "loss": 6711968,
        "year": 2016,
        "business": 2357
    },
    {
        "id": 4711,
        "ca": 3057762,
        "margin": -139449,
        "ebitda": 327352,
        "loss": 4519431,
        "year": 2017,
        "business": 2358
    },
    {
        "id": 4712,
        "ca": 218608,
        "margin": 601761,
        "ebitda": 574866,
        "loss": 2401123,
        "year": 2016,
        "business": 2358
    },
    {
        "id": 4713,
        "ca": 347903,
        "margin": 531388,
        "ebitda": 744361,
        "loss": 7825401,
        "year": 2017,
        "business": 2359
    },
    {
        "id": 4714,
        "ca": 3706608,
        "margin": 997439,
        "ebitda": 825797,
        "loss": 5244642,
        "year": 2016,
        "business": 2359
    },
    {
        "id": 4715,
        "ca": 2840710,
        "margin": 545508,
        "ebitda": 869151,
        "loss": 3200310,
        "year": 2017,
        "business": 2360
    },
    {
        "id": 4716,
        "ca": 2972322,
        "margin": -8489,
        "ebitda": 523351,
        "loss": 4233835,
        "year": 2016,
        "business": 2360
    },
    {
        "id": 4717,
        "ca": 3205718,
        "margin": 931431,
        "ebitda": 745877,
        "loss": 7547419,
        "year": 2017,
        "business": 2361
    },
    {
        "id": 4718,
        "ca": 2658433,
        "margin": 244724,
        "ebitda": 68037,
        "loss": 9052789,
        "year": 2016,
        "business": 2361
    },
    {
        "id": 4719,
        "ca": 2836409,
        "margin": -52965,
        "ebitda": 642034,
        "loss": 650358,
        "year": 2017,
        "business": 2362
    },
    {
        "id": 4720,
        "ca": 1944602,
        "margin": 25293,
        "ebitda": 824874,
        "loss": 7586359,
        "year": 2016,
        "business": 2362
    },
    {
        "id": 4721,
        "ca": 2143913,
        "margin": 106171,
        "ebitda": 172306,
        "loss": 4813057,
        "year": 2017,
        "business": 2363
    },
    {
        "id": 4722,
        "ca": 726703,
        "margin": 634578,
        "ebitda": 496517,
        "loss": 3067864,
        "year": 2016,
        "business": 2363
    },
    {
        "id": 4723,
        "ca": 2813324,
        "margin": 543587,
        "ebitda": 930624,
        "loss": 6380189,
        "year": 2017,
        "business": 2364
    },
    {
        "id": 4724,
        "ca": 1949622,
        "margin": 257553,
        "ebitda": 715585,
        "loss": 1712947,
        "year": 2016,
        "business": 2364
    },
    {
        "id": 4725,
        "ca": 3141175,
        "margin": -10078,
        "ebitda": 413362,
        "loss": 2542564,
        "year": 2017,
        "business": 2365
    },
    {
        "id": 4726,
        "ca": 2159337,
        "margin": 834060,
        "ebitda": 110322,
        "loss": 9331383,
        "year": 2016,
        "business": 2365
    },
    {
        "id": 4727,
        "ca": 1812005,
        "margin": 824195,
        "ebitda": 378758,
        "loss": 805670,
        "year": 2017,
        "business": 2366
    },
    {
        "id": 4728,
        "ca": 318842,
        "margin": 975292,
        "ebitda": 116269,
        "loss": 7700266,
        "year": 2016,
        "business": 2366
    },
    {
        "id": 4729,
        "ca": 558150,
        "margin": 612452,
        "ebitda": 586018,
        "loss": 2446467,
        "year": 2017,
        "business": 2367
    },
    {
        "id": 4730,
        "ca": 1349450,
        "margin": -40151,
        "ebitda": 280930,
        "loss": 554118,
        "year": 2016,
        "business": 2367
    },
    {
        "id": 4731,
        "ca": 1792190,
        "margin": 711559,
        "ebitda": 308801,
        "loss": 5591378,
        "year": 2017,
        "business": 2368
    },
    {
        "id": 4732,
        "ca": 637105,
        "margin": 696402,
        "ebitda": 696791,
        "loss": 8243856,
        "year": 2016,
        "business": 2368
    },
    {
        "id": 4733,
        "ca": 2211699,
        "margin": 128483,
        "ebitda": 645149,
        "loss": 5320043,
        "year": 2017,
        "business": 2369
    },
    {
        "id": 4734,
        "ca": 292037,
        "margin": 11283,
        "ebitda": 596879,
        "loss": 9209073,
        "year": 2016,
        "business": 2369
    },
    {
        "id": 4735,
        "ca": 1861925,
        "margin": 664690,
        "ebitda": 647952,
        "loss": 6790717,
        "year": 2017,
        "business": 2370
    },
    {
        "id": 4736,
        "ca": 2417377,
        "margin": 308685,
        "ebitda": 250773,
        "loss": 484810,
        "year": 2016,
        "business": 2370
    },
    {
        "id": 4737,
        "ca": 406005,
        "margin": 980051,
        "ebitda": 663573,
        "loss": 6481503,
        "year": 2017,
        "business": 2371
    },
    {
        "id": 4738,
        "ca": 1862039,
        "margin": 482489,
        "ebitda": 482344,
        "loss": 1652224,
        "year": 2016,
        "business": 2371
    },
    {
        "id": 4739,
        "ca": 1467215,
        "margin": 132020,
        "ebitda": 373917,
        "loss": 3437043,
        "year": 2017,
        "business": 2372
    },
    {
        "id": 4740,
        "ca": 1135343,
        "margin": 667253,
        "ebitda": 272589,
        "loss": 6261102,
        "year": 2016,
        "business": 2372
    },
    {
        "id": 4741,
        "ca": 117798,
        "margin": 827650,
        "ebitda": 170411,
        "loss": 9201294,
        "year": 2017,
        "business": 2373
    },
    {
        "id": 4742,
        "ca": 3124464,
        "margin": 902231,
        "ebitda": 177211,
        "loss": 3794139,
        "year": 2016,
        "business": 2373
    },
    {
        "id": 4743,
        "ca": 921077,
        "margin": -137899,
        "ebitda": 903257,
        "loss": 3722070,
        "year": 2017,
        "business": 2374
    },
    {
        "id": 4744,
        "ca": 2645573,
        "margin": 540040,
        "ebitda": 123121,
        "loss": 586567,
        "year": 2016,
        "business": 2374
    },
    {
        "id": 4745,
        "ca": 948252,
        "margin": 792538,
        "ebitda": 49813,
        "loss": 3084210,
        "year": 2017,
        "business": 2375
    },
    {
        "id": 4746,
        "ca": 139390,
        "margin": 943578,
        "ebitda": 494751,
        "loss": 1596061,
        "year": 2016,
        "business": 2375
    },
    {
        "id": 4747,
        "ca": 728116,
        "margin": 994107,
        "ebitda": 921484,
        "loss": 1067054,
        "year": 2017,
        "business": 2376
    },
    {
        "id": 4748,
        "ca": 1065248,
        "margin": 659685,
        "ebitda": 6236,
        "loss": 1574284,
        "year": 2016,
        "business": 2376
    },
    {
        "id": 4749,
        "ca": 716783,
        "margin": 570860,
        "ebitda": 21987,
        "loss": 5267395,
        "year": 2017,
        "business": 2377
    },
    {
        "id": 4750,
        "ca": 316632,
        "margin": 778696,
        "ebitda": 324594,
        "loss": 7031038,
        "year": 2016,
        "business": 2377
    },
    {
        "id": 4751,
        "ca": 2771849,
        "margin": 84486,
        "ebitda": 181212,
        "loss": 3918374,
        "year": 2017,
        "business": 2378
    },
    {
        "id": 4752,
        "ca": 169000,
        "margin": 365612,
        "ebitda": 649214,
        "loss": 841923,
        "year": 2016,
        "business": 2378
    },
    {
        "id": 4753,
        "ca": 1762287,
        "margin": 102439,
        "ebitda": 722916,
        "loss": 7833440,
        "year": 2017,
        "business": 2379
    },
    {
        "id": 4754,
        "ca": 291824,
        "margin": 130148,
        "ebitda": 623417,
        "loss": 1629125,
        "year": 2016,
        "business": 2379
    },
    {
        "id": 4755,
        "ca": 1499365,
        "margin": 57080,
        "ebitda": 156356,
        "loss": 1021748,
        "year": 2017,
        "business": 2380
    },
    {
        "id": 4756,
        "ca": 524678,
        "margin": -144122,
        "ebitda": 638331,
        "loss": 6832039,
        "year": 2016,
        "business": 2380
    },
    {
        "id": 4757,
        "ca": 1305546,
        "margin": 890959,
        "ebitda": 80989,
        "loss": 2228161,
        "year": 2017,
        "business": 2381
    },
    {
        "id": 4758,
        "ca": 1695317,
        "margin": 923694,
        "ebitda": 989104,
        "loss": 1562338,
        "year": 2016,
        "business": 2381
    },
    {
        "id": 4759,
        "ca": 683018,
        "margin": 995152,
        "ebitda": 170904,
        "loss": 9628558,
        "year": 2017,
        "business": 2382
    },
    {
        "id": 4760,
        "ca": 303810,
        "margin": -156298,
        "ebitda": 336332,
        "loss": 1525082,
        "year": 2016,
        "business": 2382
    },
    {
        "id": 4761,
        "ca": 3991934,
        "margin": 731434,
        "ebitda": 671175,
        "loss": 7299376,
        "year": 2017,
        "business": 2383
    },
    {
        "id": 4762,
        "ca": 372982,
        "margin": 69283,
        "ebitda": 543797,
        "loss": 7332054,
        "year": 2016,
        "business": 2383
    },
    {
        "id": 4763,
        "ca": 963795,
        "margin": 515108,
        "ebitda": 190681,
        "loss": 3749379,
        "year": 2017,
        "business": 2384
    },
    {
        "id": 4764,
        "ca": 1416006,
        "margin": 75210,
        "ebitda": 919516,
        "loss": 7432996,
        "year": 2016,
        "business": 2384
    },
    {
        "id": 4765,
        "ca": 1752436,
        "margin": 96454,
        "ebitda": 741147,
        "loss": 3254124,
        "year": 2017,
        "business": 2385
    },
    {
        "id": 4766,
        "ca": 1708354,
        "margin": -176402,
        "ebitda": 554102,
        "loss": 7890249,
        "year": 2016,
        "business": 2385
    },
    {
        "id": 4767,
        "ca": 744318,
        "margin": 103496,
        "ebitda": 576229,
        "loss": 9905360,
        "year": 2017,
        "business": 2386
    },
    {
        "id": 4768,
        "ca": 181935,
        "margin": 122718,
        "ebitda": 354176,
        "loss": 4814304,
        "year": 2016,
        "business": 2386
    },
    {
        "id": 4769,
        "ca": 1863949,
        "margin": -65034,
        "ebitda": 61494,
        "loss": 6983568,
        "year": 2017,
        "business": 2387
    },
    {
        "id": 4770,
        "ca": 3020076,
        "margin": 670970,
        "ebitda": 412282,
        "loss": 2793160,
        "year": 2016,
        "business": 2387
    },
    {
        "id": 4771,
        "ca": 2734736,
        "margin": 982226,
        "ebitda": 481398,
        "loss": 6322916,
        "year": 2017,
        "business": 2388
    },
    {
        "id": 4772,
        "ca": 2601308,
        "margin": 333052,
        "ebitda": 93411,
        "loss": 10903,
        "year": 2016,
        "business": 2388
    },
    {
        "id": 4773,
        "ca": 2393765,
        "margin": 647370,
        "ebitda": 268473,
        "loss": 784233,
        "year": 2017,
        "business": 2389
    },
    {
        "id": 4774,
        "ca": 587756,
        "margin": 810481,
        "ebitda": 49865,
        "loss": 2802340,
        "year": 2016,
        "business": 2389
    },
    {
        "id": 4775,
        "ca": 2044393,
        "margin": 488875,
        "ebitda": 731519,
        "loss": 7027060,
        "year": 2017,
        "business": 2390
    },
    {
        "id": 4776,
        "ca": 121670,
        "margin": 182578,
        "ebitda": 393596,
        "loss": 9887138,
        "year": 2016,
        "business": 2390
    },
    {
        "id": 4777,
        "ca": 1956401,
        "margin": 260869,
        "ebitda": 465173,
        "loss": 1034672,
        "year": 2017,
        "business": 2391
    },
    {
        "id": 4778,
        "ca": 1738061,
        "margin": 489672,
        "ebitda": 503544,
        "loss": 1652359,
        "year": 2016,
        "business": 2391
    },
    {
        "id": 4779,
        "ca": 3670991,
        "margin": -20675,
        "ebitda": 170558,
        "loss": 3869471,
        "year": 2017,
        "business": 2392
    },
    {
        "id": 4780,
        "ca": 492284,
        "margin": -35764,
        "ebitda": 4319,
        "loss": 8138660,
        "year": 2016,
        "business": 2392
    },
    {
        "id": 4781,
        "ca": 3986032,
        "margin": 496147,
        "ebitda": 625529,
        "loss": 148159,
        "year": 2017,
        "business": 2393
    },
    {
        "id": 4782,
        "ca": 659094,
        "margin": -199859,
        "ebitda": 55690,
        "loss": 4600718,
        "year": 2016,
        "business": 2393
    },
    {
        "id": 4783,
        "ca": 2197523,
        "margin": 486409,
        "ebitda": 297718,
        "loss": 4127513,
        "year": 2017,
        "business": 2394
    },
    {
        "id": 4784,
        "ca": 160707,
        "margin": 797807,
        "ebitda": 823203,
        "loss": 6603381,
        "year": 2016,
        "business": 2394
    },
    {
        "id": 4785,
        "ca": 2314790,
        "margin": 342031,
        "ebitda": 172440,
        "loss": 8381127,
        "year": 2017,
        "business": 2395
    },
    {
        "id": 4786,
        "ca": 2649979,
        "margin": 62457,
        "ebitda": 985731,
        "loss": 9016091,
        "year": 2016,
        "business": 2395
    },
    {
        "id": 4787,
        "ca": 1627606,
        "margin": 182725,
        "ebitda": 872978,
        "loss": 6304396,
        "year": 2017,
        "business": 2396
    },
    {
        "id": 4788,
        "ca": 2178283,
        "margin": 555989,
        "ebitda": 504401,
        "loss": 4572515,
        "year": 2016,
        "business": 2396
    },
    {
        "id": 4789,
        "ca": 137619,
        "margin": -45047,
        "ebitda": 852472,
        "loss": 7393300,
        "year": 2017,
        "business": 2397
    },
    {
        "id": 4790,
        "ca": 2632010,
        "margin": 552487,
        "ebitda": 337354,
        "loss": 2556865,
        "year": 2016,
        "business": 2397
    },
    {
        "id": 4791,
        "ca": 2907368,
        "margin": 946694,
        "ebitda": 578208,
        "loss": 140731,
        "year": 2017,
        "business": 2398
    },
    {
        "id": 4792,
        "ca": 1531656,
        "margin": 751165,
        "ebitda": 758012,
        "loss": 8104700,
        "year": 2016,
        "business": 2398
    },
    {
        "id": 4793,
        "ca": 1601358,
        "margin": 881075,
        "ebitda": 506863,
        "loss": 934741,
        "year": 2017,
        "business": 2399
    },
    {
        "id": 4794,
        "ca": 224605,
        "margin": 323834,
        "ebitda": 150156,
        "loss": 3395853,
        "year": 2016,
        "business": 2399
    },
    {
        "id": 4795,
        "ca": 3911838,
        "margin": 749881,
        "ebitda": 767494,
        "loss": 8779814,
        "year": 2017,
        "business": 2400
    },
    {
        "id": 4796,
        "ca": 1660522,
        "margin": 982551,
        "ebitda": 372552,
        "loss": 5607303,
        "year": 2016,
        "business": 2400
    },
    {
        "id": 4797,
        "ca": 1644095,
        "margin": 817567,
        "ebitda": 393262,
        "loss": 7295120,
        "year": 2017,
        "business": 2401
    },
    {
        "id": 4798,
        "ca": 491779,
        "margin": 2072,
        "ebitda": 566710,
        "loss": 7848527,
        "year": 2016,
        "business": 2401
    },
    {
        "id": 4799,
        "ca": 2861638,
        "margin": 491834,
        "ebitda": 538314,
        "loss": 526246,
        "year": 2017,
        "business": 2402
    },
    {
        "id": 4800,
        "ca": 2301201,
        "margin": 781536,
        "ebitda": 88344,
        "loss": 2994930,
        "year": 2016,
        "business": 2402
    },
    {
        "id": 4801,
        "ca": 1662133,
        "margin": 777953,
        "ebitda": 516084,
        "loss": 2245869,
        "year": 2017,
        "business": 2403
    },
    {
        "id": 4802,
        "ca": 387641,
        "margin": 71807,
        "ebitda": 924342,
        "loss": 325979,
        "year": 2016,
        "business": 2403
    },
    {
        "id": 4803,
        "ca": 247195,
        "margin": 634605,
        "ebitda": 709363,
        "loss": 898607,
        "year": 2017,
        "business": 2404
    },
    {
        "id": 4804,
        "ca": 119852,
        "margin": 309278,
        "ebitda": 160648,
        "loss": 9281795,
        "year": 2016,
        "business": 2404
    },
    {
        "id": 4805,
        "ca": 2299664,
        "margin": -135115,
        "ebitda": 583094,
        "loss": 9239699,
        "year": 2017,
        "business": 2405
    },
    {
        "id": 4806,
        "ca": 2571699,
        "margin": 722393,
        "ebitda": 17182,
        "loss": 4032449,
        "year": 2016,
        "business": 2405
    },
    {
        "id": 4807,
        "ca": 1677911,
        "margin": 163405,
        "ebitda": 515423,
        "loss": 1864397,
        "year": 2017,
        "business": 2406
    },
    {
        "id": 4808,
        "ca": 813563,
        "margin": 511714,
        "ebitda": 593192,
        "loss": 2686986,
        "year": 2016,
        "business": 2406
    },
    {
        "id": 4809,
        "ca": 2709541,
        "margin": 229695,
        "ebitda": 663411,
        "loss": 3875286,
        "year": 2017,
        "business": 2407
    },
    {
        "id": 4810,
        "ca": 634459,
        "margin": 231805,
        "ebitda": 647374,
        "loss": 3602349,
        "year": 2016,
        "business": 2407
    },
    {
        "id": 4811,
        "ca": 1952680,
        "margin": 591527,
        "ebitda": 712950,
        "loss": 2979479,
        "year": 2017,
        "business": 2408
    },
    {
        "id": 4812,
        "ca": 3342862,
        "margin": -69963,
        "ebitda": 690253,
        "loss": 9351964,
        "year": 2016,
        "business": 2408
    },
    {
        "id": 4813,
        "ca": 1015626,
        "margin": 955117,
        "ebitda": 815940,
        "loss": 1056473,
        "year": 2017,
        "business": 2409
    },
    {
        "id": 4814,
        "ca": 2888532,
        "margin": 625093,
        "ebitda": 110974,
        "loss": 1132136,
        "year": 2016,
        "business": 2409
    },
    {
        "id": 4815,
        "ca": 354304,
        "margin": -115585,
        "ebitda": 799466,
        "loss": 1538011,
        "year": 2017,
        "business": 2410
    },
    {
        "id": 4816,
        "ca": 2563090,
        "margin": 425055,
        "ebitda": 376388,
        "loss": 8271563,
        "year": 2016,
        "business": 2410
    },
    {
        "id": 4817,
        "ca": 940447,
        "margin": 729845,
        "ebitda": 167721,
        "loss": 6157266,
        "year": 2017,
        "business": 2411
    },
    {
        "id": 4818,
        "ca": 2442788,
        "margin": -119755,
        "ebitda": 428414,
        "loss": 6513738,
        "year": 2016,
        "business": 2411
    },
    {
        "id": 4819,
        "ca": 3500490,
        "margin": 528080,
        "ebitda": 56057,
        "loss": 7875420,
        "year": 2017,
        "business": 2412
    },
    {
        "id": 4820,
        "ca": 961364,
        "margin": 333893,
        "ebitda": 169134,
        "loss": 2599452,
        "year": 2016,
        "business": 2412
    },
    {
        "id": 4821,
        "ca": 515346,
        "margin": 411358,
        "ebitda": 153381,
        "loss": 4890658,
        "year": 2017,
        "business": 2413
    },
    {
        "id": 4822,
        "ca": 1575387,
        "margin": 916113,
        "ebitda": 718372,
        "loss": 3215109,
        "year": 2016,
        "business": 2413
    },
    {
        "id": 4823,
        "ca": 1297997,
        "margin": -19875,
        "ebitda": 516170,
        "loss": 3810636,
        "year": 2017,
        "business": 2414
    },
    {
        "id": 4824,
        "ca": 1072825,
        "margin": -22201,
        "ebitda": 287048,
        "loss": 3084817,
        "year": 2016,
        "business": 2414
    },
    {
        "id": 4825,
        "ca": 2769889,
        "margin": 873496,
        "ebitda": 471427,
        "loss": 2405509,
        "year": 2017,
        "business": 2415
    },
    {
        "id": 4826,
        "ca": 2054357,
        "margin": 654017,
        "ebitda": 175194,
        "loss": 9302832,
        "year": 2016,
        "business": 2415
    },
    {
        "id": 4827,
        "ca": 810713,
        "margin": 998897,
        "ebitda": 59050,
        "loss": 7501572,
        "year": 2017,
        "business": 2416
    },
    {
        "id": 4828,
        "ca": 3772494,
        "margin": 890874,
        "ebitda": 238464,
        "loss": 8921783,
        "year": 2016,
        "business": 2416
    },
    {
        "id": 4829,
        "ca": 2081678,
        "margin": 342091,
        "ebitda": 539235,
        "loss": 1272684,
        "year": 2017,
        "business": 2417
    },
    {
        "id": 4830,
        "ca": 1785602,
        "margin": 542360,
        "ebitda": 912278,
        "loss": 7205487,
        "year": 2016,
        "business": 2417
    },
    {
        "id": 4831,
        "ca": 1592891,
        "margin": 387911,
        "ebitda": 726576,
        "loss": 1194318,
        "year": 2017,
        "business": 2418
    },
    {
        "id": 4832,
        "ca": 102581,
        "margin": 401351,
        "ebitda": 553293,
        "loss": 4489927,
        "year": 2016,
        "business": 2418
    },
    {
        "id": 4833,
        "ca": 3520649,
        "margin": 757968,
        "ebitda": 890165,
        "loss": 18410,
        "year": 2017,
        "business": 2419
    },
    {
        "id": 4834,
        "ca": 2463192,
        "margin": 42031,
        "ebitda": 57637,
        "loss": 154118,
        "year": 2016,
        "business": 2419
    },
    {
        "id": 4835,
        "ca": 2149248,
        "margin": -17422,
        "ebitda": 824444,
        "loss": 5601684,
        "year": 2017,
        "business": 2420
    },
    {
        "id": 4836,
        "ca": 349397,
        "margin": -142505,
        "ebitda": 832385,
        "loss": 1592159,
        "year": 2016,
        "business": 2420
    },
    {
        "id": 4837,
        "ca": 3663726,
        "margin": 936336,
        "ebitda": 375741,
        "loss": 2633118,
        "year": 2017,
        "business": 2421
    },
    {
        "id": 4838,
        "ca": 698462,
        "margin": 468420,
        "ebitda": 807387,
        "loss": 8606017,
        "year": 2016,
        "business": 2421
    },
    {
        "id": 4839,
        "ca": 2156650,
        "margin": 126375,
        "ebitda": 952488,
        "loss": 4270658,
        "year": 2017,
        "business": 2422
    },
    {
        "id": 4840,
        "ca": 2937650,
        "margin": 622526,
        "ebitda": 830875,
        "loss": 7180549,
        "year": 2016,
        "business": 2422
    },
    {
        "id": 4841,
        "ca": 2046135,
        "margin": -107921,
        "ebitda": 759044,
        "loss": 6674911,
        "year": 2017,
        "business": 2423
    },
    {
        "id": 4842,
        "ca": 2801306,
        "margin": -92559,
        "ebitda": 764337,
        "loss": 1757134,
        "year": 2016,
        "business": 2423
    },
    {
        "id": 4843,
        "ca": 1001954,
        "margin": 206434,
        "ebitda": 180636,
        "loss": 1453014,
        "year": 2017,
        "business": 2424
    },
    {
        "id": 4844,
        "ca": 905030,
        "margin": 309707,
        "ebitda": 518058,
        "loss": 7612630,
        "year": 2016,
        "business": 2424
    },
    {
        "id": 4845,
        "ca": 3307268,
        "margin": 888831,
        "ebitda": 76839,
        "loss": 4610952,
        "year": 2017,
        "business": 2425
    },
    {
        "id": 4846,
        "ca": 3038954,
        "margin": 697602,
        "ebitda": 275373,
        "loss": 1412711,
        "year": 2016,
        "business": 2425
    },
    {
        "id": 4847,
        "ca": 2147843,
        "margin": 546808,
        "ebitda": 86232,
        "loss": 8181141,
        "year": 2017,
        "business": 2426
    },
    {
        "id": 4848,
        "ca": 1117486,
        "margin": 372720,
        "ebitda": 291376,
        "loss": 784905,
        "year": 2016,
        "business": 2426
    },
    {
        "id": 4849,
        "ca": 850796,
        "margin": 415034,
        "ebitda": 460970,
        "loss": 8000981,
        "year": 2017,
        "business": 2427
    },
    {
        "id": 4850,
        "ca": 3359330,
        "margin": 455440,
        "ebitda": 424393,
        "loss": 5984608,
        "year": 2016,
        "business": 2427
    },
    {
        "id": 4851,
        "ca": 1545543,
        "margin": 413438,
        "ebitda": 516697,
        "loss": 3060048,
        "year": 2017,
        "business": 2428
    },
    {
        "id": 4852,
        "ca": 3451964,
        "margin": 134088,
        "ebitda": 863920,
        "loss": 8707163,
        "year": 2016,
        "business": 2428
    },
    {
        "id": 4853,
        "ca": 505389,
        "margin": 413541,
        "ebitda": 714381,
        "loss": 9036477,
        "year": 2017,
        "business": 2429
    },
    {
        "id": 4854,
        "ca": 745773,
        "margin": 661284,
        "ebitda": 890456,
        "loss": 580236,
        "year": 2016,
        "business": 2429
    },
    {
        "id": 4855,
        "ca": 3042373,
        "margin": -6607,
        "ebitda": 599324,
        "loss": 7963049,
        "year": 2017,
        "business": 2430
    },
    {
        "id": 4856,
        "ca": 493723,
        "margin": 412058,
        "ebitda": 167294,
        "loss": 7119483,
        "year": 2016,
        "business": 2430
    },
    {
        "id": 4857,
        "ca": 3291031,
        "margin": -53356,
        "ebitda": 235393,
        "loss": 6780672,
        "year": 2017,
        "business": 2431
    },
    {
        "id": 4858,
        "ca": 1805521,
        "margin": 94173,
        "ebitda": 102448,
        "loss": 8130100,
        "year": 2016,
        "business": 2431
    },
    {
        "id": 4859,
        "ca": 897317,
        "margin": -74478,
        "ebitda": 361133,
        "loss": 6733941,
        "year": 2017,
        "business": 2432
    },
    {
        "id": 4860,
        "ca": 847926,
        "margin": 760319,
        "ebitda": 243455,
        "loss": 5460772,
        "year": 2016,
        "business": 2432
    },
    {
        "id": 4861,
        "ca": 2621412,
        "margin": 650297,
        "ebitda": 637223,
        "loss": 4881188,
        "year": 2017,
        "business": 2433
    },
    {
        "id": 4862,
        "ca": 1874617,
        "margin": 724099,
        "ebitda": 199595,
        "loss": 2258152,
        "year": 2016,
        "business": 2433
    },
    {
        "id": 4863,
        "ca": 1092118,
        "margin": 924001,
        "ebitda": 77897,
        "loss": 1225356,
        "year": 2017,
        "business": 2434
    },
    {
        "id": 4864,
        "ca": 2552393,
        "margin": 456969,
        "ebitda": 54200,
        "loss": 3540777,
        "year": 2016,
        "business": 2434
    },
    {
        "id": 4865,
        "ca": 2146147,
        "margin": 887626,
        "ebitda": 810654,
        "loss": 8100203,
        "year": 2017,
        "business": 2435
    },
    {
        "id": 4866,
        "ca": 3058593,
        "margin": -5090,
        "ebitda": 882566,
        "loss": 5938506,
        "year": 2016,
        "business": 2435
    },
    {
        "id": 4867,
        "ca": 2077357,
        "margin": 497351,
        "ebitda": 65952,
        "loss": 858474,
        "year": 2017,
        "business": 2437
    },
    {
        "id": 4868,
        "ca": 432070,
        "margin": 427778,
        "ebitda": 290433,
        "loss": 8023406,
        "year": 2016,
        "business": 2437
    },
    {
        "id": 4869,
        "ca": 364921,
        "margin": 61976,
        "ebitda": 960673,
        "loss": 2812728,
        "year": 2017,
        "business": 2438
    },
    {
        "id": 4870,
        "ca": 1944186,
        "margin": 738525,
        "ebitda": 846608,
        "loss": 657145,
        "year": 2016,
        "business": 2438
    },
    {
        "id": 4871,
        "ca": 2752578,
        "margin": -147358,
        "ebitda": 485891,
        "loss": 331323,
        "year": 2017,
        "business": 2439
    },
    {
        "id": 4872,
        "ca": 1686886,
        "margin": -117670,
        "ebitda": 390980,
        "loss": 3205084,
        "year": 2016,
        "business": 2439
    },
    {
        "id": 4873,
        "ca": 1911503,
        "margin": 340643,
        "ebitda": 417233,
        "loss": 5121889,
        "year": 2017,
        "business": 2440
    },
    {
        "id": 4874,
        "ca": 3669705,
        "margin": 937608,
        "ebitda": 162576,
        "loss": 8516803,
        "year": 2016,
        "business": 2440
    },
    {
        "id": 4875,
        "ca": 2802947,
        "margin": -192527,
        "ebitda": 895332,
        "loss": 168490,
        "year": 2017,
        "business": 2441
    },
    {
        "id": 4876,
        "ca": 1704685,
        "margin": 675635,
        "ebitda": 175060,
        "loss": 8978142,
        "year": 2016,
        "business": 2441
    },
    {
        "id": 4877,
        "ca": 3366027,
        "margin": 987873,
        "ebitda": 196501,
        "loss": 7956104,
        "year": 2017,
        "business": 2442
    },
    {
        "id": 4878,
        "ca": 2312009,
        "margin": 564257,
        "ebitda": 534160,
        "loss": 5616100,
        "year": 2016,
        "business": 2442
    },
    {
        "id": 4879,
        "ca": 807176,
        "margin": -170771,
        "ebitda": 501330,
        "loss": 107559,
        "year": 2017,
        "business": 2443
    },
    {
        "id": 4880,
        "ca": 1677728,
        "margin": 405029,
        "ebitda": 919989,
        "loss": 7064750,
        "year": 2016,
        "business": 2443
    },
    {
        "id": 4881,
        "ca": 845912,
        "margin": -55821,
        "ebitda": 224135,
        "loss": 2658021,
        "year": 2017,
        "business": 2444
    },
    {
        "id": 4882,
        "ca": 2744919,
        "margin": 681582,
        "ebitda": 236779,
        "loss": 4376894,
        "year": 2016,
        "business": 2444
    },
    {
        "id": 4883,
        "ca": 2645052,
        "margin": -41159,
        "ebitda": 173240,
        "loss": 1967321,
        "year": 2017,
        "business": 2445
    },
    {
        "id": 4884,
        "ca": 732362,
        "margin": 698731,
        "ebitda": 463853,
        "loss": 5229956,
        "year": 2016,
        "business": 2445
    },
    {
        "id": 4885,
        "ca": 1399582,
        "margin": 985314,
        "ebitda": 725283,
        "loss": 4266902,
        "year": 2017,
        "business": 2446
    },
    {
        "id": 4886,
        "ca": 1916496,
        "margin": 979357,
        "ebitda": 942617,
        "loss": 2478758,
        "year": 2016,
        "business": 2446
    },
    {
        "id": 4887,
        "ca": 490022,
        "margin": 352486,
        "ebitda": 213406,
        "loss": 608978,
        "year": 2017,
        "business": 2447
    },
    {
        "id": 4888,
        "ca": 2814806,
        "margin": 150982,
        "ebitda": 255155,
        "loss": 4306009,
        "year": 2016,
        "business": 2447
    },
    {
        "id": 4889,
        "ca": 498678,
        "margin": 154466,
        "ebitda": 620676,
        "loss": 548809,
        "year": 2017,
        "business": 2448
    },
    {
        "id": 4890,
        "ca": 2772820,
        "margin": 119935,
        "ebitda": 271449,
        "loss": 5095792,
        "year": 2016,
        "business": 2448
    },
    {
        "id": 4891,
        "ca": 2302368,
        "margin": 469510,
        "ebitda": 250648,
        "loss": 5131438,
        "year": 2017,
        "business": 2449
    },
    {
        "id": 4892,
        "ca": 3011160,
        "margin": 429420,
        "ebitda": 940827,
        "loss": 7664834,
        "year": 2016,
        "business": 2449
    },
    {
        "id": 4893,
        "ca": 2091227,
        "margin": 809190,
        "ebitda": 589384,
        "loss": 6212269,
        "year": 2017,
        "business": 2450
    },
    {
        "id": 4894,
        "ca": 676290,
        "margin": 202279,
        "ebitda": 718696,
        "loss": 5774367,
        "year": 2016,
        "business": 2450
    },
    {
        "id": 4895,
        "ca": 1071840,
        "margin": 70852,
        "ebitda": 571568,
        "loss": 2690278,
        "year": 2017,
        "business": 2451
    },
    {
        "id": 4896,
        "ca": 2169468,
        "margin": -92185,
        "ebitda": 134714,
        "loss": 2327708,
        "year": 2016,
        "business": 2451
    },
    {
        "id": 4897,
        "ca": 227469,
        "margin": -172937,
        "ebitda": 849147,
        "loss": 3197097,
        "year": 2017,
        "business": 2452
    },
    {
        "id": 4898,
        "ca": 2950073,
        "margin": 291666,
        "ebitda": 358533,
        "loss": 2035460,
        "year": 2016,
        "business": 2452
    },
    {
        "id": 4899,
        "ca": 1659892,
        "margin": 228500,
        "ebitda": 676123,
        "loss": 113437,
        "year": 2017,
        "business": 2453
    },
    {
        "id": 4900,
        "ca": 1332202,
        "margin": -10635,
        "ebitda": 591615,
        "loss": 1731490,
        "year": 2016,
        "business": 2453
    },
    {
        "id": 4901,
        "ca": 2698460,
        "margin": 367570,
        "ebitda": 943598,
        "loss": 6190258,
        "year": 2017,
        "business": 2454
    },
    {
        "id": 4902,
        "ca": 1547921,
        "margin": 898131,
        "ebitda": 549866,
        "loss": 695666,
        "year": 2016,
        "business": 2454
    },
    {
        "id": 4903,
        "ca": 3902519,
        "margin": 765501,
        "ebitda": 873377,
        "loss": 2554825,
        "year": 2017,
        "business": 2455
    },
    {
        "id": 4904,
        "ca": 804936,
        "margin": 182411,
        "ebitda": 466946,
        "loss": 9989170,
        "year": 2016,
        "business": 2455
    },
    {
        "id": 4905,
        "ca": 1658933,
        "margin": 647423,
        "ebitda": 568089,
        "loss": 6579924,
        "year": 2017,
        "business": 2456
    },
    {
        "id": 4906,
        "ca": 1738120,
        "margin": 674431,
        "ebitda": 429561,
        "loss": 408865,
        "year": 2016,
        "business": 2456
    },
    {
        "id": 4907,
        "ca": 2026715,
        "margin": -198616,
        "ebitda": 965383,
        "loss": 6439279,
        "year": 2017,
        "business": 2457
    },
    {
        "id": 4908,
        "ca": 3894824,
        "margin": 606068,
        "ebitda": 694184,
        "loss": 5969030,
        "year": 2016,
        "business": 2457
    },
    {
        "id": 4909,
        "ca": 2494629,
        "margin": 240340,
        "ebitda": 282056,
        "loss": 6994907,
        "year": 2017,
        "business": 2458
    },
    {
        "id": 4910,
        "ca": 1974168,
        "margin": 484412,
        "ebitda": 253168,
        "loss": 1670528,
        "year": 2016,
        "business": 2458
    },
    {
        "id": 4911,
        "ca": 3977217,
        "margin": 175757,
        "ebitda": 241608,
        "loss": 6107207,
        "year": 2017,
        "business": 2459
    },
    {
        "id": 4912,
        "ca": 809720,
        "margin": 545355,
        "ebitda": 842297,
        "loss": 7239634,
        "year": 2016,
        "business": 2459
    },
    {
        "id": 4913,
        "ca": 3055261,
        "margin": -29529,
        "ebitda": 988508,
        "loss": 3307127,
        "year": 2017,
        "business": 2460
    },
    {
        "id": 4914,
        "ca": 441182,
        "margin": 616025,
        "ebitda": 739319,
        "loss": 754174,
        "year": 2016,
        "business": 2460
    },
    {
        "id": 4915,
        "ca": 3778120,
        "margin": 946201,
        "ebitda": 737398,
        "loss": 828816,
        "year": 2017,
        "business": 2461
    },
    {
        "id": 4916,
        "ca": 377221,
        "margin": 644941,
        "ebitda": 330869,
        "loss": 4185104,
        "year": 2016,
        "business": 2461
    },
    {
        "id": 4917,
        "ca": 3293799,
        "margin": 762392,
        "ebitda": 874292,
        "loss": 3623463,
        "year": 2017,
        "business": 2462
    },
    {
        "id": 4918,
        "ca": 858506,
        "margin": 189441,
        "ebitda": 609871,
        "loss": 177061,
        "year": 2016,
        "business": 2462
    },
    {
        "id": 4919,
        "ca": 1952026,
        "margin": 105098,
        "ebitda": 802326,
        "loss": 5262609,
        "year": 2017,
        "business": 2463
    },
    {
        "id": 4920,
        "ca": 353809,
        "margin": 802651,
        "ebitda": 720150,
        "loss": 953096,
        "year": 2016,
        "business": 2463
    },
    {
        "id": 4921,
        "ca": 3812845,
        "margin": 536146,
        "ebitda": 197412,
        "loss": 3385756,
        "year": 2017,
        "business": 2464
    },
    {
        "id": 4922,
        "ca": 900740,
        "margin": 452037,
        "ebitda": 479167,
        "loss": 9372921,
        "year": 2016,
        "business": 2464
    },
    {
        "id": 4923,
        "ca": 1298429,
        "margin": 85209,
        "ebitda": 801714,
        "loss": 1874888,
        "year": 2017,
        "business": 2465
    },
    {
        "id": 4924,
        "ca": 3372389,
        "margin": -46817,
        "ebitda": 962766,
        "loss": 1038773,
        "year": 2016,
        "business": 2465
    },
    {
        "id": 4925,
        "ca": 1571590,
        "margin": 465195,
        "ebitda": 715373,
        "loss": 6767658,
        "year": 2017,
        "business": 2466
    },
    {
        "id": 4926,
        "ca": 1885922,
        "margin": 294164,
        "ebitda": 602655,
        "loss": 5395737,
        "year": 2016,
        "business": 2466
    },
    {
        "id": 4927,
        "ca": 609290,
        "margin": 476030,
        "ebitda": 414815,
        "loss": 650125,
        "year": 2017,
        "business": 2467
    },
    {
        "id": 4928,
        "ca": 383265,
        "margin": -109517,
        "ebitda": 516401,
        "loss": 7914729,
        "year": 2016,
        "business": 2467
    },
    {
        "id": 4929,
        "ca": 3646184,
        "margin": -117596,
        "ebitda": 904991,
        "loss": 369354,
        "year": 2017,
        "business": 2468
    },
    {
        "id": 4930,
        "ca": 215663,
        "margin": 343155,
        "ebitda": 914212,
        "loss": 386124,
        "year": 2016,
        "business": 2468
    },
    {
        "id": 4931,
        "ca": 3081311,
        "margin": 760359,
        "ebitda": 515188,
        "loss": 866840,
        "year": 2017,
        "business": 2469
    },
    {
        "id": 4932,
        "ca": 2987931,
        "margin": 94163,
        "ebitda": 833533,
        "loss": 2548828,
        "year": 2016,
        "business": 2469
    },
    {
        "id": 4933,
        "ca": 1918594,
        "margin": 608420,
        "ebitda": 48656,
        "loss": 3929717,
        "year": 2017,
        "business": 2470
    },
    {
        "id": 4934,
        "ca": 3838016,
        "margin": -125324,
        "ebitda": 689653,
        "loss": 5153326,
        "year": 2016,
        "business": 2470
    },
    {
        "id": 4935,
        "ca": 784201,
        "margin": 152713,
        "ebitda": 747400,
        "loss": 5136538,
        "year": 2017,
        "business": 2471
    },
    {
        "id": 4936,
        "ca": 503662,
        "margin": 920524,
        "ebitda": 630705,
        "loss": 2303495,
        "year": 2016,
        "business": 2471
    },
    {
        "id": 4937,
        "ca": 929090,
        "margin": 564220,
        "ebitda": 252906,
        "loss": 9746310,
        "year": 2017,
        "business": 2472
    },
    {
        "id": 4938,
        "ca": 2158639,
        "margin": 105807,
        "ebitda": 693906,
        "loss": 1359336,
        "year": 2016,
        "business": 2472
    },
    {
        "id": 4939,
        "ca": 812364,
        "margin": 960696,
        "ebitda": 949485,
        "loss": 6544371,
        "year": 2017,
        "business": 2473
    },
    {
        "id": 4940,
        "ca": 1407290,
        "margin": -47395,
        "ebitda": 670520,
        "loss": 8967033,
        "year": 2016,
        "business": 2473
    },
    {
        "id": 4941,
        "ca": 2153000,
        "margin": 438242,
        "ebitda": 139511,
        "loss": 2935698,
        "year": 2017,
        "business": 2474
    },
    {
        "id": 4942,
        "ca": 3740737,
        "margin": 220257,
        "ebitda": 664757,
        "loss": 9211966,
        "year": 2016,
        "business": 2474
    },
    {
        "id": 4943,
        "ca": 2818761,
        "margin": -33832,
        "ebitda": 788293,
        "loss": 5486323,
        "year": 2017,
        "business": 2475
    },
    {
        "id": 4944,
        "ca": 2834251,
        "margin": 591851,
        "ebitda": 979319,
        "loss": 8620705,
        "year": 2016,
        "business": 2475
    },
    {
        "id": 4945,
        "ca": 2529178,
        "margin": 197369,
        "ebitda": 886454,
        "loss": 7279257,
        "year": 2017,
        "business": 2476
    },
    {
        "id": 4946,
        "ca": 3546117,
        "margin": 244818,
        "ebitda": 645308,
        "loss": 6806083,
        "year": 2016,
        "business": 2476
    },
    {
        "id": 4947,
        "ca": 1429780,
        "margin": 799453,
        "ebitda": 36259,
        "loss": 3355722,
        "year": 2017,
        "business": 2477
    },
    {
        "id": 4948,
        "ca": 2099179,
        "margin": -54616,
        "ebitda": 527125,
        "loss": 5403606,
        "year": 2016,
        "business": 2477
    },
    {
        "id": 4949,
        "ca": 2889040,
        "margin": 703385,
        "ebitda": 752653,
        "loss": 8681358,
        "year": 2017,
        "business": 2478
    },
    {
        "id": 4950,
        "ca": 2258022,
        "margin": 871789,
        "ebitda": 822206,
        "loss": 1999996,
        "year": 2016,
        "business": 2478
    },
    {
        "id": 4951,
        "ca": 2567850,
        "margin": -114309,
        "ebitda": 803022,
        "loss": 3644955,
        "year": 2017,
        "business": 2479
    },
    {
        "id": 4952,
        "ca": 2327035,
        "margin": 651791,
        "ebitda": 325188,
        "loss": 5600022,
        "year": 2016,
        "business": 2479
    },
    {
        "id": 4953,
        "ca": 3175010,
        "margin": 303265,
        "ebitda": 16810,
        "loss": 5997395,
        "year": 2017,
        "business": 2480
    },
    {
        "id": 4954,
        "ca": 3837947,
        "margin": -136899,
        "ebitda": 927198,
        "loss": 80596,
        "year": 2016,
        "business": 2480
    },
    {
        "id": 4955,
        "ca": 234247,
        "margin": 953337,
        "ebitda": 591502,
        "loss": 5046849,
        "year": 2017,
        "business": 2481
    },
    {
        "id": 4956,
        "ca": 3641315,
        "margin": 184658,
        "ebitda": 732802,
        "loss": 8076404,
        "year": 2016,
        "business": 2481
    },
    {
        "id": 4957,
        "ca": 1656818,
        "margin": 595587,
        "ebitda": 289090,
        "loss": 2974264,
        "year": 2017,
        "business": 2482
    },
    {
        "id": 4958,
        "ca": 398030,
        "margin": 593684,
        "ebitda": 562458,
        "loss": 5755394,
        "year": 2016,
        "business": 2482
    },
    {
        "id": 4959,
        "ca": 888190,
        "margin": -133730,
        "ebitda": 753834,
        "loss": 3572235,
        "year": 2017,
        "business": 2483
    },
    {
        "id": 4960,
        "ca": 819653,
        "margin": 714896,
        "ebitda": 990159,
        "loss": 7031751,
        "year": 2016,
        "business": 2483
    },
    {
        "id": 4961,
        "ca": 1361366,
        "margin": 738358,
        "ebitda": 886639,
        "loss": 804053,
        "year": 2017,
        "business": 2484
    },
    {
        "id": 4962,
        "ca": 2006011,
        "margin": 84480,
        "ebitda": 49659,
        "loss": 4884748,
        "year": 2016,
        "business": 2484
    },
    {
        "id": 4963,
        "ca": 3441535,
        "margin": 889969,
        "ebitda": 889269,
        "loss": 8285903,
        "year": 2017,
        "business": 2485
    },
    {
        "id": 4964,
        "ca": 2323637,
        "margin": 566912,
        "ebitda": 736335,
        "loss": 1409551,
        "year": 2016,
        "business": 2485
    },
    {
        "id": 4965,
        "ca": 2369218,
        "margin": -73152,
        "ebitda": 655888,
        "loss": 2911597,
        "year": 2017,
        "business": 2486
    },
    {
        "id": 4966,
        "ca": 1149241,
        "margin": 97437,
        "ebitda": 64417,
        "loss": 3166514,
        "year": 2016,
        "business": 2486
    },
    {
        "id": 4967,
        "ca": 814328,
        "margin": -48315,
        "ebitda": 783356,
        "loss": 576601,
        "year": 2017,
        "business": 2487
    },
    {
        "id": 4968,
        "ca": 1365842,
        "margin": -14642,
        "ebitda": 646031,
        "loss": 5953844,
        "year": 2016,
        "business": 2487
    },
    {
        "id": 4969,
        "ca": 1834374,
        "margin": 326249,
        "ebitda": 959880,
        "loss": 7187013,
        "year": 2017,
        "business": 2488
    },
    {
        "id": 4970,
        "ca": 1192992,
        "margin": 334113,
        "ebitda": 549808,
        "loss": 2930291,
        "year": 2016,
        "business": 2488
    },
    {
        "id": 4971,
        "ca": 2801651,
        "margin": -28139,
        "ebitda": 297122,
        "loss": 4191837,
        "year": 2017,
        "business": 2489
    },
    {
        "id": 4972,
        "ca": 3314282,
        "margin": 641617,
        "ebitda": 995032,
        "loss": 8459886,
        "year": 2016,
        "business": 2489
    },
    {
        "id": 4973,
        "ca": 2598845,
        "margin": 289164,
        "ebitda": 137003,
        "loss": 6548481,
        "year": 2017,
        "business": 2490
    },
    {
        "id": 4974,
        "ca": 3324436,
        "margin": 611157,
        "ebitda": 665734,
        "loss": 8164744,
        "year": 2016,
        "business": 2490
    },
    {
        "id": 4975,
        "ca": 1793980,
        "margin": 857354,
        "ebitda": 364851,
        "loss": 2272533,
        "year": 2017,
        "business": 2491
    },
    {
        "id": 4976,
        "ca": 212326,
        "margin": 147161,
        "ebitda": 359990,
        "loss": 9366460,
        "year": 2016,
        "business": 2491
    },
    {
        "id": 4977,
        "ca": 3060129,
        "margin": -57748,
        "ebitda": 111143,
        "loss": 5801049,
        "year": 2017,
        "business": 2492
    },
    {
        "id": 4978,
        "ca": 2732443,
        "margin": -185117,
        "ebitda": 897047,
        "loss": 5541022,
        "year": 2016,
        "business": 2492
    },
    {
        "id": 4979,
        "ca": 3683294,
        "margin": -12673,
        "ebitda": 436741,
        "loss": 3246692,
        "year": 2017,
        "business": 2493
    },
    {
        "id": 4980,
        "ca": 985195,
        "margin": 220215,
        "ebitda": 765111,
        "loss": 2435349,
        "year": 2016,
        "business": 2493
    },
    {
        "id": 4981,
        "ca": 1059793,
        "margin": 925668,
        "ebitda": 29499,
        "loss": 6657054,
        "year": 2017,
        "business": 2494
    },
    {
        "id": 4982,
        "ca": 3867970,
        "margin": 127172,
        "ebitda": 262415,
        "loss": 4816646,
        "year": 2016,
        "business": 2494
    },
    {
        "id": 4983,
        "ca": 1463808,
        "margin": 348258,
        "ebitda": 590048,
        "loss": 4065483,
        "year": 2017,
        "business": 2495
    },
    {
        "id": 4984,
        "ca": 1359073,
        "margin": 437928,
        "ebitda": 454686,
        "loss": 5863600,
        "year": 2016,
        "business": 2495
    },
    {
        "id": 4985,
        "ca": 824151,
        "margin": 966975,
        "ebitda": 688976,
        "loss": 4876715,
        "year": 2017,
        "business": 2496
    },
    {
        "id": 4986,
        "ca": 2072963,
        "margin": 185234,
        "ebitda": 496657,
        "loss": 6646201,
        "year": 2016,
        "business": 2496
    },
    {
        "id": 4987,
        "ca": 941673,
        "margin": 378932,
        "ebitda": 896642,
        "loss": 7541673,
        "year": 2017,
        "business": 2497
    },
    {
        "id": 4988,
        "ca": 3564685,
        "margin": 123815,
        "ebitda": 496294,
        "loss": 3757149,
        "year": 2016,
        "business": 2497
    },
    {
        "id": 4989,
        "ca": 3579908,
        "margin": 854056,
        "ebitda": 875551,
        "loss": 7027042,
        "year": 2017,
        "business": 2498
    },
    {
        "id": 4990,
        "ca": 3856568,
        "margin": 150722,
        "ebitda": 991135,
        "loss": 1980958,
        "year": 2016,
        "business": 2498
    },
    {
        "id": 4991,
        "ca": 1688779,
        "margin": -159723,
        "ebitda": 127885,
        "loss": 9553725,
        "year": 2017,
        "business": 2499
    },
    {
        "id": 4992,
        "ca": 2615968,
        "margin": 896077,
        "ebitda": 32744,
        "loss": 3546095,
        "year": 2016,
        "business": 2499
    },
    {
        "id": 4993,
        "ca": 699746,
        "margin": 91275,
        "ebitda": 400593,
        "loss": 3032962,
        "year": 2017,
        "business": 2500
    },
    {
        "id": 4994,
        "ca": 3004201,
        "margin": 439139,
        "ebitda": 203405,
        "loss": 903996,
        "year": 2016,
        "business": 2500
    },
    {
        "id": 4995,
        "ca": 585224,
        "margin": 146590,
        "ebitda": 695672,
        "loss": 211200,
        "year": 2017,
        "business": 2501
    },
    {
        "id": 4996,
        "ca": 3866780,
        "margin": 675857,
        "ebitda": 365233,
        "loss": 8891632,
        "year": 2016,
        "business": 2501
    },
    {
        "id": 4997,
        "ca": 809248,
        "margin": 333878,
        "ebitda": 816467,
        "loss": 8691711,
        "year": 2017,
        "business": 2502
    },
    {
        "id": 4998,
        "ca": 2637226,
        "margin": 319549,
        "ebitda": 91713,
        "loss": 3167156,
        "year": 2016,
        "business": 2502
    },
    {
        "id": 4999,
        "ca": 3778638,
        "margin": 334773,
        "ebitda": 679137,
        "loss": 7806071,
        "year": 2017,
        "business": 2503
    },
    {
        "id": 5000,
        "ca": 3497909,
        "margin": 319175,
        "ebitda": 450324,
        "loss": 4784609,
        "year": 2016,
        "business": 2503
    },
    {
        "id": 5001,
        "ca": 2425895,
        "margin": -36097,
        "ebitda": 510250,
        "loss": 4585429,
        "year": 2017,
        "business": 2504
    },
    {
        "id": 5002,
        "ca": 2291345,
        "margin": 82259,
        "ebitda": 699924,
        "loss": 7475043,
        "year": 2016,
        "business": 2504
    },
    {
        "id": 5003,
        "ca": 3506766,
        "margin": 274133,
        "ebitda": 34174,
        "loss": 3677732,
        "year": 2017,
        "business": 2505
    },
    {
        "id": 5004,
        "ca": 3282506,
        "margin": 259763,
        "ebitda": 103786,
        "loss": 6295907,
        "year": 2016,
        "business": 2505
    },
    {
        "id": 5005,
        "ca": 2909729,
        "margin": 369706,
        "ebitda": 85593,
        "loss": 3061624,
        "year": 2017,
        "business": 2506
    },
    {
        "id": 5006,
        "ca": 3276126,
        "margin": 288118,
        "ebitda": 993894,
        "loss": 2191412,
        "year": 2016,
        "business": 2506
    },
    {
        "id": 5007,
        "ca": 3587822,
        "margin": 74700,
        "ebitda": 522215,
        "loss": 6140731,
        "year": 2017,
        "business": 2507
    },
    {
        "id": 5008,
        "ca": 1583816,
        "margin": 570319,
        "ebitda": 574093,
        "loss": 5758950,
        "year": 2016,
        "business": 2507
    },
    {
        "id": 5009,
        "ca": 2661473,
        "margin": 917155,
        "ebitda": 431477,
        "loss": 9398696,
        "year": 2017,
        "business": 2508
    },
    {
        "id": 5010,
        "ca": 3912135,
        "margin": -79026,
        "ebitda": 907216,
        "loss": 5839494,
        "year": 2016,
        "business": 2508
    },
    {
        "id": 5011,
        "ca": 3916482,
        "margin": 789171,
        "ebitda": 591525,
        "loss": 4337407,
        "year": 2017,
        "business": 2509
    },
    {
        "id": 5012,
        "ca": 2851391,
        "margin": 154011,
        "ebitda": 75755,
        "loss": 4917589,
        "year": 2016,
        "business": 2509
    },
    {
        "id": 5013,
        "ca": 3877874,
        "margin": -64877,
        "ebitda": 283661,
        "loss": 8850825,
        "year": 2017,
        "business": 2510
    },
    {
        "id": 5014,
        "ca": 1780165,
        "margin": 627707,
        "ebitda": 188020,
        "loss": 4142561,
        "year": 2016,
        "business": 2510
    },
    {
        "id": 5015,
        "ca": 904887,
        "margin": 161426,
        "ebitda": 560772,
        "loss": 6954504,
        "year": 2017,
        "business": 2511
    },
    {
        "id": 5016,
        "ca": 675847,
        "margin": 233939,
        "ebitda": 339451,
        "loss": 8460591,
        "year": 2016,
        "business": 2511
    },
    {
        "id": 5017,
        "ca": 1258712,
        "margin": 193533,
        "ebitda": 133533,
        "loss": 2318027,
        "year": 2017,
        "business": 2512
    },
    {
        "id": 5018,
        "ca": 3082650,
        "margin": 728343,
        "ebitda": 380527,
        "loss": 4210061,
        "year": 2016,
        "business": 2512
    },
    {
        "id": 5019,
        "ca": 2145984,
        "margin": 192499,
        "ebitda": 678170,
        "loss": 2268864,
        "year": 2017,
        "business": 2513
    },
    {
        "id": 5020,
        "ca": 3810752,
        "margin": 501467,
        "ebitda": 529022,
        "loss": 3323238,
        "year": 2016,
        "business": 2513
    },
    {
        "id": 5021,
        "ca": 3393679,
        "margin": 512183,
        "ebitda": 633008,
        "loss": 73604,
        "year": 2017,
        "business": 2514
    },
    {
        "id": 5022,
        "ca": 2760846,
        "margin": 190767,
        "ebitda": 817737,
        "loss": 9471846,
        "year": 2016,
        "business": 2514
    },
    {
        "id": 5023,
        "ca": 490523,
        "margin": 144313,
        "ebitda": 564730,
        "loss": 8367688,
        "year": 2017,
        "business": 2515
    },
    {
        "id": 5024,
        "ca": 2068840,
        "margin": 114319,
        "ebitda": 650235,
        "loss": 8027168,
        "year": 2016,
        "business": 2515
    },
    {
        "id": 5025,
        "ca": 1512775,
        "margin": 940569,
        "ebitda": 603753,
        "loss": 206523,
        "year": 2017,
        "business": 2516
    },
    {
        "id": 5026,
        "ca": 2148636,
        "margin": 113689,
        "ebitda": 649884,
        "loss": 1327309,
        "year": 2016,
        "business": 2516
    },
    {
        "id": 5027,
        "ca": 2439582,
        "margin": 944973,
        "ebitda": 341871,
        "loss": 5177689,
        "year": 2017,
        "business": 2517
    },
    {
        "id": 5028,
        "ca": 2198174,
        "margin": 771806,
        "ebitda": 980122,
        "loss": 9350034,
        "year": 2016,
        "business": 2517
    },
    {
        "id": 5029,
        "ca": 3659120,
        "margin": 779837,
        "ebitda": 305681,
        "loss": 9238657,
        "year": 2017,
        "business": 2518
    },
    {
        "id": 5030,
        "ca": 979885,
        "margin": 290030,
        "ebitda": 902063,
        "loss": 4866811,
        "year": 2016,
        "business": 2518
    },
    {
        "id": 5031,
        "ca": 237512,
        "margin": -173455,
        "ebitda": 382060,
        "loss": 8829098,
        "year": 2017,
        "business": 2519
    },
    {
        "id": 5032,
        "ca": 2664685,
        "margin": 307524,
        "ebitda": 569126,
        "loss": 2712404,
        "year": 2016,
        "business": 2519
    },
    {
        "id": 5033,
        "ca": 3103484,
        "margin": 590803,
        "ebitda": 619969,
        "loss": 3865183,
        "year": 2017,
        "business": 2520
    },
    {
        "id": 5034,
        "ca": 3017136,
        "margin": 84984,
        "ebitda": 240512,
        "loss": 4807954,
        "year": 2016,
        "business": 2520
    },
    {
        "id": 5035,
        "ca": 3912615,
        "margin": -117225,
        "ebitda": 445707,
        "loss": 5775246,
        "year": 2017,
        "business": 2521
    },
    {
        "id": 5036,
        "ca": 1049888,
        "margin": 256288,
        "ebitda": 478302,
        "loss": 4897795,
        "year": 2016,
        "business": 2521
    },
    {
        "id": 5037,
        "ca": 3659084,
        "margin": 834841,
        "ebitda": 111987,
        "loss": 1501108,
        "year": 2017,
        "business": 2522
    },
    {
        "id": 5038,
        "ca": 1948201,
        "margin": 721214,
        "ebitda": 419050,
        "loss": 227777,
        "year": 2016,
        "business": 2522
    },
    {
        "id": 5039,
        "ca": 2468229,
        "margin": 265421,
        "ebitda": 302920,
        "loss": 6742927,
        "year": 2017,
        "business": 2523
    },
    {
        "id": 5040,
        "ca": 981901,
        "margin": 790569,
        "ebitda": 582045,
        "loss": 7632615,
        "year": 2016,
        "business": 2523
    },
    {
        "id": 5041,
        "ca": 2887913,
        "margin": 228444,
        "ebitda": 728088,
        "loss": 3141232,
        "year": 2017,
        "business": 2524
    },
    {
        "id": 5042,
        "ca": 189415,
        "margin": 806284,
        "ebitda": 356532,
        "loss": 3905434,
        "year": 2016,
        "business": 2524
    },
    {
        "id": 5043,
        "ca": 3800083,
        "margin": -89532,
        "ebitda": 327736,
        "loss": 6824193,
        "year": 2017,
        "business": 2525
    },
    {
        "id": 5044,
        "ca": 1908162,
        "margin": 431094,
        "ebitda": 25992,
        "loss": 9595756,
        "year": 2016,
        "business": 2525
    },
    {
        "id": 5045,
        "ca": 3745483,
        "margin": 75040,
        "ebitda": 162296,
        "loss": 3479762,
        "year": 2017,
        "business": 2526
    },
    {
        "id": 5046,
        "ca": 343820,
        "margin": 20513,
        "ebitda": 59485,
        "loss": 5856270,
        "year": 2016,
        "business": 2526
    },
    {
        "id": 5047,
        "ca": 3425132,
        "margin": -158363,
        "ebitda": 693691,
        "loss": 3120330,
        "year": 2017,
        "business": 2527
    },
    {
        "id": 5048,
        "ca": 822070,
        "margin": 84604,
        "ebitda": 656191,
        "loss": 7205276,
        "year": 2016,
        "business": 2527
    },
    {
        "id": 5049,
        "ca": 655614,
        "margin": -52212,
        "ebitda": 269990,
        "loss": 1615367,
        "year": 2017,
        "business": 2528
    },
    {
        "id": 5050,
        "ca": 2728842,
        "margin": 160237,
        "ebitda": 185348,
        "loss": 4906909,
        "year": 2016,
        "business": 2528
    },
    {
        "id": 5051,
        "ca": 2447276,
        "margin": 759527,
        "ebitda": 264569,
        "loss": 7761164,
        "year": 2017,
        "business": 2529
    },
    {
        "id": 5052,
        "ca": 1386121,
        "margin": 113756,
        "ebitda": 957702,
        "loss": 9364683,
        "year": 2016,
        "business": 2529
    },
    {
        "id": 5053,
        "ca": 3416004,
        "margin": 786426,
        "ebitda": 707607,
        "loss": 23276,
        "year": 2017,
        "business": 2530
    },
    {
        "id": 5054,
        "ca": 2612412,
        "margin": -199540,
        "ebitda": 691088,
        "loss": 2221698,
        "year": 2016,
        "business": 2530
    },
    {
        "id": 5055,
        "ca": 2234315,
        "margin": 854793,
        "ebitda": 497843,
        "loss": 1765597,
        "year": 2017,
        "business": 2531
    },
    {
        "id": 5056,
        "ca": 2195485,
        "margin": 482912,
        "ebitda": 496411,
        "loss": 1351504,
        "year": 2016,
        "business": 2531
    },
    {
        "id": 5057,
        "ca": 3192822,
        "margin": 218034,
        "ebitda": 176043,
        "loss": 1017293,
        "year": 2017,
        "business": 2532
    },
    {
        "id": 5058,
        "ca": 3860272,
        "margin": 508122,
        "ebitda": 427761,
        "loss": 2805201,
        "year": 2016,
        "business": 2532
    },
    {
        "id": 5059,
        "ca": 3200566,
        "margin": -185746,
        "ebitda": 195282,
        "loss": 5455395,
        "year": 2017,
        "business": 2533
    },
    {
        "id": 5060,
        "ca": 3857386,
        "margin": -69191,
        "ebitda": 810974,
        "loss": 5892310,
        "year": 2016,
        "business": 2533
    },
    {
        "id": 5061,
        "ca": 1962652,
        "margin": -154905,
        "ebitda": 25111,
        "loss": 8546105,
        "year": 2017,
        "business": 2534
    },
    {
        "id": 5062,
        "ca": 3195779,
        "margin": 951399,
        "ebitda": 867936,
        "loss": 5735554,
        "year": 2016,
        "business": 2534
    },
    {
        "id": 5063,
        "ca": 1644293,
        "margin": 673942,
        "ebitda": 903520,
        "loss": 4987871,
        "year": 2017,
        "business": 2535
    },
    {
        "id": 5064,
        "ca": 1470234,
        "margin": 829962,
        "ebitda": 51651,
        "loss": 8454350,
        "year": 2016,
        "business": 2535
    },
    {
        "id": 5065,
        "ca": 2826282,
        "margin": 649836,
        "ebitda": 509479,
        "loss": 6041428,
        "year": 2017,
        "business": 2536
    },
    {
        "id": 5066,
        "ca": 245755,
        "margin": 587147,
        "ebitda": 594271,
        "loss": 6957641,
        "year": 2016,
        "business": 2536
    },
    {
        "id": 5067,
        "ca": 3327290,
        "margin": 899824,
        "ebitda": 550704,
        "loss": 1504113,
        "year": 2017,
        "business": 2537
    },
    {
        "id": 5068,
        "ca": 341283,
        "margin": 119743,
        "ebitda": 570573,
        "loss": 55269,
        "year": 2016,
        "business": 2537
    },
    {
        "id": 5069,
        "ca": 462668,
        "margin": 604230,
        "ebitda": 356528,
        "loss": 8071941,
        "year": 2017,
        "business": 2538
    },
    {
        "id": 5070,
        "ca": 3380896,
        "margin": 756817,
        "ebitda": 99705,
        "loss": 9239734,
        "year": 2016,
        "business": 2538
    },
    {
        "id": 5071,
        "ca": 1135055,
        "margin": 443478,
        "ebitda": 546961,
        "loss": 9210909,
        "year": 2017,
        "business": 2539
    },
    {
        "id": 5072,
        "ca": 545741,
        "margin": -98098,
        "ebitda": 957298,
        "loss": 9236643,
        "year": 2016,
        "business": 2539
    },
    {
        "id": 5073,
        "ca": 2127852,
        "margin": -43695,
        "ebitda": 825959,
        "loss": 5476726,
        "year": 2017,
        "business": 2540
    },
    {
        "id": 5074,
        "ca": 3590326,
        "margin": 586725,
        "ebitda": 577118,
        "loss": 3504338,
        "year": 2016,
        "business": 2540
    },
    {
        "id": 5075,
        "ca": 2778639,
        "margin": -140897,
        "ebitda": 777472,
        "loss": 7785753,
        "year": 2017,
        "business": 2541
    },
    {
        "id": 5076,
        "ca": 2613872,
        "margin": 297422,
        "ebitda": 247167,
        "loss": 2497521,
        "year": 2016,
        "business": 2541
    },
    {
        "id": 5077,
        "ca": 3688832,
        "margin": 975240,
        "ebitda": 846552,
        "loss": 4088075,
        "year": 2017,
        "business": 2542
    },
    {
        "id": 5078,
        "ca": 1969358,
        "margin": 460144,
        "ebitda": 102752,
        "loss": 3499302,
        "year": 2016,
        "business": 2542
    },
    {
        "id": 5079,
        "ca": 2470780,
        "margin": 961928,
        "ebitda": 924211,
        "loss": 3421789,
        "year": 2017,
        "business": 2543
    },
    {
        "id": 5080,
        "ca": 224960,
        "margin": -119746,
        "ebitda": 372508,
        "loss": 3206750,
        "year": 2016,
        "business": 2543
    },
    {
        "id": 5081,
        "ca": 2764252,
        "margin": 529821,
        "ebitda": 114227,
        "loss": 5435275,
        "year": 2017,
        "business": 2544
    },
    {
        "id": 5082,
        "ca": 3652719,
        "margin": 405054,
        "ebitda": 531878,
        "loss": 2135356,
        "year": 2016,
        "business": 2544
    },
    {
        "id": 5083,
        "ca": 2185450,
        "margin": 931264,
        "ebitda": 662242,
        "loss": 1313372,
        "year": 2017,
        "business": 2545
    },
    {
        "id": 5084,
        "ca": 2077357,
        "margin": 497351,
        "ebitda": 65952,
        "loss": 858474,
        "year": 2017,
        "business": 2546
    },
    {
        "id": 5085,
        "ca": 432070,
        "margin": 427778,
        "ebitda": 290433,
        "loss": 8023406,
        "year": 2016,
        "business": 2546
    },
    {
        "id": 5086,
        "ca": 364921,
        "margin": 61976,
        "ebitda": 960673,
        "loss": 2812728,
        "year": 2017,
        "business": 2547
    },
    {
        "id": 5087,
        "ca": 1944186,
        "margin": 738525,
        "ebitda": 846608,
        "loss": 657145,
        "year": 2016,
        "business": 2547
    },
    {
        "id": 5088,
        "ca": 2752578,
        "margin": -147358,
        "ebitda": 485891,
        "loss": 331323,
        "year": 2017,
        "business": 2548
    },
    {
        "id": 5089,
        "ca": 1686886,
        "margin": -117670,
        "ebitda": 390980,
        "loss": 3205084,
        "year": 2016,
        "business": 2548
    },
    {
        "id": 5090,
        "ca": 1911503,
        "margin": 340643,
        "ebitda": 417233,
        "loss": 5121889,
        "year": 2017,
        "business": 2549
    },
    {
        "id": 5091,
        "ca": 3669705,
        "margin": 937608,
        "ebitda": 162576,
        "loss": 8516803,
        "year": 2016,
        "business": 2549
    },
    {
        "id": 5092,
        "ca": 2802947,
        "margin": -192527,
        "ebitda": 895332,
        "loss": 168490,
        "year": 2017,
        "business": 2550
    },
    {
        "id": 5093,
        "ca": 1704685,
        "margin": 675635,
        "ebitda": 175060,
        "loss": 8978142,
        "year": 2016,
        "business": 2550
    },
    {
        "id": 5094,
        "ca": 3366027,
        "margin": 987873,
        "ebitda": 196501,
        "loss": 7956104,
        "year": 2017,
        "business": 2551
    },
    {
        "id": 5095,
        "ca": 2312009,
        "margin": 564257,
        "ebitda": 534160,
        "loss": 5616100,
        "year": 2016,
        "business": 2551
    },
    {
        "id": 5096,
        "ca": 807176,
        "margin": -170771,
        "ebitda": 501330,
        "loss": 107559,
        "year": 2017,
        "business": 2552
    },
    {
        "id": 5097,
        "ca": 1677728,
        "margin": 405029,
        "ebitda": 919989,
        "loss": 7064750,
        "year": 2016,
        "business": 2552
    },
    {
        "id": 5098,
        "ca": 845912,
        "margin": -55821,
        "ebitda": 224135,
        "loss": 2658021,
        "year": 2017,
        "business": 2553
    },
    {
        "id": 5099,
        "ca": 2744919,
        "margin": 681582,
        "ebitda": 236779,
        "loss": 4376894,
        "year": 2016,
        "business": 2553
    },
    {
        "id": 5100,
        "ca": 2645052,
        "margin": -41159,
        "ebitda": 173240,
        "loss": 1967321,
        "year": 2017,
        "business": 2554
    },
    {
        "id": 5101,
        "ca": 732362,
        "margin": 698731,
        "ebitda": 463853,
        "loss": 5229956,
        "year": 2016,
        "business": 2554
    },
    {
        "id": 5102,
        "ca": 1399582,
        "margin": 985314,
        "ebitda": 725283,
        "loss": 4266902,
        "year": 2017,
        "business": 2555
    },
    {
        "id": 5103,
        "ca": 1916496,
        "margin": 979357,
        "ebitda": 942617,
        "loss": 2478758,
        "year": 2016,
        "business": 2555
    },
    {
        "id": 5104,
        "ca": 490022,
        "margin": 352486,
        "ebitda": 213406,
        "loss": 608978,
        "year": 2017,
        "business": 2556
    },
    {
        "id": 5105,
        "ca": 2814806,
        "margin": 150982,
        "ebitda": 255155,
        "loss": 4306009,
        "year": 2016,
        "business": 2556
    },
    {
        "id": 5106,
        "ca": 498678,
        "margin": 154466,
        "ebitda": 620676,
        "loss": 548809,
        "year": 2017,
        "business": 2557
    },
    {
        "id": 5107,
        "ca": 2772820,
        "margin": 119935,
        "ebitda": 271449,
        "loss": 5095792,
        "year": 2016,
        "business": 2557
    },
    {
        "id": 5108,
        "ca": 2302368,
        "margin": 469510,
        "ebitda": 250648,
        "loss": 5131438,
        "year": 2017,
        "business": 2558
    },
    {
        "id": 5109,
        "ca": 3011160,
        "margin": 429420,
        "ebitda": 940827,
        "loss": 7664834,
        "year": 2016,
        "business": 2558
    },
    {
        "id": 5110,
        "ca": 2091227,
        "margin": 809190,
        "ebitda": 589384,
        "loss": 6212269,
        "year": 2017,
        "business": 2559
    },
    {
        "id": 5111,
        "ca": 676290,
        "margin": 202279,
        "ebitda": 718696,
        "loss": 5774367,
        "year": 2016,
        "business": 2559
    },
    {
        "id": 5112,
        "ca": 1071840,
        "margin": 70852,
        "ebitda": 571568,
        "loss": 2690278,
        "year": 2017,
        "business": 2560
    },
    {
        "id": 5113,
        "ca": 2169468,
        "margin": -92185,
        "ebitda": 134714,
        "loss": 2327708,
        "year": 2016,
        "business": 2560
    },
    {
        "id": 5114,
        "ca": 227469,
        "margin": -172937,
        "ebitda": 849147,
        "loss": 3197097,
        "year": 2017,
        "business": 2561
    },
    {
        "id": 5115,
        "ca": 2950073,
        "margin": 291666,
        "ebitda": 358533,
        "loss": 2035460,
        "year": 2016,
        "business": 2561
    },
    {
        "id": 5116,
        "ca": 1659892,
        "margin": 228500,
        "ebitda": 676123,
        "loss": 113437,
        "year": 2017,
        "business": 2562
    },
    {
        "id": 5117,
        "ca": 1332202,
        "margin": -10635,
        "ebitda": 591615,
        "loss": 1731490,
        "year": 2016,
        "business": 2562
    },
    {
        "id": 5118,
        "ca": 2698460,
        "margin": 367570,
        "ebitda": 943598,
        "loss": 6190258,
        "year": 2017,
        "business": 2563
    },
    {
        "id": 5119,
        "ca": 1547921,
        "margin": 898131,
        "ebitda": 549866,
        "loss": 695666,
        "year": 2016,
        "business": 2563
    },
    {
        "id": 5120,
        "ca": 3902519,
        "margin": 765501,
        "ebitda": 873377,
        "loss": 2554825,
        "year": 2017,
        "business": 2564
    },
    {
        "id": 5121,
        "ca": 804936,
        "margin": 182411,
        "ebitda": 466946,
        "loss": 9989170,
        "year": 2016,
        "business": 2564
    },
    {
        "id": 5122,
        "ca": 1658933,
        "margin": 647423,
        "ebitda": 568089,
        "loss": 6579924,
        "year": 2017,
        "business": 2565
    },
    {
        "id": 5123,
        "ca": 1738120,
        "margin": 674431,
        "ebitda": 429561,
        "loss": 408865,
        "year": 2016,
        "business": 2565
    },
    {
        "id": 5124,
        "ca": 2026715,
        "margin": -198616,
        "ebitda": 965383,
        "loss": 6439279,
        "year": 2017,
        "business": 2566
    },
    {
        "id": 5125,
        "ca": 3894824,
        "margin": 606068,
        "ebitda": 694184,
        "loss": 5969030,
        "year": 2016,
        "business": 2566
    },
    {
        "id": 5126,
        "ca": 2494629,
        "margin": 240340,
        "ebitda": 282056,
        "loss": 6994907,
        "year": 2017,
        "business": 2567
    },
    {
        "id": 5127,
        "ca": 1974168,
        "margin": 484412,
        "ebitda": 253168,
        "loss": 1670528,
        "year": 2016,
        "business": 2567
    },
    {
        "id": 5128,
        "ca": 3977217,
        "margin": 175757,
        "ebitda": 241608,
        "loss": 6107207,
        "year": 2017,
        "business": 2568
    },
    {
        "id": 5129,
        "ca": 809720,
        "margin": 545355,
        "ebitda": 842297,
        "loss": 7239634,
        "year": 2016,
        "business": 2568
    },
    {
        "id": 5130,
        "ca": 3055261,
        "margin": -29529,
        "ebitda": 988508,
        "loss": 3307127,
        "year": 2017,
        "business": 2569
    },
    {
        "id": 5131,
        "ca": 441182,
        "margin": 616025,
        "ebitda": 739319,
        "loss": 754174,
        "year": 2016,
        "business": 2569
    },
    {
        "id": 5132,
        "ca": 3778120,
        "margin": 946201,
        "ebitda": 737398,
        "loss": 828816,
        "year": 2017,
        "business": 2570
    },
    {
        "id": 5133,
        "ca": 377221,
        "margin": 644941,
        "ebitda": 330869,
        "loss": 4185104,
        "year": 2016,
        "business": 2570
    },
    {
        "id": 5134,
        "ca": 3293799,
        "margin": 762392,
        "ebitda": 874292,
        "loss": 3623463,
        "year": 2017,
        "business": 2571
    },
    {
        "id": 5135,
        "ca": 858506,
        "margin": 189441,
        "ebitda": 609871,
        "loss": 177061,
        "year": 2016,
        "business": 2571
    },
    {
        "id": 5136,
        "ca": 1952026,
        "margin": 105098,
        "ebitda": 802326,
        "loss": 5262609,
        "year": 2017,
        "business": 2572
    },
    {
        "id": 5137,
        "ca": 353809,
        "margin": 802651,
        "ebitda": 720150,
        "loss": 953096,
        "year": 2016,
        "business": 2572
    },
    {
        "id": 5138,
        "ca": 3812845,
        "margin": 536146,
        "ebitda": 197412,
        "loss": 3385756,
        "year": 2017,
        "business": 2573
    },
    {
        "id": 5139,
        "ca": 900740,
        "margin": 452037,
        "ebitda": 479167,
        "loss": 9372921,
        "year": 2016,
        "business": 2573
    },
    {
        "id": 5140,
        "ca": 1298429,
        "margin": 85209,
        "ebitda": 801714,
        "loss": 1874888,
        "year": 2017,
        "business": 2574
    },
    {
        "id": 5141,
        "ca": 3372389,
        "margin": -46817,
        "ebitda": 962766,
        "loss": 1038773,
        "year": 2016,
        "business": 2574
    },
    {
        "id": 5142,
        "ca": 1571590,
        "margin": 465195,
        "ebitda": 715373,
        "loss": 6767658,
        "year": 2017,
        "business": 2575
    },
    {
        "id": 5143,
        "ca": 1885922,
        "margin": 294164,
        "ebitda": 602655,
        "loss": 5395737,
        "year": 2016,
        "business": 2575
    },
    {
        "id": 5144,
        "ca": 609290,
        "margin": 476030,
        "ebitda": 414815,
        "loss": 650125,
        "year": 2017,
        "business": 2576
    },
    {
        "id": 5145,
        "ca": 383265,
        "margin": -109517,
        "ebitda": 516401,
        "loss": 7914729,
        "year": 2016,
        "business": 2576
    },
    {
        "id": 5146,
        "ca": 3646184,
        "margin": -117596,
        "ebitda": 904991,
        "loss": 369354,
        "year": 2017,
        "business": 2577
    },
    {
        "id": 5147,
        "ca": 215663,
        "margin": 343155,
        "ebitda": 914212,
        "loss": 386124,
        "year": 2016,
        "business": 2577
    },
    {
        "id": 5148,
        "ca": 3081311,
        "margin": 760359,
        "ebitda": 515188,
        "loss": 866840,
        "year": 2017,
        "business": 2578
    },
    {
        "id": 5149,
        "ca": 2987931,
        "margin": 94163,
        "ebitda": 833533,
        "loss": 2548828,
        "year": 2016,
        "business": 2578
    },
    {
        "id": 5150,
        "ca": 1918594,
        "margin": 608420,
        "ebitda": 48656,
        "loss": 3929717,
        "year": 2017,
        "business": 2579
    },
    {
        "id": 5151,
        "ca": 3838016,
        "margin": -125324,
        "ebitda": 689653,
        "loss": 5153326,
        "year": 2016,
        "business": 2579
    },
    {
        "id": 5152,
        "ca": 784201,
        "margin": 152713,
        "ebitda": 747400,
        "loss": 5136538,
        "year": 2017,
        "business": 2580
    },
    {
        "id": 5153,
        "ca": 503662,
        "margin": 920524,
        "ebitda": 630705,
        "loss": 2303495,
        "year": 2016,
        "business": 2580
    },
    {
        "id": 5154,
        "ca": 929090,
        "margin": 564220,
        "ebitda": 252906,
        "loss": 9746310,
        "year": 2017,
        "business": 2581
    },
    {
        "id": 5155,
        "ca": 2158639,
        "margin": 105807,
        "ebitda": 693906,
        "loss": 1359336,
        "year": 2016,
        "business": 2581
    },
    {
        "id": 5156,
        "ca": 812364,
        "margin": 960696,
        "ebitda": 949485,
        "loss": 6544371,
        "year": 2017,
        "business": 2582
    },
    {
        "id": 5157,
        "ca": 1407290,
        "margin": -47395,
        "ebitda": 670520,
        "loss": 8967033,
        "year": 2016,
        "business": 2582
    },
    {
        "id": 5158,
        "ca": 2153000,
        "margin": 438242,
        "ebitda": 139511,
        "loss": 2935698,
        "year": 2017,
        "business": 2583
    },
    {
        "id": 5159,
        "ca": 3740737,
        "margin": 220257,
        "ebitda": 664757,
        "loss": 9211966,
        "year": 2016,
        "business": 2583
    },
    {
        "id": 5160,
        "ca": 2818761,
        "margin": -33832,
        "ebitda": 788293,
        "loss": 5486323,
        "year": 2017,
        "business": 2584
    },
    {
        "id": 5161,
        "ca": 2834251,
        "margin": 591851,
        "ebitda": 979319,
        "loss": 8620705,
        "year": 2016,
        "business": 2584
    },
    {
        "id": 5162,
        "ca": 2529178,
        "margin": 197369,
        "ebitda": 886454,
        "loss": 7279257,
        "year": 2017,
        "business": 2585
    },
    {
        "id": 5163,
        "ca": 3546117,
        "margin": 244818,
        "ebitda": 645308,
        "loss": 6806083,
        "year": 2016,
        "business": 2585
    },
    {
        "id": 5164,
        "ca": 1429780,
        "margin": 799453,
        "ebitda": 36259,
        "loss": 3355722,
        "year": 2017,
        "business": 2586
    },
    {
        "id": 5165,
        "ca": 2099179,
        "margin": -54616,
        "ebitda": 527125,
        "loss": 5403606,
        "year": 2016,
        "business": 2586
    },
    {
        "id": 5166,
        "ca": 2889040,
        "margin": 703385,
        "ebitda": 752653,
        "loss": 8681358,
        "year": 2017,
        "business": 2587
    },
    {
        "id": 5167,
        "ca": 2258022,
        "margin": 871789,
        "ebitda": 822206,
        "loss": 1999996,
        "year": 2016,
        "business": 2587
    },
    {
        "id": 5168,
        "ca": 2567850,
        "margin": -114309,
        "ebitda": 803022,
        "loss": 3644955,
        "year": 2017,
        "business": 2588
    },
    {
        "id": 5169,
        "ca": 2327035,
        "margin": 651791,
        "ebitda": 325188,
        "loss": 5600022,
        "year": 2016,
        "business": 2588
    },
    {
        "id": 5170,
        "ca": 3175010,
        "margin": 303265,
        "ebitda": 16810,
        "loss": 5997395,
        "year": 2017,
        "business": 2589
    },
    {
        "id": 5171,
        "ca": 3837947,
        "margin": -136899,
        "ebitda": 927198,
        "loss": 80596,
        "year": 2016,
        "business": 2589
    },
    {
        "id": 5172,
        "ca": 234247,
        "margin": 953337,
        "ebitda": 591502,
        "loss": 5046849,
        "year": 2017,
        "business": 2590
    },
    {
        "id": 5173,
        "ca": 3641315,
        "margin": 184658,
        "ebitda": 732802,
        "loss": 8076404,
        "year": 2016,
        "business": 2590
    },
    {
        "id": 5174,
        "ca": 1656818,
        "margin": 595587,
        "ebitda": 289090,
        "loss": 2974264,
        "year": 2017,
        "business": 2591
    },
    {
        "id": 5175,
        "ca": 398030,
        "margin": 593684,
        "ebitda": 562458,
        "loss": 5755394,
        "year": 2016,
        "business": 2591
    },
    {
        "id": 5176,
        "ca": 888190,
        "margin": -133730,
        "ebitda": 753834,
        "loss": 3572235,
        "year": 2017,
        "business": 2592
    },
    {
        "id": 5177,
        "ca": 819653,
        "margin": 714896,
        "ebitda": 990159,
        "loss": 7031751,
        "year": 2016,
        "business": 2592
    },
    {
        "id": 5178,
        "ca": 1361366,
        "margin": 738358,
        "ebitda": 886639,
        "loss": 804053,
        "year": 2017,
        "business": 2593
    },
    {
        "id": 5179,
        "ca": 2006011,
        "margin": 84480,
        "ebitda": 49659,
        "loss": 4884748,
        "year": 2016,
        "business": 2593
    },
    {
        "id": 5180,
        "ca": 3441535,
        "margin": 889969,
        "ebitda": 889269,
        "loss": 8285903,
        "year": 2017,
        "business": 2594
    },
    {
        "id": 5181,
        "ca": 2323637,
        "margin": 566912,
        "ebitda": 736335,
        "loss": 1409551,
        "year": 2016,
        "business": 2594
    },
    {
        "id": 5182,
        "ca": 2369218,
        "margin": -73152,
        "ebitda": 655888,
        "loss": 2911597,
        "year": 2017,
        "business": 2595
    },
    {
        "id": 5183,
        "ca": 1149241,
        "margin": 97437,
        "ebitda": 64417,
        "loss": 3166514,
        "year": 2016,
        "business": 2595
    },
    {
        "id": 5184,
        "ca": 814328,
        "margin": -48315,
        "ebitda": 783356,
        "loss": 576601,
        "year": 2017,
        "business": 2596
    },
    {
        "id": 5185,
        "ca": 1365842,
        "margin": -14642,
        "ebitda": 646031,
        "loss": 5953844,
        "year": 2016,
        "business": 2596
    },
    {
        "id": 5186,
        "ca": 1834374,
        "margin": 326249,
        "ebitda": 959880,
        "loss": 7187013,
        "year": 2017,
        "business": 2597
    },
    {
        "id": 5187,
        "ca": 1192992,
        "margin": 334113,
        "ebitda": 549808,
        "loss": 2930291,
        "year": 2016,
        "business": 2597
    },
    {
        "id": 5188,
        "ca": 2801651,
        "margin": -28139,
        "ebitda": 297122,
        "loss": 4191837,
        "year": 2017,
        "business": 2598
    },
    {
        "id": 5189,
        "ca": 3314282,
        "margin": 641617,
        "ebitda": 995032,
        "loss": 8459886,
        "year": 2016,
        "business": 2598
    },
    {
        "id": 5190,
        "ca": 2598845,
        "margin": 289164,
        "ebitda": 137003,
        "loss": 6548481,
        "year": 2017,
        "business": 2599
    },
    {
        "id": 5191,
        "ca": 3324436,
        "margin": 611157,
        "ebitda": 665734,
        "loss": 8164744,
        "year": 2016,
        "business": 2599
    },
    {
        "id": 5192,
        "ca": 1793980,
        "margin": 857354,
        "ebitda": 364851,
        "loss": 2272533,
        "year": 2017,
        "business": 2600
    },
    {
        "id": 5193,
        "ca": 212326,
        "margin": 147161,
        "ebitda": 359990,
        "loss": 9366460,
        "year": 2016,
        "business": 2600
    },
    {
        "id": 5194,
        "ca": 3060129,
        "margin": -57748,
        "ebitda": 111143,
        "loss": 5801049,
        "year": 2017,
        "business": 2601
    },
    {
        "id": 5195,
        "ca": 2732443,
        "margin": -185117,
        "ebitda": 897047,
        "loss": 5541022,
        "year": 2016,
        "business": 2601
    },
    {
        "id": 5196,
        "ca": 3683294,
        "margin": -12673,
        "ebitda": 436741,
        "loss": 3246692,
        "year": 2017,
        "business": 2602
    },
    {
        "id": 5197,
        "ca": 985195,
        "margin": 220215,
        "ebitda": 765111,
        "loss": 2435349,
        "year": 2016,
        "business": 2602
    },
    {
        "id": 5198,
        "ca": 1059793,
        "margin": 925668,
        "ebitda": 29499,
        "loss": 6657054,
        "year": 2017,
        "business": 2603
    },
    {
        "id": 5199,
        "ca": 3867970,
        "margin": 127172,
        "ebitda": 262415,
        "loss": 4816646,
        "year": 2016,
        "business": 2603
    },
    {
        "id": 5200,
        "ca": 1463808,
        "margin": 348258,
        "ebitda": 590048,
        "loss": 4065483,
        "year": 2017,
        "business": 2604
    },
    {
        "id": 5201,
        "ca": 1359073,
        "margin": 437928,
        "ebitda": 454686,
        "loss": 5863600,
        "year": 2016,
        "business": 2604
    },
    {
        "id": 5202,
        "ca": 824151,
        "margin": 966975,
        "ebitda": 688976,
        "loss": 4876715,
        "year": 2017,
        "business": 2605
    },
    {
        "id": 5203,
        "ca": 2072963,
        "margin": 185234,
        "ebitda": 496657,
        "loss": 6646201,
        "year": 2016,
        "business": 2605
    },
    {
        "id": 5204,
        "ca": 941673,
        "margin": 378932,
        "ebitda": 896642,
        "loss": 7541673,
        "year": 2017,
        "business": 2606
    },
    {
        "id": 5205,
        "ca": 3564685,
        "margin": 123815,
        "ebitda": 496294,
        "loss": 3757149,
        "year": 2016,
        "business": 2606
    },
    {
        "id": 5206,
        "ca": 3579908,
        "margin": 854056,
        "ebitda": 875551,
        "loss": 7027042,
        "year": 2017,
        "business": 2607
    },
    {
        "id": 5207,
        "ca": 3856568,
        "margin": 150722,
        "ebitda": 991135,
        "loss": 1980958,
        "year": 2016,
        "business": 2607
    },
    {
        "id": 5208,
        "ca": 1688779,
        "margin": -159723,
        "ebitda": 127885,
        "loss": 9553725,
        "year": 2017,
        "business": 2608
    },
    {
        "id": 5209,
        "ca": 2615968,
        "margin": 896077,
        "ebitda": 32744,
        "loss": 3546095,
        "year": 2016,
        "business": 2608
    },
    {
        "id": 5210,
        "ca": 699746,
        "margin": 91275,
        "ebitda": 400593,
        "loss": 3032962,
        "year": 2017,
        "business": 2609
    },
    {
        "id": 5211,
        "ca": 3004201,
        "margin": 439139,
        "ebitda": 203405,
        "loss": 903996,
        "year": 2016,
        "business": 2609
    },
    {
        "id": 5212,
        "ca": 585224,
        "margin": 146590,
        "ebitda": 695672,
        "loss": 211200,
        "year": 2017,
        "business": 2610
    },
    {
        "id": 5213,
        "ca": 3866780,
        "margin": 675857,
        "ebitda": 365233,
        "loss": 8891632,
        "year": 2016,
        "business": 2610
    },
    {
        "id": 5214,
        "ca": 809248,
        "margin": 333878,
        "ebitda": 816467,
        "loss": 8691711,
        "year": 2017,
        "business": 2611
    },
    {
        "id": 5215,
        "ca": 2637226,
        "margin": 319549,
        "ebitda": 91713,
        "loss": 3167156,
        "year": 2016,
        "business": 2611
    },
    {
        "id": 5216,
        "ca": 3778638,
        "margin": 334773,
        "ebitda": 679137,
        "loss": 7806071,
        "year": 2017,
        "business": 2612
    },
    {
        "id": 5217,
        "ca": 3497909,
        "margin": 319175,
        "ebitda": 450324,
        "loss": 4784609,
        "year": 2016,
        "business": 2612
    },
    {
        "id": 5218,
        "ca": 2425895,
        "margin": -36097,
        "ebitda": 510250,
        "loss": 4585429,
        "year": 2017,
        "business": 2613
    },
    {
        "id": 5219,
        "ca": 2291345,
        "margin": 82259,
        "ebitda": 699924,
        "loss": 7475043,
        "year": 2016,
        "business": 2613
    },
    {
        "id": 5220,
        "ca": 3506766,
        "margin": 274133,
        "ebitda": 34174,
        "loss": 3677732,
        "year": 2017,
        "business": 2614
    },
    {
        "id": 5221,
        "ca": 3282506,
        "margin": 259763,
        "ebitda": 103786,
        "loss": 6295907,
        "year": 2016,
        "business": 2614
    },
    {
        "id": 5222,
        "ca": 2909729,
        "margin": 369706,
        "ebitda": 85593,
        "loss": 3061624,
        "year": 2017,
        "business": 2615
    },
    {
        "id": 5223,
        "ca": 3276126,
        "margin": 288118,
        "ebitda": 993894,
        "loss": 2191412,
        "year": 2016,
        "business": 2615
    },
    {
        "id": 5224,
        "ca": 3587822,
        "margin": 74700,
        "ebitda": 522215,
        "loss": 6140731,
        "year": 2017,
        "business": 2616
    },
    {
        "id": 5225,
        "ca": 1583816,
        "margin": 570319,
        "ebitda": 574093,
        "loss": 5758950,
        "year": 2016,
        "business": 2616
    },
    {
        "id": 5226,
        "ca": 2661473,
        "margin": 917155,
        "ebitda": 431477,
        "loss": 9398696,
        "year": 2017,
        "business": 2617
    },
    {
        "id": 5227,
        "ca": 3912135,
        "margin": -79026,
        "ebitda": 907216,
        "loss": 5839494,
        "year": 2016,
        "business": 2617
    },
    {
        "id": 5228,
        "ca": 3916482,
        "margin": 789171,
        "ebitda": 591525,
        "loss": 4337407,
        "year": 2017,
        "business": 2618
    },
    {
        "id": 5229,
        "ca": 2851391,
        "margin": 154011,
        "ebitda": 75755,
        "loss": 4917589,
        "year": 2016,
        "business": 2618
    },
    {
        "id": 5230,
        "ca": 3877874,
        "margin": -64877,
        "ebitda": 283661,
        "loss": 8850825,
        "year": 2017,
        "business": 2619
    },
    {
        "id": 5231,
        "ca": 1780165,
        "margin": 627707,
        "ebitda": 188020,
        "loss": 4142561,
        "year": 2016,
        "business": 2619
    },
    {
        "id": 5232,
        "ca": 904887,
        "margin": 161426,
        "ebitda": 560772,
        "loss": 6954504,
        "year": 2017,
        "business": 2620
    },
    {
        "id": 5233,
        "ca": 675847,
        "margin": 233939,
        "ebitda": 339451,
        "loss": 8460591,
        "year": 2016,
        "business": 2620
    },
    {
        "id": 5234,
        "ca": 1258712,
        "margin": 193533,
        "ebitda": 133533,
        "loss": 2318027,
        "year": 2017,
        "business": 2621
    },
    {
        "id": 5235,
        "ca": 3082650,
        "margin": 728343,
        "ebitda": 380527,
        "loss": 4210061,
        "year": 2016,
        "business": 2621
    },
    {
        "id": 5236,
        "ca": 2145984,
        "margin": 192499,
        "ebitda": 678170,
        "loss": 2268864,
        "year": 2017,
        "business": 2622
    },
    {
        "id": 5237,
        "ca": 3810752,
        "margin": 501467,
        "ebitda": 529022,
        "loss": 3323238,
        "year": 2016,
        "business": 2622
    },
    {
        "id": 5238,
        "ca": 3393679,
        "margin": 512183,
        "ebitda": 633008,
        "loss": 73604,
        "year": 2017,
        "business": 2623
    },
    {
        "id": 5239,
        "ca": 2760846,
        "margin": 190767,
        "ebitda": 817737,
        "loss": 9471846,
        "year": 2016,
        "business": 2623
    },
    {
        "id": 5240,
        "ca": 490523,
        "margin": 144313,
        "ebitda": 564730,
        "loss": 8367688,
        "year": 2017,
        "business": 2624
    },
    {
        "id": 5241,
        "ca": 2068840,
        "margin": 114319,
        "ebitda": 650235,
        "loss": 8027168,
        "year": 2016,
        "business": 2624
    },
    {
        "id": 5242,
        "ca": 1512775,
        "margin": 940569,
        "ebitda": 603753,
        "loss": 206523,
        "year": 2017,
        "business": 2625
    },
    {
        "id": 5243,
        "ca": 2148636,
        "margin": 113689,
        "ebitda": 649884,
        "loss": 1327309,
        "year": 2016,
        "business": 2625
    },
    {
        "id": 5244,
        "ca": 2439582,
        "margin": 944973,
        "ebitda": 341871,
        "loss": 5177689,
        "year": 2017,
        "business": 2626
    },
    {
        "id": 5245,
        "ca": 2198174,
        "margin": 771806,
        "ebitda": 980122,
        "loss": 9350034,
        "year": 2016,
        "business": 2626
    },
    {
        "id": 5246,
        "ca": 3659120,
        "margin": 779837,
        "ebitda": 305681,
        "loss": 9238657,
        "year": 2017,
        "business": 2627
    },
    {
        "id": 5247,
        "ca": 979885,
        "margin": 290030,
        "ebitda": 902063,
        "loss": 4866811,
        "year": 2016,
        "business": 2627
    },
    {
        "id": 5248,
        "ca": 237512,
        "margin": -173455,
        "ebitda": 382060,
        "loss": 8829098,
        "year": 2017,
        "business": 2628
    },
    {
        "id": 5249,
        "ca": 2664685,
        "margin": 307524,
        "ebitda": 569126,
        "loss": 2712404,
        "year": 2016,
        "business": 2628
    },
    {
        "id": 5250,
        "ca": 3103484,
        "margin": 590803,
        "ebitda": 619969,
        "loss": 3865183,
        "year": 2017,
        "business": 2629
    },
    {
        "id": 5251,
        "ca": 3017136,
        "margin": 84984,
        "ebitda": 240512,
        "loss": 4807954,
        "year": 2016,
        "business": 2629
    },
    {
        "id": 5252,
        "ca": 3912615,
        "margin": -117225,
        "ebitda": 445707,
        "loss": 5775246,
        "year": 2017,
        "business": 2630
    },
    {
        "id": 5253,
        "ca": 1049888,
        "margin": 256288,
        "ebitda": 478302,
        "loss": 4897795,
        "year": 2016,
        "business": 2630
    },
    {
        "id": 5254,
        "ca": 3659084,
        "margin": 834841,
        "ebitda": 111987,
        "loss": 1501108,
        "year": 2017,
        "business": 2631
    },
    {
        "id": 5255,
        "ca": 1948201,
        "margin": 721214,
        "ebitda": 419050,
        "loss": 227777,
        "year": 2016,
        "business": 2631
    },
    {
        "id": 5256,
        "ca": 2468229,
        "margin": 265421,
        "ebitda": 302920,
        "loss": 6742927,
        "year": 2017,
        "business": 2632
    },
    {
        "id": 5257,
        "ca": 981901,
        "margin": 790569,
        "ebitda": 582045,
        "loss": 7632615,
        "year": 2016,
        "business": 2632
    },
    {
        "id": 5258,
        "ca": 2887913,
        "margin": 228444,
        "ebitda": 728088,
        "loss": 3141232,
        "year": 2017,
        "business": 2633
    },
    {
        "id": 5259,
        "ca": 189415,
        "margin": 806284,
        "ebitda": 356532,
        "loss": 3905434,
        "year": 2016,
        "business": 2633
    },
    {
        "id": 5260,
        "ca": 3800083,
        "margin": -89532,
        "ebitda": 327736,
        "loss": 6824193,
        "year": 2017,
        "business": 2634
    },
    {
        "id": 5261,
        "ca": 1908162,
        "margin": 431094,
        "ebitda": 25992,
        "loss": 9595756,
        "year": 2016,
        "business": 2634
    },
    {
        "id": 5262,
        "ca": 3745483,
        "margin": 75040,
        "ebitda": 162296,
        "loss": 3479762,
        "year": 2017,
        "business": 2635
    },
    {
        "id": 5263,
        "ca": 343820,
        "margin": 20513,
        "ebitda": 59485,
        "loss": 5856270,
        "year": 2016,
        "business": 2635
    },
    {
        "id": 5264,
        "ca": 3425132,
        "margin": -158363,
        "ebitda": 693691,
        "loss": 3120330,
        "year": 2017,
        "business": 2636
    },
    {
        "id": 5265,
        "ca": 822070,
        "margin": 84604,
        "ebitda": 656191,
        "loss": 7205276,
        "year": 2016,
        "business": 2636
    },
    {
        "id": 5266,
        "ca": 655614,
        "margin": -52212,
        "ebitda": 269990,
        "loss": 1615367,
        "year": 2017,
        "business": 2637
    },
    {
        "id": 5267,
        "ca": 2728842,
        "margin": 160237,
        "ebitda": 185348,
        "loss": 4906909,
        "year": 2016,
        "business": 2637
    },
    {
        "id": 5268,
        "ca": 2447276,
        "margin": 759527,
        "ebitda": 264569,
        "loss": 7761164,
        "year": 2017,
        "business": 2638
    },
    {
        "id": 5269,
        "ca": 1386121,
        "margin": 113756,
        "ebitda": 957702,
        "loss": 9364683,
        "year": 2016,
        "business": 2638
    },
    {
        "id": 5270,
        "ca": 3416004,
        "margin": 786426,
        "ebitda": 707607,
        "loss": 23276,
        "year": 2017,
        "business": 2639
    },
    {
        "id": 5271,
        "ca": 2612412,
        "margin": -199540,
        "ebitda": 691088,
        "loss": 2221698,
        "year": 2016,
        "business": 2639
    },
    {
        "id": 5272,
        "ca": 2234315,
        "margin": 854793,
        "ebitda": 497843,
        "loss": 1765597,
        "year": 2017,
        "business": 2640
    },
    {
        "id": 5273,
        "ca": 2195485,
        "margin": 482912,
        "ebitda": 496411,
        "loss": 1351504,
        "year": 2016,
        "business": 2640
    },
    {
        "id": 5274,
        "ca": 3192822,
        "margin": 218034,
        "ebitda": 176043,
        "loss": 1017293,
        "year": 2017,
        "business": 2641
    },
    {
        "id": 5275,
        "ca": 3860272,
        "margin": 508122,
        "ebitda": 427761,
        "loss": 2805201,
        "year": 2016,
        "business": 2641
    },
    {
        "id": 5276,
        "ca": 3200566,
        "margin": -185746,
        "ebitda": 195282,
        "loss": 5455395,
        "year": 2017,
        "business": 2642
    },
    {
        "id": 5277,
        "ca": 3857386,
        "margin": -69191,
        "ebitda": 810974,
        "loss": 5892310,
        "year": 2016,
        "business": 2642
    },
    {
        "id": 5278,
        "ca": 1962652,
        "margin": -154905,
        "ebitda": 25111,
        "loss": 8546105,
        "year": 2017,
        "business": 2643
    },
    {
        "id": 5279,
        "ca": 3195779,
        "margin": 951399,
        "ebitda": 867936,
        "loss": 5735554,
        "year": 2016,
        "business": 2643
    },
    {
        "id": 5280,
        "ca": 1644293,
        "margin": 673942,
        "ebitda": 903520,
        "loss": 4987871,
        "year": 2017,
        "business": 2644
    },
    {
        "id": 5281,
        "ca": 1470234,
        "margin": 829962,
        "ebitda": 51651,
        "loss": 8454350,
        "year": 2016,
        "business": 2644
    },
    {
        "id": 5282,
        "ca": 2826282,
        "margin": 649836,
        "ebitda": 509479,
        "loss": 6041428,
        "year": 2017,
        "business": 2645
    },
    {
        "id": 5283,
        "ca": 245755,
        "margin": 587147,
        "ebitda": 594271,
        "loss": 6957641,
        "year": 2016,
        "business": 2645
    },
    {
        "id": 5284,
        "ca": 3327290,
        "margin": 899824,
        "ebitda": 550704,
        "loss": 1504113,
        "year": 2017,
        "business": 2646
    },
    {
        "id": 5285,
        "ca": 341283,
        "margin": 119743,
        "ebitda": 570573,
        "loss": 55269,
        "year": 2016,
        "business": 2646
    },
    {
        "id": 5286,
        "ca": 462668,
        "margin": 604230,
        "ebitda": 356528,
        "loss": 8071941,
        "year": 2017,
        "business": 2647
    },
    {
        "id": 5287,
        "ca": 3380896,
        "margin": 756817,
        "ebitda": 99705,
        "loss": 9239734,
        "year": 2016,
        "business": 2647
    },
    {
        "id": 5288,
        "ca": 1135055,
        "margin": 443478,
        "ebitda": 546961,
        "loss": 9210909,
        "year": 2017,
        "business": 2648
    },
    {
        "id": 5289,
        "ca": 545741,
        "margin": -98098,
        "ebitda": 957298,
        "loss": 9236643,
        "year": 2016,
        "business": 2648
    },
    {
        "id": 5290,
        "ca": 2127852,
        "margin": -43695,
        "ebitda": 825959,
        "loss": 5476726,
        "year": 2017,
        "business": 2649
    },
    {
        "id": 5291,
        "ca": 3590326,
        "margin": 586725,
        "ebitda": 577118,
        "loss": 3504338,
        "year": 2016,
        "business": 2649
    },
    {
        "id": 5292,
        "ca": 2778639,
        "margin": -140897,
        "ebitda": 777472,
        "loss": 7785753,
        "year": 2017,
        "business": 2650
    },
    {
        "id": 5293,
        "ca": 2613872,
        "margin": 297422,
        "ebitda": 247167,
        "loss": 2497521,
        "year": 2016,
        "business": 2650
    },
    {
        "id": 5294,
        "ca": 3688832,
        "margin": 975240,
        "ebitda": 846552,
        "loss": 4088075,
        "year": 2017,
        "business": 2651
    },
    {
        "id": 5295,
        "ca": 1969358,
        "margin": 460144,
        "ebitda": 102752,
        "loss": 3499302,
        "year": 2016,
        "business": 2651
    },
    {
        "id": 5296,
        "ca": 2470780,
        "margin": 961928,
        "ebitda": 924211,
        "loss": 3421789,
        "year": 2017,
        "business": 2652
    },
    {
        "id": 5297,
        "ca": 224960,
        "margin": -119746,
        "ebitda": 372508,
        "loss": 3206750,
        "year": 2016,
        "business": 2652
    },
    {
        "id": 5298,
        "ca": 2764252,
        "margin": 529821,
        "ebitda": 114227,
        "loss": 5435275,
        "year": 2017,
        "business": 2653
    },
    {
        "id": 5299,
        "ca": 3652719,
        "margin": 405054,
        "ebitda": 531878,
        "loss": 2135356,
        "year": 2016,
        "business": 2653
    },
    {
        "id": 5300,
        "ca": 2185450,
        "margin": 931264,
        "ebitda": 662242,
        "loss": 1313372,
        "year": 2017,
        "business": 2654
    },
    {
        "id": 5301,
        "ca": 1044919,
        "margin": 516351,
        "ebitda": 784607,
        "loss": 6096208,
        "year": 2016,
        "business": 2654
    },
    {
        "id": 5302,
        "ca": 259137,
        "margin": -18515,
        "ebitda": 299908,
        "loss": 3178418,
        "year": 2017,
        "business": 2655
    },
    {
        "id": 5303,
        "ca": 2534435,
        "margin": 956966,
        "ebitda": 416290,
        "loss": 1027510,
        "year": 2016,
        "business": 2655
    },
    {
        "id": 5304,
        "ca": 1162815,
        "margin": -14235,
        "ebitda": 398776,
        "loss": 8756129,
        "year": 2017,
        "business": 2656
    },
    {
        "id": 5305,
        "ca": 459280,
        "margin": 193369,
        "ebitda": 207787,
        "loss": 1827340,
        "year": 2016,
        "business": 2656
    },
    {
        "id": 5306,
        "ca": 2620136,
        "margin": -101904,
        "ebitda": 479649,
        "loss": 7479609,
        "year": 2017,
        "business": 2657
    },
    {
        "id": 5307,
        "ca": 3287400,
        "margin": -151678,
        "ebitda": 813570,
        "loss": 1946322,
        "year": 2016,
        "business": 2657
    },
    {
        "id": 5308,
        "ca": 1140344,
        "margin": 723390,
        "ebitda": 100896,
        "loss": 1688200,
        "year": 2017,
        "business": 2658
    },
    {
        "id": 5309,
        "ca": 2717260,
        "margin": 210390,
        "ebitda": 676120,
        "loss": 2957295,
        "year": 2016,
        "business": 2658
    },
    {
        "id": 5310,
        "ca": 2538329,
        "margin": 734860,
        "ebitda": 508364,
        "loss": 451322,
        "year": 2017,
        "business": 2659
    },
    {
        "id": 5311,
        "ca": 2189921,
        "margin": 626527,
        "ebitda": 233808,
        "loss": 7066105,
        "year": 2016,
        "business": 2659
    },
    {
        "id": 5312,
        "ca": 3065956,
        "margin": -195154,
        "ebitda": 177226,
        "loss": 6948108,
        "year": 2017,
        "business": 2660
    },
    {
        "id": 5313,
        "ca": 3195702,
        "margin": -69009,
        "ebitda": 114003,
        "loss": 5127790,
        "year": 2016,
        "business": 2660
    },
    {
        "id": 5314,
        "ca": 422978,
        "margin": 94559,
        "ebitda": 823744,
        "loss": 3359150,
        "year": 2017,
        "business": 2661
    },
    {
        "id": 5315,
        "ca": 208146,
        "margin": 57654,
        "ebitda": 640763,
        "loss": 183093,
        "year": 2016,
        "business": 2661
    },
    {
        "id": 5316,
        "ca": 972570,
        "margin": 629649,
        "ebitda": 37940,
        "loss": 8979978,
        "year": 2017,
        "business": 2662
    },
    {
        "id": 5317,
        "ca": 396800,
        "margin": 834123,
        "ebitda": 67102,
        "loss": 7209932,
        "year": 2016,
        "business": 2662
    },
    {
        "id": 5318,
        "ca": 2943058,
        "margin": 215243,
        "ebitda": 48482,
        "loss": 4402355,
        "year": 2017,
        "business": 2663
    },
    {
        "id": 5319,
        "ca": 3257610,
        "margin": 320457,
        "ebitda": 263553,
        "loss": 4910999,
        "year": 2016,
        "business": 2663
    },
    {
        "id": 5320,
        "ca": 2664114,
        "margin": 490145,
        "ebitda": 36829,
        "loss": 6897664,
        "year": 2017,
        "business": 2664
    },
    {
        "id": 5321,
        "ca": 1131974,
        "margin": -42196,
        "ebitda": 313290,
        "loss": 9926057,
        "year": 2016,
        "business": 2664
    },
    {
        "id": 5322,
        "ca": 1941867,
        "margin": 471839,
        "ebitda": 13173,
        "loss": 7905781,
        "year": 2017,
        "business": 2665
    },
    {
        "id": 5323,
        "ca": 331860,
        "margin": 690879,
        "ebitda": 662024,
        "loss": 6624351,
        "year": 2016,
        "business": 2665
    },
    {
        "id": 5324,
        "ca": 3125130,
        "margin": 744785,
        "ebitda": 447239,
        "loss": 7954513,
        "year": 2017,
        "business": 2666
    },
    {
        "id": 5325,
        "ca": 1776670,
        "margin": 335968,
        "ebitda": 530468,
        "loss": 7222889,
        "year": 2016,
        "business": 2666
    },
    {
        "id": 5326,
        "ca": 742960,
        "margin": 858653,
        "ebitda": 281458,
        "loss": 3466749,
        "year": 2017,
        "business": 2667
    },
    {
        "id": 5327,
        "ca": 707651,
        "margin": 759887,
        "ebitda": 88486,
        "loss": 8495068,
        "year": 2016,
        "business": 2667
    },
    {
        "id": 5328,
        "ca": 3789623,
        "margin": 594833,
        "ebitda": 468811,
        "loss": 4259578,
        "year": 2017,
        "business": 2668
    },
    {
        "id": 5329,
        "ca": 2673438,
        "margin": -174464,
        "ebitda": 146370,
        "loss": 3437376,
        "year": 2016,
        "business": 2668
    },
    {
        "id": 5330,
        "ca": 3983091,
        "margin": 321894,
        "ebitda": 468394,
        "loss": 3598738,
        "year": 2017,
        "business": 2669
    },
    {
        "id": 5331,
        "ca": 2155612,
        "margin": -90426,
        "ebitda": 135069,
        "loss": 7570748,
        "year": 2016,
        "business": 2669
    },
    {
        "id": 5332,
        "ca": 3356712,
        "margin": 434919,
        "ebitda": 545026,
        "loss": 493058,
        "year": 2017,
        "business": 2670
    },
    {
        "id": 5333,
        "ca": 3389973,
        "margin": 434454,
        "ebitda": 498436,
        "loss": 5510423,
        "year": 2016,
        "business": 2670
    },
    {
        "id": 5334,
        "ca": 2478546,
        "margin": 961503,
        "ebitda": 857657,
        "loss": 8775511,
        "year": 2017,
        "business": 2671
    },
    {
        "id": 5335,
        "ca": 938287,
        "margin": -55114,
        "ebitda": 950421,
        "loss": 4285809,
        "year": 2016,
        "business": 2671
    },
    {
        "id": 5336,
        "ca": 1968605,
        "margin": -125632,
        "ebitda": 475499,
        "loss": 812398,
        "year": 2017,
        "business": 2672
    },
    {
        "id": 5337,
        "ca": 3267318,
        "margin": 842626,
        "ebitda": 764070,
        "loss": 5126685,
        "year": 2016,
        "business": 2672
    },
    {
        "id": 5338,
        "ca": 3801438,
        "margin": -153083,
        "ebitda": 245354,
        "loss": 2158373,
        "year": 2017,
        "business": 2673
    },
    {
        "id": 5339,
        "ca": 3778888,
        "margin": 127422,
        "ebitda": 594834,
        "loss": 4421471,
        "year": 2016,
        "business": 2673
    },
    {
        "id": 5340,
        "ca": 3416590,
        "margin": -157804,
        "ebitda": 343015,
        "loss": 7227365,
        "year": 2017,
        "business": 2674
    },
    {
        "id": 5341,
        "ca": 377108,
        "margin": -138893,
        "ebitda": 871520,
        "loss": 9007279,
        "year": 2016,
        "business": 2674
    },
    {
        "id": 5342,
        "ca": 2568272,
        "margin": 984764,
        "ebitda": 373439,
        "loss": 9908569,
        "year": 2017,
        "business": 2675
    },
    {
        "id": 5343,
        "ca": 2921971,
        "margin": 977489,
        "ebitda": 449249,
        "loss": 6869930,
        "year": 2016,
        "business": 2675
    },
    {
        "id": 5344,
        "ca": 1355013,
        "margin": 850802,
        "ebitda": 11507,
        "loss": 6313235,
        "year": 2017,
        "business": 2676
    },
    {
        "id": 5345,
        "ca": 830234,
        "margin": -183139,
        "ebitda": 848478,
        "loss": 4909293,
        "year": 2016,
        "business": 2676
    },
    {
        "id": 5346,
        "ca": 2840236,
        "margin": 440627,
        "ebitda": 163252,
        "loss": 3711355,
        "year": 2017,
        "business": 2677
    },
    {
        "id": 5347,
        "ca": 2589957,
        "margin": 249459,
        "ebitda": 93916,
        "loss": 3213459,
        "year": 2016,
        "business": 2677
    },
    {
        "id": 5348,
        "ca": 2549056,
        "margin": -85700,
        "ebitda": 5389,
        "loss": 2116436,
        "year": 2017,
        "business": 2678
    },
    {
        "id": 5349,
        "ca": 3944708,
        "margin": 719236,
        "ebitda": 173232,
        "loss": 1386439,
        "year": 2016,
        "business": 2678
    },
    {
        "id": 5350,
        "ca": 437190,
        "margin": 493156,
        "ebitda": 157659,
        "loss": 7395462,
        "year": 2017,
        "business": 2679
    },
    {
        "id": 5351,
        "ca": 1065528,
        "margin": 763303,
        "ebitda": 373006,
        "loss": 1495155,
        "year": 2016,
        "business": 2679
    },
    {
        "id": 5352,
        "ca": 3755756,
        "margin": 262148,
        "ebitda": 913094,
        "loss": 1041892,
        "year": 2017,
        "business": 2680
    },
    {
        "id": 5353,
        "ca": 2234815,
        "margin": 852632,
        "ebitda": 974573,
        "loss": 9917319,
        "year": 2016,
        "business": 2680
    },
    {
        "id": 5354,
        "ca": 3946624,
        "margin": 34429,
        "ebitda": 402147,
        "loss": 111655,
        "year": 2017,
        "business": 2681
    },
    {
        "id": 5355,
        "ca": 3681572,
        "margin": -8227,
        "ebitda": 626437,
        "loss": 4923464,
        "year": 2016,
        "business": 2681
    },
    {
        "id": 5356,
        "ca": 1005335,
        "margin": 368433,
        "ebitda": 550062,
        "loss": 900926,
        "year": 2017,
        "business": 2682
    },
    {
        "id": 5357,
        "ca": 888539,
        "margin": 94321,
        "ebitda": 784603,
        "loss": 5320548,
        "year": 2016,
        "business": 2682
    },
    {
        "id": 5358,
        "ca": 2395166,
        "margin": 969533,
        "ebitda": 71778,
        "loss": 2587520,
        "year": 2017,
        "business": 2683
    },
    {
        "id": 5359,
        "ca": 3616153,
        "margin": 226390,
        "ebitda": 991195,
        "loss": 2094547,
        "year": 2016,
        "business": 2683
    },
    {
        "id": 5360,
        "ca": 422266,
        "margin": 682533,
        "ebitda": 431425,
        "loss": 6597671,
        "year": 2017,
        "business": 2684
    },
    {
        "id": 5361,
        "ca": 3342599,
        "margin": 218946,
        "ebitda": 392966,
        "loss": 1752443,
        "year": 2016,
        "business": 2684
    },
    {
        "id": 5362,
        "ca": 2782561,
        "margin": 777578,
        "ebitda": 930379,
        "loss": 8318681,
        "year": 2017,
        "business": 2685
    },
    {
        "id": 5363,
        "ca": 3787599,
        "margin": 645089,
        "ebitda": 267539,
        "loss": 2980623,
        "year": 2016,
        "business": 2685
    },
    {
        "id": 5364,
        "ca": 1550625,
        "margin": -85942,
        "ebitda": 907511,
        "loss": 3183937,
        "year": 2017,
        "business": 2686
    },
    {
        "id": 5365,
        "ca": 712133,
        "margin": 968052,
        "ebitda": 132100,
        "loss": 1854200,
        "year": 2016,
        "business": 2686
    },
    {
        "id": 5366,
        "ca": 692862,
        "margin": 690260,
        "ebitda": 169366,
        "loss": 1084,
        "year": 2017,
        "business": 2687
    },
    {
        "id": 5367,
        "ca": 3019123,
        "margin": 16984,
        "ebitda": 191909,
        "loss": 8781499,
        "year": 2016,
        "business": 2687
    },
    {
        "id": 5368,
        "ca": 3888122,
        "margin": 403405,
        "ebitda": 860517,
        "loss": 2219960,
        "year": 2017,
        "business": 2688
    },
    {
        "id": 5369,
        "ca": 3486309,
        "margin": 941118,
        "ebitda": 792651,
        "loss": 5300191,
        "year": 2016,
        "business": 2688
    },
    {
        "id": 5370,
        "ca": 1927731,
        "margin": 429683,
        "ebitda": 191211,
        "loss": 7817217,
        "year": 2017,
        "business": 2689
    },
    {
        "id": 5371,
        "ca": 3277944,
        "margin": 627776,
        "ebitda": 459614,
        "loss": 3720740,
        "year": 2016,
        "business": 2689
    },
    {
        "id": 5372,
        "ca": 882814,
        "margin": 758601,
        "ebitda": 216464,
        "loss": 4544052,
        "year": 2017,
        "business": 2690
    },
    {
        "id": 5373,
        "ca": 2631088,
        "margin": 956106,
        "ebitda": 622017,
        "loss": 8809182,
        "year": 2016,
        "business": 2690
    },
    {
        "id": 5374,
        "ca": 3444784,
        "margin": 195522,
        "ebitda": 376220,
        "loss": 2911014,
        "year": 2017,
        "business": 2691
    },
    {
        "id": 5375,
        "ca": 682068,
        "margin": 269857,
        "ebitda": 464165,
        "loss": 192658,
        "year": 2016,
        "business": 2691
    },
    {
        "id": 5376,
        "ca": 2562170,
        "margin": 81679,
        "ebitda": 799147,
        "loss": 5478487,
        "year": 2017,
        "business": 2692
    },
    {
        "id": 5377,
        "ca": 1890803,
        "margin": 59146,
        "ebitda": 630618,
        "loss": 8869806,
        "year": 2016,
        "business": 2692
    },
    {
        "id": 5378,
        "ca": 681126,
        "margin": 376036,
        "ebitda": 167727,
        "loss": 4979890,
        "year": 2017,
        "business": 2693
    },
    {
        "id": 5379,
        "ca": 2944448,
        "margin": 994337,
        "ebitda": 79204,
        "loss": 6921074,
        "year": 2016,
        "business": 2693
    },
    {
        "id": 5380,
        "ca": 585068,
        "margin": 225329,
        "ebitda": 90207,
        "loss": 6434449,
        "year": 2017,
        "business": 2694
    },
    {
        "id": 5381,
        "ca": 1204281,
        "margin": 854108,
        "ebitda": 966444,
        "loss": 8562260,
        "year": 2016,
        "business": 2694
    },
    {
        "id": 5382,
        "ca": 893560,
        "margin": 97802,
        "ebitda": 904144,
        "loss": 3800312,
        "year": 2017,
        "business": 2695
    },
    {
        "id": 5383,
        "ca": 2349739,
        "margin": 434666,
        "ebitda": 56349,
        "loss": 561275,
        "year": 2016,
        "business": 2695
    },
    {
        "id": 5384,
        "ca": 1614918,
        "margin": 382197,
        "ebitda": 844139,
        "loss": 5643268,
        "year": 2017,
        "business": 2696
    },
    {
        "id": 5385,
        "ca": 3785592,
        "margin": 665218,
        "ebitda": 469223,
        "loss": 6358594,
        "year": 2016,
        "business": 2696
    },
    {
        "id": 5386,
        "ca": 1392867,
        "margin": 368445,
        "ebitda": 46335,
        "loss": 9507259,
        "year": 2017,
        "business": 2697
    },
    {
        "id": 5387,
        "ca": 1757963,
        "margin": 725923,
        "ebitda": 403027,
        "loss": 8971658,
        "year": 2016,
        "business": 2697
    },
    {
        "id": 5388,
        "ca": 1341838,
        "margin": 754167,
        "ebitda": 335288,
        "loss": 3878838,
        "year": 2017,
        "business": 2698
    },
    {
        "id": 5389,
        "ca": 2619963,
        "margin": -83882,
        "ebitda": 126462,
        "loss": 1145383,
        "year": 2016,
        "business": 2698
    },
    {
        "id": 5390,
        "ca": 2437096,
        "margin": 487616,
        "ebitda": 912412,
        "loss": 6760181,
        "year": 2017,
        "business": 2699
    },
    {
        "id": 5391,
        "ca": 316486,
        "margin": 139218,
        "ebitda": 224389,
        "loss": 603330,
        "year": 2016,
        "business": 2699
    },
    {
        "id": 5392,
        "ca": 2921327,
        "margin": 373338,
        "ebitda": 511463,
        "loss": 4733450,
        "year": 2017,
        "business": 2700
    },
    {
        "id": 5393,
        "ca": 2505362,
        "margin": 187809,
        "ebitda": 122822,
        "loss": 1032870,
        "year": 2016,
        "business": 2700
    },
    {
        "id": 5394,
        "ca": 2126856,
        "margin": 877768,
        "ebitda": 847746,
        "loss": 4021009,
        "year": 2017,
        "business": 2701
    },
    {
        "id": 5395,
        "ca": 1477996,
        "margin": 45120,
        "ebitda": 972963,
        "loss": 2583371,
        "year": 2016,
        "business": 2701
    },
    {
        "id": 5396,
        "ca": 2432945,
        "margin": 291324,
        "ebitda": 683014,
        "loss": 7616154,
        "year": 2017,
        "business": 2702
    },
    {
        "id": 5397,
        "ca": 3769832,
        "margin": 216140,
        "ebitda": 551569,
        "loss": 5413005,
        "year": 2016,
        "business": 2702
    },
    {
        "id": 5398,
        "ca": 135769,
        "margin": -156465,
        "ebitda": 403001,
        "loss": 3563671,
        "year": 2017,
        "business": 2703
    },
    {
        "id": 5399,
        "ca": 212281,
        "margin": 467116,
        "ebitda": 121450,
        "loss": 9302688,
        "year": 2016,
        "business": 2703
    },
    {
        "id": 5400,
        "ca": 1777633,
        "margin": 460911,
        "ebitda": 644913,
        "loss": 1587930,
        "year": 2017,
        "business": 2704
    },
    {
        "id": 5401,
        "ca": 2546679,
        "margin": 595119,
        "ebitda": 553749,
        "loss": 5492039,
        "year": 2016,
        "business": 2704
    },
    {
        "id": 5402,
        "ca": 3746698,
        "margin": 213990,
        "ebitda": 43605,
        "loss": 6109786,
        "year": 2017,
        "business": 2705
    },
    {
        "id": 5403,
        "ca": 3114941,
        "margin": 361126,
        "ebitda": 441915,
        "loss": 2765979,
        "year": 2016,
        "business": 2705
    },
    {
        "id": 5404,
        "ca": 3325510,
        "margin": 769574,
        "ebitda": 66975,
        "loss": 4644168,
        "year": 2017,
        "business": 2706
    },
    {
        "id": 5405,
        "ca": 3517098,
        "margin": 337812,
        "ebitda": 800242,
        "loss": 7143754,
        "year": 2016,
        "business": 2706
    },
    {
        "id": 5406,
        "ca": 3861761,
        "margin": -24465,
        "ebitda": 484479,
        "loss": 5561445,
        "year": 2017,
        "business": 2707
    },
    {
        "id": 5407,
        "ca": 3557896,
        "margin": 591734,
        "ebitda": 343633,
        "loss": 4083362,
        "year": 2016,
        "business": 2707
    },
    {
        "id": 5408,
        "ca": 1920785,
        "margin": 667395,
        "ebitda": 732506,
        "loss": 716880,
        "year": 2017,
        "business": 2708
    },
    {
        "id": 5409,
        "ca": 2539401,
        "margin": 62751,
        "ebitda": 353245,
        "loss": 5528983,
        "year": 2016,
        "business": 2708
    },
    {
        "id": 5410,
        "ca": 395830,
        "margin": -31127,
        "ebitda": 569196,
        "loss": 3324194,
        "year": 2017,
        "business": 2709
    },
    {
        "id": 5411,
        "ca": 3982803,
        "margin": 230150,
        "ebitda": 413155,
        "loss": 4555447,
        "year": 2016,
        "business": 2709
    },
    {
        "id": 5412,
        "ca": 2969124,
        "margin": 83607,
        "ebitda": 616539,
        "loss": 4563818,
        "year": 2017,
        "business": 2710
    },
    {
        "id": 5413,
        "ca": 3501568,
        "margin": 971779,
        "ebitda": 503991,
        "loss": 6859937,
        "year": 2016,
        "business": 2710
    },
    {
        "id": 5414,
        "ca": 2642821,
        "margin": 814335,
        "ebitda": 488875,
        "loss": 9368034,
        "year": 2017,
        "business": 2711
    },
    {
        "id": 5415,
        "ca": 3384738,
        "margin": 221024,
        "ebitda": 139033,
        "loss": 2968175,
        "year": 2016,
        "business": 2711
    },
    {
        "id": 5416,
        "ca": 2569913,
        "margin": 496831,
        "ebitda": 535131,
        "loss": 7106661,
        "year": 2017,
        "business": 2712
    },
    {
        "id": 5417,
        "ca": 2087883,
        "margin": 213266,
        "ebitda": 544093,
        "loss": 9546973,
        "year": 2016,
        "business": 2712
    },
    {
        "id": 5418,
        "ca": 3406554,
        "margin": -185455,
        "ebitda": 71849,
        "loss": 3334975,
        "year": 2017,
        "business": 2713
    },
    {
        "id": 5419,
        "ca": 2593135,
        "margin": 708076,
        "ebitda": 879420,
        "loss": 9313385,
        "year": 2016,
        "business": 2713
    },
    {
        "id": 5420,
        "ca": 1884890,
        "margin": 183610,
        "ebitda": 41640,
        "loss": 8047935,
        "year": 2017,
        "business": 2714
    },
    {
        "id": 5421,
        "ca": 538038,
        "margin": 924445,
        "ebitda": 219592,
        "loss": 4407039,
        "year": 2016,
        "business": 2714
    },
    {
        "id": 5422,
        "ca": 119365,
        "margin": 60990,
        "ebitda": 703590,
        "loss": 284338,
        "year": 2017,
        "business": 2715
    },
    {
        "id": 5423,
        "ca": 3946517,
        "margin": 390557,
        "ebitda": 662955,
        "loss": 9170616,
        "year": 2016,
        "business": 2715
    },
    {
        "id": 5424,
        "ca": 2813075,
        "margin": 630400,
        "ebitda": 67567,
        "loss": 1476733,
        "year": 2017,
        "business": 2716
    },
    {
        "id": 5425,
        "ca": 3576450,
        "margin": 661458,
        "ebitda": 371638,
        "loss": 9636123,
        "year": 2016,
        "business": 2716
    },
    {
        "id": 5426,
        "ca": 3365933,
        "margin": 823024,
        "ebitda": 56764,
        "loss": 110733,
        "year": 2017,
        "business": 2717
    },
    {
        "id": 5427,
        "ca": 228843,
        "margin": 290197,
        "ebitda": 142212,
        "loss": 4974910,
        "year": 2016,
        "business": 2717
    },
    {
        "id": 5428,
        "ca": 3958314,
        "margin": 893118,
        "ebitda": 141658,
        "loss": 8494474,
        "year": 2017,
        "business": 2718
    },
    {
        "id": 5429,
        "ca": 527951,
        "margin": 19072,
        "ebitda": 612565,
        "loss": 3916439,
        "year": 2016,
        "business": 2718
    },
    {
        "id": 5430,
        "ca": 3462684,
        "margin": 644266,
        "ebitda": 472240,
        "loss": 7405624,
        "year": 2017,
        "business": 2719
    },
    {
        "id": 5431,
        "ca": 3537276,
        "margin": 663791,
        "ebitda": 796987,
        "loss": 2377887,
        "year": 2016,
        "business": 2719
    },
    {
        "id": 5432,
        "ca": 2544895,
        "margin": -141165,
        "ebitda": 283671,
        "loss": 508099,
        "year": 2017,
        "business": 2720
    },
    {
        "id": 5433,
        "ca": 3698373,
        "margin": 404379,
        "ebitda": 571012,
        "loss": 1987033,
        "year": 2016,
        "business": 2720
    },
    {
        "id": 5434,
        "ca": 3210938,
        "margin": -189704,
        "ebitda": 553580,
        "loss": 4995940,
        "year": 2017,
        "business": 2721
    },
    {
        "id": 5435,
        "ca": 2992011,
        "margin": 586103,
        "ebitda": 514250,
        "loss": 8596448,
        "year": 2016,
        "business": 2721
    },
    {
        "id": 5436,
        "ca": 1336448,
        "margin": 490008,
        "ebitda": 750571,
        "loss": 3664654,
        "year": 2017,
        "business": 2722
    },
    {
        "id": 5437,
        "ca": 2992164,
        "margin": 538208,
        "ebitda": 647371,
        "loss": 4033479,
        "year": 2016,
        "business": 2722
    },
    {
        "id": 5438,
        "ca": 3194909,
        "margin": 186423,
        "ebitda": 226764,
        "loss": 4638762,
        "year": 2017,
        "business": 2723
    },
    {
        "id": 5439,
        "ca": 2755844,
        "margin": 12454,
        "ebitda": 648122,
        "loss": 6664079,
        "year": 2016,
        "business": 2723
    },
    {
        "id": 5440,
        "ca": 3602830,
        "margin": -154058,
        "ebitda": 524059,
        "loss": 9102881,
        "year": 2017,
        "business": 2724
    },
    {
        "id": 5441,
        "ca": 2506505,
        "margin": -175518,
        "ebitda": 657072,
        "loss": 36933,
        "year": 2016,
        "business": 2724
    },
    {
        "id": 5442,
        "ca": 2839567,
        "margin": 732502,
        "ebitda": 374009,
        "loss": 2046547,
        "year": 2017,
        "business": 2725
    },
    {
        "id": 5443,
        "ca": 1146459,
        "margin": 591485,
        "ebitda": 162006,
        "loss": 1718123,
        "year": 2016,
        "business": 2725
    },
    {
        "id": 5444,
        "ca": 358435,
        "margin": 337169,
        "ebitda": 629865,
        "loss": 6094688,
        "year": 2017,
        "business": 2726
    },
    {
        "id": 5445,
        "ca": 785779,
        "margin": 885873,
        "ebitda": 269914,
        "loss": 7522765,
        "year": 2016,
        "business": 2726
    },
    {
        "id": 5446,
        "ca": 1021656,
        "margin": 507711,
        "ebitda": 624623,
        "loss": 6483736,
        "year": 2017,
        "business": 2727
    },
    {
        "id": 5447,
        "ca": 1670117,
        "margin": 194408,
        "ebitda": 359738,
        "loss": 6034374,
        "year": 2016,
        "business": 2727
    },
    {
        "id": 5448,
        "ca": 2611382,
        "margin": 425943,
        "ebitda": 316796,
        "loss": 9923888,
        "year": 2017,
        "business": 2728
    },
    {
        "id": 5449,
        "ca": 2595729,
        "margin": 157343,
        "ebitda": 198976,
        "loss": 3155285,
        "year": 2016,
        "business": 2728
    },
    {
        "id": 5450,
        "ca": 2285910,
        "margin": 63737,
        "ebitda": 362562,
        "loss": 6239080,
        "year": 2017,
        "business": 2729
    },
    {
        "id": 5451,
        "ca": 289467,
        "margin": 840863,
        "ebitda": 585829,
        "loss": 1982316,
        "year": 2016,
        "business": 2729
    },
    {
        "id": 5452,
        "ca": 2965432,
        "margin": 184079,
        "ebitda": 744758,
        "loss": 4597289,
        "year": 2017,
        "business": 2730
    },
    {
        "id": 5453,
        "ca": 2799755,
        "margin": 49662,
        "ebitda": 133091,
        "loss": 1774510,
        "year": 2016,
        "business": 2730
    },
    {
        "id": 5454,
        "ca": 1057476,
        "margin": 441918,
        "ebitda": 156841,
        "loss": 4403545,
        "year": 2017,
        "business": 2731
    },
    {
        "id": 5455,
        "ca": 3085139,
        "margin": 623575,
        "ebitda": 969986,
        "loss": 3834447,
        "year": 2016,
        "business": 2731
    },
    {
        "id": 5456,
        "ca": 3184439,
        "margin": 488997,
        "ebitda": 470887,
        "loss": 341753,
        "year": 2017,
        "business": 2732
    },
    {
        "id": 5457,
        "ca": 2695711,
        "margin": 223140,
        "ebitda": 282841,
        "loss": 9950206,
        "year": 2016,
        "business": 2732
    },
    {
        "id": 5458,
        "ca": 2323601,
        "margin": -130096,
        "ebitda": 292465,
        "loss": 6739558,
        "year": 2017,
        "business": 2733
    },
    {
        "id": 5459,
        "ca": 3910324,
        "margin": 975948,
        "ebitda": 123494,
        "loss": 5361820,
        "year": 2016,
        "business": 2733
    },
    {
        "id": 5460,
        "ca": 1383179,
        "margin": 525934,
        "ebitda": 620050,
        "loss": 5708808,
        "year": 2017,
        "business": 2734
    },
    {
        "id": 5461,
        "ca": 181821,
        "margin": 273390,
        "ebitda": 187686,
        "loss": 195782,
        "year": 2016,
        "business": 2734
    },
    {
        "id": 5462,
        "ca": 1837254,
        "margin": -23600,
        "ebitda": 630765,
        "loss": 330346,
        "year": 2017,
        "business": 2735
    },
    {
        "id": 5463,
        "ca": 364299,
        "margin": 981381,
        "ebitda": 716787,
        "loss": 7314765,
        "year": 2016,
        "business": 2735
    },
    {
        "id": 5464,
        "ca": 1124569,
        "margin": 244282,
        "ebitda": 867654,
        "loss": 9078361,
        "year": 2017,
        "business": 2736
    },
    {
        "id": 5465,
        "ca": 403549,
        "margin": 959000,
        "ebitda": 741391,
        "loss": 3199016,
        "year": 2016,
        "business": 2736
    },
    {
        "id": 5466,
        "ca": 928986,
        "margin": -169867,
        "ebitda": 599256,
        "loss": 3641711,
        "year": 2017,
        "business": 2737
    },
    {
        "id": 5467,
        "ca": 2861820,
        "margin": 645921,
        "ebitda": 833062,
        "loss": 5892050,
        "year": 2016,
        "business": 2737
    },
    {
        "id": 5468,
        "ca": 396503,
        "margin": 759077,
        "ebitda": 316573,
        "loss": 2058773,
        "year": 2017,
        "business": 2738
    },
    {
        "id": 5469,
        "ca": 3285593,
        "margin": 3312,
        "ebitda": 902305,
        "loss": 1983829,
        "year": 2016,
        "business": 2738
    },
    {
        "id": 5470,
        "ca": 1890402,
        "margin": -178874,
        "ebitda": 155672,
        "loss": 4156046,
        "year": 2017,
        "business": 2739
    },
    {
        "id": 5471,
        "ca": 1319212,
        "margin": 717738,
        "ebitda": 472275,
        "loss": 2953966,
        "year": 2016,
        "business": 2739
    },
    {
        "id": 5472,
        "ca": 1554459,
        "margin": 531257,
        "ebitda": 718279,
        "loss": 269453,
        "year": 2017,
        "business": 2740
    },
    {
        "id": 5473,
        "ca": 2906345,
        "margin": 748364,
        "ebitda": 135631,
        "loss": 2041759,
        "year": 2016,
        "business": 2740
    },
    {
        "id": 5474,
        "ca": 3447094,
        "margin": 203296,
        "ebitda": 792136,
        "loss": 7500645,
        "year": 2017,
        "business": 2741
    },
    {
        "id": 5475,
        "ca": 2852163,
        "margin": -63678,
        "ebitda": 865549,
        "loss": 6324055,
        "year": 2016,
        "business": 2741
    },
    {
        "id": 5476,
        "ca": 1296714,
        "margin": 816170,
        "ebitda": 828818,
        "loss": 8073508,
        "year": 2017,
        "business": 2742
    },
    {
        "id": 5477,
        "ca": 1180926,
        "margin": 607709,
        "ebitda": 753816,
        "loss": 4592164,
        "year": 2016,
        "business": 2742
    },
    {
        "id": 5478,
        "ca": 2067456,
        "margin": 314329,
        "ebitda": 276534,
        "loss": 6637806,
        "year": 2017,
        "business": 2743
    },
    {
        "id": 5479,
        "ca": 2187099,
        "margin": 683866,
        "ebitda": 911399,
        "loss": 8801200,
        "year": 2016,
        "business": 2743
    },
    {
        "id": 5480,
        "ca": 3890899,
        "margin": 441660,
        "ebitda": 222974,
        "loss": 8363608,
        "year": 2017,
        "business": 2744
    },
    {
        "id": 5481,
        "ca": 3162720,
        "margin": 519856,
        "ebitda": 301416,
        "loss": 3767343,
        "year": 2016,
        "business": 2744
    },
    {
        "id": 5482,
        "ca": 523895,
        "margin": -12046,
        "ebitda": 453440,
        "loss": 4037711,
        "year": 2017,
        "business": 2745
    },
    {
        "id": 5483,
        "ca": 1173626,
        "margin": 174745,
        "ebitda": 946818,
        "loss": 2245031,
        "year": 2016,
        "business": 2745
    },
    {
        "id": 5484,
        "ca": 3307617,
        "margin": -1987,
        "ebitda": 923815,
        "loss": 8106555,
        "year": 2017,
        "business": 2746
    },
    {
        "id": 5485,
        "ca": 3812238,
        "margin": 399970,
        "ebitda": 626752,
        "loss": 5883384,
        "year": 2016,
        "business": 2746
    },
    {
        "id": 5486,
        "ca": 1667068,
        "margin": 265689,
        "ebitda": 155850,
        "loss": 390853,
        "year": 2017,
        "business": 2747
    },
    {
        "id": 5487,
        "ca": 1562368,
        "margin": 382981,
        "ebitda": 11510,
        "loss": 3963531,
        "year": 2016,
        "business": 2747
    },
    {
        "id": 5488,
        "ca": 2925064,
        "margin": 122742,
        "ebitda": 230410,
        "loss": 4527692,
        "year": 2017,
        "business": 2748
    },
    {
        "id": 5489,
        "ca": 3463883,
        "margin": 119451,
        "ebitda": 777862,
        "loss": 2700523,
        "year": 2016,
        "business": 2748
    },
    {
        "id": 5490,
        "ca": 1285405,
        "margin": 351543,
        "ebitda": 862074,
        "loss": 9415788,
        "year": 2017,
        "business": 2749
    },
    {
        "id": 5491,
        "ca": 1679240,
        "margin": 594176,
        "ebitda": 727597,
        "loss": 7062503,
        "year": 2016,
        "business": 2749
    },
    {
        "id": 5492,
        "ca": 2860440,
        "margin": 229094,
        "ebitda": 643970,
        "loss": 3686020,
        "year": 2017,
        "business": 2750
    },
    {
        "id": 5493,
        "ca": 1571485,
        "margin": 719144,
        "ebitda": 204031,
        "loss": 3557270,
        "year": 2016,
        "business": 2750
    },
    {
        "id": 5494,
        "ca": 2687578,
        "margin": 812459,
        "ebitda": 598150,
        "loss": 1097899,
        "year": 2017,
        "business": 2751
    },
    {
        "id": 5495,
        "ca": 294285,
        "margin": -68914,
        "ebitda": 386469,
        "loss": 2642747,
        "year": 2016,
        "business": 2751
    },
    {
        "id": 5496,
        "ca": 2077357,
        "margin": 497351,
        "ebitda": 65952,
        "loss": 858474,
        "year": 2017,
        "business": 2753
    },
    {
        "id": 5497,
        "ca": 432070,
        "margin": 427778,
        "ebitda": 290433,
        "loss": 8023406,
        "year": 2016,
        "business": 2753
    },
    {
        "id": 5498,
        "ca": 364921,
        "margin": 61976,
        "ebitda": 960673,
        "loss": 2812728,
        "year": 2017,
        "business": 2754
    },
    {
        "id": 5499,
        "ca": 1944186,
        "margin": 738525,
        "ebitda": 846608,
        "loss": 657145,
        "year": 2016,
        "business": 2754
    },
    {
        "id": 5500,
        "ca": 2752578,
        "margin": -147358,
        "ebitda": 485891,
        "loss": 331323,
        "year": 2017,
        "business": 2755
    },
    {
        "id": 5501,
        "ca": 1686886,
        "margin": -117670,
        "ebitda": 390980,
        "loss": 3205084,
        "year": 2016,
        "business": 2755
    },
    {
        "id": 5502,
        "ca": 1911503,
        "margin": 340643,
        "ebitda": 417233,
        "loss": 5121889,
        "year": 2017,
        "business": 2756
    },
    {
        "id": 5503,
        "ca": 3669705,
        "margin": 937608,
        "ebitda": 162576,
        "loss": 8516803,
        "year": 2016,
        "business": 2756
    },
    {
        "id": 5504,
        "ca": 2802947,
        "margin": -192527,
        "ebitda": 895332,
        "loss": 168490,
        "year": 2017,
        "business": 2757
    },
    {
        "id": 5505,
        "ca": 1704685,
        "margin": 675635,
        "ebitda": 175060,
        "loss": 8978142,
        "year": 2016,
        "business": 2757
    },
    {
        "id": 5506,
        "ca": 3366027,
        "margin": 987873,
        "ebitda": 196501,
        "loss": 7956104,
        "year": 2017,
        "business": 2758
    },
    {
        "id": 5507,
        "ca": 2312009,
        "margin": 564257,
        "ebitda": 534160,
        "loss": 5616100,
        "year": 2016,
        "business": 2758
    },
    {
        "id": 5508,
        "ca": 807176,
        "margin": -170771,
        "ebitda": 501330,
        "loss": 107559,
        "year": 2017,
        "business": 2759
    },
    {
        "id": 5509,
        "ca": 1677728,
        "margin": 405029,
        "ebitda": 919989,
        "loss": 7064750,
        "year": 2016,
        "business": 2759
    },
    {
        "id": 5510,
        "ca": 845912,
        "margin": -55821,
        "ebitda": 224135,
        "loss": 2658021,
        "year": 2017,
        "business": 2760
    },
    {
        "id": 5511,
        "ca": 2744919,
        "margin": 681582,
        "ebitda": 236779,
        "loss": 4376894,
        "year": 2016,
        "business": 2760
    },
    {
        "id": 5512,
        "ca": 2645052,
        "margin": -41159,
        "ebitda": 173240,
        "loss": 1967321,
        "year": 2017,
        "business": 2761
    },
    {
        "id": 5513,
        "ca": 732362,
        "margin": 698731,
        "ebitda": 463853,
        "loss": 5229956,
        "year": 2016,
        "business": 2761
    },
    {
        "id": 5514,
        "ca": 1399582,
        "margin": 985314,
        "ebitda": 725283,
        "loss": 4266902,
        "year": 2017,
        "business": 2762
    },
    {
        "id": 5515,
        "ca": 1916496,
        "margin": 979357,
        "ebitda": 942617,
        "loss": 2478758,
        "year": 2016,
        "business": 2762
    },
    {
        "id": 5516,
        "ca": 490022,
        "margin": 352486,
        "ebitda": 213406,
        "loss": 608978,
        "year": 2017,
        "business": 2763
    },
    {
        "id": 5517,
        "ca": 2814806,
        "margin": 150982,
        "ebitda": 255155,
        "loss": 4306009,
        "year": 2016,
        "business": 2763
    },
    {
        "id": 5518,
        "ca": 498678,
        "margin": 154466,
        "ebitda": 620676,
        "loss": 548809,
        "year": 2017,
        "business": 2764
    },
    {
        "id": 5519,
        "ca": 2772820,
        "margin": 119935,
        "ebitda": 271449,
        "loss": 5095792,
        "year": 2016,
        "business": 2764
    },
    {
        "id": 5520,
        "ca": 2302368,
        "margin": 469510,
        "ebitda": 250648,
        "loss": 5131438,
        "year": 2017,
        "business": 2765
    },
    {
        "id": 5521,
        "ca": 3011160,
        "margin": 429420,
        "ebitda": 940827,
        "loss": 7664834,
        "year": 2016,
        "business": 2765
    },
    {
        "id": 5522,
        "ca": 2091227,
        "margin": 809190,
        "ebitda": 589384,
        "loss": 6212269,
        "year": 2017,
        "business": 2766
    },
    {
        "id": 5523,
        "ca": 676290,
        "margin": 202279,
        "ebitda": 718696,
        "loss": 5774367,
        "year": 2016,
        "business": 2766
    },
    {
        "id": 5524,
        "ca": 1071840,
        "margin": 70852,
        "ebitda": 571568,
        "loss": 2690278,
        "year": 2017,
        "business": 2767
    },
    {
        "id": 5525,
        "ca": 2169468,
        "margin": -92185,
        "ebitda": 134714,
        "loss": 2327708,
        "year": 2016,
        "business": 2767
    },
    {
        "id": 5526,
        "ca": 227469,
        "margin": -172937,
        "ebitda": 849147,
        "loss": 3197097,
        "year": 2017,
        "business": 2768
    },
    {
        "id": 5527,
        "ca": 2950073,
        "margin": 291666,
        "ebitda": 358533,
        "loss": 2035460,
        "year": 2016,
        "business": 2768
    },
    {
        "id": 5528,
        "ca": 1659892,
        "margin": 228500,
        "ebitda": 676123,
        "loss": 113437,
        "year": 2017,
        "business": 2769
    },
    {
        "id": 5529,
        "ca": 1332202,
        "margin": -10635,
        "ebitda": 591615,
        "loss": 1731490,
        "year": 2016,
        "business": 2769
    },
    {
        "id": 5530,
        "ca": 2698460,
        "margin": 367570,
        "ebitda": 943598,
        "loss": 6190258,
        "year": 2017,
        "business": 2770
    },
    {
        "id": 5531,
        "ca": 1547921,
        "margin": 898131,
        "ebitda": 549866,
        "loss": 695666,
        "year": 2016,
        "business": 2770
    },
    {
        "id": 5532,
        "ca": 3902519,
        "margin": 765501,
        "ebitda": 873377,
        "loss": 2554825,
        "year": 2017,
        "business": 2771
    },
    {
        "id": 5533,
        "ca": 804936,
        "margin": 182411,
        "ebitda": 466946,
        "loss": 9989170,
        "year": 2016,
        "business": 2771
    },
    {
        "id": 5534,
        "ca": 1658933,
        "margin": 647423,
        "ebitda": 568089,
        "loss": 6579924,
        "year": 2017,
        "business": 2772
    },
    {
        "id": 5535,
        "ca": 1738120,
        "margin": 674431,
        "ebitda": 429561,
        "loss": 408865,
        "year": 2016,
        "business": 2772
    },
    {
        "id": 5536,
        "ca": 2026715,
        "margin": -198616,
        "ebitda": 965383,
        "loss": 6439279,
        "year": 2017,
        "business": 2773
    },
    {
        "id": 5537,
        "ca": 3894824,
        "margin": 606068,
        "ebitda": 694184,
        "loss": 5969030,
        "year": 2016,
        "business": 2773
    },
    {
        "id": 5538,
        "ca": 2494629,
        "margin": 240340,
        "ebitda": 282056,
        "loss": 6994907,
        "year": 2017,
        "business": 2774
    },
    {
        "id": 5539,
        "ca": 1974168,
        "margin": 484412,
        "ebitda": 253168,
        "loss": 1670528,
        "year": 2016,
        "business": 2774
    },
    {
        "id": 5540,
        "ca": 3977217,
        "margin": 175757,
        "ebitda": 241608,
        "loss": 6107207,
        "year": 2017,
        "business": 2775
    },
    {
        "id": 5541,
        "ca": 809720,
        "margin": 545355,
        "ebitda": 842297,
        "loss": 7239634,
        "year": 2016,
        "business": 2775
    },
    {
        "id": 5542,
        "ca": 3055261,
        "margin": -29529,
        "ebitda": 988508,
        "loss": 3307127,
        "year": 2017,
        "business": 2776
    },
    {
        "id": 5543,
        "ca": 441182,
        "margin": 616025,
        "ebitda": 739319,
        "loss": 754174,
        "year": 2016,
        "business": 2776
    },
    {
        "id": 5544,
        "ca": 3778120,
        "margin": 946201,
        "ebitda": 737398,
        "loss": 828816,
        "year": 2017,
        "business": 2777
    },
    {
        "id": 5545,
        "ca": 377221,
        "margin": 644941,
        "ebitda": 330869,
        "loss": 4185104,
        "year": 2016,
        "business": 2777
    },
    {
        "id": 5546,
        "ca": 3293799,
        "margin": 762392,
        "ebitda": 874292,
        "loss": 3623463,
        "year": 2017,
        "business": 2778
    },
    {
        "id": 5547,
        "ca": 858506,
        "margin": 189441,
        "ebitda": 609871,
        "loss": 177061,
        "year": 2016,
        "business": 2778
    },
    {
        "id": 5548,
        "ca": 1952026,
        "margin": 105098,
        "ebitda": 802326,
        "loss": 5262609,
        "year": 2017,
        "business": 2779
    },
    {
        "id": 5549,
        "ca": 353809,
        "margin": 802651,
        "ebitda": 720150,
        "loss": 953096,
        "year": 2016,
        "business": 2779
    },
    {
        "id": 5550,
        "ca": 3812845,
        "margin": 536146,
        "ebitda": 197412,
        "loss": 3385756,
        "year": 2017,
        "business": 2780
    },
    {
        "id": 5551,
        "ca": 900740,
        "margin": 452037,
        "ebitda": 479167,
        "loss": 9372921,
        "year": 2016,
        "business": 2780
    },
    {
        "id": 5552,
        "ca": 1298429,
        "margin": 85209,
        "ebitda": 801714,
        "loss": 1874888,
        "year": 2017,
        "business": 2781
    },
    {
        "id": 5553,
        "ca": 3372389,
        "margin": -46817,
        "ebitda": 962766,
        "loss": 1038773,
        "year": 2016,
        "business": 2781
    },
    {
        "id": 5554,
        "ca": 1571590,
        "margin": 465195,
        "ebitda": 715373,
        "loss": 6767658,
        "year": 2017,
        "business": 2782
    },
    {
        "id": 5555,
        "ca": 1885922,
        "margin": 294164,
        "ebitda": 602655,
        "loss": 5395737,
        "year": 2016,
        "business": 2782
    },
    {
        "id": 5556,
        "ca": 609290,
        "margin": 476030,
        "ebitda": 414815,
        "loss": 650125,
        "year": 2017,
        "business": 2783
    },
    {
        "id": 5557,
        "ca": 383265,
        "margin": -109517,
        "ebitda": 516401,
        "loss": 7914729,
        "year": 2016,
        "business": 2783
    },
    {
        "id": 5558,
        "ca": 3646184,
        "margin": -117596,
        "ebitda": 904991,
        "loss": 369354,
        "year": 2017,
        "business": 2784
    },
    {
        "id": 5559,
        "ca": 215663,
        "margin": 343155,
        "ebitda": 914212,
        "loss": 386124,
        "year": 2016,
        "business": 2784
    },
    {
        "id": 5560,
        "ca": 3081311,
        "margin": 760359,
        "ebitda": 515188,
        "loss": 866840,
        "year": 2017,
        "business": 2785
    },
    {
        "id": 5561,
        "ca": 2987931,
        "margin": 94163,
        "ebitda": 833533,
        "loss": 2548828,
        "year": 2016,
        "business": 2785
    },
    {
        "id": 5562,
        "ca": 1918594,
        "margin": 608420,
        "ebitda": 48656,
        "loss": 3929717,
        "year": 2017,
        "business": 2786
    },
    {
        "id": 5563,
        "ca": 3838016,
        "margin": -125324,
        "ebitda": 689653,
        "loss": 5153326,
        "year": 2016,
        "business": 2786
    },
    {
        "id": 5564,
        "ca": 784201,
        "margin": 152713,
        "ebitda": 747400,
        "loss": 5136538,
        "year": 2017,
        "business": 2787
    },
    {
        "id": 5565,
        "ca": 503662,
        "margin": 920524,
        "ebitda": 630705,
        "loss": 2303495,
        "year": 2016,
        "business": 2787
    },
    {
        "id": 5566,
        "ca": 929090,
        "margin": 564220,
        "ebitda": 252906,
        "loss": 9746310,
        "year": 2017,
        "business": 2788
    },
    {
        "id": 5567,
        "ca": 2158639,
        "margin": 105807,
        "ebitda": 693906,
        "loss": 1359336,
        "year": 2016,
        "business": 2788
    },
    {
        "id": 5568,
        "ca": 812364,
        "margin": 960696,
        "ebitda": 949485,
        "loss": 6544371,
        "year": 2017,
        "business": 2789
    },
    {
        "id": 5569,
        "ca": 1407290,
        "margin": -47395,
        "ebitda": 670520,
        "loss": 8967033,
        "year": 2016,
        "business": 2789
    },
    {
        "id": 5570,
        "ca": 2153000,
        "margin": 438242,
        "ebitda": 139511,
        "loss": 2935698,
        "year": 2017,
        "business": 2790
    },
    {
        "id": 5571,
        "ca": 3740737,
        "margin": 220257,
        "ebitda": 664757,
        "loss": 9211966,
        "year": 2016,
        "business": 2790
    },
    {
        "id": 5572,
        "ca": 2818761,
        "margin": -33832,
        "ebitda": 788293,
        "loss": 5486323,
        "year": 2017,
        "business": 2791
    },
    {
        "id": 5573,
        "ca": 2834251,
        "margin": 591851,
        "ebitda": 979319,
        "loss": 8620705,
        "year": 2016,
        "business": 2791
    },
    {
        "id": 5574,
        "ca": 2529178,
        "margin": 197369,
        "ebitda": 886454,
        "loss": 7279257,
        "year": 2017,
        "business": 2792
    },
    {
        "id": 5575,
        "ca": 3546117,
        "margin": 244818,
        "ebitda": 645308,
        "loss": 6806083,
        "year": 2016,
        "business": 2792
    },
    {
        "id": 5576,
        "ca": 1429780,
        "margin": 799453,
        "ebitda": 36259,
        "loss": 3355722,
        "year": 2017,
        "business": 2793
    },
    {
        "id": 5577,
        "ca": 2099179,
        "margin": -54616,
        "ebitda": 527125,
        "loss": 5403606,
    },
    {
    {