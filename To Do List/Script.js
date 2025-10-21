document.getElementById("myButton").addEventListener("click", addTask);

function addTask() {
  const todoList = document.getElementById("myUL");
  const newTask = document.createElement("li");
  const task = document.getElementById("myText");
  const checkbox = document.createElement("input");

  checkbox.type = "checkbox";
  newTask.textContent = task.value;
  todoList.appendChild(newTask);
  todoList.appendChild(checkbox);
  task.value = "";
};

