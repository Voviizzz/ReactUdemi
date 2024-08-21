var a = 10;
var b = "20";
// let c = true;
// БУдет ошибка
// let d = a + c
//Тут только массив строк, другие типы не поддерживаются
var d = ["1", "2", "3"];
//крайне не рекомендуется использовать в продашнке
var e = 3;
e = 'test';
//принимает значение а в виде строки и вернет строку
//данная функция может вернуть либо строку, либо числовое значение
function test(a) {
    return '';
}
//Стрелочная функция
var test2 = function (a) {
    return '';
};
//Типизация MAP
d = d.map(function (g) { return g.toLowerCase(); });
//Типизация функции  с необязательно переменной
function countCoords(coord) {
}
//Обеспечиваем безопасность наших типов
function printIt(id) {
    if (typeof id === 'number') {
        console.log(id.toString());
    }
    else if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
}
//Типизация union типа
function getSum(a) {
    if (Array.isArray(a)) {
        return a.reduce(function (a, b) { return a + b; }, 0);
    }
    return a;
}
//Типизация undefined и null
var x = undefined;
var l = null;
//Типизация void
function test3() {
    var a;
    return a;
}
