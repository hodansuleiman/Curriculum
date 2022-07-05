const root= document.getElementById('root');

const renderDiv = function(){
    const div = document.createElement('div');
    div.innerText='I am a new div rendered with a function expression';
    root.append(div);
};

const btn = document.createElement('button');
btn.innerText='Click Me';
btn.addEventListener('click',renderDiv);
root.append(btn);