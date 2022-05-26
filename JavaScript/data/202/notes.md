# JavaScript Data 202 
## The syntax to read data depends on the data type or the data collection in which types  are found. 

## arrays (indices)
we use an index to read data from an array by enclosing the indext value within square brackets. 
 ```
 const shoppingList = ['apples', 'celery', 'bread'];
console.log(shoppingList[0]);// --> apples
 ```

 ## objects (bracket notion or notion)
 We use bracket notion or dot notion to read data. 
 ```
const car = {
color:'green',
mileage: 67302,
isNew: false 
};
console.log(car['mileage']) // --> 67302
console.log(car.mileage) // --> 67302
 ```

 ## strings, boolean, and numbers
 Refer to variable name to read the data. 
 ```
const name = 'Paul';
console.log(name); // --> Paul 
 ```