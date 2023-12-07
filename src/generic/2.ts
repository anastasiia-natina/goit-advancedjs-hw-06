/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare<T extends AllType>(top: T, bottom: T): AllType {
  const result: Pick<T, keyof AllType> = {
    name: top.name || bottom.name,
    position: top.position || bottom.position,
    color: top.color || bottom.color,
    weight: top.weight || bottom.weight,
  };

  return result;
}

export {};