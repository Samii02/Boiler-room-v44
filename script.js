// Initialize the tasks array from localStorage or as an empty array if nothing is stored
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to save tasks to localStorage
function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to add a new task
function addTask() {
    let description = prompt("Ange en beskrivning av uppgiften: ");
    
    // If no description is provided, show an alert and stop the function
    if (!description) {
        alert("Beskrivningen får inte vara tom");
        return;
    }
    
    // Create a new task object with an ID, description, and done status
    let newTask = {
        id: generateId(),  // Generate a unique ID for the task
        description: description,
        done: false  // Set the initial done status to false
    };
    
    // Add the new task to the tasks array
    tasks.push(newTask);
    saveTasksToLocalStorage();
    
    // Confirm that the task has been added and log it to the console
    alert("Uppgift tillagd!");
    console.log(newTask);
}

// Function to generate a unique ID for each task
function generateId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    // Generate an 8-character ID by selecting random characters
    for (let i = 0; i < 8; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));        
    }
    console.log(id);  // Log the generated ID for reference
    return id;
}

// Function to display all tasks
function showTasks() {
    // If there are no tasks, alert the user and stop the function
    if (tasks.length === 0) {
        alert("Det finns inga uppgifter.");
        return;
    }
    
    // Build a message listing each task's details
    let message = "Uppgifter:\n";
    tasks.forEach(task => {
        message += `ID: ${task.id}, Beskrivning: ${task.description}, Klar: ${task.done ? "Ja" : "Nej"}\n`;
    });
    
    // Show the list of tasks in an alert and also in the console
    alert(message);
    showTasksInConsole();
}

// Helper function to display tasks in the console
function showTasksInConsole() {
    // If there are no tasks, alert the user and stop the function
    if (tasks.length === 0) {
        alert("Det finns inga uppgifter.");
        return;
    }
    
    console.log("\nUppgifter:");
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Beskrivning: ${task.description}, Klar: ${task.done ? "Ja" : "Nej"}`);
    });
}

// Function to mark a task as done
function markAsDone() {
    // If there are no tasks, alert the user and stop the function
    if (tasks.length === 0) {
        alert("Det finns inga uppgifter.");
        return;
    }
    
    // Display tasks in the console for reference
    showTasksInConsole();
    
    // Prompt the user for the ID of the task to mark as done
    let taskId = prompt("Ange ID för uppgiften du vill markera som klar: ");
    let task = tasks.find(task => task.id === taskId);  // Find the task by ID
    
    // If the task is found, mark it as done and notify the user
    if (task) {
        task.done = true;
        saveTasksToLocalStorage();
        alert(`Uppgift med ID ${taskId} har markerats som klar.`);
    }
    else {
        alert("Ingen uppgift med det ID:t hittades.");  // Alert if task ID is not found
    }
}

// Function to delete a task
function deleteTask() {
    // If there are no tasks, alert the user and stop the function
    if (tasks.length === 0) {
        alert("Det finns inga uppgifter.");
        return;
    }
    
    // Display tasks in the console for reference
    showTasksInConsole();
    
    // Prompt the user for the ID of the task to delete
    let taskId = prompt("Ange ID för uppgiften du vill radera: ");
    let index = tasks.findIndex(task => task.id === taskId);  // Find the task index by ID
    
    // If the task exists, ask for confirmation before deleting
    if (index !== -1) {
        let confirmDelete = confirm(`Är du säker på att du vill radera uppgiften med ID ${taskId}?`);
        
        // If confirmed, remove the task from the array
        if (confirmDelete) {
            tasks.splice(index, 1);
            saveTasksToLocalStorage();
            alert(`Uppgift med ID ${taskId} har raderats.`);
        }
        else {
            alert("Radering avbröts.");  // Alert if deletion was canceled
        }
    }
    else {
        alert("Ingen uppgift med det ID:t hittades.");  // Alert if task ID is not found
    }
}

// Function to show a menu and handle user choice
function showMenu() {
    let choice;
    do {
        // Display a menu and prompt the user for a choice
        choice = prompt("Välj ett alternativ:\n1: Lägg till en ny uppgift\n2: Visa alla uppgifter\n3: Markera en uppgift som klar\n4: Ta bort en uppgift\n5: Avsluta programmet");
        
        // Execute the appropriate function based on the user's choice
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
                alert("Programmet avslutas.");
                break;
            default:
                alert("Mata in ett av förslagen!");  // Alert for invalid input
        }
    } while (choice !== '5');  // Continue showing the menu until the user exits
}

// Start the program by showing the menu
showMenu();
