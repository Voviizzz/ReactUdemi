//Полезно использовать для ограничения значений какой-то переменной 

enum Direction {
   Up = "Up", //0, по умолчанию 
   Down = "Down", //1
   Left = "Left", //2
   Right = "Right" //3

}

//Гитерогенные Enums (часть значений чсловые, часть тсройовые) 
enum Decsision {
   Yes = 1,
   No = "No",
   Maybe = calcEnum() //расчитывается в функции, только числовые  

}

function calcEnum() {
   return 2
}


//Enums в функциях как объект
function runEnum(obj: {
   Up: string
}) {

}

runEnum(Direction)

//обратный маппинг, когда получаем строковое значение некоторого из Enums

enum TestEnum {
   A
}
let TestEnums = TestEnum.A
let nameA = TestEnum[TestEnums] //A

const enum ConstEnum {
   A,
   B
}

let c = ConstEnum.A

//NEVER

//есть монетка, 1 или 2, но что если добавим 3 значение ? будет ошибка
enum Dice {
   One = 1,
   Two,
   Three
}
//ЧТобы ее исправить 
function calcDice(dice: Dice) {
   switch (dice) {
      case Dice.One:
         return 'Один';
      case Dice.Two:
         return 'Два';
      case Dice.Three:
         return 'Три';
      //Позволяет отловить ошибку 
      default:
         const m: never = dice
   }
}
