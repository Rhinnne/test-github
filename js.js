//reverse a string
function reverseString(str){
    let reversedStr ="";
    for (let i = str.length-1; i>=0; i--){
        reversedStr += str[i];
    }
    return reversedStr;
}
reverseString("dog");

//Find the Longest Word in a String
function findLongestWordLength(str) {
    let longestLength = 0;
    let currentLength = 0;
    for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      if (currentLength > longestLength) {
        longestLength = currentLength;
      }
      currentLength = 0;
    } else {
      currentLength++;
    }
  }
  if (currentLength > longestLength) {
    longestLength = currentLength;
  }
  
  return longestLength;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

  //Return Largest Numbers in Arrays
  function largestOfFour(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
      let largestNumber = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
      results[i] = largestNumber;
    }
  
    return results;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

  //Confirm the Ending
  function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
  }
  
  confirmEnding("Bastian", "n");

  //Repeat a String Repeat a String
  function repeatStringNumTimes(str, num) {
    let accumulatedStr = "";
    for (let i = 0; i < num; i++) {
      accumulatedStr += str;
    }
    return accumulatedStr;
  }
  
  repeatStringNumTimes("abc", 3);

  //check if a value is boolean (typeof)
  function booWho(bool) {
    return typeof bool === "boolean";
  }
  
  booWho(null);

  //capitalized the first letter of each word
  function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
  }
  
  titleCase("I'm a little tea pot");

  //Mutations
  function mutation(arr) {
    const test = arr[1].toLowerCase();
    const target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
  }
  
  mutation(["hello", "hey"]);

  //Chunky Monkey
  function chunkArrayInGroups(arr, size) {
    let temp = [];
    const result = [];
    for (let a = 0; a < arr.length; a++) {
      if (a % size !== size - 1) temp.push(arr[a]);
      else {
        temp.push(arr[a]);
        result.push(temp);
        temp = [];
      }
    }
    if (temp.length !== 0) result.push(temp);
    return result;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);