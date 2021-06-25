'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];


// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// functions  
// 1.
function displayMovements(movements, sort=false){
  containerMovements.innerHTML =  '';

  // by slice we are creating new array and then sorting it
  const movs = sort ? movements.slice().sort((a,b)=> a - b) : movements;

  movs.forEach(function(mov,i){
  const type = mov > 0 ? 'Deposit':'Withdrawl';

  const html = `  <div class="movements__row">
  <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
  <div class="movements__value">${mov}</div>
  </div>`; 
  containerMovements.insertAdjacentHTML('afterbegin',html);
  });
}

// 2.
function displayTotalBalance(acc){
  const total = acc.movements.reduce(function(acc,mov){
    return  acc + mov;
  },0);
  acc.balance =  total;
  labelBalance.textContent = `${total}.Rs`;
 
}

// 3.
function displaySummary(acc){
  const inTotal = acc.movements.filter(mov=> mov > 0).reduce((acc,mov)=> acc+mov ,0);
  labelSumIn.textContent = inTotal;

  const outTotal = acc.movements.filter(mov => mov < 0).reduce((acc,mov)=> acc+ mov,0);
  labelSumOut.textContent = Math.abs(outTotal);

  const totalInterest = acc.movements.filter(mov => mov > 0).map(deposit => deposit*acc.interestRate)
  .filter(int=> int > 1).reduce((acc,mov)=> acc+mov,0);
  labelSumInterest.textContent = totalInterest;
}


// 4.creating user name
function createUserNames(accs){
  accs.forEach(function(acc){
    acc.userName = acc.owner.toLowerCase().split(' ').map(function(name){
      return name[0]}).join('');
  });
}
createUserNames(accounts);

// update UI

function updateUI(user){
  // Showing Movements
  displayMovements(user.movements);
  // summary
  displaySummary(user);
  // totalBalnce
  displayTotalBalance(user);
}


// handling Events
let currentUser;
btnLogin.addEventListener('click',function(e){
  e.preventDefault();
  
  currentUser = accounts.find(function(acc){
    if(acc.userName === inputLoginUsername.value){
      return acc;
    }
  });
  if(currentUser?.pin === Number(inputLoginPin.value)){
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();

    // updating UI
    updateUI(currentUser);

  } 
});

// implementing transfer
btnTransfer.addEventListener('click',function(e){
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const reciverAcc  = accounts.find(acc => acc.userName === inputTransferTo.value);

    inputTransferAmount.value = inputTransferTo.value = '';

   if(amount > 0 && reciverAcc &&  currentUser.balance >= amount && reciverAcc?.userName !== currentUser.userName){
      currentUser.movements.push(-amount);
      reciverAcc.movements.push(amount);
   }

    // updating UI
    updateUI(currentUser);    

});


// Close Account
btnClose.addEventListener('click',function(e){
  e.preventDefault();

  const closeUser = inputCloseUsername.value;
  const closePin = Number(inputClosePin.value);
  
  if(currentUser.userName === closeUser && currentUser.pin === closePin){

    const index = accounts.findIndex(acc=> acc.userName === currentUser.userName);
    accounts.splice(index,1);
    containerApp.style.opacity = 0;
  
  }
});

// Request Loan
btnLoan.addEventListener('click',function(e){
  e.preventDefault();
  
  const amount = Number(inputLoanAmount.value);
  if(amount > 0 && currentUser.movements.some(mov => mov >= amount*0.1)){
    // add movements
    currentUser.movements.push(amount);
    // update UI
    updateUI(currentUser);
  }
  inputLoanAmount.value = '';
});

// sort
let sorted = false;
btnSort.addEventListener('click',function(e){
  e.preventDefault();
  displayMovements(currentUser.movements,!sorted);
  sorted = !sorted;

})