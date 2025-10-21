const myButton = document.getElementById("myButton");
const myText = document.getElementById("myText");
const myUL = document.getElementById("myUL");

myButton.onclick = function() {
    const task = myText.value.trim();
    
    if (task === "") {
        alert("Please enter a task!");
        return;
    }
    
    const li = document.createElement("li");
    li.textContent = task;
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";
    deleteBtn.onclick = function() {
        li.remove();
    };
    
    li.appendChild(deleteBtn);
    myUL.appendChild(li);
    myText.value = "";
};

// Allow pressing Enter to add task
myText.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        myButton.click();
    }
});
