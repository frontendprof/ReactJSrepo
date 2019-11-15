// Define UI Vars
const form=document.querySelector('#task-form');
const taskInput=document.querySelector('#task');
const filter=document.querySelector('#filter');
const taskList=document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-tasks');


// Load all event listeners
loadAllEventListeners();

function loadAllEventListeners(){
  // Create task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click',removeTask);
  // Clear tasks
  clearBtn.addEventListener('click',clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// Add task
function addTask(e){
  if(taskInput.value===''){
    alert("Buddy, add an item");
  }
  // Create li element
  const li=document.createElement('li');
  // Add class
  li.className='collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create link element
  const link=document.createElement('a');
  // Add class
  link.className="delete-item secondary-content";
  // Create html icon
  link.innerHTML='<i class="fa fa-remove"></i>';
  // Append it to li
  li.appendChild(link);
  // Append li to ul
  taskList.appendChild(li);


  // Clear the task bar
  taskInput.value="";

  e.preventDefault();
  
}

// Remove task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove();
  }
}

// Clear tasks
function clearTasks(){
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter tasks
function filter











