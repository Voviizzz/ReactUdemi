//Литеральные типы
//j может принимать только значения test
let j: 'test' = 'test'

type actionType = 'up' | 'down' | 'left' | 'right'

//Типизируем функцию с помощью литерального типа
//Ограничили строковые значения с помощью литерального типа
function performAction(action: actionType | ComplexAction): -1 | 1 | 0 | undefined {
   switch (action) {
      case 'up':
         return 1
      case 'down':
         console.log('down')
         return -1
      case 'left':
         console.log('left')
         return 0
      case 'right':
         console.log('right')
         return undefined
   }

}

//Комбинация литерального типа и interface

interface ComplexAction {
   s: string;
}