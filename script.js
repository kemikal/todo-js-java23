console.log("hej JS");

let newTodo = document.getElementById("newTodo");
let saveTodoBtn = document.getElementById("saveTodoBtn");
let todoList = document.getElementById("todoList");

let thingsToDo = ["Skriv ut lista", "lägg till nytt", "ta bort från listan", "Spara och gå hem"];

function printList() {

    todoList.innerHTML = "";

    for (item of thingsToDo) {
        let li = document.createElement("li");
        li.innerText = item;
        li.id = item;

        li.addEventListener("click", (e) => {
            console.log("event", e.target.id);
            console.log("click på item");

            thingsToDo.splice(thingsToDo.indexOf(e.target.id),1);
            console.log("efter splice", thingsToDo);
            printList();
        })

        todoList.appendChild(li);
    }
}

saveTodoBtn.addEventListener("click", () => {
    thingsToDo.push(newTodo.value);
    console.log("list after click", thingsToDo);
    newTodo.value = "";
    printList();
})

printList();
