import project from "./project.js";
import modal from "./modalController.js";
import "./styles.css";

const project_btn = document.getElementById("projectBTN");
project_btn.addEventListener("click",()=>{
    project();
});


const task_btn = document.getElementById("taskButton");
const taskModal = new modal("modal-task");
task_btn.addEventListener("click",()=>{
    taskModal.show();
});

const close_task = document.getElementById("close-task");
close_task.addEventListener("click",()=>{
    
    taskModal.close();
    taskModal.addContent();
})