const input = document.querySelector("#input-box");
const container = document.querySelector(".list-container");
const btn = document.querySelector('button')

btn.addEventListener('click',()=>{
    if(input.value == ""){
        alert("you must write something ...");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        container.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';// code for cross symbol
        li.appendChild(span);
    }
    input.value = "";
    saveData()
})

container.addEventListener('click',function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
})

function saveData(){
    localStorage.setItem("data",container.innerHTML);
}

function showTask(){
    container.innerHTML = localStorage.getItem("data");
}

showTask();