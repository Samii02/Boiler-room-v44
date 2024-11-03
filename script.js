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
    console.log("Uppgifter: ");
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Beskrivning: ${task.description}, Klar: ${task.done ? "Ja" : "Nej"}`)
    })
    
    let message = "Uppgifter:\n";
    tasks.forEach(task => {
        message += `ID: ${task.id}, Beskrivning: ${task.description}, Klar: ${task.done ? "Ja" : "Nej"}\n`;
    });

    alert(message);
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
                null
                break;
            case '4':
                null
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