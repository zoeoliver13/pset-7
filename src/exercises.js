function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }
  if(a.length<1||b.length<1){
    return false;
  }
  if(a[0]===b[0] || a.pop()===b.pop()){
    return true;
  }
  else{
    return false;
  }
}

function endsMeet(values, n) {
  var array = [];

  if (!values || values.length === 0) {
    return array;
  }
  if(values.length<n){
    return array;
  }
  if(n%1!==0||n<0){
    return array;
  }
  else {
      if (n === 0) {
        return values;
      } else {
        for (let i = 0; i < n; i++) {
          if (!(values[i] === undefined)) {
            array.push(values[i]);
          }
        }
        for (let i = n; i > 0; i--) {
          if (!(values[values.length - i] === undefined)) {
            array.push(values[values.length - i]);
          }
        }
        return array;
      }
   }
}

 function difference(numbers) {
   var smallest_number = Number(Math.min.apply(null, numbers));
   var largest_number = Number(Math.max.apply(null, numbers));
   var output = largest_number - smallest_number;

     if (!numbers || numbers.length === 0) {
       return undefined;
     }
     if(numbers.length<1){
       return undefined;
     }
     if(Number.isNaN(numbers)){
       return undefined;
     }
    else{
      return output;
    }
  }

function max(numbers) {
  var first_element = numbers[0];
  var middle_element = numbers[Math.floor(numbers.length/2)];
  var last_element = numbers[numbers.length-1];
  var array = [];
  var largest = Number(Math.max.apply(null, array));

  if (!numbers || numbers.length === 0) {
    return undefined;
  }
  if (numbers.length % 2 === 0 || numbers.length < 3 ){
    return undefined;
  }
  if (Number.isNaN(numbers)){
    return undefined;
  }
  else{
    array.push(first_element, middle_element, last_element);
    return largest;
  }
}

function middle(values) {
  var middle = Math.floor(values.length/2);
  var array = [];

  if (!values || values.length === 0) {
    return undefined;
  }
  if (numbers.length % 2 === 0 || numbers.length < 3 ){
    return undefined;
  }
  else{
    array.push(values[middle - 1], values[middle], values[middle + 1]);
    return array;
  }
}

function increasing(numbers) {
  var num = 0;
  var last = -1;

  if (!numbers || numbers.length === 0) {
    return false;
  }
  if (numbers.length < 3){
    return false;
  }
  if(Number.isNaN(numbers)){
    return false;
  }
  if(!isInteger(number)){
    return false
  }
    for (i = 0; i < numbers.length; i++) {
      if (numbers[i] === last + 1) {
        last = numbers[i]
         if (numbers[u + 1] === last + 1) {
          return true;
          num = 1;
          break;
        }
        else {
        last = -1;
      }
    }
      else {
        last = numbers[i];
      }
    }
    if (num === 0) {
      return false;
    }


function everywhere(values, x) {
  
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
