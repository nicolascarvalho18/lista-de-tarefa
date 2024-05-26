document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
            taskInput.focus();
        }
    });

    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                taskInput.value = '';
                taskInput.focus();
            }
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.className = 'remove-task';
        removeButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        li.appendChild(removeButton);
        taskList.appendChild(li);
    }
});