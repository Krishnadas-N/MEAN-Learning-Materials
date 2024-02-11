//       MEMORY LEAK CODE           //
{
// Global variable that holds a reference to a DOM element
let element = document.getElementById('example-element');

// Function that adds an event listener to the element
function addEventListener() {
    element.addEventListener('click', function handleClick() {
        console.log('Element clicked');
    });
}

// Function that removes the event listener
function removeEventListener() {
    // Removing the event listener
    element.removeEventListener('click', handleClick); // This will not work because handleClick is not accessible here
}

// Call the functions to add and then remove the event listener
addEventListener();
removeEventListener();
}







///How to overcome meemory leak 



// Global variable that holds a reference to a DOM element
let element = document.getElementById('example-element');

// Function that adds an event listener to the element
function addEventListener() {
    element.addEventListener('click', handleClick);
}

// Function that removes the event listener
function removeEventListener() {
    element.removeEventListener('click', handleClick);
}

// Event listener function
function handleClick() {
    console.log('Element clicked');
}

// Call the functions to add and then remove the event listener
addEventListener();
removeEventListener();
