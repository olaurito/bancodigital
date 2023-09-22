const User = require("./User");
const Deposit = require("./Deposit");
const Transfer = require("./Transfer");
const Loan = require("./Loan");
module.exports = class App {
    static #users = []

    static findUser(email) {
        const user = this.#users.find(user => user.email === email)
        return user ?? null
    }

    static createUser(email, fullname) {
        const userExists = App.findUser(email)
        if (!userExists) {
            this.#users.push(new User(email, fullname))
        }
    }

    static deposit(email, value) {
        const user = App.findUser(email)
        if (user) {
            const newDeposit = new Deposit(value)
            user.account.addDeposit(newDeposit)
        }
    }

    static transfer(fromUserEmail, toUserEmail, value) {
        const fromUser = App.findUser(fromUserEmail)
        const toUser = App.findUser(toUserEmail)
        if (fromUser && toUserEmail) {
            const newTransfer = new Transfer(fromUser, toUser, value)
            fromUser.account.addTransfer(newTransfer)
            toUser.account.addTransfer(newTransfer)
        }
    }

    static takeLoan(email, value, numberOfInstallment) {
        const user = App.findUser(email)
        if (user) {
            const newLoan = new Loan(value, numberOfInstallment)
            user.account.addLoan(newLoan)
        }
    }

    static changeLoanFee(newFeePercentage) {
        Loan.fee = newFeePercentage
    }
}