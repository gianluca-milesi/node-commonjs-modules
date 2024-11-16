const createNames = require("./functions/names.js");
const createHobbies = require("./functions/hobbies.js");
const createPerson = require("./functions/people.js");

// Step 1.
const name = createNames("Gianluca", "Milesi");
console.log(name);

//Step 2.
const hobbies = createHobbies("Suonare la chitarra", "Allenarsi", "Uscire con amici");
console.log(hobbies);

//Step 3.
const person = createPerson();
console.log(person);