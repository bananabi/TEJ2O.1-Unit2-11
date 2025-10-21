/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Arthur
 * Created on: Sep 2020
 * This program ...
*/

//variables
let number1 = 0
let number2 = 0

// random number generate
number1 = randint(0, 99)
number2 = randint(0, 99)

// show message at the start
basic.showIcon(IconNames.Happy)

// when A is pressed start the program 
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(500)
    basic.showString("#1")
    basic.showNumber(number1)
    basic.showIcon(IconNames.Happy)
})

// when B is pressed do the same as A 
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.pause(500)
    basic.showString("#2")
    basic.showNumber(number2)
    basic.showIcon(IconNames.Happy)
})

// when the microbit is shaken compare the two numbers
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
