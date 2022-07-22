// 2
// console.log(numbers)


// exercicio 2 
// let soma = 0;
// for (index = 0; index < numbers.length; index +=1 )
// soma += numbers[index];
// console;console.log(soma);

// exercicio3
// let soma = 0;
//     for (index = 0; index < numbers.length; index +=1 )
//        soma += numbers[index];

// let media = soma / numbers.length;
// console.log(media);        

// exercicio 4
// let soma = 0;
//     for (index = 0; index < numbers.length; index +=1 )
//        soma += numbers[index];

// let media = soma / numbers.length;
// if (media > 20) {
//     console.log("Valor maior que 20");
// } else {
    //     console.log("valor menor ou igual a 20")
// }

// exercicio 5
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maior = 0;
// for (let index = 0;  index < numbers.length; index += 1) {
//     for (let index2 = 0; index2 < numbers.length; index2 += 1) {
//         if (numbers[index] > numbers[index2] && numbers[index] > maior) {
//             maior = numbers[index];
//         }
//     }
// }
// console.log(maior)

// exercicio 6
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let impar = [];
//     for (let index = 0; index < numbers.length; index += 1) {
//         if (numbers[index] % 2 == 1) {
//             impar.push(numbers[index]);
//         } 
//     } 
//     console.log(impar);
// if (impar = 0 ) {
//     console.log("nenhum valor impar encontrado")
//     }

// exercicio 7
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menor = 3213213132132;
// for (let index = 0;  index < numbers.length; index += 1) {
//     for (let index2 = 0; index2 < numbers.length; index2 += 1) {
//         if (numbers[index] < numbers[index2] && numbers[index] < menor) {
//             menor = numbers[index];
//         }
//     }
// }
// console.log(menor)

// exercicio 8
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let _1a25 = [];
// for (let index = 0;  index < numbers.length; index += 1) {
//         if (numbers[index] < 25) {
//             _1a25.push(numbers[index]);
//         }
//     }
// console.log(_1a25);

// exercicio 9
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let _1a25 = [];
for (let index = 0;  index < numbers.length; index += 1) {
        if (numbers[index] < 25) {
            _1a25.push(numbers[index]);
        }
    }
let _1a25dividido2 = [];    
for (i = 0; i < _1a25.length; i +=1 ) {
    _1a25dividido2.push(_1a25[i] / 2)
}
console.log(_1a25dividido2);
