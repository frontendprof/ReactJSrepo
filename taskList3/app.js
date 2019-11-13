// Define UI Vars
const form=document.querySelector("#task-form");
const taskInput=document.querySelector("#task");
const filter=document.querySelector("#filter");
const taskList=document.querySelector('.collection');
const clearBtn=document.querySelector(".clear-tasks");

// Load all event listeners
loadAllEventListeners();

// All event listener
function loadAllEventListeners(){
  // Add task event
  form.addEventListener('submit',addTask);
}

// Add task
function addTask(e){
  if(taskInput.value===''){
    alert("Please add a task, buddy");
  }

  // Create li element
  const li=document.createElement('li');
  // Add class
  li.className="collection-item";
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create link element
  const link=document.createElement('a');
  // Add class
  link.className='delete-item secondary-content';
  // Create icon html
  link.innerHTML='<i class="fa fa-remove"></i>';
  // Append link to li
  li.appendChild(link);
  //Append li to ul
  taskList.appendChild(li);

  // Clear taskInput
  taskInput.value="";
  e.preventDefault();
}
