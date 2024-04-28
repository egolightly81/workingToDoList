let addTaskButton = document.getElementById("add-task");
let newTaskInput = document.getElementById("task-input");
let todoListContainer = document.getElementById("todo-list");
let templateElement = document.getElementById("list-item-template");
let template = templateElement.innerHTML;

/*
  Right now when you close your browser or refresh the page all your tasks are
  lost. This is not very useful, but of course there is a solution.

  The Local Storage API can be used to store and retrieve String values within
  the browser, without needing a server on the back end.

  We need two functions, one to save the new task, and another to read
  the task from the local storage
*/
function saveTask(name, isCompleted) {
    localStorage.setItem(name, isCompleted);
}

/* When page loads we need to read the todo form the local storage */
function renderTasks() {
    for (let i = 0; i < localStorage.length; i++) {
        let taskName = localStorage.key(i);
        let isCompleted = localStorage.getItem(taskName) == "true";
        let taskHTML = template.replace("<!-- TASK_NAME -->", taskName);

        if (!isCompleted) {
            todoListContainer.insertAdjacentHTML('afterbegin', taskHTML);
        }
    }
}




/* Every time we add a task, save the task to local storage */
function onAddTaskClicked(event) {
    let taskName = newTaskInput.value;
    newTaskInput.value = "";

    let taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
    todoListContainer.insertAdjacentHTML('afterbegin', taskHTML);

    /* Added a new task, save to local storage */
    saveTask(taskName, false);
}





function onTodolistClicked(event) {
    let targetElement = event.toElement;

    while (!targetElement.classList.contains("task")) {
        targetElement = targetElement.parentElement;
    }

    let checkbox = targetElement.querySelector(".checkbox");

    if (checkbox.checked) {
        targetElement.classList.add("completed");
    } else {
        targetElement.classList.remove("completed");
    }

    /* using id form modified/updated template in <span> element */
    let taskNameElement = targetElement.querySelector(".task-name");
    let taskName = taskNameElement.innerText;

    /* Updated a task, save to local storage */
    saveTask(taskName, checkbox.checked);
}

addTaskButton.addEventListener('click', onAddTaskClicked);
todoListContainer.addEventListener('click', onTodolistClicked);
renderTasks();
