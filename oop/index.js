const Guardian = require("./person/Guardian");
const Student = require("./person/Student.js");
const Contact = require("./contact/Contact");
const Address = require("./contact/Address");

// Guardian ID:1
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

// Student ID:1
const student = new Student(1, "rofiq", 'ST001', guardian);
student.blood = "O-"
student.contact = new Contact({
  id:1,
  email:"zzz@gmail.com",
  phone:111111,
  alternativePhone:student.guardian.contact.phone,
  address:student.guardian.contact.address
})
console.log(student.contact.toString());
// ID:1,
// Email:zzz@gmail.com,
// Phone:111111,
// AlternativePhone12345,
// Address:
// ID:1,
// RoadNo:12,
// City:CTG,
// RegionBD,
// Country:Bangladesh,
// PostalCode1200,
