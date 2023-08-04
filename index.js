let taskInput = document.querySelector(".task_input");
let addTasks = document.querySelector(".add");
let storedTasks = [];



// Function to create a task container
function createTaskContainer(value) {
  let div = document.createElement("div");
  div.classList.add("taskcontainer");

  let editImg = document.createElement("img");
  editImg.setAttribute("src", "Icons/edit-text.png");
  editImg.setAttribute("width", "10px");

  let delImg = document.createElement("img");
  delImg.setAttribute("src", "Icons/trash.png");
  delImg.setAttribute("width", "10px");

  let button1 = document.createElement("button");
  button1.classList.add("edit");
  button1.appendChild(editImg);

  let button2 = document.createElement("button");
  button2.classList.add("del");
  button2.appendChild(delImg);

  let modifyDiv = document.createElement("div");
  modifyDiv.classList.add("modify");
  modifyDiv.appendChild(button1);
  modifyDiv.appendChild(button2);

  let task = document.createElement("input");
  task.setAttribute("type", "text");
  task.setAttribute("id", "task");
  task.setAttribute("readonly", "readonly");
  task.setAttribute("value",taskInput.value);
  task.value = value;

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  div.appendChild(checkbox);
  div.appendChild(task);
  div.appendChild(modifyDiv);

  storedTasks.push(div.innerHTML);
  //storing storedTasks in local storage
  localStorage.setItem("key",JSON.stringify(storedTasks));

  const container2 = document.querySelector(".container2");
  container2.appendChild(div);
  
  // Edit button
  button1.addEventListener("click", () => {
    task.removeAttribute("readonly");
    task.focus();
  });

  // Delete button
  button2.addEventListener("click", () => {
    div.remove();
   
  });
}


// Retrieve the task values from localStorage when the page loads
const storedTasksJSON = localStorage.getItem("key");

if (storedTasksJSON) {
  storedTasks = JSON.parse(storedTasksJSON);
  

  storedTasks.forEach((e)=>{
  
  let div = document.createElement("div");
  div.classList.add("taskcontainer");

  let editImg = document.createElement("img");
  editImg.setAttribute("src", "Icons/edit-text.png");
  editImg.setAttribute("width", "10px");

  let delImg = document.createElement("img");
  delImg.setAttribute("src", "Icons/trash.png");
  delImg.setAttribute("width", "10px");

  let button1 = document.createElement("button");
  button1.classList.add("edit");
  button1.appendChild(editImg);

  let button2 = document.createElement("button");
  button2.classList.add("del");
  button2.appendChild(delImg);

  let modifyDiv = document.createElement("div");
  modifyDiv.classList.add("modify");
  modifyDiv.appendChild(button1);
  modifyDiv.appendChild(button2);

  let task = document.createElement("input");
  task.setAttribute("type", "text");
  task.setAttribute("id", "task");
  task.setAttribute("readonly", "readonly");
  task.setAttribute("value",taskInput.value);
  task.value = taskInput.value;
  

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  div.appendChild(checkbox);
  div.appendChild(task);
  div.appendChild(modifyDiv);
  div.innerHTML = e;

  const container2 = document.querySelector(".container2");
  container2.appendChild(div);

  let editfromSavedTasks = div.querySelector(".edit");
  let deletefromSavedTasks = div.querySelector(".del");

  editfromSavedTasks.addEventListener("click",()=>{
    task.removeAttribute("readonly");
    task.focus();
  })
  
  deletefromSavedTasks.addEventListener("click",()=>{
    div.remove();
    let index = storedTasks.indexOf(div.innerHTML);
    //removing particular element from local storage when "delete icon" is clicked
    if(index!== -1){
      storedTasks.splice(index,1);
      //updating the local storage
      localStorage.setItem("key",JSON.stringify(storedTasks));
    }
    })
  })
}


// Add button click event listener
addTasks.addEventListener("click", () => {
  if (taskInput.value === "") {
    alert("Please Enter your task");
  } else {
    createTaskContainer(taskInput.value);
    taskInput.value = "";
  }
});
