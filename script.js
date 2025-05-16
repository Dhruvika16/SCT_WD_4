document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return;

    const li = document.createElement('li');
    li.className = 'task';
    
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.onclick = () => {
        span.classList.toggle('completed');
    };
    li.appendChild(completeBtn);

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.onclick = () => {
        const newTask = prompt('Edit your task:', span.textContent);
        if (newTask) span.textContent = newTask;
    };
    li.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => {
        li.remove();
    };
    li.appendChild(deleteBtn);

    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
}
