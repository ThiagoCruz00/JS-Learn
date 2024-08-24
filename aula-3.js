// Aula 3 JS

// function SomaNumeros(){
//     soma = 2 + 2
//     return console.log(soma)
// }

// SomaNumeros()


// function SomaNumero(){
//     return 2 + 2
// }

// console.log((SomaNumero))


// Função de Adição
function SomaNumeros(numeroOne, numeroTwo){
    return numeroOne + numeroTwo
}

// console.log(SomaNumeros(10, 20))



// Função de Subtração
function SubNumeros(numeroOne,numeroTwo){
    return numeroOne - numeroTwo
}

console.log(SubNumeros(20, 10))


// Função de Multiplicação
function MulNumeros(numeroOne, numeroTwo){
    return numeroOne * numeroTwo
}

console.log(MulNumeros(10, 10))



const person = {
    name: "Thiago",
    age: 17,
    gender: "male"
}

// console.log(person.name)
// console.log(person.age)
// console.log(person.gender)

const {age, name, gender} = person

console.log(name)
console.log(age)
console.log(gender)