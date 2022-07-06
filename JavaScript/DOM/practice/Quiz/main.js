const options= document.querySelector('.options')
const feedback= document.querySelector('.feedback')



options.addEventListener('click',function(e){
    if (e.target.hasAttribute('data-correct')){
        feedback.innerText = 'CORRECT!';
        feedback.style.color='green'
    } else if (e.target.tagname ==='LI'){
        feedback.innerText = 'WRONG!'
        feedback.style.color='crimson'
    }

});