const _id = Symbol("id");
const _email = Symbol("email");
const _phone = Symbol("phone");
const _alternativePhone = Symbol("alternativePhone");
const _address = Symbol("address");
class Contact {
  constructor({ id, email, phone, alternativePhone, address }) {
    this[_id] = id;
    this[_email] = email || "";
    this[_phone] = phone || "";
    this[_alternativePhone] = alternativePhone || "";
    this[_address] = address || null;
  }
}
module.exports = Contact;
