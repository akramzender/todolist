// const

const addBtn = document.querySelector('.add-btn');
const todoInput = document.querySelector('.todo-input');
const todoUl = document.querySelector('.todo-list');
const checkBtn = document.querySelector('.check-btn')
// Events
addBtn.addEventListener("click",addTask);
todoUl.addEventListener("click",todoDeleteOrCheck);



// functions
function addTask(e){
    e.preventDefault();
    console.log("hello")
    // create , add elements and childElement to parentElement
    const todoLi = document.createElement("li");
    todoLi.classList.add("todo");

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-items");
    
    todoDiv.innerHTML = todoInput.value;
    

    const checkBtn = document.createElement("button");
    checkBtn.classList.add("check-btn");
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>' ; 

    const trashBtn = document.createElement("button");
    trashBtn.classList.add("trash-btn");
    trashBtn.innerHTML = '<i class="fa-solid fa-trash"></i>' ;


    todoLi.appendChild(todoDiv);
    todoLi.appendChild(checkBtn);
    todoLi.appendChild(trashBtn);

    todoUl.appendChild(todoLi);

    todoInput.value="";

}
// for delete and check function
function todoDeleteOrCheck(e){
    const item = e.target ;
    if (item.classList[0] === "check-btn"){
        const todo = item.parentElement
        todo.classList.add("completed")
    }
    if (item.classList[0] === "trash-btn"){
        const todo = item.parentElement
        todo.classList.add("fall")
        todo.addEventListener('transitionend', ()=>{   // for removing Element after the end of transition 
            todo.remove();
        })
    }

}