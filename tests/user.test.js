const User = require('../User');
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

