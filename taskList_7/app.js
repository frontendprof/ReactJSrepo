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
