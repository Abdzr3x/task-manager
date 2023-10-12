const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("task-input");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            ${taskText}
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

function editTask(button) {
    const taskItem = button.parentElement;
    const taskText = taskItem.firstChild.textContent;
    const newText = prompt("Edit task:", taskText);
    if (newText !== null) {
        taskItem.firstChild.textContent = newText;
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}
