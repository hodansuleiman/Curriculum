# Iteration 102
## Declaratively looping over arrays. 

### Terms 
**declarative programming**
Hides the execution steps taken to achieve a result- the WHAT is more important than the NOW.


**method**
A function avaliable to a specific data type(e.g string) or collection (e.g. array)

### Methods 
In each of the mathods below, we provide a callback function for at least one argument. 

**`.forEach`**
Executes logic on each item of an array. The return value is `undefined`.
```Javascript
const list = ['apples', 'rice', 'soup'];
list.forEach(function(item){
    console.log(item);
});

const list = ['apples', 'rice', 'soup'];
list.forEach(function(item,index){
    console.log('item ${index + 1} is ${item}`);
});

```

**`.map`**
Returns a new array that manipulates each item of the array on which it is called in some way. 

```Javascript
const list = ['a','b','c'];
const newList = list.map(function(item,index){
return item.toUpperCase();
});
```

**`.filter`**
returns a new array that is a subset of items of the array on which it is called. 
```Javascript
const list = [1,2,3,4];
const evens = list.filter(function(item,index){
return item % 2===0;
});

```

**`.reduce`**
Returns a single combined value which aggregates the items of the array on which it called in some way. 

```Javascript
const list = [1,2,3,4];
const total = list.reduce(function(sum, item){
return sum + item
},0);
```