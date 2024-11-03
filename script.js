let tasks = [];

function addTask() {
    let description = prompt("Ange en beskrivning av uppgiften: ")
    if (!description) {
        alert("Beskrivningen får inte vara tom");
        return;
    }
    let newTask = {
        id: generateId(),
        description: description,
        done: false
    };
    tasks.push(newTask);
    alert("Uppgift tillagd!")
    console.log(newTask);
}

function generateId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 8; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));        
    }
    console.log(id)
    return id;
}

function showTasks() {
    if (tasks.length === 0) {
        alert("Det finns inga uppgifter.")
        return;
    }
    let message = "Uppgifter:\n";
    tasks.forEach(task => {
        message += `ID: ${task.id}, Beskrivning: ${task.description}, Klar: ${task.done ? "Ja" : "Nej"}\n`;
    });
    alert(message);

    showTasksInConsole();    
}

function showTasksInConsole() {
    if (tasks.length === 0) {
        alert("Det finns inga uppgifter.")
        return;
    }
    console.log("\nUppgifter: ");
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Beskrivning: ${task.description}, Klar: ${task.done ? "Ja" : "Nej"}`)
    })
}

function markAsDone() {
    if (tasks.length === 0) {
        alert("Det finns inga uppgifter.")
        return;
    }
    
    showTasksInConsole();
    let taskId = prompt("Ange ID för uppgiften du vill markera som klar: ")
    let task = tasks.find(task => task.id === taskId)

    if (task) {
        task.done = true;
        alert(`Uppgift med ID ${taskId} har markerats som klar.`);
    }
    else {
        alert("Ingen uppgift med det ID:t hittades.");
    }
}

function deleteTask() {
    if (tasks.length === 0) {
        alert("Det finns inga uppgifter.");
        return;
    }
    
    showTasksInConsole();
    let taskId = prompt("Ange ID för uppgiften du vill radera: ");
    let index = tasks.findIndex(task => task.id === taskId);
    
    if (index !== -1) {
        let confirmDelete = confirm(`Är du säker på att du vill radera uppgiften med ID ${taskId}?`);
        
        if (confirmDelete) {
            tasks.splice(index, 1);
            alert(`Uppgift med ID ${taskId} har raderats.`);
        } else {
            alert("Radering avbröts.");
        }
    } else {
        alert("Ingen uppgift med det ID:t hittades.");
    }
}

function showMenu() {
    let choice;
    do {
        choice = prompt("Välj ett alternativ:\n1: Lägg till en ny uppgift\n2: Visa alla uppgifter\n3: Markera en uppgift som klar\n4: Ta bort en uppgift\n5: Avsluta programmet");
        switch (choice) {
            case '1':
                addTask();
                break;
            case '2':
                showTasks();
                break;
            case '3':
                markAsDone();
                break;
            case '4':
                deleteTask();
                break;
            case '5':
                alert("Programmet avslutas.")
                break;
            default:
                alert("Mata in ett av förslagen!")
        }
    }
    while (choice !== '5');
}

showMenu();