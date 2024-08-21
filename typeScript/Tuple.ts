//Tuple - Кортеж
//В рамках кортежа сохраняется порядок и значения
const o: [number, string, boolean] = [1, '2', true];

//удобно хранить разные данные, которые относят к объекту

o.map(s => {
   switch (typeof s) {
      case 'number':
         return s.toString();
      case 'string':
         return s.toUpperCase();
      default:
         return s;
   }
})


//Деструктурировать кортежи
const [one, ...rest] = o;