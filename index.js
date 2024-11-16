const createPerson = require("./functions/names.js");
const createHobbies = require("./functions/hobbies.js");

// Step 1.
const person = createPerson("Gianluca", "Milesi");
console.log(person);

//Step 2.
const hobbies = createHobbies("Suonare la chitarra", "Allenarsi", "Uscire con amici");
console.log(hobbies);