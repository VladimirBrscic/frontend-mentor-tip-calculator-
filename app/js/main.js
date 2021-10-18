const billAmountInput = document.querySelector('.bill-amount-input');
const tipPercentageButtons = document.querySelectorAll('.tip-percentage-button');
const resetButton = document.querySelector('.reset-button');
const customInput = document.querySelector('.custom-input');
const peopleCountInput = document.querySelector('.people-count-input');
const finalAmountToPay = document.querySelector('.amount-total-person');
const finalTipToPay = document.querySelector('.tip-person');
const inputGroup = document.querySelectorAll('.input-group');
const errorMessage = document.querySelector('.error-message');

let billAmountVariable = 0;
let tipPercentage = 1;
let numberOfPeople = 1;


// total amount and tip per person  final calculation

let totalAmountPersonCalculate = ()=>{

  let total = ((billAmountVariable *  tipPercentage) /
   numberOfPeople
    );
    let totalTip = total - (billAmountVariable / numberOfPeople);
    
    finalTipToPay.innerHTML = '$' + totalTip.toFixed(2);
    finalAmountToPay.innerHTML ='$' + total.toFixed(2);
    
    activateResetButton();
}

// debounce function

const debounce = (fn, delay)=> {
  let timer;
  return ()=>{
    clearTimeout(timer);
    timer = setTimeout(()=> {
      fn()
    }, delay)
  }
}

// getting initial bill amount 

let assignValue = ()=>{
  billAmountVariable = Number(billAmountInput.value);
  totalAmountPersonCalculate();
}
billAmountInput.addEventListener('keyup', debounce(assignValue, 500));





// getting tip percentage functionality

tipPercentageButtons.forEach((item, i) => {
  item.addEventListener('click', ()=>{
    tipPercentage = Number(item.value);
    customInput.value = '';
    totalAmountPersonCalculate();
  })
});



// getting custom percentage

let assignValueCustomPercentage = ()=>{
    tipPercentage = 1 + Number(customInput.value) / 100;
    totalAmountPersonCalculate();
}

customInput.addEventListener('keyup', debounce(assignValueCustomPercentage, 500));




// getting people count 

let assignValuePeople = ()=>{
  numberOfPeople = Number(peopleCountInput.value);
  if(numberOfPeople === 0){
    numberOfPeople = 1;
    showPeopleInputError(0);
  }else{
    showPeopleInputError(1);
  }
  totalAmountPersonCalculate();
}

peopleCountInput.addEventListener('keyup', debounce(assignValuePeople, 500));


 // reset button functionality


resetButton.addEventListener('click', ()=>{
  tipPercentageButtons.forEach((item, i) => {
    item.checked = false;
  });
    billAmountVariable = 0;
    tipPercentage = 1;
    numberOfPeople = 1;

    billAmountInput.value = '';
    peopleCountInput.value = '';
    customInput.value = '';

    finalTipToPay.innerHTML = '$0.00';
    finalAmountToPay.innerHTML ='$0.00';

    resetButton.classList.remove('reset-activated')
    showPeopleInputError(1);
})

// unchecking all tip percentage buttons when entering custom input

customInput.addEventListener('click',()=>{
  tipPercentageButtons.forEach((item, i) => {
      item.checked = false;
    })
  })

// people input error display functionality

function showPeopleInputError(errorIndex){
  if(errorIndex === 0)
  { peopleCountInput.style.
  outlineColor = 'red';
  errorMessage.style.display = 'block'}
  else { peopleCountInput.style.
    outlineColor = 'green';
    errorMessage.style.display ='none';}
}


// activating reset button

function activateResetButton(){
  resetButton.classList.add('reset-activated');
}
