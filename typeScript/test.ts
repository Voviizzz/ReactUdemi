let a: number = 10;
let b: string = "20";
let c = true;
// БУдет ошибка
// let d = a + c

//Тут только массив строк, другие типы не поддерживаются
let d: string[] = ["1", "2", "3"];
//крайне не рекомендуется использовать в продашнке
let e: any = 3
e = 'test'

//принимает значение а в виде строки и вернет строку
//данная функция может вернуть либо строку, либо числовое значение
function test(a: string): number | string {
   return '';
}

//Стрелочная функция
const test2 = (a: string): string => {
   return '';
};

//Типизация MAP
d = d.map((g: string) => g.toLowerCase())

//Типизация функции  с необязательно переменной
function countCoords(coord: { lat: number, llong?: number | undefined }) {

}

//Обеспечиваем безопасность наших типов
function printIt(id: number | string) {
   if (typeof id === 'number') {
      console.log(id.toString());
   } else if (typeof id === 'string') {
      console.log(id.toUpperCase());
   }
}

//Типизация union типа
function getSum(a: number | number[]) {
   if (Array.isArray(a)) {
      return a.reduce((a, b) => a + b, 0)
   }
   return a
}

//Типизация undefined и null
const x: undefined = undefined
const l: null = null