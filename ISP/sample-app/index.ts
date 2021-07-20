class BankAccount {
  constructor(
    amount: number,
    user: User,
    openDate: Date,
    lastTransactionAmount: number
  ) {
    this.amount = amount;
    this.user = user;
    this.openDate = openDate;
    this.lastTransactionAmmount = lastTransactionAmount;
  }
  amount: number;
  user: User;
  openDate: Date;
  lastTransactionAmmount: number;
}
class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
}

function calculateTotalBankMoney(accounts: BankAccount[]): number {
  var sum = 0;
  accounts.forEach((account) => {
    sum += account.amount;
  });

  return sum;
}
const accounts = [
  new BankAccount(1, new User("Jack"), new Date("01/01/2021"), 20),
  new BankAccount(30, new User("John"), new Date("05/01/1900"), 1),
  new BankAccount(4000, new User("Mary"), new Date("01/02/1984"), 30),
];
const totalMoney = calculateTotalBankMoney(accounts);

console.log(`Here are the total bank money : $${totalMoney}`);
