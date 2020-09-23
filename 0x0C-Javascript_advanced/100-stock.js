let stock = {
    macbook: 2,
    iphone: 4,
  }
let processPayment = function a(itemName) {
  stock[itemName] -= 1
  console.log("Payment is being processed for item " + itemName);
}
let processError = function b(itemName) {
  console.log("No more " + itemName + " in stock")
  console.log("Payment is not being processed")
}
let processOrder = function c(itemName, callbackPayment, callbackError){
  console.log("Verifying the stock of " + itemName)
  // if
  if (stock[itemName]) {
    callbackPayment(itemName);
  } else {
    callbackError(itemName);
  }
}
let answer = window.prompt("Please enter the item you would like to purchase (Macbook, iPhone)")
processOrder(answer.toLowerCase(), processPayment, processError);