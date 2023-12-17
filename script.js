// Define an empty array to store unique car brands
const marki = [];

// Counter to keep track of the number of cars added
let counter = 0;

// Function to add a new car to the list
function dodawanie() {
    // Increment the counter
    counter += 1;

    // Get the 'auta' div element from the DOM
    let autaDiv = document.getElementById("auta");

    // Get values from input fields
    let marka = document.getElementById("marka").value;

    // Create a new div element for the car
    let newCarDiv = document.createElement("div");
    newCarDiv.className = "car";
    newCarDiv.innerHTML = marka + " " + document.getElementById("model").value +
        " " + document.getElementById("rocznik").value + " " + document.getElementById("cena").value;

    // Create a button to delete the car
    let button = document.createElement("button");
    button.className = "ButtonToDel";
    button.innerHTML = "usunauto";
    button.onclick = function () {
        // Call the 'usuwanieAuta' function when the button is clicked
        usuwanieAuta(newCarDiv);
    };

    // Append the delete button to the car div
    newCarDiv.appendChild(button);

    // Check if a div with the current brand already exists
    let markaDiv = document.querySelector(`[data-marka="${marka}"]`);

    // If the brand exists, append the car to its div
    if (marki.includes(marka) && markaDiv) {
        markaDiv.appendChild(newCarDiv);
    } else {
        // If the brand doesn't exist, create a new div for the brand
        let newMarkaDiv = document.createElement("div");
        newMarkaDiv.setAttribute("data-marka", marka);
        newMarkaDiv.innerHTML = "<h2>" + marka + "</h2>";
        newMarkaDiv.appendChild(newCarDiv);
        autaDiv.appendChild(newMarkaDiv);

        // Add the new brand to the array
        marki.push(marka);
    }
}

// Function to remove a car from the list
function usuwanieAuta(carDiv) {
    // Remove the car div from the DOM
    carDiv.remove();

    // Get the brand of the removed car
    let marka = document.getElementById("marka").value;

    // Find the corresponding brand div
    let markaDiv = document.querySelector(`[data-marka="${marka}"]`);

    // If the brand div exists and has no cars left, remove it and update the array
    if (markaDiv && markaDiv.querySelectorAll('.car').length === 0) {
        markaDiv.remove();
        marki.splice(marki.indexOf(marka), 1);
    }

    // Get the 'auta' div
    let autaDiv = document.getElementById("auta");

    // If there are no cars left, clear the inner HTML of the 'auta' div
    if (autaDiv.innerHTML.trim() === "") {
        autaDiv.innerHTML = "";
    }
}
