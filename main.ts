input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
keyboard.startKeyboardService()
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0) || input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Yes)
        keyboard.sendString("v")
    } else {
        basic.showIcon(IconNames.No)
    }
})
