const taskInput = document.getElementById("task");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function saveTasks() {
  const tasks = Array.from(taskList.querySelectorAll("li")).map((li) => {
    return {
      text: li.querySelector("span").textContent,
      completed: li.classList.contains("completed"),
    };
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createTaskItem(text, completed = false) {
  const li = document.createElement("li");
  if (completed) li.classList.add("completed");

  const span = document.createElement("span");
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  span.addEventListener("click", () => {
    li.classList.toggle("completed");
    saveTasks();
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  return li;
}

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;
  const item = createTaskItem(text);
  taskList.appendChild(item);
  taskInput.value = "";
  saveTasks();
}

function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (!saved) return;
  const tasks = JSON.parse(saved);
  tasks.forEach((t) => {
    const item = createTaskItem(t.text, t.completed);
    taskList.appendChild(item);
  });
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") addTask();
});

loadTasks();
