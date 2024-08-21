
//Интерфейсы и типы
// Тип поинт
type Point = { x: number, y: number };

//Либо строка либо число
type stringOrNumber = string | number;

interface IPoint {
   x: number;
   y: number;
   //Тут можно добавить методы   
}

//Отличие интерфейсов от типов
//наследует Ipoint
interface I3DPoint extends IPoint {
   z: number
}

// В типах то же самое, что выше 
type D3Point = IPoint & {
   z: number
}

// что недоступно типам - это добавление свойств

interface test {
   a: string
}

interface test {
   b: number
}

// Доступно свойства и а и b => интерфейсы можем доплнять
// Если сделать это типом - будет ошибка

function print(coord: Point) { }

const c = (point: Point) => {
   const d: I3DPoint = point as I3DPoint
}
//Каст к определенному типу
const myCanvas = document.getElementById('main-canvas') as HTMLCanvasElement