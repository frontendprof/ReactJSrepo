// Defining UI Variables
const form=document.querySelector("#task-form");
const taskInput=document.querySelector("#task");
const filter=document.querySelector("#filter");
const taskList=document.querySelector(".collection");
const clearBtn=document.querySelector(".clear-tasks")


// Load all event listeners
loadAllEventListeners();


// Load event listener
function loadAllEventListeners(){
    // DOM Load Event
    document.addEventListener('DOMContentLoaded',getTasks);
    // Create add task event listener
    form.addEventListener('submit',addTask);
    // Remove task event listener
    taskList.addEventListener('click',removeTask);
    // Clear tasks event listeners
    clearBtn.addEventListener('click',clearTasks);
    // Filer tasks event listeners
    filter.addEventListener('keyup',filterTasks);

}

// Get tasks
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')===''){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
     tasks.forEach(function(task){
         // Create li item
        const li=document.createElement('li');
        // Add class
        li.className='collection-item';
        // Create text node and append it to li
        li.appendChild(document.createTextNode(task));
        // Create link element
        const link=document.createElement("a");
        // Add class
        link.className='delete-item secondary-content';
        // Create html icon
        link.innerHTML='<i class="fa fa-remove"></i>';
        // Append it to li
        li.appendChild(link);
        // Append li to ul
        taskList.appendChild(li);

     });
}


// Add task
function addTask(e){
    if(taskInput.value===""){
        alert("Please add a task.")
    }

    // Create li item
    const li=document.createElement('li');
    // Add class
    li.className='collection-item';
    // Create text node and append it to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create link element
    const link=document.createElement("a");
    // Add class
    link.className='delete-item secondary-content';
    // Create html icon
    link.innerHTML='<i class="fa fa-remove"></i>';
    // Append it to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);

    // Store to LS
    storeToLocalStorage(taskInput.value);



    // Clear input value
    taskInput.value="";



    e.preventDefault();
}

// Store to LS
function storeToLocalStorage(task){

    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

}

// Remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();

        removeFromLocalStorage(e.target.parentElement.parentElement);
    }

}
// Remove from LS
function removeFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task,index){
        if(taskItem.textContent===task){
            tasks.splice(index,1);
        }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));

}

// Clear tasks
function clearTasks(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    clearFromLocalStorage();
}
// Clearing from LS
function clearFromLocalStorage(){
    localStorage.clear();
}

// Filter tasks
function filterTasks(e){
    const text=e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item=task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text)!=-1){
            task.style.display='block';
        }else{
            task.style.display="none";
        }

    });

}