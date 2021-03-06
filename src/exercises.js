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
     if(numbers.some(isNaN)){
       return undefined;
     }
    else{
      return output;
    }
  }

function max(numbers) {
  if (!numbers || numbers.length === 0) {
    return undefined;
  }
  if (numbers.length % 2 === 0 || numbers.length < 3 ){
    return undefined;
  }
  if (numbers.some(isNaN)){
    return undefined;
  }
  else{
    var first_element = numbers[0];
    var middle_element = numbers[Math.floor(numbers.length/2)];
    var last_element = numbers[numbers.length-1];
    var array = [];
    var largest = Number(Math.max.apply(null, array));
    array.push(first_element, middle_element, last_element);
    return  Number(Math.max.apply(null, array));
  }
}

function middle(values) {

  if (!values || values.length === 0) {
    return [];
  }
  if (values.length % 2 === 0 || values.length < 3 ){
    return [];
  }
  else{
    var middle = Math.floor(values.length/2);
    var array = [];
    array.push(values[middle - 1], values[middle]);
    return array;
  }
}

function increasing(numbers) {
  if (numbers == undefined || numbers == []) {
     return undefined;
   } else if (numbers.length < 3 || numbers.some(isNaN)) {
     return undefined;
   } else {
     for (let i = 1; i < numbers.length; i++) {
       if ((numbers[i - 1] + 1) === numbers[i]) {
         i++
         if ((numbers[i - 1] + 1) === numbers[i]) {
           return true;
           break;
         } else {
           continue;
         }
       } else {
         continue;
       }

      }
     return false;
   }
  }
  //debug^ 

function everywhere(values, x) {
  let nums = 1;
  if (!values ) {
    return false;
  }
  if(values.length < 1 ){
    return false;
  }
  if(x === undefined){
    return false;
  }
  else {
    for (let i = 0; i < values.length; i++) {
      if (values[i] !== x) {
        if (values[i - 1] === x || values[i + 1] === x) {
           nums = false;
        } else {
          return false;
        }
      }
    }
  }
  return true;
}


function consecutive(numbers) {
  var num;
  var one;
  var two;
  var three;

  if (!numbers) {
    return false;
  }
  if (numbers.length < 3){
    return false;
  }
  if(numbers.some(isNaN)){
    return false;
  }
  else{
    for (let i = 0; i< numbers.length - 1; i++) {
     if (Number.isInteger(numbers[i] !== true)) {
       return false;
       num = false;
     }
   }

   for (let j = 0; j < numbers.length - 2; j++) {
     three = numbers[j + 2];
     two = numbers[j + 1];
     one = numbers [j];

   if (three % 2 === 0 && two % 2 === 0 && one % 2 === 0) {
     return true;
     num = true;
   } else if (three % 2 === 1 && two % 2 === 1 && one % 2 === 1) {
     return true;
     num = true;
   }
  }
  if (num == true) {
    return true;
  } else {
    return false;
    }
   }
  }



function balance(numbers) {
  var num;
  var sum;
  var half = 0;
  var otherHalf = 0;

  if (!numbers) {
    return false;
    num = false;
  }
  if (numbers.length < 2){
    return false;
    num = false;
  }
  if(numbers.some(isNaN)){
    return false;
    num = false;
  }else {
    for (let i = 0; i < numbers.length - 1; i++) {
      if (Number.isInteger(numbers[i]) === false){
          return false;
          num = false;
      }
     }
  for (let j = 0; j < numbers.length; j++){
       otherHalf = otherHalf + numbers[j];
     }
   sum = otherHalf / 2;
   if(otherHalf % 2 === 1) {
       return false;
       num = false;
   }
   for (let k= 0; k < numbers.length - 1; k++) {
       half = half + numbers[k];
       if (sum === half) {
           return true;
           num = true;
       }
   }
   if (num === true) {
       return true;
   } else {
       return false;
   }
  }
 }

function clumps(values) {
  if (!values){
    return -1;
  }else{
    var count = 0;
    let clump = null;
    for (i = values.length-1; i >= 0; i--){
      if(values[i]===values[i-1] && values[i]!==clump){
        count++;
        clump = values[i];
      }else if(clump !== values[i]){
        clump = null;
      }
    }
    return count;
  }
}

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
