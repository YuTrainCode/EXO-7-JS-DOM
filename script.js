const input = document.getElementById("task-input");
const button = document.getElementById("add-task");
const list = document.getElementById("task-list");
const clearButton = document.getElementById("clear-all");


button.addEventListener("click", function () {
    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    // ➕ Ajout du comportement de suppression au clic
    newTask.addEventListener("click", function () {
        list.removeChild(newTask);
    });

    list.appendChild(newTask);
    input.value = "";
});

clearButton.addEventListener("click", function () {
    list.innerHTML = ""; // vide toute la liste
});
