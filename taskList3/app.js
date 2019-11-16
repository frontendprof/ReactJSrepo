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
  // Remove task event
  taskList.addEventListener('click',removeTask);
  // Clear tasks event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
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

  // Store in LS
  storeInLocalStorage(taskInput.value);

  // Clear taskInput
  taskInput.value="";
  e.preventDefault();
}

// Store in LS
function storeInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks=[];
  }else{
    tasks=JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);

  localStorage.setItem('tasks',JSON.stringify(tasks));

}

// Remove task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove();
  }
}

// Cleart tasks
function clearTasks(){
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter tasks
function filterTasks(e){
  const text=e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach
  (function(task){
    const item=task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text)!=-1){
      task.style.display="block";

    }else{
      task.style.display="none";
    }

  });

}

