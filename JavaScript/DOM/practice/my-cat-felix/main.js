const root= document.getElementById('root');

const heading = document.createElement('h1');
heading.innerText = 'My Cat Felix';
root.append(heading);

const image = document.createElement('img');
image.src = 'https://placekitten.com/g/300/200';
root.append(image)

const caption = document.createElement('p')
caption.innerText = 'Felix has been with me since the beginning.';
caption.classList = 'caption'; // created a caption for class that we can target in css
root.append(caption);