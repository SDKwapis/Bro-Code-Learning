document.getElementById("myButton").addEventListener("click", addTask);

function addTask() {
  const todoList = document.getElementById("myUL");
  const newTask = document.createElement("li");
  const task = document.getElementById("myText");

  newTask.textContent = task.value;
  todoList.appendChild(newTask);
  task.value = "";
}