console.log("hej JS");

let newTodo = document.getElementById("newTodo");
let saveTodoBtn = document.getElementById("saveTodoBtn");
let todoList = document.getElementById("todoList");

if (localStorage.getItem("todos")) {
    console.log("LS existerar");
    
} else {
    console.log("Skapar LS");
    let thingsToDo = ["Skriv ut lista", "lägg till nytt", "ta bort från listan", "Spara och gå hem"];
    // SPARA
    localStorage.setItem("todos", JSON.stringify(thingsToDo));
  
}





function printList() {

    todoList.innerHTML = "";

    // HÄMTA
    let thingsToDo = JSON.parse(localStorage.getItem("todos"));
    console.log("things from LS", thingsToDo);

    for (item of thingsToDo) {
        let li = document.createElement("li");
        li.innerText = item;
        li.id = item;

        // TA BORT
        li.addEventListener("click", (e) => {

            // HÄMTA 
            let thingsToDo = JSON.parse(localStorage.getItem("todos"));
            
            // ÄNDRA 
            thingsToDo.splice(thingsToDo.indexOf(e.target.id),1);
            
            // SPARA
            localStorage.setItem("todos", JSON.stringify(thingsToDo));

            console.log("event", e.target.id);
            console.log("click på item");

            
            console.log("efter splice", thingsToDo);
            printList();
        })

        todoList.appendChild(li);
    }
}

saveTodoBtn.addEventListener("click", () => {

    // HÄMTA
    let thingsToDo = JSON.parse(localStorage.getItem("todos"));

    // ÄNDRA 
    thingsToDo.push(newTodo.value);

    // SPARA
    localStorage.setItem("todos", JSON.stringify(thingsToDo));


    console.log("list after click", thingsToDo);
    newTodo.value = "";
    printList();
})

printList();
