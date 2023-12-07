/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise<T>(data: T[]) {
  return new Promise((resolve) => {
    resolve(data);
  });
}

getPromise<string[]>([])
.then((data) => {
  console.log(data); 
});

getPromise<number[]>([])
.then((data) => {
  console.log(data); 
});

export {};