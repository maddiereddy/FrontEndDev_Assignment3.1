/*
Create an array and pass in different functions as rest parameter
● Find out length of array using getArrLength()
● Multiply by 2 to all element and display new array using multiplyByTwo()
● Sort rest arguments using sortRestArgs()
*/

//display length of array using getArrLength()
function getArrLength(...theArgs){
    console.log(`Length: ${theArgs.length}`);
}

let testArray1 = [1, 2, 3, 4, 5, 6, 7, 8];
let testArray2 = ['dog', 'cat', 'book', 'xray'];
let testArray3 = [];

getArrLength(...testArray1);
getArrLength(...testArray2);
getArrLength(...testArray3);

//Multiply by 2 to all elements in array
function multiplyByTwo(...numbers) {
    return numbers.map(number => number * 2);
}

//display new array using multiplyByTwo()
let newArray = multiplyByTwo(...testArray1);
console.log(newArray);

//Sort rest arguments using sortRestArgs()
function sortRestArgs(...theArgs) {
  console.log(theArgs.sort());
}

sortRestArgs(...testArray2);
