const createNames = require("./names.js");
const createHobbies = require("./hobbies.js");

function createPerson() {
    const name = createNames("Gianluca", "Milesi")
    const hobbies = createHobbies("Suonare la chitarra", "Allenarsi", "Uscire con amici");

    return {
        firstName: name.firstName,
        lastName: name.lastName,
        hobbies: hobbies.hobbies
    }
};

module.exports = createPerson;