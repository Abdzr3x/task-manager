const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("task-input");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

function completeTask(button) {
    const taskItem = button.parentElement;
    taskItem.querySelector("span").classList.toggle("completed");
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}
