
export class modal{

    constructor(modalSelector){
        this.dialogue = document.getElementById(modalSelector);
    }

    show(){
        this.dialogue.showModal();
    }

    close(){
        this.dialogue.close();

    }

    addContent(){
        const titleInput = document.getElementById("title");
        const descInput = document.getElementById("textDesc");
        const docBody = document.getElementById("cards-container");
        const div = document.createElement("div");
        div.className = "cards";

        const titleHeader = document.createElement("h1");
        titleHeader.textContent = titleInput.value;
        div.appendChild(titleHeader);

        const descPara = document.createElement("p");
        descPara.textContent = descInput.value;
        div.appendChild(descPara);
        
        
        docBody.appendChild(div);
        titleInput.value ="";
        descInput.value = "";
    }



}

export default modal;