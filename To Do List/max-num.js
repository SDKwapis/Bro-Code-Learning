// Write code to return the largest number in the given array
var arr = [3, 1, 17, 5, 6];

var maxNum = function(arr) {
    let winner = 0
    for (i = 0; i <= arr.length; i++) {
        let number = arr[i]
        console.log(`Console Test: ${number}`);
        if(number <= winner){
            console.log(winner)
        } else {
            console.log(number)
        }
    }
};



maxNum(arr);