/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Arthur
 * Created on: Sep 2020
 * This program ...
*/

// setup
basic.clearScreen()
basic.showIcon

// variable
let number1: number = 0
number1 = randint(0, 99)
let number2: number = 0
number2 = randint(0, 99)

// button A
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    basic.showString('#1 :')
    basic.showNumber(number1)

})

// button B
input.onButtonPressed(Button.B, function() {
    basic.clearScreen()
    basic.showString('#2 :')
    basic.showNumber(number2)
    
})

// when B is pressed do the same as A 
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.pause(500)
    basic.showString("#2")
    basic.showNumber(number2)
    basic.showIcon(IconNames.Happy)
})

// compare the two numbers
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    if (number1 < number2) {
        basic.showNumber(number1)
        basic.showString("<")
        basic.showNumber(number2)
        basic.showIcon(IconNames.Happy)
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showNumber(number1)
        basic.showString(">")
        basic.showNumber(number2)
        basic.showIcon(IconNames.Happy)
        basic.showIcon(IconNames.Sad)
    }
})
