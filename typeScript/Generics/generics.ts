// Код,  который можно переиспользовать - одно из интсурментов - generics
// Позволяют использовать фунции для разных типов данных

function logTime(num: number): number {
   console.log(new Date());
   return num;
}


// <T> это generigcs
//Допустим нам нужна точно такая же фунуция, как logTime, только принимать и возвращать мы будем не number, a string
// Напишем эту функцию через generics

function logTimeGenerics<T>(num: T): T {
   console.log(new Date());
   return num;
}
// TypeGuard
function logTimeGenericsTypeGuard<T>(num: T): T {
   if (typeof num === 'string') {
      num.toLocaleUpperCase()
   }
   return num;
}
logTimeGenerics<string>('hello');
logTimeGenerics<number>(123);


// Generics в интерфейсах
interface myInterface {
   transform: <T, F>(value: T) => F
}

// class в generics
class myClass<T> {
   name: T

}
const a = new myClass<string>()


interface myInterfaceGenerics {
   stamp: number;
}


// Generics в функциях наследует у интерфейса значние stamp
function myFunction<T extends myInterfaceGenerics>(value: T): T {
   console.log(value.stamp); 
   return value
}