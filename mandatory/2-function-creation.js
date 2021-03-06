/*
Write a function that:
- takes an array of strings as input
- removes any spaces in the beginning or end of the strings .trim()
- removes any forward slashes (/) in the strings
- makes the string all lowercase .toLowerCase()

*/

function tidyUpString(strArr) {
  var newArr = strArr.toString();
  var strEdit = newArr.replace("/",'');
  var lowerCase = strEdit.toLowerCase();
  var splitStr = lowerCase.split(",");
  let strTrim = splitStr.map(el=> el.trim());
   return strTrim;
}


/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

function validate(num) {
  if (typeof(num) === "number" && num % 2 === 0 && num <= 100){
    return true;
  }
  else{
    return false;
  }
}

/* 
Write a function that returns a copy of the given array arr, but with the element at the given index, index removed.
The function must NOT change the original array, arr.
function removeItemFromArray(array, n) {
    const newArray = [];
    for ( let i = 0; i < array.length; i++) {
        if(array[i] !== n) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
const result = removeItemFromArray([1, 2, 3 , 4 , 5], 2);
*/

function remove(arr, index) {  //?.splice()
    arrEdited = []; // complete this statement
    n = index;
    for (i = 0; i< arr.length; i++) {
        if(arr[i] !== arr[n]) {
          arrEdited.push(arr[i]);
        }
    }
    return arrEdited;
}

/*
Write a function that:
- takes an array of numbers as input
- returns an array of strings formatted as percentages (e.g. 10 => "10%") ? map()
- the numbers must be rounded to 2 decimal places  toFixed(2)
- numbers greater 100 must be replaced with 100
*/

function formatPercentage(arr) {
  var percentArr = [];

  for (let i = 0; i< arr.length; i++) {
    if (arr[i] > 100) {
      percentArr.push("100%");
    }
    else percentArr.push(`${parseFloat(arr[i].toFixed(2))}%`);
  }
  return percentArr; //Brett solution.
}

/* ======= TESTS - DO NOT MODIFY ===== */

const util = require("util");

function test(test_name, actual, expected) {
  let status;

  let isEqual;
  if (Array.isArray(expected)) {
    isEqual = arraysEqual(actual, expected);
  } else {
    isEqual = actual === expected;
  }

  if (isEqual) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

test(
  "tidyUpString function works - case 1",
  tidyUpString(["/Daniel ", "irina ", " Gordon", "ashleigh "]),
  ["daniel", "irina", "gordon", "ashleigh"]
);
test(
  "tidyUpString function works - case 2",
  tidyUpString([" /Sanyia ", " Michael ", "AnTHonY ", "   Tim   "]),
  ["sanyia", "michael", "anthony", "tim"]
);

test("validate function works - case 1", validate(10), true);
test("validate function works - case 2", validate(18), true);
test("validate function works - case 3", validate(17), false);
test("validate function works - case 4", validate("Ten"), false);
test("validate function works - case 5", validate(108), false);

test("remove function works - case 1", remove([10, 293, 292, 176, 29], 3), [
  10,
  293,
  292,
  29,
]);
test(
  "remove function works - case 2",
  remove(["a", "b", "c", "d", "e", "f", "g"], 6),
  ["a", "b", "c", "d", "e", "f"]
);

test(
  "formatPercentage function works - case 1",
  formatPercentage([23, 18.103, 187.2, 0.372]),
  ["23%", "18.1%", "100%", "0.37%"]
);
