// A Narcissistic Number is a number which is the sum of its own digits,
// each raised to the power of the number of digits in a given base.
//In this Kata, we will restrict ourselves to decimal (base 10).



// For example, take 153 (3 digits):
//  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

//should return true if :
  //1
  //126    =====> 1 + 125
  //153    ======> 126 +  27
  //true


// function narcissisticNum(num) {
//     var result = 0;

//     var arrNumbers = ("" + num).split("");
//     console.log(arrNumbers);

//     for (var i = 0; i < arrNumbers.length; i++) {

//     var power = arrNumbers.length;
//     result += parseInt(Math.pow(arrNumbers[i], power));
    
//     }

//     return result === num;
// };

// ES6 
var narcissisticNum = (value) => {
    var values = (value+ '').split('');
    return values.length === 1 || 
        // Looping through values array and get the sum of all values
        values.map( c => Math.pow(parseInt(c), values.length))
        .reduce((p, c) => p + c) === value; 
}


console.log(narcissisticNum(153));
