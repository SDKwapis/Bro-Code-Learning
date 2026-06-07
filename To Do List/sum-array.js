// Write code to add all the numbers in `arr` and return the total

var sumArray = function (arr) {
let answer = 0
for (i = 0; i < arr.length; i++) {
    answer += arr[i];
}
console.log(answer);
return answer;
};


sumArray([4,3,8,7,8]);