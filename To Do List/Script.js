document.getElementById("myButton").addEventListener("click", addTask);

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
}
};

