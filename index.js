//RESUELVE LOS EJERCICIOS AQUI
//1º
let numbers = [4, 5, 6, 7, 8, 9, 10];
function elevados(){return numbers.map(currentValue => currentValue**currentValue)}
console.log(elevados(numbers));

//2º
let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
let result2 = foodList.map((food, index) => {
    if (index==0){
        food = `Como soy de Italia, amo comer ${food}`;
    } else if (index==1){
        food = `Como soy de Japón, amo comer ${food}`;
    } else if (index==2){
        food = `Como soy de Valencia, amo comer ${food}`;
    } else {
        food = `Aunque no como carne, el ${food} es sabroso`;
    }
    return food
});
console.log(result2)

//otra forma:
// const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
// const result2 = foodList.map((value) => 
//     value == 'Pizza'? 'Como soy de Italia, amo comer Pizza'
//     :value == 'Ramen'? 'Como soy de Japón, amo comer Ramen'
//     :value == 'Paella'?'Como soy de Valencia, amo comer Paella'
//     :value == 'Entrecot'?'Aunque no como carne, el Entrecot es sabroso'
//     :"Error"
// ) 


//3º
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = numbers2.filter(num => num % 2 != 0);
console.log(result4)

//4º
const staff = [
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
];


let result3 = staff.map((staff) => `${staff.name} es ${staff.role} y le gusta ${staff.hobbies[0]} y ${staff.hobbies[1]}`);
console.log(result3)

//5º
const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a Cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
  ];

// let expensiveItem = inventory.filter(item => item.price > 300);
// console.log(expensiveItem)

let result6 = (inventory.filter(item => item.price > 300)).map(item => item.name);
console.log(result6)

//6º
let numeros3 = [39, 2, 4, 25, 62];
let result7 = numeros3.reduce((acc, num) => acc *= num);
console.log(result7)


//7º
const sentenceElements = [
    'Me',
    'llamo',
    "Jorge",
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
  ];

let result8 = sentenceElements.reduce((acc, item) => acc += ` ${item}`)
console.log(result8)

//8º 
const books = [
    {
      name: ' JS for dummies',
      author: 'Emily A. Vander Veer',
      price: 20,
      category: 'code'
    },
    {
      name: 'Don Quijote de la Mancha',
      author: 'Cervantes',
      price: 14,
      category: 'novel'
    },
    {
      name: 'Juego de tronos',
      author: 'George R. Martin',
      price: 32,
      category: 'Fantasy'
    },
    {
      name: 'javascript the good parts',
      author: 'Douglas Crockford',
      price: 40,
      category: 'code'
    }
  ];

  let result9 = books
                        .filter(item => item.category == "code")
                        .map(item => item.price)
                        .reduce((acc, item) => acc += item)
  console.log(result9)

//9º
  const foodList2 =[
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }];


let result5 = foodList2.filter(item => item.isVeggie == true).map((item, index) => index == 0 ? `Que rico ${item.name} me voy a comer!` : `Que rica ${item.name} me voy a comer!`); 
console.log(result5);
