const question = document.querySelector('.question');
const answer= document.querySelector('.answer')


answer.style.display = 'none'; // we want to make the default display none. it will hide the question. 

let isFAQopen= false;

question.addEventListener('click', function() {
    if (isFAQopen){
    answer.style.display = 'none'; // here on click it changes it to none  we set the display on none it will show nothing. 
    isFAQopen= false;// it sets the fact to be false. Toggle is off. 
   
    } else{
        answer.style.display = 'block'; // here on click it changes it to block we set the display on block it will show it. 
        isFAQopen= true; // it sets the fact to be true. Toggle is on. 
    }
});

// Booleans work well for toogles (on/off)
// when using booleans you usually use an if/else statement