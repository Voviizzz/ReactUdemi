//Полезно использовать для ограничения значений какой-то переменной 
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right"; //3
})(Direction || (Direction = {}));
//Гитерогенные Enums (часть значений чсловые, часть тсройовые) 
var Decsision;
(function (Decsision) {
    Decsision[Decsision["Yes"] = 1] = "Yes";
    Decsision["No"] = "No";
    Decsision[Decsision["Maybe"] = calcEnum()] = "Maybe"; //расчитывается в функции, только числовые  
})(Decsision || (Decsision = {}));
function calcEnum() {
    return 2;
}
//Enums в функциях как объект
function runEnum(obj) {
}
runEnum(Direction);
//обратный маппинг, когда получаем строковое значение некоторого из Enums
var TestEnum;
(function (TestEnum) {
    TestEnum[TestEnum["A"] = 0] = "A";
})(TestEnum || (TestEnum = {}));
var TestEnums = TestEnum.A;
var nameA = TestEnum[TestEnums]; //A
var c = 0 /* ConstEnum.A */;
