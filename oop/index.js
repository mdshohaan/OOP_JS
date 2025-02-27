const Guardian = require("./person/Guardian");
const Student = require("./person/Student");
const Contact = require("./contact/Contact");
const Address = require("./contact/Address");
const Department = require("./university/Department");
const Subject = require("./university/Subject");

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

//console.log(guardian.contact + ""); // console.log(guardian.contact.toString());[same output shows]

// Student ID:1
const student = new Student(1, "rofiq", "ST001", guardian);
student.blood = "O-";
student.contact = new Contact({
  id: 1,
  email: "zzz@gmail.com",
  phone: 111111,
  alternativePhone: student.guardian.contact.phone,
  address: student.guardian.contact.address,
});

const department = new Department({ id: 1, name: "SWE" });
student.department = department;
department.subjects = [
  new Subject(1, "computer", 4),
  new Subject(2, "ICT", 5),
  new Subject(3, "Math", 3),
];
console.log(student);
