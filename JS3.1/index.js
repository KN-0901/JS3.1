import BankAccount from './bankAccount.js';

// Creating instances of BankAccount for different account holders
const account1 = new BankAccount(123456, 'John Doe');
const account2 = new BankAccount(789012, 'Jane Smith', 1000);

// Deposit funds
account1.deposit(500);
account2.deposit(200);

// Withdraw funds
account1.withdraw(200);
account2.withdraw(300);

// Check current account standing balances
account1.checkBalance();
account2.checkBalance();
