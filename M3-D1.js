/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */
 const sumTwoInt = function (a, b) {
    if (typeof a === "number" && typeof b === "number") {
      if (a === b) {
        return (a + b) * 3;
      } else {
        return a + b;
      }
    } else {return "One of the parameters is not a number"}   
 }

 console.log(sumTwoInt(2, 2))


/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */

const checkIfIs50 = function(a, b){
    if (typeof a === "number" && typeof b === "number") {
        if (a === 50 || b === 50 || a + b === 50) {
            return true
        } else {return false}
    } else {
      return "One of the parameters is not a number";
    }  
}

console.log(checkIfIs50(25, 50));

/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */

const removeChar = function (str, position) {
    
    let charToRemove = str.slice(position, position + 1);
    let stringBeforeRemovedChar = str.slice(0, position);
    let stringAfterRemovedChar = str.slice(position+1);
    return stringBeforeRemovedChar.concat(stringAfterRemovedChar);
}

console.log(removeChar("Martin", 0))

/* 4. Create a function to find and return the largest of three given integers. */
/* Get Back to This One: */

const findLargestOfThree = function (a, b, c) {

    if (a > b && b > c) {
        return a 
    } else if (b > a && a > c) {
        return b
    } else if (c > a && a > b) {
        return c
    } else if (b > a && c > a) {
        return b
    }
} 


console.log(findLargestOfThree(51, 31, 121));


/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */

const checkRange = function (a, b) {

    if ((a <= 60 && a >= 40 || a <= 100 && a >= 70) && (b <= 60 && b >= 40 || b <= 100 && b >= 70)) {
        return true
    } else {
        return false
    }
}

console.log(checkRange(100, 100));

/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */

const copyTextNTimes = function (text, copies) {
    
    let newText = ""; 
    for (i = 0; i < copies; i++) {
        newText += text; 
    }
    return newText;
}

console.log(copyTextNTimes("Bleh", 3)) 

/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */

const displayCityThatBeginsWith = function (city) {
    let begining1 = "Los";
    let begining2 = "New";

    if (city.slice(0,3) === begining1 || city.slice(0,3) === begining2 ) {
        return true
    } else {
        return false
    }
} 

console.log(displayCityThatBeginsWith("LosddddNev York"));

/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */

const sumArray = function (arr) {
    let a = 0;
    for (i = 0; i < arr.length; i++) {
        a += arr[i];
    }
    return a;
} 

console.log(sumArray([20, 40, 10]))

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */
const checkOneOrThreeInArray = function (arr) {
    for (i=0; i < arr.length; i++) {
        if (arr[i] === 1 || arr[i] === 3) {
            return true
        } 
    }

    return false; 
}

console.log(checkOneOrThreeInArray([0, 0, 0, 0,0,0,0,0,0,0,2,0,2]));

/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */ 

const checkOneOrThreeInArrayReversed = function (arr) {
      for (i = 0; i < arr.length; i++) {
        if (arr[i] === 1 || arr[i] === 3) {
          return false;
        }
      }
      return true;
    };

console.log(checkOneOrThreeInArrayReversed([2,2,2,4,5,6]));

/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */ 

const findLongestString = function (arr) {
    let max = arr[0];

    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > max.length) {
            max = arr[i];
        }
    }
    return max;
}    

const myArrofStrings = ["asd", "as", "not1"];

console.log(findLongestString(myArrofStrings));

/* 12. Create a function to find the types of a given angle:
  1. Acute angle ⇒ between 0 and 90 degrees. Return `acute`.
    2. Right angle ⇒ 90 degree. Return `right`
    3. Obtuse angle ⇒ between 90 and 180. Return `obtuse`
    4. Straight angle ⇒ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/

const findTypeOfAngle = function(angle) {
    
    if (angle > 0 && angle < 90) {
        return "acute"
    } else if (angle === 90) {
        return "right"
    } else if (angle > 90 && angle < 180) {
        return "obtuse"
    } else if (angle === 180) {
        return "straight"
    } else {
        return "Not a correct angle value"
    }
}

console.log(findTypeOfAngle(180));

/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */

const findIndexOfMax = function (arr) {
  let max = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return arr.indexOf(max);
};  

console.log(findIndexOfMax([-10, -4, -1, -2, -5]));

/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */

const findMaxOfEven = function (arr) {
  let max = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max && arr[i] % 2 === 0) {
      max = arr[i];
    }
  }
  return max;
};

console.log(findMaxOfEven([2, 4, 5, 6, 7, 9 , 11]));

/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */
const checkIfOneOfTwoIsPositiveAndOtherIsNegative = function(a, b) {
    if (a < 0 && b > 0) {
        return true
    } else if (a > 0 && b < 0) {
        return true
    } else {
        return false
    }
}

console.log(checkIfOneOfTwoIsPositiveAndOtherIsNegative(-1, 1));

/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */

const modifyStringStrangely = function (str) {
    if (str.length < 3) {
        return str.toUpperCase();
    }
    let firstThreeChars = str.slice(0, 3).toLowerCase();
    let restOfChars = str.slice(3).toUpperCase();

    return firstThreeChars.concat(restOfChars);
}

console.log(modifyStringStrangely("strive"));

/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */
const sumSomeNumbersInRange = function (a, b) {
    let sum = a + b; 
    if (sum > 50 && sum < 80) {
        return "`65`"
    } else {
        return "`80`"
    }
}

console.log(sumSomeNumbersInRange(1, 52));

/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor ⇒ return `Diego`
    The number has 5 as a factor ⇒ return `Riccardo`
    The number has 7 as a factor ⇒ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    ⚠️ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */

const strangeFunction18 = function (x) {
    let is3Factor = x % 3 === 0;
    let is5Factor = x % 5 === 0;
    let is7Factor = x % 7 === 0;

    if (is3Factor && is5Factor && is7Factor) {
      return "DiegoRiccardoStefano";
    } else if (is3Factor && is5Factor) {
      return "DiegoRiccardo";
    } else if (is3Factor && is7Factor) {
      return "DiegoStefano";
    } else if (is5Factor && is7Factor) {
      return "StefanoRiccardo";
    } else if (is3Factor) {
      return "Diego";
    } else if (is5Factor) {
      return "Riccardo";
    } else if (is7Factor) {
      return "Stefano";
    } else {
        return x; 
    }    
}

console.log(strangeFunction18(42));

/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */

const getAcronym = function (str) {
    let arr = str.split(" ");
    let acronym = [];    
    for (i = 0; i < arr.length; i++) {
        acronym.push(arr[i].charAt(0).toUpperCase());
    }
    return acronym.join("");    
};


let string1 = "british boring corporation";

console.log(getAcronym(string1));


/* EXTRA */

/* 1. Given a string (as a parameter), return the character that is most commonly used. */
 
const findMostUsedChar = function (str) {
    let arrOfChars = str.split("");

    return arrOfChars
}   

console.log(findMostUsedChar("Martinnnn"));

/* DOWNLOADED FROM: https://www.geeksforgeeks.org/return-maximum-occurring-character-in-the-input-string/ */

let ASCII_SIZE = 256;

function getMaxOccuringChar(str) {
  // Create array to keep the count of individual
  // characters and initialize the array as 0
  let count = new Array(ASCII_SIZE);
  for (let i = 0; i < ASCII_SIZE; i++) {
    count[i] = 0;
  }

  console.log(count);

  // Construct character count array from the input
  // string.
  let len = str.length;
  for (let i = 0; i < len; i++) {
    count[str[i].charCodeAt(0)] += 1;
  }
  let max = -1; // Initialize max count
  let result = " "; // Initialize result

  // Traversing through the string and maintaining
  // the count of each character
  for (let i = 0; i < len; i++) {
    if (max < count[str[i].charCodeAt(0)]) {
      max = count[str[i].charCodeAt(0)];
      result = str[i];
    }
  }
  return result;
}

console.log(getMaxOccuringChar("Martiiinn"));

/* 2. Check if two strings (passed as parameters) are anagrams of each other. 
    Do not consider spaces or punctuation, make the whole word lower case. 
    Return `true` if the words are anagram, return `false` if they aren't. */


/* 3. Given a word and a list of possible anagrams (both passed as parameters), return the correct list of anagrams: 
    Ex. "listen" is the word, ["enlist", "google", "inlets"] are the possibilities: the output should be ["enlist", "inlets"]
*/

/* 4. Given a string (as parameter), return `true` if the string is a palindrome or `false` if it is not. Include spaces and punctuation. */


/* 5. Given an integer (as parameter), return an integer which digitas are the same as the original number, but reversed.
    Ex: 189 â‡’ 981 */


/* 6. Write a function that takes a positive number X as a parameter. The function should output (as console.log) a step shaped string with X level usign the `#` character. Make sure the steps are on the right hand side:

	2 steps:
        '# '
        '##'
    3 steps:
        '#  '
        '## '
        '###'
    4 steps:
        '#   '
        '##  '
        '### '
        '####'
*/ 


/* 7. Create a function that, given a string as a parameter, returns a new string which is the original string, but reversed: 
"hello" â‡’ "olleh" */


/* 8. Create a function that takes an array and a "chuck size" as parameters. 
    Divide the array into subarrays with the "chunk size" as lenght: 
    array: [1, 2, 3, 4], chunk size: 2 â†’ [[ 1, 2], [3, 4]]
    array: [1, 2, 3, 4, 5], chunk size: 4 â†’ [[ 1, 2, 3, 4], [5]]
*/


/* 9. Write a function that accepts a positive number X as parameter. 
The function should console.log a pyramid shape with N levels built using the `#` character. 
Example with X = 3

```
 '  #  '
 ' ### '
 '#####'
```
*/



/* 10. Write a function that accepts an integer N and returns a NxN spiral matrix:
Ex: 

N = 2
[[1, 2],
[4, 3]]
N = 3
[[1, 2, 3],
[8, 9, 4],
[7, 6, 5]]
N = 4
[[1, 2, 3, 4],
[12, 13, 14, 5],
[11, 16, 15, 6],
[10,  9,  8, 7]]

*/