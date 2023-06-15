input.onButtonPressed(Button.A, function () {
    dfplayermini.playFileInFolder(2, 2, dfplayermini.isRepeat.No)
    播放時間開始ms = input.runningTime()
    索引 = 0
    while (索引 < 61) {
        strip.setBrightness(255)
        播放時間已播放ms = input.runningTime() - 播放時間開始ms
        if (播放時間已播放ms > 節奏陣列[索引] * 1000) {
            if (索引 % 4 == 0 == true) {
                燈光A()
            }
            strip.rotate(1)
            strip.setPixelColor(索引 % 6, neopixel.colors(NeoPixelColors.White))
            動作A()
            索引 += 1
            strip.show()
        }
    }
    while (索引 < 100) {
        randomR = randint(0, 255)
        ramdomG = randint(0, 255)
        randomB = randint(0, 255)
        strip.setBrightness(randint(0, 255))
        strip.setPixelWhiteLED(1, neopixel.rgb(randomR, ramdomG, randomB))
        strip.setPixelWhiteLED(2, neopixel.rgb(randomR, ramdomG, randomB))
        strip.setPixelWhiteLED(3, neopixel.rgb(randomR, ramdomG, randomB))
        strip.setPixelWhiteLED(4, neopixel.rgb(255 - randomR, 255 - ramdomG, 255 - randomB))
        strip.setPixelWhiteLED(5, neopixel.rgb(255 - randomR, 255 - ramdomG, 255 - randomB))
        strip.setPixelWhiteLED(6, neopixel.rgb(255 - randomR, 255 - ramdomG, 255 - randomB))
    }
    while (索引 < 節奏陣列.length) {
    	
    }
})
function 燈光A () {
    隨機數B = randint(1, 180)
    隨機數A = randint(180, 360)
    strip.showRainbow(隨機數A, 隨機數B)
}
function 動作A () {
    if (索引 % 2 == 0) {
        KSB048.Servo(KSB048.ServoNum.S0, 75)
    } else {
        KSB048.Servo(KSB048.ServoNum.S0, 105)
    }
}
function 定義節奏陣列 () {
    節奏陣列 = [
    1.19,
    1.617,
    2.277,
    3.499,
    4.059,
    4.719,
    5.841,
    6.336,
    6.964,
    8.019,
    8.547,
    9.174,
    10.923,
    11.484,
    12.573,
    13.134,
    13.728,
    14.025,
    14.322,
    14.916,
    15.511,
    16.104,
    16.369,
    17.028,
    17.49,
    18.084,
    18.381,
    18.645,
    19.151,
    19.47,
    19.768,
    20.329,
    20.592,
    21.187,
    21.813,
    22.011,
    22.079,
    22.147,
    22.214,
    22.342,
    22.506,
    22.605,
    22.701,
    22.799,
    22.9,
    23.526,
    24.087,
    24.351,
    24.878,
    25.209,
    25.736,
    26.331,
    26.595,
    27.254,
    27.487,
    27.783,
    28.343,
    28.607,
    29.135,
    29.762,
    30.917,
    31.94,
    32.932,
    33.493,
    34.054,
    35.141,
    35.704,
    36.264,
    36.791,
    37.419,
    37.913,
    38.475,
    39.596,
    40.784,
    41.906,
    42.996,
    44.118,
    45.24,
    45.767,
    46.362,
    47.483,
    48.671,
    49.761,
    50.85,
    51.377,
    51.905,
    52.434,
    52.996,
    53.489,
    54.05,
    54.613,
    55.173,
    55.7,
    56.229,
    57.384,
    58.473,
    58.969,
    59.528,
    60.617,
    61.114,
    61.739,
    62.928,
    63.226,
    63.852,
    64.115,
    64.676,
    65.503,
    66.03,
    66.359,
    66.656,
    67.252,
    67.515,
    68.076,
    68.572
    ]
    basic.showNumber(節奏陣列.length)
}
input.onButtonPressed(Button.B, function () {
    _1 = 0
    for (let index = 0; index <= 50; index++) {
    	
    }
    for (let index = 0; index <= 50; index++) {
        strip.showRainbow(_1 * 1.8, _1 * 1.8)
        strip.setBrightness(50 - index)
        strip.show()
    }
})
let 隨機數A = 0
let 隨機數B = 0
let randomB = 0
let ramdomG = 0
let randomR = 0
let 節奏陣列: number[] = []
let 播放時間已播放ms = 0
let 索引 = 0
let 播放時間開始ms = 0
let strip: neopixel.Strip = null
let _1 = 0
KSB048.Servo(KSB048.ServoNum.S0, 90)
dfplayermini.connect(SerialPin.P2, SerialPin.P1)
dfplayermini.press(dfplayermini.playType.Stop)
dfplayermini.setVolume(10)
strip = neopixel.create(DigitalPin.P14, 12, NeoPixelMode.RGB)
strip.setBrightness(10)
strip.showRainbow(1, 360)
定義節奏陣列()
basic.forever(function () {
    strip.showRainbow(randint(0, 360), randint(0, 360))
    for (let index = 0; index <= 50; index++) {
        strip.setBrightness(index)
        strip.show()
        basic.pause(50)
    }
    for (let index = 0; index <= 50; index++) {
        strip.setBrightness(50 - index)
        strip.show()
        basic.pause(50)
    }
})
