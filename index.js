// TASK 1:

   const twoNumber = function (a, b) {
      if (a == b) {
          console.log(ტოლია);
          return "ეს ორი რიცხვი ტოლია";
      } else {
          console.log(არარისტოლი);
          return "ეს ორი რიცხვი არ არის ტოლი";
      }
  }

 twoNumber(4,2)


// TASK 3:

function newCalculateoperation(a, b, operation) {
    if (typeof a != "number" || typeof b != 'number'){
        return false;
    }
    if (operation === '+') return a + b;
    else if (operation === '-') return a - b;
    else if (operation === '*') return a * b;
    else if (operation === '/') return a / b;

}
console.log(calculate(3,3,"+")) // 6
console.log(calculate (4,2,"-")) // 2
console.log(calculate(3,2,"*")) // 6
console.log(calculate (6,2,"/")) // 3
console.log(calculate(c,3,"+")) // false
