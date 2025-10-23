document.getElementById("myButton").addEventListener("click", addTask);
document.getElementById("deleteButton").addEventListener("click", removeTask);


function addTask() {
  if (document.getElementById("myText").value === "") {
   console.log("nothing here")
    return; 
  } else {
  const todoList = document.getElementById("myUL");
  const newTask = document.createElement("li");
  const task = document.getElementById("myText");
  const checkbox = document.createElement("input");

  newTask.textContent = task.value;
  todoList.appendChild(newTask);
  newTask.classList.add("listItem");
  task.value = "";
  checkbox.type = "checkbox";
  newTask.appendChild(checkbox);
  task.focus();

 checkbox.addEventListener("change", function(){
   if (this.checked) {
     newTask.style.textDecoration = "line-through";
     newTask.style.color = "gray";
   } else {
     newTask.style.color = "";
     newTask.style.textDecoration = "";
   }
 })
}
};

function removeTask() {
  const todoList = document.getElementById("myUL");
  todoList.innerHTML = "";
};