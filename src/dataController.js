function saveTaskFromModal(){
    const title = document.getElementById("title").value;
    const desc = document.getElementById("textDesc").value;

    const task = {
        id: Date.now(),
        title,
        desc
    };

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return tasks;
}

export  {saveTaskFromModal, loadTasks}