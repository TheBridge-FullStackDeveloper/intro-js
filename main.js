// console.log("Probando mi archivo js")
// console.error("Esto es un error");
// console.warn("Esto es una alerta!!!");

// alert("Esto es un mensaje!!")
// var variable ="Variable!!!" //creo y asigno valor
// variable="No soy una variable"//reasignado valor
// console.log(variable)
// var number //inicializar variable
// number = 10 //asignar valor a la variable
// var number = 20
// console.log(number)
// let nombre = "Rubén"
// nombre = 'Renzo'
// console.log(nombre)

const name = "Sofía";
const age = 32;
const isCool = true;
const x = null;
const y = undefined;
let z; // undefined

// console.log(typeof z)
// console.log("Mi nombre es " + name + " tengo " + age + " años");
// //template literal
// console.log(`Mi nombre es ${name} tengo ${age} años`);

const s = "Hello World";
let val;
val = s.length;

val = s.toUpperCase();
val = s.toLowerCase();
val = s.substring(0, 5);

val = s.split(" ", 3);
// console.log(val)

//**Arrays */
const numbers = [1, 2, 3, 7, 5];
const fruits = ["apples", "oranges", "pears", "grapes"];
const numbersAndFruits = ["apples", "oranges", "pears", 2, 3, 7, true];

// console.log(numbers[3]);
// console.log(fruits[2]);
// console.log(numbersAndFruits[numbersAndFruits.length - 1]);
// console.log(numbers);

fruits[4] = "blueberries";
fruits.push("strawberrys"); //añade valor al final
//añade valor al principio
// fruits[0]=undefined
fruits.unshift("Mangos");
//quita el ultimo valor
fruits.pop();
// console.log(fruits.indexOf("grapes"))

const person = {
  name: "Edu",
  age: 30,
  hobbies: [
    "music",
    "movies",
    [
      { name: "Pádel", fav: 1 },
      { name: "Fútbol", fav: 3 },
      { name: "Basket", fav: 2 },
    ],
  ],
  address: {
    street: "50 Main st",
    city: "Boston",
    state: "MA",
  },
};
person.email ="edu@gmail.com"
person.age =20
console.log(person)
console.log(person.hobbies[2][2].fav)
// console.log(person.name);
// console.log(person["name"]);
// console.log(person.age)
// console.log(person.hobbies[2][1].name)
// console.log(person.hobbies[1]);
// console.log(person.address.city)
// console.log(person.hobbies[2][2]);
