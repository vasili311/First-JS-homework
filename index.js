// TASK 1:

   function twoNumberEqual(a, b) {
    if (a === b){
        return "Equal"
    } else {
        return "Not Equal"

    }
}

console.log (twoNumberEqual(3, 3 )); // Equal
console.log (twoNumberEqual(5, 6 )); // Not Equal


// TASk 2:

function convertFahrenheitToCelsius(temperature) {
	
	return (temperature - 32) * (5/9)
}


let theirInput = prompt("Enter in a Fahrenheit temperature & I'll convert it to Celsius");

let result = convertFahrenheitToCelsius(theirInput);


alert(result);



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
