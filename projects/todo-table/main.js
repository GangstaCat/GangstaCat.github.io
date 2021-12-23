function newTodo() {
  // create a form element and give it an id
  const div = document.getElementById("new");
  const nameForm = document.createElement("form");
  div.appendChild(nameForm);
  nameForm.id = "nameForm";

  // create a text input for the name of the todo thingy
  const nameLabel = document.createElement("label");
  nameForm.appendChild(nameLabel);
  nameLabel.setAttribute("for", "nameInput");
  nameLabel.innerHTML = "Name:";
  const nameInput = document.createElement("input");
  nameForm.appendChild(nameInput);
  nameInput.id = "nameInput";
  nameInput.setAttribute("type", "text");

  // create a button
  const createButton = document.createElement("button");
  nameForm.appendChild(createButton);
  createButton.id = "createButton";
  createButton.innerHTML = "Create";
  createButton.setAttribute("onclick", "createTodo()")
}

function createTodo() {
  // check if there is a name provided
  const name = document.getElementById("nameInput").value;
  if (!name) {
    const noNameErr = document.createElement("p")
    noNameErr.innerHTML = "Give your Todo a name!"
    const nameForm = document.getElementById("nameForm")
    nameForm.appendChild(noNameErr);
  } else {
    const rowdiv = document.getElementsByClassName("rowdiv")[0]
    const todo = document.createElement("p")
    rowdiv.appendChild(todo)
    todo.innerHTML = name
    todo.id = "todo";
  }
}