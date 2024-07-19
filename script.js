function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const tasksList = document.getElementById('tasks');
        const taskItem = create_TaskItem(taskText);
        tasksList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function create_TaskItem(text) {
    const taskItem = document.createElement('li');
    
    const taskLabel = document.createElement('span');
    taskLabel.textContent = text;

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.onchange = () => toggleCompleteTask(taskCheckbox, taskItem);

    const buttonContainer = document.createElement('div');

    const upButton = document.createElement('button');
    upButton.textContent = 'Up';
    upButton.onclick = () => moveTaskUp(taskItem);

    const downButton = document.createElement('button');
    downButton.textContent = 'Down';
    downButton.onclick = () => moveTaskDown(taskItem);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteTask(taskItem);

    buttonContainer.appendChild(upButton);
    buttonContainer.appendChild(downButton);
    buttonContainer.appendChild(deleteButton);

    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskLabel);
    taskItem.appendChild(buttonContainer);

    return taskItem;
}

function toggleCompleteTask(checkbox, taskItem) {
    if (checkbox.checked) {
        taskItem.classList.add('completed');
        document.getElementById('completed-tasks').appendChild(taskItem);
    } else {
        taskItem.classList.remove('completed');
        document.getElementById('tasks').appendChild(taskItem);
    }
}

function moveTaskUp(taskItem) {
    const previousTask = taskItem.previousElementSibling;
    if (previousTask) {
        taskItem.parentNode.insertBefore(taskItem, previousTask);
    }
}

function moveTaskDown(taskItem) {
    const nextTask = taskItem.nextElementSibling;
    if (nextTask) {
        taskItem.parentNode.insertBefore(nextTask, taskItem);
    }
}

function deleteTask(taskItem) {
    taskItem.remove();
}

