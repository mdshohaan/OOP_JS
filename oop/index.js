const Guardian = require("./person/Guardian");
const Teacher = require("./person/Teacher");
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
const credit = student.department.subjects.reduce((acc, curr) => {
  acc = acc + curr.credit;
  return acc;
}, 0);
//console.log(credit);

// Teachers
const dean = new Teacher(1, "biplob", department.subjects[0], "EMP001");
dean.blood = "A+";
dean.department = department;
dean.salary = 10000;
dean.contact = new Contact({
  id: 3,
  email: "abc@gmail.com",
  phone: 1234856,
  address: new Address({
    id: 2,
    roadNo: 12,
    city: "CTG",
    region: "Bd",
    country: "Bangladesh",
    postalCode: 1200,
  }),
});

// TODO: update deans information
const teacher1 = new Teacher(1, "Afzal", department.subjects[1], "EMP002");
teacher1.blood = "A+";
teacher1.department = department;
teacher1.salary = 10000;
teacher1.contact = new Contact({
  id: 4,
  email: "abczxc@gmail.com",
  phone: 1234856,
  address: new Address({
    id: 3,
    roadNo: 12,
    city: "CTG",
    region: "Bd",
    country: "Bangladesh",
    postalCode: 1200,
  }),
});

const teacher2 = new Teacher(2, "Akram", department.subjects[2], "EMP003");
teacher2.blood = "B+";
teacher2.department = department;
teacher2.salary = 10000;
teacher2.contact = new Contact({
  id: 5,
  email: "addddc@gmail.com",
  phone: 1234856,
  address: new Address({
    id: 4,
    roadNo: 12,
    city: "CTG",
    region: "Bd",
    country: "Bangladesh",
    postalCode: 1200,
  }),
});

department.dean = dean;
department.addTeacher(dean);
department.addTeacher(teacher1);
department.addTeacher(teacher2);
// console.log(student.department);
student.department.teachers.forEach((teacher, idx) => {
  console.log(`${idx + 1},${teacher.name},${teacher.subject.name}`);
});
console.log(dean.department);
const teacherSalary = department.teachers.reduce((acc, curr) => {
  acc += curr.salary;
  return acc;
}, 0);
console.log("Teacher salary",teacherSalary);
