input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    keyboard.sendString("v")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    keyboard.sendString("x")
})
keyboard.startKeyboardService()
basic.forever(function () {
    control.waitMicros(500)
    if (pins.analogReadPin(AnalogPin.P0) >= 900) {
        basic.showIcon(IconNames.Yes)
        keyboard.sendString("v")
    } else {
        basic.showIcon(IconNames.No)
        keyboard.sendString("x")
    }
})
