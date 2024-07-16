//declares the variable kelvin 
const kelvin = 0;

//finds temp in celcius
const celsius = kelvin - 273;

//converts celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//rounds down the fahrenheit temp
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

let newton = celsius * (33/100);

newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton`);
