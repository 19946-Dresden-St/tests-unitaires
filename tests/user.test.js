const User = require('../User.js');
const { describe, test, expect } = require('@jest/globals');

const user = new User('izia.crinier@gmail.com', 'azeAZE123', 'Izïa', 'CRINIER', new Date("1996-04-24T10:27:33.510Z"));

describe("Test de validation d'une adresse mail", () => {
  test("isEmailValid", () => {
    expect(user.isEmailValid()).toBe(true);
  });
  test("isPasswordValid", () => {
    expect(user.isPasswordValid()).toBe(true);
  });
  test("isNameValid", () => {
    expect(user.isNameValid()).toBe(true);
  });
  test("isAgeValid", () => {
    expect(user.isAgeValid()).toBe(true);
  });
});

//another test

const user_second = new User('alber.deterre@d.com', 'azeAZE123', 'albert', 'detrerre', new Date("1896-04-24T10:27:33.510Z"));

  

describe("Test de validation des infos d'un user", () => {
  test("isEmailValid", () => {
    expect(user_second.isEmailValid()).toBe(true);
  }
  );
  test("isPasswordValid", () => {
    expect(user_second.isPasswordValid()).toBe(true);
  }
  );
  test("isNameValid", () => {
    expect(user_second.isNameValid()).toBe(true);
  }
  );
  test("isAgeValid", () => {
    expect(user_second.isAgeValid()).toBe(true);
  });
  test("isBirthdateValid", () => {
    expect(user_second.isBirthdateValid()).toBe(true);
  });
});
