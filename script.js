//create let
let a = 10;

//create functions
function increment({ numero }) {//pedindo parametro nomeado
    return numero + 1;
}

const add = (a) => console.log(a + 2); //não nomeado e jogando em const

console.log(increment({ numero: 4 }));//

add(a);

// filter array

const array = [4, 6, 9, 8, 1]

let filterNumber = array.filter((number) => {
    return number > 5
})

console.log(filterNumber)

const users = [
    { name: "Felipe", age: 20 },
    { name: "joão", age: 17 },
]

function filterUsers(user) {
    return user.age > 18 ? user.name : null
}

const filterAdult = users.filter((user) => filterUsers(user))

console.log(filterAdult)

//concatenando

const username = "felipe";
const age = 20

console.log("My name is " + username + " and i have " + age + " age old")

//juntando array

const lista1 = [1, 2, 3]
const lista2 = [4, 5, 6]

const listaCompleta = [...lista1, ...lista2]
const listaMidSpreadOperator = [0, ...lista1, 4]

console.log(listaCompleta)
console.log(listaMidSpreadOperator)

class Product {
    constructor({ name, price }) {
        this.age = price;
        this.name = name;
    }

    discountPercentage({ discount }) {
        return this.price * ((100 - discount) / 100);
    }
}

const shirt = new Product({ price: 10, name: "shirt" });

console.log(shirt.discountPercentage(10))
console.log(shirt.name)

class ProductAttributes extends Product {
    constructor(name, price, colors) {
        super(price, name)
        this.colors = colors;
    }

    showColors() {
        console.log("\n\nEssas são as opções de cores: ")
        this.colors.forEach(element => {
            console.log(element)
        });
    }
}

const hat = new ProductAttributes("hat", 20, ['red', 'black', 'green'])

hat.showColors();