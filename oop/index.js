const Guardian = require("./person/Guardian");
const Contact = require("./contact/Contact");
const Address = require("./contact/Address");

// guardian ID:1
const guardian = new Guardian(1, "arif", "Teacher", 500);
guardian.blood = "O+";
guardian.contact = new Contact({ id: 1, email: "abc@gma.com", phone: 12345 });
guardian.contact.address = new Address({
  id: 1,
  roadNo: 12,
  city: "CTG",
  region: "BD",
  country: "Bangladesh",
  postalCode: 1200,
});
//console.log(guardian.toString());
//console.log(guardian.contact + ""); // console.log(guardian.contact.toString());[same output shows]
