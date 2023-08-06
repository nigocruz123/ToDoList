const inputBox = document.getElementById('input');
const listContainer = document.getElementById('list-container');

//Functions

function AddTask(){
    if(inputBox.value === ''){
        alert("You must enter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = " ";
    saveData();
   
}

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showList();

//Event Listeners

listContainer.addEventListener("click", (e)=> {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); 
        saveData();
       // showList();
    }
    else if(e.target.tagName ==="SPAN") {
        e.target.parentElement.remove();
        saveData();
        //showList();

    }
}, false);

listContainer.addEventListener("keypress", (e)=> {
    if(e.key === 'Enter'){
       inputBox.AddTask();
       // showList();
    }});


























/*const input_box = document.getElementById('input-box');
const btn = document.getElementById('btn');
const List_container = document.getElementById('list-container');

function addTask(){

    if(input_box.value === ''){
        alert("You Must Write Something!");
    }
    else {
   let li = document.createElement("li");
   li.innerHTML = input_box.value;
   List_container.appendChild(li);
   let span = document.createElement("span");
   span.innerHTML = "\u00d7"; 
   li.appendChild(span);
   
   
   /*What is this cross icon?*/ 
    //}
    /*let li =document.createElement("li");
    li.innerHTML = input_box.value;
    btn.appendChild(li);*/
   // input_box.value = '';
//*/

