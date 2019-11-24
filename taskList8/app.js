// Defin UI vars
const form=document.querySelector('#task-form');
const taskInput=document.querySelector('#task');
const filter=document.querySelector('#filter');
const taskList=document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-tasks');


// Load all event listeners
loadAllLoadListeners();


// All event listeners
function loadAllLoadListeners(){
    // Add task event listener
    form.addEventListener('submit',addTask);
    // Remove event listener
    taskList.addEventListener('click',removeTask);
    // Clear tasks event listener
    clearBtn.addEventListener('click',clearTasks);
}

// Add task
function addTask(e) {
    if(taskInput.value===""){
        alert('Buddy, you have to add some item.');
    }

    // Create li element
    const li=document.createElement('li');
    // Add class
    li.className='collection-item';
    // Create text node and append it to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create link element
    const link=document.createElement('a');
    // Add class to it
    link.className='delete-item secondary-content';
    // Create html icon
    link.innerHTML='<i class="fa fa-remove"> </i>';
    // Append it to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);

    // Store in LS
    storeToLocalStorage(taskInput.value);

    // Clear input value
    taskInput.value="";

    e.preventDefault();
    
}

// Store in LS
function storeToLocalStorage(task){
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

// Clear tasks
function clearTasks(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    
    }
}