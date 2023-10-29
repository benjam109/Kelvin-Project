// KELVIN PROJECT 

const kelvin = 293;
// ^ the variable for kelvin is 293. I used const. because the value will stay constant.

var celsius = (kelvin -= 273);
console.log(celsius);
// ^the variable celsius is 273 less than the variable kelvin.

var fahrenheit = celsius * (9/5) + 32;
console.log(fahrenheit);
// ^the variable fahrenheit has the value of the equation above.

console.log(Math.floor(fahrenheit));
// ^using Math.floor to find the whole number rounded down from its decimal point.

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);


const kelvin = 0;

var celsius = (kelvin -= 273);
console.log(celsius);

var fahrenheit = celsius * (9/5) + 32;
console.log(fahrenheit);

console.log(Math.floor(fahrenheit));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

var newton = celsius * (33/100)
console.log(Math.floor(newton));
