// Retrieve task value from localStorage when the page loads
//task.value = localStorage.getItem("key");

taskInput = document.querySelector(".task_input");
let addTasks = document.querySelector(".add");
addTasks.addEventListener("click",()=>{
    if(taskInput.value==""){
        alert("Please Enter your task");
    }
    else{
   let editImg = document.createElement("img");
   editImg.setAttribute("src","Icons/edit-text.png");
   editImg.setAttribute("width","10px");
   let saveImg = document.createElement("img");
   saveImg.setAttribute("src","Icons/save-instagram.png");
   saveImg.setAttribute("width","10px");
   let delImg = document.createElement("img");
   delImg.setAttribute("src","Icons/trash.png");
   delImg.setAttribute("width","10px");
   let button1 = document.createElement("button");
   button1.classList.add("edit");
   button1.appendChild(editImg);
   let button1_1 = document.createElement("button");
   button1_1.classList.add("save");
   button1_1.appendChild(saveImg);
   let button2 = document.createElement("button");
   button2.classList.add("del");
   button2.appendChild(delImg);
   let modifyDiv = document.createElement("div");
   modifyDiv.classList.add("modify");
   modifyDiv.appendChild(button1);
   modifyDiv.appendChild(button1_1);
   modifyDiv.appendChild(button2);
   let task = document.createElement("input");
   task.setAttribute("type","text");
   task.setAttribute("id","task");
   task.setAttribute("readonly","readonly");
   task.value = taskInput.value;
   let checkbox = document.createElement("input");
   checkbox.setAttribute("type","checkbox");
   let div = document.createElement("div");
   div.classList.add("taskcontainer");
   div.appendChild(checkbox);
   div.appendChild(task);
   div.appendChild(modifyDiv);
   const container2 = document.querySelector(".container2");
   container2.appendChild(div);
   taskInput.value= "";
   
 
   //edit button
   button1.addEventListener("click",()=>{
     task.removeAttribute("readonly");
     task.focus();
     button1.style.display="none";
     button1_1.style.display="block";  
   })
   //save button
   //localStorage.getItem("key")
   //let arr = [];
   //arr.push(task.value)
    button1_1.addEventListener("click",()=>{
    task.setAttribute("readonly","readonly");
    button1.style.display = "block";
    button1_1.style.display = "none";
    //localStorage.setItem("key", task.value)// Save task value in localStorage
    
   })
   //task.value = localStorage.getItem("key");


   //delete button
  button2.addEventListener("click",()=>{
    div.remove();
  })

  }
 

})
 

