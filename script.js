const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () =>{
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    } else {
        alert('Введіть завдання');
    }
});

taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});
