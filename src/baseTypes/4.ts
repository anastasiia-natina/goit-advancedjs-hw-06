/*
  Як переписати його в TypeScript, використовуючи концепцію кортежів, 
  щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?
*/
type Person = {
  name: string;
  age: number;
}
let person: Person[] = [{ name: 'Max', age: 21 }];

export {};