const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


displayTasks();


addBtn.addEventListener("click", addTask);


taskInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

function addTask(){

    const text = taskInput.value.trim();

    if(text === ""){
        alert("Please enter a task.");
        return;
    }

    const task = {
        text: text,
        completed: false
    };

    tasks.push(task);

    saveTasks();

    displayTasks();

    taskInput.value = "";
}

function displayTasks(){

    taskList.innerHTML = "";

    tasks.forEach((task,index)=>{

        const li = document.createElement("li");
        li.className = "task";

        const leftDiv = document.createElement("div");
        leftDiv.className = "left";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change",function(){

            tasks[index].completed = checkbox.checked;

            saveTasks();

            displayTasks();

        });

        const span = document.createElement("span");
        span.textContent = task.text;

        if(task.completed){
            span.classList.add("completed");
        }

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click",function(){

            tasks.splice(index,1);

            saveTasks();

            displayTasks();

        });

        leftDiv.appendChild(checkbox);
        leftDiv.appendChild(span);

        li.appendChild(leftDiv);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

    });

}

function saveTasks(){

    localStorage.setItem("tasks",JSON.stringify(tasks));

}