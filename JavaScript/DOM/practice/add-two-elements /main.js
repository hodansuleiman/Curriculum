
const root= document.getElementById('root');

const heading = document.createElement('h1');
heading.innerText = 'My trip to France';
heading.style.fontFamily='sans-serif';
heading.style.color='#444';
root.append(heading);


const description = document.createElement('p');
heading.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil dolores cumque nulla vitae autem! Qui voluptate nostrum provident soluta non, atque ab dolores debitis consequuntur ullam vero repudiandae esse culpa quod omnis, aperiam reprehenderit aut reiciendis. Voluptatibus esse quas voluptates aperiam placeat, perspiciatis eligendi obcaecati adipisci corporis quia porro iure.';
description.style.lineHeight='1.35rem';
root.append(description);