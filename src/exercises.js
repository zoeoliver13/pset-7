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
  if (!values || values.length === 0) {
    return [];
  }
  if(values.length<n){
    return [];
  }
  if(n%1!==0||n<0){
    return [];
  }
  else{
    return [
      n[0],
      n.pop()
    ]
  }
}

 function difference(numbers) {
   var smallest_number = Math.min(numbers);
   var largest_number = Math.max(numbers);
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
      return [largest_number - smallest_number]
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
