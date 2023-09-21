const Account = require("./account");
Account.tellMeTime();
Account.tellMeAboutClass();

const myAccount = new Account("Jonnhy", 500000, 8748678497097);
myAccount.giveMeDetails();

myAccount.makeDeposit(100000);

// ferrari 400000usd

myAccount.withdrawMoney(400000);
myAccount.makeDeposit(2000000);
