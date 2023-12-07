/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

type myGender = {'male', 'female'};
let myGender: 'male' | 'female';
export {};
