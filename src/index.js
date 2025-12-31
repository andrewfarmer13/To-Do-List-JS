import project from "./project.js";
import "./styles.css";

const project_btn = document.getElementById("projectBTN");
project_btn.addEventListener("click",()=>{
    project();
})