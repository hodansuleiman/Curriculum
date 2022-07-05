# JavaScript Functions 101
## A general overview 

### Terms

**anonymous function**
A function that is not named (see also function expression).
In this function expression, the function part is considered anonymous.
```

const greeting = function(name){
    return 'Hello ${name}`;
}
```

**argument**
A hardcoded value passed into a function when it is executed. In the example below `'John'` in betwene the parentheses is the argument.
```
greeting('John')
```


**call**
An action which executes (or fires) the funciton.


**callback function**
Executes within the function to which it is passed as an argument.
```
const cb = function (){
    console.log('I am the callback.');
}
function greeting(name, fn){
    fn();
    return `Hello ${name}`;
}
greeting('Billy',cb)

```


**function**
There are two contexts. One is the funciton definition itself. Another is the code within the definition which excutes when it is called and which sometimes returns a value. 


**function body**
Contains the code of the function itself within a set of curly braces. 


**function declaration**
Uses the _function_ keyword to declare a named function . The name of the function immediatly follows the _function_ keyword.
```
function greeting() {
 return 'Hello, you sure look nice today.';
}

```


**function expression**
A function that is the initialization of a variable declaration. 
The variable which is named, stores the fucntion but the function itself is considered anonymous or unnamed. 

```
const greeting=function() {
 return 'Hello you sure look nice today.';
}
```



**hoisting**
Allows a funciton declartion to be used in code before it is declared.


**IIFE** 
An _immediately invoked function expression_ is a function that is executed directly by the JavaScript engine and not by other code.
```
(function (){
    return 'Hello';
}) ();
```
IIFE can also have arguments and parameters. 

```
(function (name){
    return `Hello,${name}.`;
    })('Carlos')

```


**named function**
See function declartion. 


**parameter**
A placeholder whose value equals the argument passed into the function when it is called. This value is accessed only within the function itself.
In the example below 'name' inside of the parentheses is the parameter.
```
function greeting(name) {
 return `Hello, ${name},you sure look nice today.`;
}

```


**parentheses**
The parentheses have two purposes. One is to call or excute a function. Another is part of the syntax to define the function. In the former, it may contain arguments. In the latter, it may contain parameters.


**return**
If implemented, it executes the last line of a function's code. It precedes a data type or a collection to be returned. We say that a function closes or exits when the code follows _return_ excutes which also means that any lines beneath it are ignored. 


**scope**
Refers to what values are available in memory at a given time during the execution of code.