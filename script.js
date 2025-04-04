const input = document.getElementById("task-input");
const button = document.getElementById("add-task");
const list = document.getElementById("task-list");
const clearButton = document.getElementById("clear-all");

button.addEventListener("click", function () {
    const taskText = input.value.trim();
    if (taskText === "") return;

    const allTasks = list.querySelectorAll("li");
    allTasks.forEach(task => {
        if (task.textContent.startsWith("new ")) {
            task.textContent = task.textContent.replace("new ", "");
        }
    });

    
    const newTask = document.createElement("li");
    newTask.textContent = "new " + taskText;

    // Supprimer la tâche au clic
    newTask.addEventListener("click", function () {
        list.removeChild(newTask);
    });

    // ➕ Ajout en haut de la liste
    list.insertBefore(newTask, list.firstChild);

    input.value = "";
});

clearButton.addEventListener("click", function () {
    list.innerHTML = "";
});
