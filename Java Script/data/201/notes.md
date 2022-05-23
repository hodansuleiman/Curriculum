# JavaScript Data 201
## Data types can be collection in other structures like objects and arrays. 

### Objects 
An object describes something. It lives inside and closing curly braces and is organize as key:value pairs, seperated by commas. The key and the value are themselves separated by a `:`. 
```
const car = {
color:'green',
mileage: 67302,
isNew: false 
};
```


### Arrays
An array is list of items. It's defined by opening and closing square brackets. The items in the array are seperated by commas. Each item in an array is indexed with a number. Arrays can contain all other data types as well as objects. 
```
const shoppingList = ['apples', 'celery', 'bread'];
const ages = [7,7,8,8,7,5];
const cars = [
    {
        color:'green',
        mileage: 67302,
        isNew: false 
    },
        {
        color:'red',
        mileage: 37412,
        isNew: false 
    },
        {
        color:'blue',
        mileage: 167209,
        isNew: false 
    },
        {
        color:'yellow',
        mileage: 14301,
        isNew: false 
    }
];
```