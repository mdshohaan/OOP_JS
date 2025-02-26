const  Guardian  = require("./person/Guardian");
const  Contact  = require("./contact/Contact");

const guardian = new Guardian(1, "arif", "Teacher", 500);
guardian.blood = "O+";
guardian.contact = new Contact({ id: 1, email: "abc@gma.com", phone: 12345 });
console.log(guardian);
