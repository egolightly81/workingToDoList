let addTaskButton = document.getElementById("add-task");
let newTaskInput = document.getElementById("task-input");
let todoListContainer = document.getElementById("todo-list");


let templateElement = document.getElementById("list-item-template");
let template = templateElement.innerHTML;


function onAddTaskClicked(event) {
  let taskName = newTaskInput.value;
  newTaskInput.value = "";

  if (taskName != "") {
    let taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
    todoListContainer.insertAdjacentHTML('afterbegin', taskHTML);
  }
}


/*
  It would be be nice if instead of just having a tick-mark next to each task
  when it was completed we could also strike it through.

  While it isn't good practice to style elements from JavaScript, it's perfectly
  acceptable to add appropriate classes. So let's try that out now. Add the
  following code in to your existing JavaScript.
*/
function onTodolistClicked(event) {
  let targetElement = event.target;

  /*
    We've definitely reached the point where if you don't know JavaScript and
    the DOM already then much of this won't make sense. I'll attempt to
    explain it.

    Because our list items are being dynamically inserted through JavaScript
    instead of binding the click event handler to each task list item we've
    bound it to their container. When the event is triggered we walk up the
    DOM tree (using the parentElement attribute) until we find the .task
    element. We need to do this because the user could have clicked on the
    checkbox or on the text. Place a console.log(targetElement) after the
    second line if you want to see this behaviour yourself (then check the
    developer console).
  */
  while (!targetElement.classList.contains("task")) {
    targetElement = targetElement.parentElement;

  }

  /*
    Now we are at the parent, we retrieve the .checkbox element so that we can
    see if it is checked (because they could be checking or unchecking the
    item).
  */
  let checkbox = targetElement.querySelector(".checkbox");


  /*
    If the task has been completed then we give it the class completed
    otherwise we remove the class completed. Adding a class multiple times or
    removing a class multiple times won't have any bad behaviour.

    Adding/removing a class will trigger the DOM to style the element as per
    the class added/removed.
  */
  if (checkbox.checked) {
    targetElement.classList.add("completed");
  } else {
    targetElement.classList.remove("completed");
  }
}

addTaskButton.addEventListener('click', onAddTaskClicked);
todoListContainer.addEventListener('click', onTodolistClicked);