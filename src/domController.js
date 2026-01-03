
export class update{

    constructor(modalSelector){
        this.dialogue = document.getElementById(modalSelector);
    }

    show(){
        this.dialogue.showModal();
    }

    close(){
        this.dialogue.close();

    }

    updateDom(){
        const titleInput = document.getElementById("title");
        const descInput = document.getElementById("textDesc");
        const docBody = document.getElementById("cards-container");
        const div = document.createElement("div");
        const del = document.createElement("button");
        div.classList.add("cards-div");
        div.id = crypto.randomUUID();

        const titleHeader = document.createElement("h1");
        titleHeader.textContent = titleInput.value;
        div.appendChild(titleHeader);

        const descPara = document.createElement("p");
        descPara.textContent = descInput.value;
        div.appendChild(descPara);

        del.classList.add("delBTN");
        del.textContent = "Delete";

        del.addEventListener("click", ()=>{
           div.remove();
        })
        div.appendChild(del);
        
        
        docBody.appendChild(div);
        titleInput.value ="";
        descInput.value = "";
    }



}

export default update;