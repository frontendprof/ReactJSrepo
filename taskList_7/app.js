// Defining UI Variables
const form=document.querySelector('#task-form');
const taskInput=document.querySelector('#task');
const filter=document.querySelector('#filter');
const taskList=document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-tasks');

// Loading all event listeners
loadAllEventListeners();


// All event listeners
function loadAllEventListeners(){
    //Add task event listener
    form.addEventListener('submit',addTask);
    // Remove task event listener
    taskList.addEventListener('click',removeTask);
    // Clear tasks event listener
    clearBtn.addEventListener('click',clearTasks);
}

// Add task
function addTask(e){
    if(taskInput.value===''){
        alert("Hey dude, add an item.")
    }

    // Create li element
    const li=document.createElement('li');
    // Add class
    li.className="collection-item";
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Creat link element
    const link=document.createElement('a');
    // Add class
    link.className="delete-item secondary-content";
    // Create html icon
    link.innerHTML='<i class="fa fa-remove"></i>';
    // Append it to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);

    // Clear input
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
function clearTasks() {
    while(taskList.firstChild){
        if(confirm("You are deleting all items. Are you sure about that?")){
            taskList.removeChild(taskList.firstChild);
        }
    }
    
}