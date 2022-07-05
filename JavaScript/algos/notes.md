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
/// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

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
