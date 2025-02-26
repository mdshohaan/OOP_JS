const _id = symbol("id");
const _name = symbol("name");
const _blood = symbol("blood");
const _contact = symbol("contact");

class Person {
  constructor(id, name) {
    this[_id] = id;
    this[_name] = name;
    this[_blood] = null;
    this[_contact] = null;
  }
  get id() {
    return this[_id];
  }
  get name() {
    return this[_name];
  }
  set name(value) {
    this[_name] = value;
  }
  get blood() {
    return this[_blood];
  }
  set blood(value) {
    this[_blood] = value;
  }
  get contact() {
    return this[_contact];
  }
  set contact(value) {
    this[_contact] = value;
  }
}
