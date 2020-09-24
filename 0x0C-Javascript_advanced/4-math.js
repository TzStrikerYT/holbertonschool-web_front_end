function divideBy(firstNumber) {
    return function a(secondNumber) { return firstNumber / secondNumber}
}

function addBy(firstNumber) {
    return function b() {return firstNumber + secondNumber}
}

var addBy100 = addBy(100)
var addBy1000 = addBy(1000)
var divideBy10 = addBy(10)
var divideBy100 = addBy(100)