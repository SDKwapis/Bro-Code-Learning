const countLabel = document.getElementById("countLabel");
const myText = document.getElementById("myText");
const myH1 = document.getElementById("myH1");
const countContainer = document.getElementById("countContainer");
const submitContainer = document.getElementById("submitContainer");

let count = 0;
let username = ""

countContainer.style.display = "none";

document.getElementById("increaseBttn").addEventListener("click", countUp);
document.getElementById("decreaseBttn").addEventListener("click", countDown);
document.getElementById("resetBttn").addEventListener("click", reset);
document.getElementById("submit").addEventListener("click", signIn);
document.getElementById("signOut").addEventListener("click", signOut);

function countUp() {
  count++;
  countLabel.innerHTML = count;
};

function countDown() {
  count--;
  countLabel.innerHTML = count;
};

function reset() {
  count = 0;
  countLabel.innerHTML = count;
};

function signIn() {
  username = myText.value;
  myH1.innerHTML = `Let's count, ${username}!`;
  submitContainer.style.display = "none";
  countContainer.style.display = "block";
};

function signOut() {
  submitContainer.style.display = "block";
  countContainer.style.display = "none";
  myH1.innerHTML = "Welcome To The Magical World Of Counting!";
  myText.value = "";
};