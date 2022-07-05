
const root = document.getElementById('root');

let count= 0;

const removeChild = function(e) {
    const target= e.target;
    const isChild= target.getAttribute('data-child');
    if(isChild){
    target.remove();
    }
};

const btn = document.createElement('button');
btn.innerText = 'Click Me';
root.append(btn);

const parentDiv=document.createElement('div');
root.append(parentDiv);
parentDiv.addEventListener('click',removeChild);

const renderDiv=function(){
count ++;
const div= document.createElement('div');
div.innerText= count;
div.style.cursor='pointer';
div.style.backgroundColor ='#ddd';
div.style.fontSize='2rem';
div.style.margin='10px 0';
div.style.padding= '20px'
div.setAttribute('data-child',count)
parentDiv.append(div);
};

btn.addEventListener('click',renderDiv);

//const btn = document.createElement('button');
//btn.innerText = 'Click Me';

//root.append(btn);