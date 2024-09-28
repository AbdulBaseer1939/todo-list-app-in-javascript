let tasks = []; // Corrected variable name from 'task' to 'tasks'

const addTask = () => {
    const taskInput = document.getElementById("taskInput");
    const text = taskInput.value.trim();

    if (text) {
        tasks.push({ text: text, completed: false });
        taskInput.value = "";
        updateTasksList(); // Ensure this function is called after the task is added
    }
};

// Moved the updateTasksList function outside of addTask for better scope management
const updateTasksList = () => {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = "hi";

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.innerHTML = task.text;
        taskList.appendChild(listItem);
    });
};

// Ensure the event listener is set up when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submit").addEventListener("click", function(e) {
        e.preventDefault();
        addTask();
    });
});
