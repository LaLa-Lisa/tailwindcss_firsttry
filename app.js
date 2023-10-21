document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const listItem = document.createElement("li");
        listItem.className = "bg-white p-2 rounded-md shadow mb-2 flex justify-between";
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="text-red-500 delete-button">Удалить</button>
        `;

        const deleteButton = listItem.querySelector(".delete-button");
        deleteButton.addEventListener("click", function() {
            listItem.remove();
        });

        taskList.appendChild(listItem);
        taskInput.value = "";
    }

    addTaskButton.addEventListener("click", addTask);
    taskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
