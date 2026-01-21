const taskList = document.getElementById("taskList");
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const doneCount = document.getElementById("doneCount");
const totalCount = document.getElementById("totalCount");

let tasks = initialTasks || [];

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = task.done ? "done" : "";
        li.innerHTML = `
            <span>${task.text}</span>
            <input type="checkbox" ${task.done ? "checked" : ""} data-index="${index}" />
        `;
        taskList.appendChild(li);
    });

    totalCount.textContent = tasks.length;
    doneCount.textContent = tasks.filter(t => t.done).length;
}

async function saveTasks() {
    await fetch("daily-task.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tasks)
    });
}

taskForm.addEventListener("submit", e => {
    e.preventDefault();
    const text = taskInput.value.trim();
    if (text) {
        tasks.push({ text, done: false });
        taskInput.value = "";
        renderTasks();
        saveTasks();
    }
});

taskList.addEventListener("change", e => {
    if (e.target.matches("input[type='checkbox']")) {
        const index = e.target.dataset.index;
        tasks[index].done = e.target.checked;
        renderTasks();
        saveTasks();
    }
});

renderTasks();