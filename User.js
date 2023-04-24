class User {

  constructor(email, password, firstname, lastname, birthdate) {
    this.email = email
    this.password = password
    this.firstname = firstname
    this.lastname = lastname
    this.birthdate = birthdate
  }

  get email () {
    return this.email
  }

  set email (value) {
    this.email = value
  }

  get firstname () {
    return this.firstname
  }

  set firstname (value) {
    this.firstname = value
  }

  get password () {
    return this.password
  }

  set password (value) {
    this.password = value
  }

  get lastname () {
    return this.lastname
  }

  set lastname (value) {
    this.lastname = value
  }

  get birthdate () {
    return this.birthdate
  }

  set birthdate (value) {
    this.birthdate = value
  }

  isValid() {
    if (this.firstname !== undefined && this.lastname !== undefined) {
      let today = new Date();
      console.log(today);
      let age = today.getFullYear() - this.birthdate.getFullYear();
      if (age >= 13) {
        return true
      }
    }
  }

}

module.exports = User;
