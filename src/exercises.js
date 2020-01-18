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
}
function middle(values) {
  // write your code here
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
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
