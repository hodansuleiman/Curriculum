### find a needle in a haystack 

//Can you find the needle in the haystack?
//Write a function findNeedle() that takes an array full of junk but containing one "needle"
//After your function finds the needle it should return a message (as a string) that says:
//"found the needle at position " plus the index it found the needle, so:
//Example(Input --> Output)
//["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

```
function findaNeedle(haystack){
    for (let i=0, i<haystack.length;i++){
    if (haystack [i] === 'needdle') {
    return 'found the needle at the position ${1};
}
}
}

```

### If you can't sleep, just count sheep!!
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

```
var countSheep = function(num){
    if (!num) return ``;
    let response =``;

    for(let i= 1; i<= num; i++){
        response += ` ${i} sheep...`; // response = response + `${i} sheep ...
        }
    } return response;
}

```

### Quarter of the year 
//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
```
// const quarterOf=(month)=> // we know that month is going to be a number between 1-12 ansd we need to return the quarter that it belongs to

const quarterOf=(month)=>{
if (month>=1 && month<=3)return 1; // if this month is greater than whatever is in column one and less than whatever is in column 2 return corresponding digit 
if (month>=4 && month<=6)return 2;
if (month>=5 && month<=9)return 3;
if (month>=10 && month<=12)return 4;
}

// or option B

const months ={
"1":1,
"2":1,
"3":1,
"4":2,
"5":2,
"6":2,
"7":3,
"8":3,
"9":3,
"10":4,
"11":4,
"12":4,

return months[month];
}

```
## How good are you really? 
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
//You receive an array with your peers' test scores. Now calculate the average and compare your score!
//Return True if you're better, else False!

```
function betterThanAverage(classPoints, yourPoints) {
  if (yourPoints > avg) 
    return true;
  } else {
    return false;
    }


or 
functionbetterThanAverage(everyone,you){
let average= null;
let total =0;
for{let i = 0; i,everyone.length; i++}{ // iteration 
total =+ everyone[i]; // total = total + eveyrone[i]
}

avverage = total/everyone.length; //give us average 

return you > average; // javascript logical operator will return true or false 
}

OR 

functionbetterThanAverage(x,y){
    const total = x.reduce(function(preValue,currValue){
        return preValue + currValue;
    }, 0);

    const average = total/x.length;
    return y> average;
}


//const sumWithInitial= array1.reduce(
//(previousValue,currentValue) => previousValue + currentValue,
//initialValue
//);

```

## Fake Binary 
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string
```
function fakeBin(x){
const strArr = x.split(''); // the split method coverts string into an array, and we have to pass in an empty string ''
const result = strArr.map(x => { // iteriate over this array and for each one of theses what do you want me to return ?
if (x<5) return 0;
if (x>=5) return 1;
});
return result.join(''); // convert an array back to string 
} 

OR 
 return strArr.map(x => {
if (x<5) return 0;
if (x>=5) return 1;
 });.join('');  // saves time on code 
```

## Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example(Input => Output):
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

```
function digitize(n) {
  //console.log(typeof n);
  //console.log(typeofn.toString()); // convert number to string, and what tells us data type
 // console.log(n.tostring().split('')); // use split method to convert string into an array
 // console.log(n.tostring().split('').reverse()); // reverse method reverse the items in an array 
 const strArr = n.toString().split('').reverse();
const result = strArr.map(item => item *1): // the map function is iteriating and for each item it is returning the item itself multiplied by 1
//console.log(result);
return result;
}
```

## Regex validate PIN code

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
//Examples (Input --> Output)
//"1234"   -->  true
//"12345"  -->  false
// "a234"   -->  false

```
function validatePIN (pin) {
return /^(\d{4}|\d{6})$/.test(pin)
}
```

## Odd or Even?

// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
// Examples:
// Input: [0]
//Output: "even
//Input: [0, 1, 4]
//Output: "odd"
//Input: [0, -1, -5]
//Output: "even"

...
  function oddOrEven(array) {
    let sum= 0;
    for(let i= 0; i< array.length; i++){
    sum += array[i]; // add the value of the index in the array to the sum 
    }
    if (sum % 2 === 0){ // when divided by 2 does it have a remainder the modulus operator
    return 'even'
    }
    return 'odd'
    )


function oddOrEven(array) {
   let sum = array.reduce((a, b) => a + b, 0); // this is called a callback function. reduce can take several arguments and is used to add all the items into an array
   // console.log(sum);
   return sum % 2 === 0? 'even': 'odd' // this is called Conditional (ternary) operator
   }
...

## Disemvowel Trolls
// Trolls are attacking your comment section!
//A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//Your task is to write a function that takes a string and return a new string with all vowels removed.
//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//Note: for this kata y isn't considered a vowel.

```
function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']; // this asks is this a vowel? 
    const _str= str.split(''); // we need to convert the vowel string into an array 
    //console.log(_str); // // now we can look at each one individually and see if it is a vowel
    //return str; // now we can look at each one individually and see if it is a vowel
    for (let i=0; i<_str.lentgh; i++);
    if(vowels.includes(_str[i].toLowerCase())) {
        _str[i] = '';
    }
    return str.join(''); // turn itself back into an array 
    }

}

```

## Total amount of points
 // Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
// For example: ["3:1", "2:2", "0:1", ...]
// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
//if x > y: 3 points
//if x < y: 0 point
//if x = y: 1 point
//Notes:
//there are 10 matches in the championship
//0 <= x <= 4
//0 <= y <= 4

```
function points(games) {
  for (let i= 0; i< games.length; i++){
    const item = games[i].split(' :')); // cash item so we can console log the item 
    // console.log(games[i].split(' :')); // run to test to see new array was created , we added the colon to remove it
    // console.log(item[0] 8 item[1])

    const x =item[0];
    const y = item[1];
    console.log(x,y);

    or 
let total= 0
const [x,y] = games[i].split(' :')); // destructure items inside of array  when we are inside of forloop 
   if (x > y) total += 3;
    if (x < y) total += 0;
    if (x === y) total += 1;

  }
   return total;
}
```

## Twice as old
// Your function takes two arguments:
//current father's age (years)
//current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
```
function twiceAsOld(dadYearsOld, sonYearsOld) {

    const y2 = y*2 ; declare a variable the son age times 2 
    
    
    if (x===y2) return 0; // if father is already twice as old return 0
  
    if(x>y2){  // if the father is older we want to do one thing (how many years ago?)
    return x-y2; // will give us how many years ago 
  }
    if (x<y2){   //  if the father is  younger we want to do another (how many years from now?)
return y2 -x; // give us difference 
  }
}

```

## Check same case

// Write a function that will check if two given characters are the same case.
//If either of the characters is not a letter, return -1
//If both characters are the same case, return 1
//If both characters are letters, but not the same case, return 0
//Examples

//'a' and 'g' returns 1

//'A' and 'C' returns 1

// 'b' and 'G' returns 0

//'B' and 'g' returns 0

// '0' and '?' returns -1

```

function sameCase(a, b){
  if (a.length !== 1 || b.length !== 1){
    return -1;
  } 
 
  // IsAuppercase is going to be a boolean value. 
  // This boolean is going to be false if orginal a is lowercase. 
  // This boolean is going to be true if orginal a is upper case. 
 const isAUpperCase= a.toUpperCase()=== a   
 const isBUpperCase =  b.toUpperCase()=== b
 if (isAUpperCase===true && isBUpperCase===true){
    return 1
 }
if (isAUpperCase===false && isBUpperCase===false){
     return 1
  }
  return 0
}          

```

## Check same case
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
//Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

```
function sameCase(a, b){
const characterA= a.charCodeAt(); // charCodeAt returns a number range where the letter falls 
const characterB= a.charCodeAt(); // // charCodeAt returns a number range where the letter falls 

const isUpperCase = code => {
return (code>=65 && code <= 90)
};

const islowerCase = code => {
return (code >=97 && code <=122)
};


const isLetter = code => {
 return isUpperCase(code)) || isLowerCase(code));
    return 
  };
  

const aIsLetter = isLetter(characterA); // cashing the results of function, pass in the code for a first and get true or false
const bIsLetter = isLetter(characterB); // cashing the results of function, pass in the code for b second and get true or false

const checkIsLetter= (x,y)=>{
  return(
//is x a letter 
(( x>=65 && x<=90)|| (x >= 97 && x <= 122)) &&

//is y a letter 
(( y>=65 && y<=90)|| (y>= 97 && y <= 122))
  );
};

const isLetter = checkisLetter (characterA, characterB);
const checkIsMatch = (x,y) =>{
  return(
( x>=65 && x<=90) &&  y>=65 && y<=90) || 
(x >= 97 && x <= 122)) && y>= 97 && y <= 122)) 
);
};



const is Match = checkIsMatch(characterA, CharacterB);
if (isMatch){
  return 1;
} else {
  return 0;
}

]






//return aIsLetter && bIsLetter ? 1: -1 // if both of these are true we will return a 1, and if one of them them is //false we will return a -1
//}


//(characterA>= 65 && characterA = 90 )|| (characterA >= 97 &&  characterA <= 122 )) { 
// if it is an uppercase letter or lowercase letter , it is a letter so we can do something with it
//console.log('a is a letter')
//}

//if((characterB>= 65 && characterA = 90 )|| (characterB >= 97 &&  characterB <= 122 )) { 
//console.log('b is a letter')
//}
//} 




```

