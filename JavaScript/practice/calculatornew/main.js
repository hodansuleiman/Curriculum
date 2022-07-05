const equals = document.querySelector('.equals');
const numbers = document.querySelector('.numbers');
const display = document.querySelector('.display');
const operators = document.querySelector('.operators')


let displayNumbers='';
let hasOperator=false;
let sign = null;
let x = 0;
let y = 0;

const signs= {
    add:'+',
    minus:'-',
    times:'*',
    divide:'/',
};

const renderDisplay = function(){
    display.innerText = displayNumbers
};

numbers.addEventListener('click', function(e){
const digit = e.target.innerText;
displayNumbers += digit; // displayNumbers = displayNumbers + digit

if(!hasOperator){
    x += digit *1;
}else{
y += digit *1;
}

const isNumber= e.target.getAttribute('data-number');
if (isNumber) {
    renderDisplay();
} 

});
  
operators.addEventListener('click', function(e) {
    hasOperator = true
    const operator= e.target.getAttribute('data-operator');
    sign = operator;
    if (!x){
        x = displayNumbers *1 
    } 
    //displayNumbers += '+';
    displayNumbers += `${signs[operator]}`
    renderDisplay();
});

equals.addEventListener('click', function() {
    let result= null;
    if (signs[sign] === '+'){
    result = x +y
    } else if (signs[sign] === '-'){
    result = x-y 
    } else if (signs[sign] === '*'){
    result = x*y 
    }else if (signs[sign] === '/'){
    result = x/y
    }
    display.innerText = result;
});

