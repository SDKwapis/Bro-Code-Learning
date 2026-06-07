// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function(arr) {
    for (i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        if(arr[i] % 3 == 0 && arr[i] % 5 == 0) {
            console.log("Fizzbuzz");
        } else {
            if(arr[i] % 5 == 0) {
                console.log("Buzz")
            } else {
        } if(arr[i] % 3 == 0) {
            console.log("Fizz")
        } else {
            console.log(arr[i]);
        }
    };
}};



fizzBuzz([13, 14, 15, 16, 17, 18, 19, 20]);