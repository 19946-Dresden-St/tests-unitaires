class User {

  constructor(email, password, firstname, lastname, birthdate, todolist) {
    this.email = email
    this.password = password
    this.firstname = firstname
    this.lastname = lastname
    this.birthdate = birthdate
    this.todolist = todolist
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = value;
  }

  get firstname() {
    return this._firstname;
  }

  set firstname(value) {
    this._firstname = value;
  }

  get lastname() {
    return this._lastname;
  }

  set lastname(value) {
    this._lastname = value;
  }

  get birthdate() {
    return this._birthdate;
  }

  set birthdate(value) {
    this._birthdate = value;
  }

  get todolist() {
    return this._todolist;
  }

  set todolist(value) {
    this._todolist = value;
  }

  isEmailValid() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.email !== undefined && regex.test(this.email)) {
      return true;
    }
  }

  isPasswordValid() {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,40}$/;
    if (this.password !== undefined && regex.test(this.password)) {
      return true;
    }
  }

  isNameValid() {
    const regex = /^[a-zA-ZÀ-ÿ'\s-]{1,40}$/;
    if ((this.firstname !== undefined && regex.test(this.firstname)) &&
       (this.lastname !== undefined && regex.test(this.lastname))) {
      return true;
    }
  }

  isAgeValid() {
    return true;
  }

}

module.exports = User;
