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
}

function generateId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 8; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));        
    }
    return id;
}