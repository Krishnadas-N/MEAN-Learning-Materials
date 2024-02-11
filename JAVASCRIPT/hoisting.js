var a = 32;

function one() {
    var a = 10;
    
    function two() {
        a=a+1; // Incrementing a, but due to hoisting, a is considered as undefined here
        console.log(a); // Output: NaN (Not a Number)
        // var a = 231; // Variable 'a' is declared and initialized here
    }

    return two; // Function two is called
}

const two =one(); // Call the function one
two( );// Execute the returned function from one
