# DOM 102
## Modifying the DOM comes down to learning a few methods and properties. 

### Creating Elements
```Javascript
document.createElement('div'); // this will create element div but we cannnot access it

const div = document.createElement('div'); // we need to cash it inside (div) in order to access the div and write inside of it

div.innerText = 'Hello World'; // we call it by div and we can change text 

div.innerHTML= `<h1> Hello World<h1>`; // we write with the H1 tag ( we need to use backticks) and innerHTML will respect it wherers inner.text will not

root.append(div);  // assume that root is an element and we have already cashed it. these 3 steps is how you create and element and get it into the HTML.
```
### Selecting Elements 
```Javascript
// returns a list of nodes (elements)
document.getElementsByTagName('p');
document.getElementsByClassName('items');
document.querySelectorAll('.items'); // you can next in queryselector 


// returns a single node
document.getElementByID(root);
document.querySelector('article #root'); //retuns one, not a list, and again you can next in here 
```

### Modifying Elements 
 Cannot modify an element until we have cashed it. 
```Javascript
const root = document.getElementByID('root'); // we cashed it
root.setAttribute('data-id','someId) // we can set an attribute
root.style.color= 'crimson'; //we can set a color
root.innerText = 'some new text here'; // we can change text of inner HTML
root.removeAttribute('data-id'); // we can remove an attribute that we no longer need
```