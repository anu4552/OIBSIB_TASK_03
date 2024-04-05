

window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');

		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});







/*<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>To-Do List</title>
<link rel="stylesheet" href="sam.css">
</head>
<body>

<div class="container">
   <div class="stats-container">
    <div class="details">
        <h2>Todo App</h2>
        <p>continue</p>
        <div class="progressBar">
            <div class="progress"></div>
        </div>
    </div>
    <div class="stats-numbers">
        <p id="numbers">2/3</p>
    </div>
   </div>
   
   <form action="">
    <input type="text" id="taskInput" placeholder="Add a task..." id="taskInput">
      <button id="new task" type="submit">+</button> 
   </form>
   <ul class="task-list"></ul>
   
</div>

<script src="sam.js"></script>
</body>
</html>*/









/*let task = [];

const addTask = ()=>{
   const taskInput =document.getElementById('taskInput');
   const text = taskInput.value.trim();

   if(text){
    tasks.push({ text: text, completed: false });
    taskInput.value="";
    updateTasksList();
   }
};

const updateTasksList=()=>{
  const taskList=document.getElementByIdElementById('task-list')
  taskList.innerHTML = ''

  tasks.forEach(task =>{
    const li = document.createElement("li");

    listItem.innerHTML=''
  })
}
document.getElementById('newTask').addEventListener('click', function(e) {
  e.preventDefault();

  addTask();
});*/



/*function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === '') {
      alert("Please enter a task!");
      return;
    }
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);
    document.getElementById("taskInput").value = "";
  }*/
  