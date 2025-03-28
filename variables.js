// Example of var
function exampleVar() {
    var city = "New York";
    console.log(city); // Output: New York

    if (true) {
        var city = "Los Angeles"; // Redeclaring inside block
        console.log(city); // Output: Los Angeles
    }
    console.log(city); // Output: Los Angeles
}
exampleVar();

// Example of let
function exampleLet() {
    let country = "India";
    console.log(country); // Output: India

    if (true) {
        let country = "USA"; // New variable inside block
        console.log(country); // Output: USA
    }
    console.log(country); // Output: India
}
exampleLet();

// Example of const
function exampleConst() {
    const planet = "Earth";
    console.log(planet); // Output: Earth

    if (true) {
        const moon = "Moon";
        console.log(moon); // Output: Moon
    }
}
exampleConst();
