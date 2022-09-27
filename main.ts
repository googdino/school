let num = 0
input.onGesture(Gesture.Shake, function () {
    num = randint(1, 3)
    if (num == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            # # # # #
            . # # # .
            `)
    } else if (num == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # # # #
            . # # # .
            `)
    } else if (num == 3) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            # # # # #
            . # # # .
            `)
    }
})
