// Step 1: Get button elements
let showActiveButton = document.getElementById("show-active");
let showAllButton = document.getElementById("show-all");
let showCompletedButton = document.getElementById("show-completed");

// Step 2: Define functions
function showActiveTasks() {
  let tasks = document.getElementsByClassName("task");
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].classList.contains("completed")) {
      tasks[i].style.display = "none";
    } else {
      tasks[i].style.display = "block";
    }
  }
}

function showAllTasks() {
  let tasks = document.getElementsByClassName("task");
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].style.display = "block";
  }
}

function showCompletedTasks() {
  let tasks = document.getElementsByClassName("task");
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].classList.contains("completed")) {
      tasks[i].style.display = "block";
    } else {
      tasks[i].style.display = "none";
    }
  }
}

// Step 3: Add event listeners
showActiveButton.addEventListener('click', showActiveTasks);
showAllButton.addEventListener('click', showAllTasks);
showCompletedButton.addEventListener('click', showCompletedTasks);
