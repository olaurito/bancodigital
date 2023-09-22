const App = require("./App")

App.createUser("neto@gmail.com", "Olaurito Neto")
App.createUser("lucas@gmail.com", "Lucas Queiroga")
App.createUser("isaac@gmail.com", "Issac Pontes")

App.deposit("neto@gmail.com", 100)

App.transfer("neto@gmail.com", "lucas@gmail.com", 20)

App.changeLoanFee(10)
App.takeLoan("isaac@gmail.com", 2000, 24)

console.log(App.findUser("neto@gmail.com"))
console.log(App.findUser("neto@gmail.com").account)
console.log(App.findUser("lucas@gmail.com"))
console.log(App.findUser("lucas@gmail.com").account)
console.log(App.findUser("isaac@gmail.com"))
console.log(App.findUser("isaac@gmail.com").account)

console.log(App.findUser("isaac@gmail.com").account.loans[0].installments)

