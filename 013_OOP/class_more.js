'use strict';


// Private classes

// public fields
// private fileld
// public method
// private method



class Account {
 // 1.public fields(instances)
  locale = navigator.language;
  
  // 2.private fileld
  #movements = [];
  #pin;

  constructor(owner,currency,pin){
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account , ${owner}`);
 }

 deposite(val) {
   this.#movements.push(val);
 }
 
//  here we call deposite 
 withDraw(val){
   this.deposite(-val);
 }

 approveLoan(val){
   return true;
 }

 requestLoan(val){
  if(this.approveLoan(val)) {
    this.deposite(val);
    console.log('Loan Approved');
  }
 }

//  private method
#approveLoan(val){
  return true;
}
}


const acc1 = new Account('Jonas','EUR',1111);
// acc1.movements.push(250);
// acc1.movements.push(-100);

acc1.deposite(150);
acc1.withDraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);

console.log(acc1);
console.log(acc1.pin);


///////////////////////////////////////////
// Chaining
acc1.deposite(300);
