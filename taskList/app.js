//Defining UI Variables
const form=document.querySelector('#task-form');
const taskInput=document.querySelector("#task");
const filter=document.querySelector('#filter');
const taskList=document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-tasks');


// Load all event listeners
loadEventListener();


// Define all event listeners
function loadEventListener(){
  // Add task event
  form.addEventListener('submit',addTask);
}


// Add task
function addTask(e){
  if(taskInput.value===""){
    alert("Add a task, you knucklehead");
  }
  e.preventDefault();
}