# JavaScript Functions 102
## An arrow function expression is more concise than the tradition function expression. However, there are caveats (not discussed here). 

### Advantages(not a complete list)

The `function` keyword is replaced with `=>`
```javascript
const someFn= function(){
    return 'Hello World;
}; // traditionl way of writing function

const someFn=()=>{
    return 'Hello World';
}; // arrow function
```


The curly braces and the `return` keyword can be removed entirly if everything can fit in one line.

```javascript
const someFn=function(){
    return 'Hello World;
}; // traditionl way of writing function

const someFn=()=> return 'Hello World'; // removed curly braces 
```
You can remove parenthese if there is only one argument.
```javascript
// one argument
const greeting = function(name){
    return 'Hello ${name};
}; // traditionl way of writing function with argument

const greeting = name => 'Hello ${name}; // removed parenthese because it's one arugment and this rules applies. it makes the code shorter and fsster to write. 

// more than one argument
const location = function (city, state){
    return `The location is ${city}, ${state}`;
};

const location = (city, state) => ` The location is ${city},${state}`;
```

A `return` that spans multiple lines can either use an excplicit `return`, with curly braces , or an inplicit `return`, with parentheses.

```javascript
const studentDetails=fucntion(){
return {
name : 'Angela', 
age: 15
grade: 91
}
};

//explicit
const studentDetails=()=>{
return {
name : 'Angela', 
age: 15
grade: 91
}
};

//implicit
const studentDetails=()=>(
{
name : 'Angela', 
age: 15
grade: 91
}
); // implicit we do not write out the return keyword. and we use parantheses 









```