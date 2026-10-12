class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    // Handles depositing money into the account
    deposit(amount) {
        this.balance += amount;
        console.log(`£${amount} deposited. Current balance: £${this.balance}`);
    }

    // Handles withdrawing money from the account
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds available");
        } else {
            this.balance -= amount;
            console.log(`£${amount} withdrawn. Current balance: £${this.balance}`);
        }
    }

    // Displays the current standing balance
    checkBalance() {
        console.log(`Account balance for ${this.accountHolder}: £${this.balance}`);
    }
}

export default BankAccount;
