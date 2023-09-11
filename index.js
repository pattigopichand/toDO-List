const inputBoxElement=document.getElementById("input-box");
const listContainerElement=document.getElementById("List-container");
function addTask(){
    if(inputBoxElement.value === ''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBoxElement.value;
        listContainerElement.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7"; //add one cross icon in span tag
        li.appendChild(span);
    }
    inputBoxElement.value="";
    saveData();
}
listContainerElement.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainerElement.innerHTML);
}
function showTasks(){
    listContainerElement.innerHTML=localStorage.getItem("data");
}
showTasks();