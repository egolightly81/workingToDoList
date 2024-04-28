// Step 1
let showActiveButton = document.getElementById("show-active")
//Step 2
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
// Step 3
showActiveButton.addEventListener('click', showActiveTasks);


// Step 1
let showAllButton = document.getElementById("show-all")
// Step 2
function showAllTasks() {
  let tasks = document.getElementsByClassName("task");
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].style.display = "block";
  }
}
// Step 3
showAllButton.addEventListener('click', showAllTasks);

// Step 1
let showCompletedButton = document.getElementById("show-completed");

// Step 2
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

// Step 3
showCompletedButton.addEventListener('click', showCompletedTasks);


/* Exercise/Homework to implement show only completed
let showCompletedButton = document.getElementById("show-completed");

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
showCompletedButton.addEventListener('click', showCompletedTasks); */
