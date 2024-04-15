
class BankAccount{

    //constructor magic method
    constructor(accountNumber,ownerName,balance){

        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;

    }

    //deposit method
    deposit(amount){
        this.balance +=amount;
        console.log('Deposit BDT. '+ amount.toFixed(2)+' ৳' +" Balance = "+this.balance.toFixed(2)+' ৳');
    }


 //withdraw method
    withdraw(amount){

        if (amount > this.balance) {
            console.log("Sorry!!,Insufficient funds : "+amount + " TK OF Balance "+this.balance.toFixed(2)+' ৳');
        }
        else{
        this.balance -=amount;
            console.log("----------------------- Withdraw "+ amount.toFixed(2)+' ৳');
            console.log('---------------------------------------');
            console.log('              Total Balance ' +this.balance.toFixed(2)+' ৳');
        }
    }

 //balance method
    getBalance(){
        return this.balance;
    }

 //display method
    displayAccountInfo(){

        console.log('Account Number :'+this.accountNumber);
        console.log('Owner Name : '+this.ownerName);
        console.log('Balance : BDT.'+this.balance.toFixed(2));
    }

}

//object

const AccounObj = new BankAccount(1002050,'Emon Raj',1000);

//output
console.log('\nInitial Account Information :');
console.log('-----------------------------');

AccounObj.displayAccountInfo();

console.log('-----------------------------');

//deposit 500 tk
console.log("Deposite and Withdraw :");

AccounObj.deposit(500);

//withdraw 300 tk
 AccounObj.withdraw(600);

console.log('---------------------------------------\n');

//update account information

console.log('\Update Account Information :');
console.log('-----------------------------');
AccounObj.displayAccountInfo();

